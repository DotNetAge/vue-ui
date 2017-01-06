<template>
  <div>
    <h1>下拉列表 &lt;uk-dropdown-list&gt;</h1>
    <hr>
    <p>下拉列表是一个带有下拉数据列表的容器组件，你可以在默认插槽内放置任何可被点击的组件</p>
    <uk-dropdown-list :items="[
      {label:'选项1',value:'item1'},
      {label:'选项2',value:'item2'},
      {label:'选项3',value:'item3'},
      {label:'选项4',value:'item4'},
      {label:'选项5',value:'item5'},
      {label:'选项6',value:'item6'},
      {label:'选项7',value:'item7'}
      ]">
      <uk-button right-icon="caret-down">下拉</uk-button>
    </uk-dropdown-list>
    <code-block>{{ usages.basic }}</code-block>
  </div>
</template>
<script>
  export default{
      data () {
          return {
              usages:{
                  basic:`<uk-dropdown-list :items="[
  {label:'选项1',value:'item1'},
  {label:'选项2',value:'item2'},
  {label:'选项3',value:'item3'},
  {label:'选项4',value:'item4'},
  {label:'选项5',value:'item5'},
  {label:'选项6',value:'item6'},
  {label:'选项7',value:'item7'}
  ]">
  <uk-button right-icon="caret-down">下拉</uk-button>
</uk-dropdown-list>`
              }
          }
      }
  }
</script>
