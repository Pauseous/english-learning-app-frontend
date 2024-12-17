<template>
	<view class="user-info-container">
    <div :style="{ backgroundImage: 'url(' + userInfo.avatar + ')' }" class="blur-background"></div>
    <view class="user-info">
      <img class="avatar" :src="userInfo.avatar" alt="">
      <span class="phone-number">{{ userInfo.phoneNumber }}</span>
    </view>
  </view>
  <view class="user-options-container">
    <div class="user-option-list">
      <div class="option-item">
        <div class="item-left">
          <img class="item-icon" src="../../static/icons/9004683_clock_time_date_event_icon.svg" alt="">
          <span>打卡记录</span>
        </div>
        <div class="item-right">
          <img class="item-icon" src="../../static/icons/right.svg" alt="">
        </div>
      </div>
      <div class="option-item">
        <div class="item-left">
          <img class="item-icon" src="../../static/icons/update.svg" alt="">
          <span>检查更新</span>
        </div>
        <div class="item-right">
          <img class="item-icon" src="../../static/icons/right.svg" alt="">
        </div>
      </div>
      <div class="option-item">
        <div class="item-left">
          <img class="item-icon" src="../../static/icons/warring.svg" alt="">
          <span>关于</span>
        </div>
        <div class="item-right">
          <img class="item-icon" src="../../static/icons/right.svg" alt="">
        </div>
      </div>
    </div>
    <div class="sign-out">
      <a class="sign-out-button" href="javascript:void(0)">退出登录</a>
    </div>
  </view>
  <NavigatorBar selectNav="user" />
</template>

<script setup lang="ts">
import NavigatorBar from '../components/NavigatorBar.vue';
import { useUserInfoStore } from '../../stores/userInfo';
import { storeToRefs } from 'pinia';
import api from '../../api/index'

uni.hideTabBar()

const { userInfo } = storeToRefs(useUserInfoStore())

api.user.getUserInfo('1').then((res) => {
  userInfo.value = res.data
})
</script>

<style scoped>
.sign-out-button {
  background-color: gray;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  color: white;
  text-decoration: none;
}
.sign-out {
  position: absolute;
  width: calc(100% - 64px);
  height: 40px;
  bottom: 16px;
}
.item-icon {
  width: 24px;
  height: 24px;
  vertical-align: baseline;
  margin-right: 8px;
}
.option-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
  border-bottom: 1px solid #DEDEDE;
  padding: 16px 0;
}
.item-left {
  display: flex;
  align-items: center;
  justify-content: center;
}
.item-right {
  display: flex;
  align-items: center;
  justify-content: center;
}
.user-option-list {
  display: flex;
  flex-direction: column;
  align-items: space-between;
  padding: 0 32px;
  box-sizing: border-box;
  width: 100%;
}
.user-options-container {
  box-sizing: border-box;
  padding: 32px 8px;
  position: fixed;
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 80px;
  background-color: white;
  border-top-left-radius: 64px;
  border-top-right-radius: 64px;
}

.blur-background {
  width: 100%;
  height: 100%;
  filter: blur(12px);
  transform: scale(1.2);
  position: absolute;
  z-index: -1;
  
  background-size: contain;
}
.user-info-container {
  position: fixed;
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
}
.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}
.phone-number {
  margin-top: 4px;
  font-size: 20px;
  font-weight: bold;
}

</style>
