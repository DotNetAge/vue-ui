import 'jquery'
import 'uikit'
import 'uikit/dist/css/uikit.gradient.css'

import UkIcon from './UkIcon'
import UkButton from './UkButton'
import UkButtonGroup from './UkButtonGroup'
import UkPanel from './UkPanel.vue'
import UkNav from './UkNav'
import UkDatePicker from './UkDatepicker.vue'
import UkTimepicker from './UkTimepicker.vue'
import {UkTab, UkTabs} from './UkTabs'
import UkHtmlEditor from './UkHtmlEditor'
import UkAlert from './UkAlert.vue'
import UkModal from './UkModal.vue'
import UkPager from './UkPager'
import UkBadge from './UkBadge.vue'

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
  Vue.component('uk-badge', UkBadge)
  Vue.component('uk-button', UkButton)
  Vue.component('uk-button-group', UkButtonGroup)
  Vue.component('uk-panel', UkPanel)
  Vue.component('uk-tab', UkTab)
  Vue.component('uk-tabs', UkTabs)
  Vue.component('uk-nav', UkNav)
  Vue.component('uk-datepicker', UkDatePicker)
  Vue.component('uk-timepicker', UkTimepicker)
  Vue.component('uk-html-editor', UkHtmlEditor)
  Vue.component('uk-alert', UkAlert)
  Vue.component('uk-modal', UkModal)
  Vue.component('uk-pager',UkPager)
}
