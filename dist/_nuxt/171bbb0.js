(window.webpackJsonp=window.webpackJsonp||[]).push([[11,3],{253:function(t,e,n){var content=n(256);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("2921c471",content,!0,{sourceMap:!1})},255:function(t,e,n){"use strict";n(253)},256:function(t,e,n){var r=n(27)(!1);r.push([t.i,".controls[data-v-9821b06c]{text-align:center;margin:20px 0}",""]),t.exports=r},261:function(t,e,n){"use strict";n.r(e);n(39),n(29),n(38),n(48),n(30),n(49);var r=n(21);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:{postEdit:{type:Object,required:!1}},data:function(){return{post:this.postEdit?c({},this.postEdit):{title:"",descr:"",img:"",content:""}}},methods:{cancel:function(){this.$router.push("/admin/")},onSubmit:function(){this.$emit("submit",this.post)}}},f=(n(255),n(4)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"new-post"},[n("div",{staticClass:"container"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("AppInput",{model:{value:t.post.title,callback:function(e){t.$set(t.post,"title",e)},expression:"post.title"}},[t._v("Заголовок:")]),t._v(" "),n("AppInput",{model:{value:t.post.descr,callback:function(e){t.$set(t.post,"descr",e)},expression:"post.descr"}},[t._v("Описание:")]),t._v(" "),n("AppInput",{model:{value:t.post.img,callback:function(e){t.$set(t.post,"img",e)},expression:"post.img"}},[t._v("Ссылка на картинку:")]),t._v(" "),n("AppTextArea",{model:{value:t.post.content,callback:function(e){t.$set(t.post,"content",e)},expression:"post.content"}},[t._v(" Содержание:")]),t._v(" "),n("div",{staticClass:"controls"},[n("div",{staticClass:"btn btnDanger",on:{click:t.cancel}},[t._v("Отмена")]),t._v(" "),n("AppButton",[t._v(" Сохранить")])],1)],1)])])}),[],!1,null,"9821b06c",null);e.default=component.exports},298:function(t,e,n){"use strict";n.r(e);n(39),n(29),n(38),n(48),n(30),n(49);var r=n(21),o=n(46),c=n.n(o);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={components:{NewPostFrom:n(261).default},layout:"admin",asyncData:function(t){return c.a.get("https://blog-nuxt-1449d-default-rtdb.firebaseio.com/posts/".concat(t.params.postId,".json")).then((function(e){return{post:f(f({},e.data),{},{id:t.params.postId})}})).catch((function(e){return t.error(e)}))},methods:{onSubmit:function(t){var e=this;this.$store.dispatch("editPost",t).then((function(){e.$router.push("/admin")}))}}},O=n(4),component=Object(O.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("NewPostFrom",{attrs:{postEdit:t.post},on:{submit:t.onSubmit}})}),[],!1,null,null,null);e.default=component.exports}}]);