import{E as p,r as n,p as g,c as r,b as t,e as c,g as d,t as s,l as f,u as b,F as w,x as y,a as x,o as _,d as u,y as V}from"./index-Pqrum06f.js";import{V as k}from"./index-DnuBronG.js";import{_ as E}from"./RecommendedComponent-gVH5Yg9E.js";import"./searchStores-eDwwVHWs.js";import"./RatingStar-SHYQcV7p.js";import"./ProductDescriptionCard-Hk6mLsIe.js";import"./usePriceToTw-mhH8eMrj.js";import"./wishStores-t7a2747e.js";import"./useToast-IpBMnqS6.js";import"./useComputedDiscount-p4hGzSU_.js";const B={key:0,class:"container py-32"},C={"aria-label":"breadcrumb"},N={class:"breadcrumb"},$={class:"breadcrumb-item"},j={class:"breadcrumb-item active","aria-current":"page"},A={class:"mb-0"},D={class:"row mt-3"},U={class:"col-lg-7"},F=t("div",{class:"col-lg-5"},null,-1),S={class:"row mb-32"},T={class:"col-12"},K=["src","alt"],L={class:"col-12"},M={class:"row gy-3 mt-4"},O={class:"col-12"},R={class:"row"},q={class:"col-lg-6"},z={class:"d-flex justify-content-between align-items-center"},G={class:"col-lg-6"},H={class:"d-flex justify-content-end align-items-center h-100"},I={class:"col-6"},J=["src","alt"],P={class:"col-6"},Q=["src","alt"],it={__name:"NewEventDetailsView",setup(W){const m=p(),{showAlert:v}=V(),o=n(!0),e=n({}),h=async()=>{try{o.value=!0;const a=`https://vue-mu-ri-homeware-json-server.onrender.com/events?id=${m.params.id}`,i=await y.get(a),[l]=i.data;e.value=l}catch(a){v({title:"失敗",text:`${a.response.data.message}`,icon:"error",confirmButtonText:"確認",confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1})}finally{o.value=!1}};return g(()=>{h()}),(a,i)=>{const l=x("router-link");return _(),r(w,null,[o.value?f("",!0):(_(),r("div",B,[t("nav",C,[t("ol",N,[t("li",$,[c(l,{to:"/newEvents"},{default:d(()=>[u("最新活動")]),_:1})]),t("li",j,s(e.value.title),1)])]),t("h2",A,s(e.value.title),1),t("div",D,[t("div",U,[t("p",null,s(e.value.description),1)]),F]),t("div",S,[t("div",T,[t("img",{src:e.value.imagesUrl[0],alt:e.value.title,class:"inspiration-mid-img"},null,8,K)]),t("div",L,[t("div",M,[t("div",O,[t("div",R,[t("div",q,[t("h3",null,s(e.value.subtitle),1),t("p",z,[t("span",null,s(e.value.content),1)])]),t("div",G,[t("div",H,[c(l,{to:"/products",class:"btn btn-primary text-white"},{default:d(()=>[u("查看更多相關商品")]),_:1})])])])]),t("div",I,[t("img",{src:e.value.imagesUrl[1],alt:e.value.title,class:"inspiration-other-img"},null,8,J)]),t("div",P,[t("img",{src:e.value.imagesUrl[2],alt:e.value.title,class:"inspiration-other-img"},null,8,Q)])])])]),c(E)])),c(b(k),{active:o.value,"can-cancel":!1,color:"#0089A7"},null,8,["active"])],64)}}};export{it as default};