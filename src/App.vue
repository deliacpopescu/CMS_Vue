<template>
  <div class="container">
    <cms-header/>
    <cms-buttons/>
    <cms-empoyee-table/>
  </div>
</template>

<script>
  import CmsHeader from './components/Header.vue';
  import CmsButtons from './components/Buttons.vue';
  import CmsEmpoyeeTable from './components/Table.vue';

  export default {
    name: "App",
    components: {
      CmsHeader,
      CmsButtons,
      CmsEmpoyeeTable
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
