<template>
  <figure class="uk-overlay"
          :class="{
          'uk-overlay-hover': hover
        }">
    <img :src="src"
         :width="width"
         :height="height" alt="">

    <figcaption class="uk-overlay-panel"
                :class="classes"
                @click="$emit('click')">
      <slot>
        <h3 v-if="title">{{title}}</h3>
        <p v-if="desc">{{desc}}</p>
      </slot>
    </figcaption>
  </figure>
</template>
<script>
  export default {
    props: {
      src: {type: [String, Object]},
      title: {type: String},
      desc: {type: String},
      transition: {type: String},
      icon: {type: Boolean, default: false},
      hover: {type: Boolean, default: false},
      back: {type: Boolean, default: false},
      image: {type: Boolean, default: false},
      pos: {type: String},
      width: {type: Number, default: 600},
      height: {type: Number, default: 400},
      flex: {type: String}
    },
    computed: {
      classes () {
        const cls = {
          'uk-overlay-background': this.back,
          'uk-overlay-icon': this.icon
        }

        if (this.pos)
          cls['uk-overlay-' + this.pos] = true

        if (this.transition) {
          cls['uk-overlay-' + this.transition] = true
        }

//        if (this.flex) {
//          cls['uk-flex'] = true
//          cls['ul-flex-' + this.flex] = true
//        }

        return cls
      }
    }
  }
</script>
