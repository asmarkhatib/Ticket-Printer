import { createStore } from 'vuex';

import ticketModule from './modules/index.js';

const store = createStore({
  modules: {
    ticket: ticketModule,
  },

  state() {
    return {
      userId: 'c3',
    };
  },

  // getters: {
  //   userId(state) {
  //     return state.userId;
  //   },
  // },
});

export default store;
