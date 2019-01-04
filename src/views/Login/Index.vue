<template>
  <div class="login">
    <div class="logo">
      <img src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png">
    </div>

    <div class="login-form">
      <div class="form-group">
        <input type="text" placeholder="用户名" class="input-control" v-model="userName">
      </div>
      <div class="form-group">
        <input type="text" placeholder="密码" class="input-control" v-model="userPwd">
      </div>
      <div class="submit login-btn" @click="handleSubmit">
        <span>登录</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data () {
    return {
      userName: '',
      userPwd: '',
    }
  },

  methods: {
    /**
     * 登录操作
     */
    handleSubmit () {
      this.$Toast.loading({
        duration: 0,
        message: '登录中...'
      });
      this.$http.post('/api/user/login', {
        userName: this.userName,
        userPwd: this.userPwd
      }).then(res => {
        this.$Toast.clear();
        if (res.code !== 0) {
          this.$Toast.fail(res.msg);
        } else {
          this.$Toast.success('登录成功');
          // TODO 跳转
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/common/mixins.scss';

.login {
  height: 100%;
  background: #fff;
  overflow: hidden;
  .logo {
    margin: 79px auto 40px;
    text-align: center;
    height: 60px;
    line-height: 60px;
    img {
      height: 60px;
    }
  }

  .login-form {
    width: 100%;
    position: relative;
    .form-group {
      @include border-bottom-1px;
      line-height: 55px;
      margin: 0 25px;
      position: relative;

      .input-control {
        height: 15px;
        line-height: 15px;
        padding: 20px 0;
        width: 100%;
        font-size: 15px;
        color: #191a1b;
        border: 0;
        outline-width: 0;
      }
    }

    .login-btn {
      margin-top: 70px;
      line-height: 45px;
      font-size: 16px;
      margin: 70px 25px 0;
      border-radius: 3px;
      text-align: center;
      background-color: #ff5f16;
      height: 44px;
      color: #fff;
      border: none;
    }
  }
}
</style>
