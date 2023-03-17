export default {
  namespaced: true,
  state: {
    // process.env
    processEnv: {},
    // 页面文档可视高度(随窗口改变大小)
    documentClientHeight: 0,
    // 语言
    language: localStorage.getItem('lang') || 'cn'
  },
  mutations: {
    updateProcessEnv (state, obj) {
      state.processEnv = obj
    },
    updateDocumentClientHeight (state, height) {
      state.documentClientHeight = height
    },
    updateLanguage (state, lang) {
      localStorage.setItem('lang', lang)
      state.language = lang
    }
  }
}
