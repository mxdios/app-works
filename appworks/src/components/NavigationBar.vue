<template>
  <div class="navigationBarCss">
      <div class="username">
          xxx
      </div>
      <div class="navTitle">
          ffff
      </div>
  </div>
</template>

<script>
export default {

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
    /* background-color: red; */
    /* line-height: 60px; */
    align-self: center;
    padding-left: 100px;
    font-size: 30px;
}
.navTitle {
    background-color: royalblue;
    align-self: center;
}
</style>
