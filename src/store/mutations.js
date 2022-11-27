export default {
  storeUser(state, payload) {
    state.users.push(payload);
  },
  getUser(state, payload) {
    state.users = payload;
  },
};
