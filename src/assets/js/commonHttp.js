import Axios from 'axios'
import _ from 'lodash'

function get(url, data) {
  return new Promise(function(resolve, reject) {
    Axios({
      method: 'get',
      url: url,
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
      url: url,
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
      url: url,
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
      url: url,
      data: data
    }).then(response => {
      handle(response, resolve, reject);
    }).catch(error => {
      reject(error);
    })
  });
}


function handle(response, resovle, reject) {
  if (response.status === 'SUCCESS') {
    resovle(response.result);
  } else if (response.status === 'BUSINESS_ERROR') {
    if (response.userStatus === 'needLogin') {

    } else {
      reject(response.message);
    }
  } else if (response.status === 'CLIENT_ERROR') {
    let messages = _.flatMap(response.message.fieldErrorMessage, function(v, k) {
      return v;
    });
    _.join(messages, ',');
    messages += response.message.crossFieldErrorMessage ? response.message.crossFieldErrorMessage : '';
    reject(messages);
  } else {
    reject(response.message);
  }
}

export const commonHttp = {
  get,
  post,
  put,
  del
};