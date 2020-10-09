<template>
  <div class="offlineView">
      <div :class="screenWidth>1000 ? 'offlineBgView':'phoneofflineBgView'">
          <div class="appitemcss" v-for="(item, index) in appArray" :key="index">
            <img :class="screenWidth>1000 ? 'appicon':'phoneappicon'" :src="item.icon" alt="sdfa">
            <div :class="screenWidth>1000 ? 'titlecss':'phonetitlecss'">{{item.title}}</div>
            <div :class="screenWidth>1000 ? 'infocss':'phoneinfocss'">{{item.info}}</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'OfflineView',
  props: {
    screenWidth: 0,
    appArray: {
      type: Array,
      default () {
        return []
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
.offlineView {
    margin-top: 50px;
    margin-bottom: 30px;
    width: 100%;
}
.offlineBgView {
    width: 70%;
    margin-left: 15%;
    display: flex;
    flex-wrap: wrap;
}
.phoneofflineBgView {
    width: 80%;
    margin-left: 10%;
    display: flex;
    flex-wrap: wrap;
}
.appitemcss {
    width: 140px;
    text-align: center;
    margin-bottom: 30px;
}
.appicon {
  width: 60px;
  height: 60px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px #888888;
}
.phoneappicon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px #888888;
}
.titlecss {
    font-size: 20px;
    font-weight: bolder;
}
.infocss {
    font-size: 15px;
}
.phonetitlecss {
    font-size: 15px;
    font-weight: bolder;
}
.phoneinfocss {
    font-size: 10px;
}
</style>
