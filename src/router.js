import RouterVue from "vue-router"

import home from "./components/tabbar/home.vue"
import search from "./components/tabbar/search.vue"
import cart from "./components/tabbar/cart.vue"
import vip from "./components/tabbar/vip.vue"

var router =new RouterVue({
    routes:[
        {path:"/",redirect:"/home"},
        {path:"/home",component:home},
        {path:"/search",component:search},
        {path:"/cart",component:cart},
        {path:"/vip",component:vip}
    ],
    linkActiveClass:"mui-active"
})

export default router