<template>
  <div class="uk-tag-input">
    <ul>
      <li v-for="tag in tags">
        <span class="tag">{{tag}} <span class="uk-close"
                                        @click="removeTag(tag)"></span></span>
      </li>
      <li><input type="text"
                 @key.enter="addTag(currentVal)"
                 @focus="$emit('focus')"
                 @blur="$emit('blur')"
                 v-model="currentVal"/>
      </li>
    </ul>
  </div>
</template>
<script>
  import _ from 'lodash'
  export default {
    data () {
      return {
        currentVal: undefined,
        tags: []
      }
    },
    props: ['value'],
    methods: {
      removeTag (tag) {
        this.tags = _.reject(this.tags, t => t === tag)
        this.handleChange()
      },
      addTag(sourceTag) {
        this.tags.push(sourceTag)
      },
      handleChange(){
        this.$emit('change', (this.tags === undefined || this.tags.length === 0) ? '' : this.tags.join(','))
      }
    }
  }
</script>
