<template>
  <!--vue2.0需要根元素，vue3可以是代码片段framement-->
  <h2>{{$store.state.user.profile.account}}</h2>
  <button @click="$store.commit('user/setUser',{account:'666'})">修改用户信息</button>
 <div>
   app
 </div>

</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
