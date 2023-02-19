import { httpGet } from '@/api'

export const listPage = params => httpGet('/getUserList', params) // 列表
