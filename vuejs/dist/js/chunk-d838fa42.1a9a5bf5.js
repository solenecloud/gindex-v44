(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d838fa42","chunk-2d0babe1"],{3905:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"navigation-buttons"},[a("li",{staticClass:"buttons",on:{click:e.homeRoute}},[a("i",{staticClass:"fas fa-house-damage"})]),e.logged?a("li",{staticClass:"buttons",on:{click:e.settingsRoute}},[a("i",{staticClass:"fas fa-user-cog"})]):e._e(),e.logged?e._e():a("li",{staticClass:"buttons",on:{click:e.otpRegisterRoute}},[e._v("OTP Registration")]),e.logged&&e.admin&&!e.superadmin?a("li",{staticClass:"buttons",on:{click:e.adminRoute}},[e._v("Admin Panel")]):e._e(),e.logged&&e.admin&&e.superadmin?a("li",{staticClass:"buttons",on:{click:e.superAdminRoute}},[e._v("Admin Panel")]):e._e(),e.logged?a("li",{staticClass:"buttons",on:{click:e.contentRoute}},[e._v("View Content")]):e._e(),e.logged?a("li",{staticClass:"buttons",on:{click:e.logoutRoute}},[a("i",{staticClass:"fas fa-sign-out-alt"})]):e._e(),e.logged?e._e():a("li",{staticClass:"buttons",on:{click:e.requestRoute}},[e._v("Request Access")]),e.logged?e._e():a("li",{staticClass:"buttons",on:{click:e.loginRoute}},[e._v("Login")])])])},i=[],n=(a("d3b7"),a("25f0"),{data:function(){return{logged:!1,admin:!1,superadmin:!1}},methods:{homeRoute:function(){this.$router.push("/0:home/")},settingsRoute:function(){this.$router.push({name:"results",params:{id:0,cmd:"result",data:"Super Secure Line on the Way. Please Wait!!",redirectUrl:"/0:settings/"}})},adminRoute:function(){this.$router.push({name:"results",params:{id:0,cmd:"result",data:"Super Secure Line on the Way. Please Wait!!",redirectUrl:"/0:admin/"}})},superAdminRoute:function(){this.$router.push({name:"results",params:{id:0,cmd:"result",data:"Super Secure Line on the Way. Please Wait!!",redirectUrl:"/0:superadmin/"}})},contentRoute:function(){this.$router.push({name:"results",params:{id:0,cmd:"result",data:"Super Secure Line on the Way. Please Wait!!",redirectUrl:"/0:/"}})},logoutRoute:function(){var e=localStorage.getItem("tokendata"),t=localStorage.getItem("userdata");null!=t&&null!=e&&(localStorage.removeItem("tokendata"),localStorage.removeItem("userdata"),this.$router.push({name:"results",params:{id:0,cmd:"result",data:"You are Being Logged Out. Please Wait",redirectUrl:"/0:home/"}}))},requestRoute:function(){this.$router.push("/0:register/request/user")},loginRoute:function(){this.$router.push("/0:login/")},otpRegisterRoute:function(){this.$router.push("/0:register/otp")}},created:function(){var e=this,t=localStorage.getItem("tokendata"),a=localStorage.getItem("userdata");if(null!=a&&null!=t){var s=JSON.parse(this.$hash.AES.decrypt(t,this.$pass).toString(this.$hash.enc.Utf8)),i=JSON.parse(this.$hash.AES.decrypt(a,this.$pass).toString(this.$hash.enc.Utf8));this.axios.post(window.apiRoutes.verifyRoute,{token:s.token}).then((function(t){t.data.auth||t.data.registered||null!=t.data.tokenuser?i.admin&&!i.superadmin?(e.logged=!0,e.admin=!0):i.admin&&i.superadmin?(e.logged=!0,e.admin=!0,e.superadmin=!0):e.logged=!0:e.$router.push({name:"results",params:{id:0,cmd:"results",data:"I think Your Token Has Expired. Please Login to Regerate Another One",redirectUrl:"/0:login/"}})}))}else this.logged=!1}}),o=n,r=a("2877"),l=Object(r["a"])(o,s,i,!1,null,null,null);t["default"]=l.exports},f5e7:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content registration-page"},[a("TopLinks"),a("div",{staticClass:"loading"},[a("loading",{attrs:{active:e.loading,"can-cancel":!1,"is-full-page":e.fullpage},on:{"update:active":function(t){e.loading=t}}})],1),a("h4",[e._v("Request Access")]),a("p",{staticStyle:{color:"#bac964"}},[e._v(e._s(e.databasemessage))]),a("p",{staticStyle:{color:"#f6f578"}},[e._v(e._s(e.resultmessage))]),a("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[a("label",{attrs:{for:"name"}},[e._v(" > Your Name")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{id:"name",type:"text",required:"",autofocus:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),a("label",{attrs:{for:"email"}},[e._v(" > Your E-Mail Address")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{id:"email",type:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("label",{attrs:{for:"message"}},[e._v(" > Why You Need Access ")]),a("div",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{id:"message",required:""},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),a("label",{staticStyle:{color:"grey","font-size":"14px"}},[e._v(" (How did You Know about this and Why do You need?) ")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",id:"terms",name:"terms"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:function(t){var a=e.checked,s=t.target,i=!!s.checked;if(Array.isArray(a)){var n=null,o=e._i(a,n);s.checked?o<0&&(e.checked=a.concat([n])):o>-1&&(e.checked=a.slice(0,o).concat(a.slice(o+1)))}else e.checked=i}}}),e._m(0),a("br")]),e._m(1)])],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"terms"}},[e._v(" I Accept and Read the "),a("a",{staticClass:"guidelines",attrs:{href:"https://github.com/tks18/gindex-v4/blob/dark-mode-0-1/CODE_OF_CONDUCT.md",target:"_blank"}},[e._v("Community Guidelines")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("button",{staticClass:"registration-button",attrs:{type:"submit"}},[e._v(" Request Access ")])])}],n=(a("b0c0"),a("3905")),o=a("9062"),r=a.n(o),l=(a("e40d"),{components:{TopLinks:n["default"],Loading:r.a},props:["nextUrl"],data:function(){return{name:"",email:"",message:"",resultmessage:"",databasemessage:"",checked:"",loading:!0,fullpage:!0}},methods:{handleSubmit:function(e){var t=this;if(this.loading=!0,e.preventDefault(),this.checked){var a=window.apiRoutes.requestRoute;this.$http.post(a,{name:this.name,email:this.email,message:this.message}).then((function(e){e&&(e.data.auth&&e.data.registered,t.loading=!1,t.resultmessage=e.data.message)})).catch((function(e){console.error(e)}))}else this.loading=!1,this.resultmessage="> You Need to Accept Community Guidelines.",this.checked=!1}},mounted:function(){var e=this;this.loading=!0,this.$http.post(window.apiRoutes.homeRoute).then((function(t){console.log(t),"200"==t.status?(e.loading=!1,e.databasemessage="🟢 Database is Live. Ping - ".concat(t.data.ping,"ms")):(e.loading=!1,e.databasemessage="🔴 Database Offline / under Maintenance. Please Try Later")}))}}),u=l,c=a("2877"),d=Object(c["a"])(u,s,i,!1,null,null,null);t["default"]=d.exports}}]);