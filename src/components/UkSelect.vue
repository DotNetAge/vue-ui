<template>
  <div class="uk-form-select" ref="formSelect">
    <span></span>
    <i class="uk-icon-caret-down"></i>
    <select :name="name">
      <option v-for="item in options"
              :value="item.value"
              :selected="item.value==value">{{item.label}}
      </option>
    </select>
  </div>
</template>
<script>
  import 'uikit/dist/js/components/form-select'
  import 'uikit/dist/css/components/form-select.gradient.css'
  export default {
    props: {
      name: {type: String},
      value: {type: String},
      tag: {type: String, default: 'span'},
      items: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      options () {
        if (this.items && this.items.length && typeof(this.items[0]) === 'string') {
          return this.items.map(i => {
            return {label: i, value: i}
          })
        }
        return this.items
      }
    },
    mounted () {
      UIkit.formSelect(this.$refs.formSelect)
    }
  }
</script>
