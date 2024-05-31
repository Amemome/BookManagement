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
            <div id = "input-box">
                <input type="text" class="searchinput"
                v-model="query" 
                required />
                <input type="submit" class="search-button" value=""/>
            
            </div>

        </form>    
    </div>
</template>

<style scoped>
#search-bar {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 20px;
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
</style>