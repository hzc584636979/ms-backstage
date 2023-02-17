<template>
  <aside class="site-sidebar site-sidebar--dark">
    <div class="site-sidebar__inner">
      <el-menu
        mode='vertical'
        default-active="1"
        :collapseTransition="false"
        active-text-color="#fff"
        text-color="#fff"
        class="site-sidebar__menu">
        <el-menu-item v-for="item in menuList" :key="item.id" :index="item.id+''" @click="$router.push({ path: item.path })">
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </el-menu>
    </div>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      menuList: [
        { id: 1, path: '/backstage/accountList', name: '账号管理' },
        { id: 2, path: '/backstage/userList', name: '用户列表' },
        { id: 3, path: '/backstage/authorizeList', name: '墨水授权列表' }
      ]
    }
  },
  methods: {

  }
}
</script>
<style lang="scss">
.site-sidebar {
  overflow: hidden !important;
}
.site-sidebar--fold .site-sidebar__inner {
  overflow-y: auto;
  width: 80px;
}
</style>
