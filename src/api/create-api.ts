import axios from 'axios';

export function createAPI({ url, headers, paramsSerializer }) {
  const instance = axios.create({
    headers,
    paramsSerializer,
    baseURL: `/cla2/${url}`,
    timeout: 30000,
  });

  instance.interceptors.request.use(
    (request: any): any => {
      if (request.method === 'get') {
        request.headers.common.Pragma = 'no-cache';
        request.headers.common['Cache-control'] = 'no-cache';
      }

      return request;
    },
    (errorData: any): any => {
      return Promise.reject(errorData);
    },
  );

  instance.interceptors.response.use(
    (response: any): any => {
      if (response.data.code !== 0) {
        return Promise.reject({ response });
      }

      return response || {};
    },
    (errorData: any): any => {
      return Promise.reject(errorData);
    },
  );

  return instance;
}
