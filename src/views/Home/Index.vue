<template>
  <div class="home">
    <router-view></router-view>

    <LvTabbar :tabs="tabs"></LvTabbar>
  </div>
</template>

<script>
import LvTabbar from '@/components/Tabbar';

export default {
  name: 'Home',

  components: {
    LvTabbar
  },

  data () {
    return {
      tabs: [
        { id: 'films', name: '电影', icon: 'icon-films', href: '/films' },
        { id: 'cinemas', name: '影院', icon: 'icon-cinemas', href: '/cinemas' },
        { id: 'todo', name: 'todo', icon: 'icon-sales', href: '/todo' },
        { id: 'center', name: '我的', icon: 'icon-center', href: '/center' },
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
