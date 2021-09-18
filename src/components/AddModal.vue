<template>
  <div id="modal">
    <div id="modal-content">
      <span class="close" v-on:click="closeModal()">&times;</span>
      <h3>{{ title }}</h3>
      <div class="align-items-center">
        <form id="form" @submit.prevent="submitForm">
          <!-- <div class="picture"> -->
          <!-- <div class="pic-upload"> -->
          <img id="imagePlaceholder" v-bind:src="imgURL" />
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
            <label for="lastName">Nume</label>
            <input
              id="last-name"
              name="last-name"
              type="text"
              v-model="lastName"
              class="mt-3 input-modal"
              placeholder="Nume"
              oninvalid="this.setCustomValidity('Introduceti nume.')"
              oninput="setCustomValidity('')"
              onchange="validateEmail()"
              required
            />
          </div>
          <div class="form-example">
            <label for="Name">Prenume</label>
            <input
              id="name"
              name="name"
              type="text"
              v-model="name"
              placeholder="Prenume"
              class="mt-3 input-modal"
              oninvalid="this.setCustomValidity('Introduceti prenume.')"
              oninput="setCustomValidity('')"
              onchange="validateEmail()"
              required
            />
          </div>
          <div class="form-example">
            <label for="email">Email</label>
            <input
              v-model="email"
              class="mt-3 input-modal"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              oninvalid="this.setCustomValidity('Introduceti un email.')"
              oninput="setCustomValidity('')"
              onchange="validateEmail()"
              required
            />
          </div>
          <div class="form-example">
            <label for="gender">Gen</label>
            <select
              class="mt-3"
              id="gender"
              name="gender"
              v-model="gender"
              oninvalid="this.setCustomValidity('Selectati o optiune.')"
              oninput="setCustomValidity('')"
              onchange="validateEmail()"
              required
            >
              <option value="" selected hidden>Selectati</option>
              <option value="M">M</option>
              <option value="F">F</option>
            </select>
          </div>
          <div class="form-example">
            <label for="birthDate">Data nasterii</label>
            <input
              v-model="birthDate"
              type="date"
              class="form-control mt-3"
              id="birthDate"
              name="birthDate"
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

import newUser from "./../assets/newUser.png";
export default {
  props: {
    LastName: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Gender: {
      type: String,
      required: true,
    },
    BirtDate: {
      type: Date,
      required: true,
    },
  },
  data() {
    return {
      employee: {
        imgURL: newUser,
        id: "",
        lastName: "",
        name: "",
        email: "",
        gender: "",
        birtDate: "",
      },
      title: "Adaugati un nou angajat"
    };
  },
  methods: {
    closeModal() {
      document.getElementById("modal").style.display = "none";
    },
    submitForm() {
      console.log("lastname " + this.lastName);
      this.lastName = "";
      console.log("name " + this.name);
      this.name = "";
      console.log("email " + this.email);
      this.email = "";
      console.log("gender" + this.gender);
      this.gender = "M";
      console.log("birthDate" + this.birtDate);
      this.gender = "";
      this.addNewData();
    },
    addNewData(){
       this.$emit("add-new-row",this.lastName);
    }
    // addItem() {
    //   console.log("se apeleaza add item");
    // },
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
