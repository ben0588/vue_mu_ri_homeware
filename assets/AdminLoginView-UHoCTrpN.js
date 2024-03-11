import{Z as A,aa as S,r as u,c as r,b as e,t as l,u as n,w as T,h as f,v as B,ab as D,e as h,d as V,o as d,x as v,a as C,y as L}from"./index-r1h2fncR.js";import{u as P}from"./adminStores-Q_BXzjD3.js";const I={class:"container d-flex justify-content-center align-items-center h-100 py-60"},M={class:"admin-form-container border border-2 shadow rounded p-5"},N={class:"text-center fw-bolder"},E={class:"mb-3"},F={for:"admin_account",class:"form-label mb-1"},U=["placeholder"],j={class:"position-relative mb-3"},z={for:"admin_password",class:"form-label mb-1"},K=["type","placeholder"],O={key:0},R={key:1},Z=["disabled"],q={key:0},G=e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),H={key:1},X={__name:"AdminLoginView",setup(J){const w=P(),{showAlert:_}=L(),g=A(),{t:s}=S(),b=u(null),o=u({username:"",password:""}),c=u(!1),i=u("password"),y=()=>{i.value==="password"?i.value="text":i.value="password"},x=async()=>{try{c.value=!0;const a=await v.post("https://vue3-course-api.hexschool.io/v2/admin/signin",{...o.value}),{success:m,token:t,expired:k}=a.data;document.cookie=`AdminToken=${t}; expires=${new Date(k)};`,v.defaults.headers.common.Authorization=t,localStorage.setItem("s72241",t),m&&(o.value.username="",o.value.password="",w.isLogin=!0,_({position:"top-start",title:` ${s("admin.message_success")} | ${a.data.message}`,text:"即將進入管理者頁面，請稍後",icon:"success",showConfirmButton:!1,timer:1e3}).then($=>{$.isDismissed&&g.push({path:"/admin/dashboard/products"})}))}catch(p){_({title:`${p.response.data.message} | ${s("admin.message_error")}`,text:"請檢查帳號密碼是否有誤，嘗試重新登入。謝謝",icon:"error",confirmButtonText:`${s("admin.message_confirm_text")}`,confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1})}finally{c.value=!1}};return(p,a)=>{const m=C("font-awesome-icon");return d(),r("div",I,[e("div",M,[e("h2",N,l(n(s)("admin.loginTitle")),1),e("form",{onSubmit:T(x,["prevent"]),class:"mt-5",ref_key:"adminLoginForm",ref:b},[e("div",E,[e("label",F,l(n(s)("admin.loginAccount")),1),f(e("input",{type:"email",class:"form-control",id:"admin_account",placeholder:`${n(s)("admin.loginAccountPlaceholder")}`,"onUpdate:modelValue":a[0]||(a[0]=t=>o.value.username=t)},null,8,U),[[B,o.value.username]])]),e("div",j,[e("label",z,l(n(s)("admin.loginPassword")),1),f(e("input",{type:i.value,class:"form-control",id:"admin_password",placeholder:`${n(s)("admin.loginPasswordPlaceholder")}`,"onUpdate:modelValue":a[1]||(a[1]=t=>o.value.password=t)},null,8,K),[[D,o.value.password]]),e("span",{class:"admin-eye-container hover-opacity",onClick:y},[i.value==="password"?(d(),r("span",O,[h(m,{icon:["fas","eye"],class:"fs-5"})])):(d(),r("span",R,[h(m,{icon:["fas","eye-slash"],class:"fs-5"})]))])]),e("button",{type:"submit",class:"btn btn-dark text-white w-100 mt-2 p-2",disabled:c.value||o.value.username===""||o.value.password===""},[c.value?(d(),r("span",q,[G,V(" "+l(n(s)("admin.logging_in_text")),1)])):(d(),r("span",H,l(n(s)("admin.login_text")),1))],8,Z)],544)])])}}};export{X as default};
