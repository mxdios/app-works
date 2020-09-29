
<template>
  <div>
      <navBar />
      <appItemLeft />
  </div>
</template>

<script>
import navBar from '@/components/NavigationBar'
import appItemLeft from '@/components/AppItemLeft'

export default {
  name: 'home',
  components: {
    navBar,
    appItemLeft
  }
}
</script>

<style>
</style>
