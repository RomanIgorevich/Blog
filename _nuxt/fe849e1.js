(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{276:function(t,e,n){var content=n(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("4c14ebce",content,!0,{sourceMap:!1})},285:function(t,e,n){"use strict";n(276)},286:function(t,e,n){var o=n(27)(!1);o.push([t.i,".auth{text-align:center;padding-top:100px}.auth__form{display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;height:40vh}.auth__form input{min-width:460px}",""]),t.exports=o},295:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{user:{email:"",password:""}}},methods:{onSubmit:function(){var t=this;this.$store.dispatch("authUser",this.user).then((function(e){t.$router.push("/admin")})).catch((function(e){console.log(e),t.user.email="",t.user.password=""}))}}},r=(n(285),n(4)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"auth"},[n("div",{staticClass:"container"},[n("form",{staticClass:"auth__form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("AppInput",{attrs:{type:"email"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}},[t._v("Логин: ")]),t._v(" "),n("AppInput",{attrs:{type:"password"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}},[t._v("Пароль: ")]),t._v(" "),n("div",{staticClass:"controls"},[n("AppButton",[t._v("Войти")]),t._v(" "),n("p",{staticStyle:{"padding-top":"30px"}},[t._v("Логин: admin@admin.ru")]),t._v(" "),n("p",[t._v("Пароль: 111111")]),t._v(" "),n("h3",{staticStyle:{"padding-top":"30px","max-width":"400px"}},[t._v("Если вы находитесь на территории, которая недавно попала под действие санкций OFAC (например, в Крыму), вам нужно зайти через VPN.")])],1)],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);