import instanceMonitorList from '@/components/instanceMonitor/instanceMonitorList.vue'
import instanceMonitorView from '@/components/instanceMonitor/instanceMonitorView.vue'
import instanceMonitorInfo from '@/components/instanceMonitor/instanceMonitorInfo.vue'


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