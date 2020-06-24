import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 20000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = 'http://192.168.0.104:8090';
axios.defaults.baseURL = 'https://api.xbbvip.com';


axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

axios.interceptors.response.use((res) => {
  // console.log("interceptors  response ------------> ", res);
  if (res.status != 200) {
    return Promise.reject("test")
  }
  return res;
}, (error) => {
  return Promise.reject(error);
});

export function fetchPost(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response);
      }, (error) => {
        reject(error);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: param})
      .then(response => {
        resolve(response)
      }, (error) => {
        reject(error)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  fetchPost,
  fetchGet,
}
