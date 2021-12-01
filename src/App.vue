<template>
  <button @click="fn">修改用户信息</button>
</template>

<script>
import request from '@/utils/request.js'
export default {
  name: 'App',
  setup () {
    const fn = () => {
      request('/member/profile', 'get')
    }
    return { fn }
  }
}

</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
