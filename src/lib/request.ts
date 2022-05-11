import axios from 'axios'

export function get (url: string, params?: { [key: string]: any }) {
  return axios.get(url, { params }).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function post (url: string, params?: { [key: string]: any }) {
  return axios.post(url, params).then((res) => {
    return Promise.resolve(res.data)
  })
}
