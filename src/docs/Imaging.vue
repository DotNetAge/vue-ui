<template>
  <div>
    <h1>图形图像</h1>
    <h2>缩略图 &lt;uk-thumbnail&gt;</h2>
    <hr>
    <uk-thumbnail :src="imgs.normal"
                  :size="size"
                  :caption="caption"></uk-thumbnail>

    <h3>属性</h3>
    <hr>
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
        <td><code>size</code></td>
        <td><code>String</code></td>
        <td><code>undefined</code></td>
        <td>尺寸</td>
        <td class="uk-form">
          <select v-model="size" class="uk-width-1-1">
            <option>undefined</option>
            <option>mini</option>
            <option>small</option>
            <option>medium</option>
            <option>large</option>
          </select>
        </td>
      </tr>
      <tr>
        <td><code>caption</code></td>
        <td><code>String</code></td>
        <td><code>undefined</code></td>
        <td>图片标题</td>
        <td class="uk-form">
          <input v-model="caption" class="uk-width-1-1"/>
        </td>
      </tr>
      </tbody>
    </table>


    <h2>遮盖 &lt;uk-overlay&gt;</h2>
    <hr>
    <uk-overlay :src="imgs.normal"
                :icon="icon"
                :hover="hover"
                :back="back"
                :title="title"
                :desc="desc"
                :transition="trans"
                :pos="pos">
    </uk-overlay>

    <code-block>{{usages.overlay}}</code-block>
    <hr>
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
        <td><code>transition</code></td>
        <td><code>String</code></td>
        <td><code>undefined</code></td>
        <td>动画效果</td>
        <td class="uk-form">
          <select v-model="trans" class="uk-width-1-1">
            <option>undefined</option>
            <option>slide-top</option>
            <option>slide-bottom</option>
            <option>slide-left</option>
            <option>slide-right</option>
            <option>fade</option>
            <option>scale</option>
            <option>spin</option>
            <option>grayscale</option>
          </select>
        </td>
      </tr>
      <tr>
        <td><code>pos</code></td>
        <td><code>String</code></td>
        <td><code>undefined</code></td>
        <td>位置</td>
        <td class="uk-form">
          <select v-model="pos" class="uk-width-1-1">
            <option>undefined</option>
            <option>top</option>
            <option>bottom</option>
            <option>left</option>
            <option>right</option>
          </select>
        </td>
      </tr>

      <tr>
        <td><code>title</code></td>
        <td><code>String</code></td>
        <td><code>undefined</code></td>
        <td>图片标题</td>
        <td class="uk-form">
          <input v-model="title" class="uk-width-1-1"/>
        </td>
      </tr>
      <tr>
        <td><code>desc</code></td>
        <td><code>String</code></td>
        <td><code>undefined</code></td>
        <td>描述</td>
        <td class="uk-form">
          <input v-model="desc" class="uk-width-1-1"/>
        </td>
      </tr>

      <tr>
        <td><code>hover</code></td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>鼠标感知</td>
        <td class="uk-form">
          <input type="checkbox" v-model="hover"/>
        </td>
      </tr>
      <tr>
        <td><code>icon</code></td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>显示预览图标</td>
        <td class="uk-form">
          <input type="checkbox" v-model="icon"/>
        </td>
      </tr>
      <tr>
        <td><code>back</code></td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>背景</td>
        <td class="uk-form">
          <input type="checkbox" v-model="back"/>
        </td>
      </tr>
      </tbody>
    </table>

  </div>
</template>
<script>
  import imgHolderMin from '../assets/placeholder_120x255.svg'
  import imgHolderSmall from '../assets/placeholder_200x100.svg'
  import imgHolder from '../assets/placeholder_600x400.svg'
  export default {
    data () {

      return {
        imgs: {
          mini: imgHolderMin,
          normal: imgHolder,
          small: imgHolderSmall
        },
        pos: undefined,
        icon: false,
        hover: false,
        back: false,
        trans: undefined,
        title: '标题',
        desc: '描述',
        caption: '图片标题',
        size: undefined,
        usages: {
          overlay: `<uk-overlay :src="imgs.normal"
    :icon="true|false"
    :hover="true|false"
    :back="true|false"
    :title="图片标题"
    :desc="图片内显示的描述文字"
    :transition="slide-top|slide-bottom|slide-left|slide-right|fade|scale|spin|grayscale"
    :pos="top|bottom|left|right">
</uk-overlay>`
        }
      }


    }
  }
</script>
