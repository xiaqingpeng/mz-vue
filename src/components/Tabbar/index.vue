<template>
  <ul class="lv-tabbar">
    <router-link
      tag="li"
      v-for="tab in tabs"
      :key="tab.id"
      :to="tab.href">
      <i :class="['iconfont', tab.icon]"></i>
      <span>{{ tab.name }}</span>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'LvTabbar',

  props: {
    tabs: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/common/mixins.scss';

.lv-tabbar {
  @include border-top-1px;
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  background: #fff;

  li {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50px;
    color: #797d82;

    i {
      font-size: 22px;
    }

    span {
      font-size: 10px;
      margin-top: 2px;
    }

    &.router-link-active {
      color: #ff5f16;
    }
  }
}
</style>
