module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/better-wnkn/",n(n.s="qVkA")}({HteQ:function(t,e){t.exports=require("preact")},Y3FI:function(t,e,n){"use strict";n.r(e),n.d(e,"subscribers",(function(){return h})),n.d(e,"getCurrentUrl",(function(){return b})),n.d(e,"route",(function(){return y})),n.d(e,"Router",(function(){return k})),n.d(e,"Route",(function(){return _})),n.d(e,"Link",(function(){return w})),n.d(e,"exec",(function(){return u}));var r=n("HteQ"),o={};function i(t,e){for(var n in e)t[n]=e[n];return t}function u(t,e,n){var r,i=/(?:\?([^#]*))?(#.*)?$/,u=t.match(i),c={};if(u&&u[1])for(var a=u[1].split("&"),f=0;f<a.length;f++){var s=a[f].split("=");c[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}t=l(t.replace(i,"")),e=l(e||"");for(var p=Math.max(t.length,e.length),h=0;h<p;h++)if(e[h]&&":"===e[h].charAt(0)){var d=e[h].replace(/(^:|[+*?]+$)/g,""),b=(e[h].match(/[+*?]+$/)||o)[0]||"",y=~b.indexOf("+"),m=~b.indexOf("*"),v=t[h]||"";if(!v&&!m&&(b.indexOf("?")<0||y)){r=!1;break}if(c[d]=decodeURIComponent(v),y||m){c[d]=t.slice(h).map(decodeURIComponent).join("/");break}}else if(e[h]!==t[h]){r=!1;break}return(!0===n.default||!1!==r)&&c}function c(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function a(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,l(e).map(f).join(""));var e}(t),t.props}function l(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function f(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var s=null,p=[],h=[],d={};function b(){var t;return""+((t=s&&s.location?s.location:s&&s.getCurrentLocation?s.getCurrentLocation():"undefined"!=typeof location?location:d).pathname||"")+(t.search||"")}function y(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=p.length;e--;)if(p[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),s&&s[e]?s[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),m(t)}function m(t){for(var e=!1,n=0;n<p.length;n++)!0===p[n].routeTo(t)&&(e=!0);for(var r=h.length;r--;)h[r](t);return e}function v(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return y(e)}}function g(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return v(t.currentTarget||t.target||this),O(t)}function O(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function j(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(v(e))return O(t)}}while(e=e.parentNode)}}var x=!1;var k=function(t){function e(e){t.call(this,e),e.history&&(s=e.history),this.state={url:e.url||b()},x||("function"==typeof addEventListener&&(s||addEventListener("popstate",(function(){m(b())})),addEventListener("click",j)),x=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(r.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){p.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;s&&(this.unlisten=s.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),p.splice(p.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(a).sort(c).map((function(t){var o=u(e,t.props.path,t.props);if(o){if(!1!==n){var c={url:e,matches:o};return i(c,o),delete c.ref,delete c.key,Object(r.cloneElement)(t,c)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,o=t.onChange,i=e.url,u=this.getMatchingChildren(Object(r.toChildArray)(n),i,!0),c=u[0]||null,a=this.previousUrl;return i!==a&&(this.previousUrl=i,"function"==typeof o&&o({router:this,url:i,previous:a,active:u,current:c})),c},e}(r.Component),w=function(t){return Object(r.createElement)("a",i({onClick:g},t))},_=function(t){return Object(r.createElement)(t.component,t)};k.subscribers=h,k.getCurrentUrl=b,k.route=y,k.Router=k,k.Route=_,k.Link=w,k.exec=u,e.default=k},"ox/y":function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n("HteQ"),u=n("Y3FI");function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==r(e)&&"function"!=typeof e?t:e}var l=e.Match=function(t){function e(){var n,r;c(this,e);for(var o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];return n=r=a(this,t.call.apply(t,[this].concat(i))),r.update=function(t){r.nextUrl=t,r.setState({})},a(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+r(e));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){u.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){u.subscribers.splice(u.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,u.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:n,matches:!1!==(0,u.exec)(n,t.path,{})})},e}(i.Component),f=function(t){var e=t.activeClassName,n=t.path,r=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["activeClassName","path"]);return(0,i.h)(l,{path:n||r.href},(function(t){var n=t.matches;return(0,i.h)(u.Link,o({},r,{class:[r.class||r.className,n&&e].filter(Boolean).join(" ")}))}))};e.Link=f,e.default=l,l.Link=f},qVkA:function(t,e,n){"use strict";n.r(e);var r=n("HteQ"),o=n("Y3FI"),i="/".concat("better-wnkn");function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(t,e){if(e&&("object"===u(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&l(t,e)}(u,t);var e,n,r,i=f(u);function u(){return c(this,u),i.apply(this,arguments)}return e=u,(n=[{key:"componentWillMount",value:function(){Object(o.route)(this.props.to,!0)}},{key:"render",value:function(){return null}}])&&a(e.prototype,n),r&&a(e,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(r.Component),d=function(t){t.children;return Object(r.h)(h,{to:"/login"})},b="home__uRcqa",y=function(){return Object(r.h)(d,null,Object(r.h)("div",{class:b},Object(r.h)("h1",null,"Home"),Object(r.h)("p",null,"This is the Home component.")))},m=function(){return Object(r.h)("div",{class:"static flex flex-col w-1/2 mx-auto bg-white rounded-xl items-center p-8 space-y-4"},Object(r.h)("h1",{class:"bold"},"Login"),Object(r.h)("form",{class:"flex flex-col space-y-4"},Object(r.h)("label",{class:"block space-x-4"},Object(r.h)("span",{class:"block text-sm font-medium text-slate-700"},"Token"),Object(r.h)("input",{type:"text",class:"mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "})),Object(r.h)("button",{class:"rounded-xl w-1/2 mx-auto bg-violet-500 hover:bg-violet-400 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300"},"Log in")))},v=n("ox/y"),g="notfound__Ecgkh",O=function(){return Object(r.h)("div",{class:g},Object(r.h)("h1",null,"Error 404"),Object(r.h)("p",null,"That page doesn't exist."),Object(r.h)(v.Link,{href:"/"},Object(r.h)("h4",null,"Back to Home")))},j="home__I8ztH",x=function(){return Object(r.h)(d,null,Object(r.h)("div",{class:j},Object(r.h)("h1",null,"Review"),Object(r.h)("p",null,"This is the Review component.")))},k=function(){return Object(r.h)("div",{id:"preact_root"},Object(r.h)(o.Router,null,Object(r.h)(o.Route,{path:"".concat(i,"/"),component:y}),Object(r.h)(o.Route,{path:"".concat(i,"/login "),component:m}),Object(r.h)(o.Route,{path:"".concat(i,"/review"),component:x}),Object(r.h)(O,{default:!0})))};e.default=k}});
//# sourceMappingURL=ssr-bundle.js.map