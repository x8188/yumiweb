const ldViewer = {
  namespaced: true,
  state: {
    result: ['123']
  },
  getters: {
  },
  mutations: {
    // 同步修改状态
    setResult: (state,res) => {
      state.result = res
    }
  },
  actions: {
  }
};

export default ldViewer;
