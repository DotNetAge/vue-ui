export default {
  props: {
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
    },
    listItems () {
      if (this.items && this.items.length) {
        const t = typeof(this.items[0])
        if (t === 'string' || t === 'number') {
          return this.items.map((i) => {
            const obj = {}
            obj[this.textField] = i
            obj[this.valueField] = i
            return obj
          })
        }
      }

      return this.items
    }
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item
      this.$emit('selectedChange', item)
    }
  }
}
