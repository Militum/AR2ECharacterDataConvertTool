(this.webpackJsonpar2echaracterdataconverttool=this.webpackJsonpar2echaracterdataconverttool||[]).push([[0],{15:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(9),c=a.n(r),i=(a(15),a(3)),s=a(4),o=a(2),u=a(6),b=a(5);var j=function(e){var t=e.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1];return console.log(t),"charasheet.vampire-blood.net"===t},d=(a(8),a(0)),h=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={value:"",jsonUrl:""},n.onChange=n.onChange.bind(Object(o.a)(n)),n.onClick=n.onClick.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"onChange",value:function(e){this.setState({value:e.target.value})}},{key:"onClick",value:function(e){e.preventDefault();var t=this.state.value+".json";j(t)?this.setState({jsonUrl:t}):alert("\u7121\u52b9\u306aURL\u3067\u3059")}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("label",{children:[Object(d.jsx)("span",{children:"\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u30b7\u30fc\u30c8\u306eURL:"}),Object(d.jsx)("input",{type:"text",value:this.state.value,onChange:this.onChange,className:"el-like-input"})]}),Object(d.jsx)("button",{id:"button",className:"button",onClick:this.onClick,children:"\u8868\u793a"}),Object(d.jsx)("br",{}),Object(d.jsx)("iframe",{title:"json",src:this.state.jsonUrl,className:"frame"})]})}}]),a}(l.a.Component);var v=function(e){try{JSON.parse(e)}catch(t){return!1}return!0},O=["V_level","V_fate","NP1","NP2","NP3","NP4","NP5","NP6","NP7","NP8","NP9","pc_name","BSUM6"];var f=function(e){if(!function(e){for(var t in O){var a=O[t];if(!(a in e))return console.error("key not found ".concat(a)),!1}return!0}(e))return!1;var t=function(e){var t={kind:"character",data:{}};return t.data.name=e.pc_name,t.data.memo="",t.data.initiative=parseInt(e.BSUM6,0),t.data.externalUrl="",t.data.status=[{label:"HP",value:e.NP8,max:e.NP8},{label:"MP",value:e.NP9,max:e.NP9},{label:"FATE",value:e.V_fate,max:e.V_fate}],t.data.params=[{label:"\u7b4b\u529b",value:e.NP1},{label:"\u5668\u7528",value:e.NP2},{label:"\u654f\u6377",value:e.NP3},{label:"\u77e5\u529b",value:e.NP4},{label:"\u611f\u77e5",value:e.NP5},{label:"\u7cbe\u795e",value:e.NP6},{label:"\u5e78\u904b",value:e.NP7},{label:"CL",value:e.V_level}],t.data.iconUrl=null,t.data.faces=[],t.data.x=0,t.data.y=0,t.data.angle=0,t.data.width=4,t.data.height=4,t.data.active=!0,t.data.secret=!1,t.data.invisible=!1,t.data.hideStatus=!1,t.data.color="#888888",t.data.commands="",t.data.owner=null,t}(e);return JSON.stringify(t)},x=a(10),p=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={value:"",clipboardCopyData:""},n.onChange=n.onChange.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"onChange",value:function(e){var t=e.target.value;if(this.setState({value:t}),v(t)){var a=f(JSON.parse(t));a&&this.setState({clipboardCopyData:a})}}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("textarea",{value:this.state.value,placeholder:"\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u30b7\u30fc\u30c8\u306eJSON\u6587\u5b57\u5217({}\u3067\u56f2\u307e\u308c\u3066\u3044\u308b\u3084\u3064)\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",onChange:this.onChange,className:"textarea"}),Object(d.jsx)("br",{}),Object(d.jsx)(x.CopyToClipboard,{text:this.state.clipboardCopyData,onCopy:function(){return alert("\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f\u3002CCFOLIA\u306e\u30eb\u30fc\u30e0\u306b\u8cbc\u308a\u4ed8\u3051\u3066\u304f\u3060\u3055\u3044")},children:Object(d.jsx)("button",{className:"button",children:"\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u30b3\u30d4\u30fc\u3059\u308b"})})]})}}]),a}(l.a.Component);var C=function(){return Object(d.jsxs)("div",{className:"app-body",children:[Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h3",{children:"AR2E CCFOLIA\u7528\u30ad\u30e3\u30e9\u99d2\u4f5c\u6210\u30c4\u30fc\u30eb(\u03b1\u7248)"}),Object(d.jsx)(h,{}),Object(d.jsx)("br",{}),Object(d.jsx)(p,{})]}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("span",{children:"\u4f7f\u3044\u65b9"}),Object(d.jsx)("li",{children:"\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u4fdd\u7ba1\u6240\u306e\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u30b7\u30fc\u30c8\u306eURL\u3092\u5165\u529b\u3057\u300c\u8868\u793a\u300d\u3092\u30af\u30ea\u30c3\u30af"}),Object(d.jsx)("li",{children:"\u300c\u4e8c\u756a\u76ee\u306e\u67a0\u300d\u306b\u8868\u793a\u3055\u308c\u305f\u6587\u5b57\u5217\u3092\u5168\u3066\u9078\u629e\u3057\u3066\u30b3\u30d4\u30fc\u3057\u3001\u300c\u4e09\u756a\u76ee\u306e\u67a0\u300d\u306b\u30da\u30fc\u30b9\u30c8"}),Object(d.jsx)("li",{children:"\u300c\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u30b3\u30d4\u30fc\u3059\u308b\u300d\u3092\u30af\u30ea\u30c3\u30af"}),Object(d.jsx)("li",{children:"\u30b3\u30b3\u30d5\u30a9\u30ea\u30a2\u90e8\u5c4b\u306b\u30da\u30fc\u30b9\u30c8\u3059\u308b"})]})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,21)).then((function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)}))};c.a.render(Object(d.jsx)(l.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root")),N()},8:function(e,t,a){}},[[20,1,2]]]);
//# sourceMappingURL=main.3ca64415.chunk.js.map