import{o as i,c,b as e,d as _,t as y,e as s,g as p,a3 as q,n as E,u as m,a4 as k,a5 as B,a6 as C,a7 as n,F as T,f as F,a8 as V,A}from"./index-rXVu0dOo.js";const N={class:"mb-3"},L=["for"],M=e("span",{class:"text-danger"},"*",-1),r={__name:"VeeValidateInput",props:{name:String,id:String,label:String,placeholder:String,type:{type:String,default:"text"},errors:Object,disabled:{type:Boolean,default:!1},as:{type:String,default:"input"}},setup(t){return(d,b)=>(i(),c("div",N,[e("label",{for:t.id,class:"form-label fs-5 mb-1"},[M,_(y(t.label),1)],8,L),s(m(k),{name:t.name,id:t.id,class:E(["form-control",{"is-invalid":t.errors[t.name]}]),placeholder:t.placeholder,type:t.as==="select"?null:t.type,disabled:t.disabled,as:t.as},{default:p(()=>[q(d.$slots,"default")]),_:3},8,["name","id","placeholder","type","disabled","as","class"]),s(m(B),{name:t.name,class:"text-danger"},null,8,["name"])]))}},O={class:"py-60"},R=e("h3",{class:"home-title mt-32"},"聯絡我們",-1),j={class:"row"},z=e("div",{class:"col-lg-1 col-xl-2"},null,-1),D={class:"col-lg-10 col-xl-8"},G=e("p",{class:"pt-3"},"如果您有任何問題、意見或需要協助，請隨時聯繫我們的客戶服務團隊。",-1),I=e("ul",{class:"list-unstyled bg-light p-3 mb-5"},[e("li",null,"電話連絡："),e("li",null,[_("客服專線："),e("a",{href:"tel:0800-775-800"},"0800-775-800")]),e("li",null,"客服中心營業時間："),e("li",null,"週一至週五 (例假日除外) 9:30-12:30, 14:00-17:30 (GMT+8)")],-1),K=e("p",{class:"fs-5 border-bottom border-dark pb-2 mb-3"},"電子郵件聯絡：",-1),P=["onSubmit"],H=e("option",{disabled:"",value:""},"請選擇問題類型",-1),J=["value"],Q=["disabled"],U={key:0},W=e("span",{class:"spinner-grow spinner-grow-sm me-1","aria-hidden":"true"},null,-1),X=e("span",{role:"status"},null,-1),Y={key:1},Z=e("div",{class:"col-lg-1 col-xl-2"},null,-1),te={__name:"ContactView",setup(t){const{showAlert:d}=A(),b=[{id:1,title:"訂購問題"},{id:2,title:"付款問題"},{id:3,title:"運輸問題"},{id:4,title:"退貨問題"},{id:5,title:"其他"}],g=/^(0|\+?886)9\d{8}$/,x=/^[\u4E00-\u9FA5]{2,4}$/,v=C().shape({questionType:n().required("請先選擇問題類型"),username:n().required("此欄位必填").matches(x,{message:"請輸入有效的中文姓名",excludeEmptyString:!0}),email:n().required("此欄位必填").email("請輸入正確email格式"),phone:n().matches(g,{message:"請輸入有效的台灣手機號碼",excludeEmptyString:!0}).required("手機號碼為必填欄位"),center:n().required("請描述問題")});function w(h){return new Promise((u,a)=>{setTimeout(()=>{h?u(!0):a(new Error("呼叫失敗"))},2e3)})}async function S(h,u){try{await w(0)&&(await d({title:"成功",text:"表單資訊已成功提交，我們將會在收到後盡快與您聯絡。謝謝",icon:"success",showConfirmButton:!1,timer:2e3}),u.resetForm())}catch(a){d({title:"失敗",text:`${a}，請重新提交嘗試`,icon:"error",confirmButtonText:"確認",confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1})}}return(h,u)=>(i(),c("div",O,[R,e("div",j,[z,e("div",D,[G,I,s(m(V),{"validation-schema":m(v),as:"div"},{default:p(({handleSubmit:a,isSubmitting:f,errors:l,meta:$})=>[K,e("form",{onSubmit:o=>a(o,S)},[s(r,{name:"questionType",label:"我想詢問的事項是屬於",id:"more-question",errors:l,as:"select",type:""},{default:p(()=>[H,(i(),c(T,null,F(b,o=>e("option",{value:o.title,key:o.id},y(o.title),9,J)),64))]),_:2},1032,["errors"]),s(r,{name:"username",label:"聯絡人姓名",id:"more-username",placeholder:"請輸入聯絡人姓名",errors:l,type:"text"},null,8,["errors"]),s(r,{name:"email",label:"聯絡信箱",id:"more-email",placeholder:"請輸入聯絡電子信箱",errors:l,type:"email"},null,8,["errors"]),s(r,{name:"phone",label:"聯絡手機",id:"more-phone",placeholder:"請輸入聯絡手機",errors:l,type:"tel"},null,8,["errors"]),s(r,{name:"center",label:"問題描述",id:"more-center",placeholder:"請詳細描述問題",errors:l,type:"text",as:"textarea"},null,8,["errors"]),e("button",{type:"submit",class:"btn btn-dark w-100",disabled:!$.valid||f},[f?(i(),c("span",U,[W,X,_(" 提交表單中 ")])):(i(),c("span",Y,"提交表單"))],8,Q)],40,P)]),_:1},8,["validation-schema"])]),Z])]))}};export{te as default};
