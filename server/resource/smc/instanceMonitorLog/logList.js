var restModule = {};

restModule.process = function(req, res, next) {
  switch (req.method) {
    case 'POST':
      return this.processPost(req, res, next);
    case 'GET':
      return this.processGet(req, res, next);
    case 'PUT':
      return this.processPut(req, res, next);
    case 'DELETE':
      return this.processDelete(req, res, next);
  }
}

restModule.processGet = function(req, res, next) {
  var restReq = req.frontierReq;
  var restRes;
  console.log('ssss' + req.subModule)
  if (req.subModule !== null && req.subModule == "") {
    restRes = {
      "status": "SUCCESS",
      "result": {
        'total': 100,
        "dataList": [{
          "logId": "日志id",
          "monitorName": "监控名称111",
          "isNotify": "1",
          "isNormal": "1",
          "errorMsg": "异常信息",
          "createTime": 1516866074343
        }, {
          "logId": "日志id",
          "monitorName": "监控名称111",
          "isNotify": "1",
          "isNormal": "1",
          "errorMsg": "异常信息",
          "createTime": 1516866074343
        }, {
          "logId": "日志id",
          "monitorName": "监控名称111",
          "isNotify": "1",
          "isNormal": "1",
          "errorMsg": "异常信息",
          "createTime": 1516866074343
        }, {
          "logId": "日志id",
          "monitorName": "监控名称111",
          "isNotify": "1",
          "isNormal": "1",
          "errorMsg": "异常信息",
          "createTime": 1516866074343
        }, {
          "logId": "日志id",
          "monitorName": "监控名称111",
          "isNotify": "1",
          "isNormal": "1",
          "errorMsg": "异常信息",
          "createTime": 1516866074343
        }, {
          "logId": "日志id",
          "monitorName": "监控名称111",
          "isNotify": "1",
          "isNormal": "1",
          "errorMsg": "异常信息",
          "createTime": 1516866074343
        }, {
          "logId": "日志id",
          "monitorName": "监控名称111",
          "isNotify": "1",
          "isNormal": "1",
          "errorMsg": "异常信息",
          "createTime": 1516866074343
        }, {
          "logId": "日志id",
          "monitorName": "监控名称111",
          "isNotify": "1",
          "isNormal": "1",
          "errorMsg": "异常信息",
          "createTime": 1516866074343
        }, {
          "logId": "日志id",
          "monitorName": "监控名称111",
          "isNotify": "1",
          "isNormal": "1",
          "errorMsg": "异常信息",
          "createTime": 1516866074343
        }]
      }
    }
  }
  res.restRes = restRes;
  next();
}

restModule.processPost = function(req, res, next) {
  var restReq = req.frontierReq;
  var restRes = {
    "status": "SUCCESS",
    "result": null
  }
  res.restRes = restRes;
  next();
}

restModule.processPut = function(req, res, next) {
  var restReq = req.frontierReq;
  var restRes = {
    "status": "SUCCESS",
    "result": {}
  }
  res.restRes = restRes;
  next();
}

restModule.processDelete = function(req, res, next) {
  var restReq = req.frontierReq;
  var restRes = {
    "status": "SUCCESS",
    "result": {}
  }
  res.restRes = restRes;
  next();
}

module.exports = restModule;