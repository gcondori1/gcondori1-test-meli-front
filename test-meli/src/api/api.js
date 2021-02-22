import axios from 'axios';

export const getBaseURL = () => 'http://localhost:8080';

const baseURL = getBaseURL();

const api = axios.create({
  baseURL,
  timeout: 60000,
  withCredentials: true
});

export const makeApiRequest = async (method, url, body, config) => {
  let data;
  let headers;
  let errors;

  try {
    const result = await api.request({
      method,
      url,
      data: body,
      ...config
    });
    headers = result.headers;
    data = result.data;
  } catch (error) {
    console.error(error);
  }
  return { data, headers, errors };
};

export const doGet = async (url, data, config) =>
  makeApiRequest('get', url, data, config);

export const doPost = async (url, data = {}, config) =>
  makeApiRequest('post', url, data, config);

export const doPut = async (url, data = {}, config) =>
  makeApiRequest('put', url, data, config);

export const doDelete = async url => makeApiRequest('delete', url);

export default api;
