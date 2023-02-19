import { httpPost } from '@/api'

export const loginIn = (params) => httpPost('/login', params) // 后台登陆
