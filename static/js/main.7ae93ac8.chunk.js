(this.webpackJsonpklicky=this.webpackJsonpklicky||[]).push([[0],{10:function(e,a,t){e.exports=t(17)},15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),c=t.n(r),s=(t(15),t(9)),i=t(1),o=t(2),m=t(4),u=t(3),d=t(5),h=(t(16),t(6)),p=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={isCompleted:!1,isActive:!1,details:[]},t.openDetails=function(){t.setState((function(e){return{isActive:!e.isActive}}))},t.saveDetails=function(){var e=t.props,a=e.setInfo,n=e.name;t.setState((function(e){return{isCompleted:!e.isCompleted}})),a(Object(h.a)({},n,t.state.details))},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state,a=e.isCompleted,t=e.isActive;return l.a.createElement("div",{className:t?"details details--active":"details"},l.a.createElement("div",{className:"details__header"},l.a.createElement("h2",{className:"details__title"},this.props.title),l.a.createElement("div",null,l.a.createElement("div",{className:a?"details__complete details__complete--active":"details__complete"},a?"complete":"incomplete"),l.a.createElement("button",{type:"button",className:"details__open-btn",onClick:this.openDetails},l.a.createElement("svg",{className:"details__arrow","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-down",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},l.a.createElement("path",{fill:"currentColor",d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"}))))),t&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,this.props.children),l.a.createElement("div",{className:"details__buttons"},l.a.createElement("button",{type:"button",className:"details__btn btn"},"Cancel"),l.a.createElement("button",{type:"button",className:"details__btn btn",onClick:this.saveDetails},"Save"))))}}]),a}(l.a.Component),v=function(e){var a=e.cardType,t=e.handleChange;return l.a.createElement("div",{className:"cards"},l.a.createElement("p",{className:"cards__title"},"Name on Card"),l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement("input",{type:"radio",name:"cardType",className:"cards__card",value:"Visa",checked:"Visa"===a,onChange:function(e){return t(e.target)}}),l.a.createElement("img",{src:"./images/visa-light.svg",alt:"visa"})),l.a.createElement("label",null,l.a.createElement("input",{type:"radio",name:"cardType",className:"cards__card",value:"MasterCard",onChange:function(e){return t(e.target)},checked:"MasterCard"===a}),l.a.createElement("img",{src:"./images/mc-light.svg",alt:"MasterCard"})),l.a.createElement("label",null,l.a.createElement("input",{type:"radio",name:"cardType",className:"cards__card",value:"Discover",checked:"Discover"===a,onChange:function(e){return t(e.target)}}),l.a.createElement("img",{src:"./images/disc-light.svg",alt:"Discover"})),l.a.createElement("label",null,l.a.createElement("input",{type:"radio",name:"cardType",className:"cards__card",value:"Amex",checked:"Amex"===a,onChange:function(e){return t(e.target)}}),l.a.createElement("img",{src:"./images/amex-light.svg",alt:"Amex"}))))},b=function(e){var a=e.name,t=e.value,n=e.className,r=e.options,c=e.handleChange;return l.a.createElement("div",{className:"select"},l.a.createElement("select",{name:a,value:t,onChange:function(e){return c(e.target)},className:"select__input ".concat(n)},r.map((function(e){var a=e.optionValue,t=e.label;return l.a.createElement("option",{value:a,key:10*Date.now()*Math.random()},t)}))),l.a.createElement("img",{className:"select__arrow",src:"./images/arrow-down.svg",alt:"arrow__down"}))},f=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={debitCard:"Credit or Debit",cardType:"",userName:"",cardNumber:"",cardCVV:"",cardMonth:"",cardYear:""},t.handleChange=function(e){t.setState(Object(h.a)({},e.name,e.value))},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.debitCard,n=a.cardType,r=a.userName,c=a.cardNumber,s=a.cardCVV,i=a.cardMonth,o=a.cardYear;return console.log(this.state),l.a.createElement("div",{className:"charge"},l.a.createElement("p",{className:"charge__text"},"We're pretty unique in that you don't need to pay upfront to advertise. Add a payment method info so that we can get paid when we make a sale."),l.a.createElement("form",{className:"form"},l.a.createElement("h3",{className:"form__title"},"Billing Information"),l.a.createElement(b,{name:"debitCard",value:t,handleChange:this.handleChange,className:"select__input",options:[{value:"credit",label:"Credit or Debit card"},{value:"debit",label:"Debit card"},{value:"credit",label:"Credit card"}]}),l.a.createElement(v,{handleChange:this.handleChange,cardType:n}),l.a.createElement("input",{name:"userName",type:"text",id:"userName",onChange:function(a){return e.handleChange(a.target)},value:r.value,placeholder:"Jimmy Santos"}),l.a.createElement("div",{className:"form__card-number"},l.a.createElement("input",{name:"cardNumber",type:"text",maxLength:"16",minLength:"16",placeholder:"e.g. 1234 1234 1234 1234",value:c.value,onChange:function(a){return e.handleChange(a.target)}}),l.a.createElement("input",{name:"cardCVV",type:"text",maxLength:"3",minLength:"3",placeholder:"e.g. 243",value:s.value,onChange:function(a){return e.handleChange(a.target)}}),l.a.createElement(b,{name:"cardMonth",value:i,handleChange:this.handleChange,className:"select__input",options:[{value:"Month",label:"Month"},{value:"1",label:"January"},{value:"2",label:"February"},{value:"3",label:"March"},{value:"4",label:"April"},{value:"5",label:"May"},{value:"6",label:"June"},{value:"7",label:"July"},{value:"8",label:"August"},{value:"9",label:"September"},{value:"10",label:"October"},{value:"11",label:"November"},{value:"12",label:"December"}]}),l.a.createElement(b,{name:"cardYear",value:o,handleChange:this.handleChange,className:"select__input",options:[{value:"Year",label:"Year"},{value:"2019",label:"2019"},{value:"2020",label:"2020"},{value:"2021",label:"2021"},{value:"2022",label:"2022"},{value:"2023",label:"2023"},{value:"2024",label:"2024"}]}))))}}]),a}(l.a.Component),g=function(e){var a=e.setInfo,t=e.sendInfo;return l.a.createElement("div",{className:"info"},l.a.createElement("main",{className:"info__main"},l.a.createElement(p,{children:l.a.createElement("p",null,"Some Text1"),title:["How will customers ",l.a.createElement("span",{className:"bold",key:"1"},"contact")," you?"],name:"customersContact",setInfo:a}),l.a.createElement(p,{children:l.a.createElement("p",null,"Some Text2"),title:["How will customers ",l.a.createElement("span",{className:"bold",key:"2"},"pay"),"  you?"],name:"customersPay",setInfo:a}),l.a.createElement(p,{title:["How will Klickly ",l.a.createElement("span",{className:"bold",key:"3"},"charge")," you?"],name:"KlickyCharge",setInfo:a,children:l.a.createElement(f,null)}),l.a.createElement(p,{children:l.a.createElement("p",null,"Some Text4"),title:["How will Klickly ",l.a.createElement("span",{className:"bold",key:"4"},"contact")," you?"],name:"KlickyContact",setInfo:a})),l.a.createElement("footer",{className:"info__footer"},l.a.createElement("button",{type:"button",className:"info__btn btn"},"Back"),l.a.createElement("button",{type:"button",className:"info__btn btn--dark",onClick:t},"Launch")))},E=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={information:[]},t.setInfo=function(e){t.setState((function(a){return{information:[].concat(Object(s.a)(a.information),[e])}}))},t.sendInfo=function(){},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"page"},l.a.createElement("header",{className:"page__header"},l.a.createElement("h1",null,"Campaign wizard: template expanded")),l.a.createElement("div",{className:"page__wrapper content"},l.a.createElement(g,{setInfo:this.setInfo,sendInfo:this.sendInfo}),l.a.createElement("aside",{className:"content__aside aside"},l.a.createElement("h2",{className:"aside__title"},"Helpful hints"),l.a.createElement("p",{className:"aside__text"},"We hate filling out info too, but we can't process your sales without more details - we need things like your deposit account info, customer service details, and a CC in order to accept orders and payments from future customers. But don't worry! Most of this information is easily available in your"," ",l.a.createElement("span",{className:"blue"},"Shopify Settings"),". And while we can't copy this information directly for security reasons, we've provided a link to help make your job a little easier."))))}}]),a}(l.a.Component);c.a.render(l.a.createElement(E,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.7ae93ac8.chunk.js.map