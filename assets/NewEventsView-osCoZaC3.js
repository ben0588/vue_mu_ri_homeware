import{V as v}from"./index-DnuBronG.js";import{r as i,p,c as o,b as t,F as u,f,l as h,e as d,u as w,x as g,o as a,g as y,t as k,y as x,a as V}from"./index-Pqrum06f.js";const B={key:0,class:"container py-32"},C=t("h2",null,"最新活動",-1),A={class:"row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-3 mt-3"},E=["src","alt"],N={class:"mt-2 mb-4 fs-4"},F={__name:"NewEventsView",setup(b){const{showAlert:_}=x(),s=i(!1),n=i([]),m=async()=>{try{s.value=!0;const c=await g.get("https://vue-mu-ri-homeware-json-server.onrender.com/events");n.value=c.data.filter(l=>l.isPublic)}catch(r){_({title:"失敗",text:`${r.response.data.message}`,icon:"error",confirmButtonText:"確認",confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1})}finally{s.value=!1}};return p(()=>{m()}),(r,c)=>{const l=V("router-link");return a(),o(u,null,[s.value?h("",!0):(a(),o("div",B,[C,t("div",A,[(a(!0),o(u,null,f(n.value,e=>(a(),o("div",{class:"col",key:e.id},[t("div",null,[d(l,{to:`/newEvents/${e.id}`,class:"hover-opacity text-dark"},{default:y(()=>[t("img",{src:e.imageUrl,alt:e.title,class:"inspiration-card-img"},null,8,E),t("h3",N,k(e.title),1)]),_:2},1032,["to"])])]))),128))])])),d(w(v),{active:s.value,"can-cancel":!1,color:"#0089A7"},null,8,["active"])],64)}}};export{F as default};
