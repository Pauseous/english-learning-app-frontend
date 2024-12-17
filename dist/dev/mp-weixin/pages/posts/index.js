"use strict";
const common_vendor = require("../../common/vendor.js");
const postsData = [
  {
    id: "0",
    phonenumber: "136****6666",
    datetime: "2024-03-09 14:16:43",
    textContent: "美好的一天，上帝不会就这样给你，需要你自己去创造",
    takeTime: "6秒",
    amount: "4",
    accuracyRating: "25%"
  },
  {
    id: "1",
    phonenumber: "138****7777",
    datetime: "2024-03-10 15:17:44",
    textContent: "每一天都是新的开始，充满希望和机遇",
    takeTime: "5秒",
    amount: "5",
    accuracyRating: "30%"
  },
  {
    id: "2",
    phonenumber: "139****8888",
    datetime: "2024-03-11 16:18:45",
    textContent: "努力工作，追求梦想，才能实现自己的价值",
    takeTime: "7秒",
    amount: "6",
    accuracyRating: "35%"
  },
  {
    id: "3",
    phonenumber: "137****9999",
    datetime: "2024-03-12 17:19:46",
    textContent: "珍惜每一天，感恩每一刻，才能拥有美好的生活",
    takeTime: "8秒",
    amount: "7",
    accuracyRating: "40%"
  },
  {
    id: "4",
    phonenumber: "135****0000",
    datetime: "2024-03-13 18:20:47",
    textContent: "勇敢面对困难，坚持到底，才能取得成功",
    takeTime: "9秒",
    amount: "8",
    accuracyRating: "45%"
  },
  {
    id: "5",
    phonenumber: "134****1111",
    datetime: "2024-03-14 19:21:48",
    textContent: "珍惜身边的人和事，才能拥有幸福的生活",
    takeTime: "10秒",
    amount: "9",
    accuracyRating: "50%"
  },
  {
    id: "6",
    phonenumber: "133****2222",
    datetime: "2024-03-15 20:22:49",
    textContent: "努力工作，追求梦想，才能实现自己的价值",
    takeTime: "11秒",
    amount: "10",
    accuracyRating: "55%"
  },
  {
    id: "7",
    phonenumber: "132****3333",
    datetime: "2024-03-16 21:23:50",
    textContent: "珍惜每一天，感恩每一刻，才能拥有美好的生活",
    takeTime: "12秒",
    amount: "11",
    accuracyRating: "60%"
  },
  {
    id: "8",
    phonenumber: "131****4444",
    datetime: "2024-03-17 22:24:51",
    textContent: "勇敢面对困难，坚持到底，才能取得成功",
    takeTime: "13秒",
    amount: "12",
    accuracyRating: "65%"
  },
  {
    id: "9",
    phonenumber: "130****5555",
    datetime: "2024-03-18 23:25:52",
    textContent: "珍惜身边的人和事，才能拥有幸福的生活",
    takeTime: "14秒",
    amount: "13",
    accuracyRating: "70%"
  }
];
if (!Math) {
  (PostCard + NavigatorBar)();
}
const NavigatorBar = () => "../components/NavigatorBar.js";
const PostCard = () => "../components/PostCard.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    common_vendor.index.hideTabBar();
    let windowInfo = common_vendor.index.getWindowInfo();
    let statusBarHeight = common_vendor.ref(windowInfo.statusBarHeight);
    let capsuleHeight = (common_vendor.index.getMenuButtonBoundingClientRect().top - windowInfo.statusBarHeight) * 2 + common_vendor.index.getMenuButtonBoundingClientRect().height;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(statusBarHeight) + "px",
        b: common_vendor.unref(capsuleHeight) + "px",
        c: common_vendor.f(common_vendor.unref(postsData), (post, k0, i0) => {
          return {
            a: post.id,
            b: "44922919-0-" + i0,
            c: common_vendor.p({
              phonenumber: post.phonenumber,
              datetime: post.datetime,
              textContent: post.textContent,
              takeTime: post.takeTime,
              amount: post.amount,
              accuracyRating: post.accuracyRating
            })
          };
        }),
        d: common_vendor.p({
          selectNav: "posts"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-44922919"]]);
wx.createPage(MiniProgramPage);
