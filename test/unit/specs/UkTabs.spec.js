import {Tabs, Tab} from 'components/UkTabs'
import {getVM} from '../helpers'

describe('UKTabs', () => {
  it('应该输出tab内容页所需的网页结构', () => {
    let vm = getVM(h => (<ul>
      <uk-tab label="通用">
        <div class="tab-content"></div>
      </uk-tab>
      <uk-tab label="摘要">
        <div class="tab-content">
          <uk-button>Button</uk-button>
        </div>
      </uk-tab>
    </ul>), {Tab})

    expect(vm.$el.querySelectorAll('li').length).to.equal(2)
    expect(vm.$el.querySelectorAll('.tab-content').length).to.equal(2)
    expect(vm.$el.querySelector('.uk-button')).to.exist
  })

  it('应该输出tabs的正确结构', () => {
    let vm = getVM(h => (<uk-tabs>
      <uk-tab label="通用">
        <div class="tab-content"></div>
      </uk-tab>
      <uk-tab label="摘要">
        <div class="tab-content"></div>
      </uk-tab>
    </uk-tabs>), {Tabs, Tab})

    expect(vm.$el.querySelectorAll('ul').length).to.equal(2)
    expect(vm.$el.querySelectorAll('a').length).to.equal(2)
    expect(vm.$el.querySelectorAll('.tab-content').length).to.equal(2)
  })
})

