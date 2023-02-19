import { httpGet } from '@/api'

export const listPage = params => httpGet('/getInkAuthorizedList', params) // 列表
