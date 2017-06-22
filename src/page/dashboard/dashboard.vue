<template>
    <div  class="padding_style">
      <!--面包屑导航组件-->
      <el-row class="row_style">
        <el-col>
          <cms-breadcrumb parent_breadcrumbValue="dashboard" breadcrumbValue="dashboard"></cms-breadcrumb>
        </el-col>
      </el-row>
      <!--echarts组件-->
     <!-- <el-row class="row_style"><el-col><bar></bar></el-col></el-row>
      <el-row class="row_style"><el-col><line-charts></line-charts></el-col></el-row>
      <el-row class="row_style"><el-col><pie></pie></el-col></el-row>
      <el-row class="row_style"><el-col><redar></redar></el-col></el-row>
      <el-row class="row_style"><el-col><china></china></el-col></el-row>-->
      <!--highcharts组件-->
      <el-row class="row_style"><el-col><baseLine></baseLine></el-col></el-row>

      <el-row class="row_style"><el-col><update-count-demo></update-count-demo></el-col></el-row>

      <el-row class="row_style"><el-col>
        <cms-dialog></cms-dialog>
      </el-col></el-row>
    </div>
</template>
<style>
.row_style {
  margin-top: 20px;
}
.padding_style {
  padding: 10px 20px 0 20px;
}
</style>
<script>
  import cmsBreadcrumb from 'src/components/cmsBreadcrumb'

  import bar from 'src/components/echarts/bar'
  import lineCharts from 'src/components/echarts/line'
  import pie from 'src/components/echarts/pie'
  import redar from 'src/components/echarts/redar'
  import china from 'src/components/echarts/china'

  import baseLine from 'src/components/highcharts/baseLine'

  import updateCountDemo from "src/components/updateCountDemo.vue"

  import cmsDialog from 'src/components/cmsDialog'
    export default{
        data(){
            return{

            }
        },
        components: {
          cmsBreadcrumb,
          bar,
          lineCharts,
          pie,
          redar,
          china,
          baseLine,
          updateCountDemo,
          cmsDialog
        }
    }
</script>
