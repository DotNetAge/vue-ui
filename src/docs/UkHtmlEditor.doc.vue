<template>
  <div>
    <h1>Html editor</h1>
    <uk-html-editor>
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
