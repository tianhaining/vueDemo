<template>
    <div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
          <el-select v-model="formInline.searchType" placeholder="请选择" @change="sendData">
            <el-option label="合同号" value="contractNo"></el-option>
            <el-option label="合同类型" value="contractType"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="formInline.searchValue" placeholder="请输入" @change="sendData"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>
<style>

</style>
<script>
    export default{
        data(){
            return{
              formInline: {
                searchType: '',
                searchValue: ''
              }
            }
        },
        props:[
          'loading'
        ],
        methods: {
          onSubmit(){
              this.$emit('onSubmit', this.formInline);
          },
          sendData(){
            this.$emit('sendData', this.formInline)
          }
        }
    }
</script>
