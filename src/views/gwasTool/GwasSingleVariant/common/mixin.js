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
      start: '',
      end: '',
      chr: '',

      loading:false,
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
    variantFilterFn(val, update) {
      // this.loading=true
      // Api.getGwasSingleVariantOptions({
      //   filters: JSON.stringify([{ field: 'vid', rule: 'contain', value: val, operator: 'and' }]),
      // })
      //   .then(response => {
      //     update(() => {
      //       this.variantOpts = response.data
      //     })
      //   })
      //   .catch(error => {
      //     console.log(error)
      //     update(() => {
      //       this.geneOptions = []
      //     })
      //   })
      //   .finally(() => {
      //     this.loading=false
      //   })
    },
    selectVariant(val) {
      let value = val
      this.getVariantData(value)
    },
    getVariantData(val) {
      this.loading=true
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
      this.phewas = [
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.8939000368118286",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Agro2-Days_To_Pollen_BLUP",
          "trait_group": "days_to_pollen",
          "trait_label": "Agro2-Days_To_Pollen_BLUP",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.4601999521255493",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Agro2-Days_To_Silking_BLUP",
          "trait_group": "days_to_pollen",
          "trait_label": "Agro2-Days_To_Silking_BLUP",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.4220999479293823",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Agro2-Heading_Date_BLUP",
          "trait_group": "heading_date",
          "trait_label": "Agro2-Heading_Date_BLUP",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.13510000705719",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Agro2-Kernel_Length_BLUP",
          "trait_group": "Yeild",
          "trait_label": "Agro2-Kernel_Length_BLUP",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.332900047302246",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Agro2-Kernel_Weight_BLUP",
          "trait_group": "Yeild",
          "trait_label": "Agro2-Kernel_Weight_BLUP",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.6363999843597412",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Agro2-Leaf_Number_Below_Ear_BLUP",
          "trait_group": "Morphic",
          "trait_label": "Agro2-Leaf_Number_Below_Ear_BLUP",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.0166000127792358",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Agro-Earleafwidth",
          "trait_group": "Morphic",
          "trait_label": "Agro-Earleafwidth",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.0799000263214111",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Agro-Headingdate",
          "trait_group": "heading_date",
          "trait_label": "Agro-Headingdate",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.145300030708313",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Agro-Pollenshed",
          "trait_group": "heading_date",
          "trait_label": "Agro-Pollenshed",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "2.3619000911712646",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Disease-GLS_11DH",
          "trait_group": "GLS",
          "trait_label": "Disease-GLS_11DH",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.6125999689102173",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Flower-2011CQ-DA",
          "trait_group": "days_to_anthesis",
          "trait_label": "Flower-2011CQ-DA",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.6275999546051025",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Flower-2011CQ-DS",
          "trait_group": "days_to_silking",
          "trait_label": "Flower-2011CQ-DS",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.1883000135421753",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Flower-2011GX-DA",
          "trait_group": "days_to_anthesis",
          "trait_label": "Flower-2011GX-DA",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.1749000549316406",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Flower-2011GX-DS",
          "trait_group": "days_to_silking",
          "trait_label": "Flower-2011GX-DS",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.5324000120162964",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Flower-2011HN-DA",
          "trait_group": "days_to_anthesis",
          "trait_label": "Flower-2011HN-DA",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.1009999513626099",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Flower-2011HN-DS",
          "trait_group": "days_to_silking",
          "trait_label": "Flower-2011HN-DS",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.0920000076293945",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Flower-2011SC-DA",
          "trait_group": "days_to_anthesis",
          "trait_label": "Flower-2011SC-DA",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.9127000570297241",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Flower-2012BJ-DA",
          "trait_group": "days_to_anthesis",
          "trait_label": "Flower-2012BJ-DA",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.0401999950408936",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Flower-2012BJ-DS",
          "trait_group": "days_to_silking",
          "trait_label": "Flower-2012BJ-DS",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "2.2070000171661377",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Flower-2012BJ-DT",
          "trait_group": "days_to_tasseling",
          "trait_label": "Flower-2012BJ-DT",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.2340999841690063",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Flower-2012CQ-ASI",
          "trait_group": "anthesis_silk_interval",
          "trait_label": "Flower-2012CQ-ASI",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.9936000108718872",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Flower-2012CQ-DA",
          "trait_group": "days_to_anthesis",
          "trait_label": "Flower-2012CQ-DA",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "2.6142001152038574",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Flower-2012CQ-DS",
          "trait_group": "days_to_silking",
          "trait_label": "Flower-2012CQ-DS",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "2.0434999465942383",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Flower-2012CQ-DT",
          "trait_group": "days_to_tasseling",
          "trait_label": "Flower-2012CQ-DT",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.8997000455856323",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Flower-2012HB-DA",
          "trait_group": "days_to_anthesis",
          "trait_label": "Flower-2012HB-DA",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "2.1101999282836914",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Flower-2012HB-DS",
          "trait_group": "days_to_silking",
          "trait_label": "Flower-2012HB-DS",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.162500023841858",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Flower-2012HB-DT",
          "trait_group": "days_to_tasseling",
          "trait_label": "Flower-2012HB-DT",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.1045000553131104",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Flower-2012HN-ASI",
          "trait_group": "anthesis_silk_interval",
          "trait_label": "Flower-2012HN-ASI",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.309499979019165",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Flower-2014JL-DS",
          "trait_group": "days_to_silking",
          "trait_label": "Flower-2014JL-DS",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.3519999980926514",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Water-13HN-First",
          "trait_group": "mosicture-34DAP",
          "trait_label": "Water-13HN-First",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.9565000534057617",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Water-13HN-Forth",
          "trait_group": "mosicture-52DAP",
          "trait_label": "Water-13HN-Forth",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.569599986076355",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Water-13HN-Second",
          "trait_group": "mosicture-40DAP",
          "trait_label": "Water-13HN-Second",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "2.700500011444092",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Water-13HN-Third",
          "trait_group": "mosicture-46DAP",
          "trait_label": "Water-13HN-Third",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "2.1094000339508057",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-mc15059_E1",
          "trait_group": "Others",
          "trait_label": "Meta-mc15059_E1",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.0683000087738037",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-mc47486_E1",
          "trait_group": "Phenolamides",
          "trait_label": "Meta-mc47486_E1",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.354599952697754",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-mc50427_E1",
          "trait_group": "Phenolamides",
          "trait_label": "Meta-mc50427_E1",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.347000002861023",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-n0037_E2",
          "trait_group": "Others",
          "trait_label": "Meta-n0037_E2",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.019700050354004",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-n0176_E3",
          "trait_group": "Others",
          "trait_label": "Meta-n0176_E3",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.6532000303268433",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-n0183_E1",
          "trait_group": "Phenolamides",
          "trait_label": "Meta-n0183_E1",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.0089000463485718",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-n0376_E1",
          "trait_group": "Lysophosphatide",
          "trait_label": "Meta-n0376_E1",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.069200038909912",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-n0376_E3",
          "trait_group": "Lysophosphatide",
          "trait_label": "Meta-n0376_E3",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.0360000133514404",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-n0439_E1",
          "trait_group": "Phenolamides",
          "trait_label": "Meta-n0439_E1",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.0565999746322632",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-n0439_E2",
          "trait_group": "Phenolamides",
          "trait_label": "Meta-n0439_E2",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.100100040435791",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-n0458_E1",
          "trait_group": "Flavonoid",
          "trait_label": "Meta-n0458_E1",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.1207000017166138",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-n0691_E3",
          "trait_group": "Others",
          "trait_label": "Meta-n0691_E3",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.1780999898910522",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-n0804_E3",
          "trait_group": "Others",
          "trait_label": "Meta-n0804_E3",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.0729999542236328",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-n0818_E1",
          "trait_group": "Others",
          "trait_label": "Meta-n0818_E1",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.111299991607666",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-n0897_E1",
          "trait_group": "Alkaloid",
          "trait_label": "Meta-n0897_E1",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.2833000421524048",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-n0985_E3",
          "trait_group": "Others",
          "trait_label": "Meta-n0985_E3",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.4437999725341797",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-n1003_E1",
          "trait_group": "Others",
          "trait_label": "Meta-n1003_E1",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.8115999698638916",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-n1024_E3",
          "trait_group": "Others",
          "trait_label": "Meta-n1024_E3",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "2.430000066757202",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-n1041_E2",
          "trait_group": "Others",
          "trait_label": "Meta-n1041_E2",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.3487999439239502",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-n1063_E3",
          "trait_group": "Others",
          "trait_label": "Meta-n1063_E3",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.0999000072479248",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-n1077_E3",
          "trait_group": "Others",
          "trait_label": "Meta-n1077_E3",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.376099944114685",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-n1129_E2",
          "trait_group": "Anthocyanin",
          "trait_label": "Meta-n1129_E2",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.2662999629974365",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-n1243_E1",
          "trait_group": "Phenolamides",
          "trait_label": "Meta-n1243_E1",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.6197999715805054",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-n1245_E3",
          "trait_group": "Flavonoid",
          "trait_label": "Meta-n1245_E3",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.1017999649047852",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-n1327_E3",
          "trait_group": "Others",
          "trait_label": "Meta-n1327_E3",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.1859999895095825",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-n1354_E3",
          "trait_group": "Others",
          "trait_label": "Meta-n1354_E3",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.166599988937378",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-n1391_E3",
          "trait_group": "Flavonoid",
          "trait_label": "Meta-n1391_E3",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.6378999948501587",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-n1423_E3",
          "trait_group": "Alkaloid",
          "trait_label": "Meta-n1423_E3",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.004699945449829",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Meta-n1533_E3",
          "trait_group": "Flavonoid",
          "trait_label": "Meta-n1533_E3",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.1074999570846558",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.4514169991016388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Kernel368-Zm00001d034967",
          "trait_group": "Expression-Kernel368",
          "trait_label": "Kernel368-Zm00001d034967",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "3.49780011177063",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.4514169991016388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "LeafDrought_70RLWC-Zm00001d034968",
          "trait_group": "Expression-LeafDrought",
          "trait_label": "LeafDrought_70RLWC-Zm00001d034968",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "2.373500108718872",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.4514169991016388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "LeafDrought_WellWatered-Zm00001d034968",
          "trait_group": "Expression-LeafDrought",
          "trait_label": "LeafDrought_WellWatered-Zm00001d034968",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.163699984550476",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.4514169991016388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Kernel368-Zm00001d034971",
          "trait_group": "Expression-Kernel368",
          "trait_label": "Kernel368-Zm00001d034971",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.0260000228881836",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.4514169991016388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Kernel368-Zm00001d034972",
          "trait_group": "Expression-Kernel368",
          "trait_label": "Kernel368-Zm00001d034972",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "3.468400001525879",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.4514169991016388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "Kernel368-Zm00001d034976",
          "trait_group": "Expression-Kernel368",
          "trait_label": "Kernel368-Zm00001d034976",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.7990000247955322",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.4514169991016388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "LeafDrought_50RLWC-Zm00001d034976",
          "trait_group": "Expression-LeafDrought",
          "trait_label": "LeafDrought_50RLWC-Zm00001d034976",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "3.1124000549316406",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.4514169991016388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "LeafDrought_70RLWC-Zm00001d034976",
          "trait_group": "Expression-LeafDrought",
          "trait_label": "LeafDrought_70RLWC-Zm00001d034976",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "2.1865999698638916",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.4514169991016388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "LeafDrought_WellWatered-Zm00001d034986",
          "trait_group": "Expression-LeafDrought",
          "trait_label": "LeafDrought_WellWatered-Zm00001d034986",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "4.297500133514404",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "mCG_C06S000181100E000181660",
          "trait_group": "Methylation-mCG",
          "trait_label": "mCG_C06S000181100E000181660",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.073699951171875",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "mCG_C06S000862980E000863360",
          "trait_group": "Methylation-mCG",
          "trait_label": "mCG_C06S000862980E000863360",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.2803000211715698",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "mCG_C06S001850560E001850760",
          "trait_group": "Methylation-mCG",
          "trait_label": "mCG_C06S001850560E001850760",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "2.5485999584198",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "mCG_C06S002947660E002948820",
          "trait_group": "Methylation-mCG",
          "trait_label": "mCG_C06S002947660E002948820",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "2.4639999866485596",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "mCG_C06S003107740E003107960",
          "trait_group": "Methylation-mCG",
          "trait_label": "mCG_C06S003107740E003107960",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.0927000045776367",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "mCG_C06S003231520E003231720",
          "trait_group": "Methylation-mCG",
          "trait_label": "mCG_C06S003231520E003231720",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.63100004196167",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "mCG_C06S004341880E004341960",
          "trait_group": "Methylation-mCG",
          "trait_label": "mCG_C06S004341880E004341960",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.246000051498413",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "mCG_C06S006264280E006264380",
          "trait_group": "Methylation-mCG",
          "trait_label": "mCG_C06S006264280E006264380",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.0128999948501587",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "mCG_C06S006497280E006497480",
          "trait_group": "Methylation-mCG",
          "trait_label": "mCG_C06S006497280E006497480",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "2.7567999362945557",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "mCG_C06S008569320E008569580",
          "trait_group": "Methylation-mCG",
          "trait_label": "mCG_C06S008569320E008569580",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "2.4663000106811523",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "mCG_C06S008833220E008833980",
          "trait_group": "Methylation-mCG",
          "trait_label": "mCG_C06S008833220E008833980",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "2.175600051879883",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "mCHG_C06S000180840E000181000",
          "trait_group": "Methylation-mCHG",
          "trait_label": "mCHG_C06S000180840E000181000",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "4.44350004196167",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "mCHG_C06S000181100E000181660",
          "trait_group": "Methylation-mCHG",
          "trait_label": "mCHG_C06S000181100E000181660",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "2.1487998962402344",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "mCHG_C06S000862980E000863360",
          "trait_group": "Methylation-mCHG",
          "trait_label": "mCHG_C06S000862980E000863360",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "2.138000011444092",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "mCHG_C06S001850560E001850760",
          "trait_group": "Methylation-mCHG",
          "trait_label": "mCHG_C06S001850560E001850760",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "2.69350004196167",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "mCHG_C06S002941900E002941980",
          "trait_group": "Methylation-mCHG",
          "trait_label": "mCHG_C06S002941900E002941980",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "2.170599937438965",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "mCHG_C06S002947660E002948820",
          "trait_group": "Methylation-mCHG",
          "trait_label": "mCHG_C06S002947660E002948820",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "4.021900177001953",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "mCHG_C06S008833220E008833980",
          "trait_group": "Methylation-mCHG",
          "trait_label": "mCHG_C06S008833220E008833980",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "3.0703999996185303",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "mCHH_C06S002949180E002949420",
          "trait_group": "Methylation-mCHH",
          "trait_label": "mCHH_C06S002949180E002949420",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "1.7681000232696533",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "mCHH_C06S003905480E003905660",
          "trait_group": "Methylation-mCHH",
          "trait_label": "mCHH_C06S003905480E003905660",
          "variant": "ZMPV01aSNPC06P000584105"
        },
        {
          "build": "B73V4",
          "chromosome": "chr6",
          "description": "",
          "id": 1,
          "log_pvalue": "3.0227999687194824",
          "pmid": "",
          "position": "584105",
          "ref_allele": "A",
          "ref_allele_freq": "0.5485829710960388",
          "score_test_stat": "",
          "study": "",
          "tech": "",
          "trait": "mCHH_C06S008833980E008834120",
          "trait_group": "Methylation-mCHH",
          "trait_label": "mCHH_C06S008833980E008834120",
          "variant": "ZMPV01aSNPC06P000584105"
        }
      ]
      this.position = 584105
      if (this.phewas.length === 0) {
        //如果可视化上半部分数据为空，则显示文案，并停止可视化渲染步骤
        this.isNoResult = true
        this.loading=false
        let box = document.getElementById('plot')
        box.innerHTML = ''
        return
      }
      this.chr = this.phewas[0].chromosome
      let start = this.position - 500000 > 0 ? this.position - 500000 : 0
      let end = this.position + 500000

      //在这里发第二个接口 。参数是start end chr
      this.genes = [
        {
          "gene_id": "Zm00001d034964",
          "gene_name": "Zm00001d034964",
          "gene_type": "protein_coding",
          "start": 168702,
          "end": 179846,
          "strand": "-",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034964_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_49905eb1a85c4d5face0c277fc9a3b63",
                  "start": 168702,
                  "end": 170561,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5cdc094bc49e4eddb942a554269ccbb5",
                  "start": 171526,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_77da2f8696994411858c52b3d3a266c7",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b494a903cb964647a380c6813836df41",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ff0fa9777d2b49de8668c8845fa84af8",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_266e474988cf40059a2da7fda4a3e7dc",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e4f3e114bd9d43488a6329194a6a7443",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b2f4686ea55140cebe16521e68d21ae3",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7a6713ccd3fe447c8075122470689f85",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9f4ad159870a4d37a4bfb8eeeb8cc208",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6f2ea34432d3411bbf18def159c82221",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_20d54f457e61456d86e8c4a5409b3b9f",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c2cc734cfaa04516b4f9cc427649aba9",
                  "start": 179368,
                  "end": 179837,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 168702,
              "end": 179837,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T002",
              "exons": [
                {
                  "exon_id": "auto_exon_90bb9546e3a54641a03849c871d75cee",
                  "start": 168702,
                  "end": 170561,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_bfdcaafb71ea4e36ad776984ba3a603e",
                  "start": 171526,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_691e69b9a02f4f0db613616bd7291a74",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1c455000ba75427bada766cca9de4db1",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6502ba063cc042af933231c2e6165a13",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2ace1fa36643486fafe07999a364f978",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7f292860307b408c970092a91342ff4f",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_bd207d75d7e146f1aadfd27c1202446a",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ad8078f672ee44a980b5fca03491c159",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_638c566b7baf4878ac5dbac0984e851b",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4d55af9b78c048549f1304dce5f40adc",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2e0b499d79634f6ea1375ab1434953b3",
                  "start": 179368,
                  "end": 179846,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 168702,
              "end": 179846,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T003",
              "exons": [
                {
                  "exon_id": "auto_exon_27a9ae49232b48d198987ad43892e6cf",
                  "start": 168771,
                  "end": 170561,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6393e482d12742979918a4098071d647",
                  "start": 171526,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_78432766f26f4502af3bd88d53c77425",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_52d09c6bc222408f955697272aadaa0c",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c6ad670bcfc74330b9553237d548dc5a",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_dfb42a4f53c44535823f931df997c4b7",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f99a999769d94fbda04b8bf1d765734e",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_29b9ec14f6b3420ca828853e765dbf92",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cce0e5c62cb540c3b86a092453ba6ea9",
                  "start": 175127,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1637071911354c4b82a94a3bcdf6945a",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_0b30f288070345bdab2bcfe3340fab86",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_13d4f7f8a46542deb03a61af4fb92bfd",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_424dccecc7f242adbc154f1f92919b10",
                  "start": 179368,
                  "end": 179834,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 168771,
              "end": 179834,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T008",
              "exons": [
                {
                  "exon_id": "auto_exon_0b58c2308d584a75b3da0662ce8151a0",
                  "start": 170101,
                  "end": 170561,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_fefa54cfbacb4af698a1a69d6c17ce74",
                  "start": 171526,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1235bba7eb4e4bbba02b3754665a99fc",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_21655bfa57534c4483c5954141534062",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_953cff48e56442efa3be2ce2d3ee017f",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5d862d29916d4daea05e75f702396f94",
                  "start": 173295,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_846b5185b270424fbcbced6a327b3a35",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_24ad90bbe113488a803d7109bd588c8e",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b9d249a4b0d84cbe8d85a5e9bee786d5",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ff625adfca83420489c647db46162e91",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4afa23a5aebc43e3b216c2c39c734f69",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_157ceada4d8d4c1bad9e49192a9ca687",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4decb890dc61499a928779c383182a5f",
                  "start": 179368,
                  "end": 179834,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 170101,
              "end": 179834,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T007",
              "exons": [
                {
                  "exon_id": "auto_exon_145d5219f4e841b5b4a27bb0b297c627",
                  "start": 170101,
                  "end": 170561,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_bee49e449ee343dbbfe190ba7bfbe04b",
                  "start": 171526,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d4b6e50e0a744bf79718da16e8534640",
                  "start": 171853,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_89bc470cd5674739bdb74628e870a732",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1dc51c0199b84224a02a5d0b6e93f9ea",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ba07509e3e2d4bd2ab3db34d57058c78",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ffe0ed39f3b24634996f21dcec806399",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b8bfe4cbeacd438cbd94a9e52237790e",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_500d0f36e29a44678e25d0d6b1055832",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e5e75528c9f641f78345dd821d29a46b",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b779cfe6c46f4de2aab4517508656f64",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b1d4a124b78447dca6269e719d08eee3",
                  "start": 179368,
                  "end": 179834,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 170101,
              "end": 179834,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T011",
              "exons": [
                {
                  "exon_id": "auto_exon_cb21e2d98544455cb84454a8d24f9443",
                  "start": 170109,
                  "end": 170561,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_0cabd5303fe943d1a3e54ce1fd8e45db",
                  "start": 171526,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d5f4940564b3496988c2a8f7630cad11",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a994a8a14a69477ea2204d8da0f33c3e",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f77ac817f5bc45c48dd3038d50b7a210",
                  "start": 172724,
                  "end": 172865,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4212d116715d48629c65c147294bd8cf",
                  "start": 173030,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4393899a637e4ea0a90ac0a23ae50a59",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7ce732ca1e794817b72f5f910e58f2ea",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b5296552a1b04b9d97c748e046eed12d",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_bb8f8a623c504478bf7e0989bb4cb6b5",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d2f87b06c5e84ac1b7087e221168edbb",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9bb8204bebf84a32ab5392eb8fb89037",
                  "start": 175893,
                  "end": 176401,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 170109,
              "end": 176401,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T012",
              "exons": [
                {
                  "exon_id": "auto_exon_bfd637279fb74e969d89eb100a733f37",
                  "start": 170109,
                  "end": 170561,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cb2b2f4166844b04ad6e580c8cacf2e8",
                  "start": 171526,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9249abcd0d84405eab826ac2a0864b14",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6756e9a03a08426688c5732d7454a2b2",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1a5f0187b4404692a983d73c2cdd1b4b",
                  "start": 172724,
                  "end": 172851,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1f29ae5b1b8b4f3e84c5d08f69f3215f",
                  "start": 173030,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a453a4ff6078449d848ac938c7caca51",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_33d14429a0ba4801944386659dce864d",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_05c6e70102c849f2a2baeff7b66772db",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1f7607dce50741be9f12368025ea7bcd",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_98b7d38e43ad42faaa735d99230a249f",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_bf24e7650a654c37a7983023bfd9aa8b",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d12bc40f754a403ea7246d93eae0e627",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ac37ab493df7416b9e5ef0e9bb0eae41",
                  "start": 179368,
                  "end": 179830,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 170109,
              "end": 179830,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T015",
              "exons": [
                {
                  "exon_id": "auto_exon_19c826b87f6b4c2dada1174b0a1f8ea6",
                  "start": 170113,
                  "end": 170561,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d0dca8fc1b3d41baba57a9fb9bd40fb5",
                  "start": 171526,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_be181d5d693949799b7438a22f05a5d6",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f0cb767fc8c440aeb649b44882f3426d",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8c2d1251962f4c3a8c658367f572b492",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_494fa1599c7b46478fb8d65c28d3bae8",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9c748dfcc81447e38c04756dfae019ca",
                  "start": 174654,
                  "end": 174849,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_08facc30790b460eb723278ede2e4451",
                  "start": 174897,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_34e742257e4249f083af82f96e4a771a",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d7344d3056884352b237384daff68ab0",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_3d17a86bbdb6475d9370384692fcfd67",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_495c4ef3d4a944e6954f6b2e4bec1ede",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_de2fc40790c0457285a478cc5ad9b5cf",
                  "start": 179368,
                  "end": 179833,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 170113,
              "end": 179833,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T017",
              "exons": [
                {
                  "exon_id": "auto_exon_77669a39c79a4cff849766b11d4e4629",
                  "start": 170245,
                  "end": 170561,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9acc48db05f74f2c904e128b83100943",
                  "start": 171526,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9c4cabffb9ae4738a979ee716a479ee4",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e353ccff19de4be280f0eb3110f20dea",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ae73c4748ab446fab21c619469d97e49",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cd4c35a9b862403f82681cae767d5bb5",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_edd33e47c0b8447ea144a4887947d901",
                  "start": 174654,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_868b3463496844afafea725dc2280ba0",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1f2542fd920d47cd810dc4efe91e1bb4",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_007cdb7db38443099ca6881caf71a42f",
                  "start": 175893,
                  "end": 176012,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 170245,
              "end": 176012,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T019",
              "exons": [
                {
                  "exon_id": "auto_exon_a0d5f7fc451f4fdd92d7841465b39248",
                  "start": 170280,
                  "end": 170561,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b40c8972bae64a4595a470069ac0d6c6",
                  "start": 171526,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_3199c9818c624190acecc2e8774a833d",
                  "start": 171853,
                  "end": 171933,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_0e48ad5ff268488e8a13ff69a5d62fc9",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_bfb868ef5e60459ea0a89aabb4af7858",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c18eaccfa2444822bf335f136ea0dc04",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_92884ae0e25c4cd69768009fc299bd18",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_da83542ac60c460692b2fa8d29ab4f6a",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e13dee98596641fcb8ef0b1f3d72ac65",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_362049fbf7b5459b8fa309d9f43a248d",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1538b99774364718b13bd4c7c8d32bcf",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d39b1ba0703a4c88b4f0a9e2c19e54ab",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_91b3dcb760404736b160bb432aab005a",
                  "start": 179720,
                  "end": 179834,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 170280,
              "end": 179834,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T021",
              "exons": [
                {
                  "exon_id": "auto_exon_293d5b5a16224970a059c0f20ee5408e",
                  "start": 170281,
                  "end": 170561,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5081aaa6052b4363a444da48a9a3053e",
                  "start": 171526,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_fa4b5bd6f35a4684a7b72a5f9b468b4e",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5430ad8afbbf42bf80d72da31fb04dab",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_332c59c53b6c40a7b3e621c19856a176",
                  "start": 172724,
                  "end": 173041,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_16561442ce1c4e81a3fd2a73906c1bde",
                  "start": 173431,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e1c63ffb09e14e028f1ce4846de4b5f0",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ae068a0765ec4d0e930e988b367724ac",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_69d88a277b21454abd97e8f7e3b2a4a2",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ccb3a8fbcbfd4968ac4ceff2e0ced94d",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5e4b9a362c934bd7b3bbd65bcec3ab72",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b1f4c03bf697475f91cf87fa4f718822",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5f24b9b21ff944bba8d1ae6e02b2c520",
                  "start": 179368,
                  "end": 179846,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 170281,
              "end": 179846,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T022",
              "exons": [
                {
                  "exon_id": "auto_exon_29bb2873623d47c1b89c2e1c750905ce",
                  "start": 170320,
                  "end": 170388,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5b51682747f144459d4ad3453fc1bd99",
                  "start": 171364,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2827e4b239eb47718725c14d826abf0c",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_89a2e1ff55cf4ad981999b22681047c3",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cedb50993dac4e9e941e123788b58607",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c702816407a0489dbbac2c16bdd19dc8",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e9743bb434144e2084ccc28c9aa69954",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_acc7a100b9024a468fe8b3fe975287dd",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_42f1c07c85284951b91f0e90c8e1c025",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_15c027d45ee04ea1922f6284b14f7cfb",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cfa99c8f2b364ff681075cf3d9b08557",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_73ac6cf4e30c4afdac400b29297623ef",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_538d809295704cc88b6710c2d51969bb",
                  "start": 179368,
                  "end": 179834,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 170320,
              "end": 179834,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T023",
              "exons": [
                {
                  "exon_id": "auto_exon_05cf9b6c51b948efa2bd2fe59279ff4d",
                  "start": 171246,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a9087518ea06417c82d5d99e1aacb15c",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_fa95cfee28b44286bfdcf829b706da8b",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5a9d51c2caa242dc8db3d1494fbfc690",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_3b2fe32094b04556abf5215f29f99f3a",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d8e638c0cf604f1991bfb37a1aeb7d70",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6af2bc6f9194453ea02a5878cb73e5c0",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_df5154b05aae494aba0ac4a7c8b2bd85",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7d716681ceb04fc589a32a1a979a931a",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_00beb37b7cf64d5482f88d161fe32cd0",
                  "start": 175893,
                  "end": 177769,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171246,
              "end": 177769,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T024",
              "exons": [
                {
                  "exon_id": "auto_exon_be37587f11204e45be843ef8a5cd8bc5",
                  "start": 171260,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_bb4f87e5682a470a8419849a354aa6bc",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_042662f987fe4ac1a2897662c54d676f",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e0d2b27b4a07466a9ac54074b7076ce1",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_3fd363b7866d4f34b86c2ef128ac8748",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c9d8443d0b4f4c579a310bb599d12239",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_72215170335c4c2d81ef63a8be70698e",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6350ff5809004a0fb07ebf0dec6c8fd9",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d9f1619528af433994bb7aa71dd9ba75",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f481bfa43ff44e6e839186fad3c045f4",
                  "start": 175898,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2dadc575dcb24b519700bff5fe4fa212",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a86a3086ba304a369feca88314363434",
                  "start": 179368,
                  "end": 179830,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171260,
              "end": 179830,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T025",
              "exons": [
                {
                  "exon_id": "auto_exon_18e69da3ecb54d04b9e9c458d3c520a0",
                  "start": 171267,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8d77e9e7febf40e5968944d20839fa8f",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2b4140f34b1841d49bdd15677e72dfea",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ef5fc1fef2ed4d8189004a39c5e1b770",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2e53593237264fe59d484fca06020db1",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9622f502b3d64e018508a14263870e58",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_04183d1deb444ee39eef8c115e7fdfda",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_3a7595e97c8942428b06c1a9e8f3709b",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_95340b464d154e7281dad816e5cb56ca",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_78f4308486d44351b112802fc5551643",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_0567cb6a5229452991dccae8e4028180",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_636f8c6fed034b02a1848ea109382c25",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171267,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T026",
              "exons": [
                {
                  "exon_id": "auto_exon_089e69e8c25b4f87b8c754db5883a425",
                  "start": 171288,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6f847630a2f14b39b8bb4d10c0eefae4",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2468e0e4a1ab4ed8b931a4485cb2c47d",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f787c5b62316495b9ac343d0dc37929c",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c39cc1bc5fcb40a5a5b6d9c5f17ce24f",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_81bebaf1f5fc4d05b05a4744aac0da6d",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_bee4441096c743569f3fefe34b0e52a9",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c1d72437d8e94920a60859cfa4a06c11",
                  "start": 175122,
                  "end": 175290,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_558d1c8ef2d549e490a47a3a08b196aa",
                  "start": 175311,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4fbeb26728c2441094e5d550932fb120",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_23c9492539da4f8d8aaac8eb2b1099af",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7d267d65ce654d43a844eaa78d6c93aa",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171288,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T028",
              "exons": [
                {
                  "exon_id": "auto_exon_b17c0b5da01d425e8e16c30e05901025",
                  "start": 171308,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9ac140d3e50046f094a4b1f54702d585",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c2d023297ea14c259754af5556062add",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_615b19096fd54e98a57fb37dcb481820",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a727eeaca66b4a39b4c816bae70bcf93",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d3598ce92144495883e84447810122b1",
                  "start": 174770,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_74d1097d45f14941b0e17867f4349eaa",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b1aa1a57d1184dbe96d3c45d24e662a1",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_dbae043d7e89403aa9a8af3c180693c5",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f9cf830cb7494e6f892770217df391ff",
                  "start": 175898,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_34bc0e1b06fc491090009c12b3f0fdd2",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f92523c2ec694aac972d8ef736e5caf5",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171308,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T027",
              "exons": [
                {
                  "exon_id": "auto_exon_e47a4f355274456c914fd3c07b997280",
                  "start": 171308,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_731c708424f74f3ca7498e9b1482edce",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_09192af5395549309c218a192f074735",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2c693937cf9d4b84894abb9fe5adf6eb",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_482697b1ec95446db12053a4898c0251",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_eeb2ffdcb5084ccca9aa57b7e97b50d2",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_bb6edff4822247ae810e139c10fa76d9",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_dce0d72c493e44b6ad0a2afd8683eccb",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b359618644a440a9bb73ac17f29c58f4",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_198559082dd541a98676fb93574bf7d8",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c8e0674d64e64510b0f8e6b811a0e38f",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_08d879acf09745fe93a49e3b3c45255a",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171308,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T029",
              "exons": [
                {
                  "exon_id": "auto_exon_21a7c92a7ca149f990d1ba3ea71d8e13",
                  "start": 171308,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_61a40b8ac304414a9091470395b9d9c7",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b04c908a9ca44f47ad6465c9c15d8b42",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5c08f1d04d484822aae307cb1063720c",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b224c4138526450dafcda8bbe151496f",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4b9ff55a06074d2d9967335e8c40a54c",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2086395e79824e9b9305d61a7c697d9b",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_97c663b498f74129a8d5309e710edb5c",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ab23c055bb1f4b1992f7d55296d9d738",
                  "start": 175323,
                  "end": 175775,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8eb6e4642f8d4e2ba1c9662e2f35ac4e",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_14bbf96a9b544ef48d3fef6365408850",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_454e5d589dac4cbcbbce88bf20473e2b",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171308,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T030",
              "exons": [
                {
                  "exon_id": "auto_exon_e82c6007bec449bab19a0ff4744613f2",
                  "start": 171309,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ff82c6a1e1aa4e89a59cfeb4483ca786",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ed5c8bd0db0c44039cde100285736844",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8c6158f053da4d5a8bcbf2f7edddf830",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d2bba0fb0e5843e38c083d524dd00789",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_350ca24788684f3e9ec536c5a63f57d3",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ec2013031d2e4e0eb65af92f8123f9fb",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_92b9e42cc57f45c9b9b4c0d0ec3c1302",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a8359e86f4f24fe1ae82fbe99ca56785",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b996e482b3ee4bb2b2005b17fefed095",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4bdcfb3173104cba877335449ff66724",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_851b14b270764bf19a509ee178f55bac",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171309,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T031",
              "exons": [
                {
                  "exon_id": "auto_exon_35dbbe23086048f582bd7606c38a1e0f",
                  "start": 171312,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_caa6febc366b4995976d2c5f235ca039",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7aaca19b5b9143459be819b8dcedeaee",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9a457db2f8fa456badfcecd53b13c382",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c162e99e52764277a215817f3ec1ac4c",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_25de1f0e56714b218fe129d8b56bc66f",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6fe0600f865a4aaf93a8ab2e0b2efa8a",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c62f284879554765aa7d2076d9e3b24a",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_06c9c4c8e8aa4b7db660515d63e2611b",
                  "start": 175319,
                  "end": 175783,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6f70862f76b640189325802c0292148c",
                  "start": 175898,
                  "end": 177400,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171312,
              "end": 177400,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T032",
              "exons": [
                {
                  "exon_id": "auto_exon_492653fe815642e0b1dbeb84eb84e6e3",
                  "start": 171312,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b001b1f2ac3a40ef83f32f443a44c32d",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_76334dc016254f61ae2892b7a005d0b0",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b677baa7863747feadec98c09842f718",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_64487d3a7e114de088f08c19fad08e0f",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_73d1ed516f4042a4a9caf80d783d0ed5",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_29687817143345da8f06adcec5907eda",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a76fc0b33ea04bc8b898f590646e9a82",
                  "start": 175122,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_805cbba082f84c94916c70b5dcdd6059",
                  "start": 175898,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_78ca947d11e54fe78a004a8cd302fe9a",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_61a2cc15c1eb433e88ff7f919dea1986",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171312,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T033",
              "exons": [
                {
                  "exon_id": "auto_exon_e28bdfe5960541b298b830082033fcb7",
                  "start": 171313,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_fa325322322240fb84f341299bf8d4e4",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c1b1d88a09d041c9b3a95195eca3934f",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_41720b5b3a5d45cd8d51b9c7a0efd645",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_fbee3c26055d4f4f80d021415ffd4ca9",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_3d623641e4f74ff593f50893f729034f",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d04bd1fabc984bdc906891b19f1addd8",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8959751c8cc04ccda0dd17b6929ba95a",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c8e7bdb39413447d9e8cc8765a93fefb",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_521815f5581444ccb4bf664d00f3dd6d",
                  "start": 175897,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a1c4df9fc5194e05a92feff679598020",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1ef73baa345d490d88811f35ee10279a",
                  "start": 179368,
                  "end": 179811,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171313,
              "end": 179811,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T034",
              "exons": [
                {
                  "exon_id": "auto_exon_d66e5b870eea4c038e2d7f1e4822944a",
                  "start": 171333,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ba069b128cf24547b522bcc64a904f12",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6a1a519b62994112b97cbb6092c90df4",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7f2c0b15d9964310901d0512b7f80bc6",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2a020ab2edcc4ca08d8049eac0b0d71c",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cd75d34c5d81425f8dd75b5d21498091",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ebd7693357a9450a833156040e2ab42d",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_3f46177dcd9a420eaf0d9cca22a29a62",
                  "start": 175122,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5335cf94b1e74031abd481e20f20382d",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a2cbf5bc24d04c8eaddaedacaae6a889",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_405deb24dee748e49d85b9b3c207065d",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171333,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T035",
              "exons": [
                {
                  "exon_id": "auto_exon_24b7853f9e2b4f40b3fbff94a0605f20",
                  "start": 171336,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d923118323b24115bbe58dde8aeb685a",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6adda2f6f411477591e5126eb918dd03",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_781b269dded741249c5a9626aac7d3b9",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f5a50db98b224c9086fca68ae1b4601c",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a8062cf90220425db3fb908b415a2b57",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_eb80723a0bbb4bfe9492f653c14ba28f",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_92e22ccada59433f8edacb5a17236ec5",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ba63eecad6374626b9f2a07463ab99c7",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6adaa57956e0462a994cd159b9b1f30c",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2bbbb8b8f0714e348c8f29928f7fda25",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_343dcbe4dfdd44c2ad238b76715bb7d8",
                  "start": 179392,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171336,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T036",
              "exons": [
                {
                  "exon_id": "auto_exon_1e812a6727854a29a86303ec879a550a",
                  "start": 171341,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_39e9eeba07f54da69fd2a9774d251ce7",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e5f3831948af4a1b8bc9eea5c9e98bcd",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e1547eb4aa8a4ed4a67acfbc3ddeb6f4",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6a040310bde94f29ae5d0db6d6132642",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_526cc44c41714669b47cc77a5c0cff8f",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_36fba48a0fd74468a886e013ab51e78c",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2146504c228f4c34930f2807bb7ec8f9",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f0f0c524a37f4723b5a756653f225db7",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ebd625f2a735431295f5f5a23b30e749",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8fc71eb419e44358a42258b91e6e84cc",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b87c15fadbb94254b98e24af6166b536",
                  "start": 179368,
                  "end": 179825,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171341,
              "end": 179825,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T048",
              "exons": [
                {
                  "exon_id": "auto_exon_06bc15a6d6ed4857955f1afad6776cdd",
                  "start": 171361,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e40bedf9d7f84e82a783ed4875b8e352",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_84358ae5dc1b4cdc833518be29c6ff07",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2d7a3f4dcbff4757b461bd028c4a4cc8",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7cef12c6175c4d8a9b35541385af2391",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7df93eefcdfe461ea715884ef52e5cdf",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1163fbd3ac84455c90c67c18507a5bb3",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a9dd963a5c52483eb09060c233207128",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cb887e613c9449a9886553823fc091f4",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5c40ee0ccafa4c2abc488d1f4eda2e43",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2e8246be0fb348f4a35b56f6084ec95c",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_17a084976d46470a96c7ec35074f6196",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171361,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T050",
              "exons": [
                {
                  "exon_id": "auto_exon_3fd1f9f146d04d3bbf827aa85e71627a",
                  "start": 171367,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_88aa7e011f6e46ce8d6e5eacbbcf1071",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_280ac9d30df34c6c9fa5f06f7acc9ae3",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_dfef100b265048299952ac2dc799dc2b",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_58b83ff8e2934185aa490442b79a024f",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8510e36b83d840fba4ba67079f3bdb2d",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_0c9ece087cad485dab2093be0a6d4174",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c5b6f76a0a7440df94998933edeaca90",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_13bfe6d3bd4646629ef8edea1a1747c1",
                  "start": 175319,
                  "end": 175434,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_10efda274dbb4a0c92760994a7814acb",
                  "start": 175610,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_95f0a393d05147a389f8831eb2bef649",
                  "start": 175898,
                  "end": 176476,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171367,
              "end": 176476,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T052",
              "exons": [
                {
                  "exon_id": "auto_exon_8f121f0cd14c475dbb8a7f0f4e95c146",
                  "start": 171367,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b3ccd613ee5f43708a1013ac642a860e",
                  "start": 171853,
                  "end": 172030,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8bceb4f97ede4e948ddcee53f263a62f",
                  "start": 172453,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8623d8a286ca4ef68dcae6e9022142bb",
                  "start": 172724,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_37d8e650eaf44019a34de3def3920247",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_dc65365c14f24f399d14a06f91654263",
                  "start": 174922,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_90c6866141234635870e91f5aa9953a3",
                  "start": 175898,
                  "end": 176871,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171367,
              "end": 176871,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T054",
              "exons": [
                {
                  "exon_id": "auto_exon_481c74f0fb7e4c299b6b438336ade8ff",
                  "start": 171367,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e59fd51ac81d47bead39f72f9a0ca0dc",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_26bf778ccd4043f28110674b2bff3b03",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d5beb9a53b484ef2b66045473273c162",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b8105a5481df48acba0bad962c89f34b",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a09c0eabec524ccda3751b53ef9395b9",
                  "start": 174770,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_daf86ef18f4645ac96e13448235a9d89",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_33fb706d29d94d07a78de0bfa76fba92",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_eda9652f4bcf49f2a53010c342d894a3",
                  "start": 175319,
                  "end": 175434,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_91dce96862ae4c7ea1ca669f459cc99f",
                  "start": 175612,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_457a2eda295a4f3d9cb324cbfd6e9684",
                  "start": 175897,
                  "end": 177249,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171367,
              "end": 177249,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T055",
              "exons": [
                {
                  "exon_id": "auto_exon_aa0571761b36405187393bad83ca470d",
                  "start": 171367,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9ead81c9ce204bfa9fe31a19521c0f50",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c95ec2e75ad84088807cd8eda1b204ce",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5904608527a04925acd9ea2fa3c45fac",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b77512c898044308b4327be8191804af",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_57ca05acde1f46ad8021329a0b14f2e9",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_48af00d64def4ff5a1678f22a5d4f678",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_3f0ec9740b0c4aae9fa55e2a0f7bc56b",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e9e95ec99cf24fb281a87878884e636d",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_977c4ddd4cb2443eb635c58ecdec7aaa",
                  "start": 175893,
                  "end": 177769,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171367,
              "end": 177769,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T057",
              "exons": [
                {
                  "exon_id": "auto_exon_398e6e104d774aa692e0aa5eada84018",
                  "start": 171367,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ef7ecfc46dd34fdbb879682ae461f0e7",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7e5daab45d0a44d79c1b16139d35563b",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7d3e55acfa96447ca4eda4b5a2d34faa",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_328f6f428ce54fbeadec411049f80076",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_caf0d885ad784286be94eb519c6a0367",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_bc64b0c61b9041edb6d878927df0c04e",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d8980bb0e7b945a7a95a852914c8b8ce",
                  "start": 175122,
                  "end": 175209,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_47437b2ab29d490081d10c7cb50bf6a8",
                  "start": 175321,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_14c9e552483d4338a04ff9e7180fccfb",
                  "start": 175898,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_18d5b8eff2384c95a9f38232dc6d90b1",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6a8fd0f563724b1c924abe3f1a15d728",
                  "start": 179368,
                  "end": 179785,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171367,
              "end": 179785,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T059",
              "exons": [
                {
                  "exon_id": "auto_exon_be9dca0c3d684263ad89e2036911f4a8",
                  "start": 171367,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1b19461955dc45afabe1d4dd7a78d812",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e6e28d1bc87445ce9c50a55a321c399f",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e208a2e15060463594aba21a59f56362",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_70fb7937b4c14c75bc6de1caf68a5de6",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f902053c0bee4ff18c65c9e5b6b81a4d",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6683394151514d3f9e6fe999fabff904",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_91df0913161d458e84ddcdff4fecc7f9",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6509a7878501431b95c1c01e9b00ffb4",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f729ecfdad0c4c8c96c479e52c093ae2",
                  "start": 175898,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4f5d8308ebfd499a920ff80a7660c47e",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_53593ca6259f4c2393fe2c109bfa2d28",
                  "start": 179368,
                  "end": 179811,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171367,
              "end": 179811,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T069",
              "exons": [
                {
                  "exon_id": "auto_exon_b3db526adb724a06b5262b4a43fa3461",
                  "start": 171367,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1a3925a8a18b47f798e94b5db853e271",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_866d00d8728748f3a4a74057f970fc4f",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_526bba8bdc584918b6e2956dd46ad602",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cb8af01474ae4231a7fed9adff8218d6",
                  "start": 173276,
                  "end": 173391,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7a21354d50af4084a1c69510bd9b13cc",
                  "start": 173479,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_18c90c79fcbb437f99085980e2746033",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_231259b48820455690c0cc6fff04e611",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b6d6dc95b637447193f2d16f7c12e8db",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b3a928b389ae4065ab61a9701e430f21",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b5bd4c048fce4edd839adba74656732e",
                  "start": 175898,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8e3046a4fdd84d3ba6c7db3f314235f4",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1a72b3798bad4a31b16ab9d73a3c5fc6",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171367,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T065",
              "exons": [
                {
                  "exon_id": "auto_exon_6a8b8a0cf4d1420c9665b1b7ec1801e7",
                  "start": 171367,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_274f8a597c6c4dcfb9a8655bd260345e",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4044640286cb44539e4f97d894d022c4",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_16a1c5bbf5c64047832e357b4e2ee674",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d6246d70d35b4b16956613e6129f4145",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8c8a369bba8e4f8c94a81a5b47c2a153",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ceb9707b24b54073a3ebc6c941a88695",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9996430c704d4a469d5191b84c3d9172",
                  "start": 175122,
                  "end": 175783,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8674a501635347dabb6fa4b628760973",
                  "start": 175898,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f2cb665bd93442dd86ef1a5e82a4e072",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_0fc33ca78d194ce8a2b7b766ddabf0bc",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171367,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T070",
              "exons": [
                {
                  "exon_id": "auto_exon_07f05aa22f7b4dccb9f2dbc99fcbd4d7",
                  "start": 171367,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ba0976bf645c476c92edb796f5ad4a49",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d4b57f3c0f0c4faa8c028eb627a570ba",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6e1041c8ba1a471db1bfb648cede8959",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_24f210ff03ea44ec9121e9e52f48b120",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_65726c1f4a3343a784adcaa5386b53fb",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_61c83b481d3349c78a0adbf00ef427b2",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_79d5477aaf5c41829e2e8cb62fb082b8",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_91610240f9794a5fad9c47f93603262a",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_841bf5513d1c48f397d9cba9ff2987f9",
                  "start": 175900,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_63574965ad6d4da6a4a956e13cc503cd",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8baf37d35e0443d59e8a97915e5df3e2",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171367,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T064",
              "exons": [
                {
                  "exon_id": "auto_exon_5f25216e02a54f33b1b273e2306f07e4",
                  "start": 171367,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2bca48c808d74db69522a06d822f6c71",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_3235e6e231a040cba34877a504bc4543",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f47834dedf6c4a61ae4a75b83fb814a1",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cd4498f873d94acbb275a603620cc192",
                  "start": 173276,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4939a53ed81141fb813a2acb0b1b7b57",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_78e40e698d994a0db4c54217ac75fcae",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_0968c8a3c4324852a871847d93b15ca1",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171367,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T071",
              "exons": [
                {
                  "exon_id": "auto_exon_7fb18a1cf2f64981bed70592f1ea3012",
                  "start": 171367,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5161cc367ff74e3bb3610916b22d50ab",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7cc7b5a05b584cd9a2e1bdd1f3124aa7",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1001c92b41e449e891302682f467a873",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_eb3ea8e3ee204e35ae5e63b6ab55a9b6",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_73a449f5af584a6299fbbdb851146166",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_205adcb965e84be0a838dbdc1ad5c8f6",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a0ee535339a1468e8d7373c45ab4487d",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7988fef9e4cc421792ef8ca3857fed69",
                  "start": 175319,
                  "end": 175434,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c75505efbfe444a3a8c6a432a9c9b936",
                  "start": 175612,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b50324d0d189459582e0e75d20910dd3",
                  "start": 175898,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_fe52f8d6a20543998b22d40be0dcebc7",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_16137a707a904f72bad88509b7073572",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171367,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T073",
              "exons": [
                {
                  "exon_id": "auto_exon_365080e7046648dc91eab79584102bc5",
                  "start": 171367,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8b918e2955aa4e91837699f3af97b1fe",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_31fa8965a9b549a582bcf6f83c1360ea",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a0a67946220644b2b737c9a95344fe13",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_18cfad6053d6490a8c8e6b029f421afe",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b8360fb134344442af7c7bbb3c3b6f4f",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_971821454fdc47adb9ebe12147b6cddb",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_61b704fa19274ca1a79efc8722000e94",
                  "start": 175122,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_636bf745d49d4d5aa840d8e205196e13",
                  "start": 175898,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8dba158e0a4845d2a1f448fb47c85e76",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c4253adabecf4039884472e541233bbb",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171367,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T063",
              "exons": [
                {
                  "exon_id": "auto_exon_6ebda0df800a41da8bd456a0fccff13e",
                  "start": 171367,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cf4845502c1a4e17a9d964cb2597be11",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d674b75dda0142ac892d215c46f4f770",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_73458d8a05e44aff846c082e8724bff4",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6bdc8e8bab9642589eacdcb2c9741d19",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8a37fb52b03c4872bbfd863912b9e4d1",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2f9278c5d63a4ca6a12385d4f86e475e",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d7d119f559dc4784af8d90107bb17275",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a9ce6bc074b34f70898bc4b7b36d70ca",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_36c3735c3604475d8e81a616c63f6b8c",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6c94535b0ec342b28f4fe86cde84d8bb",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7ebbe78b5e0a46b9a57a82d62e2047b8",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171367,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T074",
              "exons": [
                {
                  "exon_id": "auto_exon_9314d79474e34ca0b8c9636fe7f15b37",
                  "start": 171367,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_aca6eb4ddc7c48f4a0b254e0375d4db9",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_0f2cdbd1844940a9b2ac9309323f87e9",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6dc04d6d789b462491b4c1b247ee780a",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2d588a0d44ea407d987f17810017aaf7",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6a2082f348034aceb0939ba20b95c7e8",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d1c0e41b85ee403695e06e2b8c0390d7",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b15b1fd139404dec95060d7a29ffdf05",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_798f24fce7c84447b1fbe3ef0d096485",
                  "start": 175321,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6a7b90b1a086415697088dc446be4d9b",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e0e6326adb15486688ff74772004db92",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_83f395f3395544409a67a3d179d2b40b",
                  "start": 179368,
                  "end": 179834,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171367,
              "end": 179834,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T076",
              "exons": [
                {
                  "exon_id": "auto_exon_401bb618496641229dd68dde8d926d9f",
                  "start": 171368,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_689c4efef2a14e07830f387a79dc14cc",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cfe9189daf4d408d99ea04ae4678ce5d",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_619bf817431a4413bca936a1e2d81866",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_0f14f533b3c34039ad0db9733a4eaf1e",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_eecaee2a34244a6aa8cf32250fb49580",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_fe99ac834af14576a2ba78f3ff269e27",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a0d7b3b6e1c54bd3b58d4b7e7a6d4eb5",
                  "start": 175122,
                  "end": 175215,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_76b27e88dc94464a9bebbbd11686ac0d",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_3be31f1ffb054c42a66bbf501b83860d",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_47b2dd702de74498bc5cebb53c33078c",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_312ba35888bf47ee855156150b3dda93",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171368,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T077",
              "exons": [
                {
                  "exon_id": "auto_exon_d6ea922eaf6d44a09faddc94afc2d9a5",
                  "start": 171373,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2e820c138db74005bab417dfcd14b669",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7645f7c86f924d5880a821832543f55c",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d0390405f5e7437abcf5837528e57c8a",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f13ef5031a5e49a2b50575e15caedf26",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b71395c4353d4320bfc146b648a46961",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_08a4009becb34feb8057726225005787",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4a96091c106d49f1a7fd12caed1c4d13",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7e3895c97c084785a281bcbbfd1bed83",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_eaaefa8cea5c4c81a1396071b99ee0c1",
                  "start": 175893,
                  "end": 176136,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171373,
              "end": 176136,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T080",
              "exons": [
                {
                  "exon_id": "auto_exon_37ba6456f0cc423cbd033979e4bd42cf",
                  "start": 171373,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_46ff3c5cf78c4e079e5a16be200296a4",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_83da7e3aa2b24ee7b51c37e896f78dc7",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_95c061c5dbf44d81b4d2e57662a89bbd",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_3875f9eaaae1428697c53127efa67c92",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e58d9cd1a5874e2eabd8bf5510f9e560",
                  "start": 174770,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_008bdb33eda84521b98336d329b9966d",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4c20f96d6f5048bf8289be932efca4b9",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_323d05896d3d4d229ba1fc045211bde1",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7725c75c269845119ed1ded871b0a8a0",
                  "start": 175898,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_da8b9031c82a4bb98274a3b1e3077e8f",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f41712b005af4aaca4d69504a39e3ea1",
                  "start": 179368,
                  "end": 179619,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171373,
              "end": 179619,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T081",
              "exons": [
                {
                  "exon_id": "auto_exon_d64cf111c06d448d8c73392c3c83eb8a",
                  "start": 171373,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d83986b1bbb04aa4b14649168518da0d",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_97ae53447fb6414c93a9453d69750203",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6ea18a328c2f4cb68fcb4e2e261f0d7b",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_61dd8d53335843be909567c92a16fec6",
                  "start": 173276,
                  "end": 173946,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_dadeb05d88454110b86e1e0586c95378",
                  "start": 174770,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7c368df011084c6db8e3db2bab243aed",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_61aba4cd9d3c4b8186ff87a296c87f67",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_eff7fe35176042e9b664826a2aae8f5a",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_06eb7242206541f8828d3f56cbd197ce",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_82746c9f48ee4b55a4cd624c9f54300d",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_67c9020749f446b79c14aa0e4e7fbc55",
                  "start": 179368,
                  "end": 179800,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171373,
              "end": 179800,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T086",
              "exons": [
                {
                  "exon_id": "auto_exon_1b2af15404bf4403b52ab781469dcc42",
                  "start": 171373,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_432ab7c7078e4ffb97cf956ed9b96f48",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4aee909430184fb5b130ae3dc4c5db02",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c38cda45048d4c519328e7a06aaa60ea",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8a65e4a57d7044aca5e0cacaaded7ebf",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8d53960f9c984096930e7e90f489f3be",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_fbd33ef50a694edc896dd66d1e8dcfec",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a181e469a5d64c3eb4417480d9d867cc",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_150ec34555564241a1e2c2dfabfc9e50",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_702158606a684c819843fc0cdc72e926",
                  "start": 175898,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5943d01463ea4992b3bcff20acca8cc3",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b44f2c2c194b494c8f3713caad552b65",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171373,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T083",
              "exons": [
                {
                  "exon_id": "auto_exon_b1f370f46f5748f0982adbfc4df7064d",
                  "start": 171373,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e5ad91b61793448381b3f2795d55b49a",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ecd9d2a0f1bd435da986720e942b38d6",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6f3a2ab0c01d42d78be0da6168b2794b",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9792a09927ef4854aa7185ab1408de0a",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f6267cb9e58647978415be01420ba523",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d0bc1c0b8e9c48d2855590e349047f95",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2523101ea1534b2c91b5fadac41856a7",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_feee64884ed648629d0da4462c23d968",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ede2435ede0843c7b85617c70402a7cd",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cd40760aa2ec45379774aae88b5fefb6",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_da975ba4798f4a54aaa6d559b78ea2a9",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171373,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T088",
              "exons": [
                {
                  "exon_id": "auto_exon_03cbef2ea3b648609150f1a8671f8456",
                  "start": 171383,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_fc173e8a82d04241b725b23f6bb59dd4",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_72205364d7de4ed39fc73d5411a3142f",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_21aaf879de7e462083f74b14a35b9923",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1982c6ba145f43be9d2dc3a708cbd964",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_333e81e52e704d82ba6ead608bdadc90",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8833ccc71b6f452eaa4ce1d774b053b1",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d075db540dda4cc996c25bf7ac2cdf96",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_3e1336d6781d4c1d8a5debfead11e837",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2321294b78214098baa798d5e4fe916e",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c901a060234d4f6bbcf4c628a98481cf",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_59c76c4952cd4b27966c1d0ad27a9b0e",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171383,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T089",
              "exons": [
                {
                  "exon_id": "auto_exon_07783e8c14424542828646bdaad96829",
                  "start": 171387,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d51b531702534bd09f27ccab19d89cb6",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f27e8bbcdd844279b8cbeb05abe12609",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f931fb812f1b4b05b4dbfb499f33857d",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_24322d682da54379ab692508c1b9c8bd",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f4dfe691c4d345dd9315c4d8c4dd5291",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8a55334517074a42bf02ff718c870479",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_20506254cd004ae6876917942836691b",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_fc27939ba456467d9b5b41e96be3e94f",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_51d3bf648e7b4655b034dafac1994188",
                  "start": 175893,
                  "end": 177538,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9ebb4ba67e5d49fe8743ed79ff3dee0e",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171387,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T094",
              "exons": [
                {
                  "exon_id": "auto_exon_fe6e572e9d654af7a49229aa960f46b1",
                  "start": 171512,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e2d26e16efc34f2ab58a53df1939701a",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_26afc1789c6b40a5ae62b36050bc716e",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_91d965ac5eb14cfb82bb45110db2d6d7",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_73a32c6018694e7883f87b8a14d263ce",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d0c338ffaf8c43aaaf5e6d89d5be51db",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_46ae70f139f94c519493d16d999e49f3",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ca0e1d2dce2f4081a6876ba304224a82",
                  "start": 175122,
                  "end": 175244,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_936fcc0ba1954e46ba081a801a4d713e",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f7f5f96fa80e4a9fa1147920cb964140",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_75d8e5bd9ed94107a23eaaae41079bad",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_dda50819789649e1963bda66f9960b1a",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171512,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034965",
          "gene_name": "Zm00001d034965",
          "gene_type": "protein_coding",
          "start": 290046,
          "end": 293456,
          "strand": "-",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034965_T002",
              "exons": [
                {
                  "exon_id": "auto_exon_5096c1943d56490da9348e4d51fef9c6",
                  "start": 290046,
                  "end": 290446,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e0f6a9f7475548feb9975d8233629a9a",
                  "start": 290648,
                  "end": 290724,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_16c1e5469f4e4177a68f6afd2e334f1d",
                  "start": 290825,
                  "end": 290871,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a7d0548726a848bb86b598f198d82bd3",
                  "start": 291151,
                  "end": 291251,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7598fecde6e844cd98f1bc4b1da84c42",
                  "start": 291356,
                  "end": 291445,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_3e68ee20655842baa63c6f5e115a4713",
                  "start": 291658,
                  "end": 291786,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_858e4e965dd84b2790e22b01ba165996",
                  "start": 291882,
                  "end": 292093,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_61a07c2432414a8c9f8fd4c73411e092",
                  "start": 292499,
                  "end": 292783,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5d8bccf3076e4735b51ccb95ac8fc720",
                  "start": 293124,
                  "end": 293456,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 290046,
              "end": 293456,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034965_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_dbcdff70aa6c4f7ca7787ea4346c25b6",
                  "start": 290046,
                  "end": 290446,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8341f62eebc84732984c02910aeca47c",
                  "start": 290648,
                  "end": 290724,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_34ed853a8a6b4a859beae502e464286c",
                  "start": 290825,
                  "end": 290871,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_16187778970041f18b76c48343b21994",
                  "start": 291151,
                  "end": 291251,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_dfaa1ecc945c4d8d834a205d127c6041",
                  "start": 291356,
                  "end": 291445,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_bb09123c5afd483596aa044a77e7f389",
                  "start": 291658,
                  "end": 291786,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_13105f5393a1496984664f1b5bc5022f",
                  "start": 291882,
                  "end": 292000,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_3e0c2a5d84c6472fa3993173b238c98b",
                  "start": 292499,
                  "end": 292783,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7484992e859248c39265610d78623b38",
                  "start": 293124,
                  "end": 293456,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 290046,
              "end": 293456,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034965_T003",
              "exons": [
                {
                  "exon_id": "auto_exon_dcab0533e2c24efa8d7e1bf814f0d911",
                  "start": 290197,
                  "end": 290446,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a25110e38fc54749abb3c2a771d1205f",
                  "start": 290648,
                  "end": 290724,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_00804487f567406caa9fe39d38210c01",
                  "start": 290825,
                  "end": 290871,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_125f874bdf6b4051b15772a4566bb725",
                  "start": 291151,
                  "end": 291251,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9c363c44485b4b7eb6174935defd3a45",
                  "start": 291356,
                  "end": 291445,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_0dcd0195d8574e89ad1919b074f0848a",
                  "start": 291658,
                  "end": 291786,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7472b5ba70154b6fb543ce50322a954c",
                  "start": 291882,
                  "end": 292031,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cbbcc1587bca401c9c8190a7eed5dda3",
                  "start": 292499,
                  "end": 292771,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 290197,
              "end": 292771,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034965_T004",
              "exons": [
                {
                  "exon_id": "auto_exon_f1b79632d95b4034af4f52e1ec506b80",
                  "start": 290197,
                  "end": 290446,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e3b473247668457ab3951f9a6a5f4b23",
                  "start": 290648,
                  "end": 290724,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1845c3ff148b4e2eba5c0685e4396e49",
                  "start": 290825,
                  "end": 290871,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4bee25f089e54358b7c8a027dcf85072",
                  "start": 291151,
                  "end": 291251,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f0307f5641894c60a692502a3065de40",
                  "start": 291356,
                  "end": 291445,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e6e1dd6c837741fd9c6be86df832b7a0",
                  "start": 291658,
                  "end": 291786,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_02457dafc0f74c629f354437241f31c0",
                  "start": 291882,
                  "end": 292031,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_17635f9ee146427ea4dba3d178b5297e",
                  "start": 292499,
                  "end": 292777,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7de525994da0426cad5ef55b6979383d",
                  "start": 293124,
                  "end": 293456,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 290197,
              "end": 293456,
              "strand": "-",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034966",
          "gene_name": "Zm00001d034966",
          "gene_type": "protein_coding",
          "start": 295085,
          "end": 295506,
          "strand": "+",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034966_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_026633561dc9424f8b1eadce67f68e7a",
                  "start": 295085,
                  "end": 295506,
                  "strand": "+",
                  "chrom": "chr6"
                }
              ],
              "start": 295085,
              "end": 295506,
              "strand": "+",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034967",
          "gene_name": "Zm00001d034967",
          "gene_type": "protein_coding",
          "start": 378466,
          "end": 379260,
          "strand": "+",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034967_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_3a266eccbf4442e0a2ba4f369787c017",
                  "start": 378466,
                  "end": 378996,
                  "strand": "+",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_28ea83aa2b004796bb2b29b68d301d43",
                  "start": 379198,
                  "end": 379260,
                  "strand": "+",
                  "chrom": "chr6"
                }
              ],
              "start": 378466,
              "end": 379260,
              "strand": "+",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034968",
          "gene_name": "Zm00001d034968",
          "gene_type": "protein_coding",
          "start": 379629,
          "end": 385466,
          "strand": "-",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034968_T002",
              "exons": [
                {
                  "exon_id": "auto_exon_f7c24b5e4d624b42b9bd3207733b90fd",
                  "start": 379629,
                  "end": 379915,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_31e1d603c11c4b5c8e4d412dae8b1ffb",
                  "start": 379992,
                  "end": 381756,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_976298a5d5e94f149fd4f5e25cd34060",
                  "start": 382124,
                  "end": 382254,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cc4919309b144dc1bd795760641e153c",
                  "start": 382335,
                  "end": 382435,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e35f3006421a4972ae84c50ab67f7d7c",
                  "start": 382534,
                  "end": 382616,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f8741ae912ee48d791f13556a99f9d6f",
                  "start": 382717,
                  "end": 382816,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ce310ee2d8f845b089f02fca7555e4db",
                  "start": 382902,
                  "end": 383058,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a079fc8ba79e47998e1b954f3f0fdb38",
                  "start": 383255,
                  "end": 383314,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_082400ac4ba642e6b0f312a258a8f750",
                  "start": 383860,
                  "end": 383933,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_fe58328f8bad4f8d95b25e88e1e23ce2",
                  "start": 384095,
                  "end": 384167,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e4602c5c7de543e3bd7dbfa45a605e95",
                  "start": 384248,
                  "end": 384299,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5d2b20d60bc54e2193cfce44dcb5c9a7",
                  "start": 384422,
                  "end": 384905,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e14dbf2374024b698d97b8390401d954",
                  "start": 385017,
                  "end": 385174,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ff3979f093b642458d65d712f18a935a",
                  "start": 385295,
                  "end": 385466,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 379629,
              "end": 385466,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034968_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_c08174f8e4a248c49a1607cbb730aef4",
                  "start": 379629,
                  "end": 379915,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4b462eab065645dc83775547e6084a0d",
                  "start": 379992,
                  "end": 381756,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9217a79a065744bc9bee788dfe142c3a",
                  "start": 382124,
                  "end": 382254,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c6e84c7bc8b64020b6d1c7c1b60701c2",
                  "start": 382335,
                  "end": 382435,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_658a7367ba184e1eb214e1818a6d72ec",
                  "start": 382534,
                  "end": 382616,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ca01d567856a436d9e5623c826f10826",
                  "start": 382717,
                  "end": 382816,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_afd03bdf9c6041e4a756448f28243b9d",
                  "start": 382902,
                  "end": 383058,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_98cdc654d78e451b88f87ad023ac7393",
                  "start": 383255,
                  "end": 383314,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_329f61add390429686bdc37994efc88e",
                  "start": 383860,
                  "end": 383933,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_82f12a16d7fa4f86aeb55efa37d20dad",
                  "start": 384095,
                  "end": 384167,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_29d9c568f4f641cfb7164124a70709a6",
                  "start": 384248,
                  "end": 384299,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_36d6bfe549024fe0ab057366a1147cde",
                  "start": 384422,
                  "end": 384693,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b4256c4bd9a94923a862fcc8d67848fd",
                  "start": 384841,
                  "end": 384905,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a6143bedf76447afbaec115f6ce5f642",
                  "start": 385017,
                  "end": 385174,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_09acf835465f44f09f121e90dab04c5d",
                  "start": 385295,
                  "end": 385466,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 379629,
              "end": 385466,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034968_T004",
              "exons": [
                {
                  "exon_id": "auto_exon_cce6526191184f5e8fec327f2edc3db5",
                  "start": 380883,
                  "end": 381756,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_23e7129f6509429abcdd21c231a0f573",
                  "start": 382124,
                  "end": 382254,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5af9ddba2b764149a1d47f6cccf3a1fa",
                  "start": 382335,
                  "end": 382435,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_96b87d4cff1a41fd9e469a6ed1fbbd99",
                  "start": 382534,
                  "end": 382616,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9e4e8bb1ca044c52941776543076c29c",
                  "start": 382717,
                  "end": 382816,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8753bbdd9a7f4f2891743aaa390669e9",
                  "start": 382902,
                  "end": 383058,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_30d441c1cd2e4bfcbce01a6c81e5096e",
                  "start": 383255,
                  "end": 383314,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a0b8965f81284301b76c67e061bc6c5a",
                  "start": 383860,
                  "end": 383933,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cdb7b89df90d41d3b2b729dcabd4d414",
                  "start": 384095,
                  "end": 384167,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cbd3c650f15d4a4dab077453f5d35fe8",
                  "start": 384248,
                  "end": 384299,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9843722ede1f4f59a90eaf45e14bb2e8",
                  "start": 384422,
                  "end": 384549,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_23954b462c9744d5bee1491cb8e73a00",
                  "start": 384841,
                  "end": 384905,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_03c2a58c59d24d20852b1b005f5bdb31",
                  "start": 385017,
                  "end": 385174,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_93ac7a2ca1d44cb4a267c4c4e9fa8541",
                  "start": 385295,
                  "end": 385449,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 380883,
              "end": 385449,
              "strand": "-",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034969",
          "gene_name": "Zm00001d034969",
          "gene_type": "protein_coding",
          "start": 387465,
          "end": 388055,
          "strand": "-",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034969_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_0db0680c519e4d898ab31dd85fddeb73",
                  "start": 387465,
                  "end": 388055,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 387465,
              "end": 388055,
              "strand": "-",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034970",
          "gene_name": "Zm00001d034970",
          "gene_type": "protein_coding",
          "start": 388280,
          "end": 393342,
          "strand": "-",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034970_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_0591483fe7f84f218d73fc38fac22a1e",
                  "start": 388280,
                  "end": 388721,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_da9f8e5606004430a5f7cd6ef53b1414",
                  "start": 388808,
                  "end": 388897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f47d06a3d4ca435494dd8395a609c869",
                  "start": 389135,
                  "end": 389236,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_17a2fba465a445cbbe85739eb8fcdc24",
                  "start": 389779,
                  "end": 389839,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e3f5620d2ba1411c88248d9c7414a173",
                  "start": 389931,
                  "end": 390043,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1a8a7754fb4d443f9fe869fcbaa3b7a7",
                  "start": 390523,
                  "end": 390600,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_38593500f05943749168335958ca545e",
                  "start": 390691,
                  "end": 390831,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_379c84370cb94e61bef13ec199bc32f0",
                  "start": 390924,
                  "end": 391088,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_022a7c86b2d8496481e426a039d68cae",
                  "start": 391164,
                  "end": 391256,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ecc3204b19664836a7489ddd5b1579c0",
                  "start": 391447,
                  "end": 391513,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_88dc91fd5f1e4e6daec4b95cbe8825ff",
                  "start": 391657,
                  "end": 391760,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cb44c4ee90284f4c8bebd7115b4402f7",
                  "start": 392124,
                  "end": 392260,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_496bfdb9514a4183b59f4f2d29fd39e2",
                  "start": 392525,
                  "end": 393342,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 388280,
              "end": 393342,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034970_T002",
              "exons": [
                {
                  "exon_id": "auto_exon_27178ed82fc54a309c04b9d01c22ed78",
                  "start": 388280,
                  "end": 388721,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_91560d93fee648e49137d858b1e5f2d3",
                  "start": 388808,
                  "end": 388897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_27c3ce6b2018440eb523ff0638a81a9b",
                  "start": 389135,
                  "end": 389236,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a87a309398104aad88946d2702acc1da",
                  "start": 389332,
                  "end": 389499,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_0931fa6aee0041f1b5db463bc7ed970c",
                  "start": 389779,
                  "end": 389839,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8f9173fc101a4b87a71bb5c580a2c4e7",
                  "start": 389931,
                  "end": 390043,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_0dd16adb8e6844889b4d34dc2a695805",
                  "start": 390523,
                  "end": 390600,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6a74b1804e2e435598e9673b53901b3a",
                  "start": 390691,
                  "end": 390831,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_024e78f6d9ee4b38a78670162a920f76",
                  "start": 390924,
                  "end": 391088,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1de4cb21fd834f6ba003ec54f17498cf",
                  "start": 391164,
                  "end": 391256,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ce6c547d567b4b5181edb5c9c4a3ff9a",
                  "start": 391447,
                  "end": 391513,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d448130aec1142e28ad4c00e36b33d24",
                  "start": 391657,
                  "end": 391760,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1f0a630bb72840ff8f4e2bcce416a7f1",
                  "start": 392124,
                  "end": 392260,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a2b9bab0083443158669c554660efe5e",
                  "start": 392525,
                  "end": 393342,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 388280,
              "end": 393342,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034970_T003",
              "exons": [
                {
                  "exon_id": "auto_exon_106d58c3c04341c3ad713ed8ea00993e",
                  "start": 388289,
                  "end": 388721,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_70ebbbb493f642b0a53c2931849157a5",
                  "start": 388808,
                  "end": 388897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cce3c0a6dbb741b3968ef26eb6d1d49c",
                  "start": 389135,
                  "end": 389839,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d52ae3a4df084aa9aee4cbcbff5d17b9",
                  "start": 389931,
                  "end": 390043,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f458defecc8a43bfa9a42068edc54c6d",
                  "start": 390523,
                  "end": 390600,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b10e8e410a844d0aa7e0abb17c8a93c5",
                  "start": 390691,
                  "end": 390831,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5d479ce733484a56ad9d7df81b75b8d9",
                  "start": 390924,
                  "end": 391088,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b71a5d193b9647fbb6e28f1ab339b664",
                  "start": 391164,
                  "end": 391256,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b47c6bce55eb4147857f1b391d807c83",
                  "start": 391447,
                  "end": 391513,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1da6f90476f94b7e8d8ff5b3877d112f",
                  "start": 391657,
                  "end": 391760,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_67060a7e0b1742f1a541613941b50442",
                  "start": 392124,
                  "end": 392260,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a1340635bb7a46d59fc0c323efb14cdc",
                  "start": 392525,
                  "end": 392897,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 388289,
              "end": 392897,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034970_T004",
              "exons": [
                {
                  "exon_id": "auto_exon_e92f8b0b80c445ac9e832d4f07bfe523",
                  "start": 388329,
                  "end": 388721,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_feeaf1ef95484f97b566c72cfa27658e",
                  "start": 388808,
                  "end": 388897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ac325c0d77ea45159a4e79014665bf7c",
                  "start": 389135,
                  "end": 389499,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_53b0c87bf23f4f96bec4bf036e12782c",
                  "start": 389779,
                  "end": 389839,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7a8175d456e9481c8d1aa792dc51acb2",
                  "start": 389931,
                  "end": 390043,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cdb333ddb7c54cb589e3df9c3076d2a8",
                  "start": 390523,
                  "end": 390600,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_11efcaca0b2d433c979128f0ef243453",
                  "start": 390691,
                  "end": 390831,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_36297ba0d50b4268b46cbb491b72dc4e",
                  "start": 390924,
                  "end": 391088,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c6a3b39455284329a2c00b764c4b7861",
                  "start": 391164,
                  "end": 391256,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7533e2d8234c4fb9b732d38f18987d16",
                  "start": 391657,
                  "end": 391760,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_08b99057da6f4aff8c92ea5f858530b9",
                  "start": 392124,
                  "end": 392260,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a9675ba4f3be4c72ac87d5fe078e2794",
                  "start": 392525,
                  "end": 392918,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 388329,
              "end": 392918,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034970_T005",
              "exons": [
                {
                  "exon_id": "auto_exon_c9a5435b9e6745c7820b591db66d6b2e",
                  "start": 388473,
                  "end": 388721,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_fa2b80edb3b14f3198e6ab2a71e69413",
                  "start": 388808,
                  "end": 388897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2db0f8d8190142f0a3962792627db939",
                  "start": 389135,
                  "end": 389236,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a0e0f78c4db1437483a8912536a8c091",
                  "start": 389332,
                  "end": 389499,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9e802146c7ba4141b61e178ddb4da067",
                  "start": 389779,
                  "end": 389839,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_901362ed70e24887a290192225697aee",
                  "start": 389931,
                  "end": 390043,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d7510180eeba4f33b3d113020589cf05",
                  "start": 390523,
                  "end": 390600,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_340ca608ea934826913e92274293f89c",
                  "start": 390691,
                  "end": 390831,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_384c3ae9613542e08680640cf35750e4",
                  "start": 390924,
                  "end": 391088,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7e082bef76c64ffa85d79d81604c4f0a",
                  "start": 391164,
                  "end": 391256,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_63199f265fba4a2eb58dca1888d07b28",
                  "start": 391447,
                  "end": 391513,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_421e9600464b4075a2d0c30de5f661a4",
                  "start": 391657,
                  "end": 391760,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9cbf284ec7ef4aaf96d125e6fc44c404",
                  "start": 392124,
                  "end": 392260,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7414f830de33465fb84dfdb08620a339",
                  "start": 393015,
                  "end": 393116,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 388473,
              "end": 393116,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034970_T006",
              "exons": [
                {
                  "exon_id": "auto_exon_66a13a8a48ad4c1d8feab40beff923d1",
                  "start": 389075,
                  "end": 389236,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_31346c4d44c143499620d4b3362fd13c",
                  "start": 389332,
                  "end": 389499,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_00b2619bce524667b3e4a1b2aea7e192",
                  "start": 389779,
                  "end": 389839,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d90a29b9bf5f4759b1f2413a854fecdc",
                  "start": 389931,
                  "end": 390043,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a84e9b39222249e0954cd5f0ce721b0b",
                  "start": 390523,
                  "end": 390600,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9d2021d7475746e9a971c923f5104539",
                  "start": 390691,
                  "end": 390831,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ebe1b937033f420093c0f8dea1834005",
                  "start": 390924,
                  "end": 391088,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9c13739527224c2aa378f08b87a07ffe",
                  "start": 391164,
                  "end": 391256,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a7bd5f9c1e634c938a8a15fb5f01842d",
                  "start": 391447,
                  "end": 391513,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_847a7e4577de4c1a83b63f6363b8c2a2",
                  "start": 391657,
                  "end": 391760,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_eba944ff00da479aba3c3a4c4e8bb725",
                  "start": 392124,
                  "end": 392260,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_96110e42f39e426f9d9b1464aec1fcf3",
                  "start": 392525,
                  "end": 392916,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 389075,
              "end": 392916,
              "strand": "-",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034971",
          "gene_name": "Zm00001d034971",
          "gene_type": "protein_coding",
          "start": 394181,
          "end": 394622,
          "strand": "+",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034971_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_2b1fbf0603b949a2b4e2ef27eef6e91e",
                  "start": 394181,
                  "end": 394391,
                  "strand": "+",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_31aaca9a3e694855ae0e70d5e509d80b",
                  "start": 394618,
                  "end": 394622,
                  "strand": "+",
                  "chrom": "chr6"
                }
              ],
              "start": 394181,
              "end": 394622,
              "strand": "+",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034972",
          "gene_name": "Zm00001d034972",
          "gene_type": "protein_coding",
          "start": 395120,
          "end": 395632,
          "strand": "-",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034972_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_8f4e92f4856e41fb89bceecdab68fb8f",
                  "start": 395120,
                  "end": 395632,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 395120,
              "end": 395632,
              "strand": "-",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034973",
          "gene_name": "Zm00001d034973",
          "gene_type": "protein_coding",
          "start": 479943,
          "end": 480971,
          "strand": "+",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034973_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_05afd9914f2544e0b4d220685bf6bc5c",
                  "start": 479943,
                  "end": 480971,
                  "strand": "+",
                  "chrom": "chr6"
                }
              ],
              "start": 479943,
              "end": 480971,
              "strand": "+",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034976",
          "gene_name": "Zm00001d034976",
          "gene_type": "protein_coding",
          "start": 639235,
          "end": 639876,
          "strand": "-",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034976_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_d38c0ced9cfc4c2194bd17370b4ecf73",
                  "start": 639235,
                  "end": 639876,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 639235,
              "end": 639876,
              "strand": "-",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034977",
          "gene_name": "Zm00001d034977",
          "gene_type": "protein_coding",
          "start": 663669,
          "end": 664313,
          "strand": "-",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034977_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_f76db9a45986453cb6551ef57cfbe134",
                  "start": 663669,
                  "end": 664313,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 663669,
              "end": 664313,
              "strand": "-",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034978",
          "gene_name": "Zm00001d034978",
          "gene_type": "protein_coding",
          "start": 669527,
          "end": 670473,
          "strand": "-",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034978_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_b85596a5cf4944fcbff33c2ceed233b5",
                  "start": 669527,
                  "end": 670127,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c20e257c6ffb4444bc33cc29a51faf31",
                  "start": 670221,
                  "end": 670473,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 669527,
              "end": 670473,
              "strand": "-",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034979",
          "gene_name": "Zm00001d034979",
          "gene_type": "protein_coding",
          "start": 714095,
          "end": 715069,
          "strand": "+",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034979_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_3f74d31ce7c64dfbaaa84425dcb38ea3",
                  "start": 714095,
                  "end": 715069,
                  "strand": "+",
                  "chrom": "chr6"
                }
              ],
              "start": 714095,
              "end": 715069,
              "strand": "+",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034981",
          "gene_name": "Zm00001d034981",
          "gene_type": "protein_coding",
          "start": 726875,
          "end": 728620,
          "strand": "-",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034981_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_ecd8b9b028e84f21916f21ffdc49ef7f",
                  "start": 726875,
                  "end": 727038,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4f7ccf9b2de84c6e997eb14db3dc817f",
                  "start": 727265,
                  "end": 727299,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f282eab5ec804f2fb562dbd2a5c4b1e0",
                  "start": 727381,
                  "end": 727544,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8f501856024c462fbb2e29711cb7e449",
                  "start": 727714,
                  "end": 727789,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5e5fd6ca5ae3401295aec0f7ea5934fb",
                  "start": 728103,
                  "end": 728187,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_219974a1a1e44c0f828bb9922c067b33",
                  "start": 728520,
                  "end": 728620,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 726875,
              "end": 728620,
              "strand": "-",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034983",
          "gene_name": "Zm00001d034983",
          "gene_type": "protein_coding",
          "start": 786226,
          "end": 787774,
          "strand": "+",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034983_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_684acd5d31c04f02b28c69ed7e6be12a",
                  "start": 786226,
                  "end": 787774,
                  "strand": "+",
                  "chrom": "chr6"
                }
              ],
              "start": 786226,
              "end": 787774,
              "strand": "+",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034984",
          "gene_name": "Zm00001d034984",
          "gene_type": "protein_coding",
          "start": 798676,
          "end": 799889,
          "strand": "-",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034984_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_6edf2cdde4a9487ebc855fb16fbb1c85",
                  "start": 798676,
                  "end": 799529,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_54584dc2286d4f7fad25b6db89cc34a9",
                  "start": 799619,
                  "end": 799889,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 798676,
              "end": 799889,
              "strand": "-",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034985",
          "gene_name": "Zm00001d034985",
          "gene_type": "protein_coding",
          "start": 801329,
          "end": 801845,
          "strand": "-",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034985_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_ade7889a4de04d12a52f60a27531b706",
                  "start": 801329,
                  "end": 801415,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_0a01c75d7e864c0a824f69adc5a39ed8",
                  "start": 801501,
                  "end": 801845,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 801329,
              "end": 801845,
              "strand": "-",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034986",
          "gene_name": "Zm00001d034986",
          "gene_type": "protein_coding",
          "start": 840921,
          "end": 842925,
          "strand": "+",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034986_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_84c650eb931b41b68cf15a063be92715",
                  "start": 840921,
                  "end": 841939,
                  "strand": "+",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f621de8754314d91bfd72dafa9fb1eb9",
                  "start": 842017,
                  "end": 842925,
                  "strand": "+",
                  "chrom": "chr6"
                }
              ],
              "start": 840921,
              "end": 842925,
              "strand": "+",
              "chrom": "chr6"
            }
          ]
        }
      ]
      this.loading=false
      window.plot_model = {}
      this.renderVariantViewer(this.position, start, end, this.genes, this.phewas)

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
      this.loading=true
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
      this.genes =  [
        {
          "gene_id": "Zm00001d034964",
          "gene_name": "Zm00001d034964",
          "gene_type": "protein_coding",
          "start": 168702,
          "end": 179846,
          "strand": "-",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034964_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_49905eb1a85c4d5face0c277fc9a3b63",
                  "start": 168702,
                  "end": 170561,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5cdc094bc49e4eddb942a554269ccbb5",
                  "start": 171526,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_77da2f8696994411858c52b3d3a266c7",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b494a903cb964647a380c6813836df41",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ff0fa9777d2b49de8668c8845fa84af8",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_266e474988cf40059a2da7fda4a3e7dc",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e4f3e114bd9d43488a6329194a6a7443",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b2f4686ea55140cebe16521e68d21ae3",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7a6713ccd3fe447c8075122470689f85",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9f4ad159870a4d37a4bfb8eeeb8cc208",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6f2ea34432d3411bbf18def159c82221",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_20d54f457e61456d86e8c4a5409b3b9f",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c2cc734cfaa04516b4f9cc427649aba9",
                  "start": 179368,
                  "end": 179837,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 168702,
              "end": 179837,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T002",
              "exons": [
                {
                  "exon_id": "auto_exon_90bb9546e3a54641a03849c871d75cee",
                  "start": 168702,
                  "end": 170561,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_bfdcaafb71ea4e36ad776984ba3a603e",
                  "start": 171526,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_691e69b9a02f4f0db613616bd7291a74",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1c455000ba75427bada766cca9de4db1",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6502ba063cc042af933231c2e6165a13",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2ace1fa36643486fafe07999a364f978",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7f292860307b408c970092a91342ff4f",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_bd207d75d7e146f1aadfd27c1202446a",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ad8078f672ee44a980b5fca03491c159",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_638c566b7baf4878ac5dbac0984e851b",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4d55af9b78c048549f1304dce5f40adc",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2e0b499d79634f6ea1375ab1434953b3",
                  "start": 179368,
                  "end": 179846,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 168702,
              "end": 179846,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T003",
              "exons": [
                {
                  "exon_id": "auto_exon_27a9ae49232b48d198987ad43892e6cf",
                  "start": 168771,
                  "end": 170561,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6393e482d12742979918a4098071d647",
                  "start": 171526,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_78432766f26f4502af3bd88d53c77425",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_52d09c6bc222408f955697272aadaa0c",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c6ad670bcfc74330b9553237d548dc5a",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_dfb42a4f53c44535823f931df997c4b7",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f99a999769d94fbda04b8bf1d765734e",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_29b9ec14f6b3420ca828853e765dbf92",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cce0e5c62cb540c3b86a092453ba6ea9",
                  "start": 175127,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1637071911354c4b82a94a3bcdf6945a",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_0b30f288070345bdab2bcfe3340fab86",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_13d4f7f8a46542deb03a61af4fb92bfd",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_424dccecc7f242adbc154f1f92919b10",
                  "start": 179368,
                  "end": 179834,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 168771,
              "end": 179834,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T008",
              "exons": [
                {
                  "exon_id": "auto_exon_0b58c2308d584a75b3da0662ce8151a0",
                  "start": 170101,
                  "end": 170561,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_fefa54cfbacb4af698a1a69d6c17ce74",
                  "start": 171526,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1235bba7eb4e4bbba02b3754665a99fc",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_21655bfa57534c4483c5954141534062",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_953cff48e56442efa3be2ce2d3ee017f",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5d862d29916d4daea05e75f702396f94",
                  "start": 173295,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_846b5185b270424fbcbced6a327b3a35",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_24ad90bbe113488a803d7109bd588c8e",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b9d249a4b0d84cbe8d85a5e9bee786d5",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ff625adfca83420489c647db46162e91",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4afa23a5aebc43e3b216c2c39c734f69",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_157ceada4d8d4c1bad9e49192a9ca687",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4decb890dc61499a928779c383182a5f",
                  "start": 179368,
                  "end": 179834,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 170101,
              "end": 179834,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T007",
              "exons": [
                {
                  "exon_id": "auto_exon_145d5219f4e841b5b4a27bb0b297c627",
                  "start": 170101,
                  "end": 170561,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_bee49e449ee343dbbfe190ba7bfbe04b",
                  "start": 171526,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d4b6e50e0a744bf79718da16e8534640",
                  "start": 171853,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_89bc470cd5674739bdb74628e870a732",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1dc51c0199b84224a02a5d0b6e93f9ea",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ba07509e3e2d4bd2ab3db34d57058c78",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ffe0ed39f3b24634996f21dcec806399",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b8bfe4cbeacd438cbd94a9e52237790e",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_500d0f36e29a44678e25d0d6b1055832",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e5e75528c9f641f78345dd821d29a46b",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b779cfe6c46f4de2aab4517508656f64",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b1d4a124b78447dca6269e719d08eee3",
                  "start": 179368,
                  "end": 179834,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 170101,
              "end": 179834,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T011",
              "exons": [
                {
                  "exon_id": "auto_exon_cb21e2d98544455cb84454a8d24f9443",
                  "start": 170109,
                  "end": 170561,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_0cabd5303fe943d1a3e54ce1fd8e45db",
                  "start": 171526,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d5f4940564b3496988c2a8f7630cad11",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a994a8a14a69477ea2204d8da0f33c3e",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f77ac817f5bc45c48dd3038d50b7a210",
                  "start": 172724,
                  "end": 172865,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4212d116715d48629c65c147294bd8cf",
                  "start": 173030,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4393899a637e4ea0a90ac0a23ae50a59",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7ce732ca1e794817b72f5f910e58f2ea",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b5296552a1b04b9d97c748e046eed12d",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_bb8f8a623c504478bf7e0989bb4cb6b5",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d2f87b06c5e84ac1b7087e221168edbb",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9bb8204bebf84a32ab5392eb8fb89037",
                  "start": 175893,
                  "end": 176401,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 170109,
              "end": 176401,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T012",
              "exons": [
                {
                  "exon_id": "auto_exon_bfd637279fb74e969d89eb100a733f37",
                  "start": 170109,
                  "end": 170561,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cb2b2f4166844b04ad6e580c8cacf2e8",
                  "start": 171526,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9249abcd0d84405eab826ac2a0864b14",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6756e9a03a08426688c5732d7454a2b2",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1a5f0187b4404692a983d73c2cdd1b4b",
                  "start": 172724,
                  "end": 172851,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1f29ae5b1b8b4f3e84c5d08f69f3215f",
                  "start": 173030,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a453a4ff6078449d848ac938c7caca51",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_33d14429a0ba4801944386659dce864d",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_05c6e70102c849f2a2baeff7b66772db",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1f7607dce50741be9f12368025ea7bcd",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_98b7d38e43ad42faaa735d99230a249f",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_bf24e7650a654c37a7983023bfd9aa8b",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d12bc40f754a403ea7246d93eae0e627",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ac37ab493df7416b9e5ef0e9bb0eae41",
                  "start": 179368,
                  "end": 179830,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 170109,
              "end": 179830,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T015",
              "exons": [
                {
                  "exon_id": "auto_exon_19c826b87f6b4c2dada1174b0a1f8ea6",
                  "start": 170113,
                  "end": 170561,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d0dca8fc1b3d41baba57a9fb9bd40fb5",
                  "start": 171526,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_be181d5d693949799b7438a22f05a5d6",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f0cb767fc8c440aeb649b44882f3426d",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8c2d1251962f4c3a8c658367f572b492",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_494fa1599c7b46478fb8d65c28d3bae8",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9c748dfcc81447e38c04756dfae019ca",
                  "start": 174654,
                  "end": 174849,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_08facc30790b460eb723278ede2e4451",
                  "start": 174897,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_34e742257e4249f083af82f96e4a771a",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d7344d3056884352b237384daff68ab0",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_3d17a86bbdb6475d9370384692fcfd67",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_495c4ef3d4a944e6954f6b2e4bec1ede",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_de2fc40790c0457285a478cc5ad9b5cf",
                  "start": 179368,
                  "end": 179833,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 170113,
              "end": 179833,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T017",
              "exons": [
                {
                  "exon_id": "auto_exon_77669a39c79a4cff849766b11d4e4629",
                  "start": 170245,
                  "end": 170561,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9acc48db05f74f2c904e128b83100943",
                  "start": 171526,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9c4cabffb9ae4738a979ee716a479ee4",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e353ccff19de4be280f0eb3110f20dea",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ae73c4748ab446fab21c619469d97e49",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cd4c35a9b862403f82681cae767d5bb5",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_edd33e47c0b8447ea144a4887947d901",
                  "start": 174654,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_868b3463496844afafea725dc2280ba0",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1f2542fd920d47cd810dc4efe91e1bb4",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_007cdb7db38443099ca6881caf71a42f",
                  "start": 175893,
                  "end": 176012,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 170245,
              "end": 176012,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T019",
              "exons": [
                {
                  "exon_id": "auto_exon_a0d5f7fc451f4fdd92d7841465b39248",
                  "start": 170280,
                  "end": 170561,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b40c8972bae64a4595a470069ac0d6c6",
                  "start": 171526,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_3199c9818c624190acecc2e8774a833d",
                  "start": 171853,
                  "end": 171933,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_0e48ad5ff268488e8a13ff69a5d62fc9",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_bfb868ef5e60459ea0a89aabb4af7858",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c18eaccfa2444822bf335f136ea0dc04",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_92884ae0e25c4cd69768009fc299bd18",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_da83542ac60c460692b2fa8d29ab4f6a",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e13dee98596641fcb8ef0b1f3d72ac65",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_362049fbf7b5459b8fa309d9f43a248d",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1538b99774364718b13bd4c7c8d32bcf",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d39b1ba0703a4c88b4f0a9e2c19e54ab",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_91b3dcb760404736b160bb432aab005a",
                  "start": 179720,
                  "end": 179834,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 170280,
              "end": 179834,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T021",
              "exons": [
                {
                  "exon_id": "auto_exon_293d5b5a16224970a059c0f20ee5408e",
                  "start": 170281,
                  "end": 170561,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5081aaa6052b4363a444da48a9a3053e",
                  "start": 171526,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_fa4b5bd6f35a4684a7b72a5f9b468b4e",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5430ad8afbbf42bf80d72da31fb04dab",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_332c59c53b6c40a7b3e621c19856a176",
                  "start": 172724,
                  "end": 173041,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_16561442ce1c4e81a3fd2a73906c1bde",
                  "start": 173431,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e1c63ffb09e14e028f1ce4846de4b5f0",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ae068a0765ec4d0e930e988b367724ac",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_69d88a277b21454abd97e8f7e3b2a4a2",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ccb3a8fbcbfd4968ac4ceff2e0ced94d",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5e4b9a362c934bd7b3bbd65bcec3ab72",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b1f4c03bf697475f91cf87fa4f718822",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5f24b9b21ff944bba8d1ae6e02b2c520",
                  "start": 179368,
                  "end": 179846,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 170281,
              "end": 179846,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T022",
              "exons": [
                {
                  "exon_id": "auto_exon_29bb2873623d47c1b89c2e1c750905ce",
                  "start": 170320,
                  "end": 170388,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5b51682747f144459d4ad3453fc1bd99",
                  "start": 171364,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2827e4b239eb47718725c14d826abf0c",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_89a2e1ff55cf4ad981999b22681047c3",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cedb50993dac4e9e941e123788b58607",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c702816407a0489dbbac2c16bdd19dc8",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e9743bb434144e2084ccc28c9aa69954",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_acc7a100b9024a468fe8b3fe975287dd",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_42f1c07c85284951b91f0e90c8e1c025",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_15c027d45ee04ea1922f6284b14f7cfb",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cfa99c8f2b364ff681075cf3d9b08557",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_73ac6cf4e30c4afdac400b29297623ef",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_538d809295704cc88b6710c2d51969bb",
                  "start": 179368,
                  "end": 179834,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 170320,
              "end": 179834,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T023",
              "exons": [
                {
                  "exon_id": "auto_exon_05cf9b6c51b948efa2bd2fe59279ff4d",
                  "start": 171246,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a9087518ea06417c82d5d99e1aacb15c",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_fa95cfee28b44286bfdcf829b706da8b",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5a9d51c2caa242dc8db3d1494fbfc690",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_3b2fe32094b04556abf5215f29f99f3a",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d8e638c0cf604f1991bfb37a1aeb7d70",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6af2bc6f9194453ea02a5878cb73e5c0",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_df5154b05aae494aba0ac4a7c8b2bd85",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7d716681ceb04fc589a32a1a979a931a",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_00beb37b7cf64d5482f88d161fe32cd0",
                  "start": 175893,
                  "end": 177769,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171246,
              "end": 177769,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T024",
              "exons": [
                {
                  "exon_id": "auto_exon_be37587f11204e45be843ef8a5cd8bc5",
                  "start": 171260,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_bb4f87e5682a470a8419849a354aa6bc",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_042662f987fe4ac1a2897662c54d676f",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e0d2b27b4a07466a9ac54074b7076ce1",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_3fd363b7866d4f34b86c2ef128ac8748",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c9d8443d0b4f4c579a310bb599d12239",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_72215170335c4c2d81ef63a8be70698e",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6350ff5809004a0fb07ebf0dec6c8fd9",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d9f1619528af433994bb7aa71dd9ba75",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f481bfa43ff44e6e839186fad3c045f4",
                  "start": 175898,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2dadc575dcb24b519700bff5fe4fa212",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a86a3086ba304a369feca88314363434",
                  "start": 179368,
                  "end": 179830,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171260,
              "end": 179830,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T025",
              "exons": [
                {
                  "exon_id": "auto_exon_18e69da3ecb54d04b9e9c458d3c520a0",
                  "start": 171267,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8d77e9e7febf40e5968944d20839fa8f",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2b4140f34b1841d49bdd15677e72dfea",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ef5fc1fef2ed4d8189004a39c5e1b770",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2e53593237264fe59d484fca06020db1",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9622f502b3d64e018508a14263870e58",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_04183d1deb444ee39eef8c115e7fdfda",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_3a7595e97c8942428b06c1a9e8f3709b",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_95340b464d154e7281dad816e5cb56ca",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_78f4308486d44351b112802fc5551643",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_0567cb6a5229452991dccae8e4028180",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_636f8c6fed034b02a1848ea109382c25",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171267,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T026",
              "exons": [
                {
                  "exon_id": "auto_exon_089e69e8c25b4f87b8c754db5883a425",
                  "start": 171288,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6f847630a2f14b39b8bb4d10c0eefae4",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2468e0e4a1ab4ed8b931a4485cb2c47d",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f787c5b62316495b9ac343d0dc37929c",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c39cc1bc5fcb40a5a5b6d9c5f17ce24f",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_81bebaf1f5fc4d05b05a4744aac0da6d",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_bee4441096c743569f3fefe34b0e52a9",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c1d72437d8e94920a60859cfa4a06c11",
                  "start": 175122,
                  "end": 175290,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_558d1c8ef2d549e490a47a3a08b196aa",
                  "start": 175311,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4fbeb26728c2441094e5d550932fb120",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_23c9492539da4f8d8aaac8eb2b1099af",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7d267d65ce654d43a844eaa78d6c93aa",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171288,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T028",
              "exons": [
                {
                  "exon_id": "auto_exon_b17c0b5da01d425e8e16c30e05901025",
                  "start": 171308,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9ac140d3e50046f094a4b1f54702d585",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c2d023297ea14c259754af5556062add",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_615b19096fd54e98a57fb37dcb481820",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a727eeaca66b4a39b4c816bae70bcf93",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d3598ce92144495883e84447810122b1",
                  "start": 174770,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_74d1097d45f14941b0e17867f4349eaa",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b1aa1a57d1184dbe96d3c45d24e662a1",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_dbae043d7e89403aa9a8af3c180693c5",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f9cf830cb7494e6f892770217df391ff",
                  "start": 175898,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_34bc0e1b06fc491090009c12b3f0fdd2",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f92523c2ec694aac972d8ef736e5caf5",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171308,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T027",
              "exons": [
                {
                  "exon_id": "auto_exon_e47a4f355274456c914fd3c07b997280",
                  "start": 171308,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_731c708424f74f3ca7498e9b1482edce",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_09192af5395549309c218a192f074735",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2c693937cf9d4b84894abb9fe5adf6eb",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_482697b1ec95446db12053a4898c0251",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_eeb2ffdcb5084ccca9aa57b7e97b50d2",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_bb6edff4822247ae810e139c10fa76d9",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_dce0d72c493e44b6ad0a2afd8683eccb",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b359618644a440a9bb73ac17f29c58f4",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_198559082dd541a98676fb93574bf7d8",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c8e0674d64e64510b0f8e6b811a0e38f",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_08d879acf09745fe93a49e3b3c45255a",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171308,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T029",
              "exons": [
                {
                  "exon_id": "auto_exon_21a7c92a7ca149f990d1ba3ea71d8e13",
                  "start": 171308,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_61a40b8ac304414a9091470395b9d9c7",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b04c908a9ca44f47ad6465c9c15d8b42",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5c08f1d04d484822aae307cb1063720c",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b224c4138526450dafcda8bbe151496f",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4b9ff55a06074d2d9967335e8c40a54c",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2086395e79824e9b9305d61a7c697d9b",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_97c663b498f74129a8d5309e710edb5c",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ab23c055bb1f4b1992f7d55296d9d738",
                  "start": 175323,
                  "end": 175775,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8eb6e4642f8d4e2ba1c9662e2f35ac4e",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_14bbf96a9b544ef48d3fef6365408850",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_454e5d589dac4cbcbbce88bf20473e2b",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171308,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T030",
              "exons": [
                {
                  "exon_id": "auto_exon_e82c6007bec449bab19a0ff4744613f2",
                  "start": 171309,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ff82c6a1e1aa4e89a59cfeb4483ca786",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ed5c8bd0db0c44039cde100285736844",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8c6158f053da4d5a8bcbf2f7edddf830",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d2bba0fb0e5843e38c083d524dd00789",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_350ca24788684f3e9ec536c5a63f57d3",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ec2013031d2e4e0eb65af92f8123f9fb",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_92b9e42cc57f45c9b9b4c0d0ec3c1302",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a8359e86f4f24fe1ae82fbe99ca56785",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b996e482b3ee4bb2b2005b17fefed095",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4bdcfb3173104cba877335449ff66724",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_851b14b270764bf19a509ee178f55bac",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171309,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T031",
              "exons": [
                {
                  "exon_id": "auto_exon_35dbbe23086048f582bd7606c38a1e0f",
                  "start": 171312,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_caa6febc366b4995976d2c5f235ca039",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7aaca19b5b9143459be819b8dcedeaee",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9a457db2f8fa456badfcecd53b13c382",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c162e99e52764277a215817f3ec1ac4c",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_25de1f0e56714b218fe129d8b56bc66f",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6fe0600f865a4aaf93a8ab2e0b2efa8a",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c62f284879554765aa7d2076d9e3b24a",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_06c9c4c8e8aa4b7db660515d63e2611b",
                  "start": 175319,
                  "end": 175783,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6f70862f76b640189325802c0292148c",
                  "start": 175898,
                  "end": 177400,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171312,
              "end": 177400,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T032",
              "exons": [
                {
                  "exon_id": "auto_exon_492653fe815642e0b1dbeb84eb84e6e3",
                  "start": 171312,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b001b1f2ac3a40ef83f32f443a44c32d",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_76334dc016254f61ae2892b7a005d0b0",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b677baa7863747feadec98c09842f718",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_64487d3a7e114de088f08c19fad08e0f",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_73d1ed516f4042a4a9caf80d783d0ed5",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_29687817143345da8f06adcec5907eda",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a76fc0b33ea04bc8b898f590646e9a82",
                  "start": 175122,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_805cbba082f84c94916c70b5dcdd6059",
                  "start": 175898,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_78ca947d11e54fe78a004a8cd302fe9a",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_61a2cc15c1eb433e88ff7f919dea1986",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171312,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T033",
              "exons": [
                {
                  "exon_id": "auto_exon_e28bdfe5960541b298b830082033fcb7",
                  "start": 171313,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_fa325322322240fb84f341299bf8d4e4",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c1b1d88a09d041c9b3a95195eca3934f",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_41720b5b3a5d45cd8d51b9c7a0efd645",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_fbee3c26055d4f4f80d021415ffd4ca9",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_3d623641e4f74ff593f50893f729034f",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d04bd1fabc984bdc906891b19f1addd8",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8959751c8cc04ccda0dd17b6929ba95a",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c8e7bdb39413447d9e8cc8765a93fefb",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_521815f5581444ccb4bf664d00f3dd6d",
                  "start": 175897,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a1c4df9fc5194e05a92feff679598020",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1ef73baa345d490d88811f35ee10279a",
                  "start": 179368,
                  "end": 179811,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171313,
              "end": 179811,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T034",
              "exons": [
                {
                  "exon_id": "auto_exon_d66e5b870eea4c038e2d7f1e4822944a",
                  "start": 171333,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ba069b128cf24547b522bcc64a904f12",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6a1a519b62994112b97cbb6092c90df4",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7f2c0b15d9964310901d0512b7f80bc6",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2a020ab2edcc4ca08d8049eac0b0d71c",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cd75d34c5d81425f8dd75b5d21498091",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ebd7693357a9450a833156040e2ab42d",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_3f46177dcd9a420eaf0d9cca22a29a62",
                  "start": 175122,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5335cf94b1e74031abd481e20f20382d",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a2cbf5bc24d04c8eaddaedacaae6a889",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_405deb24dee748e49d85b9b3c207065d",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171333,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T035",
              "exons": [
                {
                  "exon_id": "auto_exon_24b7853f9e2b4f40b3fbff94a0605f20",
                  "start": 171336,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d923118323b24115bbe58dde8aeb685a",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6adda2f6f411477591e5126eb918dd03",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_781b269dded741249c5a9626aac7d3b9",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f5a50db98b224c9086fca68ae1b4601c",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a8062cf90220425db3fb908b415a2b57",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_eb80723a0bbb4bfe9492f653c14ba28f",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_92e22ccada59433f8edacb5a17236ec5",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ba63eecad6374626b9f2a07463ab99c7",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6adaa57956e0462a994cd159b9b1f30c",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2bbbb8b8f0714e348c8f29928f7fda25",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_343dcbe4dfdd44c2ad238b76715bb7d8",
                  "start": 179392,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171336,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T036",
              "exons": [
                {
                  "exon_id": "auto_exon_1e812a6727854a29a86303ec879a550a",
                  "start": 171341,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_39e9eeba07f54da69fd2a9774d251ce7",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e5f3831948af4a1b8bc9eea5c9e98bcd",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e1547eb4aa8a4ed4a67acfbc3ddeb6f4",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6a040310bde94f29ae5d0db6d6132642",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_526cc44c41714669b47cc77a5c0cff8f",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_36fba48a0fd74468a886e013ab51e78c",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2146504c228f4c34930f2807bb7ec8f9",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f0f0c524a37f4723b5a756653f225db7",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ebd625f2a735431295f5f5a23b30e749",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8fc71eb419e44358a42258b91e6e84cc",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b87c15fadbb94254b98e24af6166b536",
                  "start": 179368,
                  "end": 179825,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171341,
              "end": 179825,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T048",
              "exons": [
                {
                  "exon_id": "auto_exon_06bc15a6d6ed4857955f1afad6776cdd",
                  "start": 171361,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e40bedf9d7f84e82a783ed4875b8e352",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_84358ae5dc1b4cdc833518be29c6ff07",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2d7a3f4dcbff4757b461bd028c4a4cc8",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7cef12c6175c4d8a9b35541385af2391",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7df93eefcdfe461ea715884ef52e5cdf",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1163fbd3ac84455c90c67c18507a5bb3",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a9dd963a5c52483eb09060c233207128",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cb887e613c9449a9886553823fc091f4",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5c40ee0ccafa4c2abc488d1f4eda2e43",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2e8246be0fb348f4a35b56f6084ec95c",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_17a084976d46470a96c7ec35074f6196",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171361,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T050",
              "exons": [
                {
                  "exon_id": "auto_exon_3fd1f9f146d04d3bbf827aa85e71627a",
                  "start": 171367,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_88aa7e011f6e46ce8d6e5eacbbcf1071",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_280ac9d30df34c6c9fa5f06f7acc9ae3",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_dfef100b265048299952ac2dc799dc2b",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_58b83ff8e2934185aa490442b79a024f",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8510e36b83d840fba4ba67079f3bdb2d",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_0c9ece087cad485dab2093be0a6d4174",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c5b6f76a0a7440df94998933edeaca90",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_13bfe6d3bd4646629ef8edea1a1747c1",
                  "start": 175319,
                  "end": 175434,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_10efda274dbb4a0c92760994a7814acb",
                  "start": 175610,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_95f0a393d05147a389f8831eb2bef649",
                  "start": 175898,
                  "end": 176476,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171367,
              "end": 176476,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T052",
              "exons": [
                {
                  "exon_id": "auto_exon_8f121f0cd14c475dbb8a7f0f4e95c146",
                  "start": 171367,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b3ccd613ee5f43708a1013ac642a860e",
                  "start": 171853,
                  "end": 172030,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8bceb4f97ede4e948ddcee53f263a62f",
                  "start": 172453,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8623d8a286ca4ef68dcae6e9022142bb",
                  "start": 172724,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_37d8e650eaf44019a34de3def3920247",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_dc65365c14f24f399d14a06f91654263",
                  "start": 174922,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_90c6866141234635870e91f5aa9953a3",
                  "start": 175898,
                  "end": 176871,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171367,
              "end": 176871,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T054",
              "exons": [
                {
                  "exon_id": "auto_exon_481c74f0fb7e4c299b6b438336ade8ff",
                  "start": 171367,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e59fd51ac81d47bead39f72f9a0ca0dc",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_26bf778ccd4043f28110674b2bff3b03",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d5beb9a53b484ef2b66045473273c162",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b8105a5481df48acba0bad962c89f34b",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a09c0eabec524ccda3751b53ef9395b9",
                  "start": 174770,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_daf86ef18f4645ac96e13448235a9d89",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_33fb706d29d94d07a78de0bfa76fba92",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_eda9652f4bcf49f2a53010c342d894a3",
                  "start": 175319,
                  "end": 175434,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_91dce96862ae4c7ea1ca669f459cc99f",
                  "start": 175612,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_457a2eda295a4f3d9cb324cbfd6e9684",
                  "start": 175897,
                  "end": 177249,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171367,
              "end": 177249,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T055",
              "exons": [
                {
                  "exon_id": "auto_exon_aa0571761b36405187393bad83ca470d",
                  "start": 171367,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9ead81c9ce204bfa9fe31a19521c0f50",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c95ec2e75ad84088807cd8eda1b204ce",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5904608527a04925acd9ea2fa3c45fac",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b77512c898044308b4327be8191804af",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_57ca05acde1f46ad8021329a0b14f2e9",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_48af00d64def4ff5a1678f22a5d4f678",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_3f0ec9740b0c4aae9fa55e2a0f7bc56b",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e9e95ec99cf24fb281a87878884e636d",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_977c4ddd4cb2443eb635c58ecdec7aaa",
                  "start": 175893,
                  "end": 177769,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171367,
              "end": 177769,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T057",
              "exons": [
                {
                  "exon_id": "auto_exon_398e6e104d774aa692e0aa5eada84018",
                  "start": 171367,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ef7ecfc46dd34fdbb879682ae461f0e7",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7e5daab45d0a44d79c1b16139d35563b",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7d3e55acfa96447ca4eda4b5a2d34faa",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_328f6f428ce54fbeadec411049f80076",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_caf0d885ad784286be94eb519c6a0367",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_bc64b0c61b9041edb6d878927df0c04e",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d8980bb0e7b945a7a95a852914c8b8ce",
                  "start": 175122,
                  "end": 175209,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_47437b2ab29d490081d10c7cb50bf6a8",
                  "start": 175321,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_14c9e552483d4338a04ff9e7180fccfb",
                  "start": 175898,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_18d5b8eff2384c95a9f38232dc6d90b1",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6a8fd0f563724b1c924abe3f1a15d728",
                  "start": 179368,
                  "end": 179785,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171367,
              "end": 179785,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T059",
              "exons": [
                {
                  "exon_id": "auto_exon_be9dca0c3d684263ad89e2036911f4a8",
                  "start": 171367,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1b19461955dc45afabe1d4dd7a78d812",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e6e28d1bc87445ce9c50a55a321c399f",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e208a2e15060463594aba21a59f56362",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_70fb7937b4c14c75bc6de1caf68a5de6",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f902053c0bee4ff18c65c9e5b6b81a4d",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6683394151514d3f9e6fe999fabff904",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_91df0913161d458e84ddcdff4fecc7f9",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6509a7878501431b95c1c01e9b00ffb4",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f729ecfdad0c4c8c96c479e52c093ae2",
                  "start": 175898,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4f5d8308ebfd499a920ff80a7660c47e",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_53593ca6259f4c2393fe2c109bfa2d28",
                  "start": 179368,
                  "end": 179811,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171367,
              "end": 179811,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T069",
              "exons": [
                {
                  "exon_id": "auto_exon_b3db526adb724a06b5262b4a43fa3461",
                  "start": 171367,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1a3925a8a18b47f798e94b5db853e271",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_866d00d8728748f3a4a74057f970fc4f",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_526bba8bdc584918b6e2956dd46ad602",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cb8af01474ae4231a7fed9adff8218d6",
                  "start": 173276,
                  "end": 173391,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7a21354d50af4084a1c69510bd9b13cc",
                  "start": 173479,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_18c90c79fcbb437f99085980e2746033",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_231259b48820455690c0cc6fff04e611",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b6d6dc95b637447193f2d16f7c12e8db",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b3a928b389ae4065ab61a9701e430f21",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b5bd4c048fce4edd839adba74656732e",
                  "start": 175898,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8e3046a4fdd84d3ba6c7db3f314235f4",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1a72b3798bad4a31b16ab9d73a3c5fc6",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171367,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T065",
              "exons": [
                {
                  "exon_id": "auto_exon_6a8b8a0cf4d1420c9665b1b7ec1801e7",
                  "start": 171367,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_274f8a597c6c4dcfb9a8655bd260345e",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4044640286cb44539e4f97d894d022c4",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_16a1c5bbf5c64047832e357b4e2ee674",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d6246d70d35b4b16956613e6129f4145",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8c8a369bba8e4f8c94a81a5b47c2a153",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ceb9707b24b54073a3ebc6c941a88695",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9996430c704d4a469d5191b84c3d9172",
                  "start": 175122,
                  "end": 175783,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8674a501635347dabb6fa4b628760973",
                  "start": 175898,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f2cb665bd93442dd86ef1a5e82a4e072",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_0fc33ca78d194ce8a2b7b766ddabf0bc",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171367,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T070",
              "exons": [
                {
                  "exon_id": "auto_exon_07f05aa22f7b4dccb9f2dbc99fcbd4d7",
                  "start": 171367,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ba0976bf645c476c92edb796f5ad4a49",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d4b57f3c0f0c4faa8c028eb627a570ba",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6e1041c8ba1a471db1bfb648cede8959",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_24f210ff03ea44ec9121e9e52f48b120",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_65726c1f4a3343a784adcaa5386b53fb",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_61c83b481d3349c78a0adbf00ef427b2",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_79d5477aaf5c41829e2e8cb62fb082b8",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_91610240f9794a5fad9c47f93603262a",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_841bf5513d1c48f397d9cba9ff2987f9",
                  "start": 175900,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_63574965ad6d4da6a4a956e13cc503cd",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8baf37d35e0443d59e8a97915e5df3e2",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171367,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T064",
              "exons": [
                {
                  "exon_id": "auto_exon_5f25216e02a54f33b1b273e2306f07e4",
                  "start": 171367,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2bca48c808d74db69522a06d822f6c71",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_3235e6e231a040cba34877a504bc4543",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f47834dedf6c4a61ae4a75b83fb814a1",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cd4498f873d94acbb275a603620cc192",
                  "start": 173276,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4939a53ed81141fb813a2acb0b1b7b57",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_78e40e698d994a0db4c54217ac75fcae",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_0968c8a3c4324852a871847d93b15ca1",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171367,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T071",
              "exons": [
                {
                  "exon_id": "auto_exon_7fb18a1cf2f64981bed70592f1ea3012",
                  "start": 171367,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5161cc367ff74e3bb3610916b22d50ab",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7cc7b5a05b584cd9a2e1bdd1f3124aa7",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1001c92b41e449e891302682f467a873",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_eb3ea8e3ee204e35ae5e63b6ab55a9b6",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_73a449f5af584a6299fbbdb851146166",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_205adcb965e84be0a838dbdc1ad5c8f6",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a0ee535339a1468e8d7373c45ab4487d",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7988fef9e4cc421792ef8ca3857fed69",
                  "start": 175319,
                  "end": 175434,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c75505efbfe444a3a8c6a432a9c9b936",
                  "start": 175612,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b50324d0d189459582e0e75d20910dd3",
                  "start": 175898,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_fe52f8d6a20543998b22d40be0dcebc7",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_16137a707a904f72bad88509b7073572",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171367,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T073",
              "exons": [
                {
                  "exon_id": "auto_exon_365080e7046648dc91eab79584102bc5",
                  "start": 171367,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8b918e2955aa4e91837699f3af97b1fe",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_31fa8965a9b549a582bcf6f83c1360ea",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a0a67946220644b2b737c9a95344fe13",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_18cfad6053d6490a8c8e6b029f421afe",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b8360fb134344442af7c7bbb3c3b6f4f",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_971821454fdc47adb9ebe12147b6cddb",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_61b704fa19274ca1a79efc8722000e94",
                  "start": 175122,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_636bf745d49d4d5aa840d8e205196e13",
                  "start": 175898,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8dba158e0a4845d2a1f448fb47c85e76",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c4253adabecf4039884472e541233bbb",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171367,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T063",
              "exons": [
                {
                  "exon_id": "auto_exon_6ebda0df800a41da8bd456a0fccff13e",
                  "start": 171367,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cf4845502c1a4e17a9d964cb2597be11",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d674b75dda0142ac892d215c46f4f770",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_73458d8a05e44aff846c082e8724bff4",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6bdc8e8bab9642589eacdcb2c9741d19",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8a37fb52b03c4872bbfd863912b9e4d1",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2f9278c5d63a4ca6a12385d4f86e475e",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d7d119f559dc4784af8d90107bb17275",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a9ce6bc074b34f70898bc4b7b36d70ca",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_36c3735c3604475d8e81a616c63f6b8c",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6c94535b0ec342b28f4fe86cde84d8bb",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7ebbe78b5e0a46b9a57a82d62e2047b8",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171367,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T074",
              "exons": [
                {
                  "exon_id": "auto_exon_9314d79474e34ca0b8c9636fe7f15b37",
                  "start": 171367,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_aca6eb4ddc7c48f4a0b254e0375d4db9",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_0f2cdbd1844940a9b2ac9309323f87e9",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6dc04d6d789b462491b4c1b247ee780a",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2d588a0d44ea407d987f17810017aaf7",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6a2082f348034aceb0939ba20b95c7e8",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d1c0e41b85ee403695e06e2b8c0390d7",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b15b1fd139404dec95060d7a29ffdf05",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_798f24fce7c84447b1fbe3ef0d096485",
                  "start": 175321,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6a7b90b1a086415697088dc446be4d9b",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e0e6326adb15486688ff74772004db92",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_83f395f3395544409a67a3d179d2b40b",
                  "start": 179368,
                  "end": 179834,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171367,
              "end": 179834,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T076",
              "exons": [
                {
                  "exon_id": "auto_exon_401bb618496641229dd68dde8d926d9f",
                  "start": 171368,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_689c4efef2a14e07830f387a79dc14cc",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cfe9189daf4d408d99ea04ae4678ce5d",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_619bf817431a4413bca936a1e2d81866",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_0f14f533b3c34039ad0db9733a4eaf1e",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_eecaee2a34244a6aa8cf32250fb49580",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_fe99ac834af14576a2ba78f3ff269e27",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a0d7b3b6e1c54bd3b58d4b7e7a6d4eb5",
                  "start": 175122,
                  "end": 175215,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_76b27e88dc94464a9bebbbd11686ac0d",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_3be31f1ffb054c42a66bbf501b83860d",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_47b2dd702de74498bc5cebb53c33078c",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_312ba35888bf47ee855156150b3dda93",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171368,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T077",
              "exons": [
                {
                  "exon_id": "auto_exon_d6ea922eaf6d44a09faddc94afc2d9a5",
                  "start": 171373,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2e820c138db74005bab417dfcd14b669",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7645f7c86f924d5880a821832543f55c",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d0390405f5e7437abcf5837528e57c8a",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f13ef5031a5e49a2b50575e15caedf26",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b71395c4353d4320bfc146b648a46961",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_08a4009becb34feb8057726225005787",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4a96091c106d49f1a7fd12caed1c4d13",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7e3895c97c084785a281bcbbfd1bed83",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_eaaefa8cea5c4c81a1396071b99ee0c1",
                  "start": 175893,
                  "end": 176136,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171373,
              "end": 176136,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T080",
              "exons": [
                {
                  "exon_id": "auto_exon_37ba6456f0cc423cbd033979e4bd42cf",
                  "start": 171373,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_46ff3c5cf78c4e079e5a16be200296a4",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_83da7e3aa2b24ee7b51c37e896f78dc7",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_95c061c5dbf44d81b4d2e57662a89bbd",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_3875f9eaaae1428697c53127efa67c92",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e58d9cd1a5874e2eabd8bf5510f9e560",
                  "start": 174770,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_008bdb33eda84521b98336d329b9966d",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4c20f96d6f5048bf8289be932efca4b9",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_323d05896d3d4d229ba1fc045211bde1",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7725c75c269845119ed1ded871b0a8a0",
                  "start": 175898,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_da8b9031c82a4bb98274a3b1e3077e8f",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f41712b005af4aaca4d69504a39e3ea1",
                  "start": 179368,
                  "end": 179619,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171373,
              "end": 179619,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T081",
              "exons": [
                {
                  "exon_id": "auto_exon_d64cf111c06d448d8c73392c3c83eb8a",
                  "start": 171373,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d83986b1bbb04aa4b14649168518da0d",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_97ae53447fb6414c93a9453d69750203",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6ea18a328c2f4cb68fcb4e2e261f0d7b",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_61dd8d53335843be909567c92a16fec6",
                  "start": 173276,
                  "end": 173946,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_dadeb05d88454110b86e1e0586c95378",
                  "start": 174770,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7c368df011084c6db8e3db2bab243aed",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_61aba4cd9d3c4b8186ff87a296c87f67",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_eff7fe35176042e9b664826a2aae8f5a",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_06eb7242206541f8828d3f56cbd197ce",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_82746c9f48ee4b55a4cd624c9f54300d",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_67c9020749f446b79c14aa0e4e7fbc55",
                  "start": 179368,
                  "end": 179800,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171373,
              "end": 179800,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T086",
              "exons": [
                {
                  "exon_id": "auto_exon_1b2af15404bf4403b52ab781469dcc42",
                  "start": 171373,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_432ab7c7078e4ffb97cf956ed9b96f48",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4aee909430184fb5b130ae3dc4c5db02",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c38cda45048d4c519328e7a06aaa60ea",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8a65e4a57d7044aca5e0cacaaded7ebf",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8d53960f9c984096930e7e90f489f3be",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_fbd33ef50a694edc896dd66d1e8dcfec",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a181e469a5d64c3eb4417480d9d867cc",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_150ec34555564241a1e2c2dfabfc9e50",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_702158606a684c819843fc0cdc72e926",
                  "start": 175898,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5943d01463ea4992b3bcff20acca8cc3",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b44f2c2c194b494c8f3713caad552b65",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171373,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T083",
              "exons": [
                {
                  "exon_id": "auto_exon_b1f370f46f5748f0982adbfc4df7064d",
                  "start": 171373,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e5ad91b61793448381b3f2795d55b49a",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ecd9d2a0f1bd435da986720e942b38d6",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6f3a2ab0c01d42d78be0da6168b2794b",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9792a09927ef4854aa7185ab1408de0a",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f6267cb9e58647978415be01420ba523",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d0bc1c0b8e9c48d2855590e349047f95",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2523101ea1534b2c91b5fadac41856a7",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_feee64884ed648629d0da4462c23d968",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ede2435ede0843c7b85617c70402a7cd",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cd40760aa2ec45379774aae88b5fefb6",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_da975ba4798f4a54aaa6d559b78ea2a9",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171373,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T088",
              "exons": [
                {
                  "exon_id": "auto_exon_03cbef2ea3b648609150f1a8671f8456",
                  "start": 171383,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_fc173e8a82d04241b725b23f6bb59dd4",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_72205364d7de4ed39fc73d5411a3142f",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_21aaf879de7e462083f74b14a35b9923",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1982c6ba145f43be9d2dc3a708cbd964",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_333e81e52e704d82ba6ead608bdadc90",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8833ccc71b6f452eaa4ce1d774b053b1",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d075db540dda4cc996c25bf7ac2cdf96",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_3e1336d6781d4c1d8a5debfead11e837",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2321294b78214098baa798d5e4fe916e",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c901a060234d4f6bbcf4c628a98481cf",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_59c76c4952cd4b27966c1d0ad27a9b0e",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171383,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T089",
              "exons": [
                {
                  "exon_id": "auto_exon_07783e8c14424542828646bdaad96829",
                  "start": 171387,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d51b531702534bd09f27ccab19d89cb6",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f27e8bbcdd844279b8cbeb05abe12609",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f931fb812f1b4b05b4dbfb499f33857d",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_24322d682da54379ab692508c1b9c8bd",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f4dfe691c4d345dd9315c4d8c4dd5291",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8a55334517074a42bf02ff718c870479",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_20506254cd004ae6876917942836691b",
                  "start": 175122,
                  "end": 175230,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_fc27939ba456467d9b5b41e96be3e94f",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_51d3bf648e7b4655b034dafac1994188",
                  "start": 175893,
                  "end": 177538,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9ebb4ba67e5d49fe8743ed79ff3dee0e",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171387,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034964_T094",
              "exons": [
                {
                  "exon_id": "auto_exon_fe6e572e9d654af7a49229aa960f46b1",
                  "start": 171512,
                  "end": 171719,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e2d26e16efc34f2ab58a53df1939701a",
                  "start": 171853,
                  "end": 171947,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_26afc1789c6b40a5ae62b36050bc716e",
                  "start": 172547,
                  "end": 172642,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_91d965ac5eb14cfb82bb45110db2d6d7",
                  "start": 172724,
                  "end": 173201,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_73a32c6018694e7883f87b8a14d263ce",
                  "start": 173276,
                  "end": 173897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d0c338ffaf8c43aaaf5e6d89d5be51db",
                  "start": 174654,
                  "end": 174841,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_46ae70f139f94c519493d16d999e49f3",
                  "start": 174922,
                  "end": 175034,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ca0e1d2dce2f4081a6876ba304224a82",
                  "start": 175122,
                  "end": 175244,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_936fcc0ba1954e46ba081a801a4d713e",
                  "start": 175319,
                  "end": 175781,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f7f5f96fa80e4a9fa1147920cb964140",
                  "start": 175893,
                  "end": 177767,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_75d8e5bd9ed94107a23eaaae41079bad",
                  "start": 179145,
                  "end": 179221,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_dda50819789649e1963bda66f9960b1a",
                  "start": 179368,
                  "end": 179832,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 171512,
              "end": 179832,
              "strand": "-",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034965",
          "gene_name": "Zm00001d034965",
          "gene_type": "protein_coding",
          "start": 290046,
          "end": 293456,
          "strand": "-",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034965_T002",
              "exons": [
                {
                  "exon_id": "auto_exon_5096c1943d56490da9348e4d51fef9c6",
                  "start": 290046,
                  "end": 290446,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e0f6a9f7475548feb9975d8233629a9a",
                  "start": 290648,
                  "end": 290724,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_16c1e5469f4e4177a68f6afd2e334f1d",
                  "start": 290825,
                  "end": 290871,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a7d0548726a848bb86b598f198d82bd3",
                  "start": 291151,
                  "end": 291251,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7598fecde6e844cd98f1bc4b1da84c42",
                  "start": 291356,
                  "end": 291445,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_3e68ee20655842baa63c6f5e115a4713",
                  "start": 291658,
                  "end": 291786,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_858e4e965dd84b2790e22b01ba165996",
                  "start": 291882,
                  "end": 292093,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_61a07c2432414a8c9f8fd4c73411e092",
                  "start": 292499,
                  "end": 292783,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5d8bccf3076e4735b51ccb95ac8fc720",
                  "start": 293124,
                  "end": 293456,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 290046,
              "end": 293456,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034965_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_dbcdff70aa6c4f7ca7787ea4346c25b6",
                  "start": 290046,
                  "end": 290446,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8341f62eebc84732984c02910aeca47c",
                  "start": 290648,
                  "end": 290724,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_34ed853a8a6b4a859beae502e464286c",
                  "start": 290825,
                  "end": 290871,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_16187778970041f18b76c48343b21994",
                  "start": 291151,
                  "end": 291251,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_dfaa1ecc945c4d8d834a205d127c6041",
                  "start": 291356,
                  "end": 291445,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_bb09123c5afd483596aa044a77e7f389",
                  "start": 291658,
                  "end": 291786,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_13105f5393a1496984664f1b5bc5022f",
                  "start": 291882,
                  "end": 292000,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_3e0c2a5d84c6472fa3993173b238c98b",
                  "start": 292499,
                  "end": 292783,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7484992e859248c39265610d78623b38",
                  "start": 293124,
                  "end": 293456,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 290046,
              "end": 293456,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034965_T003",
              "exons": [
                {
                  "exon_id": "auto_exon_dcab0533e2c24efa8d7e1bf814f0d911",
                  "start": 290197,
                  "end": 290446,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a25110e38fc54749abb3c2a771d1205f",
                  "start": 290648,
                  "end": 290724,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_00804487f567406caa9fe39d38210c01",
                  "start": 290825,
                  "end": 290871,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_125f874bdf6b4051b15772a4566bb725",
                  "start": 291151,
                  "end": 291251,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9c363c44485b4b7eb6174935defd3a45",
                  "start": 291356,
                  "end": 291445,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_0dcd0195d8574e89ad1919b074f0848a",
                  "start": 291658,
                  "end": 291786,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7472b5ba70154b6fb543ce50322a954c",
                  "start": 291882,
                  "end": 292031,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cbbcc1587bca401c9c8190a7eed5dda3",
                  "start": 292499,
                  "end": 292771,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 290197,
              "end": 292771,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034965_T004",
              "exons": [
                {
                  "exon_id": "auto_exon_f1b79632d95b4034af4f52e1ec506b80",
                  "start": 290197,
                  "end": 290446,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e3b473247668457ab3951f9a6a5f4b23",
                  "start": 290648,
                  "end": 290724,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1845c3ff148b4e2eba5c0685e4396e49",
                  "start": 290825,
                  "end": 290871,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4bee25f089e54358b7c8a027dcf85072",
                  "start": 291151,
                  "end": 291251,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f0307f5641894c60a692502a3065de40",
                  "start": 291356,
                  "end": 291445,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e6e1dd6c837741fd9c6be86df832b7a0",
                  "start": 291658,
                  "end": 291786,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_02457dafc0f74c629f354437241f31c0",
                  "start": 291882,
                  "end": 292031,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_17635f9ee146427ea4dba3d178b5297e",
                  "start": 292499,
                  "end": 292777,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7de525994da0426cad5ef55b6979383d",
                  "start": 293124,
                  "end": 293456,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 290197,
              "end": 293456,
              "strand": "-",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034966",
          "gene_name": "Zm00001d034966",
          "gene_type": "protein_coding",
          "start": 295085,
          "end": 295506,
          "strand": "+",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034966_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_026633561dc9424f8b1eadce67f68e7a",
                  "start": 295085,
                  "end": 295506,
                  "strand": "+",
                  "chrom": "chr6"
                }
              ],
              "start": 295085,
              "end": 295506,
              "strand": "+",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034967",
          "gene_name": "Zm00001d034967",
          "gene_type": "protein_coding",
          "start": 378466,
          "end": 379260,
          "strand": "+",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034967_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_3a266eccbf4442e0a2ba4f369787c017",
                  "start": 378466,
                  "end": 378996,
                  "strand": "+",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_28ea83aa2b004796bb2b29b68d301d43",
                  "start": 379198,
                  "end": 379260,
                  "strand": "+",
                  "chrom": "chr6"
                }
              ],
              "start": 378466,
              "end": 379260,
              "strand": "+",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034968",
          "gene_name": "Zm00001d034968",
          "gene_type": "protein_coding",
          "start": 379629,
          "end": 385466,
          "strand": "-",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034968_T002",
              "exons": [
                {
                  "exon_id": "auto_exon_f7c24b5e4d624b42b9bd3207733b90fd",
                  "start": 379629,
                  "end": 379915,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_31e1d603c11c4b5c8e4d412dae8b1ffb",
                  "start": 379992,
                  "end": 381756,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_976298a5d5e94f149fd4f5e25cd34060",
                  "start": 382124,
                  "end": 382254,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cc4919309b144dc1bd795760641e153c",
                  "start": 382335,
                  "end": 382435,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e35f3006421a4972ae84c50ab67f7d7c",
                  "start": 382534,
                  "end": 382616,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f8741ae912ee48d791f13556a99f9d6f",
                  "start": 382717,
                  "end": 382816,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ce310ee2d8f845b089f02fca7555e4db",
                  "start": 382902,
                  "end": 383058,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a079fc8ba79e47998e1b954f3f0fdb38",
                  "start": 383255,
                  "end": 383314,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_082400ac4ba642e6b0f312a258a8f750",
                  "start": 383860,
                  "end": 383933,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_fe58328f8bad4f8d95b25e88e1e23ce2",
                  "start": 384095,
                  "end": 384167,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e4602c5c7de543e3bd7dbfa45a605e95",
                  "start": 384248,
                  "end": 384299,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5d2b20d60bc54e2193cfce44dcb5c9a7",
                  "start": 384422,
                  "end": 384905,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e14dbf2374024b698d97b8390401d954",
                  "start": 385017,
                  "end": 385174,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ff3979f093b642458d65d712f18a935a",
                  "start": 385295,
                  "end": 385466,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 379629,
              "end": 385466,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034968_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_c08174f8e4a248c49a1607cbb730aef4",
                  "start": 379629,
                  "end": 379915,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4b462eab065645dc83775547e6084a0d",
                  "start": 379992,
                  "end": 381756,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9217a79a065744bc9bee788dfe142c3a",
                  "start": 382124,
                  "end": 382254,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c6e84c7bc8b64020b6d1c7c1b60701c2",
                  "start": 382335,
                  "end": 382435,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_658a7367ba184e1eb214e1818a6d72ec",
                  "start": 382534,
                  "end": 382616,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ca01d567856a436d9e5623c826f10826",
                  "start": 382717,
                  "end": 382816,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_afd03bdf9c6041e4a756448f28243b9d",
                  "start": 382902,
                  "end": 383058,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_98cdc654d78e451b88f87ad023ac7393",
                  "start": 383255,
                  "end": 383314,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_329f61add390429686bdc37994efc88e",
                  "start": 383860,
                  "end": 383933,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_82f12a16d7fa4f86aeb55efa37d20dad",
                  "start": 384095,
                  "end": 384167,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_29d9c568f4f641cfb7164124a70709a6",
                  "start": 384248,
                  "end": 384299,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_36d6bfe549024fe0ab057366a1147cde",
                  "start": 384422,
                  "end": 384693,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b4256c4bd9a94923a862fcc8d67848fd",
                  "start": 384841,
                  "end": 384905,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a6143bedf76447afbaec115f6ce5f642",
                  "start": 385017,
                  "end": 385174,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_09acf835465f44f09f121e90dab04c5d",
                  "start": 385295,
                  "end": 385466,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 379629,
              "end": 385466,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034968_T004",
              "exons": [
                {
                  "exon_id": "auto_exon_cce6526191184f5e8fec327f2edc3db5",
                  "start": 380883,
                  "end": 381756,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_23e7129f6509429abcdd21c231a0f573",
                  "start": 382124,
                  "end": 382254,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5af9ddba2b764149a1d47f6cccf3a1fa",
                  "start": 382335,
                  "end": 382435,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_96b87d4cff1a41fd9e469a6ed1fbbd99",
                  "start": 382534,
                  "end": 382616,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9e4e8bb1ca044c52941776543076c29c",
                  "start": 382717,
                  "end": 382816,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8753bbdd9a7f4f2891743aaa390669e9",
                  "start": 382902,
                  "end": 383058,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_30d441c1cd2e4bfcbce01a6c81e5096e",
                  "start": 383255,
                  "end": 383314,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a0b8965f81284301b76c67e061bc6c5a",
                  "start": 383860,
                  "end": 383933,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cdb7b89df90d41d3b2b729dcabd4d414",
                  "start": 384095,
                  "end": 384167,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cbd3c650f15d4a4dab077453f5d35fe8",
                  "start": 384248,
                  "end": 384299,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9843722ede1f4f59a90eaf45e14bb2e8",
                  "start": 384422,
                  "end": 384549,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_23954b462c9744d5bee1491cb8e73a00",
                  "start": 384841,
                  "end": 384905,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_03c2a58c59d24d20852b1b005f5bdb31",
                  "start": 385017,
                  "end": 385174,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_93ac7a2ca1d44cb4a267c4c4e9fa8541",
                  "start": 385295,
                  "end": 385449,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 380883,
              "end": 385449,
              "strand": "-",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034969",
          "gene_name": "Zm00001d034969",
          "gene_type": "protein_coding",
          "start": 387465,
          "end": 388055,
          "strand": "-",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034969_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_0db0680c519e4d898ab31dd85fddeb73",
                  "start": 387465,
                  "end": 388055,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 387465,
              "end": 388055,
              "strand": "-",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034970",
          "gene_name": "Zm00001d034970",
          "gene_type": "protein_coding",
          "start": 388280,
          "end": 393342,
          "strand": "-",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034970_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_0591483fe7f84f218d73fc38fac22a1e",
                  "start": 388280,
                  "end": 388721,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_da9f8e5606004430a5f7cd6ef53b1414",
                  "start": 388808,
                  "end": 388897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f47d06a3d4ca435494dd8395a609c869",
                  "start": 389135,
                  "end": 389236,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_17a2fba465a445cbbe85739eb8fcdc24",
                  "start": 389779,
                  "end": 389839,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_e3f5620d2ba1411c88248d9c7414a173",
                  "start": 389931,
                  "end": 390043,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1a8a7754fb4d443f9fe869fcbaa3b7a7",
                  "start": 390523,
                  "end": 390600,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_38593500f05943749168335958ca545e",
                  "start": 390691,
                  "end": 390831,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_379c84370cb94e61bef13ec199bc32f0",
                  "start": 390924,
                  "end": 391088,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_022a7c86b2d8496481e426a039d68cae",
                  "start": 391164,
                  "end": 391256,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ecc3204b19664836a7489ddd5b1579c0",
                  "start": 391447,
                  "end": 391513,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_88dc91fd5f1e4e6daec4b95cbe8825ff",
                  "start": 391657,
                  "end": 391760,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cb44c4ee90284f4c8bebd7115b4402f7",
                  "start": 392124,
                  "end": 392260,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_496bfdb9514a4183b59f4f2d29fd39e2",
                  "start": 392525,
                  "end": 393342,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 388280,
              "end": 393342,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034970_T002",
              "exons": [
                {
                  "exon_id": "auto_exon_27178ed82fc54a309c04b9d01c22ed78",
                  "start": 388280,
                  "end": 388721,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_91560d93fee648e49137d858b1e5f2d3",
                  "start": 388808,
                  "end": 388897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_27c3ce6b2018440eb523ff0638a81a9b",
                  "start": 389135,
                  "end": 389236,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a87a309398104aad88946d2702acc1da",
                  "start": 389332,
                  "end": 389499,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_0931fa6aee0041f1b5db463bc7ed970c",
                  "start": 389779,
                  "end": 389839,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8f9173fc101a4b87a71bb5c580a2c4e7",
                  "start": 389931,
                  "end": 390043,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_0dd16adb8e6844889b4d34dc2a695805",
                  "start": 390523,
                  "end": 390600,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_6a74b1804e2e435598e9673b53901b3a",
                  "start": 390691,
                  "end": 390831,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_024e78f6d9ee4b38a78670162a920f76",
                  "start": 390924,
                  "end": 391088,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1de4cb21fd834f6ba003ec54f17498cf",
                  "start": 391164,
                  "end": 391256,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ce6c547d567b4b5181edb5c9c4a3ff9a",
                  "start": 391447,
                  "end": 391513,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d448130aec1142e28ad4c00e36b33d24",
                  "start": 391657,
                  "end": 391760,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1f0a630bb72840ff8f4e2bcce416a7f1",
                  "start": 392124,
                  "end": 392260,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a2b9bab0083443158669c554660efe5e",
                  "start": 392525,
                  "end": 393342,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 388280,
              "end": 393342,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034970_T003",
              "exons": [
                {
                  "exon_id": "auto_exon_106d58c3c04341c3ad713ed8ea00993e",
                  "start": 388289,
                  "end": 388721,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_70ebbbb493f642b0a53c2931849157a5",
                  "start": 388808,
                  "end": 388897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cce3c0a6dbb741b3968ef26eb6d1d49c",
                  "start": 389135,
                  "end": 389839,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d52ae3a4df084aa9aee4cbcbff5d17b9",
                  "start": 389931,
                  "end": 390043,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f458defecc8a43bfa9a42068edc54c6d",
                  "start": 390523,
                  "end": 390600,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b10e8e410a844d0aa7e0abb17c8a93c5",
                  "start": 390691,
                  "end": 390831,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5d479ce733484a56ad9d7df81b75b8d9",
                  "start": 390924,
                  "end": 391088,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b71a5d193b9647fbb6e28f1ab339b664",
                  "start": 391164,
                  "end": 391256,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_b47c6bce55eb4147857f1b391d807c83",
                  "start": 391447,
                  "end": 391513,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_1da6f90476f94b7e8d8ff5b3877d112f",
                  "start": 391657,
                  "end": 391760,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_67060a7e0b1742f1a541613941b50442",
                  "start": 392124,
                  "end": 392260,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a1340635bb7a46d59fc0c323efb14cdc",
                  "start": 392525,
                  "end": 392897,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 388289,
              "end": 392897,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034970_T004",
              "exons": [
                {
                  "exon_id": "auto_exon_e92f8b0b80c445ac9e832d4f07bfe523",
                  "start": 388329,
                  "end": 388721,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_feeaf1ef95484f97b566c72cfa27658e",
                  "start": 388808,
                  "end": 388897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ac325c0d77ea45159a4e79014665bf7c",
                  "start": 389135,
                  "end": 389499,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_53b0c87bf23f4f96bec4bf036e12782c",
                  "start": 389779,
                  "end": 389839,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7a8175d456e9481c8d1aa792dc51acb2",
                  "start": 389931,
                  "end": 390043,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_cdb333ddb7c54cb589e3df9c3076d2a8",
                  "start": 390523,
                  "end": 390600,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_11efcaca0b2d433c979128f0ef243453",
                  "start": 390691,
                  "end": 390831,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_36297ba0d50b4268b46cbb491b72dc4e",
                  "start": 390924,
                  "end": 391088,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c6a3b39455284329a2c00b764c4b7861",
                  "start": 391164,
                  "end": 391256,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7533e2d8234c4fb9b732d38f18987d16",
                  "start": 391657,
                  "end": 391760,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_08b99057da6f4aff8c92ea5f858530b9",
                  "start": 392124,
                  "end": 392260,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a9675ba4f3be4c72ac87d5fe078e2794",
                  "start": 392525,
                  "end": 392918,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 388329,
              "end": 392918,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034970_T005",
              "exons": [
                {
                  "exon_id": "auto_exon_c9a5435b9e6745c7820b591db66d6b2e",
                  "start": 388473,
                  "end": 388721,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_fa2b80edb3b14f3198e6ab2a71e69413",
                  "start": 388808,
                  "end": 388897,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_2db0f8d8190142f0a3962792627db939",
                  "start": 389135,
                  "end": 389236,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a0e0f78c4db1437483a8912536a8c091",
                  "start": 389332,
                  "end": 389499,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9e802146c7ba4141b61e178ddb4da067",
                  "start": 389779,
                  "end": 389839,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_901362ed70e24887a290192225697aee",
                  "start": 389931,
                  "end": 390043,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d7510180eeba4f33b3d113020589cf05",
                  "start": 390523,
                  "end": 390600,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_340ca608ea934826913e92274293f89c",
                  "start": 390691,
                  "end": 390831,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_384c3ae9613542e08680640cf35750e4",
                  "start": 390924,
                  "end": 391088,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7e082bef76c64ffa85d79d81604c4f0a",
                  "start": 391164,
                  "end": 391256,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_63199f265fba4a2eb58dca1888d07b28",
                  "start": 391447,
                  "end": 391513,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_421e9600464b4075a2d0c30de5f661a4",
                  "start": 391657,
                  "end": 391760,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9cbf284ec7ef4aaf96d125e6fc44c404",
                  "start": 392124,
                  "end": 392260,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_7414f830de33465fb84dfdb08620a339",
                  "start": 393015,
                  "end": 393116,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 388473,
              "end": 393116,
              "strand": "-",
              "chrom": "chr6"
            },
            {
              "transcript_id": "Zm00001d034970_T006",
              "exons": [
                {
                  "exon_id": "auto_exon_66a13a8a48ad4c1d8feab40beff923d1",
                  "start": 389075,
                  "end": 389236,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_31346c4d44c143499620d4b3362fd13c",
                  "start": 389332,
                  "end": 389499,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_00b2619bce524667b3e4a1b2aea7e192",
                  "start": 389779,
                  "end": 389839,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_d90a29b9bf5f4759b1f2413a854fecdc",
                  "start": 389931,
                  "end": 390043,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a84e9b39222249e0954cd5f0ce721b0b",
                  "start": 390523,
                  "end": 390600,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9d2021d7475746e9a971c923f5104539",
                  "start": 390691,
                  "end": 390831,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_ebe1b937033f420093c0f8dea1834005",
                  "start": 390924,
                  "end": 391088,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_9c13739527224c2aa378f08b87a07ffe",
                  "start": 391164,
                  "end": 391256,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_a7bd5f9c1e634c938a8a15fb5f01842d",
                  "start": 391447,
                  "end": 391513,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_847a7e4577de4c1a83b63f6363b8c2a2",
                  "start": 391657,
                  "end": 391760,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_eba944ff00da479aba3c3a4c4e8bb725",
                  "start": 392124,
                  "end": 392260,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_96110e42f39e426f9d9b1464aec1fcf3",
                  "start": 392525,
                  "end": 392916,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 389075,
              "end": 392916,
              "strand": "-",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034971",
          "gene_name": "Zm00001d034971",
          "gene_type": "protein_coding",
          "start": 394181,
          "end": 394622,
          "strand": "+",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034971_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_2b1fbf0603b949a2b4e2ef27eef6e91e",
                  "start": 394181,
                  "end": 394391,
                  "strand": "+",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_31aaca9a3e694855ae0e70d5e509d80b",
                  "start": 394618,
                  "end": 394622,
                  "strand": "+",
                  "chrom": "chr6"
                }
              ],
              "start": 394181,
              "end": 394622,
              "strand": "+",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034972",
          "gene_name": "Zm00001d034972",
          "gene_type": "protein_coding",
          "start": 395120,
          "end": 395632,
          "strand": "-",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034972_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_8f4e92f4856e41fb89bceecdab68fb8f",
                  "start": 395120,
                  "end": 395632,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 395120,
              "end": 395632,
              "strand": "-",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034973",
          "gene_name": "Zm00001d034973",
          "gene_type": "protein_coding",
          "start": 479943,
          "end": 480971,
          "strand": "+",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034973_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_05afd9914f2544e0b4d220685bf6bc5c",
                  "start": 479943,
                  "end": 480971,
                  "strand": "+",
                  "chrom": "chr6"
                }
              ],
              "start": 479943,
              "end": 480971,
              "strand": "+",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034976",
          "gene_name": "Zm00001d034976",
          "gene_type": "protein_coding",
          "start": 639235,
          "end": 639876,
          "strand": "-",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034976_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_d38c0ced9cfc4c2194bd17370b4ecf73",
                  "start": 639235,
                  "end": 639876,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 639235,
              "end": 639876,
              "strand": "-",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034977",
          "gene_name": "Zm00001d034977",
          "gene_type": "protein_coding",
          "start": 663669,
          "end": 664313,
          "strand": "-",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034977_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_f76db9a45986453cb6551ef57cfbe134",
                  "start": 663669,
                  "end": 664313,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 663669,
              "end": 664313,
              "strand": "-",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034978",
          "gene_name": "Zm00001d034978",
          "gene_type": "protein_coding",
          "start": 669527,
          "end": 670473,
          "strand": "-",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034978_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_b85596a5cf4944fcbff33c2ceed233b5",
                  "start": 669527,
                  "end": 670127,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_c20e257c6ffb4444bc33cc29a51faf31",
                  "start": 670221,
                  "end": 670473,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 669527,
              "end": 670473,
              "strand": "-",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034979",
          "gene_name": "Zm00001d034979",
          "gene_type": "protein_coding",
          "start": 714095,
          "end": 715069,
          "strand": "+",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034979_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_3f74d31ce7c64dfbaaa84425dcb38ea3",
                  "start": 714095,
                  "end": 715069,
                  "strand": "+",
                  "chrom": "chr6"
                }
              ],
              "start": 714095,
              "end": 715069,
              "strand": "+",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034981",
          "gene_name": "Zm00001d034981",
          "gene_type": "protein_coding",
          "start": 726875,
          "end": 728620,
          "strand": "-",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034981_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_ecd8b9b028e84f21916f21ffdc49ef7f",
                  "start": 726875,
                  "end": 727038,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_4f7ccf9b2de84c6e997eb14db3dc817f",
                  "start": 727265,
                  "end": 727299,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f282eab5ec804f2fb562dbd2a5c4b1e0",
                  "start": 727381,
                  "end": 727544,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_8f501856024c462fbb2e29711cb7e449",
                  "start": 727714,
                  "end": 727789,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_5e5fd6ca5ae3401295aec0f7ea5934fb",
                  "start": 728103,
                  "end": 728187,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_219974a1a1e44c0f828bb9922c067b33",
                  "start": 728520,
                  "end": 728620,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 726875,
              "end": 728620,
              "strand": "-",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034983",
          "gene_name": "Zm00001d034983",
          "gene_type": "protein_coding",
          "start": 786226,
          "end": 787774,
          "strand": "+",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034983_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_684acd5d31c04f02b28c69ed7e6be12a",
                  "start": 786226,
                  "end": 787774,
                  "strand": "+",
                  "chrom": "chr6"
                }
              ],
              "start": 786226,
              "end": 787774,
              "strand": "+",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034984",
          "gene_name": "Zm00001d034984",
          "gene_type": "protein_coding",
          "start": 798676,
          "end": 799889,
          "strand": "-",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034984_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_6edf2cdde4a9487ebc855fb16fbb1c85",
                  "start": 798676,
                  "end": 799529,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_54584dc2286d4f7fad25b6db89cc34a9",
                  "start": 799619,
                  "end": 799889,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 798676,
              "end": 799889,
              "strand": "-",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034985",
          "gene_name": "Zm00001d034985",
          "gene_type": "protein_coding",
          "start": 801329,
          "end": 801845,
          "strand": "-",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034985_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_ade7889a4de04d12a52f60a27531b706",
                  "start": 801329,
                  "end": 801415,
                  "strand": "-",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_0a01c75d7e864c0a824f69adc5a39ed8",
                  "start": 801501,
                  "end": 801845,
                  "strand": "-",
                  "chrom": "chr6"
                }
              ],
              "start": 801329,
              "end": 801845,
              "strand": "-",
              "chrom": "chr6"
            }
          ]
        },
        {
          "gene_id": "Zm00001d034986",
          "gene_name": "Zm00001d034986",
          "gene_type": "protein_coding",
          "start": 840921,
          "end": 842925,
          "strand": "+",
          "chrom": "chr6",
          "transcripts": [
            {
              "transcript_id": "Zm00001d034986_T001",
              "exons": [
                {
                  "exon_id": "auto_exon_84c650eb931b41b68cf15a063be92715",
                  "start": 840921,
                  "end": 841939,
                  "strand": "+",
                  "chrom": "chr6"
                },
                {
                  "exon_id": "auto_exon_f621de8754314d91bfd72dafa9fb1eb9",
                  "start": 842017,
                  "end": 842925,
                  "strand": "+",
                  "chrom": "chr6"
                }
              ],
              "start": 840921,
              "end": 842925,
              "strand": "+",
              "chrom": "chr6"
            }
          ]
        }
      ]
      this.loading=false
      this.renderVariantViewer(this.position, data.start, data.end, this.genes, this.phewas)
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
    let temdata = [
      "ZMPV01aSNPC06P000584105",
      "ZMPV01aSNPC01P129843432",
      "ZMPV01aSDEC01P129845774",
      "ZMPV01aSNPC01P129844330",
      "ZMPV01aSNPC01P129843162",
      "ZMPV01aSNPC01P129844531",
      "ZMPV01aSNPC01P129843180",
      "ZMPV01aSNPC01P129845655",
      "ZMPV01aSNPC01P129846218",
      "ZMPV01aSNPC01P129845011",
      "ZMPV01aSNPC01P129843548",
      "ZMPV01aSNPC01P129843307",
      "ZMPV01aSNPC01P129845407",
      "ZMPV01aSNPC01P129846155",
      "ZMPV01aSNPC01P129844095",
      "ZMPV01aSNPC01P129845142",
      "ZMPV01aSNPC01P129845573",
      "ZMPV01aSNPC01P129845884",
      "ZMPV01aSNPC01P129844451",
      "ZMPV01aSNPC01P129843957",
      "ZMPV01aSNPC01P129843142"
    ]
    this.variantOpts = temdata
    this.variant = temdata[0]
    // 此处延迟执行的原因同上，此方法中需要使用locuszoom组件库。
    setTimeout(async () => {
      await this.getVariantData(this.variant)
      window['ChangeData'] = data => {
        this.renderChangeData(data)
      }
    }, 800)
  },
}
