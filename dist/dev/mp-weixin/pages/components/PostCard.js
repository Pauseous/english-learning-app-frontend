"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "PostCard",
  props: {
    phonenumber: String,
    datetime: String,
    textContent: String,
    takeTime: String,
    amount: String,
    accuracyRating: String
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.phonenumber),
        b: common_vendor.t(__props.datetime),
        c: common_vendor.t(__props.textContent),
        d: common_assets._imports_0$2,
        e: common_vendor.t(__props.takeTime),
        f: common_assets._imports_1$3,
        g: common_vendor.t(__props.accuracyRating),
        h: common_assets._imports_2$3,
        i: common_vendor.t(__props.amount),
        j: common_assets._imports_3$3
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-df0918d8"]]);
wx.createComponent(Component);
