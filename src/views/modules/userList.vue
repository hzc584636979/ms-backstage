<template>
  <div>
    <el-form :inline="true" @keyup.enter.native="getDataList('reset')">
      <el-form-item label="搜索: ">
        <el-input
          style="width: 350px;"
          v-model="dataForm.searchVal"
          clearable
          placeholder="账号、公司名称、姓名、电话"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="getDataList('reset')">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="dataList"
      border
      v-loading="dataListLoading"
      style="width: 100%;"
    >
      <el-table-column type="index" header-align="center" align="center" width="50" label="序号"></el-table-column>
      <el-table-column prop="id" header-align="center" align="center" label="ID"></el-table-column>
      <el-table-column prop="username" header-align="center" align="center" label="账号"></el-table-column>
      <el-table-column header-align="center" align="center" label="注册会员">
        <template slot-scope="scope">
          {{ scope.row.is_vip ? '是' : '否' }}
        </template>
      </el-table-column>
      <el-table-column prop="corporate_name" header-align="center" align="center" label="公司名称"></el-table-column>
      <el-table-column prop="real_name" header-align="center" align="center" label="姓名"></el-table-column>
      <el-table-column prop="phone" header-align="center" align="center" label="电话"></el-table-column>
      <el-table-column prop="email" header-align="center" align="center" label="邮箱"></el-table-column>
      <el-table-column prop="country_zh" header-align="center" align="center" label="国家"></el-table-column>
      <el-table-column prop="region" header-align="center" align="center" label="地区"></el-table-column>
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
  </div>
</template>

<script>
import { listPage } from '@/api/userList'
export default {
  data () {
    return {
      dataForm: {
        searchVal: ''
      },
      dataList: [],
      page: 1,
      pageSize: 10,
      totalPage: 0,
      dataListLoading: false
    }
  },
  mounted () {
    this.getDataList('reset')
  },
  methods: {
    // 获取数据列表
    getDataList (_type) {
      if (_type === 'reset') {
        this.page = 1
        this.pageSize = 10
      }
      this.dataListLoading = true
      let params = { ...this.dataForm, page: this.page, pageSize: this.limit }
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
