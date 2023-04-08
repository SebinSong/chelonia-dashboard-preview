import {
  StatCard_default
} from "./chunk-YRQP75QW-cached.js";
import {
  MONTHS_MILLIS,
  addTimeToDate,
  humanDate
} from "./chunk-CSVVZG3Y-cached.js";
import {
  PageTemplate_default
} from "./chunk-KL5YS2D6-cached.js";
import {
  L
} from "./chunk-LWWMWDO5-cached.js";
import "./chunk-ANXCCFQT-cached.js";

// backend/dashboard/views/pages/Dashboard.vue
var PAST_THREE_MONTHS = -3 * MONTHS_MILLIS;
var randomPastDate = () => addTimeToDate(new Date(), Math.floor(Math.random() * PAST_THREE_MONTHS));
var __vue_script__ = {
  name: "Dashboard",
  components: {
    PageTemplate: PageTemplate_default,
    StatCard: StatCard_default
  },
  data() {
    return {
      ephemeral: {
        stats: [
          { id: "users", name: L("Total users"), value: 2150, icon: "trend-up" },
          { id: "groups", name: L("Total groups"), value: 23, icon: "chart-bar" },
          { id: "storage", name: L("Total storage"), value: "2GB", icon: "battery-charging" }
        ],
        recentUsers: [
          { name: "TaoEffect", joined: randomPastDate() },
          { name: "Leilha P", joined: randomPastDate() },
          { name: "Alex Jin", joined: randomPastDate() },
          { name: "Sebin Song", joined: randomPastDate() },
          { name: "Pierre", joined: randomPastDate() }
        ].sort((a, b) => b.joined.getTime() - a.joined.getTime()),
        spaceUsage: {
          database: { name: L("Database"), value: 1.8, unit: "Gb" },
          media: { name: L("Media/Images"), value: 500, unit: "Mb" }
        }
      }
    };
  },
  methods: {
    humanDate
  }
};
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("page-template", {
    scopedSlots: _vm._u([
      {
        key: "title",
        fn: function() {
          return [_vm._v(_vm._s(_vm.L("Dashboard")))];
        },
        proxy: true
      }
    ])
  }, [
    _c("section", { staticClass: "c-stats-section" }, [
      _c("i18n", { staticClass: "section-title" }, [_vm._v("Stats")]),
      _c("div", { staticClass: "c-stat-cards" }, _vm._l(_vm.ephemeral.stats, function(item, index) {
        return _c("stat-card", {
          key: item.id,
          staticClass: "c-stat-card",
          attrs: {
            description: item.name,
            stat: item.value,
            icon: item.icon,
            color: index % 2 === 0 ? "blue" : "purple"
          }
        });
      }), 1)
    ], 1),
    _c("section", { staticClass: "c-recent-and-summary" }, [
      _c("i18n", { staticClass: "section-title" }, [
        _vm._v("Users / Space")
      ]),
      _c("div", { staticClass: "c-flex-container" }, [
        _c("div", { staticClass: "summary-list" }, [
          _c("i18n", { staticClass: "summary-list-label" }, [
            _vm._v("Recent users")
          ]),
          _c("ul", [
            _c("li", { staticClass: "summary-list-item c-user-list-ths" }, [
              _c("i18n", { attrs: { tag: "label" } }, [
                _vm._v("Name")
              ]),
              _c("i18n", { attrs: { tag: "label" } }, [
                _vm._v("Joined on")
              ])
            ], 1),
            _vm._l(_vm.ephemeral.recentUsers, function(user) {
              return _c("li", { key: user.name, staticClass: "summary-list-item" }, [
                _c("span", [_vm._v(_vm._s(user.name))]),
                _c("span", [
                  _vm._v(_vm._s(_vm.humanDate(user.joined)))
                ])
              ]);
            })
          ], 2)
        ], 1),
        _c("div", { staticClass: "summary-list is-outlined" }, [
          _c("i18n", { staticClass: "summary-list-label" }, [
            _vm._v("Sapce usage")
          ]),
          _c("ul", _vm._l(_vm.ephemeral.spaceUsage, function(item, key) {
            return _c("li", { key, staticClass: "summary-list-item" }, [
              _c("label", [_vm._v(_vm._s(item.name))]),
              _c("span", { staticClass: "c-usage-value" }, [
                _vm._v(_vm._s(item.value) + " " + _vm._s(item.unit))
              ])
            ]);
          }), 0)
        ], 1)
      ])
    ], 1)
  ]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = function(inject) {
  if (!inject)
    return;
  inject("data-v-6bd26213_0", { source: "/* NOTE: <variable-name> : (<light-theme-value>, <dark-theme-value>) */\n/* stylelint-disable */\n/* stylelint-enable */\n[data-v-6bd26213]:root {\n  --button-primary-bg-color: #1c1c1c;\n  --button-primary-text-color: #fff;\n  --button-outline-bg-color: rgba(0, 0, 0, 0);\n  --button-outline-border-color: rgba(0, 0, 0, 0.4);\n  --button-outline-text-color: #1c1c1c;\n  --button-box-shadow: 0 0 16px rgba(219, 219, 219, 0.5);\n  --styled-input-border-color: rgba(0, 0, 0, 0.1);\n  --styled-input-border-color_focus: rgba(0, 0, 0, 0.4);\n  --styled-input-background-color: #fff;\n  --styled-input-placeholder-color: rgba(0, 0, 0, 0.275);\n  --styled-input-label-color: #9747ff;\n  --radio-outer-border-color: rgba(0, 0, 0, 0.2);\n  --radio-outer-border-color_active: #1C1C1C;\n  --radio-inner-bg-color: #1C1C1C;\n  --dropdown-bg-color: #FFFFFF;\n  --dropdown-active-bg-color: #F7F9FB;\n  --dropdown-box-shadow: 0 0 16px rgba(219, 219, 219, 0.5);\n  --summary-list-bg-color: #fff;\n  --custom-pre-bg-color: #f2f2f2;\n  --custom-pre-text-color: #1c1c1c;\n  --custom-pre-border-color: rgba(0, 0, 0, 0.1);\n  --modal-bg-color: #fff;\n  --stat-card-icon-color: var(--text_1);\n  --info-card-bg-color: #fff;\n  --info-card-feature-color: #1c1c1c;\n  --info-card-content-color: rgba(0, 0, 0, 0.5);\n  --tooltip-bg-color: rgba(28, 28, 28, 0.875);\n  --tooltip-text-color: #fff;\n  --skeleton-gradient: linear-gradient(110deg, rgba(0, 0, 0, 0.05) 12%, rgba(60, 60, 60, 0.125) 25%, rgba(0, 0, 0, 0.05) 42%);\n}\n:root[data-theme=dark][data-v-6bd26213] {\n  --button-primary-bg-color: #b1e3ff;\n  --button-primary-text-color: #1c1c1c;\n  --button-outline-bg-color: rgba(0, 0, 0, 0);\n  --button-outline-border-color: #414141;\n  --button-outline-text-color: #fff;\n  --button-box-shadow: 0 0 12px rgba(132, 132, 132, 0.35);\n  --styled-input-border-color: #414141;\n  --styled-input-border-color_focus: #414141;\n  --styled-input-background-color: #2a2a2a;\n  --styled-input-placeholder-color: rgba(255, 255, 255, 0.325);\n  --styled-input-label-color: #b1e3ff;\n  --radio-outer-border-color: rgba(255, 255, 255, 0.275);\n  --radio-outer-border-color_active: #b1e3ff;\n  --radio-inner-bg-color: #b1e3ff;\n  --dropdown-bg-color: #1c1c1c;\n  --dropdown-active-bg-color: #2a2a2a;\n  --dropdown-box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  --summary-list-bg-color: #2a2a2a;\n  --custom-pre-bg-color: #1c1c1c;\n  --custom-pre-text-color: #f2f2f2;\n  --custom-pre-border-color: #414141;\n  --modal-bg-color: #2a2a2a;\n  --stat-card-icon-color: var(--text_black);\n  --info-card-bg-color: rgba(255, 255, 255, 0.05);\n  --info-card-feature-color: #b1e3ff;\n  --info-card-content-color: #fff;\n  --tooltip-bg-color: rgba(242, 244, 247, 0.925);\n  --tooltip-text-color: #1c1c1c;\n  --skeleton-gradient: linear-gradient(110deg, rgba(255, 255, 255, 0.1) 8%, rgba(255, 255, 255, 0.14) 29%, rgba(255, 255, 255, 0.1) 47%);\n}\n.c-stats-section[data-v-6bd26213] {\n  margin-bottom: 3.2rem;\n}\n.c-stat-cards[data-v-6bd26213] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1.25rem;\n}\n.c-flex-container[data-v-6bd26213] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: flex-start;\n  gap: 1.75rem;\n}\n.c-user-list-ths[data-v-6bd26213] {\n  font-weight: 600;\n  font-size: 0.875rem;\n  margin-bottom: 0.25rem;\n}\n.c-usage-value[data-v-6bd26213] {\n  font-weight: 600;\n  font-size: 1.25em;\n}\n\n/*# sourceMappingURL=Dashboard.vue.map */", map: { "version": 3, "sources": ["Dashboard.vue", "backend/dashboard/views/pages/Dashboard.vue"], "names": [], "mappings": "AAAA,sEAAsE;AACtE,sBAAsB;AACtB,qBAAqB;ACmFrB;EAIA,kCAAA;EAAA,iCAAA;EAAA,2CAAA;EAAA,iDAAA;EAAA,oCAAA;EAAA,sDAAA;EAAA,+CAAA;EAAA,qDAAA;EAAA,qCAAA;EAAA,sDAAA;EAAA,mCAAA;EAAA,8CAAA;EAAA,0CAAA;EAAA,+BAAA;EAAA,4BAAA;EAAA,mCAAA;EAAA,wDAAA;EAAA,6BAAA;EAAA,8BAAA;EAAA,gCAAA;EAAA,6CAAA;EAAA,sBAAA;EAAA,qCAAA;EAAA,0BAAA;EAAA,kCAAA;EAAA,6CAAA;EAAA,2CAAA;EAAA,0BAAA;EAAA,2HAAA;ADxDA;AC6DA;ED1DE,kCAAkC;EAClC,oCAAoC;EACpC,2CAA2C;EAC3C,sCAAsC;EACtC,iCAAiC;EACjC,uDAAuD;EACvD,oCAAoC;EACpC,0CAA0C;EAC1C,wCAAwC;EACxC,4DAA4D;EAC5D,mCAAmC;EACnC,sDAAsD;EACtD,0CAA0C;EAC1C,+BAA+B;EAC/B,4BAA4B;EAC5B,mCAAmC;EACnC,+CAA+C;EAC/C,gCAAgC;EAChC,8BAA8B;EAC9B,gCAAgC;EAChC,kCAAkC;EAClC,yBAAyB;EACzB,yCAAyC;EACzC,+CAA+C;EAC/C,kCAAkC;EAClC,+BAA+B;EAC/B,8CAA8C;EAC9C,6BAA6B;EAC7B,sIAAsI;AACxI;ACsBA;EACA,qBAAA;ADnBA;ACsBA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,YAAA;ADnBA;ACsBA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,2BAAA;EACA,YAAA;ADnBA;ACsBA;EACA,gBAAA;EACA,mBAAA;EACA,sBAAA;ADnBA;ACsBA;EACA,gBAAA;EACA,iBAAA;ADnBA;;AAEA,wCAAwC", "file": "Dashboard.vue", "sourcesContent": ["/* NOTE: <variable-name> : (<light-theme-value>, <dark-theme-value>) */\n/* stylelint-disable */\n/* stylelint-enable */\n:root {\n  --button-primary-bg-color: #1c1c1c;\n  --button-primary-text-color: #fff;\n  --button-outline-bg-color: rgba(0, 0, 0, 0);\n  --button-outline-border-color: rgba(0, 0, 0, 0.4);\n  --button-outline-text-color: #1c1c1c;\n  --button-box-shadow: 0 0 16px rgba(219, 219, 219, 0.5);\n  --styled-input-border-color: rgba(0, 0, 0, 0.1);\n  --styled-input-border-color_focus: rgba(0, 0, 0, 0.4);\n  --styled-input-background-color: #fff;\n  --styled-input-placeholder-color: rgba(0, 0, 0, 0.275);\n  --styled-input-label-color: #9747ff;\n  --radio-outer-border-color: rgba(0, 0, 0, 0.2);\n  --radio-outer-border-color_active: #1C1C1C;\n  --radio-inner-bg-color: #1C1C1C;\n  --dropdown-bg-color: #FFFFFF;\n  --dropdown-active-bg-color: #F7F9FB;\n  --dropdown-box-shadow: 0 0 16px rgba(219, 219, 219, 0.5);\n  --summary-list-bg-color: #fff;\n  --custom-pre-bg-color: #f2f2f2;\n  --custom-pre-text-color: #1c1c1c;\n  --custom-pre-border-color: rgba(0, 0, 0, 0.1);\n  --modal-bg-color: #fff;\n  --stat-card-icon-color: var(--text_1);\n  --info-card-bg-color: #fff;\n  --info-card-feature-color: #1c1c1c;\n  --info-card-content-color: rgba(0, 0, 0, 0.5);\n  --tooltip-bg-color: rgba(28, 28, 28, 0.875);\n  --tooltip-text-color: #fff;\n  --skeleton-gradient: linear-gradient(110deg, rgba(0, 0, 0, 0.05) 12%, rgba(60, 60, 60, 0.125) 25%, rgba(0, 0, 0, 0.05) 42%);\n}\n\n:root[data-theme=dark] {\n  --button-primary-bg-color: #b1e3ff;\n  --button-primary-text-color: #1c1c1c;\n  --button-outline-bg-color: rgba(0, 0, 0, 0);\n  --button-outline-border-color: #414141;\n  --button-outline-text-color: #fff;\n  --button-box-shadow: 0 0 12px rgba(132, 132, 132, 0.35);\n  --styled-input-border-color: #414141;\n  --styled-input-border-color_focus: #414141;\n  --styled-input-background-color: #2a2a2a;\n  --styled-input-placeholder-color: rgba(255, 255, 255, 0.325);\n  --styled-input-label-color: #b1e3ff;\n  --radio-outer-border-color: rgba(255, 255, 255, 0.275);\n  --radio-outer-border-color_active: #b1e3ff;\n  --radio-inner-bg-color: #b1e3ff;\n  --dropdown-bg-color: #1c1c1c;\n  --dropdown-active-bg-color: #2a2a2a;\n  --dropdown-box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n  --summary-list-bg-color: #2a2a2a;\n  --custom-pre-bg-color: #1c1c1c;\n  --custom-pre-text-color: #f2f2f2;\n  --custom-pre-border-color: #414141;\n  --modal-bg-color: #2a2a2a;\n  --stat-card-icon-color: var(--text_black);\n  --info-card-bg-color: rgba(255, 255, 255, 0.05);\n  --info-card-feature-color: #b1e3ff;\n  --info-card-content-color: #fff;\n  --tooltip-bg-color: rgba(242, 244, 247, 0.925);\n  --tooltip-text-color: #1c1c1c;\n  --skeleton-gradient: linear-gradient(110deg, rgba(255, 255, 255, 0.1) 8%, rgba(255, 255, 255, 0.14) 29%, rgba(255, 255, 255, 0.1) 47%);\n}\n\n.c-stats-section {\n  margin-bottom: 3.2rem;\n}\n\n.c-stat-cards {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1.25rem;\n}\n\n.c-flex-container {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  justify-content: flex-start;\n  gap: 1.75rem;\n}\n\n.c-user-list-ths {\n  font-weight: 600;\n  font-size: 0.875rem;\n  margin-bottom: 0.25rem;\n}\n\n.c-usage-value {\n  font-weight: 600;\n  font-size: 1.25em;\n}\n\n/*# sourceMappingURL=Dashboard.vue.map */", `<template lang='pug'>
page-template
  template(#title='') {{ L('Dashboard') }}

  section.c-stats-section
    i18n.section-title Stats

    .c-stat-cards
      stat-card.c-stat-card(v-for='(item, index) in ephemeral.stats'
        :key='item.id'
        :description='item.name'
        :stat='item.value'
        :icon='item.icon'
        :color='index % 2 === 0 ? "blue" : "purple"'
      )

  section.c-recent-and-summary
    i18n.section-title Users / Space

    .c-flex-container
      .summary-list
        i18n.summary-list-label Recent users

        ul
          li.summary-list-item.c-user-list-ths
            i18n(tag='label') Name
            i18n(tag='label') Joined on
          li.summary-list-item(v-for='user in ephemeral.recentUsers' :key='user.name')
            span {{ user.name }}
            span {{ humanDate(user.joined) }}

      .summary-list.is-outlined
        i18n.summary-list-label Sapce usage

        ul
          li.summary-list-item(v-for='(item, key) in ephemeral.spaceUsage' :key='key')
            label {{ item.name }}
            span.c-usage-value {{ item.value }} {{ item.unit }}
</template>

<script>
import PageTemplate from './PageTemplate.vue'
import StatCard from '../../../../backend/dashboard/views/components/StatCard.vue'
import L from '../../../../backend/dashboard/common/translations.js'
import { addTimeToDate, MONTHS_MILLIS, humanDate } from '../../../../backend/dashboard/common/cdTimeUtils.js'

const PAST_THREE_MONTHS = -3 * MONTHS_MILLIS
const randomPastDate = () => addTimeToDate(new Date(), Math.floor(Math.random() * PAST_THREE_MONTHS))

export default {
  name: 'Dashboard',
  components: {
    PageTemplate,
    StatCard
  },
  data () {
    return {
      ephemeral: {
        // ------ temporary dummy placeholder data ------ //
        stats: [
          { id: 'users', name: L('Total users'), value: 2150, icon: 'trend-up' },
          { id: 'groups', name: L('Total groups'), value: 23, icon: 'chart-bar' },
          { id: 'storage', name: L('Total storage'), value: '2GB', icon: 'battery-charging' }
        ],
        recentUsers: [
          { name: 'TaoEffect', joined: randomPastDate() },
          { name: 'Leilha P', joined: randomPastDate() },
          { name: 'Alex Jin', joined: randomPastDate() },
          { name: 'Sebin Song', joined: randomPastDate() },
          { name: 'Pierre', joined: randomPastDate() }
        ].sort((a, b) => b.joined.getTime() - a.joined.getTime()),
        spaceUsage: {
          database: { name: L('Database'), value: 1.8, unit: 'Gb' },
          media: { name: L('Media/Images'), value: 500, unit: 'Mb' }
        }
      }
    }
  },
  methods: {
    humanDate
  }
}
<\/script>

<style lang="scss" scoped>
@import "../../../../backend/dashboard/assets/style/_variables.scss";

.c-stats-section {
  margin-bottom: 3.2rem;
}

.c-stat-cards {
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;
}

.c-flex-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.75rem;
}

.c-user-list-ths {
  font-weight: 600;
  font-size: $size_5;
  margin-bottom: 0.25rem;
}

.c-usage-value {
  font-weight: 600;
  font-size: 1.25em;
}
</style>
`] }, media: void 0 });
};
var __vue_scope_id__ = "data-v-6bd26213";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  const component = (typeof script === "function" ? script.options : script) || {};
  component.__file = `<template lang='pug'>
page-template
  template(#title='') {{ L('Dashboard') }}

  section.c-stats-section
    i18n.section-title Stats

    .c-stat-cards
      stat-card.c-stat-card(v-for='(item, index) in ephemeral.stats'
        :key='item.id'
        :description='item.name'
        :stat='item.value'
        :icon='item.icon'
        :color='index % 2 === 0 ? "blue" : "purple"'
      )

  section.c-recent-and-summary
    i18n.section-title Users / Space

    .c-flex-container
      .summary-list
        i18n.summary-list-label Recent users

        ul
          li.summary-list-item.c-user-list-ths
            i18n(tag='label') Name
            i18n(tag='label') Joined on
          li.summary-list-item(v-for='user in ephemeral.recentUsers' :key='user.name')
            span {{ user.name }}
            span {{ humanDate(user.joined) }}

      .summary-list.is-outlined
        i18n.summary-list-label Sapce usage

        ul
          li.summary-list-item(v-for='(item, key) in ephemeral.spaceUsage' :key='key')
            label {{ item.name }}
            span.c-usage-value {{ item.value }} {{ item.unit }}
</template>

<script>
import PageTemplate from './PageTemplate.vue'
import StatCard from '../../../../backend/dashboard/views/components/StatCard.vue'
import L from '../../../../backend/dashboard/common/translations.js'
import { addTimeToDate, MONTHS_MILLIS, humanDate } from '../../../../backend/dashboard/common/cdTimeUtils.js'

const PAST_THREE_MONTHS = -3 * MONTHS_MILLIS
const randomPastDate = () => addTimeToDate(new Date(), Math.floor(Math.random() * PAST_THREE_MONTHS))

export default {
  name: 'Dashboard',
  components: {
    PageTemplate,
    StatCard
  },
  data () {
    return {
      ephemeral: {
        // ------ temporary dummy placeholder data ------ //
        stats: [
          { id: 'users', name: L('Total users'), value: 2150, icon: 'trend-up' },
          { id: 'groups', name: L('Total groups'), value: 23, icon: 'chart-bar' },
          { id: 'storage', name: L('Total storage'), value: '2GB', icon: 'battery-charging' }
        ],
        recentUsers: [
          { name: 'TaoEffect', joined: randomPastDate() },
          { name: 'Leilha P', joined: randomPastDate() },
          { name: 'Alex Jin', joined: randomPastDate() },
          { name: 'Sebin Song', joined: randomPastDate() },
          { name: 'Pierre', joined: randomPastDate() }
        ].sort((a, b) => b.joined.getTime() - a.joined.getTime()),
        spaceUsage: {
          database: { name: L('Database'), value: 1.8, unit: 'Gb' },
          media: { name: L('Media/Images'), value: 500, unit: 'Mb' }
        }
      }
    }
  },
  methods: {
    humanDate
  }
}
<\/script>

<style lang="scss" scoped>
@import "../../../../backend/dashboard/assets/style/_variables.scss";

.c-stats-section {
  margin-bottom: 3.2rem;
}

.c-stat-cards {
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;
}

.c-flex-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.75rem;
}

.c-user-list-ths {
  font-weight: 600;
  font-size: $size_5;
  margin-bottom: 0.25rem;
}

.c-usage-value {
  font-weight: 600;
  font-size: 1.25em;
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
var Dashboard_default = __vue_component__;
export {
  Dashboard_default as default
};
//# sourceMappingURL=Dashboard-U5CZJYTS-cached.js.map
