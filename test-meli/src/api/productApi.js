import { doGet } from './api';

const baseURL = '/items';

export const getProductById = productId =>
  doGet(`${baseURL}/${productId}`);

export const getProductListByQuery = query =>
  doGet(`${baseURL}?search=${query}`);
