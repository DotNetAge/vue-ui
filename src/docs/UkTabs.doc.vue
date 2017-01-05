<template>
  <div>
    <h1>分页容器 - Tabs</h1>
    <hr>
    <h2>基本用法</h2>
    <uk-tabs :active="tabIndex"
             :layout="tabLayout"
             :center="tabCenter"
             :width="tabWidth">
      <uk-tab label="Tab1">
        {{ getContent() }}
      </uk-tab>
      <uk-tab label="Tab2">
        {{ getContent() }}
      </uk-tab>
      <uk-tab label="Tab3">
        {{ getContent() }}
      </uk-tab>
      <uk-tab :disabled="true" label="Disabled">
        Disabled content
      </uk-tab>
    </uk-tabs>
    <h3>代码</h3>
    <code-block>{{usages.basic}}</code-block>

    <h3>属性</h3>
    <table class="uk-table uk-table-striped uk-table-condensed">
      <thead>
      <tr>
        <th>属性</th>
        <th>类型</th>
        <th>默认值</th>
        <th>说明</th>
        <th style="width:80px;">试试</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>active</code></td>
        <td><code>Boolean</code></td>
        <td>0</td>
        <td>设置选中的页</td>
        <td class="uk-form">
          <input type="number"
                 v-model="tabIndex"
                 class="uk-width-1-1" max="2" min="0"/>
        </td>
      </tr>
      <tr>
        <td><code>layout</code></td>
        <td><code>String</code></td>
        <td>
          <p><code>undefined</code></p>
          以下为可选值：
          <ul>
            <li><code>'flip'</code> - 页头居右</li>
            <li><code>'left'</code> - 垂直布局居左</li>
            <li><code>'right'</code> - 垂直布局居右</li>
            <li><code>'bottom'</code> - 页头居下</li>
          </ul>
        </td>
        <td>
          设置页的布局方式
        </td>
        <td class="uk-form">
          <select v-model="tabLayout"
                  class="uk-width-1-1">
            <option label="undefined"></option>
            <option>flip</option>
            <option>left</option>
            <option>right</option>
            <option>bottom</option>
          </select>
        </td>
      </tr>
      <tr>
        <td><code>center</code></td>
        <td><code>String</code></td>
        <td><code>undefined</code></td>
        <td>是否将页居中显示</td>
        <td class="uk-text-center">
          <input type="checkbox"
                 v-model="tabCenter"/>
        </td>
      </tr>
      <tr>
        <td><code>width</code></td>
        <td><code>String</code></td>
        <td><code>undefined</code></td>
        <td></td>
        <td class="uk-form">
          <select v-model="tabWidth"
                  class="uk-width-1-1">
            <option>1-2</option>
            <option>1-3</option>
            <option>1-4</option>
            <option>1-5</option>
            <option>1-6</option>
          </select>
        </td>
      </tr>
      </tbody>
    </table>


  </div>
</template>
<script>
  import Chance from 'chance'
  export default {
    data () {
      return {
        tabWidth: '1-3',
        tabCenter: false,
        tabLayout: undefined,
        tabIndex: 0,
        chance: new Chance(),
        usages: {
          basic: `<uk-tabs :active="1"
      layout="flip|left|right|bottom"
      :center="true|false"
      width="1-3">
      <uk-tab label="页标题">
        内容页1
      </uk-tab>
      <uk-tab label="页2">
        内容页2
      </uk-tab>

      ...

      <uk-tab :disabled="true" label="禁用">
      </uk-tab>
    </uk-tabs>`
        }
      }
    },
    methods: {
      getContent() {
        return chance.paragraph()
      }
    }
  }
</script>
