<template>
    <div>
      <el-row :gutter="20" v-for="(firstParty, index) in firstPartyList" class="row_style">
        <el-col :span="2" :offset="1" class="labelStyle_1"><span>甲方{{index}}</span></el-col>
        <el-col :span="4">
          <el-select v-model="firstPartyList[index].firstParty_value" title="请选择甲方" placeholder="请选择甲方" @change="commitFirstParty">
            <el-option v-for="item in firstPartyList[index].firstPartyNameList" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-col>
        <el-col :span="3"><el-input v-model="firstParty.contact" placeholder="请输入甲方联系人" title="请输入甲方联系人" @blur="commitFirstParty"></el-input></el-col>
        <el-col :span="3"><el-input v-model="firstParty.phoneNumber" placeholder="请输入甲方电话" title="请输入甲方电话" @blur="commitFirstParty"></el-input></el-col>
        <el-col :span="4"><el-input v-model="firstParty.email" placeholder="请输入甲方邮箱" title="请输入甲方邮箱" @blur="commitFirstParty"></el-input></el-col>
        <el-col :span="5"><el-input v-model="firstParty.address" placeholder="请输入甲方地址" title="请输入甲方地址" @blur="commitFirstParty"></el-input></el-col>
        <el-col :span="1" v-if="index == 0 ? true : false"><el-button type="info" @click="addFirstParty">添加</el-button></el-col>
        <el-col :span="1" v-else><el-button type="info" @click="deleteFirstParty(index)">删除</el-button></el-col>
      </el-row>
      <!--<el-row>
        <el-button @click="commitFirstParty">确定</el-button>
      </el-row>-->
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
              firstPartyList:[{
                firstParty_value: '',
                firstPartyNameList: [{label: '阿迪达斯有限公司',value: 1},{ label: '耐克有限公司', value: '2'}],
                contact: '',
                phoneNumber: '',
                email: '',
                address: ''
             }]
            }
        },
        methods: {
           addFirstParty () {
            this.firstPartyList.push({
                firstParty_value: '',
                firstPartyNameList: [{label: '阿迪达斯有限公司',value: 1},{ label: '耐克有限公司', value: '2'}],
                contact: '',
                phoneNumber: '',
                email: '',
                address: ''
             });
          },
          deleteFirstParty (index) {
            if (index !== -1) {
              this.firstPartyList.splice(index, 1)
            }
          },
          //TODO 向父组件传递甲方参数
          commitFirstParty(){
            //console.log(JSON.stringify(this.firstPartyList));
            //TODO 可处理成没隔一段时间传一次参数
            this.$emit('commitFirstParty', this.firstPartyList);
          }
        }
    }
</script>
