<template>
  <div class="menuTop">
    <div>
      <i class="iconfont icon-GEL_logo"></i>
      <div class="menu-content">
        <span>系统监控中心</span>
        <div>当前网域：{{netArea}}</div>
      </div>
    </div>
    <i class="iconfont icon-icon-out" v-on:click="logOut('王大锤')"></i>
  </div>
</template>
<script>
export default {
  name: "menuTop",
  props: {
    netArea: {
      type: String,
      required: true
    }
  },
  methods:{
    logOut(username){
      alert(`${username}退出系统`);
    }
  }
};
</script>
<style scoped>
.menuTop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #1793e0;
  color: #fff;
}
.menuTop > div {
  float: left;
  padding: 0px 40px;
  width: 500px;
  text-align: left;
}

.menuTop .menu-content {
  display: inline-block;
  margin-left: 15px;
}

.menuTop .menu-content span {
  font-size: 18px;
}

.menuTop .menu-content div {
  font-size: 12px;
  padding-left: 37px;
  padding-top: 2px;
}

.menuTop > div > i {
  font-size: 40px;
  color: #fff;
  vertical-align: super;
}

.menuTop > i {
  float: right;
  font-size: 18px;
  margin-top: 20px;
  margin-right: 50px;
  cursor: pointer;
}
</style>


