webpackJsonp([8],{LqYr:function(e,a,t){(e.exports=t("FZ+f")(!1)).push([e.i,"",""])},h705:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("gyMJ"),r={data:function(){return{dataList:[],page:1,limit:10,totalPage:0,dataListLoading:!1}},mounted:function(){},methods:{getDataList:function(e){var a=this;"reset"===e&&(this.page=1,this.limit=10),this.dataListLoading=!0,function(e){return Object(n.a)("/advertOrder/listPage",e)}({page:this.page,limit:this.limit}).then(function(e){var t=e.data;t&&!0===t.success?(a.dataList=t.data.rows,a.totalPage=t.data.total):(a.$message.error(t.message),a.dataList=[],a.totalPage=0),a.dataListLoading=!1})},sizeChangeHandle:function(e){this.limit=e,this.page=1,this.getDataList()},currentChangeHandle:function(e){this.page=e,this.getDataList()}}},i={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:"",height:"50vh"}},[t("el-table-column",{attrs:{prop:"orderNo","header-align":"center",align:"center",label:"账号"}}),e._v(" "),t("el-table-column",{attrs:{prop:"orderNo","header-align":"center",align:"center",label:"公司名称"}}),e._v(" "),t("el-table-column",{attrs:{prop:"companyNameA","header-align":"center",align:"center",label:"姓名"}}),e._v(" "),t("el-table-column",{attrs:{prop:"companyNameA","header-align":"center",align:"center",label:"电话"}}),e._v(" "),t("el-table-column",{attrs:{prop:"contractNo","header-align":"center",align:"center",label:"获取时间"}}),e._v(" "),t("el-table-column",{attrs:{prop:"orderNo","header-align":"center",align:"center",label:"墨水编号"}}),e._v(" "),t("el-table-column",{attrs:{prop:"orderNo","header-align":"center",align:"center",label:"主板编号"}}),e._v(" "),t("el-table-column",{attrs:{prop:"companyNameB","header-align":"center",align:"center",label:"获取授权编码"}})],1),e._v(" "),t("el-pagination",{attrs:{"current-page":e.page,"page-sizes":[10,20,50,100],"page-size":e.limit,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}})],1)},staticRenderFns:[]};var l=t("VU/8")(r,i,!1,function(e){t("k/6p")},"data-v-21ce5a28",null);a.default=l.exports},"k/6p":function(e,a,t){var n=t("LqYr");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t("rjj0")("6e3ffad5",n,!0)}});