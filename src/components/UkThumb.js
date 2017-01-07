export default {
  name: 'UkThumb',
  props: {
    src: {type: [String, Object]},
    size: {type: String},
    caption: {type: String}
  },
  render (h) {
    const classes = {
      'uk-thumbnail': true
    }

    if (this.size) {
      classes['uk-thumbnail-' + this.size] = true
    }

    const render_readonly = () => <figure class={classes}
                                       href="javascript:void(0);">
      <img src={this.src} alt=""/>
      { this.caption && <figcaption class="uk-thumbnail-caption">{this.caption}</figcaption>}
    </figure>

    const reader_link = () => <a class={classes}
                                 href="javascript:void(0);">
      <img src={this.src} alt=""/>
      { this.caption && <div class="uk-thumbnail-caption">{this.caption}</div>}
    </a>

    return render_readonly()
  }
}
