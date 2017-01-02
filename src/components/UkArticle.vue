<template>
  <div class="uk-article">
    <h1 class="uk-article-title">{{title}}</h1>
    <p class="uk-article-meta">
      <slot name="meta"></slot>
    </p>
    <slot></slot>
    <p class="uk-article-lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.</p>
    <hr class="uk-article-divider">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.</p>
    <a href="#">Read more</a>
  </div>
</template>
<script>
  export default {
    props: ['title']
  }
</script>
