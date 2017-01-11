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
import UkPassword from './UkPassword.vue'
import UkSelect from './UkSelect.vue'
import UkProgress from './UkProgress.vue'
import UkDropdown from './UkDropdown.vue'
import UkItemPicker from './UkItemPicker.vue'
import UkForm from './UkForm.vue'
import UkFormRow from './UkFormRow.vue'
import UkFormIcon from './UkFormIcon.vue'
import UkInput from './UkInput.vue'
import UkThumb from './UkThumb'
import UkOverlay from './UkOverlay.vue'
import UkList from './UkList.vue'
import {UkSection, UkAccordion} from './UkAccordion'
import UkUploader from './UkUploader.vue'

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
  Vue.component('uk-icon-field', UkFormIcon)
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
  Vue.component('uk-pager', UkPager)
  Vue.component('uk-password', UkPassword)
  Vue.component('uk-select', UkSelect)
  Vue.component('uk-progress', UkProgress)
  Vue.component('uk-dropdown-list', UkDropdown)
  Vue.component('uk-itempicker', UkItemPicker)
  Vue.component('uk-input', UkInput)
  Vue.component('uk-form', UkForm)
  Vue.component('uk-field', UkFormRow)
  Vue.component('uk-thumbnail', UkThumb)
  Vue.component('uk-overlay', UkOverlay)
  Vue.component('uk-list', UkList)
  Vue.component('uk-accordion', UkAccordion)
  Vue.component('uk-section', UkSection)
  Vue.component('uk-uploader', UkUploader)
}
