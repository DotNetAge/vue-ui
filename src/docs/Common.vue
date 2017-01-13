<template>
  <div>
    <h1>通用组件</h1>
    <h2>警告提示框 - &lt;uk-alert&gt;</h2>
    <hr>
    <uk-alert :color="color"
              :closable="closable">注：这是一段警告提示文字。
    </uk-alert>

    <h3>代码示例</h3>
    <code-block>{{usages.alert}}</code-block>

    <h3>属性</h3>
    <table class="uk-table uk-table-striped uk-table-condensed">
      <thead>
      <tr>
        <th>属性</th>
        <th>类型</th>
        <th>默认值</th>
        <th class="uk-width-2-6">说明</th>
        <th>体验</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>closable</code></td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>可关闭</td>
        <td class="uk-form">
          <input type="checkbox" v-model="closable"/>
        </td>
      </tr>
      <tr>
        <td><code>color</code></td>
        <td><code>String</code></td>
        <td><code>undefined</code></td>
        <td>颜色</td>
        <td class="uk-form">
          <select v-model="color"
                  class="uk-width-1-1">
            <option>undefined</option>
            <option>success</option>
            <option>warning</option>
            <option>danger</option>
          </select>
        </td>
      </tr>
      </tbody>
    </table>


    <h2>图标 - &lt;uk-icon&gt;</h2>
    <hr>
    <p>
      <uk-icon :name="name"
               :button="button"
               :hover="hover"
               :justify="justify"
               :spin="spin"
               :size="size"></uk-icon>
    </p>
    <code-block>{{usages.icon.basic}}</code-block>
    <h3>属性</h3>
    <hr>
    <table class="uk-table uk-table-striped uk-table-condensed">
      <thead>
      <tr>
        <th>属性</th>
        <th>类型</th>
        <th>默认值</th>
        <th class="uk-width-2-6">说明</th>
        <th>体验</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>button</code></td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>可关闭</td>
        <td class="uk-form">
          <input type="checkbox" v-model="button"/>
        </td>
      </tr>
      <tr>
        <td><code>hover</code></td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td></td>
        <td class="uk-form">
          <input type="checkbox" v-model="hover"/>
        </td>
      </tr>

      <tr>
        <td><code>justify</code></td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td></td>
        <td class="uk-form">
          <input type="checkbox" v-model="justify"/>
        </td>
      </tr>

      <tr>
        <td><code>spin</code></td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td></td>
        <td class="uk-form">
          <input type="checkbox" v-model="spin"/>
        </td>
      </tr>

      <tr>
        <td><code>size</code></td>
        <td><code>String</code></td>
        <td><code>undefined</code></td>
        <td>尺寸</td>
        <td class="uk-form">
          <select v-model="size" class="uk-width-1-1">
            <option>undefined</option>
            <option>small</option>
            <option>medium</option>
            <option>large</option>
          </select>
        </td>
      </tr>

      <tr>
        <td><code>name</code></td>
        <td><code>String</code></td>
        <td><code>undefined</code></td>
        <td>图标</td>
        <td class="uk-form">
          <select v-model="name" class="uk-width-1-1">
            <option>undefined</option>
            <option>spinner</option>
            <option>comment</option>
            <option>edit</option>
            <option>check</option>
            <option>cloud-upload</option>
            <option>clone</option>
            <option>cart-plus</option>
            <option>credit-card</option>
            <option>plus</option>
          </select>
        </td>
      </tr>
      </tbody>
    </table>


    <h2 class="uk-margin-large-top">徽章 - &lt;uk-badge&gt;</h2>
    <hr>
    <p>
      <uk-badge :color="badgeColor">注意</uk-badge>
    </p>
    <code-block>{{usages.badge.basic}}</code-block>
    <table class="uk-table uk-table-striped uk-table-condensed">
      <thead>
      <tr>
        <th>属性</th>
        <th>类型</th>
        <th>默认值</th>
        <th class="uk-width-2-6">说明</th>
        <th>体验</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>color</code></td>
        <td><code>String</code></td>
        <td><code>undefined</code></td>
        <td>颜色</td>
        <td class="uk-form">
          <select v-model="badgeColor" class="uk-width-1-1">
            <option>undefined</option>
            <option>primary</option>
            <option>success</option>
            <option>danger</option>
          </select>
        </td>
      </tr>
      </tbody>
    </table>


    <h2 class="uk-margin-large-top">分页器 - &lt;uk-pager&gt;</h2>
    <hr>
    <p>
      <uk-pager :items="pagerItems"
                :size="pagerSize"
                :current="pagerCurrent"></uk-pager>
    </p>

    <code-block>{{usages.pager}}</code-block>
    <table class="uk-table uk-table-striped uk-table-condensed">
      <thead>
      <tr>
        <th>属性</th>
        <th>类型</th>
        <th>默认值</th>
        <th class="uk-width-2-6">说明</th>
        <th>体验</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>items</code></td>
        <td><code>Number</code></td>
        <td><code>undefined</code></td>
        <td>数量</td>
        <td class="uk-form">
          <input type="number" v-model="pagerItems" min="1" />
        </td>
      </tr>
      <tr>
        <td><code>size</code></td>
        <td><code>Number</code></td>
        <td><code>undefined</code></td>
        <td>每页显示的数据项</td>
        <td class="uk-form">
          <input type="number" v-model="pagerSize" min="1" />
        </td>
      </tr>
      <tr>
        <td><code>current</code></td>
        <td><code>Number</code></td>
        <td><code>undefined</code></td>
        <td>当前页码</td>
        <td class="uk-form">
          <input type="number" v-model="pagerCurrent" min="0" />
        </td>
      </tr>
      </tbody>
    </table>

  </div>
</template>
<script>
  export default{
    data () {
      return {
        color: undefined,
        badgeColor: undefined,
        name: 'edit',
        spin: false,
        hover: false,
        button: false,
        justify: false,
        closable: false,
        size: undefined,
        pagerSize: 10,
        pagerItems: 300,
        pagerCurrent: 2,
        usages: {
          alert: `<uk-alert
  :closable="true|false"
  color="success|warning|danger">
  文字内容
</uk-alert>`,
          icon: {
            basic: `<uk-icon
  name="去除前缀后的图标名"
  size="small|medium|large"
  hover="true|false"
  justify="true|false"
  spin="true|false"
  button="true|false">
</uk-icon>`
          },
          badge: {
            basic: `<uk-badge color="success|warning|danger">注意</uk-badge>`
          },
          pager: `<uk-pager :items="300"
                :size="20"
                :current="2"></uk-pager>`
        }
      }
    }
  }
</script>
