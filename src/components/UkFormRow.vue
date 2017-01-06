<template>
  <div class="uk-form-row">
    <label v-if="label"
           class="uk-form-label"
           :for="name">{{label}}</label>
    <div class="uk-form-controls">
      <uk-icon-field v-if="icon" :icon="icon">
        <slot></slot>
      </uk-icon-field>
      <slot v-else="icon"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      name: {
        type: String
      },
      icon: {
        type: String
      },
      label: {
        type: String
      }
    }
  }
</script>
