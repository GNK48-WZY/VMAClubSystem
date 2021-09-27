(()=>{"use strict";var e={4646:(e,t,n)=>{var r=n(8880),o=n(9362),a=n(3673),l=n(1959),i=n(2323),s=n(9262),u=n(9582),c=n(7874),p=n(9301);const m={props:["color"],setup(e){const{t}=(0,s.QT)(),{localStorage:n}=(0,p.Z)(),{locale:r}=(0,s.QT)({useScope:"global"}),o=(0,l.XI)(r),i=[{value:"zh-CN",label:"中文"},{value:"en-US",label:"English"}];return(0,a.YP)(o,(async e=>{n.set("lang",e)})),(n,r)=>{const s=(0,a.up)("q-icon"),u=(0,a.up)("q-select");return(0,a.wg)(),(0,a.j4)(u,{modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=e=>o.value=e),options:i,label:(0,l.SU)(t)("app.language"),style:{"min-width":"150px"},color:e.color,"bg-color":"white",rounded:"",outlined:"",dense:"","emit-value":"","map-options":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(s,{name:"translate"})])),_:1},8,["modelValue","label","color"])}}};var d=n(7416),g=n(8900),h=n(7518),f=n.n(h);const v=m;f()(m,"components",{QSelect:d.Z,QIcon:g.Z});const b={emits:["toggleDrawer"],setup(e,{emit:t}){const{t:n}=(0,s.QT)(),o=(0,u.yj)(),c=(0,l.Fl)((()=>o.meta.full)),p=(0,l.Fl)((()=>n(o.name?`pages.${o.name}`:"information.error")));return(e,o)=>{const s=(0,a.up)("q-btn"),u=(0,a.up)("q-space"),m=(0,a.up)("q-toolbar"),d=(0,a.up)("q-toolbar-title"),g=(0,a.up)("q-header");return(0,a.wg)(),(0,a.j4)(g,{class:(0,i.C_)((0,l.SU)(c)?"bg-transparent text-primary":"bg-primary text-white"),elevated:!(0,l.SU)(c)},{default:(0,a.w5)((()=>[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(s,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:o[0]||(o[0]=e=>t("toggleDrawer"))},null,512),[[r.F8,!(0,l.SU)(c)]]),(0,a.Wm)(u),(0,a.Wm)((0,l.SU)(v),{color:(0,l.SU)(c)?"primary":"secondary"},null,8,["color"])])),_:1}),(0,a.Wm)(m,{inset:""},{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)((0,l.SU)(n)("app.name"))+" - ",1),(0,a._)("strong",null,(0,i.zw)((0,l.SU)(p)),1)])),_:1})])),_:1})])),_:1},8,["class","elevated"])}}};var w=n(4553),y=n(7266),_=n(6210),S=n(7077),U=n(8761);const C=b;f()(b,"components",{QHeader:w.Z,QToolbar:y.Z,QBtn:_.Z,QSpace:S.Z,QToolbarTitle:U.Z});const k={class:"absolute-bottom bg-transparent"},q=["src"],P={class:"text-weight-bold"},L={key:1},Z={key:2},j={setup(e){const{t}=(0,s.QT)(),n=(0,u.yj)(),o=(0,c.oR)(),p=(0,l.Fl)((()=>n.meta.full)),m=(0,l.Fl)((()=>o.getters["user/user"])),d=(0,l.Fl)((()=>o.getters["user/isLogin"]));let g=(0,l.iH)(!0);async function h(){g.value=!g.value}const f=[{icon:"home",name:"Index",to:{name:"Index"}},{icon:"school",name:"ClubCenter",to:{name:"ClubCenter"}},{icon:"manage_accounts",name:"UserCenter",to:{name:"UserCenter"}},{icon:"help",name:"Help",to:{name:"Help"}}];return(e,n)=>{const o=(0,a.up)("q-avatar"),s=(0,a.up)("q-img"),u=(0,a.up)("q-icon"),c=(0,a.up)("q-item-section"),v=(0,a.up)("q-item"),b=(0,a.up)("q-list"),w=(0,a.up)("q-scroll-area"),y=(0,a.up)("q-drawer"),_=(0,a.up)("router-view"),S=(0,a.up)("q-page-container"),U=(0,a.up)("q-layout"),j=(0,a.Q2)("ripple");return(0,a.wg)(),(0,a.j4)(U,{view:"hHh Lpr fFf"},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(C),{onToggleDrawer:h}),(0,a.wy)((0,a.Wm)(y,{modelValue:g.value,"onUpdate:modelValue":n[0]||(n[0]=e=>g.value=e),"show-if-above":"",bordered:""},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{class:"absolute-top",src:"https://cdn.quasar.dev/img/material.png",style:{height:"150px"}},{default:(0,a.w5)((()=>[(0,a._)("div",k,[(0,l.SU)(d)?((0,a.wg)(),(0,a.j4)(o,{key:0,size:"56px",class:"q-mb-sm"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:(0,l.SU)(m).avatar},null,8,q)])),_:1})):(0,a.kq)("",!0),(0,a._)("div",P,(0,i.zw)((0,l.SU)(d)?(0,l.SU)(m).name:(0,l.SU)(t)("user.notLogin")),1),(0,l.SU)(d)?((0,a.wg)(),(0,a.iD)("div",L,(0,i.zw)((0,l.SU)(m).id),1)):(0,a.kq)("",!0),(0,l.SU)(d)?((0,a.wg)(),(0,a.iD)("div",Z,(0,i.zw)((0,l.SU)(m).email),1)):(0,a.kq)("",!0)])])),_:1}),(0,a.Wm)(w,{style:{height:"calc(100% - 150px)","margin-top":"150px","border-right":"1px solid #ddd"}},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{padding:""},{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(f,(e=>(0,a.wy)((0,a.Wm)(v,{clickable:"",key:e.name,to:e.to},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{name:e.icon},null,8,["name"])])),_:2},1024),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)((0,l.SU)(t)(`pages.${e.name}`)),1)])),_:2},1024)])),_:2},1032,["to"]),[[j]]))),64))])),_:1})])),_:1})])),_:1},8,["modelValue"]),[[r.F8,!(0,l.SU)(p)]]),(0,a.Wm)(S,null,{default:(0,a.w5)((()=>[(0,a.Wm)(_)])),_:1})])),_:1})}}};var x=n(3626),A=n(5277),I=n(239),Q=n(4005),F=n(1387),T=n(5901),O=n(7953),W=n(880),D=n(7112),E=n(9400);const z=j;f()(j,"components",{QLayout:x.Z,QDrawer:A.Z,QImg:I.Z,QAvatar:Q.Z,QScrollArea:F.Z,QList:T.Z,QItem:O.Z,QItemSection:W.Z,QIcon:g.Z,QPageContainer:D.Z}),f()(j,"directives",{Ripple:E.Z});const N={setup(e){return(e,t)=>((0,a.wg)(),(0,a.j4)((0,l.SU)(z)))}},H=N;var R=n(5489),V=n(7792);const $=[{name:"Index",path:"/",component:()=>n.e(239).then(n.bind(n,1239)),meta:{needAuth:!1,full:!1}},{name:"ClubCenter",path:"/club",component:()=>Promise.all([n.e(736),n.e(164)]).then(n.bind(n,8164)),meta:{needAuth:!0,full:!1}},{name:"ClubDetail",path:"/club/:id",component:()=>n.e(469).then(n.bind(n,2469)),meta:{needAuth:!0,full:!1}},{name:"UserCenter",path:"/me",component:()=>n.e(244).then(n.bind(n,2244)),meta:{needAuth:!0,full:!1}},{name:"Help",path:"/help",component:()=>n.e(105).then(n.bind(n,4105)),meta:{needAuth:!1,full:!1}},{name:"Login",path:"/login",component:()=>Promise.all([n.e(736),n.e(601)]).then(n.bind(n,601)),meta:{needAuth:!1,full:!0}},{name:"404",path:"/:catchAll(.*)*",component:()=>n.e(971).then(n.bind(n,3971)),meta:{needAuth:!1,full:!0}}],B=$,M=(0,V.BC)((()=>{const e=u.PO,t=(0,u.p7)({scrollBehavior:()=>({left:0,top:0}),routes:B,history:e("/")});return t.beforeEach(((e,n,r)=>{function o(){r()}"Login"===e.name?R.Store.getters["user/isLogin"]?t.push(e.query.redirect??{name:"ClubCenter"}):o():e.meta.needAuth?R.Store.getters["user/isLogin"]?o():t.push({name:"Login",query:{redirect:e.fullPath}}):o()})),t}));async function K(e,t){const r="function"===typeof R["default"]?await(0,R["default"])({}):R["default"],{storeKey:a}=await Promise.resolve().then(n.bind(n,5489)),l="function"===typeof M?await M({store:r}):M;r.$router=l;const i=e(H);return i.use(o.Z,t),{app:i,store:r,storeKey:a,router:l}}var Y=n(3718),G=n(7447);const J={config:{},plugins:{LocalStorage:Y.Z,Notify:G.Z}};let X="function"===typeof H.preFetch?H.preFetch:void 0!==H.__c&&"function"===typeof H.__c.preFetch&&H.__c.preFetch;function ee(e,t){const n=e?e.matched?e:t.resolve(e).route:t.currentRoute;return n?Array.prototype.concat.apply([],n.matched.map((e=>Object.keys(e.components).map((t=>{const n=e.components[t];return{path:e.path,c:n}}))))):[]}function te(e,t,n){e.beforeResolve(((r,o,a)=>{const l=window.location.href.replace(window.location.origin,""),i=ee(r,e),s=ee(o,e);let u=!1;const c=i.filter(((e,t)=>u||(u=!s[t]||s[t].c!==e.c||e.path.indexOf("/:")>-1))).filter((e=>void 0!==e.c&&("function"===typeof e.c.preFetch||void 0!==e.c.__c&&"function"===typeof e.c.__c.preFetch))).map((e=>void 0!==e.c.__c?e.c.__c.preFetch:e.c.preFetch));if(!1!==X&&(c.unshift(X),X=!1),0===c.length)return a();let p=!1;const m=e=>{p=!0,a(e)},d=()=>{!1===p&&a()};c.reduce(((e,a)=>e.then((()=>!1===p&&a({store:t,currentRoute:r,previousRoute:o,redirect:m,urlPath:l,publicPath:n})))),Promise.resolve()).then(d).catch((e=>{console.error(e),d()}))}))}const ne="/";async function re({app:e,router:t,store:n,storeKey:r},o){let a=!1;const l=e=>{a=!0;const n=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=n},i=window.location.href.replace(window.location.origin,"");for(let u=0;!1===a&&u<o.length;u++)try{await o[u]({app:e,router:t,store:n,ssrContext:null,redirect:l,urlPath:i,publicPath:ne})}catch(s){return s&&s.url?void(window.location.href=s.url):void console.error("[Quasar] boot error:",s)}!0!==a&&(e.use(t),e.use(n,r),te(t,n),e.mount("#q-app"))}K(r.ri,J).then((e=>Promise.all([Promise.resolve().then(n.bind(n,7)),Promise.resolve().then(n.bind(n,4053))]).then((t=>{const n=t.map((e=>e.default)).filter((e=>"function"===typeof e));re(e,n)}))))},7:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s,api:()=>i});var r=n(7792),o=n(52),a=n.n(o),l=n(3718);const i=a().create({baseURL:"https://a.com/api/v1/",timeout:3e3,responseType:"json"});i.interceptors.request.use((e=>(l.Z.getItem("user")&&(e.headers.common.Authorization=`Bearer ${l.Z.getItem("user").token}`),e)),(e=>{Promise.reject(e)}));const s=(0,r.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},4053:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u,i18n:()=>s});var r=n(9262);const o={app:{name:"VMA Club System",language:"Language"},information:{error:"Error"},pages:{Index:"Index",ClubCenter:"Club Center",UserCenter:"User Center",Help:"Help",ClubDetail:"Club Detail",Login:"Login"},user:{notLogin:"Not logged in"},club:{signUp:"Sign Up",joinList:"Join The Wish List",viewDetails:"View Details"},404:{goTo:"Go to "},login:{title:"Sign in to continue",plzInp:"Please input ",types:{login:"Login",register:"Register"},forms:{email:"Email",password:"Password",id:"StudentID",name:"Name",accept:"I agree and follow the terms of use"}}},a={app:{name:"VMA社团招新系统",language:"语言"},information:{error:"错误"},pages:{Index:"首页",ClubCenter:"社团中心",UserCenter:"用户中心",Help:"帮助",ClubDetail:"社团详情",Login:"登录"},user:{notLogin:"未登录"},club:{signUp:"报名",joinList:"加入愿望清单",viewDetails:"查看详情"},404:{goTo:"前往"},login:{title:"登录以继续",plzInp:"请输入",types:{login:"登录",register:"注册"},forms:{email:"邮箱",password:"密码",id:"学号",name:"姓名",accept:"我同意并遵守使用条款"}}},l={"en-US":o,"zh-CN":a};var i=n(3718);const s=(0,r.o)({legacy:!1,locale:i.Z.getItem("lang")||navigator.language,fallbackLocale:"en-US",messages:l}),u=({app:e})=>{e.use(s)}},5489:(e,t,n)=>{n.r(t),n.d(t,{Store:()=>c,default:()=>p});var r=n(7792),o=n(7874),a=n(2363),l=n(3718);const i={namespaced:!0,state:()=>({list:[{id:0,name:"社团名",description:"社团介绍",imgUrl:"https://cdn.quasar.dev/img/parallax2.jpg",requirement:"社团要求",location:"Room 422"},{id:1,name:"社团名1",description:"社团介绍1",imgUrl:"https://cdn.quasar.dev/img/parallax2.jpg",requirement:"社团要求",location:"Room 422"}]}),getters:{list:e=>e.list}};var s=n(7);const u={namespaced:!0,state:{user:{avatar:"",name:"",id:0,email:"",token:""}},mutations:{setUser(e,t){t.token?e.user=t:e.user={avatar:"",name:"",id:0,email:"",token:""}}},actions:{async mockLogin({commit:e}){return new Promise((t=>{e("setUser",{name:"测试用户",id:123456,email:"test@vma.edu.cn",token:"test-token"}),t()}))},async login({commit:e},{email:t,password:n}){return new Promise(((r,o)=>{t&&n?(0,s.api)({url:"/login",method:"post",data:{email:`${t}@vma.edu.cn`,password:n}}).then((e=>e.data)).then((t=>{e("setUser",t),r(t)})).catch((e=>{o(e)})):o("incompleteForm")}))},async register({commit:e},{id:t,name:n,email:r,password:o}){return new Promise(((a,l)=>{t&&n&&r&&o?(0,s.api)({url:"/register",method:"post",data:{id:t,name:n,email:`${r}@vma.edu.cn`,password:o}}).then((e=>e.data)).then((t=>{e("setUser",t),a(t)})).catch((e=>{l(e)})):l("incompleteForm")}))},async logout({commit:e}){e("setUser",{user:{token:!1}})}},getters:{isLogin:e=>!!e.user.token,user:e=>e.user,token:e=>e.token}},c=(0,o.MT)({modules:{clubs:i,user:u},strict:!1,plugins:[(0,a.Z)({paths:["user"],storage:{getItem:e=>l.Z.getItem(e),setItem:(e,t)=>l.Z.set(e,t),removeItem:e=>l.Z.remove(e)}})]}),p=(0,r.h)((()=>c))}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(t,r,o,a)=>{if(!r){var l=1/0;for(c=0;c<e.length;c++){for(var[r,o,a]=e[c],i=!0,s=0;s<r.length;s++)(!1&a||l>=a)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(i=!1,a<l&&(l=a));if(i){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+e+"."+{105:"4742ad0d",164:"9a2d776e",239:"b9d6b6a8",244:"7e443cbb",469:"e0e90e29",601:"65922a4f",971:"9f72699d"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"31d6cfe0",164:"bc64b28d",601:"e1e0d2ae",736:"49e67f73"}[e]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="vma_club_system_frontend:";n.l=(r,o,a,l)=>{if(e[r])e[r].push(o);else{var i,s;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var p=u[c];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+a){i=p;break}}i||(s=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+a),i.src=r),e[r]=[o];var m=(t,n)=>{i.onerror=i.onload=null,clearTimeout(d);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),t)return t(n)},d=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),s&&document.head.appendChild(i)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p="/"})(),(()=>{var e=(e,t,n,r)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)n();else{var l=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=l,s.request=i,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var l=document.getElementsByTagName("style");for(r=0;r<l.length;r++){o=l[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=r=>new Promise(((o,a)=>{var l=n.miniCssF(r),i=n.p+l;if(t(l,i))return o();e(r,i,o,a)})),o={143:0};n.f.miniCss=(e,t)=>{var n={164:1,601:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise(((n,r)=>o=e[t]=[n,r]));r.push(o[2]=a);var l=n.p+n.u(t),i=new Error,s=r=>{if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+l+")",i.name="ChunkLoadError",i.type=a,i.request=l,o[1](i)}};n.l(l,s,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[l,i,s]=r,u=0;if(l.some((t=>0!==e[t]))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(s)var c=s(n)}for(t&&t(r);u<l.length;u++)a=l[u],n.o(e,a)&&e[a]&&e[a][0](),e[l[u]]=0;return n.O(c)},r=self["webpackChunkvma_club_system_frontend"]=self["webpackChunkvma_club_system_frontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[736],(()=>n(4646)));r=n.O(r)})();