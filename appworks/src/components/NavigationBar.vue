<template>
  <div>
    <div class="navigationBarCss">
      <div :class="screenWidth>1000 ? 'username':'phoneusername'">
          MiaoXiaodong
      </div>
      <div v-if="screenWidth>1000" class="navTitle">
          <div class="titlebtncss" v-for="(item, index) in titleBtns" :key="index" @click="titleBtnClick(index)">
              {{item}}
          </div>
      </div>
      <div v-else class="navTitle">
        <div class="titlebtncss" @click="enumShow">
          <Icon :type="isShow ? 'md-close':'md-menu'" size=30 />
        </div>
      </div>
    </div>
    <div v-if="isShow && screenWidth<1000" class="enumView">
      <div class="enumItem" v-for="(item, index) in titleBtns" :key="index" @click="titleBtnClick(index)">
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactItem',
  props: {
    screenWidth: 0,
    titleBtns: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    titleBtnClick (index) {
      this.isShow = false
      var PageId = document.querySelector('#page' + index)
      window.scrollTo({
        'top': PageId.offsetTop - 60,
        'behavior': 'smooth'
      })
    },
    enumShow () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style>
.navigationBarCss {
  width: 100%;
  height: 60px;
  background-color: white;
  left: 0;
  top: 0;
  display: flex;
  position: fixed;
  z-index: 1000;
  box-shadow:0px 10px 8px -14px #1f1f1f;
}
.username {
    font-size: 30px;
    font-weight: bolder;
    line-height: 60px;
    margin-left: 15%;
}
.phoneusername {
    font-size: 20px;
    font-weight: bolder;
    line-height: 60px;
    margin-left: 15%;
}
.navTitle {
    display: flex;
    margin-right: 15%;
    margin-left: auto;
    height: 60px;
}
.titlebtncss {
    cursor:pointer;
    align-self: center;
    font-size: 18px;
    font-weight: bolder;
    padding: 10px;
}
.enumView {
  top: 60px;
  position: fixed;
  flex-flow: row wrap;
  width: 100%;
  height: 280px;
  box-shadow:0px 10px 8px -14px #1f1f1f;
  background-color: white;
}
.enumItem {
  font-size: 15px;
  font-weight: bolder;
  cursor:pointer;
  width: 100%;
  height: 40px;
  padding-left: 15%;
  line-height: 40px;
  /* background-color: violet; */
}
</style>
