import Axios from 'axios'
import _ from 'lodash'

const urlPrefix = '/gel/V1/';

function get(url, data) {
  return new Promise(function(resolve, reject) {
    Axios({
      method: 'get',
      url: urlPrefix + url,
      data: data
    }).then(response => {
      handle(response, resolve, reject);
    }).catch(error => {
      reject(error);
    })
  });
}

function post(url, data) {
  return new Promise(function(resolve, reject) {
    Axios({
      method: 'post',
      url: urlPrefix + url,
      data: data
    }).then(response => {
      handle(response, resolve, reject);
    }).catch(error => {
      reject(error);
    })
  });
}

function put(url, data) {
  return new Promise(function(resolve, reject) {
    Axios({
      method: 'put',
      url: urlPrefix + url,
      data: data
    }).then(response => {
      handle(response, resolve, reject);
    }).catch(error => {
      reject(error);
    })
  });
}

function del(url, data) {
  return new Promise(function(resolve, reject) {
    Axios({
      method: 'delete',
      url: urlPrefix + url,
      data: data
    }).then(response => {
      handle(response, resolve, reject);
    }).catch(error => {
      reject(error);
    })
  });
}


function handle(response, resovle, reject) {
  var data = response.data;
  if (data.status === 'SUCCESS') {
    resovle(data.result);
  } else if (data.status === 'BUSINESS_ERROR') {
    if (data.userStatus === 'needLogin') {

    } else {
      reject(data.message);
    }
  } else if (data.status === 'CLIENT_ERROR') {
    var messages = _.flatMap(data.message.fieldErrorMessage, function(v, k) {
      return v;
    });
    _.join(messages, ',');
    messages += data.message.crossFieldErrorMessage ? data.message.crossFieldErrorMessage : '';
    reject(messages);
  } else {
    reject(data.message);
  }
}

export default {
  get,
  post,
  put,
  del
};