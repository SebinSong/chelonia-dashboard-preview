import {
  CLOSE_MODAL
} from "./chunk-VJUVTH6H-cached.js";
import {
  L,
  module_default
} from "./chunk-LWWMWDO5-cached.js";
import "./chunk-ANXCCFQT-cached.js";

// backend/dashboard/views/containers/modal/ModalTemplate.vue
var __vue_script__ = {
  name: "ModalTemplate",
  props: {
    title: String,
    icon: {
      type: String,
      required: false,
      default: "info"
    }
  },
  data() {
    return {
      isActive: true
    };
  },
  methods: {
    close() {
      this.isActive = false;
    },
    onLeaveEnd() {
      module_default("okTurtles.events/emit", CLOSE_MODAL);
    }
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    directives: [{ name: "focus", rawName: "v-focus" }],
    staticClass: "c-modal",
    attrs: { role: "dialog", tabindex: "-1" }
  }, [
    _c("transition", { attrs: { name: "fade", appear: "appear" } }, [
      _vm.isActive ? _c("div", {
        staticClass: "c-modal-background",
        on: { click: _vm.close }
      }) : _vm._e()
    ]),
    _c("transition", {
      attrs: { name: "slide-left", appear: "appear" },
      on: { "after-leave": _vm.onLeaveEnd }
    }, [
      _vm.isActive ? _c("div", { staticClass: "c-modal-content" }, [
        _c("header", { staticClass: "c-modal-header" }, [
          _vm.title ? [
            _c("i", { class: "icon-" + _vm.icon + " c-icon" }),
            _c("h1", { staticClass: "is-title-2 c-title" }, [
              _vm._v(_vm._s(_vm.title))
            ])
          ] : _vm._e(),
          _c("button", {
            staticClass: "is-icon c-close-btn",
            on: { click: _vm.close }
          }, [_c("i", { staticClass: "icon-close" })])
        ], 2),
        _c("section", { staticClass: "c-modal-body" }, [_vm._t("default")], 2),
        _c("footer", { staticClass: "c-modal-footer" }, [
          _c("i18n", {
            staticClass: "has-blue-background c-dismiss-btn",
            attrs: { tag: "button" },
            on: { click: _vm.close }
          }, [_vm._v("Close")])
        ], 1)
      ]) : _vm._e()
    ])
  ], 1);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject)
    return;
  inject("data-v-7dabe97b_0", { source: "/* NOTE: <variable-name> : (<light-theme-value>, <dark-theme-value>) */\n/* stylelint-disable */\n/* stylelint-enable */\n[data-v-7dabe97b]:root {\n  --button-primary-bg-color: #1c1c1c;\n  --button-primary-text-color: #fff;\n  --button-outline-bg-color: rgba(0, 0, 0, 0);\n  --button-outline-border-color: rgba(0, 0, 0, 0.4);\n  --button-outline-text-color: #1c1c1c;\n  --button-box-shadow: 0 0 16px rgba(219, 219, 219, 0.5);\n  --styled-input-border-color: rgba(0, 0, 0, 0.1);\n  --styled-input-border-color_focus: rgba(0, 0, 0, 0.4);\n  --styled-input-background-color: #fff;\n  --styled-input-placeholder-color: rgba(0, 0, 0, 0.275);\n  --styled-input-label-color: #9747ff;\n  --radio-outer-border-color: rgba(0, 0, 0, 0.2);\n  --radio-outer-border-color_active: #1C1C1C;\n  --radio-inner-bg-color: #1C1C1C;\n  --dropdown-bg-color: #FFFFFF;\n  --dropdown-active-bg-color: #F7F9FB;\n  --dropdown-box-shadow: 0 0 16px rgba(219, 219, 219, 0.5);\n  --summary-list-bg-color: #fff;\n  --custom-pre-bg-color: #f2f2f2;\n  --custom-pre-text-color: #1c1c1c;\n  --custom-pre-border-color: rgba(0, 0, 0, 0.1);\n  --modal-bg-color: #fff;\n  --stat-card-icon-color: var(--text_1);\n  --info-card-bg-color: #fff;\n  --info-card-feature-color: #1c1c1c;\n  --info-card-content-color: rgba(0, 0, 0, 0.5);\n  --tooltip-bg-color: rgba(28, 28, 28, 0.875);\n  --tooltip-text-color: #fff;\n  --skeleton-gradient: linear-gradient(110deg, rgba(0, 0, 0, 0.05) 12%, rgba(60, 60, 60, 0.125) 25%, rgba(0, 0, 0, 0.05) 42%);\n}\n:root[data-theme=dark][data-v-7dabe97b] {\n  --button-primary-bg-color: #b1e3ff;\n  --button-primary-text-color: #1c1c1c;\n  --button-outline-bg-color: rgba(0, 0, 0, 0);\n  --button-outline-border-color: #414141;\n  --button-outline-text-color: #fff;\n  --button-box-shadow: 0 0 12px rgba(132, 132, 132, 0.35);\n  --styled-input-border-color: #414141;\n  --styled-input-border-color_focus: #414141;\n  --styled-input-background-color: #2a2a2a;\n  --styled-input-placeholder-color: rgba(255, 255, 255, 0.325);\n  --styled-input-label-color: #b1e3ff;\n  --radio-outer-border-color: rgba(255, 255, 255, 0.275);\n  --radio-outer-border-color_active: #b1e3ff;\n  --radio-inner-bg-color: #b1e3ff;\n  --dropdown-bg-color: #1c1c1c;\n  --dropdown-active-bg-color: #2a2a2a;\n  --dropdown-box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  --summary-list-bg-color: #2a2a2a;\n  --custom-pre-bg-color: #1c1c1c;\n  --custom-pre-text-color: #f2f2f2;\n  --custom-pre-border-color: #414141;\n  --modal-bg-color: #2a2a2a;\n  --stat-card-icon-color: var(--text_black);\n  --info-card-bg-color: rgba(255, 255, 255, 0.05);\n  --info-card-feature-color: #b1e3ff;\n  --info-card-content-color: #fff;\n  --tooltip-bg-color: rgba(242, 244, 247, 0.925);\n  --tooltip-text-color: #1c1c1c;\n  --skeleton-gradient: linear-gradient(110deg, rgba(255, 255, 255, 0.1) 8%, rgba(255, 255, 255, 0.14) 29%, rgba(255, 255, 255, 0.1) 47%);\n}\n.c-modal[data-v-7dabe97b] {\n  display: flex;\n  position: fixed;\n  z-index: 60;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  justify-content: center;\n  align-items: center;\n  max-width: 100vw;\n  overflow: auto;\n}\n.c-modal-background[data-v-7dabe97b] {\n  display: none;\n}\n@media screen and (min-width: 769px), print {\n.c-modal-background[data-v-7dabe97b] {\n    position: fixed;\n    display: block;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: rgba(10, 10, 10, 0.86);\n}\n}\n.c-modal-content[data-v-7dabe97b] {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  background: var(--modal-bg-color);\n}\n@media screen and (min-width: 769px), print {\n.c-modal-content[data-v-7dabe97b] {\n    position: relative;\n    border-radius: 0.375rem;\n    width: 46rem;\n    max-width: calc(100vw - 4rem);\n    height: auto;\n    margin: auto;\n}\n}\n.c-modal-header[data-v-7dabe97b] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding: 0 1.25rem;\n  padding-right: 3.75rem;\n  height: 4.25rem;\n  flex-shrink: 0;\n  border-bottom: 1px solid var(--border);\n}\n.c-modal-body[data-v-7dabe97b] {\n  padding: 1.25rem;\n  overflow-y: auto;\n  overflow-x: hidden;\n  word-break: break-word;\n  min-height: 10.25rem;\n  flex-grow: 1;\n}\n@media screen and (min-width: 1200px) {\n.c-modal-body[data-v-7dabe97b] {\n    max-height: 26.75rem;\n}\n}\n.c-modal-footer[data-v-7dabe97b] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  height: 4.25rem;\n  flex-shrink: 0;\n  padding: 0 1.25rem;\n  border-top: 1px solid var(--border);\n}\n.c-title[data-v-7dabe97b] {\n  line-height: 1.1;\n}\n@media screen and (max-width: 440px) {\n.c-title[data-v-7dabe97b] {\n    font-size: 1.125rem;\n}\n}\n.c-icon[data-v-7dabe97b] {\n  display: inline-block;\n  margin-top: 2px;\n  margin-right: 0.5rem;\n  font-size: 1.75rem;\n  font-weight: 600;\n}\n@media screen and (max-width: 440px) {\n.c-icon[data-v-7dabe97b] {\n    font-size: 1.5rem;\n    margin-right: 0.25rem;\n}\n}\n.c-close-btn[data-v-7dabe97b] {\n  position: absolute;\n  right: 1.25rem;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 50%;\n  width: 2.25rem;\n  height: 2.25rem;\n}\n\n/*# sourceMappingURL=ModalTemplate.vue.map */", map: { "version": 3, "sources": ["ModalTemplate.vue", "backend/dashboard/views/containers/modal/ModalTemplate.vue"], "names": [], "mappings": "AAAA,sEAAsE;AACtE,sBAAsB;ACiFtB,qBAAA;AAGA;EAIA,kCAAA;EAAA,iCAAA;EAAA,2CAAA;EAAA,iDAAA;EAAA,oCAAA;EAAA,sDAAA;EAAA,+CAAA;EAAA,qDAAA;EAAA,qCAAA;EAAA,sDAAA;EAAA,mCAAA;EAAA,8CAAA;EAAA,0CAAA;EAAA,+BAAA;EAAA,4BAAA;EAAA,mCAAA;EAAA,wDAAA;EAAA,6BAAA;EAAA,8BAAA;EAAA,gCAAA;EAAA,6CAAA;EAAA,sBAAA;EAAA,qCAAA;EAAA,0BAAA;EAAA,kCAAA;EAAA,6CAAA;EAAA,2CAAA;EAAA,0BAAA;EAAA,2HAAA;ADxDA;AC6DA;EAIA,kCAAA;EAAA,oCAAA;EAAA,2CAAA;EAAA,sCAAA;EAAA,iCAAA;EAAA,uDAAA;EAAA,oCAAA;EAAA,0CAAA;EAAA,wCAAA;EAAA,4DAAA;EAAA,mCAAA;EAAA,sDAAA;EAAA,0CAAA;EAAA,+BAAA;EAAA,4BAAA;EAAA,mCAAA;EAAA,+CAAA;EAAA,gCAAA;EAAA,8BAAA;EAAA,gCAAA;EAAA,kCAAA;EAAA,yBAAA;EAAA,yCAAA;EAAA,+CAAA;EAAA,kCAAA;EAAA,+BAAA;EAAA,8CAAA;EAAA,6BAAA;EAAA,sIAAA;ADjCA;ACLA;EACA,aAAA;EACA,eAAA;EACA,WAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,cAAA;ADQA;ACNA;EACA,aAAA;ADQA;AACA;ACVA;IAIA,eAAA;IACA,cAAA;IACA,MAAA;IACA,SAAA;IACA,OAAA;IACA,QAAA;IACA,wCAAA;ADSE;AACF;ACNA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,iCAAA;ADQA;AACA;ACjBA;IAWA,kBAAA;IACA,uBAAA;IACA,YAAA;IACA,6BAAA;IACA,YAAA;IACA,YAAA;ADSE;AACF;ACNA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;EACA,cAAA;EACA,sCAAA;ADQA;ACLA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,sBAAA;EACA,oBAAA;EACA,YAAA;ADOA;ACrEA;AAwDA;IASA,oBAAA;ADQE;AACF;ACLA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,eAAA;EACA,cAAA;EACA,kBAAA;EACA,mCAAA;ADOA;ACHA;EACA,gBAAA;ADMA;AACA;ACRA;IAIA,mBAAA;ADOE;AACF;ACJA;EACA,qBAAA;EACA,eAAA;EACA,oBAAA;EAEA,kBAAA;EACA,gBAAA;ADMA;AACA;ACbA;IAUA,iBAAA;IACA,qBAAA;ADME;AACF;ACHA;EACA,kBAAA;EACA,cAAA;EACA,QAAA;EACA,2BAAA;EACA,kBAAA;EACA,cAAA;EACA,eAAA;ADMA;;AAEA,4CAA4C", "file": "ModalTemplate.vue", "sourcesContent": ["/* NOTE: <variable-name> : (<light-theme-value>, <dark-theme-value>) */\n/* stylelint-disable */\n/* stylelint-enable */\n:root {\n  --button-primary-bg-color: #1c1c1c;\n  --button-primary-text-color: #fff;\n  --button-outline-bg-color: rgba(0, 0, 0, 0);\n  --button-outline-border-color: rgba(0, 0, 0, 0.4);\n  --button-outline-text-color: #1c1c1c;\n  --button-box-shadow: 0 0 16px rgba(219, 219, 219, 0.5);\n  --styled-input-border-color: rgba(0, 0, 0, 0.1);\n  --styled-input-border-color_focus: rgba(0, 0, 0, 0.4);\n  --styled-input-background-color: #fff;\n  --styled-input-placeholder-color: rgba(0, 0, 0, 0.275);\n  --styled-input-label-color: #9747ff;\n  --radio-outer-border-color: rgba(0, 0, 0, 0.2);\n  --radio-outer-border-color_active: #1C1C1C;\n  --radio-inner-bg-color: #1C1C1C;\n  --dropdown-bg-color: #FFFFFF;\n  --dropdown-active-bg-color: #F7F9FB;\n  --dropdown-box-shadow: 0 0 16px rgba(219, 219, 219, 0.5);\n  --summary-list-bg-color: #fff;\n  --custom-pre-bg-color: #f2f2f2;\n  --custom-pre-text-color: #1c1c1c;\n  --custom-pre-border-color: rgba(0, 0, 0, 0.1);\n  --modal-bg-color: #fff;\n  --stat-card-icon-color: var(--text_1);\n  --info-card-bg-color: #fff;\n  --info-card-feature-color: #1c1c1c;\n  --info-card-content-color: rgba(0, 0, 0, 0.5);\n  --tooltip-bg-color: rgba(28, 28, 28, 0.875);\n  --tooltip-text-color: #fff;\n  --skeleton-gradient: linear-gradient(110deg, rgba(0, 0, 0, 0.05) 12%, rgba(60, 60, 60, 0.125) 25%, rgba(0, 0, 0, 0.05) 42%);\n}\n\n:root[data-theme=dark] {\n  --button-primary-bg-color: #b1e3ff;\n  --button-primary-text-color: #1c1c1c;\n  --button-outline-bg-color: rgba(0, 0, 0, 0);\n  --button-outline-border-color: #414141;\n  --button-outline-text-color: #fff;\n  --button-box-shadow: 0 0 12px rgba(132, 132, 132, 0.35);\n  --styled-input-border-color: #414141;\n  --styled-input-border-color_focus: #414141;\n  --styled-input-background-color: #2a2a2a;\n  --styled-input-placeholder-color: rgba(255, 255, 255, 0.325);\n  --styled-input-label-color: #b1e3ff;\n  --radio-outer-border-color: rgba(255, 255, 255, 0.275);\n  --radio-outer-border-color_active: #b1e3ff;\n  --radio-inner-bg-color: #b1e3ff;\n  --dropdown-bg-color: #1c1c1c;\n  --dropdown-active-bg-color: #2a2a2a;\n  --dropdown-box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  --summary-list-bg-color: #2a2a2a;\n  --custom-pre-bg-color: #1c1c1c;\n  --custom-pre-text-color: #f2f2f2;\n  --custom-pre-border-color: #414141;\n  --modal-bg-color: #2a2a2a;\n  --stat-card-icon-color: var(--text_black);\n  --info-card-bg-color: rgba(255, 255, 255, 0.05);\n  --info-card-feature-color: #b1e3ff;\n  --info-card-content-color: #fff;\n  --tooltip-bg-color: rgba(242, 244, 247, 0.925);\n  --tooltip-text-color: #1c1c1c;\n  --skeleton-gradient: linear-gradient(110deg, rgba(255, 255, 255, 0.1) 8%, rgba(255, 255, 255, 0.14) 29%, rgba(255, 255, 255, 0.1) 47%);\n}\n\n.c-modal {\n  display: flex;\n  position: fixed;\n  z-index: 60;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  justify-content: center;\n  align-items: center;\n  max-width: 100vw;\n  overflow: auto;\n}\n.c-modal-background {\n  display: none;\n}\n@media screen and (min-width: 769px), print {\n  .c-modal-background {\n    position: fixed;\n    display: block;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: rgba(10, 10, 10, 0.86);\n  }\n}\n.c-modal-content {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  background: var(--modal-bg-color);\n}\n@media screen and (min-width: 769px), print {\n  .c-modal-content {\n    position: relative;\n    border-radius: 0.375rem;\n    width: 46rem;\n    max-width: calc(100vw - 4rem);\n    height: auto;\n    margin: auto;\n  }\n}\n.c-modal-header {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding: 0 1.25rem;\n  padding-right: 3.75rem;\n  height: 4.25rem;\n  flex-shrink: 0;\n  border-bottom: 1px solid var(--border);\n}\n.c-modal-body {\n  padding: 1.25rem;\n  overflow-y: auto;\n  overflow-x: hidden;\n  word-break: break-word;\n  min-height: 10.25rem;\n  flex-grow: 1;\n}\n@media screen and (min-width: 1200px) {\n  .c-modal-body {\n    max-height: 26.75rem;\n  }\n}\n.c-modal-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  height: 4.25rem;\n  flex-shrink: 0;\n  padding: 0 1.25rem;\n  border-top: 1px solid var(--border);\n}\n\n.c-title {\n  line-height: 1.1;\n}\n@media screen and (max-width: 440px) {\n  .c-title {\n    font-size: 1.125rem;\n  }\n}\n\n.c-icon {\n  display: inline-block;\n  margin-top: 2px;\n  margin-right: 0.5rem;\n  font-size: 1.75rem;\n  font-weight: 600;\n}\n@media screen and (max-width: 440px) {\n  .c-icon {\n    font-size: 1.5rem;\n    margin-right: 0.25rem;\n  }\n}\n\n.c-close-btn {\n  position: absolute;\n  right: 1.25rem;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 50%;\n  width: 2.25rem;\n  height: 2.25rem;\n}\n\n/*# sourceMappingURL=ModalTemplate.vue.map */", "<template lang='pug'>\n.c-modal(\n  role='dialog'\n  tabindex='-1'\n  v-focus=''\n)\n  transition(name='fade' appear)\n    .c-modal-background(v-if='isActive' @click='close')\n\n  transition(name='slide-left' appear @after-leave='onLeaveEnd')\n    .c-modal-content(v-if='isActive')\n      header.c-modal-header\n        template(v-if='title')\n          i(:class='`icon-${icon} c-icon`')\n          h1.is-title-2.c-title {{ title }}\n\n        button.is-icon.c-close-btn(@click='close')\n          i.icon-close\n\n      section.c-modal-body\n        slot\n\n      footer.c-modal-footer\n        i18n.has-blue-background.c-dismiss-btn(tag='button' @click='close') Close\n</template>\n\n<script>\nimport sbp from '@sbp/sbp'\nimport { CLOSE_MODAL } from '../../../../../backend/dashboard/views/utils/events.js'\n\nexport default {\n  name: 'ModalTemplate',\n  props: {\n    title: String,\n    icon: {\n      type: String,\n      required: false,\n      default: 'info'\n    }\n  },\n  data () {\n    return {\n      isActive: true\n    }\n  },\n  methods: {\n    close () {\n      this.isActive = false\n    },\n    onLeaveEnd () {\n      // let Modal.vue to unload currently active modal\n      sbp('okTurtles.events/emit', CLOSE_MODAL)\n    }\n  }\n}\n<\/script>\n\n<style lang='scss' scoped>\n@import \"../../../../../backend/dashboard/assets/style/_variables.scss\";\n\n.c-modal {\n  display: flex;\n  position: fixed;\n  z-index: $zindex-modal;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  justify-content: center;\n  align-items: center;\n  max-width: 100vw;\n  overflow: auto;\n\n  &-background {\n    display: none;\n\n    @include tablet {\n      position: fixed;\n      display: block;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      background-color: rgba(10, 10, 10, 0.86);\n    }\n  }\n\n  &-content {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    margin: 0 auto;\n    background: var(--modal-bg-color);\n\n    @include tablet {\n      position: relative;\n      border-radius: 0.375rem;\n      width: 46rem;\n      max-width: calc(100vw - 4rem);\n      height: auto;\n      margin: auto;\n    }\n  }\n\n  &-header {\n    position: relative;\n    display: flex;\n    align-items: center;\n    padding: 0 1.25rem;\n    padding-right: 3.75rem;\n    height: 4.25rem;\n    flex-shrink: 0;\n    border-bottom: 1px solid $border;\n  }\n\n  &-body {\n    padding: 1.25rem;\n    overflow-y: auto;\n    overflow-x: hidden;\n    word-break: break-word;\n    min-height: 10.25rem;\n    flex-grow: 1;\n\n    @include desktop {\n      max-height: 26.75rem;\n    }\n  }\n\n  &-footer {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    height: 4.25rem;\n    flex-shrink: 0;\n    padding: 0 1.25rem;\n    border-top: 1px solid $border;\n  }\n}\n\n.c-title {\n  line-height: 1.1;\n\n  @include phone_narrow {\n    font-size: $size_3;\n  }\n}\n\n.c-icon {\n  display: inline-block;\n  margin-top: 2px;\n  margin-right: 0.5rem;\n  font: {\n    size: 1.75rem;\n    weight: 600;\n  }\n\n  @include phone_narrow {\n    font-size: 1.5rem;\n    margin-right: 0.25rem;\n  }\n}\n\n.c-close-btn {\n  position: absolute;\n  right: 1.25rem;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 50%;\n  width: 2.25rem;\n  height: 2.25rem;\n}\n</style>\n"] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-7dabe97b";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = "<template lang='pug'>\n.c-modal(\n  role='dialog'\n  tabindex='-1'\n  v-focus=''\n)\n  transition(name='fade' appear)\n    .c-modal-background(v-if='isActive' @click='close')\n\n  transition(name='slide-left' appear @after-leave='onLeaveEnd')\n    .c-modal-content(v-if='isActive')\n      header.c-modal-header\n        template(v-if='title')\n          i(:class='`icon-${icon} c-icon`')\n          h1.is-title-2.c-title {{ title }}\n\n        button.is-icon.c-close-btn(@click='close')\n          i.icon-close\n\n      section.c-modal-body\n        slot\n\n      footer.c-modal-footer\n        i18n.has-blue-background.c-dismiss-btn(tag='button' @click='close') Close\n</template>\n\n<script>\nimport sbp from '@sbp/sbp'\nimport { CLOSE_MODAL } from '../../../../../backend/dashboard/views/utils/events.js'\n\nexport default {\n  name: 'ModalTemplate',\n  props: {\n    title: String,\n    icon: {\n      type: String,\n      required: false,\n      default: 'info'\n    }\n  },\n  data () {\n    return {\n      isActive: true\n    }\n  },\n  methods: {\n    close () {\n      this.isActive = false\n    },\n    onLeaveEnd () {\n      // let Modal.vue to unload currently active modal\n      sbp('okTurtles.events/emit', CLOSE_MODAL)\n    }\n  }\n}\n<\/script>\n\n<style lang='scss' scoped>\n@import \"../../../../../backend/dashboard/assets/style/_variables.scss\";\n\n.c-modal {\n  display: flex;\n  position: fixed;\n  z-index: $zindex-modal;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  justify-content: center;\n  align-items: center;\n  max-width: 100vw;\n  overflow: auto;\n\n  &-background {\n    display: none;\n\n    @include tablet {\n      position: fixed;\n      display: block;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      background-color: rgba(10, 10, 10, 0.86);\n    }\n  }\n\n  &-content {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    margin: 0 auto;\n    background: var(--modal-bg-color);\n\n    @include tablet {\n      position: relative;\n      border-radius: 0.375rem;\n      width: 46rem;\n      max-width: calc(100vw - 4rem);\n      height: auto;\n      margin: auto;\n    }\n  }\n\n  &-header {\n    position: relative;\n    display: flex;\n    align-items: center;\n    padding: 0 1.25rem;\n    padding-right: 3.75rem;\n    height: 4.25rem;\n    flex-shrink: 0;\n    border-bottom: 1px solid $border;\n  }\n\n  &-body {\n    padding: 1.25rem;\n    overflow-y: auto;\n    overflow-x: hidden;\n    word-break: break-word;\n    min-height: 10.25rem;\n    flex-grow: 1;\n\n    @include desktop {\n      max-height: 26.75rem;\n    }\n  }\n\n  &-footer {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    height: 4.25rem;\n    flex-shrink: 0;\n    padding: 0 1.25rem;\n    border-top: 1px solid $border;\n  }\n}\n\n.c-title {\n  line-height: 1.1;\n\n  @include phone_narrow {\n    font-size: $size_3;\n  }\n}\n\n.c-icon {\n  display: inline-block;\n  margin-top: 2px;\n  margin-right: 0.5rem;\n  font: {\n    size: 1.75rem;\n    weight: 600;\n  }\n\n  @include phone_narrow {\n    font-size: 1.5rem;\n    margin-right: 0.25rem;\n  }\n}\n\n.c-close-btn {\n  position: absolute;\n  right: 1.25rem;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 50%;\n  width: 2.25rem;\n  height: 2.25rem;\n}\n</style>\n";
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
var ModalTemplate_default = __vue_component__;

// backend/dashboard/views/components/TextToCopy.vue
var __vue_script__2 = {
  name: "TextToCopy",
  props: {
    tag: {
      type: String,
      required: false,
      default: "span"
    },
    text: {
      type: String,
      required: true,
      default: ""
    }
  },
  data() {
    return {
      isCopied: false
    };
  },
  computed: {
    tooltipText() {
      return this.isCopied ? L("Copied to clipboard") : this.text;
    }
  },
  methods: {
    copyToClipBoard() {
      navigator.clipboard.writeText(this.text).then(() => {
        this.isCopied = true;
        setTimeout(() => {
          this.isCopied = false;
        }, 1200);
      });
    }
  }
};
var __vue_render__2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.tag, { tag: "component", staticClass: "c-text-to-copy-container" }, [
    _c("span", { staticClass: "c-text-content", on: { click: _vm.copyToClipBoard } }, [
      _vm.$slots.default ? _vm._t("default") : _c("span", [_vm._v(_vm._s(_vm.text))])
    ], 2),
    _c("button", {
      staticClass: "is-icon-small c-copy-btn",
      on: { click: _vm.copyToClipBoard }
    }, [_c("i", { staticClass: "icon-copy" })]),
    _c("div", {
      staticClass: "tooltip font-small c-tooltip",
      class: { "is-active": _vm.isCopied }
    }, [_vm._v(_vm._s(_vm.tooltipText))])
  ]);
};
var __vue_staticRenderFns__2 = [];
__vue_render__2._withStripped = true;
var __vue_inject_styles__2 = function(inject) {
  if (!inject)
    return;
  inject("data-v-07e7ae4a_0", { source: "/* NOTE: <variable-name> : (<light-theme-value>, <dark-theme-value>) */\n/* stylelint-disable */\n/* stylelint-enable */\n[data-v-07e7ae4a]:root {\n  --button-primary-bg-color: #1c1c1c;\n  --button-primary-text-color: #fff;\n  --button-outline-bg-color: rgba(0, 0, 0, 0);\n  --button-outline-border-color: rgba(0, 0, 0, 0.4);\n  --button-outline-text-color: #1c1c1c;\n  --button-box-shadow: 0 0 16px rgba(219, 219, 219, 0.5);\n  --styled-input-border-color: rgba(0, 0, 0, 0.1);\n  --styled-input-border-color_focus: rgba(0, 0, 0, 0.4);\n  --styled-input-background-color: #fff;\n  --styled-input-placeholder-color: rgba(0, 0, 0, 0.275);\n  --styled-input-label-color: #9747ff;\n  --radio-outer-border-color: rgba(0, 0, 0, 0.2);\n  --radio-outer-border-color_active: #1C1C1C;\n  --radio-inner-bg-color: #1C1C1C;\n  --dropdown-bg-color: #FFFFFF;\n  --dropdown-active-bg-color: #F7F9FB;\n  --dropdown-box-shadow: 0 0 16px rgba(219, 219, 219, 0.5);\n  --summary-list-bg-color: #fff;\n  --custom-pre-bg-color: #f2f2f2;\n  --custom-pre-text-color: #1c1c1c;\n  --custom-pre-border-color: rgba(0, 0, 0, 0.1);\n  --modal-bg-color: #fff;\n  --stat-card-icon-color: var(--text_1);\n  --info-card-bg-color: #fff;\n  --info-card-feature-color: #1c1c1c;\n  --info-card-content-color: rgba(0, 0, 0, 0.5);\n  --tooltip-bg-color: rgba(28, 28, 28, 0.875);\n  --tooltip-text-color: #fff;\n  --skeleton-gradient: linear-gradient(110deg, rgba(0, 0, 0, 0.05) 12%, rgba(60, 60, 60, 0.125) 25%, rgba(0, 0, 0, 0.05) 42%);\n}\n:root[data-theme=dark][data-v-07e7ae4a] {\n  --button-primary-bg-color: #b1e3ff;\n  --button-primary-text-color: #1c1c1c;\n  --button-outline-bg-color: rgba(0, 0, 0, 0);\n  --button-outline-border-color: #414141;\n  --button-outline-text-color: #fff;\n  --button-box-shadow: 0 0 12px rgba(132, 132, 132, 0.35);\n  --styled-input-border-color: #414141;\n  --styled-input-border-color_focus: #414141;\n  --styled-input-background-color: #2a2a2a;\n  --styled-input-placeholder-color: rgba(255, 255, 255, 0.325);\n  --styled-input-label-color: #b1e3ff;\n  --radio-outer-border-color: rgba(255, 255, 255, 0.275);\n  --radio-outer-border-color_active: #b1e3ff;\n  --radio-inner-bg-color: #b1e3ff;\n  --dropdown-bg-color: #1c1c1c;\n  --dropdown-active-bg-color: #2a2a2a;\n  --dropdown-box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  --summary-list-bg-color: #2a2a2a;\n  --custom-pre-bg-color: #1c1c1c;\n  --custom-pre-text-color: #f2f2f2;\n  --custom-pre-border-color: #414141;\n  --modal-bg-color: #2a2a2a;\n  --stat-card-icon-color: var(--text_black);\n  --info-card-bg-color: rgba(255, 255, 255, 0.05);\n  --info-card-feature-color: #b1e3ff;\n  --info-card-content-color: #fff;\n  --tooltip-bg-color: rgba(242, 244, 247, 0.925);\n  --tooltip-text-color: #1c1c1c;\n  --skeleton-gradient: linear-gradient(110deg, rgba(255, 255, 255, 0.1) 8%, rgba(255, 255, 255, 0.14) 29%, rgba(255, 255, 255, 0.1) 47%);\n}\n.c-text-to-copy-container[data-v-07e7ae4a] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  width: max-content;\n  height: auto;\n  min-width: 0;\n  padding: 0.25rem 0.25rem 0.25rem 0.5rem;\n  border-radius: 0.5rem;\n  border: 1px solid var(--border);\n}\n.c-text-content[data-v-07e7ae4a] {\n  display: inline-block;\n  cursor: pointer;\n  line-height: 1.2;\n}\n.c-text-content[data-v-07e7ae4a]:hover {\n  text-decoration: underline;\n}\n.c-copy-btn[data-v-07e7ae4a] {\n  margin-left: 0.4rem;\n  border-color: var(--text_1);\n}\n.c-text-content:hover ~ .c-tooltip[data-v-07e7ae4a] {\n  opacity: 1;\n}\n\n/*# sourceMappingURL=TextToCopy.vue.map */", map: { "version": 3, "sources": ["TextToCopy.vue", "backend/dashboard/views/components/TextToCopy.vue"], "names": [], "mappings": "AAAA,sEAAsE;AACtE,sBAAsB;ACiFtB,qBAAA;AD/EA;EACE,kCAAkC;EAClC,iCAAiC;EACjC,2CAA2C;EAC3C,iDAAiD;EACjD,oCAAoC;EACpC,sDAAsD;EACtD,+CAA+C;EAC/C,qDAAqD;EACrD,qCAAqC;EACrC,sDAAsD;EACtD,mCAAmC;EACnC,8CAA8C;EAC9C,0CAA0C;EAC1C,+BAA+B;EAC/B,4BAA4B;EAC5B,mCAAmC;EACnC,wDAAwD;EACxD,6BAA6B;EAC7B,8BAA8B;EAC9B,gCAAgC;EAChC,6CAA6C;EAC7C,sBAAsB;EACtB,qCAAqC;EACrC,0BAA0B;EAC1B,kCAAkC;EAClC,6CAA6C;EAC7C,2CAA2C;EAC3C,0BAA0B;EAC1B,2HAA2H;AAC7H;AAEA;EACE,kCAAkC;EAClC,oCAAoC;EACpC,2CAA2C;EAC3C,sCAAsC;EACtC,iCAAiC;EACjC,uDAAuD;EACvD,oCAAoC;EACpC,0CAA0C;EAC1C,wCAAwC;EACxC,4DAA4D;EAC5D,mCAAmC;EACnC,sDAAsD;EACtD,0CAA0C;EAC1C,+BAA+B;EAC/B,4BAA4B;EAC5B,mCAAmC;EACnC,+CAA+C;EAC/C,gCAAgC;EAChC,8BAA8B;EAC9B,gCAAgC;EAChC,kCAAkC;EAClC,yBAAyB;EACzB,yCAAyC;EACzC,+CAA+C;EAC/C,kCAAkC;EAClC,+BAA+B;EAC/B,8CAA8C;EAC9C,6BAA6B;EAC7B,sIAAsI;AACxI;ACVA;EACA,kBAAA;EACA,oBAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;EACA,YAAA;EACA,uCAAA;EACA,qBAAA;EACA,+BAAA;ADaA;ACVA;EACA,qBAAA;EACA,eAAA;EACA,gBAAA;ADaA;ACXA;EACA,0BAAA;ADaA;ACTA;EACA,mBAAA;EACA,2BAAA;ADYA;ACTA;EACA,UAAA;ADYA;;AAEA,yCAAyC", "file": "TextToCopy.vue", "sourcesContent": ["/* NOTE: <variable-name> : (<light-theme-value>, <dark-theme-value>) */\n/* stylelint-disable */\n/* stylelint-enable */\n:root {\n  --button-primary-bg-color: #1c1c1c;\n  --button-primary-text-color: #fff;\n  --button-outline-bg-color: rgba(0, 0, 0, 0);\n  --button-outline-border-color: rgba(0, 0, 0, 0.4);\n  --button-outline-text-color: #1c1c1c;\n  --button-box-shadow: 0 0 16px rgba(219, 219, 219, 0.5);\n  --styled-input-border-color: rgba(0, 0, 0, 0.1);\n  --styled-input-border-color_focus: rgba(0, 0, 0, 0.4);\n  --styled-input-background-color: #fff;\n  --styled-input-placeholder-color: rgba(0, 0, 0, 0.275);\n  --styled-input-label-color: #9747ff;\n  --radio-outer-border-color: rgba(0, 0, 0, 0.2);\n  --radio-outer-border-color_active: #1C1C1C;\n  --radio-inner-bg-color: #1C1C1C;\n  --dropdown-bg-color: #FFFFFF;\n  --dropdown-active-bg-color: #F7F9FB;\n  --dropdown-box-shadow: 0 0 16px rgba(219, 219, 219, 0.5);\n  --summary-list-bg-color: #fff;\n  --custom-pre-bg-color: #f2f2f2;\n  --custom-pre-text-color: #1c1c1c;\n  --custom-pre-border-color: rgba(0, 0, 0, 0.1);\n  --modal-bg-color: #fff;\n  --stat-card-icon-color: var(--text_1);\n  --info-card-bg-color: #fff;\n  --info-card-feature-color: #1c1c1c;\n  --info-card-content-color: rgba(0, 0, 0, 0.5);\n  --tooltip-bg-color: rgba(28, 28, 28, 0.875);\n  --tooltip-text-color: #fff;\n  --skeleton-gradient: linear-gradient(110deg, rgba(0, 0, 0, 0.05) 12%, rgba(60, 60, 60, 0.125) 25%, rgba(0, 0, 0, 0.05) 42%);\n}\n\n:root[data-theme=dark] {\n  --button-primary-bg-color: #b1e3ff;\n  --button-primary-text-color: #1c1c1c;\n  --button-outline-bg-color: rgba(0, 0, 0, 0);\n  --button-outline-border-color: #414141;\n  --button-outline-text-color: #fff;\n  --button-box-shadow: 0 0 12px rgba(132, 132, 132, 0.35);\n  --styled-input-border-color: #414141;\n  --styled-input-border-color_focus: #414141;\n  --styled-input-background-color: #2a2a2a;\n  --styled-input-placeholder-color: rgba(255, 255, 255, 0.325);\n  --styled-input-label-color: #b1e3ff;\n  --radio-outer-border-color: rgba(255, 255, 255, 0.275);\n  --radio-outer-border-color_active: #b1e3ff;\n  --radio-inner-bg-color: #b1e3ff;\n  --dropdown-bg-color: #1c1c1c;\n  --dropdown-active-bg-color: #2a2a2a;\n  --dropdown-box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  --summary-list-bg-color: #2a2a2a;\n  --custom-pre-bg-color: #1c1c1c;\n  --custom-pre-text-color: #f2f2f2;\n  --custom-pre-border-color: #414141;\n  --modal-bg-color: #2a2a2a;\n  --stat-card-icon-color: var(--text_black);\n  --info-card-bg-color: rgba(255, 255, 255, 0.05);\n  --info-card-feature-color: #b1e3ff;\n  --info-card-content-color: #fff;\n  --tooltip-bg-color: rgba(242, 244, 247, 0.925);\n  --tooltip-text-color: #1c1c1c;\n  --skeleton-gradient: linear-gradient(110deg, rgba(255, 255, 255, 0.1) 8%, rgba(255, 255, 255, 0.14) 29%, rgba(255, 255, 255, 0.1) 47%);\n}\n\n.c-text-to-copy-container {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  width: max-content;\n  height: auto;\n  min-width: 0;\n  padding: 0.25rem 0.25rem 0.25rem 0.5rem;\n  border-radius: 0.5rem;\n  border: 1px solid var(--border);\n}\n\n.c-text-content {\n  display: inline-block;\n  cursor: pointer;\n  line-height: 1.2;\n}\n.c-text-content:hover {\n  text-decoration: underline;\n}\n\n.c-copy-btn {\n  margin-left: 0.4rem;\n  border-color: var(--text_1);\n}\n\n.c-text-content:hover ~ .c-tooltip {\n  opacity: 1;\n}\n\n/*# sourceMappingURL=TextToCopy.vue.map */", `<template lang='pug'>
component.c-text-to-copy-container(
  :is='tag'
)
  span.c-text-content(@click='copyToClipBoard')
    slot(v-if='$slots.default')
    span(v-else) {{ text }}

  button.is-icon-small.c-copy-btn(@click='copyToClipBoard')
    i.icon-copy

  .tooltip.font-small.c-tooltip(:class='{ "is-active": isCopied }') {{ tooltipText }}
</template>

<script>
import L from '../../../../backend/dashboard/common/translations.js'

export default {
  name: 'TextToCopy',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'span'
    },
    text: {
      type: String,
      required: true,
      default: ''
    }
  },
  data () {
    return {
      isCopied: false
    }
  },
  computed: {
    tooltipText () {
      return this.isCopied ? L('Copied to clipboard') : this.text
    }
  },
  methods: {
    copyToClipBoard () {
      navigator.clipboard.writeText(this.text).then(() => {
        this.isCopied = true
        setTimeout(() => { this.isCopied = false }, 1200)
      })
    }
  }
}
<\/script>

<style lang='scss' scoped>
@import "../../../../backend/dashboard/assets/style/_variables.scss";

.c-text-to-copy-container {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: max-content;
  height: auto;
  min-width: 0;
  padding: 0.25rem 0.25rem 0.25rem 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid $border;
}

.c-text-content {
  display: inline-block;
  cursor: pointer;
  line-height: 1.2;

  &:hover {
    text-decoration: underline;
  }
}

.c-copy-btn {
  margin-left: 0.4rem;
  border-color: $text_1;
}

.c-text-content:hover ~ .c-tooltip {
  opacity: 1;
}
</style>
`] }, media: void 0 });
};
var __vue_scope_id__2 = "data-v-07e7ae4a";
var __vue_module_identifier__2 = void 0;
var __vue_is_functional_template__2 = false;
function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
component.c-text-to-copy-container(
  :is='tag'
)
  span.c-text-content(@click='copyToClipBoard')
    slot(v-if='$slots.default')
    span(v-else) {{ text }}

  button.is-icon-small.c-copy-btn(@click='copyToClipBoard')
    i.icon-copy

  .tooltip.font-small.c-tooltip(:class='{ "is-active": isCopied }') {{ tooltipText }}
</template>

<script>
import L from '../../../../backend/dashboard/common/translations.js'

export default {
  name: 'TextToCopy',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'span'
    },
    text: {
      type: String,
      required: true,
      default: ''
    }
  },
  data () {
    return {
      isCopied: false
    }
  },
  computed: {
    tooltipText () {
      return this.isCopied ? L('Copied to clipboard') : this.text
    }
  },
  methods: {
    copyToClipBoard () {
      navigator.clipboard.writeText(this.text).then(() => {
        this.isCopied = true
        setTimeout(() => { this.isCopied = false }, 1200)
      })
    }
  }
}
<\/script>

<style lang='scss' scoped>
@import "../../../../backend/dashboard/assets/style/_variables.scss";

.c-text-to-copy-container {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: max-content;
  height: auto;
  min-width: 0;
  padding: 0.25rem 0.25rem 0.25rem 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid $border;
}

.c-text-content {
  display: inline-block;
  cursor: pointer;
  line-height: 1.2;

  &:hover {
    text-decoration: underline;
  }
}

.c-copy-btn {
  margin-left: 0.4rem;
  border-color: $text_1;
}

.c-text-content:hover ~ .c-tooltip {
  opacity: 1;
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
function __vue_create_injector__2() {
  const styles = __vue_create_injector__2.styles || (__vue_create_injector__2.styles = {});
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
var __vue_component__2 = /* @__PURE__ */ __vue_normalize__2({ render: __vue_render__2, staticRenderFns: __vue_staticRenderFns__2 }, __vue_inject_styles__2, __vue_script__2, __vue_scope_id__2, __vue_is_functional_template__2, __vue_module_identifier__2, false, __vue_create_injector__2, void 0, void 0);
var TextToCopy_default = __vue_component__2;

// backend/dashboard/views/containers/modal/ViewContractManifestModal.vue
var __vue_script__3 = {
  name: "ViewContractManifestModal",
  components: {
    ModalTemplate: ModalTemplate_default,
    TextToCopy: TextToCopy_default
  },
  props: {
    contract: Object
  },
  computed: {
    content() {
      const manifest = this.contract.manifestJSON;
      const stringify = (content) => JSON.stringify(content).replace(/\\/g, "");
      return {
        head: stringify(manifest.head),
        body: stringify(manifest.body),
        signature: stringify(manifest.signature)
      };
    }
  }
};
var __vue_render__3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("modal-template", { attrs: { title: _vm.L("Contract manifest"), icon: "suitcase" } }, [
    _c("div", { staticClass: "c-contract-id-container" }, [
      _c("span", { staticClass: "c-id-label has-family-poppins" }, [
        _vm._v("contractID :")
      ]),
      _c("text-to-copy", {
        staticClass: "c-id-copy",
        attrs: { text: _vm.contract.contractId }
      }, [
        _c("div", { staticClass: "c-id-value" }, [
          _vm._v(_vm._s(_vm.contract.contractId))
        ])
      ])
    ], 1),
    _c("div", { staticClass: "c-code-demo-container" }, [
      _c("div", { staticClass: "c-code-demo-block" }, [
        _c("div", { staticClass: "c-code-demo-label" }, [_vm._v("head")]),
        _c("pre", { staticClass: "custom-pre" }, [
          _vm._v(_vm._s(_vm.content.head))
        ])
      ]),
      _c("div", { staticClass: "c-code-demo-block" }, [
        _c("div", { staticClass: "c-code-demo-label" }, [_vm._v("body")]),
        _c("pre", { staticClass: "custom-pre" }, [
          _vm._v(_vm._s(_vm.content.body) + "}")
        ])
      ]),
      _c("div", { staticClass: "c-code-demo-block" }, [
        _c("div", { staticClass: "c-code-demo-label" }, [
          _vm._v("signature")
        ]),
        _c("pre", { staticClass: "custom-pre" }, [
          _vm._v(_vm._s(_vm.content.signature))
        ])
      ])
    ])
  ]);
};
var __vue_staticRenderFns__3 = [];
__vue_render__3._withStripped = true;
var __vue_inject_styles__3 = function(inject) {
  if (!inject)
    return;
  inject("data-v-59ba2e1c_0", { source: '/* NOTE: <variable-name> : (<light-theme-value>, <dark-theme-value>) */\n/* stylelint-disable */\n/* stylelint-enable */\n[data-v-59ba2e1c]:root {\n  --button-primary-bg-color: #1c1c1c;\n  --button-primary-text-color: #fff;\n  --button-outline-bg-color: rgba(0, 0, 0, 0);\n  --button-outline-border-color: rgba(0, 0, 0, 0.4);\n  --button-outline-text-color: #1c1c1c;\n  --button-box-shadow: 0 0 16px rgba(219, 219, 219, 0.5);\n  --styled-input-border-color: rgba(0, 0, 0, 0.1);\n  --styled-input-border-color_focus: rgba(0, 0, 0, 0.4);\n  --styled-input-background-color: #fff;\n  --styled-input-placeholder-color: rgba(0, 0, 0, 0.275);\n  --styled-input-label-color: #9747ff;\n  --radio-outer-border-color: rgba(0, 0, 0, 0.2);\n  --radio-outer-border-color_active: #1C1C1C;\n  --radio-inner-bg-color: #1C1C1C;\n  --dropdown-bg-color: #FFFFFF;\n  --dropdown-active-bg-color: #F7F9FB;\n  --dropdown-box-shadow: 0 0 16px rgba(219, 219, 219, 0.5);\n  --summary-list-bg-color: #fff;\n  --custom-pre-bg-color: #f2f2f2;\n  --custom-pre-text-color: #1c1c1c;\n  --custom-pre-border-color: rgba(0, 0, 0, 0.1);\n  --modal-bg-color: #fff;\n  --stat-card-icon-color: var(--text_1);\n  --info-card-bg-color: #fff;\n  --info-card-feature-color: #1c1c1c;\n  --info-card-content-color: rgba(0, 0, 0, 0.5);\n  --tooltip-bg-color: rgba(28, 28, 28, 0.875);\n  --tooltip-text-color: #fff;\n  --skeleton-gradient: linear-gradient(110deg, rgba(0, 0, 0, 0.05) 12%, rgba(60, 60, 60, 0.125) 25%, rgba(0, 0, 0, 0.05) 42%);\n}\n:root[data-theme=dark][data-v-59ba2e1c] {\n  --button-primary-bg-color: #b1e3ff;\n  --button-primary-text-color: #1c1c1c;\n  --button-outline-bg-color: rgba(0, 0, 0, 0);\n  --button-outline-border-color: #414141;\n  --button-outline-text-color: #fff;\n  --button-box-shadow: 0 0 12px rgba(132, 132, 132, 0.35);\n  --styled-input-border-color: #414141;\n  --styled-input-border-color_focus: #414141;\n  --styled-input-background-color: #2a2a2a;\n  --styled-input-placeholder-color: rgba(255, 255, 255, 0.325);\n  --styled-input-label-color: #b1e3ff;\n  --radio-outer-border-color: rgba(255, 255, 255, 0.275);\n  --radio-outer-border-color_active: #b1e3ff;\n  --radio-inner-bg-color: #b1e3ff;\n  --dropdown-bg-color: #1c1c1c;\n  --dropdown-active-bg-color: #2a2a2a;\n  --dropdown-box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  --summary-list-bg-color: #2a2a2a;\n  --custom-pre-bg-color: #1c1c1c;\n  --custom-pre-text-color: #f2f2f2;\n  --custom-pre-border-color: #414141;\n  --modal-bg-color: #2a2a2a;\n  --stat-card-icon-color: var(--text_black);\n  --info-card-bg-color: rgba(255, 255, 255, 0.05);\n  --info-card-feature-color: #b1e3ff;\n  --info-card-content-color: #fff;\n  --tooltip-bg-color: rgba(242, 244, 247, 0.925);\n  --tooltip-text-color: #1c1c1c;\n  --skeleton-gradient: linear-gradient(110deg, rgba(255, 255, 255, 0.1) 8%, rgba(255, 255, 255, 0.14) 29%, rgba(255, 255, 255, 0.1) 47%);\n}\n.c-contract-id-container[data-v-59ba2e1c] {\n  position: relative;\n  padding-left: 0.8rem;\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.c-contract-id-container[data-v-59ba2e1c]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 0.4rem;\n  background-color: var(--text_1);\n}\n.c-contract-id-container .c-id-label[data-v-59ba2e1c] {\n  display: inline-block;\n  margin-right: 0.4rem;\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.c-contract-id-container .c-id-value[data-v-59ba2e1c] {\n  display: inline-block;\n  max-width: 10rem;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  direction: rtl;\n  margin-top: 2px;\n}\n@media screen and (max-width: 440px) {\n.c-contract-id-container .c-id-value[data-v-59ba2e1c] {\n    max-width: 7.5rem;\n}\n}\n.c-code-demo-block[data-v-59ba2e1c] {\n  position: relative;\n  margin-bottom: 1.2rem;\n}\n.c-code-demo-label[data-v-59ba2e1c] {\n  display: block;\n  font-weight: 600;\n  font-size: 0.875rem;\n  font-family: "Poppins";\n  margin-bottom: 0.4rem;\n  margin-left: 0.2rem;\n}\n\n/*# sourceMappingURL=ViewContractManifestModal.vue.map */', map: { "version": 3, "sources": ["ViewContractManifestModal.vue", "backend/dashboard/views/containers/modal/ViewContractManifestModal.vue"], "names": [], "mappings": "AAAA,sEAAsE;AACtE,sBAAsB;ACiFtB,qBAAA;AAGA;EAIA,kCAAA;EAAA,iCAAA;EAAA,2CAAA;EAAA,iDAAA;EAAA,oCAAA;EAAA,sDAAA;EAAA,+CAAA;EAAA,qDAAA;EAAA,qCAAA;EAAA,sDAAA;EAAA,mCAAA;EAAA,8CAAA;EAAA,0CAAA;EAAA,+BAAA;EAAA,4BAAA;EAAA,mCAAA;EAAA,wDAAA;EAAA,6BAAA;EAAA,8BAAA;EAAA,gCAAA;EAAA,6CAAA;EAAA,sBAAA;EAAA,qCAAA;EAAA,0BAAA;EAAA,kCAAA;EAAA,6CAAA;EAAA,2CAAA;EAAA,0BAAA;EAAA,2HAAA;ADxDA;AC6DA;EAIA,kCAAA;EAAA,oCAAA;EAAA,2CAAA;EAAA,sCAAA;EAAA,iCAAA;EAAA,uDAAA;EAAA,oCAAA;EAAA,0CAAA;EAAA,wCAAA;EAAA,4DAAA;EAAA,mCAAA;EAAA,sDAAA;EAAA,0CAAA;EAAA,+BAAA;EAAA,4BAAA;EAAA,mCAAA;EAAA,+CAAA;EAAA,gCAAA;EAAA,8BAAA;EAAA,gCAAA;EAAA,kCAAA;EAAA,yBAAA;EAAA,yCAAA;EAAA,+CAAA;EAAA,kCAAA;EAAA,+BAAA;EAAA,8CAAA;EAAA,6BAAA;EAAA,sIAAA;ADjCA;ACbA;EACA,kBAAA;EACA,oBAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;ADgBA;ACdA;EACA,WAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,YAAA;EACA,aAAA;EACA,+BAAA;ADgBA;ACbA;EACA,qBAAA;EACA,oBAAA;EACA,gBAAA;EACA,mBAAA;ADeA;ACZA;EACA,qBAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAAA;EACA,eAAA;ADcA;AACA;ACtBA;IAUA,iBAAA;ADeE;AACF;ACXA;EACA,kBAAA;EACA,qBAAA;ADcA;ACXA;EACA,cAAA;EACA,gBAAA;EACA,mBAAA;EACA,sBAAA;EACA,qBAAA;EACA,mBAAA;ADcA;;AAEA,wDAAwD", "file": "ViewContractManifestModal.vue", "sourcesContent": ['/* NOTE: <variable-name> : (<light-theme-value>, <dark-theme-value>) */\n/* stylelint-disable */\n/* stylelint-enable */\n:root {\n  --button-primary-bg-color: #1c1c1c;\n  --button-primary-text-color: #fff;\n  --button-outline-bg-color: rgba(0, 0, 0, 0);\n  --button-outline-border-color: rgba(0, 0, 0, 0.4);\n  --button-outline-text-color: #1c1c1c;\n  --button-box-shadow: 0 0 16px rgba(219, 219, 219, 0.5);\n  --styled-input-border-color: rgba(0, 0, 0, 0.1);\n  --styled-input-border-color_focus: rgba(0, 0, 0, 0.4);\n  --styled-input-background-color: #fff;\n  --styled-input-placeholder-color: rgba(0, 0, 0, 0.275);\n  --styled-input-label-color: #9747ff;\n  --radio-outer-border-color: rgba(0, 0, 0, 0.2);\n  --radio-outer-border-color_active: #1C1C1C;\n  --radio-inner-bg-color: #1C1C1C;\n  --dropdown-bg-color: #FFFFFF;\n  --dropdown-active-bg-color: #F7F9FB;\n  --dropdown-box-shadow: 0 0 16px rgba(219, 219, 219, 0.5);\n  --summary-list-bg-color: #fff;\n  --custom-pre-bg-color: #f2f2f2;\n  --custom-pre-text-color: #1c1c1c;\n  --custom-pre-border-color: rgba(0, 0, 0, 0.1);\n  --modal-bg-color: #fff;\n  --stat-card-icon-color: var(--text_1);\n  --info-card-bg-color: #fff;\n  --info-card-feature-color: #1c1c1c;\n  --info-card-content-color: rgba(0, 0, 0, 0.5);\n  --tooltip-bg-color: rgba(28, 28, 28, 0.875);\n  --tooltip-text-color: #fff;\n  --skeleton-gradient: linear-gradient(110deg, rgba(0, 0, 0, 0.05) 12%, rgba(60, 60, 60, 0.125) 25%, rgba(0, 0, 0, 0.05) 42%);\n}\n\n:root[data-theme=dark] {\n  --button-primary-bg-color: #b1e3ff;\n  --button-primary-text-color: #1c1c1c;\n  --button-outline-bg-color: rgba(0, 0, 0, 0);\n  --button-outline-border-color: #414141;\n  --button-outline-text-color: #fff;\n  --button-box-shadow: 0 0 12px rgba(132, 132, 132, 0.35);\n  --styled-input-border-color: #414141;\n  --styled-input-border-color_focus: #414141;\n  --styled-input-background-color: #2a2a2a;\n  --styled-input-placeholder-color: rgba(255, 255, 255, 0.325);\n  --styled-input-label-color: #b1e3ff;\n  --radio-outer-border-color: rgba(255, 255, 255, 0.275);\n  --radio-outer-border-color_active: #b1e3ff;\n  --radio-inner-bg-color: #b1e3ff;\n  --dropdown-bg-color: #1c1c1c;\n  --dropdown-active-bg-color: #2a2a2a;\n  --dropdown-box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  --summary-list-bg-color: #2a2a2a;\n  --custom-pre-bg-color: #1c1c1c;\n  --custom-pre-text-color: #f2f2f2;\n  --custom-pre-border-color: #414141;\n  --modal-bg-color: #2a2a2a;\n  --stat-card-icon-color: var(--text_black);\n  --info-card-bg-color: rgba(255, 255, 255, 0.05);\n  --info-card-feature-color: #b1e3ff;\n  --info-card-content-color: #fff;\n  --tooltip-bg-color: rgba(242, 244, 247, 0.925);\n  --tooltip-text-color: #1c1c1c;\n  --skeleton-gradient: linear-gradient(110deg, rgba(255, 255, 255, 0.1) 8%, rgba(255, 255, 255, 0.14) 29%, rgba(255, 255, 255, 0.1) 47%);\n}\n\n.c-contract-id-container {\n  position: relative;\n  padding-left: 0.8rem;\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.c-contract-id-container::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 0.4rem;\n  background-color: var(--text_1);\n}\n.c-contract-id-container .c-id-label {\n  display: inline-block;\n  margin-right: 0.4rem;\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.c-contract-id-container .c-id-value {\n  display: inline-block;\n  max-width: 10rem;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  direction: rtl;\n  margin-top: 2px;\n}\n@media screen and (max-width: 440px) {\n  .c-contract-id-container .c-id-value {\n    max-width: 7.5rem;\n  }\n}\n\n.c-code-demo-block {\n  position: relative;\n  margin-bottom: 1.2rem;\n}\n\n.c-code-demo-label {\n  display: block;\n  font-weight: 600;\n  font-size: 0.875rem;\n  font-family: "Poppins";\n  margin-bottom: 0.4rem;\n  margin-left: 0.2rem;\n}\n\n/*# sourceMappingURL=ViewContractManifestModal.vue.map */', `<template lang="pug">
modal-template(:title='L("Contract manifest")' icon='suitcase')
  .c-contract-id-container
    span.c-id-label.has-family-poppins contractID :
    text-to-copy.c-id-copy(:text='contract.contractId')
      .c-id-value {{ contract.contractId }}

  .c-code-demo-container
    .c-code-demo-block
      .c-code-demo-label head
      pre.custom-pre {{ content.head }}

    .c-code-demo-block
      .c-code-demo-label body
      pre.custom-pre {{ content.body }}}

    .c-code-demo-block
      .c-code-demo-label signature
      pre.custom-pre {{ content.signature }}
</template>

<script>
import ModalTemplate from './ModalTemplate.vue'
import TextToCopy from '../../../../../backend/dashboard/views/components/TextToCopy.vue'

export default {
  name: 'ViewContractManifestModal',
  components: {
    ModalTemplate,
    TextToCopy
  },
  props: {
    contract: Object
  },
  computed: {
    content () {
      const manifest = this.contract.manifestJSON
      const stringify = content => JSON.stringify(content).replace(/\\\\/g, '')

      return {
        head: stringify(manifest.head),
        body: stringify(manifest.body),
        signature: stringify(manifest.signature)
      }
    }
  }
}
<\/script>

<style lang='scss' scoped>
@import "../../../../../backend/dashboard/assets/style/_variables.scss";

.c-contract-id-container {
  position: relative;
  padding-left: 0.8rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0.4rem;
    background-color: $text_1;
  }

  .c-id-label {
    display: inline-block;
    margin-right: 0.4rem;
    font-weight: 600;
    font-size: $size_5;
  }

  .c-id-value {
    display: inline-block;
    max-width: 10rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    direction: rtl;
    margin-top: 2px;

    @include phone_narrow {
      max-width: 7.5rem;
    }
  }
}

.c-code-demo-block {
  position: relative;
  margin-bottom: 1.2rem;
}

.c-code-demo-label {
  display: block;
  font-weight: 600;
  font-size: $size_5;
  font-family: "Poppins";
  margin-bottom: 0.4rem;
  margin-left: 0.2rem;
}
</style>
`] }, media: void 0 });
};
var __vue_scope_id__3 = "data-v-59ba2e1c";
var __vue_module_identifier__3 = void 0;
var __vue_is_functional_template__3 = false;
function __vue_normalize__3(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang="pug">
modal-template(:title='L("Contract manifest")' icon='suitcase')
  .c-contract-id-container
    span.c-id-label.has-family-poppins contractID :
    text-to-copy.c-id-copy(:text='contract.contractId')
      .c-id-value {{ contract.contractId }}

  .c-code-demo-container
    .c-code-demo-block
      .c-code-demo-label head
      pre.custom-pre {{ content.head }}

    .c-code-demo-block
      .c-code-demo-label body
      pre.custom-pre {{ content.body }}}

    .c-code-demo-block
      .c-code-demo-label signature
      pre.custom-pre {{ content.signature }}
</template>

<script>
import ModalTemplate from './ModalTemplate.vue'
import TextToCopy from '../../../../../backend/dashboard/views/components/TextToCopy.vue'

export default {
  name: 'ViewContractManifestModal',
  components: {
    ModalTemplate,
    TextToCopy
  },
  props: {
    contract: Object
  },
  computed: {
    content () {
      const manifest = this.contract.manifestJSON
      const stringify = content => JSON.stringify(content).replace(/\\\\/g, '')

      return {
        head: stringify(manifest.head),
        body: stringify(manifest.body),
        signature: stringify(manifest.signature)
      }
    }
  }
}
<\/script>

<style lang='scss' scoped>
@import "../../../../../backend/dashboard/assets/style/_variables.scss";

.c-contract-id-container {
  position: relative;
  padding-left: 0.8rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0.4rem;
    background-color: $text_1;
  }

  .c-id-label {
    display: inline-block;
    margin-right: 0.4rem;
    font-weight: 600;
    font-size: $size_5;
  }

  .c-id-value {
    display: inline-block;
    max-width: 10rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    direction: rtl;
    margin-top: 2px;

    @include phone_narrow {
      max-width: 7.5rem;
    }
  }
}

.c-code-demo-block {
  position: relative;
  margin-bottom: 1.2rem;
}

.c-code-demo-label {
  display: block;
  font-weight: 600;
  font-size: $size_5;
  font-family: "Poppins";
  margin-bottom: 0.4rem;
  margin-left: 0.2rem;
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
function __vue_create_injector__3() {
  const styles = __vue_create_injector__3.styles || (__vue_create_injector__3.styles = {});
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
var __vue_component__3 = /* @__PURE__ */ __vue_normalize__3({ render: __vue_render__3, staticRenderFns: __vue_staticRenderFns__3 }, __vue_inject_styles__3, __vue_script__3, __vue_scope_id__3, __vue_is_functional_template__3, __vue_module_identifier__3, false, __vue_create_injector__3, void 0, void 0);
var ViewContractManifestModal_default = __vue_component__3;
export {
  ViewContractManifestModal_default as default
};
//# sourceMappingURL=ViewContractManifestModal-4AVPTQRX-cached.js.map
