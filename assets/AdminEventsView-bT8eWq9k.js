import{u as ee}from"./loadingStores-omsFTG1v.js";import{r as d,c4 as te,b8 as se,_ as ae,c5 as oe,$ as T,c9 as le,ca as ne,p as K,C as ie,o as s,c as a,b as e,t as q,u as r,e as v,n as re,l as E,x as M,y as I,Z as ce,F as de,f as ue,a2 as me}from"./index-Pqrum06f.js";import{M as _e}from"./bootstrap.esm-FzNOyMo5.js";import{_ as S,a as J,b as pe}from"./VeeValidateCustomCheckbox-vDFnCqUW.js";const he={class:"modal-dialog modal-xl"},ve={class:"modal-content border-0"},fe={class:"modal-header bg-dark text-white"},be={id:"adminEventModalLabel",class:"modal-title"},ge={key:0},ye={key:1},we=["disabled"],$e={class:"modal-body position-relative"},xe={key:0},Ce={class:"row"},ke={class:"col-md-4"},Be={class:"input-group mb-3"},Ue=e("label",{for:"imageUrlFile",class:"form-label w-100"},"或 上傳主圖片 ( 限jpg/jpeg/png )",-1),Te=["disabled","title"],Ee={key:0},Se=e("span",{class:"spinner-border spinner-border-sm me-1",role:"status"},[e("span",{class:"visually-hidden"},"上傳中")],-1),qe=e("span",null,"上傳中",-1),Me=[Se,qe],Ae={key:1},Le={key:0,class:"text-danger"},Oe={key:0},Fe=e("h5",{class:"mb-1 mt-2"},"主圖片預覽",-1),Re=["src","alt"],je={key:1},De={key:0},Ne=e("h5",{class:"mb-1 mt-2"},"文章副圖片 [1] 預覽",-1),Pe=["src","alt"],Ve={key:1},Je=e("h5",{class:"mb-1 mt-2"},"文章副圖片 [2] 預覽",-1),Ke=["src","alt"],Ie={key:2},ze=e("h5",{class:"mb-1 mt-2"},"文章副圖片 [3] 預覽",-1),Xe=["src","alt"],Ze={class:"col-md-8"},Ge={class:"row"},He={class:"col-md-6"},Qe={class:"col-md-6"},We={class:"col-12"},Ye={class:"col-12"},et={class:"col-12"},tt={class:"modal-footer mt-3"},st=["disabled"],at={key:0},ot=e("span",{class:"spinner-border spinner-border-sm me-2","aria-hidden":"true"},null,-1),lt=e("span",{role:"status"},null,-1),nt={key:1},it={key:1,class:"text-center py-64"},rt={__name:"AdminEventModal",emits:["refetch-events"],setup(z,{expose:D,emit:y}){const k="https://vue3-course-api.hexschool.io",B="vue-ben0588",{showAlert:b}=I(),m=d(""),U=d(""),w=d(!1),$=d(!1),h=d(null),t=d(null),c=y,x=d({id:new Date().getTime(),create_at:0,title:"",subtitle:"",description:"",content:"",image:"",imagesUrl:["","",""],ActivityTime:"",isPublic:!0}),{setFieldValue:L,values:l,errors:Et,handleSubmit:X,meta:St,resetForm:N}=te({initialValues:JSON.parse(JSON.stringify(x.value)),validationSchema:se(ae().shape({create_at:oe(),title:T().required("此欄位必填"),subtitle:T().required("此欄位必填"),image:T().required("此欄位必填").matches(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\\/~+#-]*[\w@?^=%&amp;\\/~+#-])?/,{message:"URL 必須以 https:// 開頭",excludeEmptyString:!0}),imagesUrl:le().of(T().required("此欄位必填").matches(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\\/~+#-]*[\w@?^=%&amp;\\/~+#-])?/,{message:"URL 必須以 https:// 開頭",excludeEmptyString:!0})),content:T().required("此欄位必填"),description:T().required("此欄位必填"),isPublic:ne().required("此欄位必填")}))});K(()=>{t.value=new _e(h.value,{backdrop:"static",keyboard:!1})}),ie(()=>{t.value&&t.value.dispose()});const Z=async n=>{try{w.value=!0;const o=`https://vue-mu-ri-homeware-json-server.onrender.com/events?id=${n}`,i=await M.get(o),[u]=i.data;N({values:u})}catch{b({title:"失敗",icon:"error",confirmButtonText:"確認",confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1})}finally{w.value=!1}},G=({id:n,type:o})=>{U.value=o||"",m.value=n||"",o==="create"?U.value=o:o==="edit"&&Z(n),t.value.show()},O=()=>{N({values:JSON.parse(JSON.stringify(x.value))}),t.value.hide()},H=async n=>{try{$.value=!0;const o=m.value?"儲存":"新增";let i,u;o==="新增"?(i=`${k}/v2/api/${B}/admin/article`,u=await M.post(i,{data:{...n,create_at:Math.floor(new Date().getTime()/1e3)}})):o==="儲存"&&(i=`${k}/v2/api/${B}/admin/article/${m.value}`,u=await M.put(i,{data:{...n}})),u.data.success&&(O(),b({position:"top-start",title:`成功 | ${u.data.message}`,icon:"success",showConfirmButton:!1,timer:1e3}),setTimeout(()=>{c("refetch-events",!0)},1e3))}catch(o){b({title:"失敗",text:`${o.response.data.message}`,icon:"error",confirmButtonText:"確認",confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1})}finally{$.value=!1}},P=X(n=>{H(n)}),_=d(null),C=d(!1),A=d(""),F=d(!1),Q=n=>{var i;F.value=!0;const{files:o}=n.target;if(_.value=o,(i=_.value[0])!=null&&i.name){const g=/\.(jpg|png|jpeg)$/.test(_.value[0].name),p=3*1024*1024;g?(A.value="",_.value[0].size>p&&(A.value="檔案大小限制為 3MB 以下，請重新選擇")):g||(F.value=!1,A.value="限制只能上傳 .jpg、.jpeg  或 .png 格式圖片")}},W=async()=>{var n,o,i,u,g;try{if(C.value=!0,_.value.files){const p=new FormData;p.append("file-to-upload",(n=_==null?void 0:_.value)==null?void 0:n.files[0]);const R=`${k}/v2/api/${B}/admin/upload`,j={"Content-Type":"multipart/form-data"},f=await M.post(R,p,{headers:j});(o=f==null?void 0:f.data)!=null&&o.success&&(L("image",(i=f==null?void 0:f.data)==null?void 0:i.imageUrl),_.value&&(_.value.value=""),C.value=!1,b({position:"top-start",title:"成功 | 圖片上傳成功",icon:"success",showConfirmButton:!1,timer:1e3}))}}catch(p){b({title:`失敗 | ${(g=(u=p==null?void 0:p.response)==null?void 0:u.data)==null?void 0:g.message}`,icon:"error",confirmButtonText:"確認",confirmButtonColor:"#000000"})}finally{C.value=!1}};return D({openModal:G,closeModal:O}),(n,o)=>{var i,u,g,p,R,j,f,V;return s(),a("div",{class:"modal fade",tabindex:"-1","aria-labelledby":"adminEventModalLabel","aria-hidden":"true",ref_key:"bsAdminEventModalRef",ref:h},[e("div",he,[e("div",ve,[e("div",fe,[e("h5",be,[U.value==="create"?(s(),a("span",ge,"新增文章")):(s(),a("span",ye,"編輯文章 - 文章編碼："+q(m.value),1))]),e("button",{type:"button",class:"bg-dark text-white fs-4 fw-bolder border-0","data-bs-dismiss":"modal","aria-label":"Close",onClick:O,disabled:$.value}," X ",8,we)]),e("div",$e,[w.value?(s(),a("div",it,"讀取中，請稍候..")):(s(),a("div",xe,[e("form",{onSubmit:o[0]||(o[0]=(...Y)=>r(P)&&r(P)(...Y))},[e("div",Ce,[e("div",ke,[v(S,{name:"image",id:"admin-event-image",required:!0,labelText:"文章封面圖片網址(URL)",labelClass:"fs-6"}),e("div",Be,[Ue,e("input",{class:"form-control",type:"file",name:"file-to-upload",id:"imageUrlFile",ref_key:"fileRef",ref:_,onChange:Q},null,544),e("button",{class:re(["input-group-text d-block bg-dark text-white w-100",{"btn-secondary":C.value,"text-dark":C.value}]),type:"button",onClick:W,disabled:!F.value||C.value,title:F.value?"上傳檔案":"請先選擇檔案"},[C.value?(s(),a("span",Ee,Me)):(s(),a("span",Ae," 上傳圖片"))],10,Te),A.value?(s(),a("span",Le,"*"+q(A.value),1)):E("",!0)]),v(S,{name:"imagesUrl[0]",id:"admin-event-imagesUrl-0",required:!0,labelText:"文章副圖片網址(URL) [橫、直、直]",inputContainer:"mb-1",labelClass:"fs-6"}),v(S,{name:"imagesUrl[1]",id:"admin-event-imagesUrl-1",required:!0,labelText:"",labelClass:"d-none",inputContainer:"mb-1"}),v(S,{name:"imagesUrl[2]",id:"admin-event-imagesUrl-2",required:!0,labelText:"",labelClass:"d-none"}),(u=(i=r(l))==null?void 0:i.image)!=null&&u.match(/^https:\/\//)?(s(),a("div",Oe,[Fe,e("img",{class:"img-fluid border border-2",src:r(l).image,alt:r(l).title},null,8,Re)])):E("",!0),(g=r(l))!=null&&g.imagesUrl?(s(),a("div",je,[(p=r(l))!=null&&p.imagesUrl[0].match(/^https:\/\//)?(s(),a("div",De,[Ne,e("img",{class:"img-fluid border border-2",src:r(l).imagesUrl[0],alt:r(l).title},null,8,Pe)])):E("",!0),(j=(R=r(l))==null?void 0:R.imagesUrl[1])!=null&&j.match(/^https:\/\//)?(s(),a("div",Ve,[Je,e("img",{class:"img-fluid border border-2",src:r(l).imagesUrl[1],alt:r(l).title},null,8,Ke)])):E("",!0),(V=(f=r(l))==null?void 0:f.imagesUrl[2])!=null&&V.match(/^https:\/\//)?(s(),a("div",Ie,[ze,e("img",{class:"img-fluid border border-2",src:r(l).imagesUrl[2],alt:r(l).title},null,8,Xe)])):E("",!0)])):E("",!0)]),e("div",Ze,[e("div",Ge,[e("div",He,[v(S,{name:"title",id:"admin-event-title",required:!0,labelText:"活動主標題",labelClass:"fs-6"})]),e("div",Qe,[v(S,{name:"subtitle",id:"admin-event-subtitle",required:!0,labelText:"活動副標題",labelClass:"fs-6"})]),e("div",We,[v(J,{name:"description",id:"admin-event-description",required:!0,labelText:"主標題內容",labelClass:"fs-6",inputContainer:"mt-3"})]),e("div",Ye,[v(J,{name:"content",id:"admin-event-center",required:!0,labelText:"副標題內容",labelClass:"fs-6",inputContainer:"mt-3"})]),e("div",et,[v(pe,{name:"isPublic",id:"admin-event-isPublic",labelText:"活動開啟狀態",labelClass:"fs-6",inputContainer:"mt-3"})])])])]),e("div",tt,[e("button",{type:"button",class:"btn btn-outline-secondary text-dark",onClick:O}," 取消 "),e("button",{type:"submit",class:"btn btn-primary text-white px-5",disabled:$.value},[$.value?(s(),a("span",at,[ot,lt,e("span",null,q(m.value?"儲存中":"新增中"),1)])):(s(),a("span",nt,q(m.value?"儲存":"新增"),1))],8,st)])],32)]))])])])],512)}}},ct={class:"pt-3"},dt={class:"row"},ut=e("span",{class:"col-6"},[e("h3",{class:""},"活動列表")],-1),mt={class:"col-6"},_t={class:"float-end pe-3"},pt={class:"table-responsive"},ht={class:"table align-middle"},vt=e("thead",null,[e("tr",{class:"fw-500"},[e("td",null,"編碼"),e("td",null,"主標題"),e("td",null,"活動時間"),e("td",null,"狀態"),e("td",null,"操作")])],-1),ft=e("td",null,"wqeqwe",-1),bt={key:0,class:"text-success"},gt={key:1,class:"text-danger"},yt={class:"d-flex align-items-center"},wt=["onClick"],$t=["disabled","onClick"],xt={key:0},Ct=e("span",{class:"spinner-grow spinner-grow-sm me-1","aria-hidden":"true"},null,-1),kt=e("span",{role:"status"},null,-1),Bt=e("span",null,"刪除中",-1),Ut=[Ct,kt,Bt],Tt={key:1},Ot={__name:"AdminEventsView",setup(z){const D=ce(),{showAlert:y}=I(),k=ee(),B=d(null),b=d([]),m=d(""),U=({type:h,id:t})=>{B.value.openModal({type:h,id:t})},w=async()=>{try{k.toggleLoading();const t=await M.get("https://vue-mu-ri-homeware-json-server.onrender.com/events");b.value=t.data}catch(h){y({title:"失敗",text:`${h.response.data.message}`,icon:"error",confirmButtonText:"確認",confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1}).then(t=>{t.isConfirmed&&D.replace("/admin")})}finally{k.toggleLoading()}},$=async h=>{try{y({title:"確認刪除訂單?",text:"注意：確認刪除後，訂單將無法復原!",icon:"question",confirmButtonColor:"#29292D",cancelButtonColor:"#b2bec3",confirmButtonText:"確認",cancelButtonText:"取消",showCancelButton:!0,showCloseButton:!0,showLoaderOnConfirm:!0,reverseButtons:!0,preConfirm:async()=>{try{return m.value=h,await M.delete()}catch(t){return y({title:"失敗",text:`${t.response.data.message}`,icon:"error",confirmButtonText:"確認",confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1}),!1}},allowOutsideClick:()=>!me.isLoading()}).then(async t=>{var c,x,L,l;(x=(c=t==null?void 0:t.value)==null?void 0:c.data)!=null&&x.success&&(y({position:"top-start",title:`成功 | ${(l=(L=t==null?void 0:t.value)==null?void 0:L.data)==null?void 0:l.message}`,icon:"success",showConfirmButton:!1,timer:1e3}),setTimeout(()=>{w()},1e3))})}catch(t){y({title:"失敗",text:`${t.response.data.message}`,icon:"error",confirmButtonText:"確認",confirmButtonColor:"#000000",allowEscapeKey:!1})}finally{m.value=""}};return K(()=>{w()}),(h,t)=>(s(),a("div",ct,[e("div",dt,[ut,e("span",mt,[e("div",_t,[e("button",{type:"button",class:"btn btn-success px-4",onClick:t[0]||(t[0]=c=>U({type:"create"}))}," 新增活動 ")])])]),e("div",pt,[e("table",ht,[vt,e("tbody",null,[(s(!0),a(de,null,ue(b.value,c=>(s(),a("tr",{key:c.id},[e("td",null,q(c.id),1),e("td",null,q(c.title),1),ft,e("td",null,[c.isPublic?(s(),a("span",bt," 啟用 ")):(s(),a("span",gt,"未啟用"))]),e("td",null,[e("div",yt,[e("button",{type:"button",class:"btn btn-outline-dark me-1",onClick:x=>U({type:"edit",id:c.id})}," 編輯 ",8,wt),e("button",{type:"button",class:"btn btn-outline-danger",disabled:m.value===c.id,onClick:x=>$(c.id)},[m.value===c.id?(s(),a("span",xt,Ut)):(s(),a("span",Tt," 刪除 "))],8,$t)])])]))),128))])])]),v(rt,{ref_key:"adminEventModal",ref:B,onRefetchArticles:w},null,512)]))}};export{Ot as default};
