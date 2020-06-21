(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d86591e6","chunk-2d0babe1"],{3905:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"navigation-buttons"},[a("li",{staticClass:"buttons",on:{click:e.homeRoute}},[a("i",{staticClass:"fas fa-house-damage"})]),e.logged?a("li",{staticClass:"buttons",on:{click:e.settingsRoute}},[a("i",{staticClass:"fas fa-user-cog"})]):e._e(),e.logged?e._e():a("li",{staticClass:"buttons",on:{click:e.otpRegisterRoute}},[e._v("OTP Registration")]),e.logged&&e.admin&&!e.superadmin?a("li",{staticClass:"buttons",on:{click:e.adminRoute}},[e._v("Admin Panel")]):e._e(),e.logged&&e.admin&&e.superadmin?a("li",{staticClass:"buttons",on:{click:e.superAdminRoute}},[e._v("Admin Panel")]):e._e(),e.logged?a("li",{staticClass:"buttons",on:{click:e.contentRoute}},[e._v("View Content")]):e._e(),e.logged?a("li",{staticClass:"buttons",on:{click:e.logoutRoute}},[a("i",{staticClass:"fas fa-sign-out-alt"})]):e._e(),e.logged?e._e():a("li",{staticClass:"buttons",on:{click:e.requestRoute}},[e._v("Request Access")]),e.logged?e._e():a("li",{staticClass:"buttons",on:{click:e.loginRoute}},[e._v("Login")])])])},i=[],o=(a("d3b7"),a("25f0"),{data:function(){return{logged:!1,admin:!1,superadmin:!1}},methods:{homeRoute:function(){this.$router.push("/0:home/")},settingsRoute:function(){this.$router.push({name:"results",params:{id:0,cmd:"result",data:"Super Secure Line on the Way. Please Wait!!",redirectUrl:"/0:settings/"}})},adminRoute:function(){this.$router.push({name:"results",params:{id:0,cmd:"result",data:"Super Secure Line on the Way. Please Wait!!",redirectUrl:"/0:admin/"}})},superAdminRoute:function(){this.$router.push({name:"results",params:{id:0,cmd:"result",data:"Super Secure Line on the Way. Please Wait!!",redirectUrl:"/0:superadmin/"}})},contentRoute:function(){this.$router.push({name:"results",params:{id:0,cmd:"result",data:"Super Secure Line on the Way. Please Wait!!",redirectUrl:"/0:/"}})},logoutRoute:function(){var e=localStorage.getItem("tokendata"),t=localStorage.getItem("userdata");null!=t&&null!=e&&(localStorage.removeItem("tokendata"),localStorage.removeItem("userdata"),this.$router.push({name:"results",params:{id:0,cmd:"result",data:"You are Being Logged Out. Please Wait",redirectUrl:"/0:home/"}}))},requestRoute:function(){this.$router.push("/0:register/request/user")},loginRoute:function(){this.$router.push("/0:login/")},otpRegisterRoute:function(){this.$router.push("/0:register/otp")}},created:function(){var e=this,t=localStorage.getItem("tokendata"),a=localStorage.getItem("userdata");if(null!=a&&null!=t){var s=JSON.parse(this.$hash.AES.decrypt(t,this.$pass).toString(this.$hash.enc.Utf8)),i=JSON.parse(this.$hash.AES.decrypt(a,this.$pass).toString(this.$hash.enc.Utf8));this.axios.post(window.apiRoutes.verifyRoute,{token:s.token}).then((function(t){t.data.auth||t.data.registered||null!=t.data.tokenuser?i.admin&&!i.superadmin?(e.logged=!0,e.admin=!0):i.admin&&i.superadmin?(e.logged=!0,e.admin=!0,e.superadmin=!0):e.logged=!0:e.$router.push({name:"results",params:{id:0,cmd:"results",data:"I think Your Token Has Expired. Please Login to Regerate Another One",redirectUrl:"/0:login/"}})}))}else this.logged=!1}}),n=o,r=a("2877"),l=Object(r["a"])(n,s,i,!1,null,null,null);t["default"]=l.exports},"555d":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content login-page"},[a("TopLinks"),a("div",{staticClass:"loading"},[a("loading",{attrs:{active:e.loading,"can-cancel":!1,"is-full-page":e.fullpage},on:{"update:active":function(t){e.loading=t}}})],1),a("p",{staticStyle:{color:"#bac964"}},[e._v(e._s(e.databasemessage))]),a("p",{staticStyle:{color:"#f6f578"}},[e._v(e._s(e.resultmessage))]),a("h4",[e._v("Login")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[a("label",{attrs:{for:"email"}},[e._v(" > Your E-Mail Address")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{id:"email",type:"email",required:"",autofocus:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",[a("label",{attrs:{for:"password"}},[e._v(" > Your Password")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"password",type:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),e._m(0)])],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("button",{staticClass:"login-button",attrs:{type:"submit"}},[e._v(" Login ")])])}],o=(a("99af"),a("b0c0"),a("d3b7"),a("25f0"),a("3905")),n=a("9062"),r=a.n(n),l=(a("e40d"),{components:{TopLinks:o["default"],Loading:r.a},data:function(){return{email:"",password:"",resultmessage:"",databasemessage:"",loading:!0,fullpage:!0}},methods:{handleSubmit:function(e){var t=this;this.loading=!0,e.preventDefault(),this.password.length>0&&this.$http.post(window.apiRoutes.loginRoute,{email:this.email,password:this.password}).then((function(e){if(console.log(e),e.data.auth&&e.data.registered){localStorage.setItem("tokendata",t.$hash.AES.encrypt(JSON.stringify({token:e.data.token,issuedate:e.data.issuedat,expirydate:e.data.expiryat}),t.$pass).toString()),localStorage.setItem("userdata",t.$hash.AES.encrypt(JSON.stringify(e.data.tokenuser),t.$pass).toString());var a=localStorage.getItem("tokendata"),s=localStorage.getItem("userdata");if(null!=a&&null!=s){var i=JSON.parse(t.$hash.AES.decrypt(a,t.$pass).toString(t.$hash.enc.Utf8)),o=JSON.parse(t.$hash.AES.decrypt(s,t.$pass).toString(t.$hash.enc.Utf8));t.loading=!1,t.resultmessage="> Logged in Successfully as ".concat(o.name,". Your token will expire at ").concat(i.expirydate,"."),setTimeout((function(){null!=t.$route.params.nextUrl?t.$router.push({name:"results",params:{id:0,cmd:"result",data:"Log in Successfull. You Will be Redirected Through a Secure Channel.",redirectUrl:t.$route.params.nextUrl}}):t.$router.push({name:"results",params:{id:0,cmd:"result",data:"Log in Successfull. You Will be Redirected Through a Secure Channel.",redirectUrl:"/0:home/"}})}),500)}}else t.loading=!1,t.resultmessage="> "+e.data.message}))}},mounted:function(){var e=this;this.loading=!0,this.$route.params.summa?this.databasemessage=this.$route.params.data:this.$http.post(window.apiRoutes.homeRoute).then((function(t){console.log(t),"200"==t.status?(e.databasemessage="🟢 Database is Live. You can Login. Ping - ".concat(t.data.ping,"ms"),e.loading=!1):(e.databasemessage="🔴 Database Offline / under Maintenance. Please Try Later",e.loading=!1)}))}}),u=l,d=a("2877"),c=Object(d["a"])(u,s,i,!1,null,null,null);t["default"]=c.exports}}]);