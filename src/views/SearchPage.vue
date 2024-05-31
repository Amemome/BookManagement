<template>
    <div class="searchcontent">
      <LeftSideBar />
      <div class = "realbody">
        <SearchBar />
      <div class="book-list">
        <SearchComponents
          v-for="(book, index) in books"
          :key="index"
          :title="book.title"
          :author="book.author"
          :imageUrl="book.imageUrl"
        />
      </div>
    </div>
    </div>
</template>
  
<script setup>

import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import SearchBar from '../components/SearchBarV2.vue'
import SearchComponents from '../components/SearchComponents.vue';
import LeftSideBar from '@/components/LeftSideBar.vue';


const route = useRoute();
// eslint-disable-next-line no-unused-vars
const query = route.query.q;
const books = ref([]);
  
  // onMounted 훅에서 임의의 데이터를 설정
onMounted(() => {
    books.value = [
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        imageUrl: '/api/images/book1.jpg'
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        imageUrl: '/api/images/book2.jpg'
      },
      {
        title: '1984',
        author: 'George Orwell',
        imageUrl: '/api/images/book3.jpg'
      }
    ];
  });
  </script>
  
<style scoped>
.book-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.searchcontent {
    flex:1;
    display: flex;
    flex-direction: row;
}

.realbody {
  flex: 1;

}
</style>
  