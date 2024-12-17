<script setup lang="ts">
import NavigatorBar from '../components/NavigatorBar.vue'
import { ref } from 'vue'
import PostCard from '../components/PostCard.vue';
import postsData from '../../static/posts_data.json'

uni.hideTabBar()

// #ifdef MP-WEIXIN
let windowInfo = uni.getWindowInfo()
let statusBarHeight = ref(windowInfo!.statusBarHeight)
let capsuleHeight = ((uni.getMenuButtonBoundingClientRect().top - windowInfo!.statusBarHeight!) * 2 + uni.getMenuButtonBoundingClientRect().height)
// #endif
</script>

<template>
	<view class="content">
    <div class="posts-title" :style="{ paddingTop: statusBarHeight + 'px', height: capsuleHeight + 'px' }">
      <p class="title-text">英语打卡圈</p>
    </div>
		<div class="posts-container">
      <PostCard
        v-for="post in postsData"
        :key="post.id"
        :phonenumber="post.phonenumber"
        :datetime="post.datetime"
        :textContent="post.textContent"
        :takeTime="post.takeTime"
        :amount="post.amount"
        :accuracyRating="post.accuracyRating"
        style="width: 100%;"
      />
    </div>
	</view>
  <NavigatorBar selectNav="posts" />
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: calc(100% - 80px);
  position: fixed;
}
.posts-title {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  width: calc(100% - 2rem);
  padding-bottom: .6rem;
  margin-top: 6px;
}
.title-text {
  font-size: 20px;
}
.posts-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: .6rem;
  overflow-y: scroll;
  padding: 0 1rem;
  box-sizing: border-box;
}
</style>
