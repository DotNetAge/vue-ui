import uuid from 'uuid'
export const UkTab = {
  name: 'UkTab',
  props: {
    label: {
      type: String,
      default: 'Tab'
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    active () {
      return this.index === this.$parent.index
    }
  },
  render (h) {
    return (
      <li>
        { this.$slots.default }
      </li>
    )
  }
}

export const UkTabs = {
  name: 'UkTabs',
  props: {
    active: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      tabItems: []
    }
  },
  beforeMount () {
    this.tabItems = this.$slots.default.filter(node =>
      node.componentOptions && node.componentOptions.tag === 'uk-tab'
    ).map((node, index) => {
      const data = node.componentOptions.propsData
      data.index = index
      return node
    })
  },
  render (h) {
    let tabID = uuid.v4()
    let tabJSON = `{ active:${this.active},connect:'#${tabID}'}`
    return (
      <div>
        <ul class="uk-tab"
            data-uk-tab={tabJSON}>
          {
            this.tabItems.map(tab => (
                <li>
                  <a href="">{ tab.componentOptions.propsData.label }</a>
                </li>
              )
            )
          }
        </ul>
        <ul class="uk-switcher uk-margin"
            id={tabID}>
          {
            this.tabItems.map(tab => (
              <li>
                {
                  tab.componentOptions.children
                }
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
