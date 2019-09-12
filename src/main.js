//入口文件

import Vue from 'vue'
// import RouterVue from "vue-router"
// Vue.use(RouterVue)
// import router from './router.js'
import app from './app.vue'


import './lib/mui/css/mui.css'
//import './lib/mui/js/mui.js'

import { Header} from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)

var vm=new Vue({
    el:"#app",
    data:{

    },
    methods:{

    },
    components:{
        app
    },
   // router,
    render:c=>c(app)
})
