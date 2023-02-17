import { httpGet, httpPost } from '@/api'

export const listPage = params => httpGet('/advertOrder/listPage', params) // 列表
export const addUser = params => httpPost('/advertOrder/listPage', params) // 新增
export const resetUserPassword = params => httpPost('/advertOrder/listPage', params) // 重置密码
export const delUser = params => httpPost('/advertOrder/listPage', params) // 删除
