"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const stores_testInfo = require("../../stores/testInfo.js");
const _sfc_main = {
  __name: "StatusCard",
  setup(__props, { expose: __expose }) {
    common_vendor.ref(0);
    const { testIsStart, progress, accuracy } = common_vendor.storeToRefs(stores_testInfo.useTestInfoStore());
    const { wordAmount } = stores_testInfo.useTestInfoStore();
    const amountDropmenuIsShow = common_vendor.ref(false);
    const totalTime = common_vendor.ref("00:00:00:000");
    let startTime = null;
    let stopTime = null;
    let totalPauseTime = 0;
    let timer = null;
    function updateTimer() {
      const currentTime = Date.now();
      const diff = currentTime - startTime;
      const hours = Math.floor(diff / (1e3 * 60 * 60));
      const minutes = Math.floor(diff % (1e3 * 60 * 60) / (1e3 * 60));
      const seconds = Math.floor(diff % (1e3 * 60) / 1e3);
      const milliseconds = diff % 1e3;
      const formattedHours = String(hours).padStart(2, "0");
      const formattedMinutes = String(minutes).padStart(2, "0");
      const formattedSeconds = String(seconds).padStart(2, "0");
      const formattedMilliseconds = String(milliseconds).padStart(3, "0");
      totalTime.value = `${formattedHours}:${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
    }
    function startTimer() {
      if (startTime == null) {
        startTime = Date.now();
      }
      if (stopTime != null) {
        totalPauseTime += Date.now() - stopTime;
      }
      startTime += totalPauseTime;
      totalPauseTime = 0;
      timer = setInterval(updateTimer, 1);
    }
    function stopTimer() {
      clearInterval(timer);
      stopTime = Date.now();
    }
    function resetTimer() {
      clearInterval(timer);
      startTime = null;
      stopTime = null;
      timer = null;
      totalPauseTime = 0;
      totalTime.value = "00:00:00:000";
    }
    function getTimerText() {
      return totalTime.value;
    }
    __expose({
      startTimer,
      stopTimer,
      resetTimer,
      getTimerText
    });
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.t(common_vendor.unref(accuracy)),
        c: common_assets._imports_1$1,
        d: common_vendor.unref(progress),
        e: common_assets._imports_2$1,
        f: common_vendor.t(common_vendor.unref(wordAmount)),
        g: common_vendor.o(($event) => !common_vendor.unref(testIsStart) && (amountDropmenuIsShow.value = amountDropmenuIsShow.value == true ? false : true)),
        h: common_vendor.f([5, 10, 15, 20], (numbers, index, i0) => {
          return {
            a: common_vendor.t(numbers),
            b: common_vendor.o(($event) => (wordAmount.value = numbers) && (amountDropmenuIsShow.value = false), index),
            c: index
          };
        }),
        i: amountDropmenuIsShow.value && !common_vendor.unref(testIsStart) ? 1 : "",
        j: common_assets._imports_3,
        k: common_vendor.t(totalTime.value)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-55d694d4"]]);
wx.createComponent(Component);
