export default {
  props: ['type'],
  render (h) {
    const attrs = {}
    if (this.type === 'checkbox')
      attrs['data-uk-button-checkbox'] = true

    if (this.type === 'radio')
      attrs['data-uk-button-radio'] = true

    return h('div',
      {
        class: {
          'uk-button-group': true
        },
        attrs
      },
      this.$slots.default)
  }
}
