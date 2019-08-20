(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{122:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),l=r.a.createContext({}),i=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},c=function(e){var t=i(e.components);return r.a.createElement(l.Provider,{value:t},e.children)};var o="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=function(e){var t=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),o=i(t),u=a,s=o[l+"."+u]||o[u]||b[u]||n;return t?r.a.createElement(s,Object.assign({},c,{components:t})):r.a.createElement(s,c)};function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c[o]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<l;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",function(){return i}),a.d(t,"rightToc",function(){return c}),a.d(t,"default",function(){return u});a(0);var n=a(122);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i={id:"on-calculate",title:"OnCalculate",hide_title:!0,sidebar_label:"OnCalculate"},c=[{value:"OnCalculate",id:"oncalculate",children:[]},{value:"Bars",id:"bars",children:[{value:"Time Bars",id:"time-bars",children:[]},{value:"Tick Bars",id:"tick-bars",children:[]},{value:"Volume Bars",id:"volume-bars",children:[]},{value:"Quote Bars",id:"quote-bars",children:[]}]},{value:"Timeseries",id:"timeseries",children:[]}],o={rightToc:c},b="wrapper";function u(e){var t=e.components,a=l(e,["components"]);return Object(n.b)(b,r({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"oncalculate"},"OnCalculate"),Object(n.b)("p",null,"The Calculate event that can be dynamically calculated to provide custom timeseries. This makes it possible to implement resource-saving algorithms for calculating a custom indicator in order to avoid repetitive calculations for the bars that have not changed since the previous launch of this function."),Object(n.b)("p",null,"In some cases sampling prices based on a volume clock rather than fixed time interval sampling, then we get better statistical properties, this functions aims to help you do that."),Object(n.b)("h2",{id:"bars"},"Bars"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Function"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Timeframe"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Structure"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"time_bar"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Time Bars"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Second - Minute- Hour - Day"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Open-high-low-close")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"tick_bar"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Tick Bars"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Second - Minute- Hour - Day"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Open-high-low-close")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"volume_bar"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Volume Bars"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Second - Minute- Hour - Day"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Open-high-low-close")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"quote_bar"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Quote Bars"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Second - Minute- Hour - Day"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Open-high-low-close")))),Object(n.b)("h3",{id:"time-bars"},"Time Bars"),Object(n.b)("p",null,"Bars indexed by time intervals, minutely, daily, etc. OHLCV (Open, High, Low, Close, Volume) is standard."),Object(n.b)("h3",{id:"tick-bars"},"Tick Bars"),Object(n.b)("p",null,"Bars indexed by orders, with each set # of orders (usually just 1) creating a distinct bar. Order price, size, and the exchange the order was executed on are common."),Object(n.b)("h3",{id:"volume-bars"},"Volume Bars"),Object(n.b)("p",null,"Bars indexed by total volume, with each set # of volume traded creating a distinct bar. We can transform minute bars into an approximation for volume bars, but ideally we would use tick bars to maintain information for all parameters across bars."),Object(n.b)("h3",{id:"quote-bars"},"Quote Bars"),Object(n.b)("p",null,"Similar to volume bars, except measuring the total value in the Quote traded hands. An example would be \\$100,000 bars, with each bar containing as precisely as possible that dollar value."),Object(n.b)("h2",{id:"timeseries"},"Timeseries"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"Function"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Structure"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Number of trades"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"trades"),Object(n.b)("td",r({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Array")," of ",Object(n.b)("a",r({parentName:"td"},{href:"../trading/structures#trade"}),Object(n.b)("inlineCode",{parentName:"a"},"Trade"))),Object(n.b)("td",r({parentName:"tr"},{align:null}),"1 to any"),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Last x.. Trades")))))}u.isMDXComponent=!0}}]);