webpackJsonp([1,3,4,6,7,8],{"1ma/":function(e,t,a){var n=a("IPLQ");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("b6d8c268",n,!0)},"3kJq":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("ntBd"),i=a("t93e"),r=a("iH1u"),s=a("asa4"),o=a("h705"),l=a("0xDb"),c={data:function(){return{loading:!0}},components:{MainNavbar:n.default,MainSidebar:i.default,accountList:r.default,userList:s.default,authorizeList:o.default},computed:{documentClientHeight:{get:function(){return this.$store.state.common.documentClientHeight},set:function(e){this.$store.commit("common/updateDocumentClientHeight",e)}},userId:{get:function(){return this.$store.state.user.id},set:function(e){this.$store.commit("user/updateId",e)}},siteContentViewHeight:function(){return{minHeight:this.documentClientHeight-50-30-2+"px"}}},created:function(){this.removeLoading(),this.getUserInfo()},mounted:function(){this.resetDocumentClientHeight()},methods:{resetDocumentClientHeight:function(){var e=this;this.documentClientHeight=document.documentElement.clientHeight,window.onresize=function(){e.documentClientHeight=document.documentElement.clientHeight}},getUserInfo:function(){this.loading=!1,this.userId=this.$cookie.get("userId"),null!==this.userId&&void 0!==this.userId&&""!==this.userId||(Object(l.a)(),this.$router.push({name:"login"}))},removeLoading:function(){var e=document.getElementById("loadingMark"),t=document.getElementById("loadCss");null!=e&&null!=t&&(document.getElementsByTagName("head")[0].removeChild(t),e.parentNode.removeChild(e))}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"site-wrapper",attrs:{"element-loading-text":"拼命加载中"}},[!e.loading&&e.userId?[a("main-sidebar"),e._v(" "),a("div",{staticClass:"site-content__wrapper",style:{"min-height":e.documentClientHeight+"px"}},[a("main-navbar"),e._v(" "),a("main",{staticClass:"site-content"},[a("el-card",{attrs:{"body-style":e.siteContentViewHeight}},[a(e.$route.params.routeName,{tag:"component"})],1)],1)],1)]:e._e()],2)},staticRenderFns:[]},u=a("VU/8")(c,d,!1,null,null,null);t.default=u.exports},"3xp5":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.avatar {\n  padding: 1px;\n  border: 1px solid #ffd700;\n  border-radius: 50%;\n  background: rgba(207, 30, 34, 0.9);\n  -webkit-box-shadow: 0 0 8px #ffd700;\n          box-shadow: 0 0 8px #ffd700;\n}\n",""])},IPLQ:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"",""])},LqYr:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"",""])},XgCk:function(e,t,a){var n=a("ll5p");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("185d90f6",n,!0)},asa4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Dd8w"),i=a.n(n),r=a("gyMJ"),s={data:function(){return{dataForm:{orderNo:"",companyNameA:"",companyNameB:"",orderStatus:""},dataList:[],page:1,limit:10,totalPage:0,dataListLoading:!1}},mounted:function(){},methods:{getDataList:function(e){var t=this;"reset"===e&&(this.page=1,this.limit=10),this.dataListLoading=!0,function(e){return Object(r.a)("/advertOrder/listPage",e)}(i()({},this.dataForm,{page:this.page,limit:this.limit})).then(function(e){var a=e.data;a&&!0===a.success?(t.dataList=a.data.rows,t.totalPage=a.data.total):(t.$message.error(a.message),t.dataList=[],t.totalPage=0),t.dataListLoading=!1})},sizeChangeHandle:function(e){this.limit=e,this.page=1,this.getDataList()},currentChangeHandle:function(e){this.page=e,this.getDataList()},resetForm:function(){this.dataForm={orderNo:"",companyNameA:"",companyNameB:"",orderStatus:""}}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{attrs:{inline:!0},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getDataList("reset")}}},[a("el-form-item",{attrs:{label:"账号: "}},[a("el-input",{attrs:{placeholder:""},model:{value:e.dataForm.orderNo,callback:function(t){e.$set(e.dataForm,"orderNo",t)},expression:"dataForm.orderNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"公司名称: "}},[a("el-input",{attrs:{placeholder:""},model:{value:e.dataForm.companyNameA,callback:function(t){e.$set(e.dataForm,"companyNameA",t)},expression:"dataForm.companyNameA"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"姓名: "}},[a("el-input",{attrs:{placeholder:""},model:{value:e.dataForm.companyNameB,callback:function(t){e.$set(e.dataForm,"companyNameB",t)},expression:"dataForm.companyNameB"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"电话: "}},[a("el-input",{attrs:{placeholder:""},model:{value:e.dataForm.orderStatus,callback:function(t){e.$set(e.dataForm,"orderStatus",t)},expression:"dataForm.orderStatus"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"success"},on:{click:function(t){return e.getDataList("reset")}}},[e._v("查询")]),e._v(" "),a("el-button",{on:{click:function(t){return e.resetForm()}}},[e._v("重置")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:"",height:"50vh"}},[a("el-table-column",{attrs:{type:"index","header-align":"center",align:"center",width:"50",label:"序号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"orderNo","header-align":"center",align:"center",label:"ID"}}),e._v(" "),a("el-table-column",{attrs:{prop:"companyNameA","header-align":"center",align:"center",label:"账号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"contractNo","header-align":"center",align:"center",label:"密码"}}),e._v(" "),a("el-table-column",{attrs:{prop:"companyNameB","header-align":"center",align:"center",label:"注册会员"}}),e._v(" "),a("el-table-column",{attrs:{prop:"subjects","header-align":"center",align:"center",label:"公司名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"subjects","header-align":"center",align:"center",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"subjects","header-align":"center",align:"center",label:"电话"}}),e._v(" "),a("el-table-column",{attrs:{prop:"subjects","header-align":"center",align:"center",label:"邮箱"}}),e._v(" "),a("el-table-column",{attrs:{prop:"subjects","header-align":"center",align:"center",label:"国家"}}),e._v(" "),a("el-table-column",{attrs:{prop:"subjects","header-align":"center",align:"center",label:"地区"}})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.page,"page-sizes":[10,20,50,100],"page-size":e.limit,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}})],1)},staticRenderFns:[]};var l=a("VU/8")(s,o,!1,function(e){a("XgCk")},"data-v-0b71eb4e",null);t.default=l.exports},"d+gk":function(e,t,a){var n=a("uodT");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("5508419e",n,!0)},h705:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("gyMJ"),i={data:function(){return{dataList:[],page:1,limit:10,totalPage:0,dataListLoading:!1}},mounted:function(){},methods:{getDataList:function(e){var t=this;"reset"===e&&(this.page=1,this.limit=10),this.dataListLoading=!0,function(e){return Object(n.a)("/advertOrder/listPage",e)}({page:this.page,limit:this.limit}).then(function(e){var a=e.data;a&&!0===a.success?(t.dataList=a.data.rows,t.totalPage=a.data.total):(t.$message.error(a.message),t.dataList=[],t.totalPage=0),t.dataListLoading=!1})},sizeChangeHandle:function(e){this.limit=e,this.page=1,this.getDataList()},currentChangeHandle:function(e){this.page=e,this.getDataList()}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:"",height:"50vh"}},[a("el-table-column",{attrs:{prop:"orderNo","header-align":"center",align:"center",label:"账号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"orderNo","header-align":"center",align:"center",label:"公司名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"companyNameA","header-align":"center",align:"center",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"companyNameA","header-align":"center",align:"center",label:"电话"}}),e._v(" "),a("el-table-column",{attrs:{prop:"contractNo","header-align":"center",align:"center",label:"获取时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"orderNo","header-align":"center",align:"center",label:"墨水编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"orderNo","header-align":"center",align:"center",label:"主板编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"companyNameB","header-align":"center",align:"center",label:"获取授权编码"}})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.page,"page-sizes":[10,20,50,100],"page-size":e.limit,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}})],1)},staticRenderFns:[]};var s=a("VU/8")(i,r,!1,function(e){a("k/6p")},"data-v-21ce5a28",null);t.default=s.exports},iH1u:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("fIzz"),i={components:{AddOrUpdate:a("f1Bb").default},data:function(){return{dataList:[],page:1,limit:10,totalPage:0,dataListLoading:!1,addOrUpdateVisible:!1}},mounted:function(){},methods:{addHandle:function(){var e=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){e.$refs.addOrUpdate.init()})},resetPassHandle:function(e){var t=this;this.$confirm("确定对 “ <i>"+e.employeeName+"</i> ” 进行 <strong>重置密码</strong> 操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0}).then(function(){t.dataListLoading=!0;var a={employeeId:e.employeeId};Object(n.d)(a).then(function(e){var a=e.data;a&&!0===a.success?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.getDataList()}}):t.$message.error(a.message),t.dataListLoading=!1})}).catch(function(){t.$message.info("取消操作！")})},deleteHandle:function(e){var t=this;1!==e.status?this.$confirm("确定对 “ <i>"+e.employeeName+"</i> ” 进行 <strong>删除</strong> 操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0}).then(function(){t.dataListLoading=!0;var a={employeeId:e.employeeId};Object(n.b)(a).then(function(e){var a=e.data;a&&!0===a.success?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.getDataList()}}):t.$message.error(a.message),t.dataListLoading=!1})}).catch(function(){t.$message.info("取消操作！")}):this.$message.error("当前用户状态为启用，不允许删除操作！")},getDataList:function(e){var t=this;"reset"===e&&(this.page=1,this.limit=10),this.dataListLoading=!0;var a={page:this.page,limit:this.limit};Object(n.c)(a).then(function(e){var a=e.data;a&&!0===a.success?(t.dataList=a.data.rows,t.totalPage=a.data.total):(t.$message.error(a.message),t.dataList=[],t.totalPage=0),t.dataListLoading=!1})},sizeChangeHandle:function(e){this.limit=e,this.page=1,this.getDataList()},currentChangeHandle:function(e){this.page=e,this.getDataList()}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{attrs:{inline:!0}},[a("el-form-item",[a("el-button",{attrs:{type:"success"},on:{click:function(t){return e.addHandle()}}},[e._v("添加账号")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:"",height:"50vh"}},[a("el-table-column",{attrs:{prop:"orderNo","header-align":"center",align:"center",label:"账号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"orderNo","header-align":"center",align:"center",label:"创建时间"}}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",width:"200",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{color:"#E6A23C"},attrs:{icon:"el-icon-setting",type:"text"},on:{click:function(a){return e.resetPassHandle(t.row)}}},[e._v("重置密码")]),e._v(" "),a("el-button",{staticClass:"del-color",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.deleteHandle(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.page,"page-sizes":[10,20,50,100],"page-size":e.limit,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e()],1)},staticRenderFns:[]};var s=a("VU/8")(i,r,!1,function(e){a("1ma/")},"data-v-07b3b76a",null);t.default=s.exports},"k/6p":function(e,t,a){var n=a("LqYr");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("6e3ffad5",n,!0)},ll5p:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"",""])},ntBd:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("0xDb"),i={data:function(){return{account:this.$cookie.get("account")}},methods:{logoutHandle:function(){var e=this;this.$confirm("确定进行 <strong>退出</strong> 操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0}).then(function(){Object(n.a)(),e.$router.push({name:"login"})})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"site-navbar"},[a("div",{staticClass:"site-navbar__body clearfix"},[e._v("\n    "+e._s(e.account)+","),a("span",{staticClass:"pointer danger-color",on:{click:function(t){return e.logoutHandle()}}},[e._v("退出登录")])])])},staticRenderFns:[]};var s=a("VU/8")(i,r,!1,function(e){a("uxbd")},null,null);t.default=s.exports},t93e:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",{staticClass:"site-sidebar site-sidebar--dark"},[a("div",{staticClass:"site-sidebar__inner"},[a("el-menu",{staticClass:"site-sidebar__menu",attrs:{mode:"vertical","default-active":"1",collapseTransition:!1,"active-text-color":"#fff","text-color":"#fff"}},e._l(e.menuList,function(t){return a("el-menu-item",{key:t.id,attrs:{index:t.id+""},on:{click:function(a){return e.$router.push({path:t.path})}}},[a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.name))])])}),1)],1)])},staticRenderFns:[]};var i=a("VU/8")({data:function(){return{menuList:[{id:1,path:"/backstage/accountList",name:"账号管理"},{id:2,path:"/backstage/userList",name:"用户列表"},{id:3,path:"/backstage/authorizeList",name:"墨水授权列表"}]}},methods:{}},n,!1,function(e){a("d+gk")},null,null);t.default=i.exports},uodT:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.site-sidebar {\n  overflow: hidden !important;\n}\n.site-sidebar--fold .site-sidebar__inner {\n  overflow-y: auto;\n  width: 80px;\n}\n",""])},uxbd:function(e,t,a){var n=a("3xp5");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("788738a1",n,!0)}});