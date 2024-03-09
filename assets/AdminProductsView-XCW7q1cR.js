import{r as f,ac as oe,q as W,z as K,p as Q,C as ne,j as le,o as i,c,b as e,t as l,u as t,F as C,f as N,n as Z,w as de,d as v,h as m,v as y,l as I,A as Y,s as ie,bS as z,x as R,y as se,Z as ce,e as G,a2 as re,a as _e}from"./index-Pqrum06f.js";import{u as ue}from"./loadingStores-omsFTG1v.js";import{u as te}from"./usePriceToTw-mhH8eMrj.js";import{M as me}from"./bootstrap.esm-FzNOyMo5.js";import{u as ae}from"./i18nStores-uXbppbWE.js";import{_ as pe}from"./PaginationComponent-LaWhB1Sw.js";const ge={class:"modal-dialog modal-xl"},he={class:"modal-content border-0"},ve={class:"modal-header bg-dark text-white"},be={id:"productModalLabel",class:"modal-title"},fe=["title"],ye={class:"mt-2"},xe={class:"nav nav-tabs"},we=["onClick"],ke={class:"modal-body"},$e=e("span",{class:"text-danger"},"*",-1),Ie=e("hr",null,null,-1),Ue={class:"row"},Oe={class:"col-sm-4"},Se={class:"mb-3"},Ce={for:"imageUrl",class:"form-label"},Ne=e("span",{class:"text-danger"},"*",-1),Ve=["placeholder"],Be={class:"input-group mb-3"},Te={for:"imageUrlFile",class:"form-label w-100"},Me=["value","disabled","title"],Le={key:0},Je=e("span",{class:"spinner-border spinner-border-sm me-1",role:"status"},[e("span",{class:"visually-hidden"},"上傳中")],-1),De={key:1},Pe={class:"input-group mb-3"},Re={class:"form-label w-100"},Ae=["onUpdate:modelValue","placeholder"],He={class:"input-group mb-3"},je=e("label",{class:"form-label w-100"},"輸入圖片描述 (共五張)",-1),ze=["onUpdate:modelValue","placeholder"],Fe={key:0},qe={class:"mb-0 mt-2 fw-bolder"},Ee=["src"],Ke={key:0},We={class:"mb-0 mt-2"},Xe=["src"],Ze={class:"col-sm-8"},Ge={class:"mb-3"},Qe={for:"title",class:"form-label"},Ye=e("span",{class:"text-danger"},"*",-1),et=["placeholder"],tt={class:"row"},ot={class:"mb-3 col-md-6"},st={for:"category",class:"form-label"},at=e("span",{class:"text-danger"},"*",-1),nt={value:"",selected:"",disabled:""},lt=["value"],dt={class:"mb-3 col-md-6"},it={for:"subcategory",class:"form-label"},ct=e("span",{class:"text-danger"},"*",-1),rt={key:0,value:"",selected:"",disabled:""},_t=["value"],ut={class:"mb-3 col-md-6"},mt={for:"unit",class:"form-label"},pt=e("span",{class:"text-danger"},"*",-1),gt=["placeholder"],ht={class:"mb-3 col-md-6"},vt={for:"stock",class:"form-label"},bt=e("span",{class:"text-danger"},"*",-1),ft=["placeholder"],yt={class:"row"},xt={class:"mb-3 col-md-6"},wt={for:"origin_price",class:"form-label"},kt=e("span",{class:"text-danger"},"*",-1),$t=["placeholder"],It={class:"mb-3 col-md-6"},Ut={for:"price",class:"form-label"},Ot=e("span",{class:"text-danger"},"*",-1),St=["placeholder"],Ct={class:"mb-3 col-md-6 mt-4"},Nt={for:"dimensions",class:"form-label"},Vt=e("span",{class:"text-danger"},"*",-1),Bt=["placeholder"],Tt=["placeholder"],Mt=["placeholder"],Lt={class:"mb-3 col-md-6"},Jt={for:"colors",class:"form-label"},Dt=e("span",{class:"text-danger"},"*",-1),Pt=e("br",null,null,-1),Rt=e("span",{class:"text-danger"},"*",-1),At=["placeholder","onUpdate:modelValue"],Ht=["placeholder","onUpdate:modelValue"],jt={class:"row"},zt={class:"col-md-6 mb-3"},Ft={for:"material",class:"form-label"},qt=e("span",{class:"text-danger"},"*",-1),Et=["placeholder"],Kt={class:"col-md-6 mb-3 mt-2"},Wt={class:"form-label"},Xt=e("span",{class:"text-danger"},"*",-1),Zt=["for"],Gt=["id","onUpdate:modelValue"],Qt={class:"my-3"},Yt={for:"description",class:"form-label"},eo=e("span",{class:"text-danger"},"*",-1),to=["placeholder"],oo={class:"mb-3"},so={for:"content",class:"form-label"},ao=e("span",{class:"text-danger"},"*",-1),no=["placeholder"],lo={class:"mb-3"},io={class:"fw-bolder fs-6"},co={class:"form-check d-inline-block"},ro={class:"form-check-label",for:"isNew"},_o=["checked"],uo={class:"form-check d-inline-block ms-4"},mo={class:"form-check-label",for:"isOnHot"},po=["checked"],go={class:"form-check d-inline-block ms-4"},ho={class:"form-check-label",for:"isRecommended"},vo=["checked"],bo={class:"form-check d-inline-block ms-4"},fo={class:"form-check-label",for:"isOnSale"},yo=["checked"],xo=e("hr",null,null,-1),wo={class:"mb-3"},ko={class:"fw-bolder fs-6"},$o=e("span",{class:"text-danger"},"*",-1),Io={class:"form-check"},Uo={class:"form-check-label",for:"is_enabled"},Oo={class:"modal-footer"},So=["disabled"],Co={key:0},No=e("span",{class:"spinner-border spinner-border-sm me-2","aria-hidden":"true"},null,-1),Vo=e("span",{role:"status"},null,-1),Bo=[No,Vo],To={__name:"AdminProductsModal",props:{typeName:String},emits:["refetch-products"],setup(ee,{expose:F,emit:k}){const r="https://vue3-course-api.hexschool.io",V="vue-ben0588",q=f(null),B=f(null),a=ae(),{t:s}=oe(),{showAlert:T}=se(),A=f(0),S=ee,P=k,b={id:new Date().getTime(),title:"",category:"",subcategory:"",unit:"",stock:"1",imageUrl:"",imagesUrl:["","","","",""],imagesUrlDescriptions:["","","","",""],price:"",origin_price:"",description:"",content:"",is_enabled:1,ratings:{star_1:{count:0,reviews:[{user:"評論名稱",comment:"產品描述",reviewId:"頻論會員id"}]},star_2:{count:0},star_3:{count:0},star_4:{count:0},star_5:{count:9,reviews:[{user:"Alex",comment:"商品品質再棒了!很喜歡",reviewId:"r1"},{user:"Ben",comment:"躺起來非常舒服~~",reviewId:"r2"}]}},create_date:Math.floor(new Date().getTime()/1e3),sales_num:0,isNew:!1,isOnHot:!1,isRecommended:!1,isOnSale:!1,material:"",dimensions:{length:"",width:"",height:""},colors:[{title:"",code:""},{title:"",code:""},{title:"",code:""}]},o=f({title:"title",category:"category",origin_price:999,price:999,unit:"unit",description:"description",content:"content",is_enabled:1,imageUrl:"主圖網址",imagesUrl:["1","2","3","4","5"],ratings:{star_1:{count:0,reviews:[{user:"評論名稱",comment:"產品描述",reviewId:"頻論會員id"}]},star_2:{count:0},star_3:{count:0},star_4:{count:0},star_5:{count:9,reviews:[{user:"Alex",comment:"商品品質再棒了!很喜歡",reviewId:"r1"},{user:"Ben",comment:"躺起來非常舒服~~",reviewId:"r2"}]}},create_date:Math.floor(new Date().getTime()/1e3),sales_num:0,isNew:!0,isOnHot:!1,isRecommended:!1,isOnSale:!1,material:"",dimensions:{length:"",width:"",height:""},colors:[{title:"",code:""},{title:"",code:""},{title:"",code:""}],tw:{...b},us:{...b},jp:{...b},kr:{...b},th:{...b}}),H=W(()=>[{id:"1",text:s("admin.products_modal_category_furniture")},{id:"2",text:s("admin.products_modal_category_home_decor")},{id:"3",text:s("admin.products_modal_category_lighting")},{id:"4",text:s("admin.products_modal_category_kitchenware")},{id:"5",text:s("admin.products_modal_category_bathroom_accessories")},{id:"6",text:s("admin.products_modal_category_bedding")},{id:"7",text:s("admin.products_modal_category_storage")},{id:"8",text:s("admin.products_modal_category_outdoor_and_garden")},{id:"9",text:s("admin.products_modal_category_office_supplies")},{id:"10",text:s("admin.products_modal_category_children_furniture")}]),j=W(()=>[{id:"1",text:s("admin.products_modal_subcategory_sofas_and_chairs"),cid:"1"},{id:"2",text:s("admin.products_modal_subcategory_tables_and_chairs"),cid:"1"},{id:"3",text:s("admin.products_modal_subcategory_desks_and_office_chairs"),cid:"1"},{id:"4",text:s("admin.products_modal_subcategory_bed_frames_and_mattresses"),cid:"1"},{id:"5",text:s("admin.products_modal_subcategory_wardrobes_and_storage_cabinets"),cid:"1"},{id:"6",text:s("admin.products_modal_subcategory_coffee_tables_and_side_tables"),cid:"1"},{id:"7",text:s("admin.products_modal_subcategory_outdoor_furniture"),cid:"1"},{id:"9",text:s("admin.products_modal_subcategory_rugs_and_floor_mats"),cid:"2"},{id:"10",text:s("admin.products_modal_subcategory_curtains_and_blinds"),cid:"2"},{id:"11",text:s("admin.products_modal_subcategory_paintings_and_wall_decor"),cid:"2"},{id:"12",text:s("admin.products_modal_subcategory_decorative_pillows_and_throw_pillows"),cid:"2"},{id:"13",text:s("admin.products_modal_subcategory_mirrors"),cid:"2"},{id:"14",text:s("admin.products_modal_subcategory_vases_and_indoor_plants"),cid:"2"},{id:"15",text:s("admin.products_modal_subcategory_candles_and_fragrances"),cid:"2"},{id:"16",text:s("admin.products_modal_subcategory_pendant_lights"),cid:"3"},{id:"17",text:s("admin.products_modal_subcategory_floor_lamps"),cid:"3"},{id:"18",text:s("admin.products_modal_subcategory_table_lamps"),cid:"3"},{id:"19",text:s("admin.products_modal_subcategory_wall_lamps"),cid:"3"},{id:"20",text:s("admin.products_modal_subcategory_outdoor_lighting"),cid:"3"},{id:"21",text:s("admin.products_modal_subcategory_lighting_accessories"),cid:"3"},{id:"22",text:s("admin.products_modal_subcategory_cookware_and_cooking_utensils"),cid:"4"},{id:"23",text:s("admin.products_modal_subcategory_tableware_and_dining_sets"),cid:"4"},{id:"24",text:s("admin.products_modal_subcategory_kitchen_storage_and_organization"),cid:"4"},{id:"25",text:s("admin.products_modal_subcategory_small_kitchen_appliances"),cid:"4"},{id:"26",text:s("admin.products_modal_subcategory_knives_and_cutting_boards"),cid:"4"},{id:"27",text:s("admin.products_modal_subcategory_bath_towels_and_bathroom_mats"),cid:"5"},{id:"28",text:s("admin.products_modal_subcategory_bathroom_storage"),cid:"5"},{id:"29",text:s("admin.products_modal_subcategory_bathroom_accessories"),cid:"5"},{id:"30",text:s("admin.products_modal_subcategory_bathroom_decor"),cid:"5"},{id:"31",text:s("admin.products_modal_subcategory_sheets_and_bed_covers"),cid:"6"},{id:"32",text:s("admin.products_modal_subcategory_blankets_and_quilts"),cid:"6"},{id:"33",text:s("admin.products_modal_subcategory_pillows_and_pillowcases"),cid:"6"},{id:"34",text:s("admin.products_modal_subcategory_mattress_protectors"),cid:"6"},{id:"35",text:s("admin.products_modal_subcategory_bookshelves_and_display_cabinets"),cid:"7"},{id:"36",text:s("admin.products_modal_subcategory_storage_boxes_and_baskets"),cid:"7"},{id:"37",text:s("admin.products_modal_subcategory_closet_organizers"),cid:"7"},{id:"38",text:s("admin.products_modal_subcategory_shoe_racks_and_coat_racks"),cid:"7"},{id:"39",text:s("admin.products_modal_subcategory_outdoor_decor"),cid:"8"},{id:"40",text:s("admin.products_modal_subcategory_gardening_tools_and_planters"),cid:"8"},{id:"41",text:s("admin.products_modal_subcategory_outdoor_leisure"),cid:"8"},{id:"42",text:s("admin.products_modal_subcategory_office_desks_and_chairs"),cid:"9"},{id:"43",text:s("admin.products_modal_subcategory_office_storage_solutions"),cid:"9"},{id:"44",text:s("admin.products_modal_subcategory_office_decor_and_stationery"),cid:"9"},{id:"45",text:s("admin.products_modal_subcategory_childrens_furniture"),cid:"10"},{id:"46",text:s("admin.products_modal_subcategory_childrens_room_decor"),cid:"10"},{id:"47",text:s("admin.products_modal_subcategory_childrens_bedding_and_toy_storage"),cid:"10"}]),x=f(S.typeName),J=f(!1);K(()=>S.typeName,p=>{x.value=p}),K(()=>J.value,()=>{J.value?x.value=`${x.value} ing..`:x.value=S.typeName}),K(()=>a.currentLocale,p=>{x.value=s("admin.products_add_text")}),Q(()=>{o.value.id,x.value=S.typeName});const X=W(()=>{if(o.value[a.currentIcon].category){const p=H.value.filter(h=>h.text===o.value[a.currentIcon].category?h.id:null),d=j.value.filter(h=>h.cid===p[0].id);return o.value[a.currentIcon].subcategory=d[0].text,d}return j.value});Q(()=>{B.value=new me(q.value,{backdrop:"static",keyboard:!1})}),ne(()=>{B.value&&B.value.dispose()});const $=f(null),M=f(!1),w=f(""),u=f(!1),U=p=>{var h;u.value=!0;const{files:d}=p.target;if($.value=d,(h=$.value[0])!=null&&h.name){const g=/\.(jpg|png|jpeg)$/.test($.value[0].name),O=3*1024*1024;g?(w.value="",$.value[0].size>O&&(w.value="檔案大小限制為 3MB 以下，請重新選擇")):g||(u.value=!1,w.value="限制只能上傳 .jpg、.jpeg  或 .png 格式圖片")}},_=async()=>{try{M.value=!0;const p=new FormData;if($.value.files){p.append("file-to-upload",$.value.files[0]);const d=`${r}/v2/api/${V}/admin/upload`,h={"Content-Type":"multipart/form-data"},n=await R.post(d,p,{headers:h});n.data.success&&(o.value[a.currentIcon].imageUrl=n.data.imageUrl,$.value&&($.value.value=""),T({position:"top-start",title:`成功 | ${s("admin.message_success")}`,icon:"success",showConfirmButton:!1,timer:1e3}))}}catch(p){T({title:`${p.response.data.message} | ${s("admin.message_error")}`,icon:"error",confirmButtonText:`${s("admin.message_confirm_text")}`,confirmButtonColor:"#000000"})}finally{M.value=!1}},L=(p,d,h)=>{A.value=h,p==="create"?(o.value={title:"",category:"",origin_price:0,price:0,unit:"",description:"",content:"",is_enabled:1,imageUrl:"",imagesUrl:["1","2","3","4","5"],create_date:new Date().getTime(),tw:{...JSON.parse(JSON.stringify(b))},us:{...JSON.parse(JSON.stringify(b))},jp:{...JSON.parse(JSON.stringify(b))},kr:{...JSON.parse(JSON.stringify(b))},th:{...JSON.parse(JSON.stringify(b))}},$.value.value=null,B.value.show()):p==="edit"&&(o.value=d,$.value.value=null,B.value.show())},D=()=>{o.value={title:"",category:"",origin_price:999,price:999,unit:"",description:"",content:"",is_enabled:1,imageUrl:"",imagesUrl:["1","2","3","4","5"],tw:{...JSON.parse(JSON.stringify(b))},us:{...JSON.parse(JSON.stringify(b))},jp:{...JSON.parse(JSON.stringify(b))},kr:{...JSON.parse(JSON.stringify(b))},th:{...JSON.parse(JSON.stringify(b))}},M.value=!1,w.value="",u.value=!1,B.value.hide()};K(()=>o.value.tw,()=>{o.value.category=o.value.tw.category}),le(()=>{o.value.title=o.value.tw.title,o.value.category=o.value.tw.category,o.value.origin_price=o.value.tw.origin_price,o.value.price=o.value.tw.price,o.value.unit=o.value.tw.unit,o.value.material=o.value.tw.material,o.value.description=o.value.tw.description,o.value.content=o.value.tw.content,o.value.is_enabled=o.value.tw.is_enabled,o.value.imageUrl=o.value.tw.imageUrl,o.value.imagesUrl=o.value.tw.imagesUrl,o.value.imagesUrlDescriptions=o.value.tw.imagesUrlDescriptions,o.value.ratings=o.value.tw.ratings,o.value.sales_num=o.value.tw.sales_num,o.value.isNew=o.value.tw.isNew,o.value.isOnHot=o.value.tw.isOnHot,o.value.isRecommended=o.value.tw.isRecommended,o.value.isOnSale=o.value.tw.isOnSale,o.value.dimensions=o.value.tw.dimensions,o.value.colors=o.value.tw.colors});const E=async()=>{try{J.value=!0;const p=o.value.id?"儲存":"新增";if(!o.value.tw.title){T({title:`失敗 | ${s("admin.message_error")}`,text:"請填寫必填欄後重新後提交",icon:"error",confirmButtonText:`${s("admin.message_confirm_text")}`,confirmButtonColor:"#000000"});return}let d,h;p==="新增"?(d=`${r}/v2/api/${V}/admin/product`,h=await R.post(d,{data:o.value})):p==="儲存"&&(d=`${r}/v2/api/${V}/admin/product/${o.value.id}`,h=await R.put(d,{data:o.value})),h.data.success&&(D(),T({position:"top-start",title:` ${s("admin.message_success")} | ${h.data.message}`,icon:"success",showConfirmButton:!1,timer:1e3}),setTimeout(()=>{P("refetch-products",A.value)},1e3))}catch(p){T({title:`${p.response.data.message} | ${s("admin.message_error")}`,icon:"error",confirmButtonText:`${s("admin.message_confirm_text")}`,confirmButtonColor:"#000000"})}finally{J.value=!1}};return F({openModal:L,closeModal:D}),(p,d)=>{var h;return i(),c("div",{class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true",ref_key:"bsModalRef",ref:q},[e("div",ge,[e("div",he,[e("div",ve,[e("h5",be,[e("span",null,l((h=o.value)!=null&&h.id?`${t(s)("admin.products_edit_text")}：${o.value.id}
                  [${t(s)("admin.products_modal_current_language")}：${t(a).currentLocale}]`:`${t(s)("admin.products_create_title")}
                  [${t(s)("admin.products_modal_current_language")}：${t(a).currentLocale}]`),1)]),e("button",{type:"button",class:"bg-dark text-white fs-4 fw-bolder border-0","data-bs-dismiss":"modal","aria-label":"Close",title:`${t(s)("admin.products_cancel_text")}`,onClick:D}," X ",8,fe)]),e("div",ye,[e("ul",xe,[(i(!0),c(C,null,N(t(a).languageList,n=>(i(),c("li",{class:"nav-item",key:n.text},[e("a",{class:Z(["nav-link",{active:n.code===t(a).currentLocale}]),"aria-current":"page",href:"#",onClick:de(()=>{t(a).i18nChangeLocale(n.code,n.icon_code)},["prevent"])},[v(l(n.text),1),e("span",{class:Z(`fi fi-${n.icon_code}`)},null,2)],10,we)]))),128))])]),e("div",ke,[e("form",null,[e("div",null,[$e,v(l(t(s)("admin.products_modal_illustrate_message")),1)]),Ie,e("div",Ue,[e("div",Oe,[e("div",Se,[e("label",Ce,[Ne,v(l(t(s)("admin.products_modal_middle_url_img")),1)]),m(e("input",{id:"imageUrl",type:"text",class:"form-control",placeholder:`${t(s)("admin.products_modal_middle_url_img_placeholder")}`,"onUpdate:modelValue":d[0]||(d[0]=n=>o.value[t(a).currentIcon].imageUrl=n)},null,8,Ve),[[y,o.value[t(a).currentIcon].imageUrl]])]),e("div",Be,[e("label",Te,l(t(s)("admin.products_modal_middle_file_img")),1),e("input",{class:"form-control",type:"file",name:"file-to-upload",id:"imageUrlFile",ref_key:"fileRef",ref:$,onChange:U},null,544),e("button",{class:Z(["input-group-text bg-dark text-white d-block w-100",{"bg-secondary":M.value,"text-white":M.value}]),type:"button",value:`${t(s)("admin.products_modal_middle_file_img_button")}`,onClick:_,disabled:!u.value||M.value,title:u.value?"上傳檔案":"請先選擇檔案"},[M.value?(i(),c("span",Le,[Je,e("span",null,l(t(s)("admin.products_modal_middle_file_img_button"))+" ing..",1)])):(i(),c("span",De,l(t(s)("admin.products_modal_middle_file_img_button")),1))],10,Me)]),e("div",Pe,[e("label",Re,l(t(s)("admin.products_modal_url_images")),1),(i(!0),c(C,null,N(o.value[t(a).currentIcon].imagesUrl,(n,g)=>m((i(),c("input",{type:"text",class:"form-control w-100",key:g,"onUpdate:modelValue":O=>o.value[t(a).currentIcon].imagesUrl[g]=O,placeholder:`【${g+1}】 ${t(s)("admin.products_modal_url_images_placeholder")}`},null,8,Ae)),[[y,o.value[t(a).currentIcon].imagesUrl[g]]])),128))]),e("div",He,[je,(i(!0),c(C,null,N(o.value[t(a).currentIcon].imagesUrlDescriptions,(n,g)=>m((i(),c("input",{type:"text",class:"form-control w-100",key:g,"onUpdate:modelValue":O=>o.value[t(a).currentIcon].imagesUrlDescriptions[g]=O,placeholder:`【${g+1}】 請輸入圖片描述`},null,8,ze)),[[y,o.value[t(a).currentIcon].imagesUrlDescriptions[g]]])),128))]),o.value[t(a).currentIcon].imageUrl?(i(),c("div",Fe,[e("h5",qe,l(t(s)("admin.products_modal_middle_img_preview")),1),e("img",{class:"img-fluid border border-2",src:o.value[t(a).currentIcon].imageUrl,alt:""},null,8,Ee)])):I("",!0),(i(!0),c(C,null,N(o.value[t(a).currentIcon].imagesUrl,(n,g)=>(i(),c("div",{key:g},[o.value[t(a).currentIcon].imagesUrl[g]?(i(),c("div",Ke,[e("p",We,l(t(s)("admin.products_modal_url_images_preview"))+"【"+l(g+1)+"】 ",1),e("img",{class:"img-fluid border border-2",src:o.value[t(a).currentIcon].imagesUrl[g],alt:""},null,8,Xe)])):I("",!0)]))),128))]),e("div",Ze,[e("div",Ge,[e("label",Qe,[Ye,v(l(t(s)("admin.products_modal_title")),1)]),m(e("input",{id:"title",type:"text",class:"form-control",placeholder:t(s)("admin.products_modal_title_placeholder"),"onUpdate:modelValue":d[1]||(d[1]=n=>o.value[t(a).currentIcon].title=n)},null,8,et),[[y,o.value[t(a).currentIcon].title]])]),e("div",tt,[e("div",ot,[e("label",st,[at,v(l(t(s)("admin.products_modal_category")),1)]),m(e("select",{id:"category",class:"form-select form-select-sm","onUpdate:modelValue":d[2]||(d[2]=n=>o.value[t(a).currentIcon].category=n)},[e("option",nt,l(t(s)("admin.products_modal_category_placeholder")),1),(i(!0),c(C,null,N(H.value,n=>(i(),c("option",{value:n.text,key:n.id},l(n.text),9,lt))),128))],512),[[Y,o.value[t(a).currentIcon].category]])]),e("div",dt,[e("label",it,[ct,v(l(t(s)("admin.products_modal_subcategory")),1)]),m(e("select",{id:"subcategory",class:"form-select form-select-sm","onUpdate:modelValue":d[3]||(d[3]=n=>o.value[t(a).currentIcon].subcategory=n)},[o.value.subcategory?I("",!0):(i(),c("option",rt,l(t(s)("admin.products_modal_subcategory_placeholder")),1)),(i(!0),c(C,null,N(X.value,n=>(i(),c("option",{key:n.id,value:n.text},l(n.text),9,_t))),128))],512),[[Y,o.value[t(a).currentIcon].subcategory]])]),e("div",ut,[e("label",mt,[pt,v(l(t(s)("admin.products_modal_unit")),1)]),m(e("input",{id:"unit",type:"text",class:"form-control",placeholder:t(s)("admin.products_modal_unit_placeholder"),"onUpdate:modelValue":d[4]||(d[4]=n=>o.value[t(a).currentIcon].unit=n)},null,8,gt),[[y,o.value[t(a).currentIcon].unit]])]),e("div",ht,[e("label",vt,[bt,v(l(t(s)("admin.products_modal_stock")),1)]),m(e("input",{id:"stock",type:"number",min:"1",class:"form-control",placeholder:t(s)("admin.products_modal_stock_placeholder"),"onUpdate:modelValue":d[5]||(d[5]=n=>o.value[t(a).currentIcon].stock=n)},null,8,ft),[[y,o.value[t(a).currentIcon].stock,void 0,{number:!0}]])])]),e("div",yt,[e("div",xt,[e("label",wt,[kt,v(l(t(s)("admin.products_modal_origin_price")),1)]),m(e("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:t(s)("admin.products_modal_origin_price_placeholder"),"onUpdate:modelValue":d[6]||(d[6]=n=>o.value[t(a).currentIcon].origin_price=n)},null,8,$t),[[y,o.value[t(a).currentIcon].origin_price,void 0,{number:!0}]])]),e("div",It,[e("label",Ut,[Ot,v(l(t(s)("admin.products_modal_price")),1)]),m(e("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:t(s)("admin.products_modal_price_placeholder"),"onUpdate:modelValue":d[7]||(d[7]=n=>o.value[t(a).currentIcon].price=n)},null,8,St),[[y,o.value[t(a).currentIcon].price,void 0,{number:!0}]])]),e("div",Ct,[e("label",Nt,[Vt,v(l(t(s)("admin.products_modal_dimensions")),1)]),o.value&&o.value[t(a).currentIcon].dimensions?m((i(),c("input",{key:0,id:"dimensions",type:"number",min:"0",class:"form-control",placeholder:t(s)("admin.products_modal_dimensions_length"),"onUpdate:modelValue":d[8]||(d[8]=n=>o.value[t(a).currentIcon].dimensions.length=n)},null,8,Bt)),[[y,o.value[t(a).currentIcon].dimensions.length,void 0,{number:!0}]]):I("",!0),o.value&&o.value[t(a).currentIcon].dimensions?m((i(),c("input",{key:1,type:"number",min:"0",class:"form-control",placeholder:t(s)("admin.products_modal_dimensions_width"),"onUpdate:modelValue":d[9]||(d[9]=n=>o.value[t(a).currentIcon].dimensions.width=n)},null,8,Tt)),[[y,o.value[t(a).currentIcon].dimensions.width,void 0,{number:!0}]]):I("",!0),o.value&&o.value[t(a).currentIcon].dimensions?m((i(),c("input",{key:2,type:"number",min:"0",class:"form-control",placeholder:t(s)("admin.products_modal_dimensions_height"),"onUpdate:modelValue":d[10]||(d[10]=n=>o.value[t(a).currentIcon].dimensions.height=n)},null,8,Mt)),[[y,o.value[t(a).currentIcon].dimensions.height,void 0,{number:!0}]]):I("",!0)]),e("div",Lt,[e("label",Jt,[Dt,v(l(t(s)("admin.products_modal_colors"))+" ",1),Pt,Rt,v(l(t(s)("admin.products_modal_colors_subtitle")),1)]),(i(!0),c(C,null,N(o.value[t(a).currentIcon].colors,(n,g)=>(i(),c("div",{class:"input-group",key:g},[m(e("input",{type:"text",class:"form-control d-inline-block w-25",placeholder:t(s)("admin.products_modal_color_name"),"onUpdate:modelValue":O=>n.title=O},null,8,At),[[y,n.title]]),m(e("input",{type:"text",class:"form-control d-inline-block w-50",placeholder:t(s)("admin.products_modal_color_code"),"onUpdate:modelValue":O=>n.code=O},null,8,Ht),[[y,n.code]]),e("div",{class:"border border-2 w-25 p2",style:ie({backgroundColor:n.code?n.code:""})},null,4)]))),128))])]),e("div",jt,[e("div",zt,[e("label",Ft,[qt,v(l(t(s)("admin.products_modal_material")),1)]),m(e("input",{id:"material",type:"text",class:"form-control",placeholder:t(s)("admin.products_modal_material_placeholder"),"onUpdate:modelValue":d[11]||(d[11]=n=>o.value[t(a).currentIcon].material=n)},null,8,Et),[[y,o.value[t(a).currentIcon].material]])]),e("div",Kt,[e("label",Wt,[Xt,v(l(t(s)("admin.products_modal_star")),1)]),(i(!0),c(C,null,N(o.value[t(a).currentIcon].ratings,(n,g)=>(i(),c("div",{key:g,class:"mt-1"},[e("label",{for:g,class:"form-label me-2"},l(g),9,Zt),m(e("input",{type:"number",class:"form-control d-inline-block w-50",id:g,"onUpdate:modelValue":O=>n.count=O},null,8,Gt),[[y,n.count,void 0,{number:!0}]])]))),128))])]),e("div",Qt,[e("label",Yt,[eo,v(l(t(s)("admin.products_modal_description")),1)]),m(e("textarea",{id:"description",type:"text",class:"form-control",placeholder:t(s)("admin.products_modal_description_placeholder"),"onUpdate:modelValue":d[12]||(d[12]=n=>o.value[t(a).currentIcon].description=n)},`\r
                  `,8,to),[[y,o.value[t(a).currentIcon].description]])]),e("div",oo,[e("label",so,[ao,v(l(t(s)("admin.products_modal_content")),1)]),m(e("textarea",{id:"content",type:"text",class:"form-control",placeholder:t(s)("admin.products_modal_content_placeholder"),"onUpdate:modelValue":d[13]||(d[13]=n=>o.value[t(a).currentIcon].content=n)},`\r
                  `,8,no),[[y,o.value[t(a).currentIcon].content]])]),e("div",lo,[e("h5",io,l(t(s)("admin.products_modal_tag")),1),e("div",co,[e("label",ro,l(t(s)("admin.products_modal_tag_new")),1),m(e("input",{id:"isNew",class:"form-check-input",type:"checkbox","onUpdate:modelValue":d[14]||(d[14]=n=>o.value[t(a).currentIcon].isNew=n),checked:o.value[t(a).currentIcon].isNew},null,8,_o),[[z,o.value[t(a).currentIcon].isNew]])]),e("div",uo,[e("label",mo,l(t(s)("admin.products_modal_tag_hot")),1),m(e("input",{id:"isOnHot",class:"form-check-input",type:"checkbox","onUpdate:modelValue":d[15]||(d[15]=n=>o.value[t(a).currentIcon].isOnHot=n),checked:o.value[t(a).currentIcon].isOnHot},null,8,po),[[z,o.value[t(a).currentIcon].isOnHot]])]),e("div",go,[e("label",ho,l(t(s)("admin.products_modal_tag_recommended")),1),m(e("input",{id:"isRecommended",class:"form-check-input",type:"checkbox","onUpdate:modelValue":d[16]||(d[16]=n=>o.value[t(a).currentIcon].isRecommended=n),checked:o.value[t(a).currentIcon].isRecommended},null,8,vo),[[z,o.value[t(a).currentIcon].isRecommended]])]),e("div",bo,[e("label",fo,l(t(s)("admin.products_modal_tag_sale")),1),m(e("input",{id:"isOnSale",class:"form-check-input",type:"checkbox","onUpdate:modelValue":d[17]||(d[17]=n=>o.value[t(a).currentIcon].isOnSale=n),checked:o.value[t(a).currentIcon].isOnSale},null,8,yo),[[z,o.value[t(a).currentIcon].isOnSale]])])]),xo,e("div",wo,[e("h5",ko,[$o,v(l(t(s)("admin.products_modal_is_enabled_state")),1)]),e("div",Io,[m(e("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":d[18]||(d[18]=n=>o.value[t(a).currentIcon].is_enabled=n)},null,512),[[z,o.value[t(a).currentIcon].is_enabled]]),e("label",Uo,l(t(s)("admin.products_modal_is_enabled_checkbox")),1)])])])]),e("div",Oo,[e("button",{type:"button",class:"btn btn-outline-secondary text-dark",onClick:D},l(t(s)("admin.products_cancel_text")),1),e("button",{type:"submit",class:"btn btn-primary text-white px-5",onClick:E,disabled:J.value},[J.value?(i(),c("span",Co,Bo)):I("",!0),v(" "+l(x.value),1)],8,So)])])])])])],512)}}},Mo={class:"pt-3"},Lo={class:"row"},Jo={class:"col-6"},Do={class:"fw-500"},Po={class:"col-6"},Ro={class:"float-end pe-5"},Ao={class:"row border-top border-bottom border-2 my-2 py-3"},Ho={class:"col-5"},jo={value:"",selected:"",disabled:""},zo=["value"],Fo={class:"table-responsive"},qo={class:"table align-middle"},Eo={class:"text-center"},Ko={key:0,class:"text-danger"},Wo={key:1},Xo={key:0,class:"text-info"},Zo={key:1,class:"text-danger"},Go={key:2},Qo=e("span",null,"/",-1),Yo=e("span",{class:"text-success"},"新品",-1),es=[Qo,Yo],ts={key:3},os=e("span",null,"/",-1),ss=e("span",{class:"text-danger"},"已折",-1),as=[os,ss],ns={key:4},ls={key:5},ds=e("span",null,"/",-1),is=e("span",{class:"text-warning"},"推薦",-1),cs=[ds,is],rs={key:6},_s=e("span",null,"/",-1),us=e("span",{class:"text-danger"},"熱門",-1),ms=[_s,us],ps={style:{minWidth:"158px"}},gs={class:"d-flex align-items-center"},hs=["onClick"],vs=["onClick","disabled"],bs={key:0},fs=e("span",{class:"spinner-grow spinner-grow-sm me-1","aria-hidden":"true"},null,-1),ys=e("span",{role:"status"},null,-1),xs={key:1},Ss={__name:"AdminProductsView",setup(ee){const F=f(null),k=ae(),{t:r}=oe(),{showAlert:V}=se(),q=ce(),B=ue(),a=f([]),s=f([]),T=f("新增"),A=f(!1),S=f(""),P=f(""),b=f(1),o=(w,u)=>{w==="create"?T.value=r("admin.products_add_text"):T.value=r("admin.products_keep_text"),F.value.openModal(w,u,b.value)},H="https://vue3-course-api.hexschool.io",j="vue-ben0588",x=async(w=1,u="")=>{try{B.toggleLoading(),b.value=w;const U=localStorage.getItem("s72241");R.defaults.headers.common.Authorization=U;const _=`${H}/v2/api/${j}/admin/products?page=${w}&category=${u}`,L=await R.get(_);a.value=L.data.products,s.value=L.data.pagination}catch(U){V({title:`${U.response.data.message} | ${r("admin.message_error")}`,icon:"error",confirmButtonText:`${r("admin.message_confirm_text")}`,confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1}).then(_=>{_.isConfirmed&&q.replace("/admin")})}finally{B.toggleLoading()}},J=async w=>{try{S.value=w,A.value=!0,V({title:r("admin.products_delete_title"),text:r("admin.products_delete_confirm_text"),icon:"question",confirmButtonColor:"#111c30",cancelButtonColor:"#b2bec3",confirmButtonText:r("admin.message_confirm_text"),cancelButtonText:r("admin.products_cancel_text"),showCancelButton:!0,showCloseButton:!0,showLoaderOnConfirm:!0,reverseButtons:!0,preConfirm:async()=>{try{const u=`${H}/v2/api/${j}/admin/product/${w}`;return await R.delete(u)}catch(u){return u}},allowOutsideClick:()=>!re.isLoading()}).then(u=>{var U,_,L,D,E,p,d;(_=(U=u==null?void 0:u.value)==null?void 0:U.data)!=null&&_.success?(V({position:"top-start",title:`${u.value.data.message} | ${r("admin.message_success")}`,icon:"success",showConfirmButton:!1,timer:1e3}),setTimeout(()=>{x()},1e3)):((E=(D=(L=u==null?void 0:u.value)==null?void 0:L.response)==null?void 0:D.data)==null?void 0:E.success)===!1&&V({title:`${(d=(p=u==null?void 0:u.value)==null?void 0:p.response)==null?void 0:d.data.message} | ${r("admin.message_error")}`,icon:"error",confirmButtonText:`${r("admin.message_confirm_text")}`,confirmButtonColor:"#000000"}),S.value=""})}catch(u){V({title:`${u.response.data.message} | ${r("admin.message_error")}`,icon:"error",confirmButtonText:`${r("admin.message_confirm_text")}`,confirmButtonColor:"#000000"})}finally{A.value=!1}},X=W(()=>[{id:"1",text:r("admin.products_modal_category_furniture")},{id:"2",text:r("admin.products_modal_category_home_decor")},{id:"3",text:r("admin.products_modal_category_lighting")},{id:"4",text:r("admin.products_modal_category_kitchenware")},{id:"5",text:r("admin.products_modal_category_bathroom_accessories")},{id:"6",text:r("admin.products_modal_category_bedding")},{id:"7",text:r("admin.products_modal_category_storage")},{id:"8",text:r("admin.products_modal_category_outdoor_and_garden")},{id:"9",text:r("admin.products_modal_category_office_supplies")},{id:"10",text:r("admin.products_modal_category_children_furniture")}]),$=()=>{x(s.value.current_page,P.value)},M=()=>{P.value="",x()};return Q(()=>{x()}),(w,u)=>{const U=_e("font-awesome-icon");return i(),c("div",Mo,[e("div",Lo,[e("span",Jo,[e("h3",Do,l(t(r)("admin.products_title")),1)]),e("span",Po,[e("div",Ro,[e("button",{type:"button",class:"btn btn-success px-4",onClick:u[0]||(u[0]=_=>o("create"))},l(t(r)("admin.products_create_text")),1)])])]),e("span",Ao,[e("div",Ho,[e("button",{type:"button",class:"btn border border-1 d-inline reset-btn me-2",style:{marginTop:"-0.10rem",marginBottom:"0.10rem"},title:"重置選擇",onClick:M},[G(U,{icon:["fas","rotate"],class:""})]),m(e("select",{class:"form-select d-inline w-50","aria-label":"Default select example","onUpdate:modelValue":u[1]||(u[1]=_=>P.value=_),onChange:$},[e("option",jo,l(t(r)("admin.products_modal_category_placeholder")),1),(i(!0),c(C,null,N(X.value,_=>(i(),c("option",{value:_.text,key:_.id},l(_.text),9,zo))),128))],544),[[Y,P.value]])])]),e("div",Fo,[e("table",qo,[e("thead",null,[e("tr",null,[e("td",null,l(t(r)("admin.products_id")),1),e("td",null,l(t(r)("admin.products_name")),1),e("td",null,l(t(r)("admin.products_category")),1),e("td",null,l(t(r)("admin.products_price"))+"(NT)",1),e("td",null,l(t(r)("admin.products_state"))+"/標籤",1),e("td",Eo,l(t(r)("admin.products_operate")),1)])]),e("tbody",null,[(i(!0),c(C,null,N(a.value,_=>(i(),c("tr",{key:_.id},[e("td",null,l(_.id),1),e("td",null,l(_[t(k).currentIcon].title),1),e("td",null,l(_[t(k).currentIcon].category),1),e("td",null,[_[t(k).currentIcon].isOnSale?(i(),c("span",Ko,l(t(te)(_[t(k).currentIcon].price)),1)):(i(),c("span",Wo,l(t(te)(_[t(k).currentIcon].origin_price)),1))]),e("td",null,[_[t(k).currentIcon].is_enabled?(i(),c("span",Xo,l(t(r)("admin.products_on_enabled")),1)):(i(),c("span",Zo,l(t(r)("admin.products_off_enabled")),1)),_[t(k).currentIcon].isNew?(i(),c("span",Go,es)):I("",!0),_[t(k).currentIcon].isOnSale?(i(),c("span",ts,as)):I("",!0),_[t(k).currentIcon].isOnSale?I("",!0):(i(),c("span",ns,"/原價")),_[t(k).currentIcon].isRecommended?(i(),c("span",ls,cs)):I("",!0),_[t(k).currentIcon].isOnHot?(i(),c("span",rs,ms)):I("",!0)]),e("td",ps,[e("div",gs,[e("button",{type:"button",class:"btn btn-outline-dark me-1",onClick:L=>o("edit",_)},l(t(r)("admin.products_edit_text")),9,hs),e("button",{type:"button",class:"btn btn-outline-danger",onClick:L=>J(_.id),disabled:S.value===_.id},[S.value===_.id?(i(),c("span",bs,[fs,ys,e("span",null,l(t(r)("admin.products_delete_text")),1)])):(i(),c("span",xs,l(t(r)("admin.products_delete_text")),1))],8,vs)])])]))),128))])])]),G(pe,{pagination:s.value,"onUpdated:page":x},null,8,["pagination"]),G(To,{ref_key:"adminProductsModal",ref:F,typeName:T.value,onRefetchProducts:x},null,8,["typeName"])])}}};export{Ss as default};
