"use strict";(self["webpackChunkvma_club_system_frontend"]=self["webpackChunkvma_club_system_frontend"]||[]).push([[601],{601:(e,l,a)=>{a.r(l),a.d(l,{default:()=>Z});var o=a(3673),s=a(2323),r=a(1959),i=a(8880),n=a(9582),t=a(7874),u=a(9262),m=a(9301);(0,o.dD)("data-v-e297f2d8");const d={class:"login-warp fit"},p={class:"text-h6"};(0,o.Cn)();const c={setup(e){const l=(0,t.oR)(),a=(0,n.yj)(),c=(0,n.tv)(),{notify:g}=(0,m.Z)(),{t:f}=(0,u.QT)(),b=(0,r.iH)("login"),v=(0,r.iH)(!0),y=(0,r.iH)(!1),U=(0,r.qj)({login:{email:"",password:""},register:{accept:!1,name:"",id:0,email:"",password:""}}),w=async(e,l)=>e&&e.length>0||f("login.plzInp")+f(l);async function S(){a.query.redirect&&c.push(a.query.redirect),g({type:"positive",message:"登录成功"})}async function W(){await l.dispatch("user/mockLogin").then((()=>{S()}))}async function V(e){if(y.value)return;const a=e?U.register:U.login,o=e?"user/register":"user/login";y.value=!0,await l.dispatch(o,a).then((()=>{S()})).catch((e=>{g({type:"negative",message:e})})).finally((()=>{y.value=!1}))}return(e,l)=>{const a=(0,o.up)("q-card-section"),n=(0,o.up)("q-tab"),t=(0,o.up)("q-tabs"),u=(0,o.up)("q-separator"),m=(0,o.up)("q-icon"),c=(0,o.up)("q-input"),g=(0,o.up)("q-btn"),S=(0,o.up)("q-form"),_=(0,o.up)("q-tab-panel"),h=(0,o.up)("q-toggle"),q=(0,o.up)("q-tab-panels"),Q=(0,o.up)("q-card");return(0,o.wg)(),(0,o.iD)("div",d,[(0,o.Wm)(Q,{class:"login-container vertical-middle absolute-center scroll text-primary"},{default:(0,o.w5)((()=>[(0,o.Wm)(a,null,{default:(0,o.w5)((()=>[(0,o._)("div",p,(0,s.zw)((0,r.SU)(f)("login.title")),1)])),_:1}),(0,o.Wm)(t,{modelValue:b.value,"onUpdate:modelValue":l[0]||(l[0]=e=>b.value=e),align:"justify"},{default:(0,o.w5)((()=>[(0,o.Wm)(n,{label:(0,r.SU)(f)("login.types.login"),icon:"login",name:"login"},null,8,["label"]),(0,o.Wm)(n,{label:(0,r.SU)(f)("login.types.register"),icon:"person_add",name:"register"},null,8,["label"])])),_:1},8,["modelValue"]),(0,o.Wm)(u),(0,o.Wm)(q,{modelValue:b.value,"onUpdate:modelValue":l[12]||(l[12]=e=>b.value=e),animated:""},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{name:"login"},{default:(0,o.w5)((()=>[(0,o.Wm)(S,{onSubmit:l[4]||(l[4]=(0,i.iM)((e=>V(0)),["prevent"])),class:"q-gutter-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{filled:"",modelValue:(0,r.SU)(U).login.email,"onUpdate:modelValue":l[1]||(l[1]=e=>(0,r.SU)(U).login.email=e),"lazy-rules":"",placeholder:(0,r.SU)(f)("login.forms.email"),rules:[e=>w(e,"login.forms.email")],suffix:"@vma.edu.cn"},{before:(0,o.w5)((()=>[(0,o.Wm)(m,{name:"mail"})])),_:1},8,["modelValue","placeholder","rules"]),(0,o.Wm)(c,{modelValue:(0,r.SU)(U).login.password,"onUpdate:modelValue":l[3]||(l[3]=e=>(0,r.SU)(U).login.password=e),filled:"","lazy-rules":"",placeholder:(0,r.SU)(f)("login.forms.password"),rules:[e=>w(e,"login.forms.password")],type:v.value?"password":"text"},{before:(0,o.w5)((()=>[(0,o.Wm)(m,{name:"lock"})])),append:(0,o.w5)((()=>[(0,o.Wm)(m,{name:v.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:l[2]||(l[2]=e=>v.value=!v.value)},null,8,["name"])])),_:1},8,["modelValue","placeholder","rules","type"]),(0,o.Wm)(g,{label:(0,r.SU)(f)("login.types.login"),type:"submit",disable:y.value},null,8,["label","disable"])])),_:1})])),_:1}),(0,o.Wm)(_,{name:"register"},{default:(0,o.w5)((()=>[(0,o.Wm)(S,{onSubmit:l[11]||(l[11]=(0,i.iM)((e=>V(1)),["prevent"])),class:"q-gutter-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{filled:"",modelValue:(0,r.SU)(U).register.id,"onUpdate:modelValue":l[5]||(l[5]=e=>(0,r.SU)(U).register.id=e),"lazy-rules":"",placeholder:(0,r.SU)(f)("login.forms.id"),type:"number",rules:[e=>w(e,"login.forms.id")]},{before:(0,o.w5)((()=>[(0,o.Wm)(m,{name:"badge"})])),_:1},8,["modelValue","placeholder","rules"]),(0,o.Wm)(c,{filled:"",modelValue:(0,r.SU)(U).register.name,"onUpdate:modelValue":l[6]||(l[6]=e=>(0,r.SU)(U).register.name=e),"lazy-rules":"",placeholder:(0,r.SU)(f)("login.forms.name"),rules:[e=>w(e,"login.forms.name")]},{before:(0,o.w5)((()=>[(0,o.Wm)(m,{name:"face"})])),_:1},8,["modelValue","placeholder","rules"]),(0,o.Wm)(c,{filled:"",modelValue:(0,r.SU)(U).register.email,"onUpdate:modelValue":l[7]||(l[7]=e=>(0,r.SU)(U).register.email=e),"lazy-rules":"",placeholder:(0,r.SU)(f)("login.forms.email"),rules:[e=>w(e,"login.forms.email")],suffix:"@vma.edu.cn"},{before:(0,o.w5)((()=>[(0,o.Wm)(m,{name:"mail"})])),_:1},8,["modelValue","placeholder","rules"]),(0,o.Wm)(c,{modelValue:(0,r.SU)(U).register.password,"onUpdate:modelValue":l[9]||(l[9]=e=>(0,r.SU)(U).register.password=e),filled:"","lazy-rules":"",placeholder:(0,r.SU)(f)("login.forms.password"),rules:[e=>w(e,"login.forms.password")],type:v.value?"password":"text"},{before:(0,o.w5)((()=>[(0,o.Wm)(m,{name:"lock"})])),append:(0,o.w5)((()=>[(0,o.Wm)(m,{name:v.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:l[8]||(l[8]=e=>v.value=!v.value)},null,8,["name"])])),_:1},8,["modelValue","placeholder","rules","type"]),(0,o.Wm)(h,{modelValue:(0,r.SU)(U).register.accept,"onUpdate:modelValue":l[10]||(l[10]=e=>(0,r.SU)(U).register.accept=e),label:(0,r.SU)(f)("login.forms.accept")},null,8,["modelValue","label"]),(0,o.Wm)(g,{label:(0,r.SU)(f)("login.types.register"),type:"submit",disable:!(0,r.SU)(U).register.accept||y.value},null,8,["label","disable"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(g,{label:"测试登录",onClick:W})])),_:1})])}}};var g=a(3054),f=a(782),b=a(6078),v=a(8266),y=a(3831),U=a(4384),w=a(4488),S=a(6229),W=a(6952),V=a(8900),_=a(6210),h=a(6523),q=a(7518),Q=a.n(q);c.__scopeId="data-v-e297f2d8";const Z=c;Q()(c,"components",{QCard:g.Z,QCardSection:f.Z,QTabs:b.Z,QTab:v.Z,QSeparator:y.Z,QTabPanels:U.Z,QTabPanel:w.Z,QForm:S.Z,QInput:W.Z,QIcon:V.Z,QBtn:_.Z,QToggle:h.Z})}}]);