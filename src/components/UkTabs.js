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
    },
    disabled: {
      type: Boolean
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
    },
    layout: {
      type: String
    },
    center: {
      type: Boolean
    },
    width: {
      type: String
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
    let tabClasses = {
      'uk-tab': true
    }

    if (this.layout) {
      tabClasses['uk-tab-' + this.layout] = true
    }

    let tabContentClasses = {
      'uk-switcher': true,
      'uk-margin': true
    }

    if (this.width && (this.layout === 'left' || this.layout === 'right')) {
      tabClasses[`uk-width-medium-${this.width}`] = true
      let widths = this.width.split('-')
      let contentWidth = parseInt(widths[1]) - parseInt(widths[0])

      tabContentClasses[`uk-width-medium-${contentWidth}-${widths[1]}`] = true

      if (this.layout === 'right') {
        tabClasses[`uk-push-${contentWidth}-${widths[1]}`] = true
        tabContentClasses[`uk-pull-${this.width}`] = true
        tabContentClasses['uk-row-first'] = true
      }
    }

    const tabsFn = () => <ul class={tabClasses}
                             data-uk-tab={tabJSON}>
      {
        this.tabItems.map(tab => (
            <li class={{
              'uk-disabled': tab.componentOptions.propsData.disabled
            }}>
              <a href="">{ tab.componentOptions.propsData.label }</a>
            </li>
          )
        )
      }
    </ul>

    const tabsContentFn = () => <ul class={tabContentClasses}
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

    return <div class={{
      'uk-tab-center': this.center,
      'uk-grid': (this.layout === 'left' || this.layout === 'right')
    }}>
      {this.layout === 'bottom' ? [tabsContentFn(), tabsFn()] : [tabsFn(), tabsContentFn()] }

    </div>
  }
}
