export interface UserProps {
  isLogin: boolean
  id: number | string
  nickname: string
  avatar: string
  email: string
}
export interface DropdownItem {
  text: string
  path: string
  icon?: string
}
export interface DropdownList {
  [index: number]: DropdownItem
}
export interface ColumProps {
  id: number
  title: string
  avatar?: string
  description: string
}
export interface PostDetail {
  title: string
  publishTime: string
  image?: string
  content: string
  id: number | string
}
export interface Author {
  avatar?: string
  nickname: string
  description: string
  post?: Array<PostDetail>
}
export interface Post {
  [index: number]: PostDetail
}
