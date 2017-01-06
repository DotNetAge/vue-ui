<template>
  <div class="uk-autocomplete uk-form"
       ref="auto">
    <input type="text"
           :name="name"
           class="uk-width-1-1"/>
  </div>
</template>
<script>
  import 'uikit/dist/js/components/autocomplete'
  import 'uikit/dist/css/components/autocomplete.gradient.css'
  export default {
    props: {
      name: {type: String},
      minLength: {type: Number, default: 3},
      param: {type: String, default: 'terms'},
      delay: {type: Number, default: 300},
      flipDropdown: {type: Boolean, default: false},
      source: {type: String}
    },
    mounted () {
      UIkit.autocomplete(this.$refs.auto, {
        source: this.source,
        minLength: this.minLength,
        param: this.param,
        delay: this.delay,
        flipDropdown: this.flipDropdown
      })
    }
  }
</script>
