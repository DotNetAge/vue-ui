<template>
  <div class="uk-alert"
       :class="{
       'uk-alert-success':color=='success',
       'uk-alert-warning':color=='warning',
       'uk-alert-danger':color=='danger',
       'uk-alert-large':large
       }"
       data-uk-alert>
    <a href="" class="uk-alert-close uk-close" v-if="closable"></a>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      closable: {
        type: Boolean,
        default: false
      },
      color: {type: String},
      large: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
