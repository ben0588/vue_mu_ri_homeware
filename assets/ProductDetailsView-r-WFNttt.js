import{B as xe,r as y,q as U,p as se,C as be,o as m,c as b,b as t,D as we,u as f,w as Z,n as J,s as ae,l as D,E as $e,G as ke,e as I,g as X,t as S,d as Y,F as A,f as H,x as Se,a as ie,m as ne,y as Te}from"./index-wONQE6OV.js";import{V as Oe}from"./index-ENWe5MEy.js";import{S as re,a as le}from"./swiper-vue-5xfE86AU.js";import{_ as Ce,c as ce}from"./RatingStar-MmqteJYn.js";import{u as Ie}from"./loadingStores-3OME-DdW.js";import{u as Me}from"./categoryStores-X_s5eOmp.js";import{u as je}from"./wishStores-wSSplIBN.js";import{u as ue}from"./usePriceToTw-mhH8eMrj.js";import{u as Le}from"./useComputedDiscount-AukIehuS.js";import{u as Ee}from"./searchStores-ZS78h76v.js";import{_ as Pe}from"./CollapseComponent-2OlvlcrU.js";import{M as Be}from"./bootstrap.esm-FzNOyMo5.js";import{_ as Re}from"./ProductDescriptionCard-rsb0ytMZ.js";import{u as We}from"./cartStores-vRrvGi1h.js";import{_ as Fe}from"./QuantityButtonGroup-DxcW1Mvm.js";import"./useToast-0ZbpUez5.js";var Ne=Object.defineProperty,ze=Object.defineProperties,Xe=Object.getOwnPropertyDescriptors,de=Object.getOwnPropertySymbols,Ae=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable,fe=(e,s,o)=>s in e?Ne(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,Ue=(e,s)=>{for(var o in s||(s={}))Ae.call(s,o)&&fe(e,o,s[o]);if(de)for(var o of de(s))De.call(s,o)&&fe(e,o,s[o]);return e},Ve=(e,s)=>ze(e,Xe(s)),N=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},He="Expected a function",me=NaN,Ye="[object Symbol]",Ge=/^\s+|\s+$/g,qe=/^[-+]0x[0-9a-f]+$/i,Qe=/^0b[01]+$/i,Ke=/^0o[0-7]+$/i,Ze=parseInt,Je=typeof N=="object"&&N&&N.Object===Object&&N,et=typeof self=="object"&&self&&self.Object===Object&&self,tt=Je||et||Function("return this")(),st=Object.prototype,ot=st.toString,at=Math.max,it=Math.min,Q=function(){return tt.Date.now()};function nt(e,s,o){var n,u,p,h,r,d,x=0,L=!1,T=!1,M=!0;if(typeof e!="function")throw new TypeError(He);s=ge(s)||0,ee(o)&&(L=!!o.leading,T="maxWait"in o,p=T?at(ge(o.maxWait)||0,s):p,M="trailing"in o?!!o.trailing:M);function O(a){var g=n,l=u;return n=u=void 0,x=a,h=e.apply(l,g),h}function W(a){return x=a,r=setTimeout(j,s),L?O(a):h}function F(a){var g=a-d,l=a-x,c=s-g;return T?it(c,p-l):c}function E(a){var g=a-d,l=a-x;return d===void 0||g>=s||g<0||T&&l>=p}function j(){var a=Q();if(E(a))return B(a);r=setTimeout(j,F(a))}function B(a){return r=void 0,M&&n?O(a):(n=u=void 0,h)}function P(){r!==void 0&&clearTimeout(r),x=0,n=d=u=r=void 0}function R(){return r===void 0?h:B(Q())}function w(){var a=Q(),g=E(a);if(n=arguments,u=this,d=a,g){if(r===void 0)return W(d);if(T)return r=setTimeout(j,s),O(d)}return r===void 0&&(r=setTimeout(j,s)),h}return w.cancel=P,w.flush=R,w}function ee(e){var s=typeof e;return!!e&&(s=="object"||s=="function")}function rt(e){return!!e&&typeof e=="object"}function lt(e){return typeof e=="symbol"||rt(e)&&ot.call(e)==Ye}function ge(e){if(typeof e=="number")return e;if(lt(e))return me;if(ee(e)){var s=typeof e.valueOf=="function"?e.valueOf():e;e=ee(s)?s+"":s}if(typeof e!="string")return e===0?e:+e;e=e.replace(Ge,"");var o=Qe.test(e);return o||Ke.test(e)?Ze(e.slice(2),o?2:8):qe.test(e)?me:+e}var ct=nt,_e="Expected a function",ve=NaN,ut="[object Symbol]",dt=/^\s+|\s+$/g,ft=/^[-+]0x[0-9a-f]+$/i,mt=/^0b[01]+$/i,gt=/^0o[0-7]+$/i,vt=parseInt,pt=typeof N=="object"&&N&&N.Object===Object&&N,ht=typeof self=="object"&&self&&self.Object===Object&&self,bt=pt||ht||Function("return this")(),_t=Object.prototype,yt=_t.toString,xt=Math.max,wt=Math.min,K=function(){return bt.Date.now()};function $t(e,s,o){var n,u,p,h,r,d,x=0,L=!1,T=!1,M=!0;if(typeof e!="function")throw new TypeError(_e);s=pe(s)||0,G(o)&&(L=!!o.leading,T="maxWait"in o,p=T?xt(pe(o.maxWait)||0,s):p,M="trailing"in o?!!o.trailing:M);function O(a){var g=n,l=u;return n=u=void 0,x=a,h=e.apply(l,g),h}function W(a){return x=a,r=setTimeout(j,s),L?O(a):h}function F(a){var g=a-d,l=a-x,c=s-g;return T?wt(c,p-l):c}function E(a){var g=a-d,l=a-x;return d===void 0||g>=s||g<0||T&&l>=p}function j(){var a=K();if(E(a))return B(a);r=setTimeout(j,F(a))}function B(a){return r=void 0,M&&n?O(a):(n=u=void 0,h)}function P(){r!==void 0&&clearTimeout(r),x=0,n=d=u=r=void 0}function R(){return r===void 0?h:B(K())}function w(){var a=K(),g=E(a);if(n=arguments,u=this,d=a,g){if(r===void 0)return W(d);if(T)return r=setTimeout(j,s),O(d)}return r===void 0&&(r=setTimeout(j,s)),h}return w.cancel=P,w.flush=R,w}function kt(e,s,o){var n=!0,u=!0;if(typeof e!="function")throw new TypeError(_e);return G(o)&&(n="leading"in o?!!o.leading:n,u="trailing"in o?!!o.trailing:u),$t(e,s,{leading:n,maxWait:s,trailing:u})}function G(e){var s=typeof e;return!!e&&(s=="object"||s=="function")}function St(e){return!!e&&typeof e=="object"}function Tt(e){return typeof e=="symbol"||St(e)&&yt.call(e)==ut}function pe(e){if(typeof e=="number")return e;if(Tt(e))return ve;if(G(e)){var s=typeof e.valueOf=="function"?e.valueOf():e;e=G(s)?s+"":s}if(typeof e!="string")return e===0?e:+e;e=e.replace(dt,"");var o=mt.test(e);return o||gt.test(e)?vt(e.slice(2),o?2:8):ft.test(e)?ve:+e}var he=kt;const Ot=["src"],Ct={inheritAttrs:!1},te=xe(Ve(Ue({},Ct),{props:{src:{default:""},width:{default:"100%"},height:{default:"auto"},className:{default:""},zoomImgSrc:{default:""},zoomFactor:{default:1.5},mgWidth:{default:150},mgHeight:{default:150},mgBorderWidth:{default:2},mgShape:{default:"circle"},mgShowOverflow:{type:Boolean,default:!0},mgMouseOffsetX:{default:0},mgMouseOffsetY:{default:0},mgTouchOffsetX:{default:()=>-50},mgTouchOffsetY:{default:()=>-50},mgShow:{type:Boolean,default:!0},mgCornerBgColor:{default:"#fff"}},emits:["image:load"],setup(e,{emit:s}){const o=y();let n=y(new DOMRect),u=y(!1),p=y(0),h=y(0),r=y(0),d=y(0);const x=U(()=>{let l="vue-magnifier__magnifying-glass";return u.value&&(l+=" vue-magnifier__visible"),e.mgShape==="circle"&&(l+=" vue-magnifier__circle"),l}),L=U(()=>({width:e.width,height:e.height,overflow:e.mgShowOverflow?"visible":"hidden"})),T=U(()=>({cursor:e.mgShow?"none":"",width:"100%",height:"100%"})),M=U(()=>({width:`${e.mgWidth}px`,height:`${e.mgHeight}px`,left:`calc(${r.value*100}% - ${e.mgWidth/2}px + ${p.value}px - ${e.mgBorderWidth}px)`,top:`calc(${d.value*100}% - ${e.mgHeight/2}px + ${h.value}px - ${e.mgBorderWidth}px)`,backgroundImage:`url(${e.zoomImgSrc||e.src})`,backgroundPosition:`calc(${r.value*100}% + ${e.mgWidth/2}px - ${r.value*e.mgWidth}px) calc(${d.value*100}% + ${e.mgHeight/2}px - ${d.value*e.mgWidth}px)`,backgroundSize:`${e.zoomFactor*n.value.width}% ${e.zoomFactor*n.value.height}%`,borderWidth:`${e.mgBorderWidth}px`,backgroundColor:e.mgCornerBgColor})),O=()=>{o.value&&(n.value=o.value.getBoundingClientRect())},W=l=>{s("image:load",l),O()},F=()=>{O()};let E=l=>{if(n.value){const c=l.target;p.value=e.mgMouseOffsetX,h.value=e.mgMouseOffsetY,r.value=(l.clientX-n.value.left)/c.clientWidth,d.value=(l.clientY-n.value.top)/c.clientHeight,u.value=!0}};const j=()=>{u.value=!1},B=()=>{O()};let P=l=>{if(n.value){const c=l.target,k=(l.targetTouches[0].clientX-n.value.left)/c.clientWidth,i=(l.targetTouches[0].clientY-n.value.top)/c.clientHeight;k>=0&&i>=0&&k<=1&&i<=1?(p.value=e.mgTouchOffsetX,h.value=e.mgTouchOffsetY,r.value=k,d.value=i,u.value=!0):u.value=!1}};const R=()=>{u.value=!1},w=ct(O,200);E=he(E,20,{trailing:!1}),P=he(P,20,{trailing:!1});const a=()=>{window.addEventListener("resize",w),window.addEventListener("scroll",w,!0)},g=()=>{window.removeEventListener("resize",w),window.removeEventListener("scroll",w,!0)};return se(()=>{a()}),be(()=>{g()}),(l,c)=>(m(),b("div",{class:J(`vue-magnifier__magnifier ${e.className}`),style:ae(f(L))},[t("img",we({ref_key:"img",ref:o,src:e.src},l.$attrs,{class:"vue-magnifier__magnifier-image",style:f(T),onLoad:c[0]||(c[0]=k=>W(k)),onMouseenter:c[1]||(c[1]=k=>F()),onMousemove:c[2]||(c[2]=k=>f(E)(k)),onMouseout:c[3]||(c[3]=k=>j()),onTouchstart:c[4]||(c[4]=Z(k=>B(),["prevent"])),onTouchmove:c[5]||(c[5]=Z(k=>f(P)(k),["prevent"])),onTouchend:c[6]||(c[6]=k=>R())}),null,16,Ot),n.value&&e.mgShow?(m(),b("div",{key:0,class:J(f(x)),style:ae(f(M))},null,6)):D("",!0)],6))}}));te.install=e=>{e.component("VueMagnifier",te)};const It={class:"modal-dialog modal-lg"},Mt={class:"modal-content border-0"},jt=t("h5",{id:"productModalLabel",class:"modal-title"},null,-1),Lt={class:"modal-body"},Et=["src","alt"],Pt={__name:"ImageModal",setup(e,{expose:s}){const o=y(null),n=y(null),u=y(""),p=y("");se(()=>{n.value=new Be(o.value)}),be(()=>{n.value&&n.value.dispose()});const h=(d,x)=>{u.value=d,p.value=x,n.value.show()},r=()=>{n.value.hide()};return s({openModal:h,closeModal:r}),(d,x)=>(m(),b("div",{class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true",ref_key:"bsImageModalRef",ref:o},[t("div",It,[t("div",Mt,[t("div",{class:"modal-header bg-dark text-white"},[jt,t("button",{type:"button",class:"bg-dark text-white fs-4 fw-bolder border-0","data-bs-dismiss":"modal","aria-label":"Close",onClick:r}," X ")]),t("div",Lt,[t("img",{src:u.value,alt:p.value,class:"img-fluid w-100",style:{height:"700px",objectFit:"cover"}},null,8,Et)])])])],512))}},Bt={key:0,class:"py-32"},Rt={class:"container"},Wt={key:0},Ft={"aria-label":"breadcrumb"},Nt={class:"breadcrumb"},zt={class:"breadcrumb-item"},Xt={class:"breadcrumb-item"},At={class:"breadcrumb-item text-primary","aria-current":"page"},Dt={class:"row"},Ut={class:"col-lg-6"},Vt={class:"row flex-row flex-sm-column-reverse flex-lg-row"},Ht={class:"col-xl-3 py-2 ps-sm-2 px-lg-0 py-lg-0 ps-xl-4 ps-xxl-0"},Yt=["src","alt"],Gt={class:"col-md-12 col-lg-12 col-xl-9 px-lg-1"},qt=["onClick"],Qt={class:"col-lg-6"},Kt={class:"px-3 pb-3"},Zt={class:"d-flex justify-content-between align-items-center text-dark fw-bolder fs-4"},Jt={class:"text-muted fs-6 mt-4 pb-3"},es={class:"fw-500"},ts={key:0,class:"d-flex align-items-center mt-3"},ss={class:"fs-3 fw-700 text-danger"},os={class:"text-danger border border-danger mt-1 ms-2 px-2"},as={key:1,class:"mt-3"},is={class:"fs-4 fw-bolder text-dark"},ns=t("div",{class:"d-flex flex-column border-start border-5 border-primary mb-4 mt-5 ps-2"},[t("span",{class:"text-ellipsis"},"首次，使用 LinePay 首次滿千免運，贈送點數!"),t("span",{class:"text-ellipsis"},"全店，滿額免運：全店滿$999元免運 (海外地區不適用)"),t("span",{class:"text-ellipsis"},"全店，滿額贈：消費滿$2000元贈 TEXT 品牌提袋 x1")],-1),rs={class:"mt-3"},ls={class:"row"},cs={class:"col-6 col-xl-5"},us={class:"col-6 col-xl-7"},ds=["disabled"],fs={key:0},ms=t("span",{class:"spinner-border spinner-border-sm",role:"status"},[t("span",{class:"visually-hidden"},"新增購物車中")],-1),gs={key:1},vs={class:"mt-3"},ps={class:"table-responsive"},hs={class:"details-table table align-middle mb-0"},bs=t("thead",null,[t("tr",null,[t("th",null,"名稱"),t("th",null,"內容")])],-1),_s=t("td",null,"產品編碼",-1),ys=t("td",null,"顏色",-1),xs=t("td",null,"尺寸[長x寬x高](cm)",-1),ws=t("td",null,"材質",-1),$s={class:"row border-top border-2 py-3"},ks=t("div",{class:"col-lg-3"},null,-1),Ss={class:"col-lg-6"},Ts=t("h3",{class:"text-center my-4"},"產品描述",-1),Os=["src","alt","onClick"],Cs={key:1,class:"mt-3"},Is=t("div",{class:"col-lg-3"},null,-1),Ms=t("div",{class:"mt-3"},null,-1),js=t("h3",{class:"text-center mb-4"},"推薦商品",-1),Ls={key:0,class:"mt-3",style:{backgroundColor:"#FBF9F9"}},Es={class:"py-5"},Ps={class:"container p-0"},Bs={class:"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-start align-items-stretch overflow-x-nowrap-lg m-0"},Js={__name:"ProductDetailsView",setup(e){const s=y(null),o=$e(),{showAlert:n}=Te(),u=Me(),p=Ie(),h=je(),{addWishList:r,isWishListed:d}=h,x=Ee(),L=We(),{addCart:T}=L,M=y([]),O=y(""),W=y(1),F=y(""),E="https://vue3-course-api.hexschool.io",j="vue-ben0588";function B(){return x.originProducts.filter(v=>v.category===O.value&&v.id!==F.value).slice(0,5)}const P=U(()=>ce(B())),R=y(null);let w=null;const a=y(null),g=y(null),l=v=>{R.value=v},c=v=>{w=v,w.params.navigation.prevEl=a.value,w.params.navigation.nextEl=g.value,w.navigation.init(),w.navigation.update()},k=async v=>{var C,V,z;try{F.value=v,p.toggleLoading();const _=`${E}/v2/api/${j}/product/${v}`,$=await Se.get(_);O.value=(V=(C=$==null?void 0:$.data)==null?void 0:C.product)==null?void 0:V.category,M.value=[],M.value.push((z=$==null?void 0:$.data)==null?void 0:z.product)}catch(_){n({title:"失敗",text:`${_.response.data.message}`,icon:"error",confirmButtonText:"確認",confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1})}finally{p.toggleLoading()}},i=U(()=>ce(M.value)[0]),oe=v=>{u.categoryTarget=v},q=(v,C)=>{s.value.openModal(v,C)},ye=({qty:v})=>{W.value=v};return se(()=>{var v;k((v=o==null?void 0:o.params)==null?void 0:v.id)}),ke(async(v,C)=>{v.params.id!==C.params.id&&await k(v.params.id)}),(v,C)=>{const V=ie("router-link"),z=ie("font-awesome-icon");return m(),b(A,null,[t("div",null,[f(p).isLoading?D("",!0):(m(),b("div",Bt,[t("div",Rt,[i.value?(m(),b("div",Wt,[t("nav",Ft,[t("ol",Nt,[t("li",zt,[I(V,{to:"/products",onClick:C[0]||(C[0]=()=>{oe("全部商品")}),class:"text-dark"},{default:X(()=>[Y("全部商品")]),_:1})]),t("li",Xt,[I(V,{to:"/products",class:"text-dark",onClick:C[1]||(C[1]=()=>{oe(i.value.category)})},{default:X(()=>[Y(S(i.value.category),1)]),_:1})]),t("li",At,S(i.value.title),1)])]),t("div",Dt,[t("div",Ut,[t("div",Vt,[t("div",Ht,[I(f(le),{onSwiper:l,slidesPerView:5,spaceBetween:11.7,freeMode:!0,watchSlidesProgress:!0,class:"thumbs-swiper-container ms-sm-1 ms-lg-0",ref_key:"thumbsSwiper",ref:R,observer:!0},{default:X(()=>[(m(!0),b(A,null,H(i.value.imagesUrl,(_,$)=>(m(),ne(f(re),{key:$,class:"thumbs-swiper my-sm-2 my-xl-0 mb-xl-2 ms-xl-2 ms-xxl-4"},{default:X(()=>[t("img",{src:_,alt:i.value.title,class:"thumbs-swiper-img d-block object-fit-cover"},null,8,Yt)]),_:2},1024))),128))]),_:1},512)]),t("div",Gt,[I(f(le),{slidesPerView:1,slidesPerGroup:1,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},grabCursor:!0,pagination:{clickable:!0,el:".details-swiper-pagination"},class:"mid-swiper-container position-relative",thumbs:{swiper:R.value},style:{"--details-swiper-pagination-color":"#000","--details-swiper-pagination-bullet-size":"15px"},onSwiper:c,observer:!0},{default:X(()=>[(m(!0),b(A,null,H(i.value.imagesUrl,_=>(m(),ne(f(re),{key:_},{default:X(()=>[I(f(te),{src:_,class:"swiper-img",mgWidth:200,mgHeight:200,mgShape:"square",zoomFactor:1,onClick:()=>q(_,i.value.title)},null,8,["src","onClick"]),t("span",{class:"details-magnifying-glass-icon",onClick:()=>q(_,i.value.title)},[I(z,{icon:["fas","magnifying-glass"],class:"fs-5"})],8,qt)]),_:2},1024))),128)),t("div",{ref_key:"prevRef",ref:a,class:"details-swiper-button details-swiper-button-prev"},[I(z,{icon:["fas","chevron-left"]})],512),t("div",{ref_key:"nextRef",ref:g,class:"details-swiper-button details-swiper-button-next"},[I(z,{icon:["fas","chevron-right"]})],512)]),_:1},8,["pagination","thumbs"])])])]),t("div",Qt,[t("div",Kt,[t("div",null,[t("h2",Zt,[Y(S(i.value.title)+" ",1),t("span",{class:"cursor-pointer me-2",onClick:C[2]||(C[2]=Z(_=>f(r)(i.value),["prevent"]))},[I(z,{icon:[f(d)(i.value)?"fas":"far","heart"],class:"text-danger fs-3",title:f(d)(i.value)?"移除願望清單":"加入願望清單中"},null,8,["icon","title"])])]),t("div",null,S(i.value.description),1),t("div",Jt,S(i.value.content),1)]),t("div",null,[I(Ce,{averageRating:i.value.averageRating||0,totalRatings:i.value.totalRatings||0,classSize:"fs-6",color:"text-primary"},null,8,["averageRating","totalRatings"]),t("span",es," ("+S(i.value.totalRatings)+") ",1)]),i.value.isOnSale?(m(),b("div",ts,[t("span",ss,S(f(ue)(i.value.price)),1),t("span",os,"-"+S(f(Le)(i.value.origin_price,i.value.price)),1)])):(m(),b("div",as,[t("div",is," NT"+S(f(ue)(i.value.origin_price)),1)])),ns,t("div",rs,[t("div",ls,[t("div",cs,[I(Fe,{productId:i.value.id,onFetchQuantity:ye},null,8,["productId"])]),t("div",us,[t("button",{type:"button",class:J(["btn btn-primary text-white w-100 py-2",{"cursor-not-allowed":f(L).addTargetId===i.value.id}]),title:"加入購物車",onClick:C[3]||(C[3]=_=>f(T)({id:i.value.id,quantity:W.value})),disabled:f(L).addTargetId===i.value.id},[f(L).addTargetId===i.value.id?(m(),b("span",fs,[ms,Y(" 新增購物車中")])):(m(),b("span",gs," 加入購物車 "))],10,ds)])])]),t("div",vs,[I(Pe,{index:0,list:{title:"產品規格"}},{default:X(()=>[t("div",ps,[t("table",hs,[bs,t("tbody",null,[t("tr",null,[_s,t("td",null,S(i.value.id),1)]),t("tr",null,[ys,t("td",null,[(m(!0),b(A,null,H(i.value.colors,(_,$)=>(m(),b("span",{key:$},S(_.title),1))),128))])]),t("tr",null,[xs,t("td",null,S(i.value.dimensions.length)+" x "+S(i.value.dimensions.width)+" x "+S(i.value.dimensions.height)+" 公分 ",1)]),t("tr",null,[ws,t("td",null,S(i.value.material),1)])])])])]),_:1})])])])]),t("div",$s,[ks,t("div",Ss,[Ts,(m(!0),b(A,null,H(i.value.imagesUrlDescriptions,(_,$)=>(m(),b("div",{key:$,class:"mb-5"},[$<=2?(m(),b("img",{key:0,src:i.value.imagesUrl[$],alt:_,class:"product-description-img",onClick:Rs=>q(i.value.imagesUrl[$],_)},null,8,Os)):D("",!0),$<=2?(m(),b("p",Cs,S(_),1)):D("",!0)]))),128))]),Is])])):D("",!0)]),Ms,js,P.value?(m(),b("div",Ls,[t("div",Es,[t("div",Ps,[t("div",Bs,[(m(!0),b(A,null,H(P.value,(_,$)=>(m(),b("div",{class:"col col-1-2 col-2-2 col-4-3 px-3",key:$},[I(Re,{product:_,"img-class":"product-description-card-img","card-bg-color":"#FBF9F9","star-color":"text-primary"},null,8,["product"])]))),128))])])])])):D("",!0)]))]),I(f(Oe),{active:f(p).isLoading,"can-cancel":!1,color:"#0089A7"},null,8,["active"]),I(Pt,{ref_key:"imageModal",ref:s},null,512)],64)}}};export{Js as default};
