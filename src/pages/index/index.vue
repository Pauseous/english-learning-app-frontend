<template>
  <view ref="content" class="content">
		<TopbarPlaceholder />
    <StatusCard
      ref="statusCard"

    />
    <view class="question-container">
      <view class="word">
        <p>{{ currentQuestion.word }}</p>
      </view>
      <view class="sentence">
        <p>{{ currentQuestion.sequence }}</p>
      </view>
      <view class="option-list">
        <view
          class="option-item"
          v-for="(item, index) in currentQuestion.options" :key="index"
        >
          <a
            class="option-button"
            :class="{ 
              'normal-option-button': choosedOption != item,
              'agreed-option-button': choosedOption == item && currentQuestion.answer == item,
              'failed-option-button': choosedOption == item && currentQuestion.answer != item,
            }"
            href="javascript:void(0)"
            @click="pickOption(item)"
          >{{ item }}</a>
        </view>
      </view>
    </view>
    <view class="control-button-container">
      <a
        class="control-button"
        :class="{ 'no-selected-button': !testIsStart, 'selected-button': testIsStart }"
        href="javascript:void(0)"
        @click="endTest()"
      >结束测试</a>
      <a 
        class="control-button selected-button"
        href="javascript:void(0)"
        @click="startTest()"
      >{{ testIsStart && !testIsStop ? '暂停测试' :'开始测试' }}</a>
    </view>
	</view>
  <NavigatorBar selectNav="index" />
  <Popup ref="popup"/>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import TopbarPlaceholder from '../components/TopbarPlaceholder.vue'
import StatusCard from '../components/StatusCard.vue'
import NavigatorBar from '../components/NavigatorBar.vue'
import Popup from '../components/Popup.vue'
import questionsData from "../../static/questions_data.json"
import { useTestInfoStore } from '../../stores/testInfo'
import api from '../../api/index'

uni.hideTabBar()

const {
  wordAmount,
  answeredAmount,
  totalFailed,
  totalAgreed,
  questionIndex,
  choosedOption,
  testIsStart,
  testIsStop,
  currentQuestion
} = storeToRefs(useTestInfoStore())

const statusCard = ref()
const popup = ref()

let pickable = false

function pickOption(option: string) {
  if (!pickable) {
    return
  }
  pickable = false
  choosedOption.value = option
  if (option != currentQuestion.value.answer) {
    totalFailed.value++
  } else {
    totalAgreed.value++
  }

  answeredAmount.value++

  setTimeout(() => {
    if (questionIndex.value == wordAmount.value - 1) {
      endTest()
      return
    }
    pickable = true
    questionIndex.value++
    choosedOption.value = null
  }, 500)
}

function startTest() {
  pickable = true
  if (testIsStart.value && !testIsStop.value) {
    stopTest()
    return
  }

  testIsStop.value = false
  testIsStart.value = true
  statusCard.value.startTimer()
}

function stopTest() {
  pickable = false
  testIsStop.value = true
  statusCard.value.stopTimer()
}

function endTest() {
  popup.value.show([
    '测试结果',
    '题目数量: ' + wordAmount.value,
    '正确率：' + Math.round(totalAgreed.value / wordAmount.value * 100) + '%',
    '用时：' + statusCard.value.getTimerText()
  ])
  pickable = false
  testIsStart.value = false
  testIsStop.value = false
  questionIndex.value = 0
  answeredAmount.value = 0
  totalFailed.value = 0
  totalAgreed.value = 0
  choosedOption.value = null
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

.word {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 3rem 0 1rem 0;
}

.sentence {
  color: gray;
  text-align: center;
}

.option-list {
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0 0;
}
.option-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0.5rem 0 0 0;
  text-align: center;
}

.option-button {
  width: 60%;
  border-radius: 16px;
  height: 3.6rem;
  line-height: 3.6rem;
  font-weight: 600;
  transition: background-color 0.2s;
  color: black;
  text-decoration: none;
}
.normal-option-button {
  background-color: white;
}
.agreed-option-button {
  background-color: rgb(112, 223, 112);
}
.failed-option-button {
  background-color: rgb(247, 95, 95);
}
.question-container {
  display: flex;
  flex-direction: column;
  
}
.control-button-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 3rem 0 0 0;
  padding: 0 20%;
}

.control-button {
  width: 30%;
  border-radius: 64px;
  font-size: 1rem;
  padding: .6rem 1rem;
  text-align: center;
  text-decoration: none;
}

.selected-button {
  background-color: #0F0F0F;
  color: white
}

.no-selected-button {
  color: #8A928D;
  border: 1px solid #8A928D;
}


</style>
