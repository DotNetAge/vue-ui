export const UkSection = {
  props: {
    title: {
      type: String
    }
  },
  render (h) {
    return <li>
      <h3 class="uk-accordion-title">
        {this.title}
      </h3>
      <div class="uk-accordion-content">
        { this.$slots.default }
      </div>
    </li>
  }
}

export const UkAccordion = {
  name: 'UkAccordion',
  components: {UkSection},
  data () {
    return {
      sections: []
    }
  },
  beforeMount () {
    this.sections = this.$slots.default.filter(node =>
      node.componentOptions && node.componentOptions.tag === 'uk-section'
    ).map((node, index) => {
      const data = node.componentOptions.propsData
      data.index = index
      return node
    })
  },
  render (h) {
    return <ul uk-accordion="collapsible:false"
               class={{'uk-accordion': true}}>
      {this.$slots.default}
    </ul>
  }
}
