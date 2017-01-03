<template>
  <input type="text"
         :value="value"
         :data-uk-datepicker="options"/>
</template>
<script>
  import 'uikit/dist/js/components/datepicker'
  import 'uikit/dist/css/components/datepicker.almost-flat.css'

  export default {
    name: 'UkDatePicker',
    props: {
      value: {type: String},
      weekstart: {
        type: Number,
        default: 1
      },
      mobile: {
        type: Boolean,
        default: false
      },
      i18n: {
        type: Object,
        default: () => {
          return {
            months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            weekdays: ['日', '一', '二', '三', '四', '五', '六']
          }
        }
      },
      format: {
        type: String,
        default: 'YYYY-MM-DD'
      },
      offsettop: {
        type: Number,
        default: 5
      },
      maxDate: {
        type: Boolean,
        default: false
      },
      minDate: {
        type: Boolean,
        default: false
      },
      pos: {
        type: String,
        default: 'auto'
      }
    },
    computed: {
      options () {
        return JSON.stringify({
          weekstart: this.weekstart,
          mobile: this.mobile,
          i18n: this.i18n,
          format: this.format,
          offsettop: this.offsetop,
          maxDate: this.maxDate,
          minDate: this.minDate,
          pos: this.pos
        })
      }
    }
  }
</script>
