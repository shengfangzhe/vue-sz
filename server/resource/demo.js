'use strict';

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
};

restModule.processGet = function(req, res, next) {
  var restReq = req.frontierReq;
  var restRes;
  if (req.subModule !== null && req.subModule == "names") {
    restRes = {
      "status": "SUCCESS",
      "result": {}
    };
  } else if (req.subModule !== null && req.subModule == "list") {
    restRes = {
      "status": "SUCCESS",
      "result": [{a:1},{b:1}]
    };
  } else {
    restRes = {
      "status": "SUCCESS",
      "result": {}
    };
  }
  res.restRes = restRes;
  next();
};

restModule.processPost = function(req, res, next) {
  var restReq = req.frontierReq;

  var restRes = {
    "status": "SUCCESS",
    "result": {}
  };

  res.restRes = restRes;
  next();
};

restModule.processPut = function(req, res, next) {
  var restReq = req.frontierReq;

  var restRes = {
    "status": "SUCCESS",
    "result": {}
  };

  res.restRes = restRes;
  next();
};

restModule.processDelete = function(req, res, next) {
  var restReq = req.frontierReq;

  var restRes = {
    "status": "SUCCESS",
    "result": {}
  };

  res.restRes = restRes;
  next();
};

module.exports = restModule;