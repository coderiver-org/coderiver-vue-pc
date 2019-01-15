<template>
    <div class="regBakg">
        <div class="bgcover">
        </div>
        <div style="display: flex;width: 100%;height: 100vh;">
            <div class="regBody">
                <div class="regBody_header">
                    <img src="../../assets/icons/logo.png">
                    <!--<div style="margin-top: 20px;">-->
                    <span>欢迎加入CodeRiver</span>
                    <!--</div>-->
                </div>
                <div class="regBody_content">
                    <div class="content_item" :style="tipsClass1">
                        <Input class="content_item_input" v-model="registerData.userName" placeholder="请输入邮箱或手机号"  style="width: 100%;" @on-blur="formatUNStr" />
                        <Alert  type="error" v-if="tipsClass1.height!=''" style="font-size: 14px">{{checkTips}}</Alert>
                    </div>
                    <div class="content_item" :style="tipsClass2">
                        <Input class="content_item_input" v-model="registerData.checkCode" placeholder="请输入6位验证码"  style="width: 63%;margin-right: 15px" />
                        <span style="color: #40AEA8;font-size: 16px;cursor: pointer" @click="getCheckCode">{{codeTips}}</span>
                        <Alert type="error"  v-if="tipsClass2.height!=''" style="font-size: 14px">{{checkTips}}</Alert>
                    </div>
                    <div class="content_item" :style="tipsClass3">
                        <Input class="content_item_input" v-model="registerData.password" type="password" placeholder="含数字字母或_的6-18位密码"  style="width: 100%;"  @on-blur="formatPDStr">
                        <Icon type="md-eye" slot="suffix" size="32" color="#8590A5"  style="top:15px" v-if="registerData.password==''" />
                        <Icon type="md-eye-off" slot="suffix" size="30" color="#8590A5"  v-if="registerData.password!=''" />
                        </Input>
                        <Alert type="error"  v-if="tipsClass3.height!=''" style="font-size: 14px">{{checkTips}}</Alert>
                    </div>
                    <div class="content_item" :style="tipsClass4">
                        <Input class="content_item_input" v-model="registerData.rePassword" type="password" placeholder="确认密码"  style="width: 100%;" @on-blur="formatrPDStr">
                        <Icon type="md-eye" slot="suffix" size="32" color="#8590A5"  v-if="registerData.rePassword==''" />
                        <Icon type="md-eye-off" slot="suffix" size="30" color="#8590A5"  v-if="registerData.rePassword!=''" />
                        </Input>
                        <Alert type="error" v-if="tipsClass4.height!=''" style="font-size: 14px">{{checkTips}}</Alert>
                    </div>
                    <div class="content_item">
                        <Input class="content_item_input" v-model="registerData.nickname" placeholder="昵称"  style="width: 100%;" />
                    </div>
                    <div class="content_item" style="display: flex;flex-direction: row;justify-content: space-between">
                        <!--<Input class="content_item_input" v-model="registerData.selectedRole" placeholder="选择角色" clearable style="width: 100%;" />-->
                        <Select v-model="registerData.selectedRole" style="width:49%" placeholder="选择角色"  >
                            <Option v-for="item in RoleList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <Select v-model="registerData.worktime" style="width:49%" placeholder="工作经验"  >
                            <Option v-for="item in workexperienceList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </div>
                </div>
                <div class="regBody_footer">
                    <div class="regbtn">
                        <Button style="width: 100%;height: 100%;background: #40AEA8;color: #ffffff;font-size: 19px" @click="registUser">注册</Button>
                    </div>
                    <div class="tologo">
                        <p>已有账号？<span>登录</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "register",
        data () {
            return {
                codeTips:'获取验证码',// 验证码提示
                registerData: {
                    userName:'',//注册用户名
                    checkCode:'',//验证码
                    password:'',// 密码
                    rePassword:'',// 重复密码
                    nickname:'',// 昵称
                    selectedRole:'',// 选择的角色
                    worktime:'', //经验
                },
                checkTips:'', //格式化提示
                tipsClass1:{
                    height:''
                },
                tipsClass2:{
                    height:''
                },
                tipsClass3:{
                    height:''
                },
                tipsClass4:{
                    height:''
                },
                RoleList: [// 角色数组
                    {
                        value: '1',
                        label: '产品经理'
                    },
                    {
                        value: '2',
                        label: '项目经理'
                    },
                    {
                        value: '3',
                        label: '前端开发'
                    },
                    {
                        value: '4',
                        label: '后端开发'
                    }
                ],
                workexperienceList:[ //工作经验
                    {
                        value: '0',
                        label: '1年以下'
                    },
                    {
                        value: '13',
                        label: '1-3年'
                    },
                    {
                        value: '35',
                        label: '3-5年'
                    },
                    {
                        value: '58',
                        label: '5-8年'
                    },
                    {
                        value: '10',
                        label: '十年以上'
                    }
                ]

            }
        },
        computed: {

        },
        methods: {
            //--用户名格式化校验
            formatUNStr () {
                this.restTips()
                if (this.registerData.userName === '')  {
                    console.log('111')
                    this.checkTips = '用户名不能为空'
                    this.tipsClass1.height='93px'
                    return
                }else if(this.registerData.userName.indexOf('@')>0) { // 邮箱正则
                    console.log('asdfsa')
                    const emreg =/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
                    // console.log('aaa=',emreg.test(this.registerData.userName))
                    if(!emreg.test(this.registerData.userName)) {  //验证不成功
                        this.checkTips = '邮箱格式不正确'
                        this.tipsClass1.height='93px'
                        return
                    }else {
                        this.checkTips = ''
                        this.tipsClass1.height=''
                        return
                    }
                }else { //手机号 验证
                    const phonereg = /^1[0-9]{10}$/;
                    if(!phonereg.test(this.registerData.userName)) { //验证不成功
                        this.checkTips = '手机号码不正确'
                        this.tipsClass1.height='93px'
                        return
                    } else{
                        this.checkTips = ''
                        this.tipsClass1.height=''
                        return
                    }
                }
            },
            //--密码格式化校验
            formatPDStr () {
                this.restTips()
                if (this.registerData.password === '')  {
                    console.log('111')
                    this.checkTips = '密码不能为空'
                    this.tipsClass3.height='93px'
                    return
                }else  { // 密码正则
                    const psreg =/^[0-9a-zA-Z_]{6,18}$/
                    if(!psreg.test(this.registerData.password)) {  //验证不成功
                        console.log('asdfsa')
                        this.checkTips = '密码格式不正确'
                        this.tipsClass3.height='93px'
                        return
                    }else {
                        this.checkTips = ''
                        this.tipsClass3.height=''
                        return
                    }
                }
            },
            /// --重复密码
            formatrPDStr () {
                this.restTips()
               if(this.registerData.password!==this.registerData.rePassword) {
                   this.checkTips = '两次密码不一致'
                   this.tipsClass4.height='92px'
                   return
               } else {
                   this.checkTips = ''
                   this.tipsClass4.height=''
                   return
               }
            },
            //--获取验证码
            getCheckCode () {
                let that =this
                // this.$http().then((res)=> {
                this.$nextTick(function () {
                    var alltime =59 //总时长
                    var timer = setInterval(function () { //倒计时
                        if(alltime>0) {
                            that.codeTips = alltime+ 's 后重新获取'
                            alltime =alltime-1
                        }else {
                            clearInterval(timer)
                            that.codeTips='获取验证码'
                        }
                    },1000)
                })
                // })
            },
            //注册
            registUser () {
              for(var key in this.registerData) {
                  if(this.registerData[key]=='') {
                      this.$Message.warning('请将信息填写完整');
                      // this.$Modal.warning({
                      //     content: '请将信息填写完整'
                      // });
                      return
                  }
              }
            },
            //--重置提示
            restTips() {
                this.checkTips = ''
                this.tipsClass1.height=''
                this.tipsClass2.height=''
                this.tipsClass3.height=''
                this.tipsClass4.height=''
            }
        }
    }
