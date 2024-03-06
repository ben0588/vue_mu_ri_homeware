import{r as u,q as v,x as h,p as O,c as s,b as c,e as p,u as m,l as k,h as D,y as T,F as g,f as y,z as U,o as r,t as L,A as N,a as E}from"./index-TBvOO8MZ.js";import{V as F}from"./index-6yWPHMTb.js";import{_ as M}from"./PaginationComponent-Zas_csMR.js";import{_ as q}from"./HomeCard-8Ckj71cK.js";import{c as z}from"./RatingStar-wr6yT9NQ.js";import{u as K}from"./loadingStores-ezbZSRE2.js";import{u as j,a as G}from"./searchStores-VPcY9H8M.js";import"./usePriceToTw-mhH8eMrj.js";import"./wishStores-sQZ9c8Nd.js";import"./useToast-hfroil1f.js";import"./useComputedDiscount-WHhDgTlD.js";const H={class:"container pb-32"},I={class:"row border-bottom border-2 my-2 py-2"},J={class:"col-12 col-lg-10"},Q=c("option",{value:"",selected:"",disabled:""},"請選擇主類型",-1),W=["value"],X={key:0},Y={key:1},Z=["value","selected"],ee={class:"row mt-4"},te={key:0,class:"flex-center mt-3 pt-3"},ge={__name:"ProductListView",setup(ae){const n=j(),f=K(),d=G(),{showAlert:R}=N(),_=u([]),b=u([]),C=u(""),i=u("default"),P="https://vue3-course-api.hexschool.io",V="vue-ben0588",l=async(o=1,e="")=>{try{f.toggleLoading();const t=`${P}/v2/api/${V}/products?page=${o}&category=${e}`,a=await U.get(t);_.value=a.data.products,b.value=a.data.pagination}catch(t){R({title:"失敗",text:`${t.response.data.message}`,icon:"error",confirmButtonText:"確認",confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1})}finally{f.toggleLoading()}},w=v(()=>z(_.value)),B=v(()=>[{id:"0",text:"全部商品"},{id:"1",text:"特價中"},{id:"2",text:"家具"},{id:"3",text:"家飾"},{id:"4",text:"燈具"},{id:"5",text:"廚房用品"},{id:"6",text:"浴室用品"},{id:"7",text:"寢具"},{id:"8",text:"收納"},{id:"9",text:"戶外與園藝"},{id:"10",text:"辦公室用品"},{id:"11",text:"孩童家居"}]),$=u([{id:0,title:"排序：默認",command:"default"},{id:1,title:"排序：推薦",command:"recommend"},{id:2,title:"排序：特價",command:"sale"},{id:3,title:"排序：評價高到低",command:"comments"},{id:4,title:"排序：價格低到高",command:"price_small"},{id:5,title:"排序：價格高到低",command:"price_big"},{id:6,title:"排序：建立產品新到舊",command:"create_date_new"},{id:7,title:"排序：建立產品舊到新",command:"create_date_old"}]),A=v(()=>{let o=w.value.slice();switch(i.value){case"default":o=w.value.slice();break;case"recommend":o.sort((e,t)=>{if(e.isRecommended&&!t.isRecommended)return-1;if(!e.isRecommended&&t.isRecommended)return 1;const a=t.starSymbols.fullStars-e.starSymbols.fullStars;if(a!==0)return a;const S=t.totalRatings-e.totalRatings;return S!==0?S:new Date(t.create_date)-new Date(e.create_date)});break;case"comments":o.sort((e,t)=>{const a=t.starSymbols.fullStars-e.starSymbols.fullStars;return a!==0?a:t.totalRatings-e.totalRatings});break;case"sale":o.sort((e,t)=>e.isOnSale&&!t.isOnSale?-1:!e.isOnSale&&t.isOnSale?1:new Date(t.create_date)-new Date(e.create_date));break;case"price_small":o.sort((e,t)=>e.price-t.price);break;case"price_big":o.sort((e,t)=>t.price-e.price);break;case"create_date_new":o.sort((e,t)=>new Date(t.create_date)-new Date(e.create_date));break;case"create_date_old":o.sort((e,t)=>new Date(e.create_date)-new Date(t.create_date));break}return o}),x=()=>{n.categoryTarget="全部商品",C.value="",i.value="default",d.isSearch=!1,d.searchText="",l()};return h(()=>n.categoryTarget,()=>{n.categoryTarget==="全部商品"?(i.value="default",l(1,"")):n.categoryTarget==="特價中"?(i.value="sale",l(1,"")):(i.value="default",l(1,n.categoryTarget))}),O(()=>{n.categoryTarget==="全部商品"?l():l(1,n.categoryTarget)}),h(()=>d.productsList,()=>{const o=d.productsList.map(e=>e.item);_.value=o}),(o,e)=>{const t=E("font-awesome-icon");return r(),s(g,null,[c("div",H,[c("span",I,[c("div",J,[c("button",{type:"button",class:"btn border border-1 d-inline reset-btn me-2",style:{marginTop:"-0.10rem",marginBottom:"0.10rem"},title:"重置選擇",onClick:x},[p(t,{icon:["fas","rotate"],class:""})]),m(d).isSearch?(r(),s("button",{key:0,type:"button",class:"btn btn-warning border border-1 d-inline reset-btn me-2",style:{marginTop:"-0.10rem",marginBottom:"0.10rem"},title:"重置關鍵字搜尋",onClick:x}," 重置關鍵字搜尋 ")):k("",!0),D(c("select",{class:"products-select-rwd form-select d-inline","aria-label":"Default select example","onUpdate:modelValue":e[0]||(e[0]=a=>m(n).categoryTarget=a)},[Q,(r(!0),s(g,null,y(B.value,a=>(r(),s("option",{value:a.text,key:a.id},[a.text==="特價中"?(r(),s("span",X,"全部商品(特價)")):(r(),s("span",Y,L(a.text),1))],8,W))),128))],512),[[T,m(n).categoryTarget]]),D(c("select",{class:"products-select-rwd form-select d-inline ms-2","aria-label":"Default select example","onUpdate:modelValue":e[1]||(e[1]=a=>i.value=a)},[(r(!0),s(g,null,y($.value,a=>(r(),s("option",{value:a.command,key:a.id,selected:a.command==="create_date"},L(a.title),9,Z))),128))],512),[[T,i.value]])])]),c("div",ee,[(r(!0),s(g,null,y(A.value,a=>(r(),s("div",{class:"col-sm-6 col-md-4 col-lg-3",key:a.id},[p(q,{product:a,"img-class":"products-card-img"},null,8,["product"])]))),128))]),m(d).isSearch?k("",!0):(r(),s("div",te,[p(M,{pagination:b.value,"onUpdated:page":l},null,8,["pagination"])]))]),p(m(F),{active:m(f).isLoading,"can-cancel":!1,color:"#0089A7"},null,8,["active"])],64)}}};export{ge as default};
