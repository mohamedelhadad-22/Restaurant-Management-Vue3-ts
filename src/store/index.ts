import { createStore } from "vuex";

export interface State {
  count: number;
}

export default createStore<State>({
  state: { count: 0 },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});