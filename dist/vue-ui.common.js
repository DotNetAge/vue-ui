/*!
 * VueUi v1.0.0 (https://github.com/DotNetAge/vue-ui)
 * (c) 2017 Ray Liang
 * Released under the MIT License.
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(1);

	__webpack_require__(2);

	__webpack_require__(3);

	var _UkIcon = __webpack_require__(10);

	var _UkIcon2 = _interopRequireDefault(_UkIcon);

	var _UkButton = __webpack_require__(11);

	var _UkButton2 = _interopRequireDefault(_UkButton);

	var _UkButtonGroup = __webpack_require__(15);

	var _UkButtonGroup2 = _interopRequireDefault(_UkButtonGroup);

	var _UkPanel = __webpack_require__(16);

	var _UkPanel2 = _interopRequireDefault(_UkPanel);

	var _UkNav = __webpack_require__(19);

	var _UkNav2 = _interopRequireDefault(_UkNav);

	var _UkDatepicker = __webpack_require__(20);

	var _UkDatepicker2 = _interopRequireDefault(_UkDatepicker);

	var _UkTimepicker = __webpack_require__(26);

	var _UkTimepicker2 = _interopRequireDefault(_UkTimepicker);

	var _UkTabs = __webpack_require__(31);

	var _UkHtmlEditor = __webpack_require__(37);

	var _UkHtmlEditor2 = _interopRequireDefault(_UkHtmlEditor);

	var _UkAlert = __webpack_require__(52);

	var _UkAlert2 = _interopRequireDefault(_UkAlert);

	var _UkModal = __webpack_require__(55);

	var _UkModal2 = _interopRequireDefault(_UkModal);

	var _UkPager = __webpack_require__(58);

	var _UkPager2 = _interopRequireDefault(_UkPager);

	var _UkBadge = __webpack_require__(60);

	var _UkBadge2 = _interopRequireDefault(_UkBadge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (Vue, options) {
	  var ui = window.UIkit;

	  Vue.prototype.$ui = {
	    $: ui.$,
	    modal: ui.modal,
	    alert: ui.modal.alert,
	    confirm: ui.modal.confirm,
	    prompt: ui.modal.prompt,
	    block: ui.modal.blockUI
	  };

	  Vue.prototype.$uikit = window.UIKit;

	  Vue.component('uk-icon', _UkIcon2.default);
	  Vue.component('uk-badge', _UkBadge2.default);
	  Vue.component('uk-button', _UkButton2.default);
	  Vue.component('uk-button-group', _UkButtonGroup2.default);
	  Vue.component('uk-panel', _UkPanel2.default);
	  Vue.component('uk-tab', _UkTabs.UkTab);
	  Vue.component('uk-tabs', _UkTabs.UkTabs);
	  Vue.component('uk-nav', _UkNav2.default);
	  Vue.component('uk-datepicker', _UkDatepicker2.default);
	  Vue.component('uk-timepicker', _UkTimepicker2.default);
	  Vue.component('uk-html-editor', _UkHtmlEditor2.default);
	  Vue.component('uk-alert', _UkAlert2.default);
	  Vue.component('uk-modal', _UkModal2.default);
	  Vue.component('uk-pager', _UkPager2.default);
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
	(function(core) {

	    if (true) { // AMD

	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function(){

	            var uikit = window.UIkit || core(window, window.jQuery, window.document);

	            uikit.load = function(res, req, onload, config) {

	                var resources = res.split(','), load = [], i, base = (config.config && config.config.uikit && config.config.uikit.base ? config.config.uikit.base : '').replace(/\/+$/g, '');

	                if (!base) {
	                    throw new Error('Please define base path to UIkit in the requirejs config.');
	                }

	                for (i = 0; i < resources.length; i += 1) {
	                    var resource = resources[i].replace(/\./g, '/');
	                    load.push(base+'/components/'+resource);
	                }

	                req(load, function() {
	                    onload(uikit);
	                });
	            };

	            return uikit;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }

	    if (!window.jQuery) {
	        throw new Error('UIkit requires jQuery');
	    }

	    if (window && window.jQuery) {
	        core(window, window.jQuery, window.document);
	    }


	})(function(global, $, doc) {

	    "use strict";

	    var UI = {}, _UI = global.UIkit ? Object.create(global.UIkit) : undefined;

	    UI.version = '2.27.2';

	    UI.noConflict = function() {
	        // restore UIkit version
	        if (_UI) {
	            global.UIkit = _UI;
	            $.UIkit      = _UI;
	            $.fn.uk      = _UI.fn;
	        }

	        return UI;
	    };

	    UI.prefix = function(str) {
	        return str;
	    };

	    // cache jQuery
	    UI.$ = $;

	    UI.$doc  = UI.$(document);
	    UI.$win  = UI.$(window);
	    UI.$html = UI.$('html');

	    UI.support = {};
	    UI.support.transition = (function() {

	        var transitionEnd = (function() {

	            var element = doc.body || doc.documentElement,
	                transEndEventNames = {
	                    WebkitTransition : 'webkitTransitionEnd',
	                    MozTransition    : 'transitionend',
	                    OTransition      : 'oTransitionEnd otransitionend',
	                    transition       : 'transitionend'
	                }, name;

	            for (name in transEndEventNames) {
	                if (element.style[name] !== undefined) return transEndEventNames[name];
	            }
	        }());

	        return transitionEnd && { end: transitionEnd };
	    })();

	    UI.support.animation = (function() {

	        var animationEnd = (function() {

	            var element = doc.body || doc.documentElement,
	                animEndEventNames = {
	                    WebkitAnimation : 'webkitAnimationEnd',
	                    MozAnimation    : 'animationend',
	                    OAnimation      : 'oAnimationEnd oanimationend',
	                    animation       : 'animationend'
	                }, name;

	            for (name in animEndEventNames) {
	                if (element.style[name] !== undefined) return animEndEventNames[name];
	            }
	        }());

	        return animationEnd && { end: animationEnd };
	    })();

	    // requestAnimationFrame polyfill
	    //https://github.com/darius/requestAnimationFrame
	    (function() {

	        Date.now = Date.now || function() { return new Date().getTime(); };

	        var vendors = ['webkit', 'moz'];
	        for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
	            var vp = vendors[i];
	            window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];
	            window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame']
	                                       || window[vp+'CancelRequestAnimationFrame']);
	        }
	        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
	            || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
	            var lastTime = 0;
	            window.requestAnimationFrame = function(callback) {
	                var now = Date.now();
	                var nextTime = Math.max(lastTime + 16, now);
	                return setTimeout(function() { callback(lastTime = nextTime); },
	                                  nextTime - now);
	            };
	            window.cancelAnimationFrame = clearTimeout;
	        }
	    }());

	    UI.support.touch = (
	        ('ontouchstart' in document) ||
	        (global.DocumentTouch && document instanceof global.DocumentTouch)  ||
	        (global.navigator.msPointerEnabled && global.navigator.msMaxTouchPoints > 0) || //IE 10
	        (global.navigator.pointerEnabled && global.navigator.maxTouchPoints > 0) || //IE >=11
	        false
	    );

	    UI.support.mutationobserver = (global.MutationObserver || global.WebKitMutationObserver || null);

	    UI.Utils = {};

	    UI.Utils.isFullscreen = function() {
	        return document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.fullscreenElement || false;
	    };

	    UI.Utils.str2json = function(str, notevil) {
	        try {
	            if (notevil) {
	                return JSON.parse(str
	                    // wrap keys without quote with valid double quote
	                    .replace(/([\$\w]+)\s*:/g, function(_, $1){return '"'+$1+'":';})
	                    // replacing single quote wrapped ones to double quote
	                    .replace(/'([^']+)'/g, function(_, $1){return '"'+$1+'"';})
	                );
	            } else {
	                return (new Function('', 'var json = ' + str + '; return JSON.parse(JSON.stringify(json));'))();
	            }
	        } catch(e) { return false; }
	    };

	    UI.Utils.debounce = function(func, wait, immediate) {
	        var timeout;
	        return function() {
	            var context = this, args = arguments;
	            var later = function() {
	                timeout = null;
	                if (!immediate) func.apply(context, args);
	            };
	            var callNow = immediate && !timeout;
	            clearTimeout(timeout);
	            timeout = setTimeout(later, wait);
	            if (callNow) func.apply(context, args);
	        };
	    };

	    UI.Utils.throttle = function (func, limit) {
	        var wait = false;
	        return function () {
	            if (!wait) {
	                func.call();
	                wait = true;
	                setTimeout(function () {
	                    wait = false;
	                }, limit);
	            }
	        }
	    };

	    UI.Utils.removeCssRules = function(selectorRegEx) {
	        var idx, idxs, stylesheet, _i, _j, _k, _len, _len1, _len2, _ref;

	        if(!selectorRegEx) return;

	        setTimeout(function(){
	            try {
	              _ref = document.styleSheets;
	              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	                stylesheet = _ref[_i];
	                idxs = [];
	                stylesheet.cssRules = stylesheet.cssRules;
	                for (idx = _j = 0, _len1 = stylesheet.cssRules.length; _j < _len1; idx = ++_j) {
	                  if (stylesheet.cssRules[idx].type === CSSRule.STYLE_RULE && selectorRegEx.test(stylesheet.cssRules[idx].selectorText)) {
	                    idxs.unshift(idx);
	                  }
	                }
	                for (_k = 0, _len2 = idxs.length; _k < _len2; _k++) {
	                  stylesheet.deleteRule(idxs[_k]);
	                }
	              }
	            } catch (_error) {}
	        }, 0);
	    };

	    UI.Utils.isInView = function(element, options) {

	        var $element = $(element);

	        if (!$element.is(':visible')) {
	            return false;
	        }

	        var window_left = UI.$win.scrollLeft(), window_top = UI.$win.scrollTop(), offset = $element.offset(), left = offset.left, top = offset.top;

	        options = $.extend({topoffset:0, leftoffset:0}, options);

	        if (top + $element.height() >= window_top && top - options.topoffset <= window_top + UI.$win.height() &&
	            left + $element.width() >= window_left && left - options.leftoffset <= window_left + UI.$win.width()) {
	          return true;
	        } else {
	          return false;
	        }
	    };

	    UI.Utils.checkDisplay = function(context, initanimation) {

	        var elements = UI.$('[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]', context || document), animated;

	        if (context && !elements.length) {
	            elements = $(context);
	        }

	        elements.trigger('display.uk.check');

	        // fix firefox / IE animations
	        if (initanimation) {

	            if (typeof(initanimation)!='string') {
	                initanimation = '[class*="uk-animation-"]';
	            }

	            elements.find(initanimation).each(function(){

	                var ele  = UI.$(this),
	                    cls  = ele.attr('class'),
	                    anim = cls.match(/uk-animation-(.+)/);

	                ele.removeClass(anim[0]).width();

	                ele.addClass(anim[0]);
	            });
	        }

	        return elements;
	    };

	    UI.Utils.options = function(string) {

	        if ($.type(string)!='string') return string;

	        if (string.indexOf(':') != -1 && string.trim().substr(-1) != '}') {
	            string = '{'+string+'}';
	        }

	        var start = (string ? string.indexOf("{") : -1), options = {};

	        if (start != -1) {
	            try {
	                options = UI.Utils.str2json(string.substr(start));
	            } catch (e) {}
	        }

	        return options;
	    };

	    UI.Utils.animate = function(element, cls) {

	        var d = $.Deferred();

	        element = UI.$(element);

	        element.css('display', 'none').addClass(cls).one(UI.support.animation.end, function() {
	            element.removeClass(cls);
	            d.resolve();
	        });

	        element.css('display', '');

	        return d.promise();
	    };

	    UI.Utils.uid = function(prefix) {
	        return (prefix || 'id') + (new Date().getTime())+"RAND"+(Math.ceil(Math.random() * 100000));
	    };

	    UI.Utils.template = function(str, data) {

	        var tokens = str.replace(/\n/g, '\\n').replace(/\{\{\{\s*(.+?)\s*\}\}\}/g, "{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g),
	            i=0, toc, cmd, prop, val, fn, output = [], openblocks = 0;

	        while(i < tokens.length) {

	            toc = tokens[i];

	            if(toc.match(/\{\{\s*(.+?)\s*\}\}/)) {
	                i = i + 1;
	                toc  = tokens[i];
	                cmd  = toc[0];
	                prop = toc.substring(toc.match(/^(\^|\#|\!|\~|\:)/) ? 1:0);

	                switch(cmd) {
	                    case '~':
	                        output.push('for(var $i=0;$i<'+prop+'.length;$i++) { var $item = '+prop+'[$i];');
	                        openblocks++;
	                        break;
	                    case ':':
	                        output.push('for(var $key in '+prop+') { var $val = '+prop+'[$key];');
	                        openblocks++;
	                        break;
	                    case '#':
	                        output.push('if('+prop+') {');
	                        openblocks++;
	                        break;
	                    case '^':
	                        output.push('if(!'+prop+') {');
	                        openblocks++;
	                        break;
	                    case '/':
	                        output.push('}');
	                        openblocks--;
	                        break;
	                    case '!':
	                        output.push('__ret.push('+prop+');');
	                        break;
	                    default:
	                        output.push('__ret.push(escape('+prop+'));');
	                        break;
	                }
	            } else {
	                output.push("__ret.push('"+toc.replace(/\'/g, "\\'")+"');");
	            }
	            i = i + 1;
	        }

	        fn  = new Function('$data', [
	            'var __ret = [];',
	            'try {',
	            'with($data){', (!openblocks ? output.join('') : '__ret = ["Not all blocks are closed correctly."]'), '};',
	            '}catch(e){__ret = [e.message];}',
	            'return __ret.join("").replace(/\\n\\n/g, "\\n");',
	            "function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"
	        ].join("\n"));

	        return data ? fn(data) : fn;
	    };

	    UI.Utils.focus = function(element, extra) {

	        element = $(element);

	        if (!element.length) {
	            return element;
	        }

	        var autofocus = element.find('[autofocus]:first'), tabidx;

	        if (autofocus.length) {
	            return autofocus.focus();
	        }

	        autofocus = element.find(':input'+(extra && (','+extra) || '')).first();

	        if (autofocus.length) {
	            return autofocus.focus();
	        }

	        if (!element.attr('tabindex')) {
	            tabidx = 1000;
	            element.attr('tabindex', tabidx);
	        }

	        element[0].focus();

	        if (tabidx) {
	            element.attr('tabindex', '');
	        }

	        return element;
	    }

	    UI.Utils.events       = {};
	    UI.Utils.events.click = UI.support.touch ? 'tap' : 'click';

	    global.UIkit = UI;

	    // deprecated

	    UI.fn = function(command, options) {

	        var args = arguments, cmd = command.match(/^([a-z\-]+)(?:\.([a-z]+))?/i), component = cmd[1], method = cmd[2];

	        if (!UI[component]) {
	            $.error('UIkit component [' + component + '] does not exist.');
	            return this;
	        }

	        return this.each(function() {
	            var $this = $(this), data = $this.data(component);
	            if (!data) $this.data(component, (data = UI[component](this, method ? undefined : options)));
	            if (method) data[method].apply(data, Array.prototype.slice.call(args, 1));
	        });
	    };

	    $.UIkit          = UI;
	    $.fn.uk          = UI.fn;

	    UI.langdirection = UI.$html.attr("dir") == "rtl" ? "right" : "left";

	    UI.components    = {};

	    UI.component = function(name, def) {

	        var fn = function(element, options) {

	            var $this = this;

	            this.UIkit   = UI;
	            this.element = element ? UI.$(element) : null;
	            this.options = $.extend(true, {}, this.defaults, options);
	            this.plugins = {};

	            if (this.element) {
	                this.element.data(name, this);
	            }

	            this.init();

	            (this.options.plugins.length ? this.options.plugins : Object.keys(fn.plugins)).forEach(function(plugin) {

	                if (fn.plugins[plugin].init) {
	                    fn.plugins[plugin].init($this);
	                    $this.plugins[plugin] = true;
	                }

	            });

	            this.trigger('init.uk.component', [name, this]);

	            return this;
	        };

	        fn.plugins = {};

	        $.extend(true, fn.prototype, {

	            defaults : {plugins: []},

	            boot: function(){},
	            init: function(){},

	            on: function(a1,a2,a3){
	                return UI.$(this.element || this).on(a1,a2,a3);
	            },

	            one: function(a1,a2,a3){
	                return UI.$(this.element || this).one(a1,a2,a3);
	            },

	            off: function(evt){
	                return UI.$(this.element || this).off(evt);
	            },

	            trigger: function(evt, params) {
	                return UI.$(this.element || this).trigger(evt, params);
	            },

	            find: function(selector) {
	                return UI.$(this.element ? this.element: []).find(selector);
	            },

	            proxy: function(obj, methods) {

	                var $this = this;

	                methods.split(' ').forEach(function(method) {
	                    if (!$this[method]) $this[method] = function() { return obj[method].apply(obj, arguments); };
	                });
	            },

	            mixin: function(obj, methods) {

	                var $this = this;

	                methods.split(' ').forEach(function(method) {
	                    if (!$this[method]) $this[method] = obj[method].bind($this);
	                });
	            },

	            option: function() {

	                if (arguments.length == 1) {
	                    return this.options[arguments[0]] || undefined;
	                } else if (arguments.length == 2) {
	                    this.options[arguments[0]] = arguments[1];
	                }
	            }

	        }, def);

	        this.components[name] = fn;

	        this[name] = function() {

	            var element, options;

	            if (arguments.length) {

	                switch(arguments.length) {
	                    case 1:

	                        if (typeof arguments[0] === 'string' || arguments[0].nodeType || arguments[0] instanceof jQuery) {
	                            element = $(arguments[0]);
	                        } else {
	                            options = arguments[0];
	                        }

	                        break;
	                    case 2:

	                        element = $(arguments[0]);
	                        options = arguments[1];
	                        break;
	                }
	            }

	            if (element && element.data(name)) {
	                return element.data(name);
	            }

	            return (new UI.components[name](element, options));
	        };

	        if (UI.domready) {
	            UI.component.boot(name);
	        }

	        return fn;
	    };

	    UI.plugin = function(component, name, def) {
	        this.components[component].plugins[name] = def;
	    };

	    UI.component.boot = function(name) {

	        if (UI.components[name].prototype && UI.components[name].prototype.boot && !UI.components[name].booted) {
	            UI.components[name].prototype.boot.apply(UI, []);
	            UI.components[name].booted = true;
	        }
	    };

	    UI.component.bootComponents = function() {

	        for (var component in UI.components) {
	            UI.component.boot(component);
	        }
	    };


	    // DOM mutation save ready helper function

	    UI.domObservers = [];
	    UI.domready     = false;

	    UI.ready = function(fn) {

	        UI.domObservers.push(fn);

	        if (UI.domready) {
	            fn(document);
	        }
	    };

	    UI.on = function(a1,a2,a3){

	        if (a1 && a1.indexOf('ready.uk.dom') > -1 && UI.domready) {
	            a2.apply(UI.$doc);
	        }

	        return UI.$doc.on(a1,a2,a3);
	    };

	    UI.one = function(a1,a2,a3){

	        if (a1 && a1.indexOf('ready.uk.dom') > -1 && UI.domready) {
	            a2.apply(UI.$doc);
	            return UI.$doc;
	        }

	        return UI.$doc.one(a1,a2,a3);
	    };

	    UI.trigger = function(evt, params) {
	        return UI.$doc.trigger(evt, params);
	    };

	    UI.domObserve = function(selector, fn) {

	        if(!UI.support.mutationobserver) return;

	        fn = fn || function() {};

	        UI.$(selector).each(function() {

	            var element  = this,
	                $element = UI.$(element);

	            if ($element.data('observer')) {
	                return;
	            }

	            try {

	                var observer = new UI.support.mutationobserver(UI.Utils.debounce(function(mutations) {
	                    fn.apply(element, [$element]);
	                    $element.trigger('changed.uk.dom');
	                }, 50), {childList: true, subtree: true});

	                // pass in the target node, as well as the observer options
	                observer.observe(element, { childList: true, subtree: true });

	                $element.data('observer', observer);

	            } catch(e) {}
	        });
	    };

	    UI.init = function(root) {

	        root = root || document;

	        UI.domObservers.forEach(function(fn){
	            fn(root);
	        });
	    };

	    UI.on('domready.uk.dom', function(){

	        UI.init();

	        if (UI.domready) UI.Utils.checkDisplay();
	    });

	    document.addEventListener('DOMContentLoaded', function(){

	        var domReady = function() {

	            UI.$body = UI.$('body');

	            UI.trigger('beforeready.uk.dom');

	            UI.component.bootComponents();

	            // custom scroll observer
	            var rafToken = requestAnimationFrame((function(){

	                var memory = {dir: {x:0, y:0}, x: window.pageXOffset, y:window.pageYOffset};

	                var fn = function(){
	                    // reading this (window.page[X|Y]Offset) causes a full page recalc of the layout in Chrome,
	                    // so we only want to do this once
	                    var wpxo = window.pageXOffset;
	                    var wpyo = window.pageYOffset;

	                    // Did the scroll position change since the last time we were here?
	                    if (memory.x != wpxo || memory.y != wpyo) {

	                        // Set the direction of the scroll and store the new position
	                        if (wpxo != memory.x) {memory.dir.x = wpxo > memory.x ? 1:-1; } else { memory.dir.x = 0; }
	                        if (wpyo != memory.y) {memory.dir.y = wpyo > memory.y ? 1:-1; } else { memory.dir.y = 0; }

	                        memory.x = wpxo;
	                        memory.y = wpyo;

	                        // Trigger the scroll event, this could probably be sent using memory.clone() but this is
	                        // more explicit and easier to see exactly what is being sent in the event.
	                        UI.$doc.trigger('scrolling.uk.document', [{
	                            dir: {x: memory.dir.x, y: memory.dir.y}, x: wpxo, y: wpyo
	                        }]);
	                    }

	                    cancelAnimationFrame(rafToken);
	                    rafToken = requestAnimationFrame(fn);
	                };

	                if (UI.support.touch) {
	                    UI.$html.on('touchmove touchend MSPointerMove MSPointerUp pointermove pointerup', fn);
	                }

	                if (memory.x || memory.y) fn();

	                return fn;

	            })());

	            // run component init functions on dom
	            UI.trigger('domready.uk.dom');

	            if (UI.support.touch) {

	                // remove css hover rules for touch devices
	                // UI.Utils.removeCssRules(/\.uk-(?!navbar).*:hover/);

	                // viewport unit fix for uk-height-viewport - should be fixed in iOS 8
	                if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {

	                    UI.$win.on('load orientationchange resize', UI.Utils.debounce((function(){

	                        var fn = function() {
	                            $('.uk-height-viewport').css('height', window.innerHeight);
	                            return fn;
	                        };

	                        return fn();

	                    })(), 100));
	                }
	            }

	            UI.trigger('afterready.uk.dom');

	            // mark that domready is left behind
	            UI.domready = true;

	            // auto init js components
	            if (UI.support.mutationobserver) {

	                var initFn = UI.Utils.debounce(function(){
	                    requestAnimationFrame(function(){ UI.init(document.body);});
	                }, 10);

	                (new UI.support.mutationobserver(function(mutations) {

	                    var init = false;

	                    mutations.every(function(mutation){

	                        if (mutation.type != 'childList') return true;

	                        for (var i = 0, node; i < mutation.addedNodes.length; ++i) {

	                            node = mutation.addedNodes[i];

	                            if (node.outerHTML && node.outerHTML.indexOf('data-uk-') !== -1) {
	                                return (init = true) && false;
	                            }
	                        }
	                        return true;
	                    });

	                    if (init) initFn();

	                })).observe(document.body, {childList: true, subtree: true});
	            }
	        };

	        if (document.readyState == 'complete' || document.readyState == 'interactive') {
	            setTimeout(domReady);
	        }

	        return domReady;

	    }());

	    // add touch identifier class
	    UI.$html.addClass(UI.support.touch ? 'uk-touch' : 'uk-notouch');

	    // add uk-hover class on tap to support overlays on touch devices
	    if (UI.support.touch) {

	        var hoverset = false,
	            exclude,
	            hovercls = 'uk-hover',
	            selector = '.uk-overlay, .uk-overlay-hover, .uk-overlay-toggle, .uk-animation-hover, .uk-has-hover';

	        UI.$html.on('mouseenter touchstart MSPointerDown pointerdown', selector, function() {

	            if (hoverset) $('.'+hovercls).removeClass(hovercls);

	            hoverset = $(this).addClass(hovercls);

	        }).on('mouseleave touchend MSPointerUp pointerup', function(e) {

	            exclude = $(e.target).parents(selector);

	            if (hoverset) {
	                hoverset.not(exclude).removeClass(hovercls);
	            }
	        });
	    }

	    return UI;
	});

	//  Based on Zeptos touch.js
	//  https://raw.github.com/madrobby/zepto/master/src/touch.js
	//  Zepto.js may be freely distributed under the MIT license.

	;(function($){

	  if ($.fn.swipeLeft) {
	    return;
	  }


	  var touch = {}, touchTimeout, tapTimeout, swipeTimeout, longTapTimeout, longTapDelay = 750, gesture;

	  function swipeDirection(x1, x2, y1, y2) {
	    return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down');
	  }

	  function longTap() {
	    longTapTimeout = null;
	    if (touch.last) {
	      if ( touch.el !== undefined ) touch.el.trigger('longTap');
	      touch = {};
	    }
	  }

	  function cancelLongTap() {
	    if (longTapTimeout) clearTimeout(longTapTimeout);
	    longTapTimeout = null;
	  }

	  function cancelAll() {
	    if (touchTimeout)   clearTimeout(touchTimeout);
	    if (tapTimeout)     clearTimeout(tapTimeout);
	    if (swipeTimeout)   clearTimeout(swipeTimeout);
	    if (longTapTimeout) clearTimeout(longTapTimeout);
	    touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null;
	    touch = {};
	  }

	  function isPrimaryTouch(event){
	    return event.pointerType == event.MSPOINTER_TYPE_TOUCH && event.isPrimary;
	  }

	  $(function(){
	    var now, delta, deltaX = 0, deltaY = 0, firstTouch;

	    if ('MSGesture' in window) {
	      gesture = new MSGesture();
	      gesture.target = document.body;
	    }

	    $(document)
	      .on('MSGestureEnd gestureend', function(e){

	        var swipeDirectionFromVelocity = e.originalEvent.velocityX > 1 ? 'Right' : e.originalEvent.velocityX < -1 ? 'Left' : e.originalEvent.velocityY > 1 ? 'Down' : e.originalEvent.velocityY < -1 ? 'Up' : null;

	        if (swipeDirectionFromVelocity && touch.el !== undefined) {
	          touch.el.trigger('swipe');
	          touch.el.trigger('swipe'+ swipeDirectionFromVelocity);
	        }
	      })
	      // MSPointerDown: for IE10
	      // pointerdown: for IE11
	      .on('touchstart MSPointerDown pointerdown', function(e){

	        if(e.type == 'MSPointerDown' && !isPrimaryTouch(e.originalEvent)) return;

	        firstTouch = (e.type == 'MSPointerDown' || e.type == 'pointerdown') ? e : e.originalEvent.touches[0];

	        now      = Date.now();
	        delta    = now - (touch.last || now);
	        touch.el = $('tagName' in firstTouch.target ? firstTouch.target : firstTouch.target.parentNode);

	        if(touchTimeout) clearTimeout(touchTimeout);

	        touch.x1 = firstTouch.pageX;
	        touch.y1 = firstTouch.pageY;

	        if (delta > 0 && delta <= 250) touch.isDoubleTap = true;

	        touch.last = now;
	        longTapTimeout = setTimeout(longTap, longTapDelay);

	        // adds the current touch contact for IE gesture recognition
	        if (e.originalEvent && e.originalEvent.pointerId && gesture && ( e.type == 'MSPointerDown' || e.type == 'pointerdown' || e.type == 'touchstart' ) ) {
	          gesture.addPointer(e.originalEvent.pointerId);
	        }

	      })
	      // MSPointerMove: for IE10
	      // pointermove: for IE11
	      .on('touchmove MSPointerMove pointermove', function(e){

	        if (e.type == 'MSPointerMove' && !isPrimaryTouch(e.originalEvent)) return;

	        firstTouch = (e.type == 'MSPointerMove' || e.type == 'pointermove') ? e : e.originalEvent.touches[0];

	        cancelLongTap();
	        touch.x2 = firstTouch.pageX;
	        touch.y2 = firstTouch.pageY;

	        deltaX += Math.abs(touch.x1 - touch.x2);
	        deltaY += Math.abs(touch.y1 - touch.y2);
	      })
	      // MSPointerUp: for IE10
	      // pointerup: for IE11
	      .on('touchend MSPointerUp pointerup', function(e){

	        if (e.type == 'MSPointerUp' && !isPrimaryTouch(e.originalEvent)) return;

	        cancelLongTap();

	        // swipe
	        if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > 30) || (touch.y2 && Math.abs(touch.y1 - touch.y2) > 30)){

	          swipeTimeout = setTimeout(function() {
	            if ( touch.el !== undefined ) {
	              touch.el.trigger('swipe');
	              touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)));
	            }
	            touch = {};
	          }, 0);

	        // normal tap
	        } else if ('last' in touch) {

	          // don't fire tap when delta position changed by more than 30 pixels,
	          // for instance when moving to a point and back to origin
	          if (isNaN(deltaX) || (deltaX < 30 && deltaY < 30)) {
	            // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
	            // ('tap' fires before 'scroll')
	            tapTimeout = setTimeout(function() {

	              // trigger universal 'tap' with the option to cancelTouch()
	              // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
	              var event = $.Event('tap');
	              event.cancelTouch = cancelAll;
	              if ( touch.el !== undefined ) touch.el.trigger(event);

	              // trigger double tap immediately
	              if (touch.isDoubleTap) {
	                if ( touch.el !== undefined ) touch.el.trigger('doubleTap');
	                touch = {};
	              }

	              // trigger single tap after 250ms of inactivity
	              else {
	                touchTimeout = setTimeout(function(){
	                  touchTimeout = null;
	                  if ( touch.el !== undefined ) touch.el.trigger('singleTap');
	                  touch = {};
	                }, 250);
	              }
	            }, 0);
	          } else {
	            touch = {};
	          }
	          deltaX = deltaY = 0;
	        }
	      })
	      // when the browser window loses focus,
	      // for example when a modal dialog is shown,
	      // cancel all ongoing events
	      .on('touchcancel MSPointerCancel pointercancel', cancelAll);

	    // scrolling the window indicates intention of the user
	    // to scroll, not tap or swipe, so cancel all ongoing events
	    $(window).on('scroll', cancelAll);
	  });

	  ['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function(eventName){
	    $.fn[eventName] = function(callback){ return $(this).on(eventName, callback); };
	  });
	})(jQuery);

	(function(UI) {

	    "use strict";

	    var stacks = [];

	    UI.component('stackMargin', {

	        defaults: {
	            cls: 'uk-margin-small-top',
	            rowfirst: false,
	            observe: false
	        },

	        boot: function() {

	            // init code
	            UI.ready(function(context) {

	                UI.$('[data-uk-margin]', context).each(function() {

	                    var ele = UI.$(this);

	                    if (!ele.data('stackMargin')) {
	                        UI.stackMargin(ele, UI.Utils.options(ele.attr('data-uk-margin')));
	                    }
	                });
	            });
	        },

	        init: function() {

	            var $this = this;

	            UI.$win.on('resize orientationchange', (function() {

	                var fn = function() {
	                    $this.process();
	                };

	                UI.$(function() {
	                    fn();
	                    UI.$win.on('load', fn);
	                });

	                return UI.Utils.debounce(fn, 20);
	            })());

	            this.on('display.uk.check', function(e) {
	                if (this.element.is(':visible')) this.process();
	            }.bind(this));

	            if (this.options.observe) {

	                UI.domObserve(this.element, function(e) {
	                    if ($this.element.is(':visible')) $this.process();
	                });
	            }

	            stacks.push(this);
	        },

	        process: function() {

	            var $this = this, columns = this.element.children();

	            UI.Utils.stackMargin(columns, this.options);

	            if (!this.options.rowfirst || !columns.length) {
	                return this;
	            }

	            // Mark first column elements
	            var group = {}, minleft = false;

	            columns.removeClass(this.options.rowfirst).each(function(offset, $ele){

	                $ele = UI.$(this);

	                if (this.style.display != 'none') {
	                    offset = $ele.offset().left;
	                    ((group[offset] = group[offset] || []) && group[offset]).push(this);
	                    minleft = minleft === false ? offset : Math.min(minleft, offset);
	                }
	            });

	            UI.$(group[minleft]).addClass(this.options.rowfirst);

	            return this;
	        }

	    });


	    // responsive element e.g. iframes

	    (function(){

	        var elements = [], check = function(ele) {

	            if (!ele.is(':visible')) return;

	            var width  = ele.parent().width(),
	                iwidth = ele.data('width'),
	                ratio  = (width / iwidth),
	                height = Math.floor(ratio * ele.data('height'));

	            ele.css({height: (width < iwidth) ? height : ele.data('height')});
	        };

	        UI.component('responsiveElement', {

	            defaults: {},

	            boot: function() {

	                // init code
	                UI.ready(function(context) {

	                    UI.$('iframe.uk-responsive-width, [data-uk-responsive]', context).each(function() {

	                        var ele = UI.$(this), obj;

	                        if (!ele.data('responsiveElement')) {
	                            obj = UI.responsiveElement(ele, {});
	                        }
	                    });
	                });
	            },

	            init: function() {

	                var ele = this.element;

	                if (ele.attr('width') && ele.attr('height')) {

	                    ele.data({
	                        width : ele.attr('width'),
	                        height: ele.attr('height')
	                    }).on('display.uk.check', function(){
	                        check(ele);
	                    });

	                    check(ele);

	                    elements.push(ele);
	                }
	            }
	        });

	        UI.$win.on('resize load', UI.Utils.debounce(function(){

	            elements.forEach(function(ele){
	                check(ele);
	            });

	        }, 15));

	    })();


	    // helper

	    UI.Utils.stackMargin = function(elements, options) {

	        options = UI.$.extend({
	            cls: 'uk-margin-small-top'
	        }, options);

	        elements = UI.$(elements).removeClass(options.cls);

	        var min = false;

	        elements.each(function(offset, height, pos, $ele){

	            $ele   = UI.$(this);

	            if ($ele.css('display') != 'none') {

	                offset = $ele.offset();
	                height = $ele.outerHeight();
	                pos    = offset.top + height;

	                $ele.data({
	                    ukMarginPos: pos,
	                    ukMarginTop: offset.top
	                });

	                if (min === false || (offset.top < min.top) ) {

	                    min = {
	                        top  : offset.top,
	                        left : offset.left,
	                        pos  : pos
	                    };
	                }
	            }

	        }).each(function($ele) {

	            $ele   = UI.$(this);

	            if ($ele.css('display') != 'none' && $ele.data('ukMarginTop') > min.top && $ele.data('ukMarginPos') > min.pos) {
	                $ele.addClass(options.cls);
	            }
	        });
	    };

	    UI.Utils.matchHeights = function(elements, options) {

	        elements = UI.$(elements).css('min-height', '');
	        options  = UI.$.extend({ row : true }, options);

	        var matchHeights = function(group){

	            if (group.length < 2) return;

	            var max = 0;

	            group.each(function() {
	                max = Math.max(max, UI.$(this).outerHeight());
	            }).each(function() {

	                var element = UI.$(this),
	                    height  = max - (element.css('box-sizing') == 'border-box' ? 0 : (element.outerHeight() - element.height()));

	                element.css('min-height', height + 'px');
	            });
	        };

	        if (options.row) {

	            elements.first().width(); // force redraw

	            setTimeout(function(){

	                var lastoffset = false, group = [];

	                elements.each(function() {

	                    var ele = UI.$(this), offset = ele.offset().top;

	                    if (offset != lastoffset && group.length) {

	                        matchHeights(UI.$(group));
	                        group  = [];
	                        offset = ele.offset().top;
	                    }

	                    group.push(ele);
	                    lastoffset = offset;
	                });

	                if (group.length) {
	                    matchHeights(UI.$(group));
	                }

	            }, 0);

	        } else {
	            matchHeights(elements);
	        }
	    };

	    (function(cacheSvgs){

	        UI.Utils.inlineSvg = function(selector, root) {

	            var images = UI.$(selector || 'img[src$=".svg"]', root || document).each(function(){

	                var img = UI.$(this),
	                    src = img.attr('src');

	                if (!cacheSvgs[src]) {

	                    var d = UI.$.Deferred();

	                    UI.$.get(src, {nc: Math.random()}, function(data){
	                        d.resolve(UI.$(data).find('svg'));
	                    });

	                    cacheSvgs[src] = d.promise();
	                }

	                cacheSvgs[src].then(function(svg) {

	                    var $svg = UI.$(svg).clone();

	                    if (img.attr('id')) $svg.attr('id', img.attr('id'));
	                    if (img.attr('class')) $svg.attr('class', img.attr('class'));
	                    if (img.attr('style')) $svg.attr('style', img.attr('style'));

	                    if (img.attr('width')) {
	                        $svg.attr('width', img.attr('width'));
	                        if (!img.attr('height'))  $svg.removeAttr('height');
	                    }

	                    if (img.attr('height')){
	                        $svg.attr('height', img.attr('height'));
	                        if (!img.attr('width')) $svg.removeAttr('width');
	                    }

	                    img.replaceWith($svg);
	                });
	            });
	        };

	        // init code
	        UI.ready(function(context) {
	            UI.Utils.inlineSvg('[data-uk-svg]', context);
	        });

	    })({});

	    UI.Utils.getCssVar = function(name) {

	        /* usage in css:  .var-name:before { content:"xyz" } */

	        var val, doc = document.documentElement, element = doc.appendChild(document.createElement('div'));

	        element.classList.add('var-'+name);

	        try {
	            val = JSON.parse(val = getComputedStyle(element, ':before').content.replace(/^["'](.*)["']$/, '$1'));
	        } catch (e) {
	            val = undefined;
	        }

	        doc.removeChild(element);

	        return val;
	    }

	})(UIkit);

	(function(UI) {

	    "use strict";

	    UI.component('smoothScroll', {

	        boot: function() {

	            // init code
	            UI.$html.on('click.smooth-scroll.uikit', '[data-uk-smooth-scroll]', function(e) {
	                var ele = UI.$(this);

	                if (!ele.data('smoothScroll')) {
	                    var obj = UI.smoothScroll(ele, UI.Utils.options(ele.attr('data-uk-smooth-scroll')));
	                    ele.trigger('click');
	                }

	                return false;
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.on('click', function(e) {
	                e.preventDefault();
	                scrollToElement(UI.$(this.hash).length ? UI.$(this.hash) : UI.$('body'), $this.options);
	            });
	        }
	    });

	    function scrollToElement(ele, options) {

	        options = UI.$.extend({
	            duration: 1000,
	            transition: 'easeOutExpo',
	            offset: 0,
	            complete: function(){}
	        }, options);

	        // get / set parameters
	        var target    = ele.offset().top - options.offset,
	            docheight = UI.$doc.height(),
	            winheight = window.innerHeight;

	        if ((target + winheight) > docheight) {
	            target = docheight - winheight;
	        }

	        // animate to target, fire callback when done
	        UI.$('html,body').stop().animate({scrollTop: target}, options.duration, options.transition).promise().done(options.complete);
	    }

	    UI.Utils.scrollToElement = scrollToElement;

	    if (!UI.$.easing.easeOutExpo) {
	        UI.$.easing.easeOutExpo = function(x, t, b, c, d) { return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b; };
	    }

	})(UIkit);

	(function(UI) {

	    "use strict";

	    var $win           = UI.$win,
	        $doc           = UI.$doc,
	        scrollspies    = [],
	        checkScrollSpy = function() {
	            for(var i=0; i < scrollspies.length; i++) {
	                window.requestAnimationFrame.apply(window, [scrollspies[i].check]);
	            }
	        };

	    UI.component('scrollspy', {

	        defaults: {
	            target     : false,
	            cls        : 'uk-scrollspy-inview',
	            initcls    : 'uk-scrollspy-init-inview',
	            topoffset  : 0,
	            leftoffset : 0,
	            repeat     : false,
	            delay      : 0
	        },

	        boot: function() {

	            // listen to scroll and resize
	            $doc.on('scrolling.uk.document', checkScrollSpy);
	            $win.on('load resize orientationchange', UI.Utils.debounce(checkScrollSpy, 50));

	            // init code
	            UI.ready(function(context) {

	                UI.$('[data-uk-scrollspy]', context).each(function() {

	                    var element = UI.$(this);

	                    if (!element.data('scrollspy')) {
	                        var obj = UI.scrollspy(element, UI.Utils.options(element.attr('data-uk-scrollspy')));
	                    }
	                });
	            });
	        },

	        init: function() {

	            var $this = this, inviewstate, initinview, togglecls = this.options.cls.split(/,/), fn = function(){

	                var elements     = $this.options.target ? $this.element.find($this.options.target) : $this.element,
	                    delayIdx     = elements.length === 1 ? 1 : 0,
	                    toggleclsIdx = 0;

	                elements.each(function(idx){

	                    var element     = UI.$(this),
	                        inviewstate = element.data('inviewstate'),
	                        inview      = UI.Utils.isInView(element, $this.options),
	                        toggle      = element.data('ukScrollspyCls') || togglecls[toggleclsIdx].trim();

	                    if (inview && !inviewstate && !element.data('scrollspy-idle')) {

	                        if (!initinview) {
	                            element.addClass($this.options.initcls);
	                            $this.offset = element.offset();
	                            initinview = true;

	                            element.trigger('init.uk.scrollspy');
	                        }

	                        element.data('scrollspy-idle', setTimeout(function(){

	                            element.addClass('uk-scrollspy-inview').toggleClass(toggle).width();
	                            element.trigger('inview.uk.scrollspy');

	                            element.data('scrollspy-idle', false);
	                            element.data('inviewstate', true);

	                        }, $this.options.delay * delayIdx));

	                        delayIdx++;
	                    }

	                    if (!inview && inviewstate && $this.options.repeat) {

	                        if (element.data('scrollspy-idle')) {
	                            clearTimeout(element.data('scrollspy-idle'));
	                            element.data('scrollspy-idle', false);
	                        }

	                        element.removeClass('uk-scrollspy-inview').toggleClass(toggle);
	                        element.data('inviewstate', false);

	                        element.trigger('outview.uk.scrollspy');
	                    }

	                    toggleclsIdx = togglecls[toggleclsIdx + 1] ? (toggleclsIdx + 1) : 0;

	                });
	            };

	            fn();

	            this.check = fn;

	            scrollspies.push(this);
	        }
	    });


	    var scrollspynavs = [],
	        checkScrollSpyNavs = function() {
	            for(var i=0; i < scrollspynavs.length; i++) {
	                window.requestAnimationFrame.apply(window, [scrollspynavs[i].check]);
	            }
	        };

	    UI.component('scrollspynav', {

	        defaults: {
	            cls          : 'uk-active',
	            closest      : false,
	            topoffset    : 0,
	            leftoffset   : 0,
	            smoothscroll : false
	        },

	        boot: function() {

	            // listen to scroll and resize
	            $doc.on('scrolling.uk.document', checkScrollSpyNavs);
	            $win.on('resize orientationchange', UI.Utils.debounce(checkScrollSpyNavs, 50));

	            // init code
	            UI.ready(function(context) {

	                UI.$('[data-uk-scrollspy-nav]', context).each(function() {

	                    var element = UI.$(this);

	                    if (!element.data('scrollspynav')) {
	                        var obj = UI.scrollspynav(element, UI.Utils.options(element.attr('data-uk-scrollspy-nav')));
	                    }
	                });
	            });
	        },

	        init: function() {

	            var ids     = [],
	                links   = this.find("a[href^='#']").each(function(){ if(this.getAttribute('href').trim()!=='#') ids.push(this.getAttribute('href')); }),
	                targets = UI.$(ids.join(",")),

	                clsActive  = this.options.cls,
	                clsClosest = this.options.closest || this.options.closest;

	            var $this = this, inviews, fn = function(){

	                inviews = [];

	                for (var i=0 ; i < targets.length ; i++) {
	                    if (UI.Utils.isInView(targets.eq(i), $this.options)) {
	                        inviews.push(targets.eq(i));
	                    }
	                }

	                if (inviews.length) {

	                    var navitems,
	                        scrollTop = $win.scrollTop(),
	                        target = (function(){
	                            for(var i=0; i< inviews.length;i++){
	                                if (inviews[i].offset().top - $this.options.topoffset >= scrollTop){
	                                    return inviews[i];
	                                }
	                            }
	                        })();

	                    if (!target) return;

	                    if ($this.options.closest) {
	                        links.blur().closest(clsClosest).removeClass(clsActive);
	                        navitems = links.filter("a[href='#"+target.attr('id')+"']").closest(clsClosest).addClass(clsActive);
	                    } else {
	                        navitems = links.removeClass(clsActive).filter("a[href='#"+target.attr("id")+"']").addClass(clsActive);
	                    }

	                    $this.element.trigger('inview.uk.scrollspynav', [target, navitems]);
	                }
	            };

	            if (this.options.smoothscroll && UI.smoothScroll) {
	                links.each(function(){
	                    UI.smoothScroll(this, $this.options.smoothscroll);
	                });
	            }

	            fn();

	            this.element.data('scrollspynav', this);

	            this.check = fn;
	            scrollspynavs.push(this);

	        }
	    });

	})(UIkit);

	(function(UI){

	    "use strict";

	    var toggles = [];

	    UI.component('toggle', {

	        defaults: {
	            target    : false,
	            cls       : 'uk-hidden',
	            animation : false,
	            duration  : 200
	        },

	        boot: function(){

	            // init code
	            UI.ready(function(context) {

	                UI.$('[data-uk-toggle]', context).each(function() {
	                    var ele = UI.$(this);

	                    if (!ele.data('toggle')) {
	                        var obj = UI.toggle(ele, UI.Utils.options(ele.attr('data-uk-toggle')));
	                    }
	                });

	                setTimeout(function(){

	                    toggles.forEach(function(toggle){
	                        toggle.getToggles();
	                    });

	                }, 0);
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.aria = (this.options.cls.indexOf('uk-hidden') !== -1);

	            this.on('click', function(e) {

	                if ($this.element.is('a[href="#"]')) {
	                    e.preventDefault();
	                }

	                $this.toggle();
	            });

	            toggles.push(this);
	        },

	        toggle: function() {

	            this.getToggles();

	            if(!this.totoggle.length) return;

	            if (this.options.animation && UI.support.animation) {

	                var $this = this, animations = this.options.animation.split(',');

	                if (animations.length == 1) {
	                    animations[1] = animations[0];
	                }

	                animations[0] = animations[0].trim();
	                animations[1] = animations[1].trim();

	                this.totoggle.css('animation-duration', this.options.duration+'ms');

	                this.totoggle.each(function(){

	                    var ele = UI.$(this);

	                    if (ele.hasClass($this.options.cls)) {

	                        ele.toggleClass($this.options.cls);

	                        UI.Utils.animate(ele, animations[0]).then(function(){
	                            ele.css('animation-duration', '');
	                            UI.Utils.checkDisplay(ele);
	                        });

	                    } else {

	                        UI.Utils.animate(this, animations[1]+' uk-animation-reverse').then(function(){
	                            ele.toggleClass($this.options.cls).css('animation-duration', '');
	                            UI.Utils.checkDisplay(ele);
	                        });

	                    }

	                });

	            } else {
	                this.totoggle.toggleClass(this.options.cls);
	                UI.Utils.checkDisplay(this.totoggle);
	            }

	            this.updateAria();

	        },

	        getToggles: function() {
	            this.totoggle = this.options.target ? UI.$(this.options.target):[];
	            this.updateAria();
	        },

	        updateAria: function() {
	            if (this.aria && this.totoggle.length) {
	                this.totoggle.not('[aria-hidden]').each(function(){
	                    UI.$(this).attr('aria-hidden', UI.$(this).hasClass('uk-hidden'));
	                });
	            }
	        }
	    });

	})(UIkit);

	(function(UI) {

	    "use strict";

	    UI.component('alert', {

	        defaults: {
	            fade: true,
	            duration: 200,
	            trigger: '.uk-alert-close'
	        },

	        boot: function() {

	            // init code
	            UI.$html.on('click.alert.uikit', '[data-uk-alert]', function(e) {

	                var ele = UI.$(this);

	                if (!ele.data('alert')) {

	                    var alert = UI.alert(ele, UI.Utils.options(ele.attr('data-uk-alert')));

	                    if (UI.$(e.target).is(alert.options.trigger)) {
	                        e.preventDefault();
	                        alert.close();
	                    }
	                }
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.on('click', this.options.trigger, function(e) {
	                e.preventDefault();
	                $this.close();
	            });
	        },

	        close: function() {

	            var element       = this.trigger('close.uk.alert'),
	                removeElement = function () {
	                    this.trigger('closed.uk.alert').remove();
	                }.bind(this);

	            if (this.options.fade) {
	                element.css('overflow', 'hidden').css("max-height", element.height()).animate({
	                    height         : 0,
	                    opacity        : 0,
	                    paddingTop    : 0,
	                    paddingBottom : 0,
	                    marginTop     : 0,
	                    marginBottom  : 0
	                }, this.options.duration, removeElement);
	            } else {
	                removeElement();
	            }
	        }

	    });

	})(UIkit);

	(function(UI) {

	    "use strict";

	    UI.component('buttonRadio', {

	        defaults: {
	            activeClass: 'uk-active',
	            target: '.uk-button'
	        },

	        boot: function() {

	            // init code
	            UI.$html.on('click.buttonradio.uikit', '[data-uk-button-radio]', function(e) {

	                var ele = UI.$(this);

	                if (!ele.data('buttonRadio')) {

	                    var obj    = UI.buttonRadio(ele, UI.Utils.options(ele.attr('data-uk-button-radio'))),
	                        target = UI.$(e.target);

	                    if (target.is(obj.options.target)) {
	                        target.trigger('click');
	                    }
	                }
	            });
	        },

	        init: function() {

	            var $this = this;

	            // Init ARIA
	            this.find($this.options.target).attr('aria-checked', 'false').filter('.' + $this.options.activeClass).attr('aria-checked', 'true');

	            this.on('click', this.options.target, function(e) {

	                var ele = UI.$(this);

	                if (ele.is('a[href="#"]')) e.preventDefault();

	                $this.find($this.options.target).not(ele).removeClass($this.options.activeClass).blur();
	                ele.addClass($this.options.activeClass);

	                // Update ARIA
	                $this.find($this.options.target).not(ele).attr('aria-checked', 'false');
	                ele.attr('aria-checked', 'true');

	                $this.trigger('change.uk.button', [ele]);
	            });

	        },

	        getSelected: function() {
	            return this.find('.' + this.options.activeClass);
	        }
	    });

	    UI.component('buttonCheckbox', {

	        defaults: {
	            activeClass: 'uk-active',
	            target: '.uk-button'
	        },

	        boot: function() {

	            UI.$html.on('click.buttoncheckbox.uikit', '[data-uk-button-checkbox]', function(e) {
	                var ele = UI.$(this);

	                if (!ele.data('buttonCheckbox')) {

	                    var obj    = UI.buttonCheckbox(ele, UI.Utils.options(ele.attr('data-uk-button-checkbox'))),
	                        target = UI.$(e.target);

	                    if (target.is(obj.options.target)) {
	                        target.trigger('click');
	                    }
	                }
	            });
	        },

	        init: function() {

	            var $this = this;

	            // Init ARIA
	            this.find($this.options.target).attr('aria-checked', 'false').filter('.' + $this.options.activeClass).attr('aria-checked', 'true');

	            this.on('click', this.options.target, function(e) {
	                var ele = UI.$(this);

	                if (ele.is('a[href="#"]')) e.preventDefault();

	                ele.toggleClass($this.options.activeClass).blur();

	                // Update ARIA
	                ele.attr('aria-checked', ele.hasClass($this.options.activeClass));

	                $this.trigger('change.uk.button', [ele]);
	            });

	        },

	        getSelected: function() {
	            return this.find('.' + this.options.activeClass);
	        }
	    });


	    UI.component('button', {

	        defaults: {},

	        boot: function() {

	            UI.$html.on('click.button.uikit', '[data-uk-button]', function(e) {
	                var ele = UI.$(this);

	                if (!ele.data('button')) {

	                    var obj = UI.button(ele, UI.Utils.options(ele.attr('data-uk-button')));
	                    ele.trigger('click');
	                }
	            });
	        },

	        init: function() {

	            var $this = this;

	            // Init ARIA
	            this.element.attr('aria-pressed', this.element.hasClass("uk-active"));

	            this.on('click', function(e) {

	                if ($this.element.is('a[href="#"]')) e.preventDefault();

	                $this.toggle();
	                $this.trigger('change.uk.button', [$this.element.blur().hasClass('uk-active')]);
	            });

	        },

	        toggle: function() {
	            this.element.toggleClass('uk-active');

	            // Update ARIA
	            this.element.attr('aria-pressed', this.element.hasClass('uk-active'));
	        }
	    });

	})(UIkit);

	(function(UI) {

	    "use strict";

	    var active = false, hoverIdle, flips = {
	        x: {
	            'bottom-left'   : 'bottom-right',
	            'bottom-right'  : 'bottom-left',
	            'bottom-center' : 'bottom-center',
	            'top-left'      : 'top-right',
	            'top-right'     : 'top-left',
	            'top-center'    : 'top-center',
	            'left-top'      : 'right-top',
	            'left-bottom'   : 'right-bottom',
	            'left-center'   : 'right-center',
	            'right-top'     : 'left-top',
	            'right-bottom'  : 'left-bottom',
	            'right-center'  : 'left-center'
	        },
	        y: {
	            'bottom-left'   : 'top-left',
	            'bottom-right'  : 'top-right',
	            'bottom-center' : 'top-center',
	            'top-left'      : 'bottom-left',
	            'top-right'     : 'bottom-right',
	            'top-center'    : 'bottom-center',
	            'left-top'      : 'left-bottom',
	            'left-bottom'   : 'left-top',
	            'left-center'   : 'left-center',
	            'right-top'     : 'right-bottom',
	            'right-bottom'  : 'right-top',
	            'right-center'  : 'right-center'
	        },
	        xy: {
	            'bottom-left'   : 'top-right',
	            'bottom-right'  : 'top-left',
	            'bottom-center' : 'top-center',
	            'top-left'      : 'bottom-right',
	            'top-right'     : 'bottom-left',
	            'top-center'    : 'bottom-center',
	            'left-top'      : 'right-bottom',
	            'left-bottom'   : 'right-top',
	            'left-center'   : 'right-center',
	            'right-top'     : 'left-bottom',
	            'right-bottom'  : 'left-top',
	            'right-center'  : 'left-center'
	        }
	    };

	    UI.component('dropdown', {

	        defaults: {
	           mode            : 'hover',
	           pos             : 'bottom-left',
	           offset          : 0,
	           remaintime      : 800,
	           justify         : false,
	           boundary        : UI.$win,
	           delay           : 0,
	           dropdownSelector: '.uk-dropdown,.uk-dropdown-blank',
	           hoverDelayIdle  : 250,
	           preventflip     : false
	        },

	        remainIdle: false,

	        boot: function() {

	            var triggerevent = UI.support.touch ? 'click' : 'mouseenter';

	            // init code
	            UI.$html.on(triggerevent+'.dropdown.uikit focus pointerdown', '[data-uk-dropdown]', function(e) {

	                var ele = UI.$(this);

	                if (!ele.data('dropdown')) {

	                    var dropdown = UI.dropdown(ele, UI.Utils.options(ele.attr('data-uk-dropdown')));

	                    if (e.type=='click' || (e.type=='mouseenter' && dropdown.options.mode=='hover')) {
	                        dropdown.element.trigger(triggerevent);
	                    }

	                    if (dropdown.dropdown.length) {
	                        e.preventDefault();
	                    }
	                }
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.dropdown     = this.find(this.options.dropdownSelector);
	            this.offsetParent = this.dropdown.parents().filter(function() {
	                return UI.$.inArray(UI.$(this).css('position'), ['relative', 'fixed', 'absolute']) !== -1;
	            }).slice(0,1);

	            if (!this.offsetParent.length) {
	                this.offsetParent = this.element;
	            }

	            this.centered  = this.dropdown.hasClass('uk-dropdown-center');
	            this.justified = this.options.justify ? UI.$(this.options.justify) : false;

	            this.boundary  = UI.$(this.options.boundary);

	            if (!this.boundary.length) {
	                this.boundary = UI.$win;
	            }

	            // legacy DEPRECATED!
	            if (this.dropdown.hasClass('uk-dropdown-up')) {
	                this.options.pos = 'top-left';
	            }
	            if (this.dropdown.hasClass('uk-dropdown-flip')) {
	                this.options.pos = this.options.pos.replace('left','right');
	            }
	            if (this.dropdown.hasClass('uk-dropdown-center')) {
	                this.options.pos = this.options.pos.replace(/(left|right)/,'center');
	            }
	            //-- end legacy

	            // Init ARIA
	            this.element.attr('aria-haspopup', 'true');
	            this.element.attr('aria-expanded', this.element.hasClass('uk-open'));
	            this.dropdown.attr('aria-hidden', 'true');

	            if (this.options.mode == 'click' || UI.support.touch) {

	                this.on('click.uk.dropdown', function(e) {

	                    var $target = UI.$(e.target);

	                    if (!$target.parents($this.options.dropdownSelector).length) {

	                        if ($target.is("a[href='#']") || $target.parent().is("a[href='#']") || ($this.dropdown.length && !$this.dropdown.is(':visible')) ){
	                            e.preventDefault();
	                        }

	                        $target.blur();
	                    }

	                    if (!$this.element.hasClass('uk-open')) {

	                        $this.show();

	                    } else {

	                        if (!$this.dropdown.find(e.target).length || $target.is('.uk-dropdown-close') || $target.parents('.uk-dropdown-close').length) {
	                            $this.hide();
	                        }
	                    }
	                });

	            } else {

	                this.on('mouseenter', function(e) {

	                    $this.trigger('pointerenter.uk.dropdown', [$this]);

	                    if ($this.remainIdle) {
	                        clearTimeout($this.remainIdle);
	                    }

	                    if (hoverIdle) {
	                        clearTimeout(hoverIdle);
	                    }

	                    if (active && active == $this) {
	                        return;
	                    }

	                    // pseudo manuAim
	                    if (active && active != $this) {

	                        hoverIdle = setTimeout(function() {
	                            hoverIdle = setTimeout($this.show.bind($this), $this.options.delay);
	                        }, $this.options.hoverDelayIdle);

	                    } else {

	                        hoverIdle = setTimeout($this.show.bind($this), $this.options.delay);
	                    }

	                }).on('mouseleave', function() {

	                    if (hoverIdle) {
	                        clearTimeout(hoverIdle);
	                    }

	                    $this.remainIdle = setTimeout(function() {
	                        if (active && active == $this) $this.hide();
	                    }, $this.options.remaintime);

	                    $this.trigger('pointerleave.uk.dropdown', [$this]);

	                }).on('click', function(e){

	                    var $target = UI.$(e.target);

	                    if ($this.remainIdle) {
	                        clearTimeout($this.remainIdle);
	                    }

	                    if (active && active == $this) {
	                        if (!$this.dropdown.find(e.target).length || $target.is('.uk-dropdown-close') || $target.parents('.uk-dropdown-close').length) {
	                            $this.hide();
	                        }
	                        return;
	                    }

	                    if ($target.is("a[href='#']") || $target.parent().is("a[href='#']")){
	                        e.preventDefault();
	                    }

	                    $this.show();
	                });
	            }
	        },

	        show: function(){

	            UI.$html.off('click.outer.dropdown');

	            if (active && active != this) {
	                active.hide(true);
	            }

	            if (hoverIdle) {
	                clearTimeout(hoverIdle);
	            }

	            this.trigger('beforeshow.uk.dropdown', [this]);

	            this.checkDimensions();
	            this.element.addClass('uk-open');

	            // Update ARIA
	            this.element.attr('aria-expanded', 'true');
	            this.dropdown.attr('aria-hidden', 'false');

	            this.trigger('show.uk.dropdown', [this]);

	            UI.Utils.checkDisplay(this.dropdown, true);
	            UI.Utils.focus(this.dropdown);
	            active = this;

	            this.registerOuterClick();
	        },

	        hide: function(force) {

	            this.trigger('beforehide.uk.dropdown', [this, force]);

	            this.element.removeClass('uk-open');

	            if (this.remainIdle) {
	                clearTimeout(this.remainIdle);
	            }

	            this.remainIdle = false;

	            // Update ARIA
	            this.element.attr('aria-expanded', 'false');
	            this.dropdown.attr('aria-hidden', 'true');

	            this.trigger('hide.uk.dropdown', [this, force]);

	            if (active == this) active = false;
	        },

	        registerOuterClick: function(){

	            var $this = this;

	            UI.$html.off('click.outer.dropdown');

	            setTimeout(function() {

	                UI.$html.on('click.outer.dropdown', function(e) {

	                    if (hoverIdle) {
	                        clearTimeout(hoverIdle);
	                    }

	                    var $target = UI.$(e.target);

	                    if (active == $this && !$this.element.find(e.target).length) {
	                        $this.hide(true);
	                        UI.$html.off('click.outer.dropdown');
	                    }
	                });
	            }, 10);
	        },

	        checkDimensions: function() {

	            if (!this.dropdown.length) return;

	            // reset
	            this.dropdown.removeClass('uk-dropdown-top uk-dropdown-bottom uk-dropdown-left uk-dropdown-right uk-dropdown-stack uk-dropdown-autoflip').css({
	                topLeft :'',
	                left :'',
	                marginLeft :'',
	                marginRight :''
	            });

	            if (this.justified && this.justified.length) {
	                this.dropdown.css('min-width', '');
	            }

	            var $this          = this,
	                pos            = UI.$.extend({}, this.offsetParent.offset(), {width: this.offsetParent[0].offsetWidth, height: this.offsetParent[0].offsetHeight}),
	                posoffset      = this.options.offset,
	                dropdown       = this.dropdown,
	                offset         = dropdown.show().offset() || {left: 0, top: 0},
	                width          = dropdown.outerWidth(),
	                height         = dropdown.outerHeight(),
	                boundarywidth  = this.boundary.width(),
	                boundaryoffset = this.boundary[0] !== window && this.boundary.offset() ? this.boundary.offset(): {top:0, left:0},
	                dpos           = this.options.pos;

	            var variants =  {
	                    'bottom-left'   : {top: 0 + pos.height + posoffset, left: 0},
	                    'bottom-right'  : {top: 0 + pos.height + posoffset, left: 0 + pos.width - width},
	                    'bottom-center' : {top: 0 + pos.height + posoffset, left: 0 + pos.width / 2 - width / 2},
	                    'top-left'      : {top: 0 - height - posoffset, left: 0},
	                    'top-right'     : {top: 0 - height - posoffset, left: 0 + pos.width - width},
	                    'top-center'    : {top: 0 - height - posoffset, left: 0 + pos.width / 2 - width / 2},
	                    'left-top'      : {top: 0, left: 0 - width - posoffset},
	                    'left-bottom'   : {top: 0 + pos.height - height, left: 0 - width - posoffset},
	                    'left-center'   : {top: 0 + pos.height / 2 - height / 2, left: 0 - width - posoffset},
	                    'right-top'     : {top: 0, left: 0 + pos.width + posoffset},
	                    'right-bottom'  : {top: 0 + pos.height - height, left: 0 + pos.width + posoffset},
	                    'right-center'  : {top: 0 + pos.height / 2 - height / 2, left: 0 + pos.width + posoffset}
	                },
	                css = {},
	                pp;

	            pp = dpos.split('-');
	            css = variants[dpos] ? variants[dpos] : variants['bottom-left'];

	            // justify dropdown
	            if (this.justified && this.justified.length) {
	                justify(dropdown.css({left:0}), this.justified, boundarywidth);
	            } else {

	                if (this.options.preventflip !== true) {

	                    var fdpos;

	                    switch(this.checkBoundary(pos.left + css.left, pos.top + css.top, width, height, boundarywidth)) {
	                        case "x":
	                            if(this.options.preventflip !=='x') fdpos = flips['x'][dpos] || 'right-top';
	                            break;
	                        case "y":
	                            if(this.options.preventflip !=='y') fdpos = flips['y'][dpos] || 'top-left';
	                            break;
	                        case "xy":
	                            if(!this.options.preventflip) fdpos = flips['xy'][dpos] || 'right-bottom';
	                            break;
	                    }

	                    if (fdpos) {

	                        pp  = fdpos.split('-');
	                        css = variants[fdpos] ? variants[fdpos] : variants['bottom-left'];
	                        dropdown.addClass('uk-dropdown-autoflip');

	                        // check flipped
	                        if (this.checkBoundary(pos.left + css.left, pos.top + css.top, width, height, boundarywidth)) {
	                            pp  = dpos.split('-');
	                            css = variants[dpos] ? variants[dpos] : variants['bottom-left'];
	                        }
	                    }
	                }
	            }

	            if (width > boundarywidth) {
	                dropdown.addClass('uk-dropdown-stack');
	                this.trigger('stack.uk.dropdown', [this]);
	            }

	            dropdown.css(css).css('display', '').addClass('uk-dropdown-'+pp[0]);
	        },

	        checkBoundary: function(left, top, width, height, boundarywidth) {

	            var axis = "";

	            if (left < 0 || ((left - UI.$win.scrollLeft())+width) > boundarywidth) {
	               axis += "x";
	            }

	            if ((top - UI.$win.scrollTop()) < 0 || ((top - UI.$win.scrollTop())+height) > window.innerHeight) {
	               axis += "y";
	            }

	            return axis;
	        }
	    });


	    UI.component('dropdownOverlay', {

	        defaults: {
	           justify : false,
	           cls     : '',
	           duration: 200
	        },

	        boot: function() {

	            // init code
	            UI.ready(function(context) {

	                UI.$('[data-uk-dropdown-overlay]', context).each(function() {
	                    var ele = UI.$(this);

	                    if (!ele.data('dropdownOverlay')) {
	                        UI.dropdownOverlay(ele, UI.Utils.options(ele.attr('data-uk-dropdown-overlay')));
	                    }
	                });
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.justified = this.options.justify ? UI.$(this.options.justify) : false;
	            this.overlay   = this.element.find('uk-dropdown-overlay');

	            if (!this.overlay.length) {
	                this.overlay = UI.$('<div class="uk-dropdown-overlay"></div>').appendTo(this.element);
	            }

	            this.overlay.addClass(this.options.cls);

	            this.on({

	                'beforeshow.uk.dropdown': function(e, dropdown) {
	                    $this.dropdown = dropdown;

	                    if ($this.justified && $this.justified.length) {
	                        justify($this.overlay.css({display:'block', marginLeft:'', marginRight:''}), $this.justified, $this.justified.outerWidth());
	                    }
	                },

	                'show.uk.dropdown': function(e, dropdown) {

	                    var h = $this.dropdown.dropdown.outerHeight(true);

	                    $this.dropdown.element.removeClass('uk-open');

	                    $this.overlay.stop().css('display', 'block').animate({height: h}, $this.options.duration, function() {

	                       $this.dropdown.dropdown.css('visibility', '');
	                       $this.dropdown.element.addClass('uk-open');

	                       UI.Utils.checkDisplay($this.dropdown.dropdown, true);
	                    });

	                    $this.pointerleave = false;
	                },

	                'hide.uk.dropdown': function() {
	                    $this.overlay.stop().animate({height: 0}, $this.options.duration);
	                },

	                'pointerenter.uk.dropdown': function(e, dropdown) {
	                    clearTimeout($this.remainIdle);
	                },

	                'pointerleave.uk.dropdown': function(e, dropdown) {
	                    $this.pointerleave = true;
	                }
	            });


	            this.overlay.on({

	                'mouseenter': function() {
	                    if ($this.remainIdle) {
	                        clearTimeout($this.dropdown.remainIdle);
	                        clearTimeout($this.remainIdle);
	                    }
	                },

	                'mouseleave': function(){

	                    if ($this.pointerleave && active) {

	                        $this.remainIdle = setTimeout(function() {
	                           if(active) active.hide();
	                        }, active.options.remaintime);
	                    }
	                }
	            })
	        }

	    });


	    function justify(ele, justifyTo, boundarywidth, offset) {

	        ele           = UI.$(ele);
	        justifyTo     = UI.$(justifyTo);
	        boundarywidth = boundarywidth || window.innerWidth;
	        offset        = offset || ele.offset();

	        if (justifyTo.length) {

	            var jwidth = justifyTo.outerWidth();

	            ele.css('min-width', jwidth);

	            if (UI.langdirection == 'right') {

	                var right1   = boundarywidth - (justifyTo.offset().left + jwidth),
	                    right2   = boundarywidth - (ele.offset().left + ele.outerWidth());

	                ele.css('margin-right', right1 - right2);

	            } else {
	                ele.css('margin-left', justifyTo.offset().left - offset.left);
	            }
	        }
	    }

	})(UIkit);

	(function(UI) {

	    "use strict";

	    var grids = [];

	    UI.component('gridMatchHeight', {

	        defaults: {
	            target        : false,
	            row           : true,
	            ignorestacked : false,
	            observe       : false
	        },

	        boot: function() {

	            // init code
	            UI.ready(function(context) {

	                UI.$('[data-uk-grid-match]', context).each(function() {
	                    var grid = UI.$(this), obj;

	                    if (!grid.data('gridMatchHeight')) {
	                        obj = UI.gridMatchHeight(grid, UI.Utils.options(grid.attr('data-uk-grid-match')));
	                    }
	                });
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.columns  = this.element.children();
	            this.elements = this.options.target ? this.find(this.options.target) : this.columns;

	            if (!this.columns.length) return;

	            UI.$win.on('load resize orientationchange', (function() {

	                var fn = function() {
	                    if ($this.element.is(':visible')) $this.match();
	                };

	                UI.$(function() { fn(); });

	                return UI.Utils.debounce(fn, 50);
	            })());

	            if (this.options.observe) {

	                UI.domObserve(this.element, function(e) {
	                    if ($this.element.is(':visible')) $this.match();
	                });
	            }

	            this.on('display.uk.check', function(e) {
	                if(this.element.is(':visible')) this.match();
	            }.bind(this));

	            grids.push(this);
	        },

	        match: function() {

	            var firstvisible = this.columns.filter(':visible:first');

	            if (!firstvisible.length) return;

	            var stacked = Math.ceil(100 * parseFloat(firstvisible.css('width')) / parseFloat(firstvisible.parent().css('width'))) >= 100;

	            if (stacked && !this.options.ignorestacked) {
	                this.revert();
	            } else {
	                UI.Utils.matchHeights(this.elements, this.options);
	            }

	            return this;
	        },

	        revert: function() {
	            this.elements.css('min-height', '');
	            return this;
	        }
	    });

	    UI.component('gridMargin', {

	        defaults: {
	            cls      : 'uk-grid-margin',
	            rowfirst : 'uk-row-first'
	        },

	        boot: function() {

	            // init code
	            UI.ready(function(context) {

	                UI.$('[data-uk-grid-margin]', context).each(function() {
	                    var grid = UI.$(this), obj;

	                    if (!grid.data('gridMargin')) {
	                        obj = UI.gridMargin(grid, UI.Utils.options(grid.attr('data-uk-grid-margin')));
	                    }
	                });
	            });
	        },

	        init: function() {

	            var stackMargin = UI.stackMargin(this.element, this.options);
	        }
	    });

	})(UIkit);

	(function(UI) {

	    "use strict";

	    var active = false, activeCount = 0, $html = UI.$html, body;

	    UI.$win.on('resize orientationchange', UI.Utils.debounce(function(){
	        UI.$('.uk-modal.uk-open').each(function(){
	            return UI.$(this).data('modal') && UI.$(this).data('modal').resize();
	        });
	    }, 150));

	    UI.component('modal', {

	        defaults: {
	            keyboard: true,
	            bgclose: true,
	            minScrollHeight: 150,
	            center: false,
	            modal: true
	        },

	        scrollable: false,
	        transition: false,
	        hasTransitioned: true,

	        init: function() {

	            if (!body) body = UI.$('body');

	            if (!this.element.length) return;

	            var $this = this;

	            this.paddingdir = 'padding-' + (UI.langdirection == 'left' ? 'right':'left');
	            this.dialog     = this.find('.uk-modal-dialog');

	            this.active     = false;

	            // Update ARIA
	            this.element.attr('aria-hidden', this.element.hasClass('uk-open'));

	            this.on('click', '.uk-modal-close', function(e) {
	                e.preventDefault();
	                $this.hide();
	            }).on('click', function(e) {

	                var target = UI.$(e.target);

	                if (target[0] == $this.element[0] && $this.options.bgclose) {
	                    $this.hide();
	                }
	            });

	            UI.domObserve(this.element, function(e) { $this.resize(); });
	        },

	        toggle: function() {
	            return this[this.isActive() ? 'hide' : 'show']();
	        },

	        show: function() {

	            if (!this.element.length) return;

	            var $this = this;

	            if (this.isActive()) return;

	            if (this.options.modal && active) {
	                active.hide(true);
	            }

	            this.element.removeClass('uk-open').show();
	            this.resize(true);

	            if (this.options.modal) {
	                active = this;
	            }

	            this.active = true;

	            activeCount++;

	            if (UI.support.transition) {
	                this.hasTransitioned = false;
	                this.element.one(UI.support.transition.end, function(){
	                    $this.hasTransitioned = true;
	                    UI.Utils.focus($this.dialog, 'a[href]');
	                }).addClass('uk-open');
	            } else {
	                this.element.addClass('uk-open');
	                UI.Utils.focus(this.dialog, 'a[href]');
	            }

	            $html.addClass('uk-modal-page').height(); // force browser engine redraw

	            // Update ARIA
	            this.element.attr('aria-hidden', 'false');

	            this.element.trigger('show.uk.modal');

	            UI.Utils.checkDisplay(this.dialog, true);

	            return this;
	        },

	        hide: function(force) {

	            if (!force && UI.support.transition && this.hasTransitioned) {

	                var $this = this;

	                this.one(UI.support.transition.end, function() {
	                    $this._hide();
	                }).removeClass('uk-open');

	            } else {

	                this._hide();
	            }

	            return this;
	        },

	        resize: function(force) {

	            if (!this.isActive() && !force) return;

	            var bodywidth  = body.width();

	            this.scrollbarwidth = window.innerWidth - bodywidth;

	            body.css(this.paddingdir, this.scrollbarwidth);

	            this.element.css('overflow-y', this.scrollbarwidth ? 'scroll' : 'auto');

	            if (!this.updateScrollable() && this.options.center) {

	                var dh  = this.dialog.outerHeight(),
	                pad = parseInt(this.dialog.css('margin-top'), 10) + parseInt(this.dialog.css('margin-bottom'), 10);

	                if ((dh + pad) < window.innerHeight) {
	                    this.dialog.css({top: (window.innerHeight/2 - dh/2) - pad });
	                } else {
	                    this.dialog.css({top: ''});
	                }
	            }
	        },

	        updateScrollable: function() {

	            // has scrollable?
	            var scrollable = this.dialog.find('.uk-overflow-container:visible:first');

	            if (scrollable.length) {

	                scrollable.css('height', 0);

	                var offset = Math.abs(parseInt(this.dialog.css('margin-top'), 10)),
	                dh     = this.dialog.outerHeight(),
	                wh     = window.innerHeight,
	                h      = wh - 2*(offset < 20 ? 20:offset) - dh;

	                scrollable.css({
	                    maxHeight: (h < this.options.minScrollHeight ? '':h),
	                    height:''
	                });

	                return true;
	            }

	            return false;
	        },

	        _hide: function() {

	            this.active = false;
	            if (activeCount > 0) activeCount--;
	            else activeCount = 0;

	            this.element.hide().removeClass('uk-open');

	            // Update ARIA
	            this.element.attr('aria-hidden', 'true');

	            if (!activeCount) {
	                $html.removeClass('uk-modal-page');
	                body.css(this.paddingdir, "");
	            }

	            if (active===this) active = false;

	            this.trigger('hide.uk.modal');
	        },

	        isActive: function() {
	            return this.element.hasClass('uk-open');
	        }

	    });

	    UI.component('modalTrigger', {

	        boot: function() {

	            // init code
	            UI.$html.on('click.modal.uikit', '[data-uk-modal]', function(e) {

	                var ele = UI.$(this);

	                if (ele.is('a')) {
	                    e.preventDefault();
	                }

	                if (!ele.data('modalTrigger')) {
	                    var modal = UI.modalTrigger(ele, UI.Utils.options(ele.attr('data-uk-modal')));
	                    modal.show();
	                }

	            });

	            // close modal on esc button
	            UI.$html.on('keydown.modal.uikit', function (e) {

	                if (active && e.keyCode === 27 && active.options.keyboard) { // ESC
	                    e.preventDefault();
	                    active.hide();
	                }
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.options = UI.$.extend({
	                target: $this.element.is('a') ? $this.element.attr('href') : false
	            }, this.options);

	            this.modal = UI.modal(this.options.target, this.options);

	            this.on("click", function(e) {
	                e.preventDefault();
	                $this.show();
	            });

	            //methods
	            this.proxy(this.modal, 'show hide isActive');
	        }
	    });

	    UI.modal.dialog = function(content, options) {

	        var modal = UI.modal(UI.$(UI.modal.dialog.template).appendTo('body'), options);

	        modal.on('hide.uk.modal', function(){
	            if (modal.persist) {
	                modal.persist.appendTo(modal.persist.data('modalPersistParent'));
	                modal.persist = false;
	            }
	            modal.element.remove();
	        });

	        setContent(content, modal);

	        return modal;
	    };

	    UI.modal.dialog.template = '<div class="uk-modal"><div class="uk-modal-dialog" style="min-height:0;"></div></div>';

	    UI.modal.alert = function(content, options) {

	        options = UI.$.extend(true, {bgclose:false, keyboard:false, modal:false, labels:UI.modal.labels}, options);

	        var modal = UI.modal.dialog(([
	            '<div class="uk-margin uk-modal-content">'+String(content)+'</div>',
	            '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary uk-modal-close">'+options.labels.Ok+'</button></div>'
	        ]).join(""), options);

	        modal.on('show.uk.modal', function(){
	            setTimeout(function(){
	                modal.element.find('button:first').focus();
	            }, 50);
	        });

	        return modal.show();
	    };

	    UI.modal.confirm = function(content, onconfirm, oncancel) {

	        var options = arguments.length > 1 && arguments[arguments.length-1] ? arguments[arguments.length-1] : {};

	        onconfirm = UI.$.isFunction(onconfirm) ? onconfirm : function(){};
	        oncancel  = UI.$.isFunction(oncancel) ? oncancel : function(){};
	        options   = UI.$.extend(true, {bgclose:false, keyboard:false, modal:false, labels:UI.modal.labels}, UI.$.isFunction(options) ? {}:options);

	        var modal = UI.modal.dialog(([
	            '<div class="uk-margin uk-modal-content">'+String(content)+'</div>',
	            '<div class="uk-modal-footer uk-text-right"><button class="uk-button js-modal-confirm-cancel">'+options.labels.Cancel+'</button> <button class="uk-button uk-button-primary js-modal-confirm">'+options.labels.Ok+'</button></div>'
	        ]).join(""), options);

	        modal.element.find(".js-modal-confirm, .js-modal-confirm-cancel").on("click", function(){
	            UI.$(this).is('.js-modal-confirm') ? onconfirm() : oncancel();
	            modal.hide();
	        });

	        modal.on('show.uk.modal', function(){
	            setTimeout(function(){
	                modal.element.find('.js-modal-confirm').focus();
	            }, 50);
	        });

	        return modal.show();
	    };

	    UI.modal.prompt = function(text, value, onsubmit, options) {

	        onsubmit = UI.$.isFunction(onsubmit) ? onsubmit : function(value){};
	        options  = UI.$.extend(true, {bgclose:false, keyboard:false, modal:false, labels:UI.modal.labels}, options);

	        var modal = UI.modal.dialog(([
	            text ? '<div class="uk-modal-content uk-form">'+String(text)+'</div>':'',
	            '<div class="uk-margin-small-top uk-modal-content uk-form"><p><input type="text" class="uk-width-1-1"></p></div>',
	            '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">'+options.labels.Cancel+'</button> <button class="uk-button uk-button-primary js-modal-ok">'+options.labels.Ok+'</button></div>'
	        ]).join(""), options),

	        input = modal.element.find("input[type='text']").val(value || '').on('keyup', function(e){
	            if (e.keyCode == 13) {
	                modal.element.find('.js-modal-ok').trigger('click');
	            }
	        });

	        modal.element.find('.js-modal-ok').on('click', function(){
	            if (onsubmit(input.val())!==false){
	                modal.hide();
	            }
	        });

	        return modal.show();
	    };

	    UI.modal.blockUI = function(content, options) {

	        var modal = UI.modal.dialog(([
	            '<div class="uk-margin uk-modal-content">'+String(content || '<div class="uk-text-center">...</div>')+'</div>'
	        ]).join(""), UI.$.extend({bgclose:false, keyboard:false, modal:false}, options));

	        modal.content = modal.element.find('.uk-modal-content:first');

	        return modal.show();
	    };

	    UI.modal.labels = {
	        Ok: 'Ok',
	        Cancel: 'Cancel'
	    };

	    // helper functions
	    function setContent(content, modal){

	        if(!modal) return;

	        if (typeof content === 'object') {

	            // convert DOM object to a jQuery object
	            content = content instanceof jQuery ? content : UI.$(content);

	            if(content.parent().length) {
	                modal.persist = content;
	                modal.persist.data('modalPersistParent', content.parent());
	            }
	        }else if (typeof content === 'string' || typeof content === 'number') {
	                // just insert the data as innerHTML
	                content = UI.$('<div></div>').html(content);
	        }else {
	                // unsupported data type!
	                content = UI.$('<div></div>').html('UIkit.modal Error: Unsupported data type: ' + typeof content);
	        }

	        content.appendTo(modal.element.find('.uk-modal-dialog'));

	        return modal;
	    }

	})(UIkit);

	(function(UI) {

	    "use strict";

	    UI.component('nav', {

	        defaults: {
	            toggle: '>li.uk-parent > a[href="#"]',
	            lists: '>li.uk-parent > ul',
	            multiple: false
	        },

	        boot: function() {

	            // init code
	            UI.ready(function(context) {

	                UI.$('[data-uk-nav]', context).each(function() {
	                    var nav = UI.$(this);

	                    if (!nav.data('nav')) {
	                        var obj = UI.nav(nav, UI.Utils.options(nav.attr('data-uk-nav')));
	                    }
	                });
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.on('click.uk.nav', this.options.toggle, function(e) {
	                e.preventDefault();
	                var ele = UI.$(this);
	                $this.open(ele.parent()[0] == $this.element[0] ? ele : ele.parent("li"));
	            });

	            this.update();

	            UI.domObserve(this.element, function(e) {
	                if ($this.element.find($this.options.lists).not('[role]').length) {
	                    $this.update();
	                }
	            });
	        },

	        update: function() {

	            var $this = this;

	            this.find(this.options.lists).each(function() {

	                var $ele   = UI.$(this).attr('role', 'menu'),
	                    parent = $ele.closest('li'),
	                    active = parent.hasClass("uk-active");

	                if (!parent.data('list-container')) {
	                    $ele.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>');
	                    parent.data('list-container', $ele.parent()[active ? 'removeClass':'addClass']('uk-hidden'));
	                }

	                // Init ARIA
	                parent.attr('aria-expanded', parent.hasClass("uk-open"));

	                if (active) $this.open(parent, true);
	            });
	        },

	        open: function(li, noanimation) {

	            var $this = this, element = this.element, $li = UI.$(li), $container = $li.data('list-container');

	            if (!this.options.multiple) {

	                element.children('.uk-open').not(li).each(function() {

	                    var ele = UI.$(this);

	                    if (ele.data('list-container')) {
	                        ele.data('list-container').stop().animate({height: 0}, function() {
	                            UI.$(this).parent().removeClass('uk-open').end().addClass('uk-hidden');
	                        });
	                    }
	                });
	            }

	            $li.toggleClass('uk-open');

	            // Update ARIA
	            $li.attr('aria-expanded', $li.hasClass('uk-open'));

	            if ($container) {

	                if ($li.hasClass('uk-open')) {
	                    $container.removeClass('uk-hidden');
	                }

	                if (noanimation) {

	                    $container.stop().height($li.hasClass('uk-open') ? 'auto' : 0);

	                    if (!$li.hasClass('uk-open')) {
	                        $container.addClass('uk-hidden');
	                    }

	                    this.trigger('display.uk.check');

	                } else {

	                    $container.stop().animate({
	                        height: ($li.hasClass('uk-open') ? getHeight($container.find('ul:first')) : 0)
	                    }, function() {

	                        if (!$li.hasClass('uk-open')) {
	                            $container.addClass('uk-hidden');
	                        } else {
	                            $container.css('height', '');
	                        }

	                        $this.trigger('display.uk.check');
	                    });
	                }
	            }
	        }
	    });


	    // helper

	    function getHeight(ele) {

	        var $ele = UI.$(ele), height = 'auto';

	        if ($ele.is(':visible')) {
	            height = $ele.outerHeight();
	        } else {

	            var tmp = {
	                position: $ele.css('position'),
	                visibility: $ele.css('visibility'),
	                display: $ele.css('display')
	            };

	            height = $ele.css({position: 'absolute', visibility: 'hidden', display: 'block'}).outerHeight();

	            $ele.css(tmp); // reset element
	        }

	        return height;
	    }

	})(UIkit);

	(function(UI) {

	    "use strict";

	    var scrollpos = {x: window.scrollX, y: window.scrollY},
	        $win      = UI.$win,
	        $doc      = UI.$doc,
	        $html     = UI.$html,
	        Offcanvas = {

	        show: function(element, options) {

	            element = UI.$(element);

	            if (!element.length) return;

	            options = UI.$.extend({mode: 'push'}, options);

	            var $body     = UI.$('body'),
	                bar       = element.find('.uk-offcanvas-bar:first'),
	                rtl       = (UI.langdirection == 'right'),
	                flip      = bar.hasClass('uk-offcanvas-bar-flip') ? -1:1,
	                dir       = flip * (rtl ? -1 : 1),

	                scrollbarwidth =  window.innerWidth - $body.width();

	            scrollpos = {x: window.pageXOffset, y: window.pageYOffset};

	            bar.attr('mode', options.mode);
	            element.addClass('uk-active');

	            $body.css({width: window.innerWidth - scrollbarwidth, height: window.innerHeight}).addClass('uk-offcanvas-page');

	            if (options.mode == 'push' || options.mode == 'reveal') {
	                $body.css((rtl ? 'margin-right' : 'margin-left'), (rtl ? -1 : 1) * (bar.outerWidth() * dir));
	            }

	            if (options.mode == 'reveal') {
	                bar.css('clip', 'rect(0, '+bar.outerWidth()+'px, 100vh, 0)');
	            }

	            $html.css('margin-top', scrollpos.y * -1).width(); // .width() - force redraw


	            bar.addClass('uk-offcanvas-bar-show');

	            this._initElement(element);

	            bar.trigger('show.uk.offcanvas', [element, bar]);

	            // Update ARIA
	            element.attr('aria-hidden', 'false');
	        },

	        hide: function(force) {

	            var $body = UI.$('body'),
	                panel = UI.$('.uk-offcanvas.uk-active'),
	                rtl   = (UI.langdirection == 'right'),
	                bar   = panel.find('.uk-offcanvas-bar:first'),
	                finalize = function() {
	                    $body.removeClass('uk-offcanvas-page').css({width: '', height: '', marginLeft: '', marginRight: ''});
	                    panel.removeClass('uk-active');

	                    bar.removeClass('uk-offcanvas-bar-show');
	                    $html.css('margin-top', '');
	                    window.scrollTo(scrollpos.x, scrollpos.y);
	                    bar.trigger('hide.uk.offcanvas', [panel, bar]);

	                    // Update ARIA
	                    panel.attr('aria-hidden', 'true');
	                };

	            if (!panel.length) return;
	            if (bar.attr('mode') == 'none') force = true;

	            if (UI.support.transition && !force) {

	                $body.one(UI.support.transition.end, function() {
	                    finalize();
	                }).css((rtl ? 'margin-right' : 'margin-left'), '');

	                if (bar.attr('mode') == 'reveal') {
	                    bar.css('clip', '');
	                }

	                setTimeout(function(){
	                    bar.removeClass('uk-offcanvas-bar-show');
	                }, 0);

	            } else {
	                finalize();
	            }
	        },

	        _initElement: function(element) {

	            if (element.data('OffcanvasInit')) return;

	            element.on('click.uk.offcanvas swipeRight.uk.offcanvas swipeLeft.uk.offcanvas', function(e) {

	                var target = UI.$(e.target);

	                if (!e.type.match(/swipe/)) {

	                    if (!target.hasClass('uk-offcanvas-close')) {
	                        if (target.hasClass('uk-offcanvas-bar')) return;
	                        if (target.parents('.uk-offcanvas-bar:first').length) return;
	                    }
	                }

	                e.stopImmediatePropagation();
	                Offcanvas.hide();
	            });

	            element.on('click', 'a[href*="#"]', function(e){

	                var link = UI.$(this),
	                    href = link.attr('href');

	                if (href == '#') {
	                    return;
	                }

	                UI.$doc.one('hide.uk.offcanvas', function() {

	                    var target;

	                    try {
	                        target = UI.$(link[0].hash);
	                    } catch (e){
	                        target = '';
	                    }

	                    if (!target.length) {
	                        target = UI.$('[name="'+link[0].hash.replace('#','')+'"]');
	                    }

	                    if (target.length && UI.Utils.scrollToElement) {
	                        UI.Utils.scrollToElement(target, UI.Utils.options(link.attr('data-uk-smooth-scroll') || '{}'));
	                    } else {
	                        window.location.href = href;
	                    }
	                });

	                Offcanvas.hide();
	            });

	            element.data('OffcanvasInit', true);
	        }
	    };

	    UI.component('offcanvasTrigger', {

	        boot: function() {

	            // init code
	            $html.on('click.offcanvas.uikit', '[data-uk-offcanvas]', function(e) {

	                e.preventDefault();

	                var ele = UI.$(this);

	                if (!ele.data('offcanvasTrigger')) {
	                    var obj = UI.offcanvasTrigger(ele, UI.Utils.options(ele.attr('data-uk-offcanvas')));
	                    ele.trigger("click");
	                }
	            });

	            $html.on('keydown.uk.offcanvas', function(e) {

	                if (e.keyCode === 27) { // ESC
	                    Offcanvas.hide();
	                }
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.options = UI.$.extend({
	                target: $this.element.is('a') ? $this.element.attr('href') : false,
	                mode: 'push'
	            }, this.options);

	            this.on('click', function(e) {
	                e.preventDefault();
	                Offcanvas.show($this.options.target, $this.options);
	            });
	        }
	    });

	    UI.offcanvas = Offcanvas;

	})(UIkit);

	(function(UI) {

	    "use strict";

	    var Animations;

	    UI.component('switcher', {

	        defaults: {
	            connect   : false,
	            toggle    : '>*',
	            active    : 0,
	            animation : false,
	            duration  : 200,
	            swiping   : true
	        },

	        animating: false,

	        boot: function() {

	            // init code
	            UI.ready(function(context) {

	                UI.$('[data-uk-switcher]', context).each(function() {
	                    var switcher = UI.$(this);

	                    if (!switcher.data('switcher')) {
	                        var obj = UI.switcher(switcher, UI.Utils.options(switcher.attr('data-uk-switcher')));
	                    }
	                });
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.on('click.uk.switcher', this.options.toggle, function(e) {
	                e.preventDefault();
	                $this.show(this);
	            });

	            if (!this.options.connect) {
	                return;
	            }

	            this.connect = UI.$(this.options.connect);

	            if (!this.connect.length) {
	                return;
	            }

	            this.connect.on('click.uk.switcher', '[data-uk-switcher-item]', function(e) {

	                e.preventDefault();

	                var item = UI.$(this).attr('data-uk-switcher-item');

	                if ($this.index == item) return;

	                switch(item) {
	                    case 'next':
	                    case 'previous':
	                        $this.show($this.index + (item=='next' ? 1:-1));
	                        break;
	                    default:
	                        $this.show(parseInt(item, 10));
	                }
	            });

	            if (this.options.swiping) {

	                this.connect.on('swipeRight swipeLeft', function(e) {
	                    e.preventDefault();
	                    if (!window.getSelection().toString()) {
	                        $this.show($this.index + (e.type == 'swipeLeft' ? 1 : -1));
	                    }
	                });
	            }

	            this.update();
	        },

	        update: function() {

	            this.connect.children().removeClass('uk-active').attr('aria-hidden', 'true');

	            var toggles = this.find(this.options.toggle),
	                active  = toggles.filter('.uk-active');

	            if (active.length) {
	                this.show(active, false);
	            } else {

	                if (this.options.active===false) return;

	                active = toggles.eq(this.options.active);
	                this.show(active.length ? active : toggles.eq(0), false);
	            }

	            // Init ARIA for toggles
	            toggles.not(active).attr('aria-expanded', 'false');
	            active.attr('aria-expanded', 'true');
	        },

	        show: function(tab, animate) {

	            if (this.animating) {
	                return;
	            }

	            var toggles = this.find(this.options.toggle);

	            if (isNaN(tab)) {
	                tab = UI.$(tab);
	            } else {
	                tab = tab < 0 ? toggles.length-1 : tab;
	                tab = toggles.eq(toggles[tab] ? tab : 0);
	            }

	            var $this     = this,
	                active    = UI.$(tab),
	                animation = Animations[this.options.animation] || function(current, next) {

	                    if (!$this.options.animation) {
	                        return Animations.none.apply($this);
	                    }

	                    var anim = $this.options.animation.split(',');

	                    if (anim.length == 1) {
	                        anim[1] = anim[0];
	                    }

	                    anim[0] = anim[0].trim();
	                    anim[1] = anim[1].trim();

	                    return coreAnimation.apply($this, [anim, current, next]);
	                };

	            if (animate===false || !UI.support.animation) {
	                animation = Animations.none;
	            }

	            if (active.hasClass("uk-disabled")) return;

	            // Update ARIA for Toggles
	            toggles.attr('aria-expanded', 'false');
	            active.attr('aria-expanded', 'true');

	            toggles.filter(".uk-active").removeClass("uk-active");
	            active.addClass("uk-active");

	            if (this.options.connect && this.connect.length) {

	                this.index = this.find(this.options.toggle).index(active);

	                if (this.index == -1 ) {
	                    this.index = 0;
	                }

	                this.connect.each(function() {

	                    var container = UI.$(this),
	                        children  = UI.$(container.children()),
	                        current   = UI.$(children.filter('.uk-active')),
	                        next      = UI.$(children.eq($this.index));

	                        $this.animating = true;

	                        animation.apply($this, [current, next]).then(function(){

	                            current.removeClass("uk-active");
	                            next.addClass("uk-active");

	                            // Update ARIA for connect
	                            current.attr('aria-hidden', 'true');
	                            next.attr('aria-hidden', 'false');

	                            UI.Utils.checkDisplay(next, true);

	                            $this.animating = false;

	                        });
	                });
	            }

	            this.trigger("show.uk.switcher", [active]);
	        }
	    });

	    Animations = {

	        'none': function() {
	            var d = UI.$.Deferred();
	            d.resolve();
	            return d.promise();
	        },

	        'fade': function(current, next) {
	            return coreAnimation.apply(this, ['uk-animation-fade', current, next]);
	        },

	        'slide-bottom': function(current, next) {
	            return coreAnimation.apply(this, ['uk-animation-slide-bottom', current, next]);
	        },

	        'slide-top': function(current, next) {
	            return coreAnimation.apply(this, ['uk-animation-slide-top', current, next]);
	        },

	        'slide-vertical': function(current, next, dir) {

	            var anim = ['uk-animation-slide-top', 'uk-animation-slide-bottom'];

	            if (current && current.index() > next.index()) {
	                anim.reverse();
	            }

	            return coreAnimation.apply(this, [anim, current, next]);
	        },

	        'slide-left': function(current, next) {
	            return coreAnimation.apply(this, ['uk-animation-slide-left', current, next]);
	        },

	        'slide-right': function(current, next) {
	            return coreAnimation.apply(this, ['uk-animation-slide-right', current, next]);
	        },

	        'slide-horizontal': function(current, next, dir) {

	            var anim = ['uk-animation-slide-right', 'uk-animation-slide-left'];

	            if (current && current.index() > next.index()) {
	                anim.reverse();
	            }

	            return coreAnimation.apply(this, [anim, current, next]);
	        },

	        'scale': function(current, next) {
	            return coreAnimation.apply(this, ['uk-animation-scale-up', current, next]);
	        }
	    };

	    UI.switcher.animations = Animations;


	    // helpers

	    function coreAnimation(cls, current, next) {

	        var d = UI.$.Deferred(), clsIn = cls, clsOut = cls, release;

	        if (next[0]===current[0]) {
	            d.resolve();
	            return d.promise();
	        }

	        if (typeof(cls) == 'object') {
	            clsIn  = cls[0];
	            clsOut = cls[1] || cls[0];
	        }

	        UI.$body.css('overflow-x', 'hidden'); // fix scroll jumping in iOS

	        release = function() {

	            if (current) current.hide().removeClass('uk-active '+clsOut+' uk-animation-reverse');

	            next.addClass(clsIn).one(UI.support.animation.end, function() {

	                setTimeout(function () {
	                    next.removeClass(''+clsIn+'').css({opacity:'', display:''});
	                }, 0);

	                d.resolve();

	                UI.$body.css('overflow-x', '');

	                if (current) current.css({opacity:'', display:''});

	            }.bind(this)).show();
	        };

	        next.css('animation-duration', this.options.duration+'ms');

	        if (current && current.length) {

	            current.css('animation-duration', this.options.duration+'ms');

	            current.css('display', 'none').addClass(clsOut+' uk-animation-reverse').one(UI.support.animation.end, function() {
	                release();
	            }.bind(this)).css('display', '');

	        } else {
	            next.addClass('uk-active');
	            release();
	        }

	        return d.promise();
	    }

	})(UIkit);

	(function(UI) {

	    "use strict";

	    UI.component('tab', {

	        defaults: {
	            target    : '>li:not(.uk-tab-responsive, .uk-disabled)',
	            connect   : false,
	            active    : 0,
	            animation : false,
	            duration  : 200,
	            swiping   : true
	        },

	        boot: function() {

	            // init code
	            UI.ready(function(context) {

	                UI.$('[data-uk-tab]', context).each(function() {

	                    var tab = UI.$(this);

	                    if (!tab.data('tab')) {
	                        var obj = UI.tab(tab, UI.Utils.options(tab.attr('data-uk-tab')));
	                    }
	                });
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.current = false;

	            this.on('click.uk.tab', this.options.target, function(e) {

	                e.preventDefault();

	                if ($this.switcher && $this.switcher.animating) {
	                    return;
	                }

	                var current = $this.find($this.options.target).not(this);

	                current.removeClass('uk-active').blur();

	                $this.trigger('change.uk.tab', [UI.$(this).addClass('uk-active'), $this.current]);

	                $this.current = UI.$(this);

	                // Update ARIA
	                if (!$this.options.connect) {
	                    current.attr('aria-expanded', 'false');
	                    UI.$(this).attr('aria-expanded', 'true');
	                }
	            });

	            if (this.options.connect) {
	                this.connect = UI.$(this.options.connect);
	            }

	            // init responsive tab
	            this.responsivetab = UI.$('<li class="uk-tab-responsive uk-active"><a></a></li>').append('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>');

	            this.responsivetab.dropdown = this.responsivetab.find('.uk-dropdown');
	            this.responsivetab.lst      = this.responsivetab.dropdown.find('ul');
	            this.responsivetab.caption  = this.responsivetab.find('a:first');

	            if (this.element.hasClass('uk-tab-bottom')) this.responsivetab.dropdown.addClass('uk-dropdown-up');

	            // handle click
	            this.responsivetab.lst.on('click.uk.tab', 'a', function(e) {

	                e.preventDefault();
	                e.stopPropagation();

	                var link = UI.$(this);

	                $this.element.children('li:not(.uk-tab-responsive)').eq(link.data('index')).trigger('click');
	            });

	            this.on('show.uk.switcher change.uk.tab', function(e, tab) {
	                $this.responsivetab.caption.html(tab.text());
	            });

	            this.element.append(this.responsivetab);

	            // init UIkit components
	            if (this.options.connect) {
	                
	                this.switcher = UI.switcher(this.element, {
	                    toggle    : '>li:not(.uk-tab-responsive)',
	                    connect   : this.options.connect,
	                    active    : this.options.active,
	                    animation : this.options.animation,
	                    duration  : this.options.duration,
	                    swiping   : this.options.swiping
	                });
	            }

	            UI.dropdown(this.responsivetab, {mode: 'click', preventflip: 'y'});

	            // init
	            $this.trigger('change.uk.tab', [this.element.find(this.options.target).not('.uk-tab-responsive').filter('.uk-active')]);

	            this.check();

	            UI.$win.on('resize orientationchange', UI.Utils.debounce(function(){
	                if ($this.element.is(':visible'))  $this.check();
	            }, 100));

	            this.on('display.uk.check', function(){
	                if ($this.element.is(':visible'))  $this.check();
	            });
	        },

	        check: function() {

	            var children = this.element.children('li:not(.uk-tab-responsive)').removeClass('uk-hidden');

	            if (!children.length) {
	                this.responsivetab.addClass('uk-hidden');
	                return;
	            }

	            var top          = (children.eq(0).offset().top + Math.ceil(children.eq(0).height()/2)),
	                doresponsive = false,
	                item, link, clone;

	            this.responsivetab.lst.empty();

	            children.each(function(){

	                if (UI.$(this).offset().top > top) {
	                    doresponsive = true;
	                }
	            });

	            if (doresponsive) {

	                for (var i = 0; i < children.length; i++) {

	                    item  = UI.$(children.eq(i));
	                    link  = item.find('a');

	                    if (item.css('float') != 'none' && !item.attr('uk-dropdown')) {

	                        if (!item.hasClass('uk-disabled')) {

	                            clone = UI.$(item[0].outerHTML);
	                            clone.find('a').data('index', i);

	                            this.responsivetab.lst.append(clone);
	                        }

	                        item.addClass('uk-hidden');
	                    }
	                }
	            }

	            this.responsivetab[this.responsivetab.lst.children('li').length ? 'removeClass':'addClass']('uk-hidden');
	        }
	    });

	})(UIkit);

	(function(UI){

	    "use strict";

	    UI.component('cover', {

	        defaults: {
	            automute : true
	        },

	        boot: function() {

	            // auto init
	            UI.ready(function(context) {

	                UI.$('[data-uk-cover]', context).each(function(){

	                    var ele = UI.$(this);

	                    if(!ele.data('cover')) {
	                        var plugin = UI.cover(ele, UI.Utils.options(ele.attr('data-uk-cover')));
	                    }
	                });
	            });
	        },

	        init: function() {

	            this.parent = this.element.parent();

	            UI.$win.on('load resize orientationchange', UI.Utils.debounce(function(){
	                this.check();
	            }.bind(this), 100));

	            this.on('display.uk.check', function(e) {
	                if (this.element.is(':visible')) this.check();
	            }.bind(this));

	            this.check();

	            if (this.element.is('iframe') && this.options.automute) {

	                var src = this.element.attr('src');

	                this.element.attr('src', '').on('load', function(){
	                    this.contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}', '*');
	                }).attr('src', [src, (src.indexOf('?') > -1 ? '&':'?'), 'enablejsapi=1&api=1'].join(''));
	            }
	        },

	        check: function() {

	            this.element.css({ width  : '', height : '' });

	            this.dimension = {w: this.element.width(), h: this.element.height()};

	            if (this.element.attr('width') && !isNaN(this.element.attr('width'))) {
	                this.dimension.w = this.element.attr('width');
	            }

	            if (this.element.attr('height') && !isNaN(this.element.attr('height'))) {
	                this.dimension.h = this.element.attr('height');
	            }

	            this.ratio = this.dimension.w / this.dimension.h;

	            var w = this.parent.width(), h = this.parent.height(), width, height;

	            // if element height < parent height (gap underneath)
	            if ((w / this.ratio) < h) {

	                width  = Math.ceil(h * this.ratio);
	                height = h;

	            // element width < parent width (gap to right)
	            } else {

	                width  = w;
	                height = Math.ceil(w / this.ratio);
	            }

	            this.element.css({ width  : width, height : height });
	        }
	    });

	})(UIkit);


/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'UkIcon',
	  props: {
	    name: { type: String },
	    size: { type: String },
	    hover: { type: Boolean },
	    button: { type: Boolean },
	    spin: { type: Boolean },
	    justify: { type: Boolean }
	  },
	  render: function render(h) {
	    var data = {
	      'uk-icon': true,
	      'uk-icon-hover': this.hover,
	      'uk-icon-button': this.button,
	      'uk-icon-justify': this.justify,
	      'uk-icon-spin': this.spin
	    };
	    if (this.name) {
	      var iconName = 'uk-icon-' + this.name;
	      data[iconName] = true;
	      if (this.size) {
	        var iconSize = 'uk-icon-' + this.size;
	        data[iconSize] = true;
	      }
	    }
	    return this.name ? h(
	      'i',
	      { 'class': data },
	      []
	    ) : this.$slots.default;
	  }
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _babelHelperVueJsxMergeProps = __webpack_require__(12);

	var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

	__webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports.default = {
	  name: 'UkButton',
	  props: {
	    active: {
	      type: Boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    color: {
	      type: String,
	      default: ''
	    },
	    icon: {
	      type: String
	    },
	    size: {
	      type: String,
	      default: ''
	    },
	    width: {
	      type: String,
	      default: ''
	    }
	  },
	  render: function render(h) {
	    var _class,
	        _this = this;

	    var data = {
	      class: (_class = {
	        'uk-button': true,
	        'uk-active': this.active
	      }, _defineProperty(_class, 'uk-width-' + this.width, this.width), _defineProperty(_class, 'uk-button-primary', this.color === 'primary'), _defineProperty(_class, 'uk-button-success', this.color === 'success'), _defineProperty(_class, 'uk-button-danger', this.color === 'danger'), _defineProperty(_class, 'uk-button-link', this.color === 'link'), _defineProperty(_class, 'uk-button-mini', this.size === 'mini'), _defineProperty(_class, 'uk-button-small', this.size === 'small'), _defineProperty(_class, 'uk-button-large', this.size === 'large'), _class)
	    };
	    var clickHandler = function clickHandler(e) {
	      e.preventDefault();
	      _this.$emit('click');
	    };
	    var cssIcon = 'uk-icon-' + this.icon;
	    var _when = function _when(condition, fn) {
	      if (condition) {
	        return fn;
	      }
	    };
	    return h(
	      'button',
	      (0, _babelHelperVueJsxMergeProps2.default)([{
	        attrs: { disabled: this.disabled
	        },
	        on: {
	          'click': clickHandler
	        }
	      }, data]),
	      [h(
	        'uk-icon',
	        {
	          attrs: { name: this.icon }
	        },
	        []
	      ), ' ', this.$slots.default]
	    );
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/

	module.exports = function mergeJSXProps (objs) {
	  return objs.reduce(function (a, b) {
	    var aa, bb, key, nestedKey, temp
	    for (key in b) {
	      aa = a[key]
	      bb = b[key]
	      if (aa && nestRE.test(key)) {
	        // normalize class
	        if (key === 'class') {
	          if (typeof aa === 'string') {
	            temp = aa
	            a[key] = aa = {}
	            aa[temp] = true
	          }
	          if (typeof bb === 'string') {
	            temp = bb
	            b[key] = bb = {}
	            bb[temp] = true
	          }
	        }
	        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
	          // merge functions
	          for (nestedKey in bb) {
	            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey])
	          }
	        } else if (Array.isArray(aa)) {
	          a[key] = aa.concat(bb)
	        } else if (Array.isArray(bb)) {
	          a[key] = [aa].concat(bb)
	        } else {
	          for (nestedKey in bb) {
	            aa[nestedKey] = bb[nestedKey]
	          }
	        }
	      } else {
	        a[key] = b[key]
	      }
	    }
	    return a
	  }, {})
	}

	function mergeFn (a, b) {
	  return function () {
	    a.apply(this, arguments)
	    b.apply(this, arguments)
	  }
	}


/***/ },
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['type'],
	  render: function render(h) {
	    var attrs = {};
	    if (this.type === 'checkbox') attrs['data-uk-button-checkbox'] = true;

	    if (this.type === 'radio') attrs['data-uk-button-radio'] = true;

	    return h('div', {
	      class: {
	        'uk-button-group': true
	      },
	      attrs: attrs
	    }, this.$slots.default);
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(17)

	/* template */
	var __vue_template__ = __webpack_require__(18)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['title']
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "uk-panel uk-panel-box"
	  }, [_vm._t("header", [(_vm.title) ? _c('h3', {
	    staticClass: "tm-article-subtitle"
	  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e()]), _vm._v(" "), _vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'UkNav',
	  props: {
	    items: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    textField: {
	      type: String,
	      default: 'label'
	    },
	    childrenField: {
	      type: String,
	      default: 'items'
	    }
	  },
	  methods: {
	    itemClickHandler: function itemClickHandler(item) {
	      this.$emit('itemclick', item);
	    }
	  },
	  render: function render(h) {
	    var _this = this;

	    var render_item_content = function render_item_content(item) {
	      return item.header ? h(
	        'span',
	        null,
	        [item.icon && h(
	          'i',
	          { 'class': 'uk-margin-right uk-icon uk-icon-' + item.icon },
	          []
	        ), item[_this.textField]]
	      ) : h(
	        'a',
	        {
	          attrs: { href: '#'
	          },
	          on: {
	            'click': function click() {
	              return _this.itemClickHandler(item);
	            }
	          }
	        },
	        [item.icon && h(
	          'i',
	          { 'class': 'uk-margin-right uk-icon uk-icon-' + item.icon },
	          []
	        ), item[_this.textField]]
	      );
	    };

	    var render_children = function render_children(children) {
	      return h(
	        'ul',
	        { 'class': 'uk-nav-sub' },
	        [children.map(function (item) {
	          return h(
	            'li',
	            { 'class': {
	                'uk-nav-header': item.header,
	                'uk-parent': item[_this.childrenField]
	              } },
	            [render_item_content(item), item[_this.childrenField] && render_children(item[_this.childrenField])]
	          );
	        })]
	      );
	    };

	    return h(
	      'ul',
	      { 'class': 'uk-nav uk-nav-parent-icon', attrs: { 'data-uk-nav': true }
	      },
	      [this[this.childrenField].map(function (item) {
	        return h(
	          'li',
	          { 'class': {
	              'uk-nav-header': item.header,
	              'uk-parent': item[_this.childrenField]
	            } },
	          [render_item_content(item), item[_this.childrenField] && render_children(item[_this.childrenField])]
	        );
	      })]
	    );
	  }
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(21)

	/* template */
	var __vue_template__ = __webpack_require__(25)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(22);

	__webpack_require__(23);

	exports.default = {
	  name: 'UkDatePicker',
	  props: {
	    value: { type: String },
	    weekstart: {
	      type: Number,
	      default: 1
	    },
	    mobile: {
	      type: Boolean,
	      default: false
	    },
	    i18n: {
	      type: Object,
	      default: function _default() {
	        return {
	          months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
	          weekdays: ['日', '一', '二', '三', '四', '五', '六']
	        };
	      }
	    },
	    format: {
	      type: String,
	      default: 'YYYY-MM-DD'
	    },
	    offsettop: {
	      type: Number,
	      default: 5
	    },
	    maxDate: {
	      type: Boolean,
	      default: false
	    },
	    minDate: {
	      type: Boolean,
	      default: false
	    },
	    pos: {
	      type: String,
	      default: 'auto'
	    }
	  },
	  computed: {
	    options: function options() {
	      return JSON.stringify({
	        weekstart: this.weekstart,
	        mobile: this.mobile,
	        i18n: this.i18n,
	        format: this.format,
	        offsettop: this.offsetop,
	        maxDate: this.maxDate,
	        minDate: this.minDate,
	        pos: this.pos
	      });
	    }
	  }
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
	(function(addon) {

	    var component;

	    if (window.UIkit) {
	        component = addon(UIkit);
	    }

	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function(){
	            return component || addon(UIkit);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }

	})(function(UI){

	    "use strict";

	    // Datepicker

	    var active = false, dropdown, moment;

	    UI.component('datepicker', {

	        defaults: {
	            mobile: false,
	            weekstart: 1,
	            i18n: {
	                months        : ['January','February','March','April','May','June','July','August','September','October','November','December'],
	                weekdays      : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
	            },
	            format: 'YYYY-MM-DD',
	            offsettop: 5,
	            maxDate: false,
	            minDate: false,
	            pos: 'auto',
	            template: function(data, opts) {

	                var content = '', i;

	                content += '<div class="uk-datepicker-nav">';
	                content += '<a href="" class="uk-datepicker-previous"></a>';
	                content += '<a href="" class="uk-datepicker-next"></a>';

	                if (UI.formSelect) {

	                    var currentyear = (new Date()).getFullYear(), options = [], months, years, minYear, maxYear;

	                    for (i=0;i<opts.i18n.months.length;i++) {
	                        if(i==data.month) {
	                            options.push('<option value="'+i+'" selected>'+opts.i18n.months[i]+'</option>');
	                        } else {
	                            options.push('<option value="'+i+'">'+opts.i18n.months[i]+'</option>');
	                        }
	                    }

	                    months = '<span class="uk-form-select">'+ opts.i18n.months[data.month] + '<select class="update-picker-month">'+options.join('')+'</select></span>';

	                    // --

	                    options = [];

	                    minYear = data.minDate ? data.minDate.year() : currentyear - 50;
	                    maxYear = data.maxDate ? data.maxDate.year() : currentyear + 20;

	                    for (i=minYear;i<=maxYear;i++) {
	                        if (i == data.year) {
	                            options.push('<option value="'+i+'" selected>'+i+'</option>');
	                        } else {
	                            options.push('<option value="'+i+'">'+i+'</option>');
	                        }
	                    }

	                    years  = '<span class="uk-form-select">'+ data.year + '<select class="update-picker-year">'+options.join('')+'</select></span>';

	                    content += '<div class="uk-datepicker-heading">'+ months + ' ' + years +'</div>';

	                } else {
	                    content += '<div class="uk-datepicker-heading">'+ opts.i18n.months[data.month] +' '+ data.year+'</div>';
	                }

	                content += '</div>';

	                content += '<table class="uk-datepicker-table">';
	                content += '<thead>';
	                for(i = 0; i < data.weekdays.length; i++) {
	                    if (data.weekdays[i]) {
	                        content += '<th>'+data.weekdays[i]+'</th>';
	                    }
	                }
	                content += '</thead>';

	                content += '<tbody>';
	                for(i = 0; i < data.days.length; i++) {
	                    if (data.days[i] && data.days[i].length){
	                        content += '<tr>';
	                        for(var d = 0; d < data.days[i].length; d++) {
	                            if (data.days[i][d]) {
	                                var day = data.days[i][d],
	                                    cls = [];

	                                if(!day.inmonth) cls.push("uk-datepicker-table-muted");
	                                if(day.selected) cls.push("uk-active");
	                                if(day.disabled) cls.push('uk-datepicker-date-disabled uk-datepicker-table-muted');

	                                content += '<td><a href="" class="'+cls.join(" ")+'" data-date="'+day.day.format()+'">'+day.day.format("D")+'</a></td>';
	                            }
	                        }
	                        content += '</tr>';
	                    }
	                }
	                content += '</tbody>';

	                content += '</table>';

	                return content;
	            }
	        },

	        boot: function() {

	            UI.$win.on('resize orientationchange', function() {

	                if (active) {
	                    active.hide();
	                }
	            });

	            // init code
	            UI.$html.on('focus.datepicker.uikit', '[data-uk-datepicker]', function(e) {

	                var ele = UI.$(this);

	                if (!ele.data('datepicker')) {
	                    e.preventDefault();
	                    UI.datepicker(ele, UI.Utils.options(ele.attr('data-uk-datepicker')));
	                    ele.trigger('focus');
	                }
	            });

	            UI.$html.on('click focus', '*', function(e) {

	                var target = UI.$(e.target);

	                if (active && target[0] != dropdown[0] && !target.data('datepicker') && !target.parents('.uk-datepicker:first').length) {
	                    active.hide();
	                }
	            });
	        },

	        init: function() {

	            // use native datepicker on touch devices
	            if (UI.support.touch && this.element.attr('type')=='date' && !this.options.mobile) {
	                return;
	            }

	            var $this = this;

	            this.current  = this.element.val() ? moment(this.element.val(), this.options.format) : moment();

	            this.on('click focus', function(){
	                if (active!==$this) $this.pick(this.value ? this.value:'');
	            }).on('change', function(){

	                if ($this.element.val() && !moment($this.element.val(), $this.options.format).isValid()) {
	                   $this.element.val(moment().format($this.options.format));
	                }
	            });

	            // init dropdown
	            if (!dropdown) {

	                dropdown = UI.$('<div class="uk-dropdown uk-datepicker"></div>');

	                dropdown.on('click', '.uk-datepicker-next, .uk-datepicker-previous, [data-date]', function(e){

	                    e.stopPropagation();
	                    e.preventDefault();

	                    var ele = UI.$(this);

	                    if (ele.hasClass('uk-datepicker-date-disabled')) return false;

	                    if (ele.is('[data-date]')) {
	                        active.current = moment(ele.data("date"));
	                        active.element.val(active.current.isValid() ? active.current.format(active.options.format) : null).trigger("change");
	                        active.hide();
	                    } else {
	                       active.add((ele.hasClass("uk-datepicker-next") ? 1:-1), "months");
	                    }
	                });

	                dropdown.on('change', '.update-picker-month, .update-picker-year', function(){

	                    var select = UI.$(this);
	                    active[select.is('.update-picker-year') ? 'setYear':'setMonth'](Number(select.val()));
	                });

	                dropdown.appendTo('body');
	            }
	        },

	        pick: function(initdate) {

	            var offset = this.element.offset(),
	                css    = {left: offset.left, right:''};

	            this.current  = isNaN(initdate) ? moment(initdate, this.options.format):moment();
	            this.initdate = this.current.format("YYYY-MM-DD");

	            this.update();

	            if (UI.langdirection == 'right') {
	                css.right = window.innerWidth - (css.left + this.element.outerWidth());
	                css.left  = '';
	            }

	            var posTop    = (offset.top - this.element.outerHeight() + this.element.height()) - this.options.offsettop - dropdown.outerHeight(),
	                posBottom = offset.top + this.element.outerHeight() + this.options.offsettop;

	            css.top = posBottom;

	            if (this.options.pos == 'top') {
	                css.top = posTop;
	            } else if(this.options.pos == 'auto' && (window.innerHeight - posBottom - dropdown.outerHeight() < 0 && posTop >= 0) ) {
	                css.top = posTop;
	            }

	            dropdown.css(css).show();
	            this.trigger('show.uk.datepicker');

	            active = this;
	        },

	        add: function(unit, value) {
	            this.current.add(unit, value);
	            this.update();
	        },

	        setMonth: function(month) {
	            this.current.month(month);
	            this.update();
	        },

	        setYear: function(year) {
	            this.current.year(year);
	            this.update();
	        },

	        update: function() {

	            var data = this.getRows(this.current.year(), this.current.month()),
	                tpl  = this.options.template(data, this.options);

	            dropdown.html(tpl);

	            this.trigger('update.uk.datepicker');
	        },

	        getRows: function(year, month) {

	            var opts   = this.options,
	                now    = moment().format('YYYY-MM-DD'),
	                days   = [31, (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month],
	                before = new Date(year, month, 1, 12).getDay(),
	                data   = {month:month, year:year, weekdays:[], days:[], maxDate:false, minDate:false},
	                row    = [];

	            // We need these to be midday to avoid issues from DST transition protection.
	            if (opts.maxDate!==false){
	                data.maxDate = isNaN(opts.maxDate) ? moment(opts.maxDate, opts.format).startOf('day').hours(12) : moment().add(opts.maxDate, 'days').startOf('day').hours(12);
	            }

	            if (opts.minDate!==false){
	                data.minDate = isNaN(opts.minDate) ? moment(opts.minDate, opts.format).startOf('day').hours(12) : moment().add(opts.minDate-1, 'days').startOf('day').hours(12);
	            }

	            data.weekdays = (function(){

	                for (var i=0, arr=[]; i < 7; i++) {

	                    var day = i + (opts.weekstart || 0);

	                    while (day >= 7) {
	                        day -= 7;
	                    }

	                    arr.push(opts.i18n.weekdays[day]);
	                }

	                return arr;
	            })();

	            if (opts.weekstart && opts.weekstart > 0) {
	                before -= opts.weekstart;
	                if (before < 0) {
	                    before += 7;
	                }
	            }

	            var cells = days + before, after = cells;

	            while(after > 7) { after -= 7; }

	            cells += 7 - after;

	            var day, isDisabled, isSelected, isToday, isInMonth;

	            for (var i = 0, r = 0; i < cells; i++) {

	                day        = new Date(year, month, 1 + (i - before), 12);
	                isDisabled = (data.minDate && data.minDate > day) || (data.maxDate && day > data.maxDate);
	                isInMonth  = !(i < before || i >= (days + before));

	                day = moment(day);

	                isSelected = this.initdate == day.format('YYYY-MM-DD');
	                isToday    = now == day.format('YYYY-MM-DD');

	                row.push({selected: isSelected, today: isToday, disabled: isDisabled, day:day, inmonth:isInMonth});

	                if (++r === 7) {
	                    data.days.push(row);
	                    row = [];
	                    r = 0;
	                }
	            }

	            return data;
	        },

	        hide: function() {

	            if (active && active === this) {
	                dropdown.hide();
	                active = false;

	                this.trigger('hide.uk.datepicker');
	            }
	        }
	    });

	    //! moment.js
	    //! version : 2.8.3
	    //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
	    //! license : MIT
	    //! momentjs.com

	    moment = (function (undefined) {
	        /************************************
	            Constants
	        ************************************/
	        var moment,
	            VERSION = '2.8.3',
	            // the global-scope this is NOT the global object in Node.js
	            globalScope = typeof global !== 'undefined' ? global : this,
	            oldGlobalMoment,
	            round = Math.round,
	            hasOwnProperty = Object.prototype.hasOwnProperty,
	            i,

	            YEAR = 0,
	            MONTH = 1,
	            DATE = 2,
	            HOUR = 3,
	            MINUTE = 4,
	            SECOND = 5,
	            MILLISECOND = 6,

	            // internal storage for locale config files
	            locales = {},

	            // extra moment internal properties (plugins register props here)
	            momentProperties = [],

	            // check for nodeJS
	            hasModule = (typeof module !== 'undefined' && module.exports),

	            // ASP.NET json date format regex
	            aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
	            aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,

	            // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
	            // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
	            isoDurationRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,

	            // format tokens
	            formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,
	            localFormattingTokens = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,

	            // parsing token regexes
	            parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
	            parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
	            parseTokenOneToFourDigits = /\d{1,4}/, // 0 - 9999
	            parseTokenOneToSixDigits = /[+\-]?\d{1,6}/, // -999,999 - 999,999
	            parseTokenDigits = /\d+/, // nonzero number of digits
	            parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, // any word (or two) characters or numbers including two/three word month in arabic.
	            parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
	            parseTokenT = /T/i, // T (ISO separator)
	            parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
	            parseTokenOrdinal = /\d{1,2}/,

	            //strict parsing regexes
	            parseTokenOneDigit = /\d/, // 0 - 9
	            parseTokenTwoDigits = /\d\d/, // 00 - 99
	            parseTokenThreeDigits = /\d{3}/, // 000 - 999
	            parseTokenFourDigits = /\d{4}/, // 0000 - 9999
	            parseTokenSixDigits = /[+-]?\d{6}/, // -999,999 - 999,999
	            parseTokenSignedNumber = /[+-]?\d+/, // -inf - inf

	            // iso 8601 regex
	            // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
	            isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,

	            isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',

	            isoDates = [
	                ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
	                ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
	                ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
	                ['GGGG-[W]WW', /\d{4}-W\d{2}/],
	                ['YYYY-DDD', /\d{4}-\d{3}/]
	            ],

	            // iso time formats and regexes
	            isoTimes = [
	                ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
	                ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
	                ['HH:mm', /(T| )\d\d:\d\d/],
	                ['HH', /(T| )\d\d/]
	            ],

	            // timezone chunker '+10:00' > ['10', '00'] or '-1530' > ['-15', '30']
	            parseTimezoneChunker = /([\+\-]|\d\d)/gi,

	            // getter and setter names
	            proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
	            unitMillisecondFactors = {
	                'Milliseconds' : 1,
	                'Seconds' : 1e3,
	                'Minutes' : 6e4,
	                'Hours' : 36e5,
	                'Days' : 864e5,
	                'Months' : 2592e6,
	                'Years' : 31536e6
	            },

	            unitAliases = {
	                ms : 'millisecond',
	                s : 'second',
	                m : 'minute',
	                h : 'hour',
	                d : 'day',
	                D : 'date',
	                w : 'week',
	                W : 'isoWeek',
	                M : 'month',
	                Q : 'quarter',
	                y : 'year',
	                DDD : 'dayOfYear',
	                e : 'weekday',
	                E : 'isoWeekday',
	                gg: 'weekYear',
	                GG: 'isoWeekYear'
	            },

	            camelFunctions = {
	                dayofyear : 'dayOfYear',
	                isoweekday : 'isoWeekday',
	                isoweek : 'isoWeek',
	                weekyear : 'weekYear',
	                isoweekyear : 'isoWeekYear'
	            },

	            // format function strings
	            formatFunctions = {},

	            // default relative time thresholds
	            relativeTimeThresholds = {
	                s: 45,  // seconds to minute
	                m: 45,  // minutes to hour
	                h: 22,  // hours to day
	                d: 26,  // days to month
	                M: 11   // months to year
	            },

	            // tokens to ordinalize and pad
	            ordinalizeTokens = 'DDD w W M D d'.split(' '),
	            paddedTokens = 'M D H h m s w W'.split(' '),

	            formatTokenFunctions = {
	                M    : function () {
	                    return this.month() + 1;
	                },
	                MMM  : function (format) {
	                    return this.localeData().monthsShort(this, format);
	                },
	                MMMM : function (format) {
	                    return this.localeData().months(this, format);
	                },
	                D    : function () {
	                    return this.date();
	                },
	                DDD  : function () {
	                    return this.dayOfYear();
	                },
	                d    : function () {
	                    return this.day();
	                },
	                dd   : function (format) {
	                    return this.localeData().weekdaysMin(this, format);
	                },
	                ddd  : function (format) {
	                    return this.localeData().weekdaysShort(this, format);
	                },
	                dddd : function (format) {
	                    return this.localeData().weekdays(this, format);
	                },
	                w    : function () {
	                    return this.week();
	                },
	                W    : function () {
	                    return this.isoWeek();
	                },
	                YY   : function () {
	                    return leftZeroFill(this.year() % 100, 2);
	                },
	                YYYY : function () {
	                    return leftZeroFill(this.year(), 4);
	                },
	                YYYYY : function () {
	                    return leftZeroFill(this.year(), 5);
	                },
	                YYYYYY : function () {
	                    var y = this.year(), sign = y >= 0 ? '+' : '-';
	                    return sign + leftZeroFill(Math.abs(y), 6);
	                },
	                gg   : function () {
	                    return leftZeroFill(this.weekYear() % 100, 2);
	                },
	                gggg : function () {
	                    return leftZeroFill(this.weekYear(), 4);
	                },
	                ggggg : function () {
	                    return leftZeroFill(this.weekYear(), 5);
	                },
	                GG   : function () {
	                    return leftZeroFill(this.isoWeekYear() % 100, 2);
	                },
	                GGGG : function () {
	                    return leftZeroFill(this.isoWeekYear(), 4);
	                },
	                GGGGG : function () {
	                    return leftZeroFill(this.isoWeekYear(), 5);
	                },
	                e : function () {
	                    return this.weekday();
	                },
	                E : function () {
	                    return this.isoWeekday();
	                },
	                a    : function () {
	                    return this.localeData().meridiem(this.hours(), this.minutes(), true);
	                },
	                A    : function () {
	                    return this.localeData().meridiem(this.hours(), this.minutes(), false);
	                },
	                H    : function () {
	                    return this.hours();
	                },
	                h    : function () {
	                    return this.hours() % 12 || 12;
	                },
	                m    : function () {
	                    return this.minutes();
	                },
	                s    : function () {
	                    return this.seconds();
	                },
	                S    : function () {
	                    return toInt(this.milliseconds() / 100);
	                },
	                SS   : function () {
	                    return leftZeroFill(toInt(this.milliseconds() / 10), 2);
	                },
	                SSS  : function () {
	                    return leftZeroFill(this.milliseconds(), 3);
	                },
	                SSSS : function () {
	                    return leftZeroFill(this.milliseconds(), 3);
	                },
	                Z    : function () {
	                    var a = -this.zone(),
	                        b = '+';
	                    if (a < 0) {
	                        a = -a;
	                        b = '-';
	                    }
	                    return b + leftZeroFill(toInt(a / 60), 2) + ':' + leftZeroFill(toInt(a) % 60, 2);
	                },
	                ZZ   : function () {
	                    var a = -this.zone(),
	                        b = '+';
	                    if (a < 0) {
	                        a = -a;
	                        b = '-';
	                    }
	                    return b + leftZeroFill(toInt(a / 60), 2) + leftZeroFill(toInt(a) % 60, 2);
	                },
	                z : function () {
	                    return this.zoneAbbr();
	                },
	                zz : function () {
	                    return this.zoneName();
	                },
	                X    : function () {
	                    return this.unix();
	                },
	                Q : function () {
	                    return this.quarter();
	                }
	            },

	            deprecations = {},

	            lists = ['months', 'monthsShort', 'weekdays', 'weekdaysShort', 'weekdaysMin'];

	        // Pick the first defined of two or three arguments. dfl comes from
	        // default.
	        function dfl(a, b, c) {
	            switch (arguments.length) {
	                case 2: return a != null ? a : b;
	                case 3: return a != null ? a : b != null ? b : c;
	                default: throw new Error('Implement me');
	            }
	        }

	        function hasOwnProp(a, b) {
	            return hasOwnProperty.call(a, b);
	        }

	        function defaultParsingFlags() {
	            // We need to deep clone this object, and es5 standard is not very
	            // helpful.
	            return {
	                empty : false,
	                unusedTokens : [],
	                unusedInput : [],
	                overflow : -2,
	                charsLeftOver : 0,
	                nullInput : false,
	                invalidMonth : null,
	                invalidFormat : false,
	                userInvalidated : false,
	                iso: false
	            };
	        }

	        function printMsg(msg) {
	            if (moment.suppressDeprecationWarnings === false &&
	                    typeof console !== 'undefined' && console.warn) {
	                console.warn('Deprecation warning: ' + msg);
	            }
	        }

	        function deprecate(msg, fn) {
	            var firstTime = true;
	            return extend(function () {
	                if (firstTime) {
	                    printMsg(msg);
	                    firstTime = false;
	                }
	                return fn.apply(this, arguments);
	            }, fn);
	        }

	        function deprecateSimple(name, msg) {
	            if (!deprecations[name]) {
	                printMsg(msg);
	                deprecations[name] = true;
	            }
	        }

	        function padToken(func, count) {
	            return function (a) {
	                return leftZeroFill(func.call(this, a), count);
	            };
	        }
	        function ordinalizeToken(func, period) {
	            return function (a) {
	                return this.localeData().ordinal(func.call(this, a), period);
	            };
	        }

	        while (ordinalizeTokens.length) {
	            i = ordinalizeTokens.pop();
	            formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
	        }
	        while (paddedTokens.length) {
	            i = paddedTokens.pop();
	            formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
	        }
	        formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);


	        /************************************
	            Constructors
	        ************************************/

	        function Locale() {
	        }

	        // Moment prototype object
	        function Moment(config, skipOverflow) {
	            if (skipOverflow !== false) {
	                checkOverflow(config);
	            }
	            copyConfig(this, config);
	            this._d = new Date(+config._d);
	        }

	        // Duration Constructor
	        function Duration(duration) {
	            var normalizedInput = normalizeObjectUnits(duration),
	                years = normalizedInput.year || 0,
	                quarters = normalizedInput.quarter || 0,
	                months = normalizedInput.month || 0,
	                weeks = normalizedInput.week || 0,
	                days = normalizedInput.day || 0,
	                hours = normalizedInput.hour || 0,
	                minutes = normalizedInput.minute || 0,
	                seconds = normalizedInput.second || 0,
	                milliseconds = normalizedInput.millisecond || 0;

	            // representation for dateAddRemove
	            this._milliseconds = +milliseconds +
	                seconds * 1e3 + // 1000
	                minutes * 6e4 + // 1000 * 60
	                hours * 36e5; // 1000 * 60 * 60
	            // Because of dateAddRemove treats 24 hours as different from a
	            // day when working around DST, we need to store them separately
	            this._days = +days +
	                weeks * 7;
	            // It is impossible translate months into days without knowing
	            // which months you are are talking about, so we have to store
	            // it separately.
	            this._months = +months +
	                quarters * 3 +
	                years * 12;

	            this._data = {};

	            this._locale = moment.localeData();

	            this._bubble();
	        }

	        /************************************
	            Helpers
	        ************************************/


	        function extend(a, b) {
	            for (var i in b) {
	                if (hasOwnProp(b, i)) {
	                    a[i] = b[i];
	                }
	            }

	            if (hasOwnProp(b, 'toString')) {
	                a.toString = b.toString;
	            }

	            if (hasOwnProp(b, 'valueOf')) {
	                a.valueOf = b.valueOf;
	            }

	            return a;
	        }

	        function copyConfig(to, from) {
	            var i, prop, val;

	            if (typeof from._isAMomentObject !== 'undefined') {
	                to._isAMomentObject = from._isAMomentObject;
	            }
	            if (typeof from._i !== 'undefined') {
	                to._i = from._i;
	            }
	            if (typeof from._f !== 'undefined') {
	                to._f = from._f;
	            }
	            if (typeof from._l !== 'undefined') {
	                to._l = from._l;
	            }
	            if (typeof from._strict !== 'undefined') {
	                to._strict = from._strict;
	            }
	            if (typeof from._tzm !== 'undefined') {
	                to._tzm = from._tzm;
	            }
	            if (typeof from._isUTC !== 'undefined') {
	                to._isUTC = from._isUTC;
	            }
	            if (typeof from._offset !== 'undefined') {
	                to._offset = from._offset;
	            }
	            if (typeof from._pf !== 'undefined') {
	                to._pf = from._pf;
	            }
	            if (typeof from._locale !== 'undefined') {
	                to._locale = from._locale;
	            }

	            if (momentProperties.length > 0) {
	                for (i in momentProperties) {
	                    prop = momentProperties[i];
	                    val = from[prop];
	                    if (typeof val !== 'undefined') {
	                        to[prop] = val;
	                    }
	                }
	            }

	            return to;
	        }

	        function absRound(number) {
	            if (number < 0) {
	                return Math.ceil(number);
	            } else {
	                return Math.floor(number);
	            }
	        }

	        // left zero fill a number
	        // see http://jsperf.com/left-zero-filling for performance comparison
	        function leftZeroFill(number, targetLength, forceSign) {
	            var output = '' + Math.abs(number),
	                sign = number >= 0;

	            while (output.length < targetLength) {
	                output = '0' + output;
	            }
	            return (sign ? (forceSign ? '+' : '') : '-') + output;
	        }

	        function positiveMomentsDifference(base, other) {
	            var res = {milliseconds: 0, months: 0};

	            res.months = other.month() - base.month() +
	                (other.year() - base.year()) * 12;
	            if (base.clone().add(res.months, 'M').isAfter(other)) {
	                --res.months;
	            }

	            res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

	            return res;
	        }

	        function momentsDifference(base, other) {
	            var res;
	            other = makeAs(other, base);
	            if (base.isBefore(other)) {
	                res = positiveMomentsDifference(base, other);
	            } else {
	                res = positiveMomentsDifference(other, base);
	                res.milliseconds = -res.milliseconds;
	                res.months = -res.months;
	            }

	            return res;
	        }

	        // TODO: remove 'name' arg after deprecation is removed
	        function createAdder(direction, name) {
	            return function (val, period) {
	                var dur, tmp;
	                //invert the arguments, but complain about it
	                if (period !== null && !isNaN(+period)) {
	                    deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
	                    tmp = val; val = period; period = tmp;
	                }

	                val = typeof val === 'string' ? +val : val;
	                dur = moment.duration(val, period);
	                addOrSubtractDurationFromMoment(this, dur, direction);
	                return this;
	            };
	        }

	        function addOrSubtractDurationFromMoment(mom, duration, isAdding, updateOffset) {
	            var milliseconds = duration._milliseconds,
	                days = duration._days,
	                months = duration._months;
	            updateOffset = updateOffset == null ? true : updateOffset;

	            if (milliseconds) {
	                mom._d.setTime(+mom._d + milliseconds * isAdding);
	            }
	            if (days) {
	                rawSetter(mom, 'Date', rawGetter(mom, 'Date') + days * isAdding);
	            }
	            if (months) {
	                rawMonthSetter(mom, rawGetter(mom, 'Month') + months * isAdding);
	            }
	            if (updateOffset) {
	                moment.updateOffset(mom, days || months);
	            }
	        }

	        // check if is an array
	        function isArray(input) {
	            return Object.prototype.toString.call(input) === '[object Array]';
	        }

	        function isDate(input) {
	            return Object.prototype.toString.call(input) === '[object Date]' ||
	                input instanceof Date;
	        }

	        // compare two arrays, return the number of differences
	        function compareArrays(array1, array2, dontConvert) {
	            var len = Math.min(array1.length, array2.length),
	                lengthDiff = Math.abs(array1.length - array2.length),
	                diffs = 0,
	                i;
	            for (i = 0; i < len; i++) {
	                if ((dontConvert && array1[i] !== array2[i]) ||
	                    (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
	                    diffs++;
	                }
	            }
	            return diffs + lengthDiff;
	        }

	        function normalizeUnits(units) {
	            if (units) {
	                var lowered = units.toLowerCase().replace(/(.)s$/, '$1');
	                units = unitAliases[units] || camelFunctions[lowered] || lowered;
	            }
	            return units;
	        }

	        function normalizeObjectUnits(inputObject) {
	            var normalizedInput = {},
	                normalizedProp,
	                prop;

	            for (prop in inputObject) {
	                if (hasOwnProp(inputObject, prop)) {
	                    normalizedProp = normalizeUnits(prop);
	                    if (normalizedProp) {
	                        normalizedInput[normalizedProp] = inputObject[prop];
	                    }
	                }
	            }

	            return normalizedInput;
	        }

	        function makeList(field) {
	            var count, setter;

	            if (field.indexOf('week') === 0) {
	                count = 7;
	                setter = 'day';
	            }
	            else if (field.indexOf('month') === 0) {
	                count = 12;
	                setter = 'month';
	            }
	            else {
	                return;
	            }

	            moment[field] = function (format, index) {
	                var i, getter,
	                    method = moment._locale[field],
	                    results = [];

	                if (typeof format === 'number') {
	                    index = format;
	                    format = undefined;
	                }

	                getter = function (i) {
	                    var m = moment().utc().set(setter, i);
	                    return method.call(moment._locale, m, format || '');
	                };

	                if (index != null) {
	                    return getter(index);
	                }
	                else {
	                    for (i = 0; i < count; i++) {
	                        results.push(getter(i));
	                    }
	                    return results;
	                }
	            };
	        }

	        function toInt(argumentForCoercion) {
	            var coercedNumber = +argumentForCoercion,
	                value = 0;

	            if (coercedNumber !== 0 && isFinite(coercedNumber)) {
	                if (coercedNumber >= 0) {
	                    value = Math.floor(coercedNumber);
	                } else {
	                    value = Math.ceil(coercedNumber);
	                }
	            }

	            return value;
	        }

	        function daysInMonth(year, month) {
	            return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
	        }

	        function weeksInYear(year, dow, doy) {
	            return weekOfYear(moment([year, 11, 31 + dow - doy]), dow, doy).week;
	        }

	        function daysInYear(year) {
	            return isLeapYear(year) ? 366 : 365;
	        }

	        function isLeapYear(year) {
	            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	        }

	        function checkOverflow(m) {
	            var overflow;
	            if (m._a && m._pf.overflow === -2) {
	                overflow =
	                    m._a[MONTH] < 0 || m._a[MONTH] > 11 ? MONTH :
	                    m._a[DATE] < 1 || m._a[DATE] > daysInMonth(m._a[YEAR], m._a[MONTH]) ? DATE :
	                    m._a[HOUR] < 0 || m._a[HOUR] > 23 ? HOUR :
	                    m._a[MINUTE] < 0 || m._a[MINUTE] > 59 ? MINUTE :
	                    m._a[SECOND] < 0 || m._a[SECOND] > 59 ? SECOND :
	                    m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND :
	                    -1;

	                if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
	                    overflow = DATE;
	                }

	                m._pf.overflow = overflow;
	            }
	        }

	        function isValid(m) {
	            if (m._isValid == null) {
	                m._isValid = !isNaN(m._d.getTime()) &&
	                    m._pf.overflow < 0 &&
	                    !m._pf.empty &&
	                    !m._pf.invalidMonth &&
	                    !m._pf.nullInput &&
	                    !m._pf.invalidFormat &&
	                    !m._pf.userInvalidated;

	                if (m._strict) {
	                    m._isValid = m._isValid &&
	                        m._pf.charsLeftOver === 0 &&
	                        m._pf.unusedTokens.length === 0;
	                }
	            }
	            return m._isValid;
	        }

	        function normalizeLocale(key) {
	            return key ? key.toLowerCase().replace('_', '-') : key;
	        }

	        // pick the locale from the array
	        // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
	        // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
	        function chooseLocale(names) {
	            var i = 0, j, next, locale, split;

	            while (i < names.length) {
	                split = normalizeLocale(names[i]).split('-');
	                j = split.length;
	                next = normalizeLocale(names[i + 1]);
	                next = next ? next.split('-') : null;
	                while (j > 0) {
	                    locale = loadLocale(split.slice(0, j).join('-'));
	                    if (locale) {
	                        return locale;
	                    }
	                    if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
	                        //the next array item is better than a shallower substring of this one
	                        break;
	                    }
	                    j--;
	                }
	                i++;
	            }
	            return null;
	        }

	        function loadLocale(name) {
	            var oldLocale = null;
	            if (!locales[name] && hasModule) {
	                try {
	                    oldLocale = moment.locale();
	                    //require('./locale/' + name);
	                    // because defineLocale currently also sets the global locale, we want to undo that for lazy loaded locales
	                    moment.locale(oldLocale);
	                } catch (e) { }
	            }
	            return locales[name];
	        }

	        // Return a moment from input, that is local/utc/zone equivalent to model.
	        function makeAs(input, model) {
	            return model._isUTC ? moment(input).zone(model._offset || 0) :
	                moment(input).local();
	        }

	        /************************************
	            Locale
	        ************************************/


	        extend(Locale.prototype, {

	            set : function (config) {
	                var prop, i;
	                for (i in config) {
	                    prop = config[i];
	                    if (typeof prop === 'function') {
	                        this[i] = prop;
	                    } else {
	                        this['_' + i] = prop;
	                    }
	                }
	            },

	            _months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	            months : function (m) {
	                return this._months[m.month()];
	            },

	            _monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	            monthsShort : function (m) {
	                return this._monthsShort[m.month()];
	            },

	            monthsParse : function (monthName) {
	                var i, mom, regex;

	                if (!this._monthsParse) {
	                    this._monthsParse = [];
	                }

	                for (i = 0; i < 12; i++) {
	                    // make the regex if we don't have it already
	                    if (!this._monthsParse[i]) {
	                        mom = moment.utc([2000, i]);
	                        regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
	                        this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
	                    }
	                    // test the regex
	                    if (this._monthsParse[i].test(monthName)) {
	                        return i;
	                    }
	                }
	            },

	            _weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	            weekdays : function (m) {
	                return this._weekdays[m.day()];
	            },

	            _weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	            weekdaysShort : function (m) {
	                return this._weekdaysShort[m.day()];
	            },

	            _weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	            weekdaysMin : function (m) {
	                return this._weekdaysMin[m.day()];
	            },

	            weekdaysParse : function (weekdayName) {
	                var i, mom, regex;

	                if (!this._weekdaysParse) {
	                    this._weekdaysParse = [];
	                }

	                for (i = 0; i < 7; i++) {
	                    // make the regex if we don't have it already
	                    if (!this._weekdaysParse[i]) {
	                        mom = moment([2000, 1]).day(i);
	                        regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
	                        this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
	                    }
	                    // test the regex
	                    if (this._weekdaysParse[i].test(weekdayName)) {
	                        return i;
	                    }
	                }
	            },

	            _longDateFormat : {
	                LT : 'h:mm A',
	                L : 'MM/DD/YYYY',
	                LL : 'MMMM D, YYYY',
	                LLL : 'MMMM D, YYYY LT',
	                LLLL : 'dddd, MMMM D, YYYY LT'
	            },
	            longDateFormat : function (key) {
	                var output = this._longDateFormat[key];
	                if (!output && this._longDateFormat[key.toUpperCase()]) {
	                    output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
	                        return val.slice(1);
	                    });
	                    this._longDateFormat[key] = output;
	                }
	                return output;
	            },

	            isPM : function (input) {
	                // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
	                // Using charAt should be more compatible.
	                return ((input + '').toLowerCase().charAt(0) === 'p');
	            },

	            _meridiemParse : /[ap]\.?m?\.?/i,
	            meridiem : function (hours, minutes, isLower) {
	                if (hours > 11) {
	                    return isLower ? 'pm' : 'PM';
	                } else {
	                    return isLower ? 'am' : 'AM';
	                }
	            },

	            _calendar : {
	                sameDay : '[Today at] LT',
	                nextDay : '[Tomorrow at] LT',
	                nextWeek : 'dddd [at] LT',
	                lastDay : '[Yesterday at] LT',
	                lastWeek : '[Last] dddd [at] LT',
	                sameElse : 'L'
	            },
	            calendar : function (key, mom) {
	                var output = this._calendar[key];
	                return typeof output === 'function' ? output.apply(mom) : output;
	            },

	            _relativeTime : {
	                future : 'in %s',
	                past : '%s ago',
	                s : 'a few seconds',
	                m : 'a minute',
	                mm : '%d minutes',
	                h : 'an hour',
	                hh : '%d hours',
	                d : 'a day',
	                dd : '%d days',
	                M : 'a month',
	                MM : '%d months',
	                y : 'a year',
	                yy : '%d years'
	            },

	            relativeTime : function (number, withoutSuffix, string, isFuture) {
	                var output = this._relativeTime[string];
	                return (typeof output === 'function') ?
	                    output(number, withoutSuffix, string, isFuture) :
	                    output.replace(/%d/i, number);
	            },

	            pastFuture : function (diff, output) {
	                var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
	                return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
	            },

	            ordinal : function (number) {
	                return this._ordinal.replace('%d', number);
	            },
	            _ordinal : '%d',

	            preparse : function (string) {
	                return string;
	            },

	            postformat : function (string) {
	                return string;
	            },

	            week : function (mom) {
	                return weekOfYear(mom, this._week.dow, this._week.doy).week;
	            },

	            _week : {
	                dow : 0, // Sunday is the first day of the week.
	                doy : 6  // The week that contains Jan 1st is the first week of the year.
	            },

	            _invalidDate: 'Invalid date',
	            invalidDate: function () {
	                return this._invalidDate;
	            }
	        });

	        /************************************
	            Formatting
	        ************************************/


	        function removeFormattingTokens(input) {
	            if (input.match(/\[[\s\S]/)) {
	                return input.replace(/^\[|\]$/g, '');
	            }
	            return input.replace(/\\/g, '');
	        }

	        function makeFormatFunction(format) {
	            var array = format.match(formattingTokens), i, length;

	            for (i = 0, length = array.length; i < length; i++) {
	                if (formatTokenFunctions[array[i]]) {
	                    array[i] = formatTokenFunctions[array[i]];
	                } else {
	                    array[i] = removeFormattingTokens(array[i]);
	                }
	            }

	            return function (mom) {
	                var output = '';
	                for (i = 0; i < length; i++) {
	                    output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
	                }
	                return output;
	            };
	        }

	        // format date using native date object
	        function formatMoment(m, format) {
	            if (!m.isValid()) {
	                return m.localeData().invalidDate();
	            }

	            format = expandFormat(format, m.localeData());

	            if (!formatFunctions[format]) {
	                formatFunctions[format] = makeFormatFunction(format);
	            }

	            return formatFunctions[format](m);
	        }

	        function expandFormat(format, locale) {
	            var i = 5;

	            function replaceLongDateFormatTokens(input) {
	                return locale.longDateFormat(input) || input;
	            }

	            localFormattingTokens.lastIndex = 0;
	            while (i >= 0 && localFormattingTokens.test(format)) {
	                format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
	                localFormattingTokens.lastIndex = 0;
	                i -= 1;
	            }

	            return format;
	        }


	        /************************************
	            Parsing
	        ************************************/


	        // get the regex to find the next token
	        function getParseRegexForToken(token, config) {
	            var a, strict = config._strict;
	            switch (token) {
	            case 'Q':
	                return parseTokenOneDigit;
	            case 'DDDD':
	                return parseTokenThreeDigits;
	            case 'YYYY':
	            case 'GGGG':
	            case 'gggg':
	                return strict ? parseTokenFourDigits : parseTokenOneToFourDigits;
	            case 'Y':
	            case 'G':
	            case 'g':
	                return parseTokenSignedNumber;
	            case 'YYYYYY':
	            case 'YYYYY':
	            case 'GGGGG':
	            case 'ggggg':
	                return strict ? parseTokenSixDigits : parseTokenOneToSixDigits;
	            case 'S':
	                if (strict) {
	                    return parseTokenOneDigit;
	                }
	                /* falls through */
	            case 'SS':
	                if (strict) {
	                    return parseTokenTwoDigits;
	                }
	                /* falls through */
	            case 'SSS':
	                if (strict) {
	                    return parseTokenThreeDigits;
	                }
	                /* falls through */
	            case 'DDD':
	                return parseTokenOneToThreeDigits;
	            case 'MMM':
	            case 'MMMM':
	            case 'dd':
	            case 'ddd':
	            case 'dddd':
	                return parseTokenWord;
	            case 'a':
	            case 'A':
	                return config._locale._meridiemParse;
	            case 'X':
	                return parseTokenTimestampMs;
	            case 'Z':
	            case 'ZZ':
	                return parseTokenTimezone;
	            case 'T':
	                return parseTokenT;
	            case 'SSSS':
	                return parseTokenDigits;
	            case 'MM':
	            case 'DD':
	            case 'YY':
	            case 'GG':
	            case 'gg':
	            case 'HH':
	            case 'hh':
	            case 'mm':
	            case 'ss':
	            case 'ww':
	            case 'WW':
	                return strict ? parseTokenTwoDigits : parseTokenOneOrTwoDigits;
	            case 'M':
	            case 'D':
	            case 'd':
	            case 'H':
	            case 'h':
	            case 'm':
	            case 's':
	            case 'w':
	            case 'W':
	            case 'e':
	            case 'E':
	                return parseTokenOneOrTwoDigits;
	            case 'Do':
	                return parseTokenOrdinal;
	            default :
	                a = new RegExp(regexpEscape(unescapeFormat(token.replace('\\', '')), 'i'));
	                return a;
	            }
	        }

	        function timezoneMinutesFromString(string) {
	            string = string || '';
	            var possibleTzMatches = (string.match(parseTokenTimezone) || []),
	                tzChunk = possibleTzMatches[possibleTzMatches.length - 1] || [],
	                parts = (tzChunk + '').match(parseTimezoneChunker) || ['-', 0, 0],
	                minutes = +(parts[1] * 60) + toInt(parts[2]);

	            return parts[0] === '+' ? -minutes : minutes;
	        }

	        // function to convert string input to date
	        function addTimeToArrayFromToken(token, input, config) {
	            var a, datePartArray = config._a;

	            switch (token) {
	            // QUARTER
	            case 'Q':
	                if (input != null) {
	                    datePartArray[MONTH] = (toInt(input) - 1) * 3;
	                }
	                break;
	            // MONTH
	            case 'M' : // fall through to MM
	            case 'MM' :
	                if (input != null) {
	                    datePartArray[MONTH] = toInt(input) - 1;
	                }
	                break;
	            case 'MMM' : // fall through to MMMM
	            case 'MMMM' :
	                a = config._locale.monthsParse(input);
	                // if we didn't find a month name, mark the date as invalid.
	                if (a != null) {
	                    datePartArray[MONTH] = a;
	                } else {
	                    config._pf.invalidMonth = input;
	                }
	                break;
	            // DAY OF MONTH
	            case 'D' : // fall through to DD
	            case 'DD' :
	                if (input != null) {
	                    datePartArray[DATE] = toInt(input);
	                }
	                break;
	            case 'Do' :
	                if (input != null) {
	                    datePartArray[DATE] = toInt(parseInt(input, 10));
	                }
	                break;
	            // DAY OF YEAR
	            case 'DDD' : // fall through to DDDD
	            case 'DDDD' :
	                if (input != null) {
	                    config._dayOfYear = toInt(input);
	                }

	                break;
	            // YEAR
	            case 'YY' :
	                datePartArray[YEAR] = moment.parseTwoDigitYear(input);
	                break;
	            case 'YYYY' :
	            case 'YYYYY' :
	            case 'YYYYYY' :
	                datePartArray[YEAR] = toInt(input);
	                break;
	            // AM / PM
	            case 'a' : // fall through to A
	            case 'A' :
	                config._isPm = config._locale.isPM(input);
	                break;
	            // 24 HOUR
	            case 'H' : // fall through to hh
	            case 'HH' : // fall through to hh
	            case 'h' : // fall through to hh
	            case 'hh' :
	                datePartArray[HOUR] = toInt(input);
	                break;
	            // MINUTE
	            case 'm' : // fall through to mm
	            case 'mm' :
	                datePartArray[MINUTE] = toInt(input);
	                break;
	            // SECOND
	            case 's' : // fall through to ss
	            case 'ss' :
	                datePartArray[SECOND] = toInt(input);
	                break;
	            // MILLISECOND
	            case 'S' :
	            case 'SS' :
	            case 'SSS' :
	            case 'SSSS' :
	                datePartArray[MILLISECOND] = toInt(('0.' + input) * 1000);
	                break;
	            // UNIX TIMESTAMP WITH MS
	            case 'X':
	                config._d = new Date(parseFloat(input) * 1000);
	                break;
	            // TIMEZONE
	            case 'Z' : // fall through to ZZ
	            case 'ZZ' :
	                config._useUTC = true;
	                config._tzm = timezoneMinutesFromString(input);
	                break;
	            // WEEKDAY - human
	            case 'dd':
	            case 'ddd':
	            case 'dddd':
	                a = config._locale.weekdaysParse(input);
	                // if we didn't get a weekday name, mark the date as invalid
	                if (a != null) {
	                    config._w = config._w || {};
	                    config._w['d'] = a;
	                } else {
	                    config._pf.invalidWeekday = input;
	                }
	                break;
	            // WEEK, WEEK DAY - numeric
	            case 'w':
	            case 'ww':
	            case 'W':
	            case 'WW':
	            case 'd':
	            case 'e':
	            case 'E':
	                token = token.substr(0, 1);
	                /* falls through */
	            case 'gggg':
	            case 'GGGG':
	            case 'GGGGG':
	                token = token.substr(0, 2);
	                if (input) {
	                    config._w = config._w || {};
	                    config._w[token] = toInt(input);
	                }
	                break;
	            case 'gg':
	            case 'GG':
	                config._w = config._w || {};
	                config._w[token] = moment.parseTwoDigitYear(input);
	            }
	        }

	        function dayOfYearFromWeekInfo(config) {
	            var w, weekYear, week, weekday, dow, doy, temp;

	            w = config._w;
	            if (w.GG != null || w.W != null || w.E != null) {
	                dow = 1;
	                doy = 4;

	                // TODO: We need to take the current isoWeekYear, but that depends on
	                // how we interpret now (local, utc, fixed offset). So create
	                // a now version of current config (take local/utc/offset flags, and
	                // create now).
	                weekYear = dfl(w.GG, config._a[YEAR], weekOfYear(moment(), 1, 4).year);
	                week = dfl(w.W, 1);
	                weekday = dfl(w.E, 1);
	            } else {
	                dow = config._locale._week.dow;
	                doy = config._locale._week.doy;

	                weekYear = dfl(w.gg, config._a[YEAR], weekOfYear(moment(), dow, doy).year);
	                week = dfl(w.w, 1);

	                if (w.d != null) {
	                    // weekday -- low day numbers are considered next week
	                    weekday = w.d;
	                    if (weekday < dow) {
	                        ++week;
	                    }
	                } else if (w.e != null) {
	                    // local weekday -- counting starts from begining of week
	                    weekday = w.e + dow;
	                } else {
	                    // default to begining of week
	                    weekday = dow;
	                }
	            }
	            temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);

	            config._a[YEAR] = temp.year;
	            config._dayOfYear = temp.dayOfYear;
	        }

	        // convert an array to a date.
	        // the array should mirror the parameters below
	        // note: all values past the year are optional and will default to the lowest possible value.
	        // [year, month, day , hour, minute, second, millisecond]
	        function dateFromConfig(config) {
	            var i, date, input = [], currentDate, yearToUse;

	            if (config._d) {
	                return;
	            }

	            currentDate = currentDateArray(config);

	            //compute day of the year from weeks and weekdays
	            if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
	                dayOfYearFromWeekInfo(config);
	            }

	            //if the day of the year is set, figure out what it is
	            if (config._dayOfYear) {
	                yearToUse = dfl(config._a[YEAR], currentDate[YEAR]);

	                if (config._dayOfYear > daysInYear(yearToUse)) {
	                    config._pf._overflowDayOfYear = true;
	                }

	                date = makeUTCDate(yearToUse, 0, config._dayOfYear);
	                config._a[MONTH] = date.getUTCMonth();
	                config._a[DATE] = date.getUTCDate();
	            }

	            // Default to current date.
	            // * if no year, month, day of month are given, default to today
	            // * if day of month is given, default month and year
	            // * if month is given, default only year
	            // * if year is given, don't default anything
	            for (i = 0; i < 3 && config._a[i] == null; ++i) {
	                config._a[i] = input[i] = currentDate[i];
	            }

	            // Zero out whatever was not defaulted, including time
	            for (; i < 7; i++) {
	                config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
	            }

	            config._d = (config._useUTC ? makeUTCDate : makeDate).apply(null, input);
	            // Apply timezone offset from input. The actual zone can be changed
	            // with parseZone.
	            if (config._tzm != null) {
	                config._d.setUTCMinutes(config._d.getUTCMinutes() + config._tzm);
	            }
	        }

	        function dateFromObject(config) {
	            var normalizedInput;

	            if (config._d) {
	                return;
	            }

	            normalizedInput = normalizeObjectUnits(config._i);
	            config._a = [
	                normalizedInput.year,
	                normalizedInput.month,
	                normalizedInput.day,
	                normalizedInput.hour,
	                normalizedInput.minute,
	                normalizedInput.second,
	                normalizedInput.millisecond
	            ];

	            dateFromConfig(config);
	        }

	        function currentDateArray(config) {
	            var now = new Date();
	            if (config._useUTC) {
	                return [
	                    now.getUTCFullYear(),
	                    now.getUTCMonth(),
	                    now.getUTCDate()
	                ];
	            } else {
	                return [now.getFullYear(), now.getMonth(), now.getDate()];
	            }
	        }

	        // date from string and format string
	        function makeDateFromStringAndFormat(config) {
	            if (config._f === moment.ISO_8601) {
	                parseISO(config);
	                return;
	            }

	            config._a = [];
	            config._pf.empty = true;

	            // This array is used to make a Date, either with `new Date` or `Date.UTC`
	            var string = '' + config._i,
	                i, parsedInput, tokens, token, skipped,
	                stringLength = string.length,
	                totalParsedInputLength = 0;

	            tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

	            for (i = 0; i < tokens.length; i++) {
	                token = tokens[i];
	                parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
	                if (parsedInput) {
	                    skipped = string.substr(0, string.indexOf(parsedInput));
	                    if (skipped.length > 0) {
	                        config._pf.unusedInput.push(skipped);
	                    }
	                    string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
	                    totalParsedInputLength += parsedInput.length;
	                }
	                // don't parse if it's not a known token
	                if (formatTokenFunctions[token]) {
	                    if (parsedInput) {
	                        config._pf.empty = false;
	                    }
	                    else {
	                        config._pf.unusedTokens.push(token);
	                    }
	                    addTimeToArrayFromToken(token, parsedInput, config);
	                }
	                else if (config._strict && !parsedInput) {
	                    config._pf.unusedTokens.push(token);
	                }
	            }

	            // add remaining unparsed input length to the string
	            config._pf.charsLeftOver = stringLength - totalParsedInputLength;
	            if (string.length > 0) {
	                config._pf.unusedInput.push(string);
	            }

	            // handle am pm
	            if (config._isPm && config._a[HOUR] < 12) {
	                config._a[HOUR] += 12;
	            }
	            // if is 12 am, change hours to 0
	            if (config._isPm === false && config._a[HOUR] === 12) {
	                config._a[HOUR] = 0;
	            }

	            dateFromConfig(config);
	            checkOverflow(config);
	        }

	        function unescapeFormat(s) {
	            return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
	                return p1 || p2 || p3 || p4;
	            });
	        }

	        // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
	        function regexpEscape(s) {
	            return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	        }

	        // date from string and array of format strings
	        function makeDateFromStringAndArray(config) {
	            var tempConfig,
	                bestMoment,

	                scoreToBeat,
	                i,
	                currentScore;

	            if (config._f.length === 0) {
	                config._pf.invalidFormat = true;
	                config._d = new Date(NaN);
	                return;
	            }

	            for (i = 0; i < config._f.length; i++) {
	                currentScore = 0;
	                tempConfig = copyConfig({}, config);
	                if (config._useUTC != null) {
	                    tempConfig._useUTC = config._useUTC;
	                }
	                tempConfig._pf = defaultParsingFlags();
	                tempConfig._f = config._f[i];
	                makeDateFromStringAndFormat(tempConfig);

	                if (!isValid(tempConfig)) {
	                    continue;
	                }

	                // if there is any input that was not parsed add a penalty for that format
	                currentScore += tempConfig._pf.charsLeftOver;

	                //or tokens
	                currentScore += tempConfig._pf.unusedTokens.length * 10;

	                tempConfig._pf.score = currentScore;

	                if (scoreToBeat == null || currentScore < scoreToBeat) {
	                    scoreToBeat = currentScore;
	                    bestMoment = tempConfig;
	                }
	            }

	            extend(config, bestMoment || tempConfig);
	        }

	        // date from iso format
	        function parseISO(config) {
	            var i, l,
	                string = config._i,
	                match = isoRegex.exec(string);

	            if (match) {
	                config._pf.iso = true;
	                for (i = 0, l = isoDates.length; i < l; i++) {
	                    if (isoDates[i][1].exec(string)) {
	                        // match[5] should be 'T' or undefined
	                        config._f = isoDates[i][0] + (match[6] || ' ');
	                        break;
	                    }
	                }
	                for (i = 0, l = isoTimes.length; i < l; i++) {
	                    if (isoTimes[i][1].exec(string)) {
	                        config._f += isoTimes[i][0];
	                        break;
	                    }
	                }
	                if (string.match(parseTokenTimezone)) {
	                    config._f += 'Z';
	                }
	                makeDateFromStringAndFormat(config);
	            } else {
	                config._isValid = false;
	            }
	        }

	        // date from iso format or fallback
	        function makeDateFromString(config) {
	            parseISO(config);
	            if (config._isValid === false) {
	                delete config._isValid;
	                moment.createFromInputFallback(config);
	            }
	        }

	        function map(arr, fn) {
	            var res = [], i;
	            for (i = 0; i < arr.length; ++i) {
	                res.push(fn(arr[i], i));
	            }
	            return res;
	        }

	        function makeDateFromInput(config) {
	            var input = config._i, matched;
	            if (input === undefined) {
	                config._d = new Date();
	            } else if (isDate(input)) {
	                config._d = new Date(+input);
	            } else if ((matched = aspNetJsonRegex.exec(input)) !== null) {
	                config._d = new Date(+matched[1]);
	            } else if (typeof input === 'string') {
	                makeDateFromString(config);
	            } else if (isArray(input)) {
	                config._a = map(input.slice(0), function (obj) {
	                    return parseInt(obj, 10);
	                });
	                dateFromConfig(config);
	            } else if (typeof(input) === 'object') {
	                dateFromObject(config);
	            } else if (typeof(input) === 'number') {
	                // from milliseconds
	                config._d = new Date(input);
	            } else {
	                moment.createFromInputFallback(config);
	            }
	        }

	        function makeDate(y, m, d, h, M, s, ms) {
	            //can't just apply() to create a date:
	            //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
	            var date = new Date(y, m, d, h, M, s, ms);

	            //the date constructor doesn't accept years < 1970
	            if (y < 1970) {
	                date.setFullYear(y);
	            }
	            return date;
	        }

	        function makeUTCDate(y) {
	            var date = new Date(Date.UTC.apply(null, arguments));
	            if (y < 1970) {
	                date.setUTCFullYear(y);
	            }
	            return date;
	        }

	        function parseWeekday(input, locale) {
	            if (typeof input === 'string') {
	                if (!isNaN(input)) {
	                    input = parseInt(input, 10);
	                }
	                else {
	                    input = locale.weekdaysParse(input);
	                    if (typeof input !== 'number') {
	                        return null;
	                    }
	                }
	            }
	            return input;
	        }

	        /************************************
	            Relative Time
	        ************************************/


	        // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	        function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
	            return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
	        }

	        function relativeTime(posNegDuration, withoutSuffix, locale) {
	            var duration = moment.duration(posNegDuration).abs(),
	                seconds = round(duration.as('s')),
	                minutes = round(duration.as('m')),
	                hours = round(duration.as('h')),
	                days = round(duration.as('d')),
	                months = round(duration.as('M')),
	                years = round(duration.as('y')),

	                args = seconds < relativeTimeThresholds.s && ['s', seconds] ||
	                    minutes === 1 && ['m'] ||
	                    minutes < relativeTimeThresholds.m && ['mm', minutes] ||
	                    hours === 1 && ['h'] ||
	                    hours < relativeTimeThresholds.h && ['hh', hours] ||
	                    days === 1 && ['d'] ||
	                    days < relativeTimeThresholds.d && ['dd', days] ||
	                    months === 1 && ['M'] ||
	                    months < relativeTimeThresholds.M && ['MM', months] ||
	                    years === 1 && ['y'] || ['yy', years];

	            args[2] = withoutSuffix;
	            args[3] = +posNegDuration > 0;
	            args[4] = locale;
	            return substituteTimeAgo.apply({}, args);
	        }


	        /************************************
	            Week of Year
	        ************************************/


	        // firstDayOfWeek       0 = sun, 6 = sat
	        //                      the day of the week that starts the week
	        //                      (usually sunday or monday)
	        // firstDayOfWeekOfYear 0 = sun, 6 = sat
	        //                      the first week is the week that contains the first
	        //                      of this day of the week
	        //                      (eg. ISO weeks use thursday (4))
	        function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
	            var end = firstDayOfWeekOfYear - firstDayOfWeek,
	                daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
	                adjustedMoment;


	            if (daysToDayOfWeek > end) {
	                daysToDayOfWeek -= 7;
	            }

	            if (daysToDayOfWeek < end - 7) {
	                daysToDayOfWeek += 7;
	            }

	            adjustedMoment = moment(mom).add(daysToDayOfWeek, 'd');
	            return {
	                week: Math.ceil(adjustedMoment.dayOfYear() / 7),
	                year: adjustedMoment.year()
	            };
	        }

	        //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
	        function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
	            var d = makeUTCDate(year, 0, 1).getUTCDay(), daysToAdd, dayOfYear;

	            d = d === 0 ? 7 : d;
	            weekday = weekday != null ? weekday : firstDayOfWeek;
	            daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
	            dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;

	            return {
	                year: dayOfYear > 0 ? year : year - 1,
	                dayOfYear: dayOfYear > 0 ?  dayOfYear : daysInYear(year - 1) + dayOfYear
	            };
	        }

	        /************************************
	            Top Level Functions
	        ************************************/

	        function makeMoment(config) {
	            var input = config._i,
	                format = config._f;

	            config._locale = config._locale || moment.localeData(config._l);

	            if (input === null || (format === undefined && input === '')) {
	                return moment.invalid({nullInput: true});
	            }

	            if (typeof input === 'string') {
	                config._i = input = config._locale.preparse(input);
	            }

	            if (moment.isMoment(input)) {
	                return new Moment(input, true);
	            } else if (format) {
	                if (isArray(format)) {
	                    makeDateFromStringAndArray(config);
	                } else {
	                    makeDateFromStringAndFormat(config);
	                }
	            } else {
	                makeDateFromInput(config);
	            }

	            return new Moment(config);
	        }

	        moment = function (input, format, locale, strict) {
	            var c;

	            if (typeof(locale) === 'boolean') {
	                strict = locale;
	                locale = undefined;
	            }
	            // object construction must be done this way.
	            // https://github.com/moment/moment/issues/1423
	            c = {};
	            c._isAMomentObject = true;
	            c._i = input;
	            c._f = format;
	            c._l = locale;
	            c._strict = strict;
	            c._isUTC = false;
	            c._pf = defaultParsingFlags();

	            return makeMoment(c);
	        };

	        moment.suppressDeprecationWarnings = false;

	        moment.createFromInputFallback = deprecate(
	            'moment construction falls back to js Date. This is ' +
	            'discouraged and will be removed in upcoming major ' +
	            'release. Please refer to ' +
	            'https://github.com/moment/moment/issues/1407 for more info.',
	            function (config) {
	                config._d = new Date(config._i);
	            }
	        );

	        // Pick a moment m from moments so that m[fn](other) is true for all
	        // other. This relies on the function fn to be transitive.
	        //
	        // moments should either be an array of moment objects or an array, whose
	        // first element is an array of moment objects.
	        function pickBy(fn, moments) {
	            var res, i;
	            if (moments.length === 1 && isArray(moments[0])) {
	                moments = moments[0];
	            }
	            if (!moments.length) {
	                return moment();
	            }
	            res = moments[0];
	            for (i = 1; i < moments.length; ++i) {
	                if (moments[i][fn](res)) {
	                    res = moments[i];
	                }
	            }
	            return res;
	        }

	        moment.min = function () {
	            var args = [].slice.call(arguments, 0);

	            return pickBy('isBefore', args);
	        };

	        moment.max = function () {
	            var args = [].slice.call(arguments, 0);

	            return pickBy('isAfter', args);
	        };

	        // creating with utc
	        moment.utc = function (input, format, locale, strict) {
	            var c;

	            if (typeof(locale) === 'boolean') {
	                strict = locale;
	                locale = undefined;
	            }
	            // object construction must be done this way.
	            // https://github.com/moment/moment/issues/1423
	            c = {};
	            c._isAMomentObject = true;
	            c._useUTC = true;
	            c._isUTC = true;
	            c._l = locale;
	            c._i = input;
	            c._f = format;
	            c._strict = strict;
	            c._pf = defaultParsingFlags();

	            return makeMoment(c).utc();
	        };

	        // creating with unix timestamp (in seconds)
	        moment.unix = function (input) {
	            return moment(input * 1000);
	        };

	        // duration
	        moment.duration = function (input, key) {
	            var duration = input,
	                // matching against regexp is expensive, do it on demand
	                match = null,
	                sign,
	                ret,
	                parseIso,
	                diffRes;

	            if (moment.isDuration(input)) {
	                duration = {
	                    ms: input._milliseconds,
	                    d: input._days,
	                    M: input._months
	                };
	            } else if (typeof input === 'number') {
	                duration = {};
	                if (key) {
	                    duration[key] = input;
	                } else {
	                    duration.milliseconds = input;
	                }
	            } else if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
	                sign = (match[1] === '-') ? -1 : 1;
	                duration = {
	                    y: 0,
	                    d: toInt(match[DATE]) * sign,
	                    h: toInt(match[HOUR]) * sign,
	                    m: toInt(match[MINUTE]) * sign,
	                    s: toInt(match[SECOND]) * sign,
	                    ms: toInt(match[MILLISECOND]) * sign
	                };
	            } else if (!!(match = isoDurationRegex.exec(input))) {
	                sign = (match[1] === '-') ? -1 : 1;
	                parseIso = function (inp) {
	                    // We'd normally use ~~inp for this, but unfortunately it also
	                    // converts floats to ints.
	                    // inp may be undefined, so careful calling replace on it.
	                    var res = inp && parseFloat(inp.replace(',', '.'));
	                    // apply sign while we're at it
	                    return (isNaN(res) ? 0 : res) * sign;
	                };
	                duration = {
	                    y: parseIso(match[2]),
	                    M: parseIso(match[3]),
	                    d: parseIso(match[4]),
	                    h: parseIso(match[5]),
	                    m: parseIso(match[6]),
	                    s: parseIso(match[7]),
	                    w: parseIso(match[8])
	                };
	            } else if (typeof duration === 'object' &&
	                    ('from' in duration || 'to' in duration)) {
	                diffRes = momentsDifference(moment(duration.from), moment(duration.to));

	                duration = {};
	                duration.ms = diffRes.milliseconds;
	                duration.M = diffRes.months;
	            }

	            ret = new Duration(duration);

	            if (moment.isDuration(input) && hasOwnProp(input, '_locale')) {
	                ret._locale = input._locale;
	            }

	            return ret;
	        };

	        // version number
	        moment.version = VERSION;

	        // default format
	        moment.defaultFormat = isoFormat;

	        // constant that refers to the ISO standard
	        moment.ISO_8601 = function () {};

	        // Plugins that add properties should also add the key here (null value),
	        // so we can properly clone ourselves.
	        moment.momentProperties = momentProperties;

	        // This function will be called whenever a moment is mutated.
	        // It is intended to keep the offset in sync with the timezone.
	        moment.updateOffset = function () {};

	        // This function allows you to set a threshold for relative time strings
	        moment.relativeTimeThreshold = function (threshold, limit) {
	            if (relativeTimeThresholds[threshold] === undefined) {
	                return false;
	            }
	            if (limit === undefined) {
	                return relativeTimeThresholds[threshold];
	            }
	            relativeTimeThresholds[threshold] = limit;
	            return true;
	        };

	        moment.lang = deprecate(
	            'moment.lang is deprecated. Use moment.locale instead.',
	            function (key, value) {
	                return moment.locale(key, value);
	            }
	        );

	        // This function will load locale and then set the global locale.  If
	        // no arguments are passed in, it will simply return the current global
	        // locale key.
	        moment.locale = function (key, values) {
	            var data;
	            if (key) {
	                if (typeof(values) !== 'undefined') {
	                    data = moment.defineLocale(key, values);
	                }
	                else {
	                    data = moment.localeData(key);
	                }

	                if (data) {
	                    moment.duration._locale = moment._locale = data;
	                }
	            }

	            return moment._locale._abbr;
	        };

	        moment.defineLocale = function (name, values) {
	            if (values !== null) {
	                values.abbr = name;
	                if (!locales[name]) {
	                    locales[name] = new Locale();
	                }
	                locales[name].set(values);

	                // backwards compat for now: also set the locale
	                moment.locale(name);

	                return locales[name];
	            } else {
	                // useful for testing
	                delete locales[name];
	                return null;
	            }
	        };

	        moment.langData = deprecate(
	            'moment.langData is deprecated. Use moment.localeData instead.',
	            function (key) {
	                return moment.localeData(key);
	            }
	        );

	        // returns locale data
	        moment.localeData = function (key) {
	            var locale;

	            if (key && key._locale && key._locale._abbr) {
	                key = key._locale._abbr;
	            }

	            if (!key) {
	                return moment._locale;
	            }

	            if (!isArray(key)) {
	                //short-circuit everything else
	                locale = loadLocale(key);
	                if (locale) {
	                    return locale;
	                }
	                key = [key];
	            }

	            return chooseLocale(key);
	        };

	        // compare moment object
	        moment.isMoment = function (obj) {
	            return obj instanceof Moment ||
	                (obj != null && hasOwnProp(obj, '_isAMomentObject'));
	        };

	        // for typechecking Duration objects
	        moment.isDuration = function (obj) {
	            return obj instanceof Duration;
	        };

	        for (i = lists.length - 1; i >= 0; --i) {
	            makeList(lists[i]);
	        }

	        moment.normalizeUnits = function (units) {
	            return normalizeUnits(units);
	        };

	        moment.invalid = function (flags) {
	            var m = moment.utc(NaN);
	            if (flags != null) {
	                extend(m._pf, flags);
	            }
	            else {
	                m._pf.userInvalidated = true;
	            }

	            return m;
	        };

	        moment.parseZone = function () {
	            return moment.apply(null, arguments).parseZone();
	        };

	        moment.parseTwoDigitYear = function (input) {
	            return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
	        };

	        /************************************
	            Moment Prototype
	        ************************************/


	        extend(moment.fn = Moment.prototype, {

	            clone : function () {
	                return moment(this);
	            },

	            valueOf : function () {
	                return +this._d + ((this._offset || 0) * 60000);
	            },

	            unix : function () {
	                return Math.floor(+this / 1000);
	            },

	            toString : function () {
	                return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
	            },

	            toDate : function () {
	                return this._offset ? new Date(+this) : this._d;
	            },

	            toISOString : function () {
	                var m = moment(this).utc();
	                if (0 < m.year() && m.year() <= 9999) {
	                    return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	                } else {
	                    return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	                }
	            },

	            toArray : function () {
	                var m = this;
	                return [
	                    m.year(),
	                    m.month(),
	                    m.date(),
	                    m.hours(),
	                    m.minutes(),
	                    m.seconds(),
	                    m.milliseconds()
	                ];
	            },

	            isValid : function () {
	                return isValid(this);
	            },

	            isDSTShifted : function () {
	                if (this._a) {
	                    return this.isValid() && compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray()) > 0;
	                }

	                return false;
	            },

	            parsingFlags : function () {
	                return extend({}, this._pf);
	            },

	            invalidAt: function () {
	                return this._pf.overflow;
	            },

	            utc : function (keepLocalTime) {
	                return this.zone(0, keepLocalTime);
	            },

	            local : function (keepLocalTime) {
	                if (this._isUTC) {
	                    this.zone(0, keepLocalTime);
	                    this._isUTC = false;

	                    if (keepLocalTime) {
	                        this.add(this._dateTzOffset(), 'm');
	                    }
	                }
	                return this;
	            },

	            format : function (inputString) {
	                var output = formatMoment(this, inputString || moment.defaultFormat);
	                return this.localeData().postformat(output);
	            },

	            add : createAdder(1, 'add'),

	            subtract : createAdder(-1, 'subtract'),

	            diff : function (input, units, asFloat) {
	                var that = makeAs(input, this),
	                    zoneDiff = (this.zone() - that.zone()) * 6e4,
	                    diff, output, daysAdjust;

	                units = normalizeUnits(units);

	                if (units === 'year' || units === 'month') {
	                    // average number of days in the months in the given dates
	                    diff = (this.daysInMonth() + that.daysInMonth()) * 432e5; // 24 * 60 * 60 * 1000 / 2
	                    // difference in months
	                    output = ((this.year() - that.year()) * 12) + (this.month() - that.month());
	                    // adjust by taking difference in days, average number of days
	                    // and dst in the given months.
	                    daysAdjust = (this - moment(this).startOf('month')) -
	                        (that - moment(that).startOf('month'));
	                    // same as above but with zones, to negate all dst
	                    daysAdjust -= ((this.zone() - moment(this).startOf('month').zone()) -
	                            (that.zone() - moment(that).startOf('month').zone())) * 6e4;
	                    output += daysAdjust / diff;
	                    if (units === 'year') {
	                        output = output / 12;
	                    }
	                } else {
	                    diff = (this - that);
	                    output = units === 'second' ? diff / 1e3 : // 1000
	                        units === 'minute' ? diff / 6e4 : // 1000 * 60
	                        units === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
	                        units === 'day' ? (diff - zoneDiff) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
	                        units === 'week' ? (diff - zoneDiff) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
	                        diff;
	                }
	                return asFloat ? output : absRound(output);
	            },

	            from : function (time, withoutSuffix) {
	                return moment.duration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
	            },

	            fromNow : function (withoutSuffix) {
	                return this.from(moment(), withoutSuffix);
	            },

	            calendar : function (time) {
	                // We want to compare the start of today, vs this.
	                // Getting start-of-today depends on whether we're zone'd or not.
	                var now = time || moment(),
	                    sod = makeAs(now, this).startOf('day'),
	                    diff = this.diff(sod, 'days', true),
	                    format = diff < -6 ? 'sameElse' :
	                        diff < -1 ? 'lastWeek' :
	                        diff < 0 ? 'lastDay' :
	                        diff < 1 ? 'sameDay' :
	                        diff < 2 ? 'nextDay' :
	                        diff < 7 ? 'nextWeek' : 'sameElse';
	                return this.format(this.localeData().calendar(format, this));
	            },

	            isLeapYear : function () {
	                return isLeapYear(this.year());
	            },

	            isDST : function () {
	                return (this.zone() < this.clone().month(0).zone() ||
	                    this.zone() < this.clone().month(5).zone());
	            },

	            day : function (input) {
	                var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
	                if (input != null) {
	                    input = parseWeekday(input, this.localeData());
	                    return this.add(input - day, 'd');
	                } else {
	                    return day;
	                }
	            },

	            month : makeAccessor('Month', true),

	            startOf : function (units) {
	                units = normalizeUnits(units);
	                // the following switch intentionally omits break keywords
	                // to utilize falling through the cases.
	                switch (units) {
	                case 'year':
	                    this.month(0);
	                    /* falls through */
	                case 'quarter':
	                case 'month':
	                    this.date(1);
	                    /* falls through */
	                case 'week':
	                case 'isoWeek':
	                case 'day':
	                    this.hours(0);
	                    /* falls through */
	                case 'hour':
	                    this.minutes(0);
	                    /* falls through */
	                case 'minute':
	                    this.seconds(0);
	                    /* falls through */
	                case 'second':
	                    this.milliseconds(0);
	                    /* falls through */
	                }

	                // weeks are a special case
	                if (units === 'week') {
	                    this.weekday(0);
	                } else if (units === 'isoWeek') {
	                    this.isoWeekday(1);
	                }

	                // quarters are also special
	                if (units === 'quarter') {
	                    this.month(Math.floor(this.month() / 3) * 3);
	                }

	                return this;
	            },

	            endOf: function (units) {
	                units = normalizeUnits(units);
	                return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
	            },

	            isAfter: function (input, units) {
	                units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
	                if (units === 'millisecond') {
	                    input = moment.isMoment(input) ? input : moment(input);
	                    return +this > +input;
	                } else {
	                    return +this.clone().startOf(units) > +moment(input).startOf(units);
	                }
	            },

	            isBefore: function (input, units) {
	                units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
	                if (units === 'millisecond') {
	                    input = moment.isMoment(input) ? input : moment(input);
	                    return +this < +input;
	                } else {
	                    return +this.clone().startOf(units) < +moment(input).startOf(units);
	                }
	            },

	            isSame: function (input, units) {
	                units = normalizeUnits(units || 'millisecond');
	                if (units === 'millisecond') {
	                    input = moment.isMoment(input) ? input : moment(input);
	                    return +this === +input;
	                } else {
	                    return +this.clone().startOf(units) === +makeAs(input, this).startOf(units);
	                }
	            },

	            min: deprecate(
	                     'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
	                     function (other) {
	                         other = moment.apply(null, arguments);
	                         return other < this ? this : other;
	                     }
	             ),

	            max: deprecate(
	                    'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
	                    function (other) {
	                        other = moment.apply(null, arguments);
	                        return other > this ? this : other;
	                    }
	            ),

	            // keepLocalTime = true means only change the timezone, without
	            // affecting the local hour. So 5:31:26 +0300 --[zone(2, true)]-->
	            // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist int zone
	            // +0200, so we adjust the time as needed, to be valid.
	            //
	            // Keeping the time actually adds/subtracts (one hour)
	            // from the actual represented time. That is why we call updateOffset
	            // a second time. In case it wants us to change the offset again
	            // _changeInProgress == true case, then we have to adjust, because
	            // there is no such time in the given timezone.
	            zone : function (input, keepLocalTime) {
	                var offset = this._offset || 0,
	                    localAdjust;
	                if (input != null) {
	                    if (typeof input === 'string') {
	                        input = timezoneMinutesFromString(input);
	                    }
	                    if (Math.abs(input) < 16) {
	                        input = input * 60;
	                    }
	                    if (!this._isUTC && keepLocalTime) {
	                        localAdjust = this._dateTzOffset();
	                    }
	                    this._offset = input;
	                    this._isUTC = true;
	                    if (localAdjust != null) {
	                        this.subtract(localAdjust, 'm');
	                    }
	                    if (offset !== input) {
	                        if (!keepLocalTime || this._changeInProgress) {
	                            addOrSubtractDurationFromMoment(this,
	                                    moment.duration(offset - input, 'm'), 1, false);
	                        } else if (!this._changeInProgress) {
	                            this._changeInProgress = true;
	                            moment.updateOffset(this, true);
	                            this._changeInProgress = null;
	                        }
	                    }
	                } else {
	                    return this._isUTC ? offset : this._dateTzOffset();
	                }
	                return this;
	            },

	            zoneAbbr : function () {
	                return this._isUTC ? 'UTC' : '';
	            },

	            zoneName : function () {
	                return this._isUTC ? 'Coordinated Universal Time' : '';
	            },

	            parseZone : function () {
	                if (this._tzm) {
	                    this.zone(this._tzm);
	                } else if (typeof this._i === 'string') {
	                    this.zone(this._i);
	                }
	                return this;
	            },

	            hasAlignedHourOffset : function (input) {
	                if (!input) {
	                    input = 0;
	                }
	                else {
	                    input = moment(input).zone();
	                }

	                return (this.zone() - input) % 60 === 0;
	            },

	            daysInMonth : function () {
	                return daysInMonth(this.year(), this.month());
	            },

	            dayOfYear : function (input) {
	                var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
	                return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
	            },

	            quarter : function (input) {
	                return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
	            },

	            weekYear : function (input) {
	                var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
	                return input == null ? year : this.add((input - year), 'y');
	            },

	            isoWeekYear : function (input) {
	                var year = weekOfYear(this, 1, 4).year;
	                return input == null ? year : this.add((input - year), 'y');
	            },

	            week : function (input) {
	                var week = this.localeData().week(this);
	                return input == null ? week : this.add((input - week) * 7, 'd');
	            },

	            isoWeek : function (input) {
	                var week = weekOfYear(this, 1, 4).week;
	                return input == null ? week : this.add((input - week) * 7, 'd');
	            },

	            weekday : function (input) {
	                var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
	                return input == null ? weekday : this.add(input - weekday, 'd');
	            },

	            isoWeekday : function (input) {
	                // behaves the same as moment#day except
	                // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
	                // as a setter, sunday should belong to the previous week.
	                return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
	            },

	            isoWeeksInYear : function () {
	                return weeksInYear(this.year(), 1, 4);
	            },

	            weeksInYear : function () {
	                var weekInfo = this.localeData()._week;
	                return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
	            },

	            get : function (units) {
	                units = normalizeUnits(units);
	                return this[units]();
	            },

	            set : function (units, value) {
	                units = normalizeUnits(units);
	                if (typeof this[units] === 'function') {
	                    this[units](value);
	                }
	                return this;
	            },

	            // If passed a locale key, it will set the locale for this
	            // instance.  Otherwise, it will return the locale configuration
	            // variables for this instance.
	            locale : function (key) {
	                var newLocaleData;

	                if (key === undefined) {
	                    return this._locale._abbr;
	                } else {
	                    newLocaleData = moment.localeData(key);
	                    if (newLocaleData != null) {
	                        this._locale = newLocaleData;
	                    }
	                    return this;
	                }
	            },

	            lang : deprecate(
	                'moment().lang() is deprecated. Use moment().localeData() instead.',
	                function (key) {
	                    if (key === undefined) {
	                        return this.localeData();
	                    } else {
	                        return this.locale(key);
	                    }
	                }
	            ),

	            localeData : function () {
	                return this._locale;
	            },

	            _dateTzOffset : function () {
	                // On Firefox.24 Date#getTimezoneOffset returns a floating point.
	                // https://github.com/moment/moment/pull/1871
	                return Math.round(this._d.getTimezoneOffset() / 15) * 15;
	            }
	        });

	        function rawMonthSetter(mom, value) {
	            var dayOfMonth;

	            // TODO: Move this out of here!
	            if (typeof value === 'string') {
	                value = mom.localeData().monthsParse(value);
	                // TODO: Another silent failure?
	                if (typeof value !== 'number') {
	                    return mom;
	                }
	            }

	            dayOfMonth = Math.min(mom.date(),
	                    daysInMonth(mom.year(), value));
	            mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
	            return mom;
	        }

	        function rawGetter(mom, unit) {
	            return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
	        }

	        function rawSetter(mom, unit, value) {
	            if (unit === 'Month') {
	                return rawMonthSetter(mom, value);
	            } else {
	                return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
	            }
	        }

	        function makeAccessor(unit, keepTime) {
	            return function (value) {
	                if (value != null) {
	                    rawSetter(this, unit, value);
	                    moment.updateOffset(this, keepTime);
	                    return this;
	                } else {
	                    return rawGetter(this, unit);
	                }
	            };
	        }

	        moment.fn.millisecond = moment.fn.milliseconds = makeAccessor('Milliseconds', false);
	        moment.fn.second = moment.fn.seconds = makeAccessor('Seconds', false);
	        moment.fn.minute = moment.fn.minutes = makeAccessor('Minutes', false);
	        // Setting the hour should keep the time, because the user explicitly
	        // specified which hour he wants. So trying to maintain the same hour (in
	        // a new timezone) makes sense. Adding/subtracting hours does not follow
	        // this rule.
	        moment.fn.hour = moment.fn.hours = makeAccessor('Hours', true);
	        // moment.fn.month is defined separately
	        moment.fn.date = makeAccessor('Date', true);
	        moment.fn.dates = deprecate('dates accessor is deprecated. Use date instead.', makeAccessor('Date', true));
	        moment.fn.year = makeAccessor('FullYear', true);
	        moment.fn.years = deprecate('years accessor is deprecated. Use year instead.', makeAccessor('FullYear', true));

	        // add plural methods
	        moment.fn.days = moment.fn.day;
	        moment.fn.months = moment.fn.month;
	        moment.fn.weeks = moment.fn.week;
	        moment.fn.isoWeeks = moment.fn.isoWeek;
	        moment.fn.quarters = moment.fn.quarter;

	        // add aliased format methods
	        moment.fn.toJSON = moment.fn.toISOString;

	        /************************************
	            Duration Prototype
	        ************************************/


	        function daysToYears (days) {
	            // 400 years have 146097 days (taking into account leap year rules)
	            return days * 400 / 146097;
	        }

	        function yearsToDays (years) {
	            // years * 365 + absRound(years / 4) -
	            //     absRound(years / 100) + absRound(years / 400);
	            return years * 146097 / 400;
	        }

	        extend(moment.duration.fn = Duration.prototype, {

	            _bubble : function () {
	                var milliseconds = this._milliseconds,
	                    days = this._days,
	                    months = this._months,
	                    data = this._data,
	                    seconds, minutes, hours, years = 0;

	                // The following code bubbles up values, see the tests for
	                // examples of what that means.
	                data.milliseconds = milliseconds % 1000;

	                seconds = absRound(milliseconds / 1000);
	                data.seconds = seconds % 60;

	                minutes = absRound(seconds / 60);
	                data.minutes = minutes % 60;

	                hours = absRound(minutes / 60);
	                data.hours = hours % 24;

	                days += absRound(hours / 24);

	                // Accurately convert days to years, assume start from year 0.
	                years = absRound(daysToYears(days));
	                days -= absRound(yearsToDays(years));

	                // 30 days to a month
	                // TODO (iskren): Use anchor date (like 1st Jan) to compute this.
	                months += absRound(days / 30);
	                days %= 30;

	                // 12 months -> 1 year
	                years += absRound(months / 12);
	                months %= 12;

	                data.days = days;
	                data.months = months;
	                data.years = years;
	            },

	            abs : function () {
	                this._milliseconds = Math.abs(this._milliseconds);
	                this._days = Math.abs(this._days);
	                this._months = Math.abs(this._months);

	                this._data.milliseconds = Math.abs(this._data.milliseconds);
	                this._data.seconds = Math.abs(this._data.seconds);
	                this._data.minutes = Math.abs(this._data.minutes);
	                this._data.hours = Math.abs(this._data.hours);
	                this._data.months = Math.abs(this._data.months);
	                this._data.years = Math.abs(this._data.years);

	                return this;
	            },

	            weeks : function () {
	                return absRound(this.days() / 7);
	            },

	            valueOf : function () {
	                return this._milliseconds +
	                  this._days * 864e5 +
	                  (this._months % 12) * 2592e6 +
	                  toInt(this._months / 12) * 31536e6;
	            },

	            humanize : function (withSuffix) {
	                var output = relativeTime(this, !withSuffix, this.localeData());

	                if (withSuffix) {
	                    output = this.localeData().pastFuture(+this, output);
	                }

	                return this.localeData().postformat(output);
	            },

	            add : function (input, val) {
	                // supports only 2.0-style add(1, 's') or add(moment)
	                var dur = moment.duration(input, val);

	                this._milliseconds += dur._milliseconds;
	                this._days += dur._days;
	                this._months += dur._months;

	                this._bubble();

	                return this;
	            },

	            subtract : function (input, val) {
	                var dur = moment.duration(input, val);

	                this._milliseconds -= dur._milliseconds;
	                this._days -= dur._days;
	                this._months -= dur._months;

	                this._bubble();

	                return this;
	            },

	            get : function (units) {
	                units = normalizeUnits(units);
	                return this[units.toLowerCase() + 's']();
	            },

	            as : function (units) {
	                var days, months;
	                units = normalizeUnits(units);

	                if (units === 'month' || units === 'year') {
	                    days = this._days + this._milliseconds / 864e5;
	                    months = this._months + daysToYears(days) * 12;
	                    return units === 'month' ? months : months / 12;
	                } else {
	                    // handle milliseconds separately because of floating point math errors (issue #1867)
	                    days = this._days + yearsToDays(this._months / 12);
	                    switch (units) {
	                        case 'week': return days / 7 + this._milliseconds / 6048e5;
	                        case 'day': return days + this._milliseconds / 864e5;
	                        case 'hour': return days * 24 + this._milliseconds / 36e5;
	                        case 'minute': return days * 24 * 60 + this._milliseconds / 6e4;
	                        case 'second': return days * 24 * 60 * 60 + this._milliseconds / 1000;
	                        // Math.floor prevents floating point math errors here
	                        case 'millisecond': return Math.floor(days * 24 * 60 * 60 * 1000) + this._milliseconds;
	                        default: throw new Error('Unknown unit ' + units);
	                    }
	                }
	            },

	            lang : moment.fn.lang,
	            locale : moment.fn.locale,

	            toIsoString : deprecate(
	                'toIsoString() is deprecated. Please use toISOString() instead ' +
	                '(notice the capitals)',
	                function () {
	                    return this.toISOString();
	                }
	            ),

	            toISOString : function () {
	                // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
	                var years = Math.abs(this.years()),
	                    months = Math.abs(this.months()),
	                    days = Math.abs(this.days()),
	                    hours = Math.abs(this.hours()),
	                    minutes = Math.abs(this.minutes()),
	                    seconds = Math.abs(this.seconds() + this.milliseconds() / 1000);

	                if (!this.asSeconds()) {
	                    // this is the same as C#'s (Noda) and python (isodate)...
	                    // but not other JS (goog.date)
	                    return 'P0D';
	                }

	                return (this.asSeconds() < 0 ? '-' : '') +
	                    'P' +
	                    (years ? years + 'Y' : '') +
	                    (months ? months + 'M' : '') +
	                    (days ? days + 'D' : '') +
	                    ((hours || minutes || seconds) ? 'T' : '') +
	                    (hours ? hours + 'H' : '') +
	                    (minutes ? minutes + 'M' : '') +
	                    (seconds ? seconds + 'S' : '');
	            },

	            localeData : function () {
	                return this._locale;
	            }
	        });

	        moment.duration.fn.toString = moment.duration.fn.toISOString;

	        function makeDurationGetter(name) {
	            moment.duration.fn[name] = function () {
	                return this._data[name];
	            };
	        }

	        for (i in unitMillisecondFactors) {
	            if (hasOwnProp(unitMillisecondFactors, i)) {
	                makeDurationGetter(i.toLowerCase());
	            }
	        }

	        moment.duration.fn.asMilliseconds = function () {
	            return this.as('ms');
	        };
	        moment.duration.fn.asSeconds = function () {
	            return this.as('s');
	        };
	        moment.duration.fn.asMinutes = function () {
	            return this.as('m');
	        };
	        moment.duration.fn.asHours = function () {
	            return this.as('h');
	        };
	        moment.duration.fn.asDays = function () {
	            return this.as('d');
	        };
	        moment.duration.fn.asWeeks = function () {
	            return this.as('weeks');
	        };
	        moment.duration.fn.asMonths = function () {
	            return this.as('M');
	        };
	        moment.duration.fn.asYears = function () {
	            return this.as('y');
	        };

	        /************************************
	            Default Locale
	        ************************************/


	        // Set default locale, other locale will inherit from English.
	        moment.locale('en', {
	            ordinal : function (number) {
	                var b = number % 10,
	                    output = (toInt(number % 100 / 10) === 1) ? 'th' :
	                    (b === 1) ? 'st' :
	                    (b === 2) ? 'nd' :
	                    (b === 3) ? 'rd' : 'th';
	                return number + output;
	            }
	        });

	        return moment;

	    }).call(this);

	    UI.Utils.moment = moment;

	    return UI.datepicker;
	});

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 23 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 24 */,
/* 25 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('input', {
	    attrs: {
	      "type": "text",
	      "data-uk-datepicker": _vm.options
	    },
	    domProps: {
	      "value": _vm.value
	    }
	  })
	},staticRenderFns: []}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(27)

	/* template */
	var __vue_template__ = __webpack_require__(30)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(28);

	__webpack_require__(29);

	exports.default = {
	  name: 'UkTimepicker',
	  props: {
	    value: { type: String },
	    format: {
	      type: String,
	      default: '24h'
	    },
	    start: {
	      type: Number,
	      default: 0
	    },
	    end: {
	      type: Number,
	      default: 24
	    }
	  },
	  computed: {
	    options: function options() {
	      return JSON.stringify({
	        format: this.format,
	        start: this.start,
	        end: this.end
	      });
	    }
	  }
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
	(function(addon) {

	    var component;

	    if (window.UIkit) {
	        component = addon(UIkit);
	    }

	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function(){
	            return component || addon(UIkit);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }

	})(function(UI){

	    "use strict";

	    var active;

	    UI.component('autocomplete', {

	        defaults: {
	            minLength: 3,
	            param: 'search',
	            method: 'post',
	            delay: 300,
	            loadingClass: 'uk-loading',
	            flipDropdown: false,
	            skipClass: 'uk-skip',
	            hoverClass: 'uk-active',
	            source: null,
	            renderer: null,

	            // template

	            template: '<ul class="uk-nav uk-nav-autocomplete uk-autocomplete-results">{{~items}}<li data-value="{{$item.value}}"><a>{{$item.value}}</a></li>{{/items}}</ul>'
	        },

	        visible  : false,
	        value    : null,
	        selected : null,

	        boot: function() {

	            // init code
	            UI.$html.on('focus.autocomplete.uikit', '[data-uk-autocomplete]', function(e) {

	                var ele = UI.$(this);

	                if (!ele.data('autocomplete')) {
	                    UI.autocomplete(ele, UI.Utils.options(ele.attr('data-uk-autocomplete')));
	                }
	            });

	            // register outer click for autocompletes
	            UI.$html.on('click.autocomplete.uikit', function(e) {
	                if (active && e.target!=active.input[0]) active.hide();
	            });
	        },

	        init: function() {

	            var $this   = this,
	                select  = false,
	                trigger = UI.Utils.debounce(function(e) {

	                    if (select) {
	                        return (select = false);
	                    }

	                    $this.handle();
	                }, this.options.delay);


	            this.dropdown = this.find('.uk-dropdown');
	            this.template = this.find('script[type="text/autocomplete"]').html();
	            this.template = UI.Utils.template(this.template || this.options.template);
	            this.input    = this.find("input:first").attr("autocomplete", "off");

	            if (!this.dropdown.length) {
	               this.dropdown = UI.$('<div class="uk-dropdown"></div>').appendTo(this.element);
	            }

	            if (this.options.flipDropdown) {
	                this.dropdown.addClass('uk-dropdown-flip');
	            }

	            this.dropdown.attr('aria-expanded', 'false');

	            this.input.on({

	                keydown: function(e) {

	                    if (e && e.which && !e.shiftKey && $this.visible) {

	                        switch (e.which) {
	                            case 13: // enter
	                                select = true;

	                                if ($this.selected) {
	                                    e.preventDefault();
	                                    $this.select();
	                                }
	                                break;
	                            case 38: // up
	                                e.preventDefault();
	                                $this.pick('prev', true);
	                                break;
	                            case 40: // down
	                                e.preventDefault();
	                                $this.pick('next', true);
	                                break;
	                            case 27:
	                            case 9: // esc, tab
	                                $this.hide();
	                                break;
	                            default:
	                                break;
	                        }
	                    }

	                },

	                keyup: trigger
	            });

	            this.dropdown.on('click', '.uk-autocomplete-results > *', function(){
	                $this.select();
	            });

	            this.dropdown.on('mouseover', '.uk-autocomplete-results > *', function(){
	                $this.pick(UI.$(this));
	            });

	            this.triggercomplete = trigger;
	        },

	        handle: function() {

	            var $this = this, old = this.value;

	            this.value = this.input.val();

	            if (this.value.length < this.options.minLength) return this.hide();

	            if (this.value != old) {
	                $this.request();
	            }

	            return this;
	        },

	        pick: function(item, scrollinview) {

	            var $this    = this,
	                items    = UI.$(this.dropdown.find('.uk-autocomplete-results').children(':not(.'+this.options.skipClass+')')),
	                selected = false;

	            if (typeof item !== "string" && !item.hasClass(this.options.skipClass)) {
	                selected = item;
	            } else if (item == 'next' || item == 'prev') {

	                if (this.selected) {
	                    var index = items.index(this.selected);

	                    if (item == 'next') {
	                        selected = items.eq(index + 1 < items.length ? index + 1 : 0);
	                    } else {
	                        selected = items.eq(index - 1 < 0 ? items.length - 1 : index - 1);
	                    }

	                } else {
	                    selected = items[(item == 'next') ? 'first' : 'last']();
	                }

	                selected = UI.$(selected);
	            }

	            if (selected && selected.length) {
	                this.selected = selected;
	                items.removeClass(this.options.hoverClass);
	                this.selected.addClass(this.options.hoverClass);

	                // jump to selected if not in view
	                if (scrollinview) {

	                    var top       = selected.position().top,
	                        scrollTop = $this.dropdown.scrollTop(),
	                        dpheight  = $this.dropdown.height();

	                    if (top > dpheight ||  top < 0) {
	                        $this.dropdown.scrollTop(scrollTop + top);
	                    }
	                }
	            }
	        },

	        select: function() {

	            if(!this.selected) return;

	            var data = this.selected.data();

	            this.trigger('selectitem.uk.autocomplete', [data, this]);

	            if (data.value) {
	                this.input.val(data.value).trigger('change');
	            }

	            this.hide();
	        },

	        show: function() {

	            if (this.visible) return;

	            this.visible = true;
	            this.element.addClass('uk-open');

	            if (active && active!==this) {
	                active.hide();
	            }

	            active = this;

	            // Update aria
	            this.dropdown.attr('aria-expanded', 'true');

	            return this;
	        },

	        hide: function() {
	            if (!this.visible) return;
	            this.visible = false;
	            this.element.removeClass('uk-open');

	            if (active === this) {
	                active = false;
	            }

	            // Update aria
	            this.dropdown.attr('aria-expanded', 'false');

	            return this;
	        },

	        request: function() {

	            var $this   = this,
	                release = function(data) {

	                    if(data) {
	                        $this.render(data);
	                    }

	                    $this.element.removeClass($this.options.loadingClass);
	                };

	            this.element.addClass(this.options.loadingClass);

	            if (this.options.source) {

	                var source = this.options.source;

	                switch(typeof(this.options.source)) {
	                    case 'function':

	                        this.options.source.apply(this, [release]);

	                        break;

	                    case 'object':

	                        if(source.length) {

	                            var items = [];

	                            source.forEach(function(item){
	                                if(item.value && item.value.toLowerCase().indexOf($this.value.toLowerCase())!=-1) {
	                                    items.push(item);
	                                }
	                            });

	                            release(items);
	                        }

	                        break;

	                    case 'string':

	                        var params ={};

	                        params[this.options.param] = this.value;

	                        UI.$.ajax({
	                            url: this.options.source,
	                            data: params,
	                            type: this.options.method,
	                            dataType: 'json'
	                        }).done(function(json) {
	                            release(json || []);
	                        });

	                        break;

	                    default:
	                        release(null);
	                }

	            } else {
	                this.element.removeClass($this.options.loadingClass);
	            }
	        },

	        render: function(data) {

	            this.dropdown.empty();

	            this.selected = false;

	            if (this.options.renderer) {

	                this.options.renderer.apply(this, [data]);

	            } else if(data && data.length) {

	                this.dropdown.append(this.template({items:data}));
	                this.show();

	                this.trigger('show.uk.autocomplete');
	            }

	            return this;
	        }
	    });

	    return UI.autocomplete;
	});


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
	(function(addon) {

	    var component;

	    if (window.UIkit) {
	        component = addon(UIkit);
	    }

	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function(){
	            return component || addon(UIkit);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }

	})(function(UI){

	    "use strict";


	    UI.component('timepicker', {

	        defaults: {
	            format : '24h',
	            delay  : 0,
	            start  : 0,
	            end    : 24
	        },

	        boot: function() {

	            // init code
	            UI.$html.on('focus.timepicker.uikit', '[data-uk-timepicker]', function(e) {

	                var ele = UI.$(this);

	                if (!ele.data('timepicker')) {
	                    var obj = UI.timepicker(ele, UI.Utils.options(ele.attr('data-uk-timepicker')));

	                    setTimeout(function(){
	                        obj.autocomplete.input.focus();
	                    }, 40);
	                }
	            });
	        },

	        init: function() {

	            var $this  = this, times = getTimeRange(this.options.start, this.options.end), container;

	            this.options.minLength = 0;
	            this.options.template  = '<ul class="uk-nav uk-nav-autocomplete uk-autocomplete-results">{{~items}}<li data-value="{{$item.value}}"><a>{{$item.value}}</a></li>{{/items}}</ul>';

	            this.options.source = function(release) {
	                release(times[$this.options.format] || times['12h']);
	            };

	            if (this.element.is('input')) {
	                this.element.wrap('<div class="uk-autocomplete"></div>');
	                container = this.element.parent();
	            } else {
	                container = this.element.addClass('uk-autocomplete');
	            }

	            this.autocomplete = UI.autocomplete(container, this.options);
	            this.autocomplete.dropdown.addClass('uk-dropdown-small uk-dropdown-scrollable');

	            this.autocomplete.on('show.uk.autocomplete', function() {

	                var selected = $this.autocomplete.dropdown.find('[data-value="'+$this.autocomplete.input.val()+'"]');

	                setTimeout(function(){
	                    $this.autocomplete.pick(selected, true);
	                }, 10);
	            });

	            this.autocomplete.input.on('focus', function(){

	                $this.autocomplete.value = Math.random();
	                $this.autocomplete.triggercomplete();

	            }).on('blur', UI.Utils.debounce(function() {
	                $this.checkTime();
	            }, 100));

	            this.element.data("timepicker", this);
	        },

	        checkTime: function() {

	            var arr, timeArray, meridian = 'AM', hour, minute, time = this.autocomplete.input.val();

	            if (this.options.format == '12h') {
	                arr = time.split(' ');
	                timeArray = arr[0].split(':');
	                meridian = arr[1];
	            } else {
	                timeArray = time.split(':');
	            }

	            hour   = parseInt(timeArray[0], 10);
	            minute = parseInt(timeArray[1], 10);

	            if (isNaN(hour))   hour = 0;
	            if (isNaN(minute)) minute = 0;

	            if (this.options.format == '12h') {
	                if (hour > 12) {
	                    hour = 12;
	                } else if (hour < 0) {
	                    hour = 12;
	                }

	                if (meridian === 'am' || meridian === 'a') {
	                    meridian = 'AM';
	                } else if (meridian === 'pm' || meridian === 'p') {
	                    meridian = 'PM';
	                }

	                if (meridian !== 'AM' && meridian !== 'PM') {
	                    meridian = 'AM';
	                }

	            } else {

	                if (hour >= 24) {
	                    hour = 23;
	                } else if (hour < 0) {
	                    hour = 0;
	                }
	            }

	            if (minute < 0) {
	                minute = 0;
	            } else if (minute >= 60) {
	                minute = 0;
	            }

	            this.autocomplete.input.val(this.formatTime(hour, minute, meridian)).trigger('change');
	        },

	        formatTime: function(hour, minute, meridian) {
	            hour = hour < 10 ? '0' + hour : hour;
	            minute = minute < 10 ? '0' + minute : minute;
	            return hour + ':' + minute + (this.options.format == '12h' ? ' ' + meridian : '');
	        }
	    });

	    // helper

	    function getTimeRange(start, end) {

	        start = start || 0;
	        end   = end || 24;

	        var times = {'12h':[], '24h':[]}, i, h;

	        for (i = start, h=''; i<end; i++) {

	            h = ''+i;

	            if (i<10)  h = '0'+h;

	            times['24h'].push({value: (h+':00')});
	            times['24h'].push({value: (h+':30')});

	            if (i === 0) {
	                h = 12;
	                times['12h'].push({value: (h+':00 AM')});
	                times['12h'].push({value: (h+':30 AM')});
	            }

	            if (i > 0 && i<13 && i!==12) {
	                times['12h'].push({value: (h+':00 AM')});
	                times['12h'].push({value: (h+':30 AM')});
	            }

	            if (i >= 12) {

	                h = h-12;
	                if (h === 0) h = 12;
	                if (h < 10) h = '0'+String(h);

	                times['12h'].push({value: (h+':00 PM')});
	                times['12h'].push({value: (h+':30 PM')});
	            }
	        }

	        return times;
	    }

	});


/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('input', {
	    attrs: {
	      "type": "text",
	      "data-uk-timepicker": _vm.options
	    },
	    domProps: {
	      "value": _vm.value
	    }
	  })
	},staticRenderFns: []}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UkTabs = exports.UkTab = undefined;

	var _uuid = __webpack_require__(32);

	var _uuid2 = _interopRequireDefault(_uuid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var UkTab = exports.UkTab = {
	  name: 'UkTab',
	  props: {
	    label: {
	      type: String,
	      default: 'Tab'
	    },
	    index: {
	      type: Number,
	      default: 0
	    },
	    disabled: {
	      type: Boolean
	    }
	  },
	  computed: {
	    active: function active() {
	      return this.index === this.$parent.index;
	    }
	  },
	  render: function render(h) {
	    return h(
	      'li',
	      null,
	      [this.$slots.default]
	    );
	  }
	};

	var UkTabs = exports.UkTabs = {
	  name: 'UkTabs',
	  props: {
	    active: {
	      type: Number,
	      default: 0
	    },
	    layout: {
	      type: String
	    },
	    center: {
	      type: Boolean
	    },
	    width: {
	      type: String
	    }
	  },
	  data: function data() {
	    return {
	      tabItems: []
	    };
	  },
	  beforeMount: function beforeMount() {
	    this.tabItems = this.$slots.default.filter(function (node) {
	      return node.componentOptions && node.componentOptions.tag === 'uk-tab';
	    }).map(function (node, index) {
	      var data = node.componentOptions.propsData;
	      data.index = index;
	      return node;
	    });
	  },
	  render: function render(h) {
	    var _this = this;

	    var tabID = _uuid2.default.v4();
	    var tabJSON = '{ active:' + this.active + ',connect:\'#' + tabID + '\'}';
	    var tabClasses = {
	      'uk-tab': true
	    };

	    if (this.layout) {
	      tabClasses['uk-tab-' + this.layout] = true;
	    }

	    var tabContentClasses = {
	      'uk-switcher': true,
	      'uk-margin': true
	    };

	    if (this.width && (this.layout === 'left' || this.layout === 'right')) {
	      tabClasses['uk-width-medium-' + this.width] = true;
	      var widths = this.width.split('-');
	      var contentWidth = parseInt(widths[1]) - parseInt(widths[0]);

	      tabContentClasses['uk-width-medium-' + contentWidth + '-' + widths[1]] = true;

	      if (this.layout === 'right') {
	        tabClasses['uk-push-' + contentWidth + '-' + widths[1]] = true;
	        tabContentClasses['uk-pull-' + this.width] = true;
	        tabContentClasses['uk-row-first'] = true;
	      }
	    }

	    var tabsFn = function tabsFn() {
	      return h(
	        'ul',
	        { 'class': tabClasses,
	          attrs: { 'data-uk-tab': tabJSON }
	        },
	        [_this.tabItems.map(function (tab) {
	          return h(
	            'li',
	            { 'class': {
	                'uk-disabled': tab.componentOptions.propsData.disabled
	              } },
	            [h(
	              'a',
	              {
	                attrs: { href: '' }
	              },
	              [tab.componentOptions.propsData.label]
	            )]
	          );
	        })]
	      );
	    };

	    var tabsContentFn = function tabsContentFn() {
	      return h(
	        'ul',
	        { 'class': tabContentClasses,
	          attrs: { id: tabID }
	        },
	        [_this.tabItems.map(function (tab) {
	          return h(
	            'li',
	            null,
	            [tab.componentOptions.children]
	          );
	        })]
	      );
	    };

	    return h(
	      'div',
	      { 'class': {
	          'uk-tab-center': this.center,
	          'uk-grid': this.layout === 'left' || this.layout === 'right'
	        } },
	      [this.layout === 'bottom' ? [tabsContentFn(), tabsFn()] : [tabsFn(), tabsContentFn()]]
	    );
	  }
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var v1 = __webpack_require__(33);
	var v4 = __webpack_require__(36);

	var uuid = v4;
	uuid.v1 = v1;
	uuid.v4 = v4;

	module.exports = uuid;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// Unique ID creation requires a high quality random # generator.  We feature
	// detect to determine the best RNG source, normalizing to a function that
	// returns 128-bits of randomness, since that's what's usually required
	var rng = __webpack_require__(34);
	var bytesToUuid = __webpack_require__(35);

	// **`v1()` - Generate time-based UUID**
	//
	// Inspired by https://github.com/LiosK/UUID.js
	// and http://docs.python.org/library/uuid.html

	// random #'s we need to init node and clockseq
	var _seedBytes = rng();

	// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
	var _nodeId = [
	  _seedBytes[0] | 0x01,
	  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
	];

	// Per 4.2.2, randomize (14 bit) clockseq
	var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

	// Previous uuid creation time
	var _lastMSecs = 0, _lastNSecs = 0;

	// See https://github.com/broofa/node-uuid for API details
	function v1(options, buf, offset) {
	  var i = buf && offset || 0;
	  var b = buf || [];

	  options = options || {};

	  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

	  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
	  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
	  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
	  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
	  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

	  // Per 4.2.1.2, use count of uuid's generated during the current clock
	  // cycle to simulate higher resolution clock
	  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

	  // Time since last uuid creation (in msecs)
	  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

	  // Per 4.2.1.2, Bump clockseq on clock regression
	  if (dt < 0 && options.clockseq === undefined) {
	    clockseq = clockseq + 1 & 0x3fff;
	  }

	  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
	  // time interval
	  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
	    nsecs = 0;
	  }

	  // Per 4.2.1.2 Throw error if too many uuids are requested
	  if (nsecs >= 10000) {
	    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
	  }

	  _lastMSecs = msecs;
	  _lastNSecs = nsecs;
	  _clockseq = clockseq;

	  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
	  msecs += 12219292800000;

	  // `time_low`
	  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
	  b[i++] = tl >>> 24 & 0xff;
	  b[i++] = tl >>> 16 & 0xff;
	  b[i++] = tl >>> 8 & 0xff;
	  b[i++] = tl & 0xff;

	  // `time_mid`
	  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
	  b[i++] = tmh >>> 8 & 0xff;
	  b[i++] = tmh & 0xff;

	  // `time_high_and_version`
	  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
	  b[i++] = tmh >>> 16 & 0xff;

	  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
	  b[i++] = clockseq >>> 8 | 0x80;

	  // `clock_seq_low`
	  b[i++] = clockseq & 0xff;

	  // `node`
	  var node = options.node || _nodeId;
	  for (var n = 0; n < 6; ++n) {
	    b[i + n] = node[n];
	  }

	  return buf ? buf : bytesToUuid(b);
	}

	module.exports = v1;


/***/ },
/* 34 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {// Unique ID creation requires a high quality random # generator.  In the
	// browser this is a little complicated due to unknown quality of Math.random()
	// and inconsistent support for the `crypto` API.  We do the best we can via
	// feature-detection
	var rng;

	var crypto = global.crypto || global.msCrypto; // for IE 11
	if (crypto && crypto.getRandomValues) {
	  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
	  var rnds8 = new Uint8Array(16);
	  rng = function whatwgRNG() {
	    crypto.getRandomValues(rnds8);
	    return rnds8;
	  };
	}

	if (!rng) {
	  // Math.random()-based (RNG)
	  //
	  // If all else fails, use Math.random().  It's fast, but is of unspecified
	  // quality.
	  var  rnds = new Array(16);
	  rng = function() {
	    for (var i = 0, r; i < 16; i++) {
	      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
	      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
	    }

	    return rnds;
	  };
	}

	module.exports = rng;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 35 */
/***/ function(module, exports) {

	/**
	 * Convert array of 16 byte values to UUID string format of the form:
	 * XXXXXXXX-XXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
	 */
	var byteToHex = [];
	for (var i = 0; i < 256; ++i) {
	  byteToHex[i] = (i + 0x100).toString(16).substr(1);
	}

	function bytesToUuid(buf, offset) {
	  var i = offset || 0;
	  var bth = byteToHex;
	  return  bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]];
	}

	module.exports = bytesToUuid;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var rng = __webpack_require__(34);
	var bytesToUuid = __webpack_require__(35);

	function v4(options, buf, offset) {
	  var i = buf && offset || 0;

	  if (typeof(options) == 'string') {
	    buf = options == 'binary' ? new Array(16) : null;
	    options = null;
	  }
	  options = options || {};

	  var rnds = options.random || (options.rng || rng)();

	  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
	  rnds[6] = (rnds[6] & 0x0f) | 0x40;
	  rnds[8] = (rnds[8] & 0x3f) | 0x80;

	  // Copy bytes to buffer, if provided
	  if (buf) {
	    for (var ii = 0; ii < 16; ++ii) {
	      buf[i + ii] = rnds[ii];
	    }
	  }

	  return buf || bytesToUuid(rnds);
	}

	module.exports = v4;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(38);

	__webpack_require__(39);

	__webpack_require__(42);

	__webpack_require__(40);

	__webpack_require__(43);

	__webpack_require__(44);

	__webpack_require__(45);

	__webpack_require__(47);

	__webpack_require__(48);

	__webpack_require__(50);

	exports.default = {
	  name: 'UkHtmlEditor',
	  props: {
	    'value': {
	      type: String,
	      default: ''
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;

	    var htmlEditor = window.UIkit.htmleditor(this.$refs.editor, {
	      markdown: true,
	      mode: 'tab'
	    });
	    var self = this;
	    this.$ui.$(this.$refs.editor).on('input', function () {
	      var _val = htmlEditor.editor.getValue();
	      if (_val !== self.value) {
	        _this.$emit('change', _val);
	      }
	    });
	  },
	  render: function render(h) {
	    return h(
	      'div',
	      null,
	      [h(
	        'textarea',
	        {
	          attrs: { rows: '20' },
	          ref: 'editor' },
	        [this.value]
	      )]
	    );
	  }
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	// This is CodeMirror (http://codemirror.net), a code editor
	// implemented in JavaScript on top of the browser's DOM.
	//
	// You can find some technical background for some of the code below
	// at http://marijnhaverbeke.nl/blog/#cm-internals .

	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.CodeMirror = factory());
	}(this, (function () { 'use strict';

	// Kludges for bugs and behavior differences that can't be feature
	// detected are enabled based on userAgent etc sniffing.
	var userAgent = navigator.userAgent
	var platform = navigator.platform

	var gecko = /gecko\/\d/i.test(userAgent)
	var ie_upto10 = /MSIE \d/.test(userAgent)
	var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent)
	var ie = ie_upto10 || ie_11up
	var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : ie_11up[1])
	var webkit = /WebKit\//.test(userAgent)
	var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent)
	var chrome = /Chrome\//.test(userAgent)
	var presto = /Opera\//.test(userAgent)
	var safari = /Apple Computer/.test(navigator.vendor)
	var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent)
	var phantom = /PhantomJS/.test(userAgent)

	var ios = /AppleWebKit/.test(userAgent) && /Mobile\/\w+/.test(userAgent)
	// This is woefully incomplete. Suggestions for alternative methods welcome.
	var mobile = ios || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent)
	var mac = ios || /Mac/.test(platform)
	var chromeOS = /\bCrOS\b/.test(userAgent)
	var windows = /win/i.test(platform)

	var presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/)
	if (presto_version) { presto_version = Number(presto_version[1]) }
	if (presto_version && presto_version >= 15) { presto = false; webkit = true }
	// Some browsers use the wrong event properties to signal cmd/ctrl on OS X
	var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11))
	var captureRightClick = gecko || (ie && ie_version >= 9)

	function classTest(cls) { return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*") }

	var rmClass = function(node, cls) {
	  var current = node.className
	  var match = classTest(cls).exec(current)
	  if (match) {
	    var after = current.slice(match.index + match[0].length)
	    node.className = current.slice(0, match.index) + (after ? match[1] + after : "")
	  }
	}

	function removeChildren(e) {
	  for (var count = e.childNodes.length; count > 0; --count)
	    { e.removeChild(e.firstChild) }
	  return e
	}

	function removeChildrenAndAdd(parent, e) {
	  return removeChildren(parent).appendChild(e)
	}

	function elt(tag, content, className, style) {
	  var e = document.createElement(tag)
	  if (className) { e.className = className }
	  if (style) { e.style.cssText = style }
	  if (typeof content == "string") { e.appendChild(document.createTextNode(content)) }
	  else if (content) { for (var i = 0; i < content.length; ++i) { e.appendChild(content[i]) } }
	  return e
	}

	var range
	if (document.createRange) { range = function(node, start, end, endNode) {
	  var r = document.createRange()
	  r.setEnd(endNode || node, end)
	  r.setStart(node, start)
	  return r
	} }
	else { range = function(node, start, end) {
	  var r = document.body.createTextRange()
	  try { r.moveToElementText(node.parentNode) }
	  catch(e) { return r }
	  r.collapse(true)
	  r.moveEnd("character", end)
	  r.moveStart("character", start)
	  return r
	} }

	function contains(parent, child) {
	  if (child.nodeType == 3) // Android browser always returns false when child is a textnode
	    { child = child.parentNode }
	  if (parent.contains)
	    { return parent.contains(child) }
	  do {
	    if (child.nodeType == 11) { child = child.host }
	    if (child == parent) { return true }
	  } while (child = child.parentNode)
	}

	function activeElt() {
	  // IE and Edge may throw an "Unspecified Error" when accessing document.activeElement.
	  // IE < 10 will throw when accessed while the page is loading or in an iframe.
	  // IE > 9 and Edge will throw when accessed in an iframe if document.body is unavailable.
	  var activeElement
	  try {
	    activeElement = document.activeElement
	  } catch(e) {
	    activeElement = document.body || null
	  }
	  while (activeElement && activeElement.root && activeElement.root.activeElement)
	    { activeElement = activeElement.root.activeElement }
	  return activeElement
	}

	function addClass(node, cls) {
	  var current = node.className
	  if (!classTest(cls).test(current)) { node.className += (current ? " " : "") + cls }
	}
	function joinClasses(a, b) {
	  var as = a.split(" ")
	  for (var i = 0; i < as.length; i++)
	    { if (as[i] && !classTest(as[i]).test(b)) { b += " " + as[i] } }
	  return b
	}

	var selectInput = function(node) { node.select() }
	if (ios) // Mobile Safari apparently has a bug where select() is broken.
	  { selectInput = function(node) { node.selectionStart = 0; node.selectionEnd = node.value.length } }
	else if (ie) // Suppress mysterious IE10 errors
	  { selectInput = function(node) { try { node.select() } catch(_e) {} } }

	function bind(f) {
	  var args = Array.prototype.slice.call(arguments, 1)
	  return function(){return f.apply(null, args)}
	}

	function copyObj(obj, target, overwrite) {
	  if (!target) { target = {} }
	  for (var prop in obj)
	    { if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop)))
	      { target[prop] = obj[prop] } }
	  return target
	}

	// Counts the column offset in a string, taking tabs into account.
	// Used mostly to find indentation.
	function countColumn(string, end, tabSize, startIndex, startValue) {
	  if (end == null) {
	    end = string.search(/[^\s\u00a0]/)
	    if (end == -1) { end = string.length }
	  }
	  for (var i = startIndex || 0, n = startValue || 0;;) {
	    var nextTab = string.indexOf("\t", i)
	    if (nextTab < 0 || nextTab >= end)
	      { return n + (end - i) }
	    n += nextTab - i
	    n += tabSize - (n % tabSize)
	    i = nextTab + 1
	  }
	}

	function Delayed() {this.id = null}
	Delayed.prototype.set = function(ms, f) {
	  clearTimeout(this.id)
	  this.id = setTimeout(f, ms)
	}

	function indexOf(array, elt) {
	  for (var i = 0; i < array.length; ++i)
	    { if (array[i] == elt) { return i } }
	  return -1
	}

	// Number of pixels added to scroller and sizer to hide scrollbar
	var scrollerGap = 30

	// Returned or thrown by various protocols to signal 'I'm not
	// handling this'.
	var Pass = {toString: function(){return "CodeMirror.Pass"}}

	// Reused option objects for setSelection & friends
	var sel_dontScroll = {scroll: false};
	var sel_mouse = {origin: "*mouse"};
	var sel_move = {origin: "+move"};
	// The inverse of countColumn -- find the offset that corresponds to
	// a particular column.
	function findColumn(string, goal, tabSize) {
	  for (var pos = 0, col = 0;;) {
	    var nextTab = string.indexOf("\t", pos)
	    if (nextTab == -1) { nextTab = string.length }
	    var skipped = nextTab - pos
	    if (nextTab == string.length || col + skipped >= goal)
	      { return pos + Math.min(skipped, goal - col) }
	    col += nextTab - pos
	    col += tabSize - (col % tabSize)
	    pos = nextTab + 1
	    if (col >= goal) { return pos }
	  }
	}

	var spaceStrs = [""]
	function spaceStr(n) {
	  while (spaceStrs.length <= n)
	    { spaceStrs.push(lst(spaceStrs) + " ") }
	  return spaceStrs[n]
	}

	function lst(arr) { return arr[arr.length-1] }

	function map(array, f) {
	  var out = []
	  for (var i = 0; i < array.length; i++) { out[i] = f(array[i], i) }
	  return out
	}

	function insertSorted(array, value, score) {
	  var pos = 0, priority = score(value)
	  while (pos < array.length && score(array[pos]) <= priority) { pos++ }
	  array.splice(pos, 0, value)
	}

	function nothing() {}

	function createObj(base, props) {
	  var inst
	  if (Object.create) {
	    inst = Object.create(base)
	  } else {
	    nothing.prototype = base
	    inst = new nothing()
	  }
	  if (props) { copyObj(props, inst) }
	  return inst
	}

	var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/
	function isWordCharBasic(ch) {
	  return /\w/.test(ch) || ch > "\x80" &&
	    (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch))
	}
	function isWordChar(ch, helper) {
	  if (!helper) { return isWordCharBasic(ch) }
	  if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) { return true }
	  return helper.test(ch)
	}

	function isEmpty(obj) {
	  for (var n in obj) { if (obj.hasOwnProperty(n) && obj[n]) { return false } }
	  return true
	}

	// Extending unicode characters. A series of a non-extending char +
	// any number of extending chars is treated as a single unit as far
	// as editing and measuring is concerned. This is not fully correct,
	// since some scripts/fonts/browsers also treat other configurations
	// of code points as a group.
	var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/
	function isExtendingChar(ch) { return ch.charCodeAt(0) >= 768 && extendingChars.test(ch) }

	// The display handles the DOM integration, both for input reading
	// and content drawing. It holds references to DOM nodes and
	// display-related state.

	function Display(place, doc, input) {
	  var d = this
	  this.input = input

	  // Covers bottom-right square when both scrollbars are present.
	  d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler")
	  d.scrollbarFiller.setAttribute("cm-not-content", "true")
	  // Covers bottom of gutter when coverGutterNextToScrollbar is on
	  // and h scrollbar is present.
	  d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler")
	  d.gutterFiller.setAttribute("cm-not-content", "true")
	  // Will contain the actual code, positioned to cover the viewport.
	  d.lineDiv = elt("div", null, "CodeMirror-code")
	  // Elements are added to these to represent selection and cursors.
	  d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1")
	  d.cursorDiv = elt("div", null, "CodeMirror-cursors")
	  // A visibility: hidden element used to find the size of things.
	  d.measure = elt("div", null, "CodeMirror-measure")
	  // When lines outside of the viewport are measured, they are drawn in this.
	  d.lineMeasure = elt("div", null, "CodeMirror-measure")
	  // Wraps everything that needs to exist inside the vertically-padded coordinate system
	  d.lineSpace = elt("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
	                    null, "position: relative; outline: none")
	  // Moved around its parent to cover visible view.
	  d.mover = elt("div", [elt("div", [d.lineSpace], "CodeMirror-lines")], null, "position: relative")
	  // Set to the height of the document, allowing scrolling.
	  d.sizer = elt("div", [d.mover], "CodeMirror-sizer")
	  d.sizerWidth = null
	  // Behavior of elts with overflow: auto and padding is
	  // inconsistent across browsers. This is used to ensure the
	  // scrollable area is big enough.
	  d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;")
	  // Will contain the gutters, if any.
	  d.gutters = elt("div", null, "CodeMirror-gutters")
	  d.lineGutter = null
	  // Actual scrollable element.
	  d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll")
	  d.scroller.setAttribute("tabIndex", "-1")
	  // The element in which the editor lives.
	  d.wrapper = elt("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror")

	  // Work around IE7 z-index bug (not perfect, hence IE7 not really being supported)
	  if (ie && ie_version < 8) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0 }
	  if (!webkit && !(gecko && mobile)) { d.scroller.draggable = true }

	  if (place) {
	    if (place.appendChild) { place.appendChild(d.wrapper) }
	    else { place(d.wrapper) }
	  }

	  // Current rendered range (may be bigger than the view window).
	  d.viewFrom = d.viewTo = doc.first
	  d.reportedViewFrom = d.reportedViewTo = doc.first
	  // Information about the rendered lines.
	  d.view = []
	  d.renderedView = null
	  // Holds info about a single rendered line when it was rendered
	  // for measurement, while not in view.
	  d.externalMeasured = null
	  // Empty space (in pixels) above the view
	  d.viewOffset = 0
	  d.lastWrapHeight = d.lastWrapWidth = 0
	  d.updateLineNumbers = null

	  d.nativeBarWidth = d.barHeight = d.barWidth = 0
	  d.scrollbarsClipped = false

	  // Used to only resize the line number gutter when necessary (when
	  // the amount of lines crosses a boundary that makes its width change)
	  d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null
	  // Set to true when a non-horizontal-scrolling line widget is
	  // added. As an optimization, line widget aligning is skipped when
	  // this is false.
	  d.alignWidgets = false

	  d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null

	  // Tracks the maximum line length so that the horizontal scrollbar
	  // can be kept static when scrolling.
	  d.maxLine = null
	  d.maxLineLength = 0
	  d.maxLineChanged = false

	  // Used for measuring wheel scrolling granularity
	  d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null

	  // True when shift is held down.
	  d.shift = false

	  // Used to track whether anything happened since the context menu
	  // was opened.
	  d.selForContextMenu = null

	  d.activeTouch = null

	  input.init(d)
	}

	// Find the line object corresponding to the given line number.
	function getLine(doc, n) {
	  n -= doc.first
	  if (n < 0 || n >= doc.size) { throw new Error("There is no line " + (n + doc.first) + " in the document.") }
	  var chunk = doc
	  while (!chunk.lines) {
	    for (var i = 0;; ++i) {
	      var child = chunk.children[i], sz = child.chunkSize()
	      if (n < sz) { chunk = child; break }
	      n -= sz
	    }
	  }
	  return chunk.lines[n]
	}

	// Get the part of a document between two positions, as an array of
	// strings.
	function getBetween(doc, start, end) {
	  var out = [], n = start.line
	  doc.iter(start.line, end.line + 1, function (line) {
	    var text = line.text
	    if (n == end.line) { text = text.slice(0, end.ch) }
	    if (n == start.line) { text = text.slice(start.ch) }
	    out.push(text)
	    ++n
	  })
	  return out
	}
	// Get the lines between from and to, as array of strings.
	function getLines(doc, from, to) {
	  var out = []
	  doc.iter(from, to, function (line) { out.push(line.text) }) // iter aborts when callback returns truthy value
	  return out
	}

	// Update the height of a line, propagating the height change
	// upwards to parent nodes.
	function updateLineHeight(line, height) {
	  var diff = height - line.height
	  if (diff) { for (var n = line; n; n = n.parent) { n.height += diff } }
	}

	// Given a line object, find its line number by walking up through
	// its parent links.
	function lineNo(line) {
	  if (line.parent == null) { return null }
	  var cur = line.parent, no = indexOf(cur.lines, line)
	  for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
	    for (var i = 0;; ++i) {
	      if (chunk.children[i] == cur) { break }
	      no += chunk.children[i].chunkSize()
	    }
	  }
	  return no + cur.first
	}

	// Find the line at the given vertical position, using the height
	// information in the document tree.
	function lineAtHeight(chunk, h) {
	  var n = chunk.first
	  outer: do {
	    for (var i$1 = 0; i$1 < chunk.children.length; ++i$1) {
	      var child = chunk.children[i$1], ch = child.height
	      if (h < ch) { chunk = child; continue outer }
	      h -= ch
	      n += child.chunkSize()
	    }
	    return n
	  } while (!chunk.lines)
	  var i = 0
	  for (; i < chunk.lines.length; ++i) {
	    var line = chunk.lines[i], lh = line.height
	    if (h < lh) { break }
	    h -= lh
	  }
	  return n + i
	}

	function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size}

	function lineNumberFor(options, i) {
	  return String(options.lineNumberFormatter(i + options.firstLineNumber))
	}

	// A Pos instance represents a position within the text.
	function Pos (line, ch) {
	  if (!(this instanceof Pos)) { return new Pos(line, ch) }
	  this.line = line; this.ch = ch
	}

	// Compare two positions, return 0 if they are the same, a negative
	// number when a is less, and a positive number otherwise.
	function cmp(a, b) { return a.line - b.line || a.ch - b.ch }

	function copyPos(x) {return Pos(x.line, x.ch)}
	function maxPos(a, b) { return cmp(a, b) < 0 ? b : a }
	function minPos(a, b) { return cmp(a, b) < 0 ? a : b }

	// Most of the external API clips given positions to make sure they
	// actually exist within the document.
	function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1))}
	function clipPos(doc, pos) {
	  if (pos.line < doc.first) { return Pos(doc.first, 0) }
	  var last = doc.first + doc.size - 1
	  if (pos.line > last) { return Pos(last, getLine(doc, last).text.length) }
	  return clipToLen(pos, getLine(doc, pos.line).text.length)
	}
	function clipToLen(pos, linelen) {
	  var ch = pos.ch
	  if (ch == null || ch > linelen) { return Pos(pos.line, linelen) }
	  else if (ch < 0) { return Pos(pos.line, 0) }
	  else { return pos }
	}
	function clipPosArray(doc, array) {
	  var out = []
	  for (var i = 0; i < array.length; i++) { out[i] = clipPos(doc, array[i]) }
	  return out
	}

	// Optimize some code when these features are not used.
	var sawReadOnlySpans = false;
	var sawCollapsedSpans = false;
	function seeReadOnlySpans() {
	  sawReadOnlySpans = true
	}

	function seeCollapsedSpans() {
	  sawCollapsedSpans = true
	}

	// TEXTMARKER SPANS

	function MarkedSpan(marker, from, to) {
	  this.marker = marker
	  this.from = from; this.to = to
	}

	// Search an array of spans for a span matching the given marker.
	function getMarkedSpanFor(spans, marker) {
	  if (spans) { for (var i = 0; i < spans.length; ++i) {
	    var span = spans[i]
	    if (span.marker == marker) { return span }
	  } }
	}
	// Remove a span from an array, returning undefined if no spans are
	// left (we don't store arrays for lines without spans).
	function removeMarkedSpan(spans, span) {
	  var r
	  for (var i = 0; i < spans.length; ++i)
	    { if (spans[i] != span) { (r || (r = [])).push(spans[i]) } }
	  return r
	}
	// Add a span to a line.
	function addMarkedSpan(line, span) {
	  line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span]
	  span.marker.attachLine(line)
	}

	// Used for the algorithm that adjusts markers for a change in the
	// document. These functions cut an array of spans at a given
	// character position, returning an array of remaining chunks (or
	// undefined if nothing remains).
	function markedSpansBefore(old, startCh, isInsert) {
	  var nw
	  if (old) { for (var i = 0; i < old.length; ++i) {
	    var span = old[i], marker = span.marker
	    var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh)
	    if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
	      var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh)
	      ;(nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to))
	    }
	  } }
	  return nw
	}
	function markedSpansAfter(old, endCh, isInsert) {
	  var nw
	  if (old) { for (var i = 0; i < old.length; ++i) {
	    var span = old[i], marker = span.marker
	    var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh)
	    if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
	      var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh)
	      ;(nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh,
	                                            span.to == null ? null : span.to - endCh))
	    }
	  } }
	  return nw
	}

	// Given a change object, compute the new set of marker spans that
	// cover the line in which the change took place. Removes spans
	// entirely within the change, reconnects spans belonging to the
	// same marker that appear on both sides of the change, and cuts off
	// spans partially within the change. Returns an array of span
	// arrays with one element for each line in (after) the change.
	function stretchSpansOverChange(doc, change) {
	  if (change.full) { return null }
	  var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans
	  var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans
	  if (!oldFirst && !oldLast) { return null }

	  var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0
	  // Get the spans that 'stick out' on both sides
	  var first = markedSpansBefore(oldFirst, startCh, isInsert)
	  var last = markedSpansAfter(oldLast, endCh, isInsert)

	  // Next, merge those two ends
	  var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0)
	  if (first) {
	    // Fix up .to properties of first
	    for (var i = 0; i < first.length; ++i) {
	      var span = first[i]
	      if (span.to == null) {
	        var found = getMarkedSpanFor(last, span.marker)
	        if (!found) { span.to = startCh }
	        else if (sameLine) { span.to = found.to == null ? null : found.to + offset }
	      }
	    }
	  }
	  if (last) {
	    // Fix up .from in last (or move them into first in case of sameLine)
	    for (var i$1 = 0; i$1 < last.length; ++i$1) {
	      var span$1 = last[i$1]
	      if (span$1.to != null) { span$1.to += offset }
	      if (span$1.from == null) {
	        var found$1 = getMarkedSpanFor(first, span$1.marker)
	        if (!found$1) {
	          span$1.from = offset
	          if (sameLine) { (first || (first = [])).push(span$1) }
	        }
	      } else {
	        span$1.from += offset
	        if (sameLine) { (first || (first = [])).push(span$1) }
	      }
	    }
	  }
	  // Make sure we didn't create any zero-length spans
	  if (first) { first = clearEmptySpans(first) }
	  if (last && last != first) { last = clearEmptySpans(last) }

	  var newMarkers = [first]
	  if (!sameLine) {
	    // Fill gap with whole-line-spans
	    var gap = change.text.length - 2, gapMarkers
	    if (gap > 0 && first)
	      { for (var i$2 = 0; i$2 < first.length; ++i$2)
	        { if (first[i$2].to == null)
	          { (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i$2].marker, null, null)) } } }
	    for (var i$3 = 0; i$3 < gap; ++i$3)
	      { newMarkers.push(gapMarkers) }
	    newMarkers.push(last)
	  }
	  return newMarkers
	}

	// Remove spans that are empty and don't have a clearWhenEmpty
	// option of false.
	function clearEmptySpans(spans) {
	  for (var i = 0; i < spans.length; ++i) {
	    var span = spans[i]
	    if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false)
	      { spans.splice(i--, 1) }
	  }
	  if (!spans.length) { return null }
	  return spans
	}

	// Used to 'clip' out readOnly ranges when making a change.
	function removeReadOnlyRanges(doc, from, to) {
	  var markers = null
	  doc.iter(from.line, to.line + 1, function (line) {
	    if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
	      var mark = line.markedSpans[i].marker
	      if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
	        { (markers || (markers = [])).push(mark) }
	    } }
	  })
	  if (!markers) { return null }
	  var parts = [{from: from, to: to}]
	  for (var i = 0; i < markers.length; ++i) {
	    var mk = markers[i], m = mk.find(0)
	    for (var j = 0; j < parts.length; ++j) {
	      var p = parts[j]
	      if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) { continue }
	      var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to)
	      if (dfrom < 0 || !mk.inclusiveLeft && !dfrom)
	        { newParts.push({from: p.from, to: m.from}) }
	      if (dto > 0 || !mk.inclusiveRight && !dto)
	        { newParts.push({from: m.to, to: p.to}) }
	      parts.splice.apply(parts, newParts)
	      j += newParts.length - 1
	    }
	  }
	  return parts
	}

	// Connect or disconnect spans from a line.
	function detachMarkedSpans(line) {
	  var spans = line.markedSpans
	  if (!spans) { return }
	  for (var i = 0; i < spans.length; ++i)
	    { spans[i].marker.detachLine(line) }
	  line.markedSpans = null
	}
	function attachMarkedSpans(line, spans) {
	  if (!spans) { return }
	  for (var i = 0; i < spans.length; ++i)
	    { spans[i].marker.attachLine(line) }
	  line.markedSpans = spans
	}

	// Helpers used when computing which overlapping collapsed span
	// counts as the larger one.
	function extraLeft(marker) { return marker.inclusiveLeft ? -1 : 0 }
	function extraRight(marker) { return marker.inclusiveRight ? 1 : 0 }

	// Returns a number indicating which of two overlapping collapsed
	// spans is larger (and thus includes the other). Falls back to
	// comparing ids when the spans cover exactly the same range.
	function compareCollapsedMarkers(a, b) {
	  var lenDiff = a.lines.length - b.lines.length
	  if (lenDiff != 0) { return lenDiff }
	  var aPos = a.find(), bPos = b.find()
	  var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b)
	  if (fromCmp) { return -fromCmp }
	  var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b)
	  if (toCmp) { return toCmp }
	  return b.id - a.id
	}

	// Find out whether a line ends or starts in a collapsed span. If
	// so, return the marker for that span.
	function collapsedSpanAtSide(line, start) {
	  var sps = sawCollapsedSpans && line.markedSpans, found
	  if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
	    sp = sps[i]
	    if (sp.marker.collapsed && (start ? sp.from : sp.to) == null &&
	        (!found || compareCollapsedMarkers(found, sp.marker) < 0))
	      { found = sp.marker }
	  } }
	  return found
	}
	function collapsedSpanAtStart(line) { return collapsedSpanAtSide(line, true) }
	function collapsedSpanAtEnd(line) { return collapsedSpanAtSide(line, false) }

	// Test whether there exists a collapsed span that partially
	// overlaps (covers the start or end, but not both) of a new span.
	// Such overlap is not allowed.
	function conflictingCollapsedRange(doc, lineNo, from, to, marker) {
	  var line = getLine(doc, lineNo)
	  var sps = sawCollapsedSpans && line.markedSpans
	  if (sps) { for (var i = 0; i < sps.length; ++i) {
	    var sp = sps[i]
	    if (!sp.marker.collapsed) { continue }
	    var found = sp.marker.find(0)
	    var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker)
	    var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker)
	    if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) { continue }
	    if (fromCmp <= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.to, from) >= 0 : cmp(found.to, from) > 0) ||
	        fromCmp >= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.from, to) <= 0 : cmp(found.from, to) < 0))
	      { return true }
	  } }
	}

	// A visual line is a line as drawn on the screen. Folding, for
	// example, can cause multiple logical lines to appear on the same
	// visual line. This finds the start of the visual line that the
	// given line is part of (usually that is the line itself).
	function visualLine(line) {
	  var merged
	  while (merged = collapsedSpanAtStart(line))
	    { line = merged.find(-1, true).line }
	  return line
	}

	// Returns an array of logical lines that continue the visual line
	// started by the argument, or undefined if there are no such lines.
	function visualLineContinued(line) {
	  var merged, lines
	  while (merged = collapsedSpanAtEnd(line)) {
	    line = merged.find(1, true).line
	    ;(lines || (lines = [])).push(line)
	  }
	  return lines
	}

	// Get the line number of the start of the visual line that the
	// given line number is part of.
	function visualLineNo(doc, lineN) {
	  var line = getLine(doc, lineN), vis = visualLine(line)
	  if (line == vis) { return lineN }
	  return lineNo(vis)
	}

	// Get the line number of the start of the next visual line after
	// the given line.
	function visualLineEndNo(doc, lineN) {
	  if (lineN > doc.lastLine()) { return lineN }
	  var line = getLine(doc, lineN), merged
	  if (!lineIsHidden(doc, line)) { return lineN }
	  while (merged = collapsedSpanAtEnd(line))
	    { line = merged.find(1, true).line }
	  return lineNo(line) + 1
	}

	// Compute whether a line is hidden. Lines count as hidden when they
	// are part of a visual line that starts with another line, or when
	// they are entirely covered by collapsed, non-widget span.
	function lineIsHidden(doc, line) {
	  var sps = sawCollapsedSpans && line.markedSpans
	  if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
	    sp = sps[i]
	    if (!sp.marker.collapsed) { continue }
	    if (sp.from == null) { return true }
	    if (sp.marker.widgetNode) { continue }
	    if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
	      { return true }
	  } }
	}
	function lineIsHiddenInner(doc, line, span) {
	  if (span.to == null) {
	    var end = span.marker.find(1, true)
	    return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker))
	  }
	  if (span.marker.inclusiveRight && span.to == line.text.length)
	    { return true }
	  for (var sp = (void 0), i = 0; i < line.markedSpans.length; ++i) {
	    sp = line.markedSpans[i]
	    if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to &&
	        (sp.to == null || sp.to != span.from) &&
	        (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
	        lineIsHiddenInner(doc, line, sp)) { return true }
	  }
	}

	// Find the height above the given line.
	function heightAtLine(lineObj) {
	  lineObj = visualLine(lineObj)

	  var h = 0, chunk = lineObj.parent
	  for (var i = 0; i < chunk.lines.length; ++i) {
	    var line = chunk.lines[i]
	    if (line == lineObj) { break }
	    else { h += line.height }
	  }
	  for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
	    for (var i$1 = 0; i$1 < p.children.length; ++i$1) {
	      var cur = p.children[i$1]
	      if (cur == chunk) { break }
	      else { h += cur.height }
	    }
	  }
	  return h
	}

	// Compute the character length of a line, taking into account
	// collapsed ranges (see markText) that might hide parts, and join
	// other lines onto it.
	function lineLength(line) {
	  if (line.height == 0) { return 0 }
	  var len = line.text.length, merged, cur = line
	  while (merged = collapsedSpanAtStart(cur)) {
	    var found = merged.find(0, true)
	    cur = found.from.line
	    len += found.from.ch - found.to.ch
	  }
	  cur = line
	  while (merged = collapsedSpanAtEnd(cur)) {
	    var found$1 = merged.find(0, true)
	    len -= cur.text.length - found$1.from.ch
	    cur = found$1.to.line
	    len += cur.text.length - found$1.to.ch
	  }
	  return len
	}

	// Find the longest line in the document.
	function findMaxLine(cm) {
	  var d = cm.display, doc = cm.doc
	  d.maxLine = getLine(doc, doc.first)
	  d.maxLineLength = lineLength(d.maxLine)
	  d.maxLineChanged = true
	  doc.iter(function (line) {
	    var len = lineLength(line)
	    if (len > d.maxLineLength) {
	      d.maxLineLength = len
	      d.maxLine = line
	    }
	  })
	}

	// BIDI HELPERS

	function iterateBidiSections(order, from, to, f) {
	  if (!order) { return f(from, to, "ltr") }
	  var found = false
	  for (var i = 0; i < order.length; ++i) {
	    var part = order[i]
	    if (part.from < to && part.to > from || from == to && part.to == from) {
	      f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr")
	      found = true
	    }
	  }
	  if (!found) { f(from, to, "ltr") }
	}

	function bidiLeft(part) { return part.level % 2 ? part.to : part.from }
	function bidiRight(part) { return part.level % 2 ? part.from : part.to }

	function lineLeft(line) { var order = getOrder(line); return order ? bidiLeft(order[0]) : 0 }
	function lineRight(line) {
	  var order = getOrder(line)
	  if (!order) { return line.text.length }
	  return bidiRight(lst(order))
	}

	function compareBidiLevel(order, a, b) {
	  var linedir = order[0].level
	  if (a == linedir) { return true }
	  if (b == linedir) { return false }
	  return a < b
	}

	var bidiOther = null
	function getBidiPartAt(order, pos) {
	  var found
	  bidiOther = null
	  for (var i = 0; i < order.length; ++i) {
	    var cur = order[i]
	    if (cur.from < pos && cur.to > pos) { return i }
	    if ((cur.from == pos || cur.to == pos)) {
	      if (found == null) {
	        found = i
	      } else if (compareBidiLevel(order, cur.level, order[found].level)) {
	        if (cur.from != cur.to) { bidiOther = found }
	        return i
	      } else {
	        if (cur.from != cur.to) { bidiOther = i }
	        return found
	      }
	    }
	  }
	  return found
	}

	function moveInLine(line, pos, dir, byUnit) {
	  if (!byUnit) { return pos + dir }
	  do { pos += dir }
	  while (pos > 0 && isExtendingChar(line.text.charAt(pos)))
	  return pos
	}

	// This is needed in order to move 'visually' through bi-directional
	// text -- i.e., pressing left should make the cursor go left, even
	// when in RTL text. The tricky part is the 'jumps', where RTL and
	// LTR text touch each other. This often requires the cursor offset
	// to move more than one unit, in order to visually move one unit.
	function moveVisually(line, start, dir, byUnit) {
	  var bidi = getOrder(line)
	  if (!bidi) { return moveLogically(line, start, dir, byUnit) }
	  var pos = getBidiPartAt(bidi, start), part = bidi[pos]
	  var target = moveInLine(line, start, part.level % 2 ? -dir : dir, byUnit)

	  for (;;) {
	    if (target > part.from && target < part.to) { return target }
	    if (target == part.from || target == part.to) {
	      if (getBidiPartAt(bidi, target) == pos) { return target }
	      part = bidi[pos += dir]
	      return (dir > 0) == part.level % 2 ? part.to : part.from
	    } else {
	      part = bidi[pos += dir]
	      if (!part) { return null }
	      if ((dir > 0) == part.level % 2)
	        { target = moveInLine(line, part.to, -1, byUnit) }
	      else
	        { target = moveInLine(line, part.from, 1, byUnit) }
	    }
	  }
	}

	function moveLogically(line, start, dir, byUnit) {
	  var target = start + dir
	  if (byUnit) { while (target > 0 && isExtendingChar(line.text.charAt(target))) { target += dir } }
	  return target < 0 || target > line.text.length ? null : target
	}

	// Bidirectional ordering algorithm
	// See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
	// that this (partially) implements.

	// One-char codes used for character types:
	// L (L):   Left-to-Right
	// R (R):   Right-to-Left
	// r (AL):  Right-to-Left Arabic
	// 1 (EN):  European Number
	// + (ES):  European Number Separator
	// % (ET):  European Number Terminator
	// n (AN):  Arabic Number
	// , (CS):  Common Number Separator
	// m (NSM): Non-Spacing Mark
	// b (BN):  Boundary Neutral
	// s (B):   Paragraph Separator
	// t (S):   Segment Separator
	// w (WS):  Whitespace
	// N (ON):  Other Neutrals

	// Returns null if characters are ordered as they appear
	// (left-to-right), or an array of sections ({from, to, level}
	// objects) in the order in which they occur visually.
	var bidiOrdering = (function() {
	  // Character types for codepoints 0 to 0xff
	  var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN"
	  // Character types for codepoints 0x600 to 0x6f9
	  var arabicTypes = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111"
	  function charType(code) {
	    if (code <= 0xf7) { return lowTypes.charAt(code) }
	    else if (0x590 <= code && code <= 0x5f4) { return "R" }
	    else if (0x600 <= code && code <= 0x6f9) { return arabicTypes.charAt(code - 0x600) }
	    else if (0x6ee <= code && code <= 0x8ac) { return "r" }
	    else if (0x2000 <= code && code <= 0x200b) { return "w" }
	    else if (code == 0x200c) { return "b" }
	    else { return "L" }
	  }

	  var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/
	  var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/
	  // Browsers seem to always treat the boundaries of block elements as being L.
	  var outerType = "L"

	  function BidiSpan(level, from, to) {
	    this.level = level
	    this.from = from; this.to = to
	  }

	  return function(str) {
	    if (!bidiRE.test(str)) { return false }
	    var len = str.length, types = []
	    for (var i = 0; i < len; ++i)
	      { types.push(charType(str.charCodeAt(i))) }

	    // W1. Examine each non-spacing mark (NSM) in the level run, and
	    // change the type of the NSM to the type of the previous
	    // character. If the NSM is at the start of the level run, it will
	    // get the type of sor.
	    for (var i$1 = 0, prev = outerType; i$1 < len; ++i$1) {
	      var type = types[i$1]
	      if (type == "m") { types[i$1] = prev }
	      else { prev = type }
	    }

	    // W2. Search backwards from each instance of a European number
	    // until the first strong type (R, L, AL, or sor) is found. If an
	    // AL is found, change the type of the European number to Arabic
	    // number.
	    // W3. Change all ALs to R.
	    for (var i$2 = 0, cur = outerType; i$2 < len; ++i$2) {
	      var type$1 = types[i$2]
	      if (type$1 == "1" && cur == "r") { types[i$2] = "n" }
	      else if (isStrong.test(type$1)) { cur = type$1; if (type$1 == "r") { types[i$2] = "R" } }
	    }

	    // W4. A single European separator between two European numbers
	    // changes to a European number. A single common separator between
	    // two numbers of the same type changes to that type.
	    for (var i$3 = 1, prev$1 = types[0]; i$3 < len - 1; ++i$3) {
	      var type$2 = types[i$3]
	      if (type$2 == "+" && prev$1 == "1" && types[i$3+1] == "1") { types[i$3] = "1" }
	      else if (type$2 == "," && prev$1 == types[i$3+1] &&
	               (prev$1 == "1" || prev$1 == "n")) { types[i$3] = prev$1 }
	      prev$1 = type$2
	    }

	    // W5. A sequence of European terminators adjacent to European
	    // numbers changes to all European numbers.
	    // W6. Otherwise, separators and terminators change to Other
	    // Neutral.
	    for (var i$4 = 0; i$4 < len; ++i$4) {
	      var type$3 = types[i$4]
	      if (type$3 == ",") { types[i$4] = "N" }
	      else if (type$3 == "%") {
	        var end = (void 0)
	        for (end = i$4 + 1; end < len && types[end] == "%"; ++end) {}
	        var replace = (i$4 && types[i$4-1] == "!") || (end < len && types[end] == "1") ? "1" : "N"
	        for (var j = i$4; j < end; ++j) { types[j] = replace }
	        i$4 = end - 1
	      }
	    }

	    // W7. Search backwards from each instance of a European number
	    // until the first strong type (R, L, or sor) is found. If an L is
	    // found, then change the type of the European number to L.
	    for (var i$5 = 0, cur$1 = outerType; i$5 < len; ++i$5) {
	      var type$4 = types[i$5]
	      if (cur$1 == "L" && type$4 == "1") { types[i$5] = "L" }
	      else if (isStrong.test(type$4)) { cur$1 = type$4 }
	    }

	    // N1. A sequence of neutrals takes the direction of the
	    // surrounding strong text if the text on both sides has the same
	    // direction. European and Arabic numbers act as if they were R in
	    // terms of their influence on neutrals. Start-of-level-run (sor)
	    // and end-of-level-run (eor) are used at level run boundaries.
	    // N2. Any remaining neutrals take the embedding direction.
	    for (var i$6 = 0; i$6 < len; ++i$6) {
	      if (isNeutral.test(types[i$6])) {
	        var end$1 = (void 0)
	        for (end$1 = i$6 + 1; end$1 < len && isNeutral.test(types[end$1]); ++end$1) {}
	        var before = (i$6 ? types[i$6-1] : outerType) == "L"
	        var after = (end$1 < len ? types[end$1] : outerType) == "L"
	        var replace$1 = before || after ? "L" : "R"
	        for (var j$1 = i$6; j$1 < end$1; ++j$1) { types[j$1] = replace$1 }
	        i$6 = end$1 - 1
	      }
	    }

	    // Here we depart from the documented algorithm, in order to avoid
	    // building up an actual levels array. Since there are only three
	    // levels (0, 1, 2) in an implementation that doesn't take
	    // explicit embedding into account, we can build up the order on
	    // the fly, without following the level-based algorithm.
	    var order = [], m
	    for (var i$7 = 0; i$7 < len;) {
	      if (countsAsLeft.test(types[i$7])) {
	        var start = i$7
	        for (++i$7; i$7 < len && countsAsLeft.test(types[i$7]); ++i$7) {}
	        order.push(new BidiSpan(0, start, i$7))
	      } else {
	        var pos = i$7, at = order.length
	        for (++i$7; i$7 < len && types[i$7] != "L"; ++i$7) {}
	        for (var j$2 = pos; j$2 < i$7;) {
	          if (countsAsNum.test(types[j$2])) {
	            if (pos < j$2) { order.splice(at, 0, new BidiSpan(1, pos, j$2)) }
	            var nstart = j$2
	            for (++j$2; j$2 < i$7 && countsAsNum.test(types[j$2]); ++j$2) {}
	            order.splice(at, 0, new BidiSpan(2, nstart, j$2))
	            pos = j$2
	          } else { ++j$2 }
	        }
	        if (pos < i$7) { order.splice(at, 0, new BidiSpan(1, pos, i$7)) }
	      }
	    }
	    if (order[0].level == 1 && (m = str.match(/^\s+/))) {
	      order[0].from = m[0].length
	      order.unshift(new BidiSpan(0, 0, m[0].length))
	    }
	    if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
	      lst(order).to -= m[0].length
	      order.push(new BidiSpan(0, len - m[0].length, len))
	    }
	    if (order[0].level == 2)
	      { order.unshift(new BidiSpan(1, order[0].to, order[0].to)) }
	    if (order[0].level != lst(order).level)
	      { order.push(new BidiSpan(order[0].level, len, len)) }

	    return order
	  }
	})()

	// Get the bidi ordering for the given line (and cache it). Returns
	// false for lines that are fully left-to-right, and an array of
	// BidiSpan objects otherwise.
	function getOrder(line) {
	  var order = line.order
	  if (order == null) { order = line.order = bidiOrdering(line.text) }
	  return order
	}

	// EVENT HANDLING

	// Lightweight event framework. on/off also work on DOM nodes,
	// registering native DOM handlers.

	var noHandlers = []

	var on = function(emitter, type, f) {
	  if (emitter.addEventListener) {
	    emitter.addEventListener(type, f, false)
	  } else if (emitter.attachEvent) {
	    emitter.attachEvent("on" + type, f)
	  } else {
	    var map = emitter._handlers || (emitter._handlers = {})
	    map[type] = (map[type] || noHandlers).concat(f)
	  }
	}

	function getHandlers(emitter, type) {
	  return emitter._handlers && emitter._handlers[type] || noHandlers
	}

	function off(emitter, type, f) {
	  if (emitter.removeEventListener) {
	    emitter.removeEventListener(type, f, false)
	  } else if (emitter.detachEvent) {
	    emitter.detachEvent("on" + type, f)
	  } else {
	    var map = emitter._handlers, arr = map && map[type]
	    if (arr) {
	      var index = indexOf(arr, f)
	      if (index > -1)
	        { map[type] = arr.slice(0, index).concat(arr.slice(index + 1)) }
	    }
	  }
	}

	function signal(emitter, type /*, values...*/) {
	  var handlers = getHandlers(emitter, type)
	  if (!handlers.length) { return }
	  var args = Array.prototype.slice.call(arguments, 2)
	  for (var i = 0; i < handlers.length; ++i) { handlers[i].apply(null, args) }
	}

	// The DOM events that CodeMirror handles can be overridden by
	// registering a (non-DOM) handler on the editor for the event name,
	// and preventDefault-ing the event in that handler.
	function signalDOMEvent(cm, e, override) {
	  if (typeof e == "string")
	    { e = {type: e, preventDefault: function() { this.defaultPrevented = true }} }
	  signal(cm, override || e.type, cm, e)
	  return e_defaultPrevented(e) || e.codemirrorIgnore
	}

	function signalCursorActivity(cm) {
	  var arr = cm._handlers && cm._handlers.cursorActivity
	  if (!arr) { return }
	  var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = [])
	  for (var i = 0; i < arr.length; ++i) { if (indexOf(set, arr[i]) == -1)
	    { set.push(arr[i]) } }
	}

	function hasHandler(emitter, type) {
	  return getHandlers(emitter, type).length > 0
	}

	// Add on and off methods to a constructor's prototype, to make
	// registering events on such objects more convenient.
	function eventMixin(ctor) {
	  ctor.prototype.on = function(type, f) {on(this, type, f)}
	  ctor.prototype.off = function(type, f) {off(this, type, f)}
	}

	// Due to the fact that we still support jurassic IE versions, some
	// compatibility wrappers are needed.

	function e_preventDefault(e) {
	  if (e.preventDefault) { e.preventDefault() }
	  else { e.returnValue = false }
	}
	function e_stopPropagation(e) {
	  if (e.stopPropagation) { e.stopPropagation() }
	  else { e.cancelBubble = true }
	}
	function e_defaultPrevented(e) {
	  return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false
	}
	function e_stop(e) {e_preventDefault(e); e_stopPropagation(e)}

	function e_target(e) {return e.target || e.srcElement}
	function e_button(e) {
	  var b = e.which
	  if (b == null) {
	    if (e.button & 1) { b = 1 }
	    else if (e.button & 2) { b = 3 }
	    else if (e.button & 4) { b = 2 }
	  }
	  if (mac && e.ctrlKey && b == 1) { b = 3 }
	  return b
	}

	// Detect drag-and-drop
	var dragAndDrop = function() {
	  // There is *some* kind of drag-and-drop support in IE6-8, but I
	  // couldn't get it to work yet.
	  if (ie && ie_version < 9) { return false }
	  var div = elt('div')
	  return "draggable" in div || "dragDrop" in div
	}()

	var zwspSupported
	function zeroWidthElement(measure) {
	  if (zwspSupported == null) {
	    var test = elt("span", "\u200b")
	    removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]))
	    if (measure.firstChild.offsetHeight != 0)
	      { zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8) }
	  }
	  var node = zwspSupported ? elt("span", "\u200b") :
	    elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px")
	  node.setAttribute("cm-text", "")
	  return node
	}

	// Feature-detect IE's crummy client rect reporting for bidi text
	var badBidiRects
	function hasBadBidiRects(measure) {
	  if (badBidiRects != null) { return badBidiRects }
	  var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062eA"))
	  var r0 = range(txt, 0, 1).getBoundingClientRect()
	  var r1 = range(txt, 1, 2).getBoundingClientRect()
	  removeChildren(measure)
	  if (!r0 || r0.left == r0.right) { return false } // Safari returns null in some cases (#2780)
	  return badBidiRects = (r1.right - r0.right < 3)
	}

	// See if "".split is the broken IE version, if so, provide an
	// alternative way to split lines.
	var splitLinesAuto = "\n\nb".split(/\n/).length != 3 ? function (string) {
	  var pos = 0, result = [], l = string.length
	  while (pos <= l) {
	    var nl = string.indexOf("\n", pos)
	    if (nl == -1) { nl = string.length }
	    var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl)
	    var rt = line.indexOf("\r")
	    if (rt != -1) {
	      result.push(line.slice(0, rt))
	      pos += rt + 1
	    } else {
	      result.push(line)
	      pos = nl + 1
	    }
	  }
	  return result
	} : function (string) { return string.split(/\r\n?|\n/); }

	var hasSelection = window.getSelection ? function (te) {
	  try { return te.selectionStart != te.selectionEnd }
	  catch(e) { return false }
	} : function (te) {
	  var range
	  try {range = te.ownerDocument.selection.createRange()}
	  catch(e) {}
	  if (!range || range.parentElement() != te) { return false }
	  return range.compareEndPoints("StartToEnd", range) != 0
	}

	var hasCopyEvent = (function () {
	  var e = elt("div")
	  if ("oncopy" in e) { return true }
	  e.setAttribute("oncopy", "return;")
	  return typeof e.oncopy == "function"
	})()

	var badZoomedRects = null
	function hasBadZoomedRects(measure) {
	  if (badZoomedRects != null) { return badZoomedRects }
	  var node = removeChildrenAndAdd(measure, elt("span", "x"))
	  var normal = node.getBoundingClientRect()
	  var fromRange = range(node, 0, 1).getBoundingClientRect()
	  return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1
	}

	var modes = {};
	var mimeModes = {};
	// Extra arguments are stored as the mode's dependencies, which is
	// used by (legacy) mechanisms like loadmode.js to automatically
	// load a mode. (Preferred mechanism is the require/define calls.)
	function defineMode(name, mode) {
	  if (arguments.length > 2)
	    { mode.dependencies = Array.prototype.slice.call(arguments, 2) }
	  modes[name] = mode
	}

	function defineMIME(mime, spec) {
	  mimeModes[mime] = spec
	}

	// Given a MIME type, a {name, ...options} config object, or a name
	// string, return a mode config object.
	function resolveMode(spec) {
	  if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
	    spec = mimeModes[spec]
	  } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
	    var found = mimeModes[spec.name]
	    if (typeof found == "string") { found = {name: found} }
	    spec = createObj(found, spec)
	    spec.name = found.name
	  } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
	    return resolveMode("application/xml")
	  } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(spec)) {
	    return resolveMode("application/json")
	  }
	  if (typeof spec == "string") { return {name: spec} }
	  else { return spec || {name: "null"} }
	}

	// Given a mode spec (anything that resolveMode accepts), find and
	// initialize an actual mode object.
	function getMode(options, spec) {
	  spec = resolveMode(spec)
	  var mfactory = modes[spec.name]
	  if (!mfactory) { return getMode(options, "text/plain") }
	  var modeObj = mfactory(options, spec)
	  if (modeExtensions.hasOwnProperty(spec.name)) {
	    var exts = modeExtensions[spec.name]
	    for (var prop in exts) {
	      if (!exts.hasOwnProperty(prop)) { continue }
	      if (modeObj.hasOwnProperty(prop)) { modeObj["_" + prop] = modeObj[prop] }
	      modeObj[prop] = exts[prop]
	    }
	  }
	  modeObj.name = spec.name
	  if (spec.helperType) { modeObj.helperType = spec.helperType }
	  if (spec.modeProps) { for (var prop$1 in spec.modeProps)
	    { modeObj[prop$1] = spec.modeProps[prop$1] } }

	  return modeObj
	}

	// This can be used to attach properties to mode objects from
	// outside the actual mode definition.
	var modeExtensions = {}
	function extendMode(mode, properties) {
	  var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {})
	  copyObj(properties, exts)
	}

	function copyState(mode, state) {
	  if (state === true) { return state }
	  if (mode.copyState) { return mode.copyState(state) }
	  var nstate = {}
	  for (var n in state) {
	    var val = state[n]
	    if (val instanceof Array) { val = val.concat([]) }
	    nstate[n] = val
	  }
	  return nstate
	}

	// Given a mode and a state (for that mode), find the inner mode and
	// state at the position that the state refers to.
	function innerMode(mode, state) {
	  var info
	  while (mode.innerMode) {
	    info = mode.innerMode(state)
	    if (!info || info.mode == mode) { break }
	    state = info.state
	    mode = info.mode
	  }
	  return info || {mode: mode, state: state}
	}

	function startState(mode, a1, a2) {
	  return mode.startState ? mode.startState(a1, a2) : true
	}

	// STRING STREAM

	// Fed to the mode parsers, provides helper functions to make
	// parsers more succinct.

	var StringStream = function(string, tabSize) {
	  this.pos = this.start = 0
	  this.string = string
	  this.tabSize = tabSize || 8
	  this.lastColumnPos = this.lastColumnValue = 0
	  this.lineStart = 0
	}

	StringStream.prototype = {
	  eol: function() {return this.pos >= this.string.length},
	  sol: function() {return this.pos == this.lineStart},
	  peek: function() {return this.string.charAt(this.pos) || undefined},
	  next: function() {
	    if (this.pos < this.string.length)
	      { return this.string.charAt(this.pos++) }
	  },
	  eat: function(match) {
	    var ch = this.string.charAt(this.pos)
	    var ok
	    if (typeof match == "string") { ok = ch == match }
	    else { ok = ch && (match.test ? match.test(ch) : match(ch)) }
	    if (ok) {++this.pos; return ch}
	  },
	  eatWhile: function(match) {
	    var start = this.pos
	    while (this.eat(match)){}
	    return this.pos > start
	  },
	  eatSpace: function() {
	    var this$1 = this;

	    var start = this.pos
	    while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) { ++this$1.pos }
	    return this.pos > start
	  },
	  skipToEnd: function() {this.pos = this.string.length},
	  skipTo: function(ch) {
	    var found = this.string.indexOf(ch, this.pos)
	    if (found > -1) {this.pos = found; return true}
	  },
	  backUp: function(n) {this.pos -= n},
	  column: function() {
	    if (this.lastColumnPos < this.start) {
	      this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue)
	      this.lastColumnPos = this.start
	    }
	    return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
	  },
	  indentation: function() {
	    return countColumn(this.string, null, this.tabSize) -
	      (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
	  },
	  match: function(pattern, consume, caseInsensitive) {
	    if (typeof pattern == "string") {
	      var cased = function (str) { return caseInsensitive ? str.toLowerCase() : str; }
	      var substr = this.string.substr(this.pos, pattern.length)
	      if (cased(substr) == cased(pattern)) {
	        if (consume !== false) { this.pos += pattern.length }
	        return true
	      }
	    } else {
	      var match = this.string.slice(this.pos).match(pattern)
	      if (match && match.index > 0) { return null }
	      if (match && consume !== false) { this.pos += match[0].length }
	      return match
	    }
	  },
	  current: function(){return this.string.slice(this.start, this.pos)},
	  hideFirstChars: function(n, inner) {
	    this.lineStart += n
	    try { return inner() }
	    finally { this.lineStart -= n }
	  }
	}

	// Compute a style array (an array starting with a mode generation
	// -- for invalidation -- followed by pairs of end positions and
	// style strings), which is used to highlight the tokens on the
	// line.
	function highlightLine(cm, line, state, forceToEnd) {
	  // A styles array always starts with a number identifying the
	  // mode/overlays that it is based on (for easy invalidation).
	  var st = [cm.state.modeGen], lineClasses = {}
	  // Compute the base array of styles
	  runMode(cm, line.text, cm.doc.mode, state, function (end, style) { return st.push(end, style); },
	    lineClasses, forceToEnd)

	  // Run overlays, adjust style array.
	  var loop = function ( o ) {
	    var overlay = cm.state.overlays[o], i = 1, at = 0
	    runMode(cm, line.text, overlay.mode, true, function (end, style) {
	      var start = i
	      // Ensure there's a token end at the current position, and that i points at it
	      while (at < end) {
	        var i_end = st[i]
	        if (i_end > end)
	          { st.splice(i, 1, end, st[i+1], i_end) }
	        i += 2
	        at = Math.min(end, i_end)
	      }
	      if (!style) { return }
	      if (overlay.opaque) {
	        st.splice(start, i - start, end, "overlay " + style)
	        i = start + 2
	      } else {
	        for (; start < i; start += 2) {
	          var cur = st[start+1]
	          st[start+1] = (cur ? cur + " " : "") + "overlay " + style
	        }
	      }
	    }, lineClasses)
	  };

	  for (var o = 0; o < cm.state.overlays.length; ++o) loop( o );

	  return {styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null}
	}

	function getLineStyles(cm, line, updateFrontier) {
	  if (!line.styles || line.styles[0] != cm.state.modeGen) {
	    var state = getStateBefore(cm, lineNo(line))
	    var result = highlightLine(cm, line, line.text.length > cm.options.maxHighlightLength ? copyState(cm.doc.mode, state) : state)
	    line.stateAfter = state
	    line.styles = result.styles
	    if (result.classes) { line.styleClasses = result.classes }
	    else if (line.styleClasses) { line.styleClasses = null }
	    if (updateFrontier === cm.doc.frontier) { cm.doc.frontier++ }
	  }
	  return line.styles
	}

	function getStateBefore(cm, n, precise) {
	  var doc = cm.doc, display = cm.display
	  if (!doc.mode.startState) { return true }
	  var pos = findStartLine(cm, n, precise), state = pos > doc.first && getLine(doc, pos-1).stateAfter
	  if (!state) { state = startState(doc.mode) }
	  else { state = copyState(doc.mode, state) }
	  doc.iter(pos, n, function (line) {
	    processLine(cm, line.text, state)
	    var save = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo
	    line.stateAfter = save ? copyState(doc.mode, state) : null
	    ++pos
	  })
	  if (precise) { doc.frontier = pos }
	  return state
	}

	// Lightweight form of highlight -- proceed over this line and
	// update state, but don't save a style array. Used for lines that
	// aren't currently visible.
	function processLine(cm, text, state, startAt) {
	  var mode = cm.doc.mode
	  var stream = new StringStream(text, cm.options.tabSize)
	  stream.start = stream.pos = startAt || 0
	  if (text == "") { callBlankLine(mode, state) }
	  while (!stream.eol()) {
	    readToken(mode, stream, state)
	    stream.start = stream.pos
	  }
	}

	function callBlankLine(mode, state) {
	  if (mode.blankLine) { return mode.blankLine(state) }
	  if (!mode.innerMode) { return }
	  var inner = innerMode(mode, state)
	  if (inner.mode.blankLine) { return inner.mode.blankLine(inner.state) }
	}

	function readToken(mode, stream, state, inner) {
	  for (var i = 0; i < 10; i++) {
	    if (inner) { inner[0] = innerMode(mode, state).mode }
	    var style = mode.token(stream, state)
	    if (stream.pos > stream.start) { return style }
	  }
	  throw new Error("Mode " + mode.name + " failed to advance stream.")
	}

	// Utility for getTokenAt and getLineTokens
	function takeToken(cm, pos, precise, asArray) {
	  var getObj = function (copy) { return ({
	    start: stream.start, end: stream.pos,
	    string: stream.current(),
	    type: style || null,
	    state: copy ? copyState(doc.mode, state) : state
	  }); }

	  var doc = cm.doc, mode = doc.mode, style
	  pos = clipPos(doc, pos)
	  var line = getLine(doc, pos.line), state = getStateBefore(cm, pos.line, precise)
	  var stream = new StringStream(line.text, cm.options.tabSize), tokens
	  if (asArray) { tokens = [] }
	  while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
	    stream.start = stream.pos
	    style = readToken(mode, stream, state)
	    if (asArray) { tokens.push(getObj(true)) }
	  }
	  return asArray ? tokens : getObj()
	}

	function extractLineClasses(type, output) {
	  if (type) { for (;;) {
	    var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/)
	    if (!lineClass) { break }
	    type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length)
	    var prop = lineClass[1] ? "bgClass" : "textClass"
	    if (output[prop] == null)
	      { output[prop] = lineClass[2] }
	    else if (!(new RegExp("(?:^|\s)" + lineClass[2] + "(?:$|\s)")).test(output[prop]))
	      { output[prop] += " " + lineClass[2] }
	  } }
	  return type
	}

	// Run the given mode's parser over a line, calling f for each token.
	function runMode(cm, text, mode, state, f, lineClasses, forceToEnd) {
	  var flattenSpans = mode.flattenSpans
	  if (flattenSpans == null) { flattenSpans = cm.options.flattenSpans }
	  var curStart = 0, curStyle = null
	  var stream = new StringStream(text, cm.options.tabSize), style
	  var inner = cm.options.addModeClass && [null]
	  if (text == "") { extractLineClasses(callBlankLine(mode, state), lineClasses) }
	  while (!stream.eol()) {
	    if (stream.pos > cm.options.maxHighlightLength) {
	      flattenSpans = false
	      if (forceToEnd) { processLine(cm, text, state, stream.pos) }
	      stream.pos = text.length
	      style = null
	    } else {
	      style = extractLineClasses(readToken(mode, stream, state, inner), lineClasses)
	    }
	    if (inner) {
	      var mName = inner[0].name
	      if (mName) { style = "m-" + (style ? mName + " " + style : mName) }
	    }
	    if (!flattenSpans || curStyle != style) {
	      while (curStart < stream.start) {
	        curStart = Math.min(stream.start, curStart + 5000)
	        f(curStart, curStyle)
	      }
	      curStyle = style
	    }
	    stream.start = stream.pos
	  }
	  while (curStart < stream.pos) {
	    // Webkit seems to refuse to render text nodes longer than 57444
	    // characters, and returns inaccurate measurements in nodes
	    // starting around 5000 chars.
	    var pos = Math.min(stream.pos, curStart + 5000)
	    f(pos, curStyle)
	    curStart = pos
	  }
	}

	// Finds the line to start with when starting a parse. Tries to
	// find a line with a stateAfter, so that it can start with a
	// valid state. If that fails, it returns the line with the
	// smallest indentation, which tends to need the least context to
	// parse correctly.
	function findStartLine(cm, n, precise) {
	  var minindent, minline, doc = cm.doc
	  var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100)
	  for (var search = n; search > lim; --search) {
	    if (search <= doc.first) { return doc.first }
	    var line = getLine(doc, search - 1)
	    if (line.stateAfter && (!precise || search <= doc.frontier)) { return search }
	    var indented = countColumn(line.text, null, cm.options.tabSize)
	    if (minline == null || minindent > indented) {
	      minline = search - 1
	      minindent = indented
	    }
	  }
	  return minline
	}

	// LINE DATA STRUCTURE

	// Line objects. These hold state related to a line, including
	// highlighting info (the styles array).
	function Line(text, markedSpans, estimateHeight) {
	  this.text = text
	  attachMarkedSpans(this, markedSpans)
	  this.height = estimateHeight ? estimateHeight(this) : 1
	}
	eventMixin(Line)
	Line.prototype.lineNo = function() { return lineNo(this) }

	// Change the content (text, markers) of a line. Automatically
	// invalidates cached information and tries to re-estimate the
	// line's height.
	function updateLine(line, text, markedSpans, estimateHeight) {
	  line.text = text
	  if (line.stateAfter) { line.stateAfter = null }
	  if (line.styles) { line.styles = null }
	  if (line.order != null) { line.order = null }
	  detachMarkedSpans(line)
	  attachMarkedSpans(line, markedSpans)
	  var estHeight = estimateHeight ? estimateHeight(line) : 1
	  if (estHeight != line.height) { updateLineHeight(line, estHeight) }
	}

	// Detach a line from the document tree and its markers.
	function cleanUpLine(line) {
	  line.parent = null
	  detachMarkedSpans(line)
	}

	// Convert a style as returned by a mode (either null, or a string
	// containing one or more styles) to a CSS style. This is cached,
	// and also looks for line-wide styles.
	var styleToClassCache = {};
	var styleToClassCacheWithMode = {};
	function interpretTokenStyle(style, options) {
	  if (!style || /^\s*$/.test(style)) { return null }
	  var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache
	  return cache[style] ||
	    (cache[style] = style.replace(/\S+/g, "cm-$&"))
	}

	// Render the DOM representation of the text of a line. Also builds
	// up a 'line map', which points at the DOM nodes that represent
	// specific stretches of text, and is used by the measuring code.
	// The returned object contains the DOM node, this map, and
	// information about line-wide styles that were set by the mode.
	function buildLineContent(cm, lineView) {
	  // The padding-right forces the element to have a 'border', which
	  // is needed on Webkit to be able to get line-level bounding
	  // rectangles for it (in measureChar).
	  var content = elt("span", null, null, webkit ? "padding-right: .1px" : null)
	  var builder = {pre: elt("pre", [content], "CodeMirror-line"), content: content,
	                 col: 0, pos: 0, cm: cm,
	                 trailingSpace: false,
	                 splitSpaces: (ie || webkit) && cm.getOption("lineWrapping")}
	  lineView.measure = {}

	  // Iterate over the logical lines that make up this visual line.
	  for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
	    var line = i ? lineView.rest[i - 1] : lineView.line, order = (void 0)
	    builder.pos = 0
	    builder.addToken = buildToken
	    // Optionally wire in some hacks into the token-rendering
	    // algorithm, to deal with browser quirks.
	    if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line)))
	      { builder.addToken = buildTokenBadBidi(builder.addToken, order) }
	    builder.map = []
	    var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line)
	    insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate))
	    if (line.styleClasses) {
	      if (line.styleClasses.bgClass)
	        { builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || "") }
	      if (line.styleClasses.textClass)
	        { builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || "") }
	    }

	    // Ensure at least a single node is present, for measuring.
	    if (builder.map.length == 0)
	      { builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure))) }

	    // Store the map and a cache object for the current logical line
	    if (i == 0) {
	      lineView.measure.map = builder.map
	      lineView.measure.cache = {}
	    } else {
	      ;(lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map)
	      ;(lineView.measure.caches || (lineView.measure.caches = [])).push({})
	    }
	  }

	  // See issue #2901
	  if (webkit) {
	    var last = builder.content.lastChild
	    if (/\bcm-tab\b/.test(last.className) || (last.querySelector && last.querySelector(".cm-tab")))
	      { builder.content.className = "cm-tab-wrap-hack" }
	  }

	  signal(cm, "renderLine", cm, lineView.line, builder.pre)
	  if (builder.pre.className)
	    { builder.textClass = joinClasses(builder.pre.className, builder.textClass || "") }

	  return builder
	}

	function defaultSpecialCharPlaceholder(ch) {
	  var token = elt("span", "\u2022", "cm-invalidchar")
	  token.title = "\\u" + ch.charCodeAt(0).toString(16)
	  token.setAttribute("aria-label", token.title)
	  return token
	}

	// Build up the DOM representation for a single token, and add it to
	// the line map. Takes care to render special characters separately.
	function buildToken(builder, text, style, startStyle, endStyle, title, css) {
	  if (!text) { return }
	  var displayText = builder.splitSpaces ? splitSpaces(text, builder.trailingSpace) : text
	  var special = builder.cm.state.specialChars, mustWrap = false
	  var content
	  if (!special.test(text)) {
	    builder.col += text.length
	    content = document.createTextNode(displayText)
	    builder.map.push(builder.pos, builder.pos + text.length, content)
	    if (ie && ie_version < 9) { mustWrap = true }
	    builder.pos += text.length
	  } else {
	    content = document.createDocumentFragment()
	    var pos = 0
	    while (true) {
	      special.lastIndex = pos
	      var m = special.exec(text)
	      var skipped = m ? m.index - pos : text.length - pos
	      if (skipped) {
	        var txt = document.createTextNode(displayText.slice(pos, pos + skipped))
	        if (ie && ie_version < 9) { content.appendChild(elt("span", [txt])) }
	        else { content.appendChild(txt) }
	        builder.map.push(builder.pos, builder.pos + skipped, txt)
	        builder.col += skipped
	        builder.pos += skipped
	      }
	      if (!m) { break }
	      pos += skipped + 1
	      var txt$1 = (void 0)
	      if (m[0] == "\t") {
	        var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize
	        txt$1 = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"))
	        txt$1.setAttribute("role", "presentation")
	        txt$1.setAttribute("cm-text", "\t")
	        builder.col += tabWidth
	      } else if (m[0] == "\r" || m[0] == "\n") {
	        txt$1 = content.appendChild(elt("span", m[0] == "\r" ? "\u240d" : "\u2424", "cm-invalidchar"))
	        txt$1.setAttribute("cm-text", m[0])
	        builder.col += 1
	      } else {
	        txt$1 = builder.cm.options.specialCharPlaceholder(m[0])
	        txt$1.setAttribute("cm-text", m[0])
	        if (ie && ie_version < 9) { content.appendChild(elt("span", [txt$1])) }
	        else { content.appendChild(txt$1) }
	        builder.col += 1
	      }
	      builder.map.push(builder.pos, builder.pos + 1, txt$1)
	      builder.pos++
	    }
	  }
	  builder.trailingSpace = displayText.charCodeAt(text.length - 1) == 32
	  if (style || startStyle || endStyle || mustWrap || css) {
	    var fullStyle = style || ""
	    if (startStyle) { fullStyle += startStyle }
	    if (endStyle) { fullStyle += endStyle }
	    var token = elt("span", [content], fullStyle, css)
	    if (title) { token.title = title }
	    return builder.content.appendChild(token)
	  }
	  builder.content.appendChild(content)
	}

	function splitSpaces(text, trailingBefore) {
	  if (text.length > 1 && !/  /.test(text)) { return text }
	  var spaceBefore = trailingBefore, result = ""
	  for (var i = 0; i < text.length; i++) {
	    var ch = text.charAt(i)
	    if (ch == " " && spaceBefore && (i == text.length - 1 || text.charCodeAt(i + 1) == 32))
	      { ch = "\u00a0" }
	    result += ch
	    spaceBefore = ch == " "
	  }
	  return result
	}

	// Work around nonsense dimensions being reported for stretches of
	// right-to-left text.
	function buildTokenBadBidi(inner, order) {
	  return function (builder, text, style, startStyle, endStyle, title, css) {
	    style = style ? style + " cm-force-border" : "cm-force-border"
	    var start = builder.pos, end = start + text.length
	    for (;;) {
	      // Find the part that overlaps with the start of this text
	      var part = (void 0)
	      for (var i = 0; i < order.length; i++) {
	        part = order[i]
	        if (part.to > start && part.from <= start) { break }
	      }
	      if (part.to >= end) { return inner(builder, text, style, startStyle, endStyle, title, css) }
	      inner(builder, text.slice(0, part.to - start), style, startStyle, null, title, css)
	      startStyle = null
	      text = text.slice(part.to - start)
	      start = part.to
	    }
	  }
	}

	function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
	  var widget = !ignoreWidget && marker.widgetNode
	  if (widget) { builder.map.push(builder.pos, builder.pos + size, widget) }
	  if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
	    if (!widget)
	      { widget = builder.content.appendChild(document.createElement("span")) }
	    widget.setAttribute("cm-marker", marker.id)
	  }
	  if (widget) {
	    builder.cm.display.input.setUneditable(widget)
	    builder.content.appendChild(widget)
	  }
	  builder.pos += size
	  builder.trailingSpace = false
	}

	// Outputs a number of spans to make up a line, taking highlighting
	// and marked text into account.
	function insertLineContent(line, builder, styles) {
	  var spans = line.markedSpans, allText = line.text, at = 0
	  if (!spans) {
	    for (var i$1 = 1; i$1 < styles.length; i$1+=2)
	      { builder.addToken(builder, allText.slice(at, at = styles[i$1]), interpretTokenStyle(styles[i$1+1], builder.cm.options)) }
	    return
	  }

	  var len = allText.length, pos = 0, i = 1, text = "", style, css
	  var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, title, collapsed
	  for (;;) {
	    if (nextChange == pos) { // Update current marker set
	      spanStyle = spanEndStyle = spanStartStyle = title = css = ""
	      collapsed = null; nextChange = Infinity
	      var foundBookmarks = [], endStyles = (void 0)
	      for (var j = 0; j < spans.length; ++j) {
	        var sp = spans[j], m = sp.marker
	        if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
	          foundBookmarks.push(m)
	        } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
	          if (sp.to != null && sp.to != pos && nextChange > sp.to) {
	            nextChange = sp.to
	            spanEndStyle = ""
	          }
	          if (m.className) { spanStyle += " " + m.className }
	          if (m.css) { css = (css ? css + ";" : "") + m.css }
	          if (m.startStyle && sp.from == pos) { spanStartStyle += " " + m.startStyle }
	          if (m.endStyle && sp.to == nextChange) { (endStyles || (endStyles = [])).push(m.endStyle, sp.to) }
	          if (m.title && !title) { title = m.title }
	          if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0))
	            { collapsed = sp }
	        } else if (sp.from > pos && nextChange > sp.from) {
	          nextChange = sp.from
	        }
	      }
	      if (endStyles) { for (var j$1 = 0; j$1 < endStyles.length; j$1 += 2)
	        { if (endStyles[j$1 + 1] == nextChange) { spanEndStyle += " " + endStyles[j$1] } } }

	      if (!collapsed || collapsed.from == pos) { for (var j$2 = 0; j$2 < foundBookmarks.length; ++j$2)
	        { buildCollapsedSpan(builder, 0, foundBookmarks[j$2]) } }
	      if (collapsed && (collapsed.from || 0) == pos) {
	        buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos,
	                           collapsed.marker, collapsed.from == null)
	        if (collapsed.to == null) { return }
	        if (collapsed.to == pos) { collapsed = false }
	      }
	    }
	    if (pos >= len) { break }

	    var upto = Math.min(len, nextChange)
	    while (true) {
	      if (text) {
	        var end = pos + text.length
	        if (!collapsed) {
	          var tokenText = end > upto ? text.slice(0, upto - pos) : text
	          builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
	                           spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", title, css)
	        }
	        if (end >= upto) {text = text.slice(upto - pos); pos = upto; break}
	        pos = end
	        spanStartStyle = ""
	      }
	      text = allText.slice(at, at = styles[i++])
	      style = interpretTokenStyle(styles[i++], builder.cm.options)
	    }
	  }
	}


	// These objects are used to represent the visible (currently drawn)
	// part of the document. A LineView may correspond to multiple
	// logical lines, if those are connected by collapsed ranges.
	function LineView(doc, line, lineN) {
	  // The starting line
	  this.line = line
	  // Continuing lines, if any
	  this.rest = visualLineContinued(line)
	  // Number of logical lines in this visual line
	  this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1
	  this.node = this.text = null
	  this.hidden = lineIsHidden(doc, line)
	}

	// Create a range of LineView objects for the given lines.
	function buildViewArray(cm, from, to) {
	  var array = [], nextPos
	  for (var pos = from; pos < to; pos = nextPos) {
	    var view = new LineView(cm.doc, getLine(cm.doc, pos), pos)
	    nextPos = pos + view.size
	    array.push(view)
	  }
	  return array
	}

	var operationGroup = null

	function pushOperation(op) {
	  if (operationGroup) {
	    operationGroup.ops.push(op)
	  } else {
	    op.ownsGroup = operationGroup = {
	      ops: [op],
	      delayedCallbacks: []
	    }
	  }
	}

	function fireCallbacksForOps(group) {
	  // Calls delayed callbacks and cursorActivity handlers until no
	  // new ones appear
	  var callbacks = group.delayedCallbacks, i = 0
	  do {
	    for (; i < callbacks.length; i++)
	      { callbacks[i].call(null) }
	    for (var j = 0; j < group.ops.length; j++) {
	      var op = group.ops[j]
	      if (op.cursorActivityHandlers)
	        { while (op.cursorActivityCalled < op.cursorActivityHandlers.length)
	          { op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm) } }
	    }
	  } while (i < callbacks.length)
	}

	function finishOperation(op, endCb) {
	  var group = op.ownsGroup
	  if (!group) { return }

	  try { fireCallbacksForOps(group) }
	  finally {
	    operationGroup = null
	    endCb(group)
	  }
	}

	var orphanDelayedCallbacks = null

	// Often, we want to signal events at a point where we are in the
	// middle of some work, but don't want the handler to start calling
	// other methods on the editor, which might be in an inconsistent
	// state or simply not expect any other events to happen.
	// signalLater looks whether there are any handlers, and schedules
	// them to be executed when the last operation ends, or, if no
	// operation is active, when a timeout fires.
	function signalLater(emitter, type /*, values...*/) {
	  var arr = getHandlers(emitter, type)
	  if (!arr.length) { return }
	  var args = Array.prototype.slice.call(arguments, 2), list
	  if (operationGroup) {
	    list = operationGroup.delayedCallbacks
	  } else if (orphanDelayedCallbacks) {
	    list = orphanDelayedCallbacks
	  } else {
	    list = orphanDelayedCallbacks = []
	    setTimeout(fireOrphanDelayed, 0)
	  }
	  var loop = function ( i ) {
	    list.push(function () { return arr[i].apply(null, args); })
	  };

	  for (var i = 0; i < arr.length; ++i)
	    loop( i );
	}

	function fireOrphanDelayed() {
	  var delayed = orphanDelayedCallbacks
	  orphanDelayedCallbacks = null
	  for (var i = 0; i < delayed.length; ++i) { delayed[i]() }
	}

	// When an aspect of a line changes, a string is added to
	// lineView.changes. This updates the relevant part of the line's
	// DOM structure.
	function updateLineForChanges(cm, lineView, lineN, dims) {
	  for (var j = 0; j < lineView.changes.length; j++) {
	    var type = lineView.changes[j]
	    if (type == "text") { updateLineText(cm, lineView) }
	    else if (type == "gutter") { updateLineGutter(cm, lineView, lineN, dims) }
	    else if (type == "class") { updateLineClasses(lineView) }
	    else if (type == "widget") { updateLineWidgets(cm, lineView, dims) }
	  }
	  lineView.changes = null
	}

	// Lines with gutter elements, widgets or a background class need to
	// be wrapped, and have the extra elements added to the wrapper div
	function ensureLineWrapped(lineView) {
	  if (lineView.node == lineView.text) {
	    lineView.node = elt("div", null, null, "position: relative")
	    if (lineView.text.parentNode)
	      { lineView.text.parentNode.replaceChild(lineView.node, lineView.text) }
	    lineView.node.appendChild(lineView.text)
	    if (ie && ie_version < 8) { lineView.node.style.zIndex = 2 }
	  }
	  return lineView.node
	}

	function updateLineBackground(lineView) {
	  var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass
	  if (cls) { cls += " CodeMirror-linebackground" }
	  if (lineView.background) {
	    if (cls) { lineView.background.className = cls }
	    else { lineView.background.parentNode.removeChild(lineView.background); lineView.background = null }
	  } else if (cls) {
	    var wrap = ensureLineWrapped(lineView)
	    lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild)
	  }
	}

	// Wrapper around buildLineContent which will reuse the structure
	// in display.externalMeasured when possible.
	function getLineContent(cm, lineView) {
	  var ext = cm.display.externalMeasured
	  if (ext && ext.line == lineView.line) {
	    cm.display.externalMeasured = null
	    lineView.measure = ext.measure
	    return ext.built
	  }
	  return buildLineContent(cm, lineView)
	}

	// Redraw the line's text. Interacts with the background and text
	// classes because the mode may output tokens that influence these
	// classes.
	function updateLineText(cm, lineView) {
	  var cls = lineView.text.className
	  var built = getLineContent(cm, lineView)
	  if (lineView.text == lineView.node) { lineView.node = built.pre }
	  lineView.text.parentNode.replaceChild(built.pre, lineView.text)
	  lineView.text = built.pre
	  if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
	    lineView.bgClass = built.bgClass
	    lineView.textClass = built.textClass
	    updateLineClasses(lineView)
	  } else if (cls) {
	    lineView.text.className = cls
	  }
	}

	function updateLineClasses(lineView) {
	  updateLineBackground(lineView)
	  if (lineView.line.wrapClass)
	    { ensureLineWrapped(lineView).className = lineView.line.wrapClass }
	  else if (lineView.node != lineView.text)
	    { lineView.node.className = "" }
	  var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass
	  lineView.text.className = textClass || ""
	}

	function updateLineGutter(cm, lineView, lineN, dims) {
	  if (lineView.gutter) {
	    lineView.node.removeChild(lineView.gutter)
	    lineView.gutter = null
	  }
	  if (lineView.gutterBackground) {
	    lineView.node.removeChild(lineView.gutterBackground)
	    lineView.gutterBackground = null
	  }
	  if (lineView.line.gutterClass) {
	    var wrap = ensureLineWrapped(lineView)
	    lineView.gutterBackground = elt("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass,
	                                    ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px; width: " + (dims.gutterTotalWidth) + "px"))
	    wrap.insertBefore(lineView.gutterBackground, lineView.text)
	  }
	  var markers = lineView.line.gutterMarkers
	  if (cm.options.lineNumbers || markers) {
	    var wrap$1 = ensureLineWrapped(lineView)
	    var gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px"))
	    cm.display.input.setUneditable(gutterWrap)
	    wrap$1.insertBefore(gutterWrap, lineView.text)
	    if (lineView.line.gutterClass)
	      { gutterWrap.className += " " + lineView.line.gutterClass }
	    if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
	      { lineView.lineNumber = gutterWrap.appendChild(
	        elt("div", lineNumberFor(cm.options, lineN),
	            "CodeMirror-linenumber CodeMirror-gutter-elt",
	            ("left: " + (dims.gutterLeft["CodeMirror-linenumbers"]) + "px; width: " + (cm.display.lineNumInnerWidth) + "px"))) }
	    if (markers) { for (var k = 0; k < cm.options.gutters.length; ++k) {
	      var id = cm.options.gutters[k], found = markers.hasOwnProperty(id) && markers[id]
	      if (found)
	        { gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt",
	                                   ("left: " + (dims.gutterLeft[id]) + "px; width: " + (dims.gutterWidth[id]) + "px"))) }
	    } }
	  }
	}

	function updateLineWidgets(cm, lineView, dims) {
	  if (lineView.alignable) { lineView.alignable = null }
	  for (var node = lineView.node.firstChild, next = (void 0); node; node = next) {
	    next = node.nextSibling
	    if (node.className == "CodeMirror-linewidget")
	      { lineView.node.removeChild(node) }
	  }
	  insertLineWidgets(cm, lineView, dims)
	}

	// Build a line's DOM representation from scratch
	function buildLineElement(cm, lineView, lineN, dims) {
	  var built = getLineContent(cm, lineView)
	  lineView.text = lineView.node = built.pre
	  if (built.bgClass) { lineView.bgClass = built.bgClass }
	  if (built.textClass) { lineView.textClass = built.textClass }

	  updateLineClasses(lineView)
	  updateLineGutter(cm, lineView, lineN, dims)
	  insertLineWidgets(cm, lineView, dims)
	  return lineView.node
	}

	// A lineView may contain multiple logical lines (when merged by
	// collapsed spans). The widgets for all of them need to be drawn.
	function insertLineWidgets(cm, lineView, dims) {
	  insertLineWidgetsFor(cm, lineView.line, lineView, dims, true)
	  if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
	    { insertLineWidgetsFor(cm, lineView.rest[i], lineView, dims, false) } }
	}

	function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
	  if (!line.widgets) { return }
	  var wrap = ensureLineWrapped(lineView)
	  for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
	    var widget = ws[i], node = elt("div", [widget.node], "CodeMirror-linewidget")
	    if (!widget.handleMouseEvents) { node.setAttribute("cm-ignore-events", "true") }
	    positionLineWidget(widget, node, lineView, dims)
	    cm.display.input.setUneditable(node)
	    if (allowAbove && widget.above)
	      { wrap.insertBefore(node, lineView.gutter || lineView.text) }
	    else
	      { wrap.appendChild(node) }
	    signalLater(widget, "redraw")
	  }
	}

	function positionLineWidget(widget, node, lineView, dims) {
	  if (widget.noHScroll) {
	    ;(lineView.alignable || (lineView.alignable = [])).push(node)
	    var width = dims.wrapperWidth
	    node.style.left = dims.fixedPos + "px"
	    if (!widget.coverGutter) {
	      width -= dims.gutterTotalWidth
	      node.style.paddingLeft = dims.gutterTotalWidth + "px"
	    }
	    node.style.width = width + "px"
	  }
	  if (widget.coverGutter) {
	    node.style.zIndex = 5
	    node.style.position = "relative"
	    if (!widget.noHScroll) { node.style.marginLeft = -dims.gutterTotalWidth + "px" }
	  }
	}

	function widgetHeight(widget) {
	  if (widget.height != null) { return widget.height }
	  var cm = widget.doc.cm
	  if (!cm) { return 0 }
	  if (!contains(document.body, widget.node)) {
	    var parentStyle = "position: relative;"
	    if (widget.coverGutter)
	      { parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;" }
	    if (widget.noHScroll)
	      { parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;" }
	    removeChildrenAndAdd(cm.display.measure, elt("div", [widget.node], null, parentStyle))
	  }
	  return widget.height = widget.node.parentNode.offsetHeight
	}

	// Return true when the given mouse event happened in a widget
	function eventInWidget(display, e) {
	  for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
	    if (!n || (n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true") ||
	        (n.parentNode == display.sizer && n != display.mover))
	      { return true }
	  }
	}

	// POSITION MEASUREMENT

	function paddingTop(display) {return display.lineSpace.offsetTop}
	function paddingVert(display) {return display.mover.offsetHeight - display.lineSpace.offsetHeight}
	function paddingH(display) {
	  if (display.cachedPaddingH) { return display.cachedPaddingH }
	  var e = removeChildrenAndAdd(display.measure, elt("pre", "x"))
	  var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle
	  var data = {left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight)}
	  if (!isNaN(data.left) && !isNaN(data.right)) { display.cachedPaddingH = data }
	  return data
	}

	function scrollGap(cm) { return scrollerGap - cm.display.nativeBarWidth }
	function displayWidth(cm) {
	  return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth
	}
	function displayHeight(cm) {
	  return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight
	}

	// Ensure the lineView.wrapping.heights array is populated. This is
	// an array of bottom offsets for the lines that make up a drawn
	// line. When lineWrapping is on, there might be more than one
	// height.
	function ensureLineHeights(cm, lineView, rect) {
	  var wrapping = cm.options.lineWrapping
	  var curWidth = wrapping && displayWidth(cm)
	  if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
	    var heights = lineView.measure.heights = []
	    if (wrapping) {
	      lineView.measure.width = curWidth
	      var rects = lineView.text.firstChild.getClientRects()
	      for (var i = 0; i < rects.length - 1; i++) {
	        var cur = rects[i], next = rects[i + 1]
	        if (Math.abs(cur.bottom - next.bottom) > 2)
	          { heights.push((cur.bottom + next.top) / 2 - rect.top) }
	      }
	    }
	    heights.push(rect.bottom - rect.top)
	  }
	}

	// Find a line map (mapping character offsets to text nodes) and a
	// measurement cache for the given line number. (A line view might
	// contain multiple lines when collapsed ranges are present.)
	function mapFromLineView(lineView, line, lineN) {
	  if (lineView.line == line)
	    { return {map: lineView.measure.map, cache: lineView.measure.cache} }
	  for (var i = 0; i < lineView.rest.length; i++)
	    { if (lineView.rest[i] == line)
	      { return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i]} } }
	  for (var i$1 = 0; i$1 < lineView.rest.length; i$1++)
	    { if (lineNo(lineView.rest[i$1]) > lineN)
	      { return {map: lineView.measure.maps[i$1], cache: lineView.measure.caches[i$1], before: true} } }
	}

	// Render a line into the hidden node display.externalMeasured. Used
	// when measurement is needed for a line that's not in the viewport.
	function updateExternalMeasurement(cm, line) {
	  line = visualLine(line)
	  var lineN = lineNo(line)
	  var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN)
	  view.lineN = lineN
	  var built = view.built = buildLineContent(cm, view)
	  view.text = built.pre
	  removeChildrenAndAdd(cm.display.lineMeasure, built.pre)
	  return view
	}

	// Get a {top, bottom, left, right} box (in line-local coordinates)
	// for a given character.
	function measureChar(cm, line, ch, bias) {
	  return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias)
	}

	// Find a line view that corresponds to the given line number.
	function findViewForLine(cm, lineN) {
	  if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo)
	    { return cm.display.view[findViewIndex(cm, lineN)] }
	  var ext = cm.display.externalMeasured
	  if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size)
	    { return ext }
	}

	// Measurement can be split in two steps, the set-up work that
	// applies to the whole line, and the measurement of the actual
	// character. Functions like coordsChar, that need to do a lot of
	// measurements in a row, can thus ensure that the set-up work is
	// only done once.
	function prepareMeasureForLine(cm, line) {
	  var lineN = lineNo(line)
	  var view = findViewForLine(cm, lineN)
	  if (view && !view.text) {
	    view = null
	  } else if (view && view.changes) {
	    updateLineForChanges(cm, view, lineN, getDimensions(cm))
	    cm.curOp.forceUpdate = true
	  }
	  if (!view)
	    { view = updateExternalMeasurement(cm, line) }

	  var info = mapFromLineView(view, line, lineN)
	  return {
	    line: line, view: view, rect: null,
	    map: info.map, cache: info.cache, before: info.before,
	    hasHeights: false
	  }
	}

	// Given a prepared measurement object, measures the position of an
	// actual character (or fetches it from the cache).
	function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
	  if (prepared.before) { ch = -1 }
	  var key = ch + (bias || ""), found
	  if (prepared.cache.hasOwnProperty(key)) {
	    found = prepared.cache[key]
	  } else {
	    if (!prepared.rect)
	      { prepared.rect = prepared.view.text.getBoundingClientRect() }
	    if (!prepared.hasHeights) {
	      ensureLineHeights(cm, prepared.view, prepared.rect)
	      prepared.hasHeights = true
	    }
	    found = measureCharInner(cm, prepared, ch, bias)
	    if (!found.bogus) { prepared.cache[key] = found }
	  }
	  return {left: found.left, right: found.right,
	          top: varHeight ? found.rtop : found.top,
	          bottom: varHeight ? found.rbottom : found.bottom}
	}

	var nullRect = {left: 0, right: 0, top: 0, bottom: 0}

	function nodeAndOffsetInLineMap(map, ch, bias) {
	  var node, start, end, collapse, mStart, mEnd
	  // First, search the line map for the text node corresponding to,
	  // or closest to, the target character.
	  for (var i = 0; i < map.length; i += 3) {
	    mStart = map[i]
	    mEnd = map[i + 1]
	    if (ch < mStart) {
	      start = 0; end = 1
	      collapse = "left"
	    } else if (ch < mEnd) {
	      start = ch - mStart
	      end = start + 1
	    } else if (i == map.length - 3 || ch == mEnd && map[i + 3] > ch) {
	      end = mEnd - mStart
	      start = end - 1
	      if (ch >= mEnd) { collapse = "right" }
	    }
	    if (start != null) {
	      node = map[i + 2]
	      if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right"))
	        { collapse = bias }
	      if (bias == "left" && start == 0)
	        { while (i && map[i - 2] == map[i - 3] && map[i - 1].insertLeft) {
	          node = map[(i -= 3) + 2]
	          collapse = "left"
	        } }
	      if (bias == "right" && start == mEnd - mStart)
	        { while (i < map.length - 3 && map[i + 3] == map[i + 4] && !map[i + 5].insertLeft) {
	          node = map[(i += 3) + 2]
	          collapse = "right"
	        } }
	      break
	    }
	  }
	  return {node: node, start: start, end: end, collapse: collapse, coverStart: mStart, coverEnd: mEnd}
	}

	function getUsefulRect(rects, bias) {
	  var rect = nullRect
	  if (bias == "left") { for (var i = 0; i < rects.length; i++) {
	    if ((rect = rects[i]).left != rect.right) { break }
	  } } else { for (var i$1 = rects.length - 1; i$1 >= 0; i$1--) {
	    if ((rect = rects[i$1]).left != rect.right) { break }
	  } }
	  return rect
	}

	function measureCharInner(cm, prepared, ch, bias) {
	  var place = nodeAndOffsetInLineMap(prepared.map, ch, bias)
	  var node = place.node, start = place.start, end = place.end, collapse = place.collapse

	  var rect
	  if (node.nodeType == 3) { // If it is a text node, use a range to retrieve the coordinates.
	    for (var i$1 = 0; i$1 < 4; i$1++) { // Retry a maximum of 4 times when nonsense rectangles are returned
	      while (start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start))) { --start }
	      while (place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end))) { ++end }
	      if (ie && ie_version < 9 && start == 0 && end == place.coverEnd - place.coverStart)
	        { rect = node.parentNode.getBoundingClientRect() }
	      else
	        { rect = getUsefulRect(range(node, start, end).getClientRects(), bias) }
	      if (rect.left || rect.right || start == 0) { break }
	      end = start
	      start = start - 1
	      collapse = "right"
	    }
	    if (ie && ie_version < 11) { rect = maybeUpdateRectForZooming(cm.display.measure, rect) }
	  } else { // If it is a widget, simply get the box for the whole widget.
	    if (start > 0) { collapse = bias = "right" }
	    var rects
	    if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1)
	      { rect = rects[bias == "right" ? rects.length - 1 : 0] }
	    else
	      { rect = node.getBoundingClientRect() }
	  }
	  if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
	    var rSpan = node.parentNode.getClientRects()[0]
	    if (rSpan)
	      { rect = {left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom} }
	    else
	      { rect = nullRect }
	  }

	  var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top
	  var mid = (rtop + rbot) / 2
	  var heights = prepared.view.measure.heights
	  var i = 0
	  for (; i < heights.length - 1; i++)
	    { if (mid < heights[i]) { break } }
	  var top = i ? heights[i - 1] : 0, bot = heights[i]
	  var result = {left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
	                right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
	                top: top, bottom: bot}
	  if (!rect.left && !rect.right) { result.bogus = true }
	  if (!cm.options.singleCursorHeightPerLine) { result.rtop = rtop; result.rbottom = rbot }

	  return result
	}

	// Work around problem with bounding client rects on ranges being
	// returned incorrectly when zoomed on IE10 and below.
	function maybeUpdateRectForZooming(measure, rect) {
	  if (!window.screen || screen.logicalXDPI == null ||
	      screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure))
	    { return rect }
	  var scaleX = screen.logicalXDPI / screen.deviceXDPI
	  var scaleY = screen.logicalYDPI / screen.deviceYDPI
	  return {left: rect.left * scaleX, right: rect.right * scaleX,
	          top: rect.top * scaleY, bottom: rect.bottom * scaleY}
	}

	function clearLineMeasurementCacheFor(lineView) {
	  if (lineView.measure) {
	    lineView.measure.cache = {}
	    lineView.measure.heights = null
	    if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
	      { lineView.measure.caches[i] = {} } }
	  }
	}

	function clearLineMeasurementCache(cm) {
	  cm.display.externalMeasure = null
	  removeChildren(cm.display.lineMeasure)
	  for (var i = 0; i < cm.display.view.length; i++)
	    { clearLineMeasurementCacheFor(cm.display.view[i]) }
	}

	function clearCaches(cm) {
	  clearLineMeasurementCache(cm)
	  cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null
	  if (!cm.options.lineWrapping) { cm.display.maxLineChanged = true }
	  cm.display.lineNumChars = null
	}

	function pageScrollX() { return window.pageXOffset || (document.documentElement || document.body).scrollLeft }
	function pageScrollY() { return window.pageYOffset || (document.documentElement || document.body).scrollTop }

	// Converts a {top, bottom, left, right} box from line-local
	// coordinates into another coordinate system. Context may be one of
	// "line", "div" (display.lineDiv), "local"./null (editor), "window",
	// or "page".
	function intoCoordSystem(cm, lineObj, rect, context, includeWidgets) {
	  if (!includeWidgets && lineObj.widgets) { for (var i = 0; i < lineObj.widgets.length; ++i) { if (lineObj.widgets[i].above) {
	    var size = widgetHeight(lineObj.widgets[i])
	    rect.top += size; rect.bottom += size
	  } } }
	  if (context == "line") { return rect }
	  if (!context) { context = "local" }
	  var yOff = heightAtLine(lineObj)
	  if (context == "local") { yOff += paddingTop(cm.display) }
	  else { yOff -= cm.display.viewOffset }
	  if (context == "page" || context == "window") {
	    var lOff = cm.display.lineSpace.getBoundingClientRect()
	    yOff += lOff.top + (context == "window" ? 0 : pageScrollY())
	    var xOff = lOff.left + (context == "window" ? 0 : pageScrollX())
	    rect.left += xOff; rect.right += xOff
	  }
	  rect.top += yOff; rect.bottom += yOff
	  return rect
	}

	// Coverts a box from "div" coords to another coordinate system.
	// Context may be "window", "page", "div", or "local"./null.
	function fromCoordSystem(cm, coords, context) {
	  if (context == "div") { return coords }
	  var left = coords.left, top = coords.top
	  // First move into "page" coordinate system
	  if (context == "page") {
	    left -= pageScrollX()
	    top -= pageScrollY()
	  } else if (context == "local" || !context) {
	    var localBox = cm.display.sizer.getBoundingClientRect()
	    left += localBox.left
	    top += localBox.top
	  }

	  var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect()
	  return {left: left - lineSpaceBox.left, top: top - lineSpaceBox.top}
	}

	function charCoords(cm, pos, context, lineObj, bias) {
	  if (!lineObj) { lineObj = getLine(cm.doc, pos.line) }
	  return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context)
	}

	// Returns a box for a given cursor position, which may have an
	// 'other' property containing the position of the secondary cursor
	// on a bidi boundary.
	function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
	  lineObj = lineObj || getLine(cm.doc, pos.line)
	  if (!preparedMeasure) { preparedMeasure = prepareMeasureForLine(cm, lineObj) }
	  function get(ch, right) {
	    var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight)
	    if (right) { m.left = m.right; } else { m.right = m.left }
	    return intoCoordSystem(cm, lineObj, m, context)
	  }
	  function getBidi(ch, partPos) {
	    var part = order[partPos], right = part.level % 2
	    if (ch == bidiLeft(part) && partPos && part.level < order[partPos - 1].level) {
	      part = order[--partPos]
	      ch = bidiRight(part) - (part.level % 2 ? 0 : 1)
	      right = true
	    } else if (ch == bidiRight(part) && partPos < order.length - 1 && part.level < order[partPos + 1].level) {
	      part = order[++partPos]
	      ch = bidiLeft(part) - part.level % 2
	      right = false
	    }
	    if (right && ch == part.to && ch > part.from) { return get(ch - 1) }
	    return get(ch, right)
	  }
	  var order = getOrder(lineObj), ch = pos.ch
	  if (!order) { return get(ch) }
	  var partPos = getBidiPartAt(order, ch)
	  var val = getBidi(ch, partPos)
	  if (bidiOther != null) { val.other = getBidi(ch, bidiOther) }
	  return val
	}

	// Used to cheaply estimate the coordinates for a position. Used for
	// intermediate scroll updates.
	function estimateCoords(cm, pos) {
	  var left = 0
	  pos = clipPos(cm.doc, pos)
	  if (!cm.options.lineWrapping) { left = charWidth(cm.display) * pos.ch }
	  var lineObj = getLine(cm.doc, pos.line)
	  var top = heightAtLine(lineObj) + paddingTop(cm.display)
	  return {left: left, right: left, top: top, bottom: top + lineObj.height}
	}

	// Positions returned by coordsChar contain some extra information.
	// xRel is the relative x position of the input coordinates compared
	// to the found position (so xRel > 0 means the coordinates are to
	// the right of the character position, for example). When outside
	// is true, that means the coordinates lie outside the line's
	// vertical range.
	function PosWithInfo(line, ch, outside, xRel) {
	  var pos = Pos(line, ch)
	  pos.xRel = xRel
	  if (outside) { pos.outside = true }
	  return pos
	}

	// Compute the character position closest to the given coordinates.
	// Input must be lineSpace-local ("div" coordinate system).
	function coordsChar(cm, x, y) {
	  var doc = cm.doc
	  y += cm.display.viewOffset
	  if (y < 0) { return PosWithInfo(doc.first, 0, true, -1) }
	  var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1
	  if (lineN > last)
	    { return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, true, 1) }
	  if (x < 0) { x = 0 }

	  var lineObj = getLine(doc, lineN)
	  for (;;) {
	    var found = coordsCharInner(cm, lineObj, lineN, x, y)
	    var merged = collapsedSpanAtEnd(lineObj)
	    var mergedPos = merged && merged.find(0, true)
	    if (merged && (found.ch > mergedPos.from.ch || found.ch == mergedPos.from.ch && found.xRel > 0))
	      { lineN = lineNo(lineObj = mergedPos.to.line) }
	    else
	      { return found }
	  }
	}

	function coordsCharInner(cm, lineObj, lineNo, x, y) {
	  var innerOff = y - heightAtLine(lineObj)
	  var wrongLine = false, adjust = 2 * cm.display.wrapper.clientWidth
	  var preparedMeasure = prepareMeasureForLine(cm, lineObj)

	  function getX(ch) {
	    var sp = cursorCoords(cm, Pos(lineNo, ch), "line", lineObj, preparedMeasure)
	    wrongLine = true
	    if (innerOff > sp.bottom) { return sp.left - adjust }
	    else if (innerOff < sp.top) { return sp.left + adjust }
	    else { wrongLine = false }
	    return sp.left
	  }

	  var bidi = getOrder(lineObj), dist = lineObj.text.length
	  var from = lineLeft(lineObj), to = lineRight(lineObj)
	  var fromX = getX(from), fromOutside = wrongLine, toX = getX(to), toOutside = wrongLine

	  if (x > toX) { return PosWithInfo(lineNo, to, toOutside, 1) }
	  // Do a binary search between these bounds.
	  for (;;) {
	    if (bidi ? to == from || to == moveVisually(lineObj, from, 1) : to - from <= 1) {
	      var ch = x < fromX || x - fromX <= toX - x ? from : to
	      var outside = ch == from ? fromOutside : toOutside
	      var xDiff = x - (ch == from ? fromX : toX)
	      // This is a kludge to handle the case where the coordinates
	      // are after a line-wrapped line. We should replace it with a
	      // more general handling of cursor positions around line
	      // breaks. (Issue #4078)
	      if (toOutside && !bidi && !/\s/.test(lineObj.text.charAt(ch)) && xDiff > 0 &&
	          ch < lineObj.text.length && preparedMeasure.view.measure.heights.length > 1) {
	        var charSize = measureCharPrepared(cm, preparedMeasure, ch, "right")
	        if (innerOff <= charSize.bottom && innerOff >= charSize.top && Math.abs(x - charSize.right) < xDiff) {
	          outside = false
	          ch++
	          xDiff = x - charSize.right
	        }
	      }
	      while (isExtendingChar(lineObj.text.charAt(ch))) { ++ch }
	      var pos = PosWithInfo(lineNo, ch, outside, xDiff < -1 ? -1 : xDiff > 1 ? 1 : 0)
	      return pos
	    }
	    var step = Math.ceil(dist / 2), middle = from + step
	    if (bidi) {
	      middle = from
	      for (var i = 0; i < step; ++i) { middle = moveVisually(lineObj, middle, 1) }
	    }
	    var middleX = getX(middle)
	    if (middleX > x) {to = middle; toX = middleX; if (toOutside = wrongLine) { toX += 1000; } dist = step}
	    else {from = middle; fromX = middleX; fromOutside = wrongLine; dist -= step}
	  }
	}

	var measureText
	// Compute the default text height.
	function textHeight(display) {
	  if (display.cachedTextHeight != null) { return display.cachedTextHeight }
	  if (measureText == null) {
	    measureText = elt("pre")
	    // Measure a bunch of lines, for browsers that compute
	    // fractional heights.
	    for (var i = 0; i < 49; ++i) {
	      measureText.appendChild(document.createTextNode("x"))
	      measureText.appendChild(elt("br"))
	    }
	    measureText.appendChild(document.createTextNode("x"))
	  }
	  removeChildrenAndAdd(display.measure, measureText)
	  var height = measureText.offsetHeight / 50
	  if (height > 3) { display.cachedTextHeight = height }
	  removeChildren(display.measure)
	  return height || 1
	}

	// Compute the default character width.
	function charWidth(display) {
	  if (display.cachedCharWidth != null) { return display.cachedCharWidth }
	  var anchor = elt("span", "xxxxxxxxxx")
	  var pre = elt("pre", [anchor])
	  removeChildrenAndAdd(display.measure, pre)
	  var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10
	  if (width > 2) { display.cachedCharWidth = width }
	  return width || 10
	}

	// Do a bulk-read of the DOM positions and sizes needed to draw the
	// view, so that we don't interleave reading and writing to the DOM.
	function getDimensions(cm) {
	  var d = cm.display, left = {}, width = {}
	  var gutterLeft = d.gutters.clientLeft
	  for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
	    left[cm.options.gutters[i]] = n.offsetLeft + n.clientLeft + gutterLeft
	    width[cm.options.gutters[i]] = n.clientWidth
	  }
	  return {fixedPos: compensateForHScroll(d),
	          gutterTotalWidth: d.gutters.offsetWidth,
	          gutterLeft: left,
	          gutterWidth: width,
	          wrapperWidth: d.wrapper.clientWidth}
	}

	// Computes display.scroller.scrollLeft + display.gutters.offsetWidth,
	// but using getBoundingClientRect to get a sub-pixel-accurate
	// result.
	function compensateForHScroll(display) {
	  return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left
	}

	// Returns a function that estimates the height of a line, to use as
	// first approximation until the line becomes visible (and is thus
	// properly measurable).
	function estimateHeight(cm) {
	  var th = textHeight(cm.display), wrapping = cm.options.lineWrapping
	  var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3)
	  return function (line) {
	    if (lineIsHidden(cm.doc, line)) { return 0 }

	    var widgetsHeight = 0
	    if (line.widgets) { for (var i = 0; i < line.widgets.length; i++) {
	      if (line.widgets[i].height) { widgetsHeight += line.widgets[i].height }
	    } }

	    if (wrapping)
	      { return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th }
	    else
	      { return widgetsHeight + th }
	  }
	}

	function estimateLineHeights(cm) {
	  var doc = cm.doc, est = estimateHeight(cm)
	  doc.iter(function (line) {
	    var estHeight = est(line)
	    if (estHeight != line.height) { updateLineHeight(line, estHeight) }
	  })
	}

	// Given a mouse event, find the corresponding position. If liberal
	// is false, it checks whether a gutter or scrollbar was clicked,
	// and returns null if it was. forRect is used by rectangular
	// selections, and tries to estimate a character position even for
	// coordinates beyond the right of the text.
	function posFromMouse(cm, e, liberal, forRect) {
	  var display = cm.display
	  if (!liberal && e_target(e).getAttribute("cm-not-content") == "true") { return null }

	  var x, y, space = display.lineSpace.getBoundingClientRect()
	  // Fails unpredictably on IE[67] when mouse is dragged around quickly.
	  try { x = e.clientX - space.left; y = e.clientY - space.top }
	  catch (e) { return null }
	  var coords = coordsChar(cm, x, y), line
	  if (forRect && coords.xRel == 1 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
	    var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length
	    coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff))
	  }
	  return coords
	}

	// Find the view element corresponding to a given line. Return null
	// when the line isn't visible.
	function findViewIndex(cm, n) {
	  if (n >= cm.display.viewTo) { return null }
	  n -= cm.display.viewFrom
	  if (n < 0) { return null }
	  var view = cm.display.view
	  for (var i = 0; i < view.length; i++) {
	    n -= view[i].size
	    if (n < 0) { return i }
	  }
	}

	function updateSelection(cm) {
	  cm.display.input.showSelection(cm.display.input.prepareSelection())
	}

	function prepareSelection(cm, primary) {
	  var doc = cm.doc, result = {}
	  var curFragment = result.cursors = document.createDocumentFragment()
	  var selFragment = result.selection = document.createDocumentFragment()

	  for (var i = 0; i < doc.sel.ranges.length; i++) {
	    if (primary === false && i == doc.sel.primIndex) { continue }
	    var range = doc.sel.ranges[i]
	    if (range.from().line >= cm.display.viewTo || range.to().line < cm.display.viewFrom) { continue }
	    var collapsed = range.empty()
	    if (collapsed || cm.options.showCursorWhenSelecting)
	      { drawSelectionCursor(cm, range.head, curFragment) }
	    if (!collapsed)
	      { drawSelectionRange(cm, range, selFragment) }
	  }
	  return result
	}

	// Draws a cursor for the given range
	function drawSelectionCursor(cm, head, output) {
	  var pos = cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine)

	  var cursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor"))
	  cursor.style.left = pos.left + "px"
	  cursor.style.top = pos.top + "px"
	  cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px"

	  if (pos.other) {
	    // Secondary cursor, shown when on a 'jump' in bi-directional text
	    var otherCursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor"))
	    otherCursor.style.display = ""
	    otherCursor.style.left = pos.other.left + "px"
	    otherCursor.style.top = pos.other.top + "px"
	    otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px"
	  }
	}

	// Draws the given range as a highlighted selection
	function drawSelectionRange(cm, range, output) {
	  var display = cm.display, doc = cm.doc
	  var fragment = document.createDocumentFragment()
	  var padding = paddingH(cm.display), leftSide = padding.left
	  var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right

	  function add(left, top, width, bottom) {
	    if (top < 0) { top = 0 }
	    top = Math.round(top)
	    bottom = Math.round(bottom)
	    fragment.appendChild(elt("div", null, "CodeMirror-selected", ("position: absolute; left: " + left + "px;\n                             top: " + top + "px; width: " + (width == null ? rightSide - left : width) + "px;\n                             height: " + (bottom - top) + "px")))
	  }

	  function drawForLine(line, fromArg, toArg) {
	    var lineObj = getLine(doc, line)
	    var lineLen = lineObj.text.length
	    var start, end
	    function coords(ch, bias) {
	      return charCoords(cm, Pos(line, ch), "div", lineObj, bias)
	    }

	    iterateBidiSections(getOrder(lineObj), fromArg || 0, toArg == null ? lineLen : toArg, function (from, to, dir) {
	      var leftPos = coords(from, "left"), rightPos, left, right
	      if (from == to) {
	        rightPos = leftPos
	        left = right = leftPos.left
	      } else {
	        rightPos = coords(to - 1, "right")
	        if (dir == "rtl") { var tmp = leftPos; leftPos = rightPos; rightPos = tmp }
	        left = leftPos.left
	        right = rightPos.right
	      }
	      if (fromArg == null && from == 0) { left = leftSide }
	      if (rightPos.top - leftPos.top > 3) { // Different lines, draw top part
	        add(left, leftPos.top, null, leftPos.bottom)
	        left = leftSide
	        if (leftPos.bottom < rightPos.top) { add(left, leftPos.bottom, null, rightPos.top) }
	      }
	      if (toArg == null && to == lineLen) { right = rightSide }
	      if (!start || leftPos.top < start.top || leftPos.top == start.top && leftPos.left < start.left)
	        { start = leftPos }
	      if (!end || rightPos.bottom > end.bottom || rightPos.bottom == end.bottom && rightPos.right > end.right)
	        { end = rightPos }
	      if (left < leftSide + 1) { left = leftSide }
	      add(left, rightPos.top, right - left, rightPos.bottom)
	    })
	    return {start: start, end: end}
	  }

	  var sFrom = range.from(), sTo = range.to()
	  if (sFrom.line == sTo.line) {
	    drawForLine(sFrom.line, sFrom.ch, sTo.ch)
	  } else {
	    var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line)
	    var singleVLine = visualLine(fromLine) == visualLine(toLine)
	    var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end
	    var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start
	    if (singleVLine) {
	      if (leftEnd.top < rightStart.top - 2) {
	        add(leftEnd.right, leftEnd.top, null, leftEnd.bottom)
	        add(leftSide, rightStart.top, rightStart.left, rightStart.bottom)
	      } else {
	        add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom)
	      }
	    }
	    if (leftEnd.bottom < rightStart.top)
	      { add(leftSide, leftEnd.bottom, null, rightStart.top) }
	  }

	  output.appendChild(fragment)
	}

	// Cursor-blinking
	function restartBlink(cm) {
	  if (!cm.state.focused) { return }
	  var display = cm.display
	  clearInterval(display.blinker)
	  var on = true
	  display.cursorDiv.style.visibility = ""
	  if (cm.options.cursorBlinkRate > 0)
	    { display.blinker = setInterval(function () { return display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden"; },
	      cm.options.cursorBlinkRate) }
	  else if (cm.options.cursorBlinkRate < 0)
	    { display.cursorDiv.style.visibility = "hidden" }
	}

	function ensureFocus(cm) {
	  if (!cm.state.focused) { cm.display.input.focus(); onFocus(cm) }
	}

	function delayBlurEvent(cm) {
	  cm.state.delayingBlurEvent = true
	  setTimeout(function () { if (cm.state.delayingBlurEvent) {
	    cm.state.delayingBlurEvent = false
	    onBlur(cm)
	  } }, 100)
	}

	function onFocus(cm, e) {
	  if (cm.state.delayingBlurEvent) { cm.state.delayingBlurEvent = false }

	  if (cm.options.readOnly == "nocursor") { return }
	  if (!cm.state.focused) {
	    signal(cm, "focus", cm, e)
	    cm.state.focused = true
	    addClass(cm.display.wrapper, "CodeMirror-focused")
	    // This test prevents this from firing when a context
	    // menu is closed (since the input reset would kill the
	    // select-all detection hack)
	    if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
	      cm.display.input.reset()
	      if (webkit) { setTimeout(function () { return cm.display.input.reset(true); }, 20) } // Issue #1730
	    }
	    cm.display.input.receivedFocus()
	  }
	  restartBlink(cm)
	}
	function onBlur(cm, e) {
	  if (cm.state.delayingBlurEvent) { return }

	  if (cm.state.focused) {
	    signal(cm, "blur", cm, e)
	    cm.state.focused = false
	    rmClass(cm.display.wrapper, "CodeMirror-focused")
	  }
	  clearInterval(cm.display.blinker)
	  setTimeout(function () { if (!cm.state.focused) { cm.display.shift = false } }, 150)
	}

	// Re-align line numbers and gutter marks to compensate for
	// horizontal scrolling.
	function alignHorizontally(cm) {
	  var display = cm.display, view = display.view
	  if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) { return }
	  var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft
	  var gutterW = display.gutters.offsetWidth, left = comp + "px"
	  for (var i = 0; i < view.length; i++) { if (!view[i].hidden) {
	    if (cm.options.fixedGutter) {
	      if (view[i].gutter)
	        { view[i].gutter.style.left = left }
	      if (view[i].gutterBackground)
	        { view[i].gutterBackground.style.left = left }
	    }
	    var align = view[i].alignable
	    if (align) { for (var j = 0; j < align.length; j++)
	      { align[j].style.left = left } }
	  } }
	  if (cm.options.fixedGutter)
	    { display.gutters.style.left = (comp + gutterW) + "px" }
	}

	// Used to ensure that the line number gutter is still the right
	// size for the current document size. Returns true when an update
	// is needed.
	function maybeUpdateLineNumberWidth(cm) {
	  if (!cm.options.lineNumbers) { return false }
	  var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display
	  if (last.length != display.lineNumChars) {
	    var test = display.measure.appendChild(elt("div", [elt("div", last)],
	                                               "CodeMirror-linenumber CodeMirror-gutter-elt"))
	    var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW
	    display.lineGutter.style.width = ""
	    display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1
	    display.lineNumWidth = display.lineNumInnerWidth + padding
	    display.lineNumChars = display.lineNumInnerWidth ? last.length : -1
	    display.lineGutter.style.width = display.lineNumWidth + "px"
	    updateGutterSpace(cm)
	    return true
	  }
	  return false
	}

	// Read the actual heights of the rendered lines, and update their
	// stored heights to match.
	function updateHeightsInViewport(cm) {
	  var display = cm.display
	  var prevBottom = display.lineDiv.offsetTop
	  for (var i = 0; i < display.view.length; i++) {
	    var cur = display.view[i], height = (void 0)
	    if (cur.hidden) { continue }
	    if (ie && ie_version < 8) {
	      var bot = cur.node.offsetTop + cur.node.offsetHeight
	      height = bot - prevBottom
	      prevBottom = bot
	    } else {
	      var box = cur.node.getBoundingClientRect()
	      height = box.bottom - box.top
	    }
	    var diff = cur.line.height - height
	    if (height < 2) { height = textHeight(display) }
	    if (diff > .001 || diff < -.001) {
	      updateLineHeight(cur.line, height)
	      updateWidgetHeight(cur.line)
	      if (cur.rest) { for (var j = 0; j < cur.rest.length; j++)
	        { updateWidgetHeight(cur.rest[j]) } }
	    }
	  }
	}

	// Read and store the height of line widgets associated with the
	// given line.
	function updateWidgetHeight(line) {
	  if (line.widgets) { for (var i = 0; i < line.widgets.length; ++i)
	    { line.widgets[i].height = line.widgets[i].node.parentNode.offsetHeight } }
	}

	// Compute the lines that are visible in a given viewport (defaults
	// the the current scroll position). viewport may contain top,
	// height, and ensure (see op.scrollToPos) properties.
	function visibleLines(display, doc, viewport) {
	  var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop
	  top = Math.floor(top - paddingTop(display))
	  var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight

	  var from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom)
	  // Ensure is a {from: {line, ch}, to: {line, ch}} object, and
	  // forces those lines into the viewport (if possible).
	  if (viewport && viewport.ensure) {
	    var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line
	    if (ensureFrom < from) {
	      from = ensureFrom
	      to = lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight)
	    } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
	      from = lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight)
	      to = ensureTo
	    }
	  }
	  return {from: from, to: Math.max(to, from + 1)}
	}

	// Sync the scrollable area and scrollbars, ensure the viewport
	// covers the visible area.
	function setScrollTop(cm, val) {
	  if (Math.abs(cm.doc.scrollTop - val) < 2) { return }
	  cm.doc.scrollTop = val
	  if (!gecko) { updateDisplaySimple(cm, {top: val}) }
	  if (cm.display.scroller.scrollTop != val) { cm.display.scroller.scrollTop = val }
	  cm.display.scrollbars.setScrollTop(val)
	  if (gecko) { updateDisplaySimple(cm) }
	  startWorker(cm, 100)
	}
	// Sync scroller and scrollbar, ensure the gutter elements are
	// aligned.
	function setScrollLeft(cm, val, isScroller) {
	  if (isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) { return }
	  val = Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth)
	  cm.doc.scrollLeft = val
	  alignHorizontally(cm)
	  if (cm.display.scroller.scrollLeft != val) { cm.display.scroller.scrollLeft = val }
	  cm.display.scrollbars.setScrollLeft(val)
	}

	// Since the delta values reported on mouse wheel events are
	// unstandardized between browsers and even browser versions, and
	// generally horribly unpredictable, this code starts by measuring
	// the scroll effect that the first few mouse wheel events have,
	// and, from that, detects the way it can convert deltas to pixel
	// offsets afterwards.
	//
	// The reason we want to know the amount a wheel event will scroll
	// is that it gives us a chance to update the display before the
	// actual scrolling happens, reducing flickering.

	var wheelSamples = 0;
	var wheelPixelsPerUnit = null;
	// Fill in a browser-detected starting value on browsers where we
	// know one. These don't have to be accurate -- the result of them
	// being wrong would just be a slight flicker on the first wheel
	// scroll (if it is large enough).
	if (ie) { wheelPixelsPerUnit = -.53 }
	else if (gecko) { wheelPixelsPerUnit = 15 }
	else if (chrome) { wheelPixelsPerUnit = -.7 }
	else if (safari) { wheelPixelsPerUnit = -1/3 }

	function wheelEventDelta(e) {
	  var dx = e.wheelDeltaX, dy = e.wheelDeltaY
	  if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) { dx = e.detail }
	  if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) { dy = e.detail }
	  else if (dy == null) { dy = e.wheelDelta }
	  return {x: dx, y: dy}
	}
	function wheelEventPixels(e) {
	  var delta = wheelEventDelta(e)
	  delta.x *= wheelPixelsPerUnit
	  delta.y *= wheelPixelsPerUnit
	  return delta
	}

	function onScrollWheel(cm, e) {
	  var delta = wheelEventDelta(e), dx = delta.x, dy = delta.y

	  var display = cm.display, scroll = display.scroller
	  // Quit if there's nothing to scroll here
	  var canScrollX = scroll.scrollWidth > scroll.clientWidth
	  var canScrollY = scroll.scrollHeight > scroll.clientHeight
	  if (!(dx && canScrollX || dy && canScrollY)) { return }

	  // Webkit browsers on OS X abort momentum scrolls when the target
	  // of the scroll event is removed from the scrollable element.
	  // This hack (see related code in patchDisplay) makes sure the
	  // element is kept around.
	  if (dy && mac && webkit) {
	    outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
	      for (var i = 0; i < view.length; i++) {
	        if (view[i].node == cur) {
	          cm.display.currentWheelTarget = cur
	          break outer
	        }
	      }
	    }
	  }

	  // On some browsers, horizontal scrolling will cause redraws to
	  // happen before the gutter has been realigned, causing it to
	  // wriggle around in a most unseemly way. When we have an
	  // estimated pixels/delta value, we just handle horizontal
	  // scrolling entirely here. It'll be slightly off from native, but
	  // better than glitching out.
	  if (dx && !gecko && !presto && wheelPixelsPerUnit != null) {
	    if (dy && canScrollY)
	      { setScrollTop(cm, Math.max(0, Math.min(scroll.scrollTop + dy * wheelPixelsPerUnit, scroll.scrollHeight - scroll.clientHeight))) }
	    setScrollLeft(cm, Math.max(0, Math.min(scroll.scrollLeft + dx * wheelPixelsPerUnit, scroll.scrollWidth - scroll.clientWidth)))
	    // Only prevent default scrolling if vertical scrolling is
	    // actually possible. Otherwise, it causes vertical scroll
	    // jitter on OSX trackpads when deltaX is small and deltaY
	    // is large (issue #3579)
	    if (!dy || (dy && canScrollY))
	      { e_preventDefault(e) }
	    display.wheelStartX = null // Abort measurement, if in progress
	    return
	  }

	  // 'Project' the visible viewport to cover the area that is being
	  // scrolled into view (if we know enough to estimate it).
	  if (dy && wheelPixelsPerUnit != null) {
	    var pixels = dy * wheelPixelsPerUnit
	    var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight
	    if (pixels < 0) { top = Math.max(0, top + pixels - 50) }
	    else { bot = Math.min(cm.doc.height, bot + pixels + 50) }
	    updateDisplaySimple(cm, {top: top, bottom: bot})
	  }

	  if (wheelSamples < 20) {
	    if (display.wheelStartX == null) {
	      display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop
	      display.wheelDX = dx; display.wheelDY = dy
	      setTimeout(function () {
	        if (display.wheelStartX == null) { return }
	        var movedX = scroll.scrollLeft - display.wheelStartX
	        var movedY = scroll.scrollTop - display.wheelStartY
	        var sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
	          (movedX && display.wheelDX && movedX / display.wheelDX)
	        display.wheelStartX = display.wheelStartY = null
	        if (!sample) { return }
	        wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1)
	        ++wheelSamples
	      }, 200)
	    } else {
	      display.wheelDX += dx; display.wheelDY += dy
	    }
	  }
	}

	// SCROLLBARS

	// Prepare DOM reads needed to update the scrollbars. Done in one
	// shot to minimize update/measure roundtrips.
	function measureForScrollbars(cm) {
	  var d = cm.display, gutterW = d.gutters.offsetWidth
	  var docH = Math.round(cm.doc.height + paddingVert(cm.display))
	  return {
	    clientHeight: d.scroller.clientHeight,
	    viewHeight: d.wrapper.clientHeight,
	    scrollWidth: d.scroller.scrollWidth, clientWidth: d.scroller.clientWidth,
	    viewWidth: d.wrapper.clientWidth,
	    barLeft: cm.options.fixedGutter ? gutterW : 0,
	    docHeight: docH,
	    scrollHeight: docH + scrollGap(cm) + d.barHeight,
	    nativeBarWidth: d.nativeBarWidth,
	    gutterWidth: gutterW
	  }
	}

	var NativeScrollbars = function(place, scroll, cm) {
	  this.cm = cm
	  var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar")
	  var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar")
	  place(vert); place(horiz)

	  on(vert, "scroll", function () {
	    if (vert.clientHeight) { scroll(vert.scrollTop, "vertical") }
	  })
	  on(horiz, "scroll", function () {
	    if (horiz.clientWidth) { scroll(horiz.scrollLeft, "horizontal") }
	  })

	  this.checkedZeroWidth = false
	  // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
	  if (ie && ie_version < 8) { this.horiz.style.minHeight = this.vert.style.minWidth = "18px" }
	};

	NativeScrollbars.prototype.update = function (measure) {
	  var needsH = measure.scrollWidth > measure.clientWidth + 1
	  var needsV = measure.scrollHeight > measure.clientHeight + 1
	  var sWidth = measure.nativeBarWidth

	  if (needsV) {
	    this.vert.style.display = "block"
	    this.vert.style.bottom = needsH ? sWidth + "px" : "0"
	    var totalHeight = measure.viewHeight - (needsH ? sWidth : 0)
	    // A bug in IE8 can cause this value to be negative, so guard it.
	    this.vert.firstChild.style.height =
	      Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px"
	  } else {
	    this.vert.style.display = ""
	    this.vert.firstChild.style.height = "0"
	  }

	  if (needsH) {
	    this.horiz.style.display = "block"
	    this.horiz.style.right = needsV ? sWidth + "px" : "0"
	    this.horiz.style.left = measure.barLeft + "px"
	    var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0)
	    this.horiz.firstChild.style.width =
	      (measure.scrollWidth - measure.clientWidth + totalWidth) + "px"
	  } else {
	    this.horiz.style.display = ""
	    this.horiz.firstChild.style.width = "0"
	  }

	  if (!this.checkedZeroWidth && measure.clientHeight > 0) {
	    if (sWidth == 0) { this.zeroWidthHack() }
	    this.checkedZeroWidth = true
	  }

	  return {right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0}
	};

	NativeScrollbars.prototype.setScrollLeft = function (pos) {
	  if (this.horiz.scrollLeft != pos) { this.horiz.scrollLeft = pos }
	  if (this.disableHoriz) { this.enableZeroWidthBar(this.horiz, this.disableHoriz) }
	};

	NativeScrollbars.prototype.setScrollTop = function (pos) {
	  if (this.vert.scrollTop != pos) { this.vert.scrollTop = pos }
	  if (this.disableVert) { this.enableZeroWidthBar(this.vert, this.disableVert) }
	};

	NativeScrollbars.prototype.zeroWidthHack = function () {
	  var w = mac && !mac_geMountainLion ? "12px" : "18px"
	  this.horiz.style.height = this.vert.style.width = w
	  this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none"
	  this.disableHoriz = new Delayed
	  this.disableVert = new Delayed
	};

	NativeScrollbars.prototype.enableZeroWidthBar = function (bar, delay) {
	  bar.style.pointerEvents = "auto"
	  function maybeDisable() {
	    // To find out whether the scrollbar is still visible, we
	    // check whether the element under the pixel in the bottom
	    // left corner of the scrollbar box is the scrollbar box
	    // itself (when the bar is still visible) or its filler child
	    // (when the bar is hidden). If it is still visible, we keep
	    // it enabled, if it's hidden, we disable pointer events.
	    var box = bar.getBoundingClientRect()
	    var elt = document.elementFromPoint(box.left + 1, box.bottom - 1)
	    if (elt != bar) { bar.style.pointerEvents = "none" }
	    else { delay.set(1000, maybeDisable) }
	  }
	  delay.set(1000, maybeDisable)
	};

	NativeScrollbars.prototype.clear = function () {
	  var parent = this.horiz.parentNode
	  parent.removeChild(this.horiz)
	  parent.removeChild(this.vert)
	};

	var NullScrollbars = function () {};

	NullScrollbars.prototype.update = function () { return {bottom: 0, right: 0} };
	NullScrollbars.prototype.setScrollLeft = function () {};
	NullScrollbars.prototype.setScrollTop = function () {};
	NullScrollbars.prototype.clear = function () {};

	function updateScrollbars(cm, measure) {
	  if (!measure) { measure = measureForScrollbars(cm) }
	  var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight
	  updateScrollbarsInner(cm, measure)
	  for (var i = 0; i < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) {
	    if (startWidth != cm.display.barWidth && cm.options.lineWrapping)
	      { updateHeightsInViewport(cm) }
	    updateScrollbarsInner(cm, measureForScrollbars(cm))
	    startWidth = cm.display.barWidth; startHeight = cm.display.barHeight
	  }
	}

	// Re-synchronize the fake scrollbars with the actual size of the
	// content.
	function updateScrollbarsInner(cm, measure) {
	  var d = cm.display
	  var sizes = d.scrollbars.update(measure)

	  d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px"
	  d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px"
	  d.heightForcer.style.borderBottom = sizes.bottom + "px solid transparent"

	  if (sizes.right && sizes.bottom) {
	    d.scrollbarFiller.style.display = "block"
	    d.scrollbarFiller.style.height = sizes.bottom + "px"
	    d.scrollbarFiller.style.width = sizes.right + "px"
	  } else { d.scrollbarFiller.style.display = "" }
	  if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
	    d.gutterFiller.style.display = "block"
	    d.gutterFiller.style.height = sizes.bottom + "px"
	    d.gutterFiller.style.width = measure.gutterWidth + "px"
	  } else { d.gutterFiller.style.display = "" }
	}

	var scrollbarModel = {"native": NativeScrollbars, "null": NullScrollbars}

	function initScrollbars(cm) {
	  if (cm.display.scrollbars) {
	    cm.display.scrollbars.clear()
	    if (cm.display.scrollbars.addClass)
	      { rmClass(cm.display.wrapper, cm.display.scrollbars.addClass) }
	  }

	  cm.display.scrollbars = new scrollbarModel[cm.options.scrollbarStyle](function (node) {
	    cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller)
	    // Prevent clicks in the scrollbars from killing focus
	    on(node, "mousedown", function () {
	      if (cm.state.focused) { setTimeout(function () { return cm.display.input.focus(); }, 0) }
	    })
	    node.setAttribute("cm-not-content", "true")
	  }, function (pos, axis) {
	    if (axis == "horizontal") { setScrollLeft(cm, pos) }
	    else { setScrollTop(cm, pos) }
	  }, cm)
	  if (cm.display.scrollbars.addClass)
	    { addClass(cm.display.wrapper, cm.display.scrollbars.addClass) }
	}

	// SCROLLING THINGS INTO VIEW

	// If an editor sits on the top or bottom of the window, partially
	// scrolled out of view, this ensures that the cursor is visible.
	function maybeScrollWindow(cm, coords) {
	  if (signalDOMEvent(cm, "scrollCursorIntoView")) { return }

	  var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null
	  if (coords.top + box.top < 0) { doScroll = true }
	  else if (coords.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) { doScroll = false }
	  if (doScroll != null && !phantom) {
	    var scrollNode = elt("div", "\u200b", null, ("position: absolute;\n                         top: " + (coords.top - display.viewOffset - paddingTop(cm.display)) + "px;\n                         height: " + (coords.bottom - coords.top + scrollGap(cm) + display.barHeight) + "px;\n                         left: " + (coords.left) + "px; width: 2px;"))
	    cm.display.lineSpace.appendChild(scrollNode)
	    scrollNode.scrollIntoView(doScroll)
	    cm.display.lineSpace.removeChild(scrollNode)
	  }
	}

	// Scroll a given position into view (immediately), verifying that
	// it actually became visible (as line heights are accurately
	// measured, the position of something may 'drift' during drawing).
	function scrollPosIntoView(cm, pos, end, margin) {
	  if (margin == null) { margin = 0 }
	  var coords
	  for (var limit = 0; limit < 5; limit++) {
	    var changed = false
	    coords = cursorCoords(cm, pos)
	    var endCoords = !end || end == pos ? coords : cursorCoords(cm, end)
	    var scrollPos = calculateScrollPos(cm, Math.min(coords.left, endCoords.left),
	                                       Math.min(coords.top, endCoords.top) - margin,
	                                       Math.max(coords.left, endCoords.left),
	                                       Math.max(coords.bottom, endCoords.bottom) + margin)
	    var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft
	    if (scrollPos.scrollTop != null) {
	      setScrollTop(cm, scrollPos.scrollTop)
	      if (Math.abs(cm.doc.scrollTop - startTop) > 1) { changed = true }
	    }
	    if (scrollPos.scrollLeft != null) {
	      setScrollLeft(cm, scrollPos.scrollLeft)
	      if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) { changed = true }
	    }
	    if (!changed) { break }
	  }
	  return coords
	}

	// Scroll a given set of coordinates into view (immediately).
	function scrollIntoView(cm, x1, y1, x2, y2) {
	  var scrollPos = calculateScrollPos(cm, x1, y1, x2, y2)
	  if (scrollPos.scrollTop != null) { setScrollTop(cm, scrollPos.scrollTop) }
	  if (scrollPos.scrollLeft != null) { setScrollLeft(cm, scrollPos.scrollLeft) }
	}

	// Calculate a new scroll position needed to scroll the given
	// rectangle into view. Returns an object with scrollTop and
	// scrollLeft properties. When these are undefined, the
	// vertical/horizontal position does not need to be adjusted.
	function calculateScrollPos(cm, x1, y1, x2, y2) {
	  var display = cm.display, snapMargin = textHeight(cm.display)
	  if (y1 < 0) { y1 = 0 }
	  var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop
	  var screen = displayHeight(cm), result = {}
	  if (y2 - y1 > screen) { y2 = y1 + screen }
	  var docBottom = cm.doc.height + paddingVert(display)
	  var atTop = y1 < snapMargin, atBottom = y2 > docBottom - snapMargin
	  if (y1 < screentop) {
	    result.scrollTop = atTop ? 0 : y1
	  } else if (y2 > screentop + screen) {
	    var newTop = Math.min(y1, (atBottom ? docBottom : y2) - screen)
	    if (newTop != screentop) { result.scrollTop = newTop }
	  }

	  var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft
	  var screenw = displayWidth(cm) - (cm.options.fixedGutter ? display.gutters.offsetWidth : 0)
	  var tooWide = x2 - x1 > screenw
	  if (tooWide) { x2 = x1 + screenw }
	  if (x1 < 10)
	    { result.scrollLeft = 0 }
	  else if (x1 < screenleft)
	    { result.scrollLeft = Math.max(0, x1 - (tooWide ? 0 : 10)) }
	  else if (x2 > screenw + screenleft - 3)
	    { result.scrollLeft = x2 + (tooWide ? 0 : 10) - screenw }
	  return result
	}

	// Store a relative adjustment to the scroll position in the current
	// operation (to be applied when the operation finishes).
	function addToScrollPos(cm, left, top) {
	  if (left != null || top != null) { resolveScrollToPos(cm) }
	  if (left != null)
	    { cm.curOp.scrollLeft = (cm.curOp.scrollLeft == null ? cm.doc.scrollLeft : cm.curOp.scrollLeft) + left }
	  if (top != null)
	    { cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top }
	}

	// Make sure that at the end of the operation the current cursor is
	// shown.
	function ensureCursorVisible(cm) {
	  resolveScrollToPos(cm)
	  var cur = cm.getCursor(), from = cur, to = cur
	  if (!cm.options.lineWrapping) {
	    from = cur.ch ? Pos(cur.line, cur.ch - 1) : cur
	    to = Pos(cur.line, cur.ch + 1)
	  }
	  cm.curOp.scrollToPos = {from: from, to: to, margin: cm.options.cursorScrollMargin, isCursor: true}
	}

	// When an operation has its scrollToPos property set, and another
	// scroll action is applied before the end of the operation, this
	// 'simulates' scrolling that position into view in a cheap way, so
	// that the effect of intermediate scroll commands is not ignored.
	function resolveScrollToPos(cm) {
	  var range = cm.curOp.scrollToPos
	  if (range) {
	    cm.curOp.scrollToPos = null
	    var from = estimateCoords(cm, range.from), to = estimateCoords(cm, range.to)
	    var sPos = calculateScrollPos(cm, Math.min(from.left, to.left),
	                                  Math.min(from.top, to.top) - range.margin,
	                                  Math.max(from.right, to.right),
	                                  Math.max(from.bottom, to.bottom) + range.margin)
	    cm.scrollTo(sPos.scrollLeft, sPos.scrollTop)
	  }
	}

	// Operations are used to wrap a series of changes to the editor
	// state in such a way that each change won't have to update the
	// cursor and display (which would be awkward, slow, and
	// error-prone). Instead, display updates are batched and then all
	// combined and executed at once.

	var nextOpId = 0
	// Start a new operation.
	function startOperation(cm) {
	  cm.curOp = {
	    cm: cm,
	    viewChanged: false,      // Flag that indicates that lines might need to be redrawn
	    startHeight: cm.doc.height, // Used to detect need to update scrollbar
	    forceUpdate: false,      // Used to force a redraw
	    updateInput: null,       // Whether to reset the input textarea
	    typing: false,           // Whether this reset should be careful to leave existing text (for compositing)
	    changeObjs: null,        // Accumulated changes, for firing change events
	    cursorActivityHandlers: null, // Set of handlers to fire cursorActivity on
	    cursorActivityCalled: 0, // Tracks which cursorActivity handlers have been called already
	    selectionChanged: false, // Whether the selection needs to be redrawn
	    updateMaxLine: false,    // Set when the widest line needs to be determined anew
	    scrollLeft: null, scrollTop: null, // Intermediate scroll position, not pushed to DOM yet
	    scrollToPos: null,       // Used to scroll to a specific position
	    focus: false,
	    id: ++nextOpId           // Unique ID
	  }
	  pushOperation(cm.curOp)
	}

	// Finish an operation, updating the display and signalling delayed events
	function endOperation(cm) {
	  var op = cm.curOp
	  finishOperation(op, function (group) {
	    for (var i = 0; i < group.ops.length; i++)
	      { group.ops[i].cm.curOp = null }
	    endOperations(group)
	  })
	}

	// The DOM updates done when an operation finishes are batched so
	// that the minimum number of relayouts are required.
	function endOperations(group) {
	  var ops = group.ops
	  for (var i = 0; i < ops.length; i++) // Read DOM
	    { endOperation_R1(ops[i]) }
	  for (var i$1 = 0; i$1 < ops.length; i$1++) // Write DOM (maybe)
	    { endOperation_W1(ops[i$1]) }
	  for (var i$2 = 0; i$2 < ops.length; i$2++) // Read DOM
	    { endOperation_R2(ops[i$2]) }
	  for (var i$3 = 0; i$3 < ops.length; i$3++) // Write DOM (maybe)
	    { endOperation_W2(ops[i$3]) }
	  for (var i$4 = 0; i$4 < ops.length; i$4++) // Read DOM
	    { endOperation_finish(ops[i$4]) }
	}

	function endOperation_R1(op) {
	  var cm = op.cm, display = cm.display
	  maybeClipScrollbars(cm)
	  if (op.updateMaxLine) { findMaxLine(cm) }

	  op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null ||
	    op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom ||
	                       op.scrollToPos.to.line >= display.viewTo) ||
	    display.maxLineChanged && cm.options.lineWrapping
	  op.update = op.mustUpdate &&
	    new DisplayUpdate(cm, op.mustUpdate && {top: op.scrollTop, ensure: op.scrollToPos}, op.forceUpdate)
	}

	function endOperation_W1(op) {
	  op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update)
	}

	function endOperation_R2(op) {
	  var cm = op.cm, display = cm.display
	  if (op.updatedDisplay) { updateHeightsInViewport(cm) }

	  op.barMeasure = measureForScrollbars(cm)

	  // If the max line changed since it was last measured, measure it,
	  // and ensure the document's width matches it.
	  // updateDisplay_W2 will use these properties to do the actual resizing
	  if (display.maxLineChanged && !cm.options.lineWrapping) {
	    op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3
	    cm.display.sizerWidth = op.adjustWidthTo
	    op.barMeasure.scrollWidth =
	      Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth)
	    op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm))
	  }

	  if (op.updatedDisplay || op.selectionChanged)
	    { op.preparedSelection = display.input.prepareSelection(op.focus) }
	}

	function endOperation_W2(op) {
	  var cm = op.cm

	  if (op.adjustWidthTo != null) {
	    cm.display.sizer.style.minWidth = op.adjustWidthTo + "px"
	    if (op.maxScrollLeft < cm.doc.scrollLeft)
	      { setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true) }
	    cm.display.maxLineChanged = false
	  }

	  var takeFocus = op.focus && op.focus == activeElt() && (!document.hasFocus || document.hasFocus())
	  if (op.preparedSelection)
	    { cm.display.input.showSelection(op.preparedSelection, takeFocus) }
	  if (op.updatedDisplay || op.startHeight != cm.doc.height)
	    { updateScrollbars(cm, op.barMeasure) }
	  if (op.updatedDisplay)
	    { setDocumentHeight(cm, op.barMeasure) }

	  if (op.selectionChanged) { restartBlink(cm) }

	  if (cm.state.focused && op.updateInput)
	    { cm.display.input.reset(op.typing) }
	  if (takeFocus) { ensureFocus(op.cm) }
	}

	function endOperation_finish(op) {
	  var cm = op.cm, display = cm.display, doc = cm.doc

	  if (op.updatedDisplay) { postUpdateDisplay(cm, op.update) }

	  // Abort mouse wheel delta measurement, when scrolling explicitly
	  if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos))
	    { display.wheelStartX = display.wheelStartY = null }

	  // Propagate the scroll position to the actual DOM scroller
	  if (op.scrollTop != null && (display.scroller.scrollTop != op.scrollTop || op.forceScroll)) {
	    doc.scrollTop = Math.max(0, Math.min(display.scroller.scrollHeight - display.scroller.clientHeight, op.scrollTop))
	    display.scrollbars.setScrollTop(doc.scrollTop)
	    display.scroller.scrollTop = doc.scrollTop
	  }
	  if (op.scrollLeft != null && (display.scroller.scrollLeft != op.scrollLeft || op.forceScroll)) {
	    doc.scrollLeft = Math.max(0, Math.min(display.scroller.scrollWidth - display.scroller.clientWidth, op.scrollLeft))
	    display.scrollbars.setScrollLeft(doc.scrollLeft)
	    display.scroller.scrollLeft = doc.scrollLeft
	    alignHorizontally(cm)
	  }
	  // If we need to scroll a specific position into view, do so.
	  if (op.scrollToPos) {
	    var coords = scrollPosIntoView(cm, clipPos(doc, op.scrollToPos.from),
	                                   clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin)
	    if (op.scrollToPos.isCursor && cm.state.focused) { maybeScrollWindow(cm, coords) }
	  }

	  // Fire events for markers that are hidden/unidden by editing or
	  // undoing
	  var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers
	  if (hidden) { for (var i = 0; i < hidden.length; ++i)
	    { if (!hidden[i].lines.length) { signal(hidden[i], "hide") } } }
	  if (unhidden) { for (var i$1 = 0; i$1 < unhidden.length; ++i$1)
	    { if (unhidden[i$1].lines.length) { signal(unhidden[i$1], "unhide") } } }

	  if (display.wrapper.offsetHeight)
	    { doc.scrollTop = cm.display.scroller.scrollTop }

	  // Fire change events, and delayed event handlers
	  if (op.changeObjs)
	    { signal(cm, "changes", cm, op.changeObjs) }
	  if (op.update)
	    { op.update.finish() }
	}

	// Run the given function in an operation
	function runInOp(cm, f) {
	  if (cm.curOp) { return f() }
	  startOperation(cm)
	  try { return f() }
	  finally { endOperation(cm) }
	}
	// Wraps a function in an operation. Returns the wrapped function.
	function operation(cm, f) {
	  return function() {
	    if (cm.curOp) { return f.apply(cm, arguments) }
	    startOperation(cm)
	    try { return f.apply(cm, arguments) }
	    finally { endOperation(cm) }
	  }
	}
	// Used to add methods to editor and doc instances, wrapping them in
	// operations.
	function methodOp(f) {
	  return function() {
	    if (this.curOp) { return f.apply(this, arguments) }
	    startOperation(this)
	    try { return f.apply(this, arguments) }
	    finally { endOperation(this) }
	  }
	}
	function docMethodOp(f) {
	  return function() {
	    var cm = this.cm
	    if (!cm || cm.curOp) { return f.apply(this, arguments) }
	    startOperation(cm)
	    try { return f.apply(this, arguments) }
	    finally { endOperation(cm) }
	  }
	}

	// Updates the display.view data structure for a given change to the
	// document. From and to are in pre-change coordinates. Lendiff is
	// the amount of lines added or subtracted by the change. This is
	// used for changes that span multiple lines, or change the way
	// lines are divided into visual lines. regLineChange (below)
	// registers single-line changes.
	function regChange(cm, from, to, lendiff) {
	  if (from == null) { from = cm.doc.first }
	  if (to == null) { to = cm.doc.first + cm.doc.size }
	  if (!lendiff) { lendiff = 0 }

	  var display = cm.display
	  if (lendiff && to < display.viewTo &&
	      (display.updateLineNumbers == null || display.updateLineNumbers > from))
	    { display.updateLineNumbers = from }

	  cm.curOp.viewChanged = true

	  if (from >= display.viewTo) { // Change after
	    if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo)
	      { resetView(cm) }
	  } else if (to <= display.viewFrom) { // Change before
	    if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
	      resetView(cm)
	    } else {
	      display.viewFrom += lendiff
	      display.viewTo += lendiff
	    }
	  } else if (from <= display.viewFrom && to >= display.viewTo) { // Full overlap
	    resetView(cm)
	  } else if (from <= display.viewFrom) { // Top overlap
	    var cut = viewCuttingPoint(cm, to, to + lendiff, 1)
	    if (cut) {
	      display.view = display.view.slice(cut.index)
	      display.viewFrom = cut.lineN
	      display.viewTo += lendiff
	    } else {
	      resetView(cm)
	    }
	  } else if (to >= display.viewTo) { // Bottom overlap
	    var cut$1 = viewCuttingPoint(cm, from, from, -1)
	    if (cut$1) {
	      display.view = display.view.slice(0, cut$1.index)
	      display.viewTo = cut$1.lineN
	    } else {
	      resetView(cm)
	    }
	  } else { // Gap in the middle
	    var cutTop = viewCuttingPoint(cm, from, from, -1)
	    var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1)
	    if (cutTop && cutBot) {
	      display.view = display.view.slice(0, cutTop.index)
	        .concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN))
	        .concat(display.view.slice(cutBot.index))
	      display.viewTo += lendiff
	    } else {
	      resetView(cm)
	    }
	  }

	  var ext = display.externalMeasured
	  if (ext) {
	    if (to < ext.lineN)
	      { ext.lineN += lendiff }
	    else if (from < ext.lineN + ext.size)
	      { display.externalMeasured = null }
	  }
	}

	// Register a change to a single line. Type must be one of "text",
	// "gutter", "class", "widget"
	function regLineChange(cm, line, type) {
	  cm.curOp.viewChanged = true
	  var display = cm.display, ext = cm.display.externalMeasured
	  if (ext && line >= ext.lineN && line < ext.lineN + ext.size)
	    { display.externalMeasured = null }

	  if (line < display.viewFrom || line >= display.viewTo) { return }
	  var lineView = display.view[findViewIndex(cm, line)]
	  if (lineView.node == null) { return }
	  var arr = lineView.changes || (lineView.changes = [])
	  if (indexOf(arr, type) == -1) { arr.push(type) }
	}

	// Clear the view.
	function resetView(cm) {
	  cm.display.viewFrom = cm.display.viewTo = cm.doc.first
	  cm.display.view = []
	  cm.display.viewOffset = 0
	}

	function viewCuttingPoint(cm, oldN, newN, dir) {
	  var index = findViewIndex(cm, oldN), diff, view = cm.display.view
	  if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size)
	    { return {index: index, lineN: newN} }
	  var n = cm.display.viewFrom
	  for (var i = 0; i < index; i++)
	    { n += view[i].size }
	  if (n != oldN) {
	    if (dir > 0) {
	      if (index == view.length - 1) { return null }
	      diff = (n + view[index].size) - oldN
	      index++
	    } else {
	      diff = n - oldN
	    }
	    oldN += diff; newN += diff
	  }
	  while (visualLineNo(cm.doc, newN) != newN) {
	    if (index == (dir < 0 ? 0 : view.length - 1)) { return null }
	    newN += dir * view[index - (dir < 0 ? 1 : 0)].size
	    index += dir
	  }
	  return {index: index, lineN: newN}
	}

	// Force the view to cover a given range, adding empty view element
	// or clipping off existing ones as needed.
	function adjustView(cm, from, to) {
	  var display = cm.display, view = display.view
	  if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
	    display.view = buildViewArray(cm, from, to)
	    display.viewFrom = from
	  } else {
	    if (display.viewFrom > from)
	      { display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view) }
	    else if (display.viewFrom < from)
	      { display.view = display.view.slice(findViewIndex(cm, from)) }
	    display.viewFrom = from
	    if (display.viewTo < to)
	      { display.view = display.view.concat(buildViewArray(cm, display.viewTo, to)) }
	    else if (display.viewTo > to)
	      { display.view = display.view.slice(0, findViewIndex(cm, to)) }
	  }
	  display.viewTo = to
	}

	// Count the number of lines in the view whose DOM representation is
	// out of date (or nonexistent).
	function countDirtyView(cm) {
	  var view = cm.display.view, dirty = 0
	  for (var i = 0; i < view.length; i++) {
	    var lineView = view[i]
	    if (!lineView.hidden && (!lineView.node || lineView.changes)) { ++dirty }
	  }
	  return dirty
	}

	// HIGHLIGHT WORKER

	function startWorker(cm, time) {
	  if (cm.doc.mode.startState && cm.doc.frontier < cm.display.viewTo)
	    { cm.state.highlight.set(time, bind(highlightWorker, cm)) }
	}

	function highlightWorker(cm) {
	  var doc = cm.doc
	  if (doc.frontier < doc.first) { doc.frontier = doc.first }
	  if (doc.frontier >= cm.display.viewTo) { return }
	  var end = +new Date + cm.options.workTime
	  var state = copyState(doc.mode, getStateBefore(cm, doc.frontier))
	  var changedLines = []

	  doc.iter(doc.frontier, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function (line) {
	    if (doc.frontier >= cm.display.viewFrom) { // Visible
	      var oldStyles = line.styles, tooLong = line.text.length > cm.options.maxHighlightLength
	      var highlighted = highlightLine(cm, line, tooLong ? copyState(doc.mode, state) : state, true)
	      line.styles = highlighted.styles
	      var oldCls = line.styleClasses, newCls = highlighted.classes
	      if (newCls) { line.styleClasses = newCls }
	      else if (oldCls) { line.styleClasses = null }
	      var ischange = !oldStyles || oldStyles.length != line.styles.length ||
	        oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass)
	      for (var i = 0; !ischange && i < oldStyles.length; ++i) { ischange = oldStyles[i] != line.styles[i] }
	      if (ischange) { changedLines.push(doc.frontier) }
	      line.stateAfter = tooLong ? state : copyState(doc.mode, state)
	    } else {
	      if (line.text.length <= cm.options.maxHighlightLength)
	        { processLine(cm, line.text, state) }
	      line.stateAfter = doc.frontier % 5 == 0 ? copyState(doc.mode, state) : null
	    }
	    ++doc.frontier
	    if (+new Date > end) {
	      startWorker(cm, cm.options.workDelay)
	      return true
	    }
	  })
	  if (changedLines.length) { runInOp(cm, function () {
	    for (var i = 0; i < changedLines.length; i++)
	      { regLineChange(cm, changedLines[i], "text") }
	  }) }
	}

	// DISPLAY DRAWING

	var DisplayUpdate = function(cm, viewport, force) {
	  var display = cm.display

	  this.viewport = viewport
	  // Store some values that we'll need later (but don't want to force a relayout for)
	  this.visible = visibleLines(display, cm.doc, viewport)
	  this.editorIsHidden = !display.wrapper.offsetWidth
	  this.wrapperHeight = display.wrapper.clientHeight
	  this.wrapperWidth = display.wrapper.clientWidth
	  this.oldDisplayWidth = displayWidth(cm)
	  this.force = force
	  this.dims = getDimensions(cm)
	  this.events = []
	};

	DisplayUpdate.prototype.signal = function (emitter, type) {
	  if (hasHandler(emitter, type))
	    { this.events.push(arguments) }
	};
	DisplayUpdate.prototype.finish = function () {
	    var this$1 = this;

	  for (var i = 0; i < this.events.length; i++)
	    { signal.apply(null, this$1.events[i]) }
	};

	function maybeClipScrollbars(cm) {
	  var display = cm.display
	  if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
	    display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth
	    display.heightForcer.style.height = scrollGap(cm) + "px"
	    display.sizer.style.marginBottom = -display.nativeBarWidth + "px"
	    display.sizer.style.borderRightWidth = scrollGap(cm) + "px"
	    display.scrollbarsClipped = true
	  }
	}

	// Does the actual updating of the line display. Bails out
	// (returning false) when there is nothing to be done and forced is
	// false.
	function updateDisplayIfNeeded(cm, update) {
	  var display = cm.display, doc = cm.doc

	  if (update.editorIsHidden) {
	    resetView(cm)
	    return false
	  }

	  // Bail out if the visible area is already rendered and nothing changed.
	  if (!update.force &&
	      update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo &&
	      (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) &&
	      display.renderedView == display.view && countDirtyView(cm) == 0)
	    { return false }

	  if (maybeUpdateLineNumberWidth(cm)) {
	    resetView(cm)
	    update.dims = getDimensions(cm)
	  }

	  // Compute a suitable new viewport (from & to)
	  var end = doc.first + doc.size
	  var from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first)
	  var to = Math.min(end, update.visible.to + cm.options.viewportMargin)
	  if (display.viewFrom < from && from - display.viewFrom < 20) { from = Math.max(doc.first, display.viewFrom) }
	  if (display.viewTo > to && display.viewTo - to < 20) { to = Math.min(end, display.viewTo) }
	  if (sawCollapsedSpans) {
	    from = visualLineNo(cm.doc, from)
	    to = visualLineEndNo(cm.doc, to)
	  }

	  var different = from != display.viewFrom || to != display.viewTo ||
	    display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth
	  adjustView(cm, from, to)

	  display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom))
	  // Position the mover div to align with the current scroll position
	  cm.display.mover.style.top = display.viewOffset + "px"

	  var toUpdate = countDirtyView(cm)
	  if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view &&
	      (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo))
	    { return false }

	  // For big changes, we hide the enclosing element during the
	  // update, since that speeds up the operations on most browsers.
	  var focused = activeElt()
	  if (toUpdate > 4) { display.lineDiv.style.display = "none" }
	  patchDisplay(cm, display.updateLineNumbers, update.dims)
	  if (toUpdate > 4) { display.lineDiv.style.display = "" }
	  display.renderedView = display.view
	  // There might have been a widget with a focused element that got
	  // hidden or updated, if so re-focus it.
	  if (focused && activeElt() != focused && focused.offsetHeight) { focused.focus() }

	  // Prevent selection and cursors from interfering with the scroll
	  // width and height.
	  removeChildren(display.cursorDiv)
	  removeChildren(display.selectionDiv)
	  display.gutters.style.height = display.sizer.style.minHeight = 0

	  if (different) {
	    display.lastWrapHeight = update.wrapperHeight
	    display.lastWrapWidth = update.wrapperWidth
	    startWorker(cm, 400)
	  }

	  display.updateLineNumbers = null

	  return true
	}

	function postUpdateDisplay(cm, update) {
	  var viewport = update.viewport

	  for (var first = true;; first = false) {
	    if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == displayWidth(cm)) {
	      // Clip forced viewport to actual scrollable area.
	      if (viewport && viewport.top != null)
	        { viewport = {top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top)} }
	      // Updated line heights might result in the drawn area not
	      // actually covering the viewport. Keep looping until it does.
	      update.visible = visibleLines(cm.display, cm.doc, viewport)
	      if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo)
	        { break }
	    }
	    if (!updateDisplayIfNeeded(cm, update)) { break }
	    updateHeightsInViewport(cm)
	    var barMeasure = measureForScrollbars(cm)
	    updateSelection(cm)
	    updateScrollbars(cm, barMeasure)
	    setDocumentHeight(cm, barMeasure)
	  }

	  update.signal(cm, "update", cm)
	  if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
	    update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo)
	    cm.display.reportedViewFrom = cm.display.viewFrom; cm.display.reportedViewTo = cm.display.viewTo
	  }
	}

	function updateDisplaySimple(cm, viewport) {
	  var update = new DisplayUpdate(cm, viewport)
	  if (updateDisplayIfNeeded(cm, update)) {
	    updateHeightsInViewport(cm)
	    postUpdateDisplay(cm, update)
	    var barMeasure = measureForScrollbars(cm)
	    updateSelection(cm)
	    updateScrollbars(cm, barMeasure)
	    setDocumentHeight(cm, barMeasure)
	    update.finish()
	  }
	}

	// Sync the actual display DOM structure with display.view, removing
	// nodes for lines that are no longer in view, and creating the ones
	// that are not there yet, and updating the ones that are out of
	// date.
	function patchDisplay(cm, updateNumbersFrom, dims) {
	  var display = cm.display, lineNumbers = cm.options.lineNumbers
	  var container = display.lineDiv, cur = container.firstChild

	  function rm(node) {
	    var next = node.nextSibling
	    // Works around a throw-scroll bug in OS X Webkit
	    if (webkit && mac && cm.display.currentWheelTarget == node)
	      { node.style.display = "none" }
	    else
	      { node.parentNode.removeChild(node) }
	    return next
	  }

	  var view = display.view, lineN = display.viewFrom
	  // Loop over the elements in the view, syncing cur (the DOM nodes
	  // in display.lineDiv) with the view as we go.
	  for (var i = 0; i < view.length; i++) {
	    var lineView = view[i]
	    if (lineView.hidden) {
	    } else if (!lineView.node || lineView.node.parentNode != container) { // Not drawn yet
	      var node = buildLineElement(cm, lineView, lineN, dims)
	      container.insertBefore(node, cur)
	    } else { // Already drawn
	      while (cur != lineView.node) { cur = rm(cur) }
	      var updateNumber = lineNumbers && updateNumbersFrom != null &&
	        updateNumbersFrom <= lineN && lineView.lineNumber
	      if (lineView.changes) {
	        if (indexOf(lineView.changes, "gutter") > -1) { updateNumber = false }
	        updateLineForChanges(cm, lineView, lineN, dims)
	      }
	      if (updateNumber) {
	        removeChildren(lineView.lineNumber)
	        lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)))
	      }
	      cur = lineView.node.nextSibling
	    }
	    lineN += lineView.size
	  }
	  while (cur) { cur = rm(cur) }
	}

	function updateGutterSpace(cm) {
	  var width = cm.display.gutters.offsetWidth
	  cm.display.sizer.style.marginLeft = width + "px"
	}

	function setDocumentHeight(cm, measure) {
	  cm.display.sizer.style.minHeight = measure.docHeight + "px"
	  cm.display.heightForcer.style.top = measure.docHeight + "px"
	  cm.display.gutters.style.height = (measure.docHeight + cm.display.barHeight + scrollGap(cm)) + "px"
	}

	// Rebuild the gutter elements, ensure the margin to the left of the
	// code matches their width.
	function updateGutters(cm) {
	  var gutters = cm.display.gutters, specs = cm.options.gutters
	  removeChildren(gutters)
	  var i = 0
	  for (; i < specs.length; ++i) {
	    var gutterClass = specs[i]
	    var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + gutterClass))
	    if (gutterClass == "CodeMirror-linenumbers") {
	      cm.display.lineGutter = gElt
	      gElt.style.width = (cm.display.lineNumWidth || 1) + "px"
	    }
	  }
	  gutters.style.display = i ? "" : "none"
	  updateGutterSpace(cm)
	}

	// Make sure the gutters options contains the element
	// "CodeMirror-linenumbers" when the lineNumbers option is true.
	function setGuttersForLineNumbers(options) {
	  var found = indexOf(options.gutters, "CodeMirror-linenumbers")
	  if (found == -1 && options.lineNumbers) {
	    options.gutters = options.gutters.concat(["CodeMirror-linenumbers"])
	  } else if (found > -1 && !options.lineNumbers) {
	    options.gutters = options.gutters.slice(0)
	    options.gutters.splice(found, 1)
	  }
	}

	// Selection objects are immutable. A new one is created every time
	// the selection changes. A selection is one or more non-overlapping
	// (and non-touching) ranges, sorted, and an integer that indicates
	// which one is the primary selection (the one that's scrolled into
	// view, that getCursor returns, etc).
	function Selection(ranges, primIndex) {
	  this.ranges = ranges
	  this.primIndex = primIndex
	}

	Selection.prototype = {
	  primary: function() { return this.ranges[this.primIndex] },
	  equals: function(other) {
	    var this$1 = this;

	    if (other == this) { return true }
	    if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) { return false }
	    for (var i = 0; i < this.ranges.length; i++) {
	      var here = this$1.ranges[i], there = other.ranges[i]
	      if (cmp(here.anchor, there.anchor) != 0 || cmp(here.head, there.head) != 0) { return false }
	    }
	    return true
	  },
	  deepCopy: function() {
	    var this$1 = this;

	    var out = []
	    for (var i = 0; i < this.ranges.length; i++)
	      { out[i] = new Range(copyPos(this$1.ranges[i].anchor), copyPos(this$1.ranges[i].head)) }
	    return new Selection(out, this.primIndex)
	  },
	  somethingSelected: function() {
	    var this$1 = this;

	    for (var i = 0; i < this.ranges.length; i++)
	      { if (!this$1.ranges[i].empty()) { return true } }
	    return false
	  },
	  contains: function(pos, end) {
	    var this$1 = this;

	    if (!end) { end = pos }
	    for (var i = 0; i < this.ranges.length; i++) {
	      var range = this$1.ranges[i]
	      if (cmp(end, range.from()) >= 0 && cmp(pos, range.to()) <= 0)
	        { return i }
	    }
	    return -1
	  }
	}

	function Range(anchor, head) {
	  this.anchor = anchor; this.head = head
	}

	Range.prototype = {
	  from: function() { return minPos(this.anchor, this.head) },
	  to: function() { return maxPos(this.anchor, this.head) },
	  empty: function() {
	    return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
	  }
	}

	// Take an unsorted, potentially overlapping set of ranges, and
	// build a selection out of it. 'Consumes' ranges array (modifying
	// it).
	function normalizeSelection(ranges, primIndex) {
	  var prim = ranges[primIndex]
	  ranges.sort(function (a, b) { return cmp(a.from(), b.from()); })
	  primIndex = indexOf(ranges, prim)
	  for (var i = 1; i < ranges.length; i++) {
	    var cur = ranges[i], prev = ranges[i - 1]
	    if (cmp(prev.to(), cur.from()) >= 0) {
	      var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to())
	      var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head
	      if (i <= primIndex) { --primIndex }
	      ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to))
	    }
	  }
	  return new Selection(ranges, primIndex)
	}

	function simpleSelection(anchor, head) {
	  return new Selection([new Range(anchor, head || anchor)], 0)
	}

	// Compute the position of the end of a change (its 'to' property
	// refers to the pre-change end).
	function changeEnd(change) {
	  if (!change.text) { return change.to }
	  return Pos(change.from.line + change.text.length - 1,
	             lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0))
	}

	// Adjust a position to refer to the post-change position of the
	// same text, or the end of the change if the change covers it.
	function adjustForChange(pos, change) {
	  if (cmp(pos, change.from) < 0) { return pos }
	  if (cmp(pos, change.to) <= 0) { return changeEnd(change) }

	  var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch
	  if (pos.line == change.to.line) { ch += changeEnd(change).ch - change.to.ch }
	  return Pos(line, ch)
	}

	function computeSelAfterChange(doc, change) {
	  var out = []
	  for (var i = 0; i < doc.sel.ranges.length; i++) {
	    var range = doc.sel.ranges[i]
	    out.push(new Range(adjustForChange(range.anchor, change),
	                       adjustForChange(range.head, change)))
	  }
	  return normalizeSelection(out, doc.sel.primIndex)
	}

	function offsetPos(pos, old, nw) {
	  if (pos.line == old.line)
	    { return Pos(nw.line, pos.ch - old.ch + nw.ch) }
	  else
	    { return Pos(nw.line + (pos.line - old.line), pos.ch) }
	}

	// Used by replaceSelections to allow moving the selection to the
	// start or around the replaced test. Hint may be "start" or "around".
	function computeReplacedSel(doc, changes, hint) {
	  var out = []
	  var oldPrev = Pos(doc.first, 0), newPrev = oldPrev
	  for (var i = 0; i < changes.length; i++) {
	    var change = changes[i]
	    var from = offsetPos(change.from, oldPrev, newPrev)
	    var to = offsetPos(changeEnd(change), oldPrev, newPrev)
	    oldPrev = change.to
	    newPrev = to
	    if (hint == "around") {
	      var range = doc.sel.ranges[i], inv = cmp(range.head, range.anchor) < 0
	      out[i] = new Range(inv ? to : from, inv ? from : to)
	    } else {
	      out[i] = new Range(from, from)
	    }
	  }
	  return new Selection(out, doc.sel.primIndex)
	}

	// Used to get the editor into a consistent state again when options change.

	function loadMode(cm) {
	  cm.doc.mode = getMode(cm.options, cm.doc.modeOption)
	  resetModeState(cm)
	}

	function resetModeState(cm) {
	  cm.doc.iter(function (line) {
	    if (line.stateAfter) { line.stateAfter = null }
	    if (line.styles) { line.styles = null }
	  })
	  cm.doc.frontier = cm.doc.first
	  startWorker(cm, 100)
	  cm.state.modeGen++
	  if (cm.curOp) { regChange(cm) }
	}

	// DOCUMENT DATA STRUCTURE

	// By default, updates that start and end at the beginning of a line
	// are treated specially, in order to make the association of line
	// widgets and marker elements with the text behave more intuitive.
	function isWholeLineUpdate(doc, change) {
	  return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" &&
	    (!doc.cm || doc.cm.options.wholeLineUpdateBefore)
	}

	// Perform a change on the document data structure.
	function updateDoc(doc, change, markedSpans, estimateHeight) {
	  function spansFor(n) {return markedSpans ? markedSpans[n] : null}
	  function update(line, text, spans) {
	    updateLine(line, text, spans, estimateHeight)
	    signalLater(line, "change", line, change)
	  }
	  function linesFor(start, end) {
	    var result = []
	    for (var i = start; i < end; ++i)
	      { result.push(new Line(text[i], spansFor(i), estimateHeight)) }
	    return result
	  }

	  var from = change.from, to = change.to, text = change.text
	  var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line)
	  var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line

	  // Adjust the line structure
	  if (change.full) {
	    doc.insert(0, linesFor(0, text.length))
	    doc.remove(text.length, doc.size - text.length)
	  } else if (isWholeLineUpdate(doc, change)) {
	    // This is a whole-line replace. Treated specially to make
	    // sure line objects move the way they are supposed to.
	    var added = linesFor(0, text.length - 1)
	    update(lastLine, lastLine.text, lastSpans)
	    if (nlines) { doc.remove(from.line, nlines) }
	    if (added.length) { doc.insert(from.line, added) }
	  } else if (firstLine == lastLine) {
	    if (text.length == 1) {
	      update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans)
	    } else {
	      var added$1 = linesFor(1, text.length - 1)
	      added$1.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight))
	      update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0))
	      doc.insert(from.line + 1, added$1)
	    }
	  } else if (text.length == 1) {
	    update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0))
	    doc.remove(from.line + 1, nlines)
	  } else {
	    update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0))
	    update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans)
	    var added$2 = linesFor(1, text.length - 1)
	    if (nlines > 1) { doc.remove(from.line + 1, nlines - 1) }
	    doc.insert(from.line + 1, added$2)
	  }

	  signalLater(doc, "change", doc, change)
	}

	// Call f for all linked documents.
	function linkedDocs(doc, f, sharedHistOnly) {
	  function propagate(doc, skip, sharedHist) {
	    if (doc.linked) { for (var i = 0; i < doc.linked.length; ++i) {
	      var rel = doc.linked[i]
	      if (rel.doc == skip) { continue }
	      var shared = sharedHist && rel.sharedHist
	      if (sharedHistOnly && !shared) { continue }
	      f(rel.doc, shared)
	      propagate(rel.doc, doc, shared)
	    } }
	  }
	  propagate(doc, null, true)
	}

	// Attach a document to an editor.
	function attachDoc(cm, doc) {
	  if (doc.cm) { throw new Error("This document is already in use.") }
	  cm.doc = doc
	  doc.cm = cm
	  estimateLineHeights(cm)
	  loadMode(cm)
	  if (!cm.options.lineWrapping) { findMaxLine(cm) }
	  cm.options.mode = doc.modeOption
	  regChange(cm)
	}

	function History(startGen) {
	  // Arrays of change events and selections. Doing something adds an
	  // event to done and clears undo. Undoing moves events from done
	  // to undone, redoing moves them in the other direction.
	  this.done = []; this.undone = []
	  this.undoDepth = Infinity
	  // Used to track when changes can be merged into a single undo
	  // event
	  this.lastModTime = this.lastSelTime = 0
	  this.lastOp = this.lastSelOp = null
	  this.lastOrigin = this.lastSelOrigin = null
	  // Used by the isClean() method
	  this.generation = this.maxGeneration = startGen || 1
	}

	// Create a history change event from an updateDoc-style change
	// object.
	function historyChangeFromChange(doc, change) {
	  var histChange = {from: copyPos(change.from), to: changeEnd(change), text: getBetween(doc, change.from, change.to)}
	  attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1)
	  linkedDocs(doc, function (doc) { return attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1); }, true)
	  return histChange
	}

	// Pop all selection events off the end of a history array. Stop at
	// a change event.
	function clearSelectionEvents(array) {
	  while (array.length) {
	    var last = lst(array)
	    if (last.ranges) { array.pop() }
	    else { break }
	  }
	}

	// Find the top change event in the history. Pop off selection
	// events that are in the way.
	function lastChangeEvent(hist, force) {
	  if (force) {
	    clearSelectionEvents(hist.done)
	    return lst(hist.done)
	  } else if (hist.done.length && !lst(hist.done).ranges) {
	    return lst(hist.done)
	  } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
	    hist.done.pop()
	    return lst(hist.done)
	  }
	}

	// Register a change in the history. Merges changes that are within
	// a single operation, or are close together with an origin that
	// allows merging (starting with "+") into a single event.
	function addChangeToHistory(doc, change, selAfter, opId) {
	  var hist = doc.history
	  hist.undone.length = 0
	  var time = +new Date, cur
	  var last

	  if ((hist.lastOp == opId ||
	       hist.lastOrigin == change.origin && change.origin &&
	       ((change.origin.charAt(0) == "+" && doc.cm && hist.lastModTime > time - doc.cm.options.historyEventDelay) ||
	        change.origin.charAt(0) == "*")) &&
	      (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
	    // Merge this change into the last event
	    last = lst(cur.changes)
	    if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
	      // Optimized case for simple insertion -- don't want to add
	      // new changesets for every character typed
	      last.to = changeEnd(change)
	    } else {
	      // Add new sub-event
	      cur.changes.push(historyChangeFromChange(doc, change))
	    }
	  } else {
	    // Can not be merged, start a new event.
	    var before = lst(hist.done)
	    if (!before || !before.ranges)
	      { pushSelectionToHistory(doc.sel, hist.done) }
	    cur = {changes: [historyChangeFromChange(doc, change)],
	           generation: hist.generation}
	    hist.done.push(cur)
	    while (hist.done.length > hist.undoDepth) {
	      hist.done.shift()
	      if (!hist.done[0].ranges) { hist.done.shift() }
	    }
	  }
	  hist.done.push(selAfter)
	  hist.generation = ++hist.maxGeneration
	  hist.lastModTime = hist.lastSelTime = time
	  hist.lastOp = hist.lastSelOp = opId
	  hist.lastOrigin = hist.lastSelOrigin = change.origin

	  if (!last) { signal(doc, "historyAdded") }
	}

	function selectionEventCanBeMerged(doc, origin, prev, sel) {
	  var ch = origin.charAt(0)
	  return ch == "*" ||
	    ch == "+" &&
	    prev.ranges.length == sel.ranges.length &&
	    prev.somethingSelected() == sel.somethingSelected() &&
	    new Date - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500)
	}

	// Called whenever the selection changes, sets the new selection as
	// the pending selection in the history, and pushes the old pending
	// selection into the 'done' array when it was significantly
	// different (in number of selected ranges, emptiness, or time).
	function addSelectionToHistory(doc, sel, opId, options) {
	  var hist = doc.history, origin = options && options.origin

	  // A new event is started when the previous origin does not match
	  // the current, or the origins don't allow matching. Origins
	  // starting with * are always merged, those starting with + are
	  // merged when similar and close together in time.
	  if (opId == hist.lastSelOp ||
	      (origin && hist.lastSelOrigin == origin &&
	       (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin ||
	        selectionEventCanBeMerged(doc, origin, lst(hist.done), sel))))
	    { hist.done[hist.done.length - 1] = sel }
	  else
	    { pushSelectionToHistory(sel, hist.done) }

	  hist.lastSelTime = +new Date
	  hist.lastSelOrigin = origin
	  hist.lastSelOp = opId
	  if (options && options.clearRedo !== false)
	    { clearSelectionEvents(hist.undone) }
	}

	function pushSelectionToHistory(sel, dest) {
	  var top = lst(dest)
	  if (!(top && top.ranges && top.equals(sel)))
	    { dest.push(sel) }
	}

	// Used to store marked span information in the history.
	function attachLocalSpans(doc, change, from, to) {
	  var existing = change["spans_" + doc.id], n = 0
	  doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function (line) {
	    if (line.markedSpans)
	      { (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans }
	    ++n
	  })
	}

	// When un/re-doing restores text containing marked spans, those
	// that have been explicitly cleared should not be restored.
	function removeClearedSpans(spans) {
	  if (!spans) { return null }
	  var out
	  for (var i = 0; i < spans.length; ++i) {
	    if (spans[i].marker.explicitlyCleared) { if (!out) { out = spans.slice(0, i) } }
	    else if (out) { out.push(spans[i]) }
	  }
	  return !out ? spans : out.length ? out : null
	}

	// Retrieve and filter the old marked spans stored in a change event.
	function getOldSpans(doc, change) {
	  var found = change["spans_" + doc.id]
	  if (!found) { return null }
	  var nw = []
	  for (var i = 0; i < change.text.length; ++i)
	    { nw.push(removeClearedSpans(found[i])) }
	  return nw
	}

	// Used for un/re-doing changes from the history. Combines the
	// result of computing the existing spans with the set of spans that
	// existed in the history (so that deleting around a span and then
	// undoing brings back the span).
	function mergeOldSpans(doc, change) {
	  var old = getOldSpans(doc, change)
	  var stretched = stretchSpansOverChange(doc, change)
	  if (!old) { return stretched }
	  if (!stretched) { return old }

	  for (var i = 0; i < old.length; ++i) {
	    var oldCur = old[i], stretchCur = stretched[i]
	    if (oldCur && stretchCur) {
	      spans: for (var j = 0; j < stretchCur.length; ++j) {
	        var span = stretchCur[j]
	        for (var k = 0; k < oldCur.length; ++k)
	          { if (oldCur[k].marker == span.marker) { continue spans } }
	        oldCur.push(span)
	      }
	    } else if (stretchCur) {
	      old[i] = stretchCur
	    }
	  }
	  return old
	}

	// Used both to provide a JSON-safe object in .getHistory, and, when
	// detaching a document, to split the history in two
	function copyHistoryArray(events, newGroup, instantiateSel) {
	  var copy = []
	  for (var i = 0; i < events.length; ++i) {
	    var event = events[i]
	    if (event.ranges) {
	      copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event)
	      continue
	    }
	    var changes = event.changes, newChanges = []
	    copy.push({changes: newChanges})
	    for (var j = 0; j < changes.length; ++j) {
	      var change = changes[j], m = (void 0)
	      newChanges.push({from: change.from, to: change.to, text: change.text})
	      if (newGroup) { for (var prop in change) { if (m = prop.match(/^spans_(\d+)$/)) {
	        if (indexOf(newGroup, Number(m[1])) > -1) {
	          lst(newChanges)[prop] = change[prop]
	          delete change[prop]
	        }
	      } } }
	    }
	  }
	  return copy
	}

	// The 'scroll' parameter given to many of these indicated whether
	// the new cursor position should be scrolled into view after
	// modifying the selection.

	// If shift is held or the extend flag is set, extends a range to
	// include a given position (and optionally a second position).
	// Otherwise, simply returns the range between the given positions.
	// Used for cursor motion and such.
	function extendRange(doc, range, head, other) {
	  if (doc.cm && doc.cm.display.shift || doc.extend) {
	    var anchor = range.anchor
	    if (other) {
	      var posBefore = cmp(head, anchor) < 0
	      if (posBefore != (cmp(other, anchor) < 0)) {
	        anchor = head
	        head = other
	      } else if (posBefore != (cmp(head, other) < 0)) {
	        head = other
	      }
	    }
	    return new Range(anchor, head)
	  } else {
	    return new Range(other || head, head)
	  }
	}

	// Extend the primary selection range, discard the rest.
	function extendSelection(doc, head, other, options) {
	  setSelection(doc, new Selection([extendRange(doc, doc.sel.primary(), head, other)], 0), options)
	}

	// Extend all selections (pos is an array of selections with length
	// equal the number of selections)
	function extendSelections(doc, heads, options) {
	  var out = []
	  for (var i = 0; i < doc.sel.ranges.length; i++)
	    { out[i] = extendRange(doc, doc.sel.ranges[i], heads[i], null) }
	  var newSel = normalizeSelection(out, doc.sel.primIndex)
	  setSelection(doc, newSel, options)
	}

	// Updates a single range in the selection.
	function replaceOneSelection(doc, i, range, options) {
	  var ranges = doc.sel.ranges.slice(0)
	  ranges[i] = range
	  setSelection(doc, normalizeSelection(ranges, doc.sel.primIndex), options)
	}

	// Reset the selection to a single range.
	function setSimpleSelection(doc, anchor, head, options) {
	  setSelection(doc, simpleSelection(anchor, head), options)
	}

	// Give beforeSelectionChange handlers a change to influence a
	// selection update.
	function filterSelectionChange(doc, sel, options) {
	  var obj = {
	    ranges: sel.ranges,
	    update: function(ranges) {
	      var this$1 = this;

	      this.ranges = []
	      for (var i = 0; i < ranges.length; i++)
	        { this$1.ranges[i] = new Range(clipPos(doc, ranges[i].anchor),
	                                   clipPos(doc, ranges[i].head)) }
	    },
	    origin: options && options.origin
	  }
	  signal(doc, "beforeSelectionChange", doc, obj)
	  if (doc.cm) { signal(doc.cm, "beforeSelectionChange", doc.cm, obj) }
	  if (obj.ranges != sel.ranges) { return normalizeSelection(obj.ranges, obj.ranges.length - 1) }
	  else { return sel }
	}

	function setSelectionReplaceHistory(doc, sel, options) {
	  var done = doc.history.done, last = lst(done)
	  if (last && last.ranges) {
	    done[done.length - 1] = sel
	    setSelectionNoUndo(doc, sel, options)
	  } else {
	    setSelection(doc, sel, options)
	  }
	}

	// Set a new selection.
	function setSelection(doc, sel, options) {
	  setSelectionNoUndo(doc, sel, options)
	  addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options)
	}

	function setSelectionNoUndo(doc, sel, options) {
	  if (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange"))
	    { sel = filterSelectionChange(doc, sel, options) }

	  var bias = options && options.bias ||
	    (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1)
	  setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true))

	  if (!(options && options.scroll === false) && doc.cm)
	    { ensureCursorVisible(doc.cm) }
	}

	function setSelectionInner(doc, sel) {
	  if (sel.equals(doc.sel)) { return }

	  doc.sel = sel

	  if (doc.cm) {
	    doc.cm.curOp.updateInput = doc.cm.curOp.selectionChanged = true
	    signalCursorActivity(doc.cm)
	  }
	  signalLater(doc, "cursorActivity", doc)
	}

	// Verify that the selection does not partially select any atomic
	// marked ranges.
	function reCheckSelection(doc) {
	  setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false), sel_dontScroll)
	}

	// Return a selection that does not partially select any atomic
	// ranges.
	function skipAtomicInSelection(doc, sel, bias, mayClear) {
	  var out
	  for (var i = 0; i < sel.ranges.length; i++) {
	    var range = sel.ranges[i]
	    var old = sel.ranges.length == doc.sel.ranges.length && doc.sel.ranges[i]
	    var newAnchor = skipAtomic(doc, range.anchor, old && old.anchor, bias, mayClear)
	    var newHead = skipAtomic(doc, range.head, old && old.head, bias, mayClear)
	    if (out || newAnchor != range.anchor || newHead != range.head) {
	      if (!out) { out = sel.ranges.slice(0, i) }
	      out[i] = new Range(newAnchor, newHead)
	    }
	  }
	  return out ? normalizeSelection(out, sel.primIndex) : sel
	}

	function skipAtomicInner(doc, pos, oldPos, dir, mayClear) {
	  var line = getLine(doc, pos.line)
	  if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
	    var sp = line.markedSpans[i], m = sp.marker
	    if ((sp.from == null || (m.inclusiveLeft ? sp.from <= pos.ch : sp.from < pos.ch)) &&
	        (sp.to == null || (m.inclusiveRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
	      if (mayClear) {
	        signal(m, "beforeCursorEnter")
	        if (m.explicitlyCleared) {
	          if (!line.markedSpans) { break }
	          else {--i; continue}
	        }
	      }
	      if (!m.atomic) { continue }

	      if (oldPos) {
	        var near = m.find(dir < 0 ? 1 : -1), diff = (void 0)
	        if (dir < 0 ? m.inclusiveRight : m.inclusiveLeft)
	          { near = movePos(doc, near, -dir, near && near.line == pos.line ? line : null) }
	        if (near && near.line == pos.line && (diff = cmp(near, oldPos)) && (dir < 0 ? diff < 0 : diff > 0))
	          { return skipAtomicInner(doc, near, pos, dir, mayClear) }
	      }

	      var far = m.find(dir < 0 ? -1 : 1)
	      if (dir < 0 ? m.inclusiveLeft : m.inclusiveRight)
	        { far = movePos(doc, far, dir, far.line == pos.line ? line : null) }
	      return far ? skipAtomicInner(doc, far, pos, dir, mayClear) : null
	    }
	  } }
	  return pos
	}

	// Ensure a given position is not inside an atomic range.
	function skipAtomic(doc, pos, oldPos, bias, mayClear) {
	  var dir = bias || 1
	  var found = skipAtomicInner(doc, pos, oldPos, dir, mayClear) ||
	      (!mayClear && skipAtomicInner(doc, pos, oldPos, dir, true)) ||
	      skipAtomicInner(doc, pos, oldPos, -dir, mayClear) ||
	      (!mayClear && skipAtomicInner(doc, pos, oldPos, -dir, true))
	  if (!found) {
	    doc.cantEdit = true
	    return Pos(doc.first, 0)
	  }
	  return found
	}

	function movePos(doc, pos, dir, line) {
	  if (dir < 0 && pos.ch == 0) {
	    if (pos.line > doc.first) { return clipPos(doc, Pos(pos.line - 1)) }
	    else { return null }
	  } else if (dir > 0 && pos.ch == (line || getLine(doc, pos.line)).text.length) {
	    if (pos.line < doc.first + doc.size - 1) { return Pos(pos.line + 1, 0) }
	    else { return null }
	  } else {
	    return new Pos(pos.line, pos.ch + dir)
	  }
	}

	function selectAll(cm) {
	  cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll)
	}

	// UPDATING

	// Allow "beforeChange" event handlers to influence a change
	function filterChange(doc, change, update) {
	  var obj = {
	    canceled: false,
	    from: change.from,
	    to: change.to,
	    text: change.text,
	    origin: change.origin,
	    cancel: function () { return obj.canceled = true; }
	  }
	  if (update) { obj.update = function (from, to, text, origin) {
	    if (from) { obj.from = clipPos(doc, from) }
	    if (to) { obj.to = clipPos(doc, to) }
	    if (text) { obj.text = text }
	    if (origin !== undefined) { obj.origin = origin }
	  } }
	  signal(doc, "beforeChange", doc, obj)
	  if (doc.cm) { signal(doc.cm, "beforeChange", doc.cm, obj) }

	  if (obj.canceled) { return null }
	  return {from: obj.from, to: obj.to, text: obj.text, origin: obj.origin}
	}

	// Apply a change to a document, and add it to the document's
	// history, and propagating it to all linked documents.
	function makeChange(doc, change, ignoreReadOnly) {
	  if (doc.cm) {
	    if (!doc.cm.curOp) { return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly) }
	    if (doc.cm.state.suppressEdits) { return }
	  }

	  if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
	    change = filterChange(doc, change, true)
	    if (!change) { return }
	  }

	  // Possibly split or suppress the update based on the presence
	  // of read-only spans in its range.
	  var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to)
	  if (split) {
	    for (var i = split.length - 1; i >= 0; --i)
	      { makeChangeInner(doc, {from: split[i].from, to: split[i].to, text: i ? [""] : change.text}) }
	  } else {
	    makeChangeInner(doc, change)
	  }
	}

	function makeChangeInner(doc, change) {
	  if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) { return }
	  var selAfter = computeSelAfterChange(doc, change)
	  addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN)

	  makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change))
	  var rebased = []

	  linkedDocs(doc, function (doc, sharedHist) {
	    if (!sharedHist && indexOf(rebased, doc.history) == -1) {
	      rebaseHist(doc.history, change)
	      rebased.push(doc.history)
	    }
	    makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change))
	  })
	}

	// Revert a change stored in a document's history.
	function makeChangeFromHistory(doc, type, allowSelectionOnly) {
	  if (doc.cm && doc.cm.state.suppressEdits && !allowSelectionOnly) { return }

	  var hist = doc.history, event, selAfter = doc.sel
	  var source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done

	  // Verify that there is a useable event (so that ctrl-z won't
	  // needlessly clear selection events)
	  var i = 0
	  for (; i < source.length; i++) {
	    event = source[i]
	    if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges)
	      { break }
	  }
	  if (i == source.length) { return }
	  hist.lastOrigin = hist.lastSelOrigin = null

	  for (;;) {
	    event = source.pop()
	    if (event.ranges) {
	      pushSelectionToHistory(event, dest)
	      if (allowSelectionOnly && !event.equals(doc.sel)) {
	        setSelection(doc, event, {clearRedo: false})
	        return
	      }
	      selAfter = event
	    }
	    else { break }
	  }

	  // Build up a reverse change object to add to the opposite history
	  // stack (redo when undoing, and vice versa).
	  var antiChanges = []
	  pushSelectionToHistory(selAfter, dest)
	  dest.push({changes: antiChanges, generation: hist.generation})
	  hist.generation = event.generation || ++hist.maxGeneration

	  var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")

	  var loop = function ( i ) {
	    var change = event.changes[i]
	    change.origin = type
	    if (filter && !filterChange(doc, change, false)) {
	      source.length = 0
	      return {}
	    }

	    antiChanges.push(historyChangeFromChange(doc, change))

	    var after = i ? computeSelAfterChange(doc, change) : lst(source)
	    makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change))
	    if (!i && doc.cm) { doc.cm.scrollIntoView({from: change.from, to: changeEnd(change)}) }
	    var rebased = []

	    // Propagate to the linked documents
	    linkedDocs(doc, function (doc, sharedHist) {
	      if (!sharedHist && indexOf(rebased, doc.history) == -1) {
	        rebaseHist(doc.history, change)
	        rebased.push(doc.history)
	      }
	      makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change))
	    })
	  };

	  for (var i$1 = event.changes.length - 1; i$1 >= 0; --i$1) {
	    var returned = loop( i$1 );

	    if ( returned ) return returned.v;
	  }
	}

	// Sub-views need their line numbers shifted when text is added
	// above or below them in the parent document.
	function shiftDoc(doc, distance) {
	  if (distance == 0) { return }
	  doc.first += distance
	  doc.sel = new Selection(map(doc.sel.ranges, function (range) { return new Range(
	    Pos(range.anchor.line + distance, range.anchor.ch),
	    Pos(range.head.line + distance, range.head.ch)
	  ); }), doc.sel.primIndex)
	  if (doc.cm) {
	    regChange(doc.cm, doc.first, doc.first - distance, distance)
	    for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++)
	      { regLineChange(doc.cm, l, "gutter") }
	  }
	}

	// More lower-level change function, handling only a single document
	// (not linked ones).
	function makeChangeSingleDoc(doc, change, selAfter, spans) {
	  if (doc.cm && !doc.cm.curOp)
	    { return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans) }

	  if (change.to.line < doc.first) {
	    shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line))
	    return
	  }
	  if (change.from.line > doc.lastLine()) { return }

	  // Clip the change to the size of this doc
	  if (change.from.line < doc.first) {
	    var shift = change.text.length - 1 - (doc.first - change.from.line)
	    shiftDoc(doc, shift)
	    change = {from: Pos(doc.first, 0), to: Pos(change.to.line + shift, change.to.ch),
	              text: [lst(change.text)], origin: change.origin}
	  }
	  var last = doc.lastLine()
	  if (change.to.line > last) {
	    change = {from: change.from, to: Pos(last, getLine(doc, last).text.length),
	              text: [change.text[0]], origin: change.origin}
	  }

	  change.removed = getBetween(doc, change.from, change.to)

	  if (!selAfter) { selAfter = computeSelAfterChange(doc, change) }
	  if (doc.cm) { makeChangeSingleDocInEditor(doc.cm, change, spans) }
	  else { updateDoc(doc, change, spans) }
	  setSelectionNoUndo(doc, selAfter, sel_dontScroll)
	}

	// Handle the interaction of a change to a document with the editor
	// that this document is part of.
	function makeChangeSingleDocInEditor(cm, change, spans) {
	  var doc = cm.doc, display = cm.display, from = change.from, to = change.to

	  var recomputeMaxLength = false, checkWidthStart = from.line
	  if (!cm.options.lineWrapping) {
	    checkWidthStart = lineNo(visualLine(getLine(doc, from.line)))
	    doc.iter(checkWidthStart, to.line + 1, function (line) {
	      if (line == display.maxLine) {
	        recomputeMaxLength = true
	        return true
	      }
	    })
	  }

	  if (doc.sel.contains(change.from, change.to) > -1)
	    { signalCursorActivity(cm) }

	  updateDoc(doc, change, spans, estimateHeight(cm))

	  if (!cm.options.lineWrapping) {
	    doc.iter(checkWidthStart, from.line + change.text.length, function (line) {
	      var len = lineLength(line)
	      if (len > display.maxLineLength) {
	        display.maxLine = line
	        display.maxLineLength = len
	        display.maxLineChanged = true
	        recomputeMaxLength = false
	      }
	    })
	    if (recomputeMaxLength) { cm.curOp.updateMaxLine = true }
	  }

	  // Adjust frontier, schedule worker
	  doc.frontier = Math.min(doc.frontier, from.line)
	  startWorker(cm, 400)

	  var lendiff = change.text.length - (to.line - from.line) - 1
	  // Remember that these lines changed, for updating the display
	  if (change.full)
	    { regChange(cm) }
	  else if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change))
	    { regLineChange(cm, from.line, "text") }
	  else
	    { regChange(cm, from.line, to.line + 1, lendiff) }

	  var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change")
	  if (changeHandler || changesHandler) {
	    var obj = {
	      from: from, to: to,
	      text: change.text,
	      removed: change.removed,
	      origin: change.origin
	    }
	    if (changeHandler) { signalLater(cm, "change", cm, obj) }
	    if (changesHandler) { (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj) }
	  }
	  cm.display.selForContextMenu = null
	}

	function replaceRange(doc, code, from, to, origin) {
	  if (!to) { to = from }
	  if (cmp(to, from) < 0) { var tmp = to; to = from; from = tmp }
	  if (typeof code == "string") { code = doc.splitLines(code) }
	  makeChange(doc, {from: from, to: to, text: code, origin: origin})
	}

	// Rebasing/resetting history to deal with externally-sourced changes

	function rebaseHistSelSingle(pos, from, to, diff) {
	  if (to < pos.line) {
	    pos.line += diff
	  } else if (from < pos.line) {
	    pos.line = from
	    pos.ch = 0
	  }
	}

	// Tries to rebase an array of history events given a change in the
	// document. If the change touches the same lines as the event, the
	// event, and everything 'behind' it, is discarded. If the change is
	// before the event, the event's positions are updated. Uses a
	// copy-on-write scheme for the positions, to avoid having to
	// reallocate them all on every rebase, but also avoid problems with
	// shared position objects being unsafely updated.
	function rebaseHistArray(array, from, to, diff) {
	  for (var i = 0; i < array.length; ++i) {
	    var sub = array[i], ok = true
	    if (sub.ranges) {
	      if (!sub.copied) { sub = array[i] = sub.deepCopy(); sub.copied = true }
	      for (var j = 0; j < sub.ranges.length; j++) {
	        rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff)
	        rebaseHistSelSingle(sub.ranges[j].head, from, to, diff)
	      }
	      continue
	    }
	    for (var j$1 = 0; j$1 < sub.changes.length; ++j$1) {
	      var cur = sub.changes[j$1]
	      if (to < cur.from.line) {
	        cur.from = Pos(cur.from.line + diff, cur.from.ch)
	        cur.to = Pos(cur.to.line + diff, cur.to.ch)
	      } else if (from <= cur.to.line) {
	        ok = false
	        break
	      }
	    }
	    if (!ok) {
	      array.splice(0, i + 1)
	      i = 0
	    }
	  }
	}

	function rebaseHist(hist, change) {
	  var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1
	  rebaseHistArray(hist.done, from, to, diff)
	  rebaseHistArray(hist.undone, from, to, diff)
	}

	// Utility for applying a change to a line by handle or number,
	// returning the number and optionally registering the line as
	// changed.
	function changeLine(doc, handle, changeType, op) {
	  var no = handle, line = handle
	  if (typeof handle == "number") { line = getLine(doc, clipLine(doc, handle)) }
	  else { no = lineNo(handle) }
	  if (no == null) { return null }
	  if (op(line, no) && doc.cm) { regLineChange(doc.cm, no, changeType) }
	  return line
	}

	// The document is represented as a BTree consisting of leaves, with
	// chunk of lines in them, and branches, with up to ten leaves or
	// other branch nodes below them. The top node is always a branch
	// node, and is the document object itself (meaning it has
	// additional methods and properties).
	//
	// All nodes have parent links. The tree is used both to go from
	// line numbers to line objects, and to go from objects to numbers.
	// It also indexes by height, and is used to convert between height
	// and line object, and to find the total height of the document.
	//
	// See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html

	function LeafChunk(lines) {
	  var this$1 = this;

	  this.lines = lines
	  this.parent = null
	  var height = 0
	  for (var i = 0; i < lines.length; ++i) {
	    lines[i].parent = this$1
	    height += lines[i].height
	  }
	  this.height = height
	}

	LeafChunk.prototype = {
	  chunkSize: function() { return this.lines.length },
	  // Remove the n lines at offset 'at'.
	  removeInner: function(at, n) {
	    var this$1 = this;

	    for (var i = at, e = at + n; i < e; ++i) {
	      var line = this$1.lines[i]
	      this$1.height -= line.height
	      cleanUpLine(line)
	      signalLater(line, "delete")
	    }
	    this.lines.splice(at, n)
	  },
	  // Helper used to collapse a small branch into a single leaf.
	  collapse: function(lines) {
	    lines.push.apply(lines, this.lines)
	  },
	  // Insert the given array of lines at offset 'at', count them as
	  // having the given height.
	  insertInner: function(at, lines, height) {
	    var this$1 = this;

	    this.height += height
	    this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at))
	    for (var i = 0; i < lines.length; ++i) { lines[i].parent = this$1 }
	  },
	  // Used to iterate over a part of the tree.
	  iterN: function(at, n, op) {
	    var this$1 = this;

	    for (var e = at + n; at < e; ++at)
	      { if (op(this$1.lines[at])) { return true } }
	  }
	}

	function BranchChunk(children) {
	  var this$1 = this;

	  this.children = children
	  var size = 0, height = 0
	  for (var i = 0; i < children.length; ++i) {
	    var ch = children[i]
	    size += ch.chunkSize(); height += ch.height
	    ch.parent = this$1
	  }
	  this.size = size
	  this.height = height
	  this.parent = null
	}

	BranchChunk.prototype = {
	  chunkSize: function() { return this.size },
	  removeInner: function(at, n) {
	    var this$1 = this;

	    this.size -= n
	    for (var i = 0; i < this.children.length; ++i) {
	      var child = this$1.children[i], sz = child.chunkSize()
	      if (at < sz) {
	        var rm = Math.min(n, sz - at), oldHeight = child.height
	        child.removeInner(at, rm)
	        this$1.height -= oldHeight - child.height
	        if (sz == rm) { this$1.children.splice(i--, 1); child.parent = null }
	        if ((n -= rm) == 0) { break }
	        at = 0
	      } else { at -= sz }
	    }
	    // If the result is smaller than 25 lines, ensure that it is a
	    // single leaf node.
	    if (this.size - n < 25 &&
	        (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
	      var lines = []
	      this.collapse(lines)
	      this.children = [new LeafChunk(lines)]
	      this.children[0].parent = this
	    }
	  },
	  collapse: function(lines) {
	    var this$1 = this;

	    for (var i = 0; i < this.children.length; ++i) { this$1.children[i].collapse(lines) }
	  },
	  insertInner: function(at, lines, height) {
	    var this$1 = this;

	    this.size += lines.length
	    this.height += height
	    for (var i = 0; i < this.children.length; ++i) {
	      var child = this$1.children[i], sz = child.chunkSize()
	      if (at <= sz) {
	        child.insertInner(at, lines, height)
	        if (child.lines && child.lines.length > 50) {
	          // To avoid memory thrashing when child.lines is huge (e.g. first view of a large file), it's never spliced.
	          // Instead, small slices are taken. They're taken in order because sequential memory accesses are fastest.
	          var remaining = child.lines.length % 25 + 25
	          for (var pos = remaining; pos < child.lines.length;) {
	            var leaf = new LeafChunk(child.lines.slice(pos, pos += 25))
	            child.height -= leaf.height
	            this$1.children.splice(++i, 0, leaf)
	            leaf.parent = this$1
	          }
	          child.lines = child.lines.slice(0, remaining)
	          this$1.maybeSpill()
	        }
	        break
	      }
	      at -= sz
	    }
	  },
	  // When a node has grown, check whether it should be split.
	  maybeSpill: function() {
	    if (this.children.length <= 10) { return }
	    var me = this
	    do {
	      var spilled = me.children.splice(me.children.length - 5, 5)
	      var sibling = new BranchChunk(spilled)
	      if (!me.parent) { // Become the parent node
	        var copy = new BranchChunk(me.children)
	        copy.parent = me
	        me.children = [copy, sibling]
	        me = copy
	     } else {
	        me.size -= sibling.size
	        me.height -= sibling.height
	        var myIndex = indexOf(me.parent.children, me)
	        me.parent.children.splice(myIndex + 1, 0, sibling)
	      }
	      sibling.parent = me.parent
	    } while (me.children.length > 10)
	    me.parent.maybeSpill()
	  },
	  iterN: function(at, n, op) {
	    var this$1 = this;

	    for (var i = 0; i < this.children.length; ++i) {
	      var child = this$1.children[i], sz = child.chunkSize()
	      if (at < sz) {
	        var used = Math.min(n, sz - at)
	        if (child.iterN(at, used, op)) { return true }
	        if ((n -= used) == 0) { break }
	        at = 0
	      } else { at -= sz }
	    }
	  }
	}

	// Line widgets are block elements displayed above or below a line.

	function LineWidget(doc, node, options) {
	  var this$1 = this;

	  if (options) { for (var opt in options) { if (options.hasOwnProperty(opt))
	    { this$1[opt] = options[opt] } } }
	  this.doc = doc
	  this.node = node
	}
	eventMixin(LineWidget)

	function adjustScrollWhenAboveVisible(cm, line, diff) {
	  if (heightAtLine(line) < ((cm.curOp && cm.curOp.scrollTop) || cm.doc.scrollTop))
	    { addToScrollPos(cm, null, diff) }
	}

	LineWidget.prototype.clear = function() {
	  var this$1 = this;

	  var cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = lineNo(line)
	  if (no == null || !ws) { return }
	  for (var i = 0; i < ws.length; ++i) { if (ws[i] == this$1) { ws.splice(i--, 1) } }
	  if (!ws.length) { line.widgets = null }
	  var height = widgetHeight(this)
	  updateLineHeight(line, Math.max(0, line.height - height))
	  if (cm) { runInOp(cm, function () {
	    adjustScrollWhenAboveVisible(cm, line, -height)
	    regLineChange(cm, no, "widget")
	  }) }
	}
	LineWidget.prototype.changed = function() {
	  var oldH = this.height, cm = this.doc.cm, line = this.line
	  this.height = null
	  var diff = widgetHeight(this) - oldH
	  if (!diff) { return }
	  updateLineHeight(line, line.height + diff)
	  if (cm) { runInOp(cm, function () {
	    cm.curOp.forceUpdate = true
	    adjustScrollWhenAboveVisible(cm, line, diff)
	  }) }
	}

	function addLineWidget(doc, handle, node, options) {
	  var widget = new LineWidget(doc, node, options)
	  var cm = doc.cm
	  if (cm && widget.noHScroll) { cm.display.alignWidgets = true }
	  changeLine(doc, handle, "widget", function (line) {
	    var widgets = line.widgets || (line.widgets = [])
	    if (widget.insertAt == null) { widgets.push(widget) }
	    else { widgets.splice(Math.min(widgets.length - 1, Math.max(0, widget.insertAt)), 0, widget) }
	    widget.line = line
	    if (cm && !lineIsHidden(doc, line)) {
	      var aboveVisible = heightAtLine(line) < doc.scrollTop
	      updateLineHeight(line, line.height + widgetHeight(widget))
	      if (aboveVisible) { addToScrollPos(cm, null, widget.height) }
	      cm.curOp.forceUpdate = true
	    }
	    return true
	  })
	  return widget
	}

	// TEXTMARKERS

	// Created with markText and setBookmark methods. A TextMarker is a
	// handle that can be used to clear or find a marked position in the
	// document. Line objects hold arrays (markedSpans) containing
	// {from, to, marker} object pointing to such marker objects, and
	// indicating that such a marker is present on that line. Multiple
	// lines may point to the same marker when it spans across lines.
	// The spans will have null for their from/to properties when the
	// marker continues beyond the start/end of the line. Markers have
	// links back to the lines they currently touch.

	// Collapsed markers have unique ids, in order to be able to order
	// them, which is needed for uniquely determining an outer marker
	// when they overlap (they may nest, but not partially overlap).
	var nextMarkerId = 0

	function TextMarker(doc, type) {
	  this.lines = []
	  this.type = type
	  this.doc = doc
	  this.id = ++nextMarkerId
	}
	eventMixin(TextMarker)

	// Clear the marker.
	TextMarker.prototype.clear = function() {
	  var this$1 = this;

	  if (this.explicitlyCleared) { return }
	  var cm = this.doc.cm, withOp = cm && !cm.curOp
	  if (withOp) { startOperation(cm) }
	  if (hasHandler(this, "clear")) {
	    var found = this.find()
	    if (found) { signalLater(this, "clear", found.from, found.to) }
	  }
	  var min = null, max = null
	  for (var i = 0; i < this.lines.length; ++i) {
	    var line = this$1.lines[i]
	    var span = getMarkedSpanFor(line.markedSpans, this$1)
	    if (cm && !this$1.collapsed) { regLineChange(cm, lineNo(line), "text") }
	    else if (cm) {
	      if (span.to != null) { max = lineNo(line) }
	      if (span.from != null) { min = lineNo(line) }
	    }
	    line.markedSpans = removeMarkedSpan(line.markedSpans, span)
	    if (span.from == null && this$1.collapsed && !lineIsHidden(this$1.doc, line) && cm)
	      { updateLineHeight(line, textHeight(cm.display)) }
	  }
	  if (cm && this.collapsed && !cm.options.lineWrapping) { for (var i$1 = 0; i$1 < this.lines.length; ++i$1) {
	    var visual = visualLine(this$1.lines[i$1]), len = lineLength(visual)
	    if (len > cm.display.maxLineLength) {
	      cm.display.maxLine = visual
	      cm.display.maxLineLength = len
	      cm.display.maxLineChanged = true
	    }
	  } }

	  if (min != null && cm && this.collapsed) { regChange(cm, min, max + 1) }
	  this.lines.length = 0
	  this.explicitlyCleared = true
	  if (this.atomic && this.doc.cantEdit) {
	    this.doc.cantEdit = false
	    if (cm) { reCheckSelection(cm.doc) }
	  }
	  if (cm) { signalLater(cm, "markerCleared", cm, this) }
	  if (withOp) { endOperation(cm) }
	  if (this.parent) { this.parent.clear() }
	}

	// Find the position of the marker in the document. Returns a {from,
	// to} object by default. Side can be passed to get a specific side
	// -- 0 (both), -1 (left), or 1 (right). When lineObj is true, the
	// Pos objects returned contain a line object, rather than a line
	// number (used to prevent looking up the same line twice).
	TextMarker.prototype.find = function(side, lineObj) {
	  var this$1 = this;

	  if (side == null && this.type == "bookmark") { side = 1 }
	  var from, to
	  for (var i = 0; i < this.lines.length; ++i) {
	    var line = this$1.lines[i]
	    var span = getMarkedSpanFor(line.markedSpans, this$1)
	    if (span.from != null) {
	      from = Pos(lineObj ? line : lineNo(line), span.from)
	      if (side == -1) { return from }
	    }
	    if (span.to != null) {
	      to = Pos(lineObj ? line : lineNo(line), span.to)
	      if (side == 1) { return to }
	    }
	  }
	  return from && {from: from, to: to}
	}

	// Signals that the marker's widget changed, and surrounding layout
	// should be recomputed.
	TextMarker.prototype.changed = function() {
	  var pos = this.find(-1, true), widget = this, cm = this.doc.cm
	  if (!pos || !cm) { return }
	  runInOp(cm, function () {
	    var line = pos.line, lineN = lineNo(pos.line)
	    var view = findViewForLine(cm, lineN)
	    if (view) {
	      clearLineMeasurementCacheFor(view)
	      cm.curOp.selectionChanged = cm.curOp.forceUpdate = true
	    }
	    cm.curOp.updateMaxLine = true
	    if (!lineIsHidden(widget.doc, line) && widget.height != null) {
	      var oldHeight = widget.height
	      widget.height = null
	      var dHeight = widgetHeight(widget) - oldHeight
	      if (dHeight)
	        { updateLineHeight(line, line.height + dHeight) }
	    }
	  })
	}

	TextMarker.prototype.attachLine = function(line) {
	  if (!this.lines.length && this.doc.cm) {
	    var op = this.doc.cm.curOp
	    if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1)
	      { (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this) }
	  }
	  this.lines.push(line)
	}
	TextMarker.prototype.detachLine = function(line) {
	  this.lines.splice(indexOf(this.lines, line), 1)
	  if (!this.lines.length && this.doc.cm) {
	    var op = this.doc.cm.curOp
	    ;(op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this)
	  }
	}

	// Create a marker, wire it up to the right lines, and
	function markText(doc, from, to, options, type) {
	  // Shared markers (across linked documents) are handled separately
	  // (markTextShared will call out to this again, once per
	  // document).
	  if (options && options.shared) { return markTextShared(doc, from, to, options, type) }
	  // Ensure we are in an operation.
	  if (doc.cm && !doc.cm.curOp) { return operation(doc.cm, markText)(doc, from, to, options, type) }

	  var marker = new TextMarker(doc, type), diff = cmp(from, to)
	  if (options) { copyObj(options, marker, false) }
	  // Don't connect empty markers unless clearWhenEmpty is false
	  if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false)
	    { return marker }
	  if (marker.replacedWith) {
	    // Showing up as a widget implies collapsed (widget replaces text)
	    marker.collapsed = true
	    marker.widgetNode = elt("span", [marker.replacedWith], "CodeMirror-widget")
	    if (!options.handleMouseEvents) { marker.widgetNode.setAttribute("cm-ignore-events", "true") }
	    if (options.insertLeft) { marker.widgetNode.insertLeft = true }
	  }
	  if (marker.collapsed) {
	    if (conflictingCollapsedRange(doc, from.line, from, to, marker) ||
	        from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker))
	      { throw new Error("Inserting collapsed marker partially overlapping an existing one") }
	    seeCollapsedSpans()
	  }

	  if (marker.addToHistory)
	    { addChangeToHistory(doc, {from: from, to: to, origin: "markText"}, doc.sel, NaN) }

	  var curLine = from.line, cm = doc.cm, updateMaxLine
	  doc.iter(curLine, to.line + 1, function (line) {
	    if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine)
	      { updateMaxLine = true }
	    if (marker.collapsed && curLine != from.line) { updateLineHeight(line, 0) }
	    addMarkedSpan(line, new MarkedSpan(marker,
	                                       curLine == from.line ? from.ch : null,
	                                       curLine == to.line ? to.ch : null))
	    ++curLine
	  })
	  // lineIsHidden depends on the presence of the spans, so needs a second pass
	  if (marker.collapsed) { doc.iter(from.line, to.line + 1, function (line) {
	    if (lineIsHidden(doc, line)) { updateLineHeight(line, 0) }
	  }) }

	  if (marker.clearOnEnter) { on(marker, "beforeCursorEnter", function () { return marker.clear(); }) }

	  if (marker.readOnly) {
	    seeReadOnlySpans()
	    if (doc.history.done.length || doc.history.undone.length)
	      { doc.clearHistory() }
	  }
	  if (marker.collapsed) {
	    marker.id = ++nextMarkerId
	    marker.atomic = true
	  }
	  if (cm) {
	    // Sync editor state
	    if (updateMaxLine) { cm.curOp.updateMaxLine = true }
	    if (marker.collapsed)
	      { regChange(cm, from.line, to.line + 1) }
	    else if (marker.className || marker.title || marker.startStyle || marker.endStyle || marker.css)
	      { for (var i = from.line; i <= to.line; i++) { regLineChange(cm, i, "text") } }
	    if (marker.atomic) { reCheckSelection(cm.doc) }
	    signalLater(cm, "markerAdded", cm, marker)
	  }
	  return marker
	}

	// SHARED TEXTMARKERS

	// A shared marker spans multiple linked documents. It is
	// implemented as a meta-marker-object controlling multiple normal
	// markers.
	function SharedTextMarker(markers, primary) {
	  var this$1 = this;

	  this.markers = markers
	  this.primary = primary
	  for (var i = 0; i < markers.length; ++i)
	    { markers[i].parent = this$1 }
	}
	eventMixin(SharedTextMarker)

	SharedTextMarker.prototype.clear = function() {
	  var this$1 = this;

	  if (this.explicitlyCleared) { return }
	  this.explicitlyCleared = true
	  for (var i = 0; i < this.markers.length; ++i)
	    { this$1.markers[i].clear() }
	  signalLater(this, "clear")
	}
	SharedTextMarker.prototype.find = function(side, lineObj) {
	  return this.primary.find(side, lineObj)
	}

	function markTextShared(doc, from, to, options, type) {
	  options = copyObj(options)
	  options.shared = false
	  var markers = [markText(doc, from, to, options, type)], primary = markers[0]
	  var widget = options.widgetNode
	  linkedDocs(doc, function (doc) {
	    if (widget) { options.widgetNode = widget.cloneNode(true) }
	    markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type))
	    for (var i = 0; i < doc.linked.length; ++i)
	      { if (doc.linked[i].isParent) { return } }
	    primary = lst(markers)
	  })
	  return new SharedTextMarker(markers, primary)
	}

	function findSharedMarkers(doc) {
	  return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())), function (m) { return m.parent; })
	}

	function copySharedMarkers(doc, markers) {
	  for (var i = 0; i < markers.length; i++) {
	    var marker = markers[i], pos = marker.find()
	    var mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to)
	    if (cmp(mFrom, mTo)) {
	      var subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type)
	      marker.markers.push(subMark)
	      subMark.parent = marker
	    }
	  }
	}

	function detachSharedMarkers(markers) {
	  var loop = function ( i ) {
	    var marker = markers[i], linked = [marker.primary.doc]
	    linkedDocs(marker.primary.doc, function (d) { return linked.push(d); })
	    for (var j = 0; j < marker.markers.length; j++) {
	      var subMarker = marker.markers[j]
	      if (indexOf(linked, subMarker.doc) == -1) {
	        subMarker.parent = null
	        marker.markers.splice(j--, 1)
	      }
	    }
	  };

	  for (var i = 0; i < markers.length; i++) loop( i );
	}

	var nextDocId = 0
	var Doc = function(text, mode, firstLine, lineSep) {
	  if (!(this instanceof Doc)) { return new Doc(text, mode, firstLine, lineSep) }
	  if (firstLine == null) { firstLine = 0 }

	  BranchChunk.call(this, [new LeafChunk([new Line("", null)])])
	  this.first = firstLine
	  this.scrollTop = this.scrollLeft = 0
	  this.cantEdit = false
	  this.cleanGeneration = 1
	  this.frontier = firstLine
	  var start = Pos(firstLine, 0)
	  this.sel = simpleSelection(start)
	  this.history = new History(null)
	  this.id = ++nextDocId
	  this.modeOption = mode
	  this.lineSep = lineSep
	  this.extend = false

	  if (typeof text == "string") { text = this.splitLines(text) }
	  updateDoc(this, {from: start, to: start, text: text})
	  setSelection(this, simpleSelection(start), sel_dontScroll)
	}

	Doc.prototype = createObj(BranchChunk.prototype, {
	  constructor: Doc,
	  // Iterate over the document. Supports two forms -- with only one
	  // argument, it calls that for each line in the document. With
	  // three, it iterates over the range given by the first two (with
	  // the second being non-inclusive).
	  iter: function(from, to, op) {
	    if (op) { this.iterN(from - this.first, to - from, op) }
	    else { this.iterN(this.first, this.first + this.size, from) }
	  },

	  // Non-public interface for adding and removing lines.
	  insert: function(at, lines) {
	    var height = 0
	    for (var i = 0; i < lines.length; ++i) { height += lines[i].height }
	    this.insertInner(at - this.first, lines, height)
	  },
	  remove: function(at, n) { this.removeInner(at - this.first, n) },

	  // From here, the methods are part of the public interface. Most
	  // are also available from CodeMirror (editor) instances.

	  getValue: function(lineSep) {
	    var lines = getLines(this, this.first, this.first + this.size)
	    if (lineSep === false) { return lines }
	    return lines.join(lineSep || this.lineSeparator())
	  },
	  setValue: docMethodOp(function(code) {
	    var top = Pos(this.first, 0), last = this.first + this.size - 1
	    makeChange(this, {from: top, to: Pos(last, getLine(this, last).text.length),
	                      text: this.splitLines(code), origin: "setValue", full: true}, true)
	    setSelection(this, simpleSelection(top))
	  }),
	  replaceRange: function(code, from, to, origin) {
	    from = clipPos(this, from)
	    to = to ? clipPos(this, to) : from
	    replaceRange(this, code, from, to, origin)
	  },
	  getRange: function(from, to, lineSep) {
	    var lines = getBetween(this, clipPos(this, from), clipPos(this, to))
	    if (lineSep === false) { return lines }
	    return lines.join(lineSep || this.lineSeparator())
	  },

	  getLine: function(line) {var l = this.getLineHandle(line); return l && l.text},

	  getLineHandle: function(line) {if (isLine(this, line)) { return getLine(this, line) }},
	  getLineNumber: function(line) {return lineNo(line)},

	  getLineHandleVisualStart: function(line) {
	    if (typeof line == "number") { line = getLine(this, line) }
	    return visualLine(line)
	  },

	  lineCount: function() {return this.size},
	  firstLine: function() {return this.first},
	  lastLine: function() {return this.first + this.size - 1},

	  clipPos: function(pos) {return clipPos(this, pos)},

	  getCursor: function(start) {
	    var range = this.sel.primary(), pos
	    if (start == null || start == "head") { pos = range.head }
	    else if (start == "anchor") { pos = range.anchor }
	    else if (start == "end" || start == "to" || start === false) { pos = range.to() }
	    else { pos = range.from() }
	    return pos
	  },
	  listSelections: function() { return this.sel.ranges },
	  somethingSelected: function() {return this.sel.somethingSelected()},

	  setCursor: docMethodOp(function(line, ch, options) {
	    setSimpleSelection(this, clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options)
	  }),
	  setSelection: docMethodOp(function(anchor, head, options) {
	    setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options)
	  }),
	  extendSelection: docMethodOp(function(head, other, options) {
	    extendSelection(this, clipPos(this, head), other && clipPos(this, other), options)
	  }),
	  extendSelections: docMethodOp(function(heads, options) {
	    extendSelections(this, clipPosArray(this, heads), options)
	  }),
	  extendSelectionsBy: docMethodOp(function(f, options) {
	    var heads = map(this.sel.ranges, f)
	    extendSelections(this, clipPosArray(this, heads), options)
	  }),
	  setSelections: docMethodOp(function(ranges, primary, options) {
	    var this$1 = this;

	    if (!ranges.length) { return }
	    var out = []
	    for (var i = 0; i < ranges.length; i++)
	      { out[i] = new Range(clipPos(this$1, ranges[i].anchor),
	                         clipPos(this$1, ranges[i].head)) }
	    if (primary == null) { primary = Math.min(ranges.length - 1, this.sel.primIndex) }
	    setSelection(this, normalizeSelection(out, primary), options)
	  }),
	  addSelection: docMethodOp(function(anchor, head, options) {
	    var ranges = this.sel.ranges.slice(0)
	    ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor)))
	    setSelection(this, normalizeSelection(ranges, ranges.length - 1), options)
	  }),

	  getSelection: function(lineSep) {
	    var this$1 = this;

	    var ranges = this.sel.ranges, lines
	    for (var i = 0; i < ranges.length; i++) {
	      var sel = getBetween(this$1, ranges[i].from(), ranges[i].to())
	      lines = lines ? lines.concat(sel) : sel
	    }
	    if (lineSep === false) { return lines }
	    else { return lines.join(lineSep || this.lineSeparator()) }
	  },
	  getSelections: function(lineSep) {
	    var this$1 = this;

	    var parts = [], ranges = this.sel.ranges
	    for (var i = 0; i < ranges.length; i++) {
	      var sel = getBetween(this$1, ranges[i].from(), ranges[i].to())
	      if (lineSep !== false) { sel = sel.join(lineSep || this$1.lineSeparator()) }
	      parts[i] = sel
	    }
	    return parts
	  },
	  replaceSelection: function(code, collapse, origin) {
	    var dup = []
	    for (var i = 0; i < this.sel.ranges.length; i++)
	      { dup[i] = code }
	    this.replaceSelections(dup, collapse, origin || "+input")
	  },
	  replaceSelections: docMethodOp(function(code, collapse, origin) {
	    var this$1 = this;

	    var changes = [], sel = this.sel
	    for (var i = 0; i < sel.ranges.length; i++) {
	      var range = sel.ranges[i]
	      changes[i] = {from: range.from(), to: range.to(), text: this$1.splitLines(code[i]), origin: origin}
	    }
	    var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse)
	    for (var i$1 = changes.length - 1; i$1 >= 0; i$1--)
	      { makeChange(this$1, changes[i$1]) }
	    if (newSel) { setSelectionReplaceHistory(this, newSel) }
	    else if (this.cm) { ensureCursorVisible(this.cm) }
	  }),
	  undo: docMethodOp(function() {makeChangeFromHistory(this, "undo")}),
	  redo: docMethodOp(function() {makeChangeFromHistory(this, "redo")}),
	  undoSelection: docMethodOp(function() {makeChangeFromHistory(this, "undo", true)}),
	  redoSelection: docMethodOp(function() {makeChangeFromHistory(this, "redo", true)}),

	  setExtending: function(val) {this.extend = val},
	  getExtending: function() {return this.extend},

	  historySize: function() {
	    var hist = this.history, done = 0, undone = 0
	    for (var i = 0; i < hist.done.length; i++) { if (!hist.done[i].ranges) { ++done } }
	    for (var i$1 = 0; i$1 < hist.undone.length; i$1++) { if (!hist.undone[i$1].ranges) { ++undone } }
	    return {undo: done, redo: undone}
	  },
	  clearHistory: function() {this.history = new History(this.history.maxGeneration)},

	  markClean: function() {
	    this.cleanGeneration = this.changeGeneration(true)
	  },
	  changeGeneration: function(forceSplit) {
	    if (forceSplit)
	      { this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null }
	    return this.history.generation
	  },
	  isClean: function (gen) {
	    return this.history.generation == (gen || this.cleanGeneration)
	  },

	  getHistory: function() {
	    return {done: copyHistoryArray(this.history.done),
	            undone: copyHistoryArray(this.history.undone)}
	  },
	  setHistory: function(histData) {
	    var hist = this.history = new History(this.history.maxGeneration)
	    hist.done = copyHistoryArray(histData.done.slice(0), null, true)
	    hist.undone = copyHistoryArray(histData.undone.slice(0), null, true)
	  },

	  setGutterMarker: docMethodOp(function(line, gutterID, value) {
	    return changeLine(this, line, "gutter", function (line) {
	      var markers = line.gutterMarkers || (line.gutterMarkers = {})
	      markers[gutterID] = value
	      if (!value && isEmpty(markers)) { line.gutterMarkers = null }
	      return true
	    })
	  }),

	  clearGutter: docMethodOp(function(gutterID) {
	    var this$1 = this;

	    var i = this.first
	    this.iter(function (line) {
	      if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
	        changeLine(this$1, line, "gutter", function () {
	          line.gutterMarkers[gutterID] = null
	          if (isEmpty(line.gutterMarkers)) { line.gutterMarkers = null }
	          return true
	        })
	      }
	      ++i
	    })
	  }),

	  lineInfo: function(line) {
	    var n
	    if (typeof line == "number") {
	      if (!isLine(this, line)) { return null }
	      n = line
	      line = getLine(this, line)
	      if (!line) { return null }
	    } else {
	      n = lineNo(line)
	      if (n == null) { return null }
	    }
	    return {line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
	            textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
	            widgets: line.widgets}
	  },

	  addLineClass: docMethodOp(function(handle, where, cls) {
	    return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
	      var prop = where == "text" ? "textClass"
	               : where == "background" ? "bgClass"
	               : where == "gutter" ? "gutterClass" : "wrapClass"
	      if (!line[prop]) { line[prop] = cls }
	      else if (classTest(cls).test(line[prop])) { return false }
	      else { line[prop] += " " + cls }
	      return true
	    })
	  }),
	  removeLineClass: docMethodOp(function(handle, where, cls) {
	    return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
	      var prop = where == "text" ? "textClass"
	               : where == "background" ? "bgClass"
	               : where == "gutter" ? "gutterClass" : "wrapClass"
	      var cur = line[prop]
	      if (!cur) { return false }
	      else if (cls == null) { line[prop] = null }
	      else {
	        var found = cur.match(classTest(cls))
	        if (!found) { return false }
	        var end = found.index + found[0].length
	        line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null
	      }
	      return true
	    })
	  }),

	  addLineWidget: docMethodOp(function(handle, node, options) {
	    return addLineWidget(this, handle, node, options)
	  }),
	  removeLineWidget: function(widget) { widget.clear() },

	  markText: function(from, to, options) {
	    return markText(this, clipPos(this, from), clipPos(this, to), options, options && options.type || "range")
	  },
	  setBookmark: function(pos, options) {
	    var realOpts = {replacedWith: options && (options.nodeType == null ? options.widget : options),
	                    insertLeft: options && options.insertLeft,
	                    clearWhenEmpty: false, shared: options && options.shared,
	                    handleMouseEvents: options && options.handleMouseEvents}
	    pos = clipPos(this, pos)
	    return markText(this, pos, pos, realOpts, "bookmark")
	  },
	  findMarksAt: function(pos) {
	    pos = clipPos(this, pos)
	    var markers = [], spans = getLine(this, pos.line).markedSpans
	    if (spans) { for (var i = 0; i < spans.length; ++i) {
	      var span = spans[i]
	      if ((span.from == null || span.from <= pos.ch) &&
	          (span.to == null || span.to >= pos.ch))
	        { markers.push(span.marker.parent || span.marker) }
	    } }
	    return markers
	  },
	  findMarks: function(from, to, filter) {
	    from = clipPos(this, from); to = clipPos(this, to)
	    var found = [], lineNo = from.line
	    this.iter(from.line, to.line + 1, function (line) {
	      var spans = line.markedSpans
	      if (spans) { for (var i = 0; i < spans.length; i++) {
	        var span = spans[i]
	        if (!(span.to != null && lineNo == from.line && from.ch >= span.to ||
	              span.from == null && lineNo != from.line ||
	              span.from != null && lineNo == to.line && span.from >= to.ch) &&
	            (!filter || filter(span.marker)))
	          { found.push(span.marker.parent || span.marker) }
	      } }
	      ++lineNo
	    })
	    return found
	  },
	  getAllMarks: function() {
	    var markers = []
	    this.iter(function (line) {
	      var sps = line.markedSpans
	      if (sps) { for (var i = 0; i < sps.length; ++i)
	        { if (sps[i].from != null) { markers.push(sps[i].marker) } } }
	    })
	    return markers
	  },

	  posFromIndex: function(off) {
	    var ch, lineNo = this.first, sepSize = this.lineSeparator().length
	    this.iter(function (line) {
	      var sz = line.text.length + sepSize
	      if (sz > off) { ch = off; return true }
	      off -= sz
	      ++lineNo
	    })
	    return clipPos(this, Pos(lineNo, ch))
	  },
	  indexFromPos: function (coords) {
	    coords = clipPos(this, coords)
	    var index = coords.ch
	    if (coords.line < this.first || coords.ch < 0) { return 0 }
	    var sepSize = this.lineSeparator().length
	    this.iter(this.first, coords.line, function (line) { // iter aborts when callback returns a truthy value
	      index += line.text.length + sepSize
	    })
	    return index
	  },

	  copy: function(copyHistory) {
	    var doc = new Doc(getLines(this, this.first, this.first + this.size),
	                      this.modeOption, this.first, this.lineSep)
	    doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft
	    doc.sel = this.sel
	    doc.extend = false
	    if (copyHistory) {
	      doc.history.undoDepth = this.history.undoDepth
	      doc.setHistory(this.getHistory())
	    }
	    return doc
	  },

	  linkedDoc: function(options) {
	    if (!options) { options = {} }
	    var from = this.first, to = this.first + this.size
	    if (options.from != null && options.from > from) { from = options.from }
	    if (options.to != null && options.to < to) { to = options.to }
	    var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from, this.lineSep)
	    if (options.sharedHist) { copy.history = this.history
	    ; }(this.linked || (this.linked = [])).push({doc: copy, sharedHist: options.sharedHist})
	    copy.linked = [{doc: this, isParent: true, sharedHist: options.sharedHist}]
	    copySharedMarkers(copy, findSharedMarkers(this))
	    return copy
	  },
	  unlinkDoc: function(other) {
	    var this$1 = this;

	    if (other instanceof CodeMirror) { other = other.doc }
	    if (this.linked) { for (var i = 0; i < this.linked.length; ++i) {
	      var link = this$1.linked[i]
	      if (link.doc != other) { continue }
	      this$1.linked.splice(i, 1)
	      other.unlinkDoc(this$1)
	      detachSharedMarkers(findSharedMarkers(this$1))
	      break
	    } }
	    // If the histories were shared, split them again
	    if (other.history == this.history) {
	      var splitIds = [other.id]
	      linkedDocs(other, function (doc) { return splitIds.push(doc.id); }, true)
	      other.history = new History(null)
	      other.history.done = copyHistoryArray(this.history.done, splitIds)
	      other.history.undone = copyHistoryArray(this.history.undone, splitIds)
	    }
	  },
	  iterLinkedDocs: function(f) {linkedDocs(this, f)},

	  getMode: function() {return this.mode},
	  getEditor: function() {return this.cm},

	  splitLines: function(str) {
	    if (this.lineSep) { return str.split(this.lineSep) }
	    return splitLinesAuto(str)
	  },
	  lineSeparator: function() { return this.lineSep || "\n" }
	})

	// Public alias.
	Doc.prototype.eachLine = Doc.prototype.iter

	// Kludge to work around strange IE behavior where it'll sometimes
	// re-fire a series of drag-related events right after the drop (#1551)
	var lastDrop = 0

	function onDrop(e) {
	  var cm = this
	  clearDragCursor(cm)
	  if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e))
	    { return }
	  e_preventDefault(e)
	  if (ie) { lastDrop = +new Date }
	  var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files
	  if (!pos || cm.isReadOnly()) { return }
	  // Might be a file drop, in which case we simply extract the text
	  // and insert it.
	  if (files && files.length && window.FileReader && window.File) {
	    var n = files.length, text = Array(n), read = 0
	    var loadFile = function (file, i) {
	      if (cm.options.allowDropFileTypes &&
	          indexOf(cm.options.allowDropFileTypes, file.type) == -1)
	        { return }

	      var reader = new FileReader
	      reader.onload = operation(cm, function () {
	        var content = reader.result
	        if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) { content = "" }
	        text[i] = content
	        if (++read == n) {
	          pos = clipPos(cm.doc, pos)
	          var change = {from: pos, to: pos,
	                        text: cm.doc.splitLines(text.join(cm.doc.lineSeparator())),
	                        origin: "paste"}
	          makeChange(cm.doc, change)
	          setSelectionReplaceHistory(cm.doc, simpleSelection(pos, changeEnd(change)))
	        }
	      })
	      reader.readAsText(file)
	    }
	    for (var i = 0; i < n; ++i) { loadFile(files[i], i) }
	  } else { // Normal drop
	    // Don't do a replace if the drop happened inside of the selected text.
	    if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
	      cm.state.draggingText(e)
	      // Ensure the editor is re-focused
	      setTimeout(function () { return cm.display.input.focus(); }, 20)
	      return
	    }
	    try {
	      var text$1 = e.dataTransfer.getData("Text")
	      if (text$1) {
	        var selected
	        if (cm.state.draggingText && !cm.state.draggingText.copy)
	          { selected = cm.listSelections() }
	        setSelectionNoUndo(cm.doc, simpleSelection(pos, pos))
	        if (selected) { for (var i$1 = 0; i$1 < selected.length; ++i$1)
	          { replaceRange(cm.doc, "", selected[i$1].anchor, selected[i$1].head, "drag") } }
	        cm.replaceSelection(text$1, "around", "paste")
	        cm.display.input.focus()
	      }
	    }
	    catch(e){}
	  }
	}

	function onDragStart(cm, e) {
	  if (ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { e_stop(e); return }
	  if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) { return }

	  e.dataTransfer.setData("Text", cm.getSelection())
	  e.dataTransfer.effectAllowed = "copyMove"

	  // Use dummy image instead of default browsers image.
	  // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
	  if (e.dataTransfer.setDragImage && !safari) {
	    var img = elt("img", null, null, "position: fixed; left: 0; top: 0;")
	    img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
	    if (presto) {
	      img.width = img.height = 1
	      cm.display.wrapper.appendChild(img)
	      // Force a relayout, or Opera won't use our image for some obscure reason
	      img._top = img.offsetTop
	    }
	    e.dataTransfer.setDragImage(img, 0, 0)
	    if (presto) { img.parentNode.removeChild(img) }
	  }
	}

	function onDragOver(cm, e) {
	  var pos = posFromMouse(cm, e)
	  if (!pos) { return }
	  var frag = document.createDocumentFragment()
	  drawSelectionCursor(cm, pos, frag)
	  if (!cm.display.dragCursor) {
	    cm.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors")
	    cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv)
	  }
	  removeChildrenAndAdd(cm.display.dragCursor, frag)
	}

	function clearDragCursor(cm) {
	  if (cm.display.dragCursor) {
	    cm.display.lineSpace.removeChild(cm.display.dragCursor)
	    cm.display.dragCursor = null
	  }
	}

	// These must be handled carefully, because naively registering a
	// handler for each editor will cause the editors to never be
	// garbage collected.

	function forEachCodeMirror(f) {
	  if (!document.body.getElementsByClassName) { return }
	  var byClass = document.body.getElementsByClassName("CodeMirror")
	  for (var i = 0; i < byClass.length; i++) {
	    var cm = byClass[i].CodeMirror
	    if (cm) { f(cm) }
	  }
	}

	var globalsRegistered = false
	function ensureGlobalHandlers() {
	  if (globalsRegistered) { return }
	  registerGlobalHandlers()
	  globalsRegistered = true
	}
	function registerGlobalHandlers() {
	  // When the window resizes, we need to refresh active editors.
	  var resizeTimer
	  on(window, "resize", function () {
	    if (resizeTimer == null) { resizeTimer = setTimeout(function () {
	      resizeTimer = null
	      forEachCodeMirror(onResize)
	    }, 100) }
	  })
	  // When the window loses focus, we want to show the editor as blurred
	  on(window, "blur", function () { return forEachCodeMirror(onBlur); })
	}
	// Called when the window resizes
	function onResize(cm) {
	  var d = cm.display
	  if (d.lastWrapHeight == d.wrapper.clientHeight && d.lastWrapWidth == d.wrapper.clientWidth)
	    { return }
	  // Might be a text scaling operation, clear size caches.
	  d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null
	  d.scrollbarsClipped = false
	  cm.setSize()
	}

	var keyNames = {
	  3: "Enter", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
	  19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
	  36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
	  46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod",
	  106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 127: "Delete",
	  173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
	  221: "]", 222: "'", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete",
	  63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert"
	}

	// Number keys
	for (var i = 0; i < 10; i++) { keyNames[i + 48] = keyNames[i + 96] = String(i) }
	// Alphabetic keys
	for (var i$1 = 65; i$1 <= 90; i$1++) { keyNames[i$1] = String.fromCharCode(i$1) }
	// Function keys
	for (var i$2 = 1; i$2 <= 12; i$2++) { keyNames[i$2 + 111] = keyNames[i$2 + 63235] = "F" + i$2 }

	var keyMap = {}

	keyMap.basic = {
	  "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
	  "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
	  "Delete": "delCharAfter", "Backspace": "delCharBefore", "Shift-Backspace": "delCharBefore",
	  "Tab": "defaultTab", "Shift-Tab": "indentAuto",
	  "Enter": "newlineAndIndent", "Insert": "toggleOverwrite",
	  "Esc": "singleSelection"
	}
	// Note that the save and find-related commands aren't defined by
	// default. User code or addons can define them. Unknown commands
	// are simply ignored.
	keyMap.pcDefault = {
	  "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
	  "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown",
	  "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
	  "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
	  "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
	  "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
	  "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection",
	  fallthrough: "basic"
	}
	// Very basic readline/emacs-style bindings, which are standard on Mac.
	keyMap.emacsy = {
	  "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
	  "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd",
	  "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore",
	  "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars",
	  "Ctrl-O": "openLine"
	}
	keyMap.macDefault = {
	  "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
	  "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
	  "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore",
	  "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
	  "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
	  "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight",
	  "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd",
	  fallthrough: ["basic", "emacsy"]
	}
	keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault

	// KEYMAP DISPATCH

	function normalizeKeyName(name) {
	  var parts = name.split(/-(?!$)/)
	  name = parts[parts.length - 1]
	  var alt, ctrl, shift, cmd
	  for (var i = 0; i < parts.length - 1; i++) {
	    var mod = parts[i]
	    if (/^(cmd|meta|m)$/i.test(mod)) { cmd = true }
	    else if (/^a(lt)?$/i.test(mod)) { alt = true }
	    else if (/^(c|ctrl|control)$/i.test(mod)) { ctrl = true }
	    else if (/^s(hift)?$/i.test(mod)) { shift = true }
	    else { throw new Error("Unrecognized modifier name: " + mod) }
	  }
	  if (alt) { name = "Alt-" + name }
	  if (ctrl) { name = "Ctrl-" + name }
	  if (cmd) { name = "Cmd-" + name }
	  if (shift) { name = "Shift-" + name }
	  return name
	}

	// This is a kludge to keep keymaps mostly working as raw objects
	// (backwards compatibility) while at the same time support features
	// like normalization and multi-stroke key bindings. It compiles a
	// new normalized keymap, and then updates the old object to reflect
	// this.
	function normalizeKeyMap(keymap) {
	  var copy = {}
	  for (var keyname in keymap) { if (keymap.hasOwnProperty(keyname)) {
	    var value = keymap[keyname]
	    if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) { continue }
	    if (value == "...") { delete keymap[keyname]; continue }

	    var keys = map(keyname.split(" "), normalizeKeyName)
	    for (var i = 0; i < keys.length; i++) {
	      var val = (void 0), name = (void 0)
	      if (i == keys.length - 1) {
	        name = keys.join(" ")
	        val = value
	      } else {
	        name = keys.slice(0, i + 1).join(" ")
	        val = "..."
	      }
	      var prev = copy[name]
	      if (!prev) { copy[name] = val }
	      else if (prev != val) { throw new Error("Inconsistent bindings for " + name) }
	    }
	    delete keymap[keyname]
	  } }
	  for (var prop in copy) { keymap[prop] = copy[prop] }
	  return keymap
	}

	function lookupKey(key, map, handle, context) {
	  map = getKeyMap(map)
	  var found = map.call ? map.call(key, context) : map[key]
	  if (found === false) { return "nothing" }
	  if (found === "...") { return "multi" }
	  if (found != null && handle(found)) { return "handled" }

	  if (map.fallthrough) {
	    if (Object.prototype.toString.call(map.fallthrough) != "[object Array]")
	      { return lookupKey(key, map.fallthrough, handle, context) }
	    for (var i = 0; i < map.fallthrough.length; i++) {
	      var result = lookupKey(key, map.fallthrough[i], handle, context)
	      if (result) { return result }
	    }
	  }
	}

	// Modifier key presses don't count as 'real' key presses for the
	// purpose of keymap fallthrough.
	function isModifierKey(value) {
	  var name = typeof value == "string" ? value : keyNames[value.keyCode]
	  return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod"
	}

	// Look up the name of a key as indicated by an event object.
	function keyName(event, noShift) {
	  if (presto && event.keyCode == 34 && event["char"]) { return false }
	  var base = keyNames[event.keyCode], name = base
	  if (name == null || event.altGraphKey) { return false }
	  if (event.altKey && base != "Alt") { name = "Alt-" + name }
	  if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") { name = "Ctrl-" + name }
	  if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Cmd") { name = "Cmd-" + name }
	  if (!noShift && event.shiftKey && base != "Shift") { name = "Shift-" + name }
	  return name
	}

	function getKeyMap(val) {
	  return typeof val == "string" ? keyMap[val] : val
	}

	// Helper for deleting text near the selection(s), used to implement
	// backspace, delete, and similar functionality.
	function deleteNearSelection(cm, compute) {
	  var ranges = cm.doc.sel.ranges, kill = []
	  // Build up a set of ranges to kill first, merging overlapping
	  // ranges.
	  for (var i = 0; i < ranges.length; i++) {
	    var toKill = compute(ranges[i])
	    while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
	      var replaced = kill.pop()
	      if (cmp(replaced.from, toKill.from) < 0) {
	        toKill.from = replaced.from
	        break
	      }
	    }
	    kill.push(toKill)
	  }
	  // Next, remove those actual ranges.
	  runInOp(cm, function () {
	    for (var i = kill.length - 1; i >= 0; i--)
	      { replaceRange(cm.doc, "", kill[i].from, kill[i].to, "+delete") }
	    ensureCursorVisible(cm)
	  })
	}

	// Commands are parameter-less actions that can be performed on an
	// editor, mostly used for keybindings.
	var commands = {
	  selectAll: selectAll,
	  singleSelection: function (cm) { return cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll); },
	  killLine: function (cm) { return deleteNearSelection(cm, function (range) {
	    if (range.empty()) {
	      var len = getLine(cm.doc, range.head.line).text.length
	      if (range.head.ch == len && range.head.line < cm.lastLine())
	        { return {from: range.head, to: Pos(range.head.line + 1, 0)} }
	      else
	        { return {from: range.head, to: Pos(range.head.line, len)} }
	    } else {
	      return {from: range.from(), to: range.to()}
	    }
	  }); },
	  deleteLine: function (cm) { return deleteNearSelection(cm, function (range) { return ({
	    from: Pos(range.from().line, 0),
	    to: clipPos(cm.doc, Pos(range.to().line + 1, 0))
	  }); }); },
	  delLineLeft: function (cm) { return deleteNearSelection(cm, function (range) { return ({
	    from: Pos(range.from().line, 0), to: range.from()
	  }); }); },
	  delWrappedLineLeft: function (cm) { return deleteNearSelection(cm, function (range) {
	    var top = cm.charCoords(range.head, "div").top + 5
	    var leftPos = cm.coordsChar({left: 0, top: top}, "div")
	    return {from: leftPos, to: range.from()}
	  }); },
	  delWrappedLineRight: function (cm) { return deleteNearSelection(cm, function (range) {
	    var top = cm.charCoords(range.head, "div").top + 5
	    var rightPos = cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div")
	    return {from: range.from(), to: rightPos }
	  }); },
	  undo: function (cm) { return cm.undo(); },
	  redo: function (cm) { return cm.redo(); },
	  undoSelection: function (cm) { return cm.undoSelection(); },
	  redoSelection: function (cm) { return cm.redoSelection(); },
	  goDocStart: function (cm) { return cm.extendSelection(Pos(cm.firstLine(), 0)); },
	  goDocEnd: function (cm) { return cm.extendSelection(Pos(cm.lastLine())); },
	  goLineStart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStart(cm, range.head.line); },
	    {origin: "+move", bias: 1}
	  ); },
	  goLineStartSmart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStartSmart(cm, range.head); },
	    {origin: "+move", bias: 1}
	  ); },
	  goLineEnd: function (cm) { return cm.extendSelectionsBy(function (range) { return lineEnd(cm, range.head.line); },
	    {origin: "+move", bias: -1}
	  ); },
	  goLineRight: function (cm) { return cm.extendSelectionsBy(function (range) {
	    var top = cm.charCoords(range.head, "div").top + 5
	    return cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div")
	  }, sel_move); },
	  goLineLeft: function (cm) { return cm.extendSelectionsBy(function (range) {
	    var top = cm.charCoords(range.head, "div").top + 5
	    return cm.coordsChar({left: 0, top: top}, "div")
	  }, sel_move); },
	  goLineLeftSmart: function (cm) { return cm.extendSelectionsBy(function (range) {
	    var top = cm.charCoords(range.head, "div").top + 5
	    var pos = cm.coordsChar({left: 0, top: top}, "div")
	    if (pos.ch < cm.getLine(pos.line).search(/\S/)) { return lineStartSmart(cm, range.head) }
	    return pos
	  }, sel_move); },
	  goLineUp: function (cm) { return cm.moveV(-1, "line"); },
	  goLineDown: function (cm) { return cm.moveV(1, "line"); },
	  goPageUp: function (cm) { return cm.moveV(-1, "page"); },
	  goPageDown: function (cm) { return cm.moveV(1, "page"); },
	  goCharLeft: function (cm) { return cm.moveH(-1, "char"); },
	  goCharRight: function (cm) { return cm.moveH(1, "char"); },
	  goColumnLeft: function (cm) { return cm.moveH(-1, "column"); },
	  goColumnRight: function (cm) { return cm.moveH(1, "column"); },
	  goWordLeft: function (cm) { return cm.moveH(-1, "word"); },
	  goGroupRight: function (cm) { return cm.moveH(1, "group"); },
	  goGroupLeft: function (cm) { return cm.moveH(-1, "group"); },
	  goWordRight: function (cm) { return cm.moveH(1, "word"); },
	  delCharBefore: function (cm) { return cm.deleteH(-1, "char"); },
	  delCharAfter: function (cm) { return cm.deleteH(1, "char"); },
	  delWordBefore: function (cm) { return cm.deleteH(-1, "word"); },
	  delWordAfter: function (cm) { return cm.deleteH(1, "word"); },
	  delGroupBefore: function (cm) { return cm.deleteH(-1, "group"); },
	  delGroupAfter: function (cm) { return cm.deleteH(1, "group"); },
	  indentAuto: function (cm) { return cm.indentSelection("smart"); },
	  indentMore: function (cm) { return cm.indentSelection("add"); },
	  indentLess: function (cm) { return cm.indentSelection("subtract"); },
	  insertTab: function (cm) { return cm.replaceSelection("\t"); },
	  insertSoftTab: function (cm) {
	    var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize
	    for (var i = 0; i < ranges.length; i++) {
	      var pos = ranges[i].from()
	      var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize)
	      spaces.push(spaceStr(tabSize - col % tabSize))
	    }
	    cm.replaceSelections(spaces)
	  },
	  defaultTab: function (cm) {
	    if (cm.somethingSelected()) { cm.indentSelection("add") }
	    else { cm.execCommand("insertTab") }
	  },
	  // Swap the two chars left and right of each selection's head.
	  // Move cursor behind the two swapped characters afterwards.
	  //
	  // Doesn't consider line feeds a character.
	  // Doesn't scan more than one line above to find a character.
	  // Doesn't do anything on an empty line.
	  // Doesn't do anything with non-empty selections.
	  transposeChars: function (cm) { return runInOp(cm, function () {
	    var ranges = cm.listSelections(), newSel = []
	    for (var i = 0; i < ranges.length; i++) {
	      if (!ranges[i].empty()) { continue }
	      var cur = ranges[i].head, line = getLine(cm.doc, cur.line).text
	      if (line) {
	        if (cur.ch == line.length) { cur = new Pos(cur.line, cur.ch - 1) }
	        if (cur.ch > 0) {
	          cur = new Pos(cur.line, cur.ch + 1)
	          cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2),
	                          Pos(cur.line, cur.ch - 2), cur, "+transpose")
	        } else if (cur.line > cm.doc.first) {
	          var prev = getLine(cm.doc, cur.line - 1).text
	          if (prev) {
	            cur = new Pos(cur.line, 1)
	            cm.replaceRange(line.charAt(0) + cm.doc.lineSeparator() +
	                            prev.charAt(prev.length - 1),
	                            Pos(cur.line - 1, prev.length - 1), cur, "+transpose")
	          }
	        }
	      }
	      newSel.push(new Range(cur, cur))
	    }
	    cm.setSelections(newSel)
	  }); },
	  newlineAndIndent: function (cm) { return runInOp(cm, function () {
	    var sels = cm.listSelections()
	    for (var i = sels.length - 1; i >= 0; i--)
	      { cm.replaceRange(cm.doc.lineSeparator(), sels[i].anchor, sels[i].head, "+input") }
	    sels = cm.listSelections()
	    for (var i$1 = 0; i$1 < sels.length; i$1++)
	      { cm.indentLine(sels[i$1].from().line, null, true) }
	    ensureCursorVisible(cm)
	  }); },
	  openLine: function (cm) { return cm.replaceSelection("\n", "start"); },
	  toggleOverwrite: function (cm) { return cm.toggleOverwrite(); }
	}


	function lineStart(cm, lineN) {
	  var line = getLine(cm.doc, lineN)
	  var visual = visualLine(line)
	  if (visual != line) { lineN = lineNo(visual) }
	  var order = getOrder(visual)
	  var ch = !order ? 0 : order[0].level % 2 ? lineRight(visual) : lineLeft(visual)
	  return Pos(lineN, ch)
	}
	function lineEnd(cm, lineN) {
	  var merged, line = getLine(cm.doc, lineN)
	  while (merged = collapsedSpanAtEnd(line)) {
	    line = merged.find(1, true).line
	    lineN = null
	  }
	  var order = getOrder(line)
	  var ch = !order ? line.text.length : order[0].level % 2 ? lineLeft(line) : lineRight(line)
	  return Pos(lineN == null ? lineNo(line) : lineN, ch)
	}
	function lineStartSmart(cm, pos) {
	  var start = lineStart(cm, pos.line)
	  var line = getLine(cm.doc, start.line)
	  var order = getOrder(line)
	  if (!order || order[0].level == 0) {
	    var firstNonWS = Math.max(0, line.text.search(/\S/))
	    var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch
	    return Pos(start.line, inWS ? 0 : firstNonWS)
	  }
	  return start
	}

	// Run a handler that was bound to a key.
	function doHandleBinding(cm, bound, dropShift) {
	  if (typeof bound == "string") {
	    bound = commands[bound]
	    if (!bound) { return false }
	  }
	  // Ensure previous input has been read, so that the handler sees a
	  // consistent view of the document
	  cm.display.input.ensurePolled()
	  var prevShift = cm.display.shift, done = false
	  try {
	    if (cm.isReadOnly()) { cm.state.suppressEdits = true }
	    if (dropShift) { cm.display.shift = false }
	    done = bound(cm) != Pass
	  } finally {
	    cm.display.shift = prevShift
	    cm.state.suppressEdits = false
	  }
	  return done
	}

	function lookupKeyForEditor(cm, name, handle) {
	  for (var i = 0; i < cm.state.keyMaps.length; i++) {
	    var result = lookupKey(name, cm.state.keyMaps[i], handle, cm)
	    if (result) { return result }
	  }
	  return (cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm))
	    || lookupKey(name, cm.options.keyMap, handle, cm)
	}

	var stopSeq = new Delayed
	function dispatchKey(cm, name, e, handle) {
	  var seq = cm.state.keySeq
	  if (seq) {
	    if (isModifierKey(name)) { return "handled" }
	    stopSeq.set(50, function () {
	      if (cm.state.keySeq == seq) {
	        cm.state.keySeq = null
	        cm.display.input.reset()
	      }
	    })
	    name = seq + " " + name
	  }
	  var result = lookupKeyForEditor(cm, name, handle)

	  if (result == "multi")
	    { cm.state.keySeq = name }
	  if (result == "handled")
	    { signalLater(cm, "keyHandled", cm, name, e) }

	  if (result == "handled" || result == "multi") {
	    e_preventDefault(e)
	    restartBlink(cm)
	  }

	  if (seq && !result && /\'$/.test(name)) {
	    e_preventDefault(e)
	    return true
	  }
	  return !!result
	}

	// Handle a key from the keydown event.
	function handleKeyBinding(cm, e) {
	  var name = keyName(e, true)
	  if (!name) { return false }

	  if (e.shiftKey && !cm.state.keySeq) {
	    // First try to resolve full name (including 'Shift-'). Failing
	    // that, see if there is a cursor-motion command (starting with
	    // 'go') bound to the keyname without 'Shift-'.
	    return dispatchKey(cm, "Shift-" + name, e, function (b) { return doHandleBinding(cm, b, true); })
	        || dispatchKey(cm, name, e, function (b) {
	             if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
	               { return doHandleBinding(cm, b) }
	           })
	  } else {
	    return dispatchKey(cm, name, e, function (b) { return doHandleBinding(cm, b); })
	  }
	}

	// Handle a key from the keypress event
	function handleCharBinding(cm, e, ch) {
	  return dispatchKey(cm, "'" + ch + "'", e, function (b) { return doHandleBinding(cm, b, true); })
	}

	var lastStoppedKey = null
	function onKeyDown(e) {
	  var cm = this
	  cm.curOp.focus = activeElt()
	  if (signalDOMEvent(cm, e)) { return }
	  // IE does strange things with escape.
	  if (ie && ie_version < 11 && e.keyCode == 27) { e.returnValue = false }
	  var code = e.keyCode
	  cm.display.shift = code == 16 || e.shiftKey
	  var handled = handleKeyBinding(cm, e)
	  if (presto) {
	    lastStoppedKey = handled ? code : null
	    // Opera has no cut event... we try to at least catch the key combo
	    if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey))
	      { cm.replaceSelection("", null, "cut") }
	  }

	  // Turn mouse into crosshair when Alt is held on Mac.
	  if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
	    { showCrossHair(cm) }
	}

	function showCrossHair(cm) {
	  var lineDiv = cm.display.lineDiv
	  addClass(lineDiv, "CodeMirror-crosshair")

	  function up(e) {
	    if (e.keyCode == 18 || !e.altKey) {
	      rmClass(lineDiv, "CodeMirror-crosshair")
	      off(document, "keyup", up)
	      off(document, "mouseover", up)
	    }
	  }
	  on(document, "keyup", up)
	  on(document, "mouseover", up)
	}

	function onKeyUp(e) {
	  if (e.keyCode == 16) { this.doc.sel.shift = false }
	  signalDOMEvent(this, e)
	}

	function onKeyPress(e) {
	  var cm = this
	  if (eventInWidget(cm.display, e) || signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) { return }
	  var keyCode = e.keyCode, charCode = e.charCode
	  if (presto && keyCode == lastStoppedKey) {lastStoppedKey = null; e_preventDefault(e); return}
	  if ((presto && (!e.which || e.which < 10)) && handleKeyBinding(cm, e)) { return }
	  var ch = String.fromCharCode(charCode == null ? keyCode : charCode)
	  // Some browsers fire keypress events for backspace
	  if (ch == "\x08") { return }
	  if (handleCharBinding(cm, e, ch)) { return }
	  cm.display.input.onKeyPress(e)
	}

	// A mouse down can be a single click, double click, triple click,
	// start of selection drag, start of text drag, new cursor
	// (ctrl-click), rectangle drag (alt-drag), or xwin
	// middle-click-paste. Or it might be a click on something we should
	// not interfere with, such as a scrollbar or widget.
	function onMouseDown(e) {
	  var cm = this, display = cm.display
	  if (signalDOMEvent(cm, e) || display.activeTouch && display.input.supportsTouch()) { return }
	  display.input.ensurePolled()
	  display.shift = e.shiftKey

	  if (eventInWidget(display, e)) {
	    if (!webkit) {
	      // Briefly turn off draggability, to allow widgets to do
	      // normal dragging things.
	      display.scroller.draggable = false
	      setTimeout(function () { return display.scroller.draggable = true; }, 100)
	    }
	    return
	  }
	  if (clickInGutter(cm, e)) { return }
	  var start = posFromMouse(cm, e)
	  window.focus()

	  switch (e_button(e)) {
	  case 1:
	    // #3261: make sure, that we're not starting a second selection
	    if (cm.state.selectingText)
	      { cm.state.selectingText(e) }
	    else if (start)
	      { leftButtonDown(cm, e, start) }
	    else if (e_target(e) == display.scroller)
	      { e_preventDefault(e) }
	    break
	  case 2:
	    if (webkit) { cm.state.lastMiddleDown = +new Date }
	    if (start) { extendSelection(cm.doc, start) }
	    setTimeout(function () { return display.input.focus(); }, 20)
	    e_preventDefault(e)
	    break
	  case 3:
	    if (captureRightClick) { onContextMenu(cm, e) }
	    else { delayBlurEvent(cm) }
	    break
	  }
	}

	var lastClick;
	var lastDoubleClick;
	function leftButtonDown(cm, e, start) {
	  if (ie) { setTimeout(bind(ensureFocus, cm), 0) }
	  else { cm.curOp.focus = activeElt() }

	  var now = +new Date, type
	  if (lastDoubleClick && lastDoubleClick.time > now - 400 && cmp(lastDoubleClick.pos, start) == 0) {
	    type = "triple"
	  } else if (lastClick && lastClick.time > now - 400 && cmp(lastClick.pos, start) == 0) {
	    type = "double"
	    lastDoubleClick = {time: now, pos: start}
	  } else {
	    type = "single"
	    lastClick = {time: now, pos: start}
	  }

	  var sel = cm.doc.sel, modifier = mac ? e.metaKey : e.ctrlKey, contained
	  if (cm.options.dragDrop && dragAndDrop && !cm.isReadOnly() &&
	      type == "single" && (contained = sel.contains(start)) > -1 &&
	      (cmp((contained = sel.ranges[contained]).from(), start) < 0 || start.xRel > 0) &&
	      (cmp(contained.to(), start) > 0 || start.xRel < 0))
	    { leftButtonStartDrag(cm, e, start, modifier) }
	  else
	    { leftButtonSelect(cm, e, start, type, modifier) }
	}

	// Start a text drag. When it ends, see if any dragging actually
	// happen, and treat as a click if it didn't.
	function leftButtonStartDrag(cm, e, start, modifier) {
	  var display = cm.display, startTime = +new Date
	  var dragEnd = operation(cm, function (e2) {
	    if (webkit) { display.scroller.draggable = false }
	    cm.state.draggingText = false
	    off(document, "mouseup", dragEnd)
	    off(display.scroller, "drop", dragEnd)
	    if (Math.abs(e.clientX - e2.clientX) + Math.abs(e.clientY - e2.clientY) < 10) {
	      e_preventDefault(e2)
	      if (!modifier && +new Date - 200 < startTime)
	        { extendSelection(cm.doc, start) }
	      // Work around unexplainable focus problem in IE9 (#2127) and Chrome (#3081)
	      if (webkit || ie && ie_version == 9)
	        { setTimeout(function () {document.body.focus(); display.input.focus()}, 20) }
	      else
	        { display.input.focus() }
	    }
	  })
	  // Let the drag handler handle this.
	  if (webkit) { display.scroller.draggable = true }
	  cm.state.draggingText = dragEnd
	  dragEnd.copy = mac ? e.altKey : e.ctrlKey
	  // IE's approach to draggable
	  if (display.scroller.dragDrop) { display.scroller.dragDrop() }
	  on(document, "mouseup", dragEnd)
	  on(display.scroller, "drop", dragEnd)
	}

	// Normal selection, as opposed to text dragging.
	function leftButtonSelect(cm, e, start, type, addNew) {
	  var display = cm.display, doc = cm.doc
	  e_preventDefault(e)

	  var ourRange, ourIndex, startSel = doc.sel, ranges = startSel.ranges
	  if (addNew && !e.shiftKey) {
	    ourIndex = doc.sel.contains(start)
	    if (ourIndex > -1)
	      { ourRange = ranges[ourIndex] }
	    else
	      { ourRange = new Range(start, start) }
	  } else {
	    ourRange = doc.sel.primary()
	    ourIndex = doc.sel.primIndex
	  }

	  if (chromeOS ? e.shiftKey && e.metaKey : e.altKey) {
	    type = "rect"
	    if (!addNew) { ourRange = new Range(start, start) }
	    start = posFromMouse(cm, e, true, true)
	    ourIndex = -1
	  } else if (type == "double") {
	    var word = cm.findWordAt(start)
	    if (cm.display.shift || doc.extend)
	      { ourRange = extendRange(doc, ourRange, word.anchor, word.head) }
	    else
	      { ourRange = word }
	  } else if (type == "triple") {
	    var line = new Range(Pos(start.line, 0), clipPos(doc, Pos(start.line + 1, 0)))
	    if (cm.display.shift || doc.extend)
	      { ourRange = extendRange(doc, ourRange, line.anchor, line.head) }
	    else
	      { ourRange = line }
	  } else {
	    ourRange = extendRange(doc, ourRange, start)
	  }

	  if (!addNew) {
	    ourIndex = 0
	    setSelection(doc, new Selection([ourRange], 0), sel_mouse)
	    startSel = doc.sel
	  } else if (ourIndex == -1) {
	    ourIndex = ranges.length
	    setSelection(doc, normalizeSelection(ranges.concat([ourRange]), ourIndex),
	                 {scroll: false, origin: "*mouse"})
	  } else if (ranges.length > 1 && ranges[ourIndex].empty() && type == "single" && !e.shiftKey) {
	    setSelection(doc, normalizeSelection(ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0),
	                 {scroll: false, origin: "*mouse"})
	    startSel = doc.sel
	  } else {
	    replaceOneSelection(doc, ourIndex, ourRange, sel_mouse)
	  }

	  var lastPos = start
	  function extendTo(pos) {
	    if (cmp(lastPos, pos) == 0) { return }
	    lastPos = pos

	    if (type == "rect") {
	      var ranges = [], tabSize = cm.options.tabSize
	      var startCol = countColumn(getLine(doc, start.line).text, start.ch, tabSize)
	      var posCol = countColumn(getLine(doc, pos.line).text, pos.ch, tabSize)
	      var left = Math.min(startCol, posCol), right = Math.max(startCol, posCol)
	      for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line));
	           line <= end; line++) {
	        var text = getLine(doc, line).text, leftPos = findColumn(text, left, tabSize)
	        if (left == right)
	          { ranges.push(new Range(Pos(line, leftPos), Pos(line, leftPos))) }
	        else if (text.length > leftPos)
	          { ranges.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize)))) }
	      }
	      if (!ranges.length) { ranges.push(new Range(start, start)) }
	      setSelection(doc, normalizeSelection(startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex),
	                   {origin: "*mouse", scroll: false})
	      cm.scrollIntoView(pos)
	    } else {
	      var oldRange = ourRange
	      var anchor = oldRange.anchor, head = pos
	      if (type != "single") {
	        var range
	        if (type == "double")
	          { range = cm.findWordAt(pos) }
	        else
	          { range = new Range(Pos(pos.line, 0), clipPos(doc, Pos(pos.line + 1, 0))) }
	        if (cmp(range.anchor, anchor) > 0) {
	          head = range.head
	          anchor = minPos(oldRange.from(), range.anchor)
	        } else {
	          head = range.anchor
	          anchor = maxPos(oldRange.to(), range.head)
	        }
	      }
	      var ranges$1 = startSel.ranges.slice(0)
	      ranges$1[ourIndex] = new Range(clipPos(doc, anchor), head)
	      setSelection(doc, normalizeSelection(ranges$1, ourIndex), sel_mouse)
	    }
	  }

	  var editorSize = display.wrapper.getBoundingClientRect()
	  // Used to ensure timeout re-tries don't fire when another extend
	  // happened in the meantime (clearTimeout isn't reliable -- at
	  // least on Chrome, the timeouts still happen even when cleared,
	  // if the clear happens after their scheduled firing time).
	  var counter = 0

	  function extend(e) {
	    var curCount = ++counter
	    var cur = posFromMouse(cm, e, true, type == "rect")
	    if (!cur) { return }
	    if (cmp(cur, lastPos) != 0) {
	      cm.curOp.focus = activeElt()
	      extendTo(cur)
	      var visible = visibleLines(display, doc)
	      if (cur.line >= visible.to || cur.line < visible.from)
	        { setTimeout(operation(cm, function () {if (counter == curCount) { extend(e) }}), 150) }
	    } else {
	      var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0
	      if (outside) { setTimeout(operation(cm, function () {
	        if (counter != curCount) { return }
	        display.scroller.scrollTop += outside
	        extend(e)
	      }), 50) }
	    }
	  }

	  function done(e) {
	    cm.state.selectingText = false
	    counter = Infinity
	    e_preventDefault(e)
	    display.input.focus()
	    off(document, "mousemove", move)
	    off(document, "mouseup", up)
	    doc.history.lastSelOrigin = null
	  }

	  var move = operation(cm, function (e) {
	    if (!e_button(e)) { done(e) }
	    else { extend(e) }
	  })
	  var up = operation(cm, done)
	  cm.state.selectingText = up
	  on(document, "mousemove", move)
	  on(document, "mouseup", up)
	}


	// Determines whether an event happened in the gutter, and fires the
	// handlers for the corresponding event.
	function gutterEvent(cm, e, type, prevent) {
	  var mX, mY
	  try { mX = e.clientX; mY = e.clientY }
	  catch(e) { return false }
	  if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) { return false }
	  if (prevent) { e_preventDefault(e) }

	  var display = cm.display
	  var lineBox = display.lineDiv.getBoundingClientRect()

	  if (mY > lineBox.bottom || !hasHandler(cm, type)) { return e_defaultPrevented(e) }
	  mY -= lineBox.top - display.viewOffset

	  for (var i = 0; i < cm.options.gutters.length; ++i) {
	    var g = display.gutters.childNodes[i]
	    if (g && g.getBoundingClientRect().right >= mX) {
	      var line = lineAtHeight(cm.doc, mY)
	      var gutter = cm.options.gutters[i]
	      signal(cm, type, cm, line, gutter, e)
	      return e_defaultPrevented(e)
	    }
	  }
	}

	function clickInGutter(cm, e) {
	  return gutterEvent(cm, e, "gutterClick", true)
	}

	// CONTEXT MENU HANDLING

	// To make the context menu work, we need to briefly unhide the
	// textarea (making it as unobtrusive as possible) to let the
	// right-click take effect on it.
	function onContextMenu(cm, e) {
	  if (eventInWidget(cm.display, e) || contextMenuInGutter(cm, e)) { return }
	  if (signalDOMEvent(cm, e, "contextmenu")) { return }
	  cm.display.input.onContextMenu(e)
	}

	function contextMenuInGutter(cm, e) {
	  if (!hasHandler(cm, "gutterContextMenu")) { return false }
	  return gutterEvent(cm, e, "gutterContextMenu", false)
	}

	function themeChanged(cm) {
	  cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
	    cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-")
	  clearCaches(cm)
	}

	var Init = {toString: function(){return "CodeMirror.Init"}}

	var defaults = {}
	var optionHandlers = {}

	function defineOptions(CodeMirror) {
	  var optionHandlers = CodeMirror.optionHandlers

	  function option(name, deflt, handle, notOnInit) {
	    CodeMirror.defaults[name] = deflt
	    if (handle) { optionHandlers[name] =
	      notOnInit ? function (cm, val, old) {if (old != Init) { handle(cm, val, old) }} : handle }
	  }

	  CodeMirror.defineOption = option

	  // Passed to option handlers when there is no old value.
	  CodeMirror.Init = Init

	  // These two are, on init, called from the constructor because they
	  // have to be initialized before the editor can start at all.
	  option("value", "", function (cm, val) { return cm.setValue(val); }, true)
	  option("mode", null, function (cm, val) {
	    cm.doc.modeOption = val
	    loadMode(cm)
	  }, true)

	  option("indentUnit", 2, loadMode, true)
	  option("indentWithTabs", false)
	  option("smartIndent", true)
	  option("tabSize", 4, function (cm) {
	    resetModeState(cm)
	    clearCaches(cm)
	    regChange(cm)
	  }, true)
	  option("lineSeparator", null, function (cm, val) {
	    cm.doc.lineSep = val
	    if (!val) { return }
	    var newBreaks = [], lineNo = cm.doc.first
	    cm.doc.iter(function (line) {
	      for (var pos = 0;;) {
	        var found = line.text.indexOf(val, pos)
	        if (found == -1) { break }
	        pos = found + val.length
	        newBreaks.push(Pos(lineNo, found))
	      }
	      lineNo++
	    })
	    for (var i = newBreaks.length - 1; i >= 0; i--)
	      { replaceRange(cm.doc, val, newBreaks[i], Pos(newBreaks[i].line, newBreaks[i].ch + val.length)) }
	  })
	  option("specialChars", /[\u0000-\u001f\u007f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g, function (cm, val, old) {
	    cm.state.specialChars = new RegExp(val.source + (val.test("\t") ? "" : "|\t"), "g")
	    if (old != Init) { cm.refresh() }
	  })
	  option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function (cm) { return cm.refresh(); }, true)
	  option("electricChars", true)
	  option("inputStyle", mobile ? "contenteditable" : "textarea", function () {
	    throw new Error("inputStyle can not (yet) be changed in a running editor") // FIXME
	  }, true)
	  option("spellcheck", false, function (cm, val) { return cm.getInputField().spellcheck = val; }, true)
	  option("rtlMoveVisually", !windows)
	  option("wholeLineUpdateBefore", true)

	  option("theme", "default", function (cm) {
	    themeChanged(cm)
	    guttersChanged(cm)
	  }, true)
	  option("keyMap", "default", function (cm, val, old) {
	    var next = getKeyMap(val)
	    var prev = old != Init && getKeyMap(old)
	    if (prev && prev.detach) { prev.detach(cm, next) }
	    if (next.attach) { next.attach(cm, prev || null) }
	  })
	  option("extraKeys", null)

	  option("lineWrapping", false, wrappingChanged, true)
	  option("gutters", [], function (cm) {
	    setGuttersForLineNumbers(cm.options)
	    guttersChanged(cm)
	  }, true)
	  option("fixedGutter", true, function (cm, val) {
	    cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0"
	    cm.refresh()
	  }, true)
	  option("coverGutterNextToScrollbar", false, function (cm) { return updateScrollbars(cm); }, true)
	  option("scrollbarStyle", "native", function (cm) {
	    initScrollbars(cm)
	    updateScrollbars(cm)
	    cm.display.scrollbars.setScrollTop(cm.doc.scrollTop)
	    cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft)
	  }, true)
	  option("lineNumbers", false, function (cm) {
	    setGuttersForLineNumbers(cm.options)
	    guttersChanged(cm)
	  }, true)
	  option("firstLineNumber", 1, guttersChanged, true)
	  option("lineNumberFormatter", function (integer) { return integer; }, guttersChanged, true)
	  option("showCursorWhenSelecting", false, updateSelection, true)

	  option("resetSelectionOnContextMenu", true)
	  option("lineWiseCopyCut", true)

	  option("readOnly", false, function (cm, val) {
	    if (val == "nocursor") {
	      onBlur(cm)
	      cm.display.input.blur()
	      cm.display.disabled = true
	    } else {
	      cm.display.disabled = false
	    }
	    cm.display.input.readOnlyChanged(val)
	  })
	  option("disableInput", false, function (cm, val) {if (!val) { cm.display.input.reset() }}, true)
	  option("dragDrop", true, dragDropChanged)
	  option("allowDropFileTypes", null)

	  option("cursorBlinkRate", 530)
	  option("cursorScrollMargin", 0)
	  option("cursorHeight", 1, updateSelection, true)
	  option("singleCursorHeightPerLine", true, updateSelection, true)
	  option("workTime", 100)
	  option("workDelay", 100)
	  option("flattenSpans", true, resetModeState, true)
	  option("addModeClass", false, resetModeState, true)
	  option("pollInterval", 100)
	  option("undoDepth", 200, function (cm, val) { return cm.doc.history.undoDepth = val; })
	  option("historyEventDelay", 1250)
	  option("viewportMargin", 10, function (cm) { return cm.refresh(); }, true)
	  option("maxHighlightLength", 10000, resetModeState, true)
	  option("moveInputWithCursor", true, function (cm, val) {
	    if (!val) { cm.display.input.resetPosition() }
	  })

	  option("tabindex", null, function (cm, val) { return cm.display.input.getField().tabIndex = val || ""; })
	  option("autofocus", null)
	}

	function guttersChanged(cm) {
	  updateGutters(cm)
	  regChange(cm)
	  alignHorizontally(cm)
	}

	function dragDropChanged(cm, value, old) {
	  var wasOn = old && old != Init
	  if (!value != !wasOn) {
	    var funcs = cm.display.dragFunctions
	    var toggle = value ? on : off
	    toggle(cm.display.scroller, "dragstart", funcs.start)
	    toggle(cm.display.scroller, "dragenter", funcs.enter)
	    toggle(cm.display.scroller, "dragover", funcs.over)
	    toggle(cm.display.scroller, "dragleave", funcs.leave)
	    toggle(cm.display.scroller, "drop", funcs.drop)
	  }
	}

	function wrappingChanged(cm) {
	  if (cm.options.lineWrapping) {
	    addClass(cm.display.wrapper, "CodeMirror-wrap")
	    cm.display.sizer.style.minWidth = ""
	    cm.display.sizerWidth = null
	  } else {
	    rmClass(cm.display.wrapper, "CodeMirror-wrap")
	    findMaxLine(cm)
	  }
	  estimateLineHeights(cm)
	  regChange(cm)
	  clearCaches(cm)
	  setTimeout(function () { return updateScrollbars(cm); }, 100)
	}

	// A CodeMirror instance represents an editor. This is the object
	// that user code is usually dealing with.

	function CodeMirror(place, options) {
	  var this$1 = this;

	  if (!(this instanceof CodeMirror)) { return new CodeMirror(place, options) }

	  this.options = options = options ? copyObj(options) : {}
	  // Determine effective options based on given values and defaults.
	  copyObj(defaults, options, false)
	  setGuttersForLineNumbers(options)

	  var doc = options.value
	  if (typeof doc == "string") { doc = new Doc(doc, options.mode, null, options.lineSeparator) }
	  this.doc = doc

	  var input = new CodeMirror.inputStyles[options.inputStyle](this)
	  var display = this.display = new Display(place, doc, input)
	  display.wrapper.CodeMirror = this
	  updateGutters(this)
	  themeChanged(this)
	  if (options.lineWrapping)
	    { this.display.wrapper.className += " CodeMirror-wrap" }
	  initScrollbars(this)

	  this.state = {
	    keyMaps: [],  // stores maps added by addKeyMap
	    overlays: [], // highlighting overlays, as added by addOverlay
	    modeGen: 0,   // bumped when mode/overlay changes, used to invalidate highlighting info
	    overwrite: false,
	    delayingBlurEvent: false,
	    focused: false,
	    suppressEdits: false, // used to disable editing during key handlers when in readOnly mode
	    pasteIncoming: false, cutIncoming: false, // help recognize paste/cut edits in input.poll
	    selectingText: false,
	    draggingText: false,
	    highlight: new Delayed(), // stores highlight worker timeout
	    keySeq: null,  // Unfinished key sequence
	    specialChars: null
	  }

	  if (options.autofocus && !mobile) { display.input.focus() }

	  // Override magic textarea content restore that IE sometimes does
	  // on our hidden textarea on reload
	  if (ie && ie_version < 11) { setTimeout(function () { return this$1.display.input.reset(true); }, 20) }

	  registerEventHandlers(this)
	  ensureGlobalHandlers()

	  startOperation(this)
	  this.curOp.forceUpdate = true
	  attachDoc(this, doc)

	  if ((options.autofocus && !mobile) || this.hasFocus())
	    { setTimeout(bind(onFocus, this), 20) }
	  else
	    { onBlur(this) }

	  for (var opt in optionHandlers) { if (optionHandlers.hasOwnProperty(opt))
	    { optionHandlers[opt](this$1, options[opt], Init) } }
	  maybeUpdateLineNumberWidth(this)
	  if (options.finishInit) { options.finishInit(this) }
	  for (var i = 0; i < initHooks.length; ++i) { initHooks[i](this$1) }
	  endOperation(this)
	  // Suppress optimizelegibility in Webkit, since it breaks text
	  // measuring on line wrapping boundaries.
	  if (webkit && options.lineWrapping &&
	      getComputedStyle(display.lineDiv).textRendering == "optimizelegibility")
	    { display.lineDiv.style.textRendering = "auto" }
	}

	// The default configuration options.
	CodeMirror.defaults = defaults
	// Functions to run when options are changed.
	CodeMirror.optionHandlers = optionHandlers

	// Attach the necessary event handlers when initializing the editor
	function registerEventHandlers(cm) {
	  var d = cm.display
	  on(d.scroller, "mousedown", operation(cm, onMouseDown))
	  // Older IE's will not fire a second mousedown for a double click
	  if (ie && ie_version < 11)
	    { on(d.scroller, "dblclick", operation(cm, function (e) {
	      if (signalDOMEvent(cm, e)) { return }
	      var pos = posFromMouse(cm, e)
	      if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) { return }
	      e_preventDefault(e)
	      var word = cm.findWordAt(pos)
	      extendSelection(cm.doc, word.anchor, word.head)
	    })) }
	  else
	    { on(d.scroller, "dblclick", function (e) { return signalDOMEvent(cm, e) || e_preventDefault(e); }) }
	  // Some browsers fire contextmenu *after* opening the menu, at
	  // which point we can't mess with it anymore. Context menu is
	  // handled in onMouseDown for these browsers.
	  if (!captureRightClick) { on(d.scroller, "contextmenu", function (e) { return onContextMenu(cm, e); }) }

	  // Used to suppress mouse event handling when a touch happens
	  var touchFinished, prevTouch = {end: 0}
	  function finishTouch() {
	    if (d.activeTouch) {
	      touchFinished = setTimeout(function () { return d.activeTouch = null; }, 1000)
	      prevTouch = d.activeTouch
	      prevTouch.end = +new Date
	    }
	  }
	  function isMouseLikeTouchEvent(e) {
	    if (e.touches.length != 1) { return false }
	    var touch = e.touches[0]
	    return touch.radiusX <= 1 && touch.radiusY <= 1
	  }
	  function farAway(touch, other) {
	    if (other.left == null) { return true }
	    var dx = other.left - touch.left, dy = other.top - touch.top
	    return dx * dx + dy * dy > 20 * 20
	  }
	  on(d.scroller, "touchstart", function (e) {
	    if (!signalDOMEvent(cm, e) && !isMouseLikeTouchEvent(e)) {
	      d.input.ensurePolled()
	      clearTimeout(touchFinished)
	      var now = +new Date
	      d.activeTouch = {start: now, moved: false,
	                       prev: now - prevTouch.end <= 300 ? prevTouch : null}
	      if (e.touches.length == 1) {
	        d.activeTouch.left = e.touches[0].pageX
	        d.activeTouch.top = e.touches[0].pageY
	      }
	    }
	  })
	  on(d.scroller, "touchmove", function () {
	    if (d.activeTouch) { d.activeTouch.moved = true }
	  })
	  on(d.scroller, "touchend", function (e) {
	    var touch = d.activeTouch
	    if (touch && !eventInWidget(d, e) && touch.left != null &&
	        !touch.moved && new Date - touch.start < 300) {
	      var pos = cm.coordsChar(d.activeTouch, "page"), range
	      if (!touch.prev || farAway(touch, touch.prev)) // Single tap
	        { range = new Range(pos, pos) }
	      else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) // Double tap
	        { range = cm.findWordAt(pos) }
	      else // Triple tap
	        { range = new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0))) }
	      cm.setSelection(range.anchor, range.head)
	      cm.focus()
	      e_preventDefault(e)
	    }
	    finishTouch()
	  })
	  on(d.scroller, "touchcancel", finishTouch)

	  // Sync scrolling between fake scrollbars and real scrollable
	  // area, ensure viewport is updated when scrolling.
	  on(d.scroller, "scroll", function () {
	    if (d.scroller.clientHeight) {
	      setScrollTop(cm, d.scroller.scrollTop)
	      setScrollLeft(cm, d.scroller.scrollLeft, true)
	      signal(cm, "scroll", cm)
	    }
	  })

	  // Listen to wheel events in order to try and update the viewport on time.
	  on(d.scroller, "mousewheel", function (e) { return onScrollWheel(cm, e); })
	  on(d.scroller, "DOMMouseScroll", function (e) { return onScrollWheel(cm, e); })

	  // Prevent wrapper from ever scrolling
	  on(d.wrapper, "scroll", function () { return d.wrapper.scrollTop = d.wrapper.scrollLeft = 0; })

	  d.dragFunctions = {
	    enter: function (e) {if (!signalDOMEvent(cm, e)) { e_stop(e) }},
	    over: function (e) {if (!signalDOMEvent(cm, e)) { onDragOver(cm, e); e_stop(e) }},
	    start: function (e) { return onDragStart(cm, e); },
	    drop: operation(cm, onDrop),
	    leave: function (e) {if (!signalDOMEvent(cm, e)) { clearDragCursor(cm) }}
	  }

	  var inp = d.input.getField()
	  on(inp, "keyup", function (e) { return onKeyUp.call(cm, e); })
	  on(inp, "keydown", operation(cm, onKeyDown))
	  on(inp, "keypress", operation(cm, onKeyPress))
	  on(inp, "focus", function (e) { return onFocus(cm, e); })
	  on(inp, "blur", function (e) { return onBlur(cm, e); })
	}

	var initHooks = []
	CodeMirror.defineInitHook = function (f) { return initHooks.push(f); }

	// Indent the given line. The how parameter can be "smart",
	// "add"/null, "subtract", or "prev". When aggressive is false
	// (typically set to true for forced single-line indents), empty
	// lines are not indented, and places where the mode returns Pass
	// are left alone.
	function indentLine(cm, n, how, aggressive) {
	  var doc = cm.doc, state
	  if (how == null) { how = "add" }
	  if (how == "smart") {
	    // Fall back to "prev" when the mode doesn't have an indentation
	    // method.
	    if (!doc.mode.indent) { how = "prev" }
	    else { state = getStateBefore(cm, n) }
	  }

	  var tabSize = cm.options.tabSize
	  var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize)
	  if (line.stateAfter) { line.stateAfter = null }
	  var curSpaceString = line.text.match(/^\s*/)[0], indentation
	  if (!aggressive && !/\S/.test(line.text)) {
	    indentation = 0
	    how = "not"
	  } else if (how == "smart") {
	    indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text)
	    if (indentation == Pass || indentation > 150) {
	      if (!aggressive) { return }
	      how = "prev"
	    }
	  }
	  if (how == "prev") {
	    if (n > doc.first) { indentation = countColumn(getLine(doc, n-1).text, null, tabSize) }
	    else { indentation = 0 }
	  } else if (how == "add") {
	    indentation = curSpace + cm.options.indentUnit
	  } else if (how == "subtract") {
	    indentation = curSpace - cm.options.indentUnit
	  } else if (typeof how == "number") {
	    indentation = curSpace + how
	  }
	  indentation = Math.max(0, indentation)

	  var indentString = "", pos = 0
	  if (cm.options.indentWithTabs)
	    { for (var i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t"} }
	  if (pos < indentation) { indentString += spaceStr(indentation - pos) }

	  if (indentString != curSpaceString) {
	    replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input")
	    line.stateAfter = null
	    return true
	  } else {
	    // Ensure that, if the cursor was in the whitespace at the start
	    // of the line, it is moved to the end of that space.
	    for (var i$1 = 0; i$1 < doc.sel.ranges.length; i$1++) {
	      var range = doc.sel.ranges[i$1]
	      if (range.head.line == n && range.head.ch < curSpaceString.length) {
	        var pos$1 = Pos(n, curSpaceString.length)
	        replaceOneSelection(doc, i$1, new Range(pos$1, pos$1))
	        break
	      }
	    }
	  }
	}

	// This will be set to a {lineWise: bool, text: [string]} object, so
	// that, when pasting, we know what kind of selections the copied
	// text was made out of.
	var lastCopied = null

	function setLastCopied(newLastCopied) {
	  lastCopied = newLastCopied
	}

	function applyTextInput(cm, inserted, deleted, sel, origin) {
	  var doc = cm.doc
	  cm.display.shift = false
	  if (!sel) { sel = doc.sel }

	  var paste = cm.state.pasteIncoming || origin == "paste"
	  var textLines = splitLinesAuto(inserted), multiPaste = null
	  // When pasing N lines into N selections, insert one line per selection
	  if (paste && sel.ranges.length > 1) {
	    if (lastCopied && lastCopied.text.join("\n") == inserted) {
	      if (sel.ranges.length % lastCopied.text.length == 0) {
	        multiPaste = []
	        for (var i = 0; i < lastCopied.text.length; i++)
	          { multiPaste.push(doc.splitLines(lastCopied.text[i])) }
	      }
	    } else if (textLines.length == sel.ranges.length) {
	      multiPaste = map(textLines, function (l) { return [l]; })
	    }
	  }

	  var updateInput
	  // Normal behavior is to insert the new text into every selection
	  for (var i$1 = sel.ranges.length - 1; i$1 >= 0; i$1--) {
	    var range = sel.ranges[i$1]
	    var from = range.from(), to = range.to()
	    if (range.empty()) {
	      if (deleted && deleted > 0) // Handle deletion
	        { from = Pos(from.line, from.ch - deleted) }
	      else if (cm.state.overwrite && !paste) // Handle overwrite
	        { to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length)) }
	      else if (lastCopied && lastCopied.lineWise && lastCopied.text.join("\n") == inserted)
	        { from = to = Pos(from.line, 0) }
	    }
	    updateInput = cm.curOp.updateInput
	    var changeEvent = {from: from, to: to, text: multiPaste ? multiPaste[i$1 % multiPaste.length] : textLines,
	                       origin: origin || (paste ? "paste" : cm.state.cutIncoming ? "cut" : "+input")}
	    makeChange(cm.doc, changeEvent)
	    signalLater(cm, "inputRead", cm, changeEvent)
	  }
	  if (inserted && !paste)
	    { triggerElectric(cm, inserted) }

	  ensureCursorVisible(cm)
	  cm.curOp.updateInput = updateInput
	  cm.curOp.typing = true
	  cm.state.pasteIncoming = cm.state.cutIncoming = false
	}

	function handlePaste(e, cm) {
	  var pasted = e.clipboardData && e.clipboardData.getData("Text")
	  if (pasted) {
	    e.preventDefault()
	    if (!cm.isReadOnly() && !cm.options.disableInput)
	      { runInOp(cm, function () { return applyTextInput(cm, pasted, 0, null, "paste"); }) }
	    return true
	  }
	}

	function triggerElectric(cm, inserted) {
	  // When an 'electric' character is inserted, immediately trigger a reindent
	  if (!cm.options.electricChars || !cm.options.smartIndent) { return }
	  var sel = cm.doc.sel

	  for (var i = sel.ranges.length - 1; i >= 0; i--) {
	    var range = sel.ranges[i]
	    if (range.head.ch > 100 || (i && sel.ranges[i - 1].head.line == range.head.line)) { continue }
	    var mode = cm.getModeAt(range.head)
	    var indented = false
	    if (mode.electricChars) {
	      for (var j = 0; j < mode.electricChars.length; j++)
	        { if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
	          indented = indentLine(cm, range.head.line, "smart")
	          break
	        } }
	    } else if (mode.electricInput) {
	      if (mode.electricInput.test(getLine(cm.doc, range.head.line).text.slice(0, range.head.ch)))
	        { indented = indentLine(cm, range.head.line, "smart") }
	    }
	    if (indented) { signalLater(cm, "electricInput", cm, range.head.line) }
	  }
	}

	function copyableRanges(cm) {
	  var text = [], ranges = []
	  for (var i = 0; i < cm.doc.sel.ranges.length; i++) {
	    var line = cm.doc.sel.ranges[i].head.line
	    var lineRange = {anchor: Pos(line, 0), head: Pos(line + 1, 0)}
	    ranges.push(lineRange)
	    text.push(cm.getRange(lineRange.anchor, lineRange.head))
	  }
	  return {text: text, ranges: ranges}
	}

	function disableBrowserMagic(field, spellcheck) {
	  field.setAttribute("autocorrect", "off")
	  field.setAttribute("autocapitalize", "off")
	  field.setAttribute("spellcheck", !!spellcheck)
	}

	function hiddenTextarea() {
	  var te = elt("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none")
	  var div = elt("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;")
	  // The textarea is kept positioned near the cursor to prevent the
	  // fact that it'll be scrolled into view on input from scrolling
	  // our fake cursor out of view. On webkit, when wrap=off, paste is
	  // very slow. So make the area wide instead.
	  if (webkit) { te.style.width = "1000px" }
	  else { te.setAttribute("wrap", "off") }
	  // If border: 0; -- iOS fails to open keyboard (issue #1287)
	  if (ios) { te.style.border = "1px solid black" }
	  disableBrowserMagic(te)
	  return div
	}

	// The publicly visible API. Note that methodOp(f) means
	// 'wrap f in an operation, performed on its `this` parameter'.

	// This is not the complete set of editor methods. Most of the
	// methods defined on the Doc type are also injected into
	// CodeMirror.prototype, for backwards compatibility and
	// convenience.

	function addEditorMethods(CodeMirror) {
	  var optionHandlers = CodeMirror.optionHandlers

	  var helpers = CodeMirror.helpers = {}

	  CodeMirror.prototype = {
	    constructor: CodeMirror,
	    focus: function(){window.focus(); this.display.input.focus()},

	    setOption: function(option, value) {
	      var options = this.options, old = options[option]
	      if (options[option] == value && option != "mode") { return }
	      options[option] = value
	      if (optionHandlers.hasOwnProperty(option))
	        { operation(this, optionHandlers[option])(this, value, old) }
	      signal(this, "optionChange", this, option)
	    },

	    getOption: function(option) {return this.options[option]},
	    getDoc: function() {return this.doc},

	    addKeyMap: function(map, bottom) {
	      this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map))
	    },
	    removeKeyMap: function(map) {
	      var maps = this.state.keyMaps
	      for (var i = 0; i < maps.length; ++i)
	        { if (maps[i] == map || maps[i].name == map) {
	          maps.splice(i, 1)
	          return true
	        } }
	    },

	    addOverlay: methodOp(function(spec, options) {
	      var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec)
	      if (mode.startState) { throw new Error("Overlays may not be stateful.") }
	      insertSorted(this.state.overlays,
	                   {mode: mode, modeSpec: spec, opaque: options && options.opaque,
	                    priority: (options && options.priority) || 0},
	                   function (overlay) { return overlay.priority; })
	      this.state.modeGen++
	      regChange(this)
	    }),
	    removeOverlay: methodOp(function(spec) {
	      var this$1 = this;

	      var overlays = this.state.overlays
	      for (var i = 0; i < overlays.length; ++i) {
	        var cur = overlays[i].modeSpec
	        if (cur == spec || typeof spec == "string" && cur.name == spec) {
	          overlays.splice(i, 1)
	          this$1.state.modeGen++
	          regChange(this$1)
	          return
	        }
	      }
	    }),

	    indentLine: methodOp(function(n, dir, aggressive) {
	      if (typeof dir != "string" && typeof dir != "number") {
	        if (dir == null) { dir = this.options.smartIndent ? "smart" : "prev" }
	        else { dir = dir ? "add" : "subtract" }
	      }
	      if (isLine(this.doc, n)) { indentLine(this, n, dir, aggressive) }
	    }),
	    indentSelection: methodOp(function(how) {
	      var this$1 = this;

	      var ranges = this.doc.sel.ranges, end = -1
	      for (var i = 0; i < ranges.length; i++) {
	        var range = ranges[i]
	        if (!range.empty()) {
	          var from = range.from(), to = range.to()
	          var start = Math.max(end, from.line)
	          end = Math.min(this$1.lastLine(), to.line - (to.ch ? 0 : 1)) + 1
	          for (var j = start; j < end; ++j)
	            { indentLine(this$1, j, how) }
	          var newRanges = this$1.doc.sel.ranges
	          if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i].from().ch > 0)
	            { replaceOneSelection(this$1.doc, i, new Range(from, newRanges[i].to()), sel_dontScroll) }
	        } else if (range.head.line > end) {
	          indentLine(this$1, range.head.line, how, true)
	          end = range.head.line
	          if (i == this$1.doc.sel.primIndex) { ensureCursorVisible(this$1) }
	        }
	      }
	    }),

	    // Fetch the parser token for a given character. Useful for hacks
	    // that want to inspect the mode state (say, for completion).
	    getTokenAt: function(pos, precise) {
	      return takeToken(this, pos, precise)
	    },

	    getLineTokens: function(line, precise) {
	      return takeToken(this, Pos(line), precise, true)
	    },

	    getTokenTypeAt: function(pos) {
	      pos = clipPos(this.doc, pos)
	      var styles = getLineStyles(this, getLine(this.doc, pos.line))
	      var before = 0, after = (styles.length - 1) / 2, ch = pos.ch
	      var type
	      if (ch == 0) { type = styles[2] }
	      else { for (;;) {
	        var mid = (before + after) >> 1
	        if ((mid ? styles[mid * 2 - 1] : 0) >= ch) { after = mid }
	        else if (styles[mid * 2 + 1] < ch) { before = mid + 1 }
	        else { type = styles[mid * 2 + 2]; break }
	      } }
	      var cut = type ? type.indexOf("overlay ") : -1
	      return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1)
	    },

	    getModeAt: function(pos) {
	      var mode = this.doc.mode
	      if (!mode.innerMode) { return mode }
	      return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode
	    },

	    getHelper: function(pos, type) {
	      return this.getHelpers(pos, type)[0]
	    },

	    getHelpers: function(pos, type) {
	      var this$1 = this;

	      var found = []
	      if (!helpers.hasOwnProperty(type)) { return found }
	      var help = helpers[type], mode = this.getModeAt(pos)
	      if (typeof mode[type] == "string") {
	        if (help[mode[type]]) { found.push(help[mode[type]]) }
	      } else if (mode[type]) {
	        for (var i = 0; i < mode[type].length; i++) {
	          var val = help[mode[type][i]]
	          if (val) { found.push(val) }
	        }
	      } else if (mode.helperType && help[mode.helperType]) {
	        found.push(help[mode.helperType])
	      } else if (help[mode.name]) {
	        found.push(help[mode.name])
	      }
	      for (var i$1 = 0; i$1 < help._global.length; i$1++) {
	        var cur = help._global[i$1]
	        if (cur.pred(mode, this$1) && indexOf(found, cur.val) == -1)
	          { found.push(cur.val) }
	      }
	      return found
	    },

	    getStateAfter: function(line, precise) {
	      var doc = this.doc
	      line = clipLine(doc, line == null ? doc.first + doc.size - 1: line)
	      return getStateBefore(this, line + 1, precise)
	    },

	    cursorCoords: function(start, mode) {
	      var pos, range = this.doc.sel.primary()
	      if (start == null) { pos = range.head }
	      else if (typeof start == "object") { pos = clipPos(this.doc, start) }
	      else { pos = start ? range.from() : range.to() }
	      return cursorCoords(this, pos, mode || "page")
	    },

	    charCoords: function(pos, mode) {
	      return charCoords(this, clipPos(this.doc, pos), mode || "page")
	    },

	    coordsChar: function(coords, mode) {
	      coords = fromCoordSystem(this, coords, mode || "page")
	      return coordsChar(this, coords.left, coords.top)
	    },

	    lineAtHeight: function(height, mode) {
	      height = fromCoordSystem(this, {top: height, left: 0}, mode || "page").top
	      return lineAtHeight(this.doc, height + this.display.viewOffset)
	    },
	    heightAtLine: function(line, mode, includeWidgets) {
	      var end = false, lineObj
	      if (typeof line == "number") {
	        var last = this.doc.first + this.doc.size - 1
	        if (line < this.doc.first) { line = this.doc.first }
	        else if (line > last) { line = last; end = true }
	        lineObj = getLine(this.doc, line)
	      } else {
	        lineObj = line
	      }
	      return intoCoordSystem(this, lineObj, {top: 0, left: 0}, mode || "page", includeWidgets).top +
	        (end ? this.doc.height - heightAtLine(lineObj) : 0)
	    },

	    defaultTextHeight: function() { return textHeight(this.display) },
	    defaultCharWidth: function() { return charWidth(this.display) },

	    getViewport: function() { return {from: this.display.viewFrom, to: this.display.viewTo}},

	    addWidget: function(pos, node, scroll, vert, horiz) {
	      var display = this.display
	      pos = cursorCoords(this, clipPos(this.doc, pos))
	      var top = pos.bottom, left = pos.left
	      node.style.position = "absolute"
	      node.setAttribute("cm-ignore-events", "true")
	      this.display.input.setUneditable(node)
	      display.sizer.appendChild(node)
	      if (vert == "over") {
	        top = pos.top
	      } else if (vert == "above" || vert == "near") {
	        var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
	        hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth)
	        // Default to positioning above (if specified and possible); otherwise default to positioning below
	        if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
	          { top = pos.top - node.offsetHeight }
	        else if (pos.bottom + node.offsetHeight <= vspace)
	          { top = pos.bottom }
	        if (left + node.offsetWidth > hspace)
	          { left = hspace - node.offsetWidth }
	      }
	      node.style.top = top + "px"
	      node.style.left = node.style.right = ""
	      if (horiz == "right") {
	        left = display.sizer.clientWidth - node.offsetWidth
	        node.style.right = "0px"
	      } else {
	        if (horiz == "left") { left = 0 }
	        else if (horiz == "middle") { left = (display.sizer.clientWidth - node.offsetWidth) / 2 }
	        node.style.left = left + "px"
	      }
	      if (scroll)
	        { scrollIntoView(this, left, top, left + node.offsetWidth, top + node.offsetHeight) }
	    },

	    triggerOnKeyDown: methodOp(onKeyDown),
	    triggerOnKeyPress: methodOp(onKeyPress),
	    triggerOnKeyUp: onKeyUp,

	    execCommand: function(cmd) {
	      if (commands.hasOwnProperty(cmd))
	        { return commands[cmd].call(null, this) }
	    },

	    triggerElectric: methodOp(function(text) { triggerElectric(this, text) }),

	    findPosH: function(from, amount, unit, visually) {
	      var this$1 = this;

	      var dir = 1
	      if (amount < 0) { dir = -1; amount = -amount }
	      var cur = clipPos(this.doc, from)
	      for (var i = 0; i < amount; ++i) {
	        cur = findPosH(this$1.doc, cur, dir, unit, visually)
	        if (cur.hitSide) { break }
	      }
	      return cur
	    },

	    moveH: methodOp(function(dir, unit) {
	      var this$1 = this;

	      this.extendSelectionsBy(function (range) {
	        if (this$1.display.shift || this$1.doc.extend || range.empty())
	          { return findPosH(this$1.doc, range.head, dir, unit, this$1.options.rtlMoveVisually) }
	        else
	          { return dir < 0 ? range.from() : range.to() }
	      }, sel_move)
	    }),

	    deleteH: methodOp(function(dir, unit) {
	      var sel = this.doc.sel, doc = this.doc
	      if (sel.somethingSelected())
	        { doc.replaceSelection("", null, "+delete") }
	      else
	        { deleteNearSelection(this, function (range) {
	          var other = findPosH(doc, range.head, dir, unit, false)
	          return dir < 0 ? {from: other, to: range.head} : {from: range.head, to: other}
	        }) }
	    }),

	    findPosV: function(from, amount, unit, goalColumn) {
	      var this$1 = this;

	      var dir = 1, x = goalColumn
	      if (amount < 0) { dir = -1; amount = -amount }
	      var cur = clipPos(this.doc, from)
	      for (var i = 0; i < amount; ++i) {
	        var coords = cursorCoords(this$1, cur, "div")
	        if (x == null) { x = coords.left }
	        else { coords.left = x }
	        cur = findPosV(this$1, coords, dir, unit)
	        if (cur.hitSide) { break }
	      }
	      return cur
	    },

	    moveV: methodOp(function(dir, unit) {
	      var this$1 = this;

	      var doc = this.doc, goals = []
	      var collapse = !this.display.shift && !doc.extend && doc.sel.somethingSelected()
	      doc.extendSelectionsBy(function (range) {
	        if (collapse)
	          { return dir < 0 ? range.from() : range.to() }
	        var headPos = cursorCoords(this$1, range.head, "div")
	        if (range.goalColumn != null) { headPos.left = range.goalColumn }
	        goals.push(headPos.left)
	        var pos = findPosV(this$1, headPos, dir, unit)
	        if (unit == "page" && range == doc.sel.primary())
	          { addToScrollPos(this$1, null, charCoords(this$1, pos, "div").top - headPos.top) }
	        return pos
	      }, sel_move)
	      if (goals.length) { for (var i = 0; i < doc.sel.ranges.length; i++)
	        { doc.sel.ranges[i].goalColumn = goals[i] } }
	    }),

	    // Find the word at the given position (as returned by coordsChar).
	    findWordAt: function(pos) {
	      var doc = this.doc, line = getLine(doc, pos.line).text
	      var start = pos.ch, end = pos.ch
	      if (line) {
	        var helper = this.getHelper(pos, "wordChars")
	        if ((pos.xRel < 0 || end == line.length) && start) { --start; } else { ++end }
	        var startChar = line.charAt(start)
	        var check = isWordChar(startChar, helper)
	          ? function (ch) { return isWordChar(ch, helper); }
	          : /\s/.test(startChar) ? function (ch) { return /\s/.test(ch); }
	          : function (ch) { return (!/\s/.test(ch) && !isWordChar(ch)); }
	        while (start > 0 && check(line.charAt(start - 1))) { --start }
	        while (end < line.length && check(line.charAt(end))) { ++end }
	      }
	      return new Range(Pos(pos.line, start), Pos(pos.line, end))
	    },

	    toggleOverwrite: function(value) {
	      if (value != null && value == this.state.overwrite) { return }
	      if (this.state.overwrite = !this.state.overwrite)
	        { addClass(this.display.cursorDiv, "CodeMirror-overwrite") }
	      else
	        { rmClass(this.display.cursorDiv, "CodeMirror-overwrite") }

	      signal(this, "overwriteToggle", this, this.state.overwrite)
	    },
	    hasFocus: function() { return this.display.input.getField() == activeElt() },
	    isReadOnly: function() { return !!(this.options.readOnly || this.doc.cantEdit) },

	    scrollTo: methodOp(function(x, y) {
	      if (x != null || y != null) { resolveScrollToPos(this) }
	      if (x != null) { this.curOp.scrollLeft = x }
	      if (y != null) { this.curOp.scrollTop = y }
	    }),
	    getScrollInfo: function() {
	      var scroller = this.display.scroller
	      return {left: scroller.scrollLeft, top: scroller.scrollTop,
	              height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
	              width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
	              clientHeight: displayHeight(this), clientWidth: displayWidth(this)}
	    },

	    scrollIntoView: methodOp(function(range, margin) {
	      if (range == null) {
	        range = {from: this.doc.sel.primary().head, to: null}
	        if (margin == null) { margin = this.options.cursorScrollMargin }
	      } else if (typeof range == "number") {
	        range = {from: Pos(range, 0), to: null}
	      } else if (range.from == null) {
	        range = {from: range, to: null}
	      }
	      if (!range.to) { range.to = range.from }
	      range.margin = margin || 0

	      if (range.from.line != null) {
	        resolveScrollToPos(this)
	        this.curOp.scrollToPos = range
	      } else {
	        var sPos = calculateScrollPos(this, Math.min(range.from.left, range.to.left),
	                                      Math.min(range.from.top, range.to.top) - range.margin,
	                                      Math.max(range.from.right, range.to.right),
	                                      Math.max(range.from.bottom, range.to.bottom) + range.margin)
	        this.scrollTo(sPos.scrollLeft, sPos.scrollTop)
	      }
	    }),

	    setSize: methodOp(function(width, height) {
	      var this$1 = this;

	      var interpret = function (val) { return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val; }
	      if (width != null) { this.display.wrapper.style.width = interpret(width) }
	      if (height != null) { this.display.wrapper.style.height = interpret(height) }
	      if (this.options.lineWrapping) { clearLineMeasurementCache(this) }
	      var lineNo = this.display.viewFrom
	      this.doc.iter(lineNo, this.display.viewTo, function (line) {
	        if (line.widgets) { for (var i = 0; i < line.widgets.length; i++)
	          { if (line.widgets[i].noHScroll) { regLineChange(this$1, lineNo, "widget"); break } } }
	        ++lineNo
	      })
	      this.curOp.forceUpdate = true
	      signal(this, "refresh", this)
	    }),

	    operation: function(f){return runInOp(this, f)},

	    refresh: methodOp(function() {
	      var oldHeight = this.display.cachedTextHeight
	      regChange(this)
	      this.curOp.forceUpdate = true
	      clearCaches(this)
	      this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop)
	      updateGutterSpace(this)
	      if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > .5)
	        { estimateLineHeights(this) }
	      signal(this, "refresh", this)
	    }),

	    swapDoc: methodOp(function(doc) {
	      var old = this.doc
	      old.cm = null
	      attachDoc(this, doc)
	      clearCaches(this)
	      this.display.input.reset()
	      this.scrollTo(doc.scrollLeft, doc.scrollTop)
	      this.curOp.forceScroll = true
	      signalLater(this, "swapDoc", this, old)
	      return old
	    }),

	    getInputField: function(){return this.display.input.getField()},
	    getWrapperElement: function(){return this.display.wrapper},
	    getScrollerElement: function(){return this.display.scroller},
	    getGutterElement: function(){return this.display.gutters}
	  }
	  eventMixin(CodeMirror)

	  CodeMirror.registerHelper = function(type, name, value) {
	    if (!helpers.hasOwnProperty(type)) { helpers[type] = CodeMirror[type] = {_global: []} }
	    helpers[type][name] = value
	  }
	  CodeMirror.registerGlobalHelper = function(type, name, predicate, value) {
	    CodeMirror.registerHelper(type, name, value)
	    helpers[type]._global.push({pred: predicate, val: value})
	  }
	}

	// Used for horizontal relative motion. Dir is -1 or 1 (left or
	// right), unit can be "char", "column" (like char, but doesn't
	// cross line boundaries), "word" (across next word), or "group" (to
	// the start of next group of word or non-word-non-whitespace
	// chars). The visually param controls whether, in right-to-left
	// text, direction 1 means to move towards the next index in the
	// string, or towards the character to the right of the current
	// position. The resulting position will have a hitSide=true
	// property if it reached the end of the document.
	function findPosH(doc, pos, dir, unit, visually) {
	  var line = pos.line, ch = pos.ch, origDir = dir
	  var lineObj = getLine(doc, line)
	  function findNextLine() {
	    var l = line + dir
	    if (l < doc.first || l >= doc.first + doc.size) { return false }
	    line = l
	    return lineObj = getLine(doc, l)
	  }
	  function moveOnce(boundToLine) {
	    var next = (visually ? moveVisually : moveLogically)(lineObj, ch, dir, true)
	    if (next == null) {
	      if (!boundToLine && findNextLine()) {
	        if (visually) { ch = (dir < 0 ? lineRight : lineLeft)(lineObj) }
	        else { ch = dir < 0 ? lineObj.text.length : 0 }
	      } else { return false }
	    } else { ch = next }
	    return true
	  }

	  if (unit == "char") {
	    moveOnce()
	  } else if (unit == "column") {
	    moveOnce(true)
	  } else if (unit == "word" || unit == "group") {
	    var sawType = null, group = unit == "group"
	    var helper = doc.cm && doc.cm.getHelper(pos, "wordChars")
	    for (var first = true;; first = false) {
	      if (dir < 0 && !moveOnce(!first)) { break }
	      var cur = lineObj.text.charAt(ch) || "\n"
	      var type = isWordChar(cur, helper) ? "w"
	        : group && cur == "\n" ? "n"
	        : !group || /\s/.test(cur) ? null
	        : "p"
	      if (group && !first && !type) { type = "s" }
	      if (sawType && sawType != type) {
	        if (dir < 0) {dir = 1; moveOnce()}
	        break
	      }

	      if (type) { sawType = type }
	      if (dir > 0 && !moveOnce(!first)) { break }
	    }
	  }
	  var result = skipAtomic(doc, Pos(line, ch), pos, origDir, true)
	  if (!cmp(pos, result)) { result.hitSide = true }
	  return result
	}

	// For relative vertical movement. Dir may be -1 or 1. Unit can be
	// "page" or "line". The resulting position will have a hitSide=true
	// property if it reached the end of the document.
	function findPosV(cm, pos, dir, unit) {
	  var doc = cm.doc, x = pos.left, y
	  if (unit == "page") {
	    var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight)
	    var moveAmount = Math.max(pageSize - .5 * textHeight(cm.display), 3)
	    y = (dir > 0 ? pos.bottom : pos.top) + dir * moveAmount

	  } else if (unit == "line") {
	    y = dir > 0 ? pos.bottom + 3 : pos.top - 3
	  }
	  var target
	  for (;;) {
	    target = coordsChar(cm, x, y)
	    if (!target.outside) { break }
	    if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break }
	    y += dir * 5
	  }
	  return target
	}

	// CONTENTEDITABLE INPUT STYLE

	var ContentEditableInput = function(cm) {
	  this.cm = cm
	  this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null
	  this.polling = new Delayed()
	  this.composing = null
	  this.gracePeriod = false
	  this.readDOMTimeout = null
	};

	ContentEditableInput.prototype.init = function (display) {
	    var this$1 = this;

	  var input = this, cm = input.cm
	  var div = input.div = display.lineDiv
	  disableBrowserMagic(div, cm.options.spellcheck)

	  on(div, "paste", function (e) {
	    if (signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }
	    // IE doesn't fire input events, so we schedule a read for the pasted content in this way
	    if (ie_version <= 11) { setTimeout(operation(cm, function () {
	      if (!input.pollContent()) { regChange(cm) }
	    }), 20) }
	  })

	  on(div, "compositionstart", function (e) {
	    this$1.composing = {data: e.data, done: false}
	  })
	  on(div, "compositionupdate", function (e) {
	    if (!this$1.composing) { this$1.composing = {data: e.data, done: false} }
	  })
	  on(div, "compositionend", function (e) {
	    if (this$1.composing) {
	      if (e.data != this$1.composing.data) { this$1.readFromDOMSoon() }
	      this$1.composing.done = true
	    }
	  })

	  on(div, "touchstart", function () { return input.forceCompositionEnd(); })

	  on(div, "input", function () {
	    if (!this$1.composing) { this$1.readFromDOMSoon() }
	  })

	  function onCopyCut(e) {
	    if (signalDOMEvent(cm, e)) { return }
	    if (cm.somethingSelected()) {
	      setLastCopied({lineWise: false, text: cm.getSelections()})
	      if (e.type == "cut") { cm.replaceSelection("", null, "cut") }
	    } else if (!cm.options.lineWiseCopyCut) {
	      return
	    } else {
	      var ranges = copyableRanges(cm)
	      setLastCopied({lineWise: true, text: ranges.text})
	      if (e.type == "cut") {
	        cm.operation(function () {
	          cm.setSelections(ranges.ranges, 0, sel_dontScroll)
	          cm.replaceSelection("", null, "cut")
	        })
	      }
	    }
	    if (e.clipboardData) {
	      e.clipboardData.clearData()
	      var content = lastCopied.text.join("\n")
	      // iOS exposes the clipboard API, but seems to discard content inserted into it
	      e.clipboardData.setData("Text", content)
	      if (e.clipboardData.getData("Text") == content) {
	        e.preventDefault()
	        return
	      }
	    }
	    // Old-fashioned briefly-focus-a-textarea hack
	    var kludge = hiddenTextarea(), te = kludge.firstChild
	    cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild)
	    te.value = lastCopied.text.join("\n")
	    var hadFocus = document.activeElement
	    selectInput(te)
	    setTimeout(function () {
	      cm.display.lineSpace.removeChild(kludge)
	      hadFocus.focus()
	      if (hadFocus == div) { input.showPrimarySelection() }
	    }, 50)
	  }
	  on(div, "copy", onCopyCut)
	  on(div, "cut", onCopyCut)
	};

	ContentEditableInput.prototype.prepareSelection = function () {
	  var result = prepareSelection(this.cm, false)
	  result.focus = this.cm.state.focused
	  return result
	};

	ContentEditableInput.prototype.showSelection = function (info, takeFocus) {
	  if (!info || !this.cm.display.view.length) { return }
	  if (info.focus || takeFocus) { this.showPrimarySelection() }
	  this.showMultipleSelections(info)
	};

	ContentEditableInput.prototype.showPrimarySelection = function () {
	  var sel = window.getSelection(), prim = this.cm.doc.sel.primary()
	  var curAnchor = domToPos(this.cm, sel.anchorNode, sel.anchorOffset)
	  var curFocus = domToPos(this.cm, sel.focusNode, sel.focusOffset)
	  if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad &&
	      cmp(minPos(curAnchor, curFocus), prim.from()) == 0 &&
	      cmp(maxPos(curAnchor, curFocus), prim.to()) == 0)
	    { return }

	  var start = posToDOM(this.cm, prim.from())
	  var end = posToDOM(this.cm, prim.to())
	  if (!start && !end) { return }

	  var view = this.cm.display.view
	  var old = sel.rangeCount && sel.getRangeAt(0)
	  if (!start) {
	    start = {node: view[0].measure.map[2], offset: 0}
	  } else if (!end) { // FIXME dangerously hacky
	    var measure = view[view.length - 1].measure
	    var map = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map
	    end = {node: map[map.length - 1], offset: map[map.length - 2] - map[map.length - 3]}
	  }

	  var rng
	  try { rng = range(start.node, start.offset, end.offset, end.node) }
	  catch(e) {} // Our model of the DOM might be outdated, in which case the range we try to set can be impossible
	  if (rng) {
	    if (!gecko && this.cm.state.focused) {
	      sel.collapse(start.node, start.offset)
	      if (!rng.collapsed) {
	        sel.removeAllRanges()
	        sel.addRange(rng)
	      }
	    } else {
	      sel.removeAllRanges()
	      sel.addRange(rng)
	    }
	    if (old && sel.anchorNode == null) { sel.addRange(old) }
	    else if (gecko) { this.startGracePeriod() }
	  }
	  this.rememberSelection()
	};

	ContentEditableInput.prototype.startGracePeriod = function () {
	    var this$1 = this;

	  clearTimeout(this.gracePeriod)
	  this.gracePeriod = setTimeout(function () {
	    this$1.gracePeriod = false
	    if (this$1.selectionChanged())
	      { this$1.cm.operation(function () { return this$1.cm.curOp.selectionChanged = true; }) }
	  }, 20)
	};

	ContentEditableInput.prototype.showMultipleSelections = function (info) {
	  removeChildrenAndAdd(this.cm.display.cursorDiv, info.cursors)
	  removeChildrenAndAdd(this.cm.display.selectionDiv, info.selection)
	};

	ContentEditableInput.prototype.rememberSelection = function () {
	  var sel = window.getSelection()
	  this.lastAnchorNode = sel.anchorNode; this.lastAnchorOffset = sel.anchorOffset
	  this.lastFocusNode = sel.focusNode; this.lastFocusOffset = sel.focusOffset
	};

	ContentEditableInput.prototype.selectionInEditor = function () {
	  var sel = window.getSelection()
	  if (!sel.rangeCount) { return false }
	  var node = sel.getRangeAt(0).commonAncestorContainer
	  return contains(this.div, node)
	};

	ContentEditableInput.prototype.focus = function () {
	  if (this.cm.options.readOnly != "nocursor") {
	    if (!this.selectionInEditor())
	      { this.showSelection(this.prepareSelection(), true) }
	    this.div.focus()
	  }
	};
	ContentEditableInput.prototype.blur = function () { this.div.blur() };
	ContentEditableInput.prototype.getField = function () { return this.div };

	ContentEditableInput.prototype.supportsTouch = function () { return true };

	ContentEditableInput.prototype.receivedFocus = function () {
	  var input = this
	  if (this.selectionInEditor())
	    { this.pollSelection() }
	  else
	    { runInOp(this.cm, function () { return input.cm.curOp.selectionChanged = true; }) }

	  function poll() {
	    if (input.cm.state.focused) {
	      input.pollSelection()
	      input.polling.set(input.cm.options.pollInterval, poll)
	    }
	  }
	  this.polling.set(this.cm.options.pollInterval, poll)
	};

	ContentEditableInput.prototype.selectionChanged = function () {
	  var sel = window.getSelection()
	  return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset ||
	    sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset
	};

	ContentEditableInput.prototype.pollSelection = function () {
	  if (!this.composing && this.readDOMTimeout == null && !this.gracePeriod && this.selectionChanged()) {
	    var sel = window.getSelection(), cm = this.cm
	    this.rememberSelection()
	    var anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset)
	    var head = domToPos(cm, sel.focusNode, sel.focusOffset)
	    if (anchor && head) { runInOp(cm, function () {
	      setSelection(cm.doc, simpleSelection(anchor, head), sel_dontScroll)
	      if (anchor.bad || head.bad) { cm.curOp.selectionChanged = true }
	    }) }
	  }
	};

	ContentEditableInput.prototype.pollContent = function () {
	  if (this.readDOMTimeout != null) {
	    clearTimeout(this.readDOMTimeout)
	    this.readDOMTimeout = null
	  }

	  var cm = this.cm, display = cm.display, sel = cm.doc.sel.primary()
	  var from = sel.from(), to = sel.to()
	  if (from.ch == 0 && from.line > cm.firstLine())
	    { from = Pos(from.line - 1, getLine(cm.doc, from.line - 1).length) }
	  if (to.ch == getLine(cm.doc, to.line).text.length && to.line < cm.lastLine())
	    { to = Pos(to.line + 1, 0) }
	  if (from.line < display.viewFrom || to.line > display.viewTo - 1) { return false }

	  var fromIndex, fromLine, fromNode
	  if (from.line == display.viewFrom || (fromIndex = findViewIndex(cm, from.line)) == 0) {
	    fromLine = lineNo(display.view[0].line)
	    fromNode = display.view[0].node
	  } else {
	    fromLine = lineNo(display.view[fromIndex].line)
	    fromNode = display.view[fromIndex - 1].node.nextSibling
	  }
	  var toIndex = findViewIndex(cm, to.line)
	  var toLine, toNode
	  if (toIndex == display.view.length - 1) {
	    toLine = display.viewTo - 1
	    toNode = display.lineDiv.lastChild
	  } else {
	    toLine = lineNo(display.view[toIndex + 1].line) - 1
	    toNode = display.view[toIndex + 1].node.previousSibling
	  }

	  if (!fromNode) { return false }
	  var newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine))
	  var oldText = getBetween(cm.doc, Pos(fromLine, 0), Pos(toLine, getLine(cm.doc, toLine).text.length))
	  while (newText.length > 1 && oldText.length > 1) {
	    if (lst(newText) == lst(oldText)) { newText.pop(); oldText.pop(); toLine-- }
	    else if (newText[0] == oldText[0]) { newText.shift(); oldText.shift(); fromLine++ }
	    else { break }
	  }

	  var cutFront = 0, cutEnd = 0
	  var newTop = newText[0], oldTop = oldText[0], maxCutFront = Math.min(newTop.length, oldTop.length)
	  while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront))
	    { ++cutFront }
	  var newBot = lst(newText), oldBot = lst(oldText)
	  var maxCutEnd = Math.min(newBot.length - (newText.length == 1 ? cutFront : 0),
	                           oldBot.length - (oldText.length == 1 ? cutFront : 0))
	  while (cutEnd < maxCutEnd &&
	         newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1))
	    { ++cutEnd }

	  newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd).replace(/^\u200b+/, "")
	  newText[0] = newText[0].slice(cutFront).replace(/\u200b+$/, "")

	  var chFrom = Pos(fromLine, cutFront)
	  var chTo = Pos(toLine, oldText.length ? lst(oldText).length - cutEnd : 0)
	  if (newText.length > 1 || newText[0] || cmp(chFrom, chTo)) {
	    replaceRange(cm.doc, newText, chFrom, chTo, "+input")
	    return true
	  }
	};

	ContentEditableInput.prototype.ensurePolled = function () {
	  this.forceCompositionEnd()
	};
	ContentEditableInput.prototype.reset = function () {
	  this.forceCompositionEnd()
	};
	ContentEditableInput.prototype.forceCompositionEnd = function () {
	  if (!this.composing) { return }
	  clearTimeout(this.readDOMTimeout)
	  this.composing = null
	  if (!this.pollContent()) { regChange(this.cm) }
	  this.div.blur()
	  this.div.focus()
	};
	ContentEditableInput.prototype.readFromDOMSoon = function () {
	    var this$1 = this;

	  if (this.readDOMTimeout != null) { return }
	  this.readDOMTimeout = setTimeout(function () {
	    this$1.readDOMTimeout = null
	    if (this$1.composing) {
	      if (this$1.composing.done) { this$1.composing = null }
	      else { return }
	    }
	    if (this$1.cm.isReadOnly() || !this$1.pollContent())
	      { runInOp(this$1.cm, function () { return regChange(this$1.cm); }) }
	  }, 80)
	};

	ContentEditableInput.prototype.setUneditable = function (node) {
	  node.contentEditable = "false"
	};

	ContentEditableInput.prototype.onKeyPress = function (e) {
	  e.preventDefault()
	  if (!this.cm.isReadOnly())
	    { operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0) }
	};

	ContentEditableInput.prototype.readOnlyChanged = function (val) {
	  this.div.contentEditable = String(val != "nocursor")
	};

	ContentEditableInput.prototype.onContextMenu = function () {};
	ContentEditableInput.prototype.resetPosition = function () {};

	ContentEditableInput.prototype.needsContentAttribute = true

	function posToDOM(cm, pos) {
	  var view = findViewForLine(cm, pos.line)
	  if (!view || view.hidden) { return null }
	  var line = getLine(cm.doc, pos.line)
	  var info = mapFromLineView(view, line, pos.line)

	  var order = getOrder(line), side = "left"
	  if (order) {
	    var partPos = getBidiPartAt(order, pos.ch)
	    side = partPos % 2 ? "right" : "left"
	  }
	  var result = nodeAndOffsetInLineMap(info.map, pos.ch, side)
	  result.offset = result.collapse == "right" ? result.end : result.start
	  return result
	}

	function badPos(pos, bad) { if (bad) { pos.bad = true; } return pos }

	function domTextBetween(cm, from, to, fromLine, toLine) {
	  var text = "", closing = false, lineSep = cm.doc.lineSeparator()
	  function recognizeMarker(id) { return function (marker) { return marker.id == id; } }
	  function walk(node) {
	    if (node.nodeType == 1) {
	      var cmText = node.getAttribute("cm-text")
	      if (cmText != null) {
	        if (cmText == "") { text += node.textContent.replace(/\u200b/g, "") }
	        else { text += cmText }
	        return
	      }
	      var markerID = node.getAttribute("cm-marker"), range
	      if (markerID) {
	        var found = cm.findMarks(Pos(fromLine, 0), Pos(toLine + 1, 0), recognizeMarker(+markerID))
	        if (found.length && (range = found[0].find()))
	          { text += getBetween(cm.doc, range.from, range.to).join(lineSep) }
	        return
	      }
	      if (node.getAttribute("contenteditable") == "false") { return }
	      for (var i = 0; i < node.childNodes.length; i++)
	        { walk(node.childNodes[i]) }
	      if (/^(pre|div|p)$/i.test(node.nodeName))
	        { closing = true }
	    } else if (node.nodeType == 3) {
	      var val = node.nodeValue
	      if (!val) { return }
	      if (closing) {
	        text += lineSep
	        closing = false
	      }
	      text += val
	    }
	  }
	  for (;;) {
	    walk(from)
	    if (from == to) { break }
	    from = from.nextSibling
	  }
	  return text
	}

	function domToPos(cm, node, offset) {
	  var lineNode
	  if (node == cm.display.lineDiv) {
	    lineNode = cm.display.lineDiv.childNodes[offset]
	    if (!lineNode) { return badPos(cm.clipPos(Pos(cm.display.viewTo - 1)), true) }
	    node = null; offset = 0
	  } else {
	    for (lineNode = node;; lineNode = lineNode.parentNode) {
	      if (!lineNode || lineNode == cm.display.lineDiv) { return null }
	      if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) { break }
	    }
	  }
	  for (var i = 0; i < cm.display.view.length; i++) {
	    var lineView = cm.display.view[i]
	    if (lineView.node == lineNode)
	      { return locateNodeInLineView(lineView, node, offset) }
	  }
	}

	function locateNodeInLineView(lineView, node, offset) {
	  var wrapper = lineView.text.firstChild, bad = false
	  if (!node || !contains(wrapper, node)) { return badPos(Pos(lineNo(lineView.line), 0), true) }
	  if (node == wrapper) {
	    bad = true
	    node = wrapper.childNodes[offset]
	    offset = 0
	    if (!node) {
	      var line = lineView.rest ? lst(lineView.rest) : lineView.line
	      return badPos(Pos(lineNo(line), line.text.length), bad)
	    }
	  }

	  var textNode = node.nodeType == 3 ? node : null, topNode = node
	  if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
	    textNode = node.firstChild
	    if (offset) { offset = textNode.nodeValue.length }
	  }
	  while (topNode.parentNode != wrapper) { topNode = topNode.parentNode }
	  var measure = lineView.measure, maps = measure.maps

	  function find(textNode, topNode, offset) {
	    for (var i = -1; i < (maps ? maps.length : 0); i++) {
	      var map = i < 0 ? measure.map : maps[i]
	      for (var j = 0; j < map.length; j += 3) {
	        var curNode = map[j + 2]
	        if (curNode == textNode || curNode == topNode) {
	          var line = lineNo(i < 0 ? lineView.line : lineView.rest[i])
	          var ch = map[j] + offset
	          if (offset < 0 || curNode != textNode) { ch = map[j + (offset ? 1 : 0)] }
	          return Pos(line, ch)
	        }
	      }
	    }
	  }
	  var found = find(textNode, topNode, offset)
	  if (found) { return badPos(found, bad) }

	  // FIXME this is all really shaky. might handle the few cases it needs to handle, but likely to cause problems
	  for (var after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
	    found = find(after, after.firstChild, 0)
	    if (found)
	      { return badPos(Pos(found.line, found.ch - dist), bad) }
	    else
	      { dist += after.textContent.length }
	  }
	  for (var before = topNode.previousSibling, dist$1 = offset; before; before = before.previousSibling) {
	    found = find(before, before.firstChild, -1)
	    if (found)
	      { return badPos(Pos(found.line, found.ch + dist$1), bad) }
	    else
	      { dist$1 += before.textContent.length }
	  }
	}

	// TEXTAREA INPUT STYLE

	var TextareaInput = function(cm) {
	  this.cm = cm
	  // See input.poll and input.reset
	  this.prevInput = ""

	  // Flag that indicates whether we expect input to appear real soon
	  // now (after some event like 'keypress' or 'input') and are
	  // polling intensively.
	  this.pollingFast = false
	  // Self-resetting timeout for the poller
	  this.polling = new Delayed()
	  // Tracks when input.reset has punted to just putting a short
	  // string into the textarea instead of the full selection.
	  this.inaccurateSelection = false
	  // Used to work around IE issue with selection being forgotten when focus moves away from textarea
	  this.hasSelection = false
	  this.composing = null
	};

	TextareaInput.prototype.init = function (display) {
	    var this$1 = this;

	  var input = this, cm = this.cm

	  // Wraps and hides input textarea
	  var div = this.wrapper = hiddenTextarea()
	  // The semihidden textarea that is focused when the editor is
	  // focused, and receives input.
	  var te = this.textarea = div.firstChild
	  display.wrapper.insertBefore(div, display.wrapper.firstChild)

	  // Needed to hide big blue blinking cursor on Mobile Safari (doesn't seem to work in iOS 8 anymore)
	  if (ios) { te.style.width = "0px" }

	  on(te, "input", function () {
	    if (ie && ie_version >= 9 && this$1.hasSelection) { this$1.hasSelection = null }
	    input.poll()
	  })

	  on(te, "paste", function (e) {
	    if (signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }

	    cm.state.pasteIncoming = true
	    input.fastPoll()
	  })

	  function prepareCopyCut(e) {
	    if (signalDOMEvent(cm, e)) { return }
	    if (cm.somethingSelected()) {
	      setLastCopied({lineWise: false, text: cm.getSelections()})
	      if (input.inaccurateSelection) {
	        input.prevInput = ""
	        input.inaccurateSelection = false
	        te.value = lastCopied.text.join("\n")
	        selectInput(te)
	      }
	    } else if (!cm.options.lineWiseCopyCut) {
	      return
	    } else {
	      var ranges = copyableRanges(cm)
	      setLastCopied({lineWise: true, text: ranges.text})
	      if (e.type == "cut") {
	        cm.setSelections(ranges.ranges, null, sel_dontScroll)
	      } else {
	        input.prevInput = ""
	        te.value = ranges.text.join("\n")
	        selectInput(te)
	      }
	    }
	    if (e.type == "cut") { cm.state.cutIncoming = true }
	  }
	  on(te, "cut", prepareCopyCut)
	  on(te, "copy", prepareCopyCut)

	  on(display.scroller, "paste", function (e) {
	    if (eventInWidget(display, e) || signalDOMEvent(cm, e)) { return }
	    cm.state.pasteIncoming = true
	    input.focus()
	  })

	  // Prevent normal selection in the editor (we handle our own)
	  on(display.lineSpace, "selectstart", function (e) {
	    if (!eventInWidget(display, e)) { e_preventDefault(e) }
	  })

	  on(te, "compositionstart", function () {
	    var start = cm.getCursor("from")
	    if (input.composing) { input.composing.range.clear() }
	    input.composing = {
	      start: start,
	      range: cm.markText(start, cm.getCursor("to"), {className: "CodeMirror-composing"})
	    }
	  })
	  on(te, "compositionend", function () {
	    if (input.composing) {
	      input.poll()
	      input.composing.range.clear()
	      input.composing = null
	    }
	  })
	};

	TextareaInput.prototype.prepareSelection = function () {
	  // Redraw the selection and/or cursor
	  var cm = this.cm, display = cm.display, doc = cm.doc
	  var result = prepareSelection(cm)

	  // Move the hidden textarea near the cursor to prevent scrolling artifacts
	  if (cm.options.moveInputWithCursor) {
	    var headPos = cursorCoords(cm, doc.sel.primary().head, "div")
	    var wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect()
	    result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
	                                        headPos.top + lineOff.top - wrapOff.top))
	    result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
	                                         headPos.left + lineOff.left - wrapOff.left))
	  }

	  return result
	};

	TextareaInput.prototype.showSelection = function (drawn) {
	  var cm = this.cm, display = cm.display
	  removeChildrenAndAdd(display.cursorDiv, drawn.cursors)
	  removeChildrenAndAdd(display.selectionDiv, drawn.selection)
	  if (drawn.teTop != null) {
	    this.wrapper.style.top = drawn.teTop + "px"
	    this.wrapper.style.left = drawn.teLeft + "px"
	  }
	};

	// Reset the input to correspond to the selection (or to be empty,
	// when not typing and nothing is selected)
	TextareaInput.prototype.reset = function (typing) {
	  if (this.contextMenuPending) { return }
	  var minimal, selected, cm = this.cm, doc = cm.doc
	  if (cm.somethingSelected()) {
	    this.prevInput = ""
	    var range = doc.sel.primary()
	    minimal = hasCopyEvent &&
	      (range.to().line - range.from().line > 100 || (selected = cm.getSelection()).length > 1000)
	    var content = minimal ? "-" : selected || cm.getSelection()
	    this.textarea.value = content
	    if (cm.state.focused) { selectInput(this.textarea) }
	    if (ie && ie_version >= 9) { this.hasSelection = content }
	  } else if (!typing) {
	    this.prevInput = this.textarea.value = ""
	    if (ie && ie_version >= 9) { this.hasSelection = null }
	  }
	  this.inaccurateSelection = minimal
	};

	TextareaInput.prototype.getField = function () { return this.textarea };

	TextareaInput.prototype.supportsTouch = function () { return false };

	TextareaInput.prototype.focus = function () {
	  if (this.cm.options.readOnly != "nocursor" && (!mobile || activeElt() != this.textarea)) {
	    try { this.textarea.focus() }
	    catch (e) {} // IE8 will throw if the textarea is display: none or not in DOM
	  }
	};

	TextareaInput.prototype.blur = function () { this.textarea.blur() };

	TextareaInput.prototype.resetPosition = function () {
	  this.wrapper.style.top = this.wrapper.style.left = 0
	};

	TextareaInput.prototype.receivedFocus = function () { this.slowPoll() };

	// Poll for input changes, using the normal rate of polling. This
	// runs as long as the editor is focused.
	TextareaInput.prototype.slowPoll = function () {
	    var this$1 = this;

	  if (this.pollingFast) { return }
	  this.polling.set(this.cm.options.pollInterval, function () {
	    this$1.poll()
	    if (this$1.cm.state.focused) { this$1.slowPoll() }
	  })
	};

	// When an event has just come in that is likely to add or change
	// something in the input textarea, we poll faster, to ensure that
	// the change appears on the screen quickly.
	TextareaInput.prototype.fastPoll = function () {
	  var missed = false, input = this
	  input.pollingFast = true
	  function p() {
	    var changed = input.poll()
	    if (!changed && !missed) {missed = true; input.polling.set(60, p)}
	    else {input.pollingFast = false; input.slowPoll()}
	  }
	  input.polling.set(20, p)
	};

	// Read input from the textarea, and update the document to match.
	// When something is selected, it is present in the textarea, and
	// selected (unless it is huge, in which case a placeholder is
	// used). When nothing is selected, the cursor sits after previously
	// seen text (can be empty), which is stored in prevInput (we must
	// not reset the textarea when typing, because that breaks IME).
	TextareaInput.prototype.poll = function () {
	    var this$1 = this;

	  var cm = this.cm, input = this.textarea, prevInput = this.prevInput
	  // Since this is called a *lot*, try to bail out as cheaply as
	  // possible when it is clear that nothing happened. hasSelection
	  // will be the case when there is a lot of text in the textarea,
	  // in which case reading its value would be expensive.
	  if (this.contextMenuPending || !cm.state.focused ||
	      (hasSelection(input) && !prevInput && !this.composing) ||
	      cm.isReadOnly() || cm.options.disableInput || cm.state.keySeq)
	    { return false }

	  var text = input.value
	  // If nothing changed, bail.
	  if (text == prevInput && !cm.somethingSelected()) { return false }
	  // Work around nonsensical selection resetting in IE9/10, and
	  // inexplicable appearance of private area unicode characters on
	  // some key combos in Mac (#2689).
	  if (ie && ie_version >= 9 && this.hasSelection === text ||
	      mac && /[\uf700-\uf7ff]/.test(text)) {
	    cm.display.input.reset()
	    return false
	  }

	  if (cm.doc.sel == cm.display.selForContextMenu) {
	    var first = text.charCodeAt(0)
	    if (first == 0x200b && !prevInput) { prevInput = "\u200b" }
	    if (first == 0x21da) { this.reset(); return this.cm.execCommand("undo") }
	  }
	  // Find the part of the input that is actually new
	  var same = 0, l = Math.min(prevInput.length, text.length)
	  while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) { ++same }

	  runInOp(cm, function () {
	    applyTextInput(cm, text.slice(same), prevInput.length - same,
	                   null, this$1.composing ? "*compose" : null)

	    // Don't leave long text in the textarea, since it makes further polling slow
	    if (text.length > 1000 || text.indexOf("\n") > -1) { input.value = this$1.prevInput = "" }
	    else { this$1.prevInput = text }

	    if (this$1.composing) {
	      this$1.composing.range.clear()
	      this$1.composing.range = cm.markText(this$1.composing.start, cm.getCursor("to"),
	                                         {className: "CodeMirror-composing"})
	    }
	  })
	  return true
	};

	TextareaInput.prototype.ensurePolled = function () {
	  if (this.pollingFast && this.poll()) { this.pollingFast = false }
	};

	TextareaInput.prototype.onKeyPress = function () {
	  if (ie && ie_version >= 9) { this.hasSelection = null }
	  this.fastPoll()
	};

	TextareaInput.prototype.onContextMenu = function (e) {
	  var input = this, cm = input.cm, display = cm.display, te = input.textarea
	  var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop
	  if (!pos || presto) { return } // Opera is difficult.

	  // Reset the current text selection only if the click is done outside of the selection
	  // and 'resetSelectionOnContextMenu' option is true.
	  var reset = cm.options.resetSelectionOnContextMenu
	  if (reset && cm.doc.sel.contains(pos) == -1)
	    { operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll) }

	  var oldCSS = te.style.cssText, oldWrapperCSS = input.wrapper.style.cssText
	  input.wrapper.style.cssText = "position: absolute"
	  var wrapperBox = input.wrapper.getBoundingClientRect()
	  te.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - wrapperBox.top - 5) + "px; left: " + (e.clientX - wrapperBox.left - 5) + "px;\n      z-index: 1000; background: " + (ie ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);"
	  var oldScrollY
	  if (webkit) { oldScrollY = window.scrollY } // Work around Chrome issue (#2712)
	  display.input.focus()
	  if (webkit) { window.scrollTo(null, oldScrollY) }
	  display.input.reset()
	  // Adds "Select all" to context menu in FF
	  if (!cm.somethingSelected()) { te.value = input.prevInput = " " }
	  input.contextMenuPending = true
	  display.selForContextMenu = cm.doc.sel
	  clearTimeout(display.detectingSelectAll)

	  // Select-all will be greyed out if there's nothing to select, so
	  // this adds a zero-width space so that we can later check whether
	  // it got selected.
	  function prepareSelectAllHack() {
	    if (te.selectionStart != null) {
	      var selected = cm.somethingSelected()
	      var extval = "\u200b" + (selected ? te.value : "")
	      te.value = "\u21da" // Used to catch context-menu undo
	      te.value = extval
	      input.prevInput = selected ? "" : "\u200b"
	      te.selectionStart = 1; te.selectionEnd = extval.length
	      // Re-set this, in case some other handler touched the
	      // selection in the meantime.
	      display.selForContextMenu = cm.doc.sel
	    }
	  }
	  function rehide() {
	    input.contextMenuPending = false
	    input.wrapper.style.cssText = oldWrapperCSS
	    te.style.cssText = oldCSS
	    if (ie && ie_version < 9) { display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos) }

	    // Try to detect the user choosing select-all
	    if (te.selectionStart != null) {
	      if (!ie || (ie && ie_version < 9)) { prepareSelectAllHack() }
	      var i = 0, poll = function () {
	        if (display.selForContextMenu == cm.doc.sel && te.selectionStart == 0 &&
	            te.selectionEnd > 0 && input.prevInput == "\u200b")
	          { operation(cm, selectAll)(cm) }
	        else if (i++ < 10) { display.detectingSelectAll = setTimeout(poll, 500) }
	        else { display.input.reset() }
	      }
	      display.detectingSelectAll = setTimeout(poll, 200)
	    }
	  }

	  if (ie && ie_version >= 9) { prepareSelectAllHack() }
	  if (captureRightClick) {
	    e_stop(e)
	    var mouseup = function () {
	      off(window, "mouseup", mouseup)
	      setTimeout(rehide, 20)
	    }
	    on(window, "mouseup", mouseup)
	  } else {
	    setTimeout(rehide, 50)
	  }
	};

	TextareaInput.prototype.readOnlyChanged = function (val) {
	  if (!val) { this.reset() }
	};

	TextareaInput.prototype.setUneditable = function () {};

	TextareaInput.prototype.needsContentAttribute = false

	function fromTextArea(textarea, options) {
	  options = options ? copyObj(options) : {}
	  options.value = textarea.value
	  if (!options.tabindex && textarea.tabIndex)
	    { options.tabindex = textarea.tabIndex }
	  if (!options.placeholder && textarea.placeholder)
	    { options.placeholder = textarea.placeholder }
	  // Set autofocus to true if this textarea is focused, or if it has
	  // autofocus and no other element is focused.
	  if (options.autofocus == null) {
	    var hasFocus = activeElt()
	    options.autofocus = hasFocus == textarea ||
	      textarea.getAttribute("autofocus") != null && hasFocus == document.body
	  }

	  function save() {textarea.value = cm.getValue()}

	  var realSubmit
	  if (textarea.form) {
	    on(textarea.form, "submit", save)
	    // Deplorable hack to make the submit method do the right thing.
	    if (!options.leaveSubmitMethodAlone) {
	      var form = textarea.form
	      realSubmit = form.submit
	      try {
	        var wrappedSubmit = form.submit = function () {
	          save()
	          form.submit = realSubmit
	          form.submit()
	          form.submit = wrappedSubmit
	        }
	      } catch(e) {}
	    }
	  }

	  options.finishInit = function (cm) {
	    cm.save = save
	    cm.getTextArea = function () { return textarea; }
	    cm.toTextArea = function () {
	      cm.toTextArea = isNaN // Prevent this from being ran twice
	      save()
	      textarea.parentNode.removeChild(cm.getWrapperElement())
	      textarea.style.display = ""
	      if (textarea.form) {
	        off(textarea.form, "submit", save)
	        if (typeof textarea.form.submit == "function")
	          { textarea.form.submit = realSubmit }
	      }
	    }
	  }

	  textarea.style.display = "none"
	  var cm = CodeMirror(function (node) { return textarea.parentNode.insertBefore(node, textarea.nextSibling); },
	    options)
	  return cm
	}

	function addLegacyProps(CodeMirror) {
	  CodeMirror.off = off
	  CodeMirror.on = on
	  CodeMirror.wheelEventPixels = wheelEventPixels
	  CodeMirror.Doc = Doc
	  CodeMirror.splitLines = splitLinesAuto
	  CodeMirror.countColumn = countColumn
	  CodeMirror.findColumn = findColumn
	  CodeMirror.isWordChar = isWordCharBasic
	  CodeMirror.Pass = Pass
	  CodeMirror.signal = signal
	  CodeMirror.Line = Line
	  CodeMirror.changeEnd = changeEnd
	  CodeMirror.scrollbarModel = scrollbarModel
	  CodeMirror.Pos = Pos
	  CodeMirror.cmpPos = cmp
	  CodeMirror.modes = modes
	  CodeMirror.mimeModes = mimeModes
	  CodeMirror.resolveMode = resolveMode
	  CodeMirror.getMode = getMode
	  CodeMirror.modeExtensions = modeExtensions
	  CodeMirror.extendMode = extendMode
	  CodeMirror.copyState = copyState
	  CodeMirror.startState = startState
	  CodeMirror.innerMode = innerMode
	  CodeMirror.commands = commands
	  CodeMirror.keyMap = keyMap
	  CodeMirror.keyName = keyName
	  CodeMirror.isModifierKey = isModifierKey
	  CodeMirror.lookupKey = lookupKey
	  CodeMirror.normalizeKeyMap = normalizeKeyMap
	  CodeMirror.StringStream = StringStream
	  CodeMirror.SharedTextMarker = SharedTextMarker
	  CodeMirror.TextMarker = TextMarker
	  CodeMirror.LineWidget = LineWidget
	  CodeMirror.e_preventDefault = e_preventDefault
	  CodeMirror.e_stopPropagation = e_stopPropagation
	  CodeMirror.e_stop = e_stop
	  CodeMirror.addClass = addClass
	  CodeMirror.contains = contains
	  CodeMirror.rmClass = rmClass
	  CodeMirror.keyNames = keyNames
	}

	// EDITOR CONSTRUCTOR

	defineOptions(CodeMirror)

	addEditorMethods(CodeMirror)

	// Set up methods on CodeMirror's prototype to redirect to the editor's document.
	var dontDelegate = "iter insert remove copy getEditor constructor".split(" ")
	for (var prop in Doc.prototype) { if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0)
	  { CodeMirror.prototype[prop] = (function(method) {
	    return function() {return method.apply(this.doc, arguments)}
	  })(Doc.prototype[prop]) } }

	eventMixin(Doc)

	// INPUT HANDLING

	CodeMirror.inputStyles = {"textarea": TextareaInput, "contenteditable": ContentEditableInput}

	// MODE DEFINITION AND QUERYING

	// Extra arguments are stored as the mode's dependencies, which is
	// used by (legacy) mechanisms like loadmode.js to automatically
	// load a mode. (Preferred mechanism is the require/define calls.)
	CodeMirror.defineMode = function(name/*, mode, …*/) {
	  if (!CodeMirror.defaults.mode && name != "null") { CodeMirror.defaults.mode = name }
	  defineMode.apply(this, arguments)
	}

	CodeMirror.defineMIME = defineMIME

	// Minimal default mode.
	CodeMirror.defineMode("null", function () { return ({token: function (stream) { return stream.skipToEnd(); }}); })
	CodeMirror.defineMIME("text/plain", "null")

	// EXTENSIONS

	CodeMirror.defineExtension = function (name, func) {
	  CodeMirror.prototype[name] = func
	}
	CodeMirror.defineDocExtension = function (name, func) {
	  Doc.prototype[name] = func
	}

	CodeMirror.fromTextArea = fromTextArea

	addLegacyProps(CodeMirror)

	CodeMirror.version = "5.22.0"

	return CodeMirror;

	})));

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(38), __webpack_require__(40), __webpack_require__(41));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror", "../xml/xml", "../meta"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	"use strict";

	CodeMirror.defineMode("markdown", function(cmCfg, modeCfg) {

	  var htmlMode = CodeMirror.getMode(cmCfg, "text/html");
	  var htmlModeMissing = htmlMode.name == "null"

	  function getMode(name) {
	    if (CodeMirror.findModeByName) {
	      var found = CodeMirror.findModeByName(name);
	      if (found) name = found.mime || found.mimes[0];
	    }
	    var mode = CodeMirror.getMode(cmCfg, name);
	    return mode.name == "null" ? null : mode;
	  }

	  // Should characters that affect highlighting be highlighted separate?
	  // Does not include characters that will be output (such as `1.` and `-` for lists)
	  if (modeCfg.highlightFormatting === undefined)
	    modeCfg.highlightFormatting = false;

	  // Maximum number of nested blockquotes. Set to 0 for infinite nesting.
	  // Excess `>` will emit `error` token.
	  if (modeCfg.maxBlockquoteDepth === undefined)
	    modeCfg.maxBlockquoteDepth = 0;

	  // Should underscores in words open/close em/strong?
	  if (modeCfg.underscoresBreakWords === undefined)
	    modeCfg.underscoresBreakWords = true;

	  // Use `fencedCodeBlocks` to configure fenced code blocks. false to
	  // disable, string to specify a precise regexp that the fence should
	  // match, and true to allow three or more backticks or tildes (as
	  // per CommonMark).

	  // Turn on task lists? ("- [ ] " and "- [x] ")
	  if (modeCfg.taskLists === undefined) modeCfg.taskLists = false;

	  // Turn on strikethrough syntax
	  if (modeCfg.strikethrough === undefined)
	    modeCfg.strikethrough = false;

	  // Allow token types to be overridden by user-provided token types.
	  if (modeCfg.tokenTypeOverrides === undefined)
	    modeCfg.tokenTypeOverrides = {};

	  var tokenTypes = {
	    header: "header",
	    code: "comment",
	    quote: "quote",
	    list1: "variable-2",
	    list2: "variable-3",
	    list3: "keyword",
	    hr: "hr",
	    image: "image",
	    imageAltText: "image-alt-text",
	    imageMarker: "image-marker",
	    formatting: "formatting",
	    linkInline: "link",
	    linkEmail: "link",
	    linkText: "link",
	    linkHref: "string",
	    em: "em",
	    strong: "strong",
	    strikethrough: "strikethrough"
	  };

	  for (var tokenType in tokenTypes) {
	    if (tokenTypes.hasOwnProperty(tokenType) && modeCfg.tokenTypeOverrides[tokenType]) {
	      tokenTypes[tokenType] = modeCfg.tokenTypeOverrides[tokenType];
	    }
	  }

	  var hrRE = /^([*\-_])(?:\s*\1){2,}\s*$/
	  ,   listRE = /^(?:[*\-+]|^[0-9]+([.)]))\s+/
	  ,   taskListRE = /^\[(x| )\](?=\s)/ // Must follow listRE
	  ,   atxHeaderRE = modeCfg.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/
	  ,   setextHeaderRE = /^ *(?:\={1,}|-{1,})\s*$/
	  ,   textRE = /^[^#!\[\]*_\\<>` "'(~]+/
	  ,   fencedCodeRE = new RegExp("^(" + (modeCfg.fencedCodeBlocks === true ? "~~~+|```+" : modeCfg.fencedCodeBlocks) +
	                                ")[ \\t]*([\\w+#\-]*)");

	  function switchInline(stream, state, f) {
	    state.f = state.inline = f;
	    return f(stream, state);
	  }

	  function switchBlock(stream, state, f) {
	    state.f = state.block = f;
	    return f(stream, state);
	  }

	  function lineIsEmpty(line) {
	    return !line || !/\S/.test(line.string)
	  }

	  // Blocks

	  function blankLine(state) {
	    // Reset linkTitle state
	    state.linkTitle = false;
	    // Reset EM state
	    state.em = false;
	    // Reset STRONG state
	    state.strong = false;
	    // Reset strikethrough state
	    state.strikethrough = false;
	    // Reset state.quote
	    state.quote = 0;
	    // Reset state.indentedCode
	    state.indentedCode = false;
	    if (htmlModeMissing && state.f == htmlBlock) {
	      state.f = inlineNormal;
	      state.block = blockNormal;
	    }
	    // Reset state.trailingSpace
	    state.trailingSpace = 0;
	    state.trailingSpaceNewLine = false;
	    // Mark this line as blank
	    state.prevLine = state.thisLine
	    state.thisLine = null
	    return null;
	  }

	  function blockNormal(stream, state) {

	    var sol = stream.sol();

	    var prevLineIsList = state.list !== false,
	        prevLineIsIndentedCode = state.indentedCode;

	    state.indentedCode = false;

	    if (prevLineIsList) {
	      if (state.indentationDiff >= 0) { // Continued list
	        if (state.indentationDiff < 4) { // Only adjust indentation if *not* a code block
	          state.indentation -= state.indentationDiff;
	        }
	        state.list = null;
	      } else if (state.indentation > 0) {
	        state.list = null;
	      } else { // No longer a list
	        state.list = false;
	      }
	    }

	    var match = null;
	    if (state.indentationDiff >= 4) {
	      stream.skipToEnd();
	      if (prevLineIsIndentedCode || lineIsEmpty(state.prevLine)) {
	        state.indentation -= 4;
	        state.indentedCode = true;
	        return tokenTypes.code;
	      } else {
	        return null;
	      }
	    } else if (stream.eatSpace()) {
	      return null;
	    } else if ((match = stream.match(atxHeaderRE)) && match[1].length <= 6) {
	      state.header = match[1].length;
	      if (modeCfg.highlightFormatting) state.formatting = "header";
	      state.f = state.inline;
	      return getType(state);
	    } else if (!lineIsEmpty(state.prevLine) && !state.quote && !prevLineIsList &&
	               !prevLineIsIndentedCode && (match = stream.match(setextHeaderRE))) {
	      state.header = match[0].charAt(0) == '=' ? 1 : 2;
	      if (modeCfg.highlightFormatting) state.formatting = "header";
	      state.f = state.inline;
	      return getType(state);
	    } else if (stream.eat('>')) {
	      state.quote = sol ? 1 : state.quote + 1;
	      if (modeCfg.highlightFormatting) state.formatting = "quote";
	      stream.eatSpace();
	      return getType(state);
	    } else if (stream.peek() === '[') {
	      return switchInline(stream, state, footnoteLink);
	    } else if (stream.match(hrRE, true)) {
	      state.hr = true;
	      return tokenTypes.hr;
	    } else if (match = stream.match(listRE)) {
	      var listType = match[1] ? "ol" : "ul";
	      state.indentation = stream.column() + stream.current().length;
	      state.list = true;

	      // While this list item's marker's indentation
	      // is less than the deepest list item's content's indentation,
	      // pop the deepest list item indentation off the stack.
	      while (state.listStack && stream.column() < state.listStack[state.listStack.length - 1]) {
	        state.listStack.pop();
	      }

	      // Add this list item's content's indentation to the stack
	      state.listStack.push(state.indentation);

	      if (modeCfg.taskLists && stream.match(taskListRE, false)) {
	        state.taskList = true;
	      }
	      state.f = state.inline;
	      if (modeCfg.highlightFormatting) state.formatting = ["list", "list-" + listType];
	      return getType(state);
	    } else if (modeCfg.fencedCodeBlocks && (match = stream.match(fencedCodeRE, true))) {
	      state.fencedChars = match[1]
	      // try switching mode
	      state.localMode = getMode(match[2]);
	      if (state.localMode) state.localState = CodeMirror.startState(state.localMode);
	      state.f = state.block = local;
	      if (modeCfg.highlightFormatting) state.formatting = "code-block";
	      state.code = -1
	      return getType(state);
	    }

	    return switchInline(stream, state, state.inline);
	  }

	  function htmlBlock(stream, state) {
	    var style = htmlMode.token(stream, state.htmlState);
	    if (!htmlModeMissing) {
	      var inner = CodeMirror.innerMode(htmlMode, state.htmlState)
	      if ((inner.mode.name == "xml" && inner.state.tagStart === null &&
	           (!inner.state.context && inner.state.tokenize.isInText)) ||
	          (state.md_inside && stream.current().indexOf(">") > -1)) {
	        state.f = inlineNormal;
	        state.block = blockNormal;
	        state.htmlState = null;
	      }
	    }
	    return style;
	  }

	  function local(stream, state) {
	    if (state.fencedChars && stream.match(state.fencedChars, false)) {
	      state.localMode = state.localState = null;
	      state.f = state.block = leavingLocal;
	      return null;
	    } else if (state.localMode) {
	      return state.localMode.token(stream, state.localState);
	    } else {
	      stream.skipToEnd();
	      return tokenTypes.code;
	    }
	  }

	  function leavingLocal(stream, state) {
	    stream.match(state.fencedChars);
	    state.block = blockNormal;
	    state.f = inlineNormal;
	    state.fencedChars = null;
	    if (modeCfg.highlightFormatting) state.formatting = "code-block";
	    state.code = 1
	    var returnType = getType(state);
	    state.code = 0
	    return returnType;
	  }

	  // Inline
	  function getType(state) {
	    var styles = [];

	    if (state.formatting) {
	      styles.push(tokenTypes.formatting);

	      if (typeof state.formatting === "string") state.formatting = [state.formatting];

	      for (var i = 0; i < state.formatting.length; i++) {
	        styles.push(tokenTypes.formatting + "-" + state.formatting[i]);

	        if (state.formatting[i] === "header") {
	          styles.push(tokenTypes.formatting + "-" + state.formatting[i] + "-" + state.header);
	        }

	        // Add `formatting-quote` and `formatting-quote-#` for blockquotes
	        // Add `error` instead if the maximum blockquote nesting depth is passed
	        if (state.formatting[i] === "quote") {
	          if (!modeCfg.maxBlockquoteDepth || modeCfg.maxBlockquoteDepth >= state.quote) {
	            styles.push(tokenTypes.formatting + "-" + state.formatting[i] + "-" + state.quote);
	          } else {
	            styles.push("error");
	          }
	        }
	      }
	    }

	    if (state.taskOpen) {
	      styles.push("meta");
	      return styles.length ? styles.join(' ') : null;
	    }
	    if (state.taskClosed) {
	      styles.push("property");
	      return styles.length ? styles.join(' ') : null;
	    }

	    if (state.linkHref) {
	      styles.push(tokenTypes.linkHref, "url");
	    } else { // Only apply inline styles to non-url text
	      if (state.strong) { styles.push(tokenTypes.strong); }
	      if (state.em) { styles.push(tokenTypes.em); }
	      if (state.strikethrough) { styles.push(tokenTypes.strikethrough); }
	      if (state.linkText) { styles.push(tokenTypes.linkText); }
	      if (state.code) { styles.push(tokenTypes.code); }
	      if (state.image) { styles.push(tokenTypes.image); }
	      if (state.imageAltText) { styles.push(tokenTypes.imageAltText, "link"); }
	      if (state.imageMarker) { styles.push(tokenTypes.imageMarker); }
	    }

	    if (state.header) { styles.push(tokenTypes.header, tokenTypes.header + "-" + state.header); }

	    if (state.quote) {
	      styles.push(tokenTypes.quote);

	      // Add `quote-#` where the maximum for `#` is modeCfg.maxBlockquoteDepth
	      if (!modeCfg.maxBlockquoteDepth || modeCfg.maxBlockquoteDepth >= state.quote) {
	        styles.push(tokenTypes.quote + "-" + state.quote);
	      } else {
	        styles.push(tokenTypes.quote + "-" + modeCfg.maxBlockquoteDepth);
	      }
	    }

	    if (state.list !== false) {
	      var listMod = (state.listStack.length - 1) % 3;
	      if (!listMod) {
	        styles.push(tokenTypes.list1);
	      } else if (listMod === 1) {
	        styles.push(tokenTypes.list2);
	      } else {
	        styles.push(tokenTypes.list3);
	      }
	    }

	    if (state.trailingSpaceNewLine) {
	      styles.push("trailing-space-new-line");
	    } else if (state.trailingSpace) {
	      styles.push("trailing-space-" + (state.trailingSpace % 2 ? "a" : "b"));
	    }

	    return styles.length ? styles.join(' ') : null;
	  }

	  function handleText(stream, state) {
	    if (stream.match(textRE, true)) {
	      return getType(state);
	    }
	    return undefined;
	  }

	  function inlineNormal(stream, state) {
	    var style = state.text(stream, state);
	    if (typeof style !== 'undefined')
	      return style;

	    if (state.list) { // List marker (*, +, -, 1., etc)
	      state.list = null;
	      return getType(state);
	    }

	    if (state.taskList) {
	      var taskOpen = stream.match(taskListRE, true)[1] !== "x";
	      if (taskOpen) state.taskOpen = true;
	      else state.taskClosed = true;
	      if (modeCfg.highlightFormatting) state.formatting = "task";
	      state.taskList = false;
	      return getType(state);
	    }

	    state.taskOpen = false;
	    state.taskClosed = false;

	    if (state.header && stream.match(/^#+$/, true)) {
	      if (modeCfg.highlightFormatting) state.formatting = "header";
	      return getType(state);
	    }

	    // Get sol() value now, before character is consumed
	    var sol = stream.sol();

	    var ch = stream.next();

	    // Matches link titles present on next line
	    if (state.linkTitle) {
	      state.linkTitle = false;
	      var matchCh = ch;
	      if (ch === '(') {
	        matchCh = ')';
	      }
	      matchCh = (matchCh+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
	      var regex = '^\\s*(?:[^' + matchCh + '\\\\]+|\\\\\\\\|\\\\.)' + matchCh;
	      if (stream.match(new RegExp(regex), true)) {
	        return tokenTypes.linkHref;
	      }
	    }

	    // If this block is changed, it may need to be updated in GFM mode
	    if (ch === '`') {
	      var previousFormatting = state.formatting;
	      if (modeCfg.highlightFormatting) state.formatting = "code";
	      stream.eatWhile('`');
	      var count = stream.current().length
	      if (state.code == 0) {
	        state.code = count
	        return getType(state)
	      } else if (count == state.code) { // Must be exact
	        var t = getType(state)
	        state.code = 0
	        return t
	      } else {
	        state.formatting = previousFormatting
	        return getType(state)
	      }
	    } else if (state.code) {
	      return getType(state);
	    }

	    if (ch === '\\') {
	      stream.next();
	      if (modeCfg.highlightFormatting) {
	        var type = getType(state);
	        var formattingEscape = tokenTypes.formatting + "-escape";
	        return type ? type + " " + formattingEscape : formattingEscape;
	      }
	    }

	    if (ch === '!' && stream.match(/\[[^\]]*\] ?(?:\(|\[)/, false)) {
	      state.imageMarker = true;
	      state.image = true;
	      if (modeCfg.highlightFormatting) state.formatting = "image";
	      return getType(state);
	    }

	    if (ch === '[' && state.imageMarker && stream.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, false)) {
	      state.imageMarker = false;
	      state.imageAltText = true
	      if (modeCfg.highlightFormatting) state.formatting = "image";
	      return getType(state);
	    }

	    if (ch === ']' && state.imageAltText) {
	      if (modeCfg.highlightFormatting) state.formatting = "image";
	      var type = getType(state);
	      state.imageAltText = false;
	      state.image = false;
	      state.inline = state.f = linkHref;
	      return type;
	    }

	    if (ch === '[' && stream.match(/[^\]]*\](\(.*\)| ?\[.*?\])/, false) && !state.image) {
	      state.linkText = true;
	      if (modeCfg.highlightFormatting) state.formatting = "link";
	      return getType(state);
	    }

	    if (ch === ']' && state.linkText && stream.match(/\(.*?\)| ?\[.*?\]/, false)) {
	      if (modeCfg.highlightFormatting) state.formatting = "link";
	      var type = getType(state);
	      state.linkText = false;
	      state.inline = state.f = linkHref;
	      return type;
	    }

	    if (ch === '<' && stream.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, false)) {
	      state.f = state.inline = linkInline;
	      if (modeCfg.highlightFormatting) state.formatting = "link";
	      var type = getType(state);
	      if (type){
	        type += " ";
	      } else {
	        type = "";
	      }
	      return type + tokenTypes.linkInline;
	    }

	    if (ch === '<' && stream.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, false)) {
	      state.f = state.inline = linkInline;
	      if (modeCfg.highlightFormatting) state.formatting = "link";
	      var type = getType(state);
	      if (type){
	        type += " ";
	      } else {
	        type = "";
	      }
	      return type + tokenTypes.linkEmail;
	    }

	    if (ch === '<' && stream.match(/^(!--|\w)/, false)) {
	      var end = stream.string.indexOf(">", stream.pos);
	      if (end != -1) {
	        var atts = stream.string.substring(stream.start, end);
	        if (/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(atts)) state.md_inside = true;
	      }
	      stream.backUp(1);
	      state.htmlState = CodeMirror.startState(htmlMode);
	      return switchBlock(stream, state, htmlBlock);
	    }

	    if (ch === '<' && stream.match(/^\/\w*?>/)) {
	      state.md_inside = false;
	      return "tag";
	    }

	    var ignoreUnderscore = false;
	    if (!modeCfg.underscoresBreakWords) {
	      if (ch === '_' && stream.peek() !== '_' && stream.match(/(\w)/, false)) {
	        var prevPos = stream.pos - 2;
	        if (prevPos >= 0) {
	          var prevCh = stream.string.charAt(prevPos);
	          if (prevCh !== '_' && prevCh.match(/(\w)/, false)) {
	            ignoreUnderscore = true;
	          }
	        }
	      }
	    }
	    if (ch === '*' || (ch === '_' && !ignoreUnderscore)) {
	      if (sol && stream.peek() === ' ') {
	        // Do nothing, surrounded by newline and space
	      } else if (state.strong === ch && stream.eat(ch)) { // Remove STRONG
	        if (modeCfg.highlightFormatting) state.formatting = "strong";
	        var t = getType(state);
	        state.strong = false;
	        return t;
	      } else if (!state.strong && stream.eat(ch)) { // Add STRONG
	        state.strong = ch;
	        if (modeCfg.highlightFormatting) state.formatting = "strong";
	        return getType(state);
	      } else if (state.em === ch) { // Remove EM
	        if (modeCfg.highlightFormatting) state.formatting = "em";
	        var t = getType(state);
	        state.em = false;
	        return t;
	      } else if (!state.em) { // Add EM
	        state.em = ch;
	        if (modeCfg.highlightFormatting) state.formatting = "em";
	        return getType(state);
	      }
	    } else if (ch === ' ') {
	      if (stream.eat('*') || stream.eat('_')) { // Probably surrounded by spaces
	        if (stream.peek() === ' ') { // Surrounded by spaces, ignore
	          return getType(state);
	        } else { // Not surrounded by spaces, back up pointer
	          stream.backUp(1);
	        }
	      }
	    }

	    if (modeCfg.strikethrough) {
	      if (ch === '~' && stream.eatWhile(ch)) {
	        if (state.strikethrough) {// Remove strikethrough
	          if (modeCfg.highlightFormatting) state.formatting = "strikethrough";
	          var t = getType(state);
	          state.strikethrough = false;
	          return t;
	        } else if (stream.match(/^[^\s]/, false)) {// Add strikethrough
	          state.strikethrough = true;
	          if (modeCfg.highlightFormatting) state.formatting = "strikethrough";
	          return getType(state);
	        }
	      } else if (ch === ' ') {
	        if (stream.match(/^~~/, true)) { // Probably surrounded by space
	          if (stream.peek() === ' ') { // Surrounded by spaces, ignore
	            return getType(state);
	          } else { // Not surrounded by spaces, back up pointer
	            stream.backUp(2);
	          }
	        }
	      }
	    }

	    if (ch === ' ') {
	      if (stream.match(/ +$/, false)) {
	        state.trailingSpace++;
	      } else if (state.trailingSpace) {
	        state.trailingSpaceNewLine = true;
	      }
	    }

	    return getType(state);
	  }

	  function linkInline(stream, state) {
	    var ch = stream.next();

	    if (ch === ">") {
	      state.f = state.inline = inlineNormal;
	      if (modeCfg.highlightFormatting) state.formatting = "link";
	      var type = getType(state);
	      if (type){
	        type += " ";
	      } else {
	        type = "";
	      }
	      return type + tokenTypes.linkInline;
	    }

	    stream.match(/^[^>]+/, true);

	    return tokenTypes.linkInline;
	  }

	  function linkHref(stream, state) {
	    // Check if space, and return NULL if so (to avoid marking the space)
	    if(stream.eatSpace()){
	      return null;
	    }
	    var ch = stream.next();
	    if (ch === '(' || ch === '[') {
	      state.f = state.inline = getLinkHrefInside(ch === "(" ? ")" : "]", 0);
	      if (modeCfg.highlightFormatting) state.formatting = "link-string";
	      state.linkHref = true;
	      return getType(state);
	    }
	    return 'error';
	  }

	  var linkRE = {
	    ")": /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,
	    "]": /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\\]]|\\.)*\])*?(?=\])/
	  }

	  function getLinkHrefInside(endChar) {
	    return function(stream, state) {
	      var ch = stream.next();

	      if (ch === endChar) {
	        state.f = state.inline = inlineNormal;
	        if (modeCfg.highlightFormatting) state.formatting = "link-string";
	        var returnState = getType(state);
	        state.linkHref = false;
	        return returnState;
	      }

	      stream.match(linkRE[endChar])
	      state.linkHref = true;
	      return getType(state);
	    };
	  }

	  function footnoteLink(stream, state) {
	    if (stream.match(/^([^\]\\]|\\.)*\]:/, false)) {
	      state.f = footnoteLinkInside;
	      stream.next(); // Consume [
	      if (modeCfg.highlightFormatting) state.formatting = "link";
	      state.linkText = true;
	      return getType(state);
	    }
	    return switchInline(stream, state, inlineNormal);
	  }

	  function footnoteLinkInside(stream, state) {
	    if (stream.match(/^\]:/, true)) {
	      state.f = state.inline = footnoteUrl;
	      if (modeCfg.highlightFormatting) state.formatting = "link";
	      var returnType = getType(state);
	      state.linkText = false;
	      return returnType;
	    }

	    stream.match(/^([^\]\\]|\\.)+/, true);

	    return tokenTypes.linkText;
	  }

	  function footnoteUrl(stream, state) {
	    // Check if space, and return NULL if so (to avoid marking the space)
	    if(stream.eatSpace()){
	      return null;
	    }
	    // Match URL
	    stream.match(/^[^\s]+/, true);
	    // Check for link title
	    if (stream.peek() === undefined) { // End of line, set flag to check next line
	      state.linkTitle = true;
	    } else { // More content on line, check if link title
	      stream.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/, true);
	    }
	    state.f = state.inline = inlineNormal;
	    return tokenTypes.linkHref + " url";
	  }

	  var mode = {
	    startState: function() {
	      return {
	        f: blockNormal,

	        prevLine: null,
	        thisLine: null,

	        block: blockNormal,
	        htmlState: null,
	        indentation: 0,

	        inline: inlineNormal,
	        text: handleText,

	        formatting: false,
	        linkText: false,
	        linkHref: false,
	        linkTitle: false,
	        code: 0,
	        em: false,
	        strong: false,
	        header: 0,
	        hr: false,
	        taskList: false,
	        list: false,
	        listStack: [],
	        quote: 0,
	        trailingSpace: 0,
	        trailingSpaceNewLine: false,
	        strikethrough: false,
	        fencedChars: null
	      };
	    },

	    copyState: function(s) {
	      return {
	        f: s.f,

	        prevLine: s.prevLine,
	        thisLine: s.thisLine,

	        block: s.block,
	        htmlState: s.htmlState && CodeMirror.copyState(htmlMode, s.htmlState),
	        indentation: s.indentation,

	        localMode: s.localMode,
	        localState: s.localMode ? CodeMirror.copyState(s.localMode, s.localState) : null,

	        inline: s.inline,
	        text: s.text,
	        formatting: false,
	        linkTitle: s.linkTitle,
	        code: s.code,
	        em: s.em,
	        strong: s.strong,
	        strikethrough: s.strikethrough,
	        header: s.header,
	        hr: s.hr,
	        taskList: s.taskList,
	        list: s.list,
	        listStack: s.listStack.slice(0),
	        quote: s.quote,
	        indentedCode: s.indentedCode,
	        trailingSpace: s.trailingSpace,
	        trailingSpaceNewLine: s.trailingSpaceNewLine,
	        md_inside: s.md_inside,
	        fencedChars: s.fencedChars
	      };
	    },

	    token: function(stream, state) {

	      // Reset state.formatting
	      state.formatting = false;

	      if (stream != state.thisLine) {
	        var forceBlankLine = state.header || state.hr;

	        // Reset state.header and state.hr
	        state.header = 0;
	        state.hr = false;

	        if (stream.match(/^\s*$/, true) || forceBlankLine) {
	          blankLine(state);
	          if (!forceBlankLine) return null
	          state.prevLine = null
	        }

	        state.prevLine = state.thisLine
	        state.thisLine = stream

	        // Reset state.taskList
	        state.taskList = false;

	        // Reset state.trailingSpace
	        state.trailingSpace = 0;
	        state.trailingSpaceNewLine = false;

	        state.f = state.block;
	        var indentation = stream.match(/^\s*/, true)[0].replace(/\t/g, '    ').length;
	        state.indentationDiff = Math.min(indentation - state.indentation, 4);
	        state.indentation = state.indentation + state.indentationDiff;
	        if (indentation > 0) return null;
	      }
	      return state.f(stream, state);
	    },

	    innerMode: function(state) {
	      if (state.block == htmlBlock) return {state: state.htmlState, mode: htmlMode};
	      if (state.localState) return {state: state.localState, mode: state.localMode};
	      return {state: state, mode: mode};
	    },

	    blankLine: blankLine,

	    getType: getType,

	    closeBrackets: "()[]{}''\"\"``",
	    fold: "markdown"
	  };
	  return mode;
	}, "xml");

	CodeMirror.defineMIME("text/x-markdown", "markdown");

	});


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(38));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	"use strict";

	var htmlConfig = {
	  autoSelfClosers: {'area': true, 'base': true, 'br': true, 'col': true, 'command': true,
	                    'embed': true, 'frame': true, 'hr': true, 'img': true, 'input': true,
	                    'keygen': true, 'link': true, 'meta': true, 'param': true, 'source': true,
	                    'track': true, 'wbr': true, 'menuitem': true},
	  implicitlyClosed: {'dd': true, 'li': true, 'optgroup': true, 'option': true, 'p': true,
	                     'rp': true, 'rt': true, 'tbody': true, 'td': true, 'tfoot': true,
	                     'th': true, 'tr': true},
	  contextGrabbers: {
	    'dd': {'dd': true, 'dt': true},
	    'dt': {'dd': true, 'dt': true},
	    'li': {'li': true},
	    'option': {'option': true, 'optgroup': true},
	    'optgroup': {'optgroup': true},
	    'p': {'address': true, 'article': true, 'aside': true, 'blockquote': true, 'dir': true,
	          'div': true, 'dl': true, 'fieldset': true, 'footer': true, 'form': true,
	          'h1': true, 'h2': true, 'h3': true, 'h4': true, 'h5': true, 'h6': true,
	          'header': true, 'hgroup': true, 'hr': true, 'menu': true, 'nav': true, 'ol': true,
	          'p': true, 'pre': true, 'section': true, 'table': true, 'ul': true},
	    'rp': {'rp': true, 'rt': true},
	    'rt': {'rp': true, 'rt': true},
	    'tbody': {'tbody': true, 'tfoot': true},
	    'td': {'td': true, 'th': true},
	    'tfoot': {'tbody': true},
	    'th': {'td': true, 'th': true},
	    'thead': {'tbody': true, 'tfoot': true},
	    'tr': {'tr': true}
	  },
	  doNotIndent: {"pre": true},
	  allowUnquoted: true,
	  allowMissing: true,
	  caseFold: true
	}

	var xmlConfig = {
	  autoSelfClosers: {},
	  implicitlyClosed: {},
	  contextGrabbers: {},
	  doNotIndent: {},
	  allowUnquoted: false,
	  allowMissing: false,
	  caseFold: false
	}

	CodeMirror.defineMode("xml", function(editorConf, config_) {
	  var indentUnit = editorConf.indentUnit
	  var config = {}
	  var defaults = config_.htmlMode ? htmlConfig : xmlConfig
	  for (var prop in defaults) config[prop] = defaults[prop]
	  for (var prop in config_) config[prop] = config_[prop]

	  // Return variables for tokenizers
	  var type, setStyle;

	  function inText(stream, state) {
	    function chain(parser) {
	      state.tokenize = parser;
	      return parser(stream, state);
	    }

	    var ch = stream.next();
	    if (ch == "<") {
	      if (stream.eat("!")) {
	        if (stream.eat("[")) {
	          if (stream.match("CDATA[")) return chain(inBlock("atom", "]]>"));
	          else return null;
	        } else if (stream.match("--")) {
	          return chain(inBlock("comment", "-->"));
	        } else if (stream.match("DOCTYPE", true, true)) {
	          stream.eatWhile(/[\w\._\-]/);
	          return chain(doctype(1));
	        } else {
	          return null;
	        }
	      } else if (stream.eat("?")) {
	        stream.eatWhile(/[\w\._\-]/);
	        state.tokenize = inBlock("meta", "?>");
	        return "meta";
	      } else {
	        type = stream.eat("/") ? "closeTag" : "openTag";
	        state.tokenize = inTag;
	        return "tag bracket";
	      }
	    } else if (ch == "&") {
	      var ok;
	      if (stream.eat("#")) {
	        if (stream.eat("x")) {
	          ok = stream.eatWhile(/[a-fA-F\d]/) && stream.eat(";");
	        } else {
	          ok = stream.eatWhile(/[\d]/) && stream.eat(";");
	        }
	      } else {
	        ok = stream.eatWhile(/[\w\.\-:]/) && stream.eat(";");
	      }
	      return ok ? "atom" : "error";
	    } else {
	      stream.eatWhile(/[^&<]/);
	      return null;
	    }
	  }
	  inText.isInText = true;

	  function inTag(stream, state) {
	    var ch = stream.next();
	    if (ch == ">" || (ch == "/" && stream.eat(">"))) {
	      state.tokenize = inText;
	      type = ch == ">" ? "endTag" : "selfcloseTag";
	      return "tag bracket";
	    } else if (ch == "=") {
	      type = "equals";
	      return null;
	    } else if (ch == "<") {
	      state.tokenize = inText;
	      state.state = baseState;
	      state.tagName = state.tagStart = null;
	      var next = state.tokenize(stream, state);
	      return next ? next + " tag error" : "tag error";
	    } else if (/[\'\"]/.test(ch)) {
	      state.tokenize = inAttribute(ch);
	      state.stringStartCol = stream.column();
	      return state.tokenize(stream, state);
	    } else {
	      stream.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/);
	      return "word";
	    }
	  }

	  function inAttribute(quote) {
	    var closure = function(stream, state) {
	      while (!stream.eol()) {
	        if (stream.next() == quote) {
	          state.tokenize = inTag;
	          break;
	        }
	      }
	      return "string";
	    };
	    closure.isInAttribute = true;
	    return closure;
	  }

	  function inBlock(style, terminator) {
	    return function(stream, state) {
	      while (!stream.eol()) {
	        if (stream.match(terminator)) {
	          state.tokenize = inText;
	          break;
	        }
	        stream.next();
	      }
	      return style;
	    };
	  }
	  function doctype(depth) {
	    return function(stream, state) {
	      var ch;
	      while ((ch = stream.next()) != null) {
	        if (ch == "<") {
	          state.tokenize = doctype(depth + 1);
	          return state.tokenize(stream, state);
	        } else if (ch == ">") {
	          if (depth == 1) {
	            state.tokenize = inText;
	            break;
	          } else {
	            state.tokenize = doctype(depth - 1);
	            return state.tokenize(stream, state);
	          }
	        }
	      }
	      return "meta";
	    };
	  }

	  function Context(state, tagName, startOfLine) {
	    this.prev = state.context;
	    this.tagName = tagName;
	    this.indent = state.indented;
	    this.startOfLine = startOfLine;
	    if (config.doNotIndent.hasOwnProperty(tagName) || (state.context && state.context.noIndent))
	      this.noIndent = true;
	  }
	  function popContext(state) {
	    if (state.context) state.context = state.context.prev;
	  }
	  function maybePopContext(state, nextTagName) {
	    var parentTagName;
	    while (true) {
	      if (!state.context) {
	        return;
	      }
	      parentTagName = state.context.tagName;
	      if (!config.contextGrabbers.hasOwnProperty(parentTagName) ||
	          !config.contextGrabbers[parentTagName].hasOwnProperty(nextTagName)) {
	        return;
	      }
	      popContext(state);
	    }
	  }

	  function baseState(type, stream, state) {
	    if (type == "openTag") {
	      state.tagStart = stream.column();
	      return tagNameState;
	    } else if (type == "closeTag") {
	      return closeTagNameState;
	    } else {
	      return baseState;
	    }
	  }
	  function tagNameState(type, stream, state) {
	    if (type == "word") {
	      state.tagName = stream.current();
	      setStyle = "tag";
	      return attrState;
	    } else {
	      setStyle = "error";
	      return tagNameState;
	    }
	  }
	  function closeTagNameState(type, stream, state) {
	    if (type == "word") {
	      var tagName = stream.current();
	      if (state.context && state.context.tagName != tagName &&
	          config.implicitlyClosed.hasOwnProperty(state.context.tagName))
	        popContext(state);
	      if ((state.context && state.context.tagName == tagName) || config.matchClosing === false) {
	        setStyle = "tag";
	        return closeState;
	      } else {
	        setStyle = "tag error";
	        return closeStateErr;
	      }
	    } else {
	      setStyle = "error";
	      return closeStateErr;
	    }
	  }

	  function closeState(type, _stream, state) {
	    if (type != "endTag") {
	      setStyle = "error";
	      return closeState;
	    }
	    popContext(state);
	    return baseState;
	  }
	  function closeStateErr(type, stream, state) {
	    setStyle = "error";
	    return closeState(type, stream, state);
	  }

	  function attrState(type, _stream, state) {
	    if (type == "word") {
	      setStyle = "attribute";
	      return attrEqState;
	    } else if (type == "endTag" || type == "selfcloseTag") {
	      var tagName = state.tagName, tagStart = state.tagStart;
	      state.tagName = state.tagStart = null;
	      if (type == "selfcloseTag" ||
	          config.autoSelfClosers.hasOwnProperty(tagName)) {
	        maybePopContext(state, tagName);
	      } else {
	        maybePopContext(state, tagName);
	        state.context = new Context(state, tagName, tagStart == state.indented);
	      }
	      return baseState;
	    }
	    setStyle = "error";
	    return attrState;
	  }
	  function attrEqState(type, stream, state) {
	    if (type == "equals") return attrValueState;
	    if (!config.allowMissing) setStyle = "error";
	    return attrState(type, stream, state);
	  }
	  function attrValueState(type, stream, state) {
	    if (type == "string") return attrContinuedState;
	    if (type == "word" && config.allowUnquoted) {setStyle = "string"; return attrState;}
	    setStyle = "error";
	    return attrState(type, stream, state);
	  }
	  function attrContinuedState(type, stream, state) {
	    if (type == "string") return attrContinuedState;
	    return attrState(type, stream, state);
	  }

	  return {
	    startState: function(baseIndent) {
	      var state = {tokenize: inText,
	                   state: baseState,
	                   indented: baseIndent || 0,
	                   tagName: null, tagStart: null,
	                   context: null}
	      if (baseIndent != null) state.baseIndent = baseIndent
	      return state
	    },

	    token: function(stream, state) {
	      if (!state.tagName && stream.sol())
	        state.indented = stream.indentation();

	      if (stream.eatSpace()) return null;
	      type = null;
	      var style = state.tokenize(stream, state);
	      if ((style || type) && style != "comment") {
	        setStyle = null;
	        state.state = state.state(type || style, stream, state);
	        if (setStyle)
	          style = setStyle == "error" ? style + " error" : setStyle;
	      }
	      return style;
	    },

	    indent: function(state, textAfter, fullLine) {
	      var context = state.context;
	      // Indent multi-line strings (e.g. css).
	      if (state.tokenize.isInAttribute) {
	        if (state.tagStart == state.indented)
	          return state.stringStartCol + 1;
	        else
	          return state.indented + indentUnit;
	      }
	      if (context && context.noIndent) return CodeMirror.Pass;
	      if (state.tokenize != inTag && state.tokenize != inText)
	        return fullLine ? fullLine.match(/^(\s*)/)[0].length : 0;
	      // Indent the starts of attribute names.
	      if (state.tagName) {
	        if (config.multilineTagIndentPastTag !== false)
	          return state.tagStart + state.tagName.length + 2;
	        else
	          return state.tagStart + indentUnit * (config.multilineTagIndentFactor || 1);
	      }
	      if (config.alignCDATA && /<!\[CDATA\[/.test(textAfter)) return 0;
	      var tagAfter = textAfter && /^<(\/)?([\w_:\.-]*)/.exec(textAfter);
	      if (tagAfter && tagAfter[1]) { // Closing tag spotted
	        while (context) {
	          if (context.tagName == tagAfter[2]) {
	            context = context.prev;
	            break;
	          } else if (config.implicitlyClosed.hasOwnProperty(context.tagName)) {
	            context = context.prev;
	          } else {
	            break;
	          }
	        }
	      } else if (tagAfter) { // Opening tag spotted
	        while (context) {
	          var grabbers = config.contextGrabbers[context.tagName];
	          if (grabbers && grabbers.hasOwnProperty(tagAfter[2]))
	            context = context.prev;
	          else
	            break;
	        }
	      }
	      while (context && context.prev && !context.startOfLine)
	        context = context.prev;
	      if (context) return context.indent + indentUnit;
	      else return state.baseIndent || 0;
	    },

	    electricInput: /<\/[\s\w:]+>$/,
	    blockCommentStart: "<!--",
	    blockCommentEnd: "-->",

	    configuration: config.htmlMode ? "html" : "xml",
	    helperType: config.htmlMode ? "html" : "xml",

	    skipAttribute: function(state) {
	      if (state.state == attrValueState)
	        state.state = attrState
	    }
	  };
	});

	CodeMirror.defineMIME("text/xml", "xml");
	CodeMirror.defineMIME("application/xml", "xml");
	if (!CodeMirror.mimeModes.hasOwnProperty("text/html"))
	  CodeMirror.defineMIME("text/html", {name: "xml", htmlMode: true});

	});


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(38));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../lib/codemirror"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	  "use strict";

	  CodeMirror.modeInfo = [
	    {name: "APL", mime: "text/apl", mode: "apl", ext: ["dyalog", "apl"]},
	    {name: "PGP", mimes: ["application/pgp", "application/pgp-keys", "application/pgp-signature"], mode: "asciiarmor", ext: ["pgp"]},
	    {name: "ASN.1", mime: "text/x-ttcn-asn", mode: "asn.1", ext: ["asn", "asn1"]},
	    {name: "Asterisk", mime: "text/x-asterisk", mode: "asterisk", file: /^extensions\.conf$/i},
	    {name: "Brainfuck", mime: "text/x-brainfuck", mode: "brainfuck", ext: ["b", "bf"]},
	    {name: "C", mime: "text/x-csrc", mode: "clike", ext: ["c", "h"]},
	    {name: "C++", mime: "text/x-c++src", mode: "clike", ext: ["cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx"], alias: ["cpp"]},
	    {name: "Cobol", mime: "text/x-cobol", mode: "cobol", ext: ["cob", "cpy"]},
	    {name: "C#", mime: "text/x-csharp", mode: "clike", ext: ["cs"], alias: ["csharp"]},
	    {name: "Clojure", mime: "text/x-clojure", mode: "clojure", ext: ["clj", "cljc", "cljx"]},
	    {name: "ClojureScript", mime: "text/x-clojurescript", mode: "clojure", ext: ["cljs"]},
	    {name: "Closure Stylesheets (GSS)", mime: "text/x-gss", mode: "css", ext: ["gss"]},
	    {name: "CMake", mime: "text/x-cmake", mode: "cmake", ext: ["cmake", "cmake.in"], file: /^CMakeLists.txt$/},
	    {name: "CoffeeScript", mime: "text/x-coffeescript", mode: "coffeescript", ext: ["coffee"], alias: ["coffee", "coffee-script"]},
	    {name: "Common Lisp", mime: "text/x-common-lisp", mode: "commonlisp", ext: ["cl", "lisp", "el"], alias: ["lisp"]},
	    {name: "Cypher", mime: "application/x-cypher-query", mode: "cypher", ext: ["cyp", "cypher"]},
	    {name: "Cython", mime: "text/x-cython", mode: "python", ext: ["pyx", "pxd", "pxi"]},
	    {name: "Crystal", mime: "text/x-crystal", mode: "crystal", ext: ["cr"]},
	    {name: "CSS", mime: "text/css", mode: "css", ext: ["css"]},
	    {name: "CQL", mime: "text/x-cassandra", mode: "sql", ext: ["cql"]},
	    {name: "D", mime: "text/x-d", mode: "d", ext: ["d"]},
	    {name: "Dart", mimes: ["application/dart", "text/x-dart"], mode: "dart", ext: ["dart"]},
	    {name: "diff", mime: "text/x-diff", mode: "diff", ext: ["diff", "patch"]},
	    {name: "Django", mime: "text/x-django", mode: "django"},
	    {name: "Dockerfile", mime: "text/x-dockerfile", mode: "dockerfile", file: /^Dockerfile$/},
	    {name: "DTD", mime: "application/xml-dtd", mode: "dtd", ext: ["dtd"]},
	    {name: "Dylan", mime: "text/x-dylan", mode: "dylan", ext: ["dylan", "dyl", "intr"]},
	    {name: "EBNF", mime: "text/x-ebnf", mode: "ebnf"},
	    {name: "ECL", mime: "text/x-ecl", mode: "ecl", ext: ["ecl"]},
	    {name: "edn", mime: "application/edn", mode: "clojure", ext: ["edn"]},
	    {name: "Eiffel", mime: "text/x-eiffel", mode: "eiffel", ext: ["e"]},
	    {name: "Elm", mime: "text/x-elm", mode: "elm", ext: ["elm"]},
	    {name: "Embedded Javascript", mime: "application/x-ejs", mode: "htmlembedded", ext: ["ejs"]},
	    {name: "Embedded Ruby", mime: "application/x-erb", mode: "htmlembedded", ext: ["erb"]},
	    {name: "Erlang", mime: "text/x-erlang", mode: "erlang", ext: ["erl"]},
	    {name: "Factor", mime: "text/x-factor", mode: "factor", ext: ["factor"]},
	    {name: "FCL", mime: "text/x-fcl", mode: "fcl"},
	    {name: "Forth", mime: "text/x-forth", mode: "forth", ext: ["forth", "fth", "4th"]},
	    {name: "Fortran", mime: "text/x-fortran", mode: "fortran", ext: ["f", "for", "f77", "f90"]},
	    {name: "F#", mime: "text/x-fsharp", mode: "mllike", ext: ["fs"], alias: ["fsharp"]},
	    {name: "Gas", mime: "text/x-gas", mode: "gas", ext: ["s"]},
	    {name: "Gherkin", mime: "text/x-feature", mode: "gherkin", ext: ["feature"]},
	    {name: "GitHub Flavored Markdown", mime: "text/x-gfm", mode: "gfm", file: /^(readme|contributing|history).md$/i},
	    {name: "Go", mime: "text/x-go", mode: "go", ext: ["go"]},
	    {name: "Groovy", mime: "text/x-groovy", mode: "groovy", ext: ["groovy", "gradle"], file: /^Jenkinsfile$/},
	    {name: "HAML", mime: "text/x-haml", mode: "haml", ext: ["haml"]},
	    {name: "Haskell", mime: "text/x-haskell", mode: "haskell", ext: ["hs"]},
	    {name: "Haskell (Literate)", mime: "text/x-literate-haskell", mode: "haskell-literate", ext: ["lhs"]},
	    {name: "Haxe", mime: "text/x-haxe", mode: "haxe", ext: ["hx"]},
	    {name: "HXML", mime: "text/x-hxml", mode: "haxe", ext: ["hxml"]},
	    {name: "ASP.NET", mime: "application/x-aspx", mode: "htmlembedded", ext: ["aspx"], alias: ["asp", "aspx"]},
	    {name: "HTML", mime: "text/html", mode: "htmlmixed", ext: ["html", "htm"], alias: ["xhtml"]},
	    {name: "HTTP", mime: "message/http", mode: "http"},
	    {name: "IDL", mime: "text/x-idl", mode: "idl", ext: ["pro"]},
	    {name: "Pug", mime: "text/x-pug", mode: "pug", ext: ["jade", "pug"], alias: ["jade"]},
	    {name: "Java", mime: "text/x-java", mode: "clike", ext: ["java"]},
	    {name: "Java Server Pages", mime: "application/x-jsp", mode: "htmlembedded", ext: ["jsp"], alias: ["jsp"]},
	    {name: "JavaScript", mimes: ["text/javascript", "text/ecmascript", "application/javascript", "application/x-javascript", "application/ecmascript"],
	     mode: "javascript", ext: ["js"], alias: ["ecmascript", "js", "node"]},
	    {name: "JSON", mimes: ["application/json", "application/x-json"], mode: "javascript", ext: ["json", "map"], alias: ["json5"]},
	    {name: "JSON-LD", mime: "application/ld+json", mode: "javascript", ext: ["jsonld"], alias: ["jsonld"]},
	    {name: "JSX", mime: "text/jsx", mode: "jsx", ext: ["jsx"]},
	    {name: "Jinja2", mime: "null", mode: "jinja2"},
	    {name: "Julia", mime: "text/x-julia", mode: "julia", ext: ["jl"]},
	    {name: "Kotlin", mime: "text/x-kotlin", mode: "clike", ext: ["kt"]},
	    {name: "LESS", mime: "text/x-less", mode: "css", ext: ["less"]},
	    {name: "LiveScript", mime: "text/x-livescript", mode: "livescript", ext: ["ls"], alias: ["ls"]},
	    {name: "Lua", mime: "text/x-lua", mode: "lua", ext: ["lua"]},
	    {name: "Markdown", mime: "text/x-markdown", mode: "markdown", ext: ["markdown", "md", "mkd"]},
	    {name: "mIRC", mime: "text/mirc", mode: "mirc"},
	    {name: "MariaDB SQL", mime: "text/x-mariadb", mode: "sql"},
	    {name: "Mathematica", mime: "text/x-mathematica", mode: "mathematica", ext: ["m", "nb"]},
	    {name: "Modelica", mime: "text/x-modelica", mode: "modelica", ext: ["mo"]},
	    {name: "MUMPS", mime: "text/x-mumps", mode: "mumps", ext: ["mps"]},
	    {name: "MS SQL", mime: "text/x-mssql", mode: "sql"},
	    {name: "mbox", mime: "application/mbox", mode: "mbox", ext: ["mbox"]},
	    {name: "MySQL", mime: "text/x-mysql", mode: "sql"},
	    {name: "Nginx", mime: "text/x-nginx-conf", mode: "nginx", file: /nginx.*\.conf$/i},
	    {name: "NSIS", mime: "text/x-nsis", mode: "nsis", ext: ["nsh", "nsi"]},
	    {name: "NTriples", mime: "text/n-triples", mode: "ntriples", ext: ["nt"]},
	    {name: "Objective C", mime: "text/x-objectivec", mode: "clike", ext: ["m", "mm"], alias: ["objective-c", "objc"]},
	    {name: "OCaml", mime: "text/x-ocaml", mode: "mllike", ext: ["ml", "mli", "mll", "mly"]},
	    {name: "Octave", mime: "text/x-octave", mode: "octave", ext: ["m"]},
	    {name: "Oz", mime: "text/x-oz", mode: "oz", ext: ["oz"]},
	    {name: "Pascal", mime: "text/x-pascal", mode: "pascal", ext: ["p", "pas"]},
	    {name: "PEG.js", mime: "null", mode: "pegjs", ext: ["jsonld"]},
	    {name: "Perl", mime: "text/x-perl", mode: "perl", ext: ["pl", "pm"]},
	    {name: "PHP", mime: "application/x-httpd-php", mode: "php", ext: ["php", "php3", "php4", "php5", "phtml"]},
	    {name: "Pig", mime: "text/x-pig", mode: "pig", ext: ["pig"]},
	    {name: "Plain Text", mime: "text/plain", mode: "null", ext: ["txt", "text", "conf", "def", "list", "log"]},
	    {name: "PLSQL", mime: "text/x-plsql", mode: "sql", ext: ["pls"]},
	    {name: "PowerShell", mime: "application/x-powershell", mode: "powershell", ext: ["ps1", "psd1", "psm1"]},
	    {name: "Properties files", mime: "text/x-properties", mode: "properties", ext: ["properties", "ini", "in"], alias: ["ini", "properties"]},
	    {name: "ProtoBuf", mime: "text/x-protobuf", mode: "protobuf", ext: ["proto"]},
	    {name: "Python", mime: "text/x-python", mode: "python", ext: ["BUILD", "bzl", "py", "pyw"], file: /^(BUCK|BUILD)$/},
	    {name: "Puppet", mime: "text/x-puppet", mode: "puppet", ext: ["pp"]},
	    {name: "Q", mime: "text/x-q", mode: "q", ext: ["q"]},
	    {name: "R", mime: "text/x-rsrc", mode: "r", ext: ["r", "R"], alias: ["rscript"]},
	    {name: "reStructuredText", mime: "text/x-rst", mode: "rst", ext: ["rst"], alias: ["rst"]},
	    {name: "RPM Changes", mime: "text/x-rpm-changes", mode: "rpm"},
	    {name: "RPM Spec", mime: "text/x-rpm-spec", mode: "rpm", ext: ["spec"]},
	    {name: "Ruby", mime: "text/x-ruby", mode: "ruby", ext: ["rb"], alias: ["jruby", "macruby", "rake", "rb", "rbx"]},
	    {name: "Rust", mime: "text/x-rustsrc", mode: "rust", ext: ["rs"]},
	    {name: "SAS", mime: "text/x-sas", mode: "sas", ext: ["sas"]},
	    {name: "Sass", mime: "text/x-sass", mode: "sass", ext: ["sass"]},
	    {name: "Scala", mime: "text/x-scala", mode: "clike", ext: ["scala"]},
	    {name: "Scheme", mime: "text/x-scheme", mode: "scheme", ext: ["scm", "ss"]},
	    {name: "SCSS", mime: "text/x-scss", mode: "css", ext: ["scss"]},
	    {name: "Shell", mime: "text/x-sh", mode: "shell", ext: ["sh", "ksh", "bash"], alias: ["bash", "sh", "zsh"], file: /^PKGBUILD$/},
	    {name: "Sieve", mime: "application/sieve", mode: "sieve", ext: ["siv", "sieve"]},
	    {name: "Slim", mimes: ["text/x-slim", "application/x-slim"], mode: "slim", ext: ["slim"]},
	    {name: "Smalltalk", mime: "text/x-stsrc", mode: "smalltalk", ext: ["st"]},
	    {name: "Smarty", mime: "text/x-smarty", mode: "smarty", ext: ["tpl"]},
	    {name: "Solr", mime: "text/x-solr", mode: "solr"},
	    {name: "Soy", mime: "text/x-soy", mode: "soy", ext: ["soy"], alias: ["closure template"]},
	    {name: "SPARQL", mime: "application/sparql-query", mode: "sparql", ext: ["rq", "sparql"], alias: ["sparul"]},
	    {name: "Spreadsheet", mime: "text/x-spreadsheet", mode: "spreadsheet", alias: ["excel", "formula"]},
	    {name: "SQL", mime: "text/x-sql", mode: "sql", ext: ["sql"]},
	    {name: "Squirrel", mime: "text/x-squirrel", mode: "clike", ext: ["nut"]},
	    {name: "Stylus", mime: "text/x-styl", mode: "stylus", ext: ["styl"]},
	    {name: "Swift", mime: "text/x-swift", mode: "swift", ext: ["swift"]},
	    {name: "sTeX", mime: "text/x-stex", mode: "stex"},
	    {name: "LaTeX", mime: "text/x-latex", mode: "stex", ext: ["text", "ltx"], alias: ["tex"]},
	    {name: "SystemVerilog", mime: "text/x-systemverilog", mode: "verilog", ext: ["v"]},
	    {name: "Tcl", mime: "text/x-tcl", mode: "tcl", ext: ["tcl"]},
	    {name: "Textile", mime: "text/x-textile", mode: "textile", ext: ["textile"]},
	    {name: "TiddlyWiki ", mime: "text/x-tiddlywiki", mode: "tiddlywiki"},
	    {name: "Tiki wiki", mime: "text/tiki", mode: "tiki"},
	    {name: "TOML", mime: "text/x-toml", mode: "toml", ext: ["toml"]},
	    {name: "Tornado", mime: "text/x-tornado", mode: "tornado"},
	    {name: "troff", mime: "text/troff", mode: "troff", ext: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]},
	    {name: "TTCN", mime: "text/x-ttcn", mode: "ttcn", ext: ["ttcn", "ttcn3", "ttcnpp"]},
	    {name: "TTCN_CFG", mime: "text/x-ttcn-cfg", mode: "ttcn-cfg", ext: ["cfg"]},
	    {name: "Turtle", mime: "text/turtle", mode: "turtle", ext: ["ttl"]},
	    {name: "TypeScript", mime: "application/typescript", mode: "javascript", ext: ["ts"], alias: ["ts"]},
	    {name: "Twig", mime: "text/x-twig", mode: "twig"},
	    {name: "Web IDL", mime: "text/x-webidl", mode: "webidl", ext: ["webidl"]},
	    {name: "VB.NET", mime: "text/x-vb", mode: "vb", ext: ["vb"]},
	    {name: "VBScript", mime: "text/vbscript", mode: "vbscript", ext: ["vbs"]},
	    {name: "Velocity", mime: "text/velocity", mode: "velocity", ext: ["vtl"]},
	    {name: "Verilog", mime: "text/x-verilog", mode: "verilog", ext: ["v"]},
	    {name: "VHDL", mime: "text/x-vhdl", mode: "vhdl", ext: ["vhd", "vhdl"]},
	    {name: "Vue.js Component", mimes: ["script/x-vue", "text/x-vue"], mode: "vue", ext: ["vue"]},
	    {name: "XML", mimes: ["application/xml", "text/xml"], mode: "xml", ext: ["xml", "xsl", "xsd"], alias: ["rss", "wsdl", "xsd"]},
	    {name: "XQuery", mime: "application/xquery", mode: "xquery", ext: ["xy", "xquery"]},
	    {name: "Yacas", mime: "text/x-yacas", mode: "yacas", ext: ["ys"]},
	    {name: "YAML", mimes: ["text/x-yaml", "text/yaml"], mode: "yaml", ext: ["yaml", "yml"], alias: ["yml"]},
	    {name: "Z80", mime: "text/x-z80", mode: "z80", ext: ["z80"]},
	    {name: "mscgen", mime: "text/x-mscgen", mode: "mscgen", ext: ["mscgen", "mscin", "msc"]},
	    {name: "xu", mime: "text/x-xu", mode: "mscgen", ext: ["xu"]},
	    {name: "msgenny", mime: "text/x-msgenny", mode: "mscgen", ext: ["msgenny"]}
	  ];
	  // Ensure all modes have a mime property for backwards compatibility
	  for (var i = 0; i < CodeMirror.modeInfo.length; i++) {
	    var info = CodeMirror.modeInfo[i];
	    if (info.mimes) info.mime = info.mimes[0];
	  }

	  CodeMirror.findModeByMIME = function(mime) {
	    mime = mime.toLowerCase();
	    for (var i = 0; i < CodeMirror.modeInfo.length; i++) {
	      var info = CodeMirror.modeInfo[i];
	      if (info.mime == mime) return info;
	      if (info.mimes) for (var j = 0; j < info.mimes.length; j++)
	        if (info.mimes[j] == mime) return info;
	    }
	  };

	  CodeMirror.findModeByExtension = function(ext) {
	    for (var i = 0; i < CodeMirror.modeInfo.length; i++) {
	      var info = CodeMirror.modeInfo[i];
	      if (info.ext) for (var j = 0; j < info.ext.length; j++)
	        if (info.ext[j] == ext) return info;
	    }
	  };

	  CodeMirror.findModeByFileName = function(filename) {
	    for (var i = 0; i < CodeMirror.modeInfo.length; i++) {
	      var info = CodeMirror.modeInfo[i];
	      if (info.file && info.file.test(filename)) return info;
	    }
	    var dot = filename.lastIndexOf(".");
	    var ext = dot > -1 && filename.substring(dot + 1, filename.length);
	    if (ext) return CodeMirror.findModeByExtension(ext);
	  };

	  CodeMirror.findModeByName = function(name) {
	    name = name.toLowerCase();
	    for (var i = 0; i < CodeMirror.modeInfo.length; i++) {
	      var info = CodeMirror.modeInfo[i];
	      if (info.name.toLowerCase() == name) return info;
	      if (info.alias) for (var j = 0; j < info.alias.length; j++)
	        if (info.alias[j].toLowerCase() == name) return info;
	    }
	  };
	});


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	// Utility function that allows modes to be combined. The mode given
	// as the base argument takes care of most of the normal mode
	// functionality, but a second (typically simple) mode is used, which
	// can override the style of text. Both modes get to parse all of the
	// text, but when both assign a non-null style to a piece of code, the
	// overlay wins, unless the combine argument was true and not overridden,
	// or state.overlay.combineTokens was true, in which case the styles are
	// combined.

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(38));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	"use strict";

	CodeMirror.overlayMode = function(base, overlay, combine) {
	  return {
	    startState: function() {
	      return {
	        base: CodeMirror.startState(base),
	        overlay: CodeMirror.startState(overlay),
	        basePos: 0, baseCur: null,
	        overlayPos: 0, overlayCur: null,
	        streamSeen: null
	      };
	    },
	    copyState: function(state) {
	      return {
	        base: CodeMirror.copyState(base, state.base),
	        overlay: CodeMirror.copyState(overlay, state.overlay),
	        basePos: state.basePos, baseCur: null,
	        overlayPos: state.overlayPos, overlayCur: null
	      };
	    },

	    token: function(stream, state) {
	      if (stream != state.streamSeen ||
	          Math.min(state.basePos, state.overlayPos) < stream.start) {
	        state.streamSeen = stream;
	        state.basePos = state.overlayPos = stream.start;
	      }

	      if (stream.start == state.basePos) {
	        state.baseCur = base.token(stream, state.base);
	        state.basePos = stream.pos;
	      }
	      if (stream.start == state.overlayPos) {
	        stream.pos = stream.start;
	        state.overlayCur = overlay.token(stream, state.overlay);
	        state.overlayPos = stream.pos;
	      }
	      stream.pos = Math.min(state.basePos, state.overlayPos);

	      // state.overlay.combineTokens always takes precedence over combine,
	      // unless set to null
	      if (state.overlayCur == null) return state.baseCur;
	      else if (state.baseCur != null &&
	               state.overlay.combineTokens ||
	               combine && state.overlay.combineTokens == null)
	        return state.baseCur + " " + state.overlayCur;
	      else return state.overlayCur;
	    },

	    indent: base.indent && function(state, textAfter) {
	      return base.indent(state.base, textAfter);
	    },
	    electricChars: base.electricChars,

	    innerMode: function(state) { return {state: state.base, mode: base}; },

	    blankLine: function(state) {
	      var baseToken, overlayToken;
	      if (base.blankLine) baseToken = base.blankLine(state.base);
	      if (overlay.blankLine) overlayToken = overlay.blankLine(state.overlay);

	      return overlayToken == null ?
	        baseToken :
	        (combine && baseToken != null ? baseToken + " " + overlayToken : overlayToken);
	    }
	  };
	};

	});


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE

	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(38), __webpack_require__(39), __webpack_require__(42));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror", "../markdown/markdown", "../../addon/mode/overlay"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	"use strict";

	var urlRE = /^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))/i

	CodeMirror.defineMode("gfm", function(config, modeConfig) {
	  var codeDepth = 0;
	  function blankLine(state) {
	    state.code = false;
	    return null;
	  }
	  var gfmOverlay = {
	    startState: function() {
	      return {
	        code: false,
	        codeBlock: false,
	        ateSpace: false
	      };
	    },
	    copyState: function(s) {
	      return {
	        code: s.code,
	        codeBlock: s.codeBlock,
	        ateSpace: s.ateSpace
	      };
	    },
	    token: function(stream, state) {
	      state.combineTokens = null;

	      // Hack to prevent formatting override inside code blocks (block and inline)
	      if (state.codeBlock) {
	        if (stream.match(/^```+/)) {
	          state.codeBlock = false;
	          return null;
	        }
	        stream.skipToEnd();
	        return null;
	      }
	      if (stream.sol()) {
	        state.code = false;
	      }
	      if (stream.sol() && stream.match(/^```+/)) {
	        stream.skipToEnd();
	        state.codeBlock = true;
	        return null;
	      }
	      // If this block is changed, it may need to be updated in Markdown mode
	      if (stream.peek() === '`') {
	        stream.next();
	        var before = stream.pos;
	        stream.eatWhile('`');
	        var difference = 1 + stream.pos - before;
	        if (!state.code) {
	          codeDepth = difference;
	          state.code = true;
	        } else {
	          if (difference === codeDepth) { // Must be exact
	            state.code = false;
	          }
	        }
	        return null;
	      } else if (state.code) {
	        stream.next();
	        return null;
	      }
	      // Check if space. If so, links can be formatted later on
	      if (stream.eatSpace()) {
	        state.ateSpace = true;
	        return null;
	      }
	      if (stream.sol() || state.ateSpace) {
	        state.ateSpace = false;
	        if (modeConfig.gitHubSpice !== false) {
	          if(stream.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?:[a-f0-9]{7,40}\b)/)) {
	            // User/Project@SHA
	            // User@SHA
	            // SHA
	            state.combineTokens = true;
	            return "link";
	          } else if (stream.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/)) {
	            // User/Project#Num
	            // User#Num
	            // #Num
	            state.combineTokens = true;
	            return "link";
	          }
	        }
	      }
	      if (stream.match(urlRE) &&
	          stream.string.slice(stream.start - 2, stream.start) != "](" &&
	          (stream.start == 0 || /\W/.test(stream.string.charAt(stream.start - 1)))) {
	        // URLs
	        // Taken from http://daringfireball.net/2010/07/improved_regex_for_matching_urls
	        // And then (issue #1160) simplified to make it not crash the Chrome Regexp engine
	        // And then limited url schemes to the CommonMark list, so foo:bar isn't matched as a URL
	        state.combineTokens = true;
	        return "link";
	      }
	      stream.next();
	      return null;
	    },
	    blankLine: blankLine
	  };

	  var markdownConfig = {
	    underscoresBreakWords: false,
	    taskLists: true,
	    fencedCodeBlocks: '```',
	    strikethrough: true
	  };
	  for (var attr in modeConfig) {
	    markdownConfig[attr] = modeConfig[attr];
	  }
	  markdownConfig.name = "markdown";
	  return CodeMirror.overlayMode(CodeMirror.getMode(config, markdownConfig), gfmOverlay);

	}, "markdown");

	  CodeMirror.defineMIME("text/x-gfm", "gfm");
	});


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * marked - a markdown parser
	 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
	 * https://github.com/chjj/marked
	 */

	;(function() {

	/**
	 * Block-Level Grammar
	 */

	var block = {
	  newline: /^\n+/,
	  code: /^( {4}[^\n]+\n*)+/,
	  fences: noop,
	  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
	  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
	  nptable: noop,
	  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
	  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
	  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
	  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
	  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
	  table: noop,
	  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
	  text: /^[^\n]+/
	};

	block.bullet = /(?:[*+-]|\d+\.)/;
	block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
	block.item = replace(block.item, 'gm')
	  (/bull/g, block.bullet)
	  ();

	block.list = replace(block.list)
	  (/bull/g, block.bullet)
	  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
	  ('def', '\\n+(?=' + block.def.source + ')')
	  ();

	block.blockquote = replace(block.blockquote)
	  ('def', block.def)
	  ();

	block._tag = '(?!(?:'
	  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
	  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
	  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

	block.html = replace(block.html)
	  ('comment', /<!--[\s\S]*?-->/)
	  ('closed', /<(tag)[\s\S]+?<\/\1>/)
	  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
	  (/tag/g, block._tag)
	  ();

	block.paragraph = replace(block.paragraph)
	  ('hr', block.hr)
	  ('heading', block.heading)
	  ('lheading', block.lheading)
	  ('blockquote', block.blockquote)
	  ('tag', '<' + block._tag)
	  ('def', block.def)
	  ();

	/**
	 * Normal Block Grammar
	 */

	block.normal = merge({}, block);

	/**
	 * GFM Block Grammar
	 */

	block.gfm = merge({}, block.normal, {
	  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
	  paragraph: /^/,
	  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
	});

	block.gfm.paragraph = replace(block.paragraph)
	  ('(?!', '(?!'
	    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
	    + block.list.source.replace('\\1', '\\3') + '|')
	  ();

	/**
	 * GFM + Tables Block Grammar
	 */

	block.tables = merge({}, block.gfm, {
	  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
	  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
	});

	/**
	 * Block Lexer
	 */

	function Lexer(options) {
	  this.tokens = [];
	  this.tokens.links = {};
	  this.options = options || marked.defaults;
	  this.rules = block.normal;

	  if (this.options.gfm) {
	    if (this.options.tables) {
	      this.rules = block.tables;
	    } else {
	      this.rules = block.gfm;
	    }
	  }
	}

	/**
	 * Expose Block Rules
	 */

	Lexer.rules = block;

	/**
	 * Static Lex Method
	 */

	Lexer.lex = function(src, options) {
	  var lexer = new Lexer(options);
	  return lexer.lex(src);
	};

	/**
	 * Preprocessing
	 */

	Lexer.prototype.lex = function(src) {
	  src = src
	    .replace(/\r\n|\r/g, '\n')
	    .replace(/\t/g, '    ')
	    .replace(/\u00a0/g, ' ')
	    .replace(/\u2424/g, '\n');

	  return this.token(src, true);
	};

	/**
	 * Lexing
	 */

	Lexer.prototype.token = function(src, top, bq) {
	  var src = src.replace(/^ +$/gm, '')
	    , next
	    , loose
	    , cap
	    , bull
	    , b
	    , item
	    , space
	    , i
	    , l;

	  while (src) {
	    // newline
	    if (cap = this.rules.newline.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[0].length > 1) {
	        this.tokens.push({
	          type: 'space'
	        });
	      }
	    }

	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      cap = cap[0].replace(/^ {4}/gm, '');
	      this.tokens.push({
	        type: 'code',
	        text: !this.options.pedantic
	          ? cap.replace(/\n+$/, '')
	          : cap
	      });
	      continue;
	    }

	    // fences (gfm)
	    if (cap = this.rules.fences.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'code',
	        lang: cap[2],
	        text: cap[3] || ''
	      });
	      continue;
	    }

	    // heading
	    if (cap = this.rules.heading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[1].length,
	        text: cap[2]
	      });
	      continue;
	    }

	    // table no leading pipe (gfm)
	    if (top && (cap = this.rules.nptable.exec(src))) {
	      src = src.substring(cap[0].length);

	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/\n$/, '').split('\n')
	      };

	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }

	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i].split(/ *\| */);
	      }

	      this.tokens.push(item);

	      continue;
	    }

	    // lheading
	    if (cap = this.rules.lheading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[2] === '=' ? 1 : 2,
	        text: cap[1]
	      });
	      continue;
	    }

	    // hr
	    if (cap = this.rules.hr.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'hr'
	      });
	      continue;
	    }

	    // blockquote
	    if (cap = this.rules.blockquote.exec(src)) {
	      src = src.substring(cap[0].length);

	      this.tokens.push({
	        type: 'blockquote_start'
	      });

	      cap = cap[0].replace(/^ *> ?/gm, '');

	      // Pass `top` to keep the current
	      // "toplevel" state. This is exactly
	      // how markdown.pl works.
	      this.token(cap, top, true);

	      this.tokens.push({
	        type: 'blockquote_end'
	      });

	      continue;
	    }

	    // list
	    if (cap = this.rules.list.exec(src)) {
	      src = src.substring(cap[0].length);
	      bull = cap[2];

	      this.tokens.push({
	        type: 'list_start',
	        ordered: bull.length > 1
	      });

	      // Get each top-level item.
	      cap = cap[0].match(this.rules.item);

	      next = false;
	      l = cap.length;
	      i = 0;

	      for (; i < l; i++) {
	        item = cap[i];

	        // Remove the list item's bullet
	        // so it is seen as the next token.
	        space = item.length;
	        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

	        // Outdent whatever the
	        // list item contains. Hacky.
	        if (~item.indexOf('\n ')) {
	          space -= item.length;
	          item = !this.options.pedantic
	            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
	            : item.replace(/^ {1,4}/gm, '');
	        }

	        // Determine whether the next list item belongs here.
	        // Backpedal if it does not belong in this list.
	        if (this.options.smartLists && i !== l - 1) {
	          b = block.bullet.exec(cap[i + 1])[0];
	          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
	            src = cap.slice(i + 1).join('\n') + src;
	            i = l - 1;
	          }
	        }

	        // Determine whether item is loose or not.
	        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
	        // for discount behavior.
	        loose = next || /\n\n(?!\s*$)/.test(item);
	        if (i !== l - 1) {
	          next = item.charAt(item.length - 1) === '\n';
	          if (!loose) loose = next;
	        }

	        this.tokens.push({
	          type: loose
	            ? 'loose_item_start'
	            : 'list_item_start'
	        });

	        // Recurse.
	        this.token(item, false, bq);

	        this.tokens.push({
	          type: 'list_item_end'
	        });
	      }

	      this.tokens.push({
	        type: 'list_end'
	      });

	      continue;
	    }

	    // html
	    if (cap = this.rules.html.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: this.options.sanitize
	          ? 'paragraph'
	          : 'html',
	        pre: !this.options.sanitizer
	          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
	        text: cap[0]
	      });
	      continue;
	    }

	    // def
	    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.links[cap[1].toLowerCase()] = {
	        href: cap[2],
	        title: cap[3]
	      };
	      continue;
	    }

	    // table (gfm)
	    if (top && (cap = this.rules.table.exec(src))) {
	      src = src.substring(cap[0].length);

	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
	      };

	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }

	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i]
	          .replace(/^ *\| *| *\| *$/g, '')
	          .split(/ *\| */);
	      }

	      this.tokens.push(item);

	      continue;
	    }

	    // top-level paragraph
	    if (top && (cap = this.rules.paragraph.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'paragraph',
	        text: cap[1].charAt(cap[1].length - 1) === '\n'
	          ? cap[1].slice(0, -1)
	          : cap[1]
	      });
	      continue;
	    }

	    // text
	    if (cap = this.rules.text.exec(src)) {
	      // Top-level should never reach here.
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'text',
	        text: cap[0]
	      });
	      continue;
	    }

	    if (src) {
	      throw new
	        Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }

	  return this.tokens;
	};

	/**
	 * Inline-Level Grammar
	 */

	var inline = {
	  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
	  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
	  url: noop,
	  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
	  link: /^!?\[(inside)\]\(href\)/,
	  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
	  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
	  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
	  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
	  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
	  br: /^ {2,}\n(?!\s*$)/,
	  del: noop,
	  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
	};

	inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
	inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

	inline.link = replace(inline.link)
	  ('inside', inline._inside)
	  ('href', inline._href)
	  ();

	inline.reflink = replace(inline.reflink)
	  ('inside', inline._inside)
	  ();

	/**
	 * Normal Inline Grammar
	 */

	inline.normal = merge({}, inline);

	/**
	 * Pedantic Inline Grammar
	 */

	inline.pedantic = merge({}, inline.normal, {
	  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
	  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
	});

	/**
	 * GFM Inline Grammar
	 */

	inline.gfm = merge({}, inline.normal, {
	  escape: replace(inline.escape)('])', '~|])')(),
	  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
	  del: /^~~(?=\S)([\s\S]*?\S)~~/,
	  text: replace(inline.text)
	    (']|', '~]|')
	    ('|', '|https?://|')
	    ()
	});

	/**
	 * GFM + Line Breaks Inline Grammar
	 */

	inline.breaks = merge({}, inline.gfm, {
	  br: replace(inline.br)('{2,}', '*')(),
	  text: replace(inline.gfm.text)('{2,}', '*')()
	});

	/**
	 * Inline Lexer & Compiler
	 */

	function InlineLexer(links, options) {
	  this.options = options || marked.defaults;
	  this.links = links;
	  this.rules = inline.normal;
	  this.renderer = this.options.renderer || new Renderer;
	  this.renderer.options = this.options;

	  if (!this.links) {
	    throw new
	      Error('Tokens array requires a `links` property.');
	  }

	  if (this.options.gfm) {
	    if (this.options.breaks) {
	      this.rules = inline.breaks;
	    } else {
	      this.rules = inline.gfm;
	    }
	  } else if (this.options.pedantic) {
	    this.rules = inline.pedantic;
	  }
	}

	/**
	 * Expose Inline Rules
	 */

	InlineLexer.rules = inline;

	/**
	 * Static Lexing/Compiling Method
	 */

	InlineLexer.output = function(src, links, options) {
	  var inline = new InlineLexer(links, options);
	  return inline.output(src);
	};

	/**
	 * Lexing/Compiling
	 */

	InlineLexer.prototype.output = function(src) {
	  var out = ''
	    , link
	    , text
	    , href
	    , cap;

	  while (src) {
	    // escape
	    if (cap = this.rules.escape.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += cap[1];
	      continue;
	    }

	    // autolink
	    if (cap = this.rules.autolink.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[2] === '@') {
	        text = cap[1].charAt(6) === ':'
	          ? this.mangle(cap[1].substring(7))
	          : this.mangle(cap[1]);
	        href = this.mangle('mailto:') + text;
	      } else {
	        text = escape(cap[1]);
	        href = text;
	      }
	      out += this.renderer.link(href, null, text);
	      continue;
	    }

	    // url (gfm)
	    if (!this.inLink && (cap = this.rules.url.exec(src))) {
	      src = src.substring(cap[0].length);
	      text = escape(cap[1]);
	      href = text;
	      out += this.renderer.link(href, null, text);
	      continue;
	    }

	    // tag
	    if (cap = this.rules.tag.exec(src)) {
	      if (!this.inLink && /^<a /i.test(cap[0])) {
	        this.inLink = true;
	      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
	        this.inLink = false;
	      }
	      src = src.substring(cap[0].length);
	      out += this.options.sanitize
	        ? this.options.sanitizer
	          ? this.options.sanitizer(cap[0])
	          : escape(cap[0])
	        : cap[0]
	      continue;
	    }

	    // link
	    if (cap = this.rules.link.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.inLink = true;
	      out += this.outputLink(cap, {
	        href: cap[2],
	        title: cap[3]
	      });
	      this.inLink = false;
	      continue;
	    }

	    // reflink, nolink
	    if ((cap = this.rules.reflink.exec(src))
	        || (cap = this.rules.nolink.exec(src))) {
	      src = src.substring(cap[0].length);
	      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
	      link = this.links[link.toLowerCase()];
	      if (!link || !link.href) {
	        out += cap[0].charAt(0);
	        src = cap[0].substring(1) + src;
	        continue;
	      }
	      this.inLink = true;
	      out += this.outputLink(cap, link);
	      this.inLink = false;
	      continue;
	    }

	    // strong
	    if (cap = this.rules.strong.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.strong(this.output(cap[2] || cap[1]));
	      continue;
	    }

	    // em
	    if (cap = this.rules.em.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.em(this.output(cap[2] || cap[1]));
	      continue;
	    }

	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.codespan(escape(cap[2], true));
	      continue;
	    }

	    // br
	    if (cap = this.rules.br.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.br();
	      continue;
	    }

	    // del (gfm)
	    if (cap = this.rules.del.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.del(this.output(cap[1]));
	      continue;
	    }

	    // text
	    if (cap = this.rules.text.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.text(escape(this.smartypants(cap[0])));
	      continue;
	    }

	    if (src) {
	      throw new
	        Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }

	  return out;
	};

	/**
	 * Compile Link
	 */

	InlineLexer.prototype.outputLink = function(cap, link) {
	  var href = escape(link.href)
	    , title = link.title ? escape(link.title) : null;

	  return cap[0].charAt(0) !== '!'
	    ? this.renderer.link(href, title, this.output(cap[1]))
	    : this.renderer.image(href, title, escape(cap[1]));
	};

	/**
	 * Smartypants Transformations
	 */

	InlineLexer.prototype.smartypants = function(text) {
	  if (!this.options.smartypants) return text;
	  return text
	    // em-dashes
	    .replace(/---/g, '\u2014')
	    // en-dashes
	    .replace(/--/g, '\u2013')
	    // opening singles
	    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
	    // closing singles & apostrophes
	    .replace(/'/g, '\u2019')
	    // opening doubles
	    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
	    // closing doubles
	    .replace(/"/g, '\u201d')
	    // ellipses
	    .replace(/\.{3}/g, '\u2026');
	};

	/**
	 * Mangle Links
	 */

	InlineLexer.prototype.mangle = function(text) {
	  if (!this.options.mangle) return text;
	  var out = ''
	    , l = text.length
	    , i = 0
	    , ch;

	  for (; i < l; i++) {
	    ch = text.charCodeAt(i);
	    if (Math.random() > 0.5) {
	      ch = 'x' + ch.toString(16);
	    }
	    out += '&#' + ch + ';';
	  }

	  return out;
	};

	/**
	 * Renderer
	 */

	function Renderer(options) {
	  this.options = options || {};
	}

	Renderer.prototype.code = function(code, lang, escaped) {
	  if (this.options.highlight) {
	    var out = this.options.highlight(code, lang);
	    if (out != null && out !== code) {
	      escaped = true;
	      code = out;
	    }
	  }

	  if (!lang) {
	    return '<pre><code>'
	      + (escaped ? code : escape(code, true))
	      + '\n</code></pre>';
	  }

	  return '<pre><code class="'
	    + this.options.langPrefix
	    + escape(lang, true)
	    + '">'
	    + (escaped ? code : escape(code, true))
	    + '\n</code></pre>\n';
	};

	Renderer.prototype.blockquote = function(quote) {
	  return '<blockquote>\n' + quote + '</blockquote>\n';
	};

	Renderer.prototype.html = function(html) {
	  return html;
	};

	Renderer.prototype.heading = function(text, level, raw) {
	  return '<h'
	    + level
	    + ' id="'
	    + this.options.headerPrefix
	    + raw.toLowerCase().replace(/[^\w]+/g, '-')
	    + '">'
	    + text
	    + '</h'
	    + level
	    + '>\n';
	};

	Renderer.prototype.hr = function() {
	  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
	};

	Renderer.prototype.list = function(body, ordered) {
	  var type = ordered ? 'ol' : 'ul';
	  return '<' + type + '>\n' + body + '</' + type + '>\n';
	};

	Renderer.prototype.listitem = function(text) {
	  return '<li>' + text + '</li>\n';
	};

	Renderer.prototype.paragraph = function(text) {
	  return '<p>' + text + '</p>\n';
	};

	Renderer.prototype.table = function(header, body) {
	  return '<table>\n'
	    + '<thead>\n'
	    + header
	    + '</thead>\n'
	    + '<tbody>\n'
	    + body
	    + '</tbody>\n'
	    + '</table>\n';
	};

	Renderer.prototype.tablerow = function(content) {
	  return '<tr>\n' + content + '</tr>\n';
	};

	Renderer.prototype.tablecell = function(content, flags) {
	  var type = flags.header ? 'th' : 'td';
	  var tag = flags.align
	    ? '<' + type + ' style="text-align:' + flags.align + '">'
	    : '<' + type + '>';
	  return tag + content + '</' + type + '>\n';
	};

	// span level renderer
	Renderer.prototype.strong = function(text) {
	  return '<strong>' + text + '</strong>';
	};

	Renderer.prototype.em = function(text) {
	  return '<em>' + text + '</em>';
	};

	Renderer.prototype.codespan = function(text) {
	  return '<code>' + text + '</code>';
	};

	Renderer.prototype.br = function() {
	  return this.options.xhtml ? '<br/>' : '<br>';
	};

	Renderer.prototype.del = function(text) {
	  return '<del>' + text + '</del>';
	};

	Renderer.prototype.link = function(href, title, text) {
	  if (this.options.sanitize) {
	    try {
	      var prot = decodeURIComponent(unescape(href))
	        .replace(/[^\w:]/g, '')
	        .toLowerCase();
	    } catch (e) {
	      return '';
	    }
	    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
	      return '';
	    }
	  }
	  var out = '<a href="' + href + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += '>' + text + '</a>';
	  return out;
	};

	Renderer.prototype.image = function(href, title, text) {
	  var out = '<img src="' + href + '" alt="' + text + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += this.options.xhtml ? '/>' : '>';
	  return out;
	};

	Renderer.prototype.text = function(text) {
	  return text;
	};

	/**
	 * Parsing & Compiling
	 */

	function Parser(options) {
	  this.tokens = [];
	  this.token = null;
	  this.options = options || marked.defaults;
	  this.options.renderer = this.options.renderer || new Renderer;
	  this.renderer = this.options.renderer;
	  this.renderer.options = this.options;
	}

	/**
	 * Static Parse Method
	 */

	Parser.parse = function(src, options, renderer) {
	  var parser = new Parser(options, renderer);
	  return parser.parse(src);
	};

	/**
	 * Parse Loop
	 */

	Parser.prototype.parse = function(src) {
	  this.inline = new InlineLexer(src.links, this.options, this.renderer);
	  this.tokens = src.reverse();

	  var out = '';
	  while (this.next()) {
	    out += this.tok();
	  }

	  return out;
	};

	/**
	 * Next Token
	 */

	Parser.prototype.next = function() {
	  return this.token = this.tokens.pop();
	};

	/**
	 * Preview Next Token
	 */

	Parser.prototype.peek = function() {
	  return this.tokens[this.tokens.length - 1] || 0;
	};

	/**
	 * Parse Text Tokens
	 */

	Parser.prototype.parseText = function() {
	  var body = this.token.text;

	  while (this.peek().type === 'text') {
	    body += '\n' + this.next().text;
	  }

	  return this.inline.output(body);
	};

	/**
	 * Parse Current Token
	 */

	Parser.prototype.tok = function() {
	  switch (this.token.type) {
	    case 'space': {
	      return '';
	    }
	    case 'hr': {
	      return this.renderer.hr();
	    }
	    case 'heading': {
	      return this.renderer.heading(
	        this.inline.output(this.token.text),
	        this.token.depth,
	        this.token.text);
	    }
	    case 'code': {
	      return this.renderer.code(this.token.text,
	        this.token.lang,
	        this.token.escaped);
	    }
	    case 'table': {
	      var header = ''
	        , body = ''
	        , i
	        , row
	        , cell
	        , flags
	        , j;

	      // header
	      cell = '';
	      for (i = 0; i < this.token.header.length; i++) {
	        flags = { header: true, align: this.token.align[i] };
	        cell += this.renderer.tablecell(
	          this.inline.output(this.token.header[i]),
	          { header: true, align: this.token.align[i] }
	        );
	      }
	      header += this.renderer.tablerow(cell);

	      for (i = 0; i < this.token.cells.length; i++) {
	        row = this.token.cells[i];

	        cell = '';
	        for (j = 0; j < row.length; j++) {
	          cell += this.renderer.tablecell(
	            this.inline.output(row[j]),
	            { header: false, align: this.token.align[j] }
	          );
	        }

	        body += this.renderer.tablerow(cell);
	      }
	      return this.renderer.table(header, body);
	    }
	    case 'blockquote_start': {
	      var body = '';

	      while (this.next().type !== 'blockquote_end') {
	        body += this.tok();
	      }

	      return this.renderer.blockquote(body);
	    }
	    case 'list_start': {
	      var body = ''
	        , ordered = this.token.ordered;

	      while (this.next().type !== 'list_end') {
	        body += this.tok();
	      }

	      return this.renderer.list(body, ordered);
	    }
	    case 'list_item_start': {
	      var body = '';

	      while (this.next().type !== 'list_item_end') {
	        body += this.token.type === 'text'
	          ? this.parseText()
	          : this.tok();
	      }

	      return this.renderer.listitem(body);
	    }
	    case 'loose_item_start': {
	      var body = '';

	      while (this.next().type !== 'list_item_end') {
	        body += this.tok();
	      }

	      return this.renderer.listitem(body);
	    }
	    case 'html': {
	      var html = !this.token.pre && !this.options.pedantic
	        ? this.inline.output(this.token.text)
	        : this.token.text;
	      return this.renderer.html(html);
	    }
	    case 'paragraph': {
	      return this.renderer.paragraph(this.inline.output(this.token.text));
	    }
	    case 'text': {
	      return this.renderer.paragraph(this.parseText());
	    }
	  }
	};

	/**
	 * Helpers
	 */

	function escape(html, encode) {
	  return html
	    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;')
	    .replace(/"/g, '&quot;')
	    .replace(/'/g, '&#39;');
	}

	function unescape(html) {
		// explicitly match decimal, hex, and named HTML entities 
	  return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, function(_, n) {
	    n = n.toLowerCase();
	    if (n === 'colon') return ':';
	    if (n.charAt(0) === '#') {
	      return n.charAt(1) === 'x'
	        ? String.fromCharCode(parseInt(n.substring(2), 16))
	        : String.fromCharCode(+n.substring(1));
	    }
	    return '';
	  });
	}

	function replace(regex, opt) {
	  regex = regex.source;
	  opt = opt || '';
	  return function self(name, val) {
	    if (!name) return new RegExp(regex, opt);
	    val = val.source || val;
	    val = val.replace(/(^|[^\[])\^/g, '$1');
	    regex = regex.replace(name, val);
	    return self;
	  };
	}

	function noop() {}
	noop.exec = noop;

	function merge(obj) {
	  var i = 1
	    , target
	    , key;

	  for (; i < arguments.length; i++) {
	    target = arguments[i];
	    for (key in target) {
	      if (Object.prototype.hasOwnProperty.call(target, key)) {
	        obj[key] = target[key];
	      }
	    }
	  }

	  return obj;
	}


	/**
	 * Marked
	 */

	function marked(src, opt, callback) {
	  if (callback || typeof opt === 'function') {
	    if (!callback) {
	      callback = opt;
	      opt = null;
	    }

	    opt = merge({}, marked.defaults, opt || {});

	    var highlight = opt.highlight
	      , tokens
	      , pending
	      , i = 0;

	    try {
	      tokens = Lexer.lex(src, opt)
	    } catch (e) {
	      return callback(e);
	    }

	    pending = tokens.length;

	    var done = function(err) {
	      if (err) {
	        opt.highlight = highlight;
	        return callback(err);
	      }

	      var out;

	      try {
	        out = Parser.parse(tokens, opt);
	      } catch (e) {
	        err = e;
	      }

	      opt.highlight = highlight;

	      return err
	        ? callback(err)
	        : callback(null, out);
	    };

	    if (!highlight || highlight.length < 3) {
	      return done();
	    }

	    delete opt.highlight;

	    if (!pending) return done();

	    for (; i < tokens.length; i++) {
	      (function(token) {
	        if (token.type !== 'code') {
	          return --pending || done();
	        }
	        return highlight(token.text, token.lang, function(err, code) {
	          if (err) return done(err);
	          if (code == null || code === token.text) {
	            return --pending || done();
	          }
	          token.text = code;
	          token.escaped = true;
	          --pending || done();
	        });
	      })(tokens[i]);
	    }

	    return;
	  }
	  try {
	    if (opt) opt = merge({}, marked.defaults, opt);
	    return Parser.parse(Lexer.lex(src, opt), opt);
	  } catch (e) {
	    e.message += '\nPlease report this to https://github.com/chjj/marked.';
	    if ((opt || marked.defaults).silent) {
	      return '<p>An error occured:</p><pre>'
	        + escape(e.message + '', true)
	        + '</pre>';
	    }
	    throw e;
	  }
	}

	/**
	 * Options
	 */

	marked.options =
	marked.setOptions = function(opt) {
	  merge(marked.defaults, opt);
	  return marked;
	};

	marked.defaults = {
	  gfm: true,
	  tables: true,
	  breaks: false,
	  pedantic: false,
	  sanitize: false,
	  sanitizer: null,
	  mangle: true,
	  smartLists: false,
	  silent: false,
	  highlight: null,
	  langPrefix: 'lang-',
	  smartypants: false,
	  headerPrefix: '',
	  renderer: new Renderer,
	  xhtml: false
	};

	/**
	 * Expose
	 */

	marked.Parser = Parser;
	marked.parser = Parser.parse;

	marked.Renderer = Renderer;

	marked.Lexer = Lexer;
	marked.lexer = Lexer.lex;

	marked.InlineLexer = InlineLexer;
	marked.inlineLexer = InlineLexer.output;

	marked.parse = marked;

	if (true) {
	  module.exports = marked;
	} else if (typeof define === 'function' && define.amd) {
	  define(function() { return marked; });
	} else {
	  this.marked = marked;
	}

	}).call(function() {
	  return this || (typeof window !== 'undefined' ? window : global);
	}());

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 45 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 46 */,
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
	(function(addon) {

	    var component;

	    if (window.UIkit) {
	        component = addon(UIkit);
	    }

	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function(){
	            return component || addon(UIkit);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }

	})(function(UI) {

	    "use strict";

	    var editors = [];

	    UI.component('htmleditor', {

	        defaults: {
	            iframe       : false,
	            mode         : 'split',
	            markdown     : false,
	            autocomplete : true,
	            enablescripts: false,
	            height       : 500,
	            maxsplitsize : 1000,
	            codemirror   : { mode: 'htmlmixed', lineWrapping: true, dragDrop: false, autoCloseTags: true, matchTags: true, autoCloseBrackets: true, matchBrackets: true, indentUnit: 4, indentWithTabs: false, tabSize: 4, hintOptions: {completionSingle:false} },
	            toolbar      : [ 'bold', 'italic', 'strike', 'link', 'image', 'blockquote', 'listUl', 'listOl' ],
	            lblPreview   : 'Preview',
	            lblCodeview  : 'HTML',
	            lblMarkedview: 'Markdown'
	        },

	        boot: function() {

	            // init code
	            UI.ready(function(context) {

	                UI.$('textarea[data-uk-htmleditor]', context).each(function() {

	                    var editor = UI.$(this);

	                    if (!editor.data('htmleditor')) {
	                        UI.htmleditor(editor, UI.Utils.options(editor.attr('data-uk-htmleditor')));
	                    }
	                });
	            });
	        },

	        init: function() {

	            var $this = this, tpl = UI.components.htmleditor.template;

	            this.CodeMirror = this.options.CodeMirror || CodeMirror;
	            this.buttons    = {};

	            tpl = tpl.replace(/\{:lblPreview}/g, this.options.lblPreview);
	            tpl = tpl.replace(/\{:lblCodeview}/g, this.options.lblCodeview);

	            this.htmleditor = UI.$(tpl);
	            this.content    = this.htmleditor.find('.uk-htmleditor-content');
	            this.toolbar    = this.htmleditor.find('.uk-htmleditor-toolbar');
	            this.preview    = this.htmleditor.find('.uk-htmleditor-preview').children().eq(0);
	            this.code       = this.htmleditor.find('.uk-htmleditor-code');

	            this.element.before(this.htmleditor).appendTo(this.code);
	            this.editor = this.CodeMirror.fromTextArea(this.element[0], this.options.codemirror);
	            this.editor.htmleditor = this;
	            this.editor.on('change', UI.Utils.debounce(function() { $this.render(); }, 150));
	            this.editor.on('change', function() {
	                $this.editor.save();
	                $this.element.trigger('input');
	            });
	            this.code.find('.CodeMirror').css('height', this.options.height);

	            // iframe mode?
	            if (this.options.iframe) {

	                this.iframe = UI.$('<iframe class="uk-htmleditor-iframe" frameborder="0" scrolling="auto" height="100" width="100%"></iframe>');
	                this.preview.append(this.iframe);

	                // must open and close document object to start using it!
	                this.iframe[0].contentWindow.document.open();
	                this.iframe[0].contentWindow.document.close();

	                this.preview.container = UI.$(this.iframe[0].contentWindow.document).find('body');

	                // append custom stylesheet
	                if (typeof(this.options.iframe) === 'string') {
	                    this.preview.container.parent().append('<link rel="stylesheet" href="'+this.options.iframe+'">');
	                }

	            } else {
	                this.preview.container = this.preview;
	            }

	            UI.$win.on('resize load', UI.Utils.debounce(function() { $this.fit(); }, 200));

	            var previewContainer = this.iframe ? this.preview.container:$this.preview.parent(),
	                codeContent      = this.code.find('.CodeMirror-sizer'),
	                codeScroll       = this.code.find('.CodeMirror-scroll').on('scroll', UI.Utils.debounce(function() {

	                    if ($this.htmleditor.attr('data-mode') == 'tab') return;

	                    // calc position
	                    var codeHeight      = codeContent.height() - codeScroll.height(),
	                        previewHeight   = previewContainer[0].scrollHeight - ($this.iframe ? $this.iframe.height() : previewContainer.height()),
	                        ratio           = previewHeight / codeHeight,
	                        previewPosition = codeScroll.scrollTop() * ratio;

	                    // apply new scroll
	                    previewContainer.scrollTop(previewPosition);

	                }, 10));

	            this.htmleditor.on('click', '.uk-htmleditor-button-code, .uk-htmleditor-button-preview', function(e) {

	                e.preventDefault();

	                if ($this.htmleditor.attr('data-mode') == 'tab') {

	                    $this.htmleditor.find('.uk-htmleditor-button-code, .uk-htmleditor-button-preview').removeClass('uk-active').filter(this).addClass('uk-active');

	                    $this.activetab = UI.$(this).hasClass('uk-htmleditor-button-code') ? 'code' : 'preview';
	                    $this.htmleditor.attr('data-active-tab', $this.activetab);
	                    $this.editor.refresh();
	                }
	            });

	            // toolbar actions
	            this.htmleditor.on('click', 'a[data-htmleditor-button]', function() {

	                if (!$this.code.is(':visible')) return;

	                $this.trigger('action.' + UI.$(this).data('htmleditor-button'), [$this.editor]);
	            });

	            this.preview.parent().css('height', this.code.height());

	            // autocomplete
	            if (this.options.autocomplete && this.CodeMirror.showHint && this.CodeMirror.hint && this.CodeMirror.hint.html) {

	                this.editor.on('inputRead', UI.Utils.debounce(function() {
	                    var doc = $this.editor.getDoc(), POS = doc.getCursor(), mode = $this.CodeMirror.innerMode($this.editor.getMode(), $this.editor.getTokenAt(POS).state).mode.name;

	                    if (mode == 'xml') { //html depends on xml

	                        var cur = $this.editor.getCursor(), token = $this.editor.getTokenAt(cur);

	                        if (token.string.charAt(0) == '<' || token.type == 'attribute') {
	                            $this.CodeMirror.showHint($this.editor, $this.CodeMirror.hint.html, { completeSingle: false });
	                        }
	                    }
	                }, 100));
	            }

	            this.debouncedRedraw = UI.Utils.debounce(function () { $this.redraw(); }, 5);

	            this.on('init.uk.component', function() {
	                $this.debouncedRedraw();
	            });

	            this.element.attr('data-uk-check-display', 1).on('display.uk.check', function(e) {
	                if (this.htmleditor.is(":visible")) this.fit();
	            }.bind(this));

	            editors.push(this);
	        },

	        addButton: function(name, button) {
	            this.buttons[name] = button;
	        },

	        addButtons: function(buttons) {
	            UI.$.extend(this.buttons, buttons);
	        },

	        replaceInPreview: function(regexp, callback) {

	            var editor = this.editor, results = [], value = editor.getValue(), offset = -1, index = 0;

	            this.currentvalue = this.currentvalue.replace(regexp, function() {

	                offset = value.indexOf(arguments[0], ++offset);

	                var match  = {
	                    matches: arguments,
	                    from   : translateOffset(offset),
	                    to     : translateOffset(offset + arguments[0].length),
	                    replace: function(value) {
	                        editor.replaceRange(value, match.from, match.to);
	                    },
	                    inRange: function(cursor) {

	                        if (cursor.line === match.from.line && cursor.line === match.to.line) {
	                            return cursor.ch >= match.from.ch && cursor.ch < match.to.ch;
	                        }

	                        return  (cursor.line === match.from.line && cursor.ch   >= match.from.ch) ||
	                                (cursor.line >   match.from.line && cursor.line <  match.to.line) ||
	                                (cursor.line === match.to.line   && cursor.ch   <  match.to.ch);
	                    }
	                };

	                var result = typeof(callback) === 'string' ? callback : callback(match, index);

	                if (!result && result !== '') {
	                    return arguments[0];
	                }

	                index++;

	                results.push(match);
	                return result;
	            });

	            function translateOffset(offset) {
	                var result = editor.getValue().substring(0, offset).split('\n');
	                return { line: result.length - 1, ch: result[result.length - 1].length }
	            }

	            return results;
	        },

	        _buildtoolbar: function() {

	            if (!(this.options.toolbar && this.options.toolbar.length)) return;

	            var $this = this, bar = [];

	            this.toolbar.empty();

	            this.options.toolbar.forEach(function(button) {
	                if (!$this.buttons[button]) return;

	                var title = $this.buttons[button].title ? $this.buttons[button].title : button;

	                bar.push('<li><a data-htmleditor-button="'+button+'" title="'+title+'" data-uk-tooltip>'+$this.buttons[button].label+'</a></li>');
	            });

	            this.toolbar.html(bar.join('\n'));
	        },

	        fit: function() {

	            var mode = this.options.mode;

	            if (mode == 'split' && this.htmleditor.width() < this.options.maxsplitsize) {
	                mode = 'tab';
	            }

	            if (mode == 'tab') {
	                if (!this.activetab) {
	                    this.activetab = 'code';
	                    this.htmleditor.attr('data-active-tab', this.activetab);
	                }

	                this.htmleditor.find('.uk-htmleditor-button-code, .uk-htmleditor-button-preview').removeClass('uk-active')
	                    .filter(this.activetab == 'code' ? '.uk-htmleditor-button-code' : '.uk-htmleditor-button-preview')
	                    .addClass('uk-active');
	            }

	            this.editor.refresh();
	            this.preview.parent().css('height', this.code.height());

	            this.htmleditor.attr('data-mode', mode);
	        },

	        redraw: function() {
	            this._buildtoolbar();
	            this.render();
	            this.fit();
	        },

	        getMode: function() {
	            return this.editor.getOption('mode');
	        },

	        getCursorMode: function() {
	            var param = { mode: 'html'};
	            this.trigger('cursorMode', [param]);
	            return param.mode;
	        },

	        render: function() {

	            this.currentvalue = this.editor.getValue();

	            if (!this.options.enablescripts) {
	                this.currentvalue = this.currentvalue.replace(/<(script|style)\b[^<]*(?:(?!<\/(script|style)>)<[^<]*)*<\/(script|style)>/img, '');
	            }

	            // empty code
	            if (!this.currentvalue) {

	                this.element.val('');
	                this.preview.container.html('');

	                return;
	            }

	            this.trigger('render', [this]);
	            this.trigger('renderLate', [this]);

	            this.preview.container.html(this.currentvalue);
	        },

	        addShortcut: function(name, callback) {
	            var map = {};
	            if (!UI.$.isArray(name)) {
	                name = [name];
	            }

	            name.forEach(function(key) {
	                map[key] = callback;
	            });

	            this.editor.addKeyMap(map);

	            return map;
	        },

	        addShortcutAction: function(action, shortcuts) {
	            var editor = this;
	            this.addShortcut(shortcuts, function() {
	                editor.element.trigger('action.' + action, [editor.editor]);
	            });
	        },

	        replaceSelection: function(replace) {

	            var text = this.editor.getSelection();

	            if (!text.length) {

	                var cur     = this.editor.getCursor(),
	                    curLine = this.editor.getLine(cur.line),
	                    start   = cur.ch,
	                    end     = start;

	                while (end < curLine.length && /[\w$]+/.test(curLine.charAt(end))) ++end;
	                while (start && /[\w$]+/.test(curLine.charAt(start - 1))) --start;

	                var curWord = start != end && curLine.slice(start, end);

	                if (curWord) {
	                    this.editor.setSelection({ line: cur.line, ch: start}, { line: cur.line, ch: end });
	                    text = curWord;
	                }
	            }

	            var html = replace.replace('$1', text);

	            this.editor.replaceSelection(html, 'end');
	            this.editor.focus();
	        },

	        replaceLine: function(replace) {
	            var pos  = this.editor.getDoc().getCursor(),
	                text = this.editor.getLine(pos.line),
	                html = replace.replace('$1', text);

	            this.editor.replaceRange(html , { line: pos.line, ch: 0 }, { line: pos.line, ch: text.length });
	            this.editor.setCursor({ line: pos.line, ch: html.length });
	            this.editor.focus();
	        },

	        save: function() {
	            this.editor.save();
	        }
	    });


	    UI.components.htmleditor.template = [
	        '<div class="uk-htmleditor uk-clearfix" data-mode="split">',
	            '<div class="uk-htmleditor-navbar">',
	                '<ul class="uk-htmleditor-navbar-nav uk-htmleditor-toolbar"></ul>',
	                '<div class="uk-htmleditor-navbar-flip">',
	                    '<ul class="uk-htmleditor-navbar-nav">',
	                        '<li class="uk-htmleditor-button-code"><a>{:lblCodeview}</a></li>',
	                        '<li class="uk-htmleditor-button-preview"><a>{:lblPreview}</a></li>',
	                        '<li><a data-htmleditor-button="fullscreen"><i class="uk-icon-expand"></i></a></li>',
	                    '</ul>',
	                '</div>',
	            '</div>',
	            '<div class="uk-htmleditor-content">',
	                '<div class="uk-htmleditor-code"></div>',
	                '<div class="uk-htmleditor-preview"><div></div></div>',
	            '</div>',
	        '</div>'
	    ].join('');


	    UI.plugin('htmleditor', 'base', {

	        init: function(editor) {

	            editor.addButtons({

	                fullscreen: {
	                    title  : 'Fullscreen',
	                    label  : '<i class="uk-icon-expand"></i>'
	                },
	                bold : {
	                    title  : 'Bold',
	                    label  : '<i class="uk-icon-bold"></i>'
	                },
	                italic : {
	                    title  : 'Italic',
	                    label  : '<i class="uk-icon-italic"></i>'
	                },
	                strike : {
	                    title  : 'Strikethrough',
	                    label  : '<i class="uk-icon-strikethrough"></i>'
	                },
	                blockquote : {
	                    title  : 'Blockquote',
	                    label  : '<i class="uk-icon-quote-right"></i>'
	                },
	                link : {
	                    title  : 'Link',
	                    label  : '<i class="uk-icon-link"></i>'
	                },
	                image : {
	                    title  : 'Image',
	                    label  : '<i class="uk-icon-picture-o"></i>'
	                },
	                listUl : {
	                    title  : 'Unordered List',
	                    label  : '<i class="uk-icon-list-ul"></i>'
	                },
	                listOl : {
	                    title  : 'Ordered List',
	                    label  : '<i class="uk-icon-list-ol"></i>'
	                }

	            });

	            addAction('bold', '<strong>$1</strong>');
	            addAction('italic', '<em>$1</em>');
	            addAction('strike', '<del>$1</del>');
	            addAction('blockquote', '<blockquote><p>$1</p></blockquote>', 'replaceLine');
	            addAction('link', '<a href="http://">$1</a>');
	            addAction('image', '<img src="http://" alt="$1">');

	            var listfn = function(tag) {
	                if (editor.getCursorMode() == 'html') {

	                    tag = tag || 'ul';

	                    var cm        = editor.editor,
	                        doc       = cm.getDoc(),
	                        pos       = doc.getCursor(true),
	                        posend    = doc.getCursor(false),
	                        im        = CodeMirror.innerMode(cm.getMode(), cm.getTokenAt(cm.getCursor()).state),
	                        inList    = im && im.state && im.state.context && ['ul','ol'].indexOf(im.state.context.tagName) != -1;

	                    for (var i=pos.line; i<(posend.line+1);i++) {
	                        cm.replaceRange('<li>'+cm.getLine(i)+'</li>', { line: i, ch: 0 }, { line: i, ch: cm.getLine(i).length });
	                    }

	                    if (!inList) {
	                        cm.replaceRange('<'+tag+'>'+"\n"+cm.getLine(pos.line), { line: pos.line, ch: 0 }, { line: pos.line, ch: cm.getLine(pos.line).length });
	                        cm.replaceRange(cm.getLine((posend.line+1))+"\n"+'</'+tag+'>', { line: (posend.line+1), ch: 0 }, { line: (posend.line+1), ch: cm.getLine((posend.line+1)).length });
	                        cm.setCursor({ line: posend.line+1, ch: cm.getLine(posend.line+1).length });
	                    } else {
	                        cm.setCursor({ line: posend.line, ch: cm.getLine(posend.line).length });
	                    }

	                    cm.focus();
	                }
	            };

	            editor.on('action.listUl', function() {
	                listfn('ul');
	            });

	            editor.on('action.listOl', function() {
	                listfn('ol');
	            });

	            editor.htmleditor.on('click', 'a[data-htmleditor-button="fullscreen"]', function() {

	                editor.htmleditor.toggleClass('uk-htmleditor-fullscreen');

	                var wrap = editor.editor.getWrapperElement();

	                if (editor.htmleditor.hasClass('uk-htmleditor-fullscreen')) {

	                    var fixedParent = false, parents = editor.htmleditor.parents().each(function(){
	                        if (UI.$(this).css('position')=='fixed' && !UI.$(this).is('html')) {
	                            fixedParent = UI.$(this);
	                        }
	                    });

	                    editor.htmleditor.data('fixedParents', false);

	                    if (fixedParent) {

	                        var transformed = [];

	                        fixedParent = fixedParent.parent().find(parents).each(function(){

	                            if (UI.$(this).css('transform') != 'none') {
	                                transformed.push(UI.$(this).data('transform-reset', {
	                                    'transform': this.style.transform,
	                                    '-webkit-transform': this.style.webkitTransform,
	                                    '-webkit-transition':this.style.webkitTransition,
	                                    'transition':this.style.transition
	                                }).css({
	                                    'transform': 'none',
	                                    '-webkit-transform': 'none',
	                                    '-webkit-transition':'none',
	                                    'transition':'none'
	                                }));
	                            }
	                        });

	                        editor.htmleditor.data('fixedParents', transformed);
	                    }

	                    editor.editor.state.fullScreenRestore = {scrollTop: window.pageYOffset, scrollLeft: window.pageXOffset, width: wrap.style.width, height: wrap.style.height};
	                    wrap.style.width  = '';
	                    wrap.style.height = editor.content.height()+'px';
	                    document.documentElement.style.overflow = 'hidden';

	                } else {

	                    document.documentElement.style.overflow = '';
	                    var info = editor.editor.state.fullScreenRestore;
	                    wrap.style.width = info.width; wrap.style.height = info.height;
	                    window.scrollTo(info.scrollLeft, info.scrollTop);

	                    if (editor.htmleditor.data('fixedParents')) {
	                        editor.htmleditor.data('fixedParents').forEach(function(parent){
	                            parent.css(parent.data('transform-reset'));
	                        });
	                    }
	                }

	                setTimeout(function() {
	                    editor.fit();
	                    UI.$win.trigger('resize');
	                }, 50);
	            });

	            editor.addShortcut(['Ctrl-S', 'Cmd-S'], function() { editor.element.trigger('htmleditor-save', [editor]); });
	            editor.addShortcutAction('bold', ['Ctrl-B', 'Cmd-B']);

	            function addAction(name, replace, mode) {
	                editor.on('action.'+name, function() {
	                    if (editor.getCursorMode() == 'html') {
	                        editor[mode == 'replaceLine' ? 'replaceLine' : 'replaceSelection'](replace);
	                    }
	                });
	            }
	        }
	    });

	    UI.plugin('htmleditor', 'markdown', {

	        init: function(editor) {

	            var parser = editor.options.mdparser || window.marked || null;

	            if (!parser) return;

	            if (editor.options.markdown) {
	                enableMarkdown();
	            }

	            addAction('bold', '**$1**');
	            addAction('italic', '*$1*');
	            addAction('strike', '~~$1~~');
	            addAction('blockquote', '> $1', 'replaceLine');
	            addAction('link', '[$1](http://)');
	            addAction('image', '![$1](http://)');

	            editor.on('action.listUl', function() {

	                if (editor.getCursorMode() == 'markdown') {

	                    var cm      = editor.editor,
	                        pos     = cm.getDoc().getCursor(true),
	                        posend  = cm.getDoc().getCursor(false);

	                    for (var i=pos.line; i<(posend.line+1);i++) {
	                        cm.replaceRange('* '+cm.getLine(i), { line: i, ch: 0 }, { line: i, ch: cm.getLine(i).length });
	                    }

	                    cm.setCursor({ line: posend.line, ch: cm.getLine(posend.line).length });
	                    cm.focus();
	                }
	            });

	            editor.on('action.listOl', function() {

	                if (editor.getCursorMode() == 'markdown') {

	                    var cm      = editor.editor,
	                        pos     = cm.getDoc().getCursor(true),
	                        posend  = cm.getDoc().getCursor(false),
	                        prefix  = 1;

	                    if (pos.line > 0) {
	                        var prevline = cm.getLine(pos.line-1), matches;

	                        if(matches = prevline.match(/^(\d+)\./)) {
	                            prefix = Number(matches[1])+1;
	                        }
	                    }

	                    for (var i=pos.line; i<(posend.line+1);i++) {
	                        cm.replaceRange(prefix+'. '+cm.getLine(i), { line: i, ch: 0 }, { line: i, ch: cm.getLine(i).length });
	                        prefix++;
	                    }

	                    cm.setCursor({ line: posend.line, ch: cm.getLine(posend.line).length });
	                    cm.focus();
	                }
	            });

	            editor.on('renderLate', function() {
	                if (editor.editor.options.mode == 'gfm') {
	                    editor.currentvalue = parser(editor.currentvalue);
	                }
	            });

	            editor.on('cursorMode', function(e, param) {
	                if (editor.editor.options.mode == 'gfm') {
	                    var pos = editor.editor.getDoc().getCursor();
	                    if (!editor.editor.getTokenAt(pos).state.base.htmlState) {
	                        param.mode = 'markdown';
	                    }
	                }
	            });

	            UI.$.extend(editor, {

	                enableMarkdown: function() {
	                    enableMarkdown();
	                    this.render();
	                },
	                disableMarkdown: function() {
	                    this.editor.setOption('mode', 'htmlmixed');
	                    this.htmleditor.find('.uk-htmleditor-button-code a').html(this.options.lblCodeview);
	                    this.render();
	                }

	            });

	            // switch markdown mode on event
	            editor.on({
	                enableMarkdown  : function() { editor.enableMarkdown(); },
	                disableMarkdown : function() { editor.disableMarkdown(); }
	            });

	            function enableMarkdown() {
	                editor.editor.setOption('mode', 'gfm');
	                editor.htmleditor.find('.uk-htmleditor-button-code a').html(editor.options.lblMarkedview);
	            }

	            function addAction(name, replace, mode) {
	                editor.on('action.'+name, function() {
	                    if (editor.getCursorMode() == 'markdown') {
	                        editor[mode == 'replaceLine' ? 'replaceLine' : 'replaceSelection'](replace);
	                    }
	                });
	            }
	        }
	    });

	    return UI.htmleditor;
	});


/***/ },
/* 48 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 49 */,
/* 50 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 51 */,
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(53)

	/* template */
	var __vue_template__ = __webpack_require__(54)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },
/* 53 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    closable: {
	      type: Boolean,
	      default: false
	    },
	    color: { type: String },
	    large: {
	      type: Boolean,
	      default: false
	    }
	  }
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "uk-alert",
	    class: {
	      'uk-alert-success': _vm.color == 'success',
	        'uk-alert-warning': _vm.color == 'warning',
	        'uk-alert-danger': _vm.color == 'danger',
	        'uk-alert-large': _vm.large
	    },
	    attrs: {
	      "data-uk-alert": ""
	    }
	  }, [(_vm.closable) ? _c('a', {
	    staticClass: "uk-alert-close uk-close",
	    attrs: {
	      "href": ""
	    }
	  }) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(56)

	/* template */
	var __vue_template__ = __webpack_require__(57)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'UkModal',
	  data: function data() {
	    return {
	      dialog: undefined
	    };
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
	  mounted: function mounted() {
	    this.dialog = this.$ui.modal(this.$refs.modal, {
	      center: this.center,
	      modal: this.modal,
	      minScrollHeight: this.minScrollHeight,
	      keyboard: this.keyboard,
	      bgclose: this.bgclose
	    });

	    var self = this;
	    this.dialog.on('show.uk.modal', function () {
	      return self.$emit('open');
	    });
	    this.dialog.on('hide.uk.modal', function () {
	      return self.$emit('close');
	    });
	  },

	  methods: {
	    open: function open() {
	      this.dialog.show();
	    },
	    close: function close() {
	      this.dialog.hide();
	    }
	  }
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    ref: "modal",
	    staticClass: "uk-modal"
	  }, [_c('div', {
	    class: {
	      'uk-modal-dialog': true,
	      'uk-modal-dialog-lightbox': _vm.lightbox,
	      'uk-modal-dialog-blank': _vm.blank,
	      'uk-modal-dialog-large': _vm.large
	    }
	  }, [_vm._t("header", [_c('div', {
	    staticClass: "uk-modal-header",
	    slot: "header"
	  }, [_c('button', {
	    staticClass: "uk-modal-close uk-close uk-float-right"
	  }), _vm._v(" "), (_vm.title) ? _c('h3', {
	    staticClass: "uk-display-inline"
	  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e()])]), _vm._v(" "), _vm._t("default"), _vm._v(" "), _vm._t("footer")], 2)])
	},staticRenderFns: []}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(59);

	exports.default = {
	  name: 'UkPager',
	  props: {
	    items: {
	      type: Number,
	      default: 1
	    },
	    size: {
	      type: Number,
	      default: 10
	    },
	    current: {
	      type: Number,
	      default: 0
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;

	    window.UIkit.pagination(this.$refs.pager, {
	      items: this.items,
	      itemsOnPage: this.size,
	      currentPage: this.current
	    });

	    this.$ui.$(this.$refs.pager).on('select.uk.pagination', function (e, pageIndex) {
	      _this.$emit('pagechanged', pageIndex);
	    });
	  },
	  render: function render(h) {
	    return h(
	      'ul',
	      { 'class': 'uk-pagination', ref: 'pager' },
	      []
	    );
	  }
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! UIkit 2.27.2 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
	/*
	 * Based on simplePagination - Copyright (c) 2012 Flavius Matis - http://flaviusmatis.github.com/simplePagination.js/ (MIT)
	 */
	(function(addon) {

	    var component;

	    if (window.UIkit) {
	        component = addon(UIkit);
	    }

	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function(){
	            return component || addon(UIkit);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }

	})(function(UI){

	    "use strict";

	    UI.component('pagination', {

	        defaults: {
	            items          : 1,
	            itemsOnPage    : 1,
	            pages          : 0,
	            displayedPages : 7,
	            edges          : 1,
	            currentPage    : 0,
	            lblPrev        : false,
	            lblNext        : false,
	            onSelectPage   : function() {}
	        },

	        boot: function() {

	            // init code
	            UI.ready(function(context) {

	                UI.$('[data-uk-pagination]', context).each(function(){
	                    var ele = UI.$(this);

	                    if (!ele.data('pagination')) {
	                        UI.pagination(ele, UI.Utils.options(ele.attr('data-uk-pagination')));
	                    }
	                });
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.pages         = this.options.pages ?  this.options.pages : Math.ceil(this.options.items / this.options.itemsOnPage) ? Math.ceil(this.options.items / this.options.itemsOnPage) : 1;
	            this.currentPage   = this.options.currentPage;
	            this.halfDisplayed = this.options.displayedPages / 2;

	            this.on('click', 'a[data-page]', function(e){
	                e.preventDefault();
	                $this.selectPage(UI.$(this).data('page'));
	            });

	            this._render();
	        },

	        _getInterval: function() {

	            return {
	                start: Math.ceil(this.currentPage > this.halfDisplayed ? Math.max(Math.min(this.currentPage - this.halfDisplayed, (this.pages - this.options.displayedPages)), 0) : 0),
	                end  : Math.ceil(this.currentPage > this.halfDisplayed ? Math.min(this.currentPage + this.halfDisplayed, this.pages) : Math.min(this.options.displayedPages, this.pages))
	            };
	        },

	        render: function(pages) {
	            this.pages = pages ? pages : this.pages;
	            this._render();
	        },

	        selectPage: function(pageIndex, pages) {
	            this.currentPage = pageIndex;
	            this.render(pages);

	            this.options.onSelectPage.apply(this, [pageIndex]);
	            this.trigger('select.uk.pagination', [pageIndex, this]);
	        },

	        _render: function() {

	            var o = this.options, interval = this._getInterval(), i;

	            this.element.empty();

	            // Generate Prev link
	            if (o.lblPrev) this._append(this.currentPage - 1, {text: o.lblPrev});

	            // Generate start edges
	            if (interval.start > 0 && o.edges > 0) {

	                var end = Math.min(o.edges, interval.start);

	                for (i = 0; i < end; i++) this._append(i);

	                if (o.edges < interval.start && (interval.start - o.edges != 1)) {
	                    this.element.append('<li><span>...</span></li>');
	                } else if (interval.start - o.edges == 1) {
	                    this._append(o.edges);
	                }
	            }

	            // Generate interval links
	            for (i = interval.start; i < interval.end; i++) this._append(i);

	            // Generate end edges
	            if (interval.end < this.pages && o.edges > 0) {

	                if (this.pages - o.edges > interval.end && (this.pages - o.edges - interval.end != 1)) {
	                    this.element.append('<li><span>...</span></li>');
	                } else if (this.pages - o.edges - interval.end == 1) {
	                    this._append(interval.end++);
	                }

	                var begin = Math.max(this.pages - o.edges, interval.end);

	                for (i = begin; i < this.pages; i++) this._append(i);
	            }

	            // Generate Next link (unless option is set for at front)
	            if (o.lblNext) this._append(this.currentPage + 1, {text: o.lblNext});
	        },

	        _append: function(pageIndex, opts) {

	            var item, options;

	            pageIndex = pageIndex < 0 ? 0 : (pageIndex < this.pages ? pageIndex : this.pages - 1);
	            options   = UI.$.extend({ text: pageIndex + 1 }, opts);

	            item = (pageIndex == this.currentPage) ? '<li class="uk-active"><span>' + (options.text) + '</span></li>' : '<li><a href="#page-'+(pageIndex+1)+'" data-page="'+pageIndex+'">'+options.text+'</a></li>';

	            this.element.append(item);
	        }
	    });

	    return UI.pagination;
	});


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(61)

	/* template */
	var __vue_template__ = __webpack_require__(62)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },
/* 61 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['color']
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "uk-badge",
	    class: {
	      'uk-badge-success': _vm.color == 'success',
	        'uk-badge-warning': _vm.color == 'warning',
	        'uk-badge-danger': _vm.color == 'danger'
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ }
/******/ ]);