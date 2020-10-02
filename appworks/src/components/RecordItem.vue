<template>
  <div class="userInfo" :class="screenWidth>1000 ? 'selfw': 'phoneselfw'">
      <div v-for="(item, index) in infoDict" :key="index">
          <div :class="screenWidth>1000 ? 'timetitle':'phoneTimetitle'">
              {{item.time}}
          </div>
          <div :class="screenWidth>1000 ? 'companytitle' : 'phoneCompanytitle'">
              {{item.company}}
          </div>
          <li  :class="screenWidth>1000 ? 'worktitle':'phoneWorktitle'" v-for="(sumItem, sumIndex) in item.works" :key="sumIndex">
              {{sumItem}}
          </li>
      </div>
  </div>
</template>

<script>
export default {
  name: 'RecordItem',
  props: {
    screenWidth: 0,
    infoDict: {
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
.phoneTimetitle {
    margin-top: 25px;
    font-size: 20px;
    font-weight: bolder;
}
.companytitle {
    line-height: 40px;
    font-size: 20px;
}
.phoneCompanytitle {
    line-height: 30px;
    font-size: 15px;
}
.worktitle {
    line-height: 30px;
    padding-left: 10px;
    font-size: 15px;
}
.phoneWorktitle {
    line-height: 25px;
    padding-left: 10px;
    font-size: 10px;
}
</style>
