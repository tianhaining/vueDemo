<template>
    <div>
      <h1 style="margin-top: 100px">{{contractNo}}</h1>
      <cmsCarousel></cmsCarousel>
    </div>
</template>
<style>

</style>
<script>
    import cmsCarousel from 'src/components/cmsCarousel'
    export default{
        data(){
            return{
              contractNo: ''
            }
        },
        created(){
          //组件创建完成后获取数据
          //此时data已经被observed了
            //console.log(this.$route.params.id);
            this.fetchData();
        },
        watch: {
        //如果路由有变化，会再次执行该方法
          '$route': 'fetchData'
        },
        methods: {
          fetchData () {
            console.log(this.$route.params.id);
            this.contractNo = this.$route.params.id;
          }
        },
        components: {
          cmsCarousel
        }
    }
</script>
