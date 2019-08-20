(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{122:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),b=r.a.createContext({}),i=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},l=function(e){var t=i(e.components);return r.a.createElement(b.Provider,{value:t},e.children)};var c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},o=function(e){var t=e.components,a=e.mdxType,n=e.originalType,b=e.parentName,l=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),c=i(t),o=a,s=c[b+"."+o]||c[o]||p[o]||n;return t?r.a.createElement(s,Object.assign({},l,{components:t})):r.a.createElement(s,l)};function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,i=new Array(b);i[0]=o;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<b;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},79:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",function(){return i}),a.d(t,"rightToc",function(){return l}),a.d(t,"default",function(){return o});a(0);var n=a(122);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i={id:"on-trade-transaction",title:"OnTradeTransaction",hide_title:!0,sidebar_label:"OnTradeTransaction"},l=[{value:"OnTradeTransaction",id:"ontradetransaction",children:[{value:"Request",id:"request",children:[]},{value:"Response",id:"response",children:[]}]}],c={rightToc:l},p="wrapper";function o(e){var t=e.components,a=b(e,["components"]);return Object(n.b)(p,r({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"ontradetransaction"},Object(n.b)("inlineCode",{parentName:"h2"},"OnTradeTransaction")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"When performing some definite actions on a trade account, its state changes. Such actions include:")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Sending a trade request from any application in the client")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Pending orders and stop orders activation on the server;")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Performing operations on a trade server side.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The following trade transactions are performed as a result of these actions:")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"handling a trade request;")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"changing open orders;")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"changing orders history;")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"changing deals history;")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"changing positions."))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"For example sending a buy trade request leads to a chain of trade transactions on a trading account:")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"request is accepted for processing,"),Object(n.b)("li",{parentName:"ol"},"an appropriate purchase order is created for the account,"),Object(n.b)("li",{parentName:"ol"},"the order is then executed,"),Object(n.b)("li",{parentName:"ol"},"the executed order is removed from the list of active ones,"),Object(n.b)("li",{parentName:"ol"},"adding to the history of orders,"),Object(n.b)("li",{parentName:"ol"},"the subsequent transaction is added to history and"),Object(n.b)("li",{parentName:"ol"},"a new position is created.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"All these stages are trade transactions. The arrival of each such transaction to the client is handled by ",Object(n.b)("inlineCode",{parentName:"p"},"OnTradeTransaction")," event and provides a structure of ",Object(n.b)("a",r({parentName:"p"},{href:"../trading/structures#tradetransaction"}),Object(n.b)("inlineCode",{parentName:"a"},"TradeTransaction")),". Priority of these transactions arrival at the terminal is not guaranteed. Thus, you should not expect that one group of transactions will arrive after another one when developing your trading algorithm.")),Object(n.b)("hr",null),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("p",null,"There is no required parameters but you can filter the stream specifing a structure ",Object(n.b)("a",r({parentName:"p"},{href:"structures.md#tradetransactionrequest"}),Object(n.b)("inlineCode",{parentName:"a"},"TradeTransactionRequest"))),Object(n.b)("h3",{id:"request"},"Request"),Object(n.b)("h4",{id:"tradetransactionrequest"},Object(n.b)("a",r({parentName:"h4"},{href:"../trading/structures#tradetransactionrequest"}),Object(n.b)("inlineCode",{parentName:"a"},"TradeTransactionRequest"))),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"th"},"field")),Object(n.b)("th",r({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"th"},"type")),Object(n.b)("th",r({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"th"},"default")),Object(n.b)("th",r({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"th"},"required")),Object(n.b)("th",r({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"th"},"description")))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"venue"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"NULL"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"false"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"venue")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"product"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"NULL"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"false"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"product")))),Object(n.b)("h3",{id:"response"},"Response"),Object(n.b)("h4",{id:"tradetransaction"},Object(n.b)("a",r({parentName:"h4"},{href:"../trading/structures#tradetransaction"}),Object(n.b)("inlineCode",{parentName:"a"},"TradeTransaction"))),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"th"},"stream")),Object(n.b)("th",r({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"th"},"description")))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"TradeTransaction"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Stream")," of ",Object(n.b)("a",r({parentName:"td"},{href:"../trading/structures#tradetransaction"}),Object(n.b)("inlineCode",{parentName:"a"},"TradeTransaction")))))),Object(n.b)("h4",{id:"examples-available"},"Examples Available:"),Object(n.b)("p",null,Object(n.b)("a",r({parentName:"p"},{href:"trades-examples.md#c"}),Object(n.b)("inlineCode",{parentName:"a"},"C"))," / ",Object(n.b)("a",r({parentName:"p"},{href:"trades-examples.md#c++"}),Object(n.b)("inlineCode",{parentName:"a"},"C++"))," / ",Object(n.b)("a",r({parentName:"p"},{href:"trades-examples.md#c-2"}),Object(n.b)("inlineCode",{parentName:"a"},"C#")),"/ ",Object(n.b)("a",r({parentName:"p"},{href:"trades-examples.md#julia"}),Object(n.b)("inlineCode",{parentName:"a"},"Julia"))," / ",Object(n.b)("a",r({parentName:"p"},{href:"trades-examples.md#matlab"}),Object(n.b)("inlineCode",{parentName:"a"},"Matlab"))," / ",Object(n.b)("a",r({parentName:"p"},{href:"trades-examples.md#f"}),Object(n.b)("inlineCode",{parentName:"a"},"F"))," / ",Object(n.b)("a",r({parentName:"p"},{href:"trades-examples.md#r"}),Object(n.b)("inlineCode",{parentName:"a"},"R"))," / ",Object(n.b)("a",r({parentName:"p"},{href:"trades-examples.md#ocaml"}),Object(n.b)("inlineCode",{parentName:"a"},"OCaml"))," / ",Object(n.b)("a",r({parentName:"p"},{href:"trades-examples.md#haskell"}),Object(n.b)("inlineCode",{parentName:"a"},"Haskell"))," / ",Object(n.b)("a",r({parentName:"p"},{href:"trades-examples.md#erlang"}),Object(n.b)("inlineCode",{parentName:"a"},"Erlang"))," / ",Object(n.b)("a",r({parentName:"p"},{href:"trades-examples.md#elixir"}),Object(n.b)("inlineCode",{parentName:"a"},"Elixir"))," / ",Object(n.b)("a",r({parentName:"p"},{href:"trades-examples.md#python"}),Object(n.b)("inlineCode",{parentName:"a"},"Python"))," / ",Object(n.b)("a",r({parentName:"p"},{href:"trades-examples.md#dart"}),Object(n.b)("inlineCode",{parentName:"a"},"Dart"))," / ",Object(n.b)("a",r({parentName:"p"},{href:"trades-examples.md#go"}),Object(n.b)("inlineCode",{parentName:"a"},"Go"))," / ",Object(n.b)("a",r({parentName:"p"},{href:"trades-examples.md#java"}),Object(n.b)("inlineCode",{parentName:"a"},"Java"))," / ",Object(n.b)("a",r({parentName:"p"},{href:"trades-examples.md#scala"}),Object(n.b)("inlineCode",{parentName:"a"},"Scala"))," / ",Object(n.b)("a",r({parentName:"p"},{href:"trades-examples.md#objective-c"}),Object(n.b)("inlineCode",{parentName:"a"},"Objective-C"))," / ",Object(n.b)("a",r({parentName:"p"},{href:"trades-examples.md#php"}),Object(n.b)("inlineCode",{parentName:"a"},"PHP"))," / ",Object(n.b)("a",r({parentName:"p"},{href:"trades-examples.md#ruby"}),Object(n.b)("inlineCode",{parentName:"a"},"Ruby"))," / ",Object(n.b)("a",r({parentName:"p"},{href:"trades-examples.md#webjs"}),Object(n.b)("inlineCode",{parentName:"a"},"WebJS"))))}o.isMDXComponent=!0}}]);