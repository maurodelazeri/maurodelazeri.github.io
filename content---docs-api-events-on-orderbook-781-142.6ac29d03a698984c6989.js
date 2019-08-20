(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{122:function(e,t,a){"use strict";a.d(t,"a",function(){return p}),a.d(t,"b",function(){return m});var r=a(0),n=a.n(r),b=n.a.createContext({}),l=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},p=function(e){var t=l(e.components);return n.a.createElement(b.Provider,{value:t},e.children)};var o="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},i=function(e){var t=e.components,a=e.mdxType,r=e.originalType,b=e.parentName,p=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(a[r]=e[r]);return a}(e,["components","mdxType","originalType","parentName"]),o=l(t),i=a,m=o[b+"."+i]||o[i]||c[i]||r;return t?n.a.createElement(m,Object.assign({},p,{components:t})):n.a.createElement(m,p)};function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,l=new Array(b);l[0]=i;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[o]="string"==typeof e?e:r,l[1]=p;for(var m=2;m<b;m++)l[m]=a[m];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}i.displayName="MDXCreateElement"},65:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",function(){return l}),a.d(t,"rightToc",function(){return p}),a.d(t,"default",function(){return i});a(0);var r=a(122);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l={id:"on-orderbook",title:"OnOrderbook",hide_title:!0,sidebar_label:"OnOrderbook"},p=[{value:"OnOrderbook",id:"onorderbook",children:[{value:"Request",id:"request",children:[]},{value:"Response",id:"response",children:[]}]}],o={rightToc:p},c="wrapper";function i(e){var t=e.components,a=b(e,["components"]);return Object(r.b)(c,n({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"onorderbook"},"OnOrderbook"),Object(r.b)("p",null,"The Orderbook event is generated when a change occurs in any of the 40 levels of the orderbook. It is full-duplex bidirectional streams and processed by ",Object(r.b)("a",n({parentName:"p"},{href:"on-trade"}),Object(r.b)("inlineCode",{parentName:"a"},"OnTrade"))," function."),Object(r.b)("hr",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("p",null,"There is no required parameters but you can filter the stream specifing a structure ",Object(r.b)("a",n({parentName:"p"},{href:"structures#orderbookrequest"}),Object(r.b)("inlineCode",{parentName:"a"},"OrderbookRequest"))),Object(r.b)("h3",{id:"request"},"Request"),Object(r.b)("h4",{id:"orderbookrequest"},Object(r.b)("a",n({parentName:"h4"},{href:"../trading/structures#orderbookrequest"}),Object(r.b)("inlineCode",{parentName:"a"},"OrderbookRequest"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",n({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"field")),Object(r.b)("th",n({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"type")),Object(r.b)("th",n({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"default")),Object(r.b)("th",n({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"required")),Object(r.b)("th",n({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"description")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",n({parentName:"tr"},{align:null}),"venue"),Object(r.b)("td",n({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",n({parentName:"tr"},{align:null}),"NULL"),Object(r.b)("td",n({parentName:"tr"},{align:null}),"false"),Object(r.b)("td",n({parentName:"tr"},{align:null}),"venue")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",n({parentName:"tr"},{align:null}),"product"),Object(r.b)("td",n({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",n({parentName:"tr"},{align:null}),"NULL"),Object(r.b)("td",n({parentName:"tr"},{align:null}),"false"),Object(r.b)("td",n({parentName:"tr"},{align:null}),"product")))),Object(r.b)("h3",{id:"response"},"Response"),Object(r.b)("h4",{id:"orderbook"},Object(r.b)("a",n({parentName:"h4"},{href:"../trading/structures#orderbook"}),Object(r.b)("inlineCode",{parentName:"a"},"Orderbook"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",n({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"stream")),Object(r.b)("th",n({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"description")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",n({parentName:"tr"},{align:null}),"Orderbook"),Object(r.b)("td",n({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Stream")," of ",Object(r.b)("a",n({parentName:"td"},{href:"../trading/structures#orderbook"}),Object(r.b)("inlineCode",{parentName:"a"},"Orderbook")))))),Object(r.b)("h4",{id:"examples-available"},"Examples Available:"),Object(r.b)("p",null,Object(r.b)("a",n({parentName:"p"},{href:"trades-examples#c"}),Object(r.b)("inlineCode",{parentName:"a"},"C"))," / ",Object(r.b)("a",n({parentName:"p"},{href:"trades-examples#c++"}),Object(r.b)("inlineCode",{parentName:"a"},"C++"))," / ",Object(r.b)("a",n({parentName:"p"},{href:"trades-examples#c-2"}),Object(r.b)("inlineCode",{parentName:"a"},"C#")),"/ ",Object(r.b)("a",n({parentName:"p"},{href:"trades-examples#julia"}),Object(r.b)("inlineCode",{parentName:"a"},"Julia"))," / ",Object(r.b)("a",n({parentName:"p"},{href:"trades-examples#matlab"}),Object(r.b)("inlineCode",{parentName:"a"},"Matlab"))," / ",Object(r.b)("a",n({parentName:"p"},{href:"trades-examples#f"}),Object(r.b)("inlineCode",{parentName:"a"},"F"))," / ",Object(r.b)("a",n({parentName:"p"},{href:"trades-examples#r"}),Object(r.b)("inlineCode",{parentName:"a"},"R"))," / ",Object(r.b)("a",n({parentName:"p"},{href:"trades-examples#ocaml"}),Object(r.b)("inlineCode",{parentName:"a"},"OCaml"))," / ",Object(r.b)("a",n({parentName:"p"},{href:"trades-examples#haskell"}),Object(r.b)("inlineCode",{parentName:"a"},"Haskell"))," / ",Object(r.b)("a",n({parentName:"p"},{href:"trades-examples#erlang"}),Object(r.b)("inlineCode",{parentName:"a"},"Erlang"))," / ",Object(r.b)("a",n({parentName:"p"},{href:"trades-examples#elixir"}),Object(r.b)("inlineCode",{parentName:"a"},"Elixir"))," / ",Object(r.b)("a",n({parentName:"p"},{href:"trades-examples#python"}),Object(r.b)("inlineCode",{parentName:"a"},"Python"))," / ",Object(r.b)("a",n({parentName:"p"},{href:"trades-examples#dart"}),Object(r.b)("inlineCode",{parentName:"a"},"Dart"))," / ",Object(r.b)("a",n({parentName:"p"},{href:"trades-examples#go"}),Object(r.b)("inlineCode",{parentName:"a"},"Go"))," / ",Object(r.b)("a",n({parentName:"p"},{href:"trades-examples#java"}),Object(r.b)("inlineCode",{parentName:"a"},"Java"))," / ",Object(r.b)("a",n({parentName:"p"},{href:"trades-examples#scala"}),Object(r.b)("inlineCode",{parentName:"a"},"Scala"))," / ",Object(r.b)("a",n({parentName:"p"},{href:"trades-examples#objective-c"}),Object(r.b)("inlineCode",{parentName:"a"},"Objective-C"))," / ",Object(r.b)("a",n({parentName:"p"},{href:"trades-examples#php"}),Object(r.b)("inlineCode",{parentName:"a"},"PHP"))," / ",Object(r.b)("a",n({parentName:"p"},{href:"trades-examples#ruby"}),Object(r.b)("inlineCode",{parentName:"a"},"Ruby"))," / ",Object(r.b)("a",n({parentName:"p"},{href:"trades-examples#webjs"}),Object(r.b)("inlineCode",{parentName:"a"},"WebJS"))))}i.isMDXComponent=!0}}]);