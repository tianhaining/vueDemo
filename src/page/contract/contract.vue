<template>
  <div class="padding_style">
    <!--面包屑导航组件-->
    <el-row class="row_style">
      <el-col>
        <cms-breadcrumb parent_breadcrumbValue="合同" breadcrumbValue="合同库"></cms-breadcrumb>
      </el-col>
    </el-row>
    <!--检索组件和操纵按钮-->
    <el-row class="row_style">
      <el-col :span="12">
        <cms-search loading="false" v-on:onSubmit="search" v-on:sendData="getSearchData"></cms-search>
      </el-col>
      <el-col :span="12">
          <span class="wrapper operation_button_style">
            <router-link to="/contract/createContract"><el-button type="info">申请合同</el-button></router-link>
            <router-link to="/contract/createContract"><el-button type="info">申请邮寄</el-button></router-link>
            <router-link to="/contract/createContract"><el-button type="info">开票</el-button></router-link>
            <el-button type="info">文件管理</el-button>
          </span>
      </el-col>
    </el-row>
    <!--表格组件-->
    <el-row v-loading="loading" element-loading-text="拼命加载中">
      <el-col>
        <contract-table v-bind:labelData="contractLabelData" v-bind:tableData="contractTableData"></contract-table>
      </el-col>
    </el-row>
    <!--分页组件-->
    <el-row>
      <el-col>
        <!--<cms-pagination></cms-pagination>-->
        <div class="pagination_style">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage0"
            :page-sizes="[10, 20, 30]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style>
.row_style {
  margin-top: 20px;
}
.operation_button_style {
  float: right;
}
.operation_button_style a{
  text-decoration: none;
  color: #fff;
}
.padding_style {
  padding: 10px 20px 0 20px;
}
.pagination_style {
  float: right;
}
</style>
<script>
    import ContractTable from 'src/components/cmsTable'
    //import CmsPagination from 'src/components/cmsPagination'
    import CmsSearch from 'src/components/cmsSearch'
    import CmsBreadcrumb from 'src/components/cmsBreadcrumb'
    import axios from 'axios'
    export default{
        data(){
            return{
              loading: false,
              currentPage0: 1,
              contractLabelData: [],
              contractTableData: [],
              pageSize: 10,
              pageNum: 1,
              searchData: {}
            }
        },
        components: {
          ContractTable,
          //CmsPagination,
          CmsSearch,
          CmsBreadcrumb
        },
        methods: {
          getData(){
            axios.get('static/data.json').then((res) => {
                this.contractLabelData = res.data.contractLabelData;
                this.contractTableData = res.data.contractTableData;
            })
            /*axios.post('static/data.json',{
              pageNum: this.pageNum,
              pageSize: this.pageSize
            })
            .then((res)=>{
              console.log(res);
            })
            .catch((error)=>{
              console.log(error);
            })*/
          },
          handleSizeChange(val) {
            this.pageSize = val;
            console.log('pageSize=' + val);
            console.log(`每页 ${val} 条`);
          },
          handleCurrentChange(val) {
            this.pageNum = val;
            console.log('pageNum=' + this.pageNum);
            console.log(`当前页: ${val}`);
          },
          search (formInline){
            this.loading = true;
            console.log(JSON.stringify(formInline));
          },
          getSearchData(formInline){
             this.searchData = formInline;
             console.log('searchData', JSON.stringify(this.searchData));
          }
        },
        created() {
            this.getData();
        },
    }

</script>
