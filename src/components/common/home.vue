<template>
    <div>
      <v-head></v-head>
      <div class="content">
        <transition name="move" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
</template>
<style>

</style>
<script>
    import vHead from './header.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
          vHead
        }
    }
</script>
