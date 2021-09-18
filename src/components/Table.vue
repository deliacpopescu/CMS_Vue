<template>
  <AddModal
    v-for="row in rows"
    :key="row.id"
    :lastname="row.lastname"
    :name="row.name"
    :email="row.email"
    :gender="row.gender"
    :birthDate="row.birthDate"
    @add-new-row="addNewItem"
  ></AddModal>
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
      <tr v-for="row in rows" v-bind:key="row" v-bind:row="row">
        <td>{{ row.id }}</td>
        <td>{{ row.lastname }}</td>
        <td>{{ row.name }}</td>
        <td>{{ row.email }}</td>
        <td>{{ row.gender }}</td>
        <td>{{ row.birthDate }}</td>
        <td>
          <font-awesome-icon
            class="edit-btn"
            icon="edit"
            @click="showEditModal"
          ></font-awesome-icon>

          <font-awesome-icon
            v-on:click="deleteRow()"
            class="delete-btn"
            icon="times"
          ></font-awesome-icon>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
// import AddModal from "./AddModal.vue";

export default {
  name: "table-template",
  // components:{
  //   "add-modal": AddModal
  // },
  data() {
    return {
      rows: [
        {
          id: 0,
          lastname: "Bing",
          name: "Chandler",
          email: "bing@fmm.com",
          gender: "M",
          birthDate: "1990-02-03",
          options: "IT Manager",
        },
        {
          id: 1,
          lastname: "Geller",
          name: "Ross",
          email: "geller@fmm.com",
          gender: "M",
          birthDate: "1982-05-07",
          options: "Paleontologist",
        },
        {
          id: 2,
          lastname: "Green",
          name: "Rachel",
          email: "raceal@fmm.com",
          gender: "F",
          birthDate: "1999-05-04",
          options: "Waitress",
        },
      ],
    };
  },
  methods: {
     addNewItem() {
       console.log("this.rows=" + this.rows);
       console.log("se apeleaza add item");
        // this.rows.push(row.id);
    },

    deleteRow() {
       if (!confirm("Are you sure?")) {
        return;
      }
        alert("click");


      //alert(event.target.tagName);
      //this.rows.splice(index, 1);
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
