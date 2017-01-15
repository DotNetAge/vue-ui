import 'uikit/dist/js/components/pagination'

export default {
  name: 'UkPager',
  props: {
    items: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 10
    },
    current: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      pagination: undefined
    }
  },
  watch: {
    items (newVal) {
      this.pagination.option('items', newVal)
    }
  },
  mounted () {
    this.pagination = UIkit.pagination(this.$refs.pager, {
      items: this.items,
      itemsOnPage: this.size,
      currentPage: this.current
    })


    UIkit.$(this.$refs.pager).on('select.uk.pagination', (e, pageIndex) => {
      this.$emit('pagechanged', pageIndex)
    })
  },
  render (h) {
    return (
      <ul class="uk-pagination" ref="pager"></ul>
    )
  }
}
