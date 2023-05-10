const TITLE = process.env.DEFAULT_TITLE
// const DESCRIPTION = process.env.DEFAULT_DESCRIPTION
// const KEYWORDS = process.env.DEFAULT_KEYWORDS

export default {
  meta() {
    return {
      title: this.title || TITLE,
      /*
      // 目前对于SPA，description和keywords的元信息标签保持使用index.template.html中的对应标签。
      // 未来启用此块数据时，index.template.html中的对应标签需要删除。
      meta: {
        description: {
          name: 'description',
          content: this.description || DESCRIPTION,
        },
        keywords: { name: 'keywords', content: this.keywords || KEYWORDS },
      },
       */
    }
  },
  computed: {
    locale() {
      return this.$root.$i18n.locale
    },
  },
  methods: {
    toLowerCamelCase(val) {
      return val.replace(/_(\w)/g, function (all, letter) {
        return letter.toUpperCase()
      })
    },
  },
}
