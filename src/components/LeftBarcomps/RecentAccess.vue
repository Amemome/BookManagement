<template>
  <div id="loanbook">
    <div id="title"><h3>최근에 본 책</h3></div>

    <ul v-for="book in borrowedBooks" :key="book.id">
      {{
        book.title
      }}
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const borrowedBooks = ref([
  { id: 1, title: 'The grat' },
  { id: 2, title: 'The man' },
  { id: 3, title: 'iamtheman' },
  { id: 4, title: 'The man' }
])
</script>

<style scoped>
.loanbook {
  flex: 1;
  overflow-y: auto;
}

.loanbook ul {
  list-style: none;
  padding: 0;
}

.loanbook li:hover {
  text-decoration: underline;
}

ul {
  padding: 0;
  margin: 0;
}
</style>
