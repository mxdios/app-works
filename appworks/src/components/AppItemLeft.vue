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
              <div>
                {{appItemLeftDict.appTitle}}
              </div>
            </Header>
            <Content class="content"></Content>
            <Footer class="footer"></Footer>
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
    window.onresize = () => {
      return (() => {
        that.screenWidth = document.body.clientWidth
      })()
    }
  }
}
</script>

<style>
.AppItemLeft {
  margin-top: 80px;
  width: 100%;
  height: 300px;
  background-color: lightgray;
  left: 0;
  top: 0;
  display: flex;
  /* box-shadow:0px 10px 8px -14px #1f1f1f; */
}
.leftsider {
  background-color: white;
}
.appimage {
  display: flex;
  align-self: center;
  margin-right: 100px;
  margin-left:auto;
  width: 50%;
  height: 100%;
  /* background-color: wheat; */
  /* height: 400px; */
}
.imagecss {
  align-self: center;
  margin-top: auto;
  margin-bottom: auto;
  width: 100%;
}
.header {
  background-color: white;
  height: 40%;
}
.appicon {
  margin-top: auto;
  height: 50%;
}
.content {
  background-color: white;
  height: 20%;
}
.footer {
  background-color: white;
  height: 40%;
}
</style>
