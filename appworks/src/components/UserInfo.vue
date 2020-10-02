<template>
  <div class="userInfo">
      <div class="header">
          {{userInfoDict.title}}
      </div>
      <div class="info" v-for="(item, index) in userInfoDict.array" :key="index">
          {{item}}
      </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: {
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
    font-size: 30px;
    font-weight: bolder;
    color: #0395EB;
}
.info {
    /* background-color: green; */
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    font-size: 20px;
    margin-bottom: 20px;
}
</style>
