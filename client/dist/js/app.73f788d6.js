(function(e){function t(t){for(var r,n,o=t[0],l=t[1],c=t[2],d=0,p=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],r=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(r=!1)}r&&(a.splice(t--,1),e=n(n.s=s[0]))}return e}var r={},i={app:0},a=[];function n(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=r,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"02b0":function(e,t,s){},"18a4":function(e,t,s){},2472:function(e,t,s){"use strict";var r=s("3201"),i=s.n(r);i.a},3201:function(e,t,s){},"34bf":function(e,t,s){},"394b":function(e,t,s){"use strict";var r=s("34bf"),i=s.n(r);i.a},"49f8":function(e,t,s){var r={"./en-EN.json":"611e","./fr-FR.json":"cfe4"};function i(e){var t=a(e);return s(t)}function a(e){if(!s.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id="49f8"},5452:function(e,t,s){"use strict";var r=s("af35"),i=s.n(r);i.a},"554b":function(e,t,s){},5606:function(e,t,s){"use strict";var r=s("bf33"),i=s.n(r);i.a},"560b":function(e,t,s){"use strict";var r=s("e657"),i=s.n(r);i.a},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("header-partial"),s("router-view")],1)},a=[],n=s("5530"),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",[s("div",{staticClass:"main-nav"},[e._m(0),s("div",{attrs:{id:"hright"}},[s("div",{class:{active:e.isOpen},attrs:{id:"btnNav"},on:{click:e.navOpen}},[s("span"),s("span"),s("span")]),s("nav",{class:{active:e.isOpen}},[e.isUserLoggedIn?e._e():s("ul",[s("li",[s("a",{staticClass:"item",attrs:{href:"/Login"}},[s("login",{staticClass:"item-icon",attrs:{size:24}}),s("span",[e._v(e._s(e.$t("navLogin")))])],1)]),s("li",[s("a",{staticClass:"item",attrs:{href:"/Register"}},[s("register",{staticClass:"item-icon",attrs:{size:24}}),s("span",[e._v(e._s(e.$t("navRegister")))])],1)])]),e.isUserLoggedIn?s("ul",[s("li",[s("a",{staticClass:"item",attrs:{href:"/"}},[s("home",{staticClass:"item-icon",attrs:{size:24}}),s("span",[e._v(e._s(e.$t("navHome")))])],1)]),s("li",[s("a",{staticClass:"item",attrs:{href:"/Profil"}},[s("person",{staticClass:"item-icon",attrs:{size:24}}),s("span",[e._v(e._s(e.$t("navProfil")))])],1)]),s("li",[s("a",{staticClass:"item",on:{click:e.logout}},[s("logout",{staticClass:"item-icon",attrs:{size:24}}),s("span",[e._v(e._s(e.$t("navLogOut")))])],1)])]):e._e()])])]),s("div",{class:{active:e.isOpen},attrs:{id:"black"},on:{click:e.navOpen}})])},l=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"logo"},[s("a",{attrs:{href:"/"}},[e._v("ToWatchSeries")])])}],c=s("2f62"),u=s("5c62"),d=s("3279"),p=s("0068"),m=s("4944"),f=s("6709"),v={components:{home:u["a"],person:d["a"],login:p["a"],register:m["a"],logout:f["a"]},data:function(){return{isOpen:!1}},computed:Object(n["a"])({},Object(c["c"])("auth",["isUserLoggedIn"])),methods:{navOpen:function(){this.isOpen=!this.isOpen},logout:function(){this.$store.commit("auth/SET_AUTH",null),this.$router.push({name:"Home"}),localStorage.clear(),this.navOpen()}}},g=v,h=(s("5452"),s("2877")),w=Object(h["a"])(g,o,l,!1,null,null,null),b=w.exports,_={name:"App",components:{HeaderPartial:b},computed:Object(n["a"])(Object(n["a"])({},Object(c["c"])("auth",["isUserLoggedIn"])),Object(c["c"])("lang",["locale"])),methods:Object(n["a"])({},Object(c["b"])("lang",["changeLocale"])),created:function(){this.changeLocale(this.locale?this.locale:navigator.language)}},y=_,x=(s("5c0b"),Object(h["a"])(y,i,a,!1,null,null,null)),C=x.exports,O=s("9483");Object(O["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var k=s("8c4f"),$=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"form"},[s("div",{staticClass:"form-container"},[s("h1",[e._v(e._s(e.$route.name))]),s("label",{attrs:{for:"username"}},[e._v(e._s(e.$t("label.username"))+" :")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",name:"username",id:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),s("label",{attrs:{for:"email"}},[e._v(e._s(e.$t("label.email"))+" : ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",id:"email",name:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),s("label",{attrs:{for:"password"}},[e._v(e._s(e.$t("label.password"))+" : ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password",name:"password",autocomplete:"new-password"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)},input:function(t){t.target.composing||(e.password=t.target.value)}}}),s("button",{on:{click:e.register}},[e._v(e._s(e.$t("global.register")))])]),s("p",[e._v(e._s(e.$t("global.hasAccount"))+" "),s("a",{attrs:{href:"/login"}},[e._v(e._s(e.$t("global.login")))])])]),s("div",{staticClass:"alert",class:{error:e.isError},domProps:{innerHTML:e._s(e.texterror)}})])},P=[],E=(s("96cf"),s("1da1")),S=s("bc3a"),j=s.n(S),A=s("88b4"),L=s.n(A),N=new L.a,T=function(){var e=N.get("key");return e?j.a.create({baseURL:"https://towatchseries.herokuapp.com/",headers:{Authorization:"Bearer ".concat(e.data)}}):j.a.create({baseURL:"https://towatchseries.herokuapp.com/"})},U={register:function(e){return T().post("/auth/local/register",e)},login:function(e){return T().post("/auth/local",e)},updateProfile:function(e){return T().put("/users/".concat(e.id),e.info)}},I={name:"register",data:function(){return{ursename:"",email:"",password:"",isError:!1,texterror:null}},methods:{register:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U.register({username:e.username,email:e.email,password:e.password});case 3:e.$router.push({name:"Home"}),t.next=10;break;case 6:t.prev=6,t.t0=t["catch"](0),e.isError=!0,e.texterror="Une erreur est survenue";case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}},R=I,D=(s("9a87"),Object(h["a"])(R,$,P,!1,null,"3d431b0c",null)),F=D.exports,M=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"form"},[s("div",{staticClass:"form-container"},[s("h1",[e._v(e._s(e.$route.name))]),s("label",{attrs:{for:"email"}},[e._v(e._s(e.$t("label.email"))+" : ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",id:"email",name:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),s("label",{attrs:{for:"password"}},[e._v(e._s(e.$t("label.password"))+" : ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password",name:"password"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)},input:function(t){t.target.composing||(e.password=t.target.value)}}}),s("button",{on:{click:e.login}},[e._v(e._s(e.$t("global.login")))])]),s("p",[e._v(e._s(e.$t("global.noAccount"))+" "),s("a",{attrs:{href:"/register"}},[e._v(e._s(e.$t("global.createOne")))])])]),s("div",{staticClass:"alert",class:{error:e.isError},domProps:{innerHTML:e._s(e.texterror)}})])},H=[],B={data:function(){return{email:"",password:"",isError:!1,texterror:null}},methods:Object(n["a"])(Object(n["a"])({},Object(c["b"])("auth",{setAuth:"setAuth"})),{},{login:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.setAuth({identifier:e.email,password:e.password});case 3:s=t.sent,s.jwt||(e.isError=!0,e.texterror="Login or password is wrong"),t.next=10;break;case 7:return t.prev=7,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}})},q=B,z=(s("f913"),Object(h["a"])(q,M,H,!1,null,"0801bedc",null)),V=z.exports,G=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.isUserLoggedIn?s("PanelLog",{attrs:{title:e.$t("homeMessageLogin")}}):e._e(),e.isUserLoggedIn?e._e():s("PanelNoLog",{attrs:{title:e.$t("homeMessageNoLog")}})],1)},J=[],W=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"panel-global"},[s("h1",[e._v(e._s(e.title))]),s("div",{staticClass:"panel-listing"},[s("itemCreatePanel"),e._l(e.series,(function(e,t){return s("itemPanel",{key:t,staticClass:"panel-item",attrs:{serie:e}})}))],2)])},Y=[],Z={getSeries:function(e){return T().get("series?userId=".concat(e,"&_sort=view:ASC"))},getOneSerie:function(e){return T().get("series?id=".concat(e))},updateView:function(e,t){return T().put("series/".concat(e),t)},updateSerie:function(e,t){return T().put("series/".concat(e),t)},deleteSerie:function(e){return T().delete("series/".concat(e))},postSeries:function(e){return T().post("series",e)}},K=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"panel-item",class:{add:e.isAdd}},[s("div",{staticClass:"row"},[s("div",{staticClass:"title"},[e._v(e._s(e.$t("serie.addSerie")))]),s("div",{attrs:{id:"add"},on:{click:function(t){return e.toggleAddService()}}},[s("span"),s("span")])]),s("div",{staticClass:"panel-content"},[s("label",{attrs:{for:"title"}},[e._v(e._s(e.$t("serie.title"))+" : ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.serie.title,expression:"serie.title"}],attrs:{type:"text",id:"title",name:"title",required:""},domProps:{value:e.serie.title},on:{input:function(t){t.target.composing||e.$set(e.serie,"title",t.target.value)}}}),s("div",{staticClass:"input-mid"},[s("label",{attrs:{for:"season"}},[e._v(e._s(e.$t("serie.season"))+" : ")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.serie.season,expression:"serie.season",modifiers:{number:!0}}],attrs:{type:"number",name:"season",id:"season",min:"0",required:""},domProps:{value:e.serie.season},on:{input:function(t){t.target.composing||e.$set(e.serie,"season",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),s("div",{staticClass:"input-mid"},[s("label",{attrs:{for:"episode"}},[e._v(e._s(e.$t("serie.episode"))+" : ")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.serie.episode,expression:"serie.episode",modifiers:{number:!0}}],attrs:{type:"number",name:"episode",id:"episode",min:"0",required:""},domProps:{value:e.serie.episode},on:{input:function(t){t.target.composing||e.$set(e.serie,"episode",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),s("div",{staticClass:"input-mid"},[s("label",{attrs:{for:"platform"}},[e._v(e._s(e.$t("serie.platform"))+" : ")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.serie.platform,expression:"serie.platform"}],attrs:{name:"platform",id:"platform",required:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.serie,"platform",t.target.multiple?s:s[0])}}},e._l(e.platforms,(function(t,r){return s("option",{key:r,domProps:{value:t.name}},[e._v(e._s(t.name))])})),0)]),s("div",{staticClass:"input-mid"},[s("label",{attrs:{for:"category"}},[e._v(e._s(e.$t("serie.category"))+" : ")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.serie.category,expression:"serie.category"}],attrs:{name:"category",id:"category",required:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.serie,"category",t.target.multiple?s:s[0])}}},e._l(e.categories,(function(t,r){return s("option",{key:r,domProps:{value:t.type}},[e._v(e._s(t.type))])})),0)]),s("div",{staticClass:"field fieldcheck"},[s("label",{attrs:{for:"view"}},[e._v(e._s(e.$t("serie.view")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.serie.view,expression:"serie.view"}],staticClass:"checkbox",attrs:{type:"checkbox",id:"view",name:"view"},domProps:{checked:Array.isArray(e.serie.view)?e._i(e.serie.view,null)>-1:e.serie.view},on:{change:function(t){var s=e.serie.view,r=t.target,i=!!r.checked;if(Array.isArray(s)){var a=null,n=e._i(s,a);r.checked?n<0&&e.$set(e.serie,"view",s.concat([a])):n>-1&&e.$set(e.serie,"view",s.slice(0,n).concat(s.slice(n+1)))}else e.$set(e.serie,"view",i)}}})]),s("button",{on:{click:e.addSerie}},[e._v(e._s(e.$t("serie.addSerieBtn")))])])])},Q=[],X={data:function(){return{isError:!1,isAdd:!1,texterror:null,categorysListing:null,platformsListing:null,serie:{title:"",platform:"",category:"",season:1,episode:1,view:!1}}},computed:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(c["c"])("auth",["isUserLoggedIn","account"])),Object(c["c"])("series",["categories","platforms"])),{},{userId:function(){return this.account.user.id}}),methods:{toggleAddService:function(){this.isAdd=!this.isAdd},addSerie:function(){var e=this;this.isUserLoggedIn&&(""!==this.serie.title&&""!==this.serie.platform&&""!==this.serie.category?(null===this.serie.see||!1===this.serie.see?this.$parent.series.unshift(this.serie):this.$parent.series.push(this.serie),Z.postSeries({userId:this.userId,title:this.serie.title,platform:this.serie.platform,category:this.serie.category,season:this.serie.season,episode:this.serie.episode,view:this.serie.view}).then((function(){e.serie={title:"",platform:"",category:"",view:!1,season:1,episode:1,userId:e.userId}}))):(this.isError=!0,this.texterror="Please fill in all the blanks"))}}},ee=X,te=(s("6929"),Object(h["a"])(ee,K,Q,!1,null,null,null)),se=te.exports,re=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:{show:e.isActive,see:e.serie.view}},[s("div",{staticClass:"item-main"},[s("p",{staticClass:"item-title"},[e.serie.view?s("span",{staticClass:"viewed"},[e._v(e._s(e.$t("serie.view")))]):e._e(),e._v(" "+e._s(e.serie.title))]),s("div",{staticClass:"item-desc"},[s("p",{staticClass:"season-item"},[s("b",[e._v("Season : ")]),e._v(e._s(e.serie.season))]),s("p",{staticClass:"episode-item"},[s("b",[e._v("Episode : ")]),e._v(e._s(e.serie.episode))])])]),s("div",{staticClass:"item-content"},[s("p",{staticClass:"item-platform"},[e._v(e._s(e.serie.platform))]),s("p",{staticClass:"item-category",class:e.serie.category},[e._v(e._s(e.serie.category))]),s("div",{staticClass:"btnOption",on:{click:function(t){return e.itemShow()}}},[s("span"),s("span"),s("span")])]),s("div",{staticClass:"item-options"},[s("div",{staticClass:"field"},[s("span",{on:{click:function(t){e.isEdit=!e.isEdit}}},[s("i",{staticClass:"fas fa-pencil-alt"}),e._v(" "+e._s(e.$t("serie.edit")))]),s("span",{on:{click:e.removeSerie}},[s("i",{staticClass:"far fa-trash-alt"}),e._v(" "+e._s(e.$t("serie.delete")))])]),s("div",{staticClass:"field fieldcheck"},[s("label",{attrs:{for:"view"}},[e._v(e._s(e.$t("serie.view")))]),s("input",{ref:"viewInput",staticClass:"checkbox",attrs:{type:"checkbox",name:"view",id:"view"},domProps:{checked:1==e.serie.view},on:{click:e.viewSerie}})])]),s("transition",{attrs:{name:"fade"}},[e.isEdit?s("popupEdit",{attrs:{serie:e.serie},on:{editeComplete:e.editeCompleteStep}}):e._e()],1),e.isEdit?s("div",{staticClass:"black",on:{click:function(t){e.isEdit=!e.isEdit}}}):e._e()],1)},ie=[],ae=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"edit"},[s("div",{staticClass:"popup-edit"},[s("label",{attrs:{for:"title"}},[e._v("Title : ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.serie.title,expression:"serie.title"}],attrs:{type:"text",id:"title",name:"title",required:""},domProps:{value:e.serie.title},on:{input:function(t){t.target.composing||e.$set(e.serie,"title",t.target.value)}}}),s("div",{staticClass:"input-mid"},[s("label",{attrs:{for:"season"}},[e._v("Season : ")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.serie.season,expression:"serie.season",modifiers:{number:!0}}],attrs:{type:"number",name:"season",id:"season",min:"0",required:""},domProps:{value:e.serie.season},on:{input:function(t){t.target.composing||e.$set(e.serie,"season",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),s("div",{staticClass:"input-mid"},[s("label",{attrs:{for:"episode"}},[e._v("Episode : ")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.serie.episode,expression:"serie.episode",modifiers:{number:!0}}],attrs:{type:"number",name:"episode",id:"episode",min:"0",required:""},domProps:{value:e.serie.episode},on:{input:function(t){t.target.composing||e.$set(e.serie,"episode",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),s("div",{staticClass:"input-mid"},[s("label",{attrs:{for:"platform"}},[e._v("Platform : ")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.serie.platform,expression:"serie.platform"}],attrs:{name:"platform",id:"platform",required:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.serie,"platform",t.target.multiple?s:s[0])}}},e._l(e.platforms,(function(t,r){return s("option",{key:r,domProps:{value:t.name}},[e._v(e._s(t.name))])})),0)]),s("div",{staticClass:"input-mid"},[s("label",{attrs:{for:"category"}},[e._v("Category : ")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.serie.category,expression:"serie.category"}],attrs:{name:"category",id:"category",required:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.serie,"category",t.target.multiple?s:s[0])}}},e._l(e.categories,(function(t,r){return s("option",{key:r,domProps:{value:t.type}},[e._v(e._s(t.type))])})),0)]),s("div",{staticClass:"field fieldcheck"},[s("label",{attrs:{for:"view"}},[e._v("View")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.serie.view,expression:"serie.view"}],staticClass:"checkbox",class:{checked:this.serie.view},attrs:{type:"checkbox",id:"view",name:"view"},domProps:{checked:Array.isArray(e.serie.view)?e._i(e.serie.view,null)>-1:e.serie.view},on:{change:function(t){var s=e.serie.view,r=t.target,i=!!r.checked;if(Array.isArray(s)){var a=null,n=e._i(s,a);r.checked?n<0&&e.$set(e.serie,"view",s.concat([a])):n>-1&&e.$set(e.serie,"view",s.slice(0,n).concat(s.slice(n+1)))}else e.$set(e.serie,"view",i)}}})]),s("div",{staticClass:"ctn-btn"},[s("button",{on:{click:e.updateSerie}},[e._v("Add Serie")]),s("button",{on:{click:e.leave}},[e._v("Back")])])])])},ne=[],oe={name:"popupEdit",props:["serie"],computed:Object(n["a"])({},Object(c["c"])("series",["categories","platforms"])),methods:{viewSerie:function(){this.serie=!this.serie},updateSerie:function(){var e=this;Z.updateSerie(this.serie.id,{userId:this.serie.userId,title:this.serie.title,platform:this.serie.platform,category:this.serie.category,season:this.serie.season,episode:this.serie.episode,view:this.serie.view}).then((function(){e.leave()}))},leave:function(){this.$emit("editeComplete")}}},le=oe,ce=(s("394b"),Object(h["a"])(le,ae,ne,!1,null,null,null)),ue=ce.exports,de={data:function(){return{isActive:!1,isError:!1,texterror:null,isEdit:!1}},props:["serie"],components:{popupEdit:ue},methods:{itemShow:function(){this.isActive=!this.isActive},removeSerie:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$el.style.height="0",e.$el.style.padding="0",e.$el.style.margin="0",e.$el.style.border="transparent",setTimeout((function(){e.$el.style.display="none"}),500);try{setTimeout((function(){e.$el.remove(),Z.deleteSerie(e.serie.id)}),1e3)}catch(s){e.isError=!0,e.texterror=s.response.data.error}case 6:case"end":return t.stop()}}),t)})))()},viewSerie:function(){this.serie.view=!this.serie.view,Z.updateView(this.serie.id,{view:this.serie.view})},editeCompleteStep:function(){this.isEdit=!1}}},pe=de,me=(s("560b"),Object(h["a"])(pe,re,ie,!1,null,null,null)),fe=me.exports,ve={data:function(){return{titmeline:null,series:[],seriestats:[{title:"Serie 1",platform:"Netflix",category:"Action",see:!1},{title:"Serie 2",platform:"Prime Video",category:"Horror",see:!1},{title:"Serie 3",platform:"OCS",category:"Science-fiction",see:!0},{title:"Serie 4",platform:"Netflix",category:"Anime",see:!0}]}},components:{itemPanel:fe,itemCreatePanel:se},props:["title"],computed:Object(n["a"])(Object(n["a"])({},Object(c["c"])("auth",["isUserLoggedIn","account"])),Object(c["c"])("series",["categories","platforms"])),methods:Object(n["a"])({},Object(c["b"])("series",["setCategories","setPlatforms"])),mounted:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Z.getSeries(e.account.user.id);case 2:e.series=t.sent.data,e.setCategories(),e.setPlatforms();case 5:case"end":return t.stop()}}),t)})))()}},ge=ve,he=(s("d91f"),Object(h["a"])(ge,W,Y,!1,null,null,null)),we=he.exports,be=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"panel-global",attrs:{id:"nolog"}},[r("h1",[e._v(e._s(e.title))]),r("div",{staticClass:"panel-listing"},[r("div",{staticClass:"text-log"},[r("a",{staticClass:"btnNoLog",attrs:{href:"/Login"}},[e._v(e._s(e.$t("global.login")))]),r("p",[e._v(e._s(e.$t("global.or")))]),r("a",{staticClass:"btnNoLog",attrs:{id:"register",href:"/Register"}},[e._v(e._s(e.$t("global.register")))]),r("p",[e._v(e._s(e.$t("homeInfo")))])]),r("div",{attrs:{id:"deco"}},[r("div",{attrs:{id:"static-item"}},e._l(e.seriestats,(function(e,t){return r("itemStatic",{key:t,attrs:{seriestat:e}})})),1),r("img",{attrs:{id:"iphone",src:s("5c05"),alt:""}})]),r("svg",{attrs:{id:"homeBg",width:"868",height:"1048",viewBox:"0 0 868 1048",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("rect",{attrs:{opacity:"0.01",y:"1006",width:"554",height:"94",rx:"20",fill:"#190D2F"}}),r("rect",{attrs:{opacity:"0.15",x:"86",y:"896",width:"554",height:"94",rx:"20",fill:"#190D2F"}}),r("rect",{attrs:{opacity:"0.2",x:"314",y:"784",width:"554",height:"94",rx:"20",fill:"#190D2F"}}),r("rect",{attrs:{opacity:"0.05",y:"672",width:"554",height:"94",rx:"20",fill:"#190D2F"}}),r("rect",{attrs:{opacity:"0.2",x:"86",y:"560",width:"554",height:"94",rx:"20",fill:"#190D2F"}}),r("rect",{attrs:{opacity:"0.1",x:"314",y:"448",width:"554",height:"94",rx:"20",fill:"#190D2F"}}),r("rect",{attrs:{opacity:"0.05",y:"336",width:"554",height:"94",rx:"20",fill:"#190D2F"}}),r("rect",{attrs:{opacity:"0.15",x:"86",y:"224",width:"554",height:"94",rx:"20",fill:"#190D2F"}}),r("rect",{attrs:{opacity:"0.1",x:"314",y:"112",width:"554",height:"94",rx:"20",fill:"#190D2F"}}),r("rect",{attrs:{opacity:"0.05",width:"554",height:"94",rx:"20",fill:"#190D2F"}})])])])},_e=[],ye=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"panel-item",class:{show:e.isActive,see:e.seriestat.see}},[s("p",{staticClass:"item-title"},[e._v(e._s(e.seriestat.title))]),s("div",{staticClass:"item-content"},[s("p",{staticClass:"item-platform"},[e._v(e._s(e.seriestat.platform))]),s("p",{staticClass:"item-category",class:e.seriestat.category},[e._v(e._s(e.seriestat.category))]),e._m(0)]),s("div",{staticClass:"item-options"},[e._m(1),s("div",{staticClass:"field fieldcheck"},[s("label",{attrs:{for:"see"}},[e._v("See")]),s("input",{ref:"seeInput",staticClass:"checkbox",attrs:{type:"checkbox",name:"see",id:"see"},domProps:{checked:1==e.seriestat.see}})])])])},xe=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"btnOption"},[s("span"),s("span"),s("span")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"field"},[s("a",{attrs:{href:"#"}},[s("i",{staticClass:"fas fa-pencil-alt"}),e._v(" Edit")]),s("span",[s("i",{staticClass:"far fa-trash-alt"}),e._v("Delete")])])}],Ce={data:function(){return{isActive:!1,see:!1,isError:!1,texterror:null}},props:["seriestat"]},Oe=Ce,ke=(s("fdff"),Object(h["a"])(Oe,ye,xe,!1,null,null,null)),$e=ke.exports,Pe=s("a5cf"),Ee={data:function(){return{titmeline:null,series:null,seriestats:[{title:"Serie 1",platform:"Netflix",category:"Action",see:!1},{title:"Serie 2",platform:"Prime Video",category:"Horror",see:!1},{title:"Serie 3",platform:"OCS",category:"Science-fiction",see:!0},{title:"Serie 4",platform:"Netflix",category:"Anime",see:!0}]}},components:{itemStatic:$e},props:["title"],mounted:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){var s,r,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!0!==e.$store.state.isUserLoggedIn){t.next=7;break}return s=e.$store.state.user.email,t.next=4,Z.getSeries(s);case 4:e.series=t.sent.data,t.next=13;break;case 7:e.widthStatic(),e.h1Pos(),r=document.getElementsByClassName("panel-item")[1],i=r.querySelector("input[type=checkbox"),a=new Pe["a"]({repeat:-1,repeatDelay:1}),a.to(r,{className:"panel-item show",duration:1,delay:1}).to(i,{checked:!0,duration:2}).to(r,{className:"panel-item see",duration:2}).to(r,{className:"panel-item show",duration:1,delay:1}).to(i,{checked:!1,duration:1,delay:1}).to(r,{className:"panel-item",duration:1,delay:1});case 13:case"end":return t.stop()}}),t)})))()},created:function(){window.addEventListener("resize",this.widthStatic),window.addEventListener("resize",this.h1Pos)},destroyed:function(){window.removeEventListener("resize",this.widthStatic),window.removeEventListener("resize",this.h1Pos)},methods:{widthStatic:function(){var e=document.getElementById("static-item"),t=document.getElementById("iphone").width;e.style.width="".concat(t,"px")},h1Pos:function(){var e=document.getElementsByTagName("h1")[0],t=document.getElementsByClassName("text-log")[0],s=document.getElementById("nolog");window.innerWidth>=768?t.prepend(e):s.prepend(e)}}},Se=Ee,je=(s("5606"),Object(h["a"])(Se,be,_e,!1,null,null,null)),Ae=je.exports,Le={data:function(){return{}},components:{PanelLog:we,PanelNoLog:Ae},computed:Object(n["a"])({},Object(c["c"])("auth",["isUserLoggedIn"]))},Ne=Le,Te=(s("2472"),Object(h["a"])(Ne,G,J,!1,null,"7c3b0cf9",null)),Ue=Te.exports,Ie=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"form"},[s("div",{staticClass:"form-container"},[s("h1",[e._v(e._s(e.$route.name))]),s("ul",[s("li",[s("div",{staticClass:"field"},[s("label",{attrs:{for:"email"}},[e._v(e._s(e.$t("label.email")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.account.user.email,expression:"account.user.email"}],attrs:{type:"email",name:"email",id:"email"},domProps:{value:e.account.user.email},on:{input:function(t){t.target.composing||e.$set(e.account.user,"email",t.target.value)}}})]),s("div",{staticClass:"field"},[s("label",{attrs:{for:"password"}},[e._v(e._s(e.$t("label.newPassword")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),s("div",{staticClass:"field"},[s("label",{attrs:{for:"password"}},[e._v(e._s(e.$t("label.newPasswordConf")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordconf,expression:"passwordconf"}],attrs:{type:"password",name:"password",id:"passwordconf"},domProps:{value:e.passwordconf},on:{input:function(t){t.target.composing||(e.passwordconf=t.target.value)}}})]),s("div",{staticClass:"field"},[s("label",{attrs:{for:"username"}},[e._v(e._s(e.$t("label.username")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.account.user.username,expression:"account.user.username"}],attrs:{type:"text",name:"username",id:"username"},domProps:{value:e.account.user.username},on:{input:function(t){t.target.composing||e.$set(e.account.user,"username",t.target.value)}}})])]),s("button",{attrs:{type:"submit"},on:{click:e.submit}},[e._v(e._s(e.$t("global.submitModif")))])])]),s("div",{staticClass:"alert",class:{error:e.isError},domProps:{innerHTML:e._s(e.texterror)}})]),s("div",{staticClass:"form"},[s("div",{staticClass:"field"},[s("label",{attrs:{for:"lang"}},[e._v(e._s(e.$t("global.langGlobal"))+" : ")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.language,expression:"language"}],attrs:{name:"lang",id:"lang",required:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.language=t.target.multiple?s:s[0]}}},e._l(e.lang,(function(t,r){return s("option",{key:r,domProps:{value:t}},[e._v(e._s(e.$t("global.lang."+t)))])})),0)])])])},Re=[],De={name:"Profil",data:function(){return{password:null,passwordconf:null,isError:!1,texterror:null,lang:{en:"en-EN",fr:"fr-FR"}}},methods:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(c["b"])("auth",["setUpdateProfil"])),Object(c["b"])("lang",["changeLocale"])),{},{submit:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){var s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.password==e.passwordconf){t.next=5;break}e.isError=!0,e.texterror="password and confirmation are not same",t.next=16;break;case 5:if(null==e.password||null==e.passwordconf){t.next=12;break}return t.next=8,e.setUpdateProfil({id:e.account.user.id,info:{email:e.account.user.email,password:e.password,username:e.account.user.username}});case 8:s=t.sent,null!=s&&(e.isError=!1,e.texterror="profil updated"),t.next=16;break;case 12:return t.next=14,e.setUpdateProfil({id:e.account.user.id,info:{email:e.account.user.email,username:e.account.user.username}});case 14:r=t.sent,null!=r&&(e.isError=!1,e.texterror="profil updated");case 16:case"end":return t.stop()}}),t)})))()}}),computed:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(c["c"])("auth",["account"])),Object(c["c"])("lang",["locale"])),{},{language:{get:function(){return this.locale},set:function(e){this.changeLocale(e)}}})},Fe=De,Me=(s("c2c7"),Object(h["a"])(Fe,Ie,Re,!1,null,"71be7c5d",null)),He=Me.exports;r["a"].use(k["a"]);var Be=new k["a"]({mode:"history",routes:[{path:"/",name:"Home",component:Ue},{path:"/register",name:"Register",component:F},{path:"/profil",name:"Profil",component:He},{path:"/login",name:"Login",component:V},{path:"*",redirect:Ue}]}),qe=s("0e44"),ze=new L.a,Ve={namespaced:!0,strict:!0,state:{account:null,isUserLoggedIn:!1},mutations:{setDarkTheme:function(e){e.isDarkTheme=!e.isDarkTheme},SET_AUTH:function(e,t){t?(e.isUserLoggedIn=!0,e.account=t,ze.set("key",{data:t.jwt})):e.isUserLoggedIn=!1,e.user=t,Be.push({name:"Home"})},SET_UPDATE_PROFIL:function(e,t){e.user.user=t,Be.push({name:"Home"})}},actions:{setAuth:function(e,t){var s=e.commit;U.login(t).then((function(e){s("SET_AUTH",e.data)})).catch((function(e){throw e}))},setUpdateProfil:function(e,t){var s=e.commit;U.updateProfile(t).then((function(e){s("SET_UPDATE_PROFIL",e.data)})).catch((function(e){throw e}))}},plugins:[Object(qe["a"])()]},Ge=Ve,Je={getAllCategories:function(){return T().get("categories")}},We={getAllPlatforms:function(){return T().get("platforms")}},Ye={namespaced:!0,strict:!0,state:{categories:null,platforms:null},mutations:{SET_CATEGORIES:function(e,t){e.categories=t},SET_PLATFORMS:function(e,t){e.platforms=t}},actions:{setCategories:function(e){var t=e.commit;Je.getAllCategories().then((function(e){t("SET_CATEGORIES",e.data)})).catch((function(e){throw e}))},setPlatforms:function(e){var t=e.commit;We.getAllPlatforms().then((function(e){t("SET_PLATFORMS",e.data)})).catch((function(e){throw e}))}}},Ze=Ye,Ke=(s("4160"),s("7039"),s("d3b7"),s("ac1f"),s("466d"),s("1276"),s("159b"),s("ddb0"),s("a925"));function Qe(){var e=s("49f8"),t={};return e.keys().forEach((function(s){var r=s.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var i=r[1];t[i]=e(s)}})),t}function Xe(){var e=null,t=Object.getOwnPropertyNames(Qe());return t.forEach((function(t){t===navigator.language&&(e=t)})),e||t.forEach((function(t){var s=navigator.language.split("-")[0];t===s&&(e=t)})),e||t.forEach((function(t){var s=navigator.language.split("-")[0];t.split("-")[0]===s&&(e=t)})),e}r["a"].use(Ke["a"]);var et=Xe()||"en",tt=(Object.getOwnPropertyNames(Qe()),new Ke["a"]({locale:et,fallbackLocale:"en",messages:Qe()})),st={namespaced:!0,strict:!0,state:{locale:et},mutations:{UPDATE_LOCAL:function(e,t){e.locale=t}},actions:{changeLocale:function(e,t){var s=e.commit;tt.locale=t,s("UPDATE_LOCAL",t)}}},rt=st;r["a"].use(c["a"]);var it=new c["a"].Store({modules:{auth:Ge,series:Ze,lang:rt}});r["a"].config.productionTip=!1,new r["a"]({i18n:tt,router:Be,store:it,render:function(e){return e(C)}}).$mount("#app")},"5c05":function(e,t,s){e.exports=s.p+"img/iphone.9d739d9e.png"},"5c0b":function(e,t,s){"use strict";var r=s("9c0c"),i=s.n(r);i.a},"611e":function(e){e.exports=JSON.parse('{"homeMessageLogin":"Your ToWatchList","homeMessageNoLog":"Don\'t forget where you are","homeInfo":"to use the services","navLogin":"Login","navRegister":"Register","navHome":"Home","navProfil":"Profil","navLogOut":"Logout","loginTitle":"Login","label":{"username":"Username","email":"Email","password":"Password","newPassword":"New Password","passwordConf":"Password Conf","newPasswordConf":"Confirm new Password"},"global":{"noAccount":"No account ?","createOne":"CreateOne !","hasAccount":"Already have an account ?","login":"Login","or":"or","register":"Register","submitModif":"Submit modification","darkTheme":"Dark Theme","langGlobal":"Lang","lang":{"fr-FR":"French","en-EN":"English"}},"serie":{"addSerie":"Add serie","title":"Title","season":"Season","episode":"Episode","platform":"Platform","category":"Category","view":"View","addSerieBtn":"Add this serie","delete":"Delete","edit":"Edit"}}')},6929:function(e,t,s){"use strict";var r=s("70a9"),i=s.n(r);i.a},"70a9":function(e,t,s){},"96af":function(e,t,s){},"9a87":function(e,t,s){"use strict";var r=s("96af"),i=s.n(r);i.a},"9c0c":function(e,t,s){},af35:function(e,t,s){},bf33:function(e,t,s){},c2c7:function(e,t,s){"use strict";var r=s("f665"),i=s.n(r);i.a},cfe4:function(e){e.exports=JSON.parse('{"homeMessageLogin":"Votre ToWatchList","homeMessageNoLog":"N\'oubliez plus où vous en êtes","homeInfo":"pour utiliser nos services","navLogin":"Se connecter","navRegister":"S\'enregister","navHome":"Accueil","navProfil":"Profil","navLogOut":"Déconnexion","loginTitle":"Login","label":{"username":"Nom d\'utilisateur","email":"Email","password":"Mot de passe","newPassword":"Nouveau mot de passe","passwordConf":"Confirmation du mot de passe","newPasswordConf":"Confirmation du nouveau mot de passe"},"global":{"noAccount":"Pas de compte ?","createOne":"Rejoins-nous !","hasAccount":"Déjà un compte ?","login":"Se connecter","or":"ou","register":"S\'enregister","submitModif":"Enregister les modifications","darkTheme":"Theme sombre","langGlobal":"Langue","lang":{"fr-FR":"Francais","en-EN":"Anglais"}},"serie":{"addSerie":"Ajouter une série","title":"Titre","season":"Saison","episode":"Episode","platform":"Plateforme","category":"Catégorie","view":"Vu","addSerieBtn":"Ajouter la série","delete":"Supprimer","edit":"Modifier"}}')},d91f:function(e,t,s){"use strict";var r=s("18a4"),i=s.n(r);i.a},e657:function(e,t,s){},f665:function(e,t,s){},f913:function(e,t,s){"use strict";var r=s("554b"),i=s.n(r);i.a},fdff:function(e,t,s){"use strict";var r=s("02b0"),i=s.n(r);i.a}});
//# sourceMappingURL=app.73f788d6.js.map