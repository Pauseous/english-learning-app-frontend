<script setup lang="ts">
import { ref } from 'vue'

function selectItem(index: number) {
  switch(index) {
    case 0:
      uni.switchTab({ url: '/pages/index/index' })
      break
    case 1:
      uni.switchTab({ url: '/pages/posts/index' })
      break
    case 2:
      uni.switchTab({ url: '/pages/user/index' })
      break
  }
}

const props = defineProps(['selectNav'])

</script>

<template>
  <div class="nav-container">
    <div class="nav-item" @click="selectItem(0)">
      <img class="nav-icon" v-if="props.selectNav != 'index'" src="../../static/icons/pencil.svg">
      <img class="nav-icon" v-if="props.selectNav == 'index'" src="../../static/icons/pencil-selected.svg">
      <p class="nav-text" :class="{ 'gray-text': props.selectNav != 'index' }">答题</p>
    </div>
    <div class="nav-item" @click="selectItem(1)">
      <img class="nav-icon" v-if="props.selectNav != 'posts'" src="../../static/icons/torus.svg">
      <img class="nav-icon" v-if="props.selectNav == 'posts'" src="../../static/icons/torus-selected.svg">
      <p class="nav-text" :class="{ 'gray-text': props.selectNav != 'posts' }">圈子</p>
    </div>
    <div class="nav-item" @click="selectItem(2)">
      <img class="nav-icon" v-if="props.selectNav != 'user'" src="../../static/icons/user.svg">
      <img class="nav-icon" v-if="props.selectNav == 'user'" src="../../static/icons/user-selected.svg">
      <p class="nav-text" :class="{ 'gray-text': props.selectNav != 'user' }">我的</p>
    </div>
  </div>
</template>

<style scoped>
.nav-container {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 10px 20px;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  background-color: white;
}
.nav-item {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
}
.nav-icon {
  width: 24px;
  height: 24px;
}
.nav-text {
  font-size: 12px;
  margin-top: 4px;
}
.hide {
  display: none;
}
.gray-text {
  color: #bfbfbf;
}
</style>
