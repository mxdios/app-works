
<template>
  <div>
    <navBar :titleBtns="titleBtns" :screenWidth="screenWidth" />
    <userInfo id="page0" :userInfoDict="userInfoDict" :screenWidth="screenWidth" />
    <groupHeader id="page1" :headerTitle="headerTitle1" :screenWidth="screenWidth" />
    <appItemRight :appItemLeftDict="mremind" :screenWidth="screenWidth" />
    <appItemLeft :appItemLeftDict="worktime" :screenWidth="screenWidth" />
    <appItemRight :appItemLeftDict="stenonote" :screenWidth="screenWidth" />
    <groupHeader id="page2" :headerTitle="headerTitle2" :screenWidth="screenWidth" />
    <appItemLeft :appItemLeftDict="insposapp" :screenWidth="screenWidth" />
    <appItemRight :appItemLeftDict="inscounter" :screenWidth="screenWidth" />
    <appItemLeft :appItemLeftDict="paipaiaudit" :screenWidth="screenWidth" />
    <appItemRight :appItemLeftDict="insposticket" :screenWidth="screenWidth" />
    <appItemLeft :appItemLeftDict="haibao" :screenWidth="screenWidth" />
    <groupHeader id="page3" :headerTitle="headerTitle3" :screenWidth="screenWidth" />
    <appItemRight :appItemLeftDict="dadamap" :screenWidth="screenWidth" />
    <appItemLeft :appItemLeftDict="watermark" :screenWidth="screenWidth" />
    <appItemRight :appItemLeftDict="baobaoname" :screenWidth="screenWidth" />
    <appItemLeft :appItemLeftDict="koudaie" :screenWidth="screenWidth" />
    <appItemRight :appItemLeftDict="yinxin" :screenWidth="screenWidth" />
    <appItemLeft :appItemLeftDict="lations" :screenWidth="screenWidth" />
    <groupHeader id="page4" :headerTitle="headerTitle4" :screenWidth="screenWidth" />
    <offlineView :appArray="offlineAppArray" :screenWidth="screenWidth" />
    <groupHeader id="page5" :headerTitle="headerTitle5" :screenWidth="screenWidth" />
    <recordItem :infoDict="recordArray" :screenWidth="screenWidth" />
    <groupHeader id="page6" :headerTitle="headerTitle6" :screenWidth="screenWidth" />
    <contactItem :infoDict="contactArray" :screenWidth="screenWidth" />
    <footerView />
  </div>
</template>
:selectAfterId="afterSaleSelectId"
<script>

import navBar from '@/components/NavigationBar'
import appItemLeft from '@/components/AppItemLeft'
import appItemRight from '@/components/AppItemRight'
import userInfo from '@/components/UserInfo'
import groupHeader from '@/components/GroupHeader'
import recordItem from '@/components/RecordItem'
import contactItem from '@/components/ContactItem'
import footerView from '@/components/FooterView'
import offlineView from '@/components/OfflineView'

