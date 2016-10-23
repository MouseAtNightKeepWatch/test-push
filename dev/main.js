import Vue from 'vue'
import VueTouch from 'vue-touch'
import hamster from 'hamster'

import router from './router'
import App from './App'

Vue.config.debug = true
// let __THEME = 'mat'
require('../src/themes/hamster.' + __THEME + '.styl')
hamster.theme.set(__THEME)

Vue.use(VueTouch)
Vue.use(hamster)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

hamster.start(() => {})
