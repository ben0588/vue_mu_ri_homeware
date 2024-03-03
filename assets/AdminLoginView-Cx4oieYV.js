import{a9 as $,aa as k,r as L,c as m,b as e,t as i,u as o,w as A,h as g,v as w,d as S,o as u,z as b,ab as r,A as B}from"./index-rXVu0dOo.js";import{u as C}from"./loadingStores-vfPhJYmO.js";import{u as P}from"./adminStores-ClRMAcIb.js";const T={class:"container d-flex justify-content-center align-items-center h-100 py-60"},D={class:"admin-form-container border border-2 shadow rounded p-5"},I={class:"text-center fw-bolder fs-1"},V={class:"mb-3"},E={for:"admin_account",class:"form-label fs-4 fw-bolder mb-1"},M=["placeholder"],O={class:"mb-3"},z={for:"admin_password",class:"form-label fs-4 fw-bolder mb-1"},K=["placeholder"],N=["disabled"],R={key:0},U=e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),j={key:1},J={__name:"AdminLoginView",setup(q){const p=C(),_=P(),{showAlert:f}=B(),v=$(),{t:s}=k(),t=L({username:"",password:""}),x=async()=>{try{const a=await b.post("https://vue3-course-api.hexschool.io/v2/admin/signin",{...t.value}),{success:n,token:d,expired:y}=a.data;if(document.cookie=`AdminToken=${d}; expires=${new Date(y)};`,b.defaults.headers.common.Authorization=d,localStorage.setItem("s72241",d),_.isLogin=!0,n){t.value.username="",t.value.password="";let h;f({title:`${a.data.message} | ${s("admin.message_success")}`,html:"讀取中，請等待 <b></b> 秒後，即將進入後台管理頁面。謝謝",icon:"success",showConfirmButton:!1,timer:1800,timerProgressBar:!0,allowEscapeKey:!1,allowOutsideClick:!1,didOpen:()=>{r.showLoading();const c=r.getPopup().querySelector("b");h=setInterval(()=>{c.textContent=`${Math.ceil(r.getTimerLeft()/1e3)}`},100)},willClose:()=>{clearInterval(h)}}).then(c=>{c.dismiss===r.DismissReason.timer&&v.push({path:"/admin/dashboard/products"})})}}catch(l){f({title:`${l.response.data.message} | ${s("admin.message_error")}`,text:"請檢查帳號密碼是否有誤，嘗試重新登入。謝謝",icon:"error",confirmButtonText:`${s("admin.message_confirm_text")}`,confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1}),_.isLogin=!1}};return(l,a)=>(u(),m("div",T,[e("div",D,[e("h2",I,i(o(s)("admin.loginTitle")),1),e("form",{onSubmit:A(x,["prevent"]),class:"mt-5"},[e("div",V,[e("label",E,i(o(s)("admin.loginAccount")),1),g(e("input",{type:"email",class:"form-control form-control-lg",id:"admin_account",placeholder:`${o(s)("admin.loginAccountPlaceholder")}`,"onUpdate:modelValue":a[0]||(a[0]=n=>t.value.username=n)},null,8,M),[[w,t.value.username]])]),e("div",O,[e("label",z,i(o(s)("admin.loginPassword")),1),g(e("input",{type:"password",class:"form-control form-control-lg",id:"admin_password",placeholder:`${o(s)("admin.loginPasswordPlaceholder")}`,"onUpdate:modelValue":a[1]||(a[1]=n=>t.value.password=n)},null,8,K),[[w,t.value.password]])]),e("button",{type:"submit",class:"btn btn-dark text-white w-100 mt-2 p-2",disabled:o(p).isLoading},[o(p).isLoading?(u(),m("span",R,[U,S(" "+i(o(s)("admin.logging_in_text")),1)])):(u(),m("span",j,i(o(s)("admin.login_text")),1))],8,N)],32)])]))}};export{J as default};
