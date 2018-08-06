<template>
  <div>
    <h1>User Setting</h1>
    <NavBar></NavBar>
    <router-view></router-view>
    <router-view name="helper"></router-view>
  </div>
</template>

<script>
import NavBar from "./navBar.vue"

export default {
  components:{
    NavBar,
  }

}
</script>

