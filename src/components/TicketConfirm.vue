<template>
  <div>
    <h2>Your Ticket Is Confirm...!</h2>
    <span><strong>Date: </strong>{{ time }}</span>
    <ul>
      <li v-for="user in usersData" :key="user">
        <h3>Mr./Mrs. {{ user.fullName }}</h3>
        <p>Your ticket is confirm from {{ user.from }} to {{ user.to }}.</p>
        <p>Passengers: {{ user.persons }}</p>
        <p>Amount: Rs.{{ user.total }}</p>
        <h4>We Wish you safe, comfortable and happy journey...!</h4>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    time() {
      return new Date();
    },
    usersData() {
      return this.$store.getters.users;
    },
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.$store.dispatch('getUser');
    },
  },
};
</script>
