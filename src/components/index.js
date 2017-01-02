import 'jquery'
import 'uikit'
import 'uikit/dist/css/uikit.css'
import 'uikit/dist/css/uikit.almost-flat.css'
import UkIcon from './UkIcon'
import UkButton from './UkButton'
import UkPanel from './UkPanel.vue'
import UkNav from './UkNav'
import UkDatePicker from './UkDatepicker.vue'
import {UkTab, UkTabs} from './UkTabs'

export default (Vue, options) => {
  const ui = window.UIkit
  // 向实例注入
  Vue.prototype.$ui = {
    $: ui.$,
    modal: ui.modal,
    alert: ui.modal.alert,
    confirm: ui.modal.confirm,
    prompt: ui.modal.prompt,
    block: ui.modal.blockUI
  }

  Vue.prototype.$uikit = window.UIKit

  Vue.component('uk-icon', UkIcon)
  Vue.component('uk-button', UkButton)
  Vue.component('uk-panel', UkPanel)
  Vue.component('uk-tab', UkTab)
  Vue.component('uk-tabs', UkTabs)
  Vue.component('uk-nav', UkNav)
  Vue.component('uk-datepicker', UkDatePicker)
}
