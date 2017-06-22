<template>
    <div class="breadcrumb_style">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>{{ parent_breadcrumbValue }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ breadcrumbValue }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
</template>
<style>
  .breadcrumb_style {
    margin-top: 50px
  }
</style>
<script>
    export default{
        data(){
            return{

            }
        },
        props:[
          'parent_breadcrumbValue',
          'breadcrumbValue'
        ]
    }
</script>
