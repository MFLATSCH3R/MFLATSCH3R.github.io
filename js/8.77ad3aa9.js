(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"713b":function(e,a,r){"use strict";r.r(a);var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("q-layout",{attrs:{view:"lHh Lpr lFf"}},[r("q-header",{attrs:{elevated:""}},[r("q-toolbar",[r("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(a){e.drawer=!e.drawer}}}),r("q-toolbar-title",[e._v("COVID-19 Dashboard")])],1)],1),r("q-drawer",{attrs:{bordered:"","content-class":"bg-grey-3"},model:{value:e.drawer,callback:function(a){e.drawer=a},expression:"drawer"}},[r("q-scroll-area",{staticClass:"fit"},e._l(e.menuItem,(function(a,t){return r("q-list",{key:t},[r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",active:"Outbox"===a.label,to:a.routerTarget}},[r("q-item-section",{attrs:{avatar:""}},[r("q-icon",{attrs:{name:a.icon}})],1),r("q-item-section",[e._v("\n            "+e._s(a.label)+"\n          ")])],1),a.separator?r("q-separator"):e._e()],1)})),1)],1),r("q-page-container",[r("router-view")],1)],1)},n=[],o={name:"MainLayout",data:function(){return{drawer:!0,menuItem:[{icon:"home",label:"Main Page",routerTarget:"dashboard",separator:!0},{icon:"pie_chart",label:"Overview",routerTarget:"piechart",separator:!1},{icon:"show_chart",label:"Timeline",routerTarget:"timeline",separator:!1}]}}},i=o,l=r("2877"),c=r("eebe"),s=r.n(c),u=r("4d5a"),d=r("e359"),b=r("65c6"),p=r("9c40"),m=r("6ac5"),w=r("9404"),v=r("4983"),q=r("1c1c"),Q=r("66e5"),f=r("4074"),h=r("0016"),g=r("eb85"),_=r("09e3"),T=r("714f"),k=Object(l["a"])(i,t,n,!1,null,null,null);a["default"]=k.exports;s()(k,"components",{QLayout:u["a"],QHeader:d["a"],QToolbar:b["a"],QBtn:p["a"],QToolbarTitle:m["a"],QDrawer:w["a"],QScrollArea:v["a"],QList:q["a"],QItem:Q["a"],QItemSection:f["a"],QIcon:h["a"],QSeparator:g["a"],QPageContainer:_["a"]}),s()(k,"directives",{Ripple:T["a"]})}}]);