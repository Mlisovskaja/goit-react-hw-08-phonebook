"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[924],{3924:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var r=t(2791),a=t(9434),l=t(4942),u=t(1413),o=t(9439),i=t(260),s={name:{type:"text",name:"name",required:!0,label:"User name",placeholder:"User name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"},number:{type:"tel",name:"number",required:!0,label:"Phone",placeholder:"Phone",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}},c={name:"",number:""},m={form:"phonebook_form__TzOur",label:"phonebook_label__J-FpI",input:"phonebook_input__JNU4v"},d=t(184),f=function(e){var n=e.onSubmit,t=(0,r.useState)((0,u.Z)({},c)),a=(0,o.Z)(t,2),f=a[0],h=a[1],b=function(e){var n=e.target,t=n.name,r=n.value;h((function(e){return(0,u.Z)((0,u.Z)({},e),{},(0,l.Z)({},t,r))}))},p=f.name,v=f.number;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("form",{className:m.form,onSubmit:function(e){e.preventDefault(),n((0,u.Z)({},f)),h((0,u.Z)({},c))},children:[(0,d.jsx)("h2",{children:"Phonebook"}),(0,d.jsx)(i.Z,(0,u.Z)({className:m.input,value:p,handleChange:b},s.name)),(0,d.jsx)(i.Z,(0,u.Z)({className:m.input,value:v,handleChange:b},s.number)),(0,d.jsx)("button",{className:m.btn,type:"submit",children:"Add contact"})]})})},h="filter_label__nHxuJ",b="filter_input__sX944",p=function(e){var n=e.handleChange;return(0,d.jsxs)("div",{children:[(0,d.jsx)("label",{className:h,children:"Find contacts by name"}),(0,d.jsx)("input",{className:b,name:"filter",onChange:n})]})},v={list:"contacts-list_list__RZXOt"},x=function(e){var n=e.deleteName,t=e.contacts.map((function(e){var t=e.id,r=e.name,a=e.number;return(0,d.jsxs)("li",{children:[r,": ",a,(0,d.jsx)("button",{className:v.btn,onClick:function(){return n(t)},type:"button",children:"Delete"})]},t)}));return(0,d.jsx)("ul",{className:v.list,children:t})},j=x;x.defaultProps={contacts:[]};var _=t(4639),g=t(5653),y=function(e){var n=e.contacts,t=e.filter;if(!t)return n.items;var r=t.toLowerCase();return n.items.filter((function(e){return e.name.toLowerCase().includes(r)}))},Z=function(e){return e.filter},C=function(){var e=(0,a.v9)(y),n=(0,a.v9)(Z),t=(0,a.I0)();(0,r.useEffect)((function(){t((0,_.yF)())}),[t]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(f,{onSubmit:function(e){var n=e.name,r=e.number;t((0,_.uK)({name:n,number:r}))}}),(0,d.jsx)(p,{value:n,handleChange:function(e){var n=e.target;t((0,g.T)(n.value))}}),(0,d.jsx)(j,{deleteName:function(e){t((0,_.GK)(e))},contacts:e})]})}},260:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(1413);function a(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=t(2791),u=t(184),o=["label","handleChange"],i=function(e){var n=e.label,t=e.handleChange,i=a(e,o),s=(0,l.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+((n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_")}),"")}()}),[]);return(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{htmlFor:s,children:n}),(0,u.jsx)("input",(0,r.Z)({id:s,onChange:t},i))]})}}}]);
//# sourceMappingURL=924.9236fa49.chunk.js.map