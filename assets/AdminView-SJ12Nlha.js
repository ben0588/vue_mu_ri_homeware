import{E as A,Z as N,r as g,aa as T,p as b,c as d,b as e,t as _,u as r,l as D,n as m,w as C,d as y,F as B,f as E,e as k,a0 as L,x as F,o as f,y as R,a as K}from"./index-r1h2fncR.js";import{D as j}from"./bootstrap.esm-FzNOyMo5.js";import{V as q}from"./index-F48-yrMz.js";import{u as z}from"./i18nStores-4NeRnUDz.js";import{u as Z}from"./adminStores-Q_BXzjD3.js";const G={class:"navbar bg-dark"},H={class:"container-fluid bg-dark py-1"},J={class:"navbar-brand text-white ps-2"},P={class:"list-unstyled d-flex justify-content-center align-items-center m-0"},Q={key:0,class:"me-2"},U={class:"dropdown me-4"},W=["aria-expanded"],X=["onClick"],se={__name:"AdminView",setup(Y){const l=Z(),{showAlert:c}=R(),$=A(),w=N(),i=g(!1),p=z(),{i18nChangeLocale:I}=p,{t:a}=T(),n=g(!1),v=g(null);function S(){n.value=!n.value}const V=(s,t)=>{I(s,t),n.value=!1},M=async()=>{try{const s="https://vue3-course-api.hexschool.io/v2/logout";c({title:"管理者登出?",text:"確定登出請按下確認按鈕",icon:"question",confirmButtonColor:"#111c30",cancelButtonColor:"#b2bec3",confirmButtonText:"確認",cancelButtonText:"取消",showCancelButton:!0,showCloseButton:!0,reverseButtons:!0,preConfirm:async()=>{try{return i.value=!0,await F.post(s)}catch(t){return c({title:`${t.response.data.message} | ${a("admin.message_error")}`,text:"登出失敗，請關閉頁面重新嘗試登出",icon:"error",confirmButtonText:`${a("admin.message_confirm_text")}`,confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1}),localStorage.setItem("s72241",""),i.value=!1,!1}},allowOutsideClick:()=>!L.isLoading()}).then(t=>{var u,o,h,x;i.value=!1,(o=(u=t==null?void 0:t.value)==null?void 0:u.data)!=null&&o.success&&(localStorage.setItem("s72241",""),c({icon:"success",title:"成功",text:`${(x=(h=t==null?void 0:t.value)==null?void 0:h.data)==null?void 0:x.message} | 即將返回登入頁`,showConfirmButton:!1,timer:1e3}).then(O=>{O.dismiss===L.DismissReason.timer&&(l.isLogin=!1,w.push({path:"/admin"}))}))})}catch(s){c({title:`${s.response.data.message} | ${a("admin.message_error")}`,text:"登出失敗，請關閉頁面重新開啟",icon:"error",confirmButtonText:`${a("admin.message_confirm_text")}`,confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1}),l.isLogin=!1,w.push({path:"/admin"})}finally{i.value=!1}};return b(()=>{j.getOrCreateInstance(v.value)}),b(()=>{$.path.includes("dashboard")&&(l.isLogin=!0)}),(s,t)=>{const u=K("router-view");return f(),d(B,null,[e("header",null,[e("nav",G,[e("div",H,[e("a",J,_(r(a)("admin.dashboardName")),1),e("ul",P,[r(l).isLogin?(f(),d("li",Q,[e("button",{type:"button",class:"btn btn-light bg-dark text-white",onClick:M}," 管理者登出 ")])):D("",!0),e("li",null,[e("div",U,[e("button",{class:m(["btn btn-secondary dropdown-toggle bg-dark text-white",n.value?"show":""]),type:"button",id:"dropdownMenuButton","data-bs-toggle":"dropdown","aria-expanded":n.value,onClick:C(S,["stop"]),ref_key:"dropdownMenuButton",ref:v},[y(_(r(a)("admin.select_language_text"))+" | ",1),e("span",{class:m(`fi fi-${r(p).currentIcon}`)},null,2)],10,W),e("ul",{class:m(["dropdown-menu",n.value?"show":""]),"aria-labelledby":"dropdownMenuButton"},[(f(!0),d(B,null,E(r(p).languageList,o=>(f(),d("li",{key:o.code},[e("a",{class:"dropdown-item",onClick:C(h=>V(o.code,o.icon_code),["prevent"])},[e("span",{class:m(`fi fi-${o.icon_code}`)},null,2),y(_(o.text),1)],8,X)]))),128))],2)])])])])])]),k(r(q),{active:i.value,"can-cancel":!1,color:"#d63031"},null,8,["active"]),k(u)],64)}}};export{se as default};
