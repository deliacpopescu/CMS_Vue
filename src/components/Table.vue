<template>
  <add-modal @new-employee-added="reloadData"/>
  <table id="firstTable">
    <thead>
      <tr>
        <th>Poza</th>
        <th>Nume</th>
        <th>Prenume</th>
        <th>Email</th>
        <th>Sex</th>
        <th>Data nasterii</th>
        <th>Optiuni</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row.id" :row="row" >
        <td>{{ row.imgSrc }}</td>
        <td>{{ row.lastName }}</td>
        <td>{{ row.firstName }}</td>
        <td>{{ row.email }}</td>
        <td>{{ row.gender }}</td>
        <td>{{ row.birthDate }}</td>
        <td>
          <font-awesome-icon
            class="edit-btn"
            icon="edit"
            @click="showEditModal(row)"
          ></font-awesome-icon>

          <font-awesome-icon
            v-on:click="deleteRow(row)"
            class="delete-btn"
            icon="times"
          ></font-awesome-icon>
        </td>
      </tr>
    </tbody>
  </table>
  <edit-modal
    v-for="row in rows"
    :key="row.id"
    :last-name="row.lastName"
    :first-name="row.firstName"
    :email="row.email"
    :gender="row.gender"
    :birth-date="row.birthDate"
    @add-new-row="addNewItem"
  ></edit-modal>
</template>

<script>
import AddModal from "./AddModal.vue";
import EditModal from "./EditModal.vue";
import axios from "axios";
import variables from "./../variables";

export default {
  name: "table-template",
  components: {
    AddModal,
    EditModal
  },
  data() {
    return {
      loading: true,
      rows: [], 
    };
  },
  mounted() {
    axios.get(`${variables.API_URL}/Employee`)
      .then(response => {
        this.rows = response.data;
      })
      .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      })
      .finally(() => this.loading = false);
  },
  methods: {
    reloadData () {
      axios.get(`${variables.API_URL}/Employee`)
        .then(response => {
          this.rows = response.data;
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        })
        .finally(() => this.loading = false);
      },

    addNewItem () {
      console.log("this.rows=" + this.rows);
      console.log("se apeleaza add item");
      // this.rows.push(row.id);
    },

    showEditModal(row) {
      document.getElementById("modal").style.display = "block";
      this.id=row.id;
         //mai trebe poza
    },
    deleteRow(row) {
      axios.delete(`${variables.API_URL}/Employee/${row.id}`)
        .then(() => {
          this.rows = this.rows.filter((e) => { return e.id !== row.id }) ;
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        })
        .finally(() => this.loading = false);
    },
  },
};
</script>

<style scoped>
table {
  font-family: "Open Sans", sans-serif;
  width: 1005;
  border-collapse: collapse;
  border: 3px solid #44475c;
  margin: 10px 10px 0 0px;
  z-index: 0;
}

table th {
  text-transform: uppercase;
  text-align: center;
  background: #44475c;
  color: #fff;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: center;
  padding: 8px;
  border-right: 2px solid #7d82a8;
}
.edit-btn {
  margin-right: 1.5rem;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #d4d8f9;
}
</style>
