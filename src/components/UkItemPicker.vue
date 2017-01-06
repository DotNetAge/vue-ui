<template>
  <div class="uk-form">
    <input type="text"
           :name="name"
           v-model="selectedValue" data-uk-dropdown />
    <div class="uk-dropdown uk-dropdown-small">
      <ul class="uk-nav uk-nav-dropdown">
        <li v-for="item in items" @click="selectItem(item)">{{ item[textField] }}</li>
      </ul>
    </div>

  </div>
</template>
<script>
  export default {
    props: {
      name: {
        type: String
      },
      items: {
        type: Array,
        default: () => []
      },
      textField: {
        type: String,
        default: 'label'
      },
      valueField: {
        type: String,
        default: 'value'
      }
    },
    data () {
      return {
        selectedItem: undefined
      }
    },
    computed: {
      selectedValue (){
        return this.selectedItem ? this.selectedItem[this.valueField] : ''
      }
    },
    methods: {
      selectItem(item) {
        this.selectedItem = item
        this.$emit('change', item)
      }
    }
  }
</script>
