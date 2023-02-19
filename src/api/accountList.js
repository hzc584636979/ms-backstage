import { httpGet, httpPost } from '@/api'

export const listPage = params => httpGet('/getAdminList', params) // 列表
export const addUser = params => httpPost('/addAdmin', params) // 新增
export const resetUserPassword = params => httpPost('/editAdmin', params) // 重置密码
export const delUser = params => httpPost('/delAdmin', params) // 删除
