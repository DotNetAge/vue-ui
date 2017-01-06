<template>
  <div class="uk-form-password">
    <input type="password"
           :name="name"
           :value="value"
           @change="$emit('change', $event)"
           @focus="$emit('focus')"
           @blur="$emit('blur')"
           @key="$emit('key',$event)">
    <a href=""
       ref="pwd"
       class="uk-form-password-toggle"></a>
  </div>
</template>
<script>
  import 'uikit/dist/js/components/form-password'
  import 'uikit/dist/css/components/form-password.gradient.css'
  export default {
    props: {
      name: {type: String},
      value: {type: String},
      showLabel: {type: String, default: "显示"},
      hideLabel: {type: String, default: "隐藏"}
    },
    mounted () {
      UIkit.formPassword(this.$refs.pwd, {
        lblShow: this.showLabel,
        lblHide: this.hideLabel
      })
    }
  }
</script>
