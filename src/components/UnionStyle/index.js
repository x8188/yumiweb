// 扩展原有的功能

import ZeamapCard from './zeamap-card.vue'
import Title from './title.vue'

export default {
  install (app) {
    app.component('ZeamapCard', ZeamapCard)
    app.component('Title', Title)
  }
}