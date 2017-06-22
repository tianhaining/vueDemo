<template>
    <div class="createContract_div_style">
      <!--面包屑导航组件-->
      <el-row class="row_style">
        <el-col><cms-breadcrumb parent_breadcrumbValue="合同" breadcrumbValue="新建合同"></cms-breadcrumb></el-col>
      </el-row>
      <!--合同基本信息-->
      <div>
        <el-row class="row_style">
          <el-col>合同基本信息</el-col>
        </el-row>
        <div class="info_box_style"  style="">
          <el-row :gutter="20" class="row_style">
            <el-col :span="2" :offset="1" class="labelStyle_1"><span>合同类型</span></el-col>
            <el-col :span="5">
              <el-select v-model="contractType1_value" placeholder="请选择合同类型">
                <el-option v-for="item in contractType1" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-col>
            <el-col :span="5">
              <el-select v-model="contractType2_value" v-show="contractType2_show" placeholder="请选择">
                <el-option v-for="item in contractType2" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-col>
            <el-col :span="5">
              <el-input v-model="contractType3_value" v-show="contractType3_show" placeholder="请输入框架合同号"></el-input>
            </el-col>
          </el-row>
          <el-row class="row_style" :gutter="20">
            <el-col :span="2" :offset="1" class="labelStyle_1"><span>负责人</span></el-col>
            <el-col :span="5">
              <el-select v-model="manager_value" placeholder="请选择负责人">
                <el-option v-for="item in manager" :label="item.label" value="item.value"></el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row class="row_style" :gutter="20">
            <el-col :span="2" :offset="1" class="labelStyle_1"><span>含税金额</span></el-col>
            <el-col :span="5">
              <el-input placeholder="请输入含税金额"></el-input>
            </el-col>
          </el-row>
          <el-row class="row_style" :gutter="20">
            <el-col :span="2" :offset="1"><span>币种</span></el-col>
            <el-col :span="5">
              <el-radio-group v-model="currency">
                <el-radio label="CNY"></el-radio>
                <el-radio label="USD"></el-radio>
              </el-radio-group>
            </el-col>
          </el-row>
          <el-row class="row_style" :gutter="20">
            <el-col :span="2" :offset="1" class="labelStyle_1"><span>预付款</span></el-col>
            <el-col :span="5">
              <el-input placeholder="请输入预付款"></el-input>
            </el-col>
          </el-row>
          <el-row class="row_style" :gutter="20">
            <el-col :span="2" :offset="1" class="labelStyle_1"><span>签订日期</span></el-col>
            <el-col :span="5">
              <el-date-picker v-model="signDate" type="date" placeholder="选择签订日期"></el-date-picker>
            </el-col>
          </el-row>
          <el-row class="row_style" :gutter="20">
            <el-col :span="2" :offset="1" class="labelStyle_1"><span>合同日期</span></el-col>
            <el-col :span="3">
              <el-date-picker v-model="beginDate" type="date" placeholder="选择合同开始日期"></el-date-picker>
            </el-col>
            <el-col :span="1" class="line labelStyle_1">
              <span>--</span>
            </el-col>
            <el-col :span="4">
              <el-date-picker v-model="endDate" type="date" placeholder="选择合同开始日期"></el-date-picker>
            </el-col>
          </el-row>
          <el-row class="row_style" :gutter="20">
            <el-col :span="2" :offset="1"><span>业务线</span></el-col>
            <el-col :span="5">
              <el-radio-group v-model="serviceLine">
                <el-radio label="W4A"></el-radio>
                <el-radio label="W4P"></el-radio>
              </el-radio-group>
            </el-col>
          </el-row>
          <el-row class="row_style" :gutter="20">
            <el-col :span="2" :offset="1" class="labelStyle_1"><span>业务信息</span></el-col>
            <el-col :span="9">
              <el-input placeholder="请输入业务相关信息" v-model="serviceInfo"></el-input>
            </el-col>
            <el-col :span="1">
              <el-button type="info" @click="dialogServiceInfoVisible = true">选择</el-button>
              <el-dialog title="业务相关信息" v-model="dialogServiceInfoVisible">
                <div class="block info_box_style">
                  <el-row class="row_style" :gutter="20">
                    <el-col :span="3" :offset="1"><span>直签类型</span></el-col>
                    <el-col :span="9">
                      <el-radio-group v-model="straightSign">
                        <el-radio label="广告主"></el-radio>
                        <el-radio label="代理商"></el-radio>
                        <el-radio label="媒体"></el-radio>
                      </el-radio-group>
                    </el-col>
                  </el-row>
                  <el-row class="row_style" :gutter="20">
                    <el-col :span="3" :offset="1" class="labelStyle_1"><span>广告主</span></el-col>
                    <el-col :span="9">
                      <el-select v-model="advertiser_value" placeholder="请选择广告主">
                        <el-option v-for="item in advertiserList" :label="item.label" :value="item.value"></el-option>
                      </el-select>
                    </el-col>
                  </el-row>
                  <el-row class="row_style" :gutter="20">
                    <el-col :span="3" :offset="1" class="labelStyle_1"><span>代理商</span></el-col>
                    <el-col :span="9">
                      <el-select v-model="agent_value" placeholder="请选择代理商">
                        <el-option v-for="item in agentList" :label="item.label" :value="item.value"></el-option>
                      </el-select>
                    </el-col>
                  </el-row>
                  <el-row class="row_style" :gutter="20">
                    <el-col :span="3" :offset="1" class="labelStyle_1"><span>媒体</span></el-col>
                    <el-col :span="9">
                      <el-select v-model="media_value" placeholder="请选择媒体">
                        <el-option v-for="item in mediaList" :label="item.label" :value="item.value"></el-option>
                      </el-select>
                    </el-col>
                  </el-row>
                </div>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogServiceInfoVisible = false">取 消</el-button>
                  <el-button type="primary" @click="serviceInfoConfirm">确 定</el-button>
                </div>
              </el-dialog>
            </el-col>
          </el-row>
          <el-row class="row_style" :gutter="20">
            <el-col :span="2" :offset="1" class="labelStyle_1"><span>服务号</span></el-col>
            <el-col :span="5">
              <el-input placeholder="请输入服务号"></el-input>
            </el-col>
            <el-col :span="9" class="labelStyle_1"><span>（服务号是预合同编号，多个服务号请使用英文分号隔开）</span></el-col>
          </el-row>
          <el-row class="row_style" :gutter="20">
            <el-col :span="2" :offset="1" class="labelStyle_1"><span>合同内容</span></el-col>
            <el-col :span="10">
              <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入合同内容"></el-input>
            </el-col>
          </el-row>
        </div>
      </div>
      <!--甲方-->
      <div>
        <el-row class="row_style">
          <el-col>甲方信息</el-col>
        </el-row>
        <div class="info_box_style">
          <cms-add-first-party @commitFirstParty="getFirstParty"></cms-add-first-party>
        </div>
      </div>
      <!--乙方-->
      <div>
        <el-row class="row_style">
          <el-col>乙方信息</el-col>
        </el-row>
        <div class="info_box_style">
          <cms-add-second-party></cms-add-second-party>
        </div>
      </div>
      <!--产品信息-->
      <div>
        <el-row class="row_style">
          <el-col>产品信息</el-col>
        </el-row>
        <div class="info_box_style">
          <cms-add-product></cms-add-product>
        </div>
      </div>
      <!--保存和取消按钮-->
      <div>
        <el-row class="row_style" :gutter="10" type="flex" justify="end">
          <el-col :span="2"><el-button type="info" @click='save'>新建</el-button></el-col>
          <el-col :span="2"><el-button @click='cancel'>取消</el-button></el-col>
        </el-row>
      </div>
    </div>
