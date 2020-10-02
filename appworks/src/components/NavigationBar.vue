<template>
  <div class="navigationBarCss">
      <div class="username">
          Mark Miao
      </div>
      <div class="navTitle">
          <div class="titlebtncss" v-for="(item, index) in titleBtns" :key="index" @click="titleBtnClick(index)">
              {{item}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ContactItem',
  props: {
    titleBtns: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    titleBtnClick (index) {
      console.log(index)
      var PageId = document.querySelector('#page' + index)
      window.scrollTo({
        'top': PageId.offsetTop - 60,
        'behavior': 'smooth'
      })
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
    align-self: center;
    margin-left: 15%;
    font-size: 30px;
}
.navTitle {
    display: flex;
    margin-right: 15%;
    margin-left: auto;
    height: 60px;
    align-self: center;
}
.titlebtncss {
    cursor:pointer;
    align-self: center;
    font-size: 18px;
    font-weight: bolder;
    padding: 10px;
}
</style>
