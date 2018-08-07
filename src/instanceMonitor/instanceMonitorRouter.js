import instanceMonitorList from '@/instanceMonitor/instanceMonitorList.vue'
import instanceMonitorView from '@/instanceMonitor/instanceMonitorView.vue'
import instanceMonitorInfo from '@/instanceMonitor/instanceMonitorInfo.vue'


const instanceMonitor = {
  template: `
    <div>
      <router-view></router-view>
    </div>
  `
}

export const instanceMonitorRouter = {
  path: '/instanceMonitor',
  name: 'instanceMonitor',
  component: instanceMonitor,
  children: [{
    path: 'list',
    name: 'instanceMonitorList',
    component: instanceMonitorList
  }, {
    path: 'view',
    name: 'instanceMonitorView',
    component: instanceMonitorView
  }, {
    path: 'info',
    name: 'instanceMonitorInfo',
    component: instanceMonitorInfo
  }]
}