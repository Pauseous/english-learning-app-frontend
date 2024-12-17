"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_testInfo = require("../../stores/testInfo.js");
if (!Math) {
  (TopbarPlaceholder + StatusCard + NavigatorBar + Popup)();
}
const TopbarPlaceholder = () => "../components/TopbarPlaceholder.js";
const StatusCard = () => "../components/StatusCard.js";
const NavigatorBar = () => "../components/NavigatorBar.js";
const Popup = () => "../components/Popup.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    common_vendor.index.hideTabBar();
    const {
      wordAmount,
      answeredAmount,
      totalFailed,
      totalAgreed,
      questionIndex,
      choosedOption,
      testIsStart,
      testIsStop
    } = common_vendor.storeToRefs(stores_testInfo.useTestInfoStore());
    const { currentQuestion } = stores_testInfo.useTestInfoStore();
    const statusCard = common_vendor.ref();
    const popup = common_vendor.ref();
    let pickable = false;
    function pickOption(option) {
      if (!pickable) {
        return;
      }
      pickable = false;
      choosedOption.value = option;
      if (option != currentQuestion.answer) {
        totalFailed.value++;
      } else {
        totalAgreed.value++;
      }
      answeredAmount.value++;
      setTimeout(() => {
        if (questionIndex.value == wordAmount.value - 1) {
          endTest();
          return;
        }
        pickable = true;
        questionIndex.value++;
        choosedOption.value = null;
      }, 500);
    }
    function startTest() {
      pickable = true;
      if (testIsStart.value && !testIsStop.value) {
        stopTest();
        return;
      }
      testIsStop.value = false;
      testIsStart.value = true;
      statusCard.value.startTimer();
    }
    function stopTest() {
      pickable = false;
      testIsStop.value = true;
      statusCard.value.stopTimer();
    }
    function endTest() {
      popup.value.show([
        "测试结果",
        "题目数量: " + wordAmount.value,
        "正确率：" + Math.round(totalAgreed.value / wordAmount.value * 100) + "%",
        "用时：" + statusCard.value.getTimerText()
      ]);
      pickable = false;
      testIsStart.value = false;
      testIsStop.value = false;
      questionIndex.value = 0;
      answeredAmount.value = 0;
      totalFailed.value = 0;
      totalAgreed.value = 0;
      choosedOption.value = null;
      statusCard.value.resetTimer();
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.sr(statusCard, "83a5a03c-1", {
          "k": "statusCard"
        }),
        b: common_vendor.t(common_vendor.unref(currentQuestion).word),
        c: common_vendor.t(common_vendor.unref(currentQuestion).sequence),
        d: common_vendor.f(common_vendor.unref(currentQuestion).options, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.unref(choosedOption) != item ? 1 : "",
            c: common_vendor.unref(choosedOption) == item && common_vendor.unref(currentQuestion).answer == item ? 1 : "",
            d: common_vendor.unref(choosedOption) == item && common_vendor.unref(currentQuestion).answer != item ? 1 : "",
            e: common_vendor.o(($event) => pickOption(item), index),
            f: index
          };
        }),
        e: !common_vendor.unref(testIsStart) ? 1 : "",
        f: common_vendor.unref(testIsStart) ? 1 : "",
        g: common_vendor.o(($event) => endTest()),
        h: common_vendor.t(common_vendor.unref(testIsStart) && !common_vendor.unref(testIsStop) ? "暂停测试" : "开始测试"),
        i: common_vendor.o(($event) => startTest()),
        j: common_vendor.p({
          selectNav: "index"
        }),
        k: common_vendor.sr(popup, "83a5a03c-3", {
          "k": "popup"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-83a5a03c"]]);
wx.createPage(MiniProgramPage);
