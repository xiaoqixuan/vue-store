import axios from 'axios';
import Cookie from 'js-cookie';

axios.defaults.baseURL = '';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; // header配置

if (Cookie.get('token')) {
  axios.defaults.headers.common.Authorization = `Bearer ${Cookie.get('token')}`;
}

// 供应商拉取公司列表
export const login = (params: any) => {
  return new Promise((resolve, reject) => {
    axios.post('/', params).then(
      (res) => { resolve(res); },
    )
      .catch((error) => { reject(error); });
  });
};
