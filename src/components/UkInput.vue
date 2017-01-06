<template>
  <input :class="{
    'uk-form-blank':blank,
    'uk-form-width-large':size=='large',
    'uk-form-width-medium':size=='medium',
    'uk-form-width-small':size=='small',
    'uk-form-width-mini':size=='mini',
    'uk-width-1-1':size=='full',
    'uk-form-success':color=='success',
    'uk-form-danger':color=='danger'
  }" :type="type"/>
</template>
<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'text'
      },
      color: {type: String},
      size: {
        type: String
      },
      width: {
        type: String
      },
      blank: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
