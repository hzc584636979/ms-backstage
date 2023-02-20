<template>
  <div class="site-wrapper site-page--login">
    <div class="site-content__wrapper">
      <div class="site-content">
        <div class="login-main">
          <div class="login-title-all">
            <h3 class="login-title">墨水系统后台</h3>
          </div>
          <el-form
            :model="dataForm"
            :rules="dataRule"
            ref="dataForm"
            @keyup.enter.native="dataFormSubmit()"
            status-icon
          >
            <el-form-item prop="username">
              <el-input
                v-model.trim="dataForm.username"
                clearable
              >
                <div class="input-pre-text" slot="prepend">账号</div>
              </el-input>
            </el-form-item>
            <el-form-item prop="pwd">
              <el-input
                v-model.trim="dataForm.pwd"
                type="password"
                clearable
                show-password
              >
                <div class="input-pre-text" slot="prepend">密码</div>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                class="login-btn-submit"
                type="primary"
                :loading="loading"
                @click="dataFormSubmit()"
              >登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loginIn } from '@/api/account'
export default {
  data () {
    let validateAccount = (rule, value, callback) => {
      let regLenth = /^[a-zA-Z0-9-]{5,20}$/
      if (!regLenth.test(value) && value !== '' && value !== null) {
        callback(new Error('格式为5到20位字符'))
      } else {
        callback()
      }
    }
    let validatePassword = (rule, value, callback) => {
      let regLenth = /^[a-zA-Z0-9-]{6,20}$/
      if (!regLenth.test(value) && value !== '' && value !== null) {
        callback(new Error('格式为6到20位字符'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      dataForm: {
        username: '',
        pwd: ''
      },
      dataRule: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { validator: validateAccount, trigger: 'blur', min: 8, max: 16 }
        ],
        pwd: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { validator: validatePassword, trigger: 'blur', min: 8, max: 16 }
        ]
      }
    }
  },
  created () {
    this.removeLoading()
  },
  methods: {
    // 提交表单
    dataFormSubmit () {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const params = { ...this.dataForm }
          this.loading = true
          loginIn(params).then(({ data }) => {
            this.loading = false
            if (data.code == 200) {
              this.$cookie.set('token', data.data.token)
              this.$cookie.set('account', this.dataForm.username)
              this.$router.replace({ path: '/backstage/accountList' })
            } else {
              this.$message.error(data.message)
            }
          })
        }
      })
    },
    removeLoading () {
      // 移除登录页之前的loading
      var loadingMask = document.getElementById('loadingMark')
      var loadingCss = document.getElementById('loadCss')
      if (loadingMask != null && loadingCss != null) {
        document.getElementsByTagName('head')[0].removeChild(loadingCss)
        loadingMask.parentNode.removeChild(loadingMask)
      }
    }
  }
}
</script>

<style lang="scss" scope>
.site-wrapper.site-page--login {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(38, 50, 56, 0.6);
  overflow: hidden;
  &:before {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    content: "";
    background-image: url(~@/assets/img/global_bg.jpg);
    background-size: cover;
  }
  .site-content__wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: transparent;
  }
  .site-content {
    min-height: 100%;
    padding: 30px 500px 30px 30px;
  }
  .login-main {
    position: absolute;
    top: 50%;
    margin-top: -200px;
    left: 50%;
    margin-left: -235px;
    padding: 30px 60px 20px;
    width: 470px;
    background: rgba(0, 0, 0, 0.3) !important;
    border-radius: 5px;
    input::-webkit-input-placeholder{
        color:#909399;
    }
    input::-moz-placeholder{   /* Mozilla Firefox 19+ */
        color:#909399;
    }
    input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
        color:#909399;
    }
    input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
        color:#909399;
    }
  }
  .login-title-all {
    color: rgb(244, 220, 1);
    .login-title {
      text-align: center;
      margin: 10px 0 20px;
      font-size: 26px;
      font-weight: 400;
      text-transform: uppercase;
    }
  }
  .login-btn-submit {
    width: 100%;
    margin-top: 10px;
  }
  .input-pre-text {
    width: 40px;
    text-align: justify;
    text-align-last: justify;
  }
}

</style>
