(function(e){function t(t){for(var n,s,a=t[0],u=t[1],c=t[2],d=0,h=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&h.push(o[s][0]),o[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(h.length)h.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},i=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0168":function(e,t,r){},"034f":function(e,t,r){"use strict";r("85ec")},"10d3":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("mySearch"),r("cardContainer")],1)},i=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"mySearch"}},[r("div",{staticClass:"jumbotron modifyPosition"},[r("h1",[e._v("Search For Github Users")]),r("p",[e._v(" Find a GitHub user and click the user card to view the details of the user ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"Search for..."},domProps:{value:e.keyword},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go.apply(null,arguments)},input:function(t){t.target.composing||(e.keyword=t.target.value)}}}),r("span",[r("button",{attrs:{type:"button"},on:{click:e.go}},[e._v("Go!")])])])])},a=[],u=(r("498a"),r("bc3a")),c=r.n(u),l={name:"mySearch",data:function(){return{keyword:""}},methods:{go:function(){var e=this;if(""==this.keyword.trim())return alert("无效搜索（关键词为空）");this.$bus.$emit("resetResult"),this.$bus.$emit("changeIsSearchingStatus"),this.$bus.$emit("changeIsLoadingForTrue"),c.a.get("https://api.github.com/search/users?q=".concat(this.keyword)).then((function(t){t.data.items.length<=0?(e.$bus.$emit("changeIsLoadingForFalse"),e.$bus.$emit("changeIsErrorStatus","没有找到与输入关键词相关的用户")):(e.$bus.$emit("changeIsLoadingForFalse"),e.$bus.$emit("changeIsErrorForFalse"),e.$bus.$emit("getPartResult",t.data.items))}),(function(t){e.$bus.$emit("changeIsLoadingForFalse"),e.$bus.$emit("changeIsSearchingStatus"),e.$bus.$emit("changeIsErrorStatus",t.message)})),this.keyword=""}}},d=l,h=(r("7a68"),r("2877")),f=Object(h["a"])(d,s,a,!1,null,"c9796de0",null),p=f.exports,g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"Container"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:!e.isSearching,expression:"!isSearching"}],attrs:{id:"showBeforeSearch"}},[r("img",{attrs:{src:"http://110.40.191.101/myIcon/min.png",alt:""}}),r("br"),r("br"),r("p",[e._v("By GeorgeZ@YuZhang Normal university")]),r("p",[e._v("Supported by GitHub")])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.isError,expression:"isError"}],attrs:{id:"showBeforeSearch"}},[r("h1",[e._v("出了一点小问题~")]),r("p",[e._v(e._s(e.errorMsg))])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],attrs:{id:"Loading"}},[r("img",{attrs:{src:"http://110.40.191.101/turntableImg/loading_2.gif",alt:""}})]),r("userCard")],1)},m=[],b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.partResult,(function(t){return r("div",{key:t.login,attrs:{id:"userCard"}},[r("a",{attrs:{href:t.html_url}},[r("img",{attrs:{src:t.avatar_url,alt:""}})]),r("p",[e._v(e._s(t.login))])])})),0)},v=[],y={name:"userCard",data:function(){return{partResult:[]}},mounted:function(){var e=this;this.$bus.$on("getPartResult",(function(t){e.partResult=t})),this.$bus.$on("resetResult",(function(){e.partResult=[]}))}},$=y,w=(r("f3b8"),Object(h["a"])($,b,v,!1,null,"502331f8",null)),_=w.exports,S={name:"cardContainer",components:{userCard:_},data:function(){return{isSearching:!1,isError:!1,errorMsg:"",isLoading:!1}},mounted:function(){var e=this;this.$bus.$on("resetResult",(function(){e.isSearching=!0})),this.$bus.$on("changeIsErrorStatus",(function(t){e.isSearching=!0,e.isError=!0,e.errorMsg=t})),this.$bus.$on("changeIsErrorForFalse",(function(){e.isError=!1})),this.$bus.$on("changeIsLoadingForTrue",(function(){e.isLoading=!0})),this.$bus.$on("changeIsLoadingForFalse",(function(){e.isLoading=!1}))}},k=S,x=(r("dc85"),Object(h["a"])(k,g,m,!1,null,"1e8928d6",null)),F=x.exports,O={name:"App",components:{mySearch:p,cardContainer:F}},E=O,I=(r("034f"),Object(h["a"])(E,o,i,!1,null,null,null)),j=I.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(j)},beforeCreate:function(){n["a"].prototype.$bus=this}}).$mount("#app")},"7a68":function(e,t,r){"use strict";r("10d3")},"85ec":function(e,t,r){},bf66:function(e,t,r){},dc85:function(e,t,r){"use strict";r("bf66")},f3b8:function(e,t,r){"use strict";r("0168")}});
//# sourceMappingURL=app.7f4e23b8.js.map