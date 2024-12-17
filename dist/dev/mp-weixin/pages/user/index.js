"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const stores_userInfo = require("../../stores/userInfo.js");
if (!Math) {
  NavigatorBar();
}
const NavigatorBar = () => "../components/NavigatorBar.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    common_vendor.index.hideTabBar();
    const { userInfo } = common_vendor.storeToRefs(stores_userInfo.useUserInfoStore());
    common_vendor.axios.get(`http://127.0.0.1:4523/m1/5622523-5302091-default/user/1`).then((res) => {
      console.log(res.data);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(userInfo).avatar,
        b: common_vendor.t(common_vendor.unref(userInfo).name),
        c: common_assets._imports_3,
        d: common_assets._imports_1,
        e: common_assets._imports_2,
        f: common_assets._imports_1,
        g: common_assets._imports_3$1,
        h: common_assets._imports_1,
        i: common_vendor.p({
          selectNav: "user"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-642c545b"]]);
wx.createPage(MiniProgramPage);
