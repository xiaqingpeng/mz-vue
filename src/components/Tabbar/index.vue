<template>
  <ul class="tabbar">
    <li v-for="tab in tabs"
      :key="tab.id">
      <i :class="['iconfont', tab.icon]"></i>
      <span>{{ tab.name }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'tabbar',

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

.tabbar {
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
  }
}
</style>
