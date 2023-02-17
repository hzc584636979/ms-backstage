import { httpPost } from '@/api'

export const adminLoginIn = (params) => httpPost('/login', params) // 后台登陆
