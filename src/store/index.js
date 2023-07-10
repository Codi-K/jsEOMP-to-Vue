import { createStore } from 'vuex'

let data = "https://codi-k.github.io/JSeompVUE-json-server/data.json";

export default createStore({
  state: {
    desktop:null
  },
  getters: {
  },
  mutations: {
    setDesktop(state, desktop) {
      state.desktop = desktop
    }
  },
  actions: {
    async fetchDesktop(context) {
      try {
        let res = await fetch(data)
        let {desktop}  = await res.json()
        context.commit("setDesktop", desktop);
      } catch (e) {
        console.log(e.message);
      }
    }
  },
  modules: {
  }
})
