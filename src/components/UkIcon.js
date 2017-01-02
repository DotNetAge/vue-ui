export default {
  name: 'UkIcon',
  props: ['name', 'size'],
  render (h) {

    let data = {'uk-icon': true}
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
