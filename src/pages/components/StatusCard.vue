<script setup>
import { ref } from 'vue'
import { useTestInfoStore } from '../../stores/testInfo'
import { storeToRefs } from 'pinia'

const { testIsStart, progress, accuracy, totalTime } = storeToRefs(useTestInfoStore())
const { wordAmount } = useTestInfoStore()

const amountDropmenuIsShow = ref(false)
let startTime = null
let stopTime = null
let totalPauseTime = 0
let timer = null
function updateTimer() {
  const currentTime = Date.now()
  const diff = currentTime - startTime
  // 计算时、分、秒、毫秒
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  const milliseconds = diff % 1000

  // 格式化时间，不足两位的前面补0
  const formattedHours = String(hours).padStart(2, '0')
  const formattedMinutes = String(minutes).padStart(2, '0')
  const formattedSeconds = String(seconds).padStart(2, '0')
  const formattedMilliseconds = String(milliseconds).padStart(3, '0')

  // 更新显示的时间
  totalTime.value = `${formattedHours}:${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
}

function startTimer() {
  if (startTime == null) {
    startTime = Date.now()
  }
  if (stopTime != null) {
    totalPauseTime += Date.now() - stopTime
  }
  
  startTime += totalPauseTime
  totalPauseTime = 0
  timer = setInterval(updateTimer, 1)
}
function stopTimer() {
  clearInterval(timer)
  stopTime = Date.now()
}

function resetTimer() {
  clearInterval(timer)
  startTime = null
  stopTime = null
  timer = null
  totalPauseTime = 0
  totalTime.value = '00:00:00:000'
}

defineExpose({
  startTimer,
  stopTimer,
  resetTimer
});

</script>

<template>
  <div class="status-card">
    <div class="row-item">
      <div class=left>
        <div class="item-icon">
          <img class="icon" src="../../static/icons/8664789_circle_check_mark_accept_icon.svg">
        </div>
        <div class="item-name">
          <span>准确率</span>
        </div>
      </div>
      <div class=right>
        <div class="item-state">
          <span>{{ accuracy }}%</span>
        </div>
      </div>
    </div>
    <div class="row-item">
      <div class=left>
        <div class="item-icon">
          <img class="icon" src="../../static/icons/9044915_progress_bar_round_icon.svg">
        </div>
        <div class="item-name">
          <span>进度</span>
        </div>
      </div>
      <div class=right>
        <div class="item-state">
          <progress
            :percent="progress"
            :active="true"
            :active-mode="'forwards'"
            :duration="15"
            style="height:10px; width: 100px;"
            border-radius="16px"
            backgroundColor="#f0f0f0"
            stroke-width="5"
          />
        </div>
      </div>
    </div>
    <div class="row-item">
      <div class=left>
        <div class="item-icon">
          <img class="icon" src="../../static/icons/11121319_fi_rr_circle_n_icon.svg">
        </div>
        <div class="item-name">
          <span>个数</span>
        </div>
      </div>
      <div class=right>
        <div class="item-state">
          <p 
            class="word-amount"
            @click="!testIsStart && (amountDropmenuIsShow = amountDropmenuIsShow == true ? false : true)"
          >{{ wordAmount }}</p>
          <div class="amount-dropmenu"
            :class="{ 'show-amount-dropmenu': amountDropmenuIsShow && !testIsStart }"
          >
            <div v-for="(numbers, index) in [5, 10, 15, 20]" :key="index">
              <a
                class="amount-dropmenu-item"
                href="javascript:void(0)"
                @click="(wordAmount = numbers) && (amountDropmenuIsShow = false)"
              >{{ numbers }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row-item">
      <div class=left>
        <div class="item-icon">
          <img class="icon" src="../../static/icons/9004683_clock_time_date_event_icon.svg">
        </div>
        <div class="item-name">
          <span>用时</span>
        </div>
      </div>
      <div class=right>
        <div class="item-state">
          <span>{{ totalTime }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.amount-dropmenu {
  overflow: hidden;
  z-index: 1;
  display: flex;
  flex-direction: column;  
  width: 105px;
  height: 0;
  background-color: red;
  position: absolute;
  top: 100%;
  transition: height .3s;
  border-radius: 16px;
  background-color: #f0f0f0;
}
.show-amount-dropmenu {
  height: 120px;
}
.amount-dropmenu-item {
  line-height: 30px;
  text-align: center;
  display: block;
  color: black;
  text-decoration: none;
}
.word-amount {
  background-color: #f0f0f0;
  width: 105px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 16px;
  font-size: 1.2rem;
  font-weight: 600;
}
.status-card {
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: .6rem 2rem;
  box-sizing: border-box;
  background-color: white;
  margin: 0 1rem;
}

.row-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 2.4rem;
}
.left {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.item-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
}
.icon {
  width: 1.2rem;
  height: 1.2rem;
  vertical-align: baseline;
}
.item-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  margin-left: 1rem;
}

.right {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100px;
}
.item-state {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  position: relative;
}
</style>