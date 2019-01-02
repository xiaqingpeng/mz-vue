<template>
  <div class="home">
    <router-view></router-view>

    <Tabbar :tabs="tabs"></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar';

export default {
  name: 'Home',

  data () {
    return {
      tabs: [
        {id: 'films', name: '电影', icon: "icon-films"},
        {id: 'cinemas', name: '影院', icon: "icon-cinemas"},
        {id: 'todo', name: 'todo', icon: "icon-sales"},
        {id: 'center', name: 'center', icon: "icon-center"},
      ]
    }
  },

  components: {
    Tabbar
  }
}
</script>

<style lang="scss">

</style>
