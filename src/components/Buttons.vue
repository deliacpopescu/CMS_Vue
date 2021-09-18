<template>
  <button class="add-btn" v-on:click="showAddModal()">{{ title }}</button>
</template>

<script>
export default {
  data() {
    return {
      title: "Adauga",
    };
  },
  methods:{
      showAddModal(){
            document.getElementById('modal').style.display="block";
        },
       
  }
};
</script>

<style scoped>
.add-btn {
  background-color: #2d4059;
  color: white;
  float:left;
  width:5rem;
  height:3rem;
  border-radius: 10%;
}
</style>
