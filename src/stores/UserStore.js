import { defineStore } from 'pinia';
import Axios from '@/api';




export const useUserStore = defineStore('user', {         
  state: () => ({                                          
    token: null,                                         
    borrowed: [],
  }),
  getters: {
    isLogin: (state) => !!state.token,  
  },
  actions: {
    async login(loginplz) {
      try {
        const response = await Axios.post('/api/loginplease', loginplz);
        console.log(response)    //확인용            
        const token = response.data.token;   
        console.log(token)        //확인용           
        this.token = 'hi~';

        Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;  
        
      } catch (error) {
        console.error('Login Failed!', error);     
        console.log(error.response)     //test용
        this.token = 'hi~~'             //test용           
      }
    },
    logout() {
      this.token = null;
      delete Axios.defaults.headers.common['Authorization'];
    },
    async fetchUserProfile() {
        try {
            const response = await Axios.get('/user/profile');
            return response.data;
        } catch (error) {
            console.error('Failed to fetch user profile',error)
        }

    }
  },
  persist: true,      //pinia 스토리지에 저장하게하기.. 새로고침 되어도 값이 변하지 않도록 
});                  


export default useUserStore;