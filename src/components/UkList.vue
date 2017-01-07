<template>
  <ul :class="{
    'uk-list':true,
    'uk-list-line':showLine,
    'uk-list-striped:striped,
    'uk-list-space':space
  }">

  </ul>
</template>
<script>
  import BaseListMixin from './BaseListMixin'
  export default {
      mixins:[BaseListMixin],
    props: {
      showLine: {
        type: Boolean,
        default: false
      },
      space: {
        type: Boolean,
        default: false
      },
      striped: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
