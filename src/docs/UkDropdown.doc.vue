<template>
  <div>
    <h1>列表</h1>
    <h2>普通列表 - &lt;uk-list&gt;</h2>
    <hr>
    <uk-list :items="items"
             :striped="striped"
             :space="space"
             :show-line="showLine">
    </uk-list>

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
        <td><code>showLine</code></td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>在每一项数据下方显示下边线</td>
        <td class="uk-form">
          <input type="checkbox" v-model="showLine"/>
        </td>
      </tr>
      <tr>
        <td><code>space</code></td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td></td>
        <td class="uk-form">
          <input type="checkbox" v-model="space"/>
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


    <h2>下拉列表 &lt;uk-dropdown-list&gt;</h2>
    <hr>
    <p>下拉列表是一个带有下拉数据列表的容器组件，你可以在默认插槽内放置任何可被点击的组件</p>
    <uk-dropdown-list :items="items">
      <uk-button right-icon="caret-down">下拉</uk-button>
    </uk-dropdown-list>
    <code-block>{{ usages.basic | test}}</code-block>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        striped: false,
        space: false,
        showLine: false,
        items: [
          {label: '选项1', value: 'item1'},
          {label: '选项2', value: 'item2'},
          {label: '选项3', value: 'item3'},
          {label: '选项4', value: 'item4'},
          {label: '选项5', value: 'item5'},
          {label: '选项6', value: 'item6'},
          {label: '选项7', value: 'item7'}
        ],
        usages: {
          basic: `<uk-dropdown-list :items="[
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
    },
    filters:{
        test (val){
            console.log(this)
            return val
        }
    }
  }
</script>