</script>

<style  lang="scss" scoped>
    .regBakg {
        /*display: flex;*/
        background: url("../../assets/img/registbakg.png") no-repeat;
        /*background-size:cover;*/
        /*width: 100%;*/
        /*height: 100vh;*/
        position:fixed;
        top: 0;
        left: 0;
        width:100%;
        height:100vh;
        min-width: 960px;
        z-index:-10;
        zoom: 1;
        /*background-color: #fff;*/
        /*background-repeat: no-repeat;*/
        background-size: cover;
        -webkit-background-size: cover;
        -o-background-size: cover;
        background-position: center 0;
        /*height: 100%;*/
        .bgcover {
            width:100%;
            height:100%;
            opacity:0.5;
            position:fixed;
            top: 0;
            left: 0;
            z-index:-1;
            zoom: 1;
            background: white;
        }
        .regBody {
            width: 444px/1920px*100%;
            min-width: 444px;
            height: 760px/1000px*100%;
            min-height: 760px;
            margin: auto;
            background: #ffff;
            .regBody_header {
                margin-top: 30px;
                img {
                    width: 100%;
                    height: 100%;
                    max-width: 213px;
                    max-height: 49px;
                    margin-left: 113px;
                    margin-bottom: 20px;
                }
                span {
                    margin-top: 20px;
                    margin-left: 136px;
                    width:172px;
                    height:19px;
                    font-size:20px;
                    font-family:Adobe Heiti Std R;
                    font-weight:normal;
                    color:rgba(24,38,42,1);
                    line-height:26px;
                }
            }
            .regBody_content {
                width:calc(100% - 100px);
                margin: 31px auto;
                /*margin-left: 50px;*/
                /*margin-right:50px;*/
                .content_item {
                    width: 100%;
                    height: 60px;
                    border-bottom: 1px solid #EBEBEB;
                    /deep/ .ivu-input-wrapper {
                        /deep/ .ivu-input {
                            font-size: 16px;
                            height: 59px;
                            border: none;
                            color: black;
                        }
                        /deep/ .ivu-input-suffix {
                            top:14px
                        }
                        ::-webkit-input-placeholder{
                            font-size:16px;
                            font-family:Adobe Heiti Std R;
                            font-weight:normal;
                            color:rgba(133,144,165,1);
                        }    /* 使用webkit内核的浏览器 */
                        :-moz-placeholder{
                            font-size:16px;
                            font-family:Adobe Heiti Std R;
                            font-weight:normal;
                            color:rgba(133,144,165,1);
                        }                  /* Firefox版本4-18 */
                        ::-moz-placeholder{
                            font-size:16px;
                            font-family:Adobe Heiti Std R;
                            font-weight:normal;
                            color:rgba(133,144,165,1);
                        }                  /* Firefox版本19+ */
                        :-ms-input-placeholder{}           /* IE浏览器 */
                    }
                    /deep/ .ivu-select {
                        /deep/ .ivu-select-selection {
                            height: 59px;
                            border: none;
                            /deep/ .ivu-select-placeholder {
                                font-size: 16px;
                                height: 59px;
                                line-height: 59px;
                                color: #8590A5;
                            }
                            /deep/ .ivu-select-selected-value {
                                font-size: 16px;
                                height: 59px;
                                line-height: 59px;
                            }
                        }
                        /deep/ .ivu-select-dropdown  {
                            /deep/ .ivu-select-dropdown-list {
                                /deep/ li {
                                    font-size: 16px !important;
                                }
                            }

                        }
                    }
                }
            }
            .regBody_footer {
                width:100%;
                margin: auto;
                padding-top: 51px;
                .regbtn {
                    width:calc(100% - 100px);
                    height: 52px;
                    margin: auto;
                }
                .tologo {
                    width: 100%;
                    height: 94px;
                    font-size: 16px;
                    color: #18262A;
                    text-align: center;
                    p {
                        line-height: 94px;
                    }
                    span {
                        color: #40AEA8;
                    }
                }
            }
        }
    }
</style>