export default {
  storeUser(state, payload) {
    state.users.unshift(payload);
  },
  getUser(state, payload) {
    state.users = payload;
  },
};
