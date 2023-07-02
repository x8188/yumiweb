// import Api from 'src/api'
// import Loading from 'cngbdb-ui/lib/utils/loading'
import MetaMixin from './meta'

export default {
  name: 'GwasSingleVariant',
  data() {
    return {
      // isIE: this.$q.platform.is.ie,
      isIE: false,
      variant: '',
      variantOpts: [],
      genes: [],
      phewas: [],
      isNoResult: false,
      start: 0,
      end: 0,
      chr: '',

      loading: false,
      position: 0
    }
  },
  // meta() {
  //   const metaInfo = MetaMixin.meta.apply(this)
  //   console.log("xx",MetaMixin)
  //   return Object.assign(
  //     {
  //       script: {
  //         d3: { type: 'text/javascript', src: 'd3.v5.min.js' },
  //         locuszoom: { type: 'text/javascript', src: 'locuszoom.app.min.js' },
  //       },
  //       link: {
  //         locuszoom: { rel: 'stylesheet', href: 'locuszoom.css' },
  //       },
  //     },
  //     metaInfo
  //   )
  // },
  metaInfo() {
    return {
      title: "gwasSingleVariant",
      script: [
        { type: 'text/javascript', src: '/d3.v5.min.js' },
        { type: 'text/javascript', src: '/locuszoom.app.min.js' },
      ],
      link: [
        { rel: 'stylesheet', href: '/locuszoom.css' },
      ]
    }
  },
  computed: {
    // title() {
    //   return this.$t('gwasSingleVariant') + '-' + this.$t('zeamap')
    // },
    // locale() {
    //   return this.$root.$i18n.locale
    // },
  },
  methods: {
    // variantFilterFn(val, update) {
    //   // this.loading=true
    //   // Api.getGwasSingleVariantOptions({
    //   //   filters: JSON.stringify([{ field: 'vid', rule: 'contain', value: val, operator: 'and' }]),
    //   // })
    //   //   .then(response => {
    //   //     update(() => {
    //   //       this.variantOpts = response.data
    //   //     })
    //   //   })
    //   //   .catch(error => {
    //   //     console.log(error)
    //   //     update(() => {
    //   //       this.geneOptions = []
    //   //     })
    //   //   })
    //   //   .finally(() => {
    //   //     this.loading=false
    //   //   })
    // },
    async remoteMethod(query) {
      if (query !== "") {

        let res4 = await this.$API.singleVar.reqIDs(query);
        if (res4.code == 200) {
          this.variantOpts = res4.data.map((x) => ({
            label: x,
            value: x,
          }));
        }
        // this.formData.TraitId="null"

      } else {
        this.variantOpts = [];
      }
    },
    async IDsClear() {
      let res4 = await this.$API.singleVar.reqIDs("");
      if (res4.code == 200) {
        this.variantOpts = res4.data.map((x) => ({
          label: x,
          value: x,
        }));
      }
    },
    selectVariant(val) {
      let value = val
      this.getVariantData(value)
    },
    async getVariantData(val) {
      this.loading = true
      this.isNoResult = false
      // let phewasParams = {
      //   filters: JSON.stringify([{ field: 'vid', rule: 'exact', value: val, operator: 'and' }]),
      // }
      // Api.getGwasSingleVariantPheno(phewasParams)
      //   .then(response => {
      //     this.phewas = response.data.phewas
      //     this.position = response.data.position
      //     if (this.phewas.length === 0) {
      //       //如果可视化上半部分数据为空，则显示文案，并停止可视化渲染步骤
      //       this.isNoResult = true
      //       this.loading=false
      //       let box = document.getElementById('plot')
      //       box.innerHTML = ''
      //       return
      //     }
      //     this.chr = response.data.phewas[0].chromosome
      //     let start = this.position - 500000 > 0 ? this.position - 500000 : 0
      //     let end = this.position + 500000
      //     let genesParams = {
      //       filters: JSON.stringify([
      //         { field: 'start', rule: 'min', value: start, operator: 'and' },
      //         { field: 'end', rule: 'max', value: end, operator: 'and' },
      //         { field: 'chr', rule: 'exact', value: this.chr, operator: 'and' },
      //       ]),
      //     }
      //     Api.getGwasSingleVariantGenes(genesParams).then(response => {
      //       this.genes = response.data.genes
      //       this.loading=false
      //       window.plot_model = {}
      //       this.renderVariantViewer(this.position, start, end, this.genes, this.phewas)
      //     })
      //   })
      //   .catch(error => {
      //     this.loading=false
      //     console.log(error)
      //   })

      //在这里发第一个接口 。参数为基因名字
      let res = await this.$API.singleVar.reqPointChart(val)
      if (res.code == 200) {
        this.phewas = res.data.phewas
        this.position = res.data.position
      }
      if (this.phewas.length === 0) {

        //如果可视化上半部分数据为空，则显示文案，并停止可视化渲染步骤
        this.isNoResult = true
        this.loading = false
        let box = document.getElementById('plot')
        box.innerHTML = ''
        return
      }
      this.chr = this.phewas[0].chromosome
      let start = this.position - 500000 > 0 ? this.position - 500000 : 0
      let end = Number(this.position) + Number(500000)

      let chr = this.chr
      let data = { chr, start, end }
      let res1 = await this.$API.singleVar.reqGene(data)
      if (res1.code == 200) {
        this.genes = res1.genes
        this.loading = false
        window.plot_model = {}
        this.renderVariantViewer(this.position, start, end, this.genes, this.phewas)

      }
      //在这里发第二个接口 。参数是start end chr

    },
    renderVariantViewer(position, start, end, genes, phewas) {
      let dataSources = new window.LocusZoom.DataSources()
        //可视化上半部分phewas
        .add('phewas', ['PheWASLZ', { build: [''] }, phewas])
        //可视化下半部分gene
        .add('gene', ['GeneLZ', {}, genes])
        //必须添加constraint，否则报错，数据为空
        .add('constraint', ['GeneConstraintLZ', {}, {}])
      this.start = start
      this.end = end
      let mods = {
        state: {
          variant: 'variantForPlot',
          start: start,
          end: end,
          chr: this.chr,
        },
      }
      let layout = window.LocusZoom.Layouts.get('plot', 'standard_phewas', mods)
      window.LocusZoom.Layouts.mutate_attrs(layout, '$.panels[?(@.tag === "phewas")].margin.top', 32)
      window.LocusZoom.Layouts.mutate_attrs(layout, '$.panels[?(@.tag === "genes")].data_layers', old_layers =>
        old_layers.concat([
          {
            id: 'variant',
            type: 'orthogonal_line',
            orientation: 'vertical',
            offset: position,
            style: {
              stroke: '#FF3333',
              'stroke-width': '2px',
              'stroke-dasharray': '4px 4px',
            },
          },
        ])
      )
      //可视化上栏信息（title和下载）
      layout.toolbar.widgets = [
        { color: 'gray', position: 'left', title: '', type: 'title' },
        { color: 'gray', position: 'right', type: 'download', filename: `GWAS Single-Variant_${this.variant}.svg` },
      ]
      // 生成可视化
      let plot = window.LocusZoom.populate('#plot', dataSources, layout)
      plot.panels.phewas.setTitle('Variant: ' + this.variant)
    },
    async renderChangeData(data) {
      if (this.chr !== window.plot_model.chr) return
      this.loading = true
      // let params = {
      //   filters: JSON.stringify([
      //     { field: 'start', rule: 'min', value: data.start, operator: 'and' },
      //     { field: 'end', rule: 'max', value: data.end, operator: 'and' },
      //     { field: 'chr', rule: 'exact', value: 'chr6', operator: 'and' },
      //   ]),
      // }
      // Api.getGwasSingleVariantGenes(params).then(response => {
      //   this.genes = response.data.genes
      //   this.loading=false
      //   this.renderVariantViewer(this.position, data.start, data.end, this.genes, this.phewas)
      // })

      // 在这里发第二个接口。参数是start end chr
      let pa = { chr: 'chr1', start: data.start, end: data.end }
      let res1 = await this.$API.singleVar.reqGene(pa)
      if (res1.code == 200) {
        this.genes = res1.genes
        this.loading = false
        this.renderVariantViewer(this.position, data.start, data.end, this.genes, this.phewas)
      }
    },
  },
  async mounted() {
    // 由于meta中d3组件库加载总无法在locuszoom之前加载完成，故初始一个空的d3全局变量以防止locuszoom报错。
    window.d3 = {}

    // Api.getGwasSingleVariantOptions({
    //   filters: JSON.stringify([{ field: 'vid', rule: 'contain', value: '', operator: 'and' }]),
    // }).then(response => {
    //   this.variant = response.data[0]
    //   // 此处延迟执行的原因同上，此方法中需要使用locuszoom组件库。
    //   setTimeout(async () => {
    //     await this.getVariantData(this.variant)
    //     window['ChangeData'] = data => {
    //       this.renderChangeData(data)
    //     }
    //   }, 800)
    // })

    let res4 = await this.$API.singleVar.reqIDs("");
    if (res4.code == 200) {
      this.variantOpts = res4.data.map((x) => ({
        label: x,
        value: x,
      }));
    }
    this.variant = this.variantOpts[0].value
    this.variant="ZMPV01aSINC01P000001921"
    // 此处延迟执行的原因同上，此方法中需要使用locuszoom组件库。
    setTimeout(async () => {
      await this.getVariantData(this.variant)
      window['ChangeData'] = data => {
        this.renderChangeData(data)
      }
    }, 800)
  },
}
