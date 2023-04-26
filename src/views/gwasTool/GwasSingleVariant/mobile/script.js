import LocalMixin from '../common/mixin'

export default {
  mixins: [LocalMixin],
  watch: {
    locale() {
      this.updateTitle()
    },
  },
  methods: {
    updateTitle() {
      this.$store.commit('MUITopBar/setTitle', this.$t('gwasSingleVariant'))
    },
  },
  created() {
    this.updateTitle()
    this.$store.commit('MUITopBar/showMenuBtn')
    this.$store.commit('MUITopBar/hideBackBtn')
  },
}
