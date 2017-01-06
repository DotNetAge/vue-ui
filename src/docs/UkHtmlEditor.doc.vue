<template>
  <div>
    <h1>富文本编辑器 - &lt;uk-html-editor&gt;</h1>
    <uk-alert color="success">
      您已无需像UIKit官网上说明的那样要引用一大堆附加的组件才能使用HtmlEditor，因为我们已为你准备好了，直接引用就好了。
    </uk-alert>
    <uk-alert color="danger">
      <uk-icon name="info"></uk-icon> <strong>注:</strong> 持续更新中...
    </uk-alert>
    <uk-html-editor value="目标文字">
    </uk-html-editor>
    <p>
      <code-block>{{usages.basic}}</code-block>
    </p>

    <table class="uk-table uk-table-striped">
      <thead>
      <tr>
        <th>属性</th>
        <th>可选值</th>
        <th>默认值</th>
        <th>说明</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>mode</code></td>
        <td><code>'split'</code> <code>'tab'</code> </td>
        <td>'split'</td>
        <td>显示模式</td>
      </tr>
      <tr>
        <td><code>enable-scripts</code></td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>允许在预览模式下启用行内脚本与的样式。</td>
      </tr>
      <tr>
        <td><code>toolbar</code></td>
        <td><code>Array</code></td>
        <td>[ "bold", "italic", "strike", "link", "picture", ... ]</td>
        <td>设置显示在工具栏上的按钮列表。</td>
      </tr>
      <tr>
        <td><code>max-split-size</code></td>
        <td><code>Number</code></td>
        <td>1000</td>
        <td>Min. browser width when to switch to responsive tab mode when in split mode</td>
      </tr>
      <tr>
        <td><code>preview-label</code></td>
        <td><code>String</code></td>
        <td>'预览'</td>
        <td>预览模式显示的文字</td>
      </tr>
      <tr>
        <td><code>codeview-label</code></td>
        <td><code>String</code></td>
        <td>'Markdown'</td>
        <td>代码模式的显示文字</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default{
      data () {
          return {
              usages:{
                  basic:`<uk-html-editor
  mode="split|tab"
  :enable-scripts="true|false"
  :toolbar="['bold', 'italic', 'strike', 'link', 'image', 'blockquote', 'listUl', 'listOl']"
  :max-split-size="1000"
  preview-label="预览"
  codeview-label="Markdown">
</uk-html-editor>`
              }
          }
      }
  }
</script>
