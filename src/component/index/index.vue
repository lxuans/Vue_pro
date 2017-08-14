<template>
    <article>
        <v-swipe></v-swipe>
        <v-nav></v-nav>
    </article>
</template>

<script>

    import Cswipe from './swipe.vue';
    import Cnav from './nav.vue';

    export default{
        date:function(){
            return {
                
            }
        },
        components:{
            'v-swipe': Cswipe,
            'v-nav': Cnav
        }
    }
</script>

<style lang="">
    
</style>