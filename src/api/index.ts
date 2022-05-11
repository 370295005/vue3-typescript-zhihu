import { get, post } from '@/lib/request'
import { Author, PostDetail } from '@/types'
const api = 'http://localhost:9800'
export function getUserList () {
  return get(`${api}/userlist`)
}
export function getRecommend () {
  return get(`${api}/recommend`)
}
export function login () {
  return post(`${api}/login`)
}
export function register () {
  return post(`${api}/register`)
}
export function uploadImg (data: FormData) {
  return post(`${api}/upload`, data)
}
export function newPost (params: PostDetail) {
  return post(`${api}/create`, params)
}
export function editInfo (params: Author) {
  return post(`${api}/edit`, params)
}
