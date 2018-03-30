<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import LocalStore from 'store'

export default {
  name: 'app',
  data () {
    return {
      screenWidth: 0
    }
  },
  mounted () {
    //  vuex + localStorage实现读取保存用户信息
    let userInfo = LocalStore.get('user')
    if (userInfo) {
      this.$store.commit('changeUserInfo', userInfo)
    }

    //  vue + 原生实现获取窗口宽度
    window.onresize = () => {
      this.$store.commit('changeScreenWidth', document.body.clientWidth)
    }
  }
}
</script>

<style>
  .fade-enter-active {
    transition: opacity .3s
  }
  .fade-leave-active {
    transition: opacity .3s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }

  .updown-enter-active {
    transition: all .5s ease
  }
  .updown-leave-active {
    transition: all .3s ease
  }
  .updown-enter, .updown-leave-to {
    top: 0 !important;
    opacity: 0;
  }

  .downup-enter-active {
    transition: all .5s ease
  }
  .downup-leave-active {
    transition: all .3s ease
  }
  .downup-enter, .downup-leave-to {
    top: 0 !important;
    opacity: 0;
  }
</style>
