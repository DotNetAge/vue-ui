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
    }
  },
  mounted () {
    let htmlEditor = window.UIkit.htmleditor(this.$refs.editor, {
      markdown: true,
      mode: 'tab'
    })
    const self = this
    this.$ui.$(this.$refs.editor).on('input', () => {
      const _val = htmlEditor.editor.getValue()
      if (_val !== self.value) {
        this.$emit('change', _val)
      }
    })
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
