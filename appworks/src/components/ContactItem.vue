<template>
  <div class="userInfo" :class="screenWidth>1000 ? 'selfw': 'phoneselfw'">
      <div v-for="(item, index) in infoDict" :key="index">
          <div class="timetitle" v-if="item.url">
              <Icon :type="item.icon" />
              <a class="urlcss" @click="clickFun(item.url)">{{item.text}}</a>
          </div>
          <div class="timetitle" v-else>
              <Icon :type="item.icon" />
              {{item.text}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ContactItem',
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
    clickFun (url) {
      window.open(url, '_blank')
    }
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
    margin-top: 10px;
    font-size: 20px;
}
.urlcss {
    cursor:pointer;
    color: #0395EB;
}

</style>
