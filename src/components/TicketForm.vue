<template>
  <div>
    <form @submit.prevent="submitData">
      <div>
        <label for="name">Full Name: </label>
        <input type="text" id="name" v-model.trim="fullName" />
      </div>
      <div>
        <label for="source">Boarding Point: </label>
        <select id="source" v-model="source">
          <option v-for="city in cites" :key="city">
            {{ city }}
          </option>
        </select>
      </div>
      <div>
        <label for="destination">Destination Point: </label>
        <select id="destination" v-model="destination">
          <option v-for="city in cites" :key="city">
            {{ city }}
          </option>
        </select>
      </div>
      <div>
        <label for="number">No.of Persons: </label>
        <input type="number" id="number" v-model.number="persons" />
      </div>
      <p v-if="!isValid">
        Please Fill Above Information Carefully. Then Try Again...!
      </p>
      <div>
        <button>Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  // emits: ['save-data'],
  data() {
    return {
      cites: [
        'Aurangabad',
        'Jalna',
        'Partur',
        'Selu',
        'Manvat Road',
        'Parbhani',
        'Purna',
        'Nanded',
      ],
      fullName: '',
      source: '',
      destination: '',
      persons: null,
      isValid: true,
      price: 50,
      total: 0,
    };
  },

  methods: {
    submitData() {
      if (
        this.fullName === '' ||
        this.source === '' ||
        this.destination === '' ||
        this.persons === null ||
        this.destination === ''
      ) {
        this.isValid = false;
        return;
      }

      let count = 0;
      let count1 = 0;
      let count2 = 0;

      for (let i = 1; i < this.cites.length; i++) {
        if (this.source === this.cites[i]) {
          count1 += this.cites.indexOf(this.cites[i]);
        }
        if (this.destination === this.cites[i]) {
          count2 += this.cites.indexOf(this.cites[i]);
        }
        count = Math.abs(count1 - count2);
        count += '\n';
      }

      this.total = count * this.price * this.persons;

      this.$store.dispatch('storeUser', {
        fullName: this.fullName,
        from: this.source,
        to: this.destination,
        persons: this.persons,
        total: this.total,
      });

      this.fullName = '';
      this.source = '';
      this.destination = '';
      this.persons = '';

      this.$router.replace('/confirm');
    },
  },
};
</script>
