<template>
  <div class="groupHeader bottomline" :class="type == 0 ? 'bottomlinew': 'bottomlineg'">
      <div class="header">
          {{headerTitle}}
      </div>
  </div>
</template>

<script>
export default {
  name: 'GroupHeader',
  props: {
    headerTitle: '',
    type: 0
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
}
.bottomlinew {
  background-color: white;
  border-bottom-style: solid;
  border-width: 1px;
  border-color: lightgrey;
}
.bottomlineg {
  background-color: #f7f7f7;
  border-bottom-style: solid;
  border-width: 1px;
  border-color: lightgrey;
}
.header {
  font-size: 30px;
    font-weight: bolder;
    margin-left: 15%;
    line-height: 60px;
}
</style>
