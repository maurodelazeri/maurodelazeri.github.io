(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{116:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(124),c=t(123),i=26,o=97;a.default=function(e){var a=e.tags,t=Array(i).fill(null).map(function(){return[]});Object.keys(a).sort().forEach(function(e){var a=e.charCodeAt(0);t[a-o].push(e)});var n=t.map(function(e,t){if(0===e.length)return null;var n=String.fromCharCode(o+t).toUpperCase();return r.a.createElement("div",{key:n},r.a.createElement("h3",null,n),e.map(function(e){return r.a.createElement(c.a,{className:"padding-right--md",href:a[e].permalink,key:"tag"},a[e].name," (",a[e].count,")")}),r.a.createElement("hr",null))}).filter(function(e){return null!=e});return r.a.createElement(l.a,{title:"Blog Tags",description:"Blog Tags"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement("h1",null,"Tags"),r.a.createElement("div",{className:"margin-vert--lg"},n)))))}}}]);