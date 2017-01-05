import VueUI from 'components'
import Vue from 'vue'
import {getVM} from '../helpers'

Vue.use(VueUI)

describe('UKPager', () => {
  it('$mount()', () => {
    let expected = {
      items: 40,
      size: 5,
      index: 3,
      total () {
        return Math.ceil(this.items / this.size)
      }
    }
    // 1. sinon 是由 Karma 将 sinon-chai 配置到当前的mocha环境内的
    // 所以此处无需引入就可以直接调用
    // 2. 触发pagechanged 我们就要在 render 语法中加入 'on-' 的前缀引用事件
    let pageChangedHandler = sinon.spy()
    let vm = getVM(h => <uk-pager items={expected.items}
                                  size={expected.size}
                                  on-pagechanged={ pageChangedHandler }>
    </uk-pager>)

    let pageCount = parseInt(vm.$el.querySelector('ul>li:last-child>a').getAttribute('data-page'))

    // 触发window原生的换页事件
    window.$(vm.$el).trigger('select.uk.pagination', expected.index)

    expect(vm.$el.querySelectorAll('ul>li').length).to.eq(expected.total())
    expect(pageCount).to.equal(expected.total() - 1)
    expect(pageChangedHandler).to.have.been.called
  })
})
