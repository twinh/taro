(window.webpackJsonp=window.webpackJsonp||[]).push([[925],{2196:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},2197:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},2198:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=u(n),p=a,O=s["".concat(l,".").concat(p)]||s[p]||d[p]||c;return n?r.a.createElement(O,o(o({ref:t},b),{},{components:n})):r.a.createElement(O,o({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<c;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2199:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},2200:function(e,t,n){"use strict";var a=n(0),r=n(2201);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2201:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},2202:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(2200),l=n(2199),o=n(51),i=n.n(o),b=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.children,s=e.defaultValue,d=e.values,p=e.groupId,O=e.className,j=Object(c.a)(),m=j.tabGroupChoices,f=j.setTabGroupChoices,v=Object(a.useState)(s),h=v[0],g=v[1];if(null!=p){var y=m[p];null!=y&&y!==h&&d.some((function(e){return e.value===y}))&&g(y)}var x=function(e){g(e),null!=p&&f(p,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},O)},d.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(l.a)("tabs__item",i.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return x(t)},onClick:function(){x(t)}},n)}))),t?Object(a.cloneElement)(o.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},o.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},2203:function(e,t,n){"use strict";var a=n(2196),r=n(0),c=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return c.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},990:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(2196),r=n(2197),c=(n(0),n(2198)),l=n(2202),o=n(2203),i={title:"Radio",sidebar_label:"Radio"},b={unversionedId:"components/forms/radio",id:"version-3.x/components/forms/radio",isDocsHomePage:!1,title:"Radio",description:"\u5355\u9009\u9879\u76ee",source:"@site/versioned_docs/version-3.x/components/forms/radio.md",slug:"/components/forms/radio",permalink:"/taro/docs/components/forms/radio",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/forms/radio.md",version:"3.x",sidebar_label:"Radio",sidebar:"version-3.x/components",previous:{title:"PickerView",permalink:"/taro/docs/components/forms/picker-view"},next:{title:"Slider",permalink:"/taro/docs/components/forms/slider"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"RadioProps",id:"radioprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],s={rightToc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u5355\u9009\u9879\u76ee"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/radio.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<RadioProps>\n")),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)(l.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"React",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"export default class PageRadio extends Component {\n  state = {\n    list: [\n      {\n        value: '\u7f8e\u56fd',\n        text: '\u7f8e\u56fd',\n        checked: false\n      },\n      {\n        value: '\u4e2d\u56fd',\n        text: '\u4e2d\u56fd',\n        checked: true\n      },\n      {\n        value: '\u5df4\u897f',\n        text: '\u5df4\u897f',\n        checked: false\n      },\n      {\n        value: '\u65e5\u672c',\n        text: '\u65e5\u672c',\n        checked: false\n      },\n      {\n        value: '\u82f1\u56fd',\n        text: '\u82f1\u56fd',\n        checked: false\n      },\n      {\n        value: '\u6cd5\u56fd',\n        text: '\u6cd5\u56fd',\n        checked: false\n      }\n    ]\n  }\n  render () {\n    return (\n      <View className='container'>\n        <Head title='Radio' />\n        <View className='page-body'>\n          <View className='page-section'>\n            <Text>\u9ed8\u8ba4\u6837\u5f0f</Text>\n            <Radio value='\u9009\u4e2d' checked>\u9009\u4e2d</Radio>\n            <Radio style='margin-left: 20rpx' value='\u672a\u9009\u4e2d'>\u672a\u9009\u4e2d</Radio>\n          </View>\n          <View className='page-section'>\n            <Text>\u63a8\u8350\u5c55\u793a\u6837\u5f0f</Text>\n            <View className='radio-list'>\n              <RadioGroup>\n                {this.state.list.map((item, i) => {\n                  return (\n                    <Label className='radio-list__label' for={i} key={i}>\n                      <Radio className='radio-list__radio' value={item.value} checked={item.checked}>{item.text}</Radio>\n                    </Label>\n                  )\n                })}\n              </RadioGroup>\n            </View>\n          </View>\n        </View>\n      </View>\n    )\n  }\n}\n"))),Object(c.b)(o.a,{value:"Vue",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"<template>\n  <view class=\"container\">\n    <view class=\"page-section\">\n      <text>\u9ed8\u8ba4\u6837\u5f0f</text>\n      <radio value=\"\u9009\u4e2d\" checked=\"true\">\u9009\u4e2d</radio>\n      <radio style=\"margin-left: 20rpx;\" value=\"\u672a\u9009\u4e2d\">\u672a\u9009\u4e2d</radio>\n    </view>\n    <view class=\"page-section\">\n      <text>\u63a8\u8350\u5c55\u793a\u6837\u5f0f(Taro \u56e2\u961f\u6210\u5458):</text>\n        <radio-group @change=\"onChange\">\n          <label v-for=\"item in list\" class=\"checkbox-list__label\">\n            <radio class=\"checkbox-list__checkbox\" :value=\"item.value\" :checked=\"item.checked\">{{ item.text }}</radio>\n          </label>\n        </radio-group>\n    </view>\n  </view>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      list: [\n        {\n          value: 'yuche',\n          text: 'yuche',\n          checked: false\n        },\n        {\n          value: 'cjj',\n          text: 'cjj',\n          checked: false\n        },\n        {\n          value: 'xiexiaoli',\n          text: 'xiexiaoli',\n          checked: false\n        },\n        {\n          value: 'honly',\n          text: 'honly',\n          checked: false\n        },\n        {\n          value: 'cs',\n          text: 'cs',\n          checked: false\n        },\n        {\n          value: 'zhutianjian',\n          text: 'zhutianjian',\n          checked: false\n        },\n        {\n          value: '\u9694\u58c1\u8001\u674e',\n          text: '\u9694\u58c1\u8001\u674e',\n          checked: true\n        }\n      ]\n    }\n  },\n  methods: {\n    onChange: function(e) {\n      console.log(e.detail.value)\n    }\n  }\n}\n<\/script>\n")))),Object(c.b)("h2",{id:"radioprops"},"RadioProps"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"value"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,Object(c.b)("code",null,"<Radio/>")," \u6807\u8bc6\u3002\u5f53\u8be5",Object(c.b)("code",null,"<Radio/>")," \u9009\u4e2d\u65f6\uff0c",Object(c.b)("code",null,"<RadioGroup/>"),"\u7684 change \u4e8b\u4ef6\u4f1a\u643a\u5e26",Object(c.b)("code",null,"<Radio/>"),"\u7684 value")),Object(c.b)("tr",null,Object(c.b)("td",null,"checked"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5f53\u524d\u662f\u5426\u9009\u4e2d")),Object(c.b)("tr",null,Object(c.b)("td",null,"disabled"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u662f\u5426\u7981\u7528")),Object(c.b)("tr",null,Object(c.b)("td",null,"color"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,'"#09BB07"')),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"Radio \u7684\u989c\u8272\uff0c\u540c css \u7684 color")))),Object(c.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"RadioProps.value"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"RadioProps.checked"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"RadioProps.disabled"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"RadioProps.color"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Radio"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}d.isMDXComponent=!0}}]);