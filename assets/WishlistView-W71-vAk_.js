import{c as o,u as s,l as v,b as t,F as g,f as x,e as c,g as r,n as f,a as h,o as n,t as l,d as p,w as k}from"./index-TBvOO8MZ.js";import{u as b}from"./usePriceToTw-mhH8eMrj.js";import{u as C}from"./useComputedDiscount-WHhDgTlD.js";import{u as y}from"./wishStores-sQZ9c8Nd.js";import"./useToast-hfroil1f.js";const q={key:0},B={key:0,class:"fw-bolder fs-4 mb-4"},A={class:"table-responsive"},S={class:"table align-middle"},W=t("th",{class:"text-start",colspan:"2"},"追蹤商品資訊",-1),F=t("th",null,null,-1),J=t("th",null,null,-1),O=t("th",null,null,-1),V={class:"text-center",colspan:"2"},z=["src","alt"],K={class:"text-decoration-line-through text-muted"},T={class:"fw-bolder"},j={class:"text-danger fw-700"},D={class:"text-center"},E=t("td",{class:"text-center"},[t("button",{type:"button",class:"btn btn-primary text-white"},"加入購物車")],-1),N={class:"text-center"},I=["onClick"],R={key:1,class:"flex-center flex-column"},U=t("p",{class:"fs-4"},"目前並無任何追蹤商品",-1),Y=t("div",null,[t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/ben0588/1709362628868.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=h5XkhkexYnztCWjUC4P%2Bq2GcYACqx4RCgfPeAjKqqb4Xe%2BnBJJEVCz7v4TAcyYy%2BJSBlvRWWbk6qxveKZY9sJNVinlFg7WSBqssHpt4G5A0ZcrLlLc%2BRwg3dROKNkrAJNwKZs5QOcMO3mqU3W1qKSwCO3t6jLsAxgJxrdKhttiIoE%2F6n%2FpRzljAED%2BfI7KacbrUSSPVAdbllRxKbVcZ7rjcOzSqA2McBCotwTXYpuvCwOF91bHHZr7w5CJP63Z62CO8GUmQTJWXLxmaFWJJkOA429IC22Ts8%2FOCWGm%2BdH%2Fb4VQgC4kDgEE%2BU7sz0ODgHbwaT8kjq45vAIJOC3%2FY4ww%3D%3D",alt:"暫無任何追蹤商品"})],-1),Z={class:"mt-4"},Q={__name:"WishlistView",props:{titleShow:{type:Boolean,default:!0}},setup(d){const i=y(),{removeWishItem:m,removeAllWishlist:u}=i;return(G,_)=>{const a=h("router-link"),w=h("font-awesome-icon");return n(),o("div",{class:f(["container",`${d.titleShow?"py-32":"py-0"}`])},[s(i).wishlist.length?(n(),o("div",q,[d.titleShow?(n(),o("h2",B,"願望清單列表")):v("",!0),t("div",A,[t("table",S,[t("thead",null,[t("tr",null,[W,F,J,O,t("th",V,[t("button",{type:"button",class:"btn btn-none",onClick:_[0]||(_[0]=(...e)=>s(u)&&s(u)(...e))}," 移除所有項目 ")])])]),t("tbody",null,[(n(!0),o(g,null,x(s(i).wishlist,e=>(n(),o("tr",{key:e.id},[t("td",null,[c(a,{to:`products/${e.id}`,title:"查看商品詳情",class:"image-hover"},{default:r(()=>[t("img",{src:e.imageUrl,alt:e.title,style:{width:"70px",height:"70px",objectFit:"cover"},class:"border border-dark"},null,8,z)]),_:2},1032,["to"])]),t("td",null,[t("div",null,[t("div",null,l(e.title),1),t("div",null,l(e.content)+"asdasdasqweqweqwewqeqwe",1),t("div",null,l(e.unit),1)])]),t("td",null,[t("div",K,l(s(b)(e.origin_price)),1),t("div",T,l(s(b)(e.price)),1),t("div",j," 折扣 "+l(s(C)(e.origin_price,e.price)),1)]),t("td",D,[c(a,{to:`products/${e.id}`,class:"link-dark text-decoration-underline image-hover"},{default:r(()=>[p("查看商品詳情")]),_:2},1032,["to"])]),E,t("td",N,[t("button",{onClick:k(H=>s(m)(e),["prevent"]),type:"button",class:"btn btn-none mx-auto"},[c(w,{icon:["far","trash-can"],title:"移除追蹤",class:"fs-4"})],8,I)])]))),128))])])])])):(n(),o("div",R,[U,Y,t("div",Z,[c(a,{to:"/products",class:"btn btn-dark px-4"},{default:r(()=>[p("前去逛逛")]),_:1})])]))],2)}}};export{Q as default};
