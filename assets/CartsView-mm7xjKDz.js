import{E as v,r as y,c as o,b as e,F as h,f as N,e as _,o as n,n as b,s as k,u as m,t as d,a as f}from"./index-TBvOO8MZ.js";const w={class:"py-32"},x={class:"container pb-12"},g={class:"list-unstyled d-flex justify-content-between justify-content-xl-around align-items-center mb-0 py-32"},C={class:"d-flex justify-content-center align-items-center flex-column"},j={key:0},B={key:1},z={__name:"CartsView",setup(R){const a=v(),i=y([{id:0,title:"購物車",path:"/carts",routeName:"front_carts_index"},{id:1,title:"填寫訂購資訊",path:"/carts/confirm",routeName:"front_order_confirm"},{id:2,title:"填寫付款資訊",path:"/carts/payment",routeName:"front_order_payment"},{id:3,title:"完成訂購",path:"/carts/complete",routeName:"front_order_complete"}]),r=l=>{const u=i.value.findIndex(c=>c.routeName===a.name);return l<u};return(l,u)=>{const c=f("font-awesome-icon"),p=f("router-view");return n(),o("div",w,[e("div",x,[e("nav",null,[e("ul",g,[(n(!0),o(h,null,N(i.value,(s,t)=>(n(),o("li",{key:s.id,class:b(["position-relative",[`item-${t}`,{"cart-navbar-active":r(t)}]])},[e("div",C,[e("div",{class:"cart-navbar-item",style:k({backgroundColor:s.routeName===m(a).name?"#0089A7":r(t)?"#005264":null,color:s.routeName===m(a).name?"#fff":null})},[r(t)?(n(),o("span",j,[_(c,{icon:["fas","check"],class:"text-white"})])):(n(),o("span",B,d(t+1),1))],4),e("div",null,d(s.title),1)])],2))),128))])])]),_(p)])}}};export{z as default};
