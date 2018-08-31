<template>
  <div class="menu-left">
    <img src="../../assets/images/logo.jpg" alt="logo">
    <h4>第一宇宙</h4>
    <ul class="menu-list">
      <li>
        <i class="iconfont icon-transfer"></i>
        <span>实例监控</span>
      </li>
      <li class="selected">
        <i class="iconfont icon-alarm1"></i>
        <span>API监控</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.menu-left {
  position: absolute;
  left: 0;
  top: 60px;
  bottom: 0px;
  width: 220px;
  overflow: auto;
  background-color: #ffffff;
  border: solid 1px #e3e2ea;
  z-index: 10;
  padding-top: 20px;
}

.menu-left img {
  width: 80px;
  height: 80px;
}

.menu-left .menu-list {
  padding: 0px;
}

.menu-left .menu-list li {
  list-style: none;
  text-align: left;
  height: 40px;
  padding-left: 30px;
  line-height: 40px;
  border-left: 3px solid #fff;
  cursor: pointer;
}

.menu-left .menu-list li.selected {
  border-left-color: #1793e0;
  color: #1793e0;
}

.menu-left .menu-list li:hover {
  color: #1793e0;
}

.menu-left .menu-list li i {
  padding-right: 5px;
}
</style>

