import Vue from 'vue'
import App from './App'

import CompA from './components/CompA'

Vue.component('CompA', CompA)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
