webpackJsonp([10],{"9n10":function(t,e){},E5Ra:function(t,e){},IV1b:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a=n("Dd8w"),o=n.n(a),s=n("NYxO"),i={name:"Header",computed:o()({},Object(s.c)(["isLogin","user"])),created:function(){this.checkLogin()},methods:o()({},Object(s.b)(["checkLogin","logout"]),{onLogout:function(){var t=this;this.logout().then(function(){t.$message.success("注销成功"),t.$router.push({path:"/"})})}})},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"no-login":!t.isLogin,login:t.isLogin}},[t.isLogin?t._e():[n("router-link",{attrs:{tag:"h1",to:"/"}},[t._v("LET'S SHARE")]),t._v(" "),n("P",[t._v("精品博客汇聚")]),t._v(" "),n("div",[n("router-link",{attrs:{to:"/login"}},[n("el-button",[t._v("立即登录")])],1),t._v(" "),n("router-link",{attrs:{to:"Register"}},[n("el-button",[t._v("注册账号")])],1)],1),t._v(" "),n("div",{staticClass:"border"})],t._v(" "),t.isLogin?[n("router-link",{staticClass:"tit-islogin",attrs:{to:"/",tag:"h1"}},[t._v("LET'S SHARE\n    ")]),t._v(" "),n("router-link",{staticClass:"el-icon-plus",attrs:{to:"/create",tag:"i"}}),t._v(" "),n("div",{staticClass:"avatar"},[n("img",{staticClass:"author-avatar",attrs:{src:t.user.avatar,alt:""}})]),t._v(" "),n("el-dropdown",[n("span",{staticClass:"el-dropdown-link"},[n("i",{staticClass:"el-icon-arrow-down"})]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("router-link",{attrs:{to:"/my"}},[n("el-dropdown-item",[t._v("我的")])],1),t._v(" "),n("el-dropdown-item",{nativeOn:{click:function(e){return t.onLogout(e)}}},[t._v("注销")])],1)],1)]:t._e()],2)},staticRenderFns:[]};var c={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  ©xxx.com 2019 wechat:asdffgh\n")])},staticRenderFns:[]};var l={name:"App",components:{Header:n("VU/8")(i,u,!1,function(t){n("E5Ra")},"data-v-ce5a34ba",null).exports,Footer:n("VU/8")({name:"Footer"},c,!1,function(t){n("IV1b")},"data-v-112167d0",null).exports},data:function(){return{loading:!1}},mounted:function(){var t=this;this.bus.$on("changeLoading",function(e){t.loading=e})}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header",{attrs:{id:"header"}}),this._v(" "),this.loading?e("div",{staticClass:"mask"},[e("i",{staticClass:"el-icon-loading"})]):this._e(),this._v(" "),e("div",{attrs:{id:"main"}},[e("router-view")],1),this._v(" "),e("Footer",{attrs:{id:"footer"}})],1)},staticRenderFns:[]};var f=n("VU/8")(l,d,!1,function(t){n("u705")},"data-v-3179cc04",null).exports,p=n("/ocq"),g=n("Xxa5"),m=n.n(g),h=n("exGp"),v=n.n(h),w=n("dXfV"),b="/auth/register",L="/auth/login",_="/auth/logout",k="/auth",x=function(t){var e=t.username,n=t.password;return Object(w.a)(b,"POST",{username:e,password:n})},C=function(t){var e=t.username,n=t.password;return Object(w.a)(L,"POST",{username:e,password:n})},E=function(){return Object(w.a)(_)},I=function(){return Object(w.a)(k)},P={state:{user:null,isLogin:!1},getters:{user:function(t){return t.user},isLogin:function(t){return t.isLogin}},mutations:{setUser:function(t,e){t.user=e.user},setLogin:function(t,e){t.isLogin=e.isLogin}},actions:{login:function(t,e){var n=t.commit,r=e.username,a=e.password;return C({username:r,password:a}).then(function(t){n("setUser",{user:t.data}),n("setLogin",{isLogin:!0})})},register:function(t,e){var n=this,r=t.commit,a=e.username,o=e.password;return v()(m.a.mark(function t(){var e;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x({username:a,password:o});case 2:return e=t.sent,r("setUser",{user:e.data}),r("setLogin",{isLogin:!0}),t.abrupt("return",e.data);case 6:case"end":return t.stop()}},t,n)}))()},logout:function(t){var e=this,n=t.commit;return v()(m.a.mark(function t(){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E();case 2:n("setUser",{user:null}),n("setLogin",{isLogin:!1});case 4:case"end":return t.stop()}},t,e)}))()},checkLogin:function(t){var e=this,n=t.commit,r=t.state;return v()(m.a.mark(function t(){var a;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.isLogin){t.next=2;break}return t.abrupt("return",!0);case 2:return t.next=4,I();case 4:if(a=t.sent,n("setLogin",{isLogin:a.isLogin}),a.isLogin){t.next=8;break}return t.abrupt("return",!1);case 8:return n("setUser",{user:a.data}),t.abrupt("return",!0);case 10:case"end":return t.stop()}},t,e)}))()}}},R={state:{},getters:{},mutations:{},actions:{}};r.default.use(s.a);var M=new s.a.Store({modules:{blog:R,auth:P}}),O=n("zL8q"),U=n.n(O);r.default.use(p.a);var F=new p.a({routes:[{path:"/",name:"Home",component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"wXUp"))}},{path:"/detail/:blogId",name:"Detail",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"G9XZ"))}},{path:"/login",name:"Login",component:function(){return n.e(6).then(n.bind(null,"vdVF"))}},{path:"/register",name:"Register",component:function(){return n.e(2).then(n.bind(null,"PmIv"))}},{path:"/my",name:"My",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"lk5E"))},meta:{requiresAuth:!0}},{path:"/create",name:"Create",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"3tc2"))},meta:{requiresAuth:!0}},{path:"/user/:userId",name:"User",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"4MyM"))}},{path:"/user/:blogId",name:"Edit",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"Ekea"))},meta:{requiresAuth:!0}}]});F.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.requiresAuth})?M.dispatch("checkLogin").then(function(e){e?n():(O.Message.error("请先登录哦"),n({path:"/login",query:{redirect:t.fullPath}}))}):n()});var V=F;n("tvR6"),n("9n10"),n("eN+V");r.default.config.productionTip=!1,r.default.use(U.a),r.default.prototype.bus=new r.default,new r.default({el:"#app",router:V,store:M,components:{App:f},template:"<App/>",render:function(t){return t(f)}}),r.default.filter("formatDate",function(t){if(!t)return"";var e=new Date(t),n=(new Date).getTime()-e.getTime();return n<0?"":n/1e3<30?"刚刚":n/1e3<60?parseInt(n/1e3)+"秒前":n/6e4<60?parseInt(n/6e4)+"分钟前":n/36e5<24?parseInt(n/36e5)+"小时前":n/864e5<31?parseInt(n/864e5)+"天前":n/2592e6<12?parseInt(n/2592e6)+"月前":parseInt(n/31536e6)+"年前"}),r.default.filter("getYear",function(t){return t?new Date(t).getFullYear():""}),r.default.filter("getMonth",function(t){return t?new Date(t).getMonth()+1+"月":""}),r.default.filter("format2",function(t){if(!t)return"";var e=new Date(t);return e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate()})},dXfV:function(t,e,n){"use strict";e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new a.a(function(r,a){var o={url:t,method:e};"get"===e.toLowerCase()?o.params=n:o.data=n,console.log(o),s()(o).then(function(t){"ok"===t.data.status?r(t.data):(i.Message.error(t.data.msg),a(t.data))}).catch(function(t){i.Message.error("网络异常"+t),a(t)})})};var r=n("//Fk"),a=n.n(r),o=n("mtWM"),s=n.n(o),i=n("zL8q");n.n(i);s.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",s.a.defaults.baseURL="https://blog-server.hunger-valley.com",s.a.defaults.withCredentials=!0},"eN+V":function(t,e){},tvR6:function(t,e){},u705:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0119f5c4632b658e7a67.js.map