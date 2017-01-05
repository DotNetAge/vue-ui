<template>
  <div>
    <h1>面板</h1>
    <h2>Basic</h2>
    <h3>example</h3>
    <uk-panel title="panel header">
      Panel body
    </uk-panel>
    <h3>code</h3>
    <code-block>{{usages.basic}}</code-block>

    <h2>Customize slots</h2>
    <h3>example</h3>
    <uk-panel>
      <header slot="header">
        <h3>Custom header</h3>
      </header>
      Panel body
    </uk-panel>

    <h3>code</h3>
    <code-block>{{usages.customize}}</code-block>
  </div>
</template>
<script>
  export default{
      data () {
          return {
              usages:{
                  basic:`<uk-panel title="Panel title">
  Panel body
</uk-panel>`,
                customize:`<uk-panel>
    <header slot="header">
      <h3>Custom header</h3>
    </header>
    Panel body
</uk-panel>`
              }
          }
      }
  }
</script>
