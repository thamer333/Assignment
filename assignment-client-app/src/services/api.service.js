import axios from 'axios';

const apiBaseUrl = process.env.API_URL || 'https://localhost:44330/api';

const _axios = axios.create({
  baseURL: `${apiBaseUrl}`
});

export const GetById = async (
  path,
  id,
  opt = {}
) => _axios.get(path + `/${id}`, opt).then(res => res.data);

export const Get = async (path, opt = {}) =>
  _axios.get(path, opt).then(res => res.data);

export const Post = async (
  path,
  body,
  opt = {}
) => _axios.post(path, body, opt).then(res => res.data);

export const Put = async (
  path,
  body,
  opt = {}
) => _axios.put(path, body, opt).then(res => res.data);

export const DeleteById = async (
  path,
  id,
  opt = {}
) => _axios.delete(path + `/${id}`, opt).then(res => res.data);
