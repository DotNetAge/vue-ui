<template>
  <div id="app">
    <nav class="uk-navbar">
      <div class="uk-container uk-container-center">
        <a href="" class="uk-navbar-brand">V-UIKit</a>
        <ul class="uk-navbar-nav">
          <li><a href="https://github.com/DotNetAge/vue-ui" target="_blank">Github</a></li>
          <li><a href="https://www.npmjs.com/package/v-uikit">NPM</a></li>
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
                  <router-link :to="{name:'Buttons'}">按钮</router-link>
                <li>
                <li>
                  <router-link :to="{name:'Common'}">通用</router-link>
                </li>
                <li>
                  <router-link :to="{name:'Forms'}">表单</router-link>
                </li>
                <li>
                  <router-link :to="{name:'HtmlEditors'}">富文本编辑器</router-link>
                </li>
                <li>
                  <router-link :to="{name:'Pickers'}">选择器</router-link>
                </li>
                <li>
                  <router-link :to="{name:'Modals'}">对话框</router-link>
                </li>
                <li>
                  <router-link :to="{name:'Tabs'}">分页容器</router-link>
                </li>
                <li>
                  <router-link :to="{name:'Dropdowns'}">列表</router-link>
                </li>
                <li>
                  <router-link :to="{name:'Imaging'}">图形图像</router-link>
                </li>
                <li class="uk-disabled">
                  <router-link :to="{name:'Accordions'}">手风琴</router-link>
                </li>
                <li class="uk-disabled">
                  <router-link :to="{name:'Uploaders'}">文件上传</router-link>
                </li>
                <li class="uk-disabled">
                  <router-link :to="{name:'Offcanvas'}">幕布</router-link>
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
  export default {
    name: 'app',
    mounted () {
      // this.$router.push({name: 'Buttons'})
    }
  }
</script>
