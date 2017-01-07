<template>
  <div class="uk-form">
    <input type="text"
           :name="name"
           v-model="selectedValue" data-uk-dropdown/>
    <div class="uk-dropdown uk-dropdown-small">
      <ul class="uk-nav uk-nav-dropdown">
        <li v-for="item in items" @click="selectItem(item)">{{ item[textField] }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import BaseListMinxin from './BaseListMixin'
  export default {
    mixins: [BaseListMinxin],
    props: {
      name: {
        type: String
      }
    }
  }
</script>
