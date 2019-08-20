(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{122:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),o=r.a.createContext({}),c=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=c(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var l="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=function(e){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),l=c(t),p=n,u=l[o+"."+p]||l[p]||b[p]||a;return t?r.a.createElement(u,Object.assign({},i,{components:t})):r.a.createElement(u,i)};function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i[l]="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return c}),n.d(t,"rightToc",function(){return i}),n.d(t,"default",function(){return p});n(0);var a=n(122);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c={id:"events-reference",title:"Reference",sidebar_label:"Events Reference"},i=[{value:"Event Handling",id:"event-handling",children:[]}],l={rightToc:i},b="wrapper";function p(e){var t=e.components,n=o(e,["components"]);return Object(a.b)(b,r({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"This is the group of functions intended for managing events activities.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The functions for handling these events should be defined in a client program: After sending the request to receive the event, the communication become a full-duplex bidirectional streams where the client can interact with the event without making any more requests.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"You should not handle any time consuming operation when handling these events because it will block the next event to be delivered.")),Object(a.b)("h2",{id:"event-handling"},Object(a.b)("inlineCode",{parentName:"h2"},"Event Handling")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Function"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Action"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("a",r({parentName:"td"},{href:"on-calculate"}),Object(a.b)("inlineCode",{parentName:"a"},"OnCalculate"))),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The event is called to manipulate a range of data in order to make calculatios")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("a",r({parentName:"td"},{href:"on-tick"}),Object(a.b)("inlineCode",{parentName:"a"},"OnTick"))),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The event when a price changes from previous price")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("a",r({parentName:"td"},{href:"on-trade"}),Object(a.b)("inlineCode",{parentName:"a"},"OnTrade"))),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The event is called every new trade")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("a",r({parentName:"td"},{href:"on-orderbook"}),Object(a.b)("inlineCode",{parentName:"a"},"OnOrderbook"))),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The event is called when the a change happen on the market depth")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("a",r({parentName:"td"},{href:"on-trade-transaction"}),Object(a.b)("inlineCode",{parentName:"a"},"OnTradeTransaction"))),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The event is called when the ",Object(a.b)("a",r({parentName:"td"},{href:"on-trade-transaction#ontradetransaction"}),Object(a.b)("inlineCode",{parentName:"a"},"OnTradeTransaction"))," event occurs to process a trade request execution results")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("a",r({parentName:"td"},{href:"on-position-change"}),Object(a.b)("inlineCode",{parentName:"a"},"OnPositionChange"))),Object(a.b)("td",r({parentName:"tr"},{align:null}),"The event is called when there are any change on the position")))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Events are streams that you have have listem, you can listen to one or many events. The primary advantage of streams is connection concurrency, i.e. the ability to interleave messages on a single connection.")),Object(a.b)("p",null,Object(a.b)("img",r({parentName:"p"},{src:"../../assets/conn_stream_frame_mapping.png",alt:"stream"}))))}p.isMDXComponent=!0}}]);