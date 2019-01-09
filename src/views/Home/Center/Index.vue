<template>
  <div class="home-center">
    <div class="avatar">
      <img src="" class="avator-icon" />
      <div class="nick-name">立即登录</div>
    </div>

    <div class="margin-set my-card">
      <img src="./icon/card.png" alt="" class="icon" />
      <span class="label">卖座卡</span>
      <img src="./icon/arrow.png" alt="" class="arrow" />
    </div>
    <div class="margin-set my-balance">
      <img src="./icon/balance.png" alt="" class="icon" />
      <span class="label">余额</span>
      <img src="./icon/arrow.png" alt="" class="arrow">
    </div>
    <div class="margin-set system-set">
      <img src="./icon/system-set.png" alt="" class="icon" />
      <span class="label">设置</span>
      <img src="./icon/arrow.png" alt="" class="arrow">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeCenter'
}
</script>

<style lang="scss">
@import '@/styles/common/mixins.scss';

.home-center {
  .avatar {
    text-align: center;
    margin-top: -44px;
    height: 200px;
    padding-left: 22px;
    padding-top: 64px;
    background: url(https://assets.maizuo.com/h5/v5/public/app/img/bg.6837f67.png);
    background-size: cover;
    display: flex;
    align-items: center;
    color: #fff;
    margin-bottom: 10px;
    .avator-icon {
      width: 63px;
      height: 63px;
      border-radius: 35px;
      margin-right: 20px;
      border: 2px solid #fff;
    }
    .nick-name {
      font-size: 16px;
    }
  }
  .margin-set {
    @include border-bottom-1px;
    background: #fff;
    padding: 0 15px;
    height: 49px;
    display: flex;
    align-items: center;
    .label {
      margin-left: 15px;
      color: #191a1b;
      flex: 1;
    }
    .icon {
      width: 20px;
      height: 20px;
    }
    .arrow {
      text-align: right;
      width: 6px;
      height: 10px;
    }
  }
}
</style>
