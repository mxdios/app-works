<template>
  <div class="userInfo" :class="screenWidth>1000 ? 'selfw': 'phoneselfw'">
      <div v-for="(item, index) in infoDict" :key="index">
          <div class="timetitle">
              {{item.time}}
          </div>
          <div class="companytitle">
              {{item.company}}
          </div>
          <li  class="worktitle" v-for="(sumItem, sumIndex) in item.works" :key="sumIndex">
              {{sumItem}}
          </li>
      </div>
  </div>
</template>

<script>
export default {
  name: 'RecordItem',
  props: {
    infoDict: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      screenWidth: 0
    }
  },
  created () {

  },
  mounted () {
    const that = this
    window.addEventListener('resize', function () {
      that.screenWidth = document.body.clientWidth
      console.log(that.screenWidth)
    })
  },
  methods: {
  }
}
</script>

<style scoped>
.userInfo {
    padding-top: 20px;
    padding-bottom: 50px;
}
.selfw {
  width: 40%;
  margin-left: 30%;
}
.phoneselfw {
  width: 80%;
  margin-left: 10%;
}
.timetitle {
    margin-top: 30px;
    font-size: 25px;
    font-weight: bolder;
}
.companytitle {
    line-height: 40px;
    /* margin-bottom: 20px; */
    font-size: 20px;
}
.worktitle {
    line-height: 30px;
    padding-left: 10px;
    font-size: 15px;
}
</style>
