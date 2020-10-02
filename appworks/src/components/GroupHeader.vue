<template>
  <div class="groupHeader">
      <div class="header" :class="screenWidth>1000? 'headerFont': 'phoneHeaderFont'">
          {{headerTitle}}
      </div>
  </div>
</template>

<script>
export default {
  name: 'GroupHeader',
  props: {
    screenWidth: 0,
    headerTitle: ''
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
  }
}
</script>

<style scoped>
.groupHeader {
    width: 100%;
    height: 60px;
    background-color: #0395EB;
}

.header {
  color: white;
  font-weight: bolder;
  margin-left: 15%;
  line-height: 60px;
}
.headerFont {
  font-size: 30px;
}
.phoneHeaderFont {
  font-size: 25px;
}
</style>
