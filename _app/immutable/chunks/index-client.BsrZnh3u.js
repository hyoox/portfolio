import{S as A,y as $,z,A as b,B as G,C as w,U as v,D as O,g as h,q as B,E as H,F as V,G as J,H as Q,I as W,d as T,J as X,K as k,L as ee,P as Z,M as re,N as M,O as D,Q as ne,R as ie,V as C,W as te,X as se,Y as fe,i as F,Z as ue,_ as ae,$ as le,a0 as ce,a1 as oe,c as q,b as de}from"./runtime.B2ca0b_1.js";import{c as ve}from"./store.Lv4-fxlA.js";function E(e,r=null,s){if(typeof e!="object"||e===null||A in e)return e;const u=V(e);if(u!==$&&u!==z)return e;var t=new Map,c=J(e),I=b(0);c&&t.set("length",b(e.length));var y;return new Proxy(e,{defineProperty(l,n,i){(!("value"in i)||i.configurable===!1||i.enumerable===!1||i.writable===!1)&&G();var f=t.get(n);return f===void 0?(f=b(i.value),t.set(n,f)):w(f,E(i.value,y)),!0},deleteProperty(l,n){var i=t.get(n);if(i===void 0)n in l&&t.set(n,b(v));else{if(c&&typeof n=="string"){var f=t.get("length"),a=Number(n);Number.isInteger(a)&&a<f.v&&w(f,a)}w(i,v),U(I)}return!0},get(l,n,i){var _;if(n===A)return e;var f=t.get(n),a=n in l;if(f===void 0&&(!a||(_=O(l,n))!=null&&_.writable)&&(f=b(E(a?l[n]:v,y)),t.set(n,f)),f!==void 0){var o=h(f);return o===v?void 0:o}return Reflect.get(l,n,i)},getOwnPropertyDescriptor(l,n){var i=Reflect.getOwnPropertyDescriptor(l,n);if(i&&"value"in i){var f=t.get(n);f&&(i.value=h(f))}else if(i===void 0){var a=t.get(n),o=a==null?void 0:a.v;if(a!==void 0&&o!==v)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return i},has(l,n){var o;if(n===A)return!0;var i=t.get(n),f=i!==void 0&&i.v!==v||Reflect.has(l,n);if(i!==void 0||B!==null&&(!f||(o=O(l,n))!=null&&o.writable)){i===void 0&&(i=b(f?E(l[n],y):v),t.set(n,i));var a=h(i);if(a===v)return!1}return f},set(l,n,i,f){var x;var a=t.get(n),o=n in l;if(c&&n==="length")for(var _=i;_<a.v;_+=1){var p=t.get(_+"");p!==void 0?w(p,v):_ in l&&(p=b(v),t.set(_+"",p))}a===void 0?(!o||(x=O(l,n))!=null&&x.writable)&&(a=b(void 0),w(a,E(i,y)),t.set(n,a)):(o=a.v!==v,w(a,E(i,y)));var P=Reflect.getOwnPropertyDescriptor(l,n);if(P!=null&&P.set&&P.set.call(f,i),!o){if(c&&typeof n=="string"){var N=t.get("length"),g=Number(n);Number.isInteger(g)&&g>=N.v&&w(N,g+1)}U(I)}return!0},ownKeys(l){h(I);var n=Reflect.ownKeys(l).filter(a=>{var o=t.get(a);return o===void 0||o.v!==v});for(var[i,f]of t)f.v!==v&&!(i in l)&&n.push(i);return n},setPrototypeOf(){H()}})}function U(e,r=1){w(e,e.v+r)}function _e(e){throw new Error("lifecycle_outside_component")}function Y(e,r){return e===r||(e==null?void 0:e[A])===r}function ge(e={},r,s,u){return Q(()=>{var t,c;return W(()=>{t=c,c=[],T(()=>{e!==s(...c)&&(r(e,...c),t&&Y(s(...t),e)&&r(null,...t))})}),()=>{X(()=>{c&&Y(s(...c),e)&&r(null,...c)})}}),e}const pe={get(e,r){if(!e.exclude.includes(r))return h(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,s){return r in e.special||(e.special[r]=be({get[r](){return e.props[r]}},r,Z)),e.special[r](s),M(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),M(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Ie(e,r){return new Proxy({props:e,exclude:r,special:{},version:b(0)},pe)}const he={get(e,r){let s=e.props.length;for(;s--;){let u=e.props[s];if(D(u)&&(u=u()),typeof u=="object"&&u!==null&&r in u)return u[r]}},set(e,r,s){let u=e.props.length;for(;u--;){let t=e.props[u];D(t)&&(t=t());const c=O(t,r);if(c&&c.set)return c.set(s),!0}return!1},getOwnPropertyDescriptor(e,r){let s=e.props.length;for(;s--;){let u=e.props[s];if(D(u)&&(u=u()),typeof u=="object"&&u!==null&&r in u){const t=O(u,r);return t&&!t.configurable&&(t.configurable=!0),t}}},has(e,r){for(let s of e.props)if(D(s)&&(s=s()),s!=null&&r in s)return!0;return!1},ownKeys(e){const r=[];for(let s of e.props){D(s)&&(s=s());for(const u in s)r.includes(u)||r.push(u)}return r}};function Re(...e){return new Proxy({props:e},he)}function j(e){for(var r=B,s=B;r!==null&&!(r.f&(ne|ie));)r=r.parent;try{return C(r),e()}finally{C(s)}}function be(e,r,s,u){var K;var t=(s&te)!==0,c=(s&se)!==0,I=(s&fe)!==0,y=(s&ce)!==0,l=!1,n;I?[n,l]=ve(()=>e[r]):n=e[r];var i=(K=O(e,r))==null?void 0:K.set,f=u,a=!0,o=!1,_=()=>(o=!0,a&&(a=!1,y?f=T(u):f=u),f);n===void 0&&u!==void 0&&(i&&c&&k(),n=_(),i&&i(n));var p;if(c)p=()=>{var d=e[r];return d===void 0?_():(a=!0,o=!1,d)};else{var P=j(()=>(t?F:ue)(()=>e[r]));P.f|=ee,p=()=>{var d=h(P);return d!==void 0&&(f=void 0),d===void 0?f:d}}if(!(s&Z))return p;if(i){var N=e.$$legacy;return function(d,R){return arguments.length>0?((!c||!R||N||l)&&i(R?p():d),d):p()}}var g=!1,x=!1,L=oe(n),m=j(()=>F(()=>{var d=p(),R=h(L),S=ae;return g||d===void 0&&S.f&le?(g=!1,x=!0,R):(x=!1,L.v=d)}));return t||(m.equals=re),function(d,R){if(arguments.length>0){const S=R?h(m):c&&I?E(d):d;return m.equals(S)||(g=!0,w(L,S),o&&f!==void 0&&(f=S),T(()=>h(m))),d}return h(m)}}function Ee(e){q===null&&_e(),q.l!==null?we(q).m.push(e):de(()=>{const r=T(e);if(typeof r=="function")return r})}function we(e){var r=e.l;return r.u??(r.u={a:[],b:[],m:[]})}export{E as a,ge as b,Ie as l,Ee as o,be as p,Re as s};
