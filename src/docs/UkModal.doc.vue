<template>
  <div>
    <h1>Modal</h1>
    <h2>Basic</h2>
    <h3>example</h3>
    <uk-button @click="open">Open dialog</uk-button>
    <uk-modal title="Example modal"
              ref="dialog">
      Hello world
    </uk-modal>
    <h3>code</h3>
    <code-block>{{usages.basic}}</code-block>

    <h2>Large dialog</h2>
    <p>Set the <code>:large="true"</code> to change the dialog to larger size</p>

    <h2>Lightbox support</h2>
    <p>Set the <code>:lightbox="true"</code> to enable the lightbox support</p>
    <uk-button @click="$refs.lightboxDlg.open()">Lightbox</uk-button>
    <uk-modal ref="lightboxDlg" :closable="true" :lightbox="true">
      <img src="../assets/placeholder_600x400.svg" width="600" height="400" alt="">
    </uk-modal>


    <h2>Blank</h2>
    <p></p>
    <uk-button @click="$refs.blankDlg.open()">Blank</uk-button>
    <uk-modal ref="blankDlg" :closable="true" :blank="true">
      <div class="uk-grid uk-flex-middle"
           data-uk-grid-margin="">
        <div class="uk-width-medium-1-2 uk-height-viewport uk-cover-background uk-row-first"
             style="background-image: url('../assets/placeholder_120x255.svg');"></div>
        <div class="uk-width-medium-1-2 uk-row-first">
          <h1>Headline</h1>
          <div class="uk-width-medium-1-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.</p>
          </div>
        </div>
      </div>

    </uk-modal>

    <h2>Center dialog</h2>
    <p></p>

    <h2>Header and footer</h2>
    <p></p>

    <h2>属性</h2>
    <table class="uk-table uk-table-striped uk-table-condensed">
      <thead>
      <tr>
        <th>Option</th>
        <th>Possible value</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>keyboard</code></td>
        <td>boolean</td>
        <td>true</td>
        <td>Allows controls from keyboard (ESC to close)</td>
      </tr>
      <tr>
        <td><code>bgclose</code></td>
        <td>boolean</td>
        <td>true</td>
        <td>Allow modal to close automatically when clicking on the modal overlay</td>
      </tr>
      <tr>
        <td><code>minScrollHeight</code></td>
        <td>integer</td>
        <td>150</td>
        <td>Set the height for overflow container to start scrolling</td>
      </tr>
      <tr>
        <td><code>center</code></td>
        <td>boolean</td>
        <td>false</td>
        <td>Vertically center the modal</td>
      </tr>
      <tr>
        <td><code>modal</code></td>
        <td>boolean</td>
        <td>true</td>
        <td>Close currently opened modals on opening modal</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        usages: {
          basic: `<uk-button @click="open">Open dialog</uk-button>
    <uk-modal title="Example modal"
              ref="dialog">
      Hello world
    </uk-modal>`
        }
      }
    },
    methods: {
      open () {
        this.$refs.dialog.open()
      }
    }
  }
</script>
