// 扩展原有的功能

import ZeamapCard from './zeamap-card.vue'
import Title from './title.vue'
import ZeamapDoubleCard from './zeamap-double-card.vue'
import ZeamapHeaderCard from './zeamap-header-card.vue'

export default {
  install (app) {
    app.component('ZeamapCard', ZeamapCard)
    app.component('Title', Title)
    app.component('ZeamapDoubleCard', ZeamapDoubleCard)
    app.component('ZeamapHeaderCard', ZeamapHeaderCard)
  }
}