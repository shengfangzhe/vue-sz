var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();
var url = require('url');
var circularJSON = require('circular-json')

var processFunc = function(req, res, next) {
  var currentUrl = req.url;
  var pathArr = url.parse(currentUrl).pathname.split('/');
  if (req.query && req.query.data) {
    req.frontierReq = JSON.parse(req.query.data);
  } else {
    req.frontierReq = req.body;
  }

  res.header('Content-type', 'application/json;charset=utf-8');
  for (var i = pathArr.length; i > 0; i--) {
    var module = pathArr.slice(0, i).join('/');
    var modulePath = __dirname + '/../resource' + module + '.js';
    if (fs.existsSync(modulePath)) {
      req.subModule = pathArr.slice(i, pathArr.length).join('/');
      var handler = require(modulePath);
      handler.process(req, res, next);
      return;
    }
  }

};

var endFunc = function(req, res, next) {
  if (res.restRes) {
    res.restRes.callId = Date.parse(new Date()) + parseInt(Math.random() * 999);
    res.send(JSON.stringify(res.restRes));
  }
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('{ version: "v1" }');
});

router.get('/*', processFunc);
router.post('/*', processFunc);
router.put('/*', processFunc);
router.delete('/*', processFunc);

router.get('/*', endFunc);
router.post('/*', endFunc);
router.put('/*', endFunc);
router.delete('/*', endFunc);

module.exports = router;