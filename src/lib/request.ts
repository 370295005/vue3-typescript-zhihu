import axios from 'axios'
export interface respondType<T> {
  data?: T
  errno: number
}
const env = process.env.NODE_ENV
const baseURL = env === 'development' ? 'http://localhost:8000' : 'http://api.nash141.cloud'
const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: { Accept: 'application/json, text/plain, */*', 'Content-Type': 'application/json' },
  withCredentials: true
})

function get<T>(url: string, payload?: { [key: string]: any }): Promise<T> {
  return new Promise(async (resolve, reject) => {
    const res = await axiosInstance.get(url, { params: payload })
    if (res?.data) resolve(res.data)
    else reject(res)
  })
}
function post<T>(url: string, payload?: { [key: string]: any }): Promise<T> {
  return new Promise(async (resolve, reject) => {
    const res = await axiosInstance.post(url, payload)
    if (res?.data) resolve(res.data)
    else reject(res)
  })
}

export { get, post }
