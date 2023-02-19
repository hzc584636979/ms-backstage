<template>
  <div>
    <el-form :inline="true">
      <el-form-item>
        <el-button type="success" @click="addHandle()">添加账号</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="dataList"
      border
      v-loading="dataListLoading"
      style="width: 100%;"
    >
      <el-table-column prop="username" header-align="center" align="center" label="账号"></el-table-column>
      <el-table-column prop="real_name" header-align="center" align="center" label="姓名"></el-table-column>
      <el-table-column prop="created_time" header-align="center" align="center" label="创建时间"></el-table-column>
      <el-table-column header-align="center" align="center" width="200" label="操作">
        <template slot-scope="scope">
          <el-button
            icon="el-icon-setting"
            type="text"
            @click="resetPassHandle(scope.row)"
            style="color:#E6A23C"
          >修改密码</el-button>
          <el-button
            type="text"
            icon="el-icon-delete"
            @click="deleteHandle(scope.row)"
            class="del-color"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="sizeChangeHandle"
      @current-change="currentChangeHandle"
      :current-page="page"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      :total="totalPage"
      layout="total, sizes, prev, pager, next, jumper"
    ></el-pagination>
    <!-- 弹窗, 新增 -->
    <add-or-update v-if="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="getDataList"></add-or-update>
    <!-- 弹窗, 修改密码 -->
    <update-password v-if="updatePasswordVisible" ref="updatePassword"></update-password>
  </div>
</template>

<script>
import { listPage, delUser } from '@/api/accountList'
import AddOrUpdate from './account-add-or-update'
import UpdatePassword from './account-update-password'
export default {
  components: {
    AddOrUpdate,
    UpdatePassword
  },
  data () {
    return {
      dataList: [],
      page: 1,
      pageSize: 10,
      totalPage: 0,
      dataListLoading: false,
      addOrUpdateVisible: false,
      updatePasswordVisible: false
    }
  },
  mounted () {
    this.getDataList()
  },
  methods: {
    // 新增账号
    addHandle () {
      this.addOrUpdateVisible = true
      this.$nextTick(() => {
        this.$refs.addOrUpdate.init()
      })
    },
    // 重置密码
    resetPassHandle (row) {
      this.updatePasswordVisible = true
      this.$nextTick(() => {
        this.$refs.updatePassword.init(row)
      })
    },
    // 删除
    deleteHandle (row) {
      this.$confirm('确定对 “ <i>' + row.username + '</i> ” 进行 <strong>删除</strong> 操作?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        dangerouslyUseHTMLString: true
      }).then(() => {
        this.dataListLoading = true
        let params = {
          id: row.id
        }
        delUser(params).then(({data}) => {
          if (data.code == 200) {
            this.$message({
              message: '操作成功',
              type: 'success',
              duration: 1500,
              onClose: () => {
                this.getDataList()
              }
            })
          } else {
            this.$message.error(data.message)
          }
          this.dataListLoading = false
        })
      }).catch(() => {
        this.$message.info('取消操作！')
      })
    },
    // 获取数据列表
    getDataList () {
      this.dataListLoading = true
      let params = { page: this.page, pageSize: this.pageSize }
      listPage(params).then(({ data }) => {
        if (data.code == 200) {
          this.dataList = data.data.list
          this.totalPage = data.data.total
        } else {
          this.$message.error(data.message)
          this.dataList = []
          this.totalPage = 0
        }
        this.dataListLoading = false
      })
    },
    // 每页数
    sizeChangeHandle (val) {
      this.pageSize = val
      this.page = 1
      this.getDataList()
    },
    // 当前页
    currentChangeHandle (val) {
      this.page = val
      this.getDataList()
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
