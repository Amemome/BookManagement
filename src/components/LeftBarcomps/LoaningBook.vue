<template>
  <div id="loanbook">
    <div id="title"><h3>빌린 책 목록</h3></div>

    <ul>
      <ul v-for="book in books" :key="book.id">
        {{
          book.title
        }}
      </ul>
    </ul>
  </div>  
</template>

<script setup>
import { ref, onMounted} from 'vue';
import {useUserStore} from '@/stores/UserStore';

const userStore = useUserStore();
const profile = ref(null);         //null 이면 false
const books = ref([]);



onMounted(async () => {
  await fetchBorrowBooks();
});

async function fetchBorrowBooks() {
  books.value = userStore.borrowed;
  console.log(profile.value)
}
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

.loanbook li {
  margin: 0.5rem 0;
  cursor: pointer;
}

.loanbook li:hover {
  text-decoration: underline;
}

ul {
  padding: 0;
}
</style>
