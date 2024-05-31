<template>
    <div class="login-container">
      <h2>회원가입</h2>
      <form @submit.prevent = "register">
        <div class="input-group">
          <input placeholder = "학번" type="number" id="studentID" v-model="studentID" class="input" maxlength="8"  required />
        </div>
        <div class="input-group">
          <input placeholder = "실명" type="text"  id="name" pattern="[A-Za-z\uAC00-\uD7A3]+"  v-model="name" class="input" required />
        </div>
        <div class="input-group">
          <input placeholder = "비밀번호" type="password"  id="password" minlength="8" maxlength="20" v-model="password" class="input" required />
        </div>
        <div class="input-group">
          <input placeholder = "비밀번호 확인" type="password"  id="passwordcheck" minlength="8" maxlength="20" v-model="passwordcheck" class="input" required />
          <span v-if="isPasswordMatch" class="check-mark">✔</span>
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
</template>
   
<script>

import Axios from '@/api';


export default {
      data() {               //이 컴포넌트(vue파일) 에서 정의되는 컴포넌트의 상태를 정의한다
          return {
              studentID: '',
              name : '',              //이 객체에는 컴포넌트에서 사용될 모든 변수들임.
              password:'',
              passwordcheck: '',
              errormessage:'',
        };
    },  
    computed: {
      isPasswordMatch() {
      return this.password && this.passwordcheck && this.password === this.passwordcheck;
    }
    },
    methods: {                // 각 컴포넌트에서 사용할 수 있는 메서드들을 정의한다.
        async register() {
            if ( this.passwordcheck !== this.password) {
                this.errorMessage = '비밀번호가 일치하지 않아요!'
                return;
            }       
            try {
                const userData = {            
                  studentID: this.studentID,    
                  name: this.name,
                  password: this.password,
                }
                const response = await Axios.post('/api/registerplease' , userData); 

                if (response.status == 200) {
                  alert('회원가입 성공!')
                  this.$router.push('/')
                  }
            } catch (error) {
              if (error.response) {
                if (error.response.status === 409) {
                  alert('중복된 정보입니다.');
                } else {
                  this.errormessage = error.response.data;
                }
                } else {
                  this.errormessage = '회원가입 중 오류가 발생했습니다';
                }
                  this.$router.push('/user/register');
            }
            
        }
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
  

  .input {
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
  
  .check-mark {
    color:greenyellow;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  