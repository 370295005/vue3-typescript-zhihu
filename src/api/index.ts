import { get, post } from '@/lib/request'
import { Author, PostDetail } from '@/types'
export function getUserList () {
  return get('/userlist')
}
export function getRecommend () {
  return get('/recommend')
}
export function login () {
  return post('/login')
}
export function register () {
  return post('/register')
}
export function uploadImg (data: FormData) {
  return post('/upload', data)
}
export function newPost (params: PostDetail) {
  return post('/create', params)
}
export function editInfo (params: Author) {
  return post('/edit', params)
}
