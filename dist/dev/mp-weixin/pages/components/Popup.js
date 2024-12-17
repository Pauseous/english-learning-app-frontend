"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "Popup",
  setup(__props, { expose: __expose }) {
    const popupContent = common_vendor.ref([]);
    function show(resultInfoList) {
      popupContent.value = resultInfoList;
      isShow.value = true;
    }
    function close() {
      isShow.value = false;
    }
    const isShow = common_vendor.ref(false);
    __expose({
      show
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(popupContent.value, (content, index, i0) => {
          return {
            a: common_vendor.t(content),
            b: index
          };
        }),
        b: isShow.value ? 1 : "",
        c: common_vendor.o(($event) => close())
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-81573b6c"]]);
wx.createComponent(Component);
