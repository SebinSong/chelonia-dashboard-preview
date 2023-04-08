import{d as C}from"./chunk-AG24O35S-cached.js";import"./chunk-AI4MMCWV-cached.js";import{a as w,b as I}from"./chunk-MK633SKU-cached.js";import{a as x}from"./chunk-VQUKJVKE-cached.js";import{a as y}from"./chunk-TLIBW56K-cached.js";import{g as m}from"./chunk-FTMTWUCB-cached.js";import{d as k}from"./chunk-KZGLYBS6-cached.js";var N={name:"StyledInput",props:{value:{type:String,required:!1},label:{type:String,required:!1},placeholder:{type:String,required:!1,default:""},autofocus:{type:Boolean,default:!1}},methods:{focus(){this.$refs.input.focus()},onInput(e){this.$emit("input",e.target.value)}}},R=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("label",{staticClass:"inputgroup"},[e.label?o("span",{staticClass:"input-label"},[e._v(e._s(e.label))]):e._e(),o("input",{directives:[{name:"focus",rawName:"v-focus",value:e.autofocus,expression:"autofocus"}],ref:"input",staticClass:"input",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.value},on:{input:e.onInput,blur:function(r){return e.$emit("blur")}}})])},F=[],A=void 0,E=void 0,U=void 0,j=!1;function T(e,a,o,r,c,u,n,l,d,s){let t=(typeof o=="function"?o.options:o)||{};return t.__file=`script>
`,t.render||(t.render=e.render,t.staticRenderFns=e.staticRenderFns,t._compiled=!0,c&&(t.functional=!0)),t._scopeId=r,t}var D=T({render:R,staticRenderFns:F},A,N,E,j,U,!1,void 0,void 0,void 0),S=D;var L={name:"InfoCard",props:{heading:{type:String,required:!1,default:""},icon:{type:String,default:"info"}}},q=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"c-info-card"},[o("i",{class:"icon-"+e.icon+" c-info-card-icon"}),o("div",{staticClass:"c-info-card-content"},[e.heading?o("h4",{staticClass:"c-info-card-heading is-title-4"},[e._v(e._s(e.heading))]):e._e(),o("div",{staticClass:"c-info-card-body"},[e._t("default")],2)])])},O=[],B=function(e){!e||e("data-v-a46c4286_0",{source:"[data-v-a46c4286]:root{--button-primary-bg-color:#1c1c1c;--button-primary-text-color:#fff;--button-outline-bg-color:rgba(0, 0, 0, 0);--button-outline-border-color:rgba(0, 0, 0, 0.4);--button-outline-text-color:#1c1c1c;--button-box-shadow:0 0 16px rgba(219, 219, 219, 0.5);--styled-input-border-color:rgba(0, 0, 0, 0.1);--styled-input-border-color_focus:rgba(0, 0, 0, 0.4);--styled-input-background-color:#fff;--styled-input-placeholder-color:rgba(0, 0, 0, 0.275);--styled-input-label-color:#9747ff;--radio-outer-border-color:rgba(0, 0, 0, 0.2);--radio-outer-border-color_active:#1C1C1C;--radio-inner-bg-color:#1C1C1C;--dropdown-bg-color:#FFFFFF;--dropdown-active-bg-color:#F7F9FB;--dropdown-box-shadow:0 0 16px rgba(219, 219, 219, 0.5);--summary-list-bg-color:#fff;--custom-pre-bg-color:#f2f2f2;--custom-pre-text-color:#1c1c1c;--custom-pre-border-color:rgba(0, 0, 0, 0.1);--modal-bg-color:#fff;--stat-card-icon-color:var(--text_1);--info-card-bg-color:#fff;--info-card-feature-color:#1c1c1c;--info-card-content-color:rgba(0, 0, 0, 0.5);--tooltip-bg-color:rgba(28, 28, 28, 0.875);--tooltip-text-color:#fff;--skeleton-gradient:linear-gradient(110deg, rgba(0, 0, 0, 0.05) 12%, rgba(60, 60, 60, 0.125) 25%, rgba(0, 0, 0, 0.05) 42%)}:root[data-theme=dark][data-v-a46c4286]{--button-primary-bg-color:#b1e3ff;--button-primary-text-color:#1c1c1c;--button-outline-bg-color:rgba(0, 0, 0, 0);--button-outline-border-color:#414141;--button-outline-text-color:#fff;--button-box-shadow:0 0 12px rgba(132, 132, 132, 0.35);--styled-input-border-color:#414141;--styled-input-border-color_focus:#414141;--styled-input-background-color:#2a2a2a;--styled-input-placeholder-color:rgba(255, 255, 255, 0.325);--styled-input-label-color:#b1e3ff;--radio-outer-border-color:rgba(255, 255, 255, 0.275);--radio-outer-border-color_active:#b1e3ff;--radio-inner-bg-color:#b1e3ff;--dropdown-bg-color:#1c1c1c;--dropdown-active-bg-color:#2a2a2a;--dropdown-box-shadow:0 0 1px rgba(0, 0, 0, 0);--summary-list-bg-color:#2a2a2a;--custom-pre-bg-color:#1c1c1c;--custom-pre-text-color:#f2f2f2;--custom-pre-border-color:#414141;--modal-bg-color:#2a2a2a;--stat-card-icon-color:var(--text_black);--info-card-bg-color:rgba(255, 255, 255, 0.05);--info-card-feature-color:#b1e3ff;--info-card-content-color:#fff;--tooltip-bg-color:rgba(242, 244, 247, 0.925);--tooltip-text-color:#1c1c1c;--skeleton-gradient:linear-gradient(110deg, rgba(255, 255, 255, 0.1) 8%, rgba(255, 255, 255, 0.14) 29%, rgba(255, 255, 255, 0.1) 47%)}.c-info-card[data-v-a46c4286]{display:flex;align-items:flex-start;width:100%;padding:1.25rem 1rem;border:2px solid var(--info-card-feature-color);border-radius:.5rem;background-color:var(--info-card-bg-color)}.c-info-card-icon[data-v-a46c4286]{display:inline-block;flex-shrink:0;margin-right:.75rem;font-size:2rem;line-height:1.25;font-weight:600;color:var(--info-card-feature-color)}.c-info-card-content[data-v-a46c4286]{flex-grow:1}.c-info-card-heading[data-v-a46c4286]{margin-top:.25rem;margin-bottom:.5rem;color:var(--text_0)}.c-info-card-body[data-v-a46c4286]{color:var(--text_1);color:var(--info-card-content-color)}",map:void 0,media:void 0})},V="data-v-a46c4286",X=void 0,M=!1;function z(e,a,o,r,c,u,n,l,d,s){let t=(typeof o=="function"?o.options:o)||{};t.__file=`style>
`,t.render||(t.render=e.render,t.staticRenderFns=e.staticRenderFns,t._compiled=!0,c&&(t.functional=!0)),t._scopeId=r;{let f;if(a&&(f=n?function(i){a.call(this,s(i,this.$root.$options.shadowRoot))}:function(i){a.call(this,l(i))}),f!==void 0)if(t.functional){let i=t.render;t.render=function(b,p){return f.call(p),i(b,p)}}else{let i=t.beforeCreate;t.beforeCreate=i?[].concat(i,f):[f]}}return t}function g(){let e=g.styles||(g.styles={}),a=typeof navigator<"u"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,c){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let u=a?c.media||"default":r,n=e[u]||(e[u]={ids:[],parts:[],element:void 0});if(!n.ids.includes(r)){let l=c.source,d=n.ids.length;if(n.ids.push(r),c.map&&(l+=`
/*# sourceURL=`+c.map.sources[0]+" */",l+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(c.map))))+" */"),a&&(n.element=n.element||document.querySelector("style[data-group="+u+"]")),!n.element){let s=document.head||document.getElementsByTagName("head")[0],t=n.element=document.createElement("style");t.type="text/css",c.media&&t.setAttribute("media",c.media),a&&(t.setAttribute("data-group",u),t.setAttribute("data-next-index","0")),s.appendChild(t)}if(a&&(d=parseInt(n.element.getAttribute("data-next-index")),n.element.setAttribute("data-next-index",d+1)),n.element.styleSheet)n.parts.push(l),n.element.styleSheet.cssText=n.parts.filter(Boolean).join(`
`);else{let s=document.createTextNode(l),t=n.element.childNodes;t[d]&&n.element.removeChild(t[d]),t.length?n.element.insertBefore(s,t[d]):n.element.appendChild(s)}}}}var P=z({render:q,staticRenderFns:O},B,L,V,M,X,!1,g,void 0,void 0),$=P;var _=k(I()),W={name:"Accounts",mixins:[w],components:{PageTemplate:y,StyledInput:S,Dropdown:x,InfoCard:$},data(){return{ephemeral:{fakeApplicationOptions:C},form:{application:null,instanceName:"",displayName:"",domain:"",allowUnencryptedData:null}}},methods:{onDropdownSelect(e){this.form.application=e},onCancelClick(){this.$router.push({path:"/main"})},onSaveClick(){this.$v.$touch()}},validations:{form:{application:{[m("An application has to be selected.")]:_.required},instanceName:{[m("An instance name is required.")]:_.required},displayName:{[m("A display name is required.")]:_.required},domain:{[m("A domain address is required.")]:_.required}}}},J=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("page-template",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v(e._s(e.L("Create a new instance")))]},proxy:!0}])},[o("section",{staticClass:"c-create-instance-section"},[o("form",{staticClass:"c-forms",on:{submit:function(r){r.preventDefault()}}},[o("div",{staticClass:"field"},[o("InfoCard",{staticClass:"c-info-card",attrs:{heading:e.L("Note")}},[e._v(`In order to create a new Application Instance, you\u2019ll need a domain name. If you don\u2019t already have one,
 you can find an available one and register for a fee with a hosting website and then proceed to create your instance.`)])],1),o("div",{staticClass:"field"},[o("i18n",{staticClass:"label",attrs:{tag:"label"}},[e._v("Software / Application")]),o("dropdown",{directives:[{name:"error",rawName:"v-error:application",arg:"application"}],staticClass:"c-type-dropdown",class:{"is-error":e.$v.form.application.$error},attrs:{options:e.ephemeral.fakeApplicationOptions,"disable-click-away":!0},on:{select:e.onDropdownSelect,blur:function(r){return e.updateField("application",e.form.application)}}})],1),o("div",{staticClass:"field"},[o("StyledInput",{directives:[{name:"error",rawName:"v-error:instanceName",arg:"instanceName"}],class:{"is-error":e.$v.form.instanceName.$error},attrs:{label:e.L("Instance name"),placeholder:e.L("Enter instance name")},on:{blur:function(r){return e.updateField("instanceName",e.form.instanceName)}},model:{value:e.form.instanceName,callback:function(r){e.$set(e.form,"instanceName",r)},expression:"form.instanceName"}}),o("i18n",{staticClass:"helper c-helper"},[e._v("A short alphanumeric name to identify your instance internally. It cannot be changed later and must be unique.")])],1),o("div",{staticClass:"field"},[o("StyledInput",{directives:[{name:"error",rawName:"v-error:displayName",arg:"displayName"}],class:{"is-error":e.$v.form.displayName.$error},attrs:{label:e.L("Display name"),placeholder:e.L("Enter display name")},on:{blur:function(r){return e.updateField("displayName",e.form.displayName)}},model:{value:e.form.displayName,callback:function(r){e.$set(e.form,"displayName",r)},expression:"form.displayName"}}),o("i18n",{staticClass:"helper c-helper"},[e._v("Used on this dashboard to represent your instance.")])],1),o("div",{staticClass:"field mb-15"},[o("StyledInput",{directives:[{name:"error",rawName:"v-error:domain",arg:"domain"}],class:{"is-error":e.$v.form.domain.$error},attrs:{label:e.L("Domain"),placeholder:e.L("Enter domain")},on:{blur:function(r){return e.updateField("domain",e.form.domain)}},model:{value:e.form.domain,callback:function(r){e.$set(e.form,"domain",r)},expression:"form.domain"}}),o("i18n",{staticClass:"helper c-helper"},[e._v("The domain name (or subdomain) where you\u2019ll host your instance. It cannot be changed later.")])],1),o("fieldset",{staticClass:"field"},[o("legend",{staticClass:"label"},[e._v(e._s(e.L("Allow unencrypted data on contracts?")))]),o("label",{staticClass:"radio"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.allowUnencryptedData,expression:"form.allowUnencryptedData"}],staticClass:"input",attrs:{type:"radio",name:"allowUnencrypted",value:"yes"},domProps:{checked:e._q(e.form.allowUnencryptedData,"yes")},on:{change:function(r){return e.$set(e.form,"allowUnencryptedData","yes")}}}),o("i18n",[e._v("Allow unencrypted contracts")])],1),o("label",{staticClass:"radio"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.allowUnencryptedData,expression:"form.allowUnencryptedData"}],staticClass:"input",attrs:{type:"radio",name:"allowUnencrypted",value:"no"},domProps:{checked:e._q(e.form.allowUnencryptedData,"no")},on:{change:function(r){return e.$set(e.form,"allowUnencryptedData","no")}}}),o("i18n",[e._v("Don\u2019t allow unencrypted contracts")])],1)]),o("div",{staticClass:"c-btn-container"},[o("i18n",{staticClass:"is-outlined",attrs:{tag:"button"},on:{click:e.onCancelClick}},[e._v("cancel")]),o("i18n",{attrs:{tag:"button",disabled:e.$v.form.$invalid},on:{click:e.onSaveClick}},[e._v("Save")])],1)])])])},G=[],H=function(e){!e||e("data-v-8045cbd0_0",{source:"[data-v-8045cbd0]:root{--button-primary-bg-color:#1c1c1c;--button-primary-text-color:#fff;--button-outline-bg-color:rgba(0, 0, 0, 0);--button-outline-border-color:rgba(0, 0, 0, 0.4);--button-outline-text-color:#1c1c1c;--button-box-shadow:0 0 16px rgba(219, 219, 219, 0.5);--styled-input-border-color:rgba(0, 0, 0, 0.1);--styled-input-border-color_focus:rgba(0, 0, 0, 0.4);--styled-input-background-color:#fff;--styled-input-placeholder-color:rgba(0, 0, 0, 0.275);--styled-input-label-color:#9747ff;--radio-outer-border-color:rgba(0, 0, 0, 0.2);--radio-outer-border-color_active:#1C1C1C;--radio-inner-bg-color:#1C1C1C;--dropdown-bg-color:#FFFFFF;--dropdown-active-bg-color:#F7F9FB;--dropdown-box-shadow:0 0 16px rgba(219, 219, 219, 0.5);--summary-list-bg-color:#fff;--custom-pre-bg-color:#f2f2f2;--custom-pre-text-color:#1c1c1c;--custom-pre-border-color:rgba(0, 0, 0, 0.1);--modal-bg-color:#fff;--stat-card-icon-color:var(--text_1);--info-card-bg-color:#fff;--info-card-feature-color:#1c1c1c;--info-card-content-color:rgba(0, 0, 0, 0.5);--tooltip-bg-color:rgba(28, 28, 28, 0.875);--tooltip-text-color:#fff;--skeleton-gradient:linear-gradient(110deg, rgba(0, 0, 0, 0.05) 12%, rgba(60, 60, 60, 0.125) 25%, rgba(0, 0, 0, 0.05) 42%)}:root[data-theme=dark][data-v-8045cbd0]{--button-primary-bg-color:#b1e3ff;--button-primary-text-color:#1c1c1c;--button-outline-bg-color:rgba(0, 0, 0, 0);--button-outline-border-color:#414141;--button-outline-text-color:#fff;--button-box-shadow:0 0 12px rgba(132, 132, 132, 0.35);--styled-input-border-color:#414141;--styled-input-border-color_focus:#414141;--styled-input-background-color:#2a2a2a;--styled-input-placeholder-color:rgba(255, 255, 255, 0.325);--styled-input-label-color:#b1e3ff;--radio-outer-border-color:rgba(255, 255, 255, 0.275);--radio-outer-border-color_active:#b1e3ff;--radio-inner-bg-color:#b1e3ff;--dropdown-bg-color:#1c1c1c;--dropdown-active-bg-color:#2a2a2a;--dropdown-box-shadow:0 0 1px rgba(0, 0, 0, 0);--summary-list-bg-color:#2a2a2a;--custom-pre-bg-color:#1c1c1c;--custom-pre-text-color:#f2f2f2;--custom-pre-border-color:#414141;--modal-bg-color:#2a2a2a;--stat-card-icon-color:var(--text_black);--info-card-bg-color:rgba(255, 255, 255, 0.05);--info-card-feature-color:#b1e3ff;--info-card-content-color:#fff;--tooltip-bg-color:rgba(242, 244, 247, 0.925);--tooltip-text-color:#1c1c1c;--skeleton-gradient:linear-gradient(110deg, rgba(255, 255, 255, 0.1) 8%, rgba(255, 255, 255, 0.14) 29%, rgba(255, 255, 255, 0.1) 47%)}@media screen and (max-width:768px){.c-create-instance-section[data-v-8045cbd0]{max-width:max-content;margin:0 auto}}.c-forms[data-v-8045cbd0]{position:relative}.mb-15[data-v-8045cbd0]{margin-bottom:1.5rem}.c-btn-container[data-v-8045cbd0]{display:flex;justify-content:space-between;align-items:center;margin-top:2.5rem;padding:0 .5rem}.c-helper[data-v-8045cbd0]{padding:0 .25rem}",map:void 0,media:void 0})},K="data-v-8045cbd0",Q=void 0,Y=!1;function Z(e,a,o,r,c,u,n,l,d,s){let t=(typeof o=="function"?o.options:o)||{};t.__file=`style>
`,t.render||(t.render=e.render,t.staticRenderFns=e.staticRenderFns,t._compiled=!0,c&&(t.functional=!0)),t._scopeId=r;{let f;if(a&&(f=n?function(i){a.call(this,s(i,this.$root.$options.shadowRoot))}:function(i){a.call(this,l(i))}),f!==void 0)if(t.functional){let i=t.render;t.render=function(b,p){return f.call(p),i(b,p)}}else{let i=t.beforeCreate;t.beforeCreate=i?[].concat(i,f):[f]}}return t}function v(){let e=v.styles||(v.styles={}),a=typeof navigator<"u"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(r,c){if(document.querySelector('style[data-vue-ssr-id~="'+r+'"]'))return;let u=a?c.media||"default":r,n=e[u]||(e[u]={ids:[],parts:[],element:void 0});if(!n.ids.includes(r)){let l=c.source,d=n.ids.length;if(n.ids.push(r),c.map&&(l+=`
/*# sourceURL=`+c.map.sources[0]+" */",l+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(c.map))))+" */"),a&&(n.element=n.element||document.querySelector("style[data-group="+u+"]")),!n.element){let s=document.head||document.getElementsByTagName("head")[0],t=n.element=document.createElement("style");t.type="text/css",c.media&&t.setAttribute("media",c.media),a&&(t.setAttribute("data-group",u),t.setAttribute("data-next-index","0")),s.appendChild(t)}if(a&&(d=parseInt(n.element.getAttribute("data-next-index")),n.element.setAttribute("data-next-index",d+1)),n.element.styleSheet)n.parts.push(l),n.element.styleSheet.cssText=n.parts.filter(Boolean).join(`
`);else{let s=document.createTextNode(l),t=n.element.childNodes;t[d]&&n.element.removeChild(t[d]),t.length?n.element.insertBefore(s,t[d]):n.element.appendChild(s)}}}}var ee=Z({render:J,staticRenderFns:G},H,W,K,Y,Q,!1,v,void 0,void 0),se=ee;export{se as default};
