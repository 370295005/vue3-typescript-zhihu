import { get, post } from '../lib/request'

export interface respondType<T> {
  data?: T
  errno: number
}
export interface recommendListType {
  recommendList?: {
    id: number
    title: string
    content: string
    createTime: number
    author: string
    recommend: string
  }[]
}
export interface postDetailType {
  id: number
  title: string
  content: string
  createTime: number
  author: string
  recommend: number
}
export interface userInfoType {
  id: number
  nickname: string
  description: string | null
  avatar: string | null
}
export interface loginType {
  username: string
}
// 获取推荐列表
export function getRecommedList() {
  return get<respondType<recommendListType>>('/blog/recommend')
}
// 获取文章详情
export function getPostDetail(id: number) {
  return get<respondType<postDetailType>>(`/blog/detail/${id}`)
}
// 获取用户信息
export function getUserInfo(payload: object) {
  return get<respondType<userInfoType>>('/user/userinfo', payload)
}
// 登录
export function login(payload: object) {
  return post<respondType<loginType>>('/user/login', payload)
}
// 注册
export function register(payload: object) {
  return post<respondType<loginType>>('/user/register', payload)
}
