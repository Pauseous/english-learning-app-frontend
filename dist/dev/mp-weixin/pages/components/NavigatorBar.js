"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "NavigatorBar",
  props: ["selectNav"],
  setup(__props) {
    function selectItem(index) {
      switch (index) {
        case 0:
          common_vendor.index.switchTab({ url: "/pages/index/index" });
          break;
        case 1:
          common_vendor.index.switchTab({ url: "/pages/posts/index" });
          break;
        case 2:
          common_vendor.index.switchTab({ url: "/pages/user/index" });
          break;
      }
    }
    const props = __props;
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: props.selectNav != "index"
      }, props.selectNav != "index" ? {
        b: common_assets._imports_0$1
      } : {}, {
        c: props.selectNav == "index"
      }, props.selectNav == "index" ? {
        d: common_assets._imports_1$2
      } : {}, {
        e: props.selectNav != "index" ? 1 : "",
        f: common_vendor.o(($event) => selectItem(0)),
        g: props.selectNav != "posts"
      }, props.selectNav != "posts" ? {
        h: common_assets._imports_2$2
      } : {}, {
        i: props.selectNav == "posts"
      }, props.selectNav == "posts" ? {
        j: common_assets._imports_3$2
      } : {}, {
        k: props.selectNav != "posts" ? 1 : "",
        l: common_vendor.o(($event) => selectItem(1)),
        m: props.selectNav != "user"
      }, props.selectNav != "user" ? {
        n: common_assets._imports_4
      } : {}, {
        o: props.selectNav == "user"
      }, props.selectNav == "user" ? {
        p: common_assets._imports_5
      } : {}, {
        q: props.selectNav != "user" ? 1 : "",
        r: common_vendor.o(($event) => selectItem(2))
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b64a64df"]]);
wx.createComponent(Component);
