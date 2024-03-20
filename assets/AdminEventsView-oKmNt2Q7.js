import{u as W}from"./loadingStores-bT_G6yGF.js";import{r as d,c2 as Y,b7 as ee,p as V,C as te,o as s,c as a,b as e,t as f,u as c,e as _,n as se,l as B,x as E,y as J,Z as ae,F as le,f as oe,a0 as ne}from"./index-exq00CYa.js";import{M as ie}from"./bootstrap.esm-FzNOyMo5.js";import{c as re,b as ce,a as C,e as de,f as ue}from"./index.esm-2fg6MtoJ.js";import{_ as k,a as N,b as me}from"./VeeValidateCustomCheckbox-MaXRuYM-.js";const _e={class:"modal-dialog modal-xl"},pe={class:"modal-content border-0"},he={class:"modal-header bg-dark text-white"},ve={id:"adminEventModalLabel",class:"modal-title"},fe={key:0},be={key:1},ye=["disabled"],ge={class:"modal-body position-relative"},we={key:0},xe={class:"row"},Ce={class:"col-md-4"},ke={class:"input-group mb-3"},$e=e("label",{for:"imageUrlFile",class:"form-label w-100"},"或 上傳主圖片 ( 限jpg/jpeg/png )",-1),Ue=["disabled","title"],Te={key:0},Be=e("span",{class:"spinner-border spinner-border-sm me-1",role:"status"},[e("span",{class:"visually-hidden"},"上傳中")],-1),Ee=e("span",null,"上傳中",-1),qe=[Be,Ee],Me={key:1},Se={key:0,class:"text-danger"},De={key:0},Le=e("h5",{class:"mb-1 mt-2"},"主圖片預覽",-1),Oe=["src","alt"],je={key:1},Ae={key:0},Fe=e("h5",{class:"mb-1 mt-2"},"文章副圖片 [1] 預覽",-1),Re=["src","alt"],Pe={key:1},Ie=e("h5",{class:"mb-1 mt-2"},"文章副圖片 [2] 預覽",-1),Ne=["src","alt"],Ve={key:2},Je=e("h5",{class:"mb-1 mt-2"},"文章副圖片 [3] 預覽",-1),Ke=["src","alt"],ze={class:"col-md-8"},Xe={class:"row"},Ze={class:"col-md-6"},Ge={class:"col-md-6"},He={class:"col-md-6"},Qe={class:"col-md-6"},We={class:"col-12"},Ye={class:"col-12"},et={class:"col-12"},tt={class:"modal-footer mt-3"},st=["disabled"],at={key:0},lt=e("span",{class:"spinner-border spinner-border-sm me-2","aria-hidden":"true"},null,-1),ot=e("span",{role:"status"},null,-1),nt={key:1},it={key:1,class:"text-center py-64"},rt={__name:"AdminEventModal",emits:["refetch-events"],setup(K,{expose:R,emit:$}){const S="https://vue3-course-api.hexschool.io",D="vue-ben0588",{showAlert:g}=J(),p=d(""),q=d(""),T=d(!1),b=d(!1),L=d(null),o=d(null),n=$,t=d({id:new Date().getTime(),create_at:0,title:"",subtitle:"",description:"",content:"",imageUrl:"",imagesUrl:["","",""],activity_start_time:"",activity_end_time:"",isPublic:!1}),{setFieldValue:y,values:u,handleSubmit:z,resetForm:P}=Y({initialValues:JSON.parse(JSON.stringify(t.value)),validationSchema:ee(re().shape({create_at:ce(),title:C().required("此欄位必填"),subtitle:C().required("此欄位必填"),imageUrl:C().required("此欄位必填").matches(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\\/~+#-]*[\w@?^=%&amp;\\/~+#-])?/,{message:"URL 必須以 https:// 開頭",excludeEmptyString:!0}),imagesUrl:de().of(C().required("此欄位必填").matches(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\\/~+#-]*[\w@?^=%&amp;\\/~+#-])?/,{message:"URL 必須以 https:// 開頭",excludeEmptyString:!0})),content:C().required("此欄位必填"),description:C().required("此欄位必填"),isPublic:ue().required("此欄位必填"),activity_start_time:C().required("此欄位必填"),activity_end_time:C().required("此欄位必填")}))});V(()=>{o.value=new ie(L.value,{backdrop:"static",keyboard:!1})}),te(()=>{o.value&&o.value.dispose()});const X=async i=>{try{T.value=!0;const l=`https://vue-mu-ri-homeware-json-server.onrender.com/events?id=${i}`,r=await E.get(l),[m]=r.data;P({values:m})}catch{g({title:"失敗",icon:"error",confirmButtonText:"確認",confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1})}finally{T.value=!1}},Z=({id:i,type:l})=>{q.value=l||"",p.value=i||"",l==="create"?q.value=l:l==="edit"&&X(i),o.value.show()},O=()=>{P({values:JSON.parse(JSON.stringify(t.value))}),o.value.hide()},G=async i=>{try{b.value=!0;const l=p.value?"儲存":"新增";let r,m;l==="新增"?(r="https://vue-mu-ri-homeware-json-server.onrender.com/events",m=await E.post(r,{id:new Date().getTime()+Math.floor(Math.random()*10),create_at:Math.floor(new Date().getTime()/1e3),...i})):l==="儲存"&&(r=`https://vue-mu-ri-homeware-json-server.onrender.com/events/${p.value}`,m=await E.put(r,{...i})),(m.status===200||m.status===201)&&(O(),g({position:"top-start",title:"成功",icon:"success",showConfirmButton:!1,timer:1e3}),setTimeout(()=>{n("refetch-events",!0)},1e3))}catch(l){g({title:"失敗",icon:"error",text:`${l}`,confirmButtonText:"確認",confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1})}finally{b.value=!1}},I=z(i=>{G(i)}),h=d(null),U=d(!1),M=d(""),j=d(!1),H=i=>{var r;j.value=!0;const{files:l}=i.target;if(h.value=l,(r=h.value[0])!=null&&r.name){const w=/\.(jpg|png|jpeg)$/.test(h.value[0].name),v=3*1024*1024;w?(M.value="",h.value[0].size>v&&(M.value="檔案大小限制為 3MB 以下，請重新選擇")):w||(j.value=!1,M.value="限制只能上傳 .jpg、.jpeg  或 .png 格式圖片")}},Q=async()=>{var i,l,r,m,w;try{if(U.value=!0,h.value.files){const v=new FormData;v.append("file-to-upload",(i=h==null?void 0:h.value)==null?void 0:i.files[0]);const A=`${S}/v2/api/${D}/admin/upload`,F={"Content-Type":"multipart/form-data"},x=await E.post(A,v,{headers:F});(l=x==null?void 0:x.data)!=null&&l.success&&(y("image",(r=x==null?void 0:x.data)==null?void 0:r.imageUrl),h.value&&(h.value.value=""),U.value=!1,g({position:"top-start",title:"成功 | 圖片上傳成功",icon:"success",showConfirmButton:!1,timer:1e3}))}}catch(v){g({title:`失敗 | ${(w=(m=v==null?void 0:v.response)==null?void 0:m.data)==null?void 0:w.message}`,icon:"error",confirmButtonText:"確認",confirmButtonColor:"#000000"})}finally{U.value=!1}};return R({openModal:Z,closeModal:O}),(i,l)=>{var r,m,w,v,A,F;return s(),a("div",{class:"modal fade",tabindex:"-1","aria-labelledby":"adminEventModalLabel","aria-hidden":"true",ref_key:"bsAdminEventModalRef",ref:L},[e("div",_e,[e("div",pe,[e("div",he,[e("h5",ve,[q.value==="create"?(s(),a("span",fe,"新增活動")):(s(),a("span",be,"編輯活動 - 活動編碼："+f(p.value),1))]),e("button",{type:"button",class:"bg-dark text-white fs-4 fw-bolder border-0","data-bs-dismiss":"modal","aria-label":"Close",onClick:O,disabled:b.value}," X ",8,ye)]),e("div",ge,[T.value?(s(),a("div",it,"讀取中，請稍候..")):(s(),a("div",we,[e("form",{onSubmit:l[0]||(l[0]=(...x)=>c(I)&&c(I)(...x))},[e("div",xe,[e("div",Ce,[_(k,{name:"imageUrl",id:"admin-event-image",required:!0,labelText:"文章封面圖片網址(URL)",labelClass:"fs-6",type:"url"}),e("div",ke,[$e,e("input",{class:"form-control",type:"file",name:"file-to-upload",id:"imageUrlFile",ref_key:"fileRef",ref:h,onChange:H},null,544),e("button",{class:se(["input-group-text d-block bg-dark text-white w-100",{"btn-secondary":U.value,"text-dark":U.value}]),type:"button",onClick:Q,disabled:!j.value||U.value,title:j.value?"上傳檔案":"請先選擇檔案"},[U.value?(s(),a("span",Te,qe)):(s(),a("span",Me," 上傳圖片"))],10,Ue),M.value?(s(),a("span",Se,"*"+f(M.value),1)):B("",!0)]),_(k,{name:"imagesUrl[0]",id:"admin-event-imagesUrl-0",required:!0,labelText:"文章副圖片網址(URL) [橫、直、直]",inputContainer:"mb-1",labelClass:"fs-6",type:"url"}),_(k,{name:"imagesUrl[1]",id:"admin-event-imagesUrl-1",required:!0,labelText:"",labelClass:"d-none",inputContainer:"mb-1",type:"url"}),_(k,{name:"imagesUrl[2]",id:"admin-event-imagesUrl-2",required:!0,labelText:"",labelClass:"d-none",type:"url"}),c(u).imageUrl.match(/^https:\/\//)?(s(),a("div",De,[Le,e("img",{class:"img-fluid border border-2",src:c(u).imageUrl,alt:c(u).title},null,8,Oe)])):B("",!0),(r=c(u))!=null&&r.imagesUrl?(s(),a("div",je,[(m=c(u))!=null&&m.imagesUrl[0].match(/^https:\/\//)?(s(),a("div",Ae,[Fe,e("img",{class:"img-fluid border border-2",src:c(u).imagesUrl[0],alt:c(u).title},null,8,Re)])):B("",!0),(v=(w=c(u))==null?void 0:w.imagesUrl[1])!=null&&v.match(/^https:\/\//)?(s(),a("div",Pe,[Ie,e("img",{class:"img-fluid border border-2",src:c(u).imagesUrl[1],alt:c(u).title},null,8,Ne)])):B("",!0),(F=(A=c(u))==null?void 0:A.imagesUrl[2])!=null&&F.match(/^https:\/\//)?(s(),a("div",Ve,[Je,e("img",{class:"img-fluid border border-2",src:c(u).imagesUrl[2],alt:c(u).title},null,8,Ke)])):B("",!0)])):B("",!0)]),e("div",ze,[e("div",Xe,[e("div",Ze,[_(k,{name:"title",id:"admin-event-title",required:!0,labelText:"活動主標題",labelClass:"fs-6"})]),e("div",Ge,[_(k,{name:"subtitle",id:"admin-event-subtitle",required:!0,labelText:"活動副標題",labelClass:"fs-6"})]),e("div",He,[_(k,{name:"activity_start_time",id:"admin-event-start_time",required:!0,labelText:"活動開始時間",labelClass:"fs-6",type:"date"})]),e("div",Qe,[_(k,{name:"activity_end_time",id:"admin-event-end_time",required:!0,labelText:"活動結束時間",labelClass:"fs-6",type:"date"})]),e("div",We,[_(N,{name:"description",id:"admin-event-description",required:!0,labelText:"主標題內容",labelClass:"fs-6",inputContainer:"mt-3"})]),e("div",Ye,[_(N,{name:"content",id:"admin-event-center",required:!0,labelText:"副標題內容",labelClass:"fs-6",inputContainer:"mt-3"})]),e("div",et,[_(me,{name:"isPublic",id:"admin-event-isPublic",labelText:"活動開啟狀態",labelClass:"fs-6",inputContainer:"mt-3"})])])])]),e("div",tt,[e("button",{type:"button",class:"btn btn-outline-secondary text-dark",onClick:O}," 取消 "),e("button",{type:"submit",class:"btn btn-primary text-white px-5",disabled:b.value},[b.value?(s(),a("span",at,[lt,ot,e("span",null,f(p.value?"儲存中":"新增中"),1)])):(s(),a("span",nt,f(p.value?"儲存":"新增"),1))],8,st)])],32)]))])])])],512)}}},ct={class:"pt-3"},dt={class:"row"},ut=e("span",{class:"col-6"},[e("h3",{class:""},"活動列表")],-1),mt={class:"col-6"},_t={class:"float-end pe-3"},pt={class:"table-responsive"},ht={class:"table align-middle"},vt=e("thead",null,[e("tr",{class:"fw-500"},[e("td",null,"編碼"),e("td",null,"主標題"),e("td",null,"活動時間"),e("td",null,"狀態"),e("td",null,"操作")])],-1),ft={key:0,class:"d-flex flex-column align-items-start text-success"},bt={key:1,class:"d-flex flex-column align-items-start text-danger"},yt=e("span",null,"[活動已結束]",-1),gt={key:0,class:"text-success"},wt={key:1,class:"text-danger"},xt={class:"d-flex align-items-center"},Ct=["onClick"],kt=["disabled","onClick"],$t={key:0},Ut=e("span",{class:"spinner-grow spinner-grow-sm me-1","aria-hidden":"true"},null,-1),Tt=e("span",{role:"status"},null,-1),Bt=e("span",null,"刪除中",-1),Et=[Ut,Tt,Bt],qt={key:1},jt={__name:"AdminEventsView",setup(K){const R=ae(),{showAlert:$}=J(),S=W(),D=d(null),g=d([]),p=d(""),q=o=>{const n=new Date;if(o){const t=o==null?void 0:o.split("-"),y=new Date(parseInt(t[0],10),parseInt(t[1],10)-1,parseInt(t[2],10));return n>y&&n.toDateString()!==y.toDateString()}return!1},T=({type:o,id:n})=>{D.value.openModal({type:o,id:n})},b=async()=>{try{S.toggleLoading();const n=await E.get("https://vue-mu-ri-homeware-json-server.onrender.com/events");g.value=n.data}catch(o){$({title:"失敗",text:`${o.response.data.message}`,icon:"error",confirmButtonText:"確認",confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1}).then(n=>{n.isConfirmed&&R.replace("/admin")})}finally{S.toggleLoading()}},L=async o=>{try{const n=`https://vue-mu-ri-homeware-json-server.onrender.com/events/${o}`;$({title:"確認刪除活動?",text:"注意：確認刪除活動後，內容將無法復原!",icon:"question",confirmButtonColor:"#29292D",cancelButtonColor:"#b2bec3",confirmButtonText:"確認",cancelButtonText:"取消",showCancelButton:!0,showCloseButton:!0,showLoaderOnConfirm:!0,reverseButtons:!0,preConfirm:async()=>{try{return p.value=o,await E.delete(n)}catch{return $({title:"失敗",icon:"error",confirmButtonText:"確認",confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1}),!1}},allowOutsideClick:()=>!ne.isLoading()}).then(async t=>{var y;((y=t==null?void 0:t.value)==null?void 0:y.status)===200&&($({position:"top-start",title:"成功",text:"已成功刪除活動",icon:"success",showConfirmButton:!1,timer:1e3}),setTimeout(()=>{b()},1e3))})}catch(n){$({title:"失敗",icon:"error",text:`${n}`,confirmButtonText:"確認",confirmButtonColor:"#000000",allowEscapeKey:!1})}finally{p.value=""}};return V(()=>{b()}),(o,n)=>(s(),a("div",ct,[e("div",dt,[ut,e("span",mt,[e("div",_t,[e("button",{type:"button",class:"btn btn-success px-4",onClick:n[0]||(n[0]=t=>T({type:"create"}))}," 新增活動 ")])])]),e("div",pt,[e("table",ht,[vt,e("tbody",null,[(s(!0),a(le,null,oe(g.value,t=>(s(),a("tr",{key:t.id},[e("td",null,f(t.id),1),e("td",null,f(t.title),1),e("td",null,[q(t.activity_end_time)?(s(),a("div",bt,[e("span",null,f(t.activity_start_time)+" ~",1),e("span",null,f(t.activity_end_time),1),yt])):(s(),a("div",ft,[e("span",null,f(t.activity_start_time)+" ~",1),e("span",null,f(t.activity_end_time),1)]))]),e("td",null,[t.isPublic?(s(),a("span",gt," 啟用 ")):(s(),a("span",wt,"未啟用"))]),e("td",null,[e("div",xt,[e("button",{type:"button",class:"btn btn-outline-dark me-1",onClick:y=>T({type:"edit",id:t.id})}," 編輯 ",8,Ct),e("button",{type:"button",class:"btn btn-outline-danger",disabled:p.value===t.id,onClick:y=>L(t.id)},[p.value===t.id?(s(),a("span",$t,Et)):(s(),a("span",qt," 刪除 "))],8,kt)])])]))),128))])])]),_(rt,{ref_key:"adminEventModal",ref:D,onRefetchEvents:b},null,512)]))}};export{jt as default};
