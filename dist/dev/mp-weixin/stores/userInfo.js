"use strict";
const common_vendor = require("../common/vendor.js");
const useUserInfoStore = common_vendor.defineStore("userInfo", () => {
  const userInfo = common_vendor.ref({
    name: "177****6512",
    avatar: "https://picsum.photos/200"
  });
  return {
    userInfo
  };
});
exports.useUserInfoStore = useUserInfoStore;
