// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueUI from 'components'
import VueRouter from 'vue-router'
import UkAccordionDoc from './docs/UkAccordion.doc.vue'
import UkPanelDoc from './docs/UkPanel.doc.vue'
import UkHtmlEditorDoc from './docs/UkHtmlEditor.doc.vue'
import UkOffcanvasDoc from './docs/UkOffcanvas.doc.vue'
import UkModalDoc from './docs/UkModal.doc.vue'
import UkTabsDoc from './docs/UkTabs.doc.vue'
import UkUploaderDoc from './docs/UkUploader.doc.vue'
import PickersDoc from './docs/Pickers.vue'
import UkButtonDoc from './docs/UkButton.doc.vue'
import CodeBlock from './docs/CodeBlock.vue'
import UkCommonDoc from './docs/Common.vue'
import Forms from './docs/Forms.vue'

Vue.use(VueUI)
Vue.use(VueRouter)
Vue.component('code-block', CodeBlock)
const router = new VueRouter({
  routes: [
    {name: 'Pickers', path: '/examples/pickers', component: PickersDoc},
    {name: 'Accordions', path: '/examples/accordions', component: UkAccordionDoc},
    {name: 'Panels', path: '/examples/panels', component: UkPanelDoc},
    {name: 'Modals', path: '/examples/modals', component: UkModalDoc},
    {name: 'Uploaders', path: '/examples/uploaders', component: UkUploaderDoc},
    {name: 'Tabs', path: '/examples/tabs', component: UkTabsDoc},
    {name: 'HtmlEditors', path: '/examples/html-editors', component: UkHtmlEditorDoc},
    {name: 'Buttons', path: '/examples/buttons', component: UkButtonDoc},
    {name: 'Offcanvas', path: '/examples/offcanvas', component: UkOffcanvasDoc},
    {name: 'Common', path: '/examples/common', component: UkCommonDoc},
    {name: 'Forms', path: '/examples/forms', component: Forms}
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
