import{c as d,u as e,b as t,F as b,f as L,t as o,e as c,g as r,l as S,a as g,o as i,w as v,d as _}from"./index-vmlNiwhE.js";import{V as B}from"./index--ZYZKX03.js";import{u,a as Q}from"./useComputedDiscount-IkDIEbmK.js";import{u as R}from"./wishStores-7WTlr6W9.js";import{u as V}from"./cartStores-rP9M6NO2.js";import{_ as E}from"./QuantityButtonGroup-2ChlDyM0.js";import"./useToast-vTYsJrIh.js";const N={key:0,class:"container"},W={key:0},G=t("h2",{class:"fw-bolder fs-4"},"購物車列表",-1),H={class:"table-responsive"},T={class:"table align-middle"},q=t("td",{class:"text-start",colspan:"3"},"商品明細",-1),D=t("td",null,"售價",-1),O=t("td",{class:"text-center"},[t("div",{style:{paddingRight:"2rem"}},"數量")],-1),P=t("td",{class:"text-center"},"小計",-1),j={class:"pb-0",colspan:"1"},A=["src","alt"],I=t("td",null,null,-1),K={class:"text-decoration-line-through text-muted"},M={class:"text-danger"},U={class:"fw-500"},Z={class:"text-center"},z={style:{width:"150px"}},J={class:"text-center"},$={class:"flex-center"},Y=["onClick"],X=["onClick"],tt={class:"d-flex justify-content-end border-bottom border-2 pb-12 mb-12"},st={class:"d-flex flex-column align-items-end"},et={class:"fs-5"},ot={class:"fw-700"},nt=t("span",{class:"text-end text-muted"},"*未含運費",-1),ct={class:"d-flex justify-content-end pb-12 mb-12"},at={key:1,class:"flex-center flex-column"},dt=t("p",{class:"fs-4"},"購物車目前並無任何商品",-1),it=t("div",null,[t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/vue-ben0588/1709523797457.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TVpfq289hPAS0eJEUfUdQ094vN5dKwHD%2B261x5OpEH1uHeeE0Nd99HygcwvSAOfHcQJ4%2F%2B9BK4ugP20MZHg4sW9yksSFesbZoGYe6mOP3%2FLGJYD%2BwUyH3Go3d544OviGcMSRW%2FzcR1RKaWsMH1JEKdqCXibbCmwjqmnGufKB%2FeMqTzm3u8%2Fa66DIcFfmJf4t4%2BWdh2R5EQWzKN%2FVTud3sRRhiH%2BrltLOEoty5SBftDQnphuRO19cubaX2FaUG5ZpArGLvfPUgNu8lW9ivRIlaWgEqf36Mki4GOVn1cL2QV5lPje1jeZqN5oQjRZk1%2F52YRpaP7LcSt%2ByA%2FZEa0mnpQ%3D%3D",alt:"購物車目前並無任何商品"})],-1),lt={class:"mt-4"},gt={__name:"ShoppingCartView",setup(rt){const y=R(),{addWishList:x,isWishListed:p}=y,n=V(),{deleteCart:k,deleteCarts:h,editCart:w}=n,C=({qty:f,id:l,productId:a})=>{l===n.addTargetId&&w({id:l,quantity:f,productId:a})};return(f,l)=>{const a=g("router-link"),m=g("font-awesome-icon");return i(),d(b,null,[e(n).cartLoading?S("",!0):(i(),d("div",N,[e(n).cartList.length?(i(),d("div",W,[G,t("div",H,[t("table",T,[t("thead",null,[t("tr",null,[q,D,O,P,t("th",j,[t("button",{type:"button",class:"btn btn-none",onClick:l[0]||(l[0]=(...s)=>e(h)&&e(h)(...s))}," 移除所有品項 ")])])]),t("tbody",null,[(i(!0),d(b,null,L(e(n).cartList,s=>(i(),d("tr",{key:s.id},[t("td",null,[c(a,{to:`products/${s.product_id}`,title:"查看商品詳情",class:"cart-img-container image-hover"},{default:r(()=>[t("img",{src:s.product.imageUrl,alt:s.product.title,class:"cart-img"},null,8,A)]),_:2},1032,["to"])]),t("td",null,[t("div",null,[t("div",null,o(s.product.title),1),t("div",null,o(s.product.content),1),t("div",null,o(s.product.unit),1)])]),I,t("td",null,[t("div",null,[t("span",K,o(e(u)(s.product.origin_price)),1),t("span",M," -"+o(e(Q)(s.product.origin_price,s.product.price)),1)]),t("div",U,o(e(u)(s.product.price)),1)]),t("td",Z,[t("div",z,[c(E,{onFetchQuantity:C,id:s.id,type:"api-edit",cartQuantity:s.qty,productId:s.product_id,btnClass:"btn-secondary",inputClass:"border-secondary"},null,8,["id","cartQuantity","productId"])])]),t("td",J,o(e(u)(s.total)),1),t("td",null,[t("div",$,[t("span",{class:"cursor-pointer me-2",onClick:v(F=>e(x)(s.product),["prevent"])},[c(m,{icon:[e(p)(s.product)?"fas":"far","heart"],class:"text-danger fs-3",title:e(p)(s.product)?"移除願望清單":"加入願望清單中"},null,8,["icon","title"])],8,Y),t("button",{onClick:v(F=>e(k)(s.id),["prevent"]),type:"button",class:"btn btn-none"},[c(m,{icon:["far","trash-can"],title:"移除購物車",class:"fs-4"})],8,X)])])]))),128))])])]),t("div",tt,[t("div",st,[t("span",et,[t("span",null," 共 "+o(e(n).cartList.length)+" 項商品 | ",1),t("span",ot," 合計 NT"+o(e(u)(e(n).cartFinalTotal)),1)]),nt])]),t("div",ct,[c(a,{to:"/products",class:"btn btn-outline-dark",style:{width:"150px"}},{default:r(()=>[_("繼續購物")]),_:1}),c(a,{to:"/carts/confirm",class:"btn btn-primary text-white ms-2",style:{width:"150px"}},{default:r(()=>[_("填寫訂單資訊")]),_:1})])])):(i(),d("div",at,[dt,it,t("div",lt,[c(a,{to:"/products",class:"btn btn-dark px-4"},{default:r(()=>[_("前去逛逛")]),_:1})])]))])),c(e(B),{active:e(n).cartLoading,"can-cancel":!1,color:"#0089A7"},null,8,["active"])],64)}}};export{gt as default};
