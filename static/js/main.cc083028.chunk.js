(this.webpackJsonpklicky=this.webpackJsonpklicky||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(7),i=a.n(c),o=(a(15),a(9)),r=a(1),s=a(2),m=a(4),u=a(3),d=a(5),p=(a(16),a(8)),f=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={isCompleted:!1,isActive:!1,details:[]},a.openDetails=function(){a.setState((function(e){return{isActive:!e.isActive}}))},a.saveDetails=function(){var e=a.props,t=e.setInfo,n=e.name;a.setState((function(e){return{isCompleted:!e.isCompleted}})),t(Object(p.a)({},n,a.state.details))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isCompleted,a=e.isActive;return l.a.createElement("div",{className:a?"details details--active":"details"},l.a.createElement("div",{className:"details__header"},l.a.createElement("h2",{className:"details__title"},this.props.title),l.a.createElement("div",null,l.a.createElement("div",{className:t?"details__complete details__complete--active":"details__complete"},t?"complete":"incomplete"),l.a.createElement("button",{type:"button",className:"details__open-btn",onClick:this.openDetails},l.a.createElement("svg",{className:"details__arrow","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-down",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},l.a.createElement("path",{fill:"currentColor",d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"}))))),a&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,this.props.children),l.a.createElement("div",{className:"details__buttons"},l.a.createElement("button",{type:"button",className:"details__btn btn"},"Cancel"),l.a.createElement("button",{type:"button",className:"details__btn btn",onClick:this.saveDetails},"Save"))))}}]),t}(l.a.Component),h=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={debitCard:"Credit or Debit",cardType:"",name:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"We're pretty unique in that you don't need to pay upfront to advertise. Add a payment method info so that we can get paid when we make a sale."),l.a.createElement("form",null,l.a.createElement("h3",null,"Billing Information")))}}]),t}(l.a.Component),b=function(e){var t=e.setInfo,a=e.sendInfo;return l.a.createElement("div",{className:"info"},l.a.createElement("main",{className:"info__main"},l.a.createElement(f,{children:l.a.createElement("p",null,"Some Text1"),title:"How will customers contact you?",name:"customersContact",setInfo:t}),l.a.createElement(f,{children:l.a.createElement("p",null,"Some Text2"),title:"How will customers pay you?",name:"customersPay",setInfo:t}),l.a.createElement(f,{title:"How will Klickly charge you?",name:"KlickyCharge",setInfo:t,children:l.a.createElement(h,null)}),l.a.createElement(f,{children:l.a.createElement("p",null,"Some Text4"),title:"How will Klickly contact you?",name:"KlickyContact",setInfo:t})),l.a.createElement("footer",{className:"info__footer"},l.a.createElement("button",{type:"button",className:"info__btn btn"},"Back"),l.a.createElement("button",{type:"button",className:"info__btn btn--dark",onClick:a},"Launch")))},y=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={information:[]},a.setInfo=function(e){a.setState((function(t){return{information:[].concat(Object(o.a)(t.information),[e])}}))},a.sendInfo=function(){},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"page"},l.a.createElement("header",{className:"page__header"},l.a.createElement("h1",null,"Campaign wizard: template expanded")),l.a.createElement("div",{className:"page__wrapper content"},l.a.createElement(b,{setInfo:this.setInfo,sendInfo:this.sendInfo}),l.a.createElement("aside",{className:"content__aside aside"},l.a.createElement("h2",{className:"aside__title"},"Helpful hints"),l.a.createElement("p",{className:"aside__text"},"We hate filling out info too, but we can't process your sales without more details - we need things like your deposit account info, customer service details, and a CC in order to accept orders and payments from future customers. But don't worry! Most of this information is easily available in your"," ",l.a.createElement("span",{className:"blue"},"Shopify Settings"),". And while we can't copy this information directly for security reasons, we've provided a link to help make your job a little easier."))))}}]),t}(l.a.Component);i.a.render(l.a.createElement(y,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.cc083028.chunk.js.map