<template>
  <div id="app">
    <nav class="uk-navbar">
      <div class="uk-container uk-container-center">
        <a href="" class="uk-navbar-brand">Vue UI</a>
        <ul class="uk-navbar-nav">
          <li><a href="https://github.com/DotNetAge/vue-ui" target="_blank">Github</a></li>
          <li><a href="https://www.npmjs.com/package/vue-ui">NPM</a></li>
        </ul>
        <div class="uk-navbar-flip">
          <ul class="uk-navbar-nav">
            <li><a href="https://github.com/DotNetAge/vue-ui/issues" target="_blank">Issues</a></li>
            <li><a href="http://www.cnblogs.com/ray-liang" target="_blank">My Blog</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="uk-margin-large-top uk-container uk-container-center">
      <div class="uk-grid" data-uk-grid-margin>
        <div class="uk-width-medium-1-1">
          <div class="uk-grid">
            <div class="uk-width-medium-1-4">
              <ul class="uk-tab uk-tab-left uk-width-medium-1-1"
                  data-uk-tab="">
                <li class="uk-active">
                  <router-link :to="{name:'Buttons'}">Button</router-link>
                <li>
                  <router-link :to="{name:'Accordions'}">Accordion</router-link>
                <li>
                  <router-link :to="{name:'Panels'}">Panel</router-link>
                </li>
                <li>
                  <router-link :to="{name:'Pickers'}">Pickers</router-link>
                </li>
                <li>
                  <router-link :to="{name:'Modals'}">Modal</router-link>
                </li>
                <li>
                  <router-link :to="{name:'Uploaders'}">Uploader</router-link>
                </li>
                <li>
                  <router-link :to="{name:'HtmlEditors'}">HtmlEditor</router-link>
                </li>
                <li>
                  <router-link :to="{name:'Offcanvas'}">Offcanvas</router-link>
                </li>
                <li>
                  <router-link :to="{name:'Tabs'}">Tabs</router-link>
                </li>

              </ul>
            </div>
            <div class="uk-width-medium-3-4">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//  import 'uikit/dist/css/uikit.css'
//  import 'uikit/dist/css/uikit.almost-flat.css'
//  import 'uikit'
  export default {
    name: 'app',
    mounted () {
      this.$router.push({name: 'Buttons'})
    }
  }
</script>
