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
  var restRes = {
    "status": "SUCCESS",
    "result": {
      "monitorId": "1",
      "monitorName": "监控名称1",
      "monitorServIp": "10.23.34.34",
      "monitorServport": "23",
      "repeatTimes": "3",
      "isNormal": "1",
      "status": "2",
      "notifyEmails": ["1233333@qq.com", "1234@qq.com", "133333234@qq.com", "122222234@qq.com", "12333334@qq.com", "1234431@qq.com", "12341234@qq.com", "12341234@qq.com", "1234qe@qq.com", "12331124@qq.com", "12341234@qq.com", "123qwe34@qq.com", "123434t@qq.com", "1234r@qq.com"],
      "notifyPhones": ["18911111111", "18922222222", "18933333333", "18944444444", "18955555555", "18966666666", "18977777777", "18988888888", "18911111111", "18911111111", "18911111111", "18911111111", "18911111111"],
      "domainId": "12",
      "domainName": "网域名称111",
      "status": 1
    }
  };
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