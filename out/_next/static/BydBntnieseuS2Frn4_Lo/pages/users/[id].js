(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"3WjR":function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var r=e("ln6h"),o=e.n(r),u=e("vcXL"),a=e.n(u);function c(n,t){var e;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.a.awrap(a()(n,t).then((function(n){return n.json()})));case 3:return e=r.sent,r.abrupt("return",e);case 7:throw r.prev=7,r.t0=r.catch(0),new Error(r.t0.message);case 10:case"end":return r.stop()}}),null,null,[[0,7]])}},MszO:function(n,t,e){"use strict";e.r(t);var r=e("ln6h"),o=e.n(r),u=e("p0XB"),a=e.n(u);var c=e("hfKm"),i=e.n(c);function s(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),i()(n,r.key,r)}}var p=e("XVgq"),l=e.n(p),f=e("Z7t5"),h=e.n(f);function v(n){return(v="function"===typeof h.a&&"symbol"===typeof l.a?function(n){return typeof n}:function(n){return n&&"function"===typeof h.a&&n.constructor===h.a&&n!==h.a.prototype?"symbol":typeof n})(n)}function y(n){return(y="function"===typeof h.a&&"symbol"===v(l.a)?function(n){return v(n)}:function(n){return n&&"function"===typeof h.a&&n.constructor===h.a&&n!==h.a.prototype?"symbol":v(n)})(n)}function w(n,t){return!t||"object"!==y(t)&&"function"!==typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}var b=e("Bhuq"),m=e.n(b),d=e("TRZx"),_=e.n(d);function x(n){return(x=_.a?m.a:function(n){return n.__proto__||m()(n)})(n)}var E=e("SqZg"),g=e.n(E);function j(n,t){return(j=_.a||function(n,t){return n.__proto__=t,n})(n,t)}var T,R,X,q=e("q1tI"),k=e("apO0"),N=q.createElement,O=function(n){var t=n.item;return N("div",null,N("h1",null,"Detail for ",t.name),N("p",null,"ID: ",t.id))},S=e("3WjR"),D=q.createElement,I=function(n){function t(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),w(this,x(t).apply(this,arguments))}var e,r,o;return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=g()(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&j(n,t)}(t,n),e=t,(r=[{key:"render",value:function(){var n=this.props,t=n.item,e=n.errors;return e?D(k.a,{title:"Error | Next.js + TypeScript Example"},D("p",null,D("span",{style:{color:"red"}},"Error:")," ",e)):D(k.a,{title:"".concat(t?t.name:"User Detail"," | Next.js + TypeScript Example")},t&&D(O,{item:t}))}}])&&s(e.prototype,r),o&&s(e,o),t}(q.Component);X=function(n){var t,e,r;return o.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return t=n.query,u.prev=1,e=t.id,u.next=5,o.a.awrap(Object(S.a)("http://localhost:3000/api/users/".concat(a()(e)?e[0]:e)));case 5:return r=u.sent,u.abrupt("return",{item:r});case 9:return u.prev=9,u.t0=u.catch(1),u.abrupt("return",{errors:u.t0.message});case 12:case"end":return u.stop()}}),null,null,[[1,9]])},(R="getInitialProps")in(T=I)?i()(T,R,{value:X,enumerable:!0,configurable:!0,writable:!0}):T[R]=X;t.default=I},aRlh:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users/[id]",function(){return e("MszO")}])},vcXL:function(n,t,e){"use strict";var r=self.fetch.bind(self);n.exports=r,n.exports.default=n.exports}},[["aRlh",0,1]]]);