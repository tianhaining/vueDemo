<template>
    <div>
     <!-- <p>{{labelData}}</p>-->
      <el-table empty-text="拼命加载中" :data="tableData" border fit>
        <el-table-column type="selection" width="50" align="center"></el-table-column>
        <el-table-column
          :prop="item.propVal"
          :label="item.labelVal"
          :fixed="(index == 0 || index == 1) ? true : false"
          :min-width="(index == 1 || index == 3)? 230 : 150"
          align="center"
          v-for="(item, index) in labelData"
          show-overflow-tooltip
          class-name="rowStyle"></el-table-column>
        <el-table-column inline-template fixed="right" label="操作" min-width="200" align="center" show-overflow-tooltip>
          <span>
            <el-button @click="handleClick($index, tableData)" type="text" size="small">查看</el-button>
            <el-button @click="handleEdit($index, tableData)" type="text" size="small">编辑</el-button>
            <el-button @click="handleDelete($index, tableData)" type="text" size="small">删除</el-button>
          </span>
        </el-table-column>
      </el-table>
    </div>
</template>
<style>
  .rowStyle {
    white-space: nowrap
  }
</style>
<script>
    export default{
        data(){
            return{
              loading: true
            }
        },
        props: ['labelData','tableData'],
        methods: {
          handleClick(index, tableData){
            //console.log(tableData[index].contractNo);
            this.$router.push({name: 'contractDetail', params: {id: tableData[index].contractNo}});
          },
          handleEdit(index, tableData){
            console.log("edit " + index + " starting...");
          },
          handleDelete(index, tableData){
            console.log("delete " + index + "starting...");
          }
        }
    }
</script>
