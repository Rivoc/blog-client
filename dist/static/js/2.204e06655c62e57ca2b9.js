webpackJsonp([2],{PmIv:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("Dd8w"),r=t.n(a),n=t("NYxO"),o={name:"Register",data:function(){return{userName:"",passWord:""}},methods:r()({},Object(n.b)(["register"]),{onRegister:function(){var e=this;this.register({username:this.userName,password:this.passWord}).then(function(){e.$message({message:"注册成功",type:"success"}),e.$router.push({path:"/Create"})})}})},i={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("div",{attrs:{id:"login"}},[t("h4",[e._v("用户名")]),e._v(" "),t("el-input",{attrs:{type:"text",placeholder:"用户名"},model:{value:e.userName,callback:function(s){e.userName=s},expression:"userName"}}),e._v(" "),t("h4",[e._v("密码")]),e._v(" "),t("el-input",{attrs:{placeholder:"请输入密码","show-password":""},model:{value:e.passWord,callback:function(s){e.passWord=s},expression:"passWord"}}),e._v(" "),t("el-button",{on:{click:e.onRegister}},[e._v("立即注册")]),e._v(" "),t("p",{staticClass:"notice"},[e._v("已有账号？\n      "),t("router-link",{attrs:{to:"Login"}},[t("span",[e._v("立即登录")])])],1)],1)])},staticRenderFns:[]};var u=t("VU/8")(o,i,!1,function(e){t("zMj0")},"data-v-f95f8aaa",null);s.default=u.exports},zMj0:function(e,s){}});
//# sourceMappingURL=2.204e06655c62e57ca2b9.js.map