(this["webpackJsonpsmall-shopping-cart"]=this["webpackJsonpsmall-shopping-cart"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),i=c(8),r=c.n(i),a=(c(14),c(9)),d=c(3),j=c(2),o=c(1);function l(e){return Object(o.jsxs)("header",{className:"block row center",children:[Object(o.jsx)("div",{children:Object(o.jsx)("a",{href:"#/",children:Object(o.jsx)("h1",{children:"Small Shopping Cart"})})}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("a",{href:"#/cart",children:["Cart"," ",e.countCartItems?Object(o.jsx)("button",{className:"badge",children:e.countCartItems}):""]})," ",Object(o.jsx)("a",{href:"#/signin",children:" SignIn"})]})]})}function h(e){var t=e.product,c=e.onAdd;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:t.name}),Object(o.jsx)("img",{className:"small",src:t.image,alt:t.name}),Object(o.jsx)("div",{className:"btn",children:Object(o.jsx)("button",{onClick:function(){return c(t)},children:"Add To Cart"})}),Object(o.jsxs)("div",{children:["Rs ",t.price]}),Object(o.jsx)("div",{})]})}function b(e){var t=e.products,c=e.onAdd;return Object(o.jsx)("main",{className:"block col-2",children:Object(o.jsx)("div",{children:t.map((function(e){return Object(o.jsx)(h,{product:e,onAdd:c},e.id)}))})})}function u(e){var t=e.cartItems,c=e.onAdd,n=e.onRemove,s=t.reduce((function(e,t){return e+t.qty*t.price}),0),i=s;return Object(o.jsxs)("aside",{className:"block col-1",children:[Object(o.jsx)("h2",{children:"Cart Items"}),Object(o.jsxs)("div",{children:[0===t.length&&Object(o.jsx)("div",{children:"Cart is empty"}),t.map((function(e){return Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-2",children:e.name}),Object(o.jsxs)("div",{className:"col-2",children:[Object(o.jsx)("button",{onClick:function(){return n(e)},className:"remove",children:"-"}),e.qty,Object(o.jsx)("button",{onClick:function(){return c(e)},className:"add",children:"+"})]}),Object(o.jsxs)("div",{className:"col-2 text-right",children:[e.qty," x ",e.price.toFixed(2)]})]},e.id)})),0!==t.length&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-2",children:"Items Price"}),Object(o.jsxs)("div",{className:"col-1 text-right",children:["Rs ",s.toFixed(2)]})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-2",children:Object(o.jsx)("strong",{children:"Total Price"})}),Object(o.jsx)("div",{className:"col-1 text-right",children:Object(o.jsxs)("strong",{children:["Rs ",i.toFixed(2)]})})]}),Object(o.jsx)("hr",{}),Object(o.jsx)("div",{className:"checkout row",children:Object(o.jsx)("button",{onClick:function(){return alert("Implement Checkout!")},children:"Checkout"})})]})]})]})}var m={products:[{id:"1",name:"Mom's styled ajwaini parantha",price:50,image:"https://i.picsum.photos/id/1060/5598/3732.jpg?hmac=31kU0jp5ejnPTdEt-8tAXU5sE-buU-y1W1qk_BsiUC8",desc:"Mom's styled ajwain parantha"},{id:"2",name:"Roasted Cereal",price:150,image:"https://i.picsum.photos/id/1060/5598/3732.jpg?hmac=31kU0jp5ejnPTdEt-8tAXU5sE-buU-y1W1qk_BsiUC8",desc:"Roasted Cereal"},{id:"3",name:"Roasted Cereal",price:150,image:"https://i.picsum.photos/id/1060/5598/3732.jpg?hmac=31kU0jp5ejnPTdEt-8tAXU5sE-buU-y1W1qk_BsiUC8",desc:"Roasted Cereal"},{id:"4",name:"Roasted Cereal",price:150,image:"https://i.picsum.photos/id/1060/5598/3732.jpg?hmac=31kU0jp5ejnPTdEt-8tAXU5sE-buU-y1W1qk_BsiUC8",desc:"Roasted Cereal"}]};var O=function(){var e=m.products,t=Object(n.useState)([]),c=Object(j.a)(t,2),s=c[0],i=c[1],r=function(e){var t=s.find((function(t){return t.id===e.id}));i(t?s.map((function(c){return c.id===e.id?Object(d.a)(Object(d.a)({},t),{},{qty:t.qty+1}):c})):[].concat(Object(a.a)(s),[Object(d.a)(Object(d.a)({},e),{},{qty:1})]))};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{countCartItems:s.length}),Object(o.jsx)(b,{products:e,onAdd:r}),Object(o.jsx)(u,{cartItems:s,onAdd:r,onRemove:function(e){var t=s.find((function(t){return t.id===e.id}));1===t.qty?i(s.filter((function(t){return t.id!==e.id}))):i(s.map((function(c){return c.id===e.id?Object(d.a)(Object(d.a)({},t),{},{qty:t.qty-1}):c})))}})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),i(e),r(e)}))},p=c(7);r.a.render(Object(o.jsx)(p.a,{children:Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(O,{})})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.96a5adde.chunk.js.map