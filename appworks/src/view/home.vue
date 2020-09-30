
<template>
  <div>
    <navBar />
    <appItemLeft :appItemLeftDict="mremind" />
  </div>
</template>
:selectAfterId="afterSaleSelectId"
<script>
import navBar from '@/components/NavigationBar'
import appItemLeft from '@/components/AppItemLeft'

export default {
  name: 'home',
  components: {
    navBar,
    appItemLeft
  },
  data () {
    return {
      mremind: {}
    }
  },
  created () {
    this.mremind = {
      image:
        'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/mremindappstore.png',
      appIcon:
        'https://imagedb-1257991841.cos.ap-beijing.myqcloud.com/mremindicon.png',
      appTitle: 'mRemind'
    }
  }
}
</script>

<style>
</style>
