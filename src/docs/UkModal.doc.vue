<template>
  <div>
    <h1>对话框 - &lt;uk-modal&gt;</h1>
    <h2>基本用法</h2>
    <h3>示例</h3>
    <uk-button @click="open">打开对话框</uk-button>
    <uk-modal title="对话框标题"
              ref="dialog">
      <p>您好！这是一段简单的文字内容</p>
    </uk-modal>

    <h3>代码</h3>
    <code-block>{{usages.basic}}</code-block>


    <h2>Lightbox 支持</h2>
    <hr>
    <p>只要设置 <code>:lightbox="true"</code> 就只会显示一个lightbox样式的图片对话框。</p>

    <code-block>{{usages.lightbox}}</code-block>
    <uk-button @click="$refs.lightboxDlg.open()">Lightbox</uk-button>
    <uk-modal ref="lightboxDlg"
              :closable="true"
              :lightbox="true">
      <img src="../assets/placeholder_600x400.svg"
           width="600"
           height="400" alt="">
    </uk-modal>


    <h2>全屏页</h2>
    <hr>
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


    <h3>属性</h3>
    <table class="uk-table uk-table-striped uk-table-condensed">
      <thead>
      <tr>
        <th>属性</th>
        <th>类型</th>
        <th>默认值</th>
        <th>说明</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><code>keyboard</code></td>
        <td>boolean</td>
        <td>true</td>
        <td>允许使用键盘的ESC键关键对话框</td>
      </tr>
      <tr>
        <td><code>lightbox</code></td>
        <td>boolean</td>
        <td>true</td>
        <td>开启lightbox支持</td>
      </tr>
      <tr>
        <td><code>blank</code></td>
        <td>boolean</td>
        <td>true</td>
        <td>开启全屏支持</td>
      </tr>

      <tr>
        <td><code>bgclose</code></td>
        <td>boolean</td>
        <td>true</td>
        <td>允许点击背景自动关闭对话框。</td>
      </tr>
      <tr>
        <td><code>minScrollHeight</code></td>
        <td>integer</td>
        <td>150</td>
        <td>设置遮盖层开始滑动的值。</td>
      </tr>
      <tr>
        <td><code>center</code></td>
        <td>boolean</td>
        <td>false</td>
        <td>设计垂直居中</td>
      </tr>
      <tr>
        <td><code>modal</code></td>
        <td>boolean</td>
        <td>true</td>
        <td>只能通过点击关闭按钮关闭的模态对话框</td>
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
          basic: `<uk-button @click="$refs.dialog.open()">打开对话框</uk-button>
<uk-modal title="对话框标题"
      ref="dialog">
  <p>您好！这是一段简单的文字内容</p>
</uk-modal>`,
          lightbox:`<uk-button @click="$refs.lightboxDlg.open()">Lightbox</uk-button>
<uk-modal ref="lightboxDlg"
          :closable="true"
          :lightbox="true">
  <img src="../assets/placeholder_600x400.svg"
       width="600"
       height="400" alt="">
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
