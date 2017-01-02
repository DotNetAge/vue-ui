<template>
  <div class="uk-panel uk-panel-box">
    <slot name="header"><h3 v-if="title" class="tm-article-subtitle">{{title}}</h3></slot>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: ['title']
  }
</script>
