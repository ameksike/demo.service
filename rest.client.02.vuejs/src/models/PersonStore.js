Vue.use(Vuex)
const PersonStore = new Vuex.Store({
    state: {
      list: [],
      value: ''
    },
    mutations: {
      update (state, data) {
        state.value = "Tata";
        state.list = data;
      }
    }
});