<template>
  <router-view></router-view>
</template>

<script>
export default {
  provide () {
    return {
      processEnv: this.processEnv
    }
  },
  computed: {
    processEnv: {
      get () {
        return process.env
      }
    }
  }
}
</script>
