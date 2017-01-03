<template>
  <div class="uk-alert" data-uk-alert>
    <a href="" class="uk-alert-close uk-close" v-if="closable"></a>
    <slot></slot>
  </div>
</template>
<script>
  export default {
      props:['closable']
  }
</script>
