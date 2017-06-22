<template>
    <div>
      <div v-for="(product, index) in productList">
        <el-row :gutter="20"  class="row_style">
          <el-col :span="2" :offset="1" class="labelStyle_1"><span>产品{{index}}</span></el-col>
          <el-col :span="4">
            <el-select v-model="productList[index].productName.productName_value" title="请选择产品名称" placeholder="请选择产品名称">
              <el-option v-for="item in product.productName.productNameList" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-select v-model="productList[index].saleStyle.saleStyleValue" title="请选择售卖方式" placeholder="请选择售卖方式">
              <el-option v-for="item in product.saleStyle.saleStyleList" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-date-picker v-model="product.dateRange" type="daterange" title="请选择日期范围" placeholder="选择日期范围" style="width: 250px"></el-date-picker>
          </el-col>
        </el-row>
        <el-row  :gutter="20" class="row_style">
          <el-col :span="4" :offset="3">
            <el-input v-model="product.productAmount" placeholder="请输入金额" title="请输入金额"></el-input>
          </el-col>
          <el-col :span="4">
            <el-input v-model="product.productRadio" placeholder="请输入贡献比例" title="请输入贡献比例">
              <template slot="append">%</template>
            </el-input>
          </el-col>
          <el-col :span="5">
            <el-input v-model="product.productNode" placeholder="请输入备注" title="请输入备注"></el-input>
          </el-col>
          <el-col :span="1" v-show="index == 0 ? false: true"><el-button type="info" @click="deleteProduct(index)">删除</el-button></el-col>
        </el-row>
      </div>
      <div>
        <el-row class="row_style">
          <el-col :span="1" :offset="3"><el-button type="info" @click="addProduct">添加</el-button></el-col>
        </el-row>
      </div>
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
               productList: [{
                productName: {
                  productName_value: '',
                  productNameList: [{label: 'AdMonitor', value: 1}, {label: 'AdMonitor-lite', value: 2}]
                },
                saleStyle: {
                  saleStyleValue: '',
                  saleStyleList: [{label: '固定结算', value: 1}, {label: '一次性结算', value: 2}]
                },
                dateRange: '',
                productAmount: '',
                productRadio: '',
                productNode: '',
               }]
            }
        },
        methods: {
           addProduct(){
            this.productList.push({
                productName: {
                  productName_value: '',
                  productNameList: [{label: 'AdMonitor', value: 1}, {label: 'AdMonitor-lite', value: 2}]
                },
                saleStyle: {
                  saleStyleValue: '',
                  saleStyleList: [{label: '固定结算', value: 1}, {label: '一次性结算', value: 2}]
                },
                dateRange: '',
                productAmount: '',
                productRadio: '',
                productNode: '',
               });
          },
          deleteProduct(index){
            if (index !== -1) {
              this.productList.splice(index, 1)
            }
          }
        }
    }
</script>
