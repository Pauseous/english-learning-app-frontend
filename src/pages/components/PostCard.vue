<script setup>
const props = defineProps({
  phonenumber: String,
  datetime: String,
  textContent: String,
  takeTime: String,
  amount: String,
  accuracyRating: String
})
</script>

<template>
  <div class="card-container">
    <div class="card-header">
      <div class="header-left">
        <img class="avartar" src="https://picsum.photos/200" />
        <p class="phone-number">{{ phonenumber }}</p>
      </div>
      <div class="header-right">
        <p class="publish-time">{{ datetime }}</p>
      </div>
    </div>
    <div class="card-text">
      <p>{{ textContent }}</p>
    </div>
    <div class="result-card">
      <div class="result-list">
        <div class="result-item">
          <div class="result-left">
            <div class="item-icon">
              <img class="icon" src="../../static/icons/time.svg">
            </div>
            <div class="item-name">
              <span>用时</span>
            </div>
          </div>
          <div class="result-right">
            <p>{{ takeTime }}</p>
          </div>
        </div>
        <div class="result-item">
          <div class="result-left">
            <div class="item-icon">
              <img class="icon" src="../../static/icons/success.svg">
            </div>
            <div class="item-name">
              <span>准确率</span>
            </div>
          </div>
          <div class="result-right">
            <p>{{ accuracyRating }}</p>
          </div>
        </div>
        <div class="result-item">
          <div class="result-left">
            <div class="item-icon">
              <img class="icon" src="../../static/icons/layers.svg">
            </div>
            <div class="item-name">
              <span>个数</span>
            </div>
          </div>
          <div class="result-right">
            <p>{{ amount }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="like-button-container">
        <a class="like-button" href="#">
          <span style="display: inline-block; margin-bottom: 4px">2</span>
          <img src="../../static/icons/like.svg" style="width: 24px; height: 24px;" alt="">
        </a>
      </div>
  </div>
</template>

<style scoped>
.card-container {
  border: 2px solid #575757;
  box-shadow: 0px 0px 8px 2px rgba(179, 179, 179, 1);
  border-radius: 8px;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 16px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-left {
  display: flex;
  align-items: center;
}

.avartar {
  width: 48px;
  height: 48px;
  border-radius: 64px;
  margin-right: 4px;
}
.publish-time {
  color: #575757;
}

.phone-number {
  font-weight: bold;
}

.card-text {
  margin-top: 8px;
  font-size: 18px;
}

.result-card {
  height: 120px;
  width: 80%;
  margin-top: 6px;
  background-image: url(../../static/backgrounds/wallhaven-yxdrex.png);
  background-size: contain;
  border-radius: 16px;
  padding: 6px 12px;
}

.result-list {
  color: white;
  display: flex;
  flex-direction: column;
}

.result-item {
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
}
.result-left {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
}
.item-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
}
.icon {
  width: 1.4rem;
  height: 1.4rem;
  vertical-align: baseline;
  margin-right: 6px;
}
.result-right {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.like-button-container {
  display: block;
  position: absolute;
  right: 18px;
  bottom: 12px;
}
.like-button {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
