<template>
  <div class="left-side-bar">
    <div class="content-contianer">
      <div class="divider"></div>
      <LoaningBook />
      <div class="divider"></div>
      <RecentAccess />
    </div>
  </div>
</template>

<style scoped>
.left-side-bar {
  padding: 1.5vw;
  background-color: rgb(250, 235, 215, 0.5);
  width: 15vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.divider {
  border-top: 1px solid #1f1e33;
}
</style>

<script setup>
import LoaningBook from './LeftBarcomps/LoaningBook.vue'
import RecentAccess from './LeftBarcomps/RecentAccess.vue'
</script>
