<template>
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
      <!-- <tr v-for="row in rows" v-bind:key="row">
        <td v-for="id in row.id" v-bind:key="id">{{ id }}</td>
        <td v-for="name in row.name" v-bind:key="name">{{ name }}</td>
        <td v-for="phone in row.phone" v-bind:key="phone">{{ phone }}</td>
        <td v-for="profession in row.profession" v-bind:key="profession">{{ profession }}</td>
      </tr> -->
      <tr>
        <td>Poza</td>
        <td>Chandler</td>
        <td>Bing</td>
        <td>bing@fmm.com</td>
        <td>M</td>
        <td>1990-02-03</td>
        <td>
          <font-awesome-icon class="edit-btn" icon="edit"></font-awesome-icon>
          <button @click="deleteRow()">
            <font-awesome-icon
            
              class="delete-btn"
              icon="times"
            ></font-awesome-icon>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "table-template",
  data() {
    return {
      rows: [
        {
          name: "Chandler",
          lastName: "Bing",
          email: "bing@fmm.com",
          gender: "M",
          birthDate: "1990-02-03",
          options: "IT Manager",
        },
        {
          name: "Ross",
          lastName: "Geller",
          email: "geller@fmm.com",
          gender: "M",
          birthDate: "1982-05-07",
          options: "Paleontologist",
        },
        {
          name: "Rachel",
          lastName: "Green",
          email: "raceal@fmm.com",
          gender: "F",
          birthDate: "1999-05-04",
          options: "Waitress",
        },
      ],
    };
  },
  methods: {
    addItem() {
      // let my_results = {
      //   name: this.name,
      //   lastNmae: this.lastName,
      //   email: this.email,
      //   gender: this.gender,
      //   birthDate: this.birthDate,
      //   options: this.options,
      // };
      // this.rows.push(my_results);

      <tr>
        <td>
          // <img src="${rowData.img}" />
        </td>
        <td>{this.name}</td>
        <td>{this.lastname}</td>
        <td>{this.email}</td>
        <td>{this.gender}</td>
        <td>{this.birthDate}</td>
        <td>
          <font-awesome-icon class="edit-btn" icon="edit"></font-awesome-icon>
          <button>
            <font-awesome-icon
              class="delete-btn"
              icon="times"
            ></font-awesome-icon>
          </button>
        </td>
      </tr>;
    },

    deleteRow() {
      console.log("click")
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
