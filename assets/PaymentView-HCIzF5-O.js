import{E as j,Z as P,r as d,p as Q,c as a,u as n,b as t,e as c,d as u,F as E,f as R,t as s,w as U,h as q,A as I,n as Y,l as k,g as F,x as $,a as K,o as r,y as G,a0 as J}from"./index-kg2-RDHi.js";import{V as W}from"./index-W94Jg4tC.js";import{u as f}from"./usePriceToTw-mhH8eMrj.js";import{u as H}from"./useComputedDiscount-DtFzcyGb.js";const tt={key:0,class:"container"},et={key:0},st={class:"table-responsive border-start border-end border-top border-2 border-dark px-3 pt-3"},ot={class:"fs-5 border-bottom border-dark pb-2 mb-3"},lt={class:"table align-middle"},at=t("thead",null,[t("tr",null,[t("td",{class:"text-start",colspan:"3"},"商品明細"),t("td",null,"售價"),t("td",{class:"text-center"},"數量"),t("td",{class:"text-end pe-3"},"小計")])],-1),nt={class:"cart-img-container"},ct=["src","alt"],rt={class:"cart-sale-tag"},it=t("td",null,null,-1),dt={class:"d-flex flex-column justify-content-center"},ut={class:"text-decoration-line-through text-muted ms-1",style:{fontSize:"15px"}},_t={class:"fw-500 fs-5 text-danger"},pt={class:"text-center"},ft={class:"text-end pe-3"},mt={key:0,class:"d-flex flex-column justify-content-end"},ht={class:"text-decoration-line-through text-muted"},bt={class:"fw-500 fs-5 text-danger"},vt={class:"fw-500 fs-6 text-danger"},xt={key:1},yt={class:"border-start border-end border-2 border-dark"},gt={class:"d-flex justify-content-end border-bottom border-2 border-dark pb-12 pe-3"},kt={class:"d-flex flex-column align-items-end"},wt={class:"fs-5"},Bt={class:"fw-700"},Ct=t("span",{class:"text-muted"},"*已含運費",-1),Ot={class:"row mt-3"},St={class:"col-lg-6"},Tt={class:"table-responsive border border-2 border-dark px-3 mb-3 pt-3"},Vt={class:"fs-5 border-bottom border-dark pb-2 mb-3"},zt={class:"table align-middle"},At=t("td",null,"姓名",-1),Dt=t("td",null,"連絡電話",-1),Et=t("td",null,"連絡信箱",-1),Ft=t("td",null,"訂購地址",-1),$t=t("td",null,"訂單備註",-1),Kt={class:"col-lg-6"},Lt={class:"border border-2 border-dark p-3"},Mt={class:"fs-5 border-bottom border-dark pb-2 mb-3"},Nt={class:"form-floating"},Xt=t("option",{value:"",disabled:"",selected:""},"開始選擇",-1),Zt=t("option",{value:"信用卡"},"信用卡",-1),jt=t("option",{value:"ATM"},"ATM",-1),Pt=[Xt,Zt,jt],Qt=t("label",{for:"floatingSelect_payment"},"選擇付款方式",-1),Rt={key:0,id:"validation_payment_select",class:"invalid-feedback"},Ut={class:"px-2 pt-4"},qt={class:"text-success mb-0"},It=t("p",{class:"mb-0",style:{fontSize:"15px"}}," 沐日家居 致力於保護您的付款資訊，並且只與同意保護您的資料的付款服務提供商共享您的信用卡資訊。 ",-1),Yt={class:"px-2 pt-3"},Gt={class:"text-success mb-0"},Jt=t("p",{class:"mb-0",style:{fontSize:"15px"}}," 沐日家居 尊重我們網站上用戶和訪問者的隱私，我們致力於通過維護行業標準的物理、技術和管理措施來保護相關隱私，這些措施旨在保護您的個人數據免遭未經授權的處理、使用或披露。 ",-1),Wt={class:"d-flex justify-content-end pb-12 mt-12"},Ht=["disabled"],te={key:1,class:"flex-center flex-column"},ee=t("p",{class:"fs-4 mb-4"},"獲取訂單資訊失敗，請至我的訂單確認",-1),se=t("div",null,[t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/vue-ben0588/1709621706622.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fLZyIKTO0xXtmpQpOKyoDdl84VK7ew%2BxUkWMypkYUZnck%2BUWoYQS%2BVJnE4EKlaeXsOb48Y1Pbue80Q%2FMlUdCh0Z17wnAWTy1Jw3m29KqfSxuElieGTLIjX%2FUbKe3x5S91LOs%2Fzz4icDvVafVFeWs%2FsXarIqTNnlkuEQ6JM%2Bid%2BzJO9IVRsVRAtXcgDUNmr%2Fj6nOVbw41qX8%2Bps0CliT4cQYZzvDZu%2BsY3BPA95%2B6MQbI9v8sZhPC344ozOi3o1O5Yw5%2FdvHDQsysSzEGdiOAzYtvqcxRlZ%2FXDTNNh1asPBglVsAXyzXIbvCt46GnScZvJR5uj%2F036CACPE1y1QGlrA%3D%3D",alt:"獲取訂單資訊失敗，請至我的訂單確認"})],-1),oe={class:"mt-4"},ie={__name:"PaymentView",setup(le){const h=j(),w=P(),{showAlert:m}=G(),b=d(!1),i=d({}),x=d([]),v=d(""),L=d(null),B=d(null),y=d(!1),g=d(!1),M=async()=>{var _,l;try{b.value=!0;const o=`https://vue3-course-api.hexschool.io/v2/api/vue-ben0588/order/${h.params.id}`,p=await $.get(o);i.value=p.data.order,x.value=Object.values(((l=(_=p==null?void 0:p.data)==null?void 0:_.order)==null?void 0:l.products)||{})}catch(o){m({title:"失敗",text:`${o.response.data.message}`,icon:"error",confirmButtonText:"確認",confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1})}finally{b.value=!1}},N=async()=>{try{const _=`https://vue3-course-api.hexschool.io/v2/api/vue-ben0588/pay/${h.params.id}`;g.value=!0,m({title:"確認付款",text:"注意：請留意訂單資訊是否有誤",icon:"question",confirmButtonColor:"#29292D",cancelButtonColor:"#b2bec3",confirmButtonText:"付款",cancelButtonText:"取消",showCancelButton:!0,showCloseButton:!0,showLoaderOnConfirm:!0,reverseButtons:!0,preConfirm:async()=>{try{return await $.post(_)}catch(l){return m({title:"失敗",text:`${l.response.data.message}`,icon:"error",confirmButtonText:"確認",confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1}),!1}},allowOutsideClick:()=>!J.isLoading()}).then(l=>{l.value.data.success&&m({title:"成功",text:`${l.value.data.message} !`,icon:"success",showConfirmButton:!1,timer:1800,timerProgressBar:!0,allowEscapeKey:!1,allowOutsideClick:!1}).then(o=>{o.dismiss==="timer"&&w.replace({path:"/carts/complete"})})})}catch(_){m({title:"失敗!",text:`${_.response.data.message}`,icon:"error",confirmButtonText:"確認",confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1})}finally{g.value=!1,y.value=!1}};Q(()=>{h.params.id?M():w.replace({path:"/products"})});const X=()=>{y.value=!0,N()},Z=()=>{B.value.click()};return(_,l)=>{var C,O,S,T,V,z,A,D;const o=K("font-awesome-icon"),p=K("router-link");return r(),a(E,null,[b.value?k("",!0):(r(),a("div",tt,[i.value.id||n(h).params.id?(r(),a("div",et,[t("div",st,[t("p",ot,[c(o,{icon:["far","rectangle-list"]}),u(" 訂單明細 ")]),t("table",lt,[at,t("tbody",null,[(r(!0),a(E,null,R(x.value,e=>(r(),a("tr",{key:e.id},[t("td",null,[t("div",nt,[t("img",{src:e.product.imageUrl,alt:e.product.title,class:"cart-img"},null,8,ct),t("span",rt," -"+s(n(H)(e.product.origin_price,e.product.price)),1)])]),t("td",null,[t("div",null,[t("div",null,s(e.product.title),1),t("div",null,s(e.product.description),1),t("div",null,"單位："+s(e.product.unit),1)])]),it,t("td",null,[t("div",dt,[t("span",ut,s(n(f)(e.product.origin_price)),1),t("span",_t,s(n(f)(e.product.price)),1)])]),t("td",pt,s(e.qty),1),t("td",ft,[e.coupon?(r(),a("div",mt,[t("span",ht,s(n(f)(e.total)),1),t("span",null,[t("span",bt,s(n(f)(e.final_total)),1)]),t("span",vt,[c(o,{icon:["fas","ticket-simple"]}),u(" 已折 "),t("span",null,s(e.coupon.code),1)])])):e.coupon?k("",!0):(r(),a("div",xt,[t("span",null,s(n(f)(e.total)),1)]))])]))),128))])])]),t("div",yt,[t("div",gt,[t("div",kt,[t("span",wt,[t("span",null," 共 "+s(x.value.length)+" 項商品 | ",1),t("span",Bt," 合計 NT"+s(n(f)(i.value.total)),1)]),Ct])])]),t("div",Ot,[t("div",St,[t("div",Tt,[t("p",Vt,[c(o,{icon:["far","address-card"]}),u(" 訂購人資料 ")]),t("table",zt,[t("tbody",null,[t("tr",null,[At,t("td",null,s((O=(C=i.value)==null?void 0:C.user)==null?void 0:O.name),1)]),t("tr",null,[Dt,t("td",null,s((T=(S=i.value)==null?void 0:S.user)==null?void 0:T.tel),1)]),t("tr",null,[Et,t("td",null,s((z=(V=i.value)==null?void 0:V.user)==null?void 0:z.email),1)]),t("tr",null,[Ft,t("td",null,s((D=(A=i.value)==null?void 0:A.user)==null?void 0:D.address),1)]),t("tr",null,[$t,t("td",null,s(i.value.message),1)])])])])]),t("div",Kt,[t("div",Lt,[t("p",Mt,[c(o,{icon:["far","credit-card"]}),u(" 付款方式 ")]),t("form",{onSubmit:U(X,["prevent"]),ref_key:"formRef",ref:L},[t("div",Nt,[q(t("select",{class:Y(["form-select",`${v.value!==""&&"is-valid"}`]),id:"floatingSelect_payment","aria-label":"Floating label select example","onUpdate:modelValue":l[0]||(l[0]=e=>v.value=e),required:"","aria-describedby":"validation_payment_select"},Pt,2),[[I,v.value]]),Qt]),v.value===""&&y.value?(r(),a("div",Rt," 付款方式必填 ")):k("",!0),t("button",{type:"submit",style:{display:"none"},ref_key:"submitBtn",ref:B},null,512)],544),t("div",Ut,[t("p",qt,[c(o,{icon:["fas","shield"]}),u(" 支付安全 ")]),It]),t("div",Yt,[t("p",Gt,[c(o,{icon:["fas","lock"]}),u(" 安全與隱私 ")]),Jt])])])]),t("div",Wt,[c(p,{to:"/products",class:"btn btn-outline-dark",style:{width:"150px"}},{default:F(()=>[u("繼續逛逛")]),_:1}),t("button",{type:"button",onClick:Z,class:"btn btn-primary text-white ms-2",style:{width:"150px"},disabled:g.value}," 進行付款 ",8,Ht)])])):(r(),a("div",te,[ee,se,t("div",oe,[c(p,{to:"/member",class:"btn btn-dark px-4"},{default:F(()=>[u("前往確認")]),_:1})])]))])),c(n(W),{active:b.value,"can-cancel":!1,color:"#0089A7"},null,8,["active"])],64)}}};export{ie as default};