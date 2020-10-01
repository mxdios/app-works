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
              <img class="rightappDown" :src="appItemLeftDict.appDownload" alt="" @click="downClick">
            </Footer>
        </Layout>
        <Sider class="rightsider" hide-trigger :width="rightScreenWidth*0.5">
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
      rightScreenWidth: 0
    }
  },
  created () {
    this.rightScreenWidth = document.body.clientWidth
  },
  mounted () {
    const that = this
    window.addEventListener('resize', function () {
      that.rightScreenWidth = document.body.clientWidth
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
.AppItemRight {
  width: 100%;
  height: 350px;
  background-color: #f7f7f7;
  left: 0;
  top: 0;
  display: flex;
}

.rightsider {
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
  height: 50%;
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
    height: 43px;
  cursor:pointer;
}
</style>
