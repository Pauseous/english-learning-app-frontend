import { defineStore } from 'pinia';
import { ref } from 'vue'

interface UserInfo {
  phoneNumber: string,
  avatar: string
}

export const useUserInfoStore = defineStore('userInfo', () => {
  const userInfo = ref<UserInfo>({
    phoneNumber: '',
    avatar: ''
  })

  return {
    userInfo
  }
})
