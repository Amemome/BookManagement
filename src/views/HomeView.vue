<script setup>
import LeftSideBar from '../components/LeftSideBar.vue'
import SearchBar from '../components/SearchBar.vue'
</script>

<template>
  <div class="components">
      <LeftSideBar />
      <SearchBar alignitem = "center" />         
  </div>

</template>

<style scoped>
.components {
  display:flex;
  flex-direction: row;

}

</style>
