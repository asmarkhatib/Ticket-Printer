export default {
  users(state) {
    return state.users.filter((user) => user === state.users[0]);
  },
};
