
<template>
  <div>
    <navBar />
    <userInfo :userInfoDict="userInfoDict" />
    <groupHeader :headerTitle="headerTitle1"  :type="1" />
    <appItemRight :appItemLeftDict="mremind" />
    <appItemLeft :appItemLeftDict="worktime" />
    <appItemRight :appItemLeftDict="stenonote" />
    <groupHeader :headerTitle="headerTitle2"  :type="0" />
    <appItemLeft :appItemLeftDict="insposapp" />
    <appItemRight :appItemLeftDict="inscounter" />
    <appItemLeft :appItemLeftDict="paipaiaudit" />
    <appItemRight :appItemLeftDict="insposticket" />
    <appItemLeft :appItemLeftDict="haibao" />
    <groupHeader :headerTitle="headerTitle3"  :type="1" />
    <appItemRight :appItemLeftDict="dadamap" />
    <appItemLeft :appItemLeftDict="watermark" />
    <appItemRight :appItemLeftDict="baobaoname" />
    <appItemLeft :appItemLeftDict="koudaie" />
    <appItemRight :appItemLeftDict="yinxin" />
    <appItemLeft :appItemLeftDict="lations" />
  </div>
</template>
:selectAfterId="afterSaleSelectId"
<script>

import navBar from '@/components/NavigationBar'
import appItemLeft from '@/components/AppItemLeft'
import appItemRight from '@/components/AppItemRight'
import userInfo from '@/components/UserInfo'
import groupHeader from '@/components/GroupHeader'

export default {
  name: 'home',
  components: {
    navBar,
    appItemLeft,
    appItemRight,
    userInfo,
    groupHeader
  },
  data () {
    return {
      userInfoDict: {},
      headerTitle1: '独立开发者作品',
      headerTitle2: '公司应用',
      headerTitle3: '合作项目作品',
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
      lations: {}
    }
  },
  created () {
    this.userInfoDict = {
      title: '简介',
      array: [
        '90后，坐标北京，全职码农。职于创业公司，前端leader，立志成为“全干工程师”',
        '具备多年iOS/macOS开发经验，写过几款独立app。前Objective-C骨灰级菜鸟，现Swift忠实拥趸。写过几款小程序，Vue懂一点，用uni-app写过跨平台应用，Flutter爱好者。',
        '被誉为比产品更懂产品的码农，QA最爱沟通的程序猿。'
      ]
    }
    this.mremind = {
      image:
        'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/mremindappstore.png',
      appIcon:
        'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/mremindicon.png',
      appTitle: 'mRemind - 提醒你每一件小事',
      appInfo: '专为 macOS 设计的待办提醒应用',
      appDownload: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/badge-download-on-the-mac-app-store_s.png',
      downurl: 'https://apps.apple.com/cn/app/id1449698904?mt=12'
    }
    this.worktime = {
      image: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/Collage_Fotor.jpg',
      appIcon: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/seticonapp.png',
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
      appInfo: '收银设备的智能管家',
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
      appInfo: '管理意锐小白盒的智能助手',
      appDownload: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/macappstoreimage.png',
      downurl: 'https://apps.apple.com/cn/app/id1255453461'
    }
    this.haibao = {
      image: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-112335%402x.png',
      appIcon: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/WX20201001-112410%402x.png',
      appTitle: '海报大师专业版',
      appInfo: '宣传海报制作神器',
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
      appInfo: '宝宝起名、测名实用工具',
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
      appInfo: 'Lations智能中控系统（iPad App）',
      appDownload: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/macappstoreimage.png',
      downurl: 'https://apps.apple.com/cn/app/id1257364252'
    }
  }
}
</script>

<style>
</style>
