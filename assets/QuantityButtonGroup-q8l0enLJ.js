import{r as v,p as b,o as m,c as I,b as r,e as f,n as l,u as s,h as C,v as g,a as q}from"./index-02fF4FkO.js";import{u as S}from"./cartStores-s5GIrrnM.js";const h={class:"input-group"},k=["disabled"],x=["disabled"],T={__name:"QuantityButtonGroup",props:{id:String,productId:String,type:{type:String,default:"edit"},cartQuantity:{type:Number},btnClass:{type:String,default:"btn-dark"},inputClass:{type:String,default:"border-dark"}},emits:["fetch-quantity"],setup(a,{emit:y}){const e=a,o=y,t=v(1),n=S(),c=i=>{e.type==="api-edit"?(n.addTargetId=e.id,i==="add"?(t.value+=1,o("fetch-quantity",{id:e.id,productId:e.productId,qty:t.value})):i==="reduce"&&(t.value===1?t.value=1:(t.value-=1,o("fetch-quantity",{id:e.id,productId:e.productId,qty:t.value})))):i==="add"?(t.value+=1,o("fetch-quantity",{productId:e.productId,qty:t.value})):i==="reduce"&&(t.value===1?t.value=1:(t.value-=1,o("fetch-quantity",{productId:e.productId,qty:t.value})))};return b(()=>{e.type==="api-edit"&&(t.value=e.cartQuantity)}),(i,d)=>{const p=q("font-awesome-icon");return m(),I("div",h,[r("button",{type:"button",class:l(["btn border-1 py-2",a.btnClass]),onClick:d[0]||(d[0]=u=>c("reduce")),disabled:s(n).addTargetId===a.id&&s(n).editState},[f(p,{icon:["fas","minus"]})],10,k),C(r("input",{type:"number",class:l(["form-control text-center border-1 py-2 ps-3 ps-xl-3",a.inputClass]),readOnly:"","onUpdate:modelValue":d[1]||(d[1]=u=>t.value=u)},null,2),[[g,t.value,void 0,{number:!0}]]),r("button",{type:"button",class:l(["btn border-1 py-2",a.btnClass]),onClick:d[2]||(d[2]=u=>c("add")),disabled:s(n).addTargetId===a.id&&s(n).editState},[f(p,{icon:["fas","plus"]})],10,x)])}}};export{T as _};