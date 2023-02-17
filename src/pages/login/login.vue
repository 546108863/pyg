<template>
  <div>
    <div class="header">
      <div class="w" style="height: 100%">
        <img src="./images/logo.png" alt="" style="margin-top: 10px" />
      </div>
    </div>
    <div class="middle">
      <div class="banner w">
        <div class="container">
          <ul>
            <li>
              <div class="entry-header">
                <div style="border-right: 1px solid #ededed">
                  <a href="#">扫描登陆</a>
                </div>
                <div>
                  <a href="#">账户登陆</a>
                </div>
              </div>
            </li>
            <li>
              <span>公共场所不建议自动登录，以免账号丢失</span>
            </li>
            <li>
              <div class="entry-text">
                <div class="left-img"></div>
                <input
                  type="text"
                  placeholder="邮箱/用户名/手机号"
                  v-model="userId"
                />
              </div>
            </li>
            <li>
              <div class="entry-text">
                <img src="./images/entry2.png" alt="" />
                <input
                  type="password"
                  placeholder="请输入密码"
                  v-model="userPassword"
                />
              </div>
            </li>
            <li>
              <input
                type="checkbox"
                id="auto-entry"
                v-model="isAutoEntry"
              /><label for="auto-entry">自动登陆</label>
              <a href="#">忘记密码?</a>
              <div></div>
              <div></div>
            </li>
            <li>
              <button @click="login">登陆</button>
            </li>
            <li>
              <div>
                <a href="#" class="entry-method"></a>
                <a
                  href="#"
                  class="entry-method"
                  style="background-position: -71px -8px"
                ></a>
                <a
                  href="#"
                  class="entry-method"
                  style="background-position: -123px -8px"
                ></a>
                <a
                  href="#"
                  class="entry-method"
                  style="background-position: -175px -8px"
                ></a>
                <router-link to="/register">立即注册</router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
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
          <li style="border-right: none"><a href="#">Contact U</a></li>
        </ul>
      </div>
      <div>
        <span
          >地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编:100096
          电话:400-618-4000 传真:010-82935100 邮箱: zhanghj+itcast.cn</span
        >
      </div>
      <div>
        <span>京ICP备08001421号京公网安备110108007702</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      userId: "",
      userPassword: "",
      isAutoEntry: false,
    };
  },
  methods: {
    login() {
      let result = this.$store.dispatch("user/login", {
        userId: this.userId,
        userPassword: this.userPassword,
        isAutoEntry: this.isAutoEntry,
      });
      if (result) {
        this.$router.push("/");
      } else {
        alert("用户名或密码错误");
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #ffffff;
}

li {
  list-style: none;
}

input {
  outline: none;
}

a {
  text-decoration: none;
  color: #666666;
  font: 12px "songti";
}

.w {
  width: 1200px;
  margin: 0 auto;
}

.header {
  height: 81px;
}

.middle {
  height: 486px;
  background-color: #7e00ff;
}

.middle .banner {
  height: 100%;
  background: url(./images/banner.png) no-repeat -400px 7px;
}

.middle .banner .container {
  float: right;
  width: 379px;
  height: 360px;
  margin: 62px 80px 0 0;
  background-color: #ffffff;
}

.middle .banner .container ul {
  width: 303px;
  margin: 0 auto;
}

.middle .banner .container li:nth-child(1) {
  height: 63px;
  position: relative;
}

.middle .banner .container .entry-header {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.middle .banner .container .entry-header div {
  float: left;
  width: 150px;
  text-align: center;
}

.middle .banner .container li:nth-child(1) a {
  font-size: 18px;
}

.middle .banner .container li:nth-child(1) a:hover {
  color: #c81623;
}

.middle .banner .container ul li:nth-child(2) {
  font: 12px/24px "songti";
  color: #666666;
  width: 301px;
  height: 24px;
  background-color: #fffdee;
  border: 1px solid #f5eecf;
}

.middle .banner .container li .entry-text {
  height: 36px;
  width: 100%;
  margin-top: 10px;
}

.middle .banner .container li .entry-text input {
  float: left;
  height: 34px;
  width: 254px;
  border: 1px solid #bbbaba;
  border-left: none;
  padding-left: 10px;
}

.middle .banner .container li:nth-child(3) .left-img {
  float: left;
  width: 37px;
  height: 34px;
  background: #cfcdcd url(./images/entry1.png) no-repeat;
  background-position: center;
  border: 1px solid #bbbaba;
  border-right: none;
}

.middle .banner .container li:nth-child(4) div {
  height: 36px;
  width: 100%;
  margin-top: 17px;
}

.middle .banner .container .entry-text img {
  display: block;
  float: left;
  width: 37px;
  height: 34px;
  border: 1px solid #bbbaba;
  border-right: none;
}

.middle .banner .container li:nth-child(5) {
  height: 54px;
  width: 303px;
  font-size: 12px;
  line-height: 54px;
  color: #666666;
}

.middle .banner .container li:nth-child(5) input {
  vertical-align: middle;
}

.middle .banner .container li:nth-child(5) a {
  float: right;
  line-height: 54px;
}

.middle .banner .container li:nth-child(6) button {
  width: 303px;
  height: 40px;
  font-size: 16px;
  background-color: #c81623;
  color: #ffffff;
  border: none;
}

.middle .banner .container li:nth-child(7) {
  height: 62px;
  width: 303px;
  margin-top: 30px;
  line-height: 62px;
}

.middle .banner .container li:nth-child(7) .entry-method {
  float: left;
  display: block;
  height: 32px;
  width: 32px;
  margin-right: 18px;
  background: url(./images/regetype.png) no-repeat -19px -8px;
}

.middle .banner .container li:nth-child(7) a:last-child {
  float: right;
  font-size: 14px;
  line-height: 32px;
  color: #1474af;
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
