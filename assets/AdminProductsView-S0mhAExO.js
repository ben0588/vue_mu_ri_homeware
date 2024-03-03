import{r as y,aa as ee,q as K,x as E,p as W,C as se,j as ae,o as c,c as r,b as e,t as l,u as t,F as U,f as C,n as G,w as ne,d as h,h as m,v as f,l as J,y as Y,s as le,bS as j,z as P,A as te,a9 as de,e as Q,ab as ie,a as ce}from"./index-rXVu0dOo.js";import{u as re}from"./loadingStores-vfPhJYmO.js";import{M as _e}from"./bootstrap.esm-FzNOyMo5.js";import{u as oe}from"./i18nStores-mPVvzW51.js";import{_ as ue}from"./Pagination-1N6e4oQJ.js";const me={class:"modal-dialog modal-xl"},pe={class:"modal-content border-0"},ge={class:"modal-header bg-dark text-white"},he={id:"productModalLabel",class:"modal-title"},ve=["title"],be={class:"mt-2"},fe={class:"nav nav-tabs"},ye=["onClick"],xe={class:"modal-body"},we=e("span",{class:"text-danger"},"*",-1),ke=e("hr",null,null,-1),$e={class:"row"},Ie={class:"col-sm-4"},Ue={class:"mb-3"},Ce={for:"imageUrl",class:"form-label"},Oe=e("span",{class:"text-danger"},"*",-1),Se=["placeholder"],Ne={class:"input-group mb-3"},Ve={for:"imageUrlFile",class:"form-label w-100"},Be=["value","disabled","title"],Le={class:"input-group mb-3"},Te={class:"form-label w-100"},Je=["onUpdate:modelValue","placeholder"],Me={class:"input-group mb-3"},De=e("label",{class:"form-label w-100"},"輸入圖片描述 (共五張)",-1),Re=["onUpdate:modelValue","placeholder"],Pe={key:0},Ae={class:"mb-0 mt-2 fw-bolder"},He=["src"],je={key:0},ze={class:"mb-0 mt-2"},Fe=["src"],qe={class:"col-sm-8"},Ee={class:"mb-3"},Ke={for:"title",class:"form-label"},Xe=e("span",{class:"text-danger"},"*",-1),Ge=["placeholder"],Qe={class:"row"},We={class:"mb-3 col-md-6"},Ye={for:"category",class:"form-label"},Ze=e("span",{class:"text-danger"},"*",-1),et={value:"",selected:"",disabled:""},tt=["value"],ot={class:"mb-3 col-md-6"},st={for:"subcategory",class:"form-label"},at=e("span",{class:"text-danger"},"*",-1),nt={key:0,value:"",selected:"",disabled:""},lt=["value"],dt={class:"mb-3 col-md-6"},it={for:"unit",class:"form-label"},ct=e("span",{class:"text-danger"},"*",-1),rt=["placeholder"],_t={class:"mb-3 col-md-6"},ut={for:"stock",class:"form-label"},mt=e("span",{class:"text-danger"},"*",-1),pt=["placeholder"],gt={class:"row"},ht={class:"mb-3 col-md-6"},vt={for:"origin_price",class:"form-label"},bt=e("span",{class:"text-danger"},"*",-1),ft=["placeholder"],yt={class:"mb-3 col-md-6"},xt={for:"price",class:"form-label"},wt=e("span",{class:"text-danger"},"*",-1),kt=["placeholder"],$t={class:"mb-3 col-md-6 mt-4"},It={for:"dimensions",class:"form-label"},Ut=e("span",{class:"text-danger"},"*",-1),Ct=["placeholder"],Ot=["placeholder"],St=["placeholder"],Nt={class:"mb-3 col-md-6"},Vt={for:"colors",class:"form-label"},Bt=e("span",{class:"text-danger"},"*",-1),Lt=e("br",null,null,-1),Tt=e("span",{class:"text-danger"},"*",-1),Jt=["placeholder","onUpdate:modelValue"],Mt=["placeholder","onUpdate:modelValue"],Dt={class:"row"},Rt={class:"col-md-6 mb-3"},Pt={for:"material",class:"form-label"},At=e("span",{class:"text-danger"},"*",-1),Ht=["placeholder"],jt={class:"col-md-6 mb-3 mt-2"},zt={class:"form-label"},Ft=e("span",{class:"text-danger"},"*",-1),qt=["for"],Et=["id","onUpdate:modelValue"],Kt={class:"my-3"},Xt={for:"description",class:"form-label"},Gt=e("span",{class:"text-danger"},"*",-1),Qt=["placeholder"],Wt={class:"mb-3"},Yt={for:"content",class:"form-label"},Zt=e("span",{class:"text-danger"},"*",-1),eo=["placeholder"],to={class:"mb-3"},oo={class:"fw-bolder fs-6"},so=e("span",{class:"text-danger"},"*",-1),ao={class:"form-check d-inline-block"},no={class:"form-check-label",for:"isNew"},lo=["checked"],io={class:"form-check d-inline-block ms-4"},co={class:"form-check-label",for:"isOnHot"},ro=["checked"],_o={class:"form-check d-inline-block ms-4"},uo={class:"form-check-label",for:"isRecommended"},mo=["checked"],po={class:"form-check d-inline-block ms-4"},go={class:"form-check-label",for:"isOnSale"},ho=["checked"],vo=e("hr",null,null,-1),bo={class:"mb-3"},fo={class:"fw-bolder fs-6"},yo=e("span",{class:"text-danger"},"*",-1),xo={class:"form-check"},wo={class:"form-check-label",for:"is_enabled"},ko={class:"modal-footer"},$o=["disabled"],Io={key:0},Uo=e("span",{class:"spinner-border spinner-border-sm me-2","aria-hidden":"true"},null,-1),Co=e("span",{role:"status"},null,-1),Oo=[Uo,Co],So={__name:"AdminProductsModal",props:{typeName:String},emits:["refetch-products"],setup(Z,{expose:z,emit:M}){const i="https://vue3-course-api.hexschool.io",O="vue-ben0588",F=y(null),S=y(null),a=oe(),{t:s}=ee(),{showAlert:N}=te(),B=Z,R=M,v={id:new Date().getTime(),title:"",category:"",subcategory:"",unit:"",stock:"",imageUrl:"",imagesUrl:["","","","",""],imagesUrlDescriptions:["","","","",""],price:"",origin_price:"",description:"",content:"",is_enabled:1,ratings:{star_1:{count:0,reviews:[{user:"評論名稱",comment:"產品描述",reviewId:"頻論會員id"}]},star_2:{count:0},star_3:{count:0},star_4:{count:0},star_5:{count:9,reviews:[{user:"Alex",comment:"商品品質再棒了!很喜歡",reviewId:"r1"},{user:"Ben",comment:"躺起來非常舒服~~",reviewId:"r2"}]}},create_date:new Date().getTime(),sales_num:0,isNew:!0,isOnHot:!1,isRecommended:!1,isOnSale:!1,material:"",dimensions:{length:"",width:"",height:""},colors:[{title:"",code:""},{title:"",code:""},{title:"",code:""}]},o=y({title:"title",category:"category",origin_price:999,price:999,unit:"unit",description:"description",content:"content",is_enabled:1,imageUrl:"主圖網址",imagesUrl:["1","2","3","4","5"],ratings:{star_1:{count:0,reviews:[{user:"評論名稱",comment:"產品描述",reviewId:"頻論會員id"}]},star_2:{count:0},star_3:{count:0},star_4:{count:0},star_5:{count:9,reviews:[{user:"Alex",comment:"商品品質再棒了!很喜歡",reviewId:"r1"},{user:"Ben",comment:"躺起來非常舒服~~",reviewId:"r2"}]}},create_date:new Date().getTime(),sales_num:0,isNew:!0,isOnHot:!1,isRecommended:!1,isOnSale:!1,material:"",dimensions:{length:"",width:"",height:""},colors:[{title:"",code:""},{title:"",code:""},{title:"",code:""}],tw:{...v},us:{...v},jp:{...v},kr:{...v},th:{...v}}),A=K(()=>[{id:"1",text:s("admin.products_modal_category_furniture")},{id:"2",text:s("admin.products_modal_category_home_decor")},{id:"3",text:s("admin.products_modal_category_lighting")},{id:"4",text:s("admin.products_modal_category_kitchenware")},{id:"5",text:s("admin.products_modal_category_bathroom_accessories")},{id:"6",text:s("admin.products_modal_category_bedding")},{id:"7",text:s("admin.products_modal_category_storage")},{id:"8",text:s("admin.products_modal_category_outdoor_and_garden")},{id:"9",text:s("admin.products_modal_category_office_supplies")},{id:"10",text:s("admin.products_modal_category_children_furniture")}]),H=K(()=>[{id:"1",text:s("admin.products_modal_subcategory_sofas_and_chairs"),cid:"1"},{id:"2",text:s("admin.products_modal_subcategory_tables_and_chairs"),cid:"1"},{id:"3",text:s("admin.products_modal_subcategory_desks_and_office_chairs"),cid:"1"},{id:"4",text:s("admin.products_modal_subcategory_bed_frames_and_mattresses"),cid:"1"},{id:"5",text:s("admin.products_modal_subcategory_wardrobes_and_storage_cabinets"),cid:"1"},{id:"6",text:s("admin.products_modal_subcategory_coffee_tables_and_side_tables"),cid:"1"},{id:"7",text:s("admin.products_modal_subcategory_outdoor_furniture"),cid:"1"},{id:"8",text:s("admin.products_modal_subcategory_closets_and_storage_cabinets"),cid:"1"},{id:"9",text:s("admin.products_modal_subcategory_rugs_and_floor_mats"),cid:"2"},{id:"10",text:s("admin.products_modal_subcategory_curtains_and_blinds"),cid:"2"},{id:"11",text:s("admin.products_modal_subcategory_paintings_and_wall_decor"),cid:"2"},{id:"12",text:s("admin.products_modal_subcategory_decorative_pillows_and_throw_pillows"),cid:"2"},{id:"13",text:s("admin.products_modal_subcategory_mirrors"),cid:"2"},{id:"14",text:s("admin.products_modal_subcategory_vases_and_indoor_plants"),cid:"2"},{id:"15",text:s("admin.products_modal_subcategory_candles_and_fragrances"),cid:"2"},{id:"16",text:s("admin.products_modal_subcategory_pendant_lights"),cid:"3"},{id:"17",text:s("admin.products_modal_subcategory_floor_lamps"),cid:"3"},{id:"18",text:s("admin.products_modal_subcategory_table_lamps"),cid:"3"},{id:"19",text:s("admin.products_modal_subcategory_wall_lamps"),cid:"3"},{id:"20",text:s("admin.products_modal_subcategory_outdoor_lighting"),cid:"3"},{id:"21",text:s("admin.products_modal_subcategory_lighting_accessories"),cid:"3"},{id:"22",text:s("admin.products_modal_subcategory_cookware_and_cooking_utensils"),cid:"4"},{id:"23",text:s("admin.products_modal_subcategory_tableware_and_dining_sets"),cid:"4"},{id:"24",text:s("admin.products_modal_subcategory_kitchen_storage_and_organization"),cid:"4"},{id:"25",text:s("admin.products_modal_subcategory_small_kitchen_appliances"),cid:"4"},{id:"26",text:s("admin.products_modal_subcategory_knives_and_cutting_boards"),cid:"4"},{id:"27",text:s("admin.products_modal_subcategory_bath_towels_and_bathroom_mats"),cid:"5"},{id:"28",text:s("admin.products_modal_subcategory_bathroom_storage"),cid:"5"},{id:"29",text:s("admin.products_modal_subcategory_bathroom_accessories"),cid:"5"},{id:"30",text:s("admin.products_modal_subcategory_bathroom_decor"),cid:"5"},{id:"31",text:s("admin.products_modal_subcategory_sheets_and_bed_covers"),cid:"6"},{id:"32",text:s("admin.products_modal_subcategory_blankets_and_quilts"),cid:"6"},{id:"33",text:s("admin.products_modal_subcategory_pillows_and_pillowcases"),cid:"6"},{id:"34",text:s("admin.products_modal_subcategory_mattress_protectors"),cid:"6"},{id:"35",text:s("admin.products_modal_subcategory_bookshelves_and_display_cabinets"),cid:"7"},{id:"36",text:s("admin.products_modal_subcategory_storage_boxes_and_baskets"),cid:"7"},{id:"37",text:s("admin.products_modal_subcategory_closet_organizers"),cid:"7"},{id:"38",text:s("admin.products_modal_subcategory_shoe_racks_and_coat_racks"),cid:"7"},{id:"39",text:s("admin.products_modal_subcategory_outdoor_decor"),cid:"8"},{id:"40",text:s("admin.products_modal_subcategory_gardening_tools_and_planters"),cid:"8"},{id:"41",text:s("admin.products_modal_subcategory_outdoor_leisure"),cid:"8"},{id:"42",text:s("admin.products_modal_subcategory_office_desks_and_chairs"),cid:"9"},{id:"43",text:s("admin.products_modal_subcategory_office_storage_solutions"),cid:"9"},{id:"44",text:s("admin.products_modal_subcategory_office_decor_and_stationery"),cid:"9"},{id:"45",text:s("admin.products_modal_subcategory_childrens_furniture"),cid:"10"},{id:"46",text:s("admin.products_modal_subcategory_childrens_room_decor"),cid:"10"},{id:"47",text:s("admin.products_modal_subcategory_childrens_bedding_and_toy_storage"),cid:"10"}]),x=y(B.typeName),L=y(!1);E(()=>B.typeName,p=>{x.value=p}),E(()=>L.value,()=>{L.value?x.value=`${x.value} ing..`:x.value=B.typeName}),E(()=>a.currentLocale,p=>{x.value=s("admin.products_add_text")}),W(()=>{o.value.id,x.value=B.typeName});const X=K(()=>{if(o.value[a.currentIcon].category){const p=A.value.filter(b=>b.text===o.value[a.currentIcon].category?b.id:null),d=H.value.filter(b=>b.cid===p[0].id);return o.value[a.currentIcon].subcategory=d[0].text,d}return H.value});W(()=>{S.value=new _e(F.value,{backdrop:"static",keyboard:!1})}),se(()=>{S.value&&S.value.dispose()});const I=y(null),T=y(!1),w=y(""),_=y(!1),k=p=>{var b;_.value=!0;const{files:d}=p.target;if(I.value=d,(b=I.value[0])!=null&&b.name){const g=/\.(jpg|png|jpeg)$/.test(I.value[0].name),$=3*1024*1024;g?(w.value="",I.value[0].size>$&&(w.value="檔案大小限制為 3MB 以下，請重新選擇")):g||(_.value=!1,w.value="限制只能上傳 .jpg、.jpeg  或 .png 格式圖片")}},u=async()=>{try{T.value=!0;const p=new FormData;p.append("file-to-upload",I.value.files[0]);const d=`${i}/v2/api/${O}/admin/upload`,b={"Content-Type":"multipart/form-data"},n=await P.post(d,p,{headers:b});n.data.success&&(o.value[a.currentIcon].imageUrl=n.data.imageUrl,N({position:"top-start",title:`成功 | ${s("admin.message_success")}`,icon:"success",showConfirmButton:!1,timer:1e3}))}catch(p){N({title:`${p.response.data.message} | ${s("admin.message_error")}`,icon:"error",confirmButtonText:`${s("admin.message_confirm_text")}`,confirmButtonColor:"#000000"})}finally{T.value=!1}},V=(p,d)=>{p==="create"?(o.value={title:"",category:"",origin_price:0,price:0,unit:"",description:"",content:"",is_enabled:1,imageUrl:"",imagesUrl:["1","2","3","4","5"],create_date:new Date().getTime(),tw:{...JSON.parse(JSON.stringify(v))},us:{...JSON.parse(JSON.stringify(v))},jp:{...JSON.parse(JSON.stringify(v))},kr:{...JSON.parse(JSON.stringify(v))},th:{...JSON.parse(JSON.stringify(v))}},I.value.value=null,S.value.show()):p==="edit"&&(o.value=d,I.value.value=null,S.value.show())},D=()=>{o.value={title:"",category:"",origin_price:999,price:999,unit:"",description:"",content:"",is_enabled:1,imageUrl:"",imagesUrl:["1","2","3","4","5"],tw:{...JSON.parse(JSON.stringify(v))},us:{...JSON.parse(JSON.stringify(v))},jp:{...JSON.parse(JSON.stringify(v))},kr:{...JSON.parse(JSON.stringify(v))},th:{...JSON.parse(JSON.stringify(v))}},T.value=!1,w.value="",_.value=!1,S.value.hide()};E(()=>o.value.tw,()=>{o.value.category=o.value.tw.category}),ae(()=>{o.value.title=o.value.tw.title,o.value.category=o.value.tw.category,o.value.origin_price=o.value.tw.origin_price,o.value.price=o.value.tw.price,o.value.unit=o.value.tw.unit,o.value.material=o.value.tw.material,o.value.description=o.value.tw.description,o.value.content=o.value.tw.content,o.value.is_enabled=o.value.tw.is_enabled,o.value.imageUrl=o.value.tw.imageUrl,o.value.imagesUrl=o.value.tw.imagesUrl,o.value.imagesUrlDescriptions=o.value.tw.imagesUrlDescriptions,o.value.ratings=o.value.tw.ratings,o.value.sales_num=o.value.tw.sales_num,o.value.isNew=o.value.tw.isNew,o.value.isOnHot=o.value.tw.isOnHot,o.value.isRecommended=o.value.tw.isRecommended,o.value.isOnSale=o.value.tw.isOnSale,o.value.dimensions=o.value.tw.dimensions,o.value.colors=o.value.tw.colors});const q=async()=>{try{L.value=!0;const p=o.value.id?"儲存":"新增";if(!o.value.tw.title){N({title:`失敗 | ${s("admin.message_error")}`,text:"請填寫必填欄後重新後提交",icon:"error",confirmButtonText:`${s("admin.message_confirm_text")}`,confirmButtonColor:"#000000"});return}let d,b;p==="新增"?(d=`${i}/v2/api/${O}/admin/product`,b=await P.post(d,{data:o.value})):p==="儲存"&&(d=`${i}/v2/api/${O}/admin/product/${o.value.id}`,b=await P.put(d,{data:o.value})),b.data.success&&(D(),N({position:"top-start",title:`${b.data.message} | ${s("admin.message_success")}`,icon:"success",showConfirmButton:!1,timer:1e3}),setTimeout(()=>{R("refetch-products",!0)},1e3))}catch(p){N({title:`${p.response.data.message} | ${s("admin.message_error")}`,icon:"error",confirmButtonText:`${s("admin.message_confirm_text")}`,confirmButtonColor:"#000000"})}finally{L.value=!1}};return z({openModal:V,closeModal:D}),(p,d)=>{var b;return c(),r("div",{class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true",ref_key:"bsModalRef",ref:F},[e("div",me,[e("div",pe,[e("div",ge,[e("h5",he,[e("span",null,l((b=o.value)!=null&&b.id?`${t(s)("admin.products_edit_text")}：${o.value.id}
                  [${t(s)("admin.products_modal_current_language")}：${t(a).currentLocale}]`:`${t(s)("admin.products_create_title")}
                  [${t(s)("admin.products_modal_current_language")}：${t(a).currentLocale}]`),1)]),e("button",{type:"button",class:"bg-dark text-white fs-4 fw-bolder border-0","data-bs-dismiss":"modal","aria-label":"Close",title:`${t(s)("admin.products_cancel_text")}`,onClick:D}," X ",8,ve)]),e("div",be,[e("ul",fe,[(c(!0),r(U,null,C(t(a).languageList,n=>(c(),r("li",{class:"nav-item",key:n.text},[e("a",{class:G(["nav-link",{active:n.code===t(a).currentLocale}]),"aria-current":"page",href:"#",onClick:ne(()=>{t(a).i18nChangeLocale(n.code,n.icon_code)},["prevent"])},[h(l(n.text),1),e("span",{class:G(`fi fi-${n.icon_code}`)},null,2)],10,ye)]))),128))])]),e("div",xe,[h(l(o.value.create_date)+" ",1),e("form",null,[e("div",null,[we,h(l(t(s)("admin.products_modal_illustrate_message")),1)]),ke,e("div",$e,[e("div",Ie,[e("div",Ue,[e("label",Ce,[Oe,h(l(t(s)("admin.products_modal_middle_url_img")),1)]),m(e("input",{id:"imageUrl",type:"text",class:"form-control",placeholder:`${t(s)("admin.products_modal_middle_url_img_placeholder")}`,"onUpdate:modelValue":d[0]||(d[0]=n=>o.value[t(a).currentIcon].imageUrl=n)},null,8,Se),[[f,o.value[t(a).currentIcon].imageUrl]])]),e("div",Ne,[e("label",Ve,l(t(s)("admin.products_modal_middle_file_img")),1),e("input",{class:"form-control",type:"file",name:"file-to-upload",id:"imageUrlFile",ref_key:"fileRef",ref:I,onChange:k},null,544),e("button",{class:G(["input-group-text d-block w-100",{"bg-secondary":T.value,"text-white":T.value}]),type:"button",value:`${t(s)("admin.products_modal_middle_file_img_button")}`,onClick:u,disabled:!_.value||T.value,title:_.value?"上傳檔案":"請先選擇檔案"},l(t(s)("admin.products_modal_middle_file_img_button")),11,Be)]),e("div",Le,[e("label",Te,l(t(s)("admin.products_modal_url_images")),1),(c(!0),r(U,null,C(o.value[t(a).currentIcon].imagesUrl,(n,g)=>m((c(),r("input",{type:"text",class:"form-control w-100",key:g,"onUpdate:modelValue":$=>o.value[t(a).currentIcon].imagesUrl[g]=$,placeholder:`【${g+1}】 ${t(s)("admin.products_modal_url_images_placeholder")}`},null,8,Je)),[[f,o.value[t(a).currentIcon].imagesUrl[g]]])),128))]),e("div",Me,[De,(c(!0),r(U,null,C(o.value[t(a).currentIcon].imagesUrlDescriptions,(n,g)=>m((c(),r("input",{type:"text",class:"form-control w-100",key:g,"onUpdate:modelValue":$=>o.value[t(a).currentIcon].imagesUrlDescriptions[g]=$,placeholder:`【${g+1}】 請輸入圖片描述`},null,8,Re)),[[f,o.value[t(a).currentIcon].imagesUrlDescriptions[g]]])),128))]),o.value[t(a).currentIcon].imageUrl?(c(),r("div",Pe,[e("h5",Ae,l(t(s)("admin.products_modal_middle_img_preview")),1),e("img",{class:"img-fluid border border-2",src:o.value[t(a).currentIcon].imageUrl,alt:""},null,8,He)])):J("",!0),(c(!0),r(U,null,C(o.value[t(a).currentIcon].imagesUrl,(n,g)=>(c(),r("div",{key:g},[o.value[t(a).currentIcon].imagesUrl[g]?(c(),r("div",je,[e("p",ze,l(t(s)("admin.products_modal_url_images_preview"))+"【"+l(g+1)+"】 ",1),e("img",{class:"img-fluid border border-2",src:o.value[t(a).currentIcon].imagesUrl[g],alt:""},null,8,Fe)])):J("",!0)]))),128))]),e("div",qe,[e("div",Ee,[e("label",Ke,[Xe,h(l(t(s)("admin.products_modal_title")),1)]),m(e("input",{id:"title",type:"text",class:"form-control",placeholder:t(s)("admin.products_modal_title_placeholder"),"onUpdate:modelValue":d[1]||(d[1]=n=>o.value[t(a).currentIcon].title=n)},null,8,Ge),[[f,o.value[t(a).currentIcon].title]])]),e("div",Qe,[e("div",We,[e("label",Ye,[Ze,h(l(t(s)("admin.products_modal_category")),1)]),m(e("select",{id:"category",class:"form-select form-select-sm","onUpdate:modelValue":d[2]||(d[2]=n=>o.value[t(a).currentIcon].category=n)},[e("option",et,l(t(s)("admin.products_modal_category_placeholder")),1),(c(!0),r(U,null,C(A.value,n=>(c(),r("option",{value:n.text,key:n.id},l(n.text),9,tt))),128))],512),[[Y,o.value[t(a).currentIcon].category]])]),e("div",ot,[e("label",st,[at,h(l(t(s)("admin.products_modal_subcategory")),1)]),m(e("select",{id:"subcategory",class:"form-select form-select-sm","onUpdate:modelValue":d[3]||(d[3]=n=>o.value[t(a).currentIcon].subcategory=n)},[o.value.subcategory?J("",!0):(c(),r("option",nt,l(t(s)("admin.products_modal_subcategory_placeholder")),1)),(c(!0),r(U,null,C(X.value,n=>(c(),r("option",{key:n.id,value:n.text},l(n.text),9,lt))),128))],512),[[Y,o.value[t(a).currentIcon].subcategory]])]),e("div",dt,[e("label",it,[ct,h(l(t(s)("admin.products_modal_unit")),1)]),m(e("input",{id:"unit",type:"text",class:"form-control",placeholder:t(s)("admin.products_modal_unit_placeholder"),"onUpdate:modelValue":d[4]||(d[4]=n=>o.value[t(a).currentIcon].unit=n)},null,8,rt),[[f,o.value[t(a).currentIcon].unit]])]),e("div",_t,[e("label",ut,[mt,h(l(t(s)("admin.products_modal_stock")),1)]),m(e("input",{id:"stock",type:"number",min:"1",class:"form-control",placeholder:t(s)("admin.products_modal_stock_placeholder"),"onUpdate:modelValue":d[5]||(d[5]=n=>o.value[t(a).currentIcon].stock=n)},null,8,pt),[[f,o.value[t(a).currentIcon].stock,void 0,{number:!0}]])])]),e("div",gt,[e("div",ht,[e("label",vt,[bt,h(l(t(s)("admin.products_modal_origin_price")),1)]),m(e("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:t(s)("admin.products_modal_origin_price_placeholder"),"onUpdate:modelValue":d[6]||(d[6]=n=>o.value[t(a).currentIcon].origin_price=n)},null,8,ft),[[f,o.value[t(a).currentIcon].origin_price,void 0,{number:!0}]])]),e("div",yt,[e("label",xt,[wt,h(l(t(s)("admin.products_modal_price")),1)]),m(e("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:t(s)("admin.products_modal_price_placeholder"),"onUpdate:modelValue":d[7]||(d[7]=n=>o.value[t(a).currentIcon].price=n)},null,8,kt),[[f,o.value[t(a).currentIcon].price,void 0,{number:!0}]])]),e("div",$t,[e("label",It,[Ut,h(l(t(s)("admin.products_modal_dimensions")),1)]),o.value&&o.value[t(a).currentIcon].dimensions?m((c(),r("input",{key:0,id:"dimensions",type:"number",min:"0",class:"form-control",placeholder:t(s)("admin.products_modal_dimensions_length"),"onUpdate:modelValue":d[8]||(d[8]=n=>o.value[t(a).currentIcon].dimensions.length=n)},null,8,Ct)),[[f,o.value[t(a).currentIcon].dimensions.length,void 0,{number:!0}]]):J("",!0),o.value&&o.value[t(a).currentIcon].dimensions?m((c(),r("input",{key:1,type:"number",min:"0",class:"form-control",placeholder:t(s)("admin.products_modal_dimensions_width"),"onUpdate:modelValue":d[9]||(d[9]=n=>o.value[t(a).currentIcon].dimensions.width=n)},null,8,Ot)),[[f,o.value[t(a).currentIcon].dimensions.width,void 0,{number:!0}]]):J("",!0),o.value&&o.value[t(a).currentIcon].dimensions?m((c(),r("input",{key:2,type:"number",min:"0",class:"form-control",placeholder:t(s)("admin.products_modal_dimensions_height"),"onUpdate:modelValue":d[10]||(d[10]=n=>o.value[t(a).currentIcon].dimensions.height=n)},null,8,St)),[[f,o.value[t(a).currentIcon].dimensions.height,void 0,{number:!0}]]):J("",!0)]),e("div",Nt,[e("label",Vt,[Bt,h(l(t(s)("admin.products_modal_colors"))+" ",1),Lt,Tt,h(l(t(s)("admin.products_modal_colors_subtitle")),1)]),(c(!0),r(U,null,C(o.value[t(a).currentIcon].colors,(n,g)=>(c(),r("div",{class:"input-group",key:g},[m(e("input",{type:"text",class:"form-control d-inline-block w-25",placeholder:t(s)("admin.products_modal_color_name"),"onUpdate:modelValue":$=>n.title=$},null,8,Jt),[[f,n.title]]),m(e("input",{type:"text",class:"form-control d-inline-block w-50",placeholder:t(s)("admin.products_modal_color_code"),"onUpdate:modelValue":$=>n.code=$},null,8,Mt),[[f,n.code]]),e("div",{class:"border border-2 w-25 p2",style:le({backgroundColor:n.code?n.code:""})},null,4)]))),128))])]),e("div",Dt,[e("div",Rt,[e("label",Pt,[At,h(l(t(s)("admin.products_modal_material")),1)]),m(e("input",{id:"material",type:"text",class:"form-control",placeholder:t(s)("admin.products_modal_material_placeholder"),"onUpdate:modelValue":d[11]||(d[11]=n=>o.value[t(a).currentIcon].material=n)},null,8,Ht),[[f,o.value[t(a).currentIcon].material]])]),e("div",jt,[e("label",zt,[Ft,h(l(t(s)("admin.products_modal_star")),1)]),(c(!0),r(U,null,C(o.value[t(a).currentIcon].ratings,(n,g)=>(c(),r("div",{key:g,class:"mt-1"},[e("label",{for:g,class:"form-label me-2"},l(g),9,qt),m(e("input",{type:"number",class:"form-control d-inline-block w-50",id:g,"onUpdate:modelValue":$=>n.count=$},null,8,Et),[[f,n.count,void 0,{number:!0}]])]))),128))])]),e("div",Kt,[e("label",Xt,[Gt,h(l(t(s)("admin.products_modal_description")),1)]),m(e("textarea",{id:"description",type:"text",class:"form-control",placeholder:t(s)("admin.products_modal_description_placeholder"),"onUpdate:modelValue":d[12]||(d[12]=n=>o.value[t(a).currentIcon].description=n)},`\r
                  `,8,Qt),[[f,o.value[t(a).currentIcon].description]])]),e("div",Wt,[e("label",Yt,[Zt,h(l(t(s)("admin.products_modal_content")),1)]),m(e("textarea",{id:"content",type:"text",class:"form-control",placeholder:t(s)("admin.products_modal_content_placeholder"),"onUpdate:modelValue":d[13]||(d[13]=n=>o.value[t(a).currentIcon].content=n)},`\r
                  `,8,eo),[[f,o.value[t(a).currentIcon].content]])]),e("div",to,[e("h5",oo,[so,h(l(t(s)("admin.products_modal_tag")),1)]),e("div",ao,[e("label",no,l(t(s)("admin.products_modal_tag_new")),1),m(e("input",{id:"isNew",class:"form-check-input",type:"checkbox","onUpdate:modelValue":d[14]||(d[14]=n=>o.value[t(a).currentIcon].isNew=n),checked:o.value[t(a).currentIcon].isNew},null,8,lo),[[j,o.value[t(a).currentIcon].isNew]])]),e("div",io,[e("label",co,l(t(s)("admin.products_modal_tag_hot")),1),m(e("input",{id:"isOnHot",class:"form-check-input",type:"checkbox","onUpdate:modelValue":d[15]||(d[15]=n=>o.value[t(a).currentIcon].isOnHot=n),checked:o.value[t(a).currentIcon].isOnHot},null,8,ro),[[j,o.value[t(a).currentIcon].isOnHot]])]),e("div",_o,[e("label",uo,l(t(s)("admin.products_modal_tag_recommended")),1),m(e("input",{id:"isRecommended",class:"form-check-input",type:"checkbox","onUpdate:modelValue":d[16]||(d[16]=n=>o.value[t(a).currentIcon].isRecommended=n),checked:o.value[t(a).currentIcon].isRecommended},null,8,mo),[[j,o.value[t(a).currentIcon].isRecommended]])]),e("div",po,[e("label",go,l(t(s)("admin.products_modal_tag_sale")),1),m(e("input",{id:"isOnSale",class:"form-check-input",type:"checkbox","onUpdate:modelValue":d[17]||(d[17]=n=>o.value[t(a).currentIcon].isOnSale=n),checked:o.value[t(a).currentIcon].isOnSale},null,8,ho),[[j,o.value[t(a).currentIcon].isOnSale]])])]),vo,e("div",bo,[e("h5",fo,[yo,h(l(t(s)("admin.products_modal_is_enabled_state")),1)]),e("div",xo,[m(e("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":d[18]||(d[18]=n=>o.value[t(a).currentIcon].is_enabled=n)},null,512),[[j,o.value[t(a).currentIcon].is_enabled]]),e("label",wo,l(t(s)("admin.products_modal_is_enabled_checkbox")),1)])])])]),e("div",ko,[e("button",{type:"button",class:"btn btn-outline-secondary",onClick:D},l(t(s)("admin.products_cancel_text")),1),e("button",{type:"submit",class:"btn btn-primary text-white px-5",onClick:q,disabled:L.value},[L.value?(c(),r("span",Io,Oo)):J("",!0),h(" "+l(x.value),1)],8,$o)])])])])])],512)}}},No={class:"pt-3"},Vo={class:"row"},Bo={class:"col-6"},Lo={class:"fw-500"},To={class:"col-6"},Jo={class:"float-end pe-5"},Mo={class:"row border-top border-bottom border-2 my-2 py-3"},Do={class:"col-5"},Ro={value:"",selected:"",disabled:""},Po=["value"],Ao={class:"table-responsive"},Ho={class:"table align-middle"},jo={class:"fw-400",scope:"col"},zo={class:"fw-400",scope:"col"},Fo={class:"fw-400",scope:"col"},qo={class:"fw-400",scope:"col"},Eo={class:"fw-400",scope:"col"},Ko={class:"fw-400",scope:"col"},Xo={class:"fw-400 text-center",scope:"col"},Go={key:0,class:"text-success"},Qo={key:1,class:"text-danger"},Wo={class:"flex-center"},Yo=["onClick"],Zo=["onClick","disabled"],es={key:0},ts=e("span",{class:"spinner-grow spinner-grow-sm me-1","aria-hidden":"true"},null,-1),os=e("span",{role:"status"},null,-1),ss=[ts,os],cs={__name:"AdminProductsView",setup(Z){const z=y(null),M=oe(),{t:i}=ee(),{showAlert:O}=te(),F=de(),S=re(),a=y([]),s=y([]),N=y("新增"),B=y(!1),R=y(""),v=y(""),o=(w,_)=>{w==="create"?N.value=i("admin.products_add_text"):N.value=i("admin.products_keep_text"),z.value.openModal(w,_)},A="https://vue3-course-api.hexschool.io",H="vue-ben0588",x=async(w=1,_="")=>{try{S.toggleLoading();const k=localStorage.getItem("s72241");P.defaults.headers.common.Authorization=k;const u=`${A}/v2/api/${H}/admin/products?page=${w}&category=${_}`,V=await P.get(u);a.value=V.data.products,s.value=V.data.pagination}catch(k){O({title:`${k.response.data.message} | ${i("admin.message_error")}`,icon:"error",confirmButtonText:`${i("admin.message_confirm_text")}`,confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1}).then(u=>{u.isConfirmed&&F.replace("/admin")})}finally{S.toggleLoading()}},L=async w=>{try{R.value=w,B.value=!0,O({title:i("admin.products_delete_title"),text:i("admin.products_delete_confirm_text"),icon:"question",confirmButtonColor:"#111c30",cancelButtonColor:"#b2bec3",confirmButtonText:i("admin.message_confirm_text"),cancelButtonText:i("admin.products_cancel_text"),showCancelButton:!0,showCloseButton:!0,showLoaderOnConfirm:!0,reverseButtons:!0,preConfirm:async()=>{try{const _=`${A}/v2/api/${H}/admin/product/${w}`;return await P.delete(_)}catch(_){return _}},allowOutsideClick:()=>!ie.isLoading()}).then(_=>{var k,u,V,D,q,p,d;(u=(k=_==null?void 0:_.value)==null?void 0:k.data)!=null&&u.success?(O({position:"top-start",title:`${_.value.data.message} | ${i("admin.message_success")}`,icon:"success",showConfirmButton:!1,timer:1e3}),setTimeout(()=>{x()},1e3)):((q=(D=(V=_==null?void 0:_.value)==null?void 0:V.response)==null?void 0:D.data)==null?void 0:q.success)===!1&&O({title:`${(d=(p=_==null?void 0:_.value)==null?void 0:p.response)==null?void 0:d.data.message} | ${i("admin.message_error")}`,icon:"error",confirmButtonText:`${i("admin.message_confirm_text")}`,confirmButtonColor:"#000000"}),R.value=""})}catch(_){O({title:`${_.response.data.message} | ${i("admin.message_error")}`,icon:"error",confirmButtonText:`${i("admin.message_confirm_text")}`,confirmButtonColor:"#000000"})}finally{B.value=!1}},X=K(()=>[{id:"1",text:i("admin.products_modal_category_furniture")},{id:"2",text:i("admin.products_modal_category_home_decor")},{id:"3",text:i("admin.products_modal_category_lighting")},{id:"4",text:i("admin.products_modal_category_kitchenware")},{id:"5",text:i("admin.products_modal_category_bathroom_accessories")},{id:"6",text:i("admin.products_modal_category_bedding")},{id:"7",text:i("admin.products_modal_category_storage")},{id:"8",text:i("admin.products_modal_category_outdoor_and_garden")},{id:"9",text:i("admin.products_modal_category_office_supplies")},{id:"10",text:i("admin.products_modal_category_children_furniture")}]),I=()=>{x(s.value.current_page,v.value)},T=()=>{v.value="",x()};return W(()=>{x()}),(w,_)=>{const k=ce("font-awesome-icon");return c(),r("div",No,[e("div",Vo,[e("span",Bo,[e("h3",Lo,l(t(i)("admin.products_title")),1)]),e("span",To,[e("div",Jo,[e("button",{type:"button",class:"btn btn-success px-4",onClick:_[0]||(_[0]=u=>o("create"))},l(t(i)("admin.products_create_text")),1)])])]),e("span",Mo,[e("div",Do,[e("button",{type:"button",class:"btn border border-1 d-inline reset-btn me-2",style:{marginTop:"-0.10rem",marginBottom:"0.10rem"},title:"重置選擇",onClick:T},[Q(k,{icon:["fas","rotate"],class:""})]),m(e("select",{class:"form-select d-inline w-50","aria-label":"Default select example","onUpdate:modelValue":_[1]||(_[1]=u=>v.value=u),onChange:I},[e("option",Ro,l(t(i)("admin.products_modal_category_placeholder")),1),(c(!0),r(U,null,C(X.value,u=>(c(),r("option",{value:u.text,key:u.id},l(u.text),9,Po))),128))],544),[[Y,v.value]])])]),e("div",Ao,[e("table",Ho,[e("thead",null,[e("tr",null,[e("th",jo,l(t(i)("admin.products_id")),1),e("th",zo,l(t(i)("admin.products_name")),1),e("th",Fo,l(t(i)("admin.products_category")),1),e("th",qo,l(t(i)("admin.products_subcategory")),1),e("th",Eo,l(t(i)("admin.products_price")),1),e("th",Ko,l(t(i)("admin.products_state")),1),e("th",Xo,l(t(i)("admin.products_operate")),1)])]),e("tbody",null,[(c(!0),r(U,null,C(a.value,u=>(c(),r("tr",{key:u.id},[e("td",null,l(u.id),1),e("td",null,l(u[t(M).currentIcon].title),1),e("td",null,l(u[t(M).currentIcon].category),1),e("td",null,l(u[t(M).currentIcon].subcategory),1),e("td",null,l(u[t(M).currentIcon].price),1),e("td",null,[u[t(M).currentIcon].is_enabled?(c(),r("span",Go,l(t(i)("admin.products_on_enabled")),1)):(c(),r("span",Qo,l(t(i)("admin.products_off_enabled")),1))]),e("td",Wo,[e("button",{type:"button",class:"btn btn-dark me-1",onClick:V=>o("edit",u)},l(t(i)("admin.products_edit_text")),9,Yo),e("button",{type:"button",class:"btn btn-outline-danger",onClick:V=>L(u.id),disabled:R.value===u.id},[R.value===u.id?(c(),r("span",es,ss)):J("",!0),h(" "+l(t(i)("admin.products_delete_text")),1)],8,Zo)])]))),128))])])]),Q(ue,{pagination:s.value,"onUpdated:page":x},null,8,["pagination"]),Q(So,{ref_key:"adminProductsModal",ref:z,typeName:N.value,onRefetchProducts:x},null,8,["typeName"])])}}};export{cs as default};
