<template>
  <div class="uk-form-icon">
    <uk-icon :name="icon"></uk-icon>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      icon: {type: String}
    }
  }
</script>
