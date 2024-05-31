<template>
    <h1>안녕하세요 Username 반납을 해보세요
    </h1>
    <RouterLink to="/" class="home">검색하러가기</RouterLink>

    <div v-if = "profile">      
        
    </div>
    <div class = "booklog">   
        <ul v-for="book in books" :key="book.id" class = "boks">
            <div class = "container">

            <p>제목:{{ book.title}}</p>
            <p>저자:{{ book.author}} </p>
        </div>
            <button @click = "returnbook" class = "returnbook">반납</button> 
      </ul>
      
    </div>

    <button @click = "deleteaccount" class = "removeaccount">계정삭제</button>

    
</template>

<script setup>

import { ref, onMounted} from 'vue';
import {useUserStore} from '@/stores/UserStore';

const userStore = useUserStore();
const profile = ref(null);         //null 이면 false
const books = ref([]);



onMounted(async () => {
  // userStore.token 값이 null, undefined, 빈 문자열이 아닌지 확인
  if (userStore.token) {
    profile.value = 'userStore.token';
  }
  await fetchBorrowBooks();
});

async function fetchBorrowBooks() {
  books.value = userStore.borrowed;
  console.log(profile.value)
}
</script>

<style scoped>

p {
    font-size: 24px;
}

.boks {
    display: flex;
    flex-direction: row;
    border: 3px solid rgb(255, 0, 0 , 0.2);
    border-radius: 25px;
}

.container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
}

.returnbook {
    border: 0;
    border-radius: 25px;
    background-color: rgb(127, 255, 212,0.2)


}

button.returnbook:hover {
    background-color: rgba(0, 255, 170, 0.842)
}
.removeaccount{
    border: 3px solid rgb(255, 0, 0 , 1);
    color: red;
    background-color: blue;
}

button.removeaccount:hover{
    border: 3px solid rgb(81, 0, 255);
    color: white;
    background-color: red;
}
</style>