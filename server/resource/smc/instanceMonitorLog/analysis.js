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
      result: {
        'timesList': [{
          "success": "1000",
          "failure": "200",
          "average": "200",
          "startTime": "2017-10-02"
        }, {
          "success": "2000",
          "failure": "300",
          "average": "10",
          "startTime": "2017-10-03"
        }, {
          "success": "200",
          "failure": "20",
          "average": "100",
          "startTime": "2017-10-04"
        }, {
          "success": "200",
          "failure": "400",
          "average": "40",
          "startTime": "2017-10-05"
        }, {
          "success": "800",
          "failure": "90",
          "average": "100",
          "startTime": "2017-10-06"
        }, {
          "success": "600",
          "failure": "700",
          "average": "760",
          "startTime": "2017-10-07"
        }, {
          "success": "2000",
          "failure": "240",
          "average": "260",
          "startTime": "2017-10-08"
        }, {
          "success": "1000",
          "failure": "200",
          "average": "200",
          "startTime": "2017-10-09"
        }, {
          "success": "2000",
          "failure": "300",
          "average": "10",
          "startTime": "2017-10-10"
        }, {
          "success": "200",
          "failure": "20",
          "average": "100",
          "startTime": "2017-10-11"
        }, {
          "success": "200",
          "failure": "400",
          "average": "40",
          "startTime": "2017-10-12"
        }, {
          "success": "800",
          "failure": "90",
          "average": "100",
          "startTime": "2017-10-13"
        }, {
          "success": "600",
          "failure": "700",
          "average": "760",
          "startTime": "2017-10-14"
        }, {
          "success": "2000",
          "failure": "240",
          "average": "260",
          "startTime": "2017-10-15"
        }, {
          "success": "1000",
          "failure": "200",
          "average": "200",
          "startTime": "2017-10-16"
        }, {
          "success": "2000",
          "failure": "300",
          "average": "10",
          "startTime": "2017-10-17"
        }, {
          "success": "200",
          "failure": "20",
          "average": "100",
          "startTime": "2017-10-18"
        }, {
          "success": "200",
          "failure": "400",
          "average": "40",
          "startTime": "2017-10-19"
        }, {
          "success": "800",
          "failure": "90",
          "average": "100",
          "startTime": "2017-10-20"
        }, {
          "success": "600",
          "failure": "700",
          "average": "760",
          "startTime": "2017-10-21"
        }, {
          "success": "2000",
          "failure": "240",
          "average": "260",
          "startTime": "2017-10-22"
        }, {
          "success": "1000",
          "failure": "200",
          "average": "200",
          "startTime": "2017-10-23"
        }, {
          "success": "2000",
          "failure": "300",
          "average": "10",
          "startTime": "2017-10-24"
        }, {
          "success": "200",
          "failure": "20",
          "average": "100",
          "startTime": "2017-10-25"
        }, {
          "success": "200",
          "failure": "400",
          "average": "40",
          "startTime": "2017-10-26"
        }, {
          "success": "800",
          "failure": "90",
          "average": "100",
          "startTime": "2017-10-27"
        }, {
          "success": "600",
          "failure": "700",
          "average": "760",
          "startTime": "2017-10-28"
        }, {
          "success": "2000",
          "failure": "240",
          "average": "260",
          "startTime": "2017-10-29"
        }, {
          "success": "600",
          "failure": "700",
          "average": "760",
          "startTime": "2017-10-30"
        }, {
          "success": "2000",
          "failure": "240",
          "average": "260",
          "startTime": "2017-10-31"
        }]
      }

    };
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