// backend/dashboard/views/pages/PageTemplate.vue
var __vue_script__ = {
  name: "PageTemplate",
  props: {
    noHeader: {
      type: Boolean,
      default: false
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "c-page" }, [
    !_vm.noHeader ? _c("header", { staticClass: "c-page-header" }, [
      _vm._t("header"),
      _vm.$slots.title ? _c("h2", { staticClass: "is-title-2" }, [_vm._t("title")], 2) : _vm._e()
    ], 2) : _vm._e(),
    _c("main", { staticClass: "c-page-main" }, [_vm._t("default")], 2)
  ]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject)
    return;
  inject("data-v-355666d7_0", { source: "/* NOTE: <variable-name> : (<light-theme-value>, <dark-theme-value>) */\n/* stylelint-disable */\n/* stylelint-enable */\n[data-v-355666d7]:root {\n  --button-primary-bg-color: #1c1c1c;\n  --button-primary-text-color: #fff;\n  --button-outline-bg-color: rgba(0, 0, 0, 0);\n  --button-outline-border-color: rgba(0, 0, 0, 0.4);\n  --button-outline-text-color: #1c1c1c;\n  --button-box-shadow: 0 0 16px rgba(219, 219, 219, 0.5);\n  --styled-input-border-color: rgba(0, 0, 0, 0.1);\n  --styled-input-border-color_focus: rgba(0, 0, 0, 0.4);\n  --styled-input-background-color: #fff;\n  --styled-input-placeholder-color: rgba(0, 0, 0, 0.275);\n  --styled-input-label-color: #9747ff;\n  --radio-outer-border-color: rgba(0, 0, 0, 0.2);\n  --radio-outer-border-color_active: #1C1C1C;\n  --radio-inner-bg-color: #1C1C1C;\n  --dropdown-bg-color: #FFFFFF;\n  --dropdown-active-bg-color: #F7F9FB;\n  --dropdown-box-shadow: 0 0 16px rgba(219, 219, 219, 0.5);\n  --summary-list-bg-color: #fff;\n  --custom-pre-bg-color: #f2f2f2;\n  --custom-pre-text-color: #1c1c1c;\n  --custom-pre-border-color: rgba(0, 0, 0, 0.1);\n  --modal-bg-color: #fff;\n  --stat-card-icon-color: var(--text_1);\n  --info-card-bg-color: #fff;\n  --info-card-feature-color: #1c1c1c;\n  --info-card-content-color: rgba(0, 0, 0, 0.5);\n  --tooltip-bg-color: rgba(28, 28, 28, 0.875);\n  --tooltip-text-color: #fff;\n  --skeleton-gradient: linear-gradient(110deg, rgba(0, 0, 0, 0.05) 12%, rgba(60, 60, 60, 0.125) 25%, rgba(0, 0, 0, 0.05) 42%);\n}\n:root[data-theme=dark][data-v-355666d7] {\n  --button-primary-bg-color: #b1e3ff;\n  --button-primary-text-color: #1c1c1c;\n  --button-outline-bg-color: rgba(0, 0, 0, 0);\n  --button-outline-border-color: #414141;\n  --button-outline-text-color: #fff;\n  --button-box-shadow: 0 0 12px rgba(132, 132, 132, 0.35);\n  --styled-input-border-color: #414141;\n  --styled-input-border-color_focus: #414141;\n  --styled-input-background-color: #2a2a2a;\n  --styled-input-placeholder-color: rgba(255, 255, 255, 0.325);\n  --styled-input-label-color: #b1e3ff;\n  --radio-outer-border-color: rgba(255, 255, 255, 0.275);\n  --radio-outer-border-color_active: #b1e3ff;\n  --radio-inner-bg-color: #b1e3ff;\n  --dropdown-bg-color: #1c1c1c;\n  --dropdown-active-bg-color: #2a2a2a;\n  --dropdown-box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  --summary-list-bg-color: #2a2a2a;\n  --custom-pre-bg-color: #1c1c1c;\n  --custom-pre-text-color: #f2f2f2;\n  --custom-pre-border-color: #414141;\n  --modal-bg-color: #2a2a2a;\n  --stat-card-icon-color: var(--text_black);\n  --info-card-bg-color: rgba(255, 255, 255, 0.05);\n  --info-card-feature-color: #b1e3ff;\n  --info-card-content-color: #fff;\n  --tooltip-bg-color: rgba(242, 244, 247, 0.925);\n  --tooltip-text-color: #1c1c1c;\n  --skeleton-gradient: linear-gradient(110deg, rgba(255, 255, 255, 0.1) 8%, rgba(255, 255, 255, 0.14) 29%, rgba(255, 255, 255, 0.1) 47%);\n}\n.c-page[data-v-355666d7] {\n  padding: 1.75rem 1rem;\n  width: 100%;\n}\n@media screen and (min-width: 769px), print {\n.c-page[data-v-355666d7] {\n    padding: 1.75rem 2rem;\n}\n}\n.c-page-main[data-v-355666d7] {\n  max-width: 96rem;\n}\n.c-page-header[data-v-355666d7] {\n  margin-bottom: 2rem;\n  padding-right: 1rem;\n}\n\n/*# sourceMappingURL=PageTemplate.vue.map */", map: { "version": 3, "sources": ["backend/dashboard/views/pages/PageTemplate.vue", "PageTemplate.vue"], "names": [], "mappings": "AAwBA,sEAAA;AAEA,sBAAA;ACxBA,qBAAqB;AACrB;EACE,kCAAkC;EAClC,iCAAiC;EACjC,2CAA2C;EAC3C,iDAAiD;EACjD,oCAAoC;EACpC,sDAAsD;EACtD,+CAA+C;EAC/C,qDAAqD;EACrD,qCAAqC;EACrC,sDAAsD;EACtD,mCAAmC;EACnC,8CAA8C;EAC9C,0CAA0C;EAC1C,+BAA+B;EAC/B,4BAA4B;EAC5B,mCAAmC;EACnC,wDAAwD;EACxD,6BAA6B;EAC7B,8BAA8B;EAC9B,gCAAgC;EAChC,6CAA6C;EAC7C,sBAAsB;EACtB,qCAAqC;EACrC,0BAA0B;EAC1B,kCAAkC;EAClC,6CAA6C;EAC7C,2CAA2C;EAC3C,0BAA0B;EAC1B,2HAA2H;AAC7H;AAEA;EACE,kCAAkC;EAClC,oCAAoC;EACpC,2CAA2C;EAC3C,sCAAsC;EACtC,iCAAiC;EACjC,uDAAuD;EACvD,oCAAoC;EACpC,0CAA0C;EAC1C,wCAAwC;EACxC,4DAA4D;EAC5D,mCAAmC;EACnC,sDAAsD;EACtD,0CAA0C;EAC1C,+BAA+B;EAC/B,4BAA4B;EAC5B,mCAAmC;EACnC,+CAA+C;EAC/C,gCAAgC;EAChC,8BAA8B;EAC9B,gCAAgC;EAChC,kCAAkC;EAClC,yBAAyB;EACzB,yCAAyC;EACzC,+CAA+C;EAC/C,kCAAkC;EAClC,+BAA+B;EAC/B,8CAA8C;EAC9C,6BAA6B;EAC7B,sIAAsI;AACxI;ADvCA;EACA,qBAAA;EACA,WAAA;AC0CA;AACA;AD7CA;IAKA,qBAAA;AC2CE;AACF;ADzCA;EACA,gBAAA;AC2CA;ADvCA;EACA,mBAAA;EACA,mBAAA;AC0CA;;AAEA,2CAA2C", "file": "PageTemplate.vue", "sourcesContent": [`<template lang="pug">
.c-page
  header.c-page-header(v-if='!noHeader')
    slot(name='header')
    h2.is-title-2(v-if='$slots.title')
      slot(name='title')

  main.c-page-main
    slot
</template>

<script>
export default {
  name: 'PageTemplate',
  props: {
    noHeader: {
      type: Boolean,
      default: false
    }
  }
}
<\/script>

<style lang="scss" scoped>
@import "../../../../backend/dashboard/assets/style/_variables.scss";

.c-page {
  padding: 1.75rem 1rem;
  width: 100%;

  @include tablet {
    padding: 1.75rem 2rem;
  }

  &-main {
    max-width: 96rem;
  }
}

.c-page-header {
  margin-bottom: 2rem;
  padding-right: 1rem;
}
</style>
`, "/* NOTE: <variable-name> : (<light-theme-value>, <dark-theme-value>) */\n/* stylelint-disable */\n/* stylelint-enable */\n:root {\n  --button-primary-bg-color: #1c1c1c;\n  --button-primary-text-color: #fff;\n  --button-outline-bg-color: rgba(0, 0, 0, 0);\n  --button-outline-border-color: rgba(0, 0, 0, 0.4);\n  --button-outline-text-color: #1c1c1c;\n  --button-box-shadow: 0 0 16px rgba(219, 219, 219, 0.5);\n  --styled-input-border-color: rgba(0, 0, 0, 0.1);\n  --styled-input-border-color_focus: rgba(0, 0, 0, 0.4);\n  --styled-input-background-color: #fff;\n  --styled-input-placeholder-color: rgba(0, 0, 0, 0.275);\n  --styled-input-label-color: #9747ff;\n  --radio-outer-border-color: rgba(0, 0, 0, 0.2);\n  --radio-outer-border-color_active: #1C1C1C;\n  --radio-inner-bg-color: #1C1C1C;\n  --dropdown-bg-color: #FFFFFF;\n  --dropdown-active-bg-color: #F7F9FB;\n  --dropdown-box-shadow: 0 0 16px rgba(219, 219, 219, 0.5);\n  --summary-list-bg-color: #fff;\n  --custom-pre-bg-color: #f2f2f2;\n  --custom-pre-text-color: #1c1c1c;\n  --custom-pre-border-color: rgba(0, 0, 0, 0.1);\n  --modal-bg-color: #fff;\n  --stat-card-icon-color: var(--text_1);\n  --info-card-bg-color: #fff;\n  --info-card-feature-color: #1c1c1c;\n  --info-card-content-color: rgba(0, 0, 0, 0.5);\n  --tooltip-bg-color: rgba(28, 28, 28, 0.875);\n  --tooltip-text-color: #fff;\n  --skeleton-gradient: linear-gradient(110deg, rgba(0, 0, 0, 0.05) 12%, rgba(60, 60, 60, 0.125) 25%, rgba(0, 0, 0, 0.05) 42%);\n}\n\n:root[data-theme=dark] {\n  --button-primary-bg-color: #b1e3ff;\n  --button-primary-text-color: #1c1c1c;\n  --button-outline-bg-color: rgba(0, 0, 0, 0);\n  --button-outline-border-color: #414141;\n  --button-outline-text-color: #fff;\n  --button-box-shadow: 0 0 12px rgba(132, 132, 132, 0.35);\n  --styled-input-border-color: #414141;\n  --styled-input-border-color_focus: #414141;\n  --styled-input-background-color: #2a2a2a;\n  --styled-input-placeholder-color: rgba(255, 255, 255, 0.325);\n  --styled-input-label-color: #b1e3ff;\n  --radio-outer-border-color: rgba(255, 255, 255, 0.275);\n  --radio-outer-border-color_active: #b1e3ff;\n  --radio-inner-bg-color: #b1e3ff;\n  --dropdown-bg-color: #1c1c1c;\n  --dropdown-active-bg-color: #2a2a2a;\n  --dropdown-box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  --summary-list-bg-color: #2a2a2a;\n  --custom-pre-bg-color: #1c1c1c;\n  --custom-pre-text-color: #f2f2f2;\n  --custom-pre-border-color: #414141;\n  --modal-bg-color: #2a2a2a;\n  --stat-card-icon-color: var(--text_black);\n  --info-card-bg-color: rgba(255, 255, 255, 0.05);\n  --info-card-feature-color: #b1e3ff;\n  --info-card-content-color: #fff;\n  --tooltip-bg-color: rgba(242, 244, 247, 0.925);\n  --tooltip-text-color: #1c1c1c;\n  --skeleton-gradient: linear-gradient(110deg, rgba(255, 255, 255, 0.1) 8%, rgba(255, 255, 255, 0.14) 29%, rgba(255, 255, 255, 0.1) 47%);\n}\n\n.c-page {\n  padding: 1.75rem 1rem;\n  width: 100%;\n}\n@media screen and (min-width: 769px), print {\n  .c-page {\n    padding: 1.75rem 2rem;\n  }\n}\n.c-page-main {\n  max-width: 96rem;\n}\n\n.c-page-header {\n  margin-bottom: 2rem;\n  padding-right: 1rem;\n}\n\n/*# sourceMappingURL=PageTemplate.vue.map */"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-355666d7";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang="pug">
.c-page
  header.c-page-header(v-if='!noHeader')
    slot(name='header')
    h2.is-title-2(v-if='$slots.title')
      slot(name='title')

  main.c-page-main
    slot
</template>

<script>
export default {
  name: 'PageTemplate',
  props: {
    noHeader: {
      type: Boolean,
      default: false
    }
  }
}
<\/script>

<style lang="scss" scoped>
@import "../../../../backend/dashboard/assets/style/_variables.scss";

.c-page {
  padding: 1.75rem 1rem;
  width: 100%;

  @include tablet {
    padding: 1.75rem 2rem;
  }

  &-main {
    max-width: 96rem;
  }
}

.c-page-header {
  margin-bottom: 2rem;
  padding-right: 1rem;
}
</style>
`;
  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional)
      component.functional = true;
  }
  component._scopeId = scope;
  if (true) {
    let hook;
    if (false) {
      hook = function(context) {
        context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
        if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
          context = __VUE_SSR_CONTEXT__;
        }
        if (style) {
          style.call(this, createInjectorSSR(context));
        }
        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      };
      component._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function(context) {
        style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
      } : function(context) {
        style.call(this, createInjector(context));
      };
    }
    if (hook !== void 0) {
      if (component.functional) {
        const originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }
  return component;
}
function __vue_create_injector__() {
  const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
  const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
      return;
    const group = isOldIE ? css.media || "default" : id;
    const style = styles[group] || (styles[group] = { ids: [], parts: [], element: void 0 });
    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;
      style.ids.push(id);
      if (false) {
        code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
        code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
      }
      if (isOldIE) {
        style.element = style.element || document.querySelector("style[data-group=" + group + "]");
      }
      if (!style.element) {
        const head = document.head || document.getElementsByTagName("head")[0];
        const el = style.element = document.createElement("style");
        el.type = "text/css";
        if (css.media)
          el.setAttribute("media", css.media);
        if (isOldIE) {
          el.setAttribute("data-group", group);
          el.setAttribute("data-next-index", "0");
        }
        head.appendChild(el);
      }
      if (isOldIE) {
        index = parseInt(style.element.getAttribute("data-next-index"));
        style.element.setAttribute("data-next-index", index + 1);
      }
      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index])
          style.element.removeChild(nodes[index]);
        if (nodes.length)
          style.element.insertBefore(textNode, nodes[index]);
        else
          style.element.appendChild(textNode);
      }
    }
  };
}
var __vue_component__ = /* @__PURE__ */ __vue_normalize__({ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, __vue_create_injector__, void 0, void 0);
var PageTemplate_default = __vue_component__;

export {
  PageTemplate_default
};
//# sourceMappingURL=chunk-KL5YS2D6-cached.js.map
