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
      height="50vh"
      style="width: 100%;"
    >
      <el-table-column prop="orderNo" header-align="center" align="center" label="账号"></el-table-column>
      <el-table-column prop="orderNo" header-align="center" align="center" label="创建时间"></el-table-column>
      <el-table-column header-align="center" align="center" width="200" label="操作">
        <template slot-scope="scope">
          <el-button
            icon="el-icon-setting"
            type="text"
            @click="resetPassHandle(scope.row)"
            style="color:#E6A23C"
          >重置密码</el-button>
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
      :page-size="limit"
      :total="totalPage"
      layout="total, sizes, prev, pager, next, jumper"
    ></el-pagination>
    <!-- 弹窗, 新增 -->
    <add-or-update v-if="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="getDataList"></add-or-update>
  </div>
</template>

<script>
import { listPage, resetUserPassword, delUser } from '@/api/accountList'
import AddOrUpdate from './account-add-or-update'
export default {
  components: {
    AddOrUpdate
  },
  data () {
    return {
      dataList: [],
      page: 1,
      limit: 10,
      totalPage: 0,
      dataListLoading: false,
      addOrUpdateVisible: false
    }
  },
  mounted () {
    // this.getDataList('reset')
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
      this.$confirm('确定对 “ <i>' + row.employeeName + '</i> ” 进行 <strong>重置密码</strong> 操作?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        dangerouslyUseHTMLString: true
      }).then(() => {
        this.dataListLoading = true
        let params = {
          employeeId: row.employeeId
        }
        resetUserPassword(params).then(({data}) => {
          if (data && data.success === true) {
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
    // 删除
    deleteHandle (row) {
      if (row.status === 1) {
        this.$message.error('当前用户状态为启用，不允许删除操作！')
        return
      }
      this.$confirm('确定对 “ <i>' + row.employeeName + '</i> ” 进行 <strong>删除</strong> 操作?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        dangerouslyUseHTMLString: true
      }).then(() => {
        this.dataListLoading = true
        let params = {
          employeeId: row.employeeId
        }
        delUser(params).then(({data}) => {
          if (data && data.success === true) {
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
    getDataList (_type) {
      if (_type === 'reset') {
        this.page = 1
        this.limit = 10
      }
      this.dataListLoading = true
      let params = { page: this.page, limit: this.limit }
      listPage(params).then(({ data }) => {
        if (data && data.success === true) {
          this.dataList = data.data.rows
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
      this.limit = val
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