export default {
  name: 'home',
  components: {
    navBar,
    appItemLeft,
    appItemRight,
    userInfo,
    groupHeader,
    recordItem,
    contactItem,
    footerView,
    offlineView
  },
  data () {
    return {
      screenWidth: 0,
      titleBtns: ['简介', '独立', '公司', '合作', '下架', '经历', '联系'],
      userInfoDict: {},
      headerTitle1: '独立作品',
      headerTitle2: '公司产品',
      headerTitle3: '合作项目',
      headerTitle4: '已下架应用',
      headerTitle5: '职业经历',
      headerTitle6: '联系方式',
      mremind: {},
      worktime: {},
      stenonote: {},
      insposapp: {},
      inscounter: {},
      paipaiaudit: {},
      insposticket: {},
      haibao: {},
      dadamap: {},
      watermark: {},
      baobaoname: {},
      koudaie: {},
      yinxin: {},
      lations: {},
      offlineAppArray: [],
      recordArray: [],
      contactArray: []
    }
  },
  created () {
    this.screenWidth = document.body.clientWidth
    this.userInfoDict = {
      title: '简介',
      array: [
        'MiaoXiaodong - 男，90后，居住北京，全职码农。目前职于创业公司，前端Leader，立志成为“全干工程师”',
        '具备多年iOS开发经验，开发过20多款上架应用，绝大多数为独立开发。曾独立设计、开发过几款个人iOS/macOS应用。写过微信/支付宝小程序、跨平台应用、网站/系统前端。',
        '前Objective-C骨灰级菜鸟，现Swift忠实拥趸。熟悉iOS/macOS开发，熟悉小程序，uni-app，了解Vue，正在学习Flutter。'
      ]
    }
    this.mremind = {
      image: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/mremindappstore.png',
      appIcon: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/mremindicon.png',
      appTitle: 'mRemind - 提醒你每一件小事',
      appInfo: '专为 macOS 设计的待办提醒应用',
      appDownload: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/badge-download-on-the-mac-app-store_s.png',
      downurl: 'https://apps.apple.com/cn/app/id1449698904?mt=12'
    }
    this.worktime = {
      image: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/Collage_Fotor.jpg',
      appIcon: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/paibaniconbig.png',
      appTitle: '排班 - 上班时间，一目了然',
      appInfo: '以日历为基础，记录上班时间的应用',
      appDownload: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/macappstoreimage.png',
      downurl: 'https://itunes.apple.com/cn/app/id1221228242?mt=8'
    }
    this.stenonote = {
      image: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/QQ20170726-161903.png',
      appIcon: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/Icon_128x128%403x.png',
      appTitle: '速记 - 快速记录每一段文字',
      appInfo: '在工具栏快速记录一段文字的应用',
      appDownload: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/badge-download-on-the-mac-app-store_s.png',
      downurl: 'https://apps.apple.com/cn/app/id1263819789?mt=12'
    }
    this.insposapp = {
      image: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-103736%402x.png',
      appIcon: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/insposicon.png',
      appTitle: 'INSPOS',
      appInfo: '收银设备的智能管家应用',
      appDownload: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/macappstoreimage.png',
      downurl: 'https://apps.apple.com/cn/app/inspos/id1472816651'
    }
    this.inscounter = {
      image: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-104509%402x.png',
      appIcon: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/Icon-76%403x.png',
      appTitle: 'InsCounter',
      appInfo: 'InsCounter enables you to check and review your transactions anywhere',
      appDownload: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/macappstoreimage.png',
      downurl: 'https://apps.apple.com/cn/app/inscounter/id1422630645'
    }
    this.paipaiaudit = {
      image: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-110748%402x.png',
      appIcon: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-110904%402x.png',
      appTitle: '查账 - 小白盒专用',
      appInfo: '基于意锐小白盒的商户查账、对账的工具',
      appDownload: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/macappstoreimage.png',
      downurl: 'https://apps.apple.com/cn/app/id1256999712'
    }
    this.insposticket = {
      image: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-111531%402x.png',
      appIcon: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/1024x1024bb.png',
      appTitle: 'INSPOS 闪票',
      appInfo: '管理意锐小白盒的智能助手应用',
      appDownload: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/macappstoreimage.png',
      downurl: 'https://apps.apple.com/cn/app/id1255453461'
    }
    this.haibao = {
      image: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-112335%402x.png',
      appIcon: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-112410%402x.png',
      appTitle: '海报大师专业版',
      appInfo: '宣传海报制作工具',
      appDownload: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/macappstoreimage.png',
      downurl: 'https://apps.apple.com/cn/app/id1247401981'
    }
    this.dadamap = {
      image: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-232846%402x.png',
      appIcon: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-233212x.png',
      appTitle: '达达充电宝',
      appInfo: '一键改变手机实时地理位置',
      appDownload: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/macappstoreimage.png',
      downurl: 'https://apps.apple.com/cn/app/id1530127427'
    }
    this.watermark = {
      image: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-234200%402x.png',
      appIcon: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-234416%402x.png',
      appTitle: '水印大师专业版',
      appInfo: '简单实用的水印制作工具',
      appDownload: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/macappstoreimage.png',
      downurl: 'https://apps.apple.com/cn/app/id1503308277'
    }
    this.baobaoname = {
      image: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-234957%402x.png',
      appIcon: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-235053%402x.png',
      appTitle: '周易宝宝起名大师专业版',
      appInfo: '起名、测名实用工具',
      appDownload: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/macappstoreimage.png',
      downurl: 'https://apps.apple.com/cn/app/id1501997083'
    }
    this.koudaie = {
      image: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-235804%402x.png',
      appIcon: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-235603%402x.png',
      appTitle: '口袋e',
      appInfo: '访问办公内网的VPN工具（未上架国区）',
      appDownload: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/macappstoreimage.png',
      downurl: 'https://apps.apple.com/gb/app/id1473958090'
    }
    this.yinxin = {
      image: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201002-000330%402x.png',
      appIcon: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201002-000317%402x.png',
      appTitle: '印心讲堂',
      appInfo: '佛学经典音频播放应用',
      appDownload: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/macappstoreimage.png',
      downurl: 'https://apps.apple.com/cn/app/id1345896764'
    }
    this.lations = {
      image: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201002-000920%402x.png',
      appIcon: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201002-000843%402x.png',
      appTitle: 'Lations',
      appInfo: 'Lations智能中控系统（仅支持iPad）',
      appDownload: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/macappstoreimage.png',
      downurl: 'https://apps.apple.com/cn/app/id1257364252'
    }
    this.offlineAppArray = [
      {
        icon: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/截屏2020-10-09 22.15.06.png',
        title: '待着',
        info: '生活的另一种可能'
      },
      {
        icon: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/logo.png',
        title: 'INSPOS',
        info: 'uni-app跨平台'
      },
      {
        icon: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/iTunesArtwork@2x.png',
        title: '女王驾到',
        info: '电商/iBeacon'
      },
      {
        icon: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/jiayouba.png',
        title: '加油吧',
        info: '地图/导航/支付/发票'
      },
      {
        icon: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/realpayappicon.png',
        title: 'Real Pay',
        info: '汉信码/支付/溯源'
      },
      {
        icon: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/hanxinhuitongicon.png',
        title: '汉信汇通',
        info: '汉信码/溯源'
      },
      {
        icon: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/hanxinmaapp.jpg',
        title: '汉信二维码',
        info: '汉信码生码解码'
      },
      {
        icon: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/qianbeiduo.png',
        title: '钱呗多',
        info: 'p2p/支付/银行'
      },
      {
        icon: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/Icon-76@3x.png',
        title: '三汇易修',
        info: '售后工单/支付'
      }
    ]
    this.recordArray = [
      {
        time: '2015年10月～至今',
        company: 'INSPIRY 基础研发部 前端组Leader',
        works: ['前端/移动端技术负责人', 'iOS应用/SDK开发', '前端/小程序开发']
      },
      {
        time: '2015年6月～2015年10月',
        company: '六行普惠 研发部 iOS工程师',
        works: ['移动端技术负责人', 'iOS应用开发']
      },
      {
        time: '2014年8月～2015年6月',
        company: '待着网 研发部 iOS工程师',
        works: ['iOS应用开发']
      }
    ]
    this.contactArray = [
      {
        icon: 'md-mail',
        text: 'i#markmiao.com（#替换为@）'
      },
      {
        icon: 'md-mail',
        text: 'mxd187#gmail.com（#替换为@）'
      },
      {
        icon: 'logo-github',
        text: 'GitHub@mxdios',
        url: 'https://github.com/mxdios'
      },
      {
        icon: 'ios-globe',
        text: '个人博客@MarkMiao',
        url: 'https://markmiao.com/'
      },
      {
        icon: 'ios-home',
        text: '北京市昌平区'
      }
    ]
  },
  mounted () {
    const that = this
    window.addEventListener('resize', function () {
      that.screenWidth = document.body.clientWidth
    })
  }
}
</script>

<style>
</style>
