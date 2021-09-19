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
              v-model="lastName"
              class="mt-3 input-modal"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Nume"
              oninvalid="this.setCustomValidity('Introduceti numele.')"
              oninput="setCustomValidity('')"
              required
            />
          </div>
          <div class="text-center m-4">
            <button class="add-img-btn" type="submit">
              Salveaza
            </button>
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

// import newUser from "./../assets/newUser.png";
export default {
  // props:{
  //    lastName: {
  //     type: String,
  //     required: true,
  //   },
  //   firstName: {
  //     type: String,
  //     required: true,
  //   },
  //   email: {
  //     type: String,
  //     required: true,
  //   },
  //   gender: {
  //     type: String,
  //     required: true,
  //   },
  //   birtDate: {
  //     type: Date,
  //     required: true,
  //   },
  // },
  data() {
    return {
      title: "Editati datele angajatului",
      employee: {
      type: Object,
      default: () => ({ empty: true })
    }
    };
  },
  methods: {
    
    submitForm() {

    },
    closeModal() {
      document.getElementById("modal").style.display = "none";
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
