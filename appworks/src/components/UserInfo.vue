<template>
  <div class="userInfo">
      <div class="header" :class="screenWidth>1000 ? 'headerFont' : 'phoneHeaderFont'">
          {{userInfoDict.title}}
      </div>
      <div class="info" :class="screenWidth>1000 ? 'infoFont' : 'phoneInfoFont'" v-for="(item, index) in userInfoDict.array" :key="index">
          {{item}}
      </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: {
    screenWidth: 0,
    userInfoDict: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
    }
  },
  created () {

  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>
.userInfo {
    padding-bottom: 40px;
}
.header {
    /* padding-left: 15%; */
    line-height: 60px;
    height: 60px;
    margin-top: 100px;
    margin-bottom: 30px;
    padding-left: 15%;
    font-weight: bolder;
    color: #0395EB;
}
.headerFont {
  font-size: 30px;
}
.phoneHeaderFont {
  font-size: 25px;
}
.info {
    /* background-color: green; */
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    margin-bottom: 20px;
}
.infoFont {
  font-size: 20px;
}
.phoneInfoFont {
  font-size: 15px;
}
</style>
