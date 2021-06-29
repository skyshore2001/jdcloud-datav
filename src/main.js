import Vue from 'vue'
import App from './App.vue'
import dataV from '@jiaminghi/data-view'

Vue.use(dataV)

Vue.config.productionTip = false

document.title = "数据大屏"

new Vue({
  render: h => h(App),
}).$mount('#app')
