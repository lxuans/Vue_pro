import Vue from 'vue';
import App from '../APP.vue';

let vm = new Vue({
    el:'#box',
    render:function(c){
        return c(App)
    }
})