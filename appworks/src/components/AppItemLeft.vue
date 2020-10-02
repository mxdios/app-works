<template>
  <div v-if="screenWidth>1000" class="AppItemLeft">
      <Layout>
        <Sider class="leftsider" hide-trigger :width="screenWidth*0.5">
          <div class="appimage">
            <img class="imagecss" :src="appItemLeftDict.image" alt="">
          </div>
        </Sider>
        <Layout>
            <Header class="header">
              <img class="appicon" :src="appItemLeftDict.appIcon" alt="">
              <div class="appTitle">
                {{appItemLeftDict.appTitle}}
              </div>
            </Header>
            <Content class="content">
              <div class="appInfo">
                {{appItemLeftDict.appInfo}}
              </div>
            </Content>
            <Footer class="footer">
              <img class="appDown" :src="appItemLeftDict.appDownload" alt="" @click="downClick">
            </Footer>
        </Layout>
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
  </div>
</template>

<script>
export default {
  name: 'AppItemLeft',
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
    }
  }
}
</script>

<style scoped>
.AppItemLeft {
  width: 100%;
  background-color: white;
  left: 0;
  top: 0;
  display: flex;
}
.leftsider {
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: white;
}
.appimage {
  display: flex;
  align-self: center;
  margin-left:25%;
  height: 100%;
  background-color: white;
}
.imagecss {
  margin-left: auto;
  margin-right: auto;
  align-self: center;
  width: 80%;
  border-radius: 10px;
  box-shadow: 3px 3px 10px #888888;
}
.header {
  padding-top: 20px;
  padding-left: 0;
  background-color: white;
  height: 40%;
  display: flex;
}
.appicon {
  margin-left: 10%;
  margin-top: auto;
  margin-bottom: auto;
  width: 60px;
  height: 60px;
}
.appTitle {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 20px;
  font-size: 25px;
  line-height: 30px;
  font-weight: bolder;
}
.content {
  background-color: white;
  height: 20%;
  display: flex;
}
.appInfo {
  margin-left: 10%;
  font-size: 20px;
  line-height: 25px;
  width: 80%;
  margin-top: auto;
  margin-bottom: auto;
}
.footer {
  padding-left: 0;
  background-color: white;
  height: 40%;
}
.appDown {
  margin-left: 10%;
  height: 43px;
  cursor:pointer;
}

/* 手机 */
.phonebgview {
  width: 100%;
  background-color: white;
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
  text-align: center;
  font-size: 15px;
  line-height: 40px;
}
.phoneappDown {
  display: flex;
  text-align: center;
  height: 33px;
  cursor:pointer;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
}
</style>
