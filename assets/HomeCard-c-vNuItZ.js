import{a as r,o,m as h,g as C,n as c,s as v,b as e,t as s,e as n,u as a,c as l,w as x}from"./index-exq00CYa.js";import{_ as y}from"./RatingStar-3AG_NZcT.js";import{u as d}from"./usePriceToTw-mhH8eMrj.js";import{u as w}from"./wishStores-v4aSYZuj.js";import{u as b}from"./useComputedDiscount-C5EyVmDF.js";const k=["src","alt"],S={class:"card-body pt-3 px-0"},R={class:"card-title fs-4 text-start text-ellipsis"},B={class:"mb-3"},_={class:"fw-500"},q={class:"d-flex justify-content-between align-items-center"},z={key:0,class:"d-flex align-items-center"},W={class:"fs-3 fw-700 text-danger"},$={class:"text-danger border border-danger mt-1 ms-2 px-2"},j={key:1,class:"fs-3 fw-700"},H={__name:"HomeCard",props:{product:{type:Object,required:!1},cardClass:{type:String,required:!1},imgClass:{type:String,required:!1},cardBgColor:{type:String,required:!1}},setup(t){const u=w(),{addWishList:m,isWishListed:g}=u;return(D,i)=>{const f=r("font-awesome-icon"),p=r("router-link");return o(),h(p,{to:`products/${t.product.id}`,class:"hover-img-opacity"},{default:C(()=>[e("div",{class:c(["position-relative card bg-none h-100 border-0",t.cardClass]),style:v({backgroundColor:t.cardBgColor})},[e("img",{src:t.product.imageUrl,class:c(["card-img-top",t.imgClass]),alt:t.product.title},null,10,k),e("div",S,[e("h5",R,s(t.product.title),1),e("div",B,[n(y,{averageRating:t.product.averageRating||0,totalRatings:t.product.totalRatings||0,classSize:"fs-6"},null,8,["averageRating","totalRatings"]),e("span",_," ("+s(t.product.totalRatings)+") ",1)]),e("div",q,[t.product.isOnSale?(o(),l("span",z,[e("span",W,s(a(d)(t.product.price)),1),e("span",$,"-"+s(a(b)(t.product.origin_price,t.product.price)),1)])):(o(),l("span",j,s(a(d)(t.product.origin_price)),1)),e("span",{class:"cursor-pointer me-2",onClick:i[0]||(i[0]=x(L=>a(m)(t.product),["prevent"]))},[n(f,{icon:[a(g)(t.product)?"fas":"far","heart"],class:"text-danger heart-icon"},null,8,["icon"])])])])],6)]),_:1},8,["to"])}}};export{H as _};
