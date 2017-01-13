<template>
  <div class="uk-placeholder uk-text-center" ref="uploadDrop">
    <slot>请将要上传的文件拖动至此区域内或</slot>
    <a class="uk-form-file" ref="uploadSelect">{{text}}<input id="upload-select" type="file"></a>.
  </div>
</template>
<script>
  import 'uikit/dist/js/components/upload'
  export default {
    props: {
      text: {
        type: String,
        default: '选择本地文件'
      },
      method: {
        type: String,
        default: 'POST'
      },
      action: {
        type: String,
        default: ''
      },
      single: {
        type: Boolean,
        default: true
      },
      param: {
        type: String,
        default: 'files[]'
      },
      sizeLimits: {
        type: Number,
        default: 0
      },
      allow: {
        type: String,
        default: '*.*'
      },
      type: {
        type: String,
        default: 'text' // or json
      }
    },
    mounted () {
      const self = this
      const settings = {
        action: this.action,
        allow: this.allow, // *.(jpg|jpeg|gif|png)
        before: (s, fs) => {
          self.$emit('before', s, fs)
        },
        beforeAll: files => {
          self.$emit('beforeAll', files)
        },
        beforeSend: xhr => {
          self.$emit('beforeSend', xhr)
        },
        progress: percent => {
          self.$emit('progress', percent)
        },
        complete: (res, xhr) => {
          self.$emit('complete', res, xhr)
        },
        allcomplete: (res, xhr) => {
          self.$emit('allComplete', res, xhr)
        },
        notallowed: (files, ss) => {
          self.$emit('notAllowed', files, ss)
        },
        loadstart: (e) => {
          self.$emit('loadStart', e)
        },
        load: (e) => {
          self.$emit('load', e)
        },
        loadend: (e) => {
          self.$emit('loadend', e)
        },
        error: (e) => {
          self.$emit('error', e)
        },
        abort: (e) => {
          self.$emit('abort', e)
        },
        readystatechange: (e) => {
          self.$emit('readystatechange', e)
        }
      }

      UIkit.uploadSelect(this.$refs.uploadSelect, settings)
      UIkit.uploadDrop(this.$refs.uploadDrop, settings)
    }
  }
</script>
