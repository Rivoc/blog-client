webpackJsonp([6],{"6jDv":function(e,t){},vdVF:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("Dd8w"),r=s.n(n),a=s("NYxO"),o={name:"Login",data:function(){return{userName:"",passWord:""}},methods:r()({},Object(a.b)(["login"]),{onLogin:function(){var e=this;this.login({username:this.userName,password:this.passWord}).then(function(){e.$message({message:"登录成功",type:"success"});var t=decodeURIComponent(e.$route.query.redirect||"/");e.$router.push({path:t})})}})},i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{attrs:{id:"login"}},[s("h4",[e._v("用户名")]),e._v(" "),s("el-input",{attrs:{type:"text",placeholder:"用户名"},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),e._v(" "),s("h4",[e._v("密码")]),e._v(" "),s("el-input",{attrs:{placeholder:"请输入密码","show-password":""},model:{value:e.passWord,callback:function(t){e.passWord=t},expression:"passWord"}}),e._v(" "),s("el-button",{on:{click:e.onLogin}},[e._v("立即登录")]),e._v(" "),s("p",{staticClass:"notice"},[e._v("没有账号？\n      "),s("router-link",{attrs:{to:"Register"}},[s("span",[e._v("注册新用户")])])],1)],1)])},staticRenderFns:[]};var u=s("VU/8")(o,i,!1,function(e){s("6jDv")},"data-v-3f12710b",null);t.default=u.exports}});
//# sourceMappingURL=6.28b0a7484afcf9e7fcb5.js.map