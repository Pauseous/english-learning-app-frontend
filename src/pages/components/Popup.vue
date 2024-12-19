<template>
  <div id="popup" class="popup" :class="{ pop: isShow }" @click="close()">
    <div class="popup-content">
      <div v-for="(content, index) in popupContent" :key="index" class="info">
        <p class="info">{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const popupContent = ref<Array<string>>([])

function show(resultInfoList: Array<string>) {
  popupContent.value = resultInfoList
  isShow.value = true
}

function close() {
  isShow.value = false
}

const isShow = ref(false)

defineExpose({
  show
})

</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: none;
  justify-content: center;
  align-items: center;
}
.pop {
  display: flex;
}
.popup-content {
  padding: .6rem 1rem;
  background-color: white;
}
.info {
  color: #747474;
  line-height: 30px;
}
</style>