<template>
    <div>
        <h1>每个1s更新一次</h1>
        <h1>count: {{times}}</h1>
    </div>
</template>
<style>

</style>
<script>
    export default{
        data(){
            return{
              times: 1
            }
        },
        created: function(){
          var me = this;
          setInterval(function(){
            me.times++;
          }, 1000);
        }
    }
</script>
