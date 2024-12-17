<template>
  <view ref="content" class="content">
		<TopbarPlaceholder />
    <StatusCard
      ref="statusCard"
    />
    <AnswerArea
      @startTest="startTest()"
      @stopTest="stopTest()"
      @endTest="endTest()"
    />
	</view>
  <NavigatorBar selectNav="index" />
  <Popup ref="popup" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import TopbarPlaceholder from '../components/TopbarPlaceholder.vue'
import StatusCard from '../components/StatusCard.vue'
import NavigatorBar from '../components/NavigatorBar.vue'
import Popup from '../components/Popup.vue'
import { useTestInfoStore } from '../../stores/testInfo'
import AnswerArea from '../components/AnswerArea.vue'

uni.hideTabBar()

const statusCard = ref()
const popup = ref()

const { wordAmount, totalAgreed, totalTime } = storeToRefs(useTestInfoStore())

function startTest() {
  statusCard.value.startTimer()
}

function stopTest() {
  statusCard.value.stopTimer()
}

function endTest() {
  popup.value.show([
    '测试结果',
    '题目数量: ' + wordAmount.value,
    '正确率：' + Math.round(totalAgreed.value / wordAmount.value * 100) + '%',
    '用时：' + totalTime.value
  ])

  statusCard.value.resetTimer()
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: calc(100% - 80px);
  padding-bottom: 3rem;
  box-sizing: border-box;
  overflow-y: scroll;
  background: linear-gradient(135deg, rgba(216,253,209,1) 0%, rgba(231,248,240,1) 24%, rgba(214,254,243,1) 71%, rgba(231,248,240,1) 100%);
}

.topbar-placeholder {
  background-color: red;
  width: 100%;
}
</style>
