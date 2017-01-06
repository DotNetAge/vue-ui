<template>
  <div>
    <h1>表单与输入</h1>
    <hr>
    <h2>表单 - &lt;uk-form&gt;</h2>

    <uk-form :stacked="formStacked"
             :horizontal="formHorizontal">
      <uk-field name="username"
                label="用户"
                icon="user">
        <uk-input name="username"
                  id="username"></uk-input>
      </uk-field>
      <uk-field name="github"
                label="Github"
                icon="github">
        <uk-input name="github"
                  id="github"></uk-input>
      </uk-field>
    </uk-form>

    <h3>&lt;uk-form&gt; 属性</h3>
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
        <td><code>stacked</code></td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>堆叠布局</td>
        <td class="uk-form">
          <input type="checkbox" v-model="formStacked"/>
        </td>
      </tr>
      <tr>
        <td><code>horizontal</code></td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>垂直布局</td>
        <td class="uk-form">
          <input type="checkbox" v-model="formHorizontal"/>
        </td>
      </tr>
      </tbody>
    </table>
    <uk-alert>
      &lt;uk-field&gt;是一个 form 内的输出控件行部布的子控件。可以大量简化form内的代码。
    </uk-alert>
    <p>
      <code-block>{{ usages.form }}</code-block>
    </p>

    <h2>密码输入框 - &lt;uk-password&gt; </h2>
    <hr>
    <div class="uk-form">
      <uk-password name="user-password"
                   :show-label="showLabel"
                   :hide-label="hideLabel"></uk-password>
    </div>
    <p>
      <code-block>{{ usages.pwd }}</code-block>
    </p>
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
        <td><code>showLabel</code></td>
        <td><code>String</code></td>
        <td><code>undefined</code></td>
        <td>"显示密码"时显示的文字</td>
        <td class="uk-form">
          <input type="text"
                 v-model="showLabel"
                 class="uk-width-1-1"/>
        </td>
      </tr>
      <tr>
        <td><code>hideLabel</code></td>
        <td><code>String</code></td>
        <td><code>undefined</code></td>
        <td>"隐藏密码"时显示的文字</td>
        <td class="uk-form">
          <input type="text"
                 v-model="hideLabel"
                 class="uk-width-1-1"/>
        </td>
      </tr>

      </tbody>
    </table>

    <h2>只读选项 - &lt;uk-select&gt;</h2>
    <hr>
    <p class="uk-form">
      <uk-select :items="['选项1','选项2','选项3','选项4','选项5']">
      </uk-select>
    </p>

    <p>
      <code-block>{{ usages.select }}</code-block>
    </p>

    <h2>进度条 - &lt;uk-progress&gt;</h2>
    <hr>
    <h3>示例</h3>
    <p>
      <uk-progress :striped="striped"
                   :show-value="showValue"
                   :size="size"
                   :color="color"
                   :value="percent">
      </uk-progress>
    </p>

    <p>
      <code-block>{{ usages.progress }}</code-block>
    </p>

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
        <td><code>value</code></td>
        <td><code>Number</code></td>
        <td><code>0</code></td>
        <td>只能从0~100之间取值</td>
        <td class="uk-form">
          <input v-model="percent"
                 class="uk-width-1-1"
                 min="0"
                 max="100"
                 type="number"/>
        </td>
      </tr>
      <tr>
        <td><code>color</code></td>
        <td><code>String</code></td>
        <td><code>undefined</code></td>
        <td>颜色</td>
        <td class="uk-form">
          <select v-model="color" class="uk-width-1-1">
            <option>undefined</option>
            <option>success</option>
            <option>warning</option>
            <option>danger</option>
          </select>
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
            <option>mini</option>
            <option>small</option>
          </select>
        </td>
      </tr>

      <tr>
        <td><code>showValue</code></td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td></td>
        <td class="uk-form">
          <input type="checkbox" v-model="showValue"/>
        </td>
      </tr>
      <tr>
        <td><code>striped</code></td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td></td>
        <td class="uk-form">
          <input type="checkbox" v-model="striped"/>
        </td>
      </tr>

      </tbody>
    </table>

    <h2>带图标的输入字段 &lt;uk-icon-field&gt;</h2>
    <p>
      这是一个包装控件，它的用法与 <code>&lt;uk-icon&gt;</code>类似，它只有一个<code>icon</code>属性，而默认插槽内直接放置输入控件就会自动在输入控件的左端放入一个图标。
    </p>
    <div class="uk-form">
      <uk-icon-field icon="calendar">
        <input type="text"/>
      </uk-icon-field>
    </div>
  </div>
</template>
<script>
  import 'uikit/dist/css/components/progress.gradient.css'
  export default{
    data () {
      return {
        formStacked: false,
        formHorizontal: false,
        showLabel: '显示',
        hideLabel: '隐藏',
        percent: 40,
        size: undefined,
        color: undefined,
        striped: false,
        showValue: true,
        usages: {
          pwd: `<uk-password name="user-password"
                   show-label="显示"
                   hide-label="隐藏"></uk-password>`,
          select: `<uk-select :items="[
    {label:'选项1',value:1},
    {label:'选项2',value:2},
    {label:'选项3',value:3},
    {label:'选项4',value:4},
    {label:'选项5',value:5}
   ]">
</uk-select>`,
          progress: `<uk-progress
    :striped="true|false"
    :show-value="true|false"
    size="mini|small"
    color="success|warning|danger"
    :value="0-100">
</uk-progress>`,
          form:`<uk-form :stacked="formStacked"
        :horizontal="formHorizontal">
  <uk-field name="username"
            label="用户"
            icon="user">
    <uk-input name="username"
              id="username"></uk-input>
  </uk-field>
  <uk-field name="github"
            label="Github"
            icon="github">
    <uk-input name="github"
              id="github"></uk-input>
  </uk-field>
</uk-form>`
        }
      }
    }
  }
</script>
