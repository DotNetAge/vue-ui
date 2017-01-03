<template>
  <input type="text"
         :value="value"
         :data-uk-timepicker="options"/>
</template>
<script>
  import 'uikit/dist/js/components/autocomplete'
  import 'uikit/dist/js/components/timepicker'

  export default {
    name: 'UkTimepicker',
    props: {
      value: {type: String},
      format: {
        type: String,
        default: '24h'
      },
      start: {
        type: Number,
        default: 0
      },
      end: {
        type: Number,
        default: 24
      }
    },
    computed: {
      options () {
        return JSON.stringify({
          format: this.format,
          start: this.start,
          end: this.end
        })
      }
    }
  }
</script>
