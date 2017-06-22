<template>
  <div id="app">
    <!--头部导航-->
   <!-- <header v-if='navStatus.navShow'>
        <cms-nav></cms-nav>
    </header>-->
    <main class="main_style">
      <!--视图-->
      <keep-alive>
        <router-view class="view"></router-view>
      </keep-alive>
    </main>
  </div>
</template>
<style>
.main_style {
  background-color: #fff;
}
</style>
<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import cmsNav from './components/cmsNav'
Vue.use(ElementUI);
export default {
  name: 'app',
  data(){
    return {

    };
  },
  created(){
    //TODO 根据当前是否是登录页面判断是否改变底部导航条的显示状态
    if((this.$route.path == '/') || (this.$route.path == '/login')){//$route 当前激活的路由信息对象，这个属性是只读的
      this.changeStatus_show();
    }else {
      return{};
    }
  },
  methods: {
    //TODO 提交修改顶部导航条状态
    changeStatus_show () {
      this.$store.commit("changeStatus_show");
    },
  },
  computed: {
     navStatus (){
        return this.$store.state.navStatus;
    }
  },
  components: {
    cmsNav
  },
  vuex: {
    getters: {
      accessToken: ({ userInfo }) => userInfo.accessToken
    }
  }
}
</script>
