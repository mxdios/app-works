<template>
  <div class="groupHeader">
      <div class="header">
          {{headerTitle}}
      </div>
  </div>
</template>

<script>
export default {
  name: 'GroupHeader',
  props: {
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
  font-size: 30px;
  font-weight: bolder;
  margin-left: 15%;
  line-height: 60px;
}
</style>
