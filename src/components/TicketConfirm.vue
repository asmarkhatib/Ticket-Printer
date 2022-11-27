<template>
  <div>
    <div>
      <h2>
        Your Ticket Is Confirm...!
        <span
          ><strong>{{ time }}</strong></span
        >
      </h2>
      <h3>Mr./Mrs. {{ fullName }}</h3>
      <p>
        Your ticket is confirm from {{ boardingPoint }} to
        {{ destinationPoint }}.
      </p>
      <p>Passengers: {{ persons }}</p>
      <p>Amount: Rs.{{ total }}</p>
      <h4>We Wish you safe, con and happy journey...!</h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedUser: null,
    };
  },

  computed: {
    time() {
      return new Date().toISOString();
    },
    fullName() {
      return this.selectedUser.fullName;
    },
    boardingPoint() {
      return this.selectedUser.from;
    },
    destinationPoint() {
      return this.selectedUser.to;
    },
    persons() {
      return this.selectedUser.persons;
    },
    total() {
      return this.selectedUser.total;
    },
  },

  created() {
    this.selectedUser = this.$store.getters.users.filter(
      (ele) => ele.id === id
    );
  },
};
</script>
