export default {
  name: 'UkIcon',
  props: {
    name: {type: String},
    size: {type: String},
    hover: {type: Boolean},
    button: {type: Boolean},
    spin: {type: Boolean},
    justify: {type: Boolean}
  },
  render (h) {
    let data = {
      'uk-icon': true,
      'uk-icon-hover': this.hover,
      'uk-icon-button': this.button,
      'uk-icon-justify': this.justify,
      'uk-icon-spin': this.spin
    }
    if (this.name) {
      const iconName = `uk-icon-${this.name}`
      data[iconName] = true
      if (this.size) {
        const iconSize = `uk-icon-${this.size}`
        data[iconSize] = true
      }
    }
    return this.name ? <i class={data}>
      </i> : this.$slots.default
  }
}
