import commonHttp from '../../assets/js/commonHttp'


function getInstanceMonitorList(data) {

  return commonHttp.get('smc/instanceMonitor/list', data);
}

export default {
  getInstanceMonitorList,
}