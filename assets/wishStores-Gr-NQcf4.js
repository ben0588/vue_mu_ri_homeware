import{Y as m,r as h,z as d,p as f,y as v}from"./index-r1h2fncR.js";import{u as g}from"./useToast-l1HPxIPq.js";const{showAlert:n}=v(),{toastAlert:o}=g(),x=m("wishStore",()=>{const t=h([]),l=()=>{const e=localStorage.getItem("wishList");e&&(t.value=JSON.parse(e))},r=e=>{if(t.value.findIndex(i=>i.id===e.id)!==-1)t.value=t.value.filter(i=>i.id!==e.id),o({message:"🌠 已移除商品追蹤"});else{const i={id:e.id,title:e.title,content:e.content,origin_price:e.origin_price,price:e.price,imageUrl:e.imageUrl,unit:e.unit,description:e.description};t.value.push(i),o({message:"⭐已新增商品追蹤"})}},a=e=>t.value.some(s=>s.id===e.id),c=e=>{n({title:"移除此商品追蹤?",text:"確認後此追蹤項目將會被移除",icon:"question",confirmButtonColor:"#111c30",cancelButtonColor:"#b2bec3",confirmButtonText:"確認",cancelButtonText:"取消",showCancelButton:!0,showCloseButton:!0}).then(s=>{s.isConfirmed&&(t.value=t.value.filter(i=>i.id!==e.id),o({message:"🌠 已移除商品追蹤"}))})},u=()=>{n({title:"移除所有追蹤項目?",text:"確認後所有追蹤項目將會移除",icon:"question",confirmButtonColor:"#111c30",cancelButtonColor:"#b2bec3",confirmButtonText:"確認",cancelButtonText:"取消",showCancelButton:!0,showCloseButton:!0}).then(e=>{e.isConfirmed&&(t.value=[],o({message:"🌌 已移除所有商品追蹤"}))})};return d(()=>t.value,()=>{localStorage.setItem("wishList",JSON.stringify(t.value))},{deep:!0}),f(()=>{l()}),{wishlist:t,addWishList:r,isWishListed:a,removeWishItem:c,removeAllWishlist:u}});export{x as u};