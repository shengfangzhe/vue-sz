import Vue from 'vue'
import Router from 'vue-router'
import { instanceMonitorRouter } from '@/instanceMonitor/instanceMonitorRouter.js'
import instanceMonitorList from '@/instanceMonitor/instanceMonitorList.vue'


Vue.use(Router)
const indexRouter = {
  path: '/',
  name: 'index',
  component: instanceMonitorList
};

const routerArray = [indexRouter, instanceMonitorRouter]
export default new Router({
  routes: routerArray
})