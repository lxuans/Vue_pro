<template>
    <section class='swipe'>
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="(item, i) in imgs" :key='i'>
                <a :href="item.url">
                    <img :src="item.img">
                </a>
            </mt-swipe-item>
        </mt-swipe>
    </section>

</template>

<script>
    export default{
        data:function(){
            return {
                imgs:[]
            }
        },
        methods:{
            getLunbo(){
                let url = 'http://139.199.192.48:8888/api/getlunbo'
                this.$http.get(url).then(resp => {
                    resp.body.status == 0 && (this.imgs = resp.body.message)
                })
            }
        },
        created(){
            this.getLunbo();
        }
    }
</script>

<style lang="less">
    .swipe {
        height: 300px;
        img {
            width: 100%;
            height: 100%;
        }
    }
</style>