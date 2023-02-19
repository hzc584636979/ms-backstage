<template>
  <div>
    <el-table
      :data="dataList"
      border
      v-loading="dataListLoading"
      style="width: 100%;"
    >
      <el-table-column prop="username" header-align="center" align="center" label="账号"></el-table-column>
      <el-table-column prop="corporate_name" header-align="center" align="center" label="公司名称"></el-table-column>
      <el-table-column prop="real_name" header-align="center" align="center" label="姓名"></el-table-column>
      <el-table-column prop="phone" header-align="center" align="center" label="电话"></el-table-column>
      <el-table-column prop="created_time" header-align="center" align="center" label="获取时间"></el-table-column>
      <el-table-column prop="main_board_id" header-align="center" align="center" label="墨水编号"></el-table-column>
      <el-table-column prop="ink_code" header-align="center" align="center" label="主板编号"></el-table-column>
      <el-table-column prop="code" header-align="center" align="center" label="获取授权编码"></el-table-column>
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
import { listPage } from '@/api/authorizeList'
export default {
  data () {
    return {
      dataList: [],
      page: 1,
      pageSize: 10,
      totalPage: 0,
      dataListLoading: false
    }
  },
  mounted () {
    this.getDataList()
  },
  methods: {
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
