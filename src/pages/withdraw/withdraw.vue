<template>
  <div id="app">
    <div class="content">
      <div class="item" v-for="item in withdraw">
        <img class="item_avatar" :src="item.user.avatarUrl">
        <div class="item_info">
          <span class="">{{item.user.nickName}}</span>
          <span class="item_amount">提现{{item.amount}}元到（{{item.account}}）</span>
        </div>
        <div class="item_right">

          <div class="item_func" v-if="item.status == 1">
            <button class="item_refuse" @click="btnWithdraw(item, 3)">拒绝</button>
            <button class="item_agree" @click="btnWithdraw(item, 2)">同意</button>
          </div>

          <span class="item_desc" style="color: lawngreen" v-if="item.status == 2">已打款</span>
          <span class="item_desc" style="color: red" v-if="item.status == 3">已拒绝</span>

          <span class="item_crate_time">{{item.createTime}}</span>

        </div>

      </div>
    </div>

    <div class="dialog" v-if="showDialog">
      <div class="pop">

        <h3>管理员登录</h3>
        <input type="text" class="account" placeholder="账号" v-model="account"></input>
        <input type="text" class="password" placeholder="密码" v-model="password"></input>
        <button class="login" @click="btnLogin">登录</button>
      </div>
    </div>
  </div>
</template>

<script>

  import http from "../../js/http.js";

  export default {
    name: 'Course1',
    data() {
      return {
        withdraw: [],
        showDialog: true,
        account: null,
        password: null
      }
    },

    created() {
      let username = localStorage.getItem("username");
      let pwd = localStorage.getItem("password");
      this.account = username;
      this.password = pwd;
    },

    methods: {

      requestWithdrawList: function () {
        http.fetchPost('/withdraw/history/all', null).then((response) => {
          this.withdraw = response.data.data
          console.log("success", this.withdraw);
        }, (error) => {
          console.log("error", error);
        });
      },

      requestWithdrawCheck: function (uid, wid, status) {
        let params = {"uid": uid, "wid": wid, "status": status};
        http.fetchPost('/withdraw/check', params).then((response) => {
          let result = response.data;
          if (result.code == 0) {
            alert("操作成功");
            this.requestWithdrawList();
          } else {
            alert(result.msg);
          }
        }, (error) => {
          console.log("error", error);
          alert("操作失败 " + error);
        });
      },

      btnLogin: function () {
        if (this.stringIsEmpty(this.account) || this.stringIsEmpty(this.password)) {
          return;
        }
        if (this.account == "zhangliucheng" && this.password == "584670") {
          localStorage.setItem("username", "zhangliucheng");
          localStorage.setItem("password", "584670");
          this.showDialog = false;
          this.requestWithdrawList();
        }
      },

      btnWithdraw: function (item, status) {
        this.requestWithdrawCheck(item.uid, item.id, status)
      },

      stringIsEmpty: function (str) {
        if (str == null || str == "" || str == "undefined") {
          return true;
        } else {
          return false;
        }
      }
    }
  }
</script>

<style>

  body {
    margin: 0;
    padding: 0;
  }

  #app {
    width: 100%;
    height: 100%;
  }

  .content {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .item {
    margin-left: 10px;
    margin-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #00000033;
    align-items: center;

  }

  .item_avatar {
    width: 60px;
    height: 60px;
  }

  .item_info {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-left: 20px;
  }

  .item_amount {
    font-size: 16px;
    margin-top: 5px;
    color: cadetblue;
  }

  .item_right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .item_desc {
    font-size: 18px;
  }

  .item_crate_time {
    font-size: 14px;
    margin-top: 5px;
    color: #00000066;
  }

  .item_func {
    display: flex;
    alignment: right;
    align-items: revert;
  }

  .item_refuse {
    width: 80px;
    height: 34px;
    color: white;
    background-color: red;
  }

  .item_agree {
    width: 80px;
    height: 34px;
    margin-left: 20px;
    color: white;
    background-color: lawngreen
  }

  .dialog {
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pop {
    width: 50%;
    background-color: white;
    margin-top: 100px;
    display: flex;
    padding-bottom: 20px;
    padding-top: 10px;
    flex-direction: column;
    align-items: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .account {
    width: 60%;
    height: 30px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .password {
    width: 60%;
    height: 30px;
    margin-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
    display: inline-block;
  }

  .login {
    width: 60%;
    height: 34px;
    color: white;
    margin-top: 40px;
    margin-bottom: 20px;
    background-color: black;
  }

</style>
