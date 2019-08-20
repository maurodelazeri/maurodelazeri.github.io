(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",function(){return i}),a.d(t,"rightToc",function(){return l}),a.d(t,"default",function(){return p});a(0);var n=a(122);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i={id:"trading-reference",title:"Reference",sidebar_label:"Trading Reference"},l=[{value:"Reference",id:"reference",children:[]},{value:"Trade",id:"trade",children:[]},{value:"Orders",id:"orders",children:[]},{value:"Positions",id:"positions",children:[]},{value:"Deals",id:"deals",children:[]}],o={rightToc:l},c="wrapper";function p(e){var t=e.components,a=b(e,["components"]);return Object(n.b)(c,r({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"This is the group of functions intended for managing trading activities.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Before you proceed to study the trade functions of the platform, you must have a clear understanding of the basic terms: order, deal and position:")),Object(n.b)("p",null,"An ",Object(n.b)("strong",{parentName:"p"},"order")," is an instruction given to a broker to ",Object(n.b)("strong",{parentName:"p"},"buy")," or ",Object(n.b)("strong",{parentName:"p"},"sell")," a financial instrument. There are two main types of orders: ",Object(n.b)("strong",{parentName:"p"},"Market")," and ",Object(n.b)("strong",{parentName:"p"},"Pending"),". In addition, there are special ",Object(n.b)("strong",{parentName:"p"},"Take Profit")," and ",Object(n.b)("strong",{parentName:"p"},"Stop Loss")," levels."),Object(n.b)("p",null,"A ",Object(n.b)("strong",{parentName:"p"},"deal")," is the commercial exchange (buying or selling) of a financial security. ",Object(n.b)("strong",{parentName:"p"},"Buying")," is executed at the demand price (",Object(n.b)("strong",{parentName:"p"},"Ask"),"), and ",Object(n.b)("strong",{parentName:"p"},"Sell")," is performed at the supply price (",Object(n.b)("strong",{parentName:"p"},"Bid"),"). A ",Object(n.b)("strong",{parentName:"p"},"deal")," can be opened as a result of market order execution or pending order triggering. Note that in some cases, execution of an order can result in ",Object(n.b)("strong",{parentName:"p"},"several deals"),"."),Object(n.b)("p",null,"A ",Object(n.b)("strong",{parentName:"p"},"position")," is a trade obligation, i.e. the number of bought or sold of a financial instrument. A long position is financial security bought expecting the security price go higher. A short position is an obligation to supply a security expecting the price will fall in future."),Object(n.b)("h2",{id:"reference"},"Reference"),Object(n.b)("h2",{id:"trade"},Object(n.b)("inlineCode",{parentName:"h2"},"Trade")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Function"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Action"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"trades.md#buy"}),Object(n.b)("inlineCode",{parentName:"a"},"Buy"))),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Places a market order request to buy certain volume. It will execute immediately")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"trades.md#sell"}),Object(n.b)("inlineCode",{parentName:"a"},"Sell"))),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Places a market order request to sell certain volume. It will execute immediately")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"trades.md#buystop"}),Object(n.b)("inlineCode",{parentName:"a"},"BuyLimit"))),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Places the pending order of Buy Limit type (buy at the price lower than current market price)")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"trades.md#selllimit"}),Object(n.b)("inlineCode",{parentName:"a"},"SellLimit"))),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Places the pending order of Sell Limit type (sell at the price higher than current market price)")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"trades.md#buystop"}),Object(n.b)("inlineCode",{parentName:"a"},"BuyStop"))),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Places the pending order of Buy Stop type (buy at the price higher than current market price)")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"trades.md#sellstop"}),Object(n.b)("inlineCode",{parentName:"a"},"SellStop"))),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Places the pending order of Sell Stop type (sell at the price lower than current market price)")))),Object(n.b)("h2",{id:"orders"},Object(n.b)("inlineCode",{parentName:"h2"},"Orders")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Function"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Action"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"orders.md#getorder"}),Object(n.b)("inlineCode",{parentName:"a"},"GetOrder"))),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Returns an order")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"orders.md#getpendingorders"}),Object(n.b)("inlineCode",{parentName:"a"},"GetPendingOrders"))),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Returns an array of all pending orders")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"orders.md#gethistoryorders"}),Object(n.b)("inlineCode",{parentName:"a"},"GetHistoryOrders"))),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Returns an array of closed orders")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"orders.md#ordermodify"}),Object(n.b)("inlineCode",{parentName:"a"},"OrderModify"))),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Modifies a pending order")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"orders.md#orderdelete"}),Object(n.b)("inlineCode",{parentName:"a"},"OrderDelete"))),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Deletes a pending order")))),Object(n.b)("h2",{id:"positions"},Object(n.b)("inlineCode",{parentName:"h2"},"Positions")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Function"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Action"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"positions.md#getpositions"}),Object(n.b)("inlineCode",{parentName:"a"},"GetPosition"))),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Returns an position")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"positions.md#getopenpositions"}),Object(n.b)("inlineCode",{parentName:"a"},"GetOpenPositions"))),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Returns an array of all open positions")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"positions.md#gethistorypositions"}),Object(n.b)("inlineCode",{parentName:"a"},"GetHistoryPositions"))),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Returns an array of closed positions")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"positions.md#positionmodify"}),Object(n.b)("inlineCode",{parentName:"a"},"PositionModify"))),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Modifies a position")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"positions.md#positionclose"}),Object(n.b)("inlineCode",{parentName:"a"},"PositionClose"))),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Closes a position by the specified product or order id")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"positions.md#positionclosepartial"}),Object(n.b)("inlineCode",{parentName:"a"},"PositionClosePartial"))),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Partially closes a position on a specified product or order id")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"positions.md#positioncloseby"}),Object(n.b)("inlineCode",{parentName:"a"},"PositionCloseBy"))),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Closes a position with the specified order id by an opposite position")))),Object(n.b)("h2",{id:"deals"},Object(n.b)("inlineCode",{parentName:"h2"},"Deals")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Function"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Action"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"deals.md#getdeal"}),Object(n.b)("inlineCode",{parentName:"a"},"GetDeals"))),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Returns a deal")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("a",r({parentName:"td"},{href:"deals.md#gethistorydeals"}),Object(n.b)("inlineCode",{parentName:"a"},"GetHistoryDeals"))),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Returns an array of deals")))))}p.isMDXComponent=!0},122:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),b=r.a.createContext({}),i=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},l=function(e){var t=i(e.components);return r.a.createElement(b.Provider,{value:t},e.children)};var o="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=function(e){var t=e.components,a=e.mdxType,n=e.originalType,b=e.parentName,l=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),o=i(t),p=a,d=o[b+"."+p]||o[p]||c[p]||n;return t?r.a.createElement(d,Object.assign({},l,{components:t})):r.a.createElement(d,l)};function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,i=new Array(b);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[o]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<b;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);