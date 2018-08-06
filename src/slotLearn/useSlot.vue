<template>
  <div>
    <todoList :todos="todos">
      <template slot-scope="slotProps">
        <span>{{slotProps.todo.id}}</span>
        <span>{{slotProps.todo.text}}</span>
      </template>
    </todoList>
  </div>
</template>

<script>
import todoList from "./slotScope.vue"
export default {
  data(){
    return{
      todos:[{
        id:1,
        text:"china"
      },{
        id:2,
        text:"USA"
      },{
        id:3,
        text:"English"
      }]
    }
  },
  components:{
    todoList,
  }
}
</script>

<style>

</style>

