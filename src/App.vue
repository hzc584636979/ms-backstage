<template>
  <router-view></router-view>
</template>

<script>
export default {
  mounted () {
    this.$store.commit('common/updateProcessEnv', process.env)
  }
}
</script>
