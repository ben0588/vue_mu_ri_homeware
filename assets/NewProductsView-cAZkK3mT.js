import{r as l,q as v,p as w,c as o,b as u,F as n,f as h,l as g,e as i,u as y,x,o as a,y as V}from"./index-Pqrum06f.js";import{V as k}from"./index-DnuBronG.js";import{c as B}from"./RatingStar-SHYQcV7p.js";import{_ as N}from"./HomeCard-QltFgNDr.js";import"./usePriceToTw-mhH8eMrj.js";import"./wishStores-t7a2747e.js";import"./useToast-IpBMnqS6.js";import"./useComputedDiscount-p4hGzSU_.js";const b={key:0,class:"container py-32"},A=u("h2",null,"新品專區",-1),L={class:"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-between g-3 mt-3"},M={__name:"NewProductsView",setup(P){const p="https://vue3-course-api.hexschool.io",d="vue-ben0588",{showAlert:m}=V(),e=l(!1),c=l([]),f=async()=>{try{e.value=!0;const t=`${p}/v2/api/${d}/products/all`,r=await x.get(t);c.value=r.data.products.filter(s=>s.isNew)}catch(t){m({title:"失敗",text:`${t.response.data.message}`,icon:"error",confirmButtonText:"確認",confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1})}finally{e.value=!1}},_=v(()=>B(c.value));return w(()=>{f()}),(t,r)=>(a(),o(n,null,[e.value?g("",!0):(a(),o("div",b,[A,u("div",L,[(a(!0),o(n,null,h(_.value,s=>(a(),o("div",{class:"col px-3",key:s.id},[i(N,{product:s,"img-class":"new-products-img"},null,8,["product"])]))),128))])])),i(y(k),{active:e.value,"can-cancel":!1,color:"#0089A7"},null,8,["active"])],64))}};export{M as default};