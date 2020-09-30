
<template>
  <div>
    <navBar />
    <appItemLeft :appItemLeftDict="mremind" />
    <appItemRight :appItemLeftDict="worktime" />
  </div>
</template>
:selectAfterId="afterSaleSelectId"
<script>

import navBar from '@/components/NavigationBar'
import appItemLeft from '@/components/AppItemLeft'
import appItemRight from '@/components/AppItemRight'

export default {
  name: 'home',
  components: {
    navBar,
    appItemLeft,
    appItemRight
  },
  data () {
    return {
      mremind: {},
      worktime: {}
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
      appDownload: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/badge-download-on-the-mac-app-store_s.png'
    }
    this.worktime = {
      image: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/mremindappstore.png',
      appIcon: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/seticonapp.png',
      appTitle: '排班 - 上班时间，一目了然',
      appInfo: '以日历为基础，记录上班时间的应用',
      appDownload: 'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/macappstoreimage.png'
    }
  }
}
</script>

<style>
</style>
