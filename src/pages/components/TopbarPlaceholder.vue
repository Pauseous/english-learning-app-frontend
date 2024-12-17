<template>
  <div class="top-placeholder" :style="{ height: navHeight, paddingBottom: navPaddingBottom }"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let windowInfo = uni.getWindowInfo()

const navHeight = ref('54px')
const navPaddingBottom = ref('32px')

// #ifdef MP-WEIXIN
let capsuleHeight = (uni.getMenuButtonBoundingClientRect().top - windowInfo!.statusBarHeight!) * 2 + uni.getMenuButtonBoundingClientRect().height
navHeight.value = `${capsuleHeight + windowInfo!.statusBarHeight!}px`
navPaddingBottom.value = '1rem'
// #endif
</script>

<style>
.top-placeholder {
  width: 100%
}
</style>