import axios, { AxiosRequestConfig } from 'axios'
const env = process.env.NODE_ENV
const config: AxiosRequestConfig = {
  baseURL: 'http://api.nash141.cloud',
  timeout: 10000,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
}
const axiosInstance = axios.create(config)

export async function get (url: string, params?: { [key: string]: any }) {
  const res = await axiosInstance.get(url, { params })
  return await Promise.resolve(res.data)
}
export async function post (url: string, params?: { [key: string]: any }) {
  const res = await axiosInstance.post(url, params)
  return await Promise.resolve(res.data)
}
