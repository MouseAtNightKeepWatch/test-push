import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Layout from '../views/Layout'

// new Vue({
//     render: h => h(App)
// }).$mount('#app')
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {
            path: '/foo',
            component: Home
        }, {
            path: '/layout',
            component: Layout
        }
    ]
})

export default router
