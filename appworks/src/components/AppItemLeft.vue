<template>
  <div class="AppItemLeft">
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
</template>

<script>
export default {
  name: 'AppItemLeft',
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
      screenWidth: 0
    }
  },
  created () {
    this.screenWidth = document.body.clientWidth
  },
  mounted () {
    const that = this
    window.addEventListener('resize', function () {
      that.screenWidth = document.body.clientWidth
    })
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
  height: 350px;
  background-color: white;
  left: 0;
  top: 0;
  display: flex;
}
.leftsider {
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
  height: 50%;
}
.appTitle {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 20px;
  font-size: 25px;
  /* background-color: violet; */
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
</style>
