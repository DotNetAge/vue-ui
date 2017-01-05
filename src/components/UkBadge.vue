<template>
  <div class="uk-badge"
       :class="{
       'uk-badge-success':color=='success',
       'uk-badge-warning':color=='warning',
       'uk-badge-danger':color=='danger'
       }">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: ['color']
  }
</script>
