<template>
  <div class="uk-modal"
       ref="modal">
    <div :class="{
    'uk-modal-dialog':true,
    'uk-modal-dialog-lightbox':lightbox,
    'uk-modal-dialog-blank':blank,
    'uk-modal-dialog-large':large
    }">
      <slot name="header" v-if="!lightbox">
        <div slot="header" class="uk-modal-header">
          <button class="uk-modal-close uk-close uk-float-right"></button>
          <h3 class="uk-display-inline" v-if="title">{{ title }}</h3>
        </div>
      </slot>
      <a href="" v-if="lightbox" class="uk-modal-close uk-close uk-close-alt"></a>
      <slot></slot>
      <slot name="footer" v-if="!lightbox"></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'UkModal',
    data () {
      return {
        dialog: undefined
      }
    },
    props: {
      title: {
        type: String
      },
      blank: {
        type: Boolean,
        default: false
      },
      large: {
        type: Boolean,
        default: false
      },
      closable: {
        type: Boolean,
        default: false
      },
      lightbox: {
        type: Boolean,
        default: false
      },
      keyboard: {
        type: Boolean,
        default: true
      },
      bgclose: {
        type: Boolean,
        default: true
      },
      center: {
        type: Boolean,
        default: false
      },
      modal: {
        type: Boolean,
        default: true
      },
      minScrollHeight: {
        type: Number,
        default: 150
      }
    },
    mounted () {
      this.dialog = this.$ui.modal(this.$refs.modal, {
        center: this.center,
        modal: this.modal,
        minScrollHeight: this.minScrollHeight,
        keyboard: this.keyboard,
        bgclose: this.bgclose
      })

      const self = this
      this.dialog.on('show.uk.modal', () => self.$emit('open'))
      this.dialog.on('hide.uk.modal', () => self.$emit('close'))
    },
    methods: {
      open () {
        this.dialog.show()
      },
      close () {
        this.dialog.hide()
      }
    }
  }
</script>
