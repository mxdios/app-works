<template>
  <div v-if="screenWidth>1000" class="AppItemRight">
      <Layout>
        <Layout>
            <Header class="rightheader">
              <img class="rightappicon" :src="appItemLeftDict.appIcon" alt="">
              <div class="rightappTitle">
                {{appItemLeftDict.appTitle}}
              </div>
            </Header>
            <Content class="rightcontent">
              <div class="rightappInfo">
                {{appItemLeftDict.appInfo}}
              </div>
            </Content>
            <Footer class="rightfooter">
              <img class="rightappDown" :src="appItemLeftDict.androidAppDownload" alt="" @click="androidDownClick">
              <img class="rightappDown" :src="appItemLeftDict.appDownload" alt="" @click="downClick">
            </Footer>
        </Layout>
        <Sider class="rightsider" hide-trigger :width="screenWidth*0.5">
          <div class="rightappimage">
            <img class="rightimagecss" :src="appItemLeftDict.image" alt="">
          </div>
        </Sider>
    </Layout>
  </div>
  <div v-else class="phonebgview">
    <img class="phoneimagecss" :src="appItemLeftDict.image" alt="">
    <div class="phonetitlebg">
      <img class="phoneappicon" :src="appItemLeftDict.appIcon" alt="">
      <div class="phoneappTitle">
        {{appItemLeftDict.appTitle}}
      </div>
    </div>
    <div class="phoneappInfo">
      {{appItemLeftDict.appInfo}}
    </div>
    <img class="phoneappDown" :src="appItemLeftDict.appDownload" alt="" @click="downClick">
    <img class="phoneappDown" :src="appItemLeftDict.androidAppDownload" alt="" @click="androidDownClick">
  </div>
</template>

<script>
export default {
  name: 'AppItemRight',
  props: {
    screenWidth: 0,
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
    downClick () {
      window.open(this.appItemLeftDict.downurl, '_blank')
    },
    androidDownClick () {
      window.open(this.appItemLeftDict.androidDownurl, '_blank')
    }
  }
}
</script>

<style scoped>
.AppItemRight {
  width: 100%;
  background-color: #f7f7f7;
  left: 0;
  top: 0;
  display: flex;
}

.rightsider {
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #f7f7f7;
}
.rightappimage {
  display: flex;
  align-self: center;
  margin-right: 25%;
  height: 100%;
  background-color: #f7f7f7;
}
.rightimagecss {
  margin-left: auto;
  margin-right: auto;
  align-self: center;
  width: 80%;
  border-radius: 10px;
  box-shadow: 3px 3px 10px #888888;
}
.rightheader {
    width: 75%;
    margin-left: auto;
  padding-top: 20px;
  padding-left: 0;
  background-color: #f7f7f7;
  height: 40%;
  display: flex;
}
.rightappicon {
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px #888888;
}
.rightappTitle {
    text-align: right;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 20px;
  font-size: 25px;
  line-height: 30px;
  font-weight: bolder;
}
.rightcontent {
    width: 75%;
    margin-left: auto;
  background-color: #f7f7f7;
  height: 20%;
  display: flex;
}
.rightappInfo {
  font-size: 20px;
  line-height: 25px;
  width: 80%;
  margin-top: auto;
  margin-bottom: auto;
  padding-right: 10%;
  flex: 1;
  text-align: right;
}
.rightfooter {
    margin-left: 25%;
  background-color: #f7f7f7;
  height: 40%;
  text-align: right;
}
.rightappDown {
    margin-left: 10%;
    height: 43px;
    cursor:pointer;
}

/* 手机 */
.phonebgview {
  width: 100%;
  background-color: #f7f7f7;
  left: 0;
  top: 0;
  padding-top: 30px;
  padding-bottom: 20px;
}
.phoneimagecss {
  max-width: 300px;
  width: 80%;
  border-radius: 10px;
  box-shadow: 3px 3px 10px #888888;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
}
.phonetitlebg {
  display: flex;
}
.phoneappicon {
  margin-left: auto;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px #888888;
}
.phoneappTitle {
  font-size: 20px;
  line-height: 30px;
  font-weight: bolder;
  margin-right: auto;
  margin-left: 10px;
  line-height: 40px;
}
.phoneappInfo {
  width: 80%;
  margin-left: 10%;
  text-align: center;
  font-size: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
}
.phoneappDown {
  display: flex;
  text-align: center;
  height: 33px;
  cursor:pointer;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
}
</style>
