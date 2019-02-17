/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

Nova.booting(function (Vue, router, store) {
    Vue.component('nova-highcharts', __webpack_require__(3));
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(4)
/* template */
var __vue_template__ = __webpack_require__(10)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Card.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b9bc2c0a", Component.options)
  } else {
    hotAPI.reload("data-v-b9bc2c0a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Base_Chart__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Base_Chart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Base_Chart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_laravel_nova__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_laravel_nova___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_laravel_nova__);
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'ChartMetric',
    mixins: [],
    components: {
        BaseChartMetric: __WEBPACK_IMPORTED_MODULE_0__Base_Chart___default.a
    },
    props: {
        card: {
            type: Object,
            required: true
        },
        resourceName: {
            type: String,
            default: ''
        },
        resourceId: {
            type: [Number, String],
            default: ''
        },
        lens: {
            type: String,
            default: ''
        }
    },

    data: function data() {
        return {
            loading: true,
            options: [],
            title: '',
            selectedRangeKey: null
        };
    },

    created: function created() {
        if (this.hasRanges) {
            this.selectedRangeKey = this.card.ranges[0].value;
        }
    },
    mounted: function mounted() {
        this.fetch();
    },


    methods: {
        handleRangeSelected: function handleRangeSelected(key) {
            this.selectedRangeKey = key;
            this.fetch();
        },
        fetch: function fetch() {
            var _this = this;

            this.loading = true;
            Object(__WEBPACK_IMPORTED_MODULE_1_laravel_nova__["Minimum"])(Nova.request().get(this.metricEndpoint, this.metricPayload)).then(function (_ref) {
                var _ref$data = _ref.data,
                    options = _ref$data.options,
                    title = _ref$data.title;

                _this.options = options;
                _this.title = title;
                _this.loading = false;
            });
        }
    },

    computed: {
        hasRanges: function hasRanges() {
            return this.card.ranges.length > 0;
        },
        metricPayload: function metricPayload() {
            var payload = {
                params: {
                    timezone: this.userTimezone,
                    twelveHourTime: this.usesTwelveHourTime
                }
            };

            if (this.hasRanges) {
                payload.params.range = this.selectedRangeKey;
            }

            return payload;
        },
        metricEndpoint: function metricEndpoint() {
            var lens = this.lens !== '' ? '/lens/' + this.lens : '';
            if (this.resourceName && this.resourceId) {
                return '/nova-api/' + this.resourceName + lens + '/' + this.resourceId + '/metrics/' + this.card.uriKey;
            } else if (this.resourceName) {
                return '/nova-api/' + this.resourceName + lens + '/metrics/' + this.card.uriKey;
            } else {
                return '/nova-api/metrics/' + this.card.uriKey;
            }
        }
    }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(6)
/* template */
var __vue_template__ = __webpack_require__(8)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Base/Chart.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4464bfab", Component.options)
  } else {
    hotAPI.reload("data-v-4464bfab", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highcharts__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_highcharts__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BaseChartMetric',
    props: {
        loading: Boolean,
        title: '',
        options: {},
        ranges: { type: Array, default: function _default() {
                return [];
            } },
        selectedRangeKey: [String, Number]
    },

    data: function data() {
        return { chartist: null };
    },

    watch: {
        selectedRangeKey: function selectedRangeKey(newRange, oldRange) {
            this.renderChart();
        },

        chartData: function chartData(newData, oldData) {
            this.renderChart();
        }
    },

    mounted: function mounted() {
        this.reload();
    },


    methods: {
        renderChart: function renderChart() {
            this.reload();
        },
        handleChange: function handleChange(event) {
            this.$emit('selected', event.target.value);
        },
        reload: function reload() {
            this.chartist = new __WEBPACK_IMPORTED_MODULE_0_highcharts___default.a.chart(this.options);

            /**
             *{
                chart: {
                    renderTo: 'container',
                    type: 'area'
                },
                title: {
                    text: 'US and USSR nuclear stockpiles'
                },
                subtitle: {
                    text: 'Sources: <a href="https://thebulletin.org/2006/july/global-nuclear-stockpiles-1945-2006">' +
                        'thebulletin.org</a> &amp; <a href="https://www.armscontrol.org/factsheets/Nuclearweaponswhohaswhat">' +
                        'armscontrol.org</a>'
                },
                xAxis: {
                    allowDecimals: false,
                    labels: {
                        formatter: function () {
                            return this.value; // clean, unformatted number for year
                        }
                    }
                },
                yAxis: {
                    title: {
                        text: 'Nuclear weapon states'
                    },
                    labels: {
                        formatter: function () {
                            return this.value / 1000 + 'k';
                        }
                    }
                },
                tooltip: {
                    pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
                },
                plotOptions: {
                    area: {
                        pointStart: 1940,
                        marker: {
                            enabled: false,
                            symbol: 'circle',
                            radius: 2,
                            states: {
                                hover: {
                                    enabled: true
                                }
                            }
                        }
                    }
                },
                series: [{
                    name: 'USA',
                    data: [
                        null, null, null, null, null, 6, 11, 32, 110, 235,
                        369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
                        20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
                        26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                        24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
                        21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
                        10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
                        5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018
                    ]
                }, {
                    name: 'USSR/Russia',
                    data: [null, null, null, null, null, null, null, null, null, null,
                        5, 25, 50, 120, 150, 200, 426, 660, 869, 1060,
                        1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
                        11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
                        30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,
                        37000, 35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                        21000, 20000, 19000, 18000, 18000, 17000, 16000, 15537, 14162, 12787,
                        12600, 11400, 5500, 4512, 4502, 4502, 4500, 4500
                    ]
                }]
            }
             */
        }
    }
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v7.0.3 (2019-02-06)

 (c) 2009-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(N,I){"object"===typeof module&&module.exports?(I["default"]=I,module.exports=N.document?I(N):I): true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return I(N)}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):N.Highcharts=I(N)})("undefined"!==typeof window?window:this,function(N){var I=function(){var a="undefined"===typeof N?"undefined"!==typeof window?window:{}:N,y=a.document,F=a.navigator&&a.navigator.userAgent||"",G=y&&y.createElementNS&&!!y.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,k=/(edge|msie|trident)/i.test(F)&&
!a.opera,c=-1!==F.indexOf("Firefox"),p=-1!==F.indexOf("Chrome"),t=c&&4>parseInt(F.split("Firefox/")[1],10);return a.Highcharts?a.Highcharts.error(16,!0):{product:"Highcharts",version:"7.0.3",deg2rad:2*Math.PI/360,doc:y,hasBidiBug:t,hasTouch:y&&void 0!==y.documentElement.ontouchstart,isMS:k,isWebKit:-1!==F.indexOf("AppleWebKit"),isFirefox:c,isChrome:p,isSafari:!p&&-1!==F.indexOf("Safari"),isTouchDevice:/(Mobile|Android|Windows Phone)/.test(F),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},
symbolSizes:{},svg:G,win:a,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){},charts:[]}}();(function(a){a.timers=[];var y=a.charts,F=a.doc,G=a.win;a.error=function(k,c,p){var t=a.isNumber(k)?"Highcharts error #"+k+": www.highcharts.com/errors/"+k:k;p&&a.fireEvent(p,"displayError",{code:k});if(c)throw Error(t);G.console&&console.log(t)};a.Fx=function(a,c,p){this.options=c;this.elem=a;this.prop=p};a.Fx.prototype={dSetter:function(){var a=this.paths[0],c=this.paths[1],
p=[],t=this.now,v=a.length,w;if(1===t)p=this.toD;else if(v===c.length&&1>t)for(;v--;)w=parseFloat(a[v]),p[v]=isNaN(w)?c[v]:t*parseFloat(c[v]-w)+w;else p=c;this.elem.attr("d",p,null,!0)},update:function(){var a=this.elem,c=this.prop,p=this.now,t=this.options.step;if(this[c+"Setter"])this[c+"Setter"]();else a.attr?a.element&&a.attr(c,p,null,!0):a.style[c]=p+this.unit;t&&t.call(a,p,this)},run:function(k,c,p){var t=this,v=t.options,w=function(a){return w.stopped?!1:t.step(a)},r=G.requestAnimationFrame||
function(a){setTimeout(a,13)},h=function(){for(var e=0;e<a.timers.length;e++)a.timers[e]()||a.timers.splice(e--,1);a.timers.length&&r(h)};k!==c||this.elem["forceAnimate:"+this.prop]?(this.startTime=+new Date,this.start=k,this.end=c,this.unit=p,this.now=this.start,this.pos=0,w.elem=this.elem,w.prop=this.prop,w()&&1===a.timers.push(w)&&r(h)):(delete v.curAnim[this.prop],v.complete&&0===Object.keys(v.curAnim).length&&v.complete.call(this.elem))},step:function(k){var c=+new Date,p,t=this.options,v=this.elem,
w=t.complete,r=t.duration,h=t.curAnim;v.attr&&!v.element?k=!1:k||c>=r+this.startTime?(this.now=this.end,this.pos=1,this.update(),p=h[this.prop]=!0,a.objectEach(h,function(a){!0!==a&&(p=!1)}),p&&w&&w.call(v),k=!1):(this.pos=t.easing((c-this.startTime)/r),this.now=this.start+(this.end-this.start)*this.pos,this.update(),k=!0);return k},initPath:function(k,c,p){function t(a){var d,g;for(b=a.length;b--;)d="M"===a[b]||"L"===a[b],g=/[a-zA-Z]/.test(a[b+3]),d&&g&&a.splice(b+1,0,a[b+1],a[b+2],a[b+1],a[b+2])}
function v(a,g){for(;a.length<d;){a[0]=g[d-a.length];var e=a.slice(0,n);[].splice.apply(a,[0,0].concat(e));x&&(e=a.slice(a.length-n),[].splice.apply(a,[a.length,0].concat(e)),b--)}a[0]="M"}function w(a,b){for(var e=(d-a.length)/n;0<e&&e--;)g=a.slice().splice(a.length/u-n,n*u),g[0]=b[d-n-e*n],l&&(g[n-6]=g[n-2],g[n-5]=g[n-1]),[].splice.apply(a,[a.length/u,0].concat(g)),x&&e--}c=c||"";var r,h=k.startX,e=k.endX,l=-1<c.indexOf("C"),n=l?7:3,d,g,b;c=c.split(" ");p=p.slice();var x=k.isArea,u=x?2:1,H;l&&(t(c),
t(p));if(h&&e){for(b=0;b<h.length;b++)if(h[b]===e[0]){r=b;break}else if(h[0]===e[e.length-h.length+b]){r=b;H=!0;break}void 0===r&&(c=[])}c.length&&a.isNumber(r)&&(d=p.length+r*u*n,H?(v(c,p),w(p,c)):(v(p,c),w(c,p)));return[c,p]},fillSetter:function(){a.Fx.prototype.strokeSetter.apply(this,arguments)},strokeSetter:function(){this.elem.attr(this.prop,a.color(this.start).tweenTo(a.color(this.end),this.pos),null,!0)}};a.merge=function(){var k,c=arguments,p,t={},v=function(c,r){"object"!==typeof c&&(c=
{});a.objectEach(r,function(h,e){!a.isObject(h,!0)||a.isClass(h)||a.isDOMElement(h)?c[e]=r[e]:c[e]=v(c[e]||{},h)});return c};!0===c[0]&&(t=c[1],c=Array.prototype.slice.call(c,2));p=c.length;for(k=0;k<p;k++)t=v(t,c[k]);return t};a.pInt=function(a,c){return parseInt(a,c||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(k,c){return!!k&&"object"===typeof k&&(!c||
!a.isArray(k))};a.isDOMElement=function(k){return a.isObject(k)&&"number"===typeof k.nodeType};a.isClass=function(k){var c=k&&k.constructor;return!(!a.isObject(k,!0)||a.isDOMElement(k)||!c||!c.name||"Object"===c.name)};a.isNumber=function(a){return"number"===typeof a&&!isNaN(a)&&Infinity>a&&-Infinity<a};a.erase=function(a,c){for(var k=a.length;k--;)if(a[k]===c){a.splice(k,1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(k,c,p){var t;a.isString(c)?a.defined(p)?k.setAttribute(c,
p):k&&k.getAttribute&&((t=k.getAttribute(c))||"class"!==c||(t=k.getAttribute(c+"Name"))):a.defined(c)&&a.isObject(c)&&a.objectEach(c,function(a,c){k.setAttribute(c,a)});return t};a.splat=function(k){return a.isArray(k)?k:[k]};a.syncTimeout=function(a,c,p){if(c)return setTimeout(a,c,p);a.call(0,p)};a.clearTimeout=function(k){a.defined(k)&&clearTimeout(k)};a.extend=function(a,c){var k;a||(a={});for(k in c)a[k]=c[k];return a};a.pick=function(){var a=arguments,c,p,t=a.length;for(c=0;c<t;c++)if(p=a[c],
void 0!==p&&null!==p)return p};a.css=function(k,c){a.isMS&&!a.svg&&c&&void 0!==c.opacity&&(c.filter="alpha(opacity\x3d"+100*c.opacity+")");a.extend(k.style,c)};a.createElement=function(k,c,p,t,v){k=F.createElement(k);var w=a.css;c&&a.extend(k,c);v&&w(k,{padding:0,border:"none",margin:0});p&&w(k,p);t&&t.appendChild(k);return k};a.extendClass=function(k,c){var p=function(){};p.prototype=new k;a.extend(p.prototype,c);return p};a.pad=function(a,c,p){return Array((c||2)+1-String(a).replace("-","").length).join(p||
0)+a};a.relativeLength=function(a,c,p){return/%$/.test(a)?c*parseFloat(a)/100+(p||0):parseFloat(a)};a.wrap=function(a,c,p){var k=a[c];a[c]=function(){var a=Array.prototype.slice.call(arguments),c=arguments,r=this;r.proceed=function(){k.apply(r,arguments.length?arguments:c)};a.unshift(k);a=p.apply(this,a);r.proceed=null;return a}};a.datePropsToTimestamps=function(k){a.objectEach(k,function(c,p){a.isObject(c)&&"function"===typeof c.getTime?k[p]=c.getTime():(a.isObject(c)||a.isArray(c))&&a.datePropsToTimestamps(c)})};
a.formatSingle=function(k,c,p){var t=/\.([0-9])/,v=a.defaultOptions.lang;/f$/.test(k)?(p=(p=k.match(t))?p[1]:-1,null!==c&&(c=a.numberFormat(c,p,v.decimalPoint,-1<k.indexOf(",")?v.thousandsSep:""))):c=(p||a.time).dateFormat(k,c);return c};a.format=function(k,c,p){for(var t="{",v=!1,w,r,h,e,l=[],n;k;){t=k.indexOf(t);if(-1===t)break;w=k.slice(0,t);if(v){w=w.split(":");r=w.shift().split(".");e=r.length;n=c;for(h=0;h<e;h++)n&&(n=n[r[h]]);w.length&&(n=a.formatSingle(w.join(":"),n,p));l.push(n)}else l.push(w);
k=k.slice(t+1);t=(v=!v)?"}":"{"}l.push(k);return l.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(k,c,p,t,v){var w,r=k;p=a.pick(p,1);w=k/p;c||(c=v?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===t&&(1===p?c=c.filter(function(a){return 0===a%1}):.1>=p&&(c=[1/p])));for(t=0;t<c.length&&!(r=c[t],v&&r*p>=k||!v&&w<=(c[t]+(c[t+1]||c[t]))/2);t++);return r=a.correctFloat(r*p,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=
function(a,c){var k=a.length,t,v;for(v=0;v<k;v++)a[v].safeI=v;a.sort(function(a,r){t=c(a,r);return 0===t?a.safeI-r.safeI:t});for(v=0;v<k;v++)delete a[v].safeI};a.arrayMin=function(a){for(var c=a.length,k=a[0];c--;)a[c]<k&&(k=a[c]);return k};a.arrayMax=function(a){for(var c=a.length,k=a[0];c--;)a[c]>k&&(k=a[c]);return k};a.destroyObjectProperties=function(k,c){a.objectEach(k,function(a,t){a&&a!==c&&a.destroy&&a.destroy();delete k[t]})};a.discardElement=function(k){var c=a.garbageBin;c||(c=a.createElement("div"));
k&&c.appendChild(k);c.innerHTML=""};a.correctFloat=function(a,c){return parseFloat(a.toPrecision(c||14))};a.setAnimation=function(k,c){c.renderer.globalAnimation=a.pick(k,c.options.chart.animation,!0)};a.animObject=function(k){return a.isObject(k)?a.merge(k):{duration:k?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=function(k,c,p,t){k=+k||0;c=+c;var v=a.defaultOptions.lang,w=(k.toString().split(".")[1]||"").split("e")[0].length,
r,h,e=k.toString().split("e");-1===c?c=Math.min(w,20):a.isNumber(c)?c&&e[1]&&0>e[1]&&(r=c+ +e[1],0<=r?(e[0]=(+e[0]).toExponential(r).split("e")[0],c=r):(e[0]=e[0].split(".")[0]||0,k=20>c?(e[0]*Math.pow(10,e[1])).toFixed(c):0,e[1]=0)):c=2;h=(Math.abs(e[1]?e[0]:k)+Math.pow(10,-Math.max(c,w)-1)).toFixed(c);w=String(a.pInt(h));r=3<w.length?w.length%3:0;p=a.pick(p,v.decimalPoint);t=a.pick(t,v.thousandsSep);k=(0>k?"-":"")+(r?w.substr(0,r)+t:"");k+=w.substr(r).replace(/(\d{3})(?=\d)/g,"$1"+t);c&&(k+=p+h.slice(-c));
e[1]&&0!==+k&&(k+="e"+e[1]);return k};Math.easeInOutSine=function(a){return-.5*(Math.cos(Math.PI*a)-1)};a.getStyle=function(k,c,p){if("width"===c)return Math.max(0,Math.min(k.offsetWidth,k.scrollWidth,k.getBoundingClientRect&&"none"===a.getStyle(k,"transform",!1)?Math.floor(k.getBoundingClientRect().width):Infinity)-a.getStyle(k,"padding-left")-a.getStyle(k,"padding-right"));if("height"===c)return Math.max(0,Math.min(k.offsetHeight,k.scrollHeight)-a.getStyle(k,"padding-top")-a.getStyle(k,"padding-bottom"));
G.getComputedStyle||a.error(27,!0);if(k=G.getComputedStyle(k,void 0))k=k.getPropertyValue(c),a.pick(p,"opacity"!==c)&&(k=a.pInt(k));return k};a.inArray=function(a,c,p){return c.indexOf(a,p)};a.find=Array.prototype.find?function(a,c){return a.find(c)}:function(a,c){var k,t=a.length;for(k=0;k<t;k++)if(c(a[k],k))return a[k]};a.keys=Object.keys;a.offset=function(a){var c=F.documentElement;a=a.parentElement||a.parentNode?a.getBoundingClientRect():{top:0,left:0};return{top:a.top+(G.pageYOffset||c.scrollTop)-
(c.clientTop||0),left:a.left+(G.pageXOffset||c.scrollLeft)-(c.clientLeft||0)}};a.stop=function(k,c){for(var p=a.timers.length;p--;)a.timers[p].elem!==k||c&&c!==a.timers[p].prop||(a.timers[p].stopped=!0)};a.objectEach=function(a,c,p){for(var k in a)a.hasOwnProperty(k)&&c.call(p||a[k],a[k],k,a)};a.objectEach({map:"map",each:"forEach",grep:"filter",reduce:"reduce",some:"some"},function(k,c){a[c]=function(a){return Array.prototype[k].apply(a,[].slice.call(arguments,1))}});a.addEvent=function(k,c,p,t){var v,
w=k.addEventListener||a.addEventListenerPolyfill;v="function"===typeof k&&k.prototype?k.prototype.protoEvents=k.prototype.protoEvents||{}:k.hcEvents=k.hcEvents||{};a.Point&&k instanceof a.Point&&k.series&&k.series.chart&&(k.series.chart.runTrackerClick=!0);w&&w.call(k,c,p,!1);v[c]||(v[c]=[]);v[c].push(p);t&&a.isNumber(t.order)&&(p.order=t.order,v[c].sort(function(a,h){return a.order-h.order}));return function(){a.removeEvent(k,c,p)}};a.removeEvent=function(k,c,p){function t(h,e){var l=k.removeEventListener||
a.removeEventListenerPolyfill;l&&l.call(k,h,e,!1)}function v(h){var e,l;k.nodeName&&(c?(e={},e[c]=!0):e=h,a.objectEach(e,function(a,d){if(h[d])for(l=h[d].length;l--;)t(d,h[d][l])}))}var w,r;["protoEvents","hcEvents"].forEach(function(a){var e=k[a];e&&(c?(w=e[c]||[],p?(r=w.indexOf(p),-1<r&&(w.splice(r,1),e[c]=w),t(c,p)):(v(e),e[c]=[])):(v(e),k[a]={}))})};a.fireEvent=function(k,c,p,t){var v,w,r,h,e;p=p||{};F.createEvent&&(k.dispatchEvent||k.fireEvent)?(v=F.createEvent("Events"),v.initEvent(c,!0,!0),
a.extend(v,p),k.dispatchEvent?k.dispatchEvent(v):k.fireEvent(c,v)):["protoEvents","hcEvents"].forEach(function(l){if(k[l])for(w=k[l][c]||[],r=w.length,p.target||a.extend(p,{preventDefault:function(){p.defaultPrevented=!0},target:k,type:c}),h=0;h<r;h++)(e=w[h])&&!1===e.call(k,p)&&p.preventDefault()});t&&!p.defaultPrevented&&t.call(k,p)};a.animate=function(k,c,p){var t,v="",w,r,h;a.isObject(p)||(h=arguments,p={duration:h[2],easing:h[3],complete:h[4]});a.isNumber(p.duration)||(p.duration=400);p.easing=
"function"===typeof p.easing?p.easing:Math[p.easing]||Math.easeInOutSine;p.curAnim=a.merge(c);a.objectEach(c,function(e,h){a.stop(k,h);r=new a.Fx(k,p,h);w=null;"d"===h?(r.paths=r.initPath(k,k.d,c.d),r.toD=c.d,t=0,w=1):k.attr?t=k.attr(h):(t=parseFloat(a.getStyle(k,h))||0,"opacity"!==h&&(v="px"));w||(w=e);w&&w.match&&w.match("px")&&(w=w.replace(/px/g,""));r.run(t,w,v)})};a.seriesType=function(k,c,p,t,v){var w=a.getOptions(),r=a.seriesTypes;w.plotOptions[k]=a.merge(w.plotOptions[c],p);r[k]=a.extendClass(r[c]||
function(){},t);r[k].prototype.type=k;v&&(r[k].prototype.pointClass=a.extendClass(a.Point,v));return r[k]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),c=0;return function(){return"highcharts-"+a+"-"+c++}}();a.isFunction=function(a){return"function"===typeof a};G.jQuery&&(G.jQuery.fn.highcharts=function(){var k=[].slice.call(arguments);if(this[0])return k[0]?(new (a[a.isString(k[0])?k.shift():"Chart"])(this[0],k[0],k[1]),this):y[a.attr(this[0],"data-highcharts-chart")]})})(I);
(function(a){var y=a.isNumber,F=a.merge,G=a.pInt;a.Color=function(k){if(!(this instanceof a.Color))return new a.Color(k);this.init(k)};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[G(a[1]),G(a[2]),G(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(a){return[G(a[1]),G(a[2]),G(a[3]),1]}}],names:{white:"#ffffff",black:"#000000"},
init:function(k){var c,p,t,v;if((this.input=k=this.names[k&&k.toLowerCase?k.toLowerCase():""]||k)&&k.stops)this.stops=k.stops.map(function(c){return new a.Color(c[1])});else if(k&&k.charAt&&"#"===k.charAt()&&(c=k.length,k=parseInt(k.substr(1),16),7===c?p=[(k&16711680)>>16,(k&65280)>>8,k&255,1]:4===c&&(p=[(k&3840)>>4|(k&3840)>>8,(k&240)>>4|k&240,(k&15)<<4|k&15,1])),!p)for(t=this.parsers.length;t--&&!p;)v=this.parsers[t],(c=v.regex.exec(k))&&(p=v.parse(c));this.rgba=p||[]},get:function(a){var c=this.input,
k=this.rgba,t;this.stops?(t=F(c),t.stops=[].concat(t.stops),this.stops.forEach(function(c,k){t.stops[k]=[t.stops[k][0],c.get(a)]})):t=k&&y(k[0])?"rgb"===a||!a&&1===k[3]?"rgb("+k[0]+","+k[1]+","+k[2]+")":"a"===a?k[3]:"rgba("+k.join(",")+")":c;return t},brighten:function(a){var c,k=this.rgba;if(this.stops)this.stops.forEach(function(c){c.brighten(a)});else if(y(a)&&0!==a)for(c=0;3>c;c++)k[c]+=G(255*a),0>k[c]&&(k[c]=0),255<k[c]&&(k[c]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this},
tweenTo:function(a,c){var k=this.rgba,t=a.rgba;t.length&&k&&k.length?(a=1!==t[3]||1!==k[3],c=(a?"rgba(":"rgb(")+Math.round(t[0]+(k[0]-t[0])*(1-c))+","+Math.round(t[1]+(k[1]-t[1])*(1-c))+","+Math.round(t[2]+(k[2]-t[2])*(1-c))+(a?","+(t[3]+(k[3]-t[3])*(1-c)):"")+")"):c=a.input||"none";return c}};a.color=function(k){return new a.Color(k)}})(I);(function(a){var y,F,G=a.addEvent,k=a.animate,c=a.attr,p=a.charts,t=a.color,v=a.css,w=a.createElement,r=a.defined,h=a.deg2rad,e=a.destroyObjectProperties,l=a.doc,
n=a.extend,d=a.erase,g=a.hasTouch,b=a.isArray,x=a.isFirefox,u=a.isMS,H=a.isObject,E=a.isString,B=a.isWebKit,m=a.merge,z=a.noop,D=a.objectEach,A=a.pick,f=a.pInt,q=a.removeEvent,L=a.splat,K=a.stop,T=a.svg,J=a.SVG_NS,M=a.symbolSizes,R=a.win;y=a.SVGElement=function(){return this};n(y.prototype,{opacity:1,SVG_NS:J,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline cursor".split(" "),init:function(f,q){this.element="span"===
q?w(q):l.createElementNS(this.SVG_NS,q);this.renderer=f;a.fireEvent(this,"afterInit")},animate:function(f,q,d){var C=a.animObject(A(q,this.renderer.globalAnimation,!0));A(l.hidden,l.msHidden,l.webkitHidden,!1)&&(C.duration=0);0!==C.duration?(d&&(C.complete=d),k(this,f,C)):(this.attr(f,null,d),a.objectEach(f,function(a,f){C.step&&C.step.call(this,a,{prop:f,pos:1})},this));return this},complexColor:function(f,q,d){var C=this.renderer,g,e,n,h,J,z,l,P,x,c,u,K=[],L;a.fireEvent(this.renderer,"complexColor",
{args:arguments},function(){f.radialGradient?e="radialGradient":f.linearGradient&&(e="linearGradient");e&&(n=f[e],J=C.gradients,l=f.stops,c=d.radialReference,b(n)&&(f[e]=n={x1:n[0],y1:n[1],x2:n[2],y2:n[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===e&&c&&!r(n.gradientUnits)&&(h=n,n=m(n,C.getRadialAttr(c,h),{gradientUnits:"userSpaceOnUse"})),D(n,function(a,f){"id"!==f&&K.push(f,a)}),D(l,function(a){K.push(a)}),K=K.join(","),J[K]?u=J[K].attr("id"):(n.id=u=a.uniqueKey(),J[K]=z=C.createElement(e).attr(n).add(C.defs),
z.radAttr=h,z.stops=[],l.forEach(function(f){0===f[1].indexOf("rgba")?(g=a.color(f[1]),P=g.get("rgb"),x=g.get("a")):(P=f[1],x=1);f=C.createElement("stop").attr({offset:f[0],"stop-color":P,"stop-opacity":x}).add(z);z.stops.push(f)})),L="url("+C.url+"#"+u+")",d.setAttribute(q,L),d.gradient=K,f.toString=function(){return L})})},applyTextOutline:function(f){var C=this.element,q,b,g,e,m;-1!==f.indexOf("contrast")&&(f=f.replace(/contrast/g,this.renderer.getContrast(C.style.fill)));f=f.split(" ");b=f[f.length-
1];if((g=f[0])&&"none"!==g&&a.svg){this.fakeTS=!0;f=[].slice.call(C.getElementsByTagName("tspan"));this.ySetter=this.xSetter;g=g.replace(/(^[\d\.]+)(.*?)$/g,function(a,f,C){return 2*f+C});for(m=f.length;m--;)q=f[m],"highcharts-text-outline"===q.getAttribute("class")&&d(f,C.removeChild(q));e=C.firstChild;f.forEach(function(a,f){0===f&&(a.setAttribute("x",C.getAttribute("x")),f=C.getAttribute("y"),a.setAttribute("y",f||0),null===f&&C.setAttribute("y",0));a=a.cloneNode(1);c(a,{"class":"highcharts-text-outline",
fill:b,stroke:b,"stroke-width":g,"stroke-linejoin":"round"});C.insertBefore(a,e)})}},symbolCustomAttribs:"x y width height r start end innerR anchorX anchorY rounded".split(" "),attr:function(f,q,d,b){var C,g=this.element,e,m=this,n,h,J=this.symbolCustomAttribs;"string"===typeof f&&void 0!==q&&(C=f,f={},f[C]=q);"string"===typeof f?m=(this[f+"Getter"]||this._defaultGetter).call(this,f,g):(D(f,function(C,q){n=!1;b||K(this,q);this.symbolName&&-1!==a.inArray(q,J)&&(e||(this.symbolAttr(f),e=!0),n=!0);
!this.rotation||"x"!==q&&"y"!==q||(this.doTransform=!0);n||(h=this[q+"Setter"]||this._defaultSetter,h.call(this,C,q,g),!this.styledMode&&this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(q)&&this.updateShadows(q,C,h))},this),this.afterSetters());d&&d.call(this);return m},afterSetters:function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)},updateShadows:function(a,f,q){for(var C=this.shadows,d=C.length;d--;)q.call(C[d],"height"===a?Math.max(f-(C[d].cutHeight||
0),0):"d"===a?this.d:f,a,C[d])},addClass:function(a,f){var C=this.attr("class")||"";-1===C.indexOf(a)&&(f||(a=(C+(C?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return-1!==(this.attr("class")||"").split(" ").indexOf(a)},removeClass:function(a){return this.attr("class",(this.attr("class")||"").replace(a,""))},symbolAttr:function(a){var f=this;"x y r start end width height innerR anchorX anchorY".split(" ").forEach(function(C){f[C]=A(a[C],f[C])});f.attr({d:f.renderer.symbols[f.symbolName](f.x,
f.y,f.width,f.height,f)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,f){var C;f=f||a.strokeWidth||0;C=Math.round(f)%2/2;a.x=Math.floor(a.x||this.x||0)+C;a.y=Math.floor(a.y||this.y||0)+C;a.width=Math.floor((a.width||this.width||0)-2*C);a.height=Math.floor((a.height||this.height||0)-2*C);r(a.strokeWidth)&&(a.strokeWidth=f);return a},css:function(a){var C=this.styles,q={},d=this.element,b,g="",e,m=!C,h=["textOutline","textOverflow",
"width"];a&&a.color&&(a.fill=a.color);C&&D(a,function(a,f){a!==C[f]&&(q[f]=a,m=!0)});m&&(C&&(a=n(C,q)),a&&(null===a.width||"auto"===a.width?delete this.textWidth:"text"===d.nodeName.toLowerCase()&&a.width&&(b=this.textWidth=f(a.width))),this.styles=a,b&&!T&&this.renderer.forExport&&delete a.width,d.namespaceURI===this.SVG_NS?(e=function(a,f){return"-"+f.toLowerCase()},D(a,function(a,f){-1===h.indexOf(f)&&(g+=f.replace(/([A-Z])/g,e)+":"+a+";")}),g&&c(d,"style",g)):v(d,a),this.added&&("text"===this.element.nodeName&&
this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline)));return this},getStyle:function(a){return R.getComputedStyle(this.element||this,"").getPropertyValue(a)},strokeWidth:function(){if(!this.renderer.styledMode)return this["stroke-width"]||0;var a=this.getStyle("stroke-width"),q;a.indexOf("px")===a.length-2?a=f(a):(q=l.createElementNS(J,"rect"),c(q,{width:a,"stroke-width":0}),this.element.parentNode.appendChild(q),a=q.getBBox().width,q.parentNode.removeChild(q));return a},
on:function(a,f){var C=this,q=C.element;g&&"click"===a?(q.ontouchstart=function(a){C.touchEventFired=Date.now();a.preventDefault();f.call(q,a)},q.onclick=function(a){(-1===R.navigator.userAgent.indexOf("Android")||1100<Date.now()-(C.touchEventFired||0))&&f.call(q,a)}):q["on"+a]=f;return this},setRadialReference:function(a){var f=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;f&&f.radAttr&&f.animate(this.renderer.getRadialAttr(a,f.radAttr));return this},translate:function(a,
f){return this.attr({translateX:a,translateY:f})},invert:function(a){this.inverted=a;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,f=this.translateY||0,q=this.scaleX,d=this.scaleY,b=this.inverted,g=this.rotation,e=this.matrix,m=this.element;b&&(a+=this.width,f+=this.height);a=["translate("+a+","+f+")"];r(e)&&a.push("matrix("+e.join(",")+")");b?a.push("rotate(90) scale(-1,1)"):g&&a.push("rotate("+g+" "+A(this.rotationOriginX,m.getAttribute("x"),0)+" "+A(this.rotationOriginY,
m.getAttribute("y")||0)+")");(r(q)||r(d))&&a.push("scale("+A(q,1)+" "+A(d,1)+")");a.length&&m.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,f,q){var C,b,g,e,m={};b=this.renderer;g=b.alignedObjects;var n,h;if(a){if(this.alignOptions=a,this.alignByTranslate=f,!q||E(q))this.alignTo=C=q||"renderer",d(g,this),g.push(this),q=null}else a=this.alignOptions,f=this.alignByTranslate,C=this.alignTo;q=A(q,b[C],b);C=a.align;
b=a.verticalAlign;g=(q.x||0)+(a.x||0);e=(q.y||0)+(a.y||0);"right"===C?n=1:"center"===C&&(n=2);n&&(g+=(q.width-(a.width||0))/n);m[f?"translateX":"x"]=Math.round(g);"bottom"===b?h=1:"middle"===b&&(h=2);h&&(e+=(q.height-(a.height||0))/h);m[f?"translateY":"y"]=Math.round(e);this[this.placed?"animate":"attr"](m);this.placed=!0;this.alignAttr=m;return this},getBBox:function(a,f){var q,C=this.renderer,d,b=this.element,g=this.styles,e,m=this.textStr,J,z=C.cache,l=C.cacheKeys,x=b.namespaceURI===this.SVG_NS,
c;f=A(f,this.rotation);d=f*h;e=C.styledMode?b&&y.prototype.getStyle.call(b,"font-size"):g&&g.fontSize;r(m)&&(c=m.toString(),-1===c.indexOf("\x3c")&&(c=c.replace(/[0-9]/g,"0")),c+=["",f||0,e,this.textWidth,g&&g.textOverflow].join());c&&!a&&(q=z[c]);if(!q){if(x||C.forExport){try{(J=this.fakeTS&&function(a){[].forEach.call(b.querySelectorAll(".highcharts-text-outline"),function(f){f.style.display=a})})&&J("none"),q=b.getBBox?n({},b.getBBox()):{width:b.offsetWidth,height:b.offsetHeight},J&&J("")}catch(Y){}if(!q||
0>q.width)q={width:0,height:0}}else q=this.htmlGetBBox();C.isSVG&&(a=q.width,C=q.height,x&&(q.height=C={"11px,17":14,"13px,20":16}[g&&g.fontSize+","+Math.round(C)]||C),f&&(q.width=Math.abs(C*Math.sin(d))+Math.abs(a*Math.cos(d)),q.height=Math.abs(C*Math.cos(d))+Math.abs(a*Math.sin(d))));if(c&&0<q.height){for(;250<l.length;)delete z[l.shift()];z[c]||l.push(c);z[c]=q}}return q},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},
fadeOut:function(a){var f=this;f.animate({opacity:0},{duration:a||150,complete:function(){f.attr({y:-9999})}})},add:function(a){var f=this.renderer,q=this.element,C;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&f.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)C=this.zIndexSetter();C||(a?a.element:f.box).appendChild(q);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var f=a.parentNode;f&&f.removeChild(a)},destroy:function(){var a=
this,f=a.element||{},q=a.renderer,b=q.isSVG&&"SPAN"===f.nodeName&&a.parentGroup,g=f.ownerSVGElement,e=a.clipPath;f.onclick=f.onmouseout=f.onmouseover=f.onmousemove=f.point=null;K(a);e&&g&&([].forEach.call(g.querySelectorAll("[clip-path],[CLIP-PATH]"),function(a){var f=a.getAttribute("clip-path"),q=e.element.id;(-1<f.indexOf("(#"+q+")")||-1<f.indexOf('("#'+q+'")'))&&a.removeAttribute("clip-path")}),a.clipPath=e.destroy());if(a.stops){for(g=0;g<a.stops.length;g++)a.stops[g]=a.stops[g].destroy();a.stops=
null}a.safeRemoveChild(f);for(q.styledMode||a.destroyShadows();b&&b.div&&0===b.div.childNodes.length;)f=b.parentGroup,a.safeRemoveChild(b.div),delete b.div,b=f;a.alignTo&&d(q.alignedObjects,a);D(a,function(f,q){delete a[q]});return null},shadow:function(a,f,q){var d=[],C,b,g=this.element,e,m,n,h;if(!a)this.destroyShadows();else if(!this.shadows){m=A(a.width,3);n=(a.opacity||.15)/m;h=this.parentInverted?"(-1,-1)":"("+A(a.offsetX,1)+", "+A(a.offsetY,1)+")";for(C=1;C<=m;C++)b=g.cloneNode(0),e=2*m+1-
2*C,c(b,{stroke:a.color||"#000000","stroke-opacity":n*C,"stroke-width":e,transform:"translate"+h,fill:"none"}),b.setAttribute("class",(b.getAttribute("class")||"")+" highcharts-shadow"),q&&(c(b,"height",Math.max(c(b,"height")-e,0)),b.cutHeight=e),f?f.element.appendChild(b):g.parentNode&&g.parentNode.insertBefore(b,g),d.push(b);this.shadows=d}return this},destroyShadows:function(){(this.shadows||[]).forEach(function(a){this.safeRemoveChild(a)},this);this.shadows=void 0},xGetter:function(a){"circle"===
this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=A(this[a+"Value"],this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,f,q){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");this[f]!==a&&(q.setAttribute(f,a),this[f]=a)},dashstyleSetter:function(a){var q,b=this["stroke-width"];"inherit"===b&&(b=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot",
"3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(q=a.length;q--;)a[q]=f(a[q])*b;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){var f={left:"start",center:"middle",right:"end"};f[a]&&(this.alignValue=a,this.element.setAttribute("text-anchor",f[a]))},opacitySetter:function(a,f,
q){this[f]=a;q.setAttribute(f,a)},titleSetter:function(a){var f=this.element.getElementsByTagName("title")[0];f||(f=l.createElementNS(this.SVG_NS,"title"),this.element.appendChild(f));f.firstChild&&f.removeChild(f.firstChild);f.appendChild(l.createTextNode(String(A(a),"").replace(/<[^>]*>/g,"").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this))},fillSetter:function(a,f,q){"string"===
typeof a?q.setAttribute(f,a):a&&this.complexColor(a,f,q)},visibilitySetter:function(a,f,q){"inherit"===a?q.removeAttribute(f):this[f]!==a&&q.setAttribute(f,a);this[f]=a},zIndexSetter:function(a,q){var b=this.renderer,d=this.parentGroup,g=(d||b).element||b.box,e,m=this.element,C,n,b=g===b.box;e=this.added;var h;r(a)?(m.setAttribute("data-z-index",a),a=+a,this[q]===a&&(e=!1)):r(this[q])&&m.removeAttribute("data-z-index");this[q]=a;if(e){(a=this.zIndex)&&d&&(d.handleZ=!0);q=g.childNodes;for(h=q.length-
1;0<=h&&!C;h--)if(d=q[h],e=d.getAttribute("data-z-index"),n=!r(e),d!==m)if(0>a&&n&&!b&&!h)g.insertBefore(m,q[h]),C=!0;else if(f(e)<=a||n&&(!r(a)||0<=a))g.insertBefore(m,q[h+1]||null),C=!0;C||(g.insertBefore(m,q[b?3:0]||null),C=!0)}return C},_defaultSetter:function(a,f,q){q.setAttribute(f,a)}});y.prototype.yGetter=y.prototype.xGetter;y.prototype.translateXSetter=y.prototype.translateYSetter=y.prototype.rotationSetter=y.prototype.verticalAlignSetter=y.prototype.rotationOriginXSetter=y.prototype.rotationOriginYSetter=
y.prototype.scaleXSetter=y.prototype.scaleYSetter=y.prototype.matrixSetter=function(a,f){this[f]=a;this.doTransform=!0};y.prototype["stroke-widthSetter"]=y.prototype.strokeSetter=function(a,f,q){this[f]=a;this.stroke&&this["stroke-width"]?(y.prototype.fillSetter.call(this,this.stroke,"stroke",q),q.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===f&&0===a&&this.hasStroke&&(q.removeAttribute("stroke"),this.hasStroke=!1)};F=a.SVGRenderer=function(){this.init.apply(this,
arguments)};n(F.prototype,{Element:y,SVG_NS:J,init:function(a,f,q,b,d,g,e){var m;m=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"});e||m.css(this.getStyle(b));b=m.element;a.appendChild(b);c(a,"dir","ltr");-1===a.innerHTML.indexOf("xmlns")&&c(b,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=b;this.boxWrapper=m;this.alignedObjects=[];this.url=(x||B)&&l.getElementsByTagName("base").length?R.location.href.split("#")[0].replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,
"%20"):"";this.createElement("desc").add().element.appendChild(l.createTextNode("Created with Highcharts 7.0.3"));this.defs=this.createElement("defs").add();this.allowHTML=g;this.forExport=d;this.styledMode=e;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(f,q,!1);var n;x&&a.getBoundingClientRect&&(f=function(){v(a,{left:0,top:0});n=a.getBoundingClientRect();v(a,{left:Math.ceil(n.left)-n.left+"px",top:Math.ceil(n.top)-n.top+"px"})},f(),this.unSubPixelFix=G(R,"resize",
f))},definition:function(a){function f(a,b){var d;L(a).forEach(function(a){var g=q.createElement(a.tagName),e={};D(a,function(a,f){"tagName"!==f&&"children"!==f&&"textContent"!==f&&(e[f]=a)});g.attr(e);g.add(b||q.defs);a.textContent&&g.element.appendChild(l.createTextNode(a.textContent));f(a.children||[],g);d=g});return d}var q=this;return f(a)},getStyle:function(a){return this.style=n({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},
isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();e(this.gradients||{});this.gradients=null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var f=new this.Element;f.init(this,a);return f},draw:z,getRadialAttr:function(a,f){return{cx:a[0]-a[2]/2+f.cx*a[2],cy:a[1]-a[2]/2+f.cy*a[2],r:f.r*a[2]}},truncate:function(a,f,q,b,d,
g,e){var m=this,n=a.rotation,h,C=b?1:0,J=(q||b).length,z=J,c=[],r=function(a){f.firstChild&&f.removeChild(f.firstChild);a&&f.appendChild(l.createTextNode(a))},x=function(g,n){n=n||g;if(void 0===c[n])if(f.getSubStringLength)try{c[n]=d+f.getSubStringLength(0,b?n+1:n)}catch(Z){}else m.getSpanWidth&&(r(e(q||b,g)),c[n]=d+m.getSpanWidth(a,f));return c[n]},u,D;a.rotation=0;u=x(f.textContent.length);if(D=d+u>g){for(;C<=J;)z=Math.ceil((C+J)/2),b&&(h=e(b,z)),u=x(z,h&&h.length-1),C===J?C=J+1:u>g?J=z-1:C=z;0===
J?r(""):q&&J===q.length-1||r(h||e(q||b,z))}b&&b.splice(0,z);a.actualWidth=u;a.rotation=n;return D},escapes:{"\x26":"\x26amp;","\x3c":"\x26lt;","\x3e":"\x26gt;","'":"\x26#39;",'"':"\x26quot;"},buildText:function(a){var q=a.element,b=this,d=b.forExport,g=A(a.textStr,"").toString(),e=-1!==g.indexOf("\x3c"),m=q.childNodes,n,h=c(q,"x"),C=a.styles,z=a.textWidth,r=C&&C.lineHeight,x=C&&C.textOutline,u=C&&"ellipsis"===C.textOverflow,K=C&&"nowrap"===C.whiteSpace,L=C&&C.fontSize,B,M,k=m.length,C=z&&!a.added&&
this.box,H=function(a){var g;b.styledMode||(g=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:L||b.style.fontSize||12);return r?f(r):b.fontMetrics(g,a.getAttribute("style")?a:q).h},E=function(a,f){D(b.escapes,function(q,b){f&&-1!==f.indexOf(q)||(a=a.toString().replace(new RegExp(q,"g"),b))});return a},w=function(a,f){var q;q=a.indexOf("\x3c");a=a.substring(q,a.indexOf("\x3e")-q);q=a.indexOf(f+"\x3d");if(-1!==q&&(q=q+f.length+1,f=a.charAt(q),'"'===f||"'"===f))return a=a.substring(q+1),a.substring(0,
a.indexOf(f))};B=[g,u,K,r,x,L,z].join();if(B!==a.textCache){for(a.textCache=B;k--;)q.removeChild(m[k]);e||x||u||z||-1!==g.indexOf(" ")?(C&&C.appendChild(q),e?(g=b.styledMode?g.replace(/<(b|strong)>/g,'\x3cspan class\x3d"highcharts-strong"\x3e').replace(/<(i|em)>/g,'\x3cspan class\x3d"highcharts-emphasized"\x3e'):g.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,'\x3cspan style\x3d"font-style:italic"\x3e'),g=g.replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,
"\x3c/span\x3e").split(/<br.*?>/g)):g=[g],g=g.filter(function(a){return""!==a}),g.forEach(function(f,g){var e,m=0,C=0;f=f.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");e=f.split("|||");e.forEach(function(f){if(""!==f||1===e.length){var r={},x=l.createElementNS(b.SVG_NS,"tspan"),D,A;(D=w(f,"class"))&&c(x,"class",D);if(D=w(f,"style"))D=D.replace(/(;| |^)color([ :])/,"$1fill$2"),c(x,"style",D);(A=w(f,"href"))&&!d&&(c(x,"onclick",'location.href\x3d"'+
A+'"'),c(x,"class","highcharts-anchor"),b.styledMode||v(x,{cursor:"pointer"}));f=E(f.replace(/<[a-zA-Z\/](.|\n)*?>/g,"")||" ");if(" "!==f){x.appendChild(l.createTextNode(f));m?r.dx=0:g&&null!==h&&(r.x=h);c(x,r);q.appendChild(x);!m&&M&&(!T&&d&&v(x,{display:"block"}),c(x,"dy",H(x)));if(z){var B=f.replace(/([^\^])-/g,"$1- ").split(" "),r=!K&&(1<e.length||g||1<B.length);A=0;var k=H(x);if(u)n=b.truncate(a,x,f,void 0,0,Math.max(0,z-parseInt(L||12,10)),function(a,f){return a.substring(0,f)+"\u2026"});else if(r)for(;B.length;)B.length&&
!K&&0<A&&(x=l.createElementNS(J,"tspan"),c(x,{dy:k,x:h}),D&&c(x,"style",D),x.appendChild(l.createTextNode(B.join(" ").replace(/- /g,"-"))),q.appendChild(x)),b.truncate(a,x,null,B,0===A?C:0,z,function(a,f){return B.slice(0,f).join(" ").replace(/- /g,"-")}),C=a.actualWidth,A++}m++}}});M=M||q.childNodes.length}),u&&n&&a.attr("title",E(a.textStr,["\x26lt;","\x26gt;"])),C&&C.removeChild(q),x&&a.applyTextOutline&&a.applyTextOutline(x)):q.appendChild(l.createTextNode(E(g)))}},getContrast:function(a){a=t(a).rgba;
a[0]*=1;a[1]*=1.2;a[2]*=.5;return 459<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,f,q,b,g,d,e,h,z){var C=this.label(a,f,q,z,null,null,null,null,"button"),J=0,x=this.styledMode;C.attr(m({padding:8,r:2},g));if(!x){var l,r,c,D;g=m({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},g);l=g.style;delete g.style;d=m(g,{fill:"#e6e6e6"},d);r=d.style;delete d.style;e=m(g,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},e);c=e.style;
delete e.style;h=m(g,{style:{color:"#cccccc"}},h);D=h.style;delete h.style}G(C.element,u?"mouseover":"mouseenter",function(){3!==J&&C.setState(1)});G(C.element,u?"mouseout":"mouseleave",function(){3!==J&&C.setState(J)});C.setState=function(a){1!==a&&(C.state=J=a);C.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||0]);x||C.attr([g,d,e,h][a||0]).css([l,r,c,D][a||0])};x||C.attr(g).css(n({cursor:"default"},l));return C.on("click",
function(a){3!==J&&b.call(C,a)})},crispLine:function(a,f){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-f%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+f%2/2);return a},path:function(a){var f=this.styledMode?{}:{fill:"none"};b(a)?f.d=a:H(a)&&n(f,a);return this.createElement("path").attr(f)},circle:function(a,f,q){a=H(a)?a:void 0===a?{}:{x:a,y:f,r:q};f=this.createElement("circle");f.xSetter=f.ySetter=function(a,f,q){q.setAttribute("c"+f,a)};return f.attr(a)},arc:function(a,f,q,b,g,d){H(a)?(b=a,f=b.y,q=
b.r,a=b.x):b={innerR:b,start:g,end:d};a=this.symbol("arc",a,f,q,q,b);a.r=q;return a},rect:function(a,f,q,b,g,d){g=H(a)?a.r:g;var e=this.createElement("rect");a=H(a)?a:void 0===a?{}:{x:a,y:f,width:Math.max(q,0),height:Math.max(b,0)};this.styledMode||(void 0!==d&&(a.strokeWidth=d,a=e.crisp(a)),a.fill="none");g&&(a.r=g);e.rSetter=function(a,f,q){c(q,{rx:a,ry:a})};return e.attr(a)},setSize:function(a,f,q){var b=this.alignedObjects,g=b.length;this.width=a;this.height=f;for(this.boxWrapper.animate({width:a,
height:f},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:A(q,!0)?void 0:0});g--;)b[g].align()},g:function(a){var f=this.createElement("g");return a?f.attr({"class":"highcharts-"+a}):f},image:function(a,f,q,b,g,d){var e={preserveAspectRatio:"none"},m,h=function(a,f){a.setAttributeNS?a.setAttributeNS("http://www.w3.org/1999/xlink","href",f):a.setAttribute("hc-svg-href",f)},J=function(f){h(m.element,a);d.call(m,f)};1<arguments.length&&n(e,{x:f,y:q,width:b,
height:g});m=this.createElement("image").attr(e);d?(h(m.element,"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw\x3d\x3d"),e=new R.Image,G(e,"load",J),e.src=a,e.complete&&J({})):h(m.element,a);return m},symbol:function(a,f,q,b,g,d){var e=this,m,h=/^url\((.*?)\)$/,J=h.test(a),z=!J&&(this.symbols[a]?a:"circle"),x=z&&this.symbols[z],c=r(f)&&x&&x.call(this.symbols,Math.round(f),Math.round(q),b,g,d),C,u;x?(m=this.path(c),e.styledMode||m.attr("fill","none"),n(m,{symbolName:z,x:f,
y:q,width:b,height:g}),d&&n(m,d)):J&&(C=a.match(h)[1],m=this.image(C),m.imgwidth=A(M[C]&&M[C].width,d&&d.width),m.imgheight=A(M[C]&&M[C].height,d&&d.height),u=function(){m.attr({width:m.width,height:m.height})},["width","height"].forEach(function(a){m[a+"Setter"]=function(a,f){var q={},b=this["img"+f],g="width"===f?"translateX":"translateY";this[f]=a;r(b)&&(this.element&&this.element.setAttribute(f,b),this.alignByTranslate||(q[g]=((this[f]||0)-b)/2,this.attr(q)))}}),r(f)&&m.attr({x:f,y:q}),m.isImg=
!0,r(m.imgwidth)&&r(m.imgheight)?u():(m.attr({width:0,height:0}),w("img",{onload:function(){var a=p[e.chartIndex];0===this.width&&(v(this,{position:"absolute",top:"-999em"}),l.body.appendChild(this));M[C]={width:this.width,height:this.height};m.imgwidth=this.width;m.imgheight=this.height;m.element&&u();this.parentNode&&this.parentNode.removeChild(this);e.imgCount--;if(!e.imgCount&&a&&a.onload)a.onload()},src:C}),this.imgCount++));return m},symbols:{circle:function(a,f,q,b){return this.arc(a+q/2,f+
b/2,q/2,b/2,{start:0,end:2*Math.PI,open:!1})},square:function(a,f,q,b){return["M",a,f,"L",a+q,f,a+q,f+b,a,f+b,"Z"]},triangle:function(a,f,q,b){return["M",a+q/2,f,"L",a+q,f+b,a,f+b,"Z"]},"triangle-down":function(a,f,q,b){return["M",a,f,"L",a+q,f,a+q/2,f+b,"Z"]},diamond:function(a,f,q,b){return["M",a+q/2,f,"L",a+q,f+b/2,a+q/2,f+b,a,f+b/2,"Z"]},arc:function(a,f,q,b,g){var d=g.start,e=g.r||q,m=g.r||b||q,n=g.end-.001;q=g.innerR;b=A(g.open,.001>Math.abs(g.end-g.start-2*Math.PI));var h=Math.cos(d),J=Math.sin(d),
z=Math.cos(n),n=Math.sin(n);g=.001>g.end-d-Math.PI?0:1;e=["M",a+e*h,f+m*J,"A",e,m,0,g,1,a+e*z,f+m*n];r(q)&&e.push(b?"M":"L",a+q*z,f+q*n,"A",q,q,0,g,0,a+q*h,f+q*J);e.push(b?"":"Z");return e},callout:function(a,f,q,b,g){var d=Math.min(g&&g.r||0,q,b),e=d+6,m=g&&g.anchorX;g=g&&g.anchorY;var n;n=["M",a+d,f,"L",a+q-d,f,"C",a+q,f,a+q,f,a+q,f+d,"L",a+q,f+b-d,"C",a+q,f+b,a+q,f+b,a+q-d,f+b,"L",a+d,f+b,"C",a,f+b,a,f+b,a,f+b-d,"L",a,f+d,"C",a,f,a,f,a+d,f];m&&m>q?g>f+e&&g<f+b-e?n.splice(13,3,"L",a+q,g-6,a+q+6,
g,a+q,g+6,a+q,f+b-d):n.splice(13,3,"L",a+q,b/2,m,g,a+q,b/2,a+q,f+b-d):m&&0>m?g>f+e&&g<f+b-e?n.splice(33,3,"L",a,g+6,a-6,g,a,g-6,a,f+d):n.splice(33,3,"L",a,b/2,m,g,a,b/2,a,f+d):g&&g>b&&m>a+e&&m<a+q-e?n.splice(23,3,"L",m+6,f+b,m,f+b+6,m-6,f+b,a+d,f+b):g&&0>g&&m>a+e&&m<a+q-e&&n.splice(3,3,"L",m-6,f,m,f-6,m+6,f,q-d,f);return n}},clipRect:function(f,q,b,g){var d=a.uniqueKey(),e=this.createElement("clipPath").attr({id:d}).add(this.defs);f=this.rect(f,q,b,g,0).add(e);f.id=d;f.clipPath=e;f.count=0;return f},
text:function(a,f,q,b){var g={};if(b&&(this.allowHTML||!this.forExport))return this.html(a,f,q);g.x=Math.round(f||0);q&&(g.y=Math.round(q));r(a)&&(g.text=a);a=this.createElement("text").attr(g);b||(a.xSetter=function(a,f,q){var b=q.getElementsByTagName("tspan"),g,d=q.getAttribute(f),e;for(e=0;e<b.length;e++)g=b[e],g.getAttribute(f)===d&&g.setAttribute(f,a);q.setAttribute(f,a)});return a},fontMetrics:function(a,q){a=!this.styledMode&&/px/.test(a)||!R.getComputedStyle?a||q&&q.style&&q.style.fontSize||
this.style&&this.style.fontSize:q&&y.prototype.getStyle.call(q,"font-size");a=/px/.test(a)?f(a):12;q=24>a?a+3:Math.round(1.2*a);return{h:q,b:Math.round(.8*q),f:a}},rotCorr:function(a,f,q){var b=a;f&&q&&(b=Math.max(b*Math.cos(f*h),4));return{x:-a/3*Math.sin(f*h),y:b}},label:function(f,b,g,d,e,h,J,z,x){var l=this,c=l.styledMode,u=l.g("button"!==x&&"label"),D=u.text=l.text("",0,0,J).attr({zIndex:1}),K,L,C=0,A=3,B=0,M,k,E,H,T,w={},p,t,R=/^url\((.*?)\)$/.test(d),v=c||R,P=function(){return c?K.strokeWidth()%
2/2:(p?parseInt(p,10):0)%2/2},U,O,S;x&&u.addClass("highcharts-"+x);U=function(){var a=D.element.style,f={};L=(void 0===M||void 0===k||T)&&r(D.textStr)&&D.getBBox();u.width=(M||L.width||0)+2*A+B;u.height=(k||L.height||0)+2*A;t=A+Math.min(l.fontMetrics(a&&a.fontSize,D).b,L?L.height:Infinity);v&&(K||(u.box=K=l.symbols[d]||R?l.symbol(d):l.rect(),K.addClass(("button"===x?"":"highcharts-label-box")+(x?" highcharts-"+x+"-box":"")),K.add(u),a=P(),f.x=a,f.y=(z?-t:0)+a),f.width=Math.round(u.width),f.height=
Math.round(u.height),K.attr(n(f,w)),w={})};O=function(){var a=B+A,f;f=z?0:t;r(M)&&L&&("center"===T||"right"===T)&&(a+={center:.5,right:1}[T]*(M-L.width));if(a!==D.x||f!==D.y)D.attr("x",a),D.hasBoxWidthChanged&&(L=D.getBBox(!0),U()),void 0!==f&&D.attr("y",f);D.x=a;D.y=f};S=function(a,f){K?K.attr(a,f):w[a]=f};u.onAdd=function(){D.add(u);u.attr({text:f||0===f?f:"",x:b,y:g});K&&r(e)&&u.attr({anchorX:e,anchorY:h})};u.widthSetter=function(f){M=a.isNumber(f)?f:null};u.heightSetter=function(a){k=a};u["text-alignSetter"]=
function(a){T=a};u.paddingSetter=function(a){r(a)&&a!==A&&(A=u.padding=a,O())};u.paddingLeftSetter=function(a){r(a)&&a!==B&&(B=a,O())};u.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==C&&(C=a,L&&u.attr({x:E}))};u.textSetter=function(a){void 0!==a&&D.textSetter(a);U();O()};u["stroke-widthSetter"]=function(a,f){a&&(v=!0);p=this["stroke-width"]=a;S(f,a)};c?u.rSetter=function(a,f){S(f,a)}:u.strokeSetter=u.fillSetter=u.rSetter=function(a,f){"r"!==f&&("fill"===f&&a&&(v=!0),u[f]=a);S(f,a)};
u.anchorXSetter=function(a,f){e=u.anchorX=a;S(f,Math.round(a)-P()-E)};u.anchorYSetter=function(a,f){h=u.anchorY=a;S(f,a-H)};u.xSetter=function(a){u.x=a;C&&(a-=C*((M||L.width)+2*A),u["forceAnimate:x"]=!0);E=Math.round(a);u.attr("translateX",E)};u.ySetter=function(a){H=u.y=Math.round(a);u.attr("translateY",H)};var G=u.css;J={css:function(a){if(a){var f={};a=m(a);u.textProps.forEach(function(q){void 0!==a[q]&&(f[q]=a[q],delete a[q])});D.css(f);"width"in f&&U();"fontSize"in f&&(U(),O())}return G.call(u,
a)},getBBox:function(){return{width:L.width+2*A,height:L.height+2*A,x:L.x-A,y:L.y-A}},destroy:function(){q(u.element,"mouseenter");q(u.element,"mouseleave");D&&(D=D.destroy());K&&(K=K.destroy());y.prototype.destroy.call(u);u=l=U=O=S=null}};c||(J.shadow=function(a){a&&(U(),K&&K.shadow(a));return u});return n(u,J)}});a.Renderer=F})(I);(function(a){var y=a.attr,F=a.createElement,G=a.css,k=a.defined,c=a.extend,p=a.isFirefox,t=a.isMS,v=a.isWebKit,w=a.pick,r=a.pInt,h=a.SVGElement,e=a.SVGRenderer,l=a.win;
c(h.prototype,{htmlCss:function(a){var d="SPAN"===this.element.tagName&&a&&"width"in a,g=w(d&&a.width,void 0),b;d&&(delete a.width,this.textWidth=g,b=!0);a&&"ellipsis"===a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=c(this.styles,a);G(this.element,a);b&&this.htmlUpdateTransform();return this},htmlGetBBox:function(){var a=this.element;return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,
d=this.element,g=this.translateX||0,b=this.translateY||0,e=this.x||0,h=this.y||0,l=this.textAlign||"left",c={left:0,center:.5,right:1}[l],B=this.styles,m=B&&B.whiteSpace;G(d,{marginLeft:g,marginTop:b});!a.styledMode&&this.shadows&&this.shadows.forEach(function(a){G(a,{marginLeft:g+1,marginTop:b+1})});this.inverted&&[].forEach.call(d.childNodes,function(f){a.invertChild(f,d)});if("SPAN"===d.tagName){var B=this.rotation,z=this.textWidth&&r(this.textWidth),D=[B,l,d.innerHTML,this.textWidth,this.textAlign].join(),
A;(A=z!==this.oldTextWidth)&&!(A=z>this.oldTextWidth)&&((A=this.textPxLength)||(G(d,{width:"",whiteSpace:m||"nowrap"}),A=d.offsetWidth),A=A>z);A&&(/[ \-]/.test(d.textContent||d.innerText)||"ellipsis"===d.style.textOverflow)?(G(d,{width:z+"px",display:"block",whiteSpace:m||"normal"}),this.oldTextWidth=z,this.hasBoxWidthChanged=!0):this.hasBoxWidthChanged=!1;D!==this.cTT&&(m=a.fontMetrics(d.style.fontSize,d).b,!k(B)||B===(this.oldRotation||0)&&l===this.oldAlign||this.setSpanRotation(B,c,m),this.getSpanCorrection(!k(B)&&
this.textPxLength||d.offsetWidth,m,c,B,l));G(d,{left:e+(this.xCorr||0)+"px",top:h+(this.yCorr||0)+"px"});this.cTT=D;this.oldRotation=B;this.oldAlign=l}}else this.alignOnAdd=!0},setSpanRotation:function(a,d,g){var b={},e=this.renderer.getTransformKey();b[e]=b.transform="rotate("+a+"deg)";b[e+(p?"Origin":"-origin")]=b.transformOrigin=100*d+"% "+g+"px";G(this.element,b)},getSpanCorrection:function(a,d,g){this.xCorr=-a*g;this.yCorr=-d}});c(e.prototype,{getTransformKey:function(){return t&&!/Edge/.test(l.navigator.userAgent)?
"-ms-transform":v?"-webkit-transform":p?"MozTransform":l.opera?"-o-transform":""},html:function(e,d,g){var b=this.createElement("span"),n=b.element,u=b.renderer,l=u.isSVG,r=function(a,b){["opacity","visibility"].forEach(function(g){a[g+"Setter"]=function(a,f,q){h.prototype[g+"Setter"].call(this,a,f,q);b[f]=a}});a.addedSetters=!0},B=a.charts[u.chartIndex],B=B&&B.styledMode;b.textSetter=function(a){a!==n.innerHTML&&delete this.bBox;this.textStr=a;n.innerHTML=w(a,"");b.doTransform=!0};l&&r(b,b.element.style);
b.xSetter=b.ySetter=b.alignSetter=b.rotationSetter=function(a,g){"align"===g&&(g="textAlign");b[g]=a;b.doTransform=!0};b.afterSetters=function(){this.doTransform&&(this.htmlUpdateTransform(),this.doTransform=!1)};b.attr({text:e,x:Math.round(d),y:Math.round(g)}).css({position:"absolute"});B||b.css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize});n.style.whiteSpace="nowrap";b.css=b.htmlCss;l&&(b.add=function(a){var g,d=u.box.parentNode,e=[];if(this.parentGroup=a){if(g=a.div,!g){for(;a;)e.push(a),
a=a.parentGroup;e.reverse().forEach(function(a){function f(f,q){a[q]=f;"translateX"===q?m.left=f+"px":m.top=f+"px";a.doTransform=!0}var m,h=y(a.element,"class");h&&(h={className:h});g=a.div=a.div||F("div",h,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},g||d);m=g.style;c(a,{classSetter:function(a){return function(f){this.element.setAttribute("class",f);a.className=f}}(g),on:function(){e[0].div&&
b.on.apply({element:e[0].div},arguments);return a},translateXSetter:f,translateYSetter:f});a.addedSetters||r(a,m)})}}else g=d;g.appendChild(n);b.added=!0;b.alignOnAdd&&b.htmlUpdateTransform();return b});return b}})})(I);(function(a){var y=a.defined,F=a.extend,G=a.merge,k=a.pick,c=a.timeUnits,p=a.win;a.Time=function(a){this.update(a,!1)};a.Time.prototype={defaultOptions:{},update:function(a){var c=k(a&&a.useUTC,!0),w=this;this.options=a=G(!0,this.options||{},a);this.Date=a.Date||p.Date||Date;this.timezoneOffset=
(this.useUTC=c)&&a.timezoneOffset;this.getTimezoneOffset=this.timezoneOffsetFunction();(this.variableTimezone=!(c&&!a.getTimezoneOffset&&!a.timezone))||this.timezoneOffset?(this.get=function(a,h){var e=h.getTime(),l=e-w.getTimezoneOffset(h);h.setTime(l);a=h["getUTC"+a]();h.setTime(e);return a},this.set=function(a,h,e){var l;if("Milliseconds"===a||"Seconds"===a||"Minutes"===a&&0===h.getTimezoneOffset()%60)h["set"+a](e);else l=w.getTimezoneOffset(h),l=h.getTime()-l,h.setTime(l),h["setUTC"+a](e),a=w.getTimezoneOffset(h),
l=h.getTime()+a,h.setTime(l)}):c?(this.get=function(a,h){return h["getUTC"+a]()},this.set=function(a,h,e){return h["setUTC"+a](e)}):(this.get=function(a,h){return h["get"+a]()},this.set=function(a,h,e){return h["set"+a](e)})},makeTime:function(c,p,w,r,h,e){var l,n,d;this.useUTC?(l=this.Date.UTC.apply(0,arguments),n=this.getTimezoneOffset(l),l+=n,d=this.getTimezoneOffset(l),n!==d?l+=d-n:n-36E5!==this.getTimezoneOffset(l-36E5)||a.isSafari||(l-=36E5)):l=(new this.Date(c,p,k(w,1),k(r,0),k(h,0),k(e,0))).getTime();
return l},timezoneOffsetFunction:function(){var c=this,k=this.options,w=p.moment;if(!this.useUTC)return function(a){return 6E4*(new Date(a)).getTimezoneOffset()};if(k.timezone){if(w)return function(a){return 6E4*-w.tz(a,k.timezone).utcOffset()};a.error(25)}return this.useUTC&&k.getTimezoneOffset?function(a){return 6E4*k.getTimezoneOffset(a)}:function(){return 6E4*(c.timezoneOffset||0)}},dateFormat:function(c,k,w){if(!a.defined(k)||isNaN(k))return a.defaultOptions.lang.invalidDate||"";c=a.pick(c,"%Y-%m-%d %H:%M:%S");
var r=this,h=new this.Date(k),e=this.get("Hours",h),l=this.get("Day",h),n=this.get("Date",h),d=this.get("Month",h),g=this.get("FullYear",h),b=a.defaultOptions.lang,x=b.weekdays,u=b.shortWeekdays,H=a.pad,h=a.extend({a:u?u[l]:x[l].substr(0,3),A:x[l],d:H(n),e:H(n,2," "),w:l,b:b.shortMonths[d],B:b.months[d],m:H(d+1),o:d+1,y:g.toString().substr(2,2),Y:g,H:H(e),k:e,I:H(e%12||12),l:e%12||12,M:H(r.get("Minutes",h)),p:12>e?"AM":"PM",P:12>e?"am":"pm",S:H(h.getSeconds()),L:H(Math.floor(k%1E3),3)},a.dateFormats);
a.objectEach(h,function(a,b){for(;-1!==c.indexOf("%"+b);)c=c.replace("%"+b,"function"===typeof a?a.call(r,k):a)});return w?c.substr(0,1).toUpperCase()+c.substr(1):c},resolveDTLFormat:function(c){return a.isObject(c,!0)?c:(c=a.splat(c),{main:c[0],from:c[1],to:c[2]})},getTimeTicks:function(a,p,w,r){var h=this,e=[],l,n={},d;l=new h.Date(p);var g=a.unitRange,b=a.count||1,x;r=k(r,1);if(y(p)){h.set("Milliseconds",l,g>=c.second?0:b*Math.floor(h.get("Milliseconds",l)/b));g>=c.second&&h.set("Seconds",l,g>=
c.minute?0:b*Math.floor(h.get("Seconds",l)/b));g>=c.minute&&h.set("Minutes",l,g>=c.hour?0:b*Math.floor(h.get("Minutes",l)/b));g>=c.hour&&h.set("Hours",l,g>=c.day?0:b*Math.floor(h.get("Hours",l)/b));g>=c.day&&h.set("Date",l,g>=c.month?1:Math.max(1,b*Math.floor(h.get("Date",l)/b)));g>=c.month&&(h.set("Month",l,g>=c.year?0:b*Math.floor(h.get("Month",l)/b)),d=h.get("FullYear",l));g>=c.year&&h.set("FullYear",l,d-d%b);g===c.week&&(d=h.get("Day",l),h.set("Date",l,h.get("Date",l)-d+r+(d<r?-7:0)));d=h.get("FullYear",
l);r=h.get("Month",l);var u=h.get("Date",l),H=h.get("Hours",l);p=l.getTime();h.variableTimezone&&(x=w-p>4*c.month||h.getTimezoneOffset(p)!==h.getTimezoneOffset(w));p=l.getTime();for(l=1;p<w;)e.push(p),p=g===c.year?h.makeTime(d+l*b,0):g===c.month?h.makeTime(d,r+l*b):!x||g!==c.day&&g!==c.week?x&&g===c.hour&&1<b?h.makeTime(d,r,u,H+l*b):p+g*b:h.makeTime(d,r,u+l*b*(g===c.day?1:7)),l++;e.push(p);g<=c.hour&&1E4>e.length&&e.forEach(function(a){0===a%18E5&&"000000000"===h.dateFormat("%H%M%S%L",a)&&(n[a]="day")})}e.info=
F(a,{higherRanks:n,totalRange:g*b});return e}}})(I);(function(a){var y=a.color,F=a.merge;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:a.Time.prototype.defaultOptions,chart:{styledMode:!1,borderRadius:0,colorCount:10,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",
margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",alignColumns:!0,layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",cursor:"pointer",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},
shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",
day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',backgroundColor:y("#f7f7f7").setOpacity(.85).get(),borderWidth:1,shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",
whiteSpace:"nowrap"}},credits:{enabled:!0,href:"https://www.highcharts.com?credits",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(y){a.defaultOptions=F(!0,a.defaultOptions,y);a.time.update(F(a.defaultOptions.global,a.defaultOptions.time),!1);return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};a.defaultPlotOptions=a.defaultOptions.plotOptions;a.time=new a.Time(F(a.defaultOptions.global,
a.defaultOptions.time));a.dateFormat=function(y,k,c){return a.time.dateFormat(y,k,c)}})(I);(function(a){var y=a.correctFloat,F=a.defined,G=a.destroyObjectProperties,k=a.fireEvent,c=a.isNumber,p=a.merge,t=a.pick,v=a.deg2rad;a.Tick=function(a,c,h,e,l){this.axis=a;this.pos=c;this.type=h||"";this.isNewLabel=this.isNew=!0;this.parameters=l||{};this.tickmarkOffset=this.parameters.tickmarkOffset;this.options=this.parameters.options;h||e||this.addLabel()};a.Tick.prototype={addLabel:function(){var c=this,
r=c.axis,h=r.options,e=r.chart,l=r.categories,n=r.names,d=c.pos,g=t(c.options&&c.options.labels,h.labels),b=r.tickPositions,x=d===b[0],u=d===b[b.length-1],l=this.parameters.category||(l?t(l[d],n[d],d):d),k=c.label,b=b.info,E,B,m,z;r.isDatetimeAxis&&b&&(B=e.time.resolveDTLFormat(h.dateTimeLabelFormats[!h.grid&&b.higherRanks[d]||b.unitName]),E=B.main);c.isFirst=x;c.isLast=u;c.formatCtx={axis:r,chart:e,isFirst:x,isLast:u,dateTimeLabelFormat:E,tickPositionInfo:b,value:r.isLog?y(r.lin2log(l)):l,pos:d};
h=r.labelFormatter.call(c.formatCtx,this.formatCtx);if(z=B&&B.list)c.shortenLabel=function(){for(m=0;m<z.length;m++)if(k.attr({text:r.labelFormatter.call(a.extend(c.formatCtx,{dateTimeLabelFormat:z[m]}))}),k.getBBox().width<r.getSlotWidth(c)-2*t(g.padding,5))return;k.attr({text:""})};if(F(k))k&&k.textStr!==h&&(!k.textWidth||g.style&&g.style.width||k.styles.width||k.css({width:null}),k.attr({text:h}));else{if(c.label=k=F(h)&&g.enabled?e.renderer.text(h,0,0,g.useHTML).add(r.labelGroup):null)e.styledMode||
k.css(p(g.style)),k.textPxLength=k.getBBox().width;c.rotation=0}},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var c=this.axis,h=c.options.labels,e=a.x,l=c.chart.chartWidth,n=c.chart.spacing,d=t(c.labelLeft,Math.min(c.pos,n[3])),n=t(c.labelRight,Math.max(c.isRadial?0:c.pos+c.len,l-n[1])),g=this.label,b=this.rotation,x={left:0,center:.5,right:1}[c.labelAlign||g.attr("align")],u=g.getBBox().width,k=c.getSlotWidth(this),
E=k,B=1,m,z={};if(b||"justify"!==t(h.overflow,"justify"))0>b&&e-x*u<d?m=Math.round(e/Math.cos(b*v)-d):0<b&&e+x*u>n&&(m=Math.round((l-e)/Math.cos(b*v)));else if(l=e+(1-x)*u,e-x*u<d?E=a.x+E*(1-x)-d:l>n&&(E=n-a.x+E*x,B=-1),E=Math.min(k,E),E<k&&"center"===c.labelAlign&&(a.x+=B*(k-E-x*(k-Math.min(u,E)))),u>E||c.autoRotation&&(g.styles||{}).width)m=E;m&&(this.shortenLabel?this.shortenLabel():(z.width=Math.floor(m),(h.style||{}).textOverflow||(z.textOverflow="ellipsis"),g.css(z)))},getPosition:function(c,
r,h,e){var l=this.axis,n=l.chart,d=e&&n.oldChartHeight||n.chartHeight;c={x:c?a.correctFloat(l.translate(r+h,null,null,e)+l.transB):l.left+l.offset+(l.opposite?(e&&n.oldChartWidth||n.chartWidth)-l.right-l.left:0),y:c?d-l.bottom+l.offset-(l.opposite?l.height:0):a.correctFloat(d-l.translate(r+h,null,null,e)-l.transB)};k(this,"afterGetPosition",{pos:c});return c},getLabelPosition:function(a,c,h,e,l,n,d,g){var b=this.axis,x=b.transA,u=b.reversed,r=b.staggerLines,E=b.tickRotCorr||{x:0,y:0},B=l.y,m=e||b.reserveSpaceDefault?
0:-b.labelOffset*("center"===b.labelAlign?.5:1),z={};F(B)||(B=0===b.side?h.rotation?-8:-h.getBBox().height:2===b.side?E.y+8:Math.cos(h.rotation*v)*(E.y-h.getBBox(!1,0).height/2));a=a+l.x+m+E.x-(n&&e?n*x*(u?-1:1):0);c=c+B-(n&&!e?n*x*(u?1:-1):0);r&&(h=d/(g||1)%r,b.opposite&&(h=r-h-1),c+=b.labelOffset/r*h);z.x=a;z.y=Math.round(c);k(this,"afterGetLabelPosition",{pos:z,tickmarkOffset:n,index:d});return z},getMarkPath:function(a,c,h,e,l,n){return n.crispLine(["M",a,c,"L",a+(l?0:-h),c+(l?h:0)],e)},renderGridLine:function(a,
c,h){var e=this.axis,l=e.options,n=this.gridLine,d={},g=this.pos,b=this.type,x=t(this.tickmarkOffset,e.tickmarkOffset),u=e.chart.renderer,r=b?b+"Grid":"grid",k=l[r+"LineWidth"],B=l[r+"LineColor"],l=l[r+"LineDashStyle"];n||(e.chart.styledMode||(d.stroke=B,d["stroke-width"]=k,l&&(d.dashstyle=l)),b||(d.zIndex=1),a&&(c=0),this.gridLine=n=u.path().attr(d).addClass("highcharts-"+(b?b+"-":"")+"grid-line").add(e.gridGroup));if(n&&(h=e.getPlotLinePath(g+x,n.strokeWidth()*h,a,"pass")))n[a||this.isNew?"attr":
"animate"]({d:h,opacity:c})},renderMark:function(a,c,h){var e=this.axis,l=e.options,n=e.chart.renderer,d=this.type,g=d?d+"Tick":"tick",b=e.tickSize(g),x=this.mark,u=!x,r=a.x;a=a.y;var k=t(l[g+"Width"],!d&&e.isXAxis?1:0),l=l[g+"Color"];b&&(e.opposite&&(b[0]=-b[0]),u&&(this.mark=x=n.path().addClass("highcharts-"+(d?d+"-":"")+"tick").add(e.axisGroup),e.chart.styledMode||x.attr({stroke:l,"stroke-width":k})),x[u?"attr":"animate"]({d:this.getMarkPath(r,a,b[0],x.strokeWidth()*h,e.horiz,n),opacity:c}))},
renderLabel:function(a,r,h,e){var l=this.axis,n=l.horiz,d=l.options,g=this.label,b=d.labels,x=b.step,l=t(this.tickmarkOffset,l.tickmarkOffset),u=!0,k=a.x;a=a.y;g&&c(k)&&(g.xy=a=this.getLabelPosition(k,a,g,n,b,l,e,x),this.isFirst&&!this.isLast&&!t(d.showFirstLabel,1)||this.isLast&&!this.isFirst&&!t(d.showLastLabel,1)?u=!1:!n||b.step||b.rotation||r||0===h||this.handleOverflow(a),x&&e%x&&(u=!1),u&&c(a.y)?(a.opacity=h,g[this.isNewLabel?"attr":"animate"](a),this.isNewLabel=!1):(g.attr("y",-9999),this.isNewLabel=
!0))},render:function(c,r,h){var e=this.axis,l=e.horiz,n=this.pos,d=t(this.tickmarkOffset,e.tickmarkOffset),n=this.getPosition(l,n,d,r),d=n.x,g=n.y,e=l&&d===e.pos+e.len||!l&&g===e.pos?-1:1;h=t(h,1);this.isActive=!0;this.renderGridLine(r,h,e);this.renderMark(n,h,e);this.renderLabel(n,r,h,c);this.isNew=!1;a.fireEvent(this,"afterRender")},destroy:function(){G(this,this.axis)}}})(I);var X=function(a){var y=a.addEvent,F=a.animObject,G=a.arrayMax,k=a.arrayMin,c=a.color,p=a.correctFloat,t=a.defaultOptions,
v=a.defined,w=a.deg2rad,r=a.destroyObjectProperties,h=a.extend,e=a.fireEvent,l=a.format,n=a.getMagnitude,d=a.isArray,g=a.isNumber,b=a.isString,x=a.merge,u=a.normalizeTickInterval,H=a.objectEach,E=a.pick,B=a.removeEvent,m=a.splat,z=a.syncTimeout,D=a.Tick,A=function(){this.init.apply(this,arguments)};a.extend(A.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:{main:"%H:%M:%S.%L",range:!1},second:{main:"%H:%M:%S",range:!1},minute:{main:"%H:%M",range:!1},hour:{main:"%H:%M",range:!1},day:{main:"%e. %b"},
week:{main:"%e. %b"},month:{main:"%b '%y"},year:{main:"%Y"}},endOnTick:!1,labels:{enabled:!0,indentation:10,x:0,style:{color:"#666666",cursor:"default",fontSize:"11px"}},maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",minPadding:.01,startOfWeek:1,startOnTick:!1,tickLength:10,tickPixelInterval:100,tickmarkPlacement:"between",tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",
lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,maxPadding:.05,minPadding:.05,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{allowOverlap:!1,enabled:!1,formatter:function(){return a.numberFormat(this.total,-1)},style:{color:"#000000",fontSize:"11px",fontWeight:"bold",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},
title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}},init:function(a,q){var f=q.isX,b=this;b.chart=a;b.horiz=a.inverted&&!b.isZAxis?!f:f;b.isXAxis=f;b.coll=b.coll||(f?"xAxis":"yAxis");e(this,"init",{userOptions:q});b.opposite=q.opposite;b.side=q.side||(b.horiz?b.opposite?0:2:b.opposite?1:3);b.setOptions(q);var g=this.options,d=g.type;b.labelFormatter=g.labels.formatter||
b.defaultLabelFormatter;b.userOptions=q;b.minPixelPadding=0;b.reversed=g.reversed;b.visible=!1!==g.visible;b.zoomEnabled=!1!==g.zoomEnabled;b.hasNames="category"===d||!0===g.categories;b.categories=g.categories||b.hasNames;b.names||(b.names=[],b.names.keys={});b.plotLinesAndBandsGroups={};b.isLog="logarithmic"===d;b.isDatetimeAxis="datetime"===d;b.positiveValuesOnly=b.isLog&&!b.allowNegativeLog;b.isLinked=v(g.linkedTo);b.ticks={};b.labelEdge=[];b.minorTicks={};b.plotLinesAndBands=[];b.alternateBands=
{};b.len=0;b.minRange=b.userMinRange=g.minRange||g.maxZoom;b.range=g.range;b.offset=g.offset||0;b.stacks={};b.oldStacks={};b.stacksTouched=0;b.max=null;b.min=null;b.crosshair=E(g.crosshair,m(a.options.tooltip.crosshairs)[f?0:1],!1);q=b.options.events;-1===a.axes.indexOf(b)&&(f?a.axes.splice(a.xAxis.length,0,b):a.axes.push(b),a[b.coll].push(b));b.series=b.series||[];a.inverted&&!b.isZAxis&&f&&void 0===b.reversed&&(b.reversed=!0);H(q,function(a,f){y(b,f,a)});b.lin2log=g.linearToLogConverter||b.lin2log;
b.isLog&&(b.val2lin=b.log2lin,b.lin2val=b.lin2log);e(this,"afterInit")},setOptions:function(a){this.options=x(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],x(t[this.coll],a));e(this,"afterSetOptions",{userOptions:a})},defaultLabelFormatter:function(){var f=this.axis,q=this.value,b=f.chart.time,g=f.categories,d=this.dateTimeLabelFormat,e=t.lang,m=e.numericSymbols,
e=e.numericSymbolMagnitude||1E3,h=m&&m.length,n,c=f.options.labels.format,f=f.isLog?Math.abs(q):f.tickInterval;if(c)n=l(c,this,b);else if(g)n=q;else if(d)n=b.dateFormat(d,q);else if(h&&1E3<=f)for(;h--&&void 0===n;)b=Math.pow(e,h+1),f>=b&&0===10*q%b&&null!==m[h]&&0!==q&&(n=a.numberFormat(q/b,-1)+m[h]);void 0===n&&(n=1E4<=Math.abs(q)?a.numberFormat(q,-1):a.numberFormat(q,-1,void 0,""));return n},getSeriesExtremes:function(){var a=this,q=a.chart;e(this,"getSeriesExtremes",null,function(){a.hasVisibleSeries=
!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();a.series.forEach(function(f){if(f.visible||!q.options.chart.ignoreHiddenSeries){var b=f.options,d=b.threshold,e;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=d&&(d=null);if(a.isXAxis)b=f.xData,b.length&&(f=k(b),e=G(b),g(f)||f instanceof Date||(b=b.filter(g),f=k(b),e=G(b)),b.length&&(a.dataMin=Math.min(E(a.dataMin,b[0],f),f),a.dataMax=Math.max(E(a.dataMax,b[0],e),e)));else if(f.getExtremes(),e=f.dataMax,
f=f.dataMin,v(f)&&v(e)&&(a.dataMin=Math.min(E(a.dataMin,f),f),a.dataMax=Math.max(E(a.dataMax,e),e)),v(d)&&(a.threshold=d),!b.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})});e(this,"afterGetSeriesExtremes")},translate:function(a,q,b,d,e,m){var f=this.linkedParent||this,h=1,n=0,c=d?f.oldTransA:f.transA;d=d?f.oldMin:f.min;var u=f.minPixelPadding;e=(f.isOrdinal||f.isBroken||f.isLog&&e)&&f.lin2val;c||(c=f.transA);b&&(h*=-1,n=f.len);f.reversed&&(h*=-1,n-=h*(f.sector||f.len));q?(a=(a*h+n-u)/
c+d,e&&(a=f.lin2val(a))):(e&&(a=f.val2lin(a)),a=g(d)?h*(a-d)*c+n+h*u+(g(m)?c*m:0):void 0);return a},toPixels:function(a,q){return this.translate(a,!1,!this.horiz,null,!0)+(q?0:this.pos)},toValue:function(a,q){return this.translate(a-(q?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,q,b,d,m){var f=this,h=f.chart,n=f.left,c=f.top,u,l,z,x,D=b&&h.oldChartHeight||h.chartHeight,r=b&&h.oldChartWidth||h.chartWidth,k,L=f.transB,A,B=function(a,f,q){if("pass"!==d&&a<f||a>q)d?a=Math.min(Math.max(f,
a),q):k=!0;return a};A={value:a,lineWidth:q,old:b,force:d,translatedValue:m};e(this,"getPlotLinePath",A,function(e){m=E(m,f.translate(a,null,null,b));m=Math.min(Math.max(-1E5,m),1E5);u=z=Math.round(m+L);l=x=Math.round(D-m-L);g(m)?f.horiz?(l=c,x=D-f.bottom,u=z=B(u,n,n+f.width)):(u=n,z=r-f.right,l=x=B(l,c,c+f.height)):(k=!0,d=!1);e.path=k&&!d?null:h.renderer.crispLine(["M",u,l,"L",z,x],q||1)});return A.path},getLinearTickPositions:function(a,q,b){var f,g=p(Math.floor(q/a)*a);b=p(Math.ceil(b/a)*a);var d=
[],e;p(g+a)===g&&(e=20);if(this.single)return[q];for(q=g;q<=b;){d.push(q);q=p(q+a,e);if(q===f)break;f=q}return d},getMinorTickInterval:function(){var a=this.options;return!0===a.minorTicks?E(a.minorTickInterval,"auto"):!1===a.minorTicks?null:a.minorTickInterval},getMinorTickPositions:function(){var a=this,q=a.options,b=a.tickPositions,g=a.minorTickInterval,d=[],e=a.pointRangePadding||0,m=a.min-e,e=a.max+e,h=e-m;if(h&&h/g<a.len/3)if(a.isLog)this.paddedTicks.forEach(function(f,q,b){q&&d.push.apply(d,
a.getLogTickPositions(g,b[q-1],b[q],!0))});else if(a.isDatetimeAxis&&"auto"===this.getMinorTickInterval())d=d.concat(a.getTimeTicks(a.normalizeTimeTickInterval(g),m,e,q.startOfWeek));else for(q=m+(b[0]-m)%g;q<=e&&q!==d[0];q+=g)d.push(q);0!==d.length&&a.trimTicks(d);return d},adjustForMinRange:function(){var a=this.options,q=this.min,b=this.max,g,d,e,m,h,n,c,u;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(v(a.min)||v(a.max)?this.minRange=null:(this.series.forEach(function(a){n=a.xData;for(m=
c=a.xIncrement?1:n.length-1;0<m;m--)if(h=n[m]-n[m-1],void 0===e||h<e)e=h}),this.minRange=Math.min(5*e,this.dataMax-this.dataMin)));b-q<this.minRange&&(d=this.dataMax-this.dataMin>=this.minRange,u=this.minRange,g=(u-b+q)/2,g=[q-g,E(a.min,q-g)],d&&(g[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),q=G(g),b=[q+u,E(a.max,q+u)],d&&(b[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),b=k(b),b-q<u&&(g[0]=b-u,g[1]=E(a.min,b-u),q=G(g)));this.min=q;this.max=b},getClosest:function(){var a;this.categories?
a=1:this.series.forEach(function(f){var q=f.closestPointRange,b=f.visible||!f.chart.options.chart.ignoreHiddenSeries;!f.noSharedTooltip&&v(q)&&b&&(a=v(a)?Math.min(a,q):q)});return a},nameToX:function(a){var f=d(this.categories),b=f?this.categories:this.names,g=a.options.x,e;a.series.requireSorting=!1;v(g)||(g=!1===this.options.uniqueNames?a.series.autoIncrement():f?b.indexOf(a.name):E(b.keys[a.name],-1));-1===g?f||(e=b.length):e=g;void 0!==e&&(this.names[e]=a.name,this.names.keys[a.name]=e);return e},
updateNames:function(){var a=this,q=this.names;0<q.length&&(Object.keys(q.keys).forEach(function(a){delete q.keys[a]}),q.length=0,this.minRange=this.userMinRange,(this.series||[]).forEach(function(f){f.xIncrement=null;if(!f.points||f.isDirtyData)a.max=Math.max(a.max,f.xData.length-1),f.processData(),f.generatePoints();f.data.forEach(function(q,b){var g;q&&q.options&&void 0!==q.name&&(g=a.nameToX(q),void 0!==g&&g!==q.x&&(q.x=g,f.xData[b]=g))})}))},setAxisTranslation:function(a){var f=this,g=f.max-
f.min,d=f.axisPointRange||0,m,h=0,n=0,c=f.linkedParent,u=!!f.categories,l=f.transA,z=f.isXAxis;if(z||u||d)m=f.getClosest(),c?(h=c.minPointOffset,n=c.pointRangePadding):f.series.forEach(function(a){var q=u?1:z?E(a.options.pointRange,m,0):f.axisPointRange||0;a=a.options.pointPlacement;d=Math.max(d,q);f.single||(h=Math.max(h,z&&b(a)?0:q/2),n=Math.max(n,z&&"on"===a?0:q))}),c=f.ordinalSlope&&m?f.ordinalSlope/m:1,f.minPointOffset=h*=c,f.pointRangePadding=n*=c,f.pointRange=Math.min(d,g),z&&(f.closestPointRange=
m);a&&(f.oldTransA=l);f.translationSlope=f.transA=l=f.staticScale||f.len/(g+n||1);f.transB=f.horiz?f.left:f.bottom;f.minPixelPadding=l*h;e(this,"afterSetAxisTranslation")},minFromRange:function(){return this.max-this.range},setTickInterval:function(f){var b=this,d=b.chart,m=b.options,h=b.isLog,c=b.isDatetimeAxis,l=b.isXAxis,z=b.isLinked,x=m.maxPadding,D=m.minPadding,r,k=m.tickInterval,A=m.tickPixelInterval,B=b.categories,H=g(b.threshold)?b.threshold:null,w=b.softThreshold,t,y,G;c||B||z||this.getTickAmount();
y=E(b.userMin,m.min);G=E(b.userMax,m.max);z?(b.linkedParent=d[b.coll][m.linkedTo],r=b.linkedParent.getExtremes(),b.min=E(r.min,r.dataMin),b.max=E(r.max,r.dataMax),m.type!==b.linkedParent.options.type&&a.error(11,1,d)):(!w&&v(H)&&(b.dataMin>=H?(r=H,D=0):b.dataMax<=H&&(t=H,x=0)),b.min=E(y,r,b.dataMin),b.max=E(G,t,b.dataMax));h&&(b.positiveValuesOnly&&!f&&0>=Math.min(b.min,E(b.dataMin,b.min))&&a.error(10,1,d),b.min=p(b.log2lin(b.min),15),b.max=p(b.log2lin(b.max),15));b.range&&v(b.max)&&(b.userMin=b.min=
y=Math.max(b.dataMin,b.minFromRange()),b.userMax=G=b.max,b.range=null);e(b,"foundExtremes");b.beforePadding&&b.beforePadding();b.adjustForMinRange();!(B||b.axisPointRange||b.usePercentage||z)&&v(b.min)&&v(b.max)&&(d=b.max-b.min)&&(!v(y)&&D&&(b.min-=d*D),!v(G)&&x&&(b.max+=d*x));g(m.softMin)&&!g(b.userMin)&&(b.min=Math.min(b.min,m.softMin));g(m.softMax)&&!g(b.userMax)&&(b.max=Math.max(b.max,m.softMax));g(m.floor)&&(b.min=Math.min(Math.max(b.min,m.floor),Number.MAX_VALUE));g(m.ceiling)&&(b.max=Math.max(Math.min(b.max,
m.ceiling),E(b.userMax,-Number.MAX_VALUE)));w&&v(b.dataMin)&&(H=H||0,!v(y)&&b.min<H&&b.dataMin>=H?b.min=H:!v(G)&&b.max>H&&b.dataMax<=H&&(b.max=H));b.tickInterval=b.min===b.max||void 0===b.min||void 0===b.max?1:z&&!k&&A===b.linkedParent.options.tickPixelInterval?k=b.linkedParent.tickInterval:E(k,this.tickAmount?(b.max-b.min)/Math.max(this.tickAmount-1,1):void 0,B?1:(b.max-b.min)*A/Math.max(b.len,A));l&&!f&&b.series.forEach(function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);
b.beforeSetTickPositions&&b.beforeSetTickPositions();b.postProcessTickInterval&&(b.tickInterval=b.postProcessTickInterval(b.tickInterval));b.pointRange&&!k&&(b.tickInterval=Math.max(b.pointRange,b.tickInterval));f=E(m.minTickInterval,b.isDatetimeAxis&&b.closestPointRange);!k&&b.tickInterval<f&&(b.tickInterval=f);c||h||k||(b.tickInterval=u(b.tickInterval,null,n(b.tickInterval),E(m.allowDecimals,!(.5<b.tickInterval&&5>b.tickInterval&&1E3<b.max&&9999>b.max)),!!this.tickAmount));this.tickAmount||(b.tickInterval=
b.unsquish());this.setTickPositions()},setTickPositions:function(){var f=this.options,b,g=f.tickPositions;b=this.getMinorTickInterval();var d=f.tickPositioner,m=f.startOnTick,h=f.endOnTick;this.tickmarkOffset=this.categories&&"between"===f.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===b&&this.tickInterval?this.tickInterval/5:b;this.single=this.min===this.max&&v(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==f.allowDecimals);this.tickPositions=
b=g&&g.slice();!b&&(!this.ordinalPositions&&(this.max-this.min)/this.tickInterval>Math.max(2*this.len,200)?(b=[this.min,this.max],a.error(19,!1,this.chart)):b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,f.units),this.min,this.max,f.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),b.length>this.len&&(b=[b[0],
b.pop()],b[0]===b[1]&&(b.length=1)),this.tickPositions=b,d&&(d=d.apply(this,[this.min,this.max])))&&(this.tickPositions=b=d);this.paddedTicks=b.slice(0);this.trimTicks(b,m,h);this.isLinked||(this.single&&2>b.length&&(this.min-=.5,this.max+=.5),g||d||this.adjustTickAmount());e(this,"afterSetTickPositions")},trimTicks:function(a,b,g){var f=a[0],d=a[a.length-1],q=this.minPointOffset||0;e(this,"trimTicks");if(!this.isLinked){if(b&&-Infinity!==f)this.min=f;else for(;this.min-q>a[0];)a.shift();if(g)this.max=
d;else for(;this.max+q<a[a.length-1];)a.pop();0===a.length&&v(f)&&!this.options.tickPositions&&a.push((d+f)/2)}},alignToOthers:function(){var a={},b,g=this.options;!1===this.chart.options.chart.alignTicks||!1===g.alignTicks||!1===g.startOnTick||!1===g.endOnTick||this.isLog||this.chart[this.coll].forEach(function(f){var g=f.options,g=[f.horiz?g.left:g.top,g.width,g.height,g.pane].join();f.series.length&&(a[g]?b=!0:a[g]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,g=a.tickPixelInterval;
!v(a.tickInterval)&&this.len<g&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Math.ceil(this.len/g)+1);4>b&&(this.finalTickAmt=b,b=5);this.tickAmount=b},adjustTickAmount:function(){var a=this.options,b=this.tickInterval,g=this.tickPositions,d=this.tickAmount,e=this.finalTickAmt,m=g&&g.length,h=E(this.threshold,this.softThreshold?0:null),n;if(this.hasData()){if(m<d){for(n=this.min;g.length<d;)g.length%2||n===h?g.push(p(g[g.length-1]+b)):g.unshift(p(g[0]-
b));this.transA*=(m-1)/(d-1);this.min=a.startOnTick?g[0]:Math.min(this.min,g[0]);this.max=a.endOnTick?g[g.length-1]:Math.max(this.max,g[g.length-1])}else m>d&&(this.tickInterval*=2,this.setTickPositions());if(v(e)){for(b=a=g.length;b--;)(3===e&&1===b%2||2>=e&&0<b&&b<a-1)&&g.splice(b,1);this.finalTickAmt=void 0}}},setScale:function(){var a=this.series.some(function(a){return a.isDirtyData||a.isDirty||a.xAxis.isDirty}),b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();
(b=this.len!==this.oldAxisLength)||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks();e(this,"afterSetScale")},setExtremes:function(a,b,g,d,m){var f=this,
q=f.chart;g=E(g,!0);f.series.forEach(function(a){delete a.kdTree});m=h(m,{min:a,max:b});e(f,"setExtremes",m,function(){f.userMin=a;f.userMax=b;f.eventArgs=m;g&&q.redraw(d)})},zoom:function(a,b){var f=this.dataMin,g=this.dataMax,d=this.options,q=Math.min(f,E(d.min,f)),m=Math.max(g,E(d.max,g));a={newMin:a,newMax:b};e(this,"zoom",a,function(a){var b=a.newMin,d=a.newMax;if(b!==this.min||d!==this.max)this.allowZoomOutside||(v(f)&&(b<q&&(b=q),b>m&&(b=m)),v(g)&&(d<q&&(d=q),d>m&&(d=m))),this.displayBtn=void 0!==
b||void 0!==d,this.setExtremes(b,d,!1,void 0,{trigger:"zoom"});a.zoomed=!0});return a.zoomed},setAxisSize:function(){var f=this.chart,b=this.options,g=b.offsets||[0,0,0,0],d=this.horiz,e=this.width=Math.round(a.relativeLength(E(b.width,f.plotWidth-g[3]+g[1]),f.plotWidth)),m=this.height=Math.round(a.relativeLength(E(b.height,f.plotHeight-g[0]+g[2]),f.plotHeight)),h=this.top=Math.round(a.relativeLength(E(b.top,f.plotTop+g[0]),f.plotHeight,f.plotTop)),b=this.left=Math.round(a.relativeLength(E(b.left,
f.plotLeft+g[3]),f.plotWidth,f.plotLeft));this.bottom=f.chartHeight-m-h;this.right=f.chartWidth-e-b;this.len=Math.max(d?e:m,0);this.pos=d?b:h},getExtremes:function(){var a=this.isLog;return{min:a?p(this.lin2log(this.min)):this.min,max:a?p(this.lin2log(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var f=this.isLog,b=f?this.lin2log(this.min):this.min,f=f?this.lin2log(this.max):this.max;null===a||-Infinity===a?a=b:Infinity===
a?a=f:b>a?a=b:f<a&&(a=f);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){var f=(E(a,0)-90*this.side+720)%360;a={align:"center"};e(this,"autoLabelAlign",a,function(a){15<f&&165>f?a.align="right":195<f&&345>f&&(a.align="left")});return a.align},tickSize:function(a){var f=this.options,b=f[a+"Length"],g=E(f[a+"Width"],"tick"===a&&this.isXAxis?1:0),d;g&&b&&("inside"===f[a+"Position"]&&(b=-b),d=[b,g]);a={tickSize:d};e(this,"afterTickSize",a);return a.tickSize},labelMetrics:function(){var a=
this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&this.options.labels.style.fontSize,this.ticks[a]&&this.ticks[a].label)},unsquish:function(){var a=this.options.labels,b=this.horiz,g=this.tickInterval,d=g,e=this.len/(((this.categories?1:0)+this.max-this.min)/g),m,h=a.rotation,n=this.labelMetrics(),c,u=Number.MAX_VALUE,z,l=this.max-this.min,x=function(a){var f=a/(e||1),f=1<f?Math.ceil(f):1;f*g>l&&Infinity!==a&&Infinity!==e&&(f=Math.ceil(l/
g));return p(f*g)};b?(z=!a.staggerLines&&!a.step&&(v(h)?[h]:e<E(a.autoRotationLimit,80)&&a.autoRotation))&&z.forEach(function(a){var f;if(a===h||a&&-90<=a&&90>=a)c=x(Math.abs(n.h/Math.sin(w*a))),f=c+Math.abs(a/360),f<u&&(u=f,m=a,d=c)}):a.step||(d=x(n.h));this.autoRotation=z;this.labelRotation=E(m,h);return d},getSlotWidth:function(a){var f=this.chart,b=this.horiz,g=this.options.labels,d=Math.max(this.tickPositions.length-(this.categories?0:1),1),e=f.margin[3];return a&&a.slotWidth||b&&2>(g.step||
0)&&!g.rotation&&(this.staggerLines||1)*this.len/d||!b&&(g.style&&parseInt(g.style.width,10)||e&&e-f.spacing[3]||.33*f.chartWidth)},renderUnsquish:function(){var a=this.chart,g=a.renderer,d=this.tickPositions,e=this.ticks,m=this.options.labels,h=m&&m.style||{},n=this.horiz,c=this.getSlotWidth(),u=Math.max(1,Math.round(c-2*(m.padding||5))),z={},l=this.labelMetrics(),x=m.style&&m.style.textOverflow,D,r,k=0,A;b(m.rotation)||(z.rotation=m.rotation||0);d.forEach(function(a){(a=e[a])&&a.label&&a.label.textPxLength>
k&&(k=a.label.textPxLength)});this.maxLabelLength=k;if(this.autoRotation)k>u&&k>l.h?z.rotation=this.labelRotation:this.labelRotation=0;else if(c&&(D=u,!x))for(r="clip",u=d.length;!n&&u--;)if(A=d[u],A=e[A].label)A.styles&&"ellipsis"===A.styles.textOverflow?A.css({textOverflow:"clip"}):A.textPxLength>c&&A.css({width:c+"px"}),A.getBBox().height>this.len/d.length-(l.h-l.f)&&(A.specificTextOverflow="ellipsis");z.rotation&&(D=k>.5*a.chartHeight?.33*a.chartHeight:k,x||(r="ellipsis"));if(this.labelAlign=
m.align||this.autoLabelAlign(this.labelRotation))z.align=this.labelAlign;d.forEach(function(a){var f=(a=e[a])&&a.label,b=h.width,g={};f&&(f.attr(z),a.shortenLabel?a.shortenLabel():D&&!b&&"nowrap"!==h.whiteSpace&&(D<f.textPxLength||"SPAN"===f.element.tagName)?(g.width=D,x||(g.textOverflow=f.specificTextOverflow||r),f.css(g)):f.styles&&f.styles.width&&!g.width&&!b&&f.css({width:null}),delete f.specificTextOverflow,a.rotation=z.rotation)},this);this.tickRotCorr=g.rotCorr(l.b,this.labelRotation||0,0!==
this.side)},hasData:function(){return this.hasVisibleSeries||v(this.min)&&v(this.max)&&this.tickPositions&&0<this.tickPositions.length},addTitle:function(a){var f=this.chart.renderer,b=this.horiz,g=this.opposite,d=this.options.title,e,m=this.chart.styledMode;this.axisTitle||((e=d.textAlign)||(e=(b?{low:"left",middle:"center",high:"right"}:{low:g?"right":"left",middle:"center",high:g?"left":"right"})[d.align]),this.axisTitle=f.text(d.text,0,0,d.useHTML).attr({zIndex:7,rotation:d.rotation||0,align:e}).addClass("highcharts-axis-title"),
m||this.axisTitle.css(x(d.style)),this.axisTitle.add(this.axisGroup),this.axisTitle.isNew=!0);m||d.style.width||this.isRadial||this.axisTitle.css({width:this.len});this.axisTitle[a?"show":"hide"](!0)},generateTick:function(a){var f=this.ticks;f[a]?f[a].addLabel():f[a]=new D(this,a)},getOffset:function(){var a=this,b=a.chart,g=b.renderer,d=a.options,m=a.tickPositions,h=a.ticks,n=a.horiz,c=a.side,u=b.inverted&&!a.isZAxis?[1,0,3,2][c]:c,z,l,x=0,D,r=0,k=d.title,A=d.labels,B=0,p=b.axisOffset,b=b.clipOffset,
w=[-1,1,1,-1][c],t=d.className,y=a.axisParent;z=a.hasData();a.showAxis=l=z||E(d.showEmpty,!0);a.staggerLines=a.horiz&&A.staggerLines;a.axisGroup||(a.gridGroup=g.g("grid").attr({zIndex:d.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(t||"")).add(y),a.axisGroup=g.g("axis").attr({zIndex:d.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(t||"")).add(y),a.labelGroup=g.g("axis-labels").attr({zIndex:A.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+
(t||"")).add(y));z||a.isLinked?(m.forEach(function(b,f){a.generateTick(b,f)}),a.renderUnsquish(),a.reserveSpaceDefault=0===c||2===c||{1:"left",3:"right"}[c]===a.labelAlign,E(A.reserveSpace,"center"===a.labelAlign?!0:null,a.reserveSpaceDefault)&&m.forEach(function(a){B=Math.max(h[a].getLabelSize(),B)}),a.staggerLines&&(B*=a.staggerLines),a.labelOffset=B*(a.opposite?-1:1)):H(h,function(a,b){a.destroy();delete h[b]});k&&k.text&&!1!==k.enabled&&(a.addTitle(l),l&&!1!==k.reserveSpace&&(a.titleOffset=x=
a.axisTitle.getBBox()[n?"height":"width"],D=k.offset,r=v(D)?0:E(k.margin,n?5:10)));a.renderLine();a.offset=w*E(d.offset,p[c]?p[c]+(d.margin||0):0);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};g=0===c?-a.labelMetrics().h:2===c?a.tickRotCorr.y:0;r=Math.abs(B)+r;B&&(r=r-g+w*(n?E(A.y,a.tickRotCorr.y+8*w):A.x));a.axisTitleMargin=E(D,r);a.getMaxLabelDimensions&&(a.maxLabelDimensions=a.getMaxLabelDimensions(h,m));n=this.tickSize("tick");p[c]=Math.max(p[c],a.axisTitleMargin+x+w*a.offset,r,z&&m.length&&n?n[0]+w*
a.offset:0);d=d.offset?0:2*Math.floor(a.axisLine.strokeWidth()/2);b[u]=Math.max(b[u],d);e(this,"afterGetOffset")},getLinePath:function(a){var b=this.chart,f=this.opposite,g=this.offset,d=this.horiz,e=this.left+(f?this.width:0)+g,g=b.chartHeight-this.bottom-(f?this.height:0)+g;f&&(a*=-1);return b.renderer.crispLine(["M",d?this.left:e,d?g:this.top,"L",d?b.chartWidth-this.right:e,d?g:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),
this.chart.styledMode||this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,b=this.left,g=this.top,d=this.len,m=this.options.title,h=a?b:g,n=this.opposite,c=this.offset,u=m.x||0,z=m.y||0,l=this.axisTitle,x=this.chart.renderer.fontMetrics(m.style&&m.style.fontSize,l),l=Math.max(l.getBBox(null,0).height-x.h-1,0),d={low:h+(a?0:d),middle:h+d/2,high:h+(a?d:0)}[m.align],b=(a?g+this.height:b)+(a?1:-1)*(n?-1:1)*this.axisTitleMargin+
[-l,l,x.f,-l][this.side],a={x:a?d+u:b+(n?this.width:0)+c+u,y:a?b+z-(n?this.height:0)+c:d+z};e(this,"afterGetTitlePosition",{titlePosition:a});return a},renderMinorTick:function(a){var b=this.chart.hasRendered&&g(this.oldMin),f=this.minorTicks;f[a]||(f[a]=new D(this,a,"minor"));b&&f[a].isNew&&f[a].render(null,!0);f[a].render(null,!1,1)},renderTick:function(a,b){var f=this.isLinked,d=this.ticks,e=this.chart.hasRendered&&g(this.oldMin);if(!f||a>=this.min&&a<=this.max)d[a]||(d[a]=new D(this,a)),e&&d[a].isNew&&
d[a].render(b,!0,-1),d[a].render(b)},render:function(){var b=this,d=b.chart,m=b.options,h=b.isLog,n=b.isLinked,c=b.tickPositions,u=b.axisTitle,l=b.ticks,x=b.minorTicks,r=b.alternateBands,k=m.stackLabels,A=m.alternateGridColor,B=b.tickmarkOffset,E=b.axisLine,p=b.showAxis,w=F(d.renderer.globalAnimation),t,v;b.labelEdge.length=0;b.overlap=!1;[l,x,r].forEach(function(a){H(a,function(a){a.isActive=!1})});if(b.hasData()||n)b.minorTickInterval&&!b.categories&&b.getMinorTickPositions().forEach(function(a){b.renderMinorTick(a)}),
c.length&&(c.forEach(function(a,f){b.renderTick(a,f)}),B&&(0===b.min||b.single)&&(l[-1]||(l[-1]=new D(b,-1,null,!0)),l[-1].render(-1))),A&&c.forEach(function(f,g){v=void 0!==c[g+1]?c[g+1]+B:b.max-B;0===g%2&&f<b.max&&v<=b.max+(d.polar?-B:B)&&(r[f]||(r[f]=new a.PlotLineOrBand(b)),t=f+B,r[f].options={from:h?b.lin2log(t):t,to:h?b.lin2log(v):v,color:A},r[f].render(),r[f].isActive=!0)}),b._addedPlotLB||((m.plotLines||[]).concat(m.plotBands||[]).forEach(function(a){b.addPlotBandOrLine(a)}),b._addedPlotLB=
!0);[l,x,r].forEach(function(a){var b,f=[],g=w.duration;H(a,function(a,b){a.isActive||(a.render(b,!1,0),a.isActive=!1,f.push(b))});z(function(){for(b=f.length;b--;)a[f[b]]&&!a[f[b]].isActive&&(a[f[b]].destroy(),delete a[f[b]])},a!==r&&d.hasRendered&&g?g:0)});E&&(E[E.isPlaced?"animate":"attr"]({d:this.getLinePath(E.strokeWidth())}),E.isPlaced=!0,E[p?"show":"hide"](!0));u&&p&&(m=b.getTitlePosition(),g(m.y)?(u[u.isNew?"attr":"animate"](m),u.isNew=!1):(u.attr("y",-9999),u.isNew=!0));k&&k.enabled&&b.renderStackTotals();
b.isDirty=!1;e(this,"afterRender")},redraw:function(){this.visible&&(this.render(),this.plotLinesAndBands.forEach(function(a){a.render()}));this.series.forEach(function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var b=this,f=b.stacks,g=b.plotLinesAndBands,d;e(this,"destroy",{keepEvents:a});a||B(b);H(f,function(a,b){r(a);f[b]=null});[b.ticks,b.minorTicks,b.alternateBands].forEach(function(a){r(a)});if(g)for(a=g.length;a--;)g[a].destroy();
"stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function(a){b[a]&&(b[a]=b[a].destroy())});for(d in b.plotLinesAndBandsGroups)b.plotLinesAndBandsGroups[d]=b.plotLinesAndBandsGroups[d].destroy();H(b,function(a,f){-1===b.keepProps.indexOf(f)&&delete b[f]})},drawCrosshair:function(a,b){var f,g=this.crosshair,d=E(g.snap,!0),m,h=this.cross;e(this,"drawCrosshair",{e:a,point:b});a||(a=this.cross&&this.cross.e);if(this.crosshair&&!1!==(v(b)||!d)){d?v(b)&&
(m=E(b.crosshairPos,this.isXAxis?b.plotX:this.len-b.plotY)):m=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos);v(m)&&(f=this.getPlotLinePath(b&&(this.isXAxis?b.x:E(b.stackY,b.y)),null,null,null,m)||null);if(!v(f)){this.hideCrosshair();return}d=this.categories&&!this.isRadial;h||(this.cross=h=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(d?"category ":"thin ")+g.className).attr({zIndex:E(g.zIndex,2)}).add(),this.chart.styledMode||(h.attr({stroke:g.color||
(d?c("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":E(g.width,1)}).css({"pointer-events":"none"}),g.dashStyle&&h.attr({dashstyle:g.dashStyle})));h.show().attr({d:f});d&&!g.width&&h.attr({"stroke-width":this.transA});this.cross.e=a}else this.hideCrosshair();e(this,"afterDrawCrosshair",{e:a,point:b})},hideCrosshair:function(){this.cross&&this.cross.hide();e(this,"afterHideCrosshair")}});return a.Axis=A}(I);(function(a){var y=a.Axis,F=a.getMagnitude,G=a.normalizeTickInterval,k=a.timeUnits;
y.prototype.getTimeTicks=function(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)};y.prototype.normalizeTimeTickInterval=function(a,p){var c=p||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];p=c[c.length-1];var v=k[p[0]],w=p[1],r;for(r=0;r<c.length&&!(p=c[r],v=k[p[0]],w=p[1],c[r+1]&&a<=(v*w[w.length-1]+k[c[r+1][0]])/2);r++);v===
k.year&&a<5*v&&(w=[1,2,5]);a=G(a/v,w,"year"===p[0]?Math.max(F(a/v),1):1);return{unitRange:v,count:a,unitName:p[0]}}})(I);(function(a){var y=a.Axis,F=a.getMagnitude,G=a.normalizeTickInterval,k=a.pick;y.prototype.getLogTickPositions=function(a,p,t,v){var c=this.options,r=this.len,h=[];v||(this._minorAutoInterval=null);if(.5<=a)a=Math.round(a),h=this.getLinearTickPositions(a,p,t);else if(.08<=a)for(var r=Math.floor(p),e,l,n,d,g,c=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];r<t+1&&!g;r++)for(l=
c.length,e=0;e<l&&!g;e++)n=this.log2lin(this.lin2log(r)*c[e]),n>p&&(!v||d<=t)&&void 0!==d&&h.push(d),d>t&&(g=!0),d=n;else p=this.lin2log(p),t=this.lin2log(t),a=v?this.getMinorTickInterval():c.tickInterval,a=k("auto"===a?null:a,this._minorAutoInterval,c.tickPixelInterval/(v?5:1)*(t-p)/((v?r/this.tickPositions.length:r)||1)),a=G(a,null,F(a)),h=this.getLinearTickPositions(a,p,t).map(this.log2lin),v||(this._minorAutoInterval=a/5);v||(this.tickInterval=a);return h};y.prototype.log2lin=function(a){return Math.log(a)/
Math.LN10};y.prototype.lin2log=function(a){return Math.pow(10,a)}})(I);(function(a,y){var F=a.arrayMax,G=a.arrayMin,k=a.defined,c=a.destroyObjectProperties,p=a.erase,t=a.merge,v=a.pick;a.PlotLineOrBand=function(a,c){this.axis=a;c&&(this.options=c,this.id=c.id)};a.PlotLineOrBand.prototype={render:function(){a.fireEvent(this,"render");var c=this,r=c.axis,h=r.horiz,e=c.options,l=e.label,n=c.label,d=e.to,g=e.from,b=e.value,x=k(g)&&k(d),u=k(b),p=c.svgElem,E=!p,B=[],m=e.color,z=v(e.zIndex,0),D=e.events,
B={"class":"highcharts-plot-"+(x?"band ":"line ")+(e.className||"")},A={},f=r.chart.renderer,q=x?"bands":"lines";r.isLog&&(g=r.log2lin(g),d=r.log2lin(d),b=r.log2lin(b));r.chart.styledMode||(u?(B.stroke=m,B["stroke-width"]=e.width,e.dashStyle&&(B.dashstyle=e.dashStyle)):x&&(m&&(B.fill=m),e.borderWidth&&(B.stroke=e.borderColor,B["stroke-width"]=e.borderWidth)));A.zIndex=z;q+="-"+z;(m=r.plotLinesAndBandsGroups[q])||(r.plotLinesAndBandsGroups[q]=m=f.g("plot-"+q).attr(A).add());E&&(c.svgElem=p=f.path().attr(B).add(m));
if(u)B=r.getPlotLinePath(b,p.strokeWidth());else if(x)B=r.getPlotBandPath(g,d,e);else return;E&&B&&B.length?(p.attr({d:B}),D&&a.objectEach(D,function(a,b){p.on(b,function(a){D[b].apply(c,[a])})})):p&&(B?(p.show(),p.animate({d:B})):(p.hide(),n&&(c.label=n=n.destroy())));l&&k(l.text)&&B&&B.length&&0<r.width&&0<r.height&&!B.isFlat?(l=t({align:h&&x&&"center",x:h?!x&&4:10,verticalAlign:!h&&x&&"middle",y:h?x?16:10:x?6:-4,rotation:h&&!x&&90},l),this.renderLabel(l,B,x,z)):n&&n.hide();return c},renderLabel:function(a,
c,h,e){var l=this.label,n=this.axis.chart.renderer;l||(l={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+(h?"band":"line")+"-label "+(a.className||"")},l.zIndex=e,this.label=l=n.text(a.text,0,0,a.useHTML).attr(l).add(),this.axis.chart.styledMode||l.css(a.style));e=c.xBounds||[c[1],c[4],h?c[6]:c[1]];c=c.yBounds||[c[2],c[5],h?c[7]:c[2]];h=G(e);n=G(c);l.align(a,!1,{x:h,y:n,width:F(e)-h,height:F(c)-n});l.show()},destroy:function(){p(this.axis.plotLinesAndBands,this);delete this.axis;
c(this)}};a.extend(y.prototype,{getPlotBandPath:function(a,c){var h=this.getPlotLinePath(c,null,null,!0),e=this.getPlotLinePath(a,null,null,!0),l=[],n=this.horiz,d=1,g;a=a<this.min&&c<this.min||a>this.max&&c>this.max;if(e&&h)for(a&&(g=e.toString()===h.toString(),d=0),a=0;a<e.length;a+=6)n&&h[a+1]===e[a+1]?(h[a+1]+=d,h[a+4]+=d):n||h[a+2]!==e[a+2]||(h[a+2]+=d,h[a+5]+=d),l.push("M",e[a+1],e[a+2],"L",e[a+4],e[a+5],h[a+4],h[a+5],h[a+1],h[a+2],"z"),l.isFlat=g;return l},addPlotBand:function(a){return this.addPlotBandOrLine(a,
"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(c,r){var h=(new a.PlotLineOrBand(this,c)).render(),e=this.userOptions;h&&(r&&(e[r]=e[r]||[],e[r].push(c)),this.plotLinesAndBands.push(h));return h},removePlotBandOrLine:function(a){for(var c=this.plotLinesAndBands,h=this.options,e=this.userOptions,l=c.length;l--;)c[l].id===a&&c[l].destroy();[h.plotLines||[],e.plotLines||[],h.plotBands||[],e.plotBands||[]].forEach(function(e){for(l=e.length;l--;)e[l].id===
a&&p(e,e[l])})},removePlotBand:function(a){this.removePlotBandOrLine(a)},removePlotLine:function(a){this.removePlotBandOrLine(a)}})})(I,X);(function(a){var y=a.doc,F=a.extend,G=a.format,k=a.isNumber,c=a.merge,p=a.pick,t=a.splat,v=a.syncTimeout,w=a.timeUnits;a.Tooltip=function(){this.init.apply(this,arguments)};a.Tooltip.prototype={init:function(a,h){this.chart=a;this.options=h;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=h.split&&!a.inverted;this.shared=h.shared||this.split;this.outside=
h.outside&&!this.split},cleanSplit:function(a){this.chart.series.forEach(function(h){var e=h&&h.tt;e&&(!e.isActive||a?h.tt=e.destroy():e.isActive=!1)})},applyFilter:function(){var a=this.chart;a.renderer.definition({tagName:"filter",id:"drop-shadow-"+a.index,opacity:.5,children:[{tagName:"feGaussianBlur","in":"SourceAlpha",stdDeviation:1},{tagName:"feOffset",dx:1,dy:1},{tagName:"feComponentTransfer",children:[{tagName:"feFuncA",type:"linear",slope:.3}]},{tagName:"feMerge",children:[{tagName:"feMergeNode"},
{tagName:"feMergeNode","in":"SourceGraphic"}]}]});a.renderer.definition({tagName:"style",textContent:".highcharts-tooltip-"+a.index+"{filter:url(#drop-shadow-"+a.index+")}"})},getLabel:function(){var c=this,h=this.chart.renderer,e=this.chart.styledMode,l=this.options,n,d;this.label||(this.outside&&(this.container=n=a.doc.createElement("div"),n.className="highcharts-tooltip-container",a.css(n,{position:"absolute",top:"1px",pointerEvents:l.style&&l.style.pointerEvents}),a.doc.body.appendChild(n),this.renderer=
h=new a.Renderer(n,0,0)),this.split?this.label=h.g("tooltip"):(this.label=h.label("",0,0,l.shape||"callout",null,null,l.useHTML,null,"tooltip").attr({padding:l.padding,r:l.borderRadius}),e||this.label.attr({fill:l.backgroundColor,"stroke-width":l.borderWidth}).css(l.style).shadow(l.shadow)),e&&(this.applyFilter(),this.label.addClass("highcharts-tooltip-"+this.chart.index)),this.outside&&(d={x:this.label.xSetter,y:this.label.ySetter},this.label.xSetter=function(a,b){d[b].call(this.label,c.distance);
n.style.left=a+"px"},this.label.ySetter=function(a,b){d[b].call(this.label,c.distance);n.style.top=a+"px"}),this.label.attr({zIndex:8}).add());return this.label},update:function(a){this.destroy();c(!0,this.chart.options.tooltip.userOptions,a);this.init(this.chart,c(!0,this.options,a))},destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());this.renderer&&(this.renderer=this.renderer.destroy(),a.discardElement(this.container));
a.clearTimeout(this.hideTimer);a.clearTimeout(this.tooltipTimeout)},move:function(c,h,e,l){var n=this,d=n.now,g=!1!==n.options.animation&&!n.isHidden&&(1<Math.abs(c-d.x)||1<Math.abs(h-d.y)),b=n.followPointer||1<n.len;F(d,{x:g?(2*d.x+c)/3:c,y:g?(d.y+h)/2:h,anchorX:b?void 0:g?(2*d.anchorX+e)/3:e,anchorY:b?void 0:g?(d.anchorY+l)/2:l});n.getLabel().attr(d);g&&(a.clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){n&&n.move(c,h,e,l)},32))},hide:function(c){var h=this;a.clearTimeout(this.hideTimer);
c=p(c,this.options.hideDelay,500);this.isHidden||(this.hideTimer=v(function(){h.getLabel()[c?"fadeOut":"hide"]();h.isHidden=!0},c))},getAnchor:function(a,c){var e=this.chart,h=e.pointer,n=e.inverted,d=e.plotTop,g=e.plotLeft,b=0,x=0,u,k;a=t(a);this.followPointer&&c?(void 0===c.chartX&&(c=h.normalize(c)),a=[c.chartX-e.plotLeft,c.chartY-d]):a[0].tooltipPos?a=a[0].tooltipPos:(a.forEach(function(a){u=a.series.yAxis;k=a.series.xAxis;b+=a.plotX+(!n&&k?k.left-g:0);x+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+
(!n&&u?u.top-d:0)}),b/=a.length,x/=a.length,a=[n?e.plotWidth-x:b,this.shared&&!n&&1<a.length&&c?c.chartY-d:n?e.plotHeight-b:x]);return a.map(Math.round)},getPosition:function(a,c,e){var h=this.chart,n=this.distance,d={},g=h.inverted&&e.h||0,b,x=this.outside,u=x?y.documentElement.clientWidth-2*n:h.chartWidth,k=x?Math.max(y.body.scrollHeight,y.documentElement.scrollHeight,y.body.offsetHeight,y.documentElement.offsetHeight,y.documentElement.clientHeight):h.chartHeight,r=h.pointer.chartPosition,B=["y",
k,c,(x?r.top-n:0)+e.plotY+h.plotTop,x?0:h.plotTop,x?k:h.plotTop+h.plotHeight],m=["x",u,a,(x?r.left-n:0)+e.plotX+h.plotLeft,x?0:h.plotLeft,x?u:h.plotLeft+h.plotWidth],z=!this.followPointer&&p(e.ttBelow,!h.inverted===!!e.negative),D=function(a,b,f,e,m,c){var h=f<e-n,q=e+n+f<b,u=e-n-f;e+=n;if(z&&q)d[a]=e;else if(!z&&h)d[a]=u;else if(h)d[a]=Math.min(c-f,0>u-g?u:u-g);else if(q)d[a]=Math.max(m,e+g+f>b?e:e+g);else return!1},A=function(a,b,f,g){var e;g<n||g>b-n?e=!1:d[a]=g<f/2?1:g>b-f/2?b-f-2:g-f/2;return e},
f=function(a){var f=B;B=m;m=f;b=a},q=function(){!1!==D.apply(0,B)?!1!==A.apply(0,m)||b||(f(!0),q()):b?d.x=d.y=0:(f(!0),q())};(h.inverted||1<this.len)&&f();q();return d},defaultFormatter:function(a){var c=this.points||t(this),e;e=[a.tooltipFooterHeaderFormatter(c[0])];e=e.concat(a.bodyFormatter(c));e.push(a.tooltipFooterHeaderFormatter(c[0],!0));return e},refresh:function(c,h){var e,l=this.options,n,d=c,g,b={},x=[];e=l.formatter||this.defaultFormatter;var b=this.shared,u,k=this.chart.styledMode;l.enabled&&
(a.clearTimeout(this.hideTimer),this.followPointer=t(d)[0].series.tooltipOptions.followPointer,g=this.getAnchor(d,h),h=g[0],n=g[1],!b||d.series&&d.series.noSharedTooltip?b=d.getLabelConfig():(d.forEach(function(a){a.setState("hover");x.push(a.getLabelConfig())}),b={x:d[0].category,y:d[0].y},b.points=x,d=d[0]),this.len=x.length,b=e.call(b,this),u=d.series,this.distance=p(u.tooltipOptions.distance,16),!1===b?this.hide():(e=this.getLabel(),this.isHidden&&e.attr({opacity:1}).show(),this.split?this.renderSplit(b,
t(c)):(l.style.width&&!k||e.css({width:this.chart.spacingBox.width}),e.attr({text:b&&b.join?b.join(""):b}),e.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+p(d.colorIndex,u.colorIndex)),k||e.attr({stroke:l.borderColor||d.color||u.color||"#666666"}),this.updatePosition({plotX:h,plotY:n,negative:d.negative,ttBelow:d.ttBelow,h:g[2]||0})),this.isHidden=!1))},renderSplit:function(c,h){var e=this,l=[],n=this.chart,d=n.renderer,g=!0,b=this.options,x=0,u,k=this.getLabel(),r=n.plotTop;
a.isString(c)&&(c=[!1,c]);c.slice(0,h.length+1).forEach(function(a,m){if(!1!==a&&""!==a){m=h[m-1]||{isHeader:!0,plotX:h[0].plotX,plotY:n.plotHeight};var c=m.series||e,D=c.tt,A=m.series||{},f="highcharts-color-"+p(m.colorIndex,A.colorIndex,"none");D||(D={padding:b.padding,r:b.borderRadius},n.styledMode||(D.fill=b.backgroundColor,D.stroke=b.borderColor||m.color||A.color||"#333333",D["stroke-width"]=b.borderWidth),c.tt=D=d.label(null,null,null,(m.isHeader?b.headerShape:b.shape)||"callout",null,null,
b.useHTML).addClass("highcharts-tooltip-box "+f).attr(D).add(k));D.isActive=!0;D.attr({text:a});n.styledMode||D.css(b.style).shadow(b.shadow);a=D.getBBox();A=a.width+D.strokeWidth();m.isHeader?(x=a.height,n.xAxis[0].opposite&&(u=!0,r-=x),A=Math.max(0,Math.min(m.plotX+n.plotLeft-A/2,n.chartWidth+(n.scrollablePixels?n.scrollablePixels-n.marginRight:0)-A))):A=m.plotX+n.plotLeft-p(b.distance,16)-A;0>A&&(g=!1);a=(m.series&&m.series.yAxis&&m.series.yAxis.pos)+(m.plotY||0);a-=r;m.isHeader&&(a=u?-x:n.plotHeight+
x);l.push({target:a,rank:m.isHeader?1:0,size:c.tt.getBBox().height+1,point:m,x:A,tt:D})}});this.cleanSplit();b.positioner&&l.forEach(function(a){var g=b.positioner.call(e,a.tt.getBBox().width,a.size,a.point);a.x=g.x;a.align=0;a.target=g.y;a.rank=p(g.rank,a.rank)});a.distribute(l,n.plotHeight+x);l.forEach(function(a){var d=a.point,c=d.series;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:g||d.isHeader||b.positioner?a.x:d.plotX+n.plotLeft+e.distance,y:a.pos+r,anchorX:d.isHeader?d.plotX+n.plotLeft:
d.plotX+c.xAxis.pos,anchorY:d.isHeader?n.plotTop+n.plotHeight/2:d.plotY+c.yAxis.pos})})},updatePosition:function(a){var c=this.chart,e=this.getLabel(),l=(this.options.positioner||this.getPosition).call(this,e.width,e.height,a),n=a.plotX+c.plotLeft;a=a.plotY+c.plotTop;var d;this.outside&&(d=(this.options.borderWidth||0)+2*this.distance,this.renderer.setSize(e.width+d,e.height+d,!1),n+=c.pointer.chartPosition.left-l.x,a+=c.pointer.chartPosition.top-l.y);this.move(Math.round(l.x),Math.round(l.y||0),
n,a)},getDateFormat:function(a,c,e,l){var h=this.chart.time,d=h.dateFormat("%m-%d %H:%M:%S.%L",c),g,b,x={millisecond:15,second:12,minute:9,hour:6,day:3},u="millisecond";for(b in w){if(a===w.week&&+h.dateFormat("%w",c)===e&&"00:00:00.000"===d.substr(6)){b="week";break}if(w[b]>a){b=u;break}if(x[b]&&d.substr(x[b])!=="01-01 00:00:00.000".substr(x[b]))break;"week"!==b&&(u=b)}b&&(g=h.resolveDTLFormat(l[b]).main);return g},getXDateFormat:function(a,c,e){c=c.dateTimeLabelFormats;var h=e&&e.closestPointRange;
return(h?this.getDateFormat(h,a.x,e.options.startOfWeek,c):c.day)||c.year},tooltipFooterHeaderFormatter:function(c,h){var e=h?"footer":"header",l=c.series,n=l.tooltipOptions,d=n.xDateFormat,g=l.xAxis,b=g&&"datetime"===g.options.type&&k(c.key),x=n[e+"Format"];h={isFooter:h,labelConfig:c};a.fireEvent(this,"headerFormatter",h,function(a){b&&!d&&(d=this.getXDateFormat(c,n,g));b&&d&&(c.point&&c.point.tooltipDateKeys||["key"]).forEach(function(a){x=x.replace("{point."+a+"}","{point."+a+":"+d+"}")});l.chart.styledMode&&
(x=this.styledModeFormat(x));a.text=G(x,{point:c,series:l},this.chart.time)});return h.text},bodyFormatter:function(a){return a.map(function(a){var e=a.series.tooltipOptions;return(e[(a.point.formatPrefix||"point")+"Formatter"]||a.point.tooltipFormatter).call(a.point,e[(a.point.formatPrefix||"point")+"Format"]||"")})},styledModeFormat:function(a){return a.replace('style\x3d"font-size: 10px"','class\x3d"highcharts-header"').replace(/style="color:{(point|series)\.color}"/g,'class\x3d"highcharts-color-{$1.colorIndex}"')}}})(I);
(function(a){var y=a.addEvent,F=a.attr,G=a.charts,k=a.color,c=a.css,p=a.defined,t=a.extend,v=a.find,w=a.fireEvent,r=a.isNumber,h=a.isObject,e=a.offset,l=a.pick,n=a.splat,d=a.Tooltip;a.Pointer=function(a,b){this.init(a,b)};a.Pointer.prototype={init:function(a,b){this.options=b;this.chart=a;this.runChartClick=b.chart.events&&!!b.chart.events.click;this.pinchDown=[];this.lastValidTouch={};d&&(a.tooltip=new d(a,b.tooltip),this.followTouchMove=l(b.tooltip.followTouchMove,!0));this.setDOMEvents()},zoomOption:function(a){var b=
this.chart,g=b.options.chart,d=g.zoomType||"",b=b.inverted;/touch/.test(a.type)&&(d=l(g.pinchType,d));this.zoomX=a=/x/.test(d);this.zoomY=d=/y/.test(d);this.zoomHor=a&&!b||d&&b;this.zoomVert=d&&!b||a&&b;this.hasZoom=a||d},normalize:function(a,b){var g;g=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;b||(this.chartPosition=b=e(this.chart.container));return t(a,{chartX:Math.round(g.pageX-b.left),chartY:Math.round(g.pageY-b.top)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};
this.chart.axes.forEach(function(g){b[g.isXAxis?"xAxis":"yAxis"].push({axis:g,value:g.toValue(a[g.horiz?"chartX":"chartY"])})});return b},findNearestKDPoint:function(a,b,d){var g;a.forEach(function(a){var e=!(a.noSharedTooltip&&b)&&0>a.options.findNearestPointBy.indexOf("y");a=a.searchPoint(d,e);if((e=h(a,!0))&&!(e=!h(g,!0)))var e=g.distX-a.distX,c=g.dist-a.dist,m=(a.series.group&&a.series.group.zIndex)-(g.series.group&&g.series.group.zIndex),e=0<(0!==e&&b?e:0!==c?c:0!==m?m:g.series.index>a.series.index?
-1:1);e&&(g=a)});return g},getPointFromEvent:function(a){a=a.target;for(var b;a&&!b;)b=a.point,a=a.parentNode;return b},getChartCoordinatesFromPoint:function(a,b){var g=a.series,d=g.xAxis,g=g.yAxis,e=l(a.clientX,a.plotX),c=a.shapeArgs;if(d&&g)return b?{chartX:d.len+d.pos-e,chartY:g.len+g.pos-a.plotY}:{chartX:e+d.pos,chartY:a.plotY+g.pos};if(c&&c.x&&c.y)return{chartX:c.x,chartY:c.y}},getHoverData:function(a,b,d,e,c,n){var g,m=[];e=!(!e||!a);var z=b&&!b.stickyTracking?[b]:d.filter(function(a){return a.visible&&
!(!c&&a.directTouch)&&l(a.options.enableMouseTracking,!0)&&a.stickyTracking});b=(g=e?a:this.findNearestKDPoint(z,c,n))&&g.series;g&&(c&&!b.noSharedTooltip?(z=d.filter(function(a){return a.visible&&!(!c&&a.directTouch)&&l(a.options.enableMouseTracking,!0)&&!a.noSharedTooltip}),z.forEach(function(a){var b=v(a.points,function(a){return a.x===g.x&&!a.isNull});h(b)&&(a.chart.isBoosting&&(b=a.getPoint(b)),m.push(b))})):m.push(g));return{hoverPoint:g,hoverSeries:b,hoverPoints:m}},runPointActions:function(g,
b){var d=this.chart,e=d.tooltip&&d.tooltip.options.enabled?d.tooltip:void 0,c=e?e.shared:!1,h=b||d.hoverPoint,n=h&&h.series||d.hoverSeries,n=this.getHoverData(h,n,d.series,"touchmove"!==g.type&&(!!b||n&&n.directTouch&&this.isDirectTouch),c,g),m,h=n.hoverPoint;m=n.hoverPoints;b=(n=n.hoverSeries)&&n.tooltipOptions.followPointer;c=c&&n&&!n.noSharedTooltip;if(h&&(h!==d.hoverPoint||e&&e.isHidden)){(d.hoverPoints||[]).forEach(function(a){-1===m.indexOf(a)&&a.setState()});(m||[]).forEach(function(a){a.setState("hover")});
if(d.hoverSeries!==n)n.onMouseOver();d.hoverPoint&&d.hoverPoint.firePointEvent("mouseOut");if(!h.series)return;h.firePointEvent("mouseOver");d.hoverPoints=m;d.hoverPoint=h;e&&e.refresh(c?m:h,g)}else b&&e&&!e.isHidden&&(h=e.getAnchor([{}],g),e.updatePosition({plotX:h[0],plotY:h[1]}));this.unDocMouseMove||(this.unDocMouseMove=y(d.container.ownerDocument,"mousemove",function(b){var g=G[a.hoverChartIndex];if(g)g.pointer.onDocumentMouseMove(b)}));d.axes.forEach(function(b){var d=l(b.crosshair.snap,!0),
e=d?a.find(m,function(a){return a.series[b.coll]===b}):void 0;e||!d?b.drawCrosshair(g,e):b.hideCrosshair()})},reset:function(a,b){var g=this.chart,d=g.hoverSeries,e=g.hoverPoint,c=g.hoverPoints,h=g.tooltip,m=h&&h.shared?c:e;a&&m&&n(m).forEach(function(b){b.series.isCartesian&&void 0===b.plotX&&(a=!1)});if(a)h&&m&&n(m).length&&(h.refresh(m),h.shared&&c?c.forEach(function(a){a.setState(a.state,!0);a.series.isCartesian&&(a.series.xAxis.crosshair&&a.series.xAxis.drawCrosshair(null,a),a.series.yAxis.crosshair&&
a.series.yAxis.drawCrosshair(null,a))}):e&&(e.setState(e.state,!0),g.axes.forEach(function(a){a.crosshair&&a.drawCrosshair(null,e)})));else{if(e)e.onMouseOut();c&&c.forEach(function(a){a.setState()});if(d)d.onMouseOut();h&&h.hide(b);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());g.axes.forEach(function(a){a.hideCrosshair()});this.hoverX=g.hoverPoints=g.hoverPoint=null}},scaleGroups:function(a,b){var g=this.chart,d;g.series.forEach(function(e){d=a||e.getPlotBox();e.xAxis&&e.xAxis.zoomEnabled&&
e.group&&(e.group.attr(d),e.markerGroup&&(e.markerGroup.attr(d),e.markerGroup.clip(b?g.clipRect:null)),e.dataLabelsGroup&&e.dataLabelsGroup.attr(d))});g.clipRect.attr(b||g.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,g=b.options.chart,d=a.chartX,e=a.chartY,c=this.zoomHor,h=this.zoomVert,m=b.plotLeft,n=b.plotTop,l=b.plotWidth,A=b.plotHeight,f,q=this.selectionMarker,
r=this.mouseDownX,p=this.mouseDownY,t=g.panKey&&a[g.panKey+"Key"];q&&q.touch||(d<m?d=m:d>m+l&&(d=m+l),e<n?e=n:e>n+A&&(e=n+A),this.hasDragged=Math.sqrt(Math.pow(r-d,2)+Math.pow(p-e,2)),10<this.hasDragged&&(f=b.isInsidePlot(r-m,p-n),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&f&&!t&&!q&&(this.selectionMarker=q=b.renderer.rect(m,n,c?1:l,h?1:A,0).attr({"class":"highcharts-selection-marker",zIndex:7}).add(),b.styledMode||q.attr({fill:g.selectionMarkerFill||k("#335cad").setOpacity(.25).get()})),q&&
c&&(d-=r,q.attr({width:Math.abs(d),x:(0<d?0:d)+r})),q&&h&&(d=e-p,q.attr({height:Math.abs(d),y:(0<d?0:d)+p})),f&&!q&&g.panning&&b.pan(a,g.panning)))},drop:function(a){var b=this,d=this.chart,g=this.hasPinched;if(this.selectionMarker){var e={originalEvent:a,xAxis:[],yAxis:[]},h=this.selectionMarker,n=h.attr?h.attr("x"):h.x,m=h.attr?h.attr("y"):h.y,l=h.attr?h.attr("width"):h.width,D=h.attr?h.attr("height"):h.height,k;if(this.hasDragged||g)d.axes.forEach(function(f){if(f.zoomEnabled&&p(f.min)&&(g||b[{xAxis:"zoomX",
yAxis:"zoomY"}[f.coll]])){var d=f.horiz,c="touchend"===a.type?f.minPixelPadding:0,h=f.toValue((d?n:m)+c),d=f.toValue((d?n+l:m+D)-c);e[f.coll].push({axis:f,min:Math.min(h,d),max:Math.max(h,d)});k=!0}}),k&&w(d,"selection",e,function(a){d.zoom(t(a,g?{animation:!1}:null))});r(d.index)&&(this.selectionMarker=this.selectionMarker.destroy());g&&this.scaleGroups()}d&&r(d.index)&&(c(d.container,{cursor:d._cursor}),d.cancelClick=10<this.hasDragged,d.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=
[])},onContainerMouseDown:function(a){a=this.normalize(a);2!==a.button&&(this.zoomOption(a),a.preventDefault&&a.preventDefault(),this.dragStart(a))},onDocumentMouseUp:function(d){G[a.hoverChartIndex]&&G[a.hoverChartIndex].pointer.drop(d)},onDocumentMouseMove:function(a){var b=this.chart,d=this.chartPosition;a=this.normalize(a,d);!d||this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(d){var b=G[a.hoverChartIndex];
b&&(d.relatedTarget||d.toElement)&&(b.pointer.reset(),b.pointer.chartPosition=null)},onContainerMouseMove:function(d){var b=this.chart;p(a.hoverChartIndex)&&G[a.hoverChartIndex]&&G[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=b.index);d=this.normalize(d);d.preventDefault||(d.returnValue=!1);"mousedown"===b.mouseIsDown&&this.drag(d);!this.inClass(d.target,"highcharts-tracker")&&!b.isInsidePlot(d.chartX-b.plotLeft,d.chartY-b.plotTop)||b.openMenu||this.runPointActions(d)},inClass:function(a,b){for(var d;a;){if(d=
F(a,"class")){if(-1!==d.indexOf(b))return!0;if(-1!==d.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;this.isDirectTouch=!1;if(!(!b||!a||b.stickyTracking||this.inClass(a,"highcharts-tooltip")||this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,d=b.hoverPoint,g=b.plotLeft,e=b.plotTop;a=this.normalize(a);b.cancelClick||
(d&&this.inClass(a.target,"highcharts-tracker")?(w(d.series,"click",t(a,{point:d})),b.hoverPoint&&d.firePointEvent("click",a)):(t(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-g,a.chartY-e)&&w(b,"click",a)))},setDOMEvents:function(){var d=this,b=d.chart.container,e=b.ownerDocument;b.onmousedown=function(a){d.onContainerMouseDown(a)};b.onmousemove=function(a){d.onContainerMouseMove(a)};b.onclick=function(a){d.onContainerClick(a)};this.unbindContainerMouseLeave=y(b,"mouseleave",d.onContainerMouseLeave);
a.unbindDocumentMouseUp||(a.unbindDocumentMouseUp=y(e,"mouseup",d.onDocumentMouseUp));a.hasTouch&&(b.ontouchstart=function(a){d.onContainerTouchStart(a)},b.ontouchmove=function(a){d.onContainerTouchMove(a)},a.unbindDocumentTouchEnd||(a.unbindDocumentTouchEnd=y(e,"touchend",d.onDocumentTouchEnd)))},destroy:function(){var d=this;d.unDocMouseMove&&d.unDocMouseMove();this.unbindContainerMouseLeave();a.chartCount||(a.unbindDocumentMouseUp&&(a.unbindDocumentMouseUp=a.unbindDocumentMouseUp()),a.unbindDocumentTouchEnd&&
(a.unbindDocumentTouchEnd=a.unbindDocumentTouchEnd()));clearInterval(d.tooltipTimeout);a.objectEach(d,function(a,g){d[g]=null})}}})(I);(function(a){var y=a.charts,F=a.extend,G=a.noop,k=a.pick;F(a.Pointer.prototype,{pinchTranslate:function(a,k,t,v,w,r){this.zoomHor&&this.pinchTranslateDirection(!0,a,k,t,v,w,r);this.zoomVert&&this.pinchTranslateDirection(!1,a,k,t,v,w,r)},pinchTranslateDirection:function(a,k,t,v,w,r,h,e){var c=this.chart,n=a?"x":"y",d=a?"X":"Y",g="chart"+d,b=a?"width":"height",x=c["plot"+
(a?"Left":"Top")],u,p,E=e||1,B=c.inverted,m=c.bounds[a?"h":"v"],z=1===k.length,D=k[0][g],A=t[0][g],f=!z&&k[1][g],q=!z&&t[1][g],L;t=function(){!z&&20<Math.abs(D-f)&&(E=e||Math.abs(A-q)/Math.abs(D-f));p=(x-A)/E+D;u=c["plot"+(a?"Width":"Height")]/E};t();k=p;k<m.min?(k=m.min,L=!0):k+u>m.max&&(k=m.max-u,L=!0);L?(A-=.8*(A-h[n][0]),z||(q-=.8*(q-h[n][1])),t()):h[n]=[A,q];B||(r[n]=p-x,r[b]=u);r=B?1/E:E;w[b]=u;w[n]=k;v[B?a?"scaleY":"scaleX":"scale"+d]=E;v["translate"+d]=r*x+(A-r*D)},pinch:function(a){var c=
this,t=c.chart,v=c.pinchDown,w=a.touches,r=w.length,h=c.lastValidTouch,e=c.hasZoom,l=c.selectionMarker,n={},d=1===r&&(c.inClass(a.target,"highcharts-tracker")&&t.runTrackerClick||c.runChartClick),g={};1<r&&(c.initiated=!0);e&&c.initiated&&!d&&a.preventDefault();[].map.call(w,function(a){return c.normalize(a)});"touchstart"===a.type?([].forEach.call(w,function(a,d){v[d]={chartX:a.chartX,chartY:a.chartY}}),h.x=[v[0].chartX,v[1]&&v[1].chartX],h.y=[v[0].chartY,v[1]&&v[1].chartY],t.axes.forEach(function(a){if(a.zoomEnabled){var b=
t.bounds[a.horiz?"h":"v"],d=a.minPixelPadding,g=a.toPixels(k(a.options.min,a.dataMin)),e=a.toPixels(k(a.options.max,a.dataMax)),c=Math.max(g,e);b.min=Math.min(a.pos,Math.min(g,e)-d);b.max=Math.max(a.pos+a.len,c+d)}}),c.res=!0):c.followTouchMove&&1===r?this.runPointActions(c.normalize(a)):v.length&&(l||(c.selectionMarker=l=F({destroy:G,touch:!0},t.plotBox)),c.pinchTranslate(v,w,n,l,g,h),c.hasPinched=e,c.scaleGroups(n,g),c.res&&(c.res=!1,this.reset(!1,0)))},touch:function(c,p){var t=this.chart,v,w;
if(t.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=t.index;1===c.touches.length?(c=this.normalize(c),(w=t.isInsidePlot(c.chartX-t.plotLeft,c.chartY-t.plotTop))&&!t.openMenu?(p&&this.runPointActions(c),"touchmove"===c.type&&(p=this.pinchDown,v=p[0]?4<=Math.sqrt(Math.pow(p[0].chartX-c.chartX,2)+Math.pow(p[0].chartY-c.chartY,2)):!1),k(v,!0)&&this.pinch(c)):p&&this.reset()):2===c.touches.length&&this.pinch(c)},onContainerTouchStart:function(a){this.zoomOption(a);
this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(c){y[a.hoverChartIndex]&&y[a.hoverChartIndex].pointer.drop(c)}})})(I);(function(a){var y=a.addEvent,F=a.charts,G=a.css,k=a.doc,c=a.extend,p=a.noop,t=a.Pointer,v=a.removeEvent,w=a.win,r=a.wrap;if(!a.hasTouch&&(w.PointerEvent||w.MSPointerEvent)){var h={},e=!!w.PointerEvent,l=function(){var d=[];d.item=function(a){return this[a]};a.objectEach(h,function(a){d.push({pageX:a.pageX,pageY:a.pageY,target:a.target})});
return d},n=function(d,g,b,e){"touch"!==d.pointerType&&d.pointerType!==d.MSPOINTER_TYPE_TOUCH||!F[a.hoverChartIndex]||(e(d),e=F[a.hoverChartIndex].pointer,e[g]({type:b,target:d.currentTarget,preventDefault:p,touches:l()}))};c(t.prototype,{onContainerPointerDown:function(a){n(a,"onContainerTouchStart","touchstart",function(a){h[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){n(a,"onContainerTouchMove","touchmove",function(a){h[a.pointerId]={pageX:a.pageX,
pageY:a.pageY};h[a.pointerId].target||(h[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){n(a,"onDocumentTouchEnd","touchend",function(a){delete h[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,e?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,e?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(k,e?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});r(t.prototype,"init",function(a,g,b){a.call(this,g,b);this.hasZoom&&
G(g.container,{"-ms-touch-action":"none","touch-action":"none"})});r(t.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(y)});r(t.prototype,"destroy",function(a){this.batchMSEvents(v);a.call(this)})}})(I);(function(a){var y=a.addEvent,F=a.css,G=a.discardElement,k=a.defined,c=a.fireEvent,p=a.isFirefox,t=a.marginNames,v=a.merge,w=a.pick,r=a.setAnimation,h=a.stableSort,e=a.win,l=a.wrap;a.Legend=function(a,d){this.init(a,d)};a.Legend.prototype=
{init:function(a,d){this.chart=a;this.setOptions(d);d.enabled&&(this.render(),y(this.chart,"endResize",function(){this.legend.positionCheckboxes()}),this.proximate?this.unchartrender=y(this.chart,"render",function(){this.legend.proximatePositions();this.legend.positionItems()}):this.unchartrender&&this.unchartrender())},setOptions:function(a){var d=w(a.padding,8);this.options=a;this.chart.styledMode||(this.itemStyle=a.itemStyle,this.itemHiddenStyle=v(this.itemStyle,a.itemHiddenStyle));this.itemMarginTop=
a.itemMarginTop||0;this.padding=d;this.initialItemY=d-5;this.symbolWidth=w(a.symbolWidth,16);this.pages=[];this.proximate="proximate"===a.layout&&!this.chart.inverted},update:function(a,d){var g=this.chart;this.setOptions(v(!0,this.options,a));this.destroy();g.isDirtyLegend=g.isDirtyBox=!0;w(d,!0)&&g.redraw();c(this,"afterUpdate")},colorizeItem:function(a,d){a.legendGroup[d?"removeClass":"addClass"]("highcharts-legend-item-hidden");if(!this.chart.styledMode){var g=this.options,b=a.legendItem,e=a.legendLine,
h=a.legendSymbol,n=this.itemHiddenStyle.color,g=d?g.itemStyle.color:n,l=d?a.color||n:n,k=a.options&&a.options.marker,m={fill:l};b&&b.css({fill:g,color:g});e&&e.attr({stroke:l});h&&(k&&h.isMarker&&(m=a.pointAttribs(),d||(m.stroke=m.fill=n)),h.attr(m))}c(this,"afterColorizeItem",{item:a,visible:d})},positionItems:function(){this.allItems.forEach(this.positionItem,this);this.chart.isResizing||this.positionCheckboxes()},positionItem:function(a){var d=this.options,e=d.symbolPadding,d=!d.rtl,b=a._legendItemPos,
c=b[0],b=b[1],h=a.checkbox;if((a=a.legendGroup)&&a.element)a[k(a.translateY)?"animate":"attr"]({translateX:d?c:this.legendWidth-c-2*e-4,translateY:b});h&&(h.x=c,h.y=b)},destroyItem:function(a){var d=a.checkbox;["legendItem","legendLine","legendSymbol","legendGroup"].forEach(function(d){a[d]&&(a[d]=a[d].destroy())});d&&G(a.checkbox)},destroy:function(){function a(a){this[a]&&(this[a]=this[a].destroy())}this.getAllItems().forEach(function(d){["legendItem","legendGroup"].forEach(a,d)});"clipRect up down pager nav box title group".split(" ").forEach(a,
this);this.display=null},positionCheckboxes:function(){var a=this.group&&this.group.alignAttr,d,e=this.clipHeight||this.legendHeight,b=this.titleHeight;a&&(d=a.translateY,this.allItems.forEach(function(g){var c=g.checkbox,h;c&&(h=d+b+c.y+(this.scrollOffset||0)+3,F(c,{left:a.translateX+g.checkboxOffset+c.x-20+"px",top:h+"px",display:this.proximate||h>d-6&&h<d+e-6?"":"none"}))},this))},renderTitle:function(){var a=this.options,d=this.padding,e=a.title,b=0;e.text&&(this.title||(this.title=this.chart.renderer.label(e.text,
d-3,d-4,null,null,null,a.useHTML,null,"legend-title").attr({zIndex:1}),this.chart.styledMode||this.title.css(e.style),this.title.add(this.group)),e.width||this.title.css({width:this.maxLegendWidth+"px"}),a=this.title.getBBox(),b=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:b}));this.titleHeight=b},setText:function(e){var d=this.options;e.legendItem.attr({text:d.labelFormat?a.format(d.labelFormat,e,this.chart.time):d.labelFormatter.call(e)})},renderItem:function(a){var d=this.chart,
e=d.renderer,b=this.options,c=this.symbolWidth,h=b.symbolPadding,n=this.itemStyle,l=this.itemHiddenStyle,k="horizontal"===b.layout?w(b.itemDistance,20):0,m=!b.rtl,z=a.legendItem,D=!a.series,A=!D&&a.series.drawLegendSymbol?a.series:a,f=A.options,f=this.createCheckboxForItem&&f&&f.showCheckbox,k=c+h+k+(f?20:0),q=b.useHTML,r=a.options.className;z||(a.legendGroup=e.g("legend-item").addClass("highcharts-"+A.type+"-series highcharts-color-"+a.colorIndex+(r?" "+r:"")+(D?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),
a.legendItem=z=e.text("",m?c+h:-h,this.baseline||0,q),d.styledMode||z.css(v(a.visible?n:l)),z.attr({align:m?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(this.fontMetrics=e.fontMetrics(d.styledMode?12:n.fontSize,z),this.baseline=this.fontMetrics.f+3+this.itemMarginTop,z.attr("y",this.baseline)),this.symbolHeight=b.symbolHeight||this.fontMetrics.f,A.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,z,q),f&&this.createCheckboxForItem(a));this.colorizeItem(a,a.visible);
!d.styledMode&&n.width||z.css({width:(b.itemWidth||this.widthOption||d.spacingBox.width)-k});this.setText(a);d=z.getBBox();a.itemWidth=a.checkboxOffset=b.itemWidth||a.legendItemWidth||d.width+k;this.maxItemWidth=Math.max(this.maxItemWidth,a.itemWidth);this.totalItemWidth+=a.itemWidth;this.itemHeight=a.itemHeight=Math.round(a.legendItemHeight||d.height||this.symbolHeight)},layoutItem:function(a){var d=this.options,e=this.padding,b="horizontal"===d.layout,c=a.itemHeight,h=d.itemMarginBottom||0,n=this.itemMarginTop,
l=b?w(d.itemDistance,20):0,k=this.maxLegendWidth,d=d.alignColumns&&this.totalItemWidth>k?this.maxItemWidth:a.itemWidth;b&&this.itemX-e+d>k&&(this.itemX=e,this.itemY+=n+this.lastLineHeight+h,this.lastLineHeight=0);this.lastItemY=n+this.itemY+h;this.lastLineHeight=Math.max(c,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];b?this.itemX+=d:(this.itemY+=n+c+h,this.lastLineHeight=c);this.offsetWidth=this.widthOption||Math.max((b?this.itemX-e-(a.checkbox?0:l):d)+e,this.offsetWidth)},getAllItems:function(){var a=
[];this.chart.series.forEach(function(d){var e=d&&d.options;d&&w(e.showInLegend,k(e.linkedTo)?!1:void 0,!0)&&(a=a.concat(d.legendItems||("point"===e.legendType?d.data:d)))});c(this,"afterGetAllItems",{allItems:a});return a},getAlignment:function(){var a=this.options;return this.proximate?a.align.charAt(0)+"tv":a.floating?"":a.align.charAt(0)+a.verticalAlign.charAt(0)+a.layout.charAt(0)},adjustMargins:function(a,d){var e=this.chart,b=this.options,c=this.getAlignment(),h=void 0!==e.options.title.margin?
e.titleOffset+e.options.title.margin:0;c&&[/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/].forEach(function(g,n){g.test(c)&&!k(a[n])&&(e[t[n]]=Math.max(e[t[n]],e.legend[(n+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][n]*b[n%2?"x":"y"]+w(b.margin,12)+d[n]+(0===n&&(0===e.titleOffset?0:h))))})},proximatePositions:function(){var e=this.chart,d=[],g="left"===this.options.align;this.allItems.forEach(function(b){var c,h;c=g;b.xAxis&&b.points&&(b.xAxis.options.reversed&&(c=!c),c=a.find(c?b.points:
b.points.slice(0).reverse(),function(b){return a.isNumber(b.plotY)}),h=b.legendGroup.getBBox().height,d.push({target:b.visible?(c?c.plotY:b.xAxis.height)-.3*h:e.plotHeight,size:h,item:b}))},this);a.distribute(d,e.plotHeight);d.forEach(function(a){a.item._legendItemPos[1]=e.plotTop-e.spacing[0]+a.pos})},render:function(){var e=this.chart,d=e.renderer,g=this.group,b,l,k,r=this.box,p=this.options,B=this.padding;this.itemX=B;this.itemY=this.initialItemY;this.lastItemY=this.offsetWidth=0;this.widthOption=
a.relativeLength(p.width,e.spacingBox.width-B);b=e.spacingBox.width-2*B-p.x;-1<["rm","lm"].indexOf(this.getAlignment().substring(0,2))&&(b/=2);this.maxLegendWidth=this.widthOption||b;g||(this.group=g=d.g("legend").attr({zIndex:7}).add(),this.contentGroup=d.g().attr({zIndex:1}).add(g),this.scrollGroup=d.g().add(this.contentGroup));this.renderTitle();b=this.getAllItems();h(b,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});p.reversed&&b.reverse();this.allItems=
b;this.display=l=!!b.length;this.itemHeight=this.totalItemWidth=this.maxItemWidth=this.lastLineHeight=0;b.forEach(this.renderItem,this);b.forEach(this.layoutItem,this);b=(this.widthOption||this.offsetWidth)+B;k=this.lastItemY+this.lastLineHeight+this.titleHeight;k=this.handleOverflow(k);k+=B;r||(this.box=r=d.rect().addClass("highcharts-legend-box").attr({r:p.borderRadius}).add(g),r.isNew=!0);e.styledMode||r.attr({stroke:p.borderColor,"stroke-width":p.borderWidth||0,fill:p.backgroundColor||"none"}).shadow(p.shadow);
0<b&&0<k&&(r[r.isNew?"attr":"animate"](r.crisp.call({},{x:0,y:0,width:b,height:k},r.strokeWidth())),r.isNew=!1);r[l?"show":"hide"]();e.styledMode&&"none"===g.getStyle("display")&&(b=k=0);this.legendWidth=b;this.legendHeight=k;l&&(d=e.spacingBox,/(lth|ct|rth)/.test(this.getAlignment())&&(r=d.y+e.titleOffset,d=v(d,{y:0<e.titleOffset?r+=e.options.title.margin:r})),g.align(v(p,{width:b,height:k,verticalAlign:this.proximate?"top":p.verticalAlign}),!0,d));this.proximate||this.positionItems();c(this,"afterRender")},
handleOverflow:function(a){var d=this,e=this.chart,b=e.renderer,c=this.options,h=c.y,n=this.padding,h=e.spacingBox.height+("top"===c.verticalAlign?-h:h)-n,l=c.maxHeight,k,m=this.clipRect,z=c.navigation,D=w(z.animation,!0),r=z.arrowSize||12,f=this.nav,q=this.pages,p,t=this.allItems,v=function(a){"number"===typeof a?m.attr({height:a}):m&&(d.clipRect=m.destroy(),d.contentGroup.clip());d.contentGroup.div&&(d.contentGroup.div.style.clip=a?"rect("+n+"px,9999px,"+(n+a)+"px,0)":"auto")};"horizontal"!==c.layout||
"middle"===c.verticalAlign||c.floating||(h/=2);l&&(h=Math.min(h,l));q.length=0;a>h&&!1!==z.enabled?(this.clipHeight=k=Math.max(h-20-this.titleHeight-n,0),this.currentPage=w(this.currentPage,1),this.fullHeight=a,t.forEach(function(a,b){var f=a._legendItemPos[1],d=Math.round(a.legendItem.getBBox().height),e=q.length;if(!e||f-q[e-1]>k&&(p||f)!==q[e-1])q.push(p||f),e++;a.pageIx=e-1;p&&(t[b-1].pageIx=e-1);b===t.length-1&&f+d-q[e-1]>k&&f!==p&&(q.push(f),a.pageIx=e);f!==p&&(p=f)}),m||(m=d.clipRect=b.clipRect(0,
n,9999,0),d.contentGroup.clip(m)),v(k),f||(this.nav=f=b.g().attr({zIndex:1}).add(this.group),this.up=b.symbol("triangle",0,0,r,r).on("click",function(){d.scroll(-1,D)}).add(f),this.pager=b.text("",15,10).addClass("highcharts-legend-navigation"),e.styledMode||this.pager.css(z.style),this.pager.add(f),this.down=b.symbol("triangle-down",0,0,r,r).on("click",function(){d.scroll(1,D)}).add(f)),d.scroll(0),a=h):f&&(v(),this.nav=f.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},
scroll:function(a,d){var e=this.pages,b=e.length;a=this.currentPage+a;var c=this.clipHeight,h=this.options.navigation,l=this.pager,n=this.padding;a>b&&(a=b);0<a&&(void 0!==d&&r(d,this.chart),this.nav.attr({translateX:n,translateY:c+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),l.attr({text:a+"/"+b}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===b?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),
this.chart.styledMode||(this.up.attr({fill:1===a?h.inactiveColor:h.activeColor}).css({cursor:1===a?"default":"pointer"}),this.down.attr({fill:a===b?h.inactiveColor:h.activeColor}).css({cursor:a===b?"default":"pointer"})),this.scrollOffset=-e[a-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),this.currentPage=a,this.positionCheckboxes())}};a.LegendSymbolMixin={drawRectangle:function(a,d){var e=a.symbolHeight,b=a.options.squareSymbol;d.legendSymbol=this.chart.renderer.rect(b?
(a.symbolWidth-e)/2:0,a.baseline-e+1,b?e:a.symbolWidth,e,w(a.options.symbolRadius,e/2)).addClass("highcharts-point").attr({zIndex:3}).add(d.legendGroup)},drawLineMarker:function(a){var d=this.options,e=d.marker,b=a.symbolWidth,c=a.symbolHeight,h=c/2,l=this.chart.renderer,n=this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var k={};this.chart.styledMode||(k={"stroke-width":d.lineWidth||0},d.dashStyle&&(k.dashstyle=d.dashStyle));this.legendLine=l.path(["M",0,a,"L",b,a]).addClass("highcharts-graph").attr(k).add(n);
e&&!1!==e.enabled&&b&&(d=Math.min(w(e.radius,h),h),0===this.symbol.indexOf("url")&&(e=v(e,{width:c,height:c}),d=0),this.legendSymbol=e=l.symbol(this.symbol,b/2-d,a-d,2*d,2*d,e).addClass("highcharts-point").add(n),e.isMarker=!0)}};(/Trident\/7\.0/.test(e.navigator&&e.navigator.userAgent)||p)&&l(a.Legend.prototype,"positionItem",function(a,d){var e=this,b=function(){d._legendItemPos&&a.call(e,d)};b();e.bubbleLegend||setTimeout(b)})})(I);(function(a){var y=a.addEvent,F=a.animate,G=a.animObject,k=a.attr,
c=a.doc,p=a.Axis,t=a.createElement,v=a.defaultOptions,w=a.discardElement,r=a.charts,h=a.css,e=a.defined,l=a.extend,n=a.find,d=a.fireEvent,g=a.isNumber,b=a.isObject,x=a.isString,u=a.Legend,H=a.marginNames,E=a.merge,B=a.objectEach,m=a.Pointer,z=a.pick,D=a.pInt,A=a.removeEvent,f=a.seriesTypes,q=a.splat,L=a.syncTimeout,K=a.win,T=a.Chart=function(){this.getArgs.apply(this,arguments)};a.chart=function(a,b,f){return new T(a,b,f)};l(T.prototype,{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);
if(x(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(b,f){var e,g,c=b.series,m=b.plotOptions||{};d(this,"init",{args:arguments},function(){b.series=null;e=E(v,b);for(g in e.plotOptions)e.plotOptions[g].tooltip=m[g]&&E(m[g].tooltip)||void 0;e.tooltip.userOptions=b.chart&&b.chart.forExport&&b.tooltip.userOptions||b.tooltip;e.series=b.series=c;this.userOptions=b;var h=e.chart,q=h.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.labelCollectors=[];this.callback=
f;this.isResizing=0;this.options=e;this.axes=[];this.series=[];this.time=b.time&&Object.keys(b.time).length?new a.Time(b.time):a.time;this.styledMode=h.styledMode;this.hasCartesianSeries=h.showAxes;var l=this;l.index=r.length;r.push(l);a.chartCount++;q&&B(q,function(a,b){y(l,b,a)});l.xAxis=[];l.yAxis=[];l.pointCount=l.colorCounter=l.symbolCounter=0;d(l,"afterInit");l.firstRender()})},initSeries:function(b){var d=this.options.chart;(d=f[b.type||d.type||d.defaultSeriesType])||a.error(17,!0,this);d=
new d;d.init(this,b);return d},orderSeries:function(a){var b=this.series;for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].getName())},isInsidePlot:function(a,b,f){var d=f?b:a;a=f?a:b;return 0<=d&&d<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(b){d(this,"beforeRedraw");var f=this.axes,e=this.series,g=this.pointer,c=this.legend,m=this.userOptions.legend,h=this.isDirtyLegend,q,n,z=this.hasCartesianSeries,k=this.isDirtyBox,D,u=this.renderer,r=u.isHidden(),A=[];this.setResponsive&&
this.setResponsive(!1);a.setAnimation(b,this);r&&this.temporaryDisplay();this.layOutTitles();for(b=e.length;b--;)if(D=e[b],D.options.stacking&&(q=!0,D.isDirty)){n=!0;break}if(n)for(b=e.length;b--;)D=e[b],D.options.stacking&&(D.isDirty=!0);e.forEach(function(a){a.isDirty&&("point"===a.options.legendType?(a.updateTotals&&a.updateTotals(),h=!0):m&&(m.labelFormatter||m.labelFormat)&&(h=!0));a.isDirtyData&&d(a,"updatedData")});h&&c&&c.options.enabled&&(c.render(),this.isDirtyLegend=!1);q&&this.getStacks();
z&&f.forEach(function(a){a.updateNames();a.setScale()});this.getMargins();z&&(f.forEach(function(a){a.isDirty&&(k=!0)}),f.forEach(function(a){var b=a.min+","+a.max;a.extKey!==b&&(a.extKey=b,A.push(function(){d(a,"afterSetExtremes",l(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(k||q)&&a.redraw()}));k&&this.drawChartBox();d(this,"predraw");e.forEach(function(a){(k||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});g&&g.reset(!0);u.draw();d(this,"redraw");d(this,"render");r&&this.temporaryDisplay(!0);
A.forEach(function(a){a.call()})},get:function(a){function b(b){return b.id===a||b.options&&b.options.id===a}var f,d=this.series,e;f=n(this.axes,b)||n(this.series,b);for(e=0;!f&&e<d.length;e++)f=n(d[e].points||[],b);return f},getAxes:function(){var a=this,b=this.options,f=b.xAxis=q(b.xAxis||{}),b=b.yAxis=q(b.yAxis||{});d(this,"getAxes");f.forEach(function(a,b){a.index=b;a.isX=!0});b.forEach(function(a,b){a.index=b});f.concat(b).forEach(function(b){new p(a,b)});d(this,"afterGetAxes")},getSelectedPoints:function(){var a=
[];this.series.forEach(function(b){a=a.concat((b[b.hasGroupedData?"points":"data"]||[]).filter(function(a){return a.selected}))});return a},getSelectedSeries:function(){return this.series.filter(function(a){return a.selected})},setTitle:function(a,b,f){var d=this,e=d.options,g=d.styledMode,c;c=e.title=E(!g&&{style:{color:"#333333",fontSize:e.isStock?"16px":"18px"}},e.title,a);e=e.subtitle=E(!g&&{style:{color:"#666666"}},e.subtitle,b);[["title",a,c],["subtitle",b,e]].forEach(function(a,b){var f=a[0],
e=d[f],c=a[1];a=a[2];e&&c&&(d[f]=e=e.destroy());a&&!e&&(d[f]=d.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+f,zIndex:a.zIndex||4}).add(),d[f].update=function(a){d.setTitle(!b&&a,b&&a)},g||d[f].css(a.style))});d.layOutTitles(f)},layOutTitles:function(a){var b=0,f,d=this.renderer,e=this.spacingBox;["title","subtitle"].forEach(function(a){var f=this[a],g=this.options[a];a="title"===a?-3:g.verticalAlign?0:b+2;var c;f&&(this.styledMode||(c=g.style.fontSize),c=d.fontMetrics(c,
f).b,f.css({width:(g.width||e.width+g.widthAdjust)+"px"}).align(l({y:a+c},g),!1,"spacingBox"),g.floating||g.verticalAlign||(b=Math.ceil(b+f.getBBox(g.useHTML).height)))},this);f=this.titleOffset!==b;this.titleOffset=b;!this.isDirtyBox&&f&&(this.isDirtyBox=this.isDirtyLegend=f,this.hasRendered&&z(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var b=this.options.chart,f=b.width,b=b.height,d=this.renderTo;e(f)||(this.containerWidth=a.getStyle(d,"width"));e(b)||(this.containerHeight=
a.getStyle(d,"height"));this.chartWidth=Math.max(0,f||this.containerWidth||600);this.chartHeight=Math.max(0,a.relativeLength(b,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))},temporaryDisplay:function(b){var f=this.renderTo;if(b)for(;f&&f.style;)f.hcOrigStyle&&(a.css(f,f.hcOrigStyle),delete f.hcOrigStyle),f.hcOrigDetached&&(c.body.removeChild(f),f.hcOrigDetached=!1),f=f.parentNode;else for(;f&&f.style;){c.body.contains(f)||f.parentNode||(f.hcOrigDetached=!0,c.body.appendChild(f));
if("none"===a.getStyle(f,"display",!1)||f.hcOricDetached)f.hcOrigStyle={display:f.style.display,height:f.style.height,overflow:f.style.overflow},b={display:"block",overflow:"hidden"},f!==this.renderTo&&(b.height=0),a.css(f,b),f.offsetWidth||f.style.setProperty("display","block","important");f=f.parentNode;if(f===c.body)break}},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var b,f=this.options,e=f.chart,m,q;b=this.renderTo;var n=a.uniqueKey(),
z,u;b||(this.renderTo=b=e.renderTo);x(b)&&(this.renderTo=b=c.getElementById(b));b||a.error(13,!0,this);m=D(k(b,"data-highcharts-chart"));g(m)&&r[m]&&r[m].hasRendered&&r[m].destroy();k(b,"data-highcharts-chart",this.index);b.innerHTML="";e.skipClone||b.offsetWidth||this.temporaryDisplay();this.getChartSize();m=this.chartWidth;q=this.chartHeight;h(b,{overflow:"hidden"});this.styledMode||(z=l({position:"relative",overflow:"hidden",width:m+"px",height:q+"px",textAlign:"left",lineHeight:"normal",zIndex:0,
"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},e.style));this.container=b=t("div",{id:n},z,b);this._cursor=b.style.cursor;this.renderer=new (a[e.renderer]||a.Renderer)(b,m,q,null,e.forExport,f.exporting&&f.exporting.allowHTML,this.styledMode);this.setClassName(e.className);if(this.styledMode)for(u in f.defs)this.renderer.definition(f.defs[u]);else this.renderer.setStyle(e.style);this.renderer.chartIndex=this.index;d(this,"afterGetContainer")},getMargins:function(a){var b=this.spacing,f=this.margin,
g=this.titleOffset;this.resetMargins();g&&!e(f[0])&&(this.plotTop=Math.max(this.plotTop,g+this.options.title.margin+b[0]));this.legend&&this.legend.display&&this.legend.adjustMargins(f,b);d(this,"getMargins");a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],f=a.margin;a.hasCartesianSeries&&a.axes.forEach(function(a){a.visible&&a.getOffset()});H.forEach(function(d,g){e(f[g])||(a[d]+=b[g])});a.setChartSize()},reflow:function(b){var f=this,d=f.options.chart,g=f.renderTo,
m=e(d.width)&&e(d.height),h=d.width||a.getStyle(g,"width"),d=d.height||a.getStyle(g,"height"),g=b?b.target:K;if(!m&&!f.isPrinting&&h&&d&&(g===K||g===c)){if(h!==f.containerWidth||d!==f.containerHeight)a.clearTimeout(f.reflowTimeout),f.reflowTimeout=L(function(){f.container&&f.setSize(void 0,void 0,!1)},b?100:0);f.containerWidth=h;f.containerHeight=d}},setReflow:function(a){var b=this;!1===a||this.unbindReflow?!1===a&&this.unbindReflow&&(this.unbindReflow=this.unbindReflow()):(this.unbindReflow=y(K,
"resize",function(a){b.reflow(a)}),y(this,"destroy",this.unbindReflow))},setSize:function(b,f,e){var g=this,c=g.renderer,m;g.isResizing+=1;a.setAnimation(e,g);g.oldChartHeight=g.chartHeight;g.oldChartWidth=g.chartWidth;void 0!==b&&(g.options.chart.width=b);void 0!==f&&(g.options.chart.height=f);g.getChartSize();g.styledMode||(m=c.globalAnimation,(m?F:h)(g.container,{width:g.chartWidth+"px",height:g.chartHeight+"px"},m));g.setChartSize(!0);c.setSize(g.chartWidth,g.chartHeight,e);g.axes.forEach(function(a){a.isDirty=
!0;a.setScale()});g.isDirtyLegend=!0;g.isDirtyBox=!0;g.layOutTitles();g.getMargins();g.redraw(e);g.oldChartHeight=null;d(g,"resize");L(function(){g&&d(g,"endResize",null,function(){--g.isResizing})},G(m).duration)},setChartSize:function(a){var b=this.inverted,f=this.renderer,e=this.chartWidth,g=this.chartHeight,c=this.options.chart,m=this.spacing,h=this.clipOffset,q,l,n,z;this.plotLeft=q=Math.round(this.plotLeft);this.plotTop=l=Math.round(this.plotTop);this.plotWidth=n=Math.max(0,Math.round(e-q-this.marginRight));
this.plotHeight=z=Math.max(0,Math.round(g-l-this.marginBottom));this.plotSizeX=b?z:n;this.plotSizeY=b?n:z;this.plotBorderWidth=c.plotBorderWidth||0;this.spacingBox=f.spacingBox={x:m[3],y:m[0],width:e-m[3]-m[1],height:g-m[0]-m[2]};this.plotBox=f.plotBox={x:q,y:l,width:n,height:z};e=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(e,h[3])/2);f=Math.ceil(Math.max(e,h[0])/2);this.clipBox={x:b,y:f,width:Math.floor(this.plotSizeX-Math.max(e,h[1])/2-b),height:Math.max(0,Math.floor(this.plotSizeY-
Math.max(e,h[2])/2-f))};a||this.axes.forEach(function(a){a.setAxisSize();a.setAxisTranslation()});d(this,"afterSetChartSize",{skipAxes:a})},resetMargins:function(){d(this,"resetMargins");var a=this,f=a.options.chart;["margin","spacing"].forEach(function(d){var e=f[d],g=b(e)?e:[e,e,e,e];["Top","Right","Bottom","Left"].forEach(function(b,e){a[d][e]=z(f[d+b],g[e])})});H.forEach(function(b,f){a[b]=z(a.margin[f],a.spacing[f])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=
this.options.chart,b=this.renderer,f=this.chartWidth,e=this.chartHeight,g=this.chartBackground,c=this.plotBackground,m=this.plotBorder,h,q=this.styledMode,l=this.plotBGImage,n=a.backgroundColor,z=a.plotBackgroundColor,k=a.plotBackgroundImage,D,u=this.plotLeft,r=this.plotTop,A=this.plotWidth,x=this.plotHeight,p=this.plotBox,B=this.clipRect,t=this.clipBox,v="animate";g||(this.chartBackground=g=b.rect().addClass("highcharts-background").add(),v="attr");if(q)h=D=g.strokeWidth();else{h=a.borderWidth||
0;D=h+(a.shadow?8:0);n={fill:n||"none"};if(h||g["stroke-width"])n.stroke=a.borderColor,n["stroke-width"]=h;g.attr(n).shadow(a.shadow)}g[v]({x:D/2,y:D/2,width:f-D-h%2,height:e-D-h%2,r:a.borderRadius});v="animate";c||(v="attr",this.plotBackground=c=b.rect().addClass("highcharts-plot-background").add());c[v](p);q||(c.attr({fill:z||"none"}).shadow(a.plotShadow),k&&(l?l.animate(p):this.plotBGImage=b.image(k,u,r,A,x).add()));B?B.animate({width:t.width,height:t.height}):this.clipRect=b.clipRect(t);v="animate";
m||(v="attr",this.plotBorder=m=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());q||m.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});m[v](m.crisp({x:u,y:r,width:A,height:x},-m.strokeWidth()));this.isDirtyBox=!1;d(this,"afterDrawChartBox")},propFromSeries:function(){var a=this,b=a.options.chart,d,e=a.options.series,g,c;["inverted","angular","polar"].forEach(function(m){d=f[b.type||b.defaultSeriesType];c=b[m]||d&&d.prototype[m];for(g=e&&e.length;!c&&
g--;)(d=f[e[g].type])&&d.prototype[m]&&(c=!0);a[m]=c})},linkSeries:function(){var a=this,b=a.series;b.forEach(function(a){a.linkedSeries.length=0});b.forEach(function(b){var f=b.options.linkedTo;x(f)&&(f=":previous"===f?a.series[b.index-1]:a.get(f))&&f.linkedParent!==b&&(f.linkedSeries.push(b),b.linkedParent=f,b.visible=z(b.options.visible,f.options.visible,b.visible))});d(this,"afterLinkSeries")},renderSeries:function(){this.series.forEach(function(a){a.translate();a.render()})},renderLabels:function(){var a=
this,b=a.options.labels;b.items&&b.items.forEach(function(f){var d=l(b.style,f.style),e=D(d.left)+a.plotLeft,g=D(d.top)+a.plotTop+12;delete d.left;delete d.top;a.renderer.text(f.html,e,g).attr({zIndex:2}).css(d).add()})},render:function(){var a=this.axes,b=this.renderer,f=this.options,d=0,e,g,c;this.setTitle();this.legend=new u(this,f.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();f=this.plotWidth;a.some(function(a){if(a.horiz&&a.visible&&a.options.labels.enabled&&
a.series.length)return d=21,!0});e=this.plotHeight=Math.max(this.plotHeight-d,0);a.forEach(function(a){a.setScale()});this.getAxisMargins();g=1.1<f/this.plotWidth;c=1.05<e/this.plotHeight;if(g||c)a.forEach(function(a){(a.horiz&&g||!a.horiz&&c)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&a.forEach(function(a){a.visible&&a.render()});this.seriesGroup||(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();
this.setResponsive&&this.setResponsive();this.hasRendered=!0},addCredits:function(a){var b=this;a=E(!0,this.options.credits,a);a.enabled&&!this.credits&&(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&(K.location.href=a.href)}).attr({align:a.position.align,zIndex:8}),b.styledMode||this.credits.css(a.style),this.credits.add().align(a.position),this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},
destroy:function(){var b=this,f=b.axes,e=b.series,g=b.container,c,m=g&&g.parentNode;d(b,"destroy");b.renderer.forExport?a.erase(r,b):r[b.index]=void 0;a.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");A(b);for(c=f.length;c--;)f[c]=f[c].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(c=e.length;c--;)e[c]=e[c].destroy();"title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function(a){var f=
b[a];f&&f.destroy&&(b[a]=f.destroy())});g&&(g.innerHTML="",A(g),m&&w(g));B(b,function(a,f){delete b[f]})},firstRender:function(){var b=this,f=b.options;if(!b.isReadyToRender||b.isReadyToRender()){b.getContainer();b.resetMargins();b.setChartSize();b.propFromSeries();b.getAxes();(a.isArray(f.series)?f.series:[]).forEach(function(a){b.initSeries(a)});b.linkSeries();d(b,"beforeRender");m&&(b.pointer=new m(b,f));b.render();if(!b.renderer.imgCount&&b.onload)b.onload();b.temporaryDisplay(!0)}},onload:function(){[this.callback].concat(this.callbacks).forEach(function(a){a&&
void 0!==this.index&&a.apply(this,[this])},this);d(this,"load");d(this,"render");e(this.index)&&this.setReflow(this.options.chart.reflow);this.onload=null}})})(I);(function(a){var y=a.addEvent,F=a.Chart;y(F,"afterSetChartSize",function(y){var k=this.options.chart.scrollablePlotArea;(k=k&&k.minWidth)&&!this.renderer.forExport&&(this.scrollablePixels=k=Math.max(0,k-this.chartWidth))&&(this.plotWidth+=k,this.clipBox.width+=k,y.skipAxes||this.axes.forEach(function(c){1===c.side?c.getPlotLinePath=function(){var k=
this.right,t;this.right=k-c.chart.scrollablePixels;t=a.Axis.prototype.getPlotLinePath.apply(this,arguments);this.right=k;return t}:(c.setAxisSize(),c.setAxisTranslation())}))});y(F,"render",function(){this.scrollablePixels?(this.setUpScrolling&&this.setUpScrolling(),this.applyFixed()):this.fixedDiv&&this.applyFixed()});F.prototype.setUpScrolling=function(){this.scrollingContainer=a.createElement("div",{className:"highcharts-scrolling"},{overflowX:"auto",WebkitOverflowScrolling:"touch"},this.renderTo);
this.innerContainer=a.createElement("div",{className:"highcharts-inner-container"},null,this.scrollingContainer);this.innerContainer.appendChild(this.container);this.setUpScrolling=null};F.prototype.applyFixed=function(){var y=this.container,k,c,p=!this.fixedDiv;p&&(this.fixedDiv=a.createElement("div",{className:"highcharts-fixed"},{position:"absolute",overflow:"hidden",pointerEvents:"none",zIndex:2},null,!0),this.renderTo.insertBefore(this.fixedDiv,this.renderTo.firstChild),this.renderTo.style.overflow=
"visible",this.fixedRenderer=k=new a.Renderer(this.fixedDiv,0,0),this.scrollableMask=k.path().attr({fill:a.color(this.options.chart.backgroundColor||"#fff").setOpacity(.85).get(),zIndex:-1}).addClass("highcharts-scrollable-mask").add(),[this.inverted?".highcharts-xaxis":".highcharts-yaxis",this.inverted?".highcharts-xaxis-labels":".highcharts-yaxis-labels",".highcharts-contextbutton",".highcharts-credits",".highcharts-legend",".highcharts-subtitle",".highcharts-title",".highcharts-legend-checkbox"].forEach(function(a){[].forEach.call(y.querySelectorAll(a),
function(a){(a.namespaceURI===k.SVG_NS?k.box:k.box.parentNode).appendChild(a);a.style.pointerEvents="auto"})}));this.fixedRenderer.setSize(this.chartWidth,this.chartHeight);c=this.chartWidth+this.scrollablePixels;a.stop(this.container);this.container.style.width=c+"px";this.renderer.boxWrapper.attr({width:c,height:this.chartHeight,viewBox:[0,0,c,this.chartHeight].join(" ")});this.chartBackground.attr({width:c});p&&(c=this.options.chart.scrollablePlotArea,c.scrollPositionX&&(this.scrollingContainer.scrollLeft=
this.scrollablePixels*c.scrollPositionX));p=this.axisOffset;c=this.plotTop-p[0]-1;var p=this.plotTop+this.plotHeight+p[2],t=this.plotLeft+this.plotWidth-this.scrollablePixels;this.scrollableMask.attr({d:this.scrollablePixels?["M",0,c,"L",this.plotLeft-1,c,"L",this.plotLeft-1,p,"L",0,p,"Z","M",t,c,"L",this.chartWidth,c,"L",this.chartWidth,p,"L",t,p,"Z"]:["M",0,0]})}})(I);(function(a){var y,F=a.extend,G=a.erase,k=a.fireEvent,c=a.format,p=a.isArray,t=a.isNumber,v=a.pick,w=a.uniqueKey,r=a.defined,h=a.removeEvent;
a.Point=y=function(){};a.Point.prototype={init:function(a,c,h){var d;d=a.chart.options.chart.colorCount;var e=a.chart.styledMode;this.series=a;e||(this.color=a.color);this.applyOptions(c,h);this.id=r(this.id)?this.id:w();a.options.colorByPoint?(e||(d=a.options.colors||a.chart.options.colors,this.color=this.color||d[a.colorCounter],d=d.length),c=a.colorCounter,a.colorCounter++,a.colorCounter===d&&(a.colorCounter=0)):c=a.colorIndex;this.colorIndex=v(this.colorIndex,c);a.chart.pointCount++;k(this,"afterInit");
return this},applyOptions:function(a,c){var e=this.series,d=e.options.pointValKey||e.pointValKey;a=y.prototype.optionsToObject.call(this,a);F(this,a);this.options=this.options?F(this.options,a):a;a.group&&delete this.group;a.dataLabels&&delete this.dataLabels;d&&(this.y=this[d]);this.isNull=v(this.isValid&&!this.isValid(),null===this.x||!t(this.y,!0));this.selected&&(this.state="select");"name"in this&&void 0===c&&e.xAxis&&e.xAxis.hasNames&&(this.x=e.xAxis.nameToX(this));void 0===this.x&&e&&(this.x=
void 0===c?e.autoIncrement(this):c);return this},setNestedProperty:function(e,c,h){h.split(".").reduce(function(d,e,b,h){d[e]=h.length-1===b?c:a.isObject(d[e],!0)?d[e]:{};return d[e]},e);return e},optionsToObject:function(e){var c={},h=this.series,d=h.options.keys,g=d||h.pointArrayMap||["y"],b=g.length,k=0,u=0;if(t(e)||null===e)c[g[0]]=e;else if(p(e))for(!d&&e.length>b&&(h=typeof e[0],"string"===h?c.name=e[0]:"number"===h&&(c.x=e[0]),k++);u<b;)d&&void 0===e[k]||(0<g[u].indexOf(".")?a.Point.prototype.setNestedProperty(c,
e[k],g[u]):c[g[u]]=e[k]),k++,u++;else"object"===typeof e&&(c=e,e.dataLabels&&(h._hasPointLabels=!0),e.marker&&(h._hasPointMarkers=!0));return c},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",
""):"")},getZone:function(){var a=this.series,c=a.zones,a=a.zoneAxis||"y",h=0,d;for(d=c[h];this[a]>=d.value;)d=c[++h];this.nonZonedColor||(this.nonZonedColor=this.color);this.color=d&&d.color&&!this.options.color?d.color:this.nonZonedColor;return d},destroy:function(){var a=this.series.chart,c=a.hoverPoints,n;a.pointCount--;c&&(this.setState(),G(c,this),c.length||(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel||this.dataLabels)h(this),this.destroyElements();
this.legendItem&&a.legend.destroyItem(this);for(n in this)this[n]=null},destroyElements:function(){for(var a=["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],c,h=6;h--;)c=a[h],this[c]&&(this[c]=this[c].destroy());this.dataLabels&&(this.dataLabels.forEach(function(a){a.element&&a.destroy()}),delete this.dataLabels);this.connectors&&(this.connectors.forEach(function(a){a.element&&a.destroy()}),delete this.connectors)},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,
colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var e=this.series,h=e.tooltipOptions,d=v(h.valueDecimals,""),g=h.valuePrefix||"",b=h.valueSuffix||"";e.chart.styledMode&&(a=e.chart.tooltip.styledModeFormat(a));(e.pointArrayMap||["y"]).forEach(function(e){e="{point."+e;if(g||b)a=a.replace(RegExp(e+"}","g"),g+e+"}"+b);a=a.replace(RegExp(e+"}","g"),e+":,."+d+"f}")});return c(a,
{point:this,series:this.series},e.chart.time)},firePointEvent:function(a,c,h){var d=this,e=this.series.options;(e.point.events[a]||d.options&&d.options.events&&d.options.events[a])&&this.importEvents();"click"===a&&e.allowPointSelect&&(h=function(a){d.select&&d.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});k(this,a,c,h)},visible:!0}})(I);(function(a){var y=a.addEvent,F=a.animObject,G=a.arrayMax,k=a.arrayMin,c=a.correctFloat,p=a.defaultOptions,t=a.defaultPlotOptions,v=a.defined,w=a.erase,r=a.extend,
h=a.fireEvent,e=a.isArray,l=a.isNumber,n=a.isString,d=a.merge,g=a.objectEach,b=a.pick,x=a.removeEvent,u=a.splat,H=a.SVGElement,E=a.syncTimeout,B=a.win;a.Series=a.seriesType("line",null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",enabledThreshold:2,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},
point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{normal:{animation:!0},hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{animation:{duration:0}}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},
{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",cropShoulder:1,init:function(a,d){h(this,"init",{options:d});var e=this,c,f=a.series,m;e.chart=a;e.options=d=e.setOptions(d);e.linkedSeries=[];e.bindAxes();r(e,{name:d.name,state:"",visible:!1!==d.visible,selected:!0===d.selected});c=d.events;g(c,function(a,b){e.hcEvents&&e.hcEvents[b]&&-1!==e.hcEvents[b].indexOf(a)||y(e,b,a)});if(c&&c.click||
d.point&&d.point.events&&d.point.events.click||d.allowPointSelect)a.runTrackerClick=!0;e.getColor();e.getSymbol();e.parallelArrays.forEach(function(a){e[a+"Data"]=[]});e.setData(d.data,!1);e.isCartesian&&(a.hasCartesianSeries=!0);f.length&&(m=f[f.length-1]);e._i=b(m&&m._i,-1)+1;a.orderSeries(this.insert(f));h(this,"afterInit")},insert:function(a){var d=this.options.index,e;if(l(d)){for(e=a.length;e--;)if(d>=b(a[e].options.index,a[e]._i)){a.splice(e+1,0,this);break}-1===e&&a.unshift(this);e+=1}else a.push(this);
return b(e,a.length-1)},bindAxes:function(){var b=this,d=b.options,e=b.chart,g;h(this,"bindAxes",null,function(){(b.axisTypes||[]).forEach(function(f){e[f].forEach(function(a){g=a.options;if(d[f]===g.index||void 0!==d[f]&&d[f]===g.id||void 0===d[f]&&0===g.index)b.insert(a.series),b[f]=a,a.isDirty=!0});b[f]||b.optionalAxis===f||a.error(18,!0,e)})})},updateParallelArrays:function(a,b){var d=a.series,e=arguments,f=l(b)?function(f){var e="y"===f&&d.toYData?d.toYData(a):a[f];d[f+"Data"][b]=e}:function(a){Array.prototype[b].apply(d[a+
"Data"],Array.prototype.slice.call(e,2))};d.parallelArrays.forEach(f)},autoIncrement:function(){var a=this.options,d=this.xIncrement,e,g=a.pointIntervalUnit,f=this.chart.time,d=b(d,a.pointStart,0);this.pointInterval=e=b(this.pointInterval,a.pointInterval,1);g&&(a=new f.Date(d),"day"===g?f.set("Date",a,f.get("Date",a)+e):"month"===g?f.set("Month",a,f.get("Month",a)+e):"year"===g&&f.set("FullYear",a,f.get("FullYear",a)+e),e=a.getTime()-d);this.xIncrement=d+e;return d},setOptions:function(a){var e=this.chart,
g=e.options,c=g.plotOptions,f=(e.userOptions||{}).plotOptions||{},m=c[this.type],l=d(a);a=e.styledMode;h(this,"setOptions",{userOptions:l});this.userOptions=l;e=d(m,c.series,l);this.tooltipOptions=d(p.tooltip,p.plotOptions.series&&p.plotOptions.series.tooltip,p.plotOptions[this.type].tooltip,g.tooltip.userOptions,c.series&&c.series.tooltip,c[this.type].tooltip,l.tooltip);this.stickyTracking=b(l.stickyTracking,f[this.type]&&f[this.type].stickyTracking,f.series&&f.series.stickyTracking,this.tooltipOptions.shared&&
!this.noSharedTooltip?!0:e.stickyTracking);null===m.marker&&delete e.marker;this.zoneAxis=e.zoneAxis;g=this.zones=(e.zones||[]).slice();!e.negativeColor&&!e.negativeFillColor||e.zones||(c={value:e[this.zoneAxis+"Threshold"]||e.threshold||0,className:"highcharts-negative"},a||(c.color=e.negativeColor,c.fillColor=e.negativeFillColor),g.push(c));g.length&&v(g[g.length-1].value)&&g.push(a?{}:{color:this.color,fillColor:this.fillColor});h(this,"afterSetOptions",{options:e});return e},getName:function(){return b(this.options.name,
"Series "+(this.index+1))},getCyclic:function(a,d,e){var g,f=this.chart,c=this.userOptions,h=a+"Index",m=a+"Counter",l=e?e.length:b(f.options.chart[a+"Count"],f[a+"Count"]);d||(g=b(c[h],c["_"+h]),v(g)||(f.series.length||(f[m]=0),c["_"+h]=g=f[m]%l,f[m]+=1),e&&(d=e[g]));void 0!==g&&(this[h]=g);this[a]=d},getColor:function(){this.chart.styledMode?this.getCyclic("color"):this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||t[this.type].color,this.chart.options.colors)},
getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,updateData:function(b){var d=this.options,e=this.points,g=[],f,c,h,m=this.requireSorting;this.xIncrement=null;b.forEach(function(b){var c,q,k;c=a.defined(b)&&this.pointClass.prototype.optionsToObject.call({series:this},b)||{};k=c.x;if((c=c.id)||l(k))c&&(q=(q=this.chart.get(c))&&q.index),void 0===q&&l(k)&&(q=this.xData.indexOf(k,h)),-1!==q&&void 0!==
q&&this.cropped&&(q=q>=this.cropStart?q-this.cropStart:q),-1===q||void 0===q||e[q]&&e[q].touched?g.push(b):b!==d.data[q]?(e[q].update(b,!1,null,!1),e[q].touched=!0,m&&(h=q+1)):e[q]&&(e[q].touched=!0),f=!0},this);if(f)for(b=e.length;b--;)c=e[b],c.touched||c.remove(!1),c.touched=!1;else if(b.length===e.length)b.forEach(function(a,b){e[b].update&&a!==d.data[b]&&e[b].update(a,!1,null,!1)});else return!1;g.forEach(function(a){this.addPoint(a,!1)},this);return!0},setData:function(d,g,c,h){var f=this,m=
f.points,k=m&&m.length||0,z,u=f.options,r=f.chart,D=null,x=f.xAxis,A=u.turboThreshold,p=this.xData,B=this.yData,t=(z=f.pointArrayMap)&&z.length,v=u.keys,E=0,w=1,H;d=d||[];z=d.length;g=b(g,!0);!1!==h&&z&&k&&!f.cropped&&!f.hasGroupedData&&f.visible&&!f.isSeriesBoosting&&(H=this.updateData(d));if(!H){f.xIncrement=null;f.colorCounter=0;this.parallelArrays.forEach(function(a){f[a+"Data"].length=0});if(A&&z>A){for(c=0;null===D&&c<z;)D=d[c],c++;if(l(D))for(c=0;c<z;c++)p[c]=this.autoIncrement(),B[c]=d[c];
else if(e(D))if(t)for(c=0;c<z;c++)D=d[c],p[c]=D[0],B[c]=D.slice(1,t+1);else for(v&&(E=v.indexOf("x"),w=v.indexOf("y"),E=0<=E?E:0,w=0<=w?w:1),c=0;c<z;c++)D=d[c],p[c]=D[E],B[c]=D[w];else a.error(12,!1,r)}else for(c=0;c<z;c++)void 0!==d[c]&&(D={series:f},f.pointClass.prototype.applyOptions.apply(D,[d[c]]),f.updateParallelArrays(D,c));B&&n(B[0])&&a.error(14,!0,r);f.data=[];f.options.data=f.userOptions.data=d;for(c=k;c--;)m[c]&&m[c].destroy&&m[c].destroy();x&&(x.minRange=x.userMinRange);f.isDirty=r.isDirtyBox=
!0;f.isDirtyData=!!m;c=!1}"point"===u.legendType&&(this.processData(),this.generatePoints());g&&r.redraw(c)},processData:function(b){var d=this.xData,e=this.yData,c=d.length,f;f=0;var g,h,m=this.xAxis,l,k=this.options;l=k.cropThreshold;var n=this.getExtremesFromAll||k.getExtremesFromAll,u=this.isCartesian,k=m&&m.val2lin,r=m&&m.isLog,x=this.requireSorting,p,B;if(u&&!this.isDirty&&!m.isDirty&&!this.yAxis.isDirty&&!b)return!1;m&&(b=m.getExtremes(),p=b.min,B=b.max);u&&this.sorted&&!n&&(!l||c>l||this.forceCrop)&&
(d[c-1]<p||d[0]>B?(d=[],e=[]):this.yData&&(d[0]<p||d[c-1]>B)&&(f=this.cropData(this.xData,this.yData,p,B),d=f.xData,e=f.yData,f=f.start,g=!0));for(l=d.length||1;--l;)c=r?k(d[l])-k(d[l-1]):d[l]-d[l-1],0<c&&(void 0===h||c<h)?h=c:0>c&&x&&(a.error(15,!1,this.chart),x=!1);this.cropped=g;this.cropStart=f;this.processedXData=d;this.processedYData=e;this.closestPointRange=h},cropData:function(a,d,e,c,f){var g=a.length,h=0,m=g,l;f=b(f,this.cropShoulder);for(l=0;l<g;l++)if(a[l]>=e){h=Math.max(0,l-f);break}for(e=
l;e<g;e++)if(a[e]>c){m=e+f;break}return{xData:a.slice(h,m),yData:d.slice(h,m),start:h,end:m}},generatePoints:function(){var a=this.options,b=a.data,d=this.data,e,f=this.processedXData,c=this.processedYData,g=this.pointClass,l=f.length,k=this.cropStart||0,n,x=this.hasGroupedData,a=a.keys,p,B=[],t;d||x||(d=[],d.length=b.length,d=this.data=d);a&&x&&(this.options.keys=!1);for(t=0;t<l;t++)n=k+t,x?(p=(new g).init(this,[f[t]].concat(u(c[t]))),p.dataGroup=this.groupMap[t],p.dataGroup.options&&(p.options=
p.dataGroup.options,r(p,p.dataGroup.options),delete p.dataLabels)):(p=d[n])||void 0===b[n]||(d[n]=p=(new g).init(this,b[n],f[t])),p&&(p.index=n,B[t]=p);this.options.keys=a;if(d&&(l!==(e=d.length)||x))for(t=0;t<e;t++)t!==k||x||(t+=l),d[t]&&(d[t].destroyElements(),d[t].plotX=void 0);this.data=d;this.points=B;h(this,"afterGeneratePoints")},getExtremes:function(a){var b=this.yAxis,d=this.processedXData,c,f=[],g=0;c=this.xAxis.getExtremes();var m=c.min,n=c.max,u,r,x=this.requireSorting?this.cropShoulder:
0,p,B;a=a||this.stackedYData||this.processedYData||[];c=a.length;for(B=0;B<c;B++)if(r=d[B],p=a[B],u=(l(p,!0)||e(p))&&(!b.positiveValuesOnly||p.length||0<p),r=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(d[B+x]||r)>=m&&(d[B-x]||r)<=n,u&&r)if(u=p.length)for(;u--;)"number"===typeof p[u]&&(f[g++]=p[u]);else f[g++]=p;this.dataMin=k(f);this.dataMax=G(f);h(this,"afterGetExtremes")},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,
d=a.stacking,e=this.xAxis,g=e.categories,f=this.yAxis,q=this.points,k=q.length,n=!!this.modifyValue,u,r=this.pointPlacementToXValue(),x=l(r),p=a.threshold,B=a.startFromThreshold?p:0,t,E,w,H,y=this.zoneAxis||"y",G=Number.MAX_VALUE;for(u=0;u<k;u++){var F=q[u],I=F.x,Q=F.y;E=F.low;var N=d&&f.stacks[(this.negStacks&&Q<(B?0:p)?"-":"")+this.stackKey],V;f.positiveValuesOnly&&null!==Q&&0>=Q&&(F.isNull=!0);F.plotX=t=c(Math.min(Math.max(-1E5,e.translate(I,0,0,0,1,r,"flags"===this.type)),1E5));d&&this.visible&&
!F.isNull&&N&&N[I]&&(H=this.getStackIndicator(H,I,this.index),V=N[I],Q=V.points[H.key],E=Q[0],Q=Q[1],E===B&&H.key===N[I].base&&(E=b(l(p)&&p,f.min)),f.positiveValuesOnly&&0>=E&&(E=null),F.total=F.stackTotal=V.total,F.percentage=V.total&&F.y/V.total*100,F.stackY=Q,V.setOffset(this.pointXOffset||0,this.barW||0));F.yBottom=v(E)?Math.min(Math.max(-1E5,f.translate(E,0,1,0,1)),1E5):null;n&&(Q=this.modifyValue(Q,F));F.plotY=E="number"===typeof Q&&Infinity!==Q?Math.min(Math.max(-1E5,f.translate(Q,0,1,0,1)),
1E5):void 0;F.isInside=void 0!==E&&0<=E&&E<=f.len&&0<=t&&t<=e.len;F.clientX=x?c(e.translate(I,0,0,0,1,r)):t;F.negative=F[y]<(a[y+"Threshold"]||p||0);F.category=g&&void 0!==g[F.x]?g[F.x]:F.x;F.isNull||(void 0!==w&&(G=Math.min(G,Math.abs(t-w))),w=t);F.zone=this.zones.length&&F.getZone()}this.closestPointRangePx=G;h(this,"afterTranslate")},getValidPoints:function(a,b,d){var e=this.chart;return(a||this.points||[]).filter(function(a){return b&&!e.isInsidePlot(a.plotX,a.plotY,e.inverted)?!1:d||!a.isNull})},
setClip:function(a){var b=this.chart,d=this.options,e=b.renderer,f=b.inverted,c=this.clipBox,g=c||b.clipBox,h=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,g.height,d.xAxis,d.yAxis].join(),m=b[h],l=b[h+"m"];m||(a&&(g.width=0,f&&(g.x=b.plotSizeX),b[h+"m"]=l=e.clipRect(f?b.plotSizeX+99:-99,f?-b.plotLeft:-b.plotTop,99,f?b.chartWidth:b.chartHeight)),b[h]=m=e.clipRect(g),m.count={length:0});a&&!m.count[this.index]&&(m.count[this.index]=!0,m.count.length+=1);!1!==d.clip&&(this.group.clip(a||
c?m:b.clipRect),this.markerGroup.clip(l),this.sharedClipKey=h);a||(m.count[this.index]&&(delete m.count[this.index],--m.count.length),0===m.count.length&&h&&b[h]&&(c||(b[h]=b[h].destroy()),b[h+"m"]&&(b[h+"m"]=b[h+"m"].destroy())))},animate:function(a){var b=this.chart,d=F(this.options.animation),e;a?this.setClip(d):(e=this.sharedClipKey,(a=b[e])&&a.animate({width:b.plotSizeX,x:0},d),b[e+"m"]&&b[e+"m"].animate({width:b.plotSizeX+99,x:0},d),this.animate=null)},afterAnimate:function(){this.setClip();
h(this,"afterAnimate");this.finishedAnimating=!0},drawPoints:function(){var a=this.points,d=this.chart,e,c,f,g,h=this.options.marker,l,k,n,u=this[this.specialGroup]||this.markerGroup;e=this.xAxis;var r,x=b(h.enabled,!e||e.isRadial?!0:null,this.closestPointRangePx>=h.enabledThreshold*h.radius);if(!1!==h.enabled||this._hasPointMarkers)for(e=0;e<a.length;e++)c=a[e],g=c.graphic,l=c.marker||{},k=!!c.marker,f=x&&void 0===l.enabled||l.enabled,n=!1!==c.isInside,f&&!c.isNull?(f=b(l.symbol,this.symbol),r=this.markerAttribs(c,
c.selected&&"select"),g?g[n?"show":"hide"](!0).animate(r):n&&(0<r.width||c.hasImage)&&(c.graphic=g=d.renderer.symbol(f,r.x,r.y,r.width,r.height,k?l:h).add(u)),g&&!d.styledMode&&g.attr(this.pointAttribs(c,c.selected&&"select")),g&&g.addClass(c.getClassName(),!0)):g&&(c.graphic=g.destroy())},markerAttribs:function(a,d){var e=this.options.marker,c=a.marker||{},f=c.symbol||e.symbol,g=b(c.radius,e.radius);d&&(e=e.states[d],d=c.states&&c.states[d],g=b(d&&d.radius,e&&e.radius,g+(e&&e.radiusPlus||0)));a.hasImage=
f&&0===f.indexOf("url");a.hasImage&&(g=0);a={x:Math.floor(a.plotX)-g,y:a.plotY-g};g&&(a.width=a.height=2*g);return a},pointAttribs:function(a,d){var e=this.options.marker,c=a&&a.options,f=c&&c.marker||{},g=this.color,h=c&&c.color,m=a&&a.color,c=b(f.lineWidth,e.lineWidth);a=a&&a.zone&&a.zone.color;g=h||a||m||g;a=f.fillColor||e.fillColor||g;g=f.lineColor||e.lineColor||g;d&&(e=e.states[d],d=f.states&&f.states[d]||{},c=b(d.lineWidth,e.lineWidth,c+b(d.lineWidthPlus,e.lineWidthPlus,0)),a=d.fillColor||e.fillColor||
a,g=d.lineColor||e.lineColor||g);return{stroke:g,"stroke-width":c,fill:a}},destroy:function(b){var d=this,e=d.chart,c=/AppleWebKit\/533/.test(B.navigator.userAgent),f,m,l=d.data||[],k,n;h(d,"destroy");b||x(d);(d.axisTypes||[]).forEach(function(a){(n=d[a])&&n.series&&(w(n.series,d),n.isDirty=n.forceRedraw=!0)});d.legendItem&&d.chart.legend.destroyItem(d);for(m=l.length;m--;)(k=l[m])&&k.destroy&&k.destroy();d.points=null;a.clearTimeout(d.animationTimeout);g(d,function(a,b){a instanceof H&&!a.survive&&
(f=c&&"group"===b?"hide":"destroy",a[f]())});e.hoverSeries===d&&(e.hoverSeries=null);w(e.series,d);e.orderSeries();g(d,function(a,f){b&&"hcEvents"===f||delete d[f]})},getGraphPath:function(a,b,d){var e=this,f=e.options,c=f.step,g,h=[],m=[],l;a=a||e.points;(g=a.reversed)&&a.reverse();(c={right:1,center:2}[c]||c&&3)&&g&&(c=4-c);!f.connectNulls||b||d||(a=this.getValidPoints(a));a.forEach(function(g,q){var k=g.plotX,n=g.plotY,u=a[q-1];(g.leftCliff||u&&u.rightCliff)&&!d&&(l=!0);g.isNull&&!v(b)&&0<q?l=
!f.connectNulls:g.isNull&&!b?l=!0:(0===q||l?q=["M",g.plotX,g.plotY]:e.getPointSpline?q=e.getPointSpline(a,g,q):c?(q=1===c?["L",u.plotX,n]:2===c?["L",(u.plotX+k)/2,u.plotY,"L",(u.plotX+k)/2,n]:["L",k,u.plotY],q.push("L",k,n)):q=["L",k,n],m.push(g.x),c&&(m.push(g.x),2===c&&m.push(g.x)),h.push.apply(h,q),l=!1)});h.xMap=m;return e.graphPath=h},drawGraph:function(){var a=this,b=this.options,d=(this.gappedPath||this.getGraphPath).call(this),e=this.chart.styledMode,f=[["graph","highcharts-graph"]];e||f[0].push(b.lineColor||
this.color,b.dashStyle);f=a.getZonesGraphs(f);f.forEach(function(f,c){var g=f[0],h=a[g];h?(h.endX=a.preventGraphAnimation?null:d.xMap,h.animate({d:d})):d.length&&(a[g]=a.chart.renderer.path(d).addClass(f[1]).attr({zIndex:1}).add(a.group),e||(h={stroke:f[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&a.color||"none"},f[3]?h.dashstyle=f[3]:"square"!==b.linecap&&(h["stroke-linecap"]=h["stroke-linejoin"]="round"),h=a[g].attr(h).shadow(2>c&&b.shadow)));h&&(h.startX=d.xMap,h.isArea=d.isArea)})},getZonesGraphs:function(a){this.zones.forEach(function(b,
d){d=["zone-graph-"+d,"highcharts-graph highcharts-zone-graph-"+d+" "+(b.className||"")];this.chart.styledMode||d.push(b.color||this.color,b.dashStyle||this.options.dashStyle);a.push(d)},this);return a},applyZones:function(){var a=this,d=this.chart,e=d.renderer,c=this.zones,f,g,h=this.clips||[],l,k=this.graph,n=this.area,u=Math.max(d.chartWidth,d.chartHeight),r=this[(this.zoneAxis||"y")+"Axis"],x,p,B=d.inverted,t,v,E,w,H=!1;c.length&&(k||n)&&r&&void 0!==r.min&&(p=r.reversed,t=r.horiz,k&&!this.showLine&&
k.hide(),n&&n.hide(),x=r.getExtremes(),c.forEach(function(c,m){f=p?t?d.plotWidth:0:t?0:r.toPixels(x.min)||0;f=Math.min(Math.max(b(g,f),0),u);g=Math.min(Math.max(Math.round(r.toPixels(b(c.value,x.max),!0)||0),0),u);H&&(f=g=r.toPixels(x.max));v=Math.abs(f-g);E=Math.min(f,g);w=Math.max(f,g);r.isXAxis?(l={x:B?w:E,y:0,width:v,height:u},t||(l.x=d.plotHeight-l.x)):(l={x:0,y:B?w:E,width:u,height:v},t&&(l.y=d.plotWidth-l.y));B&&e.isVML&&(l=r.isXAxis?{x:0,y:p?E:w,height:l.width,width:d.chartWidth}:{x:l.y-d.plotLeft-
d.spacingBox.x,y:0,width:l.height,height:d.chartHeight});h[m]?h[m].animate(l):(h[m]=e.clipRect(l),k&&a["zone-graph-"+m].clip(h[m]),n&&a["zone-area-"+m].clip(h[m]));H=c.value>x.max;a.resetZones&&0===g&&(g=void 0)}),this.clips=h)},invertGroups:function(a){function b(){["group","markerGroup"].forEach(function(b){d[b]&&(e.renderer.isVML&&d[b].attr({width:d.yAxis.len,height:d.xAxis.len}),d[b].width=d.yAxis.len,d[b].height=d.xAxis.len,d[b].invert(a))})}var d=this,e=d.chart,f;d.xAxis&&(f=y(e,"resize",b),
y(d,"destroy",f),b(a),d.invertGroups=b)},plotGroup:function(a,b,d,e,f){var c=this[a],g=!c;g&&(this[a]=c=this.chart.renderer.g().attr({zIndex:e||.1}).add(f));c.addClass("highcharts-"+b+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(v(this.colorIndex)?"highcharts-color-"+this.colorIndex+" ":"")+(this.options.className||"")+(c.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0);c.attr({visibility:d})[g?"attr":"animate"](this.getPlotBox());return c},getPlotBox:function(){var a=
this.chart,b=this.xAxis,d=this.yAxis;a.inverted&&(b=d,d=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:d?d.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,d,e=a.options,f=!!a.animate&&b.renderer.isSVG&&F(e.animation).duration,c=a.visible?"inherit":"hidden",g=e.zIndex,l=a.hasRendered,k=b.seriesGroup,n=b.inverted;h(this,"render");d=a.plotGroup("group","series",c,g,k);a.markerGroup=a.plotGroup("markerGroup","markers",c,g,k);f&&a.animate(!0);d.inverted=a.isCartesian?
n:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(n);!1===e.clip||a.sharedClipKey||l||d.clip(b.clipRect);f&&a.animate();l||(a.animationTimeout=E(function(){a.afterAnimate()},f));a.isDirty=!1;a.hasRendered=!0;h(a,"afterRender")},redraw:function(){var a=this.chart,d=this.isDirty||this.isDirtyData,e=this.group,c=this.xAxis,f=this.yAxis;e&&(a.inverted&&e.attr({width:a.plotWidth,
height:a.plotHeight}),e.animate({translateX:b(c&&c.left,a.plotLeft),translateY:b(f&&f.top,a.plotTop)}));this.translate();this.render();d&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var d=this.xAxis,e=this.yAxis,f=this.chart.inverted;return this.searchKDTree({clientX:f?d.len-a.chartY+d.pos:a.chartX-d.pos,plotY:f?e.len-a.chartX+e.pos:a.chartY-e.pos},b,a)},buildKDTree:function(a){function b(a,e,c){var f,g;if(g=a&&a.length)return f=d.kdAxisArray[e%c],a.sort(function(a,
b){return a[f]-b[f]}),g=Math.floor(g/2),{point:a[g],left:b(a.slice(0,g),e+1,c),right:b(a.slice(g+1),e+1,c)}}this.buildingKdTree=!0;var d=this,e=-1<d.options.findNearestPointBy.indexOf("y")?2:1;delete d.kdTree;E(function(){d.kdTree=b(d.getValidPoints(null,!d.directTouch),e,e);d.buildingKdTree=!1},d.options.kdNow||a&&"touchstart"===a.type?0:1)},searchKDTree:function(a,b,d){function e(a,b,d,m){var l=b.point,k=f.kdAxisArray[d%m],q,n,u=l;n=v(a[c])&&v(l[c])?Math.pow(a[c]-l[c],2):null;q=v(a[g])&&v(l[g])?
Math.pow(a[g]-l[g],2):null;q=(n||0)+(q||0);l.dist=v(q)?Math.sqrt(q):Number.MAX_VALUE;l.distX=v(n)?Math.sqrt(n):Number.MAX_VALUE;k=a[k]-l[k];q=0>k?"left":"right";n=0>k?"right":"left";b[q]&&(q=e(a,b[q],d+1,m),u=q[h]<u[h]?q:l);b[n]&&Math.sqrt(k*k)<u[h]&&(a=e(a,b[n],d+1,m),u=a[h]<u[h]?a:u);return u}var f=this,c=this.kdAxisArray[0],g=this.kdAxisArray[1],h=b?"distX":"dist";b=-1<f.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree(d);if(this.kdTree)return e(a,
this.kdTree,b,b)},pointPlacementToXValue:function(){var a=this.options.pointPlacement;"between"===a&&(a=.5);l(a)&&(a*=b(this.options.pointRange||this.xAxis.pointRange));return a}})})(I);(function(a){var y=a.Axis,F=a.Chart,G=a.correctFloat,k=a.defined,c=a.destroyObjectProperties,p=a.format,t=a.objectEach,v=a.pick,w=a.Series;a.StackItem=function(a,c,e,l,k){var d=a.chart.inverted;this.axis=a;this.isNegative=e;this.options=c;this.x=l;this.total=null;this.points={};this.stack=k;this.rightCliff=this.leftCliff=
0;this.alignOptions={align:c.align||(d?e?"left":"right":"center"),verticalAlign:c.verticalAlign||(d?"middle":e?"bottom":"top"),y:v(c.y,d?4:e?14:-6),x:v(c.x,d?e?-6:6:0)};this.textAlign=c.textAlign||(d?e?"right":"left":"center")};a.StackItem.prototype={destroy:function(){c(this,this.axis)},render:function(a){var c=this.axis.chart,e=this.options,l=e.format,l=l?p(l,this,c.time):e.formatter.call(this);this.label?this.label.attr({text:l,visibility:"hidden"}):this.label=c.renderer.text(l,null,null,e.useHTML).css(e.style).attr({align:this.textAlign,
rotation:e.rotation,visibility:"hidden"}).add(a);this.label.labelrank=c.plotHeight},setOffset:function(a,c){var e=this.axis,h=e.chart,n=e.translate(e.usePercentage?100:this.total,0,0,0,1),d=e.translate(0),d=k(n)&&Math.abs(n-d);a=h.xAxis[0].translate(this.x)+a;e=k(n)&&this.getStackBox(h,this,a,n,c,d,e);(c=this.label)&&e&&(c.align(this.alignOptions,null,e),e=c.alignAttr,c[!1===this.options.crop||h.isInsidePlot(e.x,e.y)?"show":"hide"](!0))},getStackBox:function(a,c,e,l,k,d,g){var b=c.axis.reversed,h=
a.inverted;a=g.height+g.pos-(h?a.plotLeft:a.plotTop);c=c.isNegative&&!b||!c.isNegative&&b;return{x:h?c?l:l-d:e,y:h?a-e-k:c?a-l-d:a-l,width:h?d:k,height:h?k:d}}};F.prototype.getStacks=function(){var a=this;a.yAxis.forEach(function(a){a.stacks&&a.hasVisibleSeries&&(a.oldStacks=a.stacks)});a.series.forEach(function(c){!c.options.stacking||!0!==c.visible&&!1!==a.options.chart.ignoreHiddenSeries||(c.stackKey=c.type+v(c.options.stack,""))})};y.prototype.buildStacks=function(){var a=this.series,c=v(this.options.reversedStacks,
!0),e=a.length,l;if(!this.isXAxis){this.usePercentage=!1;for(l=e;l--;)a[c?l:e-l-1].setStackedPoints();for(l=0;l<e;l++)a[l].modifyStacks()}};y.prototype.renderStackTotals=function(){var a=this.chart,c=a.renderer,e=this.stacks,l=this.stackTotalGroup;l||(this.stackTotalGroup=l=c.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());l.translate(a.plotLeft,a.plotTop);t(e,function(a){t(a,function(a){a.render(l)})})};y.prototype.resetStacks=function(){var a=this,c=a.stacks;a.isXAxis||t(c,function(e){t(e,
function(c,h){c.touched<a.stacksTouched?(c.destroy(),delete e[h]):(c.total=null,c.cumulative=null)})})};y.prototype.cleanStacks=function(){var a;this.isXAxis||(this.oldStacks&&(a=this.stacks=this.oldStacks),t(a,function(a){t(a,function(a){a.cumulative=a.total})}))};w.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var c=this.processedXData,h=this.processedYData,e=[],l=h.length,n=this.options,d=n.threshold,g=v(n.startFromThreshold&&
d,0),b=n.stack,n=n.stacking,x=this.stackKey,u="-"+x,p=this.negStacks,t=this.yAxis,B=t.stacks,m=t.oldStacks,z,D,A,f,q,w,y;t.stacksTouched+=1;for(q=0;q<l;q++)w=c[q],y=h[q],z=this.getStackIndicator(z,w,this.index),f=z.key,A=(D=p&&y<(g?0:d))?u:x,B[A]||(B[A]={}),B[A][w]||(m[A]&&m[A][w]?(B[A][w]=m[A][w],B[A][w].total=null):B[A][w]=new a.StackItem(t,t.options.stackLabels,D,w,b)),A=B[A][w],null!==y?(A.points[f]=A.points[this.index]=[v(A.cumulative,g)],k(A.cumulative)||(A.base=f),A.touched=t.stacksTouched,
0<z.index&&!1===this.singleStacks&&(A.points[f][0]=A.points[this.index+","+w+",0"][0])):A.points[f]=A.points[this.index]=null,"percent"===n?(D=D?x:u,p&&B[D]&&B[D][w]?(D=B[D][w],A.total=D.total=Math.max(D.total,A.total)+Math.abs(y)||0):A.total=G(A.total+(Math.abs(y)||0))):A.total=G(A.total+(y||0)),A.cumulative=v(A.cumulative,g)+(y||0),null!==y&&(A.points[f].push(A.cumulative),e[q]=A.cumulative);"percent"===n&&(t.usePercentage=!0);this.stackedYData=e;t.oldStacks={}}};w.prototype.modifyStacks=function(){var a=
this,c=a.stackKey,e=a.yAxis.stacks,l=a.processedXData,k,d=a.options.stacking;a[d+"Stacker"]&&[c,"-"+c].forEach(function(c){for(var b=l.length,g,h;b--;)if(g=l[b],k=a.getStackIndicator(k,g,a.index,c),h=(g=e[c]&&e[c][g])&&g.points[k.key])a[d+"Stacker"](h,g,b)})};w.prototype.percentStacker=function(a,c,e){c=c.total?100/c.total:0;a[0]=G(a[0]*c);a[1]=G(a[1]*c);this.stackedYData[e]=a[1]};w.prototype.getStackIndicator=function(a,c,e,l){!k(a)||a.x!==c||l&&a.key!==l?a={x:c,index:0,key:l}:a.index++;a.key=[e,
c,a.index].join();return a}})(I);(function(a){var y=a.addEvent,F=a.animate,G=a.Axis,k=a.Chart,c=a.createElement,p=a.css,t=a.defined,v=a.erase,w=a.extend,r=a.fireEvent,h=a.isNumber,e=a.isObject,l=a.isArray,n=a.merge,d=a.objectEach,g=a.pick,b=a.Point,x=a.Series,u=a.seriesTypes,H=a.setAnimation,E=a.splat;a.cleanRecursively=function(b,c){var g={};d(b,function(d,h){if(e(b[h],!0)&&c[h])d=a.cleanRecursively(b[h],c[h]),Object.keys(d).length&&(g[h]=d);else if(e(b[h])||b[h]!==c[h])g[h]=b[h]});return g};w(k.prototype,
{addSeries:function(a,b,d){var e,c=this;a&&(b=g(b,!0),r(c,"addSeries",{options:a},function(){e=c.initSeries(a);c.isDirtyLegend=!0;c.linkSeries();r(c,"afterAddSeries");b&&c.redraw(d)}));return e},addAxis:function(a,b,d,e){var c=b?"xAxis":"yAxis",f=this.options;a=n(a,{index:this[c].length,isX:b});b=new G(this,a);f[c]=E(f[c]||{});f[c].push(a);g(d,!0)&&this.redraw(e);return b},showLoading:function(a){var b=this,d=b.options,e=b.loadingDiv,g=d.loading,f=function(){e&&p(e,{left:b.plotLeft+"px",top:b.plotTop+
"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};e||(b.loadingDiv=e=c("div",{className:"highcharts-loading highcharts-loading-hidden"},null,b.container),b.loadingSpan=c("span",{className:"highcharts-loading-inner"},null,e),y(b,"redraw",f));e.className="highcharts-loading";b.loadingSpan.innerHTML=a||d.lang.loading;b.styledMode||(p(e,w(g.style,{zIndex:10})),p(b.loadingSpan,g.labelStyle),b.loadingShown||(p(e,{opacity:0,display:""}),F(e,{opacity:g.style.opacity||.5},{duration:g.showDuration||0})));
b.loadingShown=!0;f()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",this.styledMode||F(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){p(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),collectionsWithUpdate:"xAxis yAxis zAxis series colorAxis pane".split(" "),update:function(b,e,c,l){var m=this,f={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle"},k,u,p,x=[];r(m,"update",{options:b});b.isResponsiveOptions||m.setResponsive(!1,!0);b=a.cleanRecursively(b,m.options);if(k=b.chart){n(!0,m.options.chart,k);"className"in k&&m.setClassName(k.className);
"reflow"in k&&m.setReflow(k.reflow);if("inverted"in k||"polar"in k||"type"in k)m.propFromSeries(),u=!0;"alignTicks"in k&&(u=!0);d(k,function(a,b){-1!==m.propsRequireUpdateSeries.indexOf("chart."+b)&&(p=!0);-1!==m.propsRequireDirtyBox.indexOf(b)&&(m.isDirtyBox=!0)});!m.styledMode&&"style"in k&&m.renderer.setStyle(k.style)}!m.styledMode&&b.colors&&(this.options.colors=b.colors);b.plotOptions&&n(!0,this.options.plotOptions,b.plotOptions);d(b,function(a,b){if(m[b]&&"function"===typeof m[b].update)m[b].update(a,
!1);else if("function"===typeof m[f[b]])m[f[b]](a);"chart"!==b&&-1!==m.propsRequireUpdateSeries.indexOf(b)&&(p=!0)});this.collectionsWithUpdate.forEach(function(a){var d;b[a]&&("series"===a&&(d=[],m[a].forEach(function(a,b){a.options.isInternal||d.push(g(a.options.index,b))})),E(b[a]).forEach(function(b,f){(f=t(b.id)&&m.get(b.id)||m[a][d?d[f]:f])&&f.coll===a&&(f.update(b,!1),c&&(f.touched=!0));if(!f&&c)if("series"===a)m.addSeries(b,!1).touched=!0;else if("xAxis"===a||"yAxis"===a)m.addAxis(b,"xAxis"===
a,!1).touched=!0}),c&&m[a].forEach(function(a){a.touched||a.options.isInternal?delete a.touched:x.push(a)}))});x.forEach(function(a){a.remove&&a.remove(!1)});u&&m.axes.forEach(function(a){a.update({},!1)});p&&m.series.forEach(function(a){a.update({},!1)});b.loading&&n(!0,m.options.loading,b.loading);u=k&&k.width;k=k&&k.height;h(u)&&u!==m.chartWidth||h(k)&&k!==m.chartHeight?m.setSize(u,k,l):g(e,!0)&&m.redraw(l);r(m,"afterUpdate",{options:b})},setSubtitle:function(a){this.setTitle(void 0,a)}});w(b.prototype,
{update:function(a,b,d,c){function h(){f.applyOptions(a);null===f.y&&l&&(f.graphic=l.destroy());e(a,!0)&&(l&&l.element&&a&&a.marker&&void 0!==a.marker.symbol&&(f.graphic=l.destroy()),a&&a.dataLabels&&f.dataLabel&&(f.dataLabel=f.dataLabel.destroy()),f.connector&&(f.connector=f.connector.destroy()));k=f.index;m.updateParallelArrays(f,k);u.data[k]=e(u.data[k],!0)||e(a,!0)?f.options:g(a,u.data[k]);m.isDirty=m.isDirtyData=!0;!m.fixedBox&&m.hasCartesianSeries&&(n.isDirtyBox=!0);"point"===u.legendType&&
(n.isDirtyLegend=!0);b&&n.redraw(d)}var f=this,m=f.series,l=f.graphic,k,n=m.chart,u=m.options;b=g(b,!0);!1===c?h():f.firePointEvent("update",{options:a},h)},remove:function(a,b){this.series.removePoint(this.series.data.indexOf(this),a,b)}});w(x.prototype,{addPoint:function(a,b,d,e){var c=this.options,f=this.data,h=this.chart,m=this.xAxis,m=m&&m.hasNames&&m.names,l=c.data,k,n,u=this.xData,p,r;b=g(b,!0);k={series:this};this.pointClass.prototype.applyOptions.apply(k,[a]);r=k.x;p=u.length;if(this.requireSorting&&
r<u[p-1])for(n=!0;p&&u[p-1]>r;)p--;this.updateParallelArrays(k,"splice",p,0,0);this.updateParallelArrays(k,p);m&&k.name&&(m[r]=k.name);l.splice(p,0,a);n&&(this.data.splice(p,0,null),this.processData());"point"===c.legendType&&this.generatePoints();d&&(f[0]&&f[0].remove?f[0].remove(!1):(f.shift(),this.updateParallelArrays(k,"shift"),l.shift()));this.isDirtyData=this.isDirty=!0;b&&h.redraw(e)},removePoint:function(a,b,d){var e=this,c=e.data,f=c[a],h=e.points,m=e.chart,l=function(){h&&h.length===c.length&&
h.splice(a,1);c.splice(a,1);e.options.data.splice(a,1);e.updateParallelArrays(f||{series:e},"splice",a,1);f&&f.destroy();e.isDirty=!0;e.isDirtyData=!0;b&&m.redraw()};H(d,m);b=g(b,!0);f?f.firePointEvent("remove",null,l):l()},remove:function(a,b,d,e){function c(){f.destroy(e);f.remove=null;h.isDirtyLegend=h.isDirtyBox=!0;h.linkSeries();g(a,!0)&&h.redraw(b)}var f=this,h=f.chart;!1!==d?r(f,"remove",null,c):c()},update:function(b,d){b=a.cleanRecursively(b,this.userOptions);var e=this,c=e.chart,h=e.userOptions,
f=e.initialType||e.type,m=b.type||h.type||c.options.chart.type,l=u[f].prototype,k,p=["group","markerGroup","dataLabelsGroup"],x=["navigatorSeries","baseSeries"],t=e.finishedAnimating&&{animation:!1},v=["data","name","turboThreshold"],B=Object.keys(b),E=0<B.length;B.forEach(function(a){-1===v.indexOf(a)&&(E=!1)});if(E)b.data&&this.setData(b.data,!1),b.name&&this.setName(b.name,!1);else{x=p.concat(x);x.forEach(function(a){x[a]=e[a];delete e[a]});b=n(h,t,{index:e.index,pointStart:g(h.pointStart,e.xData[0])},
{data:e.options.data},b);e.remove(!1,null,!1,!0);for(k in l)e[k]=void 0;u[m||f]?w(e,u[m||f].prototype):a.error(17,!0,c);x.forEach(function(a){e[a]=x[a]});e.init(c,b);b.zIndex!==h.zIndex&&p.forEach(function(a){e[a]&&e[a].attr({zIndex:b.zIndex})});e.initialType=f;c.linkSeries()}r(this,"afterUpdate");g(d,!0)&&c.redraw(E?void 0:!1)},setName:function(a){this.name=this.options.name=this.userOptions.name=a;this.chart.isDirtyLegend=!0}});w(G.prototype,{update:function(a,b){var e=this.chart,c=a&&a.events||
{};a=n(this.userOptions,a);e.options[this.coll].indexOf&&(e.options[this.coll][e.options[this.coll].indexOf(this.userOptions)]=a);d(e.options[this.coll].events,function(a,b){"undefined"===typeof c[b]&&(c[b]=void 0)});this.destroy(!0);this.init(e,w(a,{events:c}));e.isDirtyBox=!0;g(b,!0)&&e.redraw()},remove:function(a){for(var b=this.chart,d=this.coll,e=this.series,c=e.length;c--;)e[c]&&e[c].remove(!1);v(b.axes,this);v(b[d],this);l(b.options[d])?b.options[d].splice(this.options.index,1):delete b.options[d];
b[d].forEach(function(a,b){a.options.index=a.userOptions.index=b});this.destroy();b.isDirtyBox=!0;g(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}})})(I);(function(a){var y=a.color,F=a.pick,G=a.Series,k=a.seriesType;k("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(c){var k=[],t=[],v=this.xAxis,w=this.yAxis,r=w.stacks[this.stackKey],h={},e=this.index,l=w.series,n=l.length,d,g=F(w.options.reversedStacks,
!0)?1:-1,b;c=c||this.points;if(this.options.stacking){for(b=0;b<c.length;b++)c[b].leftNull=c[b].rightNull=null,h[c[b].x]=c[b];a.objectEach(r,function(a,b){null!==a.total&&t.push(b)});t.sort(function(a,b){return a-b});d=l.map(function(a){return a.visible});t.forEach(function(a,c){var l=0,u,p;if(h[a]&&!h[a].isNull)k.push(h[a]),[-1,1].forEach(function(l){var k=1===l?"rightNull":"leftNull",m=0,x=r[t[c+l]];if(x)for(b=e;0<=b&&b<n;)u=x.points[b],u||(b===e?h[a][k]=!0:d[b]&&(p=r[a].points[b])&&(m-=p[1]-p[0])),
b+=g;h[a][1===l?"rightCliff":"leftCliff"]=m});else{for(b=e;0<=b&&b<n;){if(u=r[a].points[b]){l=u[1];break}b+=g}l=w.translate(l,0,1,0,1);k.push({isNull:!0,plotX:v.translate(a,0,0,0,1),x:a,plotY:l,yBottom:l})}})}return k},getGraphPath:function(a){var c=G.prototype.getGraphPath,k=this.options,v=k.stacking,w=this.yAxis,r,h,e=[],l=[],n=this.index,d,g=w.stacks[this.stackKey],b=k.threshold,x=w.getThreshold(k.threshold),u,k=k.connectNulls||"percent"===v,H=function(c,h,k){var m=a[c];c=v&&g[m.x].points[n];var u=
m[k+"Null"]||0;k=m[k+"Cliff"]||0;var p,f,m=!0;k||u?(p=(u?c[0]:c[1])+k,f=c[0]+k,m=!!u):!v&&a[h]&&a[h].isNull&&(p=f=b);void 0!==p&&(l.push({plotX:d,plotY:null===p?x:w.getThreshold(p),isNull:m,isCliff:!0}),e.push({plotX:d,plotY:null===f?x:w.getThreshold(f),doCurve:!1}))};a=a||this.points;v&&(a=this.getStackPoints(a));for(r=0;r<a.length;r++)if(h=a[r].isNull,d=F(a[r].rectPlotX,a[r].plotX),u=F(a[r].yBottom,x),!h||k)k||H(r,r-1,"left"),h&&!v&&k||(l.push(a[r]),e.push({x:r,plotX:d,plotY:u})),k||H(r,r+1,"right");
r=c.call(this,l,!0,!0);e.reversed=!0;h=c.call(this,e,!0,!0);h.length&&(h[0]="L");h=r.concat(h);c=c.call(this,l,!1,k);h.xMap=r.xMap;this.areaPath=h;return c},drawGraph:function(){this.areaPath=[];G.prototype.drawGraph.apply(this);var a=this,k=this.areaPath,t=this.options,v=[["area","highcharts-area",this.color,t.fillColor]];this.zones.forEach(function(c,k){v.push(["zone-area-"+k,"highcharts-area highcharts-zone-area-"+k+" "+c.className,c.color||a.color,c.fillColor||t.fillColor])});v.forEach(function(c){var p=
c[0],h=a[p];h?(h.endX=a.preventGraphAnimation?null:k.xMap,h.animate({d:k})):(h={zIndex:0},a.chart.styledMode||(h.fill=F(c[3],y(c[2]).setOpacity(F(t.fillOpacity,.75)).get())),h=a[p]=a.chart.renderer.path(k).addClass(c[1]).attr(h).add(a.group),h.isArea=!0);h.startX=k.xMap;h.shiftUnit=t.step?2:1})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(I);(function(a){var y=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,G,k){var c=G.plotX,p=G.plotY,t=a[k-1];k=a[k+1];var v,w,r,
h;if(t&&!t.isNull&&!1!==t.doCurve&&!G.isCliff&&k&&!k.isNull&&!1!==k.doCurve&&!G.isCliff){a=t.plotY;r=k.plotX;k=k.plotY;var e=0;v=(1.5*c+t.plotX)/2.5;w=(1.5*p+a)/2.5;r=(1.5*c+r)/2.5;h=(1.5*p+k)/2.5;r!==v&&(e=(h-w)*(r-c)/(r-v)+p-h);w+=e;h+=e;w>a&&w>p?(w=Math.max(a,p),h=2*p-w):w<a&&w<p&&(w=Math.min(a,p),h=2*p-w);h>k&&h>p?(h=Math.max(k,p),w=2*p-h):h<k&&h<p&&(h=Math.min(k,p),w=2*p-h);G.rightContX=r;G.rightContY=h}G=["C",y(t.rightContX,t.plotX),y(t.rightContY,t.plotY),y(v,c),y(w,p),c,p];t.rightContX=t.rightContY=
null;return G}})})(I);(function(a){var y=a.seriesTypes.area.prototype,F=a.seriesType;F("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:y.getStackPoints,getGraphPath:y.getGraphPath,drawGraph:y.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(I);(function(a){var y=a.animObject,F=a.color,G=a.extend,k=a.defined,c=a.isNumber,p=a.merge,t=a.pick,v=a.Series,w=a.seriesType,r=a.svg;w("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,
cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},select:{color:"#cccccc",borderColor:"#000000"}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){v.prototype.init.apply(this,arguments);var a=this,e=a.chart;e.hasRendered&&e.series.forEach(function(e){e.type===a.type&&
(e.isDirty=!0)})},getColumnMetrics:function(){var a=this,e=a.options,c=a.xAxis,k=a.yAxis,d=c.options.reversedStacks,d=c.reversed&&!d||!c.reversed&&d,g,b={},p=0;!1===e.grouping?p=1:a.chart.series.forEach(function(d){var e=d.options,c=d.yAxis,h;d.type!==a.type||!d.visible&&a.chart.options.chart.ignoreHiddenSeries||k.len!==c.len||k.pos!==c.pos||(e.stacking?(g=d.stackKey,void 0===b[g]&&(b[g]=p++),h=b[g]):!1!==e.grouping&&(h=p++),d.columnIndex=h)});var u=Math.min(Math.abs(c.transA)*(c.ordinalSlope||e.pointRange||
c.closestPointRange||c.tickInterval||1),c.len),r=u*e.groupPadding,v=(u-2*r)/(p||1),e=Math.min(e.maxPointWidth||c.len,t(e.pointWidth,v*(1-2*e.pointPadding)));a.columnMetrics={width:e,offset:(v-e)/2+(r+((a.columnIndex||0)+(d?1:0))*v-u/2)*(d?-1:1)};return a.columnMetrics},crispCol:function(a,e,c,k){var d=this.chart,g=this.borderWidth,b=-(g%2?.5:0),g=g%2?.5:1;d.inverted&&d.renderer.isVML&&(g+=1);this.options.crisp&&(c=Math.round(a+c)+b,a=Math.round(a)+b,c-=a);k=Math.round(e+k)+g;b=.5>=Math.abs(e)&&.5<
k;e=Math.round(e)+g;k-=e;b&&k&&(--e,k+=1);return{x:a,y:e,width:c,height:k}},translate:function(){var a=this,e=a.chart,c=a.options,n=a.dense=2>a.closestPointRange*a.xAxis.transA,n=a.borderWidth=t(c.borderWidth,n?0:1),d=a.yAxis,g=c.threshold,b=a.translatedThreshold=d.getThreshold(g),p=t(c.minPointLength,5),u=a.getColumnMetrics(),r=u.width,E=a.barW=Math.max(r,1+2*n),B=a.pointXOffset=u.offset;e.inverted&&(b-=.5);c.pointPadding&&(E=Math.ceil(E));v.prototype.translate.apply(a);a.points.forEach(function(c){var h=
t(c.yBottom,b),l=999+Math.abs(h),m=r,l=Math.min(Math.max(-l,c.plotY),d.len+l),f=c.plotX+B,n=E,u=Math.min(l,h),x,v=Math.max(l,h)-u;p&&Math.abs(v)<p&&(v=p,x=!d.reversed&&!c.negative||d.reversed&&c.negative,c.y===g&&a.dataMax<=g&&d.min<g&&(x=!x),u=Math.abs(u-b)>p?h-p:b-(x?p:0));k(c.options.pointWidth)&&(m=n=Math.ceil(c.options.pointWidth),f-=Math.round((m-r)/2));c.barX=f;c.pointWidth=m;c.tooltipPos=e.inverted?[d.len+d.pos-e.plotLeft-l,a.xAxis.len-f-n/2,v]:[f+n/2,l+d.pos-e.plotTop,v];c.shapeType=c.shapeType||
"rect";c.shapeArgs=a.crispCol.apply(a,c.isNull?[f,b,n,0]:[f,u,n,v])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(a,e){var c=this.options,h,d=this.pointAttrToOptions||{};h=d.stroke||"borderColor";var g=d["stroke-width"]||"borderWidth",b=a&&a.color||this.color,k=a&&a[h]||c[h]||this.color||b,u=a&&a[g]||c[g]||this[g]||0,d=c.dashStyle;a&&this.zones.length&&(b=a.getZone(),
b=a.options.color||b&&b.color||this.color);e&&(a=p(c.states[e],a.options.states&&a.options.states[e]||{}),e=a.brightness,b=a.color||void 0!==e&&F(b).brighten(a.brightness).get()||b,k=a[h]||k,u=a[g]||u,d=a.dashStyle||d);h={fill:b,stroke:k,"stroke-width":u};d&&(h.dashstyle=d);return h},drawPoints:function(){var a=this,e=this.chart,k=a.options,n=e.renderer,d=k.animationLimit||250,g;a.points.forEach(function(b){var h=b.graphic,l=h&&e.pointCount<d?"animate":"attr";if(c(b.plotY)&&null!==b.y){g=b.shapeArgs;
if(h)h[l](p(g));else b.graphic=h=n[b.shapeType](g).add(b.group||a.group);k.borderRadius&&h.attr({r:k.borderRadius});e.styledMode||h[l](a.pointAttribs(b,b.selected&&"select")).shadow(k.shadow,null,k.stacking&&!k.borderRadius);h.addClass(b.getClassName(),!0)}else h&&(b.graphic=h.destroy())})},animate:function(a){var e=this,c=this.yAxis,h=e.options,d=this.chart.inverted,g={},b=d?"translateX":"translateY",k;r&&(a?(g.scaleY=.001,a=Math.min(c.pos+c.len,Math.max(c.pos,c.toPixels(h.threshold))),d?g.translateX=
a-c.len:g.translateY=a,e.clipBox&&e.setClip(),e.group.attr(g)):(k=e.group.attr(b),e.group.animate({scaleY:1},G(y(e.options.animation),{step:function(a,d){g[b]=k+d.pos*(c.pos-k);e.group.attr(g)}})),e.animate=null))},remove:function(){var a=this,e=a.chart;e.hasRendered&&e.series.forEach(function(e){e.type===a.type&&(e.isDirty=!0)});v.prototype.remove.apply(a,arguments)}})})(I);(function(a){a=a.seriesType;a("bar","column",null,{inverted:!0})})(I);(function(a){var y=a.Series,F=a.seriesType;F("scatter",
"line",{lineWidth:0,findNearestPointBy:"xy",jitter:{x:0,y:0},marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 10px"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&
y.prototype.drawGraph.call(this)},applyJitter:function(){var a=this,k=this.options.jitter,c=this.points.length;k&&this.points.forEach(function(p,t){["x","y"].forEach(function(v,w){var r,h="plot"+v.toUpperCase(),e,l;k[v]&&!p.isNull&&(r=a[v+"Axis"],l=k[v]*r.transA,r&&!r.isLog&&(e=Math.max(0,p[h]-l),r=Math.min(r.len,p[h]+l),w=1E4*Math.sin(t+w*c),p[h]=e+(r-e)*(w-Math.floor(w)),"x"===v&&(p.clientX=p.plotX)))})})}});a.addEvent(y,"afterTranslate",function(){this.applyJitter&&this.applyJitter()})})(I);(function(a){var y=
a.deg2rad,F=a.isNumber,G=a.pick,k=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,p=this.chart,t=2*(a.slicedOffset||0),v=p.plotWidth-2*t,p=p.plotHeight-2*t,w=a.center,w=[G(w[0],"50%"),G(w[1],"50%"),a.size||"100%",a.innerSize||0],r=Math.min(v,p),h,e;for(h=0;4>h;++h)e=w[h],a=2>h||2===h&&/%$/.test(e),w[h]=k(e,[v,p,r,w[2]][h])+(a?t:0);w[3]>w[2]&&(w[3]=w[2]);return w},getStartAndEndRadians:function(a,k){a=F(a)?a:0;k=F(k)&&k>a&&360>k-a?k:a+360;return{start:y*(a+-90),end:y*
(k+-90)}}}})(I);(function(a){var y=a.addEvent,F=a.CenteredSeriesMixin,G=a.defined,k=a.extend,c=F.getStartAndEndRadians,p=a.noop,t=a.pick,v=a.Point,w=a.Series,r=a.seriesType,h=a.setAnimation;r("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{allowOverlap:!0,connectorPadding:5,distance:30,enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},softConnector:!0,x:0,connectorShape:"fixedOffset",crookDistance:"70%"},ignoreHiddenPoint:!0,legendType:"point",marker:null,
size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var e=this,c=e.points,d=e.startAngleRad;a||(c.forEach(function(a){var b=a.graphic,c=a.shapeArgs;b&&(b.attr({r:a.startR||e.center[3]/2,start:d,end:d}),
b.animate({r:c.r,start:c.start,end:c.end},e.options.animation))}),e.animate=null)},updateTotals:function(){var a,c=0,h=this.points,d=h.length,g,b=this.options.ignoreHiddenPoint;for(a=0;a<d;a++)g=h[a],c+=b&&!g.visible?0:g.isNull?0:g.y;this.total=c;for(a=0;a<d;a++)g=h[a],g.percentage=0<c&&(g.visible||!b)?g.y/c*100:0,g.total=c},generatePoints:function(){w.prototype.generatePoints.call(this);this.updateTotals()},getX:function(a,c,h){var d=this.center,e=this.radii?this.radii[h.index]:d[2]/2;return d[0]+
(c?-1:1)*Math.cos(Math.asin(Math.max(Math.min((a-d[1])/(e+h.labelDistance),1),-1)))*(e+h.labelDistance)+(0<h.labelDistance?(c?-1:1)*this.options.dataLabels.padding:0)},translate:function(a){this.generatePoints();var e=0,h=this.options,d=h.slicedOffset,g=d+(h.borderWidth||0),b,k,u=c(h.startAngle,h.endAngle),p=this.startAngleRad=u.start,u=(this.endAngleRad=u.end)-p,r=this.points,v,m,z=h.dataLabels.distance,h=h.ignoreHiddenPoint,w,A=r.length,f;a||(this.center=a=this.getCenter());for(w=0;w<A;w++){f=r[w];
f.labelDistance=t(f.options.dataLabels&&f.options.dataLabels.distance,z);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,f.labelDistance);b=p+e*u;if(!h||f.visible)e+=f.percentage/100;k=p+e*u;f.shapeType="arc";f.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*b)/1E3,end:Math.round(1E3*k)/1E3};k=(k+b)/2;k>1.5*Math.PI?k-=2*Math.PI:k<-Math.PI/2&&(k+=2*Math.PI);f.slicedTranslation={translateX:Math.round(Math.cos(k)*d),translateY:Math.round(Math.sin(k)*d)};v=Math.cos(k)*a[2]/
2;m=Math.sin(k)*a[2]/2;f.tooltipPos=[a[0]+.7*v,a[1]+.7*m];f.half=k<-Math.PI/2||k>Math.PI/2?1:0;f.angle=k;b=Math.min(g,f.labelDistance/5);f.labelPosition={natural:{x:a[0]+v+Math.cos(k)*f.labelDistance,y:a[1]+m+Math.sin(k)*f.labelDistance},"final":{},alignment:0>f.labelDistance?"center":f.half?"right":"left",connectorPosition:{breakAt:{x:a[0]+v+Math.cos(k)*b,y:a[1]+m+Math.sin(k)*b},touchingSliceAt:{x:a[0]+v,y:a[1]+m}}}}},drawGraph:null,drawPoints:function(){var a=this,c=a.chart,h=c.renderer,d,g,b,p,
u=a.options.shadow;!u||a.shadowGroup||c.styledMode||(a.shadowGroup=h.g("shadow").add(a.group));a.points.forEach(function(e){g=e.graphic;if(e.isNull)g&&(e.graphic=g.destroy());else{p=e.shapeArgs;d=e.getTranslate();if(!c.styledMode){var l=e.shadowGroup;u&&!l&&(l=e.shadowGroup=h.g("shadow").add(a.shadowGroup));l&&l.attr(d);b=a.pointAttribs(e,e.selected&&"select")}g?(g.setRadialReference(a.center),c.styledMode||g.attr(b),g.animate(k(p,d))):(e.graphic=g=h[e.shapeType](p).setRadialReference(a.center).attr(d).add(a.group),
c.styledMode||g.attr(b).attr({"stroke-linejoin":"round"}).shadow(u,l));g.attr({visibility:e.visible?"inherit":"hidden"});g.addClass(e.getClassName())}})},searchPoint:p,sortByAngle:function(a,c){a.sort(function(a,d){return void 0!==a.angle&&(d.angle-a.angle)*c})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,getCenter:F.getCenter,getSymbol:p},{init:function(){v.prototype.init.apply(this,arguments);var a=this,c;a.name=t(a.name,"Slice");c=function(e){a.slice("select"===e.type)};y(a,"select",c);
y(a,"unselect",c);return a},isValid:function(){return a.isNumber(this.y,!0)&&0<=this.y},setVisible:function(a,c){var e=this,d=e.series,g=d.chart,b=d.options.ignoreHiddenPoint;c=t(c,b);a!==e.visible&&(e.visible=e.options.visible=a=void 0===a?!e.visible:a,d.options.data[d.data.indexOf(e)]=e.options,["graphic","dataLabel","connector","shadowGroup"].forEach(function(b){if(e[b])e[b][a?"show":"hide"](!0)}),e.legendItem&&g.legend.colorizeItem(e,a),a||"hover"!==e.state||e.setState(""),b&&(d.isDirty=!0),c&&
g.redraw())},slice:function(a,c,k){var d=this.series;h(k,d.chart);t(c,!0);this.sliced=this.options.sliced=G(a)?a:!this.sliced;d.options.data[d.data.indexOf(this)]=this.options;this.graphic.animate(this.getTranslate());this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(a){var e=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(e.x,e.y,
e.r+a,e.r+a,{innerR:this.shapeArgs.r-1,start:e.start,end:e.end})},connectorShapes:{fixedOffset:function(a,c,h){var d=c.breakAt;c=c.touchingSliceAt;return["M",a.x,a.y].concat(h.softConnector?["C",a.x+("left"===a.alignment?-5:5),a.y,2*d.x-c.x,2*d.y-c.y,d.x,d.y]:["L",d.x,d.y]).concat(["L",c.x,c.y])},straight:function(a,c){c=c.touchingSliceAt;return["M",a.x,a.y,"L",c.x,c.y]},crookedLine:function(e,c,h){c=c.touchingSliceAt;var d=this.series,g=d.center[0],b=d.chart.plotWidth,k=d.chart.plotLeft,d=e.alignment,
l=this.shapeArgs.r;h=a.relativeLength(h.crookDistance,1);h="left"===d?g+l+(b+k-g-l)*(1-h):k+(g-l)*h;g=["L",h,e.y];if("left"===d?h>e.x||h<c.x:h<e.x||h>c.x)g=[];return["M",e.x,e.y].concat(g).concat(["L",c.x,c.y])}},getConnectorPath:function(){var a=this.labelPosition,c=this.series.options.dataLabels,h=c.connectorShape,d=this.connectorShapes;d[h]&&(h=d[h]);return h.call(this,{x:a.final.x,y:a.final.y,alignment:a.alignment},a.connectorPosition,c)}})})(I);(function(a){var y=a.addEvent,F=a.arrayMax,G=a.defined,
k=a.extend,c=a.format,p=a.merge,t=a.noop,v=a.pick,w=a.relativeLength,r=a.Series,h=a.seriesTypes,e=a.stableSort,l=a.isArray,n=a.splat;a.distribute=function(d,c,b){function g(a,b){return a.target-b.target}var h,k=!0,l=d,n=[],m;m=0;var p=l.reducedLen||c;for(h=d.length;h--;)m+=d[h].size;if(m>p){e(d,function(a,b){return(b.rank||0)-(a.rank||0)});for(m=h=0;m<=p;)m+=d[h].size,h++;n=d.splice(h-1,d.length)}e(d,g);for(d=d.map(function(a){return{size:a.size,targets:[a.target],align:v(a.align,.5)}});k;){for(h=
d.length;h--;)k=d[h],m=(Math.min.apply(0,k.targets)+Math.max.apply(0,k.targets))/2,k.pos=Math.min(Math.max(0,m-k.size*k.align),c-k.size);h=d.length;for(k=!1;h--;)0<h&&d[h-1].pos+d[h-1].size>d[h].pos&&(d[h-1].size+=d[h].size,d[h-1].targets=d[h-1].targets.concat(d[h].targets),d[h-1].align=.5,d[h-1].pos+d[h-1].size>c&&(d[h-1].pos=c-d[h-1].size),d.splice(h,1),k=!0)}l.push.apply(l,n);h=0;d.some(function(d){var e=0;if(d.targets.some(function(){l[h].pos=d.pos+e;if(Math.abs(l[h].pos-l[h].target)>b)return l.slice(0,
h+1).forEach(function(a){delete a.pos}),l.reducedLen=(l.reducedLen||c)-.1*c,l.reducedLen>.1*c&&a.distribute(l,c,b),!0;e+=l[h].size;h++}))return!0});e(l,g)};r.prototype.drawDataLabels=function(){function d(a,b){var d=b.filter;return d?(b=d.operator,a=a[d.property],d=d.value,"\x3e"===b&&a>d||"\x3c"===b&&a<d||"\x3e\x3d"===b&&a>=d||"\x3c\x3d"===b&&a<=d||"\x3d\x3d"===b&&a==d||"\x3d\x3d\x3d"===b&&a===d?!0:!1):!0}function e(a,b){var d=[],c;if(l(a)&&!l(b))d=a.map(function(a){return p(a,b)});else if(l(b)&&
!l(a))d=b.map(function(b){return p(a,b)});else if(l(a)||l(b))for(c=Math.max(a.length,b.length);c--;)d[c]=p(a[c],b[c]);else d=p(a,b);return d}var b=this,h=b.chart,k=b.options,r=k.dataLabels,t=b.points,w,m=b.hasRendered||0,z,D=v(r.defer,!!k.animation),A=h.renderer,r=e(e(h.options.plotOptions&&h.options.plotOptions.series&&h.options.plotOptions.series.dataLabels,h.options.plotOptions&&h.options.plotOptions[b.type]&&h.options.plotOptions[b.type].dataLabels),r);a.fireEvent(this,"drawDataLabels");if(l(r)||
r.enabled||b._hasPointLabels)z=b.plotGroup("dataLabelsGroup","data-labels",D&&!m?"hidden":"visible",r.zIndex||6),D&&(z.attr({opacity:+m}),m||y(b,"afterAnimate",function(){b.visible&&z.show(!0);z[k.animation?"animate":"attr"]({opacity:1},{duration:200})})),t.forEach(function(f){w=n(e(r,f.dlOptions||f.options&&f.options.dataLabels));w.forEach(function(e,g){var m=e.enabled&&!f.isNull&&d(f,e),l,n,q,u,p=f.dataLabels?f.dataLabels[g]:f.dataLabel,r=f.connectors?f.connectors[g]:f.connector,t=!p;m&&(l=f.getLabelConfig(),
n=e[f.formatPrefix+"Format"]||e.format,l=G(n)?c(n,l,h.time):(e[f.formatPrefix+"Formatter"]||e.formatter).call(l,e),n=e.style,q=e.rotation,h.styledMode||(n.color=v(e.color,n.color,b.color,"#000000"),"contrast"===n.color&&(f.contrastColor=A.getContrast(f.color||b.color),n.color=e.inside||0>v(e.distance,f.labelDistance)||k.stacking?f.contrastColor:"#000000"),k.cursor&&(n.cursor=k.cursor)),u={r:e.borderRadius||0,rotation:q,padding:e.padding,zIndex:1},h.styledMode||(u.fill=e.backgroundColor,u.stroke=e.borderColor,
u["stroke-width"]=e.borderWidth),a.objectEach(u,function(a,b){void 0===a&&delete u[b]}));!p||m&&G(l)?m&&G(l)&&(p?u.text=l:(f.dataLabels=f.dataLabels||[],p=f.dataLabels[g]=q?A.text(l,0,-9999).addClass("highcharts-data-label"):A.label(l,0,-9999,e.shape,null,null,e.useHTML,null,"data-label"),g||(f.dataLabel=p),p.addClass(" highcharts-data-label-color-"+f.colorIndex+" "+(e.className||"")+(e.useHTML?" highcharts-tracker":""))),p.options=e,p.attr(u),h.styledMode||p.css(n).shadow(e.shadow),p.added||p.add(z),
b.alignDataLabel(f,p,e,null,t)):(f.dataLabel=f.dataLabel&&f.dataLabel.destroy(),f.dataLabels&&(1===f.dataLabels.length?delete f.dataLabels:delete f.dataLabels[g]),g||delete f.dataLabel,r&&(f.connector=f.connector.destroy(),f.connectors&&(1===f.connectors.length?delete f.connectors:delete f.connectors[g])))})});a.fireEvent(this,"afterDrawDataLabels")};r.prototype.alignDataLabel=function(a,e,b,c,h){var d=this.chart,g=this.isCartesian&&d.inverted,l=v(a.dlBox&&a.dlBox.centerX,a.plotX,-9999),m=v(a.plotY,
-9999),n=e.getBBox(),u,p=b.rotation,f=b.align,q=this.visible&&(a.series.forceDL||d.isInsidePlot(l,Math.round(m),g)||c&&d.isInsidePlot(l,g?c.x+1:c.y+c.height-1,g)),r="justify"===v(b.overflow,"justify");if(q&&(u=d.renderer.fontMetrics(d.styledMode?void 0:b.style.fontSize,e).b,c=k({x:g?this.yAxis.len-m:l,y:Math.round(g?this.xAxis.len-l:m),width:0,height:0},c),k(b,{width:n.width,height:n.height}),p?(r=!1,l=d.renderer.rotCorr(u,p),l={x:c.x+b.x+c.width/2+l.x,y:c.y+b.y+{top:0,middle:.5,bottom:1}[b.verticalAlign]*
c.height},e[h?"attr":"animate"](l).attr({align:f}),m=(p+720)%360,m=180<m&&360>m,"left"===f?l.y-=m?n.height:0:"center"===f?(l.x-=n.width/2,l.y-=n.height/2):"right"===f&&(l.x-=n.width,l.y-=m?0:n.height),e.placed=!0,e.alignAttr=l):(e.align(b,null,c),l=e.alignAttr),r&&0<=c.height?a.isLabelJustified=this.justifyDataLabel(e,b,l,n,c,h):v(b.crop,!0)&&(q=d.isInsidePlot(l.x,l.y)&&d.isInsidePlot(l.x+n.width,l.y+n.height)),b.shape&&!p))e[h?"attr":"animate"]({anchorX:g?d.plotWidth-a.plotY:a.plotX,anchorY:g?d.plotHeight-
a.plotX:a.plotY});q||(e.attr({y:-9999}),e.placed=!1)};r.prototype.justifyDataLabel=function(a,e,b,c,h,k){var d=this.chart,g=e.align,m=e.verticalAlign,l,n,u=a.box?0:a.padding||0;l=b.x+u;0>l&&("right"===g?e.align="left":e.x=-l,n=!0);l=b.x+c.width-u;l>d.plotWidth&&("left"===g?e.align="right":e.x=d.plotWidth-l,n=!0);l=b.y+u;0>l&&("bottom"===m?e.verticalAlign="top":e.y=-l,n=!0);l=b.y+c.height-u;l>d.plotHeight&&("top"===m?e.verticalAlign="bottom":e.y=d.plotHeight-l,n=!0);n&&(a.placed=!k,a.align(e,null,
h));return n};h.pie&&(h.pie.prototype.dataLabelPositioners={radialDistributionY:function(a){return a.top+a.distributeBox.pos},radialDistributionX:function(a,e,b,c){return a.getX(b<e.top+2||b>e.bottom-2?c:b,e.half,e)},justify:function(a,e,b){return b[0]+(a.half?-1:1)*(e+a.labelDistance)},alignToPlotEdges:function(a,e,b,c){a=a.getBBox().width;return e?a+c:b-a-c},alignToConnectors:function(a,e,b,c){var d=0,g;a.forEach(function(a){g=a.dataLabel.getBBox().width;g>d&&(d=g)});return e?d+c:b-d-c}},h.pie.prototype.drawDataLabels=
function(){var d=this,e=d.data,b,c=d.chart,h=d.options.dataLabels,k=h.connectorPadding,l=v(h.connectorWidth,1),n=c.plotWidth,m=c.plotHeight,p=c.plotLeft,t=Math.round(c.chartWidth/3),w,f=d.center,q=f[2]/2,y=f[1],K,I,J,M,R=[[],[]],C,P,N,S,O=[0,0,0,0],W=d.dataLabelPositioners;d.visible&&(h.enabled||d._hasPointLabels)&&(e.forEach(function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),r.prototype.drawDataLabels.apply(d),
e.forEach(function(a){a.dataLabel&&(a.visible?(R[a.half].push(a),a.dataLabel._pos=null,!G(h.style.width)&&!G(a.options.dataLabels&&a.options.dataLabels.style&&a.options.dataLabels.style.width)&&a.dataLabel.getBBox().width>t&&(a.dataLabel.css({width:.7*t}),a.dataLabel.shortened=!0)):(a.dataLabel=a.dataLabel.destroy(),a.dataLabels&&1===a.dataLabels.length&&delete a.dataLabels))}),R.forEach(function(e,g){var l,u,r=e.length,t=[],x;if(r)for(d.sortByAngle(e,g-.5),0<d.maxLabelDistance&&(l=Math.max(0,y-q-
d.maxLabelDistance),u=Math.min(y+q+d.maxLabelDistance,c.plotHeight),e.forEach(function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,y-q-a.labelDistance),a.bottom=Math.min(y+q+a.labelDistance,c.plotHeight),x=a.dataLabel.getBBox().height||21,a.distributeBox={target:a.labelPosition.natural.y-a.top+x/2,size:x,rank:a.y},t.push(a.distributeBox))}),l=u+x-l,a.distribute(t,l,l/5)),S=0;S<r;S++){b=e[S];J=b.labelPosition;K=b.dataLabel;N=!1===b.visible?"hidden":"inherit";P=l=J.natural.y;t&&G(b.distributeBox)&&
(void 0===b.distributeBox.pos?N="hidden":(M=b.distributeBox.size,P=W.radialDistributionY(b)));delete b.positionIndex;if(h.justify)C=W.justify(b,q,f);else switch(h.alignTo){case "connectors":C=W.alignToConnectors(e,g,n,p);break;case "plotEdges":C=W.alignToPlotEdges(K,g,n,p);break;default:C=W.radialDistributionX(d,b,P,l)}K._attr={visibility:N,align:J.alignment};K._pos={x:C+h.x+({left:k,right:-k}[J.alignment]||0),y:P+h.y-10};J.final.x=C;J.final.y=P;v(h.crop,!0)&&(I=K.getBBox().width,l=null,C-I<k&&1===
g?(l=Math.round(I-C+k),O[3]=Math.max(l,O[3])):C+I>n-k&&0===g&&(l=Math.round(C+I-n+k),O[1]=Math.max(l,O[1])),0>P-M/2?O[0]=Math.max(Math.round(-P+M/2),O[0]):P+M/2>m&&(O[2]=Math.max(Math.round(P+M/2-m),O[2])),K.sideOverflow=l)}}),0===F(O)||this.verifyDataLabelOverflow(O))&&(this.placeDataLabels(),l&&this.points.forEach(function(a){var b;w=a.connector;if((K=a.dataLabel)&&K._pos&&a.visible&&0<a.labelDistance){N=K._attr.visibility;if(b=!w)a.connector=w=c.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+
a.colorIndex+(a.className?" "+a.className:"")).add(d.dataLabelsGroup),c.styledMode||w.attr({"stroke-width":l,stroke:h.connectorColor||a.color||"#666666"});w[b?"attr":"animate"]({d:a.getConnectorPath()});w.attr("visibility",N)}else w&&(a.connector=w.destroy())}))},h.pie.prototype.placeDataLabels=function(){this.points.forEach(function(a){var d=a.dataLabel;d&&a.visible&&((a=d._pos)?(d.sideOverflow&&(d._attr.width=d.getBBox().width-d.sideOverflow,d.css({width:d._attr.width+"px",textOverflow:(this.options.dataLabels.style||
{}).textOverflow||"ellipsis"}),d.shortened=!0),d.attr(d._attr),d[d.moved?"animate":"attr"](a),d.moved=!0):d&&d.attr({y:-9999}))},this)},h.pie.prototype.alignDataLabel=t,h.pie.prototype.verifyDataLabelOverflow=function(a){var d=this.center,b=this.options,e=b.center,c=b.minSize||80,h,k=null!==b.size;k||(null!==e[0]?h=Math.max(d[2]-Math.max(a[1],a[3]),c):(h=Math.max(d[2]-a[1]-a[3],c),d[0]+=(a[3]-a[1])/2),null!==e[1]?h=Math.max(Math.min(h,d[2]-Math.max(a[0],a[2])),c):(h=Math.max(Math.min(h,d[2]-a[0]-
a[2]),c),d[1]+=(a[0]-a[2])/2),h<d[2]?(d[2]=h,d[3]=Math.min(w(b.innerSize||0,h),h),this.translate(d),this.drawDataLabels&&this.drawDataLabels()):k=!0);return k});h.column&&(h.column.prototype.alignDataLabel=function(a,e,b,c,h){var d=this.chart.inverted,g=a.series,k=a.dlBox||a.shapeArgs,l=v(a.below,a.plotY>v(this.translatedThreshold,g.yAxis.len)),n=v(b.inside,!!this.options.stacking);k&&(c=p(k),0>c.y&&(c.height+=c.y,c.y=0),k=c.y+c.height-g.yAxis.len,0<k&&(c.height-=k),d&&(c={x:g.yAxis.len-c.y-c.height,
y:g.xAxis.len-c.x-c.width,width:c.height,height:c.width}),n||(d?(c.x+=l?0:c.width,c.width=0):(c.y+=l?c.height:0,c.height=0)));b.align=v(b.align,!d||n?"center":l?"right":"left");b.verticalAlign=v(b.verticalAlign,d||n?"middle":l?"top":"bottom");r.prototype.alignDataLabel.call(this,a,e,b,c,h);a.isLabelJustified&&a.contrastColor&&e.css({color:a.contrastColor})})})(I);(function(a){var y=a.Chart,F=a.isArray,G=a.objectEach,k=a.pick,c=a.addEvent,p=a.fireEvent;c(y,"render",function(){var a=[];(this.labelCollectors||
[]).forEach(function(c){a=a.concat(c())});(this.yAxis||[]).forEach(function(c){c.options.stackLabels&&!c.options.stackLabels.allowOverlap&&G(c.stacks,function(c){G(c,function(c){a.push(c.label)})})});(this.series||[]).forEach(function(c){var p=c.options.dataLabels;c.visible&&(!1!==p.enabled||c._hasPointLabels)&&c.points.forEach(function(c){c.visible&&(F(c.dataLabels)?c.dataLabels:c.dataLabel?[c.dataLabel]:[]).forEach(function(h){var e=h.options;h.labelrank=k(e.labelrank,c.labelrank,c.shapeArgs&&c.shapeArgs.height);
e.allowOverlap||a.push(h)})})});this.hideOverlappingLabels(a)});y.prototype.hideOverlappingLabels=function(a){var c=this,k=a.length,r=c.renderer,h,e,l,n,d,g,b=function(a,b,c,d,e,g,h,k){return!(e>a+c||e+h<a||g>b+d||g+k<b)};l=function(a){var b,c,d,e=a.box?0:a.padding||0;d=0;if(a&&(!a.alignAttr||a.placed))return b=a.alignAttr||{x:a.attr("x"),y:a.attr("y")},c=a.parentGroup,a.width||(d=a.getBBox(),a.width=d.width,a.height=d.height,d=r.fontMetrics(null,a.element).h),{x:b.x+(c.translateX||0)+e,y:b.y+(c.translateY||
0)+e-d,width:a.width-2*e,height:a.height-2*e}};for(e=0;e<k;e++)if(h=a[e])h.oldOpacity=h.opacity,h.newOpacity=1,h.absoluteBox=l(h);a.sort(function(a,b){return(b.labelrank||0)-(a.labelrank||0)});for(e=0;e<k;e++)for(g=(l=a[e])&&l.absoluteBox,h=e+1;h<k;++h)if(d=(n=a[h])&&n.absoluteBox,g&&d&&l!==n&&0!==l.newOpacity&&0!==n.newOpacity&&(d=b(g.x,g.y,g.width,g.height,d.x,d.y,d.width,d.height)))(l.labelrank<n.labelrank?l:n).newOpacity=0;a.forEach(function(a){var b,d;a&&(d=a.newOpacity,a.oldOpacity!==d&&(a.alignAttr&&
a.placed?(d?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=d,a[a.isOld?"animate":"attr"](a.alignAttr,null,b),p(c,"afterHideOverlappingLabels")):a.attr({opacity:d})),a.isOld=!0)})}})(I);(function(a){var y=a.addEvent,F=a.Chart,G=a.createElement,k=a.css,c=a.defaultOptions,p=a.defaultPlotOptions,t=a.extend,v=a.fireEvent,w=a.hasTouch,r=a.isObject,h=a.Legend,e=a.merge,l=a.pick,n=a.Point,d=a.Series,g=a.seriesTypes,b=a.svg,x;x=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart,c=b.pointer,
d=function(a){var b=c.getPointFromEvent(a);void 0!==b&&(c.isDirectTouch=!0,b.onMouseOver(a))};a.points.forEach(function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&(a.dataLabel.div?a.dataLabel.div.point=a:a.dataLabel.element.point=a)});a._hasTracking||(a.trackerGroups.forEach(function(e){if(a[e]){a[e].addClass("highcharts-tracker").on("mouseover",d).on("mouseout",function(a){c.onTrackerMouseOut(a)});if(w)a[e].on("touchstart",d);!b.styledMode&&a.options.cursor&&a[e].css(k).css({cursor:a.options.cursor})}}),
a._hasTracking=!0);v(this,"afterDrawTracker")},drawTrackerGraph:function(){var a=this,c=a.options,d=c.trackByArea,e=[].concat(d?a.areaPath:a.graphPath),g=e.length,h=a.chart,k=h.pointer,l=h.renderer,f=h.options.tooltip.snap,n=a.tracker,p,r=function(){if(h.hoverSeries!==a)a.onMouseOver()},t="rgba(192,192,192,"+(b?.0001:.002)+")";if(g&&!d)for(p=g+1;p--;)"M"===e[p]&&e.splice(p+1,0,e[p+1]-f,e[p+2],"L"),(p&&"M"===e[p]||p===g)&&e.splice(p,0,"L",e[p-2]+f,e[p-1]);n?n.attr({d:e}):a.graph&&(a.tracker=l.path(e).attr({visibility:a.visible?
"visible":"hidden",zIndex:2}).addClass(d?"highcharts-tracker-area":"highcharts-tracker-line").add(a.group),h.styledMode||a.tracker.attr({"stroke-linejoin":"round",stroke:t,fill:d?t:"none","stroke-width":a.graph.strokeWidth()+(d?0:2*f)}),[a.tracker,a.markerGroup].forEach(function(a){a.addClass("highcharts-tracker").on("mouseover",r).on("mouseout",function(a){k.onTrackerMouseOut(a)});c.cursor&&!h.styledMode&&a.css({cursor:c.cursor});if(w)a.on("touchstart",r)}));v(this,"afterDrawTracker")}};g.column&&
(g.column.prototype.drawTracker=x.drawTrackerPoint);g.pie&&(g.pie.prototype.drawTracker=x.drawTrackerPoint);g.scatter&&(g.scatter.prototype.drawTracker=x.drawTrackerPoint);t(h.prototype,{setItemEvents:function(a,b,c){var d=this,g=d.chart.renderer.boxWrapper,h="highcharts-legend-"+(a instanceof n?"point":"series")+"-active",k=d.chart.styledMode;(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");g.addClass(h);k||b.css(d.options.itemHoverStyle)}).on("mouseout",function(){d.styledMode||
b.css(e(a.visible?d.itemStyle:d.itemHiddenStyle));g.removeClass(h);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible()};g.removeClass(h);b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):v(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=G("input",{type:"checkbox",className:"highcharts-legend-checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);y(a.checkbox,"click",
function(b){v(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});t(F.prototype,{showResetZoom:function(){function a(){b.zoomOut()}var b=this,d=c.lang,e=b.options.chart.resetZoomButton,g=e.theme,h=g.states,k="chart"===e.relativeTo?null:"plotBox";v(this,"beforeShowResetZoom",null,function(){b.resetZoomButton=b.renderer.button(d.resetZoom,null,null,a,g,h&&h.hover).attr({align:e.position.align,title:d.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(e.position,
!1,k)})},zoomOut:function(){v(this,"selection",{resetSelection:!0},this.zoom)},zoom:function(a){var b,c=this.pointer,d=!1,e;!a||a.resetSelection?(this.axes.forEach(function(a){b=a.zoom()}),c.initiated=!1):a.xAxis.concat(a.yAxis).forEach(function(a){var e=a.axis;c[e.isXAxis?"zoomX":"zoomY"]&&(b=e.zoom(a.min,a.max),e.displayBtn&&(d=!0))});e=this.resetZoomButton;d&&!e?this.showResetZoom():!d&&r(e)&&(this.resetZoomButton=e.destroy());b&&this.redraw(l(this.options.chart.animation,a&&a.animation,100>this.pointCount))},
pan:function(a,b){var c=this,d=c.hoverPoints,e;v(this,"pan",{originalEvent:a},function(){d&&d.forEach(function(a){a.setState()});("xy"===b?[1,0]:[1]).forEach(function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,g=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",f=c[d],h=(b.pointRange||0)/2,k=b.reversed&&!c.inverted||!b.reversed&&c.inverted?-1:1,l=b.getExtremes(),m=b.toValue(f-g,!0)+h*k,k=b.toValue(f+b.len-g,!0)-h*k,n=k<m,f=n?k:m,m=n?m:k,k=Math.min(l.dataMin,h?l.min:b.toValue(b.toPixels(l.min)-
b.minPixelPadding)),h=Math.max(l.dataMax,h?l.max:b.toValue(b.toPixels(l.max)+b.minPixelPadding)),n=k-f;0<n&&(m+=n,f=k);n=m-h;0<n&&(m=h,f-=n);b.series.length&&f!==l.min&&m!==l.max&&(b.setExtremes(f,m,!1,!1,{trigger:"pan"}),e=!0);c[d]=g});e&&c.redraw(!1);k(c.container,{cursor:"move"})})}});t(n.prototype,{select:function(a,b){var c=this,d=c.series,e=d.chart;a=l(a,!c.selected);c.firePointEvent(a?"select":"unselect",{accumulate:b},function(){c.selected=c.options.selected=a;d.options.data[d.data.indexOf(c)]=
c.options;c.setState(a&&"select");b||e.getSelectedPoints().forEach(function(a){a.selected&&a!==c&&(a.selected=a.options.selected=!1,d.options.data[d.data.indexOf(a)]=a.options,a.setState(""),a.firePointEvent("unselect"))})})},onMouseOver:function(a){var b=this.series.chart,c=b.pointer;a=a?c.normalize(a):c.getChartCoordinatesFromPoint(this,b.inverted);c.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");(a.hoverPoints||[]).forEach(function(a){a.setState()});
a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var b=this,c=e(b.series.options.point,b.options).events;b.events=c;a.objectEach(c,function(a,c){y(b,c,a)});this.hasImportedEvents=!0}},setState:function(a,b){var c=Math.floor(this.plotX),d=this.plotY,e=this.series,g=e.options.states[a||"normal"]||{},h=p[e.type].marker&&e.options.marker,k=h&&!1===h.enabled,f=h&&h.states&&h.states[a||"normal"]||{},n=!1===f.enabled,r=e.stateMarkerGraphic,u=this.marker||{},w=e.chart,
x=e.halo,y,F=h&&e.markerAttribs;a=a||"";if(!(a===this.state&&!b||this.selected&&"select"!==a||!1===g.enabled||a&&(n||k&&!1===f.enabled)||a&&u.states&&u.states[a]&&!1===u.states[a].enabled)){F&&(y=e.markerAttribs(this,a));if(this.graphic)this.state&&this.graphic.removeClass("highcharts-point-"+this.state),a&&this.graphic.addClass("highcharts-point-"+a),w.styledMode||this.graphic.animate(e.pointAttribs(this,a),l(w.options.chart.animation,g.animation)),y&&this.graphic.animate(y,l(w.options.chart.animation,
f.animation,h.animation)),r&&r.hide();else{if(a&&f){h=u.symbol||e.symbol;r&&r.currentSymbol!==h&&(r=r.destroy());if(r)r[b?"animate":"attr"]({x:y.x,y:y.y});else h&&(e.stateMarkerGraphic=r=w.renderer.symbol(h,y.x,y.y,y.width,y.height).add(e.markerGroup),r.currentSymbol=h);!w.styledMode&&r&&r.attr(e.pointAttribs(this,a))}r&&(r[a&&w.isInsidePlot(c,d,w.inverted)?"show":"hide"](),r.element.point=this)}(c=g.halo)&&c.size?(x||(e.halo=x=w.renderer.path().add((this.graphic||r).parentGroup)),x.show()[b?"animate":
"attr"]({d:this.haloPath(c.size)}),x.attr({"class":"highcharts-halo highcharts-color-"+l(this.colorIndex,e.colorIndex)+(this.className?" "+this.className:""),zIndex:-1}),x.point=this,w.styledMode||x.attr(t({fill:this.color||e.color,"fill-opacity":c.opacity},c.attributes))):x&&x.point&&x.point.haloPath&&x.animate({d:x.point.haloPath(0)},null,x.hide);this.state=a;v(this,"afterSetState")}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-a,this.plotY-a,2*a,
2*a)}});t(d.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&v(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&v(this,"mouseOut");!c||this.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();this.setState()},setState:function(a){var b=this,c=b.options,d=b.graph,
e=c.states,g=c.lineWidth,c=0;a=a||"";if(b.state!==a&&([b.group,b.markerGroup,b.dataLabelsGroup].forEach(function(c){c&&(b.state&&c.removeClass("highcharts-series-"+b.state),a&&c.addClass("highcharts-series-"+a))}),b.state=a,!(b.chart.styledMode||e[a]&&!1===e[a].enabled)&&(a&&(g=e[a].lineWidth||g+(e[a].lineWidthPlus||0)),d&&!d.dashstyle)))for(g={"stroke-width":g},d.animate(g,l(e[a||"normal"]&&e[a||"normal"].animation,b.chart.options.chart.animation));b["zone-graph-"+c];)b["zone-graph-"+c].attr(g),
c+=1},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,g,h=d.options.chart.ignoreHiddenSeries,k=c.visible;g=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!k:a)?"show":"hide";["group","dataLabelsGroup","markerGroup","tracker","tt"].forEach(function(a){if(c[a])c[a][g]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&d.series.forEach(function(a){a.options.stacking&&a.visible&&
(a.isDirty=!0)});c.linkedSeries.forEach(function(b){b.setVisible(a,!1)});h&&(d.isDirtyBox=!0);v(c,g);!1!==b&&d.redraw()},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=this.options.selected=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);v(this,a?"select":"unselect")},drawTracker:x.drawTrackerGraph})})(I);(function(a){var y=a.Chart,F=a.isArray,G=a.isObject,k=a.pick,c=a.splat;y.prototype.setResponsive=function(c,k){var p=
this.options.responsive,t=[],r=this.currentResponsive;!k&&p&&p.rules&&p.rules.forEach(function(h){void 0===h._id&&(h._id=a.uniqueKey());this.matchResponsiveRule(h,t,c)},this);k=a.merge.apply(0,t.map(function(c){return a.find(p.rules,function(a){return a._id===c}).chartOptions}));k.isResponsiveOptions=!0;t=t.toString()||void 0;t!==(r&&r.ruleIds)&&(r&&this.update(r.undoOptions,c),t?(r=this.currentOptions(k),r.isResponsiveOptions=!0,this.currentResponsive={ruleIds:t,mergedOptions:k,undoOptions:r},this.update(k,
c)):this.currentResponsive=void 0)};y.prototype.matchResponsiveRule=function(a,c){var p=a.condition;(p.callback||function(){return this.chartWidth<=k(p.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=k(p.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=k(p.minWidth,0)&&this.chartHeight>=k(p.minHeight,0)}).call(this)&&c.push(a._id)};y.prototype.currentOptions=function(k){function p(k,r,h,e){var l;a.objectEach(k,function(a,d){if(!e&&-1<["series","xAxis","yAxis"].indexOf(d))for(a=c(a),h[d]=[],l=0;l<a.length;l++)r[d][l]&&
(h[d][l]={},p(a[l],r[d][l],h[d][l],e+1));else G(a)?(h[d]=F(a)?[]:{},p(a,r[d]||{},h[d],e+1)):h[d]=r[d]||null})}var v={};p(k,this.options,v,0);return v}})(I);return I});
//# sourceMappingURL=highcharts.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "loading-card",
    { staticClass: "px-6 py-4", attrs: { loading: _vm.loading } },
    [
      _c(
        "div",
        { staticClass: "flex mb-4" },
        [
          _c("h3", { staticClass: "mr-3 text-base text-80 font-bold" }, [
            _vm._v("Highcharts Configuration Preview")
          ]),
          _vm._v(" "),
          _vm.ranges.length > 0
            ? _c("select-control", {
                staticClass: "ml-auto min-w-24 h-6 text-xs no-appearance bg-40",
                attrs: { options: _vm.ranges, selected: _vm.selectedRangeKey },
                on: { change: _vm.handleChange }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("div", {
        ref: "chart",
        staticClass: "absolute pin rounded-b-lg ct-chart",
        staticStyle: { top: "60%", height: "400px" },
        attrs: { id: "container" }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4464bfab", module.exports)
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["laravel-nova"] = factory();
	else
		root["laravel-nova"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(46);
var isBuffer = __webpack_require__(156);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(60)('wks');
var uid = __webpack_require__(65);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(29)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(3);
var ctx = __webpack_require__(16);
var hide = __webpack_require__(7);
var has = __webpack_require__(17);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var createDesc = __webpack_require__(59);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(122);
var toPrimitive = __webpack_require__(142);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(68);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(14);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(38);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(36),
    getRawTag = __webpack_require__(188),
    objectToString = __webpack_require__(213);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(197);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(37);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(72),
    isLength = __webpack_require__(73);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(19),
    isObjectLike = __webpack_require__(23);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(109);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(42);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(42);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(75)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(113);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(14);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(11).f;
var has = __webpack_require__(17);
var TAG = __webpack_require__(2)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(60)('keys');
var uid = __webpack_require__(65);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(54);
var defined = __webpack_require__(27);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(170),
    getValue = __webpack_require__(189);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ['1/2', '1/3', '2/3', '1/4', '3/4', '1/5', '2/5', '3/5', '4/5', '1/6', '5/6'];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Form = __webpack_require__(154);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Form).default;
  }
});
Object.defineProperty(exports, 'Form', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Form).default;
  }
});

var _Errors = __webpack_require__(66);

Object.defineProperty(exports, 'Errors', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Errors).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(101);
var buildURL = __webpack_require__(104);
var parseHeaders = __webpack_require__(110);
var isURLSameOrigin = __webpack_require__(108);
var createError = __webpack_require__(45);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(103);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(106);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(75)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(100);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardSizes = exports.SingularOrPlural = exports.Minimum = exports.Capitalize = exports.Inflector = exports.Errors = exports.TogglesTrashed = exports.PerPageable = exports.PerformsSearches = exports.Paginatable = exports.InteractsWithResourceInformation = exports.InteractsWithQueryString = exports.InteractsWithDates = exports.HasCards = exports.HandlesValidationErrors = exports.FormField = exports.Filterable = exports.Deletable = exports.BehavesAsPanel = undefined;

var _BehavesAsPanel = __webpack_require__(77);

var _BehavesAsPanel2 = _interopRequireDefault(_BehavesAsPanel);

var _Deletable = __webpack_require__(78);

var _Deletable2 = _interopRequireDefault(_Deletable);

var _Filterable = __webpack_require__(79);

var _Filterable2 = _interopRequireDefault(_Filterable);

var _FormField = __webpack_require__(80);

var _FormField2 = _interopRequireDefault(_FormField);

var _HandlesValidationErrors = __webpack_require__(81);

var _HandlesValidationErrors2 = _interopRequireDefault(_HandlesValidationErrors);

var _HasCards = __webpack_require__(82);

var _HasCards2 = _interopRequireDefault(_HasCards);

var _InteractsWithDates = __webpack_require__(83);

var _InteractsWithDates2 = _interopRequireDefault(_InteractsWithDates);

var _InteractsWithQueryString = __webpack_require__(84);

var _InteractsWithQueryString2 = _interopRequireDefault(_InteractsWithQueryString);

var _InteractsWithResourceInformation = __webpack_require__(85);

var _InteractsWithResourceInformation2 = _interopRequireDefault(_InteractsWithResourceInformation);

var _Paginatable = __webpack_require__(86);

var _Paginatable2 = _interopRequireDefault(_Paginatable);

var _PerformsSearches = __webpack_require__(88);

var _PerformsSearches2 = _interopRequireDefault(_PerformsSearches);

var _PerPageable = __webpack_require__(87);

var _PerPageable2 = _interopRequireDefault(_PerPageable);

var _TogglesTrashed = __webpack_require__(89);

var _TogglesTrashed2 = _interopRequireDefault(_TogglesTrashed);

var _inflectorJs = __webpack_require__(93);

var _inflectorJs2 = _interopRequireDefault(_inflectorJs);

var _cardSizes = __webpack_require__(40);

var _cardSizes2 = _interopRequireDefault(_cardSizes);

var _capitalize = __webpack_require__(90);

var _capitalize2 = _interopRequireDefault(_capitalize);

var _minimum = __webpack_require__(91);

var _minimum2 = _interopRequireDefault(_minimum);

var _formBackendValidation = __webpack_require__(41);

var _singularOrPlural = __webpack_require__(92);

var _singularOrPlural2 = _interopRequireDefault(_singularOrPlural);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Util
exports.BehavesAsPanel = _BehavesAsPanel2.default;
exports.Deletable = _Deletable2.default;
exports.Filterable = _Filterable2.default;
exports.FormField = _FormField2.default;
exports.HandlesValidationErrors = _HandlesValidationErrors2.default;
exports.HasCards = _HasCards2.default;
exports.InteractsWithDates = _InteractsWithDates2.default;
exports.InteractsWithQueryString = _InteractsWithQueryString2.default;
exports.InteractsWithResourceInformation = _InteractsWithResourceInformation2.default;
exports.Paginatable = _Paginatable2.default;
exports.PerformsSearches = _PerformsSearches2.default;
exports.PerPageable = _PerPageable2.default;
exports.TogglesTrashed = _TogglesTrashed2.default;
exports.Errors = _formBackendValidation.Errors;
exports.Inflector = _inflectorJs2.default;
exports.Capitalize = _capitalize2.default;
exports.Minimum = _minimum2.default;
exports.SingularOrPlural = _singularOrPlural2.default;
exports.CardSizes = _cardSizes2.default; // Mixins

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(117), __esModule: true };

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(48);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(239);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(15);
var TAG = __webpack_require__(2)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(15);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(30);
var $export = __webpack_require__(6);
var redefine = __webpack_require__(138);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(10);
var $iterCreate = __webpack_require__(126);
var setToStringTag = __webpack_require__(32);
var getPrototypeOf = __webpack_require__(134);
var ITERATOR = __webpack_require__(2)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(135);
var enumBugKeys = __webpack_require__(52);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var isObject = __webpack_require__(9);
var newPromiseCapability = __webpack_require__(31);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(3);
var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(30) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(4);
var aFunction = __webpack_require__(14);
var SPECIES = __webpack_require__(2)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(16);
var invoke = __webpack_require__(123);
var html = __webpack_require__(53);
var cel = __webpack_require__(28);
var global = __webpack_require__(1);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(15)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(34);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(27);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Errors = function () {
    /**
     * Create a new Errors instance.
     */
    function Errors() {
        var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Errors);

        this.record(errors);
    }

    /**
     * Get all the errors.
     *
     * @return {object}
     */


    _createClass(Errors, [{
        key: "all",
        value: function all() {
            return this.errors;
        }

        /**
         * Determine if any errors exists for the given field or object.
         *
         * @param {string} field
         */

    }, {
        key: "has",
        value: function has(field) {
            var hasError = this.errors.hasOwnProperty(field);

            if (!hasError) {
                var errors = Object.keys(this.errors).filter(function (e) {
                    return e.startsWith(field + ".") || e.startsWith(field + "[");
                });

                hasError = errors.length > 0;
            }

            return hasError;
        }
    }, {
        key: "first",
        value: function first(field) {
            return this.get(field)[0];
        }
    }, {
        key: "get",
        value: function get(field) {
            return this.errors[field] || [];
        }

        /**
         * Determine if we have any errors.
         */

    }, {
        key: "any",
        value: function any() {
            return Object.keys(this.errors).length > 0;
        }

        /**
         * Record the new errors.
         *
         * @param {object} errors
         */

    }, {
        key: "record",
        value: function record() {
            var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.errors = errors;
        }

        /**
         * Clear a specific field, object or all error fields.
         *
         * @param {string|null} field
         */

    }, {
        key: "clear",
        value: function clear(field) {
            if (!field) {
                this.errors = {};

                return;
            }

            var errors = Object.assign({}, this.errors);

            Object.keys(errors).filter(function (e) {
                return e === field || e.startsWith(field + ".") || e.startsWith(field + "[");
            }).forEach(function (e) {
                return delete errors[e];
            });

            this.errors = errors;
        }
    }]);

    return Errors;
}();

exports.default = Errors;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(177),
    isArguments = __webpack_require__(229),
    isArray = __webpack_require__(13),
    isBuffer = __webpack_require__(230),
    isIndex = __webpack_require__(70),
    isTypedArray = __webpack_require__(231);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(241)))

/***/ }),
/* 69 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 71 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(19),
    isObject = __webpack_require__(8);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 73 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(178);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: ['resourceName', 'resourceId', 'resource', 'panel'],

  methods: {
    /**
     * Handle the actionExecuted event and pass it up the chain.
     */
    actionExecuted: function actionExecuted() {
      this.$emit('actionExecuted');
    }
  }
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(114);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  methods: {
    /**
     * Open the delete menu modal.
     */
    openDeleteModal: function openDeleteModal() {
      this.deleteModalOpen = true;
    },


    /**
     * Delete the given resources.
     */
    deleteResources: function deleteResources(resources) {
      var _this = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (this.viaManyToMany) {
        return this.detachResources(resources);
      }

      return Nova.request({
        url: '/nova-api/' + this.resourceName,
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: mapResources(resources) })
      }).then(callback ? callback : function () {
        _this.deleteModalOpen = false;
        _this.getResources();
      });
    },


    /**
     * Delete the selected resources.
     */
    deleteSelectedResources: function deleteSelectedResources() {
      this.deleteResources(this.selectedResources);
    },


    /**
     * Delete all of the matching resources.
     */
    deleteAllMatchingResources: function deleteAllMatchingResources() {
      var _this2 = this;

      if (this.viaManyToMany) {
        return this.detachAllMatchingResources();
      }

      return Nova.request({
        url: this.deleteAllMatchingResourcesEndpoint,
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: 'all' })
      }).then(function () {
        _this2.deleteModalOpen = false;
        _this2.getResources();
      });
    },


    /**
     * Detach the given resources.
     */
    detachResources: function detachResources(resources) {
      var _this3 = this;

      return Nova.request({
        url: '/nova-api/' + this.resourceName + '/detach',
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: mapResources(resources) })
      }).then(function () {
        _this3.deleteModalOpen = false;
        _this3.getResources();
      });
    },


    /**
     * Detach all of the matching resources.
     */
    detachAllMatchingResources: function detachAllMatchingResources() {
      var _this4 = this;

      return Nova.request({
        url: '/nova-api/' + this.resourceName + '/detach',
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: 'all' })
      }).then(function () {
        _this4.deleteModalOpen = false;
        _this4.getResources();
      });
    },


    /**
     * Force delete the given resources.
     */
    forceDeleteResources: function forceDeleteResources(resources) {
      var _this5 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      return Nova.request({
        url: '/nova-api/' + this.resourceName + '/force',
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: mapResources(resources) })
      }).then(callback ? callback : function () {
        _this5.deleteModalOpen = false;

        _this5.getResources();
      });
    },


    /**
     * Force delete the selected resources.
     */
    forceDeleteSelectedResources: function forceDeleteSelectedResources() {
      this.forceDeleteResources(this.selectedResources);
    },


    /**
     * Force delete all of the matching resources.
     */
    forceDeleteAllMatchingResources: function forceDeleteAllMatchingResources() {
      var _this6 = this;

      return Nova.request({
        url: this.forceDeleteSelectedResourcesEndpoint,
        method: 'delete',
        params: (0, _extends3.default)({}, this.queryString, { resources: 'all' })
      }).then(function () {
        _this6.deleteModalOpen = false;
        _this6.getResources();
      });
    },


    /**
     * Restore the given resources.
     */
    restoreResources: function restoreResources(resources) {
      var _this7 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      return Nova.request({
        url: '/nova-api/' + this.resourceName + '/restore',
        method: 'put',
        params: (0, _extends3.default)({}, this.queryString, { resources: mapResources(resources) })
      }).then(callback ? callback : function () {
        _this7.restoreModalOpen = false;

        _this7.getResources();
      });
    },


    /**
     * Restore the selected resources.
     */
    restoreSelectedResources: function restoreSelectedResources() {
      this.restoreResources(this.selectedResources);
    },


    /**
     * Restore all of the matching resources.
     */
    restoreAllMatchingResources: function restoreAllMatchingResources() {
      var _this8 = this;

      return Nova.request({
        url: this.restoreAllMatchingResourcesEndpoint,
        method: 'put',
        params: (0, _extends3.default)({}, this.queryString, { resources: 'all' })
      }).then(function () {
        _this8.restoreModalOpen = false;
        _this8.getResources();
      });
    }
  },

  computed: {
    /**
     * Get the delete all matching resources endpoint.
     */
    deleteAllMatchingResourcesEndpoint: function deleteAllMatchingResourcesEndpoint() {
      if (this.lens) {
        return '/nova-api/' + this.resourceName + '/lens/' + this.lens;
      }

      return '/nova-api/' + this.resourceName;
    },


    /**
     * Get the force delete all of the matching resources endpoint.
     */
    forceDeleteSelectedResourcesEndpoint: function forceDeleteSelectedResourcesEndpoint() {
      if (this.lens) {
        return '/nova-api/' + this.resourceName + '/lens/' + this.lens + '/force';
      }

      return '/nova-api/' + this.resourceName + '/force';
    },


    /**
     * Get the restore all of the matching resources endpoint.
     */
    restoreAllMatchingResourcesEndpoint: function restoreAllMatchingResourcesEndpoint() {
      if (this.lens) {
        return '/nova-api/' + this.resourceName + '/lens/' + this.lens + '/restore';
      }

      return '/nova-api/' + this.resourceName + '/restore';
    },


    /**
     * Get the query string for a deletable resource request.
     */
    queryString: function queryString() {
      return {
        search: this.currentSearch,
        filters: this.encodedFilters,
        trashed: this.currentTrashed,
        viaResource: this.viaResource,
        viaResourceId: this.viaResourceId,
        viaRelationship: this.viaRelationship
      };
    }
  }
};


function mapResources(resources) {
  return _.map(resources, function (resource) {
    return resource.id.value;
  });
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(50);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _defineProperty2 = __webpack_require__(26);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _asyncToGenerator2 = __webpack_require__(49);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _each = __webpack_require__(226);

var _each2 = _interopRequireDefault(_each);

var _get = __webpack_require__(228);

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  methods: {
    /**
     * Clear filters and reset the resource table
     */
    clearSelectedFilters: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(lens) {
        var _updateQueryString;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!lens) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return this.$store.dispatch(this.resourceName + '/resetFilterState', {
                  resourceName: this.resourceName,
                  lens: lens
                });

              case 3:
                _context.next = 7;
                break;

              case 5:
                _context.next = 7;
                return this.$store.dispatch(this.resourceName + '/resetFilterState', {
                  resourceName: this.resourceName
                });

              case 7:

                this.updateQueryString((_updateQueryString = {}, (0, _defineProperty3.default)(_updateQueryString, this.pageParameter, 1), (0, _defineProperty3.default)(_updateQueryString, this.filterParameter, ''), _updateQueryString));

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function clearSelectedFilters(_x) {
        return _ref.apply(this, arguments);
      }

      return clearSelectedFilters;
    }(),


    /**
     * Handle a filter state change.
     */
    filterChanged: function filterChanged() {
      var _updateQueryString2;

      this.updateQueryString((_updateQueryString2 = {}, (0, _defineProperty3.default)(_updateQueryString2, this.pageParameter, 1), (0, _defineProperty3.default)(_updateQueryString2, this.filterParameter, this.$store.getters[this.resourceName + '/currentEncodedFilters']), _updateQueryString2));
    },


    /**
     * Set up filters for the current view
     */
    initializeFilters: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(lens) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // Clear out the filters from the store first
                this.$store.commit(this.resourceName + '/clearFilters');

                _context2.next = 3;
                return this.$store.dispatch(this.resourceName + '/fetchFilters', {
                  resourceName: this.resourceName,
                  lens: lens
                });

              case 3:
                _context2.next = 5;
                return this.initializeState(lens);

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function initializeFilters(_x2) {
        return _ref2.apply(this, arguments);
      }

      return initializeFilters;
    }(),


    /**
     * Initialize the filter state
     */
    initializeState: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(lens) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.initialEncodedFilters) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 3;
                return this.$store.dispatch(this.resourceName + '/initializeCurrentFilterValuesFromQueryString', this.initialEncodedFilters);

              case 3:
                _context3.next = 7;
                break;

              case 5:
                _context3.next = 7;
                return this.$store.dispatch(this.resourceName + '/resetFilterState', {
                  resourceName: this.resourceName,
                  lens: lens
                });

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function initializeState(_x3) {
        return _ref3.apply(this, arguments);
      }

      return initializeState;
    }()
  },

  computed: {
    /**
     * Get the name of the filter query string variable.
     */
    filterParameter: function filterParameter() {
      return this.resourceName + '_filter';
    }
  }
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    resourceName: {},
    field: {}
  },

  data: function data() {
    return {
      value: ''
    };
  },

  mounted: function mounted() {
    var _this = this;

    this.setInitialValue();

    // Add a default fill method for the field
    this.field.fill = this.fill;

    // Register a global event for setting the field's value
    Nova.$on(this.field.attribute + '-value', function (value) {
      _this.value = value;
    });
  },
  destroyed: function destroyed() {
    Nova.$off(this.field.attribute + '-value');
  },


  methods: {
    /*
     * Set the initial value for the field
     */
    setInitialValue: function setInitialValue() {
      this.value = !(this.field.value === undefined || this.field.value === null) ? this.field.value : '';
    },


    /**
     * Provide a function that fills a passed FormData object with the
     * field's internal value attribute
     */
    fill: function fill(formData) {
      formData.append(this.field.attribute, String(this.value));
    },


    /**
     * Update the field's internal value
     */
    handleChange: function handleChange(value) {
      this.value = value;
    }
  }
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _formBackendValidation = __webpack_require__(41);

exports.default = {
  props: {
    errors: {
      default: function _default() {
        return new _formBackendValidation.Errors();
      }
    }
  },

  data: function data() {
    return {
      errorClass: 'border-danger'
    };
  },

  computed: {
    errorClasses: function errorClasses() {
      return this.hasError ? [this.errorClass] : [];
    },
    fieldAttribute: function fieldAttribute() {
      return this.field.attribute;
    },
    hasError: function hasError() {
      return this.errors.has(this.fieldAttribute);
    },
    firstError: function firstError() {
      if (this.hasError) {
        return this.errors.first(this.fieldAttribute);
      }
    }
  }
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(50);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(49);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _cardSizes = __webpack_require__(40);

var _cardSizes2 = _interopRequireDefault(_cardSizes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    loadCards: {
      type: Boolean,
      default: true
    }
  },

  data: function data() {
    return { cards: [] };
  },

  /**
   * Fetch all of the metrics panels for this view
   */
  created: function created() {
    this.fetchCards();
  },


  watch: {
    cardsEndpoint: function cardsEndpoint() {
      this.fetchCards();
    }
  },

  methods: {
    fetchCards: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _ref2, cards;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.loadCards) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return Nova.request().get(this.cardsEndpoint);

              case 3:
                _ref2 = _context.sent;
                cards = _ref2.data;

                this.cards = cards;

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchCards() {
        return _ref.apply(this, arguments);
      }

      return fetchCards;
    }()
  },

  computed: {
    /**
     * Determine whether we have cards to show on the Dashboard
     */
    shouldShowCards: function shouldShowCards() {
      return this.cards.length > 0;
    },


    /**
     * Return the small cards used for the Dashboard
     */
    smallCards: function smallCards() {
      return _.filter(this.cards, function (c) {
        return _cardSizes2.default.indexOf(c.width) !== -1;
      });
    },


    /**
     * Return the full-width cards used for the Dashboard
     */
    largeCards: function largeCards() {
      return _.filter(this.cards, function (c) {
        return c.width == 'full';
      });
    }
  }
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  methods: {
    /**
     * Convert the given localized date time string to the application's timezone.
     */
    toAppTimezone: function toAppTimezone(value) {
      return value ? moment.tz(value, this.userTimezone).clone().tz(Nova.config.timezone).format('YYYY-MM-DD HH:mm:ss') : value;
    },


    /**
     * Convert the given application timezone date time string to the local timezone.
     */
    fromAppTimezone: function fromAppTimezone(value) {
      if (!value) {
        return value;
      }

      return moment.tz(value, Nova.config.timezone).clone().tz(this.userTimezone).format('YYYY-MM-DD HH:mm:ss');
    },


    /**
     * Get the localized date time for the given field.
     */
    localizeDateTimeField: function localizeDateTimeField(field) {
      if (!field.value) {
        return field.value;
      }

      var localized = moment.tz(field.value, Nova.config.timezone).clone().tz(this.userTimezone);

      if (field.format) {
        return localized.format(field.format);
      }

      return this.usesTwelveHourTime ? localized.format('YYYY-MM-DD h:mm:ss A') : localized.format('YYYY-MM-DD HH:mm:ss');
    },


    /**
     * Get the localized date for the given field.
     */
    localizeDateField: function localizeDateField(field) {
      if (!field.value) {
        return field.value;
      }

      var localized = moment.tz(field.value, Nova.config.timezone).clone().tz(this.userTimezone);

      if (field.format) {
        return localized.format(field.format);
      }

      return localized.format('YYYY-MM-DD');
    }
  },

  computed: {
    /**
     * Get the user's local timezone.
     */
    userTimezone: function userTimezone() {
      return Nova.config.userTimezone ? Nova.config.userTimezone : moment.tz.guess();
    },


    /**
     * Determine if the user is used to 12 hour time.
     */
    usesTwelveHourTime: function usesTwelveHourTime() {
      return _.endsWith(new Date().toLocaleString(), 'AM') || _.endsWith(new Date().toLocaleString(), 'PM');
    }
  }
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defaults = __webpack_require__(225);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    methods: {
        /**
         * Update the given query string values.
         */
        updateQueryString: function updateQueryString(value) {
            this.$router.push({ query: (0, _defaults2.default)(value, this.$route.query) });
        }
    }
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  computed: {
    /**
     * Get the resource information object for the current resource.
     */
    resourceInformation: function resourceInformation() {
      var _this = this;

      return _.find(Nova.config.resources, function (resource) {
        return resource.uriKey == _this.resourceName;
      });
    },


    /**
     * Get the resource information object for the current resource.
     */
    viaResourceInformation: function viaResourceInformation() {
      var _this2 = this;

      if (!this.viaResource) {
        return;
      }

      return _.find(Nova.config.resources, function (resource) {
        return resource.uriKey == _this2.viaResource;
      });
    },


    /**
     * Determine if the user is authorized to create the current resource.
     */
    authorizedToCreate: function authorizedToCreate() {
      return this.resourceInformation.authorizedToCreate;
    }
  }
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(26);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  methods: {
    /**
     * Select the previous page.
     */
    selectPreviousPage: function selectPreviousPage() {
      this.updateQueryString((0, _defineProperty3.default)({}, this.pageParameter, this.currentPage - 1));
    },


    /**
     * Select the next page.
     */
    selectNextPage: function selectNextPage() {
      this.updateQueryString((0, _defineProperty3.default)({}, this.pageParameter, this.currentPage + 1));
    }
  },

  computed: {
    /**
     * Get the current page from the query string.
     */
    currentPage: function currentPage() {
      return parseInt(this.$route.query[this.pageParameter] || 1);
    }
  }
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(26);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return { perPage: 25 };
  },

  methods: {
    /**
     * Sync the per page values from the query string.
     */
    initializePerPageFromQueryString: function initializePerPageFromQueryString() {
      this.perPage = this.currentPerPage;
    },


    /**
     * Update the desired amount of resources per page.
     */
    perPageChanged: function perPageChanged() {
      this.updateQueryString((0, _defineProperty3.default)({}, this.perPageParameter, this.perPage));
    }
  },

  computed: {
    /**
     * Get the current per page value from the query string.
     */
    currentPerPage: function currentPerPage() {
      return this.$route.query[this.perPageParameter] || 25;
    }
  }
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _debounce = __webpack_require__(224);

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      search: '',
      selectedResource: '',
      availableResources: []
    };
  },

  methods: {
    /**
     * Set the currently selected resource
     */
    selectResource: function selectResource(resource) {
      this.selectedResource = resource;
    },


    /**
     * Handle the search box being cleared.
     */
    handleSearchCleared: function handleSearchCleared() {
      this.availableResources = [];
    },


    /**
     * Clear the selected resource and availableResources
     */
    clearSelection: function clearSelection() {
      this.selectedResource = '';
      this.availableResources = [];
    },


    /**
     * Perform a search to get the relatable resources.
     */
    performSearch: function performSearch(search) {
      var _this = this;

      this.search = search;

      var trimmedSearch = search.trim();
      // If the user performs an empty search, it will load all the results
      // so let's just set the availableResources to an empty array to avoid
      // loading a huge result set
      if (trimmedSearch == '') {
        this.clearSelection();

        return;
      }

      this.debouncer(function () {
        _this.selectedResource = '';
        _this.getAvailableResources(trimmedSearch);
      }, 500);
    },


    /**
     * Debounce function for the search handler
     */
    debouncer: (0, _debounce2.default)(function (callback) {
      return callback();
    }, 500)
  }
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      withTrashed: false
    };
  },

  methods: {
    /**
     * Toggle the trashed state of the search
     */
    toggleWithTrashed: function toggleWithTrashed() {
      this.withTrashed = !this.withTrashed;
    },


    /**
     * Enable searching for trashed resources
     */
    enableWithTrashed: function enableWithTrashed() {
      this.withTrashed = true;
    },


    /**
     * Disable searching for trashed resources
     */
    disableWithTrashed: function disableWithTrashed() {
      this.withTrashed = false;
    }
  }
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (string) {
    return (0, _upperFirst2.default)(string);
};

var _upperFirst = __webpack_require__(238);

var _upperFirst2 = _interopRequireDefault(_upperFirst);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = __webpack_require__(48);

var _promise2 = _interopRequireDefault(_promise);

exports.default = function (originalPromise) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

    return _promise2.default.all([originalPromise, new _promise2.default(function (resolve) {
        setTimeout(function () {
            return resolve();
        }, delay);
    })]).then(function (result) {
        return result[0];
    });
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = singularOrPlural;

var _ = __webpack_require__(47);

function singularOrPlural(value, suffix) {
    if (value > 1 || value == 0) return _.Inflector.pluralize(suffix);
    return _.Inflector.singularize(suffix);
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Javascript inflector
 * 
 * @author Dida Nurwanda <didanurwanda@gmail.com>
 * @since 1.0
 */


var _Inflector = {

    uncountableWords : [
        'equipment', 'information', 'rice', 'money', 'species', 'series',
        'fish', 'sheep', 'moose', 'deer', 'news'
    ],

    pluralRules: [
        [new RegExp('(m)an$', 'gi'),                 '$1en'],
        [new RegExp('(pe)rson$', 'gi'),              '$1ople'],
        [new RegExp('(child)$', 'gi'),               '$1ren'],
        [new RegExp('^(ox)$', 'gi'),                 '$1en'],
        [new RegExp('(ax|test)is$', 'gi'),           '$1es'],
        [new RegExp('(octop|vir)us$', 'gi'),         '$1i'],
        [new RegExp('(alias|status)$', 'gi'),        '$1es'],
        [new RegExp('(bu)s$', 'gi'),                 '$1ses'],
        [new RegExp('(buffal|tomat|potat)o$', 'gi'), '$1oes'],
        [new RegExp('([ti])um$', 'gi'),              '$1a'],
        [new RegExp('sis$', 'gi'),                   'ses'],
        [new RegExp('(?:([^f])fe|([lr])f)$', 'gi'),  '$1$2ves'],
        [new RegExp('(hive)$', 'gi'),                '$1s'],
        [new RegExp('([^aeiouy]|qu)y$', 'gi'),       '$1ies'],
        [new RegExp('(x|ch|ss|sh)$', 'gi'),          '$1es'],
        [new RegExp('(matr|vert|ind)ix|ex$', 'gi'),  '$1ices'],
        [new RegExp('([m|l])ouse$', 'gi'),           '$1ice'],
        [new RegExp('(quiz)$', 'gi'),                '$1zes'],
        [new RegExp('s$', 'gi'),                     's'],
        [new RegExp('$', 'gi'),                      's']
    ],

    singularRules: [
        [new RegExp('(m)en$', 'gi'),                                                       '$1an'],
        [new RegExp('(pe)ople$', 'gi'),                                                    '$1rson'],
        [new RegExp('(child)ren$', 'gi'),                                                  '$1'],
        [new RegExp('([ti])a$', 'gi'),                                                     '$1um'],
        [new RegExp('((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$','gi'), '$1$2sis'],
        [new RegExp('(hive)s$', 'gi'),                                                     '$1'],
        [new RegExp('(tive)s$', 'gi'),                                                     '$1'],
        [new RegExp('(curve)s$', 'gi'),                                                    '$1'],
        [new RegExp('([lr])ves$', 'gi'),                                                   '$1f'],
        [new RegExp('([^fo])ves$', 'gi'),                                                  '$1fe'],
        [new RegExp('([^aeiouy]|qu)ies$', 'gi'),                                           '$1y'],
        [new RegExp('(s)eries$', 'gi'),                                                    '$1eries'],
        [new RegExp('(m)ovies$', 'gi'),                                                    '$1ovie'],
        [new RegExp('(x|ch|ss|sh)es$', 'gi'),                                              '$1'],
        [new RegExp('([m|l])ice$', 'gi'),                                                  '$1ouse'],
        [new RegExp('(bus)es$', 'gi'),                                                     '$1'],
        [new RegExp('(o)es$', 'gi'),                                                       '$1'],
        [new RegExp('(shoe)s$', 'gi'),                                                     '$1'],
        [new RegExp('(cris|ax|test)es$', 'gi'),                                            '$1is'],
        [new RegExp('(octop|vir)i$', 'gi'),                                                '$1us'],
        [new RegExp('(alias|status)es$', 'gi'),                                            '$1'],
        [new RegExp('^(ox)en', 'gi'),                                                      '$1'],
        [new RegExp('(vert|ind)ices$', 'gi'),                                              '$1ex'],
        [new RegExp('(matr)ices$', 'gi'),                                                  '$1ix'],
        [new RegExp('(quiz)zes$', 'gi'),                                                   '$1'],
        [new RegExp('s$', 'gi'),                                                           '']
    ],

    nonTitlecasedWords: [
        'and', 'or', 'nor', 'a', 'an', 'the', 'so', 'but', 'to', 'of', 'at',
        'by', 'from', 'into', 'on', 'onto', 'off', 'out', 'in', 'over',
        'with', 'for'
    ],

    idSuffix: new RegExp('(_ids|_id)$', 'g'),
    underbar: new RegExp('_', 'g'),
    spaceOrUnderbar: new RegExp('[\ _]', 'g'),
    uppercase: new RegExp('([A-Z])', 'g'),
    underbarPrefix: new RegExp('^_'),

    applyRules: function(str, rules, skip, override) {
        if (override) {
            str = override;
        } else {
            var ignore = (skip.indexOf(str.toLowerCase()) > -1);
            if (!ignore) {
                for (var x = 0; x < rules.length; x++) {
                    if (str.match(rules[x][0])) {
                        str = str.replace(rules[x][0], rules[x][1]);
                        break;
                    }
                }
            }
        }
        return str;
    },


    /*
    Inflector.pluralize('person')           -> 'people'
    Inflector.pluralize('octopus')          -> 'octopi'
    Inflector.pluralize('Hat')              -> 'Hats'
    Inflector.pluralize('person', 'guys')   -> 'guys'    
    */
    pluralize: function(str, plural) {
        return this.applyRules(
            str,
            this.pluralRules,
            this.uncountableWords,
            plural
        );
    },

    /*
    Inflector.singularize('person')         -> 'person'
    Inflector.singularize('octopi')         -> 'octopus'
    Inflector.singularize('hats')           -> 'hat'
    Inflector.singularize('guys', 'person') -> 'person'
    */
    singularize: function(str, singular) {
        return this.applyRules(
            str,
            this.singularRules,
            this.uncountableWords, 
            singular
        );
    },

    /*
    Inflector.camelize('message_properties')        -> 'MessageProperties'
    Inflector.camelize('message_properties', true)  -> 'messageProperties'
    */
    camelize: function(str, lowFirstLetter) {
       // var str = str.toLowerCase();
        var str_path = str.split('/');
        for (var i = 0; i < str_path.length; i++)
        {
            var str_arr = str_path[i].split('_');
            var initX = ((lowFirstLetter && i + 1 === str_path.length) ? (1) : (0));
            for (var x = initX; x < str_arr.length; x++)
            {
                str_arr[x] = str_arr[x].charAt(0).toUpperCase() + str_arr[x].substring(1);
            }
            str_path[i] = str_arr.join('');
        }
        str = str_path.join('::');

        // fix 
        if (lowFirstLetter === true) {
          var first = str.charAt(0).toLowerCase();
          var last = str.slice(1);
          str = first + last;
        }

        return str;
    },

    /*
    Inflector.underscore('MessageProperties')       -> 'message_properties'
    Inflector.underscore('messageProperties')       -> 'message_properties'
    */
    underscore: function(str) { 
        var str_path = str.split('::');
        for (var i = 0; i < str_path.length; i++)
        {
            str_path[i] = str_path[i].replace(this.uppercase, '_$1');
            str_path[i] = str_path[i].replace(this.underbarPrefix, '');
        }
        str = str_path.join('/').toLowerCase();
        return str;
    },

    /*
    Inflector.humanize('message_properties')        -> 'Message properties'
    Inflector.humanize('message_properties')        -> 'message properties'
    */
    humanize: function(str, lowFirstLetter) {
        var str = str.toLowerCase();
        str = str.replace(this.idSuffix, '');
        str = str.replace(this.underbar, ' ');
        if (!lowFirstLetter)
        {
            str = this.capitalize(str);
        }
        return str;
    },

    /*
    Inflector.capitalize('message_properties')      -> 'Message_properties'
    Inflector.capitalize('message properties')      -> 'Message properties'
    */
    capitalize: function(str) {
        var str = str.toLowerCase();
        str = str.substring(0, 1).toUpperCase() + str.substring(1);
        return str;
    },

    /*
    Inflector.dasherize('message_properties')       -> 'message-properties'
    Inflector.dasherize('message properties')       -> 'message-properties'
    */
    dasherize: function(str) {
        str = str.replace(this.spaceOrUnderbar, '-');
        return str;
    },

    /*
    Inflector.camel2words('message_properties')         -> 'Message Properties'
    Inflector.camel2words('message properties')         -> 'Message Properties'
    Inflactor.camel2words('Message_propertyId', true)   -> 'Message Properties Id'
    */
    camel2words: function(str, allFirstUpper) {
        //var str = str.toLowerCase();
        if (allFirstUpper === true) {
            str = this.camelize(str);
            str = this.underscore(str);
        } else {
            str = str.toLowerCase();
        }

        str = str.replace(this.underbar, ' ');
        var str_arr = str.split(' ');
        for (var x = 0; x < str_arr.length; x++)
        {
            var d = str_arr[x].split('-');
            for (var i = 0; i < d.length; i++)
            {
                if (this.nonTitlecasedWords.indexOf(d[i].toLowerCase()) < 0)
                {
                    d[i] = this.capitalize(d[i]);
                }
            }
            str_arr[x] = d.join('-');
        }
        str = str_arr.join(' ');
        str = str.substring(0, 1).toUpperCase() + str.substring(1);
        return str;
    },

    /*
    Inflector.demodulize('Message::Bus::Properties')    -> 'Properties'
    */
    demodulize: function(str) {
        var str_arr = str.split('::');
        str = str_arr[str_arr.length - 1];
        return str;
    },

    /*
    Inflector.tableize('MessageBusProperty')    -> 'message_bus_properties'
    */
    tableize: function(str) {
        str = this.pluralize(this.underscore(str));
        return str;
    },

    /*
    Inflector.classify('message_bus_properties')    -> 'MessageBusProperty'
    */
    classify: function(str) {
        str = this.singularize(this.camelize(str));
        return str;
    },

    /*
    Inflector.foreignKey('MessageBusProperty')       -> 'message_bus_property_id'
    Inflector.foreignKey('MessageBusProperty', true) -> 'message_bus_propertyid'
    */   
    foreignKey: function(str, dropIdUbar) {
        str = this.underscore(this.demodulize(str)) + ((dropIdUbar) ? ('') : ('_')) + 'id';
        return str;
    },

    /*
    Inflector.ordinalize('the 1 pitch')     -> 'the 1st pitch'
    */
    ordinalize: function(str) {
        var str_arr = str.split(' ');
        for (var x = 0; x < str_arr.length; x++)
        {
            var i = parseInt(str_arr[x]);
            if (i === NaN)
            {
                var ltd = str_arr[x].substring(str_arr[x].length - 2);
                var ld = str_arr[x].substring(str_arr[x].length - 1);
                var suf = "th";
                if (ltd != "11" && ltd != "12" && ltd != "13")
                {
                    if (ld === "1")
                    {
                        suf = "st";
                    }
                    else if (ld === "2")
                    {
                        suf = "nd";
                    }
                    else if (ld === "3")
                    {
                        suf = "rd";
                    }
                }
                str_arr[x] += suf;
            }
        }
        str = str_arr.join(' ');
        return str;
    }
}

if (true) {
    module.exports = _Inflector;
} else if (typeof define === "function" && define.amd) {
    define([], function(){
        return _Inflector;
    });
} else {
    window.Inflector = _Inflector;
}


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(95);

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(46);
var Axios = __webpack_require__(97);
var defaults = __webpack_require__(25);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(43);
axios.CancelToken = __webpack_require__(96);
axios.isCancel = __webpack_require__(44);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(111);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(43);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(25);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(98);
var dispatchRequest = __webpack_require__(99);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(102);
var isCancel = __webpack_require__(44);
var defaults = __webpack_require__(25);
var isAbsoluteURL = __webpack_require__(107);
var combineURLs = __webpack_require__(105);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(45);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(115), __esModule: true };

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(116), __esModule: true };

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(112);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(146);
module.exports = __webpack_require__(3).Object.assign;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(147);
var $Object = __webpack_require__(3).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(148);
__webpack_require__(150);
__webpack_require__(153);
__webpack_require__(149);
__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(3).Promise;


/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(35);
var toLength = __webpack_require__(63);
var toAbsoluteIndex = __webpack_require__(141);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(16);
var call = __webpack_require__(125);
var isArrayIter = __webpack_require__(124);
var anObject = __webpack_require__(4);
var toLength = __webpack_require__(63);
var getIterFn = __webpack_require__(144);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(29)(function () {
  return Object.defineProperty(__webpack_require__(28)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 123 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(10);
var ITERATOR = __webpack_require__(2)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(4);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(131);
var descriptor = __webpack_require__(59);
var setToStringTag = __webpack_require__(32);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(2)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(2)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var macrotask = __webpack_require__(62).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(15)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(56);
var gOPS = __webpack_require__(133);
var pIE = __webpack_require__(136);
var toObject = __webpack_require__(64);
var IObject = __webpack_require__(54);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(29)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(4);
var dPs = __webpack_require__(132);
var enumBugKeys = __webpack_require__(52);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(28)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(53).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var anObject = __webpack_require__(4);
var getKeys = __webpack_require__(56);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 133 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(17);
var toObject = __webpack_require__(64);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(17);
var toIObject = __webpack_require__(35);
var arrayIndexOf = __webpack_require__(120)(false);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 136 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(7);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(1);
var core = __webpack_require__(3);
var dP = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(5);
var SPECIES = __webpack_require__(2)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);
var defined = __webpack_require__(27);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(51);
var ITERATOR = __webpack_require__(2)('iterator');
var Iterators = __webpack_require__(10);
module.exports = __webpack_require__(3).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(118);
var step = __webpack_require__(128);
var Iterators = __webpack_require__(10);
var toIObject = __webpack_require__(35);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(55)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(6);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(130) });


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(6);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(5), 'Object', { defineProperty: __webpack_require__(11).f });


/***/ }),
/* 148 */
/***/ (function(module, exports) {



/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(30);
var global = __webpack_require__(1);
var ctx = __webpack_require__(16);
var classof = __webpack_require__(51);
var $export = __webpack_require__(6);
var isObject = __webpack_require__(9);
var aFunction = __webpack_require__(14);
var anInstance = __webpack_require__(119);
var forOf = __webpack_require__(121);
var speciesConstructor = __webpack_require__(61);
var task = __webpack_require__(62).set;
var microtask = __webpack_require__(129)();
var newPromiseCapabilityModule = __webpack_require__(31);
var perform = __webpack_require__(57);
var userAgent = __webpack_require__(143);
var promiseResolve = __webpack_require__(58);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(2)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(137)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(32)($Promise, PROMISE);
__webpack_require__(139)(PROMISE);
Wrapper = __webpack_require__(3)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(127)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(140)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(55)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(6);
var core = __webpack_require__(3);
var global = __webpack_require__(1);
var speciesConstructor = __webpack_require__(61);
var promiseResolve = __webpack_require__(58);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(6);
var newPromiseCapability = __webpack_require__(31);
var perform = __webpack_require__(57);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(145);
var global = __webpack_require__(1);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(10);
var TO_STRING_TAG = __webpack_require__(2)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Errors = __webpack_require__(66);

var _Errors2 = _interopRequireDefault(_Errors);

var _util = __webpack_require__(155);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Form = function () {
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     * @param {object} options
     */
    function Form() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Form);

        this.processing = false;
        this.successful = false;

        this.withData(data).withOptions(options).withErrors({});
    }

    _createClass(Form, [{
        key: 'withData',
        value: function withData(data) {
            if ((0, _util.isArray)(data)) {
                data = data.reduce(function (carry, element) {
                    carry[element] = '';
                    return carry;
                }, {});
            }

            this.setInitialValues(data);

            this.errors = new _Errors2.default();
            this.processing = false;
            this.successful = false;

            for (var field in data) {
                (0, _util.guardAgainstReservedFieldName)(field);

                this[field] = data[field];
            }

            return this;
        }
    }, {
        key: 'withErrors',
        value: function withErrors(errors) {
            this.errors = new _Errors2.default(errors);

            return this;
        }
    }, {
        key: 'withOptions',
        value: function withOptions(options) {
            this.__options = {
                resetOnSuccess: true
            };

            if (options.hasOwnProperty('resetOnSuccess')) {
                this.__options.resetOnSuccess = options.resetOnSuccess;
            }

            if (options.hasOwnProperty('onSuccess')) {
                this.onSuccess = options.onSuccess;
            }

            if (options.hasOwnProperty('onFail')) {
                this.onFail = options.onFail;
            }

            this.__http = options.http || window.axios || __webpack_require__(94);

            if (!this.__http) {
                throw new Error('No http library provided. Either pass an http option, or install axios.');
            }

            return this;
        }

        /**
         * Fetch all relevant data for the form.
         */

    }, {
        key: 'data',
        value: function data() {
            var data = {};

            for (var property in this.initial) {
                data[property] = this[property];
            }

            return data;
        }

        /**
         * Fetch specific data for the form.
         *
         * @param {array} fields
         * @return {object}
         */

    }, {
        key: 'only',
        value: function only(fields) {
            var _this = this;

            return fields.reduce(function (filtered, field) {
                filtered[field] = _this[field];
                return filtered;
            }, {});
        }

        /**
         * Reset the form fields.
         */

    }, {
        key: 'reset',
        value: function reset() {
            (0, _util.merge)(this, this.initial);

            this.errors.clear();
        }
    }, {
        key: 'setInitialValues',
        value: function setInitialValues(values) {
            this.initial = {};

            (0, _util.merge)(this.initial, values);
        }
    }, {
        key: 'populate',
        value: function populate(data) {
            var _this2 = this;

            Object.keys(data).forEach(function (field) {
                (0, _util.guardAgainstReservedFieldName)(field);

                if (_this2.hasOwnProperty(field)) {
                    (0, _util.merge)(_this2, _defineProperty({}, field, data[field]));
                }
            });

            return this;
        }

        /**
         * Clear the form fields.
         */

    }, {
        key: 'clear',
        value: function clear() {
            for (var field in this.initial) {
                this[field] = '';
            }

            this.errors.clear();
        }

        /**
         * Send a POST request to the given URL.
         *
         * @param {string} url
         */

    }, {
        key: 'post',
        value: function post(url) {
            return this.submit('post', url);
        }

        /**
         * Send a PUT request to the given URL.
         *
         * @param {string} url
         */

    }, {
        key: 'put',
        value: function put(url) {
            return this.submit('put', url);
        }

        /**
         * Send a PATCH request to the given URL.
         *
         * @param {string} url
         */

    }, {
        key: 'patch',
        value: function patch(url) {
            return this.submit('patch', url);
        }

        /**
         * Send a DELETE request to the given URL.
         *
         * @param {string} url
         */

    }, {
        key: 'delete',
        value: function _delete(url) {
            return this.submit('delete', url);
        }

        /**
         * Submit the form.
         *
         * @param {string} requestType
         * @param {string} url
         */

    }, {
        key: 'submit',
        value: function submit(requestType, url) {
            var _this3 = this;

            this.__validateRequestType(requestType);
            this.errors.clear();
            this.processing = true;
            this.successful = false;

            return new Promise(function (resolve, reject) {
                _this3.__http[requestType](url, _this3.hasFiles() ? (0, _util.objectToFormData)(_this3.data()) : _this3.data()).then(function (response) {
                    _this3.processing = false;
                    _this3.onSuccess(response.data);

                    resolve(response.data);
                }).catch(function (error) {
                    _this3.processing = false;
                    _this3.onFail(error);

                    reject(error);
                });
            });
        }
    }, {
        key: 'hasFiles',
        value: function hasFiles() {
            for (var property in this.initial) {
                if (this[property] instanceof File || this[property] instanceof FileList) {
                    return true;
                }
            }

            return false;
        }

        /**
         * Handle a successful form submission.
         *
         * @param {object} data
         */

    }, {
        key: 'onSuccess',
        value: function onSuccess(data) {
            this.successful = true;

            if (this.__options.resetOnSuccess) {
                this.reset();
            }
        }

        /**
         * Handle a failed form submission.
         *
         * @param {object} data
         */

    }, {
        key: 'onFail',
        value: function onFail(error) {
            this.successful = false;

            if (error.response && error.response.data.errors) {
                this.errors.record(error.response.data.errors);
            }
        }

        /**
         * Get the error message(s) for the given field.
         *
         * @param field
         */

    }, {
        key: 'hasError',
        value: function hasError(field) {
            return this.errors.has(field);
        }

        /**
         * Get the first error message for the given field.
         *
         * @param {string} field
         * @return {string}
         */

    }, {
        key: 'getError',
        value: function getError(field) {
            return this.errors.first(field);
        }

        /**
         * Get the error messages for the given field.
         *
         * @param {string} field
         * @return {array}
         */

    }, {
        key: 'getErrors',
        value: function getErrors(field) {
            return this.errors.get(field);
        }
    }, {
        key: '__validateRequestType',
        value: function __validateRequestType(requestType) {
            var requestTypes = ['get', 'delete', 'head', 'post', 'put', 'patch'];

            if (requestTypes.indexOf(requestType) === -1) {
                throw new Error('`' + requestType + '` is not a valid request type, ' + ('must be one of: `' + requestTypes.join('`, `') + '`.'));
            }
        }
    }], [{
        key: 'create',
        value: function create() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return new Form().withData(data);
        }
    }]);

    return Form;
}();

exports.default = Form;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isArray = isArray;
exports.guardAgainstReservedFieldName = guardAgainstReservedFieldName;
exports.merge = merge;
exports.cloneDeep = cloneDeep;
exports.objectToFormData = objectToFormData;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function isArray(object) {
    return Object.prototype.toString.call(object) === '[object Array]';
}

var reservedFieldNames = exports.reservedFieldNames = ['__http', '__options', '__validateRequestType', 'clear', 'data', 'delete', 'errors', 'getError', 'getErrors', 'hasError', 'initial', 'onFail', 'only', 'onSuccess', 'patch', 'populate', 'post', 'processing', 'successful', 'put', 'reset', 'submit', 'withData', 'withErrors', 'withOptions'];

function guardAgainstReservedFieldName(fieldName) {
    if (reservedFieldNames.indexOf(fieldName) !== -1) {
        throw new Error('Field name ' + fieldName + ' isn\'t allowed to be used in a Form or Errors instance.');
    }
}

function merge(a, b) {
    for (var key in b) {
        a[key] = cloneDeep(b[key]);
    }
}

function cloneDeep(object) {
    if (object === null) {
        return null;
    }

    if (Array.isArray(object)) {
        return [].concat(_toConsumableArray(object));
    }

    if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object') {
        var clone = {};

        for (var key in object) {
            clone[key] = cloneDeep(object[key]);
        }

        return clone;
    }

    return object;
}

function objectToFormData(object) {
    var formData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new FormData();
    var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    for (var property in object) {
        _appendToFormData(formData, _getKey(parent, property), object[property]);
    }

    return formData;
}

function _getKey(parent, property) {
    return parent ? parent + '[' + property + ']' : property;
}

function _appendToFormData(formData, key, value) {
    if (value instanceof Date) {
        return formData.append(key, value.toISOString());
    }

    if (value instanceof File) {
        return formData.append(key, value, value.name);
    }

    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
        return formData.append(key, value);
    }

    objectToFormData(value, formData, key);
}

/***/ }),
/* 156 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(190),
    hashDelete = __webpack_require__(191),
    hashGet = __webpack_require__(192),
    hashHas = __webpack_require__(193),
    hashSet = __webpack_require__(194);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(199),
    listCacheDelete = __webpack_require__(200),
    listCacheGet = __webpack_require__(201),
    listCacheHas = __webpack_require__(202),
    listCacheSet = __webpack_require__(203);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(37),
    root = __webpack_require__(12);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(204),
    mapCacheDelete = __webpack_require__(205),
    mapCacheGet = __webpack_require__(206),
    mapCacheHas = __webpack_require__(207),
    mapCacheSet = __webpack_require__(208);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 161 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 162 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 163 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 164 */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(167),
    createBaseEach = __webpack_require__(184);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(185);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(166),
    keys = __webpack_require__(232);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(181),
    toKey = __webpack_require__(220);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(19),
    isObjectLike = __webpack_require__(23);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(72),
    isMasked = __webpack_require__(198),
    isObject = __webpack_require__(8),
    toSource = __webpack_require__(221);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(19),
    isLength = __webpack_require__(73),
    isObjectLike = __webpack_require__(23);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(71),
    nativeKeys = __webpack_require__(210);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8),
    isPrototype = __webpack_require__(71),
    nativeKeysIn = __webpack_require__(211);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(39),
    overRest = __webpack_require__(215),
    setToString = __webpack_require__(216);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(223),
    defineProperty = __webpack_require__(187),
    identity = __webpack_require__(39);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 176 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),
/* 177 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(36),
    arrayMap = __webpack_require__(163),
    isArray = __webpack_require__(13),
    isSymbol = __webpack_require__(24);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 179 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(39);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(13),
    isKey = __webpack_require__(196),
    stringToPath = __webpack_require__(219),
    toString = __webpack_require__(74);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(176);

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(22);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 185 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__(182),
    hasUnicode = __webpack_require__(69),
    stringToArray = __webpack_require__(218),
    toString = __webpack_require__(74);

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(37);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(36);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 189 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(21);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 191 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(21);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(21);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(21);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(38),
    isArrayLike = __webpack_require__(22),
    isIndex = __webpack_require__(70),
    isObject = __webpack_require__(8);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(13),
    isSymbol = __webpack_require__(24);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 197 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(183);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 199 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(157),
    ListCache = __webpack_require__(158),
    Map = __webpack_require__(159);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(20);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(20);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(20);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(20);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(234);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(214);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 211 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(68);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(76)(module)))

/***/ }),
/* 213 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 214 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(161);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(175),
    shortOut = __webpack_require__(217);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 217 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(164),
    hasUnicode = __webpack_require__(69),
    unicodeToArray = __webpack_require__(222);

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(209);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(24);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 221 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 222 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),
/* 223 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8),
    now = __webpack_require__(235),
    toNumber = __webpack_require__(237);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(174),
    eq = __webpack_require__(38),
    isIterateeCall = __webpack_require__(195),
    keysIn = __webpack_require__(233);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

module.exports = defaults;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(227);


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(162),
    baseEach = __webpack_require__(165),
    castFunction = __webpack_require__(180),
    isArray = __webpack_require__(13);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(168);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(169),
    isObjectLike = __webpack_require__(23);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(12),
    stubFalse = __webpack_require__(236);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(76)(module)))

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(171),
    baseUnary = __webpack_require__(179),
    nodeUtil = __webpack_require__(212);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(67),
    baseKeys = __webpack_require__(172),
    isArrayLike = __webpack_require__(22);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(67),
    baseKeysIn = __webpack_require__(173),
    isArrayLike = __webpack_require__(22);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(160);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 236 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8),
    isSymbol = __webpack_require__(24);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__(186);

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(240);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 240 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 241 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("BaseChartMetric", {
    attrs: {
      card: _vm.card,
      options: _vm.options,
      title: _vm.title,
      ranges: _vm.card.ranges,
      "selected-range-key": _vm.selectedRangeKey,
      loading: _vm.loading
    },
    on: { selected: _vm.handleRangeSelected }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b9bc2c0a", module.exports)
  }
}

/***/ })
/******/ ]);