<template>
  <div class="AppItemRight">
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
              <img class="rightappDown" :src="appItemLeftDict.appDownload" alt="">

            </Footer>
        </Layout>
        <Sider class="rightsider" hide-trigger :width="screenWidth*0.5">
          <div class="rightappimage">
            <img class="rightimagecss" :src="appItemLeftDict.image" alt="">
          </div>
        </Sider>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'AppItemRight',
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

<style scoped>
.AppItemRight {
  margin-top: 80px;
  width: 100%;
  height: 300px;
  background-color: #f7f7f7;
  left: 0;
  top: 0;
  display: flex;
  /* box-shadow:0px 10px 8px -14px #1f1f1f; */
}

.rightsider {
  background-color: #f7f7f7;
}
.rightappimage {
  display: flex;
  /* align-self: center; */
  /* margin-right: 70px; */
  /* margin-left:auto; */
  width: 350px;
  height: 100%;
  /* background-color: red; */
  /* height: 400px; */
}
.rightimagecss {
  align-self: center;
  margin-top: auto;
  margin-bottom: auto;
  width: 100%;
}
.rightheader {
  padding-top: 20px;
  padding-left: 0;
  background-color: #f7f7f7;
  height: 40%;
  display: flex;
}
.rightappicon {
    margin-left: 30%;
  margin-top: auto;
  margin-bottom: auto;
  height: 50%;
}
.rightappTitle {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 20px;
  font-size: 25px;
  /* background-color: violet; */
  line-height: 30px;
  font-weight: bolder;
}
.rightcontent {
  background-color: #f7f7f7;
  height: 20%;
  display: flex;
}
.rightappInfo {
    margin-left: 30%;
  font-size: 20px;
  line-height: 25px;
  width: 80%;
  margin-top: auto;
  margin-bottom: auto;
}
.rightfooter {
    margin-left: 30%;
  padding-left: 0;
  background-color: #f7f7f7;
  height: 40%;
}
.rightappDown {
  height: 60%;
}
</style>
