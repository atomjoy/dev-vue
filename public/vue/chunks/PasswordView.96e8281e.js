import{_ as g,u as w,d as v,o as u,c as p,a as l,b as s,w as r,f as t,g as b,t as o,n as S,h as $,i as n,j as V,v as k,F as y,R as d,C,p as E,k as I}from"../js/index.a2caae58.js";import{_ as M,a as D,b as F}from"./PageTitle.64a549ea.js";const _=i=>(E("data-v-9c88aabe"),i=i(),I(),i),N={id:"page-wraper"},P={class:"page-auth"},B={class:"left"},R={class:"top-bar"},T=_(()=>s("img",{class:"float-left auth-logo",src:D,height:"70"},null,-1)),L=["onSubmit"],U={class:"full"},j=_(()=>s("i",{class:"far fa-envelope"},null,-1)),z=["placeholder"],A={class:"full full-margin"},H=["title"],X={class:"full"},q=_(()=>s("div",{class:"right"},[s("img",{src:F,class:"auth-image"})],-1)),G={__name:"PasswordView",setup(i){const a=w(),m={mounted:e=>e.focus()};v(()=>{a.clearError()});function h(e){a.scrollTop(),a.resetUserPassword(new FormData(e.target))}return(e,c)=>(u(),p(y,null,[l(M,{title:e.$t("message.password_title")},null,8,["title"]),s("div",N,[s("div",P,[s("div",B,[s("div",R,[l(t(d),{to:"/"},{default:r(()=>[T]),_:1}),l(C)]),s("form",{onSubmit:b(h,["prevent"]),class:"form"},[s("h1",U,o(e.$t("password.Reset_password")),1),t(a).getMessage.value!=null?(u(),p("div",{key:0,class:S([t(a).getError.value?"alert-error":"alert-info","animate__animated animate__flipInX"])},o(t(a).getMessage.value),3)):$("",!0),s("label",null,[n(o(e.$t("password.Email_address"))+" ",1),j]),V(s("input",{"onUpdate:modelValue":c[0]||(c[0]=f=>e.email=f),type:"text",name:"email",class:"input",placeholder:e.$t("password.Email_address_eg")},null,8,z),[[m],[k,e.email]]),s("div",A,[s("button",{class:"button",title:e.$t("password.Send_password")},o(e.$t("password.Send_password")),9,H)]),s("div",X,[l(t(d),{to:"/login",class:"link-left"},{default:r(()=>[n(o(e.$t("password.Have_an_account")),1)]),_:1}),l(t(d),{to:"/register",class:"link-right"},{default:r(()=>[n(o(e.$t("password.Dont_have_an_account")),1)]),_:1})])],40,L)]),q])])],64))}},O=g(G,[["__scopeId","data-v-9c88aabe"]]);export{O as default};