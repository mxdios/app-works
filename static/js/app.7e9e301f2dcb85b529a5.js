webpackJsonp([0],{"0+tf":function(t,e){},"2Og6":function(t,e){},"6ZJX":function(t,e){},"7QVd":function(t,e){},"8dvV":function(t,e){},"B/Wb":function(t,e){},DNVF:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=i("VU/8")({name:"App"},n,!1,function(t){i("llsc")},null,null).exports,p=i("/ocq"),s={name:"ContactItem",props:{screenWidth:0,titleBtns:{type:Array,default:function(){return[]}}},data:function(){return{isShow:!1}},methods:{titleBtnClick:function(t){this.isShow=!1;var e=document.querySelector("#page"+t);window.scrollTo({top:e.offsetTop-60,behavior:"smooth"})},enumShow:function(){this.isShow=!this.isShow}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"navigationBarCss"},[i("div",{class:t.screenWidth>1e3?"username":"phoneusername"},[t._v("\n        MiaoXiaodong\n    ")]),t._v(" "),t.screenWidth>1e3?i("div",{staticClass:"navTitle"},t._l(t.titleBtns,function(e,a){return i("div",{key:a,staticClass:"titlebtncss",on:{click:function(e){return t.titleBtnClick(a)}}},[t._v("\n            "+t._s(e)+"\n        ")])}),0):i("div",{staticClass:"navTitle"},[i("div",{staticClass:"titlebtncss",on:{click:t.enumShow}},[i("Icon",{attrs:{type:t.isShow?"md-close":"md-menu",size:"30"}})],1)])]),t._v(" "),t.isShow&&t.screenWidth<1e3?i("div",{staticClass:"enumView"},t._l(t.titleBtns,function(e,a){return i("div",{key:a,staticClass:"enumItem",on:{click:function(e){return t.titleBtnClick(a)}}},[t._v("\n      "+t._s(e)+"\n    ")])}),0):t._e()])},staticRenderFns:[]};var r=i("VU/8")(s,c,!1,function(t){i("B/Wb")},null,null).exports,d={name:"AppItemLeft",props:{screenWidth:0,appItemLeftDict:{type:Object,default:function(){return{}}}},data:function(){return{}},created:function(){},mounted:function(){},methods:{downClick:function(){window.open(this.appItemLeftDict.downurl,"_blank")},androidDownClick:function(){window.open(this.appItemLeftDict.androidDownurl,"_blank")}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.screenWidth>1e3?i("div",{staticClass:"AppItemLeft"},[i("Layout",[i("Sider",{staticClass:"leftsider",attrs:{"hide-trigger":"",width:.5*t.screenWidth}},[i("div",{staticClass:"appimage"},[i("img",{staticClass:"imagecss",attrs:{src:t.appItemLeftDict.image,alt:""}})])]),t._v(" "),i("Layout",[i("Header",{staticClass:"header"},[i("img",{staticClass:"appicon",attrs:{src:t.appItemLeftDict.appIcon,alt:""}}),t._v(" "),i("div",{staticClass:"appTitle"},[t._v("\n              "+t._s(t.appItemLeftDict.appTitle)+"\n            ")])]),t._v(" "),i("Content",{staticClass:"content"},[i("div",{staticClass:"appInfo"},[t._v("\n              "+t._s(t.appItemLeftDict.appInfo)+"\n            ")])]),t._v(" "),i("Footer",{staticClass:"footer"},[i("img",{staticClass:"appDown",attrs:{src:t.appItemLeftDict.appDownload,alt:""},on:{click:t.downClick}}),t._v(" "),i("img",{staticClass:"appDown",attrs:{src:t.appItemLeftDict.androidAppDownload,alt:""},on:{click:t.androidDownClick}})])],1)],1)],1):i("div",{staticClass:"phonebgview"},[i("img",{staticClass:"phoneimagecss",attrs:{src:t.appItemLeftDict.image,alt:""}}),t._v(" "),i("div",{staticClass:"phonetitlebg"},[i("img",{staticClass:"phoneappicon",attrs:{src:t.appItemLeftDict.appIcon,alt:""}}),t._v(" "),i("div",{staticClass:"phoneappTitle"},[t._v("\n      "+t._s(t.appItemLeftDict.appTitle)+"\n    ")])]),t._v(" "),i("div",{staticClass:"phoneappInfo"},[t._v("\n    "+t._s(t.appItemLeftDict.appInfo)+"\n  ")]),t._v(" "),i("img",{staticClass:"phoneappDown",attrs:{src:t.appItemLeftDict.appDownload,alt:""},on:{click:t.downClick}}),t._v(" "),i("img",{staticClass:"phoneappDown",attrs:{src:t.appItemLeftDict.androidAppDownload,alt:""},on:{click:t.androidDownClick}})])},staticRenderFns:[]};var l=i("VU/8")(d,m,!1,function(t){i("kjg4")},"data-v-2780ef21",null).exports,h={name:"AppItemRight",props:{screenWidth:0,appItemLeftDict:{type:Object,default:function(){return{}}}},data:function(){return{}},created:function(){},mounted:function(){},methods:{downClick:function(){window.open(this.appItemLeftDict.downurl,"_blank")},androidDownClick:function(){window.open(this.appItemLeftDict.androidDownurl,"_blank")}}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.screenWidth>1e3?i("div",{staticClass:"AppItemRight"},[i("Layout",[i("Layout",[i("Header",{staticClass:"rightheader"},[i("img",{staticClass:"rightappicon",attrs:{src:t.appItemLeftDict.appIcon,alt:""}}),t._v(" "),i("div",{staticClass:"rightappTitle"},[t._v("\n              "+t._s(t.appItemLeftDict.appTitle)+"\n            ")])]),t._v(" "),i("Content",{staticClass:"rightcontent"},[i("div",{staticClass:"rightappInfo"},[t._v("\n              "+t._s(t.appItemLeftDict.appInfo)+"\n            ")])]),t._v(" "),i("Footer",{staticClass:"rightfooter"},[i("img",{staticClass:"rightappDown",attrs:{src:t.appItemLeftDict.androidAppDownload,alt:""},on:{click:t.androidDownClick}}),t._v(" "),i("img",{staticClass:"rightappDown",attrs:{src:t.appItemLeftDict.appDownload,alt:""},on:{click:t.downClick}})])],1),t._v(" "),i("Sider",{staticClass:"rightsider",attrs:{"hide-trigger":"",width:.5*t.screenWidth}},[i("div",{staticClass:"rightappimage"},[i("img",{staticClass:"rightimagecss",attrs:{src:t.appItemLeftDict.image,alt:""}})])])],1)],1):i("div",{staticClass:"phonebgview"},[i("img",{staticClass:"phoneimagecss",attrs:{src:t.appItemLeftDict.image,alt:""}}),t._v(" "),i("div",{staticClass:"phonetitlebg"},[i("img",{staticClass:"phoneappicon",attrs:{src:t.appItemLeftDict.appIcon,alt:""}}),t._v(" "),i("div",{staticClass:"phoneappTitle"},[t._v("\n      "+t._s(t.appItemLeftDict.appTitle)+"\n    ")])]),t._v(" "),i("div",{staticClass:"phoneappInfo"},[t._v("\n    "+t._s(t.appItemLeftDict.appInfo)+"\n  ")]),t._v(" "),i("img",{staticClass:"phoneappDown",attrs:{src:t.appItemLeftDict.appDownload,alt:""},on:{click:t.downClick}}),t._v(" "),i("img",{staticClass:"phoneappDown",attrs:{src:t.appItemLeftDict.androidAppDownload,alt:""},on:{click:t.androidDownClick}})])},staticRenderFns:[]};var g=i("VU/8")(h,u,!1,function(t){i("zAME")},"data-v-51f6e346",null).exports,f={name:"UserInfo",props:{screenWidth:0,userInfoDict:{type:Object,default:function(){return{}}}},data:function(){return{}},created:function(){},mounted:function(){},methods:{}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"userInfo"},[i("div",{staticClass:"header",class:t.screenWidth>1e3?"headerFont":"phoneHeaderFont"},[t._v("\n        "+t._s(t.userInfoDict.title)+"\n    ")]),t._v(" "),t._l(t.userInfoDict.array,function(e,a){return i("div",{key:a,staticClass:"info",class:t.screenWidth>1e3?"infoFont":"phoneInfoFont"},[t._v("\n        "+t._s(e)+"\n    ")])})],2)},staticRenderFns:[]};var b=i("VU/8")(f,v,!1,function(t){i("6ZJX")},"data-v-57ca292e",null).exports,I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"groupHeader"},[e("div",{staticClass:"header",class:this.screenWidth>1e3?"headerFont":"phoneHeaderFont"},[this._v("\n        "+this._s(this.headerTitle)+"\n    ")])])},staticRenderFns:[]};var _=i("VU/8")({name:"GroupHeader",props:{screenWidth:0,headerTitle:""},data:function(){return{}},created:function(){},mounted:function(){},methods:{}},I,!1,function(t){i("DNVF")},"data-v-b7aa975a",null).exports,w={name:"RecordItem",props:{screenWidth:0,infoDict:{type:Array,default:function(){return[]}}},data:function(){return{}},created:function(){},mounted:function(){},methods:{}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"userInfo",class:t.screenWidth>1e3?"selfw":"phoneselfw"},t._l(t.infoDict,function(e,a){return i("div",{key:a},[i("div",{class:t.screenWidth>1e3?"timetitle":"phoneTimetitle"},[t._v("\n            "+t._s(e.time)+"\n        ")]),t._v(" "),i("div",{class:t.screenWidth>1e3?"companytitle":"phoneCompanytitle"},[t._v("\n            "+t._s(e.company)+"\n        ")]),t._v(" "),t._l(e.works,function(e,a){return i("li",{key:a,class:t.screenWidth>1e3?"worktitle":"phoneWorktitle"},[t._v("\n            "+t._s(e)+"\n        ")])})],2)}),0)},staticRenderFns:[]};var W=i("VU/8")(w,y,!1,function(t){i("eAji")},"data-v-4e8b73a7",null).exports,D={name:"ContactItem",props:{screenWidth:0,infoDict:{type:Array,default:function(){return[]}}},data:function(){return{}},created:function(){},mounted:function(){},methods:{clickFun:function(t){window.open(t,"_blank")}}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"userInfo",class:t.screenWidth>1e3?"selfw":"phoneselfw"},t._l(t.infoDict,function(e,a){return i("div",{key:a},[e.url?i("div",{class:t.screenWidth>1e3?"timetitle":"phoneTimeTitle"},[i("Icon",{attrs:{type:e.icon}}),t._v(" "),i("a",{staticClass:"urlcss",on:{click:function(i){return t.clickFun(e.url)}}},[t._v(t._s(e.text))])],1):i("div",{class:t.screenWidth>1e3?"timetitle":"phoneTimeTitle"},[i("Icon",{attrs:{type:e.icon}}),t._v("\n            "+t._s(e.text)+"\n        ")],1)])}),0)},staticRenderFns:[]};var k=i("VU/8")(D,C,!1,function(t){i("0+tf")},"data-v-60b528d9",null).exports,j={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footerview"},[this._v("\n    Copyright © 2021 Mark Miao | Version: 1.2 (2021.07.15)\n")])},staticRenderFns:[]};var L=i("VU/8")({name:"FooterView",data:function(){return{}},created:function(){},mounted:function(){},methods:{}},j,!1,function(t){i("TkZb")},"data-v-6c9e7500",null).exports,q={name:"OfflineView",props:{screenWidth:0,appArray:{type:Array,default:function(){return[]}}},data:function(){return{}},created:function(){},mounted:function(){},methods:{}},T={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"offlineView"},[i("div",{class:t.screenWidth>1e3?"offlineBgView":"phoneofflineBgView"},t._l(t.appArray,function(e,a){return i("div",{key:a,class:t.screenWidth>1e3?"appitemcss":"phoneappitemcss"},[i("img",{class:t.screenWidth>1e3?"appicon":"phoneappicon",attrs:{src:e.icon,alt:"sdfa"}}),t._v(" "),i("div",{class:t.screenWidth>1e3?"titlecss":"phonetitlecss"},[t._v(t._s(e.title))]),t._v(" "),i("div",{class:t.screenWidth>1e3?"infocss":"phoneinfocss"},[t._v(t._s(e.info))])])}),0)])},staticRenderFns:[]};var x={name:"home",components:{navBar:r,appItemLeft:l,appItemRight:g,userInfo:b,groupHeader:_,recordItem:W,contactItem:k,footerView:L,offlineView:i("VU/8")(q,T,!1,function(t){i("8dvV")},"data-v-524caa54",null).exports},data:function(){return{screenWidth:0,titleBtns:["简介","独立","公司","合作","下架","经历","联系"],userInfoDict:{},headerTitle1:"独立作品",headerTitle2:"公司产品",headerTitle3:"合作项目",headerTitle4:"已下架应用",headerTitle5:"职业经历",headerTitle6:"联系方式",socketool:{},mremind:{},worktime:{},stenonote:{},insposapp:{},inscounter:{},paipaiaudit:{},insposticket:{},haibao:{},dadamap:{},watermark:{},baobaoname:{},koudaie:{},yinxin:{},lations:{},offlineAppArray:[],recordArray:[],contactArray:[]}},created:function(){this.screenWidth=document.body.clientWidth,this.userInfoDict={title:"简介",array:["MiaoXiaodong - 男，90后，居住北京。专业：软件工程，2014年毕业，全职码农。目前职于创业公司，任职前端Leader，iOS高级，前端/移动端技术负责人。","具备多年iOS开发经验，开发过20多款上架应用。曾独立设计开发过几款个人iOS/macOS应用，稳居App Store效率排行榜。写过微信/支付宝小程序、跨平台应用、网站/平台前端。","技术栈：iOS/macOS：Swift、OC；移动端/跨平台：小程序、Flutter、uni-app，前端：Vue、js等"]},this.socketool={image:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/socketoolimage.png",appIcon:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/stcoetoolicon.png",appTitle:"SockeTool - 能传文件的Socket工具",appInfo:"Socket调试工具，支持大文件传输",appDownload:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/badge-download-on-the-mac-app-store_s.png",downurl:"https://apps.apple.com/cn/app/id1576144037?mt=12"},this.mremind={image:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/mremindappstore.png",appIcon:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/mremindicon.png",appTitle:"mRemind - 提醒你每一件小事",appInfo:"专为 macOS 设计的待办提醒应用",appDownload:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/badge-download-on-the-mac-app-store_s.png",downurl:"https://apps.apple.com/cn/app/id1449698904?mt=12"},this.worktime={image:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/Collage_Fotor.jpg",appIcon:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/paibaniconbig.png",appTitle:"排班 - 上班时间，一目了然",appInfo:"以日历为基础，记录上班时间的应用",appDownload:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/macappstoreimage.png",downurl:"https://itunes.apple.com/cn/app/id1221228242?mt=8"},this.stenonote={image:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/QQ20170726-161903.png",appIcon:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/Icon_128x128%403x.png",appTitle:"速记 - 快速记录每一段文字",appInfo:"在工具栏快速记录一段文字的应用",appDownload:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/badge-download-on-the-mac-app-store_s.png",downurl:"https://apps.apple.com/cn/app/id1263819789?mt=12"},this.insposapp={image:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-103736%402x.png",appIcon:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/insmoicon512.jpg",appTitle:"INSMO",appInfo:"AIoT智能设备管控",appDownload:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/macappstoreimage.png",downurl:"https://apps.apple.com/cn/app/inspos/id1472816651",androidAppDownload:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/googleplaydownicon.png",androidDownurl:"https://play.google.com/store/apps/details?id=com.pai.meng.inspos_flutter"},this.insmoapp={image:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201022-163620.png",appIcon:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/insmoicon512.jpg",appTitle:"INSMO",appInfo:"日本自动贩卖机收银设备配置管理",appDownload:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/macappstoreimage.png",downurl:"https://apps.apple.com/cn/app/insmo/id1536573247",androidAppDownload:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/googleplaydownicon.png",androidDownurl:"https://play.google.com/store/apps/details?id=cn.inspiry.insmo"},this.inscounter={image:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-104509%402x.png",appIcon:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/incountappicon.png",appTitle:"InsCounter",appInfo:"InsCounter enables you to check and review your transactions anywhere",appDownload:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/macappstoreimage.png",downurl:"https://apps.apple.com/cn/app/inscounter/id1422630645"},this.paipaiaudit={image:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-110748%402x.png",appIcon:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-110904%402x.png",appTitle:"查账 - 小白盒专用",appInfo:"基于意锐小白盒的商户查账、对账的工具",appDownload:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/macappstoreimage.png",downurl:"https://apps.apple.com/cn/app/id1256999712"},this.insposticket={image:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-111531%402x.png",appIcon:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/1024x1024bb.png",appTitle:"INSPOS 闪票",appInfo:"管理意锐小白盒的智能助手应用",appDownload:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/macappstoreimage.png",downurl:"https://apps.apple.com/cn/app/id1255453461"},this.haibao={image:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-112335%402x.png",appIcon:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-112410%402x.png",appTitle:"海报大师专业版",appInfo:"宣传海报制作工具",appDownload:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/macappstoreimage.png",downurl:"https://apps.apple.com/cn/app/id1247401981"},this.dadamap={image:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-232846%402x.png",appIcon:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-233212x.png",appTitle:"达达充电宝",appInfo:"一键改变手机实时地理位置",appDownload:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/macappstoreimage.png",downurl:"https://apps.apple.com/cn/app/id1530127427"},this.watermark={image:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-234200%402x.png",appIcon:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-234416%402x.png",appTitle:"水印大师专业版",appInfo:"简单实用的水印制作工具",appDownload:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/macappstoreimage.png",downurl:"https://apps.apple.com/cn/app/id1503308277"},this.baobaoname={image:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-234957%402x.png",appIcon:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-235053%402x.png",appTitle:"周易宝宝起名大师专业版",appInfo:"起名、测名实用工具",appDownload:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/macappstoreimage.png",downurl:"https://apps.apple.com/cn/app/id1501997083"},this.koudaie={image:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-235804%402x.png",appIcon:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-235603%402x.png",appTitle:"口袋e",appInfo:"访问办公内网的VPN工具（未上架中国区）",appDownload:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/macappstoreimage.png",downurl:"https://apps.apple.com/gb/app/id1473958090"},this.yinxin={image:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201002-000330%402x.png",appIcon:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201002-000317%402x.png",appTitle:"印心讲堂",appInfo:"佛学经典音频播放应用",appDownload:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/macappstoreimage.png",downurl:"https://apps.apple.com/cn/app/id1345896764"},this.lations={image:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201002-000920%402x.png",appIcon:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201002-000843%402x.png",appTitle:"Lations",appInfo:"Lations智能中控系统，TCP/UDP",appDownload:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/macappstoreimage.png",downurl:"https://apps.apple.com/cn/app/id1257364252"},this.offlineAppArray=[{icon:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/insmoicon512.jpg",title:"INSMO-日本",info:"日本自贩机设备管理"},{icon:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/截屏2020-10-09 22.15.06.png",title:"待着",info:"生活的另一种可能"},{icon:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/logo.png",title:"INSPOS",info:"uni-app跨平台"},{icon:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/iTunesArtwork@2x.png",title:"女王驾到",info:"电商/iBeacon"},{icon:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/jiayouba.png",title:"加油吧",info:"地图/导航/支付/发票"},{icon:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/realpayappicon.png",title:"Real Pay",info:"汉信码/支付/溯源"},{icon:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/hanxinhuitongicon.png",title:"汉信汇通",info:"汉信码/溯源"},{icon:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/hanxinmaapp.jpg",title:"汉信二维码",info:"汉信码生码解码"},{icon:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/qianbeiduo.png",title:"钱呗多",info:"p2p/支付/银行"},{icon:"https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/Icon-76@3x.png",title:"三汇易修",info:"售后工单/支付"}],this.recordArray=[{time:"2015年10月～至今",company:"INSPIRY 基础研发部 前端组Leader",works:["前端/移动端技术负责人","iOS应用/SDK开发","前端/小程序开发"]},{time:"2015年6月～2015年10月",company:"六行普惠 研发部 iOS工程师",works:["移动端技术负责人","iOS应用开发"]},{time:"2014年8月～2015年6月",company:"待着网 研发部 iOS工程师",works:["iOS应用开发"]}],this.contactArray=[{icon:"md-mail",text:"i#markmiao.com（#替换为@）"},{icon:"md-mail",text:"mxd187#gmail.com（#替换为@）"},{icon:"logo-github",text:"GitHub@mxdios",url:"https://github.com/mxdios"},{icon:"ios-globe",text:"个人博客@MarkMiao",url:"https://markmiao.com/"},{icon:"ios-home",text:"北京市昌平区"}]},mounted:function(){var t=this;window.addEventListener("resize",function(){t.screenWidth=document.body.clientWidth})}},A={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("navBar",{attrs:{titleBtns:t.titleBtns,screenWidth:t.screenWidth}}),t._v(" "),i("userInfo",{attrs:{id:"page0",userInfoDict:t.userInfoDict,screenWidth:t.screenWidth}}),t._v(" "),i("groupHeader",{attrs:{id:"page1",headerTitle:t.headerTitle1,screenWidth:t.screenWidth}}),t._v(" "),i("appItemLeft",{attrs:{appItemLeftDict:t.socketool,screenWidth:t.screenWidth}}),t._v(" "),i("appItemRight",{attrs:{appItemLeftDict:t.mremind,screenWidth:t.screenWidth}}),t._v(" "),i("appItemLeft",{attrs:{appItemLeftDict:t.worktime,screenWidth:t.screenWidth}}),t._v(" "),i("appItemRight",{attrs:{appItemLeftDict:t.stenonote,screenWidth:t.screenWidth}}),t._v(" "),i("groupHeader",{attrs:{id:"page2",headerTitle:t.headerTitle2,screenWidth:t.screenWidth}}),t._v(" "),i("appItemLeft",{attrs:{appItemLeftDict:t.insposapp,screenWidth:t.screenWidth}}),t._v(" "),i("appItemRight",{attrs:{appItemLeftDict:t.inscounter,screenWidth:t.screenWidth}}),t._v(" "),i("appItemLeft",{attrs:{appItemLeftDict:t.paipaiaudit,screenWidth:t.screenWidth}}),t._v(" "),i("appItemRight",{attrs:{appItemLeftDict:t.insposticket,screenWidth:t.screenWidth}}),t._v(" "),i("appItemLeft",{attrs:{appItemLeftDict:t.haibao,screenWidth:t.screenWidth}}),t._v(" "),i("groupHeader",{attrs:{id:"page3",headerTitle:t.headerTitle3,screenWidth:t.screenWidth}}),t._v(" "),i("appItemRight",{attrs:{appItemLeftDict:t.dadamap,screenWidth:t.screenWidth}}),t._v(" "),i("appItemLeft",{attrs:{appItemLeftDict:t.watermark,screenWidth:t.screenWidth}}),t._v(" "),i("appItemRight",{attrs:{appItemLeftDict:t.baobaoname,screenWidth:t.screenWidth}}),t._v(" "),i("appItemLeft",{attrs:{appItemLeftDict:t.koudaie,screenWidth:t.screenWidth}}),t._v(" "),i("appItemRight",{attrs:{appItemLeftDict:t.yinxin,screenWidth:t.screenWidth}}),t._v(" "),i("appItemLeft",{attrs:{appItemLeftDict:t.lations,screenWidth:t.screenWidth}}),t._v(" "),i("groupHeader",{attrs:{id:"page4",headerTitle:t.headerTitle4,screenWidth:t.screenWidth}}),t._v(" "),i("offlineView",{attrs:{appArray:t.offlineAppArray,screenWidth:t.screenWidth}}),t._v(" "),i("groupHeader",{attrs:{id:"page5",headerTitle:t.headerTitle5,screenWidth:t.screenWidth}}),t._v(" "),i("recordItem",{attrs:{infoDict:t.recordArray,screenWidth:t.screenWidth}}),t._v(" "),i("groupHeader",{attrs:{id:"page6",headerTitle:t.headerTitle6,screenWidth:t.screenWidth}}),t._v(" "),i("contactItem",{attrs:{infoDict:t.contactArray,screenWidth:t.screenWidth}}),t._v(" "),i("footerView")],1)},staticRenderFns:[]};var S=i("VU/8")(x,A,!1,function(t){i("2Og6")},null,null).exports,V={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"markdown-body"})},staticRenderFns:[]},F=i("VU/8")({},V,!1,null,null,null).exports;a.default.use(p.a);var R=new p.a({mode:"history",routes:[{path:"/",name:"home",component:S},{path:"/markdown",name:"markdown",component:F}]}),O=i("b3L9"),X=i.n(O);i("7QVd");a.default.config.productionTip=!1,a.default.use(X.a),new a.default({el:"#app",router:R,components:{App:o},template:"<App/>"})},TkZb:function(t,e){},eAji:function(t,e){},kjg4:function(t,e){},llsc:function(t,e){},zAME:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7e9e301f2dcb85b529a5.js.map