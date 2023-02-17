<template>
  <el-dialog
    title="添加账号"
    :close-on-click-modal="false"
    :visible.sync="visible"
    width="690px"
    @close="cancelHandle()"
  >
    <el-main
      element-loading-background="rgba(255, 255, 255, 0.8)"
      element-loading-text="正在加载关联数据，请稍后"
      style="padding:0;"
    >
      <el-form :model="dataForm" :rules="dataRule" ref="dataForm" label-width="70px">
        <el-form-item label="账号" prop="loginNo">
          <el-input
            v-model.trim="dataForm.loginNo"
            maxlength="20"
            show-word-limit
            placeholder="最长20个字符"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="appPwd">
          <el-input
            v-model.trim="dataForm.appPwd"
            placeholder
            type="password"
            show-password
            clearable
            auto-complete="new-password"
          ></el-input>
        </el-form-item>
      </el-form>
    </el-main>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取消</el-button>
      <el-button :loading="isSubmit" type="primary" @click="dataFormSubmit()">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { addUser } from '@/api/accountList'
export default {
  data () {
    let validateLoginNo = (rule, value, callback) => {
      let regLenth = /^[a-zA-Z0-9-]{6,20}$/
      if (!regLenth.test(value) && value !== '' && value !== null) {
        callback(new Error('格式为6到20位字符'))
      }
      callback()
    }
    var validatePassword = (rule, value, callback) => {
      let regLenth = /^[a-zA-Z0-9-]{6,20}$/
      if (!regLenth.test(value) && value !== '' && value !== null) {
        callback(new Error('格式为6到20位字符'))
      } else {
        callback()
      }
    }
    return {
      visible: false,
      isSubmit: false,
      dataForm: {
        loginNo: '',
        appPwd: ''
      },
      dataRule: {
        loginNo: [
          { validator: validateLoginNo, trigger: 'blur' }
        ],
        appPwd: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { validator: validatePassword, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    init () {
      this.visible = true
      this.isSubmit = false
      this.$nextTick(() => {
        this.$refs.dataForm.resetFields()
      })
    },
    // 表单提交
    dataFormSubmit () {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          let params = {
            ...this.dataForm
          }
          this.isSubmit = true
          addUser(params).then(({ data }) => {
            this.isSubmit = false
            if (data && data.success === true) {
              this.$message({
                message: '操作成功',
                type: 'success',
                duration: 1500,
                onClose: () => {
                  this.visible = false
                  this.$emit('refreshDataList')
                }
              })
            } else {
              this.$message.error(data.message)
            }
          })
        }
      })
    },
    cancelHandle () {
      this.visible = false
      this.dataForm = {
        loginNo: '',
        appPwd: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
