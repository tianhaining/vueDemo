<template>
    <div class="nav_style">
      <!--<el-row class="logo_row_style">
        <el-col :span="12">
          <div>
            <a class="logo" href="javascript:;"><span>Hotpot</span>Admin</a>
          </div>
        </el-col>
        <el-col :span="12"></el-col>
      </el-row>-->
      <el-menu theme="dark" default-active="1" mode="horizontal" :router="true">
        <el-menu-item index="/dashboard">Dashboard</el-menu-item>
        <el-submenu index="/contract">
          <template slot="title">合同</template>
          <el-menu-item index="/contract">合同库</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
</template>
<style>
.nav_style {
  position: fixed;
  z-index: 5;
  width: 100%;
  top: 0px;
}
</style>
<script>
    export default{
        data(){
            return{

            }
        },
        computed: {
           navStatus (){
              return this.$store.state.navStatus;
          }
        }
    }
</script>
