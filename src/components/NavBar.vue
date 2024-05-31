<template>
  <header class="navbar">
    <div class="navbar-left">
      <RouterLink to="/" class="title">Aegis Book</RouterLink>
    </div>
    <nav class="navbar-center">
      <a href="https://dk-aegis.org/" class="navbar-center-elemnt">이지스 홈페이지</a>
      <RouterLink to="/user/profile" class="navbar-center-elemnt">내 서재</RouterLink>
      <RouterLink to="/user/requestbook" class="navbar-center-elemnt">도서 신청</RouterLink>
    </nav>

    <div class="navbar-right">
      <RouterLink to="/user/login" class="navbar-right">
        <button class="login-button" @click = "logout" >로그아웃</button>
      </RouterLink>
    </div>
  </header>
  <Transition name="searchbartransition" mode="out-in">
    <RouterView></RouterView>
  </Transition>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useUserStore } from '../stores/UserStore'

  

const logout = () => {
  const userstore = useUserStore()
  userstore.token = null 
  console.log(userstore.isLogin)
}

  

</script>

<style scoped>
.navbar {
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: hsl(0, 27%, 84%, 0.5);
  color: #1f1e33;
  backdrop-filter: blur(5px);
  padding: 2vh;
  padding-left: 0vw;
}

.title {
  text-decoration: none;
  margin-left: 3vw;
  font-family: 'Charis SIL', serif;
  color: #1f1e33;
  font-size: 36px;
}

.navbar-center {
  text-decoration: none;
  margin-right: 10px;
  align-items: right;
  flex: 1;
  display: flex;
  justify-content: right;
  gap: 1rem;
}

.navbar-center-elemnt {
  text-decoration: none;
  color: white;
}

.navbar-center RouterLink.router-link-exact-active {
  font-weight: bold;
  text-decoration: none;
}

.navbar-right .login-button {
  margin-right: 4vw;
  background-color: transparent;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
}

.navbar-right .login-button:hover {
  background-color: rgb(69, 160, 73, 0.3);
  border-radius: 20px;
  backdrop-filter: (6px);
}
</style>
