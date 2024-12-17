"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "TopbarPlaceholder",
  setup(__props) {
    let windowInfo = common_vendor.index.getWindowInfo();
    const navHeight = common_vendor.ref("54px");
    const navPaddingBottom = common_vendor.ref("0px");
    let capsuleHeight = (common_vendor.index.getMenuButtonBoundingClientRect().top - windowInfo.statusBarHeight) * 2 + common_vendor.index.getMenuButtonBoundingClientRect().height;
    navHeight.value = `${capsuleHeight + windowInfo.statusBarHeight}px`;
    navPaddingBottom.value = "1rem";
    return (_ctx, _cache) => {
      return {
        a: navHeight.value,
        b: navPaddingBottom.value
      };
    };
  }
});
wx.createComponent(_sfc_main);
