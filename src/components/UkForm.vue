<template>
  <form :class="{
    'uk-form':true,
    'uk-form-stacked':stacked,
    'uk-form-horizontal':horizontal
  }">
    <slot></slot>
  </form>
</template>
<script>
  export default {
    props: {
      stacked: {
        type: Boolean,
        default: false
      },
      horizontal: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
