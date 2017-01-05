<template>
  <div>
    <h1>富文本编辑器 - Html editor</h1>
    <uk-alert color="success">
      您已无需像UIKit官网上说明的那样要引用一大堆附加的组件才能使用HtmlEditor，因为我们已为你准备好了，直接引用就好了。
    </uk-alert>
    <uk-alert color="danger">
      <ui-icon name="info"></ui-icon> <strong>注:</strong> 此部分还在持续更新中。
    </uk-alert>
    <uk-html-editor :value="目标文字">
    </uk-html-editor>
    <p>
      <code-block>{{usages.basic}}</code-block>
    </p>
  </div>
</template>
<script>
  export default{
      data () {
          return {
              usages:{
                  basic:`<uk-html-editor>
</uk-html-editor>`
              }
          }
      }
  }
</script>
