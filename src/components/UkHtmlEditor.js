import 'codemirror'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/addon/mode/overlay'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/gfm/gfm'
import 'marked'
import 'codemirror/lib/codemirror.css'
import 'uikit/dist/js/components/htmleditor'
import 'uikit/dist/css/components/htmleditor.css'
import 'uikit/dist/css/components/htmleditor.gradient.css'

export default {
  name: 'UkHtmlEditor',
  props: {
    'value': {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'split'
    },
    enabledScripts: {
      type: Boolean,
      default: false
    },
    toolbar: {
      type: Array,
      default: () => ['bold', 'italic', 'strike', 'link', 'image', 'blockquote', 'listUl', 'listOl']
    },
    maxSplitSize: {
      type: Number,
      default: 1000
    },
    previewLabel: {
      type: String,
      default: '预览'
    },
    codeViewLabel: {
      type: String,
      default: 'Markdown'
    }
  },
  data () {
    return {
      editor: undefined
    }
  },
  // watch: {
  //   mode (val) {
  //     this.editor.mode = val
  //   },
  //   enabledScripts(val){
  //     this.editor.enabledscripts = val
  //   }
  // },
  mounted () {
    let htmlEditor = window.UIkit.htmleditor(this.$refs.editor, {
      markdown: true,
      mode: this.mode,
      enabledscripts: this.enabledScripts,
      toolbar: this.toolbar,
      maxsplitsize: this.maxSplitSize,
      lblPreview: this.previewLabel,
      lblCodeview: this.codeViewLabel
    })

    const self = this
    this.$ui.$(this.$refs.editor).on('input', () => {
      const _val = htmlEditor.editor.getValue()
      if (_val !== self.value) {
        this.$emit('change', _val)
      }
    })

    // editor = htmlEditor
  },
  render (h) {
    return (
      <div>
        <textarea rows="20" ref="editor">
          { this.value }
        </textarea>
      </div>
    )
  }
}
