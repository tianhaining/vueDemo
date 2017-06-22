<template>
    <div>
      <el-row class="row_style" :gutter="20">
        <el-col :span="2" :offset="1"><span>乙方</span></el-col>
        <el-col :span="8">
          <el-radio-group v-model="secondParty">
            <el-radio label="思博途"></el-radio>
            <el-radio label="北京秒针"></el-radio>
            <el-radio label="上海秒针"></el-radio>
            <el-radio label="学之途"></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row class="row_style" :gutter="20">
        <el-col :span="2" :offset="1" class="labelStyle_1"><span>乙方联系人</span></el-col>
        <el-col :span="5">
          <el-input placeholder="请输入乙方联系人"></el-input>
        </el-col>
      </el-row>
    </div>
</template>
<style>
.row_style {
  margin-top: 20px;
}
</style>
<script>
    export default{
        data(){
            return{
               secondParty: ''
            }
        }
    }
</script>
