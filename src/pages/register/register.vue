<template>
  <div>
    <div class="header w">
        <div class="w" style="height: 100%;">
            <img src="../../assets/images/logo.png" alt="" style="margin-top: 10px;">
        </div>
    </div>

    <div class="main w">
        <div class="main-header">
            <span>注册新用户</span>
            <div class="login">
                <span>我有账号,去</span>
                <router-link to="/login">登录</router-link>
            </div>
        </div>
        <form>
            <table align="middle" cellpadding="0" cellspacing="0">
                <tr>
                    <td class="cell1"><label for="userName">用户名：</label></td>
                    <td><input type="text" id="userName" require="required" autofocus v-model="userInfo.userName" autocomplete="off" @focusout="verifyUserName"></td>
                </tr>
                <tr>
                    <td class="cell1"><label for="phoneNumber">手机号：</label></td>
                    <td><input type="text" id="phoneNumber" maxlength="11" v-model="userInfo.phoneNumber" autocomplete="off" @focusout="verifyUserName"></td>
                </tr>
                <tr>
                    <td class="cell1"><label for="code">短信验证码：</label></td>
                    <td><input type="text" id="code" v-model="userInfo.phoneCode" autocomplete="off"><button class="getCode" @click="getCode">获取验证码</button></td>
                </tr>
                <tr>
                    <td class="cell1"><label for="loginPassword">登录密码：</label></td>
                    <td><input type="password" id="loginPassword" v-model="userInfo.loginPassword"></td>
                </tr>
                <tr>
                    <td class="cell1"><label for="comfirmPassword">确认密码：</label></td>
                    <td><input type="password" id="comfirmPassword" v-model="userInfo.comfirmPassword"></td>
                </tr>
                <tr>
                    <td class="cell1"><input type="checkbox" id="agree" v-model="userInfo.agree"></td>
                    <td><label for="agree">同意协议并注册</label><a href="">《用户协议》</a></td>
                </tr>
                <tr>
                    <td class="commit" colspan="2"><input type="submit" value="完成注册" @click="commit"></td>
                </tr>
            </table>


        </form>
    </div>

    <div class="bottom">
        <div>
            <ul>
                <li><a href="#">关于我们</a></li>
                <li><a href="#">联系我们</a></li>
                <li><a href="#">联系客服</a></li>
                <li><a href="#">商家入驻</a></li>
                <li><a href="#">营销中心</a></li>
                <li><a href="#">手机品优购</a></li>
                <li><a href="#">友情链接</a></li>
                <li><a href="#">销售联盟</a></li>
                <li><a href="#">品优购社区</a></li>
                <li><a href="#">品优购公益</a></li>
                <li><a href="#">English Site</a></li>
                <li style="border-right: none;"><a href="#">Contact U</a></li>
            </ul>
        </div>
        <div>
            <span>地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096 电话：400-618-4000 传真：010-82935100 邮箱: zhanghj+itcast.cn</span>
        </div>
        <div>
            <span>京ICP备08001421号京公网安备110108007702</span>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "register",
    data() {
        return {
            userInfo: {
                userName: "",
                phoneNumber: "",
                phoneCode: "",
                loginPassword: "",
                comfirmPassword: "",
                agree:false
            }
        }
    },
    methods: {
        getCode(){
            this.$store.dispatch('register/getCode');
            this.userInfo.phoneCode = this.code;
        },
        commit() {
            const {userName,phoneNumber,phoneCode,loginPassword,comfirmPassword} = this.userInfo;
            let flag = false;
            if (this.userInfo.agree) {
                if (userName&&phoneNumber&&phoneCode&&loginPassword&&comfirmPassword) {
                    if (loginPassword===comfirmPassword) {
                        this.codeArray.forEach(code => {
                            if (code === phoneCode) {
                                this.$store.dispatch('register/saveUserInfo',{userName,phoneNumber,comfirmPassword});
                                flag = true;
                            }
                        });
                        if(!flag) {
                            alert("验证码不正确,请重新输入");
                        }
                    } else {
                        alert("输入密码不一致");
                    }
                }
            } else {
                alert("请阅读并同意注册协议")
            }
        }
        
    },
    computed: {
        ...mapState("register", ["code","codeArray"]),
    },
}
</script>

<style scoped>
        input {
            outline: none;
        }

        a {
            text-decoration: none;
            color: #666666;
            font: 12px "songti";
        }
        .header {
            height: 82px;
            border-bottom: solid 2px #c81623;
        }

        .main {
            border: solid 1px #dfdfdf;
            box-sizing: border-box;
            margin-top: 20px;
        }

        .main-header {
            height: 40px;
            padding: 0 20px;
            background-color: #ececec;
            line-height: 40px;
            font-size: 18px;
        }

        .main-header .login {
            float: right;
            font-size: 14px;
        }

        .main-header .login a {
            color: #c81623;
            font-size: 14px;
        }

        form input[type=submit] {
            height: 35px;
            width: 200px;
            border: none;
            background-color: #c81623;
            font-size: 14px;
        }

        .main li {
            margin: 0 auto;
        }

        form {
            margin-top: 55px;
        }

        table {
            margin: 0 auto;
        }

        .cell1 {
            text-align: right;
        }

        .getCode {
            height: 34px;
            border: solid 1px #666666;
        }
        .commit {
            text-align: center;
        }

        form table tr:nth-of-type(-n+5) input {
            height: 32px;
            width: 238px;
            margin-top: 10px;
            border-width: 1px;
            background-color: transparent;
        }

        form table tr:nth-of-type(6) {
            height: 50px;
        }

        form table tr:nth-of-type(6) input {
            margin-right: 12px;
        }

        .bottom {
            height: 119px;
            color: #666666;
            font-size: 12px;
        }

        .bottom div:first-child {
            width: 975px;
            height: 15px;
            margin: 20px auto 0;
        }

        .bottom div:nth-child(2) {
            margin-top: 15px;
            text-align: center;
        }

        .bottom div:nth-child(3) {
            margin-top: 8px;
            text-align: center;
        }

        .bottom li {
            float: left;
            width: 77px;
            border-right: 1px solid #999999;
            text-align: center;
        }
</style>