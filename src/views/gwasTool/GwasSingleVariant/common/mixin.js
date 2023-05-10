// import Api from 'src/api'
// import Loading from 'cngbdb-ui/lib/utils/loading'
import MetaMixin from './meta'

export default {
  name: 'GwasSingleVariant',
  data() {
    return {
      // isIE: this.$q.platform.is.ie,
      isIE:false,
      variant: '',
      variantOpts: [],
      genes: [],
      phewas: [],
      isNoResult: false,
      start: '',
      end: '',
      chr: '',
    }
  },
  meta() {
    const metaInfo = MetaMixin.meta.apply(this)
    console.log("xx",MetaMixin)
    return Object.assign(
      {
        script: {
          d3: { type: 'text/javascript', src: 'd3.v5.min.js' },
          locuszoom: { type: 'text/javascript', src: 'locuszoom.app.min.js' },
        },
        link: {
          locuszoom: { rel: 'stylesheet', href: 'locuszoom.css' },
        },
      },
      metaInfo
    )
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
    variantFilterFn(val, update) {
      Loading.show()
      Api.getGwasSingleVariantOptions({
        filters: JSON.stringify([{ field: 'vid', rule: 'contain', value: val, operator: 'and' }]),
      })
        .then(response => {
          update(() => {
            this.variantOpts = response.data
          })
        })
        .catch(error => {
          console.log(error)
          update(() => {
            this.geneOptions = []
          })
        })
        .finally(() => {
          Loading.hide()
        })
    },
    selectVariant(val) {
      let value = val
      this.getVariantData(value)
    },
    getVariantData(val) {
      Loading.show()
      this.isNoResult = false
      let phewasParams = {
        filters: JSON.stringify([{ field: 'vid', rule: 'exact', value: val, operator: 'and' }]),
      }
      Api.getGwasSingleVariantPheno(phewasParams)
        .then(response => {
          this.phewas = response.data.phewas
          this.position = response.data.position
          if (this.phewas.length === 0) {
            //如果可视化上半部分数据为空，则显示文案，并停止可视化渲染步骤
            this.isNoResult = true
            Loading.hide()
            let box = document.getElementById('plot')
            box.innerHTML = ''
            return
          }
          this.chr = response.data.phewas[0].chromosome
          let start = this.position - 500000 > 0 ? this.position - 500000 : 0
          let end = this.position + 500000
          let genesParams = {
            filters: JSON.stringify([
              { field: 'start', rule: 'min', value: start, operator: 'and' },
              { field: 'end', rule: 'max', value: end, operator: 'and' },
              { field: 'chr', rule: 'exact', value: this.chr, operator: 'and' },
            ]),
          }
          Api.getGwasSingleVariantGenes(genesParams).then(response => {
            this.genes = response.data.genes
            Loading.hide()
            window.plot_model = {}
            this.renderVariantViewer(this.position, start, end, this.genes, this.phewas)
          })
        })
        .catch(error => {
          Loading.hide()
          console.log(error)
        })
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
    renderChangeData(data) {
      if (this.chr !== window.plot_model.chr) return
      Loading.show()
      let params = {
        filters: JSON.stringify([
          { field: 'start', rule: 'min', value: data.start, operator: 'and' },
          { field: 'end', rule: 'max', value: data.end, operator: 'and' },
          { field: 'chr', rule: 'exact', value: 'chr6', operator: 'and' },
        ]),
      }
      Api.getGwasSingleVariantGenes(params).then(response => {
        this.genes = response.data.genes
        Loading.hide()
        this.renderVariantViewer(this.position, data.start, data.end, this.genes, this.phewas)
      })
    },
  },
  mounted() {
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
  },
}
