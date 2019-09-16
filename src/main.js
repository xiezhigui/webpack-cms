//入口文件

import Vue from 'vue'
import RouterVue from "vue-router"
import VueResource from 'vue-resource'
Vue.use(RouterVue)
Vue.use(VueResource)
import router from './router.js'
import app from './app.vue'


import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
//import './lib/mui/js/mui.js'

import { Header,Swipe, SwipeItem} from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

var vm=new Vue({
    el:"#app",
    data:{

    },
    methods:{

    },
    components:{
        app
    },
   router,
    render:c=>c(app)
})
