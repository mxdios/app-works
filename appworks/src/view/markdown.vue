<template>
  <!-- <div class="mdbgcss" v-html="md"></div> -->
  <div>
      <markdown-it-vue :content="content"></markdown-it-vue>
  </div>
</template>

<script>
// import insmomd from '../assets/md/insmo.md'
import MarkdownItVue from 'markdown-it-vue'

export default {
  name: 'markdown',
  components: {
    MarkdownItVue
  },
  data () {
    return {
      content: ''
    }
  },
  created () {
    this.content = this.readFile('../assets/md/insmo.md')
  },
  mounted () {},
  methods: {
    readFile (filePath) {
    // 创建一个新的xhr对象
      let xhr = null
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
      } else {
        // eslint-disable-next-line
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
      }
      const okStatus = document.location.protocol === 'file' ? 0 : 200
      xhr.open('GET', filePath, false)
      xhr.overrideMimeType('text/html;charset=utf-8')
      xhr.send(null)
      return xhr.status === okStatus ? xhr.responseText : null
    }
  }
}
</script>

<style>
.mdbgcss {
  width: 70%;
  margin-left: 15%;
}
</style>
