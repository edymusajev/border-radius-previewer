(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{10:function(t,e,s){},11:function(t,e,s){"use strict";s.r(e);var a=s(0),i=s(1),o=s(4),c=s.n(o),n=s(2),u=function(t){var e=t.title,s=t.radius,i=t.setRadius;return Object(a.jsxs)("div",{className:"slider",children:[Object(a.jsxs)("label",{children:[e,": "]}),Object(a.jsxs)("div",{className:"slider-input-container",children:[Object(a.jsx)("input",{min:1,max:100,type:"range",value:s,onChange:function(t){return i(t.target.value)}}),Object(a.jsx)("input",{type:"text",className:"slider-input-text",value:s,onChange:function(t){return i(t.target.value)}}),Object(a.jsx)("label",{children:"%"})]})]})},r=function(t){var e=t.topLeftRadius,s=t.setTopLeftRadius,i=t.topRightRadius,o=t.setTopRightRadius,c=t.bottomLeftRadius,n=t.setBottomLeftRadius,r=t.bottomRightRadius,d=t.setBottomRightRadius;return Object(a.jsxs)("form",{className:"sliders-container",children:[Object(a.jsx)("h4",{children:"border-radius"}),Object(a.jsx)(u,{title:"top-left",radius:e,setRadius:s}),Object(a.jsx)(u,{title:"top-right",radius:i,setRadius:o}),Object(a.jsx)(u,{title:"bottom-left",radius:c,setRadius:n}),Object(a.jsx)(u,{title:"bottom-right",radius:r,setRadius:d})]})},d=function(t){var e=t.topLeftRadius,s=t.topRightRadius,i=t.bottomLeftRadius,o=t.bottomRightRadius;return Object(a.jsx)("div",{style:{borderRadius:"".concat(e,"% ").concat(s,"% ").concat(i,"% ").concat(o,"%")},className:"box"})},b=function(t){var e=t.topLeftRadius,s=t.topRightRadius,i=t.bottomLeftRadius,o=t.bottomRightRadius,c="\n.div {\n  border-radius: ".concat(e,"% ").concat(s,"% ").concat(i,"% ").concat(o,"%;\n}\n  \n  ");return Object(a.jsxs)("div",{className:"borderStyle-container",children:[Object(a.jsxs)("form",{children:[Object(a.jsx)("h4",{children:"CSS"}),Object(a.jsx)("textarea",{className:"css-textarea",rows:10,cols:40,readOnly:!0,value:c})]}),Object(a.jsx)("button",{className:"copy-btn",onClick:function(){navigator.clipboard.writeText(c)},children:"Copy"})]})},j=function(){var t=Object(i.useState)(15),e=Object(n.a)(t,2),s=e[0],o=e[1],c=Object(i.useState)(15),u=Object(n.a)(c,2),j=u[0],R=u[1],l=Object(i.useState)(30),h=Object(n.a)(l,2),p=h[0],O=h[1],m=Object(i.useState)(30),x=Object(n.a)(m,2),f=x[0],g=x[1];return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(d,{topLeftRadius:s,topRightRadius:j,bottomLeftRadius:p,bottomRightRadius:f}),Object(a.jsxs)("div",{children:[Object(a.jsx)(r,{topLeftRadius:s,setTopLeftRadius:o,topRightRadius:j,setTopRightRadius:R,bottomLeftRadius:p,setBottomLeftRadius:O,bottomRightRadius:f,setBottomRightRadius:g}),Object(a.jsx)(b,{topLeftRadius:s,topRightRadius:j,bottomLeftRadius:p,bottomRightRadius:f})]})]})};s(10);c.a.render(Object(a.jsx)(j,{}),document.querySelector("#root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.970fd910.chunk.js.map