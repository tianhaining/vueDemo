<template>
  <div>
    <!--<div id="test"></div>
    <div id="log_window" @click="login">
      <el-button>登录</el-button>
    </div>-->
    <header>
      <div class="head">
        <div class="wrapper">
          <div class="logo"><!--这里插入Img标签大小188*60px--></div>
          <div class="menu">
            <a href="" id="menu1">产品中心</a>
            <span>|</span>
            <a href="" id="menu2">客服论坛</a>
            <span>|</span>
            <a href="" id="menu3">迅雷阳台</a>
            <span>|</span>
            <a href="" id="menu4">迅雷7.2</a>
            <span>|</span>
          </div>
        </div>
      </div>
    </header>
    <div class="banner_area" id="banner_list">
      <div class="main_box">
        <div class="main_cont">
          <div class="wrapper">
            <dl class="xl_info clearfix">
              <dt class="hide">登录</dt>
              <dd><input type="text" class="srh"></dd>
              <dd><input type="text" class="srh"></dd>
              <!--<dd  @click="changeStatus_show"><router-link to="/dashboard"><el-button>登录</el-button></router-link></dd>-->
              <dd @click="login"><el-button>登录</el-button></dd>
              <dd><input class="button blue radius4 shenqing" type="button" value="立即申请"/><input
                class="button blue radius4 lj" type="button" value="咨询了解"/></dd>
            </dl>
          </div>
          <div class="bg"></div>
        </div>
      </div>
      <div>
        <el-carousel :interval="2000" type="card" height="400px">
          <el-carousel-item>
            <img src="./images/banner_bg1_ie.png">
          </el-carousel-item>
          <el-carousel-item>
            <img src="./images/banner_bg3_ie.jpg">
          </el-carousel-item>
          <el-carousel-item>
            <img src="./images/banner_bg2_ie.jpg">
          </el-carousel-item>
        </el-carousel>
      </div>
     <!-- <div class="banner_box banner_ui on on_delay">
        <div class="banner_cont">
          <div class="area">
            <p class="ban1_anim_txt">精心打造，简而未减</p>
            <div class="ban1_anim_bg"></div>
          </div>
        </div>
      </div>-->
      <!--<div class="banner_box banner_logo">
        <div class="banner_cont">
          <div class="area">
            <p class="ban2_anim_txt">动态皮肤，随心随身</p>
            <div class="ban2_anim_bg_logo"></div>
            <div class="ban2_anim_bg_line"></div>
            <div class="ban2_icon_1"><span></span></div>
            <div class="ban2_icon_2"><span class="s1"></span><span class="s2"></span></div>
            <div class="ban2_icon_3"><span></span></div>
          </div>
        </div>
      </div>-->
    </div>
    <!--<div class="status" id="status">
      <span class="on"></span>
      <span></span>
      <span></span>
    </div>-->
    <div class="index-bottom">
      <div class="fg-line"><b></b><span>特色功能介绍</span><b></b></div>

      <div class="clearfix part">
        <div class="text fl">
          <div class="title">
            <span class="fl">01</span>
            <p>拥有强大的调图参数</p>
            <p class="small">POWERFUL ADJUSTMENT PARAMETERS</p>
          </div>
          <p class="nr">
            拥有自动曝光、数码补光、白平衡、亮度对比度、饱和度、色阶、曲线、色彩平衡等一系列非常丰富的调图参数。最新开发的版本，对UI界面进行全新设计，拥有更好的视觉享受，且操作更流畅，更简单易上手。无需PS，您也能调出完美的光影色彩。</p>
        </div>
        <div class="pic fr">
          <img src="./images/info01.jpg">
        </div>
      </div>
      <!--------------------------------------分割线-------------------------------------->
      <div class="h-line"></div>
      <div class="clearfix part">
        <div class="pic fl">
          <img src="./images/info02.jpg">
        </div>
        <div class="text fr">
          <div class="title">
            <span class="fl">02</span>
            <p>丰富的数码暗房特效</p>
            <p class="small">DIGITAL DARKROOM EFFECTS</p>
          </div>
          <p class="nr">
            还在羡慕他人多变的照片风格吗？没关系，光影魔术手拥有多种丰富的数码暗房特效，如Lomo风格、背景虚化、局部上色、褪色旧相、黑白效果、冷调泛黄等，让您轻松制作出彩的照片风格，特别是反转片效果，光影魔术手最重要的功能之一，可得到专业的胶片效果。</p>
        </div>
      </div>
    </div>
    <footer>
      <div class="foot">
        <p>合作下载站点</p>
        <p class="font14"><a href="">PCHOME</a>|<a href="">PCONLINE</a></p>
      </div>
    </footer>
  </div>
</template>
<style>
  #test {
    width:100%;
    height:100%;
    background-color:#fff;
    position:absolute;
    top:0;
    left:0;
    z-index:9998;
    opacity:1;
    /*兼容IE8及以下版本浏览器*/
    filter: alpha(opacity=100);
}

#log_window {
    width:200px;
    height:200px;
    background-color:#FFf;
    margin: auto;
    position: absolute;
    z-index:9999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

</style>
<script>
    import './images/all.css'
    import './js/jquery-1.8.2.min.js'
    import './js/all.js'

    export default{
        data(){
            return{

            }
        },
        methods: {
          changeStatus_show () {
            //TODO 登录成功加载顶部导航条
            this.$store.commit("changeStatus_show");
          },
          login () {
          //TODO 登录成功加载顶部导航条
            this.changeStatus_show();
            //TODO 登录成功跳转到dashboard
            this.$router.push('dashboard');
          }
        }
    }

</script>
