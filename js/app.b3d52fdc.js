(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)i=o[d],s[i]&&p.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/student-loan-calc/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"is-clipped",attrs:{id:"app"}},[a("NavbarComponent",{on:{about:function(e){t.aboutActive=!0}}}),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("FormComponent",{on:{"loan-data":function(e){return t.addLoanData(e)}}})],1),a("div",{staticClass:"column"},[a("LoanList",{attrs:{loans:t.loans}})],1)]),a("About",{class:{"is-active":t.aboutActive},on:{"close-about":function(e){t.aboutActive=!1}}})],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"box"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("How much are you borrowing?")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.principal,expression:"principal"}],staticClass:"input",attrs:{type:"text",placeholder:"Principal Balance"},domProps:{value:t.principal},on:{input:function(e){e.target.composing||(t.principal=e.target.value)}}})]),t._m(0)]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("How many days until first/next payment?")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.daysSincePayment,expression:"daysSincePayment"}],staticClass:"input",attrs:{type:"text",placeholder:"Days since last payment"},domProps:{value:t.daysSincePayment},on:{input:function(e){e.target.composing||(t.daysSincePayment=e.target.value)}}}),t._m(1)])]),a("div",{staticClass:"tile is-ancestor"},[a("div",{staticClass:"tile is-parent"},[a("div",{staticClass:"tile is-child"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label",attrs:{for:"program-type"}},[t._v("Program Type")]),a("div",{staticClass:"control"},[a("div",{staticClass:"select"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.programType,expression:"programType"}],attrs:{name:"program-type",id:"program-type"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.programType=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"Undergraduate"}},[t._v("Undergraduate")]),a("option",{attrs:{value:"Graduate"}},[t._v("Graduate")])])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"Undergraduate"==t.programType,expression:"programType =='Undergraduate'"}],staticClass:"field"},[a("label",{staticClass:"label",attrs:{for:"undergrad-loans"}},[t._v("Loan Type:")]),a("div",{staticClass:"control"},[a("div",{staticClass:"select"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedUndergradLoan,expression:"selectedUndergradLoan"}],attrs:{name:"undergrad-loans",id:"undergrad-loans"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.selectedUndergradLoan=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"Subsidized Loan"}},[t._v("Subsidized Loan")]),a("option",{attrs:{value:"Unsubsidized Loan"}},[t._v("Unsubsidized Loan")])])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"Graduate"==t.programType,expression:"programType =='Graduate'"}],staticClass:"field"},[a("label",{staticClass:"label",attrs:{for:"grad-loans"}},[t._v("Loan Type:")]),a("div",{staticClass:"control"},[a("div",{staticClass:"select"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedGradLoan,expression:"selectedGradLoan"}],attrs:{name:"grad-loans",id:"grad-loans"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.selectedGradLoan=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"Unsubsidized Loan"}},[t._v("Unsubsidized Loan")]),a("option",{attrs:{value:"Graduate PLUS Loan"}},[t._v("Graduate PLUS Loan")])])])])])])]),a("div",{staticClass:"tile is-parent is-vertical"},[a("div",{staticClass:"tile is-child"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.formComplete,expression:"formComplete"}],staticClass:"box"},[a("p",[t._v("At an interest rate of "+t._s(Math.round(1e4*t.interestRate)/100)+"%, your loans would accrue $"+t._s(Math.round(100*t.dailyInterestAmount)/100)+" per day.")]),a("br"),a("p",[t._v("Over "+t._s(t.daysSincePayment)+" days, your loans would accrue a total of $"+t._s(Math.round(100*t.totalInterestAmount)/100)+".")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.formComplete,expression:"formComplete"}],staticClass:"tile is-child"},[a("button",{staticClass:"button is-primary is-fullwidth",attrs:{type:"button"},on:{click:function(e){return t.submitLoan()}}},[t._v("Add to List")])])])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"help"},[t._v("\n      Find the annual and lifetime borrowing limits\n      "),a("a",{attrs:{href:"https://studentaid.ed.gov/sa/types/loans/subsidized-unsubsidized#how-much"}},[t._v("here")]),t._v(".\n    ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"help"},[t._v("\n        Remember: the interest of federal student loans accrues\n        "),a("i",[t._v("daily")]),t._v(". Add 30 days for a month, or 365 for a year.\n      ")])}],l={name:"FormComponent",data:function(){return{programType:"",selectedUndergradLoan:"",selectedGradLoan:"",principal:0,daysSincePayment:0}},computed:{formComplete:function(){return"Undergraduate"===this.programType&&""!==this.selectedUndergradLoan||"Graduate"===this.programType&&""!==this.selectedGradLoan},interestRate:function(){if("Undergraduate"===this.programType&&""!==this.selectedUndergradLoan)return.0505;if("Graduate"===this.programType&&""!==this.selectedGradLoan){if("Unsubsidized Loan"===this.selectedGradLoan)return.066;if("Graduate PLUS Loan"===this.selectedGradLoan)return.076}},interestRateFactor:function(){return this.interestRate/365},dailyInterestAmount:function(){return this.principal*this.interestRateFactor},totalInterestAmount:function(){return this.principal*this.interestRateFactor*this.daysSincePayment}},methods:{submitLoan:function(){var t=[];"Undergraduate"===this.programType&&""!==this.selectedUndergradLoan?t.push(this.selectedUndergradLoan):"Graduate"===this.programType&&""!==this.selectedGradLoan&&t.push(this.selectedGradLoan),t.push(this.programType),t.push(this.principal),t.push(this.daysSincePayment),t.push(this.interestRate),t.push(this.interestRateFactor),t.push(this.dailyInterestAmount),t.push(this.totalInterestAmount),this.$emit("loan-data",t)}}},c=l,u=a("2877"),d=Object(u["a"])(c,i,o,!1,null,"0af5fcb0",null),p=d.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[t._m(0),t._m(1),a("a",{staticClass:"navbar-burger burger",class:{"is-active":t.navMenuActive},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(e){return t.toggleNavMenu()}}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"navbar-menu",class:{"is-active":t.navMenuActive},attrs:{id:"navbarBasicExample"}},[a("div",{staticClass:"navbar-start"}),a("div",{staticClass:"navbar-end"},[a("a",{staticClass:"navbar-item",on:{click:function(e){return t.$emit("about")}}},[t._v("About")])])])])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar-item",attrs:{href:"#"}},[a("h1",{staticClass:"box logo is-size-3"},[t._v("$")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-item"},[a("h4",{staticClass:"title is-4 logo-text"},[t._v("Student Loan Calculator")])])}],f={name:"NavbarComponent",data:function(){return{navMenuActive:!1}},methods:{toggleNavMenu:function(){this.navMenuActive?this.navMenuActive=!1:this.navMenuActive=!0}}},h=f,b=(a("8b81"),Object(u["a"])(h,v,m,!1,null,"e61731a4",null)),g=b.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal"},[a("div",{staticClass:"modal-background"}),a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("About")]),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){return t.$emit("close-about")}}})]),t._m(0),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button is-success",on:{click:function(e){return t.$emit("close-about")}}},[t._v("Okay")])])])])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"modal-card-body"},[a("p",[t._v("\n        This app is based off of StudentAid.gov's page on\n        "),a("a",{attrs:{href:"https://studentaid.ed.gov/sa/types/loans/interest-rates"}},[t._v("interest rates and interest calcuation")]),t._v(". Although it is a helpful tool for estimating interest, it's good to know exactly how this is calculated — I encourage you to check out their site for details.\n      ")]),a("br"),a("p",[t._v("The interest rates used in this calculator are solely for Direct Loans disbursed on or after July 1, 2018, and before July 1, 2019. Please note that interest rates for future loans may change.")])])}],C={name:"About",data:function(){return{}}},L=C,w=Object(u["a"])(L,y,_,!1,null,"7bb3cc8d",null),x=w.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("p",[t._v("Add loans below to compare loans or estimate the cost of your degree.")]),a("br"),t._l(t.loans,function(e){return a("div",{key:e},[a("div",{staticClass:"box"},[a("article",{staticClass:"media"},[a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("p",[a("strong",[t._v(t._s(e[0]))]),a("br")])]),a("div",{staticClass:"level"},[a("p",[t._v("$"+t._s(e[2])+" borrowed")]),a("p",[t._v("$"+t._s(Math.round(100*e[6])/100)+" accrued daily")]),a("p",[t._v("$"+t._s(Math.round(100*e[7])/100)+" over "+t._s(e[3])+" days")])])]),a("div",{staticClass:"media-right"},[a("span",{staticClass:"tag is-info"},[t._v(t._s(Math.round(1e4*e[4])/100)+"%")])])])])])})],2)},T=[],U={name:"LoanList",props:["loans"]},P=U,$=Object(u["a"])(P,A,T,!1,null,"8caeb3e6",null),G=$.exports,S={name:"app",components:{FormComponent:p,NavbarComponent:g,About:x,LoanList:G},data:function(){return{loans:[],aboutActive:!1}},methods:{addLoanData:function(t){this.loans.push(t)}}},M=S,O=(a("034f"),Object(u["a"])(M,s,r,!1,null,null,null)),N=O.exports;a("92c6");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(N)}}).$mount("#app")},"64a9":function(t,e,a){},"8b81":function(t,e,a){"use strict";var n=a("c99b"),s=a.n(n);s.a},c99b:function(t,e,a){}});
//# sourceMappingURL=app.b3d52fdc.js.map