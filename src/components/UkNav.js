export default {
  name: 'UkNav',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    textField: {
      type: String,
      default: 'label'
    },
    childrenField: {
      type: String,
      default: 'items'
    }
  },
  methods: {
    itemClickHandler (item) {
      this.$emit('itemclick', item)
    }
  },
  render (h) {
    const render_item_content = item => item.header ? <span>
      { item.icon && <i class={'uk-margin-right uk-icon uk-icon-' + item.icon}></i> }
      {item[this.textField]}
    </span> : <a href="#"
                 on-click={ () => this.itemClickHandler(item) }>
      { item.icon && <i class={'uk-margin-right uk-icon uk-icon-' + item.icon}></i> }
      {item[this.textField]}
    </a>

    const render_children = children =>
      <ul class="uk-nav-sub">
        { children.map(item => <li class={{
          'uk-nav-header': item.header,
          'uk-parent': item[this.childrenField]
        }}>
          { render_item_content(item)}
          { item[this.childrenField] && render_children(item[this.childrenField])}
        </li>) }
      </ul>

    return <ul class="uk-nav uk-nav-parent-icon" data-uk-nav>
      { this[this.childrenField].map(item => <li class={{
        'uk-nav-header': item.header,
        'uk-parent': item[this.childrenField]
      }}>
        { render_item_content(item) }
        { item[this.childrenField] && render_children(item[this.childrenField]) }
      </li>)
      }
    </ul>
  }
}
