<template>
  <div class="login-container">
    <h2>로그인</h2>
    <form @submit.prevent="handleLogin">
      <div class="input-group">
        <input placeholder = "학번" type="number" id="studentID" v-model="studentID" class="input" maxlength="8"  required />
      </div>
      <div class="input-group">
        <input placeholder = "비밀번호" type="password"  id="password" minlength="8" maxlength="20" v-model="password" class="input" required />
      </div>
      <button type="submit">로그인</button>
      <RouterLink to="/user/register" class="register">회원가입</RouterLink>
    </form>
  </div>
</template>



<script setup>
import { ref } from 'vue'            //ref 는 반응형 변수,. 업뎃되면
import { useRouter } from 'vue-router'
import {useUserStore} from '@/stores/UserStore';
 
const studentID = ref('')
const password = ref('')       
const router = useRouter()
const userStore = useUserStore()          //유저상태보기


const handleLogin = async () => {    
  try {
    const loginplz = {        
      studentID: studentID.value, 
      password: password.value
    }
    await userStore.login(loginplz)
    if (userStore.isLogin) {
      alert('로그인 성공~!')
      router.push('/')
    } else {
      alert('로그인 실패~!')
      router.push('/user/login')
    }
  } catch (error) {
    alert('로그인 실패~!ㅠㅠㅠ')
    console.error(error)
  }
}
</script>

<style scoped>


input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}


.login-container {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  width: 300px;
}

h2 {
  margin-bottom: 1.5rem;
  text-align: center;
}

.input-group {
  margin-bottom: 1rem;
}

input[type='number'],
input[type='password'] {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
