import{E as O,_ as T,r as g,ab as N,p as b,c as d,b as e,t as _,u as r,l as R,n as m,w as C,d as y,F as B,f as D,e as k,a1 as L,x as E,o as f,y as F,a as K}from"./index-wONQE6OV.js";import{D as j}from"./bootstrap.esm-FzNOyMo5.js";import{V as q}from"./index-ENWe5MEy.js";import{u as z}from"./i18nStores-LNhuajFh.js";import{u as G}from"./adminStores-MGRoxK8Z.js";const H={class:"navbar bg-dark"},J={class:"container-fluid bg-dark py-1"},P={class:"navbar-brand text-white ps-2"},Q={class:"list-unstyled d-flex justify-content-center align-items-center m-0"},U={key:0,class:"me-2"},W={class:"dropdown me-4"},X=["aria-expanded"],Y=["onClick"],se={__name:"AdminView",setup(Z){const l=G(),{showAlert:c}=F(),$=O(),w=T(),i=g(!1),p=z(),{i18nChangeLocale:I}=p,{t:a}=N(),n=g(!1),v=g(null);function S(){n.value=!n.value}const V=(s,t)=>{I(s,t),n.value=!1},A=async()=>{try{const s="https://vue3-course-api.hexschool.io/v2/logout";c({title:"管理者登出?",text:"確定登出請按下確認按鈕",icon:"question",confirmButtonColor:"#111c30",cancelButtonColor:"#b2bec3",confirmButtonText:"確認",cancelButtonText:"取消",showCancelButton:!0,showCloseButton:!0,reverseButtons:!0,preConfirm:async()=>{try{return i.value=!0,await E.post(s)}catch(t){return c({title:`${t.response.data.message} | ${a("admin.message_error")}`,text:"登出失敗，請關閉頁面重新嘗試登出",icon:"error",confirmButtonText:`${a("admin.message_confirm_text")}`,confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1}),localStorage.setItem("s72241",""),i.value=!1,!1}},allowOutsideClick:()=>!L.isLoading()}).then(t=>{var u,o,h,x;i.value=!1,(o=(u=t==null?void 0:t.value)==null?void 0:u.data)!=null&&o.success&&(localStorage.removeItem("s72241"),document.cookie="AdminToken=; Max-Age=-1;",c({icon:"success",title:"成功",text:`${(x=(h=t==null?void 0:t.value)==null?void 0:h.data)==null?void 0:x.message} | 即將返回登入頁`,showConfirmButton:!1,timer:1e3}).then(M=>{M.dismiss===L.DismissReason.timer&&(l.isLogin=!1,w.push({path:"/admin"}))}))})}catch(s){c({title:`${s.response.data.message} | ${a("admin.message_error")}`,text:"登出失敗，請關閉頁面重新開啟",icon:"error",confirmButtonText:`${a("admin.message_confirm_text")}`,confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1}),l.isLogin=!1,w.push({path:"/admin"})}finally{i.value=!1}};return b(()=>{j.getOrCreateInstance(v.value)}),b(()=>{$.path.includes("dashboard")&&(l.isLogin=!0)}),(s,t)=>{const u=K("RouterView");return f(),d(B,null,[e("header",null,[e("nav",H,[e("div",J,[e("a",P,_(r(a)("admin.dashboardName")),1),e("ul",Q,[r(l).isLogin?(f(),d("li",U,[e("button",{type:"button",class:"btn btn-light bg-dark text-white",onClick:A}," 管理者登出 ")])):R("",!0),e("li",null,[e("div",W,[e("button",{class:m(["btn btn-secondary dropdown-toggle bg-dark text-white",n.value?"show":""]),type:"button",id:"dropdownMenuButton","data-bs-toggle":"dropdown","aria-expanded":n.value,onClick:C(S,["stop"]),ref_key:"dropdownMenuButton",ref:v},[y(_(r(a)("admin.select_language_text"))+" | ",1),e("span",{class:m(`fi fi-${r(p).currentIcon}`)},null,2)],10,X),e("ul",{class:m(["dropdown-menu",n.value?"show":""]),"aria-labelledby":"dropdownMenuButton"},[(f(!0),d(B,null,D(r(p).languageList,o=>(f(),d("li",{key:o.code},[e("a",{class:"dropdown-item",onClick:C(h=>V(o.code,o.icon_code),["prevent"])},[e("span",{class:m(`fi fi-${o.icon_code}`)},null,2),y(_(o.text),1)],8,Y)]))),128))],2)])])])])])]),k(r(q),{active:i.value,"can-cancel":!1,color:"#d63031"},null,8,["active"]),k(u)],64)}}};export{se as default};