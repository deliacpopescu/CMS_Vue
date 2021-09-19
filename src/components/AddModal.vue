<template>
  <div id="modal">
    <div id="modal-content">
      <span class="close" v-on:click="closeModal()">&times;</span>
      <h3>{{ title }}</h3>
      <div class="align-items-center">
        <form id="form" @submit.prevent="submitForm">
          <!-- <div class="picture"> -->
          <!-- <div class="pic-upload"> -->
          <img id="imagePlaceholder" v-bind:src="imgSrc" />
          <!-- </div>
          <div> -->
          <label for="imageUpload" class="add-img-btn">Adaugati imagine</label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            style="display: none"
            onchange="app.showMyImage(this)"
          />
          <!-- </div> -->
          <!-- </div> -->
          <div class="form-example">
            <label for="last-name">Nume</label>
            <input
              id="last-name"
              type="text"
              placeholder="Nume"
              v-model="employee.lastName"
              class="mt-3 input-modal"
              oninvalid="this.setCustomValidity('Introduceti nume.')"
              oninput="setCustomValidity('')"
              required
            />
          </div>
          <div class="form-example">
            <label for="first-name">Prenume</label>
            <input
              id="name"
              type="text"
              placeholder="Prenume"
              v-model="employee.firstName"
              class="mt-3 input-modal"
              oninvalid="this.setCustomValidity('Introduceti prenume.')"
              oninput="setCustomValidity('')"
              required
            />
          </div>
          <div class="form-example">
            <label for="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="Email"
              v-model="employee.email"
              class="mt-3 input-modal"
              oninvalid="this.setCustomValidity('Introduceti un email.')"
              oninput="setCustomValidity('')"
              onchange="validateEmail()"
              required
            />
          </div>
          <div class="form-example">
            <label for="gender">Gen</label>
            <select
              id="gender"
              v-model="employee.gender"
              class="mt-3"
              oninvalid="this.setCustomValidity('Selectati o optiune.')"
              oninput="setCustomValidity('')"
              required
            >
              <option value="" selected hidden>Selectati</option>
              <option value="M">M</option>
              <option value="F">F</option>
            </select>
          </div>
          <div class="form-example">
            <label for="birth-date">Data nasterii</label>
            <input
              id="birthDate"
              type="date"
              v-model="employee.birthDate"
              class="form-control mt-3"
              oninvalid="this.setCustomValidity('Introduceti data nasterii.')"
              oninput="setCustomValidity('')"
              required
            />
          </div>
          <div class="text-center m-4">
            <button class="add-img-btn" type="submit">Salveaza</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import axios from "axios";
import variables from "./../variables";
// import newUser from "./../assets/newUser.png";

export default {
  data() {
    return {
        title: "Adaugati un nou angajat",
        employee: {
          imgSrc: "newUser.png",
          firstName: "",
          lastName: "",
          email: "",
          gender: "",
          birthDate: "",
        },
    };
  },
  methods: {
    closeModal() {
      document.getElementById("modal").style.display = "none";
    },
    submitForm() {
      axios.post(`${variables.API_URL}/Employee`, {
        imgSrc: this.employee.imgSrc,
        firstName: this.employee.firstName,
        lastName: this.employee.lastName,
        email: this.employee.email,
        gender: this.employee.gender,
        birthDate: this.employee.birthDate,
      })
        .then(response => {
          this.rows = response.data;
      })
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
       })
        .finally(() => {
          this.$emit("new-employee-added");
          this.closeModal()
          });
    },
  },
};

</script>
<style scoped>
#modal {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
  position: absolute;
  display: none;
  text-align: -webkit-center;
}

/* Modal Content/Box */
#modal-content {
  background-color: #fefefe;
  margin: 1rem;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 2%;
  width: 50%;
  height: auto;
  left: 25%;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
#form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.add-img-btn {
  background-color: #2d4059;
  color: white;
  float: left;
  width: 10rem;
  height: 2rem;
  border-radius: 5%;
}
.form-example label {
  width: 5rem;
}

/* .picture {
  align-self: center;
} */
/* .pic-upload {
  text-align: center;
} */
/* .pic-options {
  text-align: center;
} */

.input-modal {
  width: 80%;
  height: 2rem;
  margin-top: 0.8rem;
}
#gender,
#birthDate {
  margin-top: 0.8rem;
  height: 2rem;
  width: 80%;
}

label {
  margin-top: 1rem;
  margin-left: 1rem;
}

#imagePlaceholder {
  width: 10rem;
  height: 10rem;
}
.data {
  display: flex;
  flex-direction: row;
}
.form-example {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
</style>
