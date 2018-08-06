<template>
  <div class="nav">
    <ul>
      <li>
        <router-link to="/setting/emails">导航1</router-link>
      </li>
      <li>
        <router-link :to="{name:'profile',params:{id,id}}">
          导航2
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {
      id:1
    }
  }

}
</script>

<style scoped>
.nav{
  background: red
}

.nav ul{
  width: 150px;
  float: left;
}

.nav ul li{
  text-align: center;
  list-style: none;
  padding: 5px 10px;
}
</style>


