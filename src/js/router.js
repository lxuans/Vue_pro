
import VueRouter from 'vue-router';

import Cindex from '../component/index/index.vue';
import CnewsList from '../component/news/list.vue';
import CnewsDetail from '../component/news/details.vue';


export default new VueRouter({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:Cindex},
        // 新闻详细相关路由配置
        {path:'/news/list',component:CnewsList},
        {path:'/news/details/:id',component:CnewsDetail}
    ]
});