</template>
<style>
.row_style {
  margin-top: 20px;
}
.createContract_div_style {
  padding: 10px 20px 40px 20px;
  font-size: 15px;
  font-family: 'Microsoft YaHei';
  margin-top: 0px;
}
.row_style {
  margin-top: 20px;
}
.labelStyle_1 {
  padding-right: 0;
  padding-top: 9px;
  min-width: 90px;
}
.info_box_style {
  border: 1px solid #D3D3D3;
  margin-top: 20px;
  padding-bottom: 20px;
}
</style>
<script>
    import CmsBreadcrumb from 'src/components/cmsBreadcrumb'
    import CmsAddProduct from './cmsAddProduct'
    import CmsAddFirstParty from './cmsAddFirstParty'
    import CmsAddSecondParty from './cmsAddSecondParty'
    export default{
        data() {
          return {
            contractType1_value: '',
            contractType2_value: '',
            contractType3_value: '',
            contractType2_show: false,
            contractType3_show: false,
            manager_value: '',
            currency: '',
            signDate: '',
            beginDate: '',
            endDate: '',
            serviceLine: '',
            serviceInfo: '',
            straightSign: '',
            advertiser_value: '',
            media_value: '',
            agent_value: '',
            dialogServiceInfoVisible: false,//业务相关信息弹窗
            contractType1: [{
              label: '单笔合同',
              value: '单笔合同'
            }, {
              label: '月费合同',
              value: '月费合同'
            },{
              label: '框架合同',
              value: '框架合同'
            }],
            contractType2: [{
              label: 'PO单',
              value:  'PO单'
            }, {
              label: '框架合同',
              value: '框架合同'
            }],
             manager: [{
              label: '田海宁',
              value: 'tianhaining'
             }, {
              label: '田好宁',
              value: 'tianhaoning'
             }],
             advertiserList: [{
              label: '广告主1',
              value: '广告主1'
             },{
              label: '广告主2',
              value: '广告主2'
             }],
             agentList: [{
              label: '代理商1',
              value: '代理商1'
             },{
              label: '代理商2',
              value:  '代理商2'
             }],
             mediaList: [{
              label: '媒体1',
              value: '媒体1'
             },{
              label: '媒体2',
              value:  '媒体2'
             }]
          };
        },
        components: {
          CmsBreadcrumb,
          CmsAddProduct,
          CmsAddFirstParty,
          CmsAddSecondParty
        },
        methods: {
          serviceInfoConfirm(){
            this.serviceInfo = '直签类型：'+this.straightSign + ';' + '广告主：'+this.advertiser_value + ';' +'媒体：'+ this.media_value + ';' + '代理商：' + this.agent_value;
            this.dialogServiceInfoVisible = false
          },
          //TODO 获取甲方子组件传递过来的甲方数据,可以放到保存的时候获取
          getFirstParty(first_party){
            console.log(JSON.stringify(first_party));
          },
          save(){

          },
          cancel(){
            //this.$router.go(-1);
            //$router router实例
            this.$router.back();
          }
        },
        watch: {
          contractType1_value(val, oldVal){
            console.log('new: %s, old: %s', val, oldVal);
            if(val == '框架合同'){
              this.contractType2_show = true;
              this.contractType2_value = '';
            }else {
              this.contractType2_show = false;
              this.contractType3_show = false;
            }
          },
          contractType2_value(val, oldVal){
            console.log('new: %s, old: %s', val, oldVal);
            if(val == '框架合同'){
              this.contractType3_show = true;
              this.contractType3_value = '';
            }else {
              this.contractType3_show = false;
            }
          }
        }
    }
</script>
