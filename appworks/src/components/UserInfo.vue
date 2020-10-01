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
