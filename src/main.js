import Vue from 'vue'

import Cookies from 'js-cookie'

import Element from 'element-ui'
import './assets/styles/element-variables.scss'

import VueI18n from 'vue-i18n';
import en from './locales/en';
import zh from './locales/zh';
import '@/assets/styles/index.scss' // global css
import '@/assets/styles/ruoyi.scss' // ruoyi css
import App from './App'
import store from './store'
import router from './router'
import directive from './directive' // directive
import plugins from './plugins' // plugins
import { download } from '@/utils/request'

import './assets/icons' // icon
import './permission' // permission control
import { getDicts } from "@/api/system/dict/data";
import { getConfigKey } from "@/api/system/config";
import { parseTime, resetForm, addDateRange, selectDictLabel, selectDictLabels, handleTree } from "@/utils/ruoyi";
// 分页组件
import Pagination from "@/components/Pagination";
// 自定义表格工具组件
import RightToolbar from "@/components/RightToolbar"
// 富文本组件
import Editor from "@/components/Editor"
// 文件上传组件
import FileUpload from "@/components/FileUpload"
// 图片上传组件
import ImageUpload from "@/components/ImageUpload"
// 图片预览组件
import ImagePreview from "@/components/ImagePreview"
// 字典标签组件
import DictTag from '@/components/DictTag'
// 头部标签组件
import VueMeta from 'vue-meta'
// 字典数据组件
import DictData from '@/components/DictData'

// 密码强度检测
import PsdStrength from '@/components/PsdStrength'

// 引入百度地图
import BaiduMap from 'vue-baidu-map'

// 自己的UI组件
import UI from '@/components/UnionStyle/index'
// 定义API接口
import API from "@/api"
Vue.prototype.$API= API
// import {
//   Quasar,
//   Meta
// } from 'quasar'

// 全局方法挂载
Vue.prototype.getDicts = getDicts
Vue.prototype.getConfigKey = getConfigKey
Vue.prototype.parseTime = parseTime
Vue.prototype.resetForm = resetForm
Vue.prototype.addDateRange = addDateRange
Vue.prototype.selectDictLabel = selectDictLabel
Vue.prototype.selectDictLabels = selectDictLabels
Vue.prototype.download = download
Vue.prototype.handleTree = handleTree

// 全局组件挂载
Vue.component('DictTag', DictTag)
Vue.component('Pagination', Pagination)
Vue.component('RightToolbar', RightToolbar)
Vue.component('Editor', Editor)
Vue.component('FileUpload', FileUpload)
Vue.component('ImageUpload', ImageUpload)
Vue.component('ImagePreview', ImagePreview)
Vue.component('UI',UI)

Vue.component('PsdStrength', PsdStrength)

Vue.use(BaiduMap, {
  ak: 'YOUR_APP_KEY'    //这个地方是官方提供的ak密钥
})
Vue.use(directive)
Vue.use(plugins)
Vue.use(VueMeta)
// 统一的样式组件
Vue.use(UI)
DictData.install()

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

Vue.config.productionTip = false

import Meta from "vue-meta";
Vue.use(Meta);

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'en', // 默认语言
  messages: {
    en, // 英语翻译文本
    zh // 中文翻译文本
  }
});
// const router = new VueRouter({
//   routes: [
//     {
//       path: '/jointCreation/searchLeftTop/index',
//       component: index, // 首页组件
//       meta: {
//         lang: 'zh' // 指定语言环境为中文
//       }
//     },
//     {
//       path: '/jointCreation/searchLeftTop/detail/searchByName',
//       component: searchByName, // 其他页面组件
//       meta: {
//         lang: 'zh' // 指定语言环境为中文
//       }
//     }
//   ],
// })
// router.beforeEach((to, from, next) => {
//   const lang = to.meta.lang; // 假设路由中定义了 meta 字段用于指定语言环境
//   if (lang) {
//     i18n.locale = lang;
//   }
//   next();
// }),

new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App),

  beforeCreate() {
    Vue.prototype.$bus = this
  }
})
