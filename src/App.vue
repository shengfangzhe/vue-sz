<template>
  <div id="app">
    <menuTop v-bind:net-area="netArea"></menuTop>
    <menuleft></menuleft>
    <div class="menu-right">
      <router-view/>
    </div>
  </div>
</template>

<script>
import menuTop from "./menuTop/menuTop.vue";
import menuleft from "./siderbar/siderbar.vue";

export default {
  name: "App",
  data: function() {
    return {
      netArea: "北京网域"
    };
  },
  components: {
    menuTop,
    menuleft
  }
};
</script>

<style>
@import "./assets/favicon/iconfont.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu-right {
  position: absolute;
  left: 220px;
  right: 0;
  top: 60px;
  bottom: 0px;
  overflow: auto;
  background-color: #f6f4f9;
}
</style>
