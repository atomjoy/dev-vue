import{_ as f,a as h,b as m}from"./PageTitle.2b118f83.js";import{_ as g,l as w,u as k,e as y,d as V,o as n,c as d,a as l,b as e,w as r,f as t,t as c,n as I,h as S,F as $,R as _,C as A,i as u,p as C,k as b}from"../js/index.eb3ac01f.js";const p=i=>(C("data-v-d6044f87"),i=i(),b(),i),N={id:"page-wraper"},q={class:"page-auth"},B={class:"left"},E={class:"top-bar"},F=p(()=>e("img",{class:"float-left auth-logo",src:h,height:"70"},null,-1)),L={class:"form"},M={class:"full"},R={class:"full"},D={class:"full"},x=p(()=>e("div",{class:"right"},[e("img",{src:m,class:"auth-image"})],-1)),z={__name:"ActivateView",setup(i){const{t:H,locale:v}=w({useScope:"global"}),a=k(),s=y();return V(()=>{a.clearError(),s.query.locale&&(v.value=s.query.locale,a.changeLocale(s.query.locale)),a.activateUser(s.params.id,s.params.code)}),(o,T)=>(n(),d($,null,[l(f,{title:o.$t("message.activate_title")},null,8,["title"]),e("div",N,[e("div",q,[e("div",B,[e("div",E,[l(t(_),{to:"/"},{default:r(()=>[F]),_:1}),l(A)]),e("form",L,[e("h1",M,c(o.$t("activate.Activation")),1),t(a).getMessage.value!=null?(n(),d("div",{key:0,class:I([t(a).getError.value?"alert-error":"alert-info","animate__animated animate__flipInX"])},c(t(a).getMessage.value),3)):S("",!0),e("div",R,[e("p",null,c(o.$t("activate.Description")),1)]),e("div",D,[l(t(_),{to:"/login",class:"link-left"},{default:r(()=>[u(c(o.$t("activate.Have_an_account")),1)]),_:1}),l(t(_),{to:"/password",class:"link-right"},{default:r(()=>[u(c(o.$t("activate.Forgot_password")),1)]),_:1})])])]),x])])],64))}},j=g(z,[["__scopeId","data-v-d6044f87"]]);export{j as default};
