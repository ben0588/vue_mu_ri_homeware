import{u as W}from"./loadingStores-l-uRUgXZ.js";import{r as c,c2 as Y,b7 as ee,p as V,C as te,o as t,c as s,b as e,t as q,u as r,e as m,n as se,l as T,x as E,y as J,Z as ae,F as oe,f as le,a0 as ne}from"./index-r1h2fncR.js";import{M as ie}from"./bootstrap.esm-FzNOyMo5.js";import{c as re,b as ce,a as y,e as de,f as ue}from"./index.esm-gfogD8Ke.js";import{_ as w,a as P,b as me}from"./VeeValidateCustomCheckbox-wjS4wI2v.js";const _e={class:"modal-dialog modal-xl"},pe={class:"modal-content border-0"},he={class:"modal-header bg-dark text-white"},ve={id:"adminEventModalLabel",class:"modal-title"},fe={key:0},be={key:1},ge=["disabled"],ye={class:"modal-body position-relative"},we={key:0},xe={class:"row"},Ce={class:"col-md-4"},ke={class:"input-group mb-3"},$e=e("label",{for:"imageUrlFile",class:"form-label w-100"},"或 上傳主圖片 ( 限jpg/jpeg/png )",-1),Ue=["disabled","title"],Be={key:0},Te=e("span",{class:"spinner-border spinner-border-sm me-1",role:"status"},[e("span",{class:"visually-hidden"},"上傳中")],-1),qe=e("span",null,"上傳中",-1),Ee=[Te,qe],Me={key:1},Se={key:0,class:"text-danger"},Le={key:0},Oe=e("h5",{class:"mb-1 mt-2"},"主圖片預覽",-1),je=["src","alt"],Ae={key:1},Fe={key:0},Re=e("h5",{class:"mb-1 mt-2"},"文章副圖片 [1] 預覽",-1),De=["src","alt"],Ne={key:1},Pe=e("h5",{class:"mb-1 mt-2"},"文章副圖片 [2] 預覽",-1),Ve=["src","alt"],Je={key:2},Ke=e("h5",{class:"mb-1 mt-2"},"文章副圖片 [3] 預覽",-1),Ie=["src","alt"],ze={class:"col-md-8"},Xe={class:"row"},Ze={class:"col-md-6"},Ge={class:"col-md-6"},He={class:"col-md-6"},Qe={class:"col-md-6"},We={class:"col-12"},Ye={class:"col-12"},et={class:"col-12"},tt={class:"modal-footer mt-3"},st=["disabled"],at={key:0},ot=e("span",{class:"spinner-border spinner-border-sm me-2","aria-hidden":"true"},null,-1),lt=e("span",{role:"status"},null,-1),nt={key:1},it={key:1,class:"text-center py-64"},rt={__name:"AdminEventModal",emits:["refetch-events"],setup(K,{expose:R,emit:x}){const S="https://vue3-course-api.hexschool.io",L="vue-ben0588",{showAlert:f}=J(),_=c(""),B=c(""),C=c(!1),k=c(!1),p=c(null),o=c(null),l=x,$=c({id:new Date().getTime(),create_at:0,title:"",subtitle:"",description:"",content:"",imageUrl:"",imagesUrl:["","",""],activity_start_time:"",activity_end_time:"",isPublic:!1}),{setFieldValue:I,values:d,handleSubmit:z,resetForm:D}=Y({initialValues:JSON.parse(JSON.stringify($.value)),validationSchema:ee(re().shape({create_at:ce(),title:y().required("此欄位必填"),subtitle:y().required("此欄位必填"),imageUrl:y().required("此欄位必填").matches(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\\/~+#-]*[\w@?^=%&amp;\\/~+#-])?/,{message:"URL 必須以 https:// 開頭",excludeEmptyString:!0}),imagesUrl:de().of(y().required("此欄位必填").matches(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\\/~+#-]*[\w@?^=%&amp;\\/~+#-])?/,{message:"URL 必須以 https:// 開頭",excludeEmptyString:!0})),content:y().required("此欄位必填"),description:y().required("此欄位必填"),isPublic:ue().required("此欄位必填"),activity_start_time:y().required("此欄位必填"),activity_end_time:y().required("此欄位必填")}))});V(()=>{o.value=new ie(p.value,{backdrop:"static",keyboard:!1})}),te(()=>{o.value&&o.value.dispose()});const X=async n=>{try{C.value=!0;const a=`https://vue-mu-ri-homeware-json-server.onrender.com/events?id=${n}`,i=await E.get(a),[u]=i.data;D({values:u})}catch{f({title:"失敗",icon:"error",confirmButtonText:"確認",confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1})}finally{C.value=!1}},Z=({id:n,type:a})=>{B.value=a||"",_.value=n||"",a==="create"?B.value=a:a==="edit"&&X(n),o.value.show()},O=()=>{D({values:JSON.parse(JSON.stringify($.value))}),o.value.hide()},G=async n=>{try{k.value=!0;const a=_.value?"儲存":"新增";let i,u;a==="新增"?(i="https://vue-mu-ri-homeware-json-server.onrender.com/events",u=await E.post(i,{id:new Date().getTime()+Math.floor(Math.random()*10),create_at:Math.floor(new Date().getTime()/1e3),...n})):a==="儲存"&&(i=`https://vue-mu-ri-homeware-json-server.onrender.com/events/${_.value}`,u=await E.put(i,{...n})),(u.status===200||u.status===201)&&(O(),f({position:"top-start",title:"成功",icon:"success",showConfirmButton:!1,timer:1e3}),setTimeout(()=>{l("refetch-events",!0)},1e3))}catch(a){f({title:"失敗",icon:"error",text:`${a}`,confirmButtonText:"確認",confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1})}finally{k.value=!1}},N=z(n=>{G(n)}),h=c(null),U=c(!1),M=c(""),j=c(!1),H=n=>{var i;j.value=!0;const{files:a}=n.target;if(h.value=a,(i=h.value[0])!=null&&i.name){const b=/\.(jpg|png|jpeg)$/.test(h.value[0].name),v=3*1024*1024;b?(M.value="",h.value[0].size>v&&(M.value="檔案大小限制為 3MB 以下，請重新選擇")):b||(j.value=!1,M.value="限制只能上傳 .jpg、.jpeg  或 .png 格式圖片")}},Q=async()=>{var n,a,i,u,b;try{if(U.value=!0,h.value.files){const v=new FormData;v.append("file-to-upload",(n=h==null?void 0:h.value)==null?void 0:n.files[0]);const A=`${S}/v2/api/${L}/admin/upload`,F={"Content-Type":"multipart/form-data"},g=await E.post(A,v,{headers:F});(a=g==null?void 0:g.data)!=null&&a.success&&(I("image",(i=g==null?void 0:g.data)==null?void 0:i.imageUrl),h.value&&(h.value.value=""),U.value=!1,f({position:"top-start",title:"成功 | 圖片上傳成功",icon:"success",showConfirmButton:!1,timer:1e3}))}}catch(v){f({title:`失敗 | ${(b=(u=v==null?void 0:v.response)==null?void 0:u.data)==null?void 0:b.message}`,icon:"error",confirmButtonText:"確認",confirmButtonColor:"#000000"})}finally{U.value=!1}};return R({openModal:Z,closeModal:O}),(n,a)=>{var i,u,b,v,A,F;return t(),s("div",{class:"modal fade",tabindex:"-1","aria-labelledby":"adminEventModalLabel","aria-hidden":"true",ref_key:"bsAdminEventModalRef",ref:p},[e("div",_e,[e("div",pe,[e("div",he,[e("h5",ve,[B.value==="create"?(t(),s("span",fe,"新增文章")):(t(),s("span",be,"編輯文章 - 文章編碼："+q(_.value),1))]),e("button",{type:"button",class:"bg-dark text-white fs-4 fw-bolder border-0","data-bs-dismiss":"modal","aria-label":"Close",onClick:O,disabled:k.value}," X ",8,ge)]),e("div",ye,[C.value?(t(),s("div",it,"讀取中，請稍候..")):(t(),s("div",we,[e("form",{onSubmit:a[0]||(a[0]=(...g)=>r(N)&&r(N)(...g))},[e("div",xe,[e("div",Ce,[m(w,{name:"imageUrl",id:"admin-event-image",required:!0,labelText:"文章封面圖片網址(URL)",labelClass:"fs-6",type:"url"}),e("div",ke,[$e,e("input",{class:"form-control",type:"file",name:"file-to-upload",id:"imageUrlFile",ref_key:"fileRef",ref:h,onChange:H},null,544),e("button",{class:se(["input-group-text d-block bg-dark text-white w-100",{"btn-secondary":U.value,"text-dark":U.value}]),type:"button",onClick:Q,disabled:!j.value||U.value,title:j.value?"上傳檔案":"請先選擇檔案"},[U.value?(t(),s("span",Be,Ee)):(t(),s("span",Me," 上傳圖片"))],10,Ue),M.value?(t(),s("span",Se,"*"+q(M.value),1)):T("",!0)]),m(w,{name:"imagesUrl[0]",id:"admin-event-imagesUrl-0",required:!0,labelText:"文章副圖片網址(URL) [橫、直、直]",inputContainer:"mb-1",labelClass:"fs-6",type:"url"}),m(w,{name:"imagesUrl[1]",id:"admin-event-imagesUrl-1",required:!0,labelText:"",labelClass:"d-none",inputContainer:"mb-1",type:"url"}),m(w,{name:"imagesUrl[2]",id:"admin-event-imagesUrl-2",required:!0,labelText:"",labelClass:"d-none",type:"url"}),r(d).imageUrl.match(/^https:\/\//)?(t(),s("div",Le,[Oe,e("img",{class:"img-fluid border border-2",src:r(d).imageUrl,alt:r(d).title},null,8,je)])):T("",!0),(i=r(d))!=null&&i.imagesUrl?(t(),s("div",Ae,[(u=r(d))!=null&&u.imagesUrl[0].match(/^https:\/\//)?(t(),s("div",Fe,[Re,e("img",{class:"img-fluid border border-2",src:r(d).imagesUrl[0],alt:r(d).title},null,8,De)])):T("",!0),(v=(b=r(d))==null?void 0:b.imagesUrl[1])!=null&&v.match(/^https:\/\//)?(t(),s("div",Ne,[Pe,e("img",{class:"img-fluid border border-2",src:r(d).imagesUrl[1],alt:r(d).title},null,8,Ve)])):T("",!0),(F=(A=r(d))==null?void 0:A.imagesUrl[2])!=null&&F.match(/^https:\/\//)?(t(),s("div",Je,[Ke,e("img",{class:"img-fluid border border-2",src:r(d).imagesUrl[2],alt:r(d).title},null,8,Ie)])):T("",!0)])):T("",!0)]),e("div",ze,[e("div",Xe,[e("div",Ze,[m(w,{name:"title",id:"admin-event-title",required:!0,labelText:"活動主標題",labelClass:"fs-6"})]),e("div",Ge,[m(w,{name:"subtitle",id:"admin-event-subtitle",required:!0,labelText:"活動副標題",labelClass:"fs-6"})]),e("div",He,[m(w,{name:"activity_start_time",id:"admin-event-start_time",required:!0,labelText:"活動開始時間",labelClass:"fs-6",type:"date"})]),e("div",Qe,[m(w,{name:"activity_end_time",id:"admin-event-end_time",required:!0,labelText:"活動結束時間",labelClass:"fs-6",type:"date"})]),e("div",We,[m(P,{name:"description",id:"admin-event-description",required:!0,labelText:"主標題內容",labelClass:"fs-6",inputContainer:"mt-3"})]),e("div",Ye,[m(P,{name:"content",id:"admin-event-center",required:!0,labelText:"副標題內容",labelClass:"fs-6",inputContainer:"mt-3"})]),e("div",et,[m(me,{name:"isPublic",id:"admin-event-isPublic",labelText:"活動開啟狀態",labelClass:"fs-6",inputContainer:"mt-3"})])])])]),e("div",tt,[e("button",{type:"button",class:"btn btn-outline-secondary text-dark",onClick:O}," 取消 "),e("button",{type:"submit",class:"btn btn-primary text-white px-5",disabled:k.value},[k.value?(t(),s("span",at,[ot,lt,e("span",null,q(_.value?"儲存中":"新增中"),1)])):(t(),s("span",nt,q(_.value?"儲存":"新增"),1))],8,st)])],32)]))])])])],512)}}},ct={class:"pt-3"},dt={class:"row"},ut=e("span",{class:"col-6"},[e("h3",{class:""},"活動列表")],-1),mt={class:"col-6"},_t={class:"float-end pe-3"},pt={class:"table-responsive"},ht={class:"table align-middle"},vt=e("thead",null,[e("tr",{class:"fw-500"},[e("td",null,"編碼"),e("td",null,"主標題"),e("td",null,"活動時間"),e("td",null,"狀態"),e("td",null,"操作")])],-1),ft=e("td",null,"wqeqwe",-1),bt={key:0,class:"text-success"},gt={key:1,class:"text-danger"},yt={class:"d-flex align-items-center"},wt=["onClick"],xt=["disabled","onClick"],Ct={key:0},kt=e("span",{class:"spinner-grow spinner-grow-sm me-1","aria-hidden":"true"},null,-1),$t=e("span",{role:"status"},null,-1),Ut=e("span",null,"刪除中",-1),Bt=[kt,$t,Ut],Tt={key:1},Ot={__name:"AdminEventsView",setup(K){const R=ae(),{showAlert:x}=J(),S=W(),L=c(null),f=c([]),_=c(""),B=({type:p,id:o})=>{L.value.openModal({type:p,id:o})},C=async()=>{try{S.toggleLoading();const o=await E.get("https://vue-mu-ri-homeware-json-server.onrender.com/events");f.value=o.data}catch(p){x({title:"失敗",text:`${p.response.data.message}`,icon:"error",confirmButtonText:"確認",confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1}).then(o=>{o.isConfirmed&&R.replace("/admin")})}finally{S.toggleLoading()}},k=async p=>{try{const o=`https://vue-mu-ri-homeware-json-server.onrender.com/events/${p}`;x({title:"確認刪除活動?",text:"注意：確認刪除活動後，內容將無法復原!",icon:"question",confirmButtonColor:"#29292D",cancelButtonColor:"#b2bec3",confirmButtonText:"確認",cancelButtonText:"取消",showCancelButton:!0,showCloseButton:!0,showLoaderOnConfirm:!0,reverseButtons:!0,preConfirm:async()=>{try{return _.value=p,await E.delete(o)}catch{return x({title:"失敗",icon:"error",confirmButtonText:"確認",confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1}),!1}},allowOutsideClick:()=>!ne.isLoading()}).then(async l=>{var $;(($=l==null?void 0:l.value)==null?void 0:$.status)===200&&(x({position:"top-start",title:"成功",text:"已成功刪除活動",icon:"success",showConfirmButton:!1,timer:1e3}),setTimeout(()=>{C()},1e3))})}catch(o){x({title:"失敗",icon:"error",text:`${o}`,confirmButtonText:"確認",confirmButtonColor:"#000000",allowEscapeKey:!1})}finally{_.value=""}};return V(()=>{C()}),(p,o)=>(t(),s("div",ct,[e("div",dt,[ut,e("span",mt,[e("div",_t,[e("button",{type:"button",class:"btn btn-success px-4",onClick:o[0]||(o[0]=l=>B({type:"create"}))}," 新增活動 ")])])]),e("div",pt,[e("table",ht,[vt,e("tbody",null,[(t(!0),s(oe,null,le(f.value,l=>(t(),s("tr",{key:l.id},[e("td",null,q(l.id),1),e("td",null,q(l.title),1),ft,e("td",null,[l.isPublic?(t(),s("span",bt," 啟用 ")):(t(),s("span",gt,"未啟用"))]),e("td",null,[e("div",yt,[e("button",{type:"button",class:"btn btn-outline-dark me-1",onClick:$=>B({type:"edit",id:l.id})}," 編輯 ",8,wt),e("button",{type:"button",class:"btn btn-outline-danger",disabled:_.value===l.id,onClick:$=>k(l.id)},[_.value===l.id?(t(),s("span",Ct,Bt)):(t(),s("span",Tt," 刪除 "))],8,xt)])])]))),128))])])]),m(rt,{ref_key:"adminEventModal",ref:L,onRefetchEvents:C},null,512)]))}};export{Ot as default};
