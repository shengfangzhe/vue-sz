<template>
  <div>
    instanceMonitorList.vue
  </div>
</template>
<script>
import instanceMonitorService from './instanceMonitor.service.js'

export default {
  mounted(){
    let vm=this;
    instanceMonitorService.getInstanceMonitorList()
    .then(function(result){
    })
    .catch(function(msg){

      throw(msg);
    });

  },
}
</script>
