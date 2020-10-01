
<template>
  <div>
    <navBar />
    <userInfo />
    <appItemRight :appItemLeftDict="mremind" />
    <appItemLeft :appItemLeftDict="worktime" />
    <appItemRight :appItemLeftDict="stenonote" />
    <appItemLeft :appItemLeftDict="insposapp" />
    <appItemRight :appItemLeftDict="inscounter" />
    <appItemLeft :appItemLeftDict="paipaiaudit" />
    <appItemRight :appItemLeftDict="insposticket" />
    <appItemLeft :appItemLeftDict="haibao" />
  </div>
</template>
:selectAfterId="afterSaleSelectId"
<script>

import navBar from '@/components/NavigationBar'
import appItemLeft from '@/components/AppItemLeft'
import appItemRight from '@/components/AppItemRight'
import userInfo from '@/components/UserInfo'

export default {
  name: 'home',
  components: {
    navBar,
    appItemLeft,
    appItemRight,
    userInfo
  },
  data () {
    return {
      mremind: {},
      worktime: {},
      stenonote: {},
      insposapp: {},
      inscounter: {},
      paipaiaudit: {},
      insposticket: {},
      haibao: {}
    }
  },
  created () {
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
  }
}
</script>

<style>
</style>
