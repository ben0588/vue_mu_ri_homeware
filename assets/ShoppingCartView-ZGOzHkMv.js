import{c as i,u as e,b as t,F as b,f as L,t as o,e as c,g as r,l as S,a as g,o as d,w as v,d as p}from"./index-TBvOO8MZ.js";import{V as B}from"./index-6yWPHMTb.js";import{u}from"./usePriceToTw-mhH8eMrj.js";import{u as Q}from"./useComputedDiscount-WHhDgTlD.js";import{u as R}from"./wishStores-sQZ9c8Nd.js";import{u as V}from"./cartStores-n71J01eM.js";import{_ as E}from"./QuantityButtonGroup-H4pkonXu.js";import"./useToast-hfroil1f.js";const N={key:0,class:"container"},W={key:0},G=t("h2",{class:"fw-bolder fs-4"},"購物車列表",-1),H={class:"table-responsive"},T={class:"table align-middle"},q=t("td",{class:"text-start",colspan:"3"},"商品明細",-1),D=t("td",null,"售價",-1),j=t("td",{class:"text-center"},[t("div",{style:{paddingRight:"2rem"}},"數量")],-1),O=t("td",{class:"text-center"},"小計",-1),P={class:"pb-0",colspan:"1"},z=["src","alt"],A={class:"cart-sale-tag"},I=t("td",null,null,-1),K={class:"d-flex flex-column justify-content-center"},M={class:"text-decoration-line-through text-muted ms-1",style:{fontSize:"15px"}},U={class:"fw-500 fs-5 text-danger"},Z={class:"text-center"},J={style:{width:"150px"}},$={class:"text-center"},Y={class:"flex-center"},X=["onClick"],tt=["onClick"],st={class:"d-flex justify-content-end border-bottom border-2 pb-12 mb-12"},et={class:"d-flex flex-column align-items-end"},ot={class:"fs-5"},nt={class:"fw-700"},ct=t("span",{class:"text-end text-muted"},"*未含運費",-1),at={class:"d-flex justify-content-end pb-12 mb-12"},it={key:1,class:"flex-center flex-column"},dt=t("p",{class:"fs-4 mb-4"},"購物車目前並無任何商品",-1),lt=t("div",null,[t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/vue-ben0588/1709523797457.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TVpfq289hPAS0eJEUfUdQ094vN5dKwHD%2B261x5OpEH1uHeeE0Nd99HygcwvSAOfHcQJ4%2F%2B9BK4ugP20MZHg4sW9yksSFesbZoGYe6mOP3%2FLGJYD%2BwUyH3Go3d544OviGcMSRW%2FzcR1RKaWsMH1JEKdqCXibbCmwjqmnGufKB%2FeMqTzm3u8%2Fa66DIcFfmJf4t4%2BWdh2R5EQWzKN%2FVTud3sRRhiH%2BrltLOEoty5SBftDQnphuRO19cubaX2FaUG5ZpArGLvfPUgNu8lW9ivRIlaWgEqf36Mki4GOVn1cL2QV5lPje1jeZqN5oQjRZk1%2F52YRpaP7LcSt%2ByA%2FZEa0mnpQ%3D%3D",alt:"購物車目前並無任何商品"})],-1),rt={class:"mt-4"},xt={__name:"ShoppingCartView",setup(ut){const x=R(),{addWishList:y,isWishListed:_}=x,n=V(),{deleteCart:k,deleteCarts:h,editCart:w}=n,C=({qty:f,id:l,productId:a})=>{l===n.addTargetId&&w({id:l,quantity:f,productId:a})};return(f,l)=>{const a=g("router-link"),m=g("font-awesome-icon");return d(),i(b,null,[e(n).cartLoading?S("",!0):(d(),i("div",N,[e(n).cartList.length?(d(),i("div",W,[G,t("div",H,[t("table",T,[t("thead",null,[t("tr",null,[q,D,j,O,t("th",P,[t("button",{type:"button",class:"btn btn-none",onClick:l[0]||(l[0]=(...s)=>e(h)&&e(h)(...s))}," 移除所有品項 ")])])]),t("tbody",null,[(d(!0),i(b,null,L(e(n).cartList,s=>(d(),i("tr",{key:s.id},[t("td",null,[c(a,{to:`products/${s.product_id}`,title:"查看商品詳情",class:"cart-img-container image-hover"},{default:r(()=>[t("img",{src:s.product.imageUrl,alt:s.product.title,class:"cart-img"},null,8,z),t("span",A," -"+o(e(Q)(s.product.origin_price,s.product.price)),1)]),_:2},1032,["to"])]),t("td",null,[t("div",null,[t("div",null,o(s.product.title),1),t("div",null,o(s.product.content),1),t("div",null,o(s.product.unit),1)])]),I,t("td",null,[t("div",K,[t("span",M,o(e(u)(s.product.origin_price)),1),t("span",U,o(e(u)(s.product.price)),1)])]),t("td",Z,[t("div",J,[c(E,{onFetchQuantity:C,id:s.id,type:"api-edit",cartQuantity:s.qty,productId:s.product_id,btnClass:"btn-secondary",inputClass:"border-secondary"},null,8,["id","cartQuantity","productId"])])]),t("td",$,o(e(u)(s.total)),1),t("td",null,[t("div",Y,[t("span",{class:"cursor-pointer me-2",onClick:v(F=>e(y)(s.product),["prevent"])},[c(m,{icon:[e(_)(s.product)?"fas":"far","heart"],class:"text-danger fs-3",title:e(_)(s.product)?"移除願望清單":"加入願望清單中"},null,8,["icon","title"])],8,X),t("button",{onClick:v(F=>e(k)(s.id),["prevent"]),type:"button",class:"btn btn-none"},[c(m,{icon:["far","trash-can"],title:"移除購物車",class:"fs-4"})],8,tt)])])]))),128))])])]),t("div",st,[t("div",et,[t("span",ot,[t("span",null," 共 "+o(e(n).cartList.length)+" 項商品 | ",1),t("span",nt," 合計 NT"+o(e(u)(e(n).cartFinalTotal)),1)]),ct])]),t("div",at,[c(a,{to:"/products",class:"btn btn-outline-dark",style:{width:"150px"}},{default:r(()=>[p("繼續購物")]),_:1}),c(a,{to:"/carts/confirm",class:"btn btn-primary text-white ms-2",style:{width:"150px"}},{default:r(()=>[p("填寫訂單資訊")]),_:1})])])):(d(),i("div",it,[dt,lt,t("div",rt,[c(a,{to:"/products",class:"btn btn-dark px-4"},{default:r(()=>[p("前去逛逛")]),_:1})])]))])),c(e(B),{active:e(n).cartLoading,"can-cancel":!1,color:"#0089A7"},null,8,["active"])],64)}}};export{xt as default};
