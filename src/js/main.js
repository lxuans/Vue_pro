import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import MintUI from 'mint-ui';    // MintUI是vue插件，将来需要手动use才可以使用
import 'mint-ui/lib/style.css';  // 引入样式库还需单独导入css文件
import 'mui/dist/css/mui.css';    // 引入mui样式
import 'mui/examples/hello-mui/css/icons-extra.css'; // 引入mui的扩展图标样式


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(MintUI);

import './filter.js'
import App from '../component/APP.vue';
import router from './router.js'


let vm = new Vue({
    el:'#box',
    render:function(c){
        return c(App)
    },
    router:router
})