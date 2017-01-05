<template>
  <div>
    <h1>通用组件</h1>
    <h2>警告提示框 - Alert</h2>
    <hr>
    <uk-alert>注：这是一段警告提示文字。</uk-alert>

    <uk-alert :closable="true">当我的 <code>closable</code> 属性被设置为 true 时就可以被关闭了。</uk-alert>

    <uk-alert color="success">这是一段 <code>color="primary"</code> 的警告提示文字</uk-alert>
    <uk-alert color="warning">这是一段 <code>color="warning"</code> 的警告提示文字</uk-alert>
    <uk-alert color="danger">这是一段 <code>color="danger"</code> 的警告提示文字</uk-alert>
    <h3>代码示例</h3>
    <code-block>{{usages.alert}}</code-block>

    <h2>图标</h2>
    <uk-icon name="edit"></uk-icon>

    <h3>大小</h3>
    <h3><strong>size</strong> 属性</h3>
    <p>可支持大中小三种图标尺寸，具体的<code>size</code>值如下所示</p>
    <table class="uk-table uk-table-striped uk-table-condensed">
      <thead>
      <tr>
        <th>示例</th>
        <th>size 值</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>
          <uk-icon name="edit" size="small"></uk-icon>
        </td>
        <td><code>small</code></td>
      </tr>
      <tr>
        <td>
          <uk-icon name="edit" size="medium"></uk-icon>
        </td>
        <td><code>medium</code></td>
      </tr>
      <tr>
        <td>
          <uk-icon name="edit" size="large"></uk-icon>
        </td>
        <td><code>large</code></td>
      </tr>
      </tbody>
    </table>

    <h3>其它属性</h3>
    <table class="uk-table uk-table-striped uk-table-condensed">
      <thead>
      <tr>
        <th>示例</th>
        <th>属性</th>
        <th>说明</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>
          <uk-icon name="edit" :button="true"></uk-icon>
        </td>
        <td><code>{{usages.icon.button}}</code></td>
        <td>图标按钮</td>
      </tr>
      <tr>
        <td>
          <uk-icon name="edit" :hover="true"></uk-icon>
        </td>
        <td><code>{{usages.icon.hover}}</code></td>
        <td>鼠标感知</td>
      </tr>
      <tr>
        <td>
          <uk-icon name="edit" :justify="true"></uk-icon>
        </td>
        <td><code>{{usages.icon.justify}}</code></td>
        <td>自动对齐</td>
      </tr>
      <tr>
        <td>
          <uk-icon name="spinner" :spin="true"></uk-icon>
        </td>
        <td><code>{{usages.icon.spin}}</code></td>
        <td>转动</td>
      </tr>
      </tbody>
    </table>

    <h2 class="uk-margin-large-top">徽章 - Badge</h2>
    <hr>
    <uk-badge>注意</uk-badge>
    <h3>示例</h3>
    <code-block>{{usages.badge.basic}}</code-block>
    <h3><strong>color</strong> 属性</h3>
    <table class="uk-table uk-table-striped uk-table-condensed">
      <thead>
      <tr>
        <th>示例</th>
        <th>color</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><uk-badge color="success">成功</uk-badge></td>
        <td><code>success</code></td>
      </tr>
      <tr>
        <td><uk-badge color="warning">警告</uk-badge></td>
        <td><code>primary</code></td>
      </tr>
      <tr>
        <td><uk-badge color="danger">危险</uk-badge></td>
        <td><code>danger</code></td>
      </tr>
      </tbody>
    </table>

    <h2></h2>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        usages: {
          alert: `<uk-alert
  :closable="true|false"
  color="success|warning|danger">
  文字内容
</uk-alert>`,
          icon: {
            basic: `<uk-icon
  name="去除前缀后的图标名"
  size="small|medium|large">
</uk-icon>`,
            hover:`<uk-icon name="edit" :hover="true"></uk-icon>`,
            justify:`<uk-icon name="edit" :justify="true"></uk-icon>`,
            spin:`<uk-icon name="spinner" :spin="true"></uk-icon>`,
            button:`<uk-icon name="edit" :button="true"></uk-icon>`
          },
          badge:{
              basic:`<uk-badge color="success|warning|danger">注意</uk-badge>`
          }
        }
      }
    }
  }
</script>
