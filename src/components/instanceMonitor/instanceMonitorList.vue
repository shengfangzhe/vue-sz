<template>
  <div class="instance-monitor-list">
    <div class="list-head">
      <Row>
        <Col span="18" class="list-left">
        <div class="title">实例监控</div>
        <span class="tip">运营人员针对目标系统，配置某些服务器IP端口进行定时监控，并把进程的相关信息发给相关人员</span>
        </Col>
        <Col span="2">
        <Switch class="list-switch" />
        </Col>
        <Col span="4">
        <Button type="primary" shape="circle" icon="md-add-circle" size="large" class="list-btn">新增监控</Button>
        </Col>
      </Row>
    </div>
    <div class="list-body">
      <table cellspacing="0">
        <tr>
          <th>监控名称</th>
          <th>网域</th>
          <th>监控服务器IP地址：端口</th>
          <th>重试次数</th>
          <th>短信通知</th>
          <th>邮箱通知</th>
          <th>关闭/开启</th>
          <th>操作</th>
        </tr>
        <tr v-for="(instanceMonitor,index) in instanceMonitorList" :key="instanceMonitor.monitorId">
          <td>{{instanceMonitor.monitorName}}</td>
          <td>{{instanceMonitor.domainName}}</td>
          <td>{{instanceMonitor.monitorServIp}}:{{instanceMonitor.monitorServport}}</td>
          <td>{{instanceMonitor.repeatTimes}}</td>
          <td>{{instanceMonitor.notifyPhones}}</td>
          <td>{{instanceMonitor.notifyEmails}}</td>
          <td>{{instanceMonitor.isNormal}}</td>
          <td>操作按钮</td>
        </tr>
      </table>
      <Page :total="100" show-total class="list-page" />
    </div>
  </div>
</template>
<script>
import instanceMonitorService from "./instanceMonitor.service.js";

export default {
  mounted() {
    let vm = this;
    instanceMonitorService
      .getInstanceMonitorList()
      .then(function(result) {
        vm.instanceMonitorList = result.dataList;
      })
      .catch(function(msg) {
        throw msg;
      });
  },
  data() {
    return {
      instanceMonitorList: []
    };
  }
};
</script>
<style lang="less" scoped>
.set-margin-top (@marginTop:15px) {
  margin-top: @marginTop;
}

.instance-monitor-list {
  margin: 20px;
  background: #ffffff;
  box-shadow: 0 0 6px 0 rgba(28, 14, 134, 0.14);
  .list-head {
    padding: 20px 15px;
    border-bottom: solid 1px #e2e9ed;
  }
}

.list-head {
  .list-left {
    text-align: left;
    font-size: 14px;
    .title {
      color: #1793e0;
      font-size: 18px;
    }
  }
  .list-switch {
    .set-margin-top(15px;);
  }

  .list-btn {
    .set-margin-top(6px;);
  }
}

.list-body {
  padding-bottom: 30px;
  table {
    table-layout: fixed;
    width: 100%;
    font-size: 14px;
    tr {
      &:nth-child(2n) {
        background: #f8f8f8;
      }
    }
    th {
      font-size: 16px;
    }
    td {
      padding: 5px;
    }
  }
}

.list-page {
  .set-margin-top(30px);
  text-align: right;
  margin-right: 5px;
}
</style>
