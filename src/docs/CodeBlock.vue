<template>
   <pre ref="code"><code><slot></slot></code></pre>
</template>
<script>
  import hljs from 'highlight.js/lib/index'
  import 'highlight.js/styles/monokai-sublime.css'

  export default {
    props: {'lang': {type: String, default: 'html'}},
    mounted () {
      //if (this.content) {
      hljs.highlightBlock(this.$refs.code)
      //}
    }
  }
</script>
