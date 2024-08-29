<template>
  <div class="management-section">
    <h3>Manage Customers</h3>
    <table>
      <thead>
        <tr>
          <th @click="sortBy('id')">ID</th>
          <th @click="sortBy('firstName')">First Name</th>
          <th @click="sortBy('lastName')">Last Name</th>
          <th @click="sortBy('email')">Email</th>
          <th @click="sortBy('phone')">Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in sortedCustomers" :key="customer.id">
          <td>{{ customer.id }}</td>
          <td>{{ customer.firstName }}</td>
          <td>{{ customer.lastName }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td><button @click="deleteCustomer(customer.id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customers: [
        { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', phone: '1234567890' },
        { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', phone: '0987654321' }
      ],
      sortKey: '',
      sortAsc: true
    };
  },
  computed: {
    sortedCustomers() {
      return [...this.customers].sort((a, b) => {
        let result = 0;
        if (a[this.sortKey] < b[this.sortKey]) result = -1;
        if (a[this.sortKey] > b[this.sortKey]) result = 1;
        return this.sortAsc ? result : -result;
      });
    }
  },
  methods: {
    sortBy(key) {
      this.sortKey = key;
      this.sortAsc = !this.sortAsc;
    },
    deleteCustomer(id) {
      this.customers = this.customers.filter(customer => customer.id !== id);
    }
  }
};
</script>

<style scoped>
.management-section {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

button {
  padding: 5px 10px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #c0392b;
}
</style>