<template>
  <div class="userInfo">
      <div class="header">
          简介
      </div>
      <div class="info">
          90后，坐标北京，全职码农。职于创业公司，前端leader，立志成为“全干工程师”。
      </div>
      <div class="info">
          具备多年iOS/macOS开发经验，写过几款独立app。前Objective-C骨灰级菜鸟，现Swift忠实拥趸。写过几款小程序，Vue懂一点，用uni-app写过跨平台应用，Flutter爱好者。
      </div>
      <div class="info">
          被誉为比产品更懂产品的码农，QA最爱沟通的人。
      </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: {
    appItemLeftDict: {
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
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    padding-bottom: 40px;
}
.header {
    margin-top: 100px;
    margin-bottom: 30px;
    font-size: 35px;
    font-weight: bolder;
    /* background-color: green; */
}
.info {
    /* background-color: green; */
    font-size: 20px;
    margin-bottom: 20px;
}
</style>
