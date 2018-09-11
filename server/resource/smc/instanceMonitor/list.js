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
  if (req.subModule !== null && req.subModule == "") {
    restRes = {
      "status": "SUCCESS",
      "result": {
        'total': 80,
        'dataList': [{
          "monitorId": "1",
          "monitorName": "监控名称1",
          "monitorServIp": "10.23.34.34",
          "monitorServport": "23",
          "repeatTimes": "3",
          "isNormal": "1",
          "status": "1",
          "notifyEmails": ["1893@qq.com"],
          "notifyPhones": ['18922222222'],
          "domainId": "12",
          "domainName": "网域名称111"
        }, {
          "monitorId": "2",
          "monitorName": "监控名称2",
          "monitorServIp": "10.23.34.34",
          "monitorServport": "23",
          "repeatTimes": "3",
          "isNormal": "1",
          "status": "1",
          "notifyEmails": ["1893@qq.com"],
          "notifyPhones": ['18922222222'],
          "domainId": "12",
          "domainName": "网域名称111"
        }, {
          "monitorId": "3",
          "monitorName": "监控名称3",
          "monitorServIp": "10.23.34.34",
          "monitorServport": "23",
          "repeatTimes": "3",
          "isNormal": "1",
          "status": "2",
          "notifyEmails": ["1893@qq.com"],
          "notifyPhones": ['18922222222'],
          "domainId": "12",
          "domainName": "网域名称111"
        }, {
          "monitorId": "4",
          "monitorName": "监控名称4",
          "monitorServIp": "10.23.34.34",
          "monitorServport": "23",
          "repeatTimes": "3",
          "isNormal": "1",
          "status": "1",
          "notifyEmails": ["1233333@qq.com", "1234@qq.com", "133333234@qq.com", ],
          "notifyPhones": ['18922222222'],
          "domainId": "12",
          "domainName": "网域名称111"
        }, {
          "monitorId": "5",
          "monitorName": "监控名称5",
          "monitorServIp": "10.23.34.34",
          "monitorServport": "23",
          "repeatTimes": "3",
          "isNormal": "2",
          "status": "1",
          "notifyEmails": ["1233333@qq.com", "1234@qq.com", "133333234@qq.com", ],
          "notifyPhones": ['18922222222'],
          "domainId": "12",
          "domainName": "网域名称111"
        }, {
          "monitorId": "6",
          "monitorName": "监控名称6",
          "monitorServIp": "10.23.34.34",
          "monitorServport": "23",
          "repeatTimes": "3",
          "isNormal": "1",
          "status": "1",
          "notifyEmails": ["1233333@qq.com", "1234@qq.com", "133333234@qq.com"],
          "notifyPhones": ['18922222222'],
          "domainId": "12",
          "domainName": "网域名称111"
        }, {
          "monitorId": "7",
          "monitorName": "监控名称7",
          "monitorServIp": "10.23.34.34",
          "monitorServport": "23",
          "repeatTimes": "3",
          "isNormal": "1",
          "status": "1",
          "notifyEmails": ["1893@qq.com"],
          "notifyPhones": ['18922222222'],
          "domainId": "12",
          "domainName": "网域名称111"
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