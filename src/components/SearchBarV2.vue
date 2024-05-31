<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';




const query = ref('');
const router = useRouter();

const SearchBooks = () => {
  if (query.value.trim()) {
    router.push({name:'search',query: {q: query.value}})   
  }
}

</script>
<template>
  <div id="search-bar">
    <form autocomplete="on" @submit.prevent="SearchBooks">
      <div class="SearchTable">
        <select id="search-type" v-model="searchType">
          <option value="title"></option>
          <option value="title">제목</option>
          <option value="author">저자</option>
          <option value="publisher">출판사</option>
        </select>
      </div>
      <div class="SearchTable">
        <select id="search-type" v-model="searchType">
          <optgroup label="프로그래밍 언어">
          <option value="title">제목</option> 
          <option value="author">저자</option>
          <option value="publisher">출판사</option  >
          </optgroup>
          <optgroup label="분야">
          <option value="title">제목</option>
          <option value="author">저자</option>
          <option value="publisher">출판사</option>
        </optgroup>
        </select>
      </div>
      <div id="input-box">
        <input type="text" class="searchinput" v-model="query" required />
        <input type="submit" class="search-button" value="" />
      </div>
    </form>
  </div>
</template>


<style scoped>
label {
  font-size: 10px;
}

form {
  flex: 1;
  display: flex;
  padding: 20px;
  flex-direction: row;
}

.search-form {
  display: flex;
  width: 100%;
  align-items: center;
}

#input-box {
  display: flex;
  align-items: center;
  border-radius: 25px;
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.searchinput {
  flex: 1;
  border: none;
  outline: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 25px 0 0 25px;
}

.search-button {
  width: 44px;
  height: 44px;
  border: none;
  background: none;
  background-image: url('@/assets/searchicon.png');
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  border-radius: 0 25px 25px 0;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.search-button:active {
  background-color: rgba(0, 0, 0, 0.2);
}

.SearchTable {
  height: 44px;
  width: 98px;
  border-radius: 25px;
  background-color: rgba(255, 255, 255);
  clip-path: path('M0 0 H120 A20 20 0 0 0 100 44 H0 A20 20 0 0 1 0 0 Z');
  display: flex;
  align-items: center;
  padding: 0 8px;
}

select {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  background-color: #fff;
}

#search-type {
  width: 100%;
  font-size: 12px;
}

select:focus {
  outline: none;
}
</style>