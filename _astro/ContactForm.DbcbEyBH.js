import{r as d}from"./index.BVOCwoKb.js";var i={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function p(){if(x)return a;x=1;var n=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function s(o,t,e){var l=null;if(e!==void 0&&(l=""+e),t.key!==void 0&&(l=""+t.key),"key"in t){e={};for(var m in t)m!=="key"&&(e[m]=t[m])}else e=t;return t=e.ref,{$$typeof:n,type:o,key:l,ref:t!==void 0?t:null,props:e}}return a.Fragment=u,a.jsx=s,a.jsxs=s,a}var c;function h(){return c||(c=1,i.exports=p()),i.exports}var r=h();function f(){const[n,u]=d.useState(""),[s,o]=d.useState(""),t=e=>{e.preventDefault(),alert(`Message from ${n}: ${s}`)};return r.jsxs("form",{onSubmit:t,className:"max-w-md mx-auto bg-white p-6 rounded shadow",children:[r.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Contact Us"}),r.jsxs("div",{className:"mb-4",children:[r.jsx("label",{htmlFor:"name",className:"block text-sm font-medium",children:"Name"}),r.jsx("input",{type:"text",id:"name",value:n,onChange:e=>u(e.target.value),className:"w-full p-2 border rounded",required:!0})]}),r.jsxs("div",{className:"mb-4",children:[r.jsx("label",{htmlFor:"message",className:"block text-sm font-medium",children:"Message"}),r.jsx("textarea",{id:"message",value:s,onChange:e=>o(e.target.value),className:"w-full p-2 border rounded",rows:"4",required:!0})]}),r.jsx("button",{type:"submit",className:"bg-primary text-white px-4 py-2 rounded hover:bg-blue-700",children:"Send"})]})}export{f as default};
