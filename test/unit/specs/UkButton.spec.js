// import UkButton from 'components/UKButton'
import {getVM} from '../helpers'
import _ from 'lodash'

describe('UkButton', () => {
  it('$mount', () => {
    let vm = getVM(h => <uk-button icon="disk">
        保存
      </uk-button>
    )
    expect(_.trim(vm.$el.textContent)).to.eqls('保存')
  })
})
