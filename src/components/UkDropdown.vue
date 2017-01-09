<template>
  <div data-uk-dropdown="{mode:'click'}"
       class="uk-button-dropdown">
    <slot></slot>
    <div class="uk-dropdown">
      <ul class="uk-nav uk-nav-dropdown">
        <li v-for="item in listItems"
            :class="{'uk-nav-header':item.isHeader}">
          <a @click.prevent="selectItem(item)">{{ item[textField] }}</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
  import BaseListMixin from './BaseListMixin'
  export default {
    name: 'UkDropdown',
    mixins: [BaseListMixin]
  }
</script>
