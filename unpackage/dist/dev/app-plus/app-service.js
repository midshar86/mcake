if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _imports_0 = "/static/mcake-logo.png";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$3 = {};
  function _sfc_render$2(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 单个项目容器 "),
      (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList(6, (item, index) => {
          return vue.createElementVNode("view", { class: "container-item" }, [
            vue.createCommentVNode(" 图片容器 "),
            vue.createElementVNode("view", { class: "img-box" }, [
              vue.createElementVNode("img", {
                class: "item-img",
                src: _imports_0,
                alt: "cake"
              })
            ]),
            vue.createCommentVNode(" 信息容器 "),
            vue.createElementVNode("view", { class: "info" }, [
              vue.createElementVNode("view", { class: "left-info" }, [
                vue.createElementVNode("view", { class: "left-info-head" }, [
                  vue.createElementVNode("view", { class: "title fontsize-22" }, " 甜甜莓莓 "),
                  vue.createElementVNode("view", { class: "sign fontsize-16" }, " 热卖 ")
                ]),
                vue.createElementVNode("view", { class: "intro color-72 fontsize-14" }, " Gateau aux fraises et chocolat "),
                vue.createElementVNode("view", { class: "price fontsize-16" }, [
                  vue.createElementVNode("sub", null, "￥"),
                  vue.createTextVNode("218.00 ")
                ])
              ]),
              vue.createElementVNode("view", { class: "right-info" }, [
                vue.createElementVNode("view", { class: "iconfont color-89" }, "  ")
              ])
            ])
          ]);
        }),
        64
        /* STABLE_FRAGMENT */
      ))
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "C:/uniapp_learning/mCake/pages/index/index.vue"]]);
  const _sfc_main$2 = {};
  function _sfc_render$1(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 面包 ");
  }
  const PagesBreadBread = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "C:/uniapp_learning/mCake/pages/bread/bread.vue"]]);
  const _sfc_main$1 = {};
  function _sfc_render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 零食 ");
  }
  const PagesFoodsFoods = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "C:/uniapp_learning/mCake/pages/foods/foods.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/bread/bread", PagesBreadBread);
  __definePage("pages/foods/foods", PagesFoodsFoods);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/uniapp_learning/mCake/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
