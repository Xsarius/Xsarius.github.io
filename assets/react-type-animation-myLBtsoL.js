import{r as g,a as J}from"./react-5fiyULV6.js";function Q(t,c,i,r){return new(i||(i=Promise))(function(e,o){function u(s){try{f(r.next(s))}catch(n){o(n)}}function a(s){try{f(r.throw(s))}catch(n){o(n)}}function f(s){var n;s.done?e(s.value):(n=s.value,n instanceof i?n:new i(function(d){d(n)})).then(u,a)}f((r=r.apply(t,c||[])).next())})}function _(t,c){var i,r,e,o,u={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(f){return function(s){return function(n){if(i)throw new TypeError("Generator is already executing.");for(;u;)try{if(i=1,r&&(e=2&n[0]?r.return:n[0]?r.throw||((e=r.return)&&e.call(r),0):r.next)&&!(e=e.call(r,n[1])).done)return e;switch(r=0,e&&(n=[2&n[0],e.value]),n[0]){case 0:case 1:e=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,r=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(e=u.trys,!((e=e.length>0&&e[e.length-1])||n[0]!==6&&n[0]!==2)){u=0;continue}if(n[0]===3&&(!e||n[1]>e[0]&&n[1]<e[3])){u.label=n[1];break}if(n[0]===6&&u.label<e[1]){u.label=e[1],e=n;break}if(e&&u.label<e[2]){u.label=e[2],u.ops.push(n);break}e[2]&&u.ops.pop(),u.trys.pop();continue}n=c.call(t,u)}catch(d){n=[6,d],r=0}finally{i=e=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([f,s])}}}function L(t){var c=typeof Symbol=="function"&&Symbol.iterator,i=c&&t[c],r=0;if(i)return i.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(c?"Object is not iterable.":"Symbol.iterator is not defined.")}function w(t,c){var i=typeof Symbol=="function"&&t[Symbol.iterator];if(!i)return t;var r,e,o=i.call(t),u=[];try{for(;(c===void 0||c-- >0)&&!(r=o.next()).done;)u.push(r.value)}catch(a){e={error:a}}finally{try{r&&!r.done&&(i=o.return)&&i.call(o)}finally{if(e)throw e.error}}return u}function x(t,c,i){if(i||arguments.length===2)for(var r,e=0,o=c.length;e<o;e++)!r&&e in c||(r||(r=Array.prototype.slice.call(c,0,e)),r[e]=c[e]);return t.concat(r||Array.prototype.slice.call(c))}function K(t,c,i,r,e){for(var o=[],u=5;u<arguments.length;u++)o[u-5]=arguments[u];return Q(this,void 0,void 0,function(){var a,f,s,n,d,h;return _(this,function(p){switch(p.label){case 0:p.trys.push([0,12,13,14]),a=L(o),f=a.next(),p.label=1;case 1:if(f.done)return[3,11];switch(s=f.value,typeof s){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,X(t,c,s,i,r,e)];case 3:return p.sent(),[3,10];case 4:return[4,U(s)];case 5:return p.sent(),[3,10];case 6:return[4,s.apply(void 0,x([t,c,i,r,e],w(o),!1))];case 7:return p.sent(),[3,10];case 8:return[4,s];case 9:p.sent(),p.label=10;case 10:return f=a.next(),[3,1];case 11:return[3,14];case 12:return n=p.sent(),d={error:n},[3,14];case 13:try{f&&!f.done&&(h=a.return)&&h.call(a)}finally{if(d)throw d.error}return[7];case 14:return[2]}})})}function X(t,c,i,r,e,o){return Q(this,void 0,void 0,function(){var u,a;return _(this,function(f){switch(f.label){case 0:return u=t.textContent||"",a=function(s,n){var d=w(n).slice(0);return x(x([],w(s),!1),[NaN],!1).findIndex(function(h,p){return d[p]!==h})}(u,i),[4,Y(t,x(x([],w($(u,c,a)),!1),w(Z(i,c,a)),!1),r,e,o)];case 1:return f.sent(),[2]}})})}function U(t){return Q(this,void 0,void 0,function(){return _(this,function(c){switch(c.label){case 0:return[4,new Promise(function(i){return setTimeout(i,t)})];case 1:return c.sent(),[2]}})})}function Y(t,c,i,r,e){return Q(this,void 0,void 0,function(){var o,u,a,f,s,n,d,h,p,A,F,N,I;return _(this,function(E){switch(E.label){case 0:if(o=c,e){for(u=0,a=1;a<c.length;a++)if(f=w([c[a-1],c[a]],2),s=f[0],(n=f[1]).length>s.length||n===""){u=a;break}o=c.slice(u,c.length)}E.label=1;case 1:E.trys.push([1,6,7,8]),d=L(function(G){var P,R,S,k,D,T,O;return _(this,function(b){switch(b.label){case 0:P=function(C){return _(this,function(M){switch(M.label){case 0:return[4,{op:function(q){return requestAnimationFrame(function(){return q.textContent=C})},opCode:function(q){var W=q.textContent||"";return C===""||W.length>C.length?"DELETE":"WRITING"}}];case 1:return M.sent(),[2]}})},b.label=1;case 1:b.trys.push([1,6,7,8]),R=L(G),S=R.next(),b.label=2;case 2:return S.done?[3,5]:(k=S.value,[5,P(k)]);case 3:b.sent(),b.label=4;case 4:return S=R.next(),[3,2];case 5:return[3,8];case 6:return D=b.sent(),T={error:D},[3,8];case 7:try{S&&!S.done&&(O=R.return)&&O.call(R)}finally{if(T)throw T.error}return[7];case 8:return[2]}})}(o)),h=d.next(),E.label=2;case 2:return h.done?[3,5]:(p=h.value,A=p.opCode(t)==="WRITING"?i+i*(Math.random()-.5):r+r*(Math.random()-.5),p.op(t),[4,U(A)]);case 3:E.sent(),E.label=4;case 4:return h=d.next(),[3,2];case 5:return[3,8];case 6:return F=E.sent(),N={error:F},[3,8];case 7:try{h&&!h.done&&(I=d.return)&&I.call(d)}finally{if(N)throw N.error}return[7];case 8:return[2]}})})}function Z(t,c,i){var r,e;return i===void 0&&(i=0),_(this,function(o){switch(o.label){case 0:r=c(t),e=r.length,o.label=1;case 1:return i<e?[4,r.slice(0,++i).join("")]:[3,3];case 2:return o.sent(),[3,1];case 3:return[2]}})}function $(t,c,i){var r,e;return i===void 0&&(i=0),_(this,function(o){switch(o.label){case 0:r=c(t),e=r.length,o.label=1;case 1:return e>i?[4,r.slice(0,--e).join("")]:[3,3];case 2:return o.sent(),[3,1];case 3:return[2]}})}var ee="index-module_type__E-SaG";(function(t,c){c===void 0&&(c={});var i=c.insertAt;if(t&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",i==="top"&&r.firstChild?r.insertBefore(e,r.firstChild):r.appendChild(e),e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var te=g.memo(g.forwardRef(function(t,c){var i=t.sequence,r=t.repeat,e=t.className,o=t.speed,u=o===void 0?40:o,a=t.deletionSpeed,f=t.omitDeletionAnimation,s=f!==void 0&&f,n=t.preRenderFirstString,d=n!==void 0&&n,h=t.wrapper,p=h===void 0?"span":h,A=t.splitter,F=A===void 0?function(l){return x([],w(l),!1)}:A,N=t.cursor,I=N===void 0||N,E=t.style,G=function(l,y){var m={};for(var v in l)Object.prototype.hasOwnProperty.call(l,v)&&y.indexOf(v)<0&&(m[v]=l[v]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function"){var j=0;for(v=Object.getOwnPropertySymbols(l);j<v.length;j++)y.indexOf(v[j])<0&&Object.prototype.propertyIsEnumerable.call(l,v[j])&&(m[v[j]]=l[v[j]])}return m}(t,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),P=G["aria-label"],R=G["aria-hidden"],S=G.role;a||(a=u);var k=new Array(2).fill(40);[u,a].forEach(function(l,y){switch(typeof l){case"number":k[y]=Math.abs(l-100);break;case"object":var m=l.type,v=l.value;if(typeof v!="number")break;m==="keyStrokeDelayInMs"&&(k[y]=v)}});var D,T,O,b,C,M,q=k[0],W=k[1],B=function(l,y){y===void 0&&(y=null);var m=g.useRef(y);return g.useEffect(function(){l&&(typeof l=="function"?l(m.current):l.current=m.current)},[l]),m}(c),z=ee;D=e?"".concat(I?z+" ":"").concat(e):I?z:"",T=g.useRef(function(){var l,y=i;r===1/0?l=K:typeof r=="number"&&(y=Array(1+r).fill(i).flat());var m=l?x(x([],w(y),!1),[l],!1):x([],w(y),!1);return K.apply(void 0,x([B.current,F,q,W,s],w(m),!1)),function(){B.current}}),O=g.useRef(),b=g.useRef(!1),C=g.useRef(!1),M=w(g.useState(0),2)[1],b.current&&(C.current=!0),g.useEffect(function(){return b.current||(O.current=T.current(),b.current=!0),M(function(l){return l+1}),function(){C.current&&O.current&&O.current()}},[]);var V=p,H=d?i.find(function(l){return typeof l=="string"})||"":null;return J.createElement(V,{"aria-hidden":R,"aria-label":P,role:S,style:E,className:D,children:P?J.createElement("span",{"aria-hidden":"true",ref:B,children:H}):H,ref:P?void 0:B})}),function(t,c){return!0});export{te as m};
