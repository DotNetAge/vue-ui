<template>
  <div>
    <h1>按钮 - &lt;uk-button&gt;</h1>
    <hr>
    <p>
      <uk-button :color="color"
                 :active="isActive"
                 :disabled="isDisabled"
                 :size="size"
                 :width="width"
                 :icon="icon">Default
      </uk-button>
    </p>
    <p>
      <code-block>{{ usages.basic }}</code-block>
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
        <td><code>color</code></td>
        <td><code>String</code></td>
        <td><code>undefined</code></td>
        <td>颜色</td>
        <td class="uk-form">
          <select v-model="color" class="uk-width-1-1">
            <option>undefined</option>
            <option>primary</option>
            <option>success</option>
            <option>danger</option>
          </select>
        </td>
      </tr>
      <tr>
        <td><code>active</code></td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td></td>
        <td class="uk-form">
          <input type="checkbox" v-model="isActive"/>
        </td>
      </tr>
      <tr>
        <td><code>disabled</code></td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td></td>
        <td class="uk-form">
          <input type="checkbox" v-model="isDisabled"/>
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
            <option>large</option>
          </select>
        </td>
      </tr>

      <tr>
        <td><code>width</code></td>
        <td><code>String</code></td>
        <td><code>undefined</code></td>
        <td>宽度</td>
        <td class="uk-form">
          <select v-model="width" class="uk-width-1-1">
            <option>undefined</option>
            <option>1-1</option>
            <option>1-2</option>
            <option>1-3</option>
            <option>1-4</option>
            <option>1-5</option>
            <option>1-6</option>
          </select>
        </td>
      </tr>
      <tr>
        <td><code>icon</code></td>
        <td><code>String</code></td>
        <td><code>undefined</code></td>
        <td>图标</td>
        <td class="uk-form">
          <select v-model="icon" class="uk-width-1-1">
            <option>undefined</option>
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


    <h2>按钮组 - &lt;uk-button-group&gt;</h2>
    <hr>
    <uk-button-group :type="buttonType">
      <uk-button :color="color">选项1</uk-button>
      <uk-button :color="color">选项2</uk-button>
      <uk-button :color="color">选项3</uk-button>
    </uk-button-group>
    <p>
      <code-block>{{ usages.group }}</code-block>
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
        <td><code>type</code></td>
        <td><code>String</code></td>
        <td><code>undefined</code></td>
        <td>类型</td>
        <td class="uk-form">
          <select v-model="buttonType"
                  class="uk-width-1-1">
            <option>undefined</option>
            <option>checkbox</option>
            <option>radio</option>
          </select>
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
        buttonType: undefined,
        color: undefined,
        size: undefined,
        width: undefined,
        icon: undefined,
        isDisabled: false,
        isActive: false,
        usages: {
          basic: `<uk-button color="primary|success|danger"
       size="mini|small|lager"
       icon="search"
       width="1-1"
       :disabled="true|false"
       :active="true|false">按钮文字
</uk-button>`,
          group: `<uk-button-group type="checkbox|radio">
      <uk-button>选项1</uk-button>
      <uk-button>选项2</uk-button>
      <uk-button>选项3</uk-button>
</uk-button-group>`
        }
      }
    }
  }
</script>
