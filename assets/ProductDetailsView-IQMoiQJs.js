import{B as ye,r as y,q as D,p as Y,C as he,o as m,c as b,b as t,D as xe,u as f,w as Z,n as J,s as oe,l as A,E as we,e as T,g as N,t as $,d as H,F as X,f as V,x as $e,a as ie,m as ne,y as ke}from"./index-exq00CYa.js";import{V as Se}from"./index-j85e1aG5.js";import{S as ae,a as re}from"./swiper-vue-zSFqhlt2.js";import{_ as Te,c as le}from"./RatingStar-3AG_NZcT.js";import{u as Oe}from"./loadingStores-bT_G6yGF.js";import{u as Ce}from"./categoryStores-t2E4-5SQ.js";import{u as Ie}from"./wishStores-v4aSYZuj.js";import{u as ce}from"./usePriceToTw-mhH8eMrj.js";import{u as Me}from"./useComputedDiscount-C5EyVmDF.js";import{u as je}from"./searchStores-DAKEmOJR.js";import{_ as Le}from"./CollapseComponent-eWF_Sfs-.js";import{M as Ee}from"./bootstrap.esm-FzNOyMo5.js";import{_ as Pe}from"./ProductDescriptionCard-ePdWrr_Y.js";import{u as Be}from"./cartStores-FLu731ZW.js";import{_ as We}from"./QuantityButtonGroup-ElPXdvcF.js";import"./useToast-iRdsLGGg.js";var Re=Object.defineProperty,Fe=Object.defineProperties,Ne=Object.getOwnPropertyDescriptors,ue=Object.getOwnPropertySymbols,ze=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable,de=(e,s,i)=>s in e?Re(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i,Ae=(e,s)=>{for(var i in s||(s={}))ze.call(s,i)&&de(e,i,s[i]);if(ue)for(var i of ue(s))Xe.call(s,i)&&de(e,i,s[i]);return e},De=(e,s)=>Fe(e,Ne(s)),W=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ve="Expected a function",fe=NaN,Ue="[object Symbol]",He=/^\s+|\s+$/g,Ye=/^[-+]0x[0-9a-f]+$/i,qe=/^0b[01]+$/i,Ge=/^0o[0-7]+$/i,Qe=parseInt,Ke=typeof W=="object"&&W&&W.Object===Object&&W,Ze=typeof self=="object"&&self&&self.Object===Object&&self,Je=Ke||Ze||Function("return this")(),et=Object.prototype,tt=et.toString,st=Math.max,ot=Math.min,Q=function(){return Je.Date.now()};function it(e,s,i){var a,u,v,p,r,d,_=0,I=!1,k=!1,M=!0;if(typeof e!="function")throw new TypeError(Ve);s=me(s)||0,ee(i)&&(I=!!i.leading,k="maxWait"in i,v=k?st(me(i.maxWait)||0,s):v,M="trailing"in i?!!i.trailing:M);function S(n){var g=a,l=u;return a=u=void 0,_=n,p=e.apply(l,g),p}function B(n){return _=n,r=setTimeout(O,s),I?S(n):p}function R(n){var g=n-d,l=n-_,c=s-g;return k?ot(c,v-l):c}function j(n){var g=n-d,l=n-_;return d===void 0||g>=s||g<0||k&&l>=v}function O(){var n=Q();if(j(n))return E(n);r=setTimeout(O,R(n))}function E(n){return r=void 0,M&&a?S(n):(a=u=void 0,p)}function P(){r!==void 0&&clearTimeout(r),_=0,a=d=u=r=void 0}function F(){return r===void 0?p:E(Q())}function h(){var n=Q(),g=j(n);if(a=arguments,u=this,d=n,g){if(r===void 0)return B(d);if(k)return r=setTimeout(O,s),S(d)}return r===void 0&&(r=setTimeout(O,s)),p}return h.cancel=P,h.flush=F,h}function ee(e){var s=typeof e;return!!e&&(s=="object"||s=="function")}function nt(e){return!!e&&typeof e=="object"}function at(e){return typeof e=="symbol"||nt(e)&&tt.call(e)==Ue}function me(e){if(typeof e=="number")return e;if(at(e))return fe;if(ee(e)){var s=typeof e.valueOf=="function"?e.valueOf():e;e=ee(s)?s+"":s}if(typeof e!="string")return e===0?e:+e;e=e.replace(He,"");var i=qe.test(e);return i||Ge.test(e)?Qe(e.slice(2),i?2:8):Ye.test(e)?fe:+e}var rt=it,be="Expected a function",ge=NaN,lt="[object Symbol]",ct=/^\s+|\s+$/g,ut=/^[-+]0x[0-9a-f]+$/i,dt=/^0b[01]+$/i,ft=/^0o[0-7]+$/i,mt=parseInt,gt=typeof W=="object"&&W&&W.Object===Object&&W,vt=typeof self=="object"&&self&&self.Object===Object&&self,pt=gt||vt||Function("return this")(),ht=Object.prototype,bt=ht.toString,_t=Math.max,yt=Math.min,K=function(){return pt.Date.now()};function xt(e,s,i){var a,u,v,p,r,d,_=0,I=!1,k=!1,M=!0;if(typeof e!="function")throw new TypeError(be);s=ve(s)||0,q(i)&&(I=!!i.leading,k="maxWait"in i,v=k?_t(ve(i.maxWait)||0,s):v,M="trailing"in i?!!i.trailing:M);function S(n){var g=a,l=u;return a=u=void 0,_=n,p=e.apply(l,g),p}function B(n){return _=n,r=setTimeout(O,s),I?S(n):p}function R(n){var g=n-d,l=n-_,c=s-g;return k?yt(c,v-l):c}function j(n){var g=n-d,l=n-_;return d===void 0||g>=s||g<0||k&&l>=v}function O(){var n=K();if(j(n))return E(n);r=setTimeout(O,R(n))}function E(n){return r=void 0,M&&a?S(n):(a=u=void 0,p)}function P(){r!==void 0&&clearTimeout(r),_=0,a=d=u=r=void 0}function F(){return r===void 0?p:E(K())}function h(){var n=K(),g=j(n);if(a=arguments,u=this,d=n,g){if(r===void 0)return B(d);if(k)return r=setTimeout(O,s),S(d)}return r===void 0&&(r=setTimeout(O,s)),p}return h.cancel=P,h.flush=F,h}function wt(e,s,i){var a=!0,u=!0;if(typeof e!="function")throw new TypeError(be);return q(i)&&(a="leading"in i?!!i.leading:a,u="trailing"in i?!!i.trailing:u),xt(e,s,{leading:a,maxWait:s,trailing:u})}function q(e){var s=typeof e;return!!e&&(s=="object"||s=="function")}function $t(e){return!!e&&typeof e=="object"}function kt(e){return typeof e=="symbol"||$t(e)&&bt.call(e)==lt}function ve(e){if(typeof e=="number")return e;if(kt(e))return ge;if(q(e)){var s=typeof e.valueOf=="function"?e.valueOf():e;e=q(s)?s+"":s}if(typeof e!="string")return e===0?e:+e;e=e.replace(ct,"");var i=dt.test(e);return i||ft.test(e)?mt(e.slice(2),i?2:8):ut.test(e)?ge:+e}var pe=wt;const St=["src"],Tt={inheritAttrs:!1},te=ye(De(Ae({},Tt),{props:{src:{default:""},width:{default:"100%"},height:{default:"auto"},className:{default:""},zoomImgSrc:{default:""},zoomFactor:{default:1.5},mgWidth:{default:150},mgHeight:{default:150},mgBorderWidth:{default:2},mgShape:{default:"circle"},mgShowOverflow:{type:Boolean,default:!0},mgMouseOffsetX:{default:0},mgMouseOffsetY:{default:0},mgTouchOffsetX:{default:()=>-50},mgTouchOffsetY:{default:()=>-50},mgShow:{type:Boolean,default:!0},mgCornerBgColor:{default:"#fff"}},emits:["image:load"],setup(e,{emit:s}){const i=y();let a=y(new DOMRect),u=y(!1),v=y(0),p=y(0),r=y(0),d=y(0);const _=D(()=>{let l="vue-magnifier__magnifying-glass";return u.value&&(l+=" vue-magnifier__visible"),e.mgShape==="circle"&&(l+=" vue-magnifier__circle"),l}),I=D(()=>({width:e.width,height:e.height,overflow:e.mgShowOverflow?"visible":"hidden"})),k=D(()=>({cursor:e.mgShow?"none":"",width:"100%",height:"100%"})),M=D(()=>({width:`${e.mgWidth}px`,height:`${e.mgHeight}px`,left:`calc(${r.value*100}% - ${e.mgWidth/2}px + ${v.value}px - ${e.mgBorderWidth}px)`,top:`calc(${d.value*100}% - ${e.mgHeight/2}px + ${p.value}px - ${e.mgBorderWidth}px)`,backgroundImage:`url(${e.zoomImgSrc||e.src})`,backgroundPosition:`calc(${r.value*100}% + ${e.mgWidth/2}px - ${r.value*e.mgWidth}px) calc(${d.value*100}% + ${e.mgHeight/2}px - ${d.value*e.mgWidth}px)`,backgroundSize:`${e.zoomFactor*a.value.width}% ${e.zoomFactor*a.value.height}%`,borderWidth:`${e.mgBorderWidth}px`,backgroundColor:e.mgCornerBgColor})),S=()=>{i.value&&(a.value=i.value.getBoundingClientRect())},B=l=>{s("image:load",l),S()},R=()=>{S()};let j=l=>{if(a.value){const c=l.target;v.value=e.mgMouseOffsetX,p.value=e.mgMouseOffsetY,r.value=(l.clientX-a.value.left)/c.clientWidth,d.value=(l.clientY-a.value.top)/c.clientHeight,u.value=!0}};const O=()=>{u.value=!1},E=()=>{S()};let P=l=>{if(a.value){const c=l.target,o=(l.targetTouches[0].clientX-a.value.left)/c.clientWidth,z=(l.targetTouches[0].clientY-a.value.top)/c.clientHeight;o>=0&&z>=0&&o<=1&&z<=1?(v.value=e.mgTouchOffsetX,p.value=e.mgTouchOffsetY,r.value=o,d.value=z,u.value=!0):u.value=!1}};const F=()=>{u.value=!1},h=rt(S,200);j=pe(j,20,{trailing:!1}),P=pe(P,20,{trailing:!1});const n=()=>{window.addEventListener("resize",h),window.addEventListener("scroll",h,!0)},g=()=>{window.removeEventListener("resize",h),window.removeEventListener("scroll",h,!0)};return Y(()=>{n()}),he(()=>{g()}),(l,c)=>(m(),b("div",{class:J(`vue-magnifier__magnifier ${e.className}`),style:oe(f(I))},[t("img",xe({ref_key:"img",ref:i,src:e.src},l.$attrs,{class:"vue-magnifier__magnifier-image",style:f(k),onLoad:c[0]||(c[0]=o=>B(o)),onMouseenter:c[1]||(c[1]=o=>R()),onMousemove:c[2]||(c[2]=o=>f(j)(o)),onMouseout:c[3]||(c[3]=o=>O()),onTouchstart:c[4]||(c[4]=Z(o=>E(),["prevent"])),onTouchmove:c[5]||(c[5]=Z(o=>f(P)(o),["prevent"])),onTouchend:c[6]||(c[6]=o=>F())}),null,16,St),a.value&&e.mgShow?(m(),b("div",{key:0,class:J(f(_)),style:oe(f(M))},null,6)):A("",!0)],6))}}));te.install=e=>{e.component("VueMagnifier",te)};const Ot={class:"modal-dialog modal-lg"},Ct={class:"modal-content border-0"},It=t("h5",{id:"productModalLabel",class:"modal-title"},null,-1),Mt={class:"modal-body"},jt=["src","alt"],Lt={__name:"ImageModal",setup(e,{expose:s}){const i=y(null),a=y(null),u=y(""),v=y("");Y(()=>{a.value=new Ee(i.value)}),he(()=>{a.value&&a.value.dispose()});const p=(d,_)=>{u.value=d,v.value=_,a.value.show()},r=()=>{a.value.hide()};return s({openModal:p,closeModal:r}),(d,_)=>(m(),b("div",{class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true",ref_key:"bsImageModalRef",ref:i},[t("div",Ot,[t("div",Ct,[t("div",{class:"modal-header bg-dark text-white"},[It,t("button",{type:"button",class:"bg-dark text-white fs-4 fw-bolder border-0","data-bs-dismiss":"modal","aria-label":"Close",onClick:r}," X ")]),t("div",Mt,[t("img",{src:u.value,alt:v.value,class:"img-fluid w-100",style:{height:"700px",objectFit:"cover"}},null,8,jt)])])])],512))}},Et={key:0,class:"py-32"},Pt={class:"container"},Bt={key:0},Wt={"aria-label":"breadcrumb"},Rt={class:"breadcrumb"},Ft={class:"breadcrumb-item"},Nt={class:"breadcrumb-item"},zt={class:"breadcrumb-item text-primary","aria-current":"page"},Xt={class:"row"},At={class:"col-lg-6"},Dt={class:"row flex-row flex-sm-column-reverse flex-lg-row"},Vt={class:"col-xl-3 py-2 ps-sm-2 px-lg-0 py-lg-0 ps-xl-4 ps-xxl-0"},Ut=["src","alt"],Ht={class:"col-md-12 col-lg-12 col-xl-9 px-lg-1"},Yt=["onClick"],qt={class:"col-lg-6"},Gt={class:"px-3 pb-3"},Qt={class:"d-flex justify-content-between align-items-center text-dark fw-bolder fs-4"},Kt={class:"text-muted fs-6 mt-4 pb-3"},Zt={class:"fw-500"},Jt={key:0,class:"d-flex align-items-center mt-3"},es={class:"fs-3 fw-700 text-danger"},ts={class:"text-danger border border-danger mt-1 ms-2 px-2"},ss={key:1,class:"mt-3"},os={class:"fs-4 fw-bolder text-dark"},is=t("div",{class:"d-flex flex-column border-start border-5 border-primary mb-4 mt-5 ps-2"},[t("span",{class:"text-ellipsis"},"首次，使用 LinePay 首次滿千免運，贈送點數!"),t("span",{class:"text-ellipsis"},"全店，滿額免運：全店滿$999元免運 (海外地區不適用)"),t("span",{class:"text-ellipsis"},"全店，滿額贈：消費滿$2000元贈 TEXT 品牌提袋 x1")],-1),ns={class:"mt-3"},as={class:"row"},rs={class:"col-6 col-xl-5"},ls={class:"col-6 col-xl-7"},cs=["disabled"],us={key:0},ds=t("span",{class:"spinner-border spinner-border-sm",role:"status"},[t("span",{class:"visually-hidden"},"新增購物車中")],-1),fs={key:1},ms={class:"mt-3"},gs={class:"table-responsive"},vs={class:"details-table table align-middle mb-0"},ps=t("thead",null,[t("tr",null,[t("th",null,"名稱"),t("th",null,"內容")])],-1),hs=t("td",null,"產品編碼",-1),bs=t("td",null,"顏色",-1),_s=t("td",null,"尺寸[長x寬x高](cm)",-1),ys=t("td",null,"材質",-1),xs={class:"row border-top border-2 py-3"},ws=t("div",{class:"col-lg-3"},null,-1),$s={class:"col-lg-6"},ks=t("h3",{class:"text-center my-4"},"產品描述",-1),Ss=["src","alt","onClick"],Ts={key:1,class:"mt-3"},Os=t("div",{class:"col-lg-3"},null,-1),Cs=t("div",{class:"mt-3"},null,-1),Is=t("h3",{class:"text-center mb-4"},"推薦商品",-1),Ms={key:0,class:"mt-3",style:{backgroundColor:"#FBF9F9"}},js={class:"py-5"},Ls={class:"container p-0"},Es={class:"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-start align-items-stretch overflow-x-nowrap-lg m-0"},Ks={__name:"ProductDetailsView",setup(e){const s=y(null),i=we(),{showAlert:a}=ke(),u=Ce(),v=Oe(),p=Ie(),{addWishList:r,isWishListed:d}=p,_=je(),I=Be(),{addCart:k}=I,M=y([]),S=y(""),B=y(1),R="https://vue3-course-api.hexschool.io",j="vue-ben0588";function O(){return _.originProducts.filter(x=>x.category===S.value).slice(0,5)}const E=D(()=>le(O())),P=y(null),F=x=>{P.value=x};let h=null;const n=y(null),g=y(null),l=x=>{h=x,h.params.navigation.prevEl=n.value,h.params.navigation.nextEl=g.value,h.navigation.init(),h.navigation.update()};Y(()=>{h&&(h.navigation.init(),h.navigation.update())});const c=async()=>{try{v.toggleLoading();const x=`${R}/v2/api/${j}/product/${i.params.id}`,C=await $e.get(x);S.value=C.data.product.category,M.value.push(C.data.product)}catch(x){a({title:"失敗",text:`${x.response.data.message}`,icon:"error",confirmButtonText:"確認",confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1})}finally{v.toggleLoading()}},o=D(()=>le(M.value)[0]),z=x=>{u.categoryTarget=x},G=(x,C)=>{s.value.openModal(x,C)},_e=({qty:x})=>{B.value=x};return Y(()=>{c()}),(x,C)=>{const se=ie("router-link"),U=ie("font-awesome-icon");return m(),b(X,null,[t("div",null,[f(v).isLoading?A("",!0):(m(),b("div",Et,[t("div",Pt,[o.value?(m(),b("div",Bt,[t("nav",Wt,[t("ol",Rt,[t("li",Ft,[T(se,{to:"/products",onClick:C[0]||(C[0]=()=>{z("全部商品")}),class:"text-dark"},{default:N(()=>[H("全部商品")]),_:1})]),t("li",Nt,[T(se,{to:"/products",class:"text-dark",onClick:C[1]||(C[1]=()=>{z(o.value.category)})},{default:N(()=>[H($(o.value.category),1)]),_:1})]),t("li",zt,$(o.value.title),1)])]),t("div",Xt,[t("div",At,[t("div",Dt,[t("div",Vt,[T(f(re),{onSwiper:F,slidesPerView:5,spaceBetween:11.7,freeMode:!0,watchSlidesProgress:!0,class:"thumbs-swiper-container ms-sm-1 ms-lg-0"},{default:N(()=>[(m(!0),b(X,null,V(o.value.imagesUrl,(w,L)=>(m(),ne(f(ae),{key:L,class:"thumbs-swiper my-sm-2 my-xl-0 mb-xl-2 ms-xl-2 ms-xxl-4"},{default:N(()=>[t("img",{src:w,alt:o.value.title,class:"thumbs-swiper-img d-block object-fit-cover"},null,8,Ut)]),_:2},1024))),128))]),_:1})]),t("div",Ht,[T(f(re),{slidesPerView:1,slidesPerGroup:1,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},grabCursor:!0,pagination:{clickable:!0,el:".details-swiper-pagination"},class:"mid-swiper-container position-relative",thumbs:{swiper:P.value},style:{"--details-swiper-pagination-color":"#000","--details-swiper-pagination-bullet-size":"15px"},onSwiper:l},{default:N(()=>[(m(!0),b(X,null,V(o.value.imagesUrl,w=>(m(),ne(f(ae),{key:w},{default:N(()=>[T(f(te),{src:w,class:"swiper-img",mgWidth:200,mgHeight:200,mgShape:"square",zoomFactor:1,onClick:()=>G(w,o.value.title)},null,8,["src","onClick"]),t("span",{class:"details-magnifying-glass-icon",onClick:()=>G(w,o.value.title)},[T(U,{icon:["fas","magnifying-glass"],class:"fs-5"})],8,Yt)]),_:2},1024))),128)),t("div",{ref_key:"prevRef",ref:n,class:"details-swiper-button details-swiper-button-prev"},[T(U,{icon:["fas","chevron-left"]})],512),t("div",{ref_key:"nextRef",ref:g,class:"details-swiper-button details-swiper-button-next"},[T(U,{icon:["fas","chevron-right"]})],512)]),_:1},8,["pagination","thumbs"])])])]),t("div",qt,[t("div",Gt,[t("div",null,[t("h2",Qt,[H($(o.value.title)+" ",1),t("span",{class:"cursor-pointer me-2",onClick:C[2]||(C[2]=Z(w=>f(r)(o.value),["prevent"]))},[T(U,{icon:[f(d)(o.value)?"fas":"far","heart"],class:"text-danger fs-3",title:f(d)(o.value)?"移除願望清單":"加入願望清單中"},null,8,["icon","title"])])]),t("div",null,$(o.value.description),1),t("div",Kt,$(o.value.content),1)]),t("div",null,[T(Te,{averageRating:o.value.averageRating||0,totalRatings:o.value.totalRatings||0,classSize:"fs-6",color:"text-primary"},null,8,["averageRating","totalRatings"]),t("span",Zt," ("+$(o.value.totalRatings)+") ",1)]),o.value.isOnSale?(m(),b("div",Jt,[t("span",es,$(f(ce)(o.value.price)),1),t("span",ts,"-"+$(f(Me)(o.value.origin_price,o.value.price)),1)])):(m(),b("div",ss,[t("div",os," NT"+$(f(ce)(o.value.origin_price)),1)])),is,t("div",ns,[t("div",as,[t("div",rs,[T(We,{productId:o.value.id,onFetchQuantity:_e},null,8,["productId"])]),t("div",ls,[t("button",{type:"button",class:J(["btn btn-primary text-white w-100 py-2",{"cursor-not-allowed":f(I).addTargetId===o.value.id}]),title:"加入購物車",onClick:C[3]||(C[3]=w=>f(k)({id:o.value.id,quantity:B.value})),disabled:f(I).addTargetId===o.value.id},[f(I).addTargetId===o.value.id?(m(),b("span",us,[ds,H(" 新增購物車中")])):(m(),b("span",fs," 加入購物車 "))],10,cs)])])]),t("div",ms,[T(Le,{index:0,list:{title:"產品規格"}},{default:N(()=>[t("div",gs,[t("table",vs,[ps,t("tbody",null,[t("tr",null,[hs,t("td",null,$(o.value.id),1)]),t("tr",null,[bs,t("td",null,[(m(!0),b(X,null,V(o.value.colors,(w,L)=>(m(),b("span",{key:L},$(w.title),1))),128))])]),t("tr",null,[_s,t("td",null,$(o.value.dimensions.length)+" x "+$(o.value.dimensions.width)+" x "+$(o.value.dimensions.height)+" 公分 ",1)]),t("tr",null,[ys,t("td",null,$(o.value.material),1)])])])])]),_:1})])])])]),t("div",xs,[ws,t("div",$s,[ks,(m(!0),b(X,null,V(o.value.imagesUrlDescriptions,(w,L)=>(m(),b("div",{key:L,class:"mb-5"},[L<=2?(m(),b("img",{key:0,src:o.value.imagesUrl[L],alt:w,class:"product-description-img",onClick:Ps=>G(o.value.imagesUrl[L],w)},null,8,Ss)):A("",!0),L<=2?(m(),b("p",Ts,$(w),1)):A("",!0)]))),128))]),Os])])):A("",!0)]),Cs,Is,E.value?(m(),b("div",Ms,[t("div",js,[t("div",Ls,[t("div",Es,[(m(!0),b(X,null,V(E.value,(w,L)=>(m(),b("div",{class:"col col-1-2 col-2-2 col-4-3 px-3",key:L},[T(Pe,{product:w,"img-class":"product-description-card-img","card-bg-color":"#FBF9F9","star-color":"text-primary"},null,8,["product"])]))),128))])])])])):A("",!0)]))]),T(f(Se),{active:f(v).isLoading,"can-cancel":!1,color:"#0089A7"},null,8,["active"]),T(Lt,{ref_key:"imageModal",ref:s},null,512)],64)}}};export{Ks as default};
