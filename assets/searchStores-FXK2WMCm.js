import{Y as lt,r as C,p as ut,z as ft,A as dt}from"./index-rXVu0dOo.js";function S(e){return Array.isArray?Array.isArray(e):st(e)==="[object Array]"}const gt=1/0;function pt(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-gt?"-0":t}function Mt(e){return e==null?"":pt(e)}function E(e){return typeof e=="string"}function tt(e){return typeof e=="number"}function mt(e){return e===!0||e===!1||xt(e)&&st(e)=="[object Boolean]"}function et(e){return typeof e=="object"}function xt(e){return et(e)&&e!==null}function m(e){return e!=null}function K(e){return!e.trim().length}function st(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const yt="Incorrect 'index' type",Et=e=>`Invalid value for key ${e}`,_t=e=>`Pattern length exceeds max of ${e}.`,It=e=>`Missing ${e} property in key`,St=e=>`Property 'weight' in key '${e}' must be a positive integer`,Q=Object.prototype.hasOwnProperty;class At{constructor(t){this._keys=[],this._keyMap={};let s=0;t.forEach(n=>{let r=nt(n);this._keys.push(r),this._keyMap[r.id]=r,s+=r.weight}),this._keys.forEach(n=>{n.weight/=s})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function nt(e){let t=null,s=null,n=null,r=1,i=null;if(E(e)||S(e))n=e,t=X(e),s=B(e);else{if(!Q.call(e,"name"))throw new Error(It("name"));const c=e.name;if(n=c,Q.call(e,"weight")&&(r=e.weight,r<=0))throw new Error(St(c));t=X(c),s=B(c),i=e.getFn}return{path:t,id:s,weight:r,src:n,getFn:i}}function X(e){return S(e)?e:e.split(".")}function B(e){return S(e)?e.join("."):e}function wt(e,t){let s=[],n=!1;const r=(i,c,o)=>{if(m(i))if(!c[o])s.push(i);else{let a=c[o];const h=i[a];if(!m(h))return;if(o===c.length-1&&(E(h)||tt(h)||mt(h)))s.push(Mt(h));else if(S(h)){n=!0;for(let l=0,f=h.length;l<f;l+=1)r(h[l],c,o+1)}else c.length&&r(h,c,o+1)}};return r(e,E(t)?t.split("."):t,0),n?s:s[0]}const Lt={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},bt={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},Rt={location:0,threshold:.6,distance:100},vt={useExtendedSearch:!1,getFn:wt,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var u={...bt,...Lt,...Rt,...vt};const $t=/[^ ]+/g;function Ot(e=1,t=3){const s=new Map,n=Math.pow(10,t);return{get(r){const i=r.match($t).length;if(s.has(i))return s.get(i);const c=1/Math.pow(i,.5*e),o=parseFloat(Math.round(c*n)/n);return s.set(i,o),o},clear(){s.clear()}}}class V{constructor({getFn:t=u.getFn,fieldNormWeight:s=u.fieldNormWeight}={}){this.norm=Ot(s,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,E(this.docs[0])?this.docs.forEach((t,s)=>{this._addString(t,s)}):this.docs.forEach((t,s)=>{this._addObject(t,s)}),this.norm.clear())}add(t){const s=this.size();E(t)?this._addString(t,s):this._addObject(t,s)}removeAt(t){this.records.splice(t,1);for(let s=t,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(t,s){return t[this._keysMap[s]]}size(){return this.records.length}_addString(t,s){if(!m(t)||K(t))return;let n={v:t,i:s,n:this.norm.get(t)};this.records.push(n)}_addObject(t,s){let n={i:s,$:{}};this.keys.forEach((r,i)=>{let c=r.getFn?r.getFn(t):this.getFn(t,r.path);if(m(c)){if(S(c)){let o=[];const a=[{nestedArrIndex:-1,value:c}];for(;a.length;){const{nestedArrIndex:h,value:l}=a.pop();if(m(l))if(E(l)&&!K(l)){let f={v:l,i:h,n:this.norm.get(l)};o.push(f)}else S(l)&&l.forEach((f,d)=>{a.push({nestedArrIndex:d,value:f})})}n.$[i]=o}else if(E(c)&&!K(c)){let o={v:c,n:this.norm.get(c)};n.$[i]=o}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function rt(e,t,{getFn:s=u.getFn,fieldNormWeight:n=u.fieldNormWeight}={}){const r=new V({getFn:s,fieldNormWeight:n});return r.setKeys(e.map(nt)),r.setSources(t),r.create(),r}function kt(e,{getFn:t=u.getFn,fieldNormWeight:s=u.fieldNormWeight}={}){const{keys:n,records:r}=e,i=new V({getFn:t,fieldNormWeight:s});return i.setKeys(n),i.setIndexRecords(r),i}function T(e,{errors:t=0,currentLocation:s=0,expectedLocation:n=0,distance:r=u.distance,ignoreLocation:i=u.ignoreLocation}={}){const c=t/e.length;if(i)return c;const o=Math.abs(n-s);return r?c+o/r:o?1:c}function Nt(e=[],t=u.minMatchCharLength){let s=[],n=-1,r=-1,i=0;for(let c=e.length;i<c;i+=1){let o=e[i];o&&n===-1?n=i:!o&&n!==-1&&(r=i-1,r-n+1>=t&&s.push([n,r]),n=-1)}return e[i-1]&&i-n>=t&&s.push([n,i-1]),s}const R=32;function Ct(e,t,s,{location:n=u.location,distance:r=u.distance,threshold:i=u.threshold,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,includeMatches:a=u.includeMatches,ignoreLocation:h=u.ignoreLocation}={}){if(t.length>R)throw new Error(_t(R));const l=t.length,f=e.length,d=Math.max(0,Math.min(n,f));let g=i,p=d;const M=o>1||a,_=M?Array(f):[];let I;for(;(I=e.indexOf(t,p))>-1;){let x=T(t,{currentLocation:I,expectedLocation:d,distance:r,ignoreLocation:h});if(g=Math.min(x,g),p=I+l,M){let A=0;for(;A<l;)_[I+A]=1,A+=1}}p=-1;let v=[],b=1,k=l+f;const ht=1<<l-1;for(let x=0;x<l;x+=1){let A=0,w=k;for(;A<w;)T(t,{errors:x,currentLocation:d+w,expectedLocation:d,distance:r,ignoreLocation:h})<=g?A=w:k=w,w=Math.floor((k-A)/2+A);k=w;let G=Math.max(1,d-w+1),j=c?f:Math.min(d+w,f)+l,$=Array(j+2);$[j+1]=(1<<x)-1;for(let y=j;y>=G;y-=1){let N=y-1,U=s[e.charAt(N)];if(M&&(_[N]=+!!U),$[y]=($[y+1]<<1|1)&U,x&&($[y]|=(v[y+1]|v[y])<<1|1|v[y+1]),$[y]&ht&&(b=T(t,{errors:x,currentLocation:N,expectedLocation:d,distance:r,ignoreLocation:h}),b<=g)){if(g=b,p=N,p<=d)break;G=Math.max(1,2*d-p)}}if(T(t,{errors:x+1,currentLocation:d,expectedLocation:d,distance:r,ignoreLocation:h})>g)break;v=$}const P={isMatch:p>=0,score:Math.max(.001,b)};if(M){const x=Nt(_,o);x.length?a&&(P.indices=x):P.isMatch=!1}return P}function Tt(e){let t={};for(let s=0,n=e.length;s<n;s+=1){const r=e.charAt(s);t[r]=(t[r]||0)|1<<n-s-1}return t}class it{constructor(t,{location:s=u.location,threshold:n=u.threshold,distance:r=u.distance,includeMatches:i=u.includeMatches,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:h=u.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:h},this.pattern=a?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(d,g)=>{this.chunks.push({pattern:d,alphabet:Tt(d),startIndex:g})},f=this.pattern.length;if(f>R){let d=0;const g=f%R,p=f-g;for(;d<p;)l(this.pattern.substr(d,R),d),d+=R;if(g){const M=f-R;l(this.pattern.substr(M),M)}}else l(this.pattern,0)}searchIn(t){const{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(t=t.toLowerCase()),this.pattern===t){let p={isMatch:!0,score:0};return n&&(p.indices=[[0,t.length-1]]),p}const{location:r,distance:i,threshold:c,findAllMatches:o,minMatchCharLength:a,ignoreLocation:h}=this.options;let l=[],f=0,d=!1;this.chunks.forEach(({pattern:p,alphabet:M,startIndex:_})=>{const{isMatch:I,score:v,indices:b}=Ct(t,p,M,{location:r+_,distance:i,threshold:c,findAllMatches:o,minMatchCharLength:a,includeMatches:n,ignoreLocation:h});I&&(d=!0),f+=v,I&&b&&(l=[...l,...b])});let g={isMatch:d,score:d?f/this.chunks.length:1};return d&&n&&(g.indices=l),g}}class L{constructor(t){this.pattern=t}static isMultiMatch(t){return J(t,this.multiRegex)}static isSingleMatch(t){return J(t,this.singleRegex)}search(){}}function J(e,t){const s=e.match(t);return s?s[1]:null}class Ft extends L{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const s=t===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Pt extends L{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const n=t.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class jt extends L{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const s=t.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Kt extends L{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const s=!t.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class Bt extends L{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const s=t.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class Dt extends L{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const s=!t.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class ct extends L{constructor(t,{location:s=u.location,threshold:n=u.threshold,distance:r=u.distance,includeMatches:i=u.includeMatches,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:h=u.ignoreLocation}={}){super(t),this._bitapSearch=new it(t,{location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class ot extends L{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let s=0,n;const r=[],i=this.pattern.length;for(;(n=t.indexOf(this.pattern,s))>-1;)s=n+i,r.push([n,s-1]);const c=!!r.length;return{isMatch:c,score:c?0:1,indices:r}}}const D=[Ft,ot,jt,Kt,Dt,Bt,Pt,ct],Z=D.length,Wt=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,zt="|";function Ht(e,t={}){return e.split(zt).map(s=>{let n=s.trim().split(Wt).filter(i=>i&&!!i.trim()),r=[];for(let i=0,c=n.length;i<c;i+=1){const o=n[i];let a=!1,h=-1;for(;!a&&++h<Z;){const l=D[h];let f=l.isMultiMatch(o);f&&(r.push(new l(f,t)),a=!0)}if(!a)for(h=-1;++h<Z;){const l=D[h];let f=l.isSingleMatch(o);if(f){r.push(new l(f,t));break}}}return r})}const Yt=new Set([ct.type,ot.type]);class Vt{constructor(t,{isCaseSensitive:s=u.isCaseSensitive,includeMatches:n=u.includeMatches,minMatchCharLength:r=u.minMatchCharLength,ignoreLocation:i=u.ignoreLocation,findAllMatches:c=u.findAllMatches,location:o=u.location,threshold:a=u.threshold,distance:h=u.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:r,findAllMatches:c,ignoreLocation:i,location:o,threshold:a,distance:h},this.pattern=s?t:t.toLowerCase(),this.query=Ht(this.pattern,this.options)}static condition(t,s){return s.useExtendedSearch}searchIn(t){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;t=r?t:t.toLowerCase();let i=0,c=[],o=0;for(let a=0,h=s.length;a<h;a+=1){const l=s[a];c.length=0,i=0;for(let f=0,d=l.length;f<d;f+=1){const g=l[f],{isMatch:p,indices:M,score:_}=g.search(t);if(p){if(i+=1,o+=_,n){const I=g.constructor.type;Yt.has(I)?c=[...c,...M]:c.push(M)}}else{o=0,i=0,c.length=0;break}}if(i){let f={isMatch:!0,score:o/i};return n&&(f.indices=c),f}}return{isMatch:!1,score:1}}}const W=[];function Gt(...e){W.push(...e)}function z(e,t){for(let s=0,n=W.length;s<n;s+=1){let r=W[s];if(r.condition(e,t))return new r(e,t)}return new it(e,t)}const F={AND:"$and",OR:"$or"},H={PATH:"$path",PATTERN:"$val"},Y=e=>!!(e[F.AND]||e[F.OR]),Ut=e=>!!e[H.PATH],Qt=e=>!S(e)&&et(e)&&!Y(e),q=e=>({[F.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function at(e,t,{auto:s=!0}={}){const n=r=>{let i=Object.keys(r);const c=Ut(r);if(!c&&i.length>1&&!Y(r))return n(q(r));if(Qt(r)){const a=c?r[H.PATH]:i[0],h=c?r[H.PATTERN]:r[a];if(!E(h))throw new Error(Et(a));const l={keyId:B(a),pattern:h};return s&&(l.searcher=z(h,t)),l}let o={children:[],operator:i[0]};return i.forEach(a=>{const h=r[a];S(h)&&h.forEach(l=>{o.children.push(n(l))})}),o};return Y(e)||(e=q(e)),n(e)}function Xt(e,{ignoreFieldNorm:t=u.ignoreFieldNorm}){e.forEach(s=>{let n=1;s.matches.forEach(({key:r,norm:i,score:c})=>{const o=r?r.weight:null;n*=Math.pow(c===0&&o?Number.EPSILON:c,(o||1)*(t?1:i))}),s.score=n})}function Jt(e,t){const s=e.matches;t.matches=[],m(s)&&s.forEach(n=>{if(!m(n.indices)||!n.indices.length)return;const{indices:r,value:i}=n;let c={indices:r,value:i};n.key&&(c.key=n.key.src),n.idx>-1&&(c.refIndex=n.idx),t.matches.push(c)})}function Zt(e,t){t.score=e.score}function qt(e,t,{includeMatches:s=u.includeMatches,includeScore:n=u.includeScore}={}){const r=[];return s&&r.push(Jt),n&&r.push(Zt),e.map(i=>{const{idx:c}=i,o={item:t[c],refIndex:c};return r.length&&r.forEach(a=>{a(i,o)}),o})}class O{constructor(t,s={},n){this.options={...u,...s},this.options.useExtendedSearch,this._keyStore=new At(this.options.keys),this.setCollection(t,n)}setCollection(t,s){if(this._docs=t,s&&!(s instanceof V))throw new Error(yt);this._myIndex=s||rt(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){m(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const s=[];for(let n=0,r=this._docs.length;n<r;n+=1){const i=this._docs[n];t(i,n)&&(this.removeAt(n),n-=1,r-=1,s.push(i))}return s}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:s=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:i,sortFn:c,ignoreFieldNorm:o}=this.options;let a=E(t)?E(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return Xt(a,{ignoreFieldNorm:o}),i&&a.sort(c),tt(s)&&s>-1&&(a=a.slice(0,s)),qt(a,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(t){const s=z(t,this.options),{records:n}=this._myIndex,r=[];return n.forEach(({v:i,i:c,n:o})=>{if(!m(i))return;const{isMatch:a,score:h,indices:l}=s.searchIn(i);a&&r.push({item:i,idx:c,matches:[{score:h,value:i,norm:o,indices:l}]})}),r}_searchLogical(t){const s=at(t,this.options),n=(o,a,h)=>{if(!o.children){const{keyId:f,searcher:d}=o,g=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(a,f),searcher:d});return g&&g.length?[{idx:h,item:a,matches:g}]:[]}const l=[];for(let f=0,d=o.children.length;f<d;f+=1){const g=o.children[f],p=n(g,a,h);if(p.length)l.push(...p);else if(o.operator===F.AND)return[]}return l},r=this._myIndex.records,i={},c=[];return r.forEach(({$:o,i:a})=>{if(m(o)){let h=n(s,o,a);h.length&&(i[a]||(i[a]={idx:a,item:o,matches:[]},c.push(i[a])),h.forEach(({matches:l})=>{i[a].matches.push(...l)}))}}),c}_searchObjectList(t){const s=z(t,this.options),{keys:n,records:r}=this._myIndex,i=[];return r.forEach(({$:c,i:o})=>{if(!m(c))return;let a=[];n.forEach((h,l)=>{a.push(...this._findMatches({key:h,value:c[l],searcher:s}))}),a.length&&i.push({idx:o,item:c,matches:a})}),i}_findMatches({key:t,value:s,searcher:n}){if(!m(s))return[];let r=[];if(S(s))s.forEach(({v:i,i:c,n:o})=>{if(!m(i))return;const{isMatch:a,score:h,indices:l}=n.searchIn(i);a&&r.push({score:h,key:t,value:i,idx:c,norm:o,indices:l})});else{const{v:i,n:c}=s,{isMatch:o,score:a,indices:h}=n.searchIn(i);o&&r.push({score:a,key:t,value:i,norm:c,indices:h})}return r}}O.version="7.0.0";O.createIndex=rt;O.parseIndex=kt;O.config=u;O.parseQuery=at;Gt(Vt);const te="https://vue3-course-api.hexschool.io",ee="vue-ben0588",re=lt("searchStore",()=>{const{showAlert:e}=dt(),t={keys:["title","category","subcategory"]},s=new O([],t),n=C(""),r=C([]),i=C([]),c=C(!1),o=async()=>{try{const d=`${te}/v2/api/${ee}/products/all`,g=await ft.get(d);i.value=g.data.products,s.setCollection(g.data.products)}catch(d){e({title:`${d}`,text:"取得商品資料失敗，請聯繫網站提供者",icon:"error",confirmButtonText:"確認",confirmButtonColor:"#000000",allowEscapeKey:!1,allowOutsideClick:!1})}};function a(d,g){let p;const M=(..._)=>{p&&clearTimeout(p),p=setTimeout(()=>d.apply(this,_),g)};return M.cancel=()=>{clearTimeout(p)},M}const h=a(()=>{r.value=s.search(n.value),c.value=!0},2e3),l=()=>{h.cancel(),r.value=s.search(n.value),c.value=!0},f=d=>{n.value=d.target.value,h()};return ut(()=>{o()}),{originProducts:i,isSearch:c,searchText:n,productsList:r,handleSearch:l,handleInput:f}});export{re as u};
