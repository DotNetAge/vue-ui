// import UkButton from 'components/UKButton'
import {getVM} from '../helpers'
import _ from 'lodash'

describe('UkButton', () => {
  it('$mount', () => {

    const clickHandler= sinon.spy()

    let vm = getVM(h => <uk-button icon="disk"
      right-icon="edit"
      active={true}
      size="large"
      on-click={ clickHandler }>
        保存
      </uk-button>
    )

    const cls=vm.$el.getAttribute('class')
    expect(cls).to.include('uk-button-large')
    expect(cls).to.include('uk-active')
    expect(vm.$el.querySelector('.uk-icon-edit')).to.exist
    expect(vm.$el.querySelector('.uk-icon-disk')).to.exist
    expect(_.trim(vm.$el.textContent)).to.eqls('保存')

    window.$(vm.$el).trigger('click')
    expect(clickHandler).to.have.been.called

  })
})
