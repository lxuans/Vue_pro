<template>
    <section class="details">
        <v-title :title="title"></v-title>
        <div class="mui-card">
            <div class="mui-card-header">{{news.title}}</div>
            <div class="mui-card-footer">
                <p>创建时间：{{news.add_time | formatDate('YYYY-MM-DD')}}</p>
                <p>浏览量：{{news.click}}</p>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner" v-html="news.content"></div>
            </div>
        </div>
    </section>
</template>

<script>

    import config from '../../js/config.js';
    import Ctitle from '../common/title.vue';
    
    
    export default {
        data(){
            return {
                title: '资讯详情',
                news: {}
            }
        },
        methods:{
            getNewsDetails(){
                let url = config.newsDetails + this.$route.params.id;
                this.$http.get(url).then(resp =>{
                    
                    resp.body.status == 0 && (this.news = resp.body.message[0])
                })
            }
        },
        created(){
            
            this.getNewsDetails();
        },
        components: {
            'v-title': Ctitle,
            
        }
    }
</script>

<style lang="less">
    
</style>