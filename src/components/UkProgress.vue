<template>
  <div class="uk-progress"
       :class="{
        'uk-progress-mini':size=='mini',
        'uk-progress-small':size=='small',
        'uk-progress-striped':striped,
        'uk-progress-success':color=='success',
        'uk-progress-warning':color=='warning',
        'uk-progress-danger':color=='danger'
        }">
    <div class="uk-progress-bar"
         :style="{width: value+'%' }">
      <span v-if="showValue">{{value}}%</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'UkProgress',
    props: {
      value: {
        type: Number,
        default: 0
      },
      showValue: {
        type: Boolean,
        default: true
      },
      striped: {
        type: Boolean,
        default: false
      },
      size: {
        type: String
      },
      color: {
        type: String
      }
    }
  }
</script>
