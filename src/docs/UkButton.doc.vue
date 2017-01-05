<template>
  <div>
    <h1>Button</h1>

    <h2>Usage</h2>
    <p>
      <uk-button>Default</uk-button>
    </p>
    <p>
      <code-block>{{ usages.basic }}</code-block>
    </p>

    <h3><strong>color</strong> attribute</h3>
    <table class="uk-table">
      <thead>
      <tr>
        <th>example</th>
        <th>color</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><uk-button color="primary">Primary</uk-button></td>
        <td><code>primary</code></td>
      </tr>
      <tr>
        <td><uk-button color="success">Success</uk-button></td>
        <td><code>success</code></td>
      </tr>
      <tr>
        <td><uk-button color="danger">Danger</uk-button></td>
        <td><code>danger</code></td>
      </tr>
      <tr>
        <td><uk-button color="link">Link</uk-button></td>
        <td><code>link</code></td>
      </tr>
      </tbody>
    </table>


    <h2>Button state</h2>
    <uk-button :active="true">Active</uk-button>
    <uk-button :disabled="true">Disabled</uk-button>

    <h2>Sizing</h2>
    <h3><strong>size</strong> 属性</h3>
    <table class="uk-table">
      <thead>
      <tr>
        <th>示例</th>
        <th>size</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><uk-button size="mini">Mini</uk-button></td>
        <td><code>mini</code></td>
      </tr>
      <tr>
        <td><uk-button size="small">Small</uk-button></td>
        <td><code>small</code></td>
      </tr>
      <tr>
        <td><uk-button size="large">Large</uk-button></td>
        <td><code>large</code></td>
      </tr>
      </tbody>
    </table>

    <h2>Icon button</h2>
    <uk-button icon="search">Search</uk-button>

    <h2>按钮组</h2>

    <div class="uk-flex">
      <div class="uk-width-1-3">
        <p>Normal</p>
        <uk-button-group>
          <uk-button>Button</uk-button>
          <uk-button>Button2</uk-button>
          <uk-button>Button3</uk-button>
        </uk-button-group>
      </div>
      <div class="uk-width-1-3">
        <p>Checkbox</p>
        <uk-button-group type="checkbox">
          <uk-button>Button</uk-button>
          <uk-button>Button2</uk-button>
          <uk-button>Button3</uk-button>
        </uk-button-group>

      </div>
      <div class="uk-width-1-3">
        <p>Radio</p>
        <uk-button-group type="radio">
          <uk-button>Button</uk-button>
          <uk-button>Button2</uk-button>
          <uk-button>Button3</uk-button>
        </uk-button-group>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        usages: {
          basic: `<uk-button color="primary|success|danger"
               size="mini|small|lager"
               icon="search"
               width="1-1"
               :disabled="true|false"
               :active="true|false">Button text
</uk-button>`
        }
      }
    }
  }
</script>
