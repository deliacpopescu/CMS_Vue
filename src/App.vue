<template>
 <Modal></Modal>
 <div class="container">
<Header></Header>
  <Buttons></Buttons>
  <Table></Table>
 </div>
  

</template>

<script>
import Header from "./components/Header.vue";
import Buttons from "./components/Buttons.vue";
import Modal from "./components/Modal.vue";
import Table from "./components/Table.vue";
export default {
  name: "App",
  components: {
    Header,
    Buttons,
    Modal,
    Table,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 2rem;
}
.container{
  display: flex;
  flex-direction: column;
}

</style>
