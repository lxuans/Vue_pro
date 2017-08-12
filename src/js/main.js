import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

import App from '../component/APP.vue';
import router from './router.js'

let vm = new Vue({
    el:'#box',
    render:function(c){
        return c(App)
    },
    router:router
})