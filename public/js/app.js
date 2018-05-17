<<<<<<< HEAD
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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


/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(15);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_App__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_Hello__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_Hello___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__views_Hello__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_Home__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_Home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__views_Home__);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);





var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: __WEBPACK_IMPORTED_MODULE_4__views_Home___default.a
  }, {
    path: '/hello',
    name: 'hello',
    component: __WEBPACK_IMPORTED_MODULE_3__views_Hello___default.a
  }]
});

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  el: '#app',
  components: { App: __WEBPACK_IMPORTED_MODULE_2__views_App___default.a },
  router: router,
  data: function data() {
    return {
      step: 1,
      Vragen: {
        vraag1: null,
        vraag2: null,
        vraag3: null,
        vraag4: null,
        vraag5: null,
        vraag6: null,
        vraag7: null,
        vraag8: null,
        vraag9: null,
        vraag10: null
      }
    };
  },

  methods: {
    prev: function prev() {
      this.step--;
    },
    next: function next() {
      this.step++;
    },
    submit: function submit() {
      alert('Submit to blah and show blah and etc.');
    }
  }
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.16
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */


/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
})

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if ("development" !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    if (true) {
      for (var key in vm.$slots) {
        // $flow-disable-line
        vm.$slots[key]._rendered = false;
      }
    }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (true) {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ("development" !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ("development" !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.16';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
}

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
}

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = {
    value: value.trim()
  };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (true) {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (true) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  if (true) {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
}

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {}

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
}

var platformDirectives = {
  model: directive,
  show: show
}

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
}

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
}

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
}

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        "development" !== 'production' &&
        "development" !== 'test' &&
        isChrome
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ("development" !== 'production' &&
      "development" !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
}

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (true) {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
}

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
}

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([^]*?)\s+(?:in|of)\s+([^]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        if (true) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (true) {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (true) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (true) {
      warn$2(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '');
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (true) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if ("development" !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if ("development" !== 'production' && el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (true) {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$2 = {
  preTransformNode: preTransformNode
}

var modules$1 = [
  klass$1,
  style$1,
  model$2
]

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
}

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  esc: 'Escape',
  tab: 'Tab',
  enter: 'Enter',
  space: ' ',
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  'delete': ['Backspace', 'Delete']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    /* istanbul ignore if */
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : handler.value;
    /* istanbul ignore if */
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
}

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ("development" !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (true) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (true) {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (true) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (true) {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (true) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

module.exports = Vue;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(5).setImmediate))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(6);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(7)))

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ("development" !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (true) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

function extend (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "development" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (true) {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ("development" !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (true) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (true) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (true) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (true) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (true) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (true) {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "development" !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (true) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "development" !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["a"] = (VueRouter);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(10)
/* template */
var __vue_template__ = __webpack_require__(11)
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
Component.options.__file = "resources\\assets\\js\\views\\App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7cca96b8", Component.options)
  } else {
    hotAPI.reload("data-v-7cca96b8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, exports) {

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

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h1", [_vm._v("Reflectie")]),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.$parent.step === 1,
            expression: "$parent.step === 1"
          }
        ]
      },
      [
        _c("h1", [_vm._v("Wat heb je gezien en gehoord?")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.vraag1,
              expression: "vraag1"
            }
          ],
          attrs: { placeholder: "edit me" },
          domProps: { value: _vm.vraag1 },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.vraag1 = $event.target.value
            }
          }
        })
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.$parent.step === 2,
            expression: "$parent.step === 2"
          }
        ]
      },
      [_c("h1", [_vm._v("wat heb jij daarbij gedacht en gevoeld ?")])]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.$parent.step === 3,
            expression: "$parent.step === 3"
          }
        ]
      },
      [
        _c("h1", [
          _vm._v(
            "Wat raakt je in de situatie, welke waarde is voor jou in het geding ?"
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.$parent.step === 4,
            expression: "$parent.step === 4"
          }
        ]
      },
      [
        _c("h1", [
          _vm._v(
            "Welke andere waarden zijn er voor jou of voor andere in de situatie in het geding?"
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.$parent.step === 5,
            expression: "$parent.step === 5"
          }
        ]
      },
      [_c("h1", [_vm._v("Wie speelt welke rol en klopt dat volgens jou?")])]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.$parent.step === 6,
            expression: "$parent.step === 6"
          }
        ]
      },
      [
        _c("h1", [
          _vm._v("Wie heeft welk belang en wlke tegenstellingen zijn daarin?")
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.$parent.step === 7,
            expression: "$parent.step === 7"
          }
        ]
      },
      [
        _c("h1", [
          _vm._v("Formuleer je gewetensvraag, Begin met: moet..? Of: mag...?")
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.$parent.step === 8,
            expression: "$parent.step === 8"
          }
        ]
      },
      [_c("h1", [_vm._v("Zijn er nog meer gewetensvragen te formuleren?")])]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.$parent.step === 9,
            expression: "$parent.step === 9"
          }
        ]
      },
      [_c("h1", [_vm._v("Welke vragen zijn nog niet beantwoord?")])]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.$parent.step === 10,
            expression: "$parent.step === 10"
          }
        ]
      },
      [_c("h1", [_vm._v("Zijn er nog meer gewetensvragen te formuleren?")])]
    ),
    _vm._v(" "),
    _c(
      "button",
      {
        on: {
          click: function($event) {
            $event.preventDefault()
            _vm.$parent.prev()
          }
        }
      },
      [_vm._v("Previous")]
    ),
    _vm._v(" "),
    _c(
      "button",
      {
        on: {
          click: function($event) {
            $event.preventDefault()
            _vm.$parent.next()
          }
        }
      },
      [_vm._v("Next")]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [_c("router-view")], 1)
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7cca96b8", module.exports)
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = null
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
Component.options.__file = "resources\\assets\\js\\views\\Hello.vue"


module.exports = Component.exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(14)
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
Component.options.__file = "resources\\assets\\js\\views\\Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-11c5acec", Component.options)
  } else {
    hotAPI.reload("data-v-11c5acec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("p", [_vm._v("This is the homepage")])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-11c5acec", module.exports)
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
=======
!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=11)}([function(t,e,n){"use strict";var r=n(5),i=n(19),o=Object.prototype.toString;function a(t){return"[object Array]"===o.call(t)}function s(t){return null!==t&&"object"==typeof t}function u(t){return"[object Function]"===o.call(t)}function c(t,e){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),a(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}t.exports={isArray:a,isArrayBuffer:function(t){return"[object ArrayBuffer]"===o.call(t)},isBuffer:i,isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:s,isUndefined:function(t){return void 0===t},isDate:function(t){return"[object Date]"===o.call(t)},isFile:function(t){return"[object File]"===o.call(t)},isBlob:function(t){return"[object Blob]"===o.call(t)},isFunction:u,isStream:function(t){return s(t)&&u(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function t(){var e={};function n(n,r){"object"==typeof e[r]&&"object"==typeof n?e[r]=t(e[r],n):e[r]=n}for(var r=0,i=arguments.length;r<i;r++)c(arguments[r],n);return e},extend:function(t,e,n){return c(e,function(e,i){t[i]=n&&"function"==typeof e?r(e,n):e}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";(function(e){var r=n(0),i=n(21),o={"Content-Type":"application/x-www-form-urlencoded"};function a(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var s,u={adapter:("undefined"!=typeof XMLHttpRequest?s=n(7):void 0!==e&&(s=n(7)),s),transformRequest:[function(t,e){return i(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(a(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(a(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(t){u.headers[t]={}}),r.forEach(["post","put","patch"],function(t){u.headers[t]=r.merge(o)}),t.exports=u}).call(e,n(6))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){for(var n="undefined"!=typeof window&&"undefined"!=typeof document,r=["Edge","Trident","Firefox"],i=0,o=0;o<r.length;o+=1)if(n&&navigator.userAgent.indexOf(r[o])>=0){i=1;break}var a=n&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},i))}};function s(t){return t&&"[object Function]"==={}.toString.call(t)}function u(t,e){if(1!==t.nodeType)return[];var n=getComputedStyle(t,null);return e?n[e]:n}function c(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function l(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=u(t),n=e.overflow,r=e.overflowX,i=e.overflowY;return/(auto|scroll)/.test(n+i+r)?t:l(c(t))}function f(t){var e=t&&t.offsetParent,n=e&&e.nodeName;return n&&"BODY"!==n&&"HTML"!==n?-1!==["TD","TABLE"].indexOf(e.nodeName)&&"static"===u(e,"position")?f(e):e:t?t.ownerDocument.documentElement:document.documentElement}function p(t){return null!==t.parentNode?p(t.parentNode):t}function d(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,r=n?t:e,i=n?e:t,o=document.createRange();o.setStart(r,0),o.setEnd(i,0);var a,s,u=o.commonAncestorContainer;if(t!==u&&e!==u||r.contains(i))return"BODY"===(s=(a=u).nodeName)||"HTML"!==s&&f(a.firstElementChild)!==a?f(u):u;var c=p(t);return c.host?d(c.host,e):d(t,p(e).host)}function h(t){var e="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=t.nodeName;if("BODY"===n||"HTML"===n){var r=t.ownerDocument.documentElement;return(t.ownerDocument.scrollingElement||r)[e]}return t[e]}function v(t,e){var n="x"===e?"Left":"Top",r="Left"===n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"],10)+parseFloat(t["border"+r+"Width"],10)}var g=void 0,m=function(){return void 0===g&&(g=-1!==navigator.appVersion.indexOf("MSIE 10")),g};function y(t,e,n,r){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],m()?n["offset"+t]+r["margin"+("Height"===t?"Top":"Left")]+r["margin"+("Height"===t?"Bottom":"Right")]:0)}function _(){var t=document.body,e=document.documentElement,n=m()&&getComputedStyle(e);return{height:y("Height",t,e,n),width:y("Width",t,e,n)}}var b=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},w=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),x=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function T(t){return C({},t,{right:t.left+t.width,bottom:t.top+t.height})}function E(t){var e={};if(m())try{e=t.getBoundingClientRect();var n=h(t,"top"),r=h(t,"left");e.top+=n,e.left+=r,e.bottom+=n,e.right+=r}catch(t){}else e=t.getBoundingClientRect();var i={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},o="HTML"===t.nodeName?_():{},a=o.width||t.clientWidth||i.right-i.left,s=o.height||t.clientHeight||i.bottom-i.top,c=t.offsetWidth-a,l=t.offsetHeight-s;if(c||l){var f=u(t);c-=v(f,"x"),l-=v(f,"y"),i.width-=c,i.height-=l}return T(i)}function A(t,e){var n=m(),r="HTML"===e.nodeName,i=E(t),o=E(e),a=l(t),s=u(e),c=parseFloat(s.borderTopWidth,10),f=parseFloat(s.borderLeftWidth,10),p=T({top:i.top-o.top-c,left:i.left-o.left-f,width:i.width,height:i.height});if(p.marginTop=0,p.marginLeft=0,!n&&r){var d=parseFloat(s.marginTop,10),v=parseFloat(s.marginLeft,10);p.top-=c-d,p.bottom-=c-d,p.left-=f-v,p.right-=f-v,p.marginTop=d,p.marginLeft=v}return(n?e.contains(a):e===a&&"BODY"!==a.nodeName)&&(p=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=h(e,"top"),i=h(e,"left"),o=n?-1:1;return t.top+=r*o,t.bottom+=r*o,t.left+=i*o,t.right+=i*o,t}(p,e)),p}function S(t,e,n,r){var i,o,a,s,f,p,v,g={top:0,left:0},m=d(t,e);if("viewport"===r)o=(i=m).ownerDocument.documentElement,a=A(i,o),s=Math.max(o.clientWidth,window.innerWidth||0),f=Math.max(o.clientHeight,window.innerHeight||0),p=h(o),v=h(o,"left"),g=T({top:p-a.top+a.marginTop,left:v-a.left+a.marginLeft,width:s,height:f});else{var y=void 0;"scrollParent"===r?"BODY"===(y=l(c(e))).nodeName&&(y=t.ownerDocument.documentElement):y="window"===r?t.ownerDocument.documentElement:r;var b=A(y,m);if("HTML"!==y.nodeName||function t(e){var n=e.nodeName;return"BODY"!==n&&"HTML"!==n&&("fixed"===u(e,"position")||t(c(e)))}(m))g=b;else{var w=_(),x=w.height,C=w.width;g.top+=b.top-b.marginTop,g.bottom=x+b.top,g.left+=b.left-b.marginLeft,g.right=C+b.left}}return g.left+=n,g.top+=n,g.right-=n,g.bottom-=n,g}function k(t,e,n,r,i){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var a=S(n,r,o,i),s={top:{width:a.width,height:e.top-a.top},right:{width:a.right-e.right,height:a.height},bottom:{width:a.width,height:a.bottom-e.bottom},left:{width:e.left-a.left,height:a.height}},u=Object.keys(s).map(function(t){return C({key:t},s[t],{area:(e=s[t],e.width*e.height)});var e}).sort(function(t,e){return e.area-t.area}),c=u.filter(function(t){var e=t.width,r=t.height;return e>=n.clientWidth&&r>=n.clientHeight}),l=c.length>0?c[0].key:u[0].key,f=t.split("-")[1];return l+(f?"-"+f:"")}function O(t,e,n){return A(n,d(e,n))}function D(t){var e=getComputedStyle(t),n=parseFloat(e.marginTop)+parseFloat(e.marginBottom),r=parseFloat(e.marginLeft)+parseFloat(e.marginRight);return{width:t.offsetWidth+r,height:t.offsetHeight+n}}function I(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function N(t,e,n){n=n.split("-")[0];var r=D(t),i={width:r.width,height:r.height},o=-1!==["right","left"].indexOf(n),a=o?"top":"left",s=o?"left":"top",u=o?"height":"width",c=o?"width":"height";return i[a]=e[a]+e[u]/2-r[u]/2,i[s]=n===s?e[s]-r[c]:e[I(s)],i}function j(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function L(t,e,n){return(void 0===n?t:t.slice(0,function(t,e,n){if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===n});var r=j(t,function(t){return t[e]===n});return t.indexOf(r)}(t,"name",n))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=t.function||t.fn;t.enabled&&s(n)&&(e.offsets.popper=T(e.offsets.popper),e.offsets.reference=T(e.offsets.reference),e=n(e,t))}),e}function $(t,e){return t.some(function(t){var n=t.name;return t.enabled&&n===e})}function R(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),r=0;r<e.length-1;r++){var i=e[r],o=i?""+i+n:t;if(void 0!==document.body.style[o])return o}return null}function P(t){var e=t.ownerDocument;return e?e.defaultView:window}function M(t,e,n,r){n.updateBound=r,P(t).addEventListener("resize",n.updateBound,{passive:!0});var i=l(t);return function t(e,n,r,i){var o="BODY"===e.nodeName,a=o?e.ownerDocument.defaultView:e;a.addEventListener(n,r,{passive:!0}),o||t(l(a.parentNode),n,r,i),i.push(a)}(i,"scroll",n.updateBound,n.scrollParents),n.scrollElement=i,n.eventsEnabled=!0,n}function F(){var t,e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,P(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function H(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function B(t,e){Object.keys(e).forEach(function(n){var r="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&H(e[n])&&(r="px"),t.style[n]=e[n]+r})}function W(t,e,n){var r=j(t,function(t){return t.name===e}),i=!!r&&t.some(function(t){return t.name===n&&t.enabled&&t.order<r.order});if(!i){var o="`"+e+"`",a="`"+n+"`";console.warn(a+" modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return i}var q=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],U=q.slice(3);function z(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=U.indexOf(t),r=U.slice(n+1).concat(U.slice(0,n));return e?r.reverse():r}var V={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function K(t,e,n,r){var i=[0,0],o=-1!==["right","left"].indexOf(r),a=t.split(/(\+|\-)/).map(function(t){return t.trim()}),s=a.indexOf(j(a,function(t){return-1!==t.search(/,|\s/)}));a[s]&&-1===a[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var u=/\s*,\s*|\s+/,c=-1!==s?[a.slice(0,s).concat([a[s].split(u)[0]]),[a[s].split(u)[1]].concat(a.slice(s+1))]:[a];return(c=c.map(function(t,r){var i=(1===r?!o:o)?"height":"width",a=!1;return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,a=!0,t):a?(t[t.length-1]+=e,a=!1,t):t.concat(e)},[]).map(function(t){return function(t,e,n,r){var i=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+i[1],a=i[2];if(!o)return t;if(0===a.indexOf("%")){var s=void 0;switch(a){case"%p":s=n;break;case"%":case"%r":default:s=r}return T(s)[e]/100*o}if("vh"===a||"vw"===a)return("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*o;return o}(t,i,e,n)})})).forEach(function(t,e){t.forEach(function(n,r){H(n)&&(i[e]+=n*("-"===t[r-1]?-1:1))})}),i}var Q={placement:"bottom",eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,n=e.split("-")[0],r=e.split("-")[1];if(r){var i=t.offsets,o=i.reference,a=i.popper,s=-1!==["bottom","top"].indexOf(n),u=s?"left":"top",c=s?"width":"height",l={start:x({},u,o[u]),end:x({},u,o[u]+o[c]-a[c])};t.offsets.popper=C({},a,l[r])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var n=e.offset,r=t.placement,i=t.offsets,o=i.popper,a=i.reference,s=r.split("-")[0],u=void 0;return u=H(+n)?[+n,0]:K(n,o,a,s),"left"===s?(o.top+=u[0],o.left-=u[1]):"right"===s?(o.top+=u[0],o.left+=u[1]):"top"===s?(o.left+=u[0],o.top-=u[1]):"bottom"===s&&(o.left+=u[0],o.top+=u[1]),t.popper=o,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){var n=e.boundariesElement||f(t.instance.popper);t.instance.reference===n&&(n=f(n));var r=S(t.instance.popper,t.instance.reference,e.padding,n);e.boundaries=r;var i=e.priority,o=t.offsets.popper,a={primary:function(t){var n=o[t];return o[t]<r[t]&&!e.escapeWithReference&&(n=Math.max(o[t],r[t])),x({},t,n)},secondary:function(t){var n="right"===t?"left":"top",i=o[n];return o[t]>r[t]&&!e.escapeWithReference&&(i=Math.min(o[n],r[t]-("right"===t?o.width:o.height))),x({},n,i)}};return i.forEach(function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";o=C({},o,a[e](t))}),t.offsets.popper=o,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,r=e.reference,i=t.placement.split("-")[0],o=Math.floor,a=-1!==["top","bottom"].indexOf(i),s=a?"right":"bottom",u=a?"left":"top",c=a?"width":"height";return n[s]<o(r[u])&&(t.offsets.popper[u]=o(r[u])-n[c]),n[u]>o(r[s])&&(t.offsets.popper[u]=o(r[s])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var n;if(!W(t.instance.modifiers,"arrow","keepTogether"))return t;var r=e.element;if("string"==typeof r){if(!(r=t.instance.popper.querySelector(r)))return t}else if(!t.instance.popper.contains(r))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var i=t.placement.split("-")[0],o=t.offsets,a=o.popper,s=o.reference,c=-1!==["left","right"].indexOf(i),l=c?"height":"width",f=c?"Top":"Left",p=f.toLowerCase(),d=c?"left":"top",h=c?"bottom":"right",v=D(r)[l];s[h]-v<a[p]&&(t.offsets.popper[p]-=a[p]-(s[h]-v)),s[p]+v>a[h]&&(t.offsets.popper[p]+=s[p]+v-a[h]),t.offsets.popper=T(t.offsets.popper);var g=s[p]+s[l]/2-v/2,m=u(t.instance.popper),y=parseFloat(m["margin"+f],10),_=parseFloat(m["border"+f+"Width"],10),b=g-t.offsets.popper[p]-y-_;return b=Math.max(Math.min(a[l]-v,b),0),t.arrowElement=r,t.offsets.arrow=(x(n={},p,Math.round(b)),x(n,d,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(t,e){if($(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var n=S(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement),r=t.placement.split("-")[0],i=I(r),o=t.placement.split("-")[1]||"",a=[];switch(e.behavior){case V.FLIP:a=[r,i];break;case V.CLOCKWISE:a=z(r);break;case V.COUNTERCLOCKWISE:a=z(r,!0);break;default:a=e.behavior}return a.forEach(function(s,u){if(r!==s||a.length===u+1)return t;r=t.placement.split("-")[0],i=I(r);var c,l=t.offsets.popper,f=t.offsets.reference,p=Math.floor,d="left"===r&&p(l.right)>p(f.left)||"right"===r&&p(l.left)<p(f.right)||"top"===r&&p(l.bottom)>p(f.top)||"bottom"===r&&p(l.top)<p(f.bottom),h=p(l.left)<p(n.left),v=p(l.right)>p(n.right),g=p(l.top)<p(n.top),m=p(l.bottom)>p(n.bottom),y="left"===r&&h||"right"===r&&v||"top"===r&&g||"bottom"===r&&m,_=-1!==["top","bottom"].indexOf(r),b=!!e.flipVariations&&(_&&"start"===o&&h||_&&"end"===o&&v||!_&&"start"===o&&g||!_&&"end"===o&&m);(d||y||b)&&(t.flipped=!0,(d||y)&&(r=a[u+1]),b&&(o="end"===(c=o)?"start":"start"===c?"end":c),t.placement=r+(o?"-"+o:""),t.offsets.popper=C({},t.offsets.popper,N(t.instance.popper,t.offsets.reference,t.placement)),t=L(t.instance.modifiers,t,"flip"))}),t},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],r=t.offsets,i=r.popper,o=r.reference,a=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return i[a?"left":"top"]=o[n]-(s?i[a?"width":"height"]:0),t.placement=I(e),t.offsets.popper=T(i),t}},hide:{order:800,enabled:!0,fn:function(t){if(!W(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=j(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,r=e.y,i=t.offsets.popper,o=j(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration;void 0!==o&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a=void 0!==o?o:e.gpuAcceleration,s=E(f(t.instance.popper)),u={position:i.position},c={left:Math.floor(i.left),top:Math.floor(i.top),bottom:Math.floor(i.bottom),right:Math.floor(i.right)},l="bottom"===n?"top":"bottom",p="right"===r?"left":"right",d=R("transform"),h=void 0,v=void 0;if(v="bottom"===l?-s.height+c.bottom:c.top,h="right"===p?-s.width+c.right:c.left,a&&d)u[d]="translate3d("+h+"px, "+v+"px, 0)",u[l]=0,u[p]=0,u.willChange="transform";else{var g="bottom"===l?-1:1,m="right"===p?-1:1;u[l]=v*g,u[p]=h*m,u.willChange=l+", "+p}var y={"x-placement":t.placement};return t.attributes=C({},y,t.attributes),t.styles=C({},u,t.styles),t.arrowStyles=C({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var e,n;return B(t.instance.popper,t.styles),e=t.instance.popper,n=t.attributes,Object.keys(n).forEach(function(t){!1!==n[t]?e.setAttribute(t,n[t]):e.removeAttribute(t)}),t.arrowElement&&Object.keys(t.arrowStyles).length&&B(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,n,r,i){var o=O(0,e,t),a=k(n.placement,o,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",a),B(e,{position:"absolute"}),n},gpuAcceleration:void 0}}},G=function(){function t(e,n){var r=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};b(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=a(this.update.bind(this)),this.options=C({},t.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(C({},t.Defaults.modifiers,i.modifiers)).forEach(function(e){r.options.modifiers[e]=C({},t.Defaults.modifiers[e]||{},i.modifiers?i.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return C({name:t},r.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&s(t.onLoad)&&t.onLoad(r.reference,r.popper,r.options,t,r.state)}),this.update();var o=this.options.eventsEnabled;o&&this.enableEventListeners(),this.state.eventsEnabled=o}return w(t,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=O(this.state,this.popper,this.reference),t.placement=k(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.offsets.popper=N(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position="absolute",t=L(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,$(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.left="",this.popper.style.position="",this.popper.style.top="",this.popper.style[R("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=M(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return F.call(this)}}]),t}();G.Utils=("undefined"!=typeof window?window:t).PopperUtils,G.placements=q,G.Defaults=Q,e.default=G}.call(e,n(1))},function(t,e,n){var r;!function(e,n){"use strict";"object"==typeof t&&"object"==typeof t.exports?t.exports=e.document?n(e,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return n(t)}:n(e)}("undefined"!=typeof window?window:this,function(n,i){"use strict";var o=[],a=n.document,s=Object.getPrototypeOf,u=o.slice,c=o.concat,l=o.push,f=o.indexOf,p={},d=p.toString,h=p.hasOwnProperty,v=h.toString,g=v.call(Object),m={};function y(t,e){var n=(e=e||a).createElement("script");n.text=t,e.head.appendChild(n).parentNode.removeChild(n)}var _=function(t,e){return new _.fn.init(t,e)},b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^-ms-/,x=/-([a-z])/g,C=function(t,e){return e.toUpperCase()};function T(t){var e=!!t&&"length"in t&&t.length,n=_.type(t);return"function"!==n&&!_.isWindow(t)&&("array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t)}_.fn=_.prototype={jquery:"3.2.1",constructor:_,length:0,toArray:function(){return u.call(this)},get:function(t){return null==t?u.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var e=_.merge(this.constructor(),t);return e.prevObject=this,e},each:function(t){return _.each(this,t)},map:function(t){return this.pushStack(_.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return this.pushStack(u.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,n=+t+(t<0?e:0);return this.pushStack(n>=0&&n<e?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:o.sort,splice:o.splice},_.extend=_.fn.extend=function(){var t,e,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,c=!1;for("boolean"==typeof a&&(c=a,a=arguments[s]||{},s++),"object"==typeof a||_.isFunction(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(t=arguments[s]))for(e in t)n=a[e],a!==(r=t[e])&&(c&&r&&(_.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&_.isPlainObject(n)?n:{},a[e]=_.extend(c,o,r)):void 0!==r&&(a[e]=r));return a},_.extend({expando:"jQuery"+("3.2.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isFunction:function(t){return"function"===_.type(t)},isWindow:function(t){return null!=t&&t===t.window},isNumeric:function(t){var e=_.type(t);return("number"===e||"string"===e)&&!isNaN(t-parseFloat(t))},isPlainObject:function(t){var e,n;return!(!t||"[object Object]"!==d.call(t))&&(!(e=s(t))||"function"==typeof(n=h.call(e,"constructor")&&e.constructor)&&v.call(n)===g)},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?p[d.call(t)]||"object":typeof t},globalEval:function(t){y(t)},camelCase:function(t){return t.replace(w,"ms-").replace(x,C)},each:function(t,e){var n,r=0;if(T(t))for(n=t.length;r<n&&!1!==e.call(t[r],r,t[r]);r++);else for(r in t)if(!1===e.call(t[r],r,t[r]))break;return t},trim:function(t){return null==t?"":(t+"").replace(b,"")},makeArray:function(t,e){var n=e||[];return null!=t&&(T(Object(t))?_.merge(n,"string"==typeof t?[t]:t):l.call(n,t)),n},inArray:function(t,e,n){return null==e?-1:f.call(e,t,n)},merge:function(t,e){for(var n=+e.length,r=0,i=t.length;r<n;r++)t[i++]=e[r];return t.length=i,t},grep:function(t,e,n){for(var r=[],i=0,o=t.length,a=!n;i<o;i++)!e(t[i],i)!==a&&r.push(t[i]);return r},map:function(t,e,n){var r,i,o=0,a=[];if(T(t))for(r=t.length;o<r;o++)null!=(i=e(t[o],o,n))&&a.push(i);else for(o in t)null!=(i=e(t[o],o,n))&&a.push(i);return c.apply([],a)},guid:1,proxy:function(t,e){var n,r,i;if("string"==typeof e&&(n=t[e],e=t,t=n),_.isFunction(t))return r=u.call(arguments,2),(i=function(){return t.apply(e||this,r.concat(u.call(arguments)))}).guid=t.guid=t.guid||_.guid++,i},now:Date.now,support:m}),"function"==typeof Symbol&&(_.fn[Symbol.iterator]=o[Symbol.iterator]),_.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){p["[object "+e+"]"]=e.toLowerCase()});var E=function(t){var e,n,r,i,o,a,s,u,c,l,f,p,d,h,v,g,m,y,_,b="sizzle"+1*new Date,w=t.document,x=0,C=0,T=at(),E=at(),A=at(),S=function(t,e){return t===e&&(f=!0),0},k={}.hasOwnProperty,O=[],D=O.pop,I=O.push,N=O.push,j=O.slice,L=function(t,e){for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1},$="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",R="[\\x20\\t\\r\\n\\f]",P="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+R+"*("+P+")(?:"+R+"*([*^$|!~]?=)"+R+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+P+"))|)"+R+"*\\]",F=":("+P+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",H=new RegExp(R+"+","g"),B=new RegExp("^"+R+"+|((?:^|[^\\\\])(?:\\\\.)*)"+R+"+$","g"),W=new RegExp("^"+R+"*,"+R+"*"),q=new RegExp("^"+R+"*([>+~]|"+R+")"+R+"*"),U=new RegExp("="+R+"*([^\\]'\"]*?)"+R+"*\\]","g"),z=new RegExp(F),V=new RegExp("^"+P+"$"),K={ID:new RegExp("^#("+P+")"),CLASS:new RegExp("^\\.("+P+")"),TAG:new RegExp("^("+P+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+R+"*(even|odd|(([+-]|)(\\d*)n|)"+R+"*(?:([+-]|)"+R+"*(\\d+)|))"+R+"*\\)|)","i"),bool:new RegExp("^(?:"+$+")$","i"),needsContext:new RegExp("^"+R+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+R+"*((?:-\\d)?\\d*)"+R+"*\\)|)(?=[^-]|$)","i")},Q=/^(?:input|select|textarea|button)$/i,G=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,X=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,J=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+R+"?|("+R+")|.)","ig"),tt=function(t,e,n){var r="0x"+e-65536;return r!=r||n?e:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},et=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,nt=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},rt=function(){p()},it=yt(function(t){return!0===t.disabled&&("form"in t||"label"in t)},{dir:"parentNode",next:"legend"});try{N.apply(O=j.call(w.childNodes),w.childNodes),O[w.childNodes.length].nodeType}catch(t){N={apply:O.length?function(t,e){I.apply(t,j.call(e))}:function(t,e){for(var n=t.length,r=0;t[n++]=e[r++];);t.length=n-1}}}function ot(t,e,r,i){var o,s,c,l,f,h,m,y=e&&e.ownerDocument,x=e?e.nodeType:9;if(r=r||[],"string"!=typeof t||!t||1!==x&&9!==x&&11!==x)return r;if(!i&&((e?e.ownerDocument||e:w)!==d&&p(e),e=e||d,v)){if(11!==x&&(f=X.exec(t)))if(o=f[1]){if(9===x){if(!(c=e.getElementById(o)))return r;if(c.id===o)return r.push(c),r}else if(y&&(c=y.getElementById(o))&&_(e,c)&&c.id===o)return r.push(c),r}else{if(f[2])return N.apply(r,e.getElementsByTagName(t)),r;if((o=f[3])&&n.getElementsByClassName&&e.getElementsByClassName)return N.apply(r,e.getElementsByClassName(o)),r}if(n.qsa&&!A[t+" "]&&(!g||!g.test(t))){if(1!==x)y=e,m=t;else if("object"!==e.nodeName.toLowerCase()){for((l=e.getAttribute("id"))?l=l.replace(et,nt):e.setAttribute("id",l=b),s=(h=a(t)).length;s--;)h[s]="#"+l+" "+mt(h[s]);m=h.join(","),y=J.test(t)&&vt(e.parentNode)||e}if(m)try{return N.apply(r,y.querySelectorAll(m)),r}catch(t){}finally{l===b&&e.removeAttribute("id")}}}return u(t.replace(B,"$1"),e,r,i)}function at(){var t=[];return function e(n,i){return t.push(n+" ")>r.cacheLength&&delete e[t.shift()],e[n+" "]=i}}function st(t){return t[b]=!0,t}function ut(t){var e=d.createElement("fieldset");try{return!!t(e)}catch(t){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function ct(t,e){for(var n=t.split("|"),i=n.length;i--;)r.attrHandle[n[i]]=e}function lt(t,e){var n=e&&t,r=n&&1===t.nodeType&&1===e.nodeType&&t.sourceIndex-e.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===e)return-1;return t?1:-1}function ft(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function pt(t){return function(e){var n=e.nodeName.toLowerCase();return("input"===n||"button"===n)&&e.type===t}}function dt(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&it(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ht(t){return st(function(e){return e=+e,st(function(n,r){for(var i,o=t([],n.length,e),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function vt(t){return t&&void 0!==t.getElementsByTagName&&t}n=ot.support={},o=ot.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement;return!!e&&"HTML"!==e.nodeName},p=ot.setDocument=function(t){var e,i,a=t?t.ownerDocument||t:w;return a!==d&&9===a.nodeType&&a.documentElement?(h=(d=a).documentElement,v=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",rt,!1):i.attachEvent&&i.attachEvent("onunload",rt)),n.attributes=ut(function(t){return t.className="i",!t.getAttribute("className")}),n.getElementsByTagName=ut(function(t){return t.appendChild(d.createComment("")),!t.getElementsByTagName("*").length}),n.getElementsByClassName=Y.test(d.getElementsByClassName),n.getById=ut(function(t){return h.appendChild(t).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(t){var e=t.replace(Z,tt);return function(t){return t.getAttribute("id")===e}},r.find.ID=function(t,e){if(void 0!==e.getElementById&&v){var n=e.getElementById(t);return n?[n]:[]}}):(r.filter.ID=function(t){var e=t.replace(Z,tt);return function(t){var n=void 0!==t.getAttributeNode&&t.getAttributeNode("id");return n&&n.value===e}},r.find.ID=function(t,e){if(void 0!==e.getElementById&&v){var n,r,i,o=e.getElementById(t);if(o){if((n=o.getAttributeNode("id"))&&n.value===t)return[o];for(i=e.getElementsByName(t),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===t)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(t,e){return void 0!==e.getElementsByTagName?e.getElementsByTagName(t):n.qsa?e.querySelectorAll(t):void 0}:function(t,e){var n,r=[],i=0,o=e.getElementsByTagName(t);if("*"===t){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(t,e){if(void 0!==e.getElementsByClassName&&v)return e.getElementsByClassName(t)},m=[],g=[],(n.qsa=Y.test(d.querySelectorAll))&&(ut(function(t){h.appendChild(t).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&g.push("[*^$]="+R+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||g.push("\\["+R+"*(?:value|"+$+")"),t.querySelectorAll("[id~="+b+"-]").length||g.push("~="),t.querySelectorAll(":checked").length||g.push(":checked"),t.querySelectorAll("a#"+b+"+*").length||g.push(".#.+[+~]")}),ut(function(t){t.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var e=d.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&g.push("name"+R+"*[*^$|!~]?="),2!==t.querySelectorAll(":enabled").length&&g.push(":enabled",":disabled"),h.appendChild(t).disabled=!0,2!==t.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),g.push(",.*:")})),(n.matchesSelector=Y.test(y=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ut(function(t){n.disconnectedMatch=y.call(t,"*"),y.call(t,"[s!='']:x"),m.push("!=",F)}),g=g.length&&new RegExp(g.join("|")),m=m.length&&new RegExp(m.join("|")),e=Y.test(h.compareDocumentPosition),_=e||Y.test(h.contains)?function(t,e){var n=9===t.nodeType?t.documentElement:t,r=e&&e.parentNode;return t===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):t.compareDocumentPosition&&16&t.compareDocumentPosition(r)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},S=e?function(t,e){if(t===e)return f=!0,0;var r=!t.compareDocumentPosition-!e.compareDocumentPosition;return r||(1&(r=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1)||!n.sortDetached&&e.compareDocumentPosition(t)===r?t===d||t.ownerDocument===w&&_(w,t)?-1:e===d||e.ownerDocument===w&&_(w,e)?1:l?L(l,t)-L(l,e):0:4&r?-1:1)}:function(t,e){if(t===e)return f=!0,0;var n,r=0,i=t.parentNode,o=e.parentNode,a=[t],s=[e];if(!i||!o)return t===d?-1:e===d?1:i?-1:o?1:l?L(l,t)-L(l,e):0;if(i===o)return lt(t,e);for(n=t;n=n.parentNode;)a.unshift(n);for(n=e;n=n.parentNode;)s.unshift(n);for(;a[r]===s[r];)r++;return r?lt(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},ot.matches=function(t,e){return ot(t,null,null,e)},ot.matchesSelector=function(t,e){if((t.ownerDocument||t)!==d&&p(t),e=e.replace(U,"='$1']"),n.matchesSelector&&v&&!A[e+" "]&&(!m||!m.test(e))&&(!g||!g.test(e)))try{var r=y.call(t,e);if(r||n.disconnectedMatch||t.document&&11!==t.document.nodeType)return r}catch(t){}return ot(e,d,null,[t]).length>0},ot.contains=function(t,e){return(t.ownerDocument||t)!==d&&p(t),_(t,e)},ot.attr=function(t,e){(t.ownerDocument||t)!==d&&p(t);var i=r.attrHandle[e.toLowerCase()],o=i&&k.call(r.attrHandle,e.toLowerCase())?i(t,e,!v):void 0;return void 0!==o?o:n.attributes||!v?t.getAttribute(e):(o=t.getAttributeNode(e))&&o.specified?o.value:null},ot.escape=function(t){return(t+"").replace(et,nt)},ot.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},ot.uniqueSort=function(t){var e,r=[],i=0,o=0;if(f=!n.detectDuplicates,l=!n.sortStable&&t.slice(0),t.sort(S),f){for(;e=t[o++];)e===t[o]&&(i=r.push(o));for(;i--;)t.splice(r[i],1)}return l=null,t},i=ot.getText=function(t){var e,n="",r=0,o=t.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=i(t)}else if(3===o||4===o)return t.nodeValue}else for(;e=t[r++];)n+=i(e);return n},(r=ot.selectors={cacheLength:50,createPseudo:st,match:K,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(Z,tt),t[3]=(t[3]||t[4]||t[5]||"").replace(Z,tt),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||ot.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&ot.error(t[0]),t},PSEUDO:function(t){var e,n=!t[6]&&t[2];return K.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":n&&z.test(n)&&(e=a(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(Z,tt).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=T[t+" "];return e||(e=new RegExp("(^|"+R+")"+t+"("+R+"|$)"))&&T(t,function(t){return e.test("string"==typeof t.className&&t.className||void 0!==t.getAttribute&&t.getAttribute("class")||"")})},ATTR:function(t,e,n){return function(r){var i=ot.attr(r,t);return null==i?"!="===e:!e||(i+="","="===e?i===n:"!="===e?i!==n:"^="===e?n&&0===i.indexOf(n):"*="===e?n&&i.indexOf(n)>-1:"$="===e?n&&i.slice(-n.length)===n:"~="===e?(" "+i.replace(H," ")+" ").indexOf(n)>-1:"|="===e&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(t,e,n,r,i){var o="nth"!==t.slice(0,3),a="last"!==t.slice(-4),s="of-type"===e;return 1===r&&0===i?function(t){return!!t.parentNode}:function(e,n,u){var c,l,f,p,d,h,v=o!==a?"nextSibling":"previousSibling",g=e.parentNode,m=s&&e.nodeName.toLowerCase(),y=!u&&!s,_=!1;if(g){if(o){for(;v;){for(p=e;p=p[v];)if(s?p.nodeName.toLowerCase()===m:1===p.nodeType)return!1;h=v="only"===t&&!h&&"nextSibling"}return!0}if(h=[a?g.firstChild:g.lastChild],a&&y){for(_=(d=(c=(l=(f=(p=g)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[t]||[])[0]===x&&c[1])&&c[2],p=d&&g.childNodes[d];p=++d&&p&&p[v]||(_=d=0)||h.pop();)if(1===p.nodeType&&++_&&p===e){l[t]=[x,d,_];break}}else if(y&&(_=d=(c=(l=(f=(p=e)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[t]||[])[0]===x&&c[1]),!1===_)for(;(p=++d&&p&&p[v]||(_=d=0)||h.pop())&&((s?p.nodeName.toLowerCase()!==m:1!==p.nodeType)||!++_||(y&&((l=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[t]=[x,_]),p!==e)););return(_-=i)===r||_%r==0&&_/r>=0}}},PSEUDO:function(t,e){var n,i=r.pseudos[t]||r.setFilters[t.toLowerCase()]||ot.error("unsupported pseudo: "+t);return i[b]?i(e):i.length>1?(n=[t,t,"",e],r.setFilters.hasOwnProperty(t.toLowerCase())?st(function(t,n){for(var r,o=i(t,e),a=o.length;a--;)t[r=L(t,o[a])]=!(n[r]=o[a])}):function(t){return i(t,0,n)}):i}},pseudos:{not:st(function(t){var e=[],n=[],r=s(t.replace(B,"$1"));return r[b]?st(function(t,e,n,i){for(var o,a=r(t,null,i,[]),s=t.length;s--;)(o=a[s])&&(t[s]=!(e[s]=o))}):function(t,i,o){return e[0]=t,r(e,null,o,n),e[0]=null,!n.pop()}}),has:st(function(t){return function(e){return ot(t,e).length>0}}),contains:st(function(t){return t=t.replace(Z,tt),function(e){return(e.textContent||e.innerText||i(e)).indexOf(t)>-1}}),lang:st(function(t){return V.test(t||"")||ot.error("unsupported lang: "+t),t=t.replace(Z,tt).toLowerCase(),function(e){var n;do{if(n=v?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(n=n.toLowerCase())===t||0===n.indexOf(t+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var n=t.location&&t.location.hash;return n&&n.slice(1)===e.id},root:function(t){return t===h},focus:function(t){return t===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:dt(!1),disabled:dt(!0),checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!r.pseudos.empty(t)},header:function(t){return G.test(t.nodeName)},input:function(t){return Q.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:ht(function(){return[0]}),last:ht(function(t,e){return[e-1]}),eq:ht(function(t,e,n){return[n<0?n+e:n]}),even:ht(function(t,e){for(var n=0;n<e;n+=2)t.push(n);return t}),odd:ht(function(t,e){for(var n=1;n<e;n+=2)t.push(n);return t}),lt:ht(function(t,e,n){for(var r=n<0?n+e:n;--r>=0;)t.push(r);return t}),gt:ht(function(t,e,n){for(var r=n<0?n+e:n;++r<e;)t.push(r);return t})}}).pseudos.nth=r.pseudos.eq;for(e in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[e]=ft(e);for(e in{submit:!0,reset:!0})r.pseudos[e]=pt(e);function gt(){}function mt(t){for(var e=0,n=t.length,r="";e<n;e++)r+=t[e].value;return r}function yt(t,e,n){var r=e.dir,i=e.next,o=i||r,a=n&&"parentNode"===o,s=C++;return e.first?function(e,n,i){for(;e=e[r];)if(1===e.nodeType||a)return t(e,n,i);return!1}:function(e,n,u){var c,l,f,p=[x,s];if(u){for(;e=e[r];)if((1===e.nodeType||a)&&t(e,n,u))return!0}else for(;e=e[r];)if(1===e.nodeType||a)if(l=(f=e[b]||(e[b]={}))[e.uniqueID]||(f[e.uniqueID]={}),i&&i===e.nodeName.toLowerCase())e=e[r]||e;else{if((c=l[o])&&c[0]===x&&c[1]===s)return p[2]=c[2];if(l[o]=p,p[2]=t(e,n,u))return!0}return!1}}function _t(t){return t.length>1?function(e,n,r){for(var i=t.length;i--;)if(!t[i](e,n,r))return!1;return!0}:t[0]}function bt(t,e,n,r,i){for(var o,a=[],s=0,u=t.length,c=null!=e;s<u;s++)(o=t[s])&&(n&&!n(o,r,i)||(a.push(o),c&&e.push(s)));return a}function wt(t,e,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),st(function(o,a,s,u){var c,l,f,p=[],d=[],h=a.length,v=o||function(t,e,n){for(var r=0,i=e.length;r<i;r++)ot(t,e[r],n);return n}(e||"*",s.nodeType?[s]:s,[]),g=!t||!o&&e?v:bt(v,p,t,s,u),m=n?i||(o?t:h||r)?[]:a:g;if(n&&n(g,m,s,u),r)for(c=bt(m,d),r(c,[],s,u),l=c.length;l--;)(f=c[l])&&(m[d[l]]=!(g[d[l]]=f));if(o){if(i||t){if(i){for(c=[],l=m.length;l--;)(f=m[l])&&c.push(g[l]=f);i(null,m=[],c,u)}for(l=m.length;l--;)(f=m[l])&&(c=i?L(o,f):p[l])>-1&&(o[c]=!(a[c]=f))}}else m=bt(m===a?m.splice(h,m.length):m),i?i(null,a,m,u):N.apply(a,m)})}function xt(t){for(var e,n,i,o=t.length,a=r.relative[t[0].type],s=a||r.relative[" "],u=a?1:0,l=yt(function(t){return t===e},s,!0),f=yt(function(t){return L(e,t)>-1},s,!0),p=[function(t,n,r){var i=!a&&(r||n!==c)||((e=n).nodeType?l(t,n,r):f(t,n,r));return e=null,i}];u<o;u++)if(n=r.relative[t[u].type])p=[yt(_t(p),n)];else{if((n=r.filter[t[u].type].apply(null,t[u].matches))[b]){for(i=++u;i<o&&!r.relative[t[i].type];i++);return wt(u>1&&_t(p),u>1&&mt(t.slice(0,u-1).concat({value:" "===t[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&xt(t.slice(u,i)),i<o&&xt(t=t.slice(i)),i<o&&mt(t))}p.push(n)}return _t(p)}return gt.prototype=r.filters=r.pseudos,r.setFilters=new gt,a=ot.tokenize=function(t,e){var n,i,o,a,s,u,c,l=E[t+" "];if(l)return e?0:l.slice(0);for(s=t,u=[],c=r.preFilter;s;){n&&!(i=W.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=q.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=K[a].exec(s))||c[a]&&!(i=c[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return e?s.length:s?ot.error(t):E(t,u).slice(0)},s=ot.compile=function(t,e){var n,i,o,s,u,l,f=[],h=[],g=A[t+" "];if(!g){for(e||(e=a(t)),n=e.length;n--;)(g=xt(e[n]))[b]?f.push(g):h.push(g);(g=A(t,(i=h,s=(o=f).length>0,u=i.length>0,l=function(t,e,n,a,l){var f,h,g,m=0,y="0",_=t&&[],b=[],w=c,C=t||u&&r.find.TAG("*",l),T=x+=null==w?1:Math.random()||.1,E=C.length;for(l&&(c=e===d||e||l);y!==E&&null!=(f=C[y]);y++){if(u&&f){for(h=0,e||f.ownerDocument===d||(p(f),n=!v);g=i[h++];)if(g(f,e||d,n)){a.push(f);break}l&&(x=T)}s&&((f=!g&&f)&&m--,t&&_.push(f))}if(m+=y,s&&y!==m){for(h=0;g=o[h++];)g(_,b,e,n);if(t){if(m>0)for(;y--;)_[y]||b[y]||(b[y]=D.call(a));b=bt(b)}N.apply(a,b),l&&!t&&b.length>0&&m+o.length>1&&ot.uniqueSort(a)}return l&&(x=T,c=w),_},s?st(l):l))).selector=t}return g},u=ot.select=function(t,e,n,i){var o,u,c,l,f,p="function"==typeof t&&t,d=!i&&a(t=p.selector||t);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(c=u[0]).type&&9===e.nodeType&&v&&r.relative[u[1].type]){if(!(e=(r.find.ID(c.matches[0].replace(Z,tt),e)||[])[0]))return n;p&&(e=e.parentNode),t=t.slice(u.shift().value.length)}for(o=K.needsContext.test(t)?0:u.length;o--&&(c=u[o],!r.relative[l=c.type]);)if((f=r.find[l])&&(i=f(c.matches[0].replace(Z,tt),J.test(u[0].type)&&vt(e.parentNode)||e))){if(u.splice(o,1),!(t=i.length&&mt(u)))return N.apply(n,i),n;break}}return(p||s(t,d))(i,e,!v,n,!e||J.test(t)&&vt(e.parentNode)||e),n},n.sortStable=b.split("").sort(S).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ut(function(t){return 1&t.compareDocumentPosition(d.createElement("fieldset"))}),ut(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||ct("type|href|height|width",function(t,e,n){if(!n)return t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),n.attributes&&ut(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||ct("value",function(t,e,n){if(!n&&"input"===t.nodeName.toLowerCase())return t.defaultValue}),ut(function(t){return null==t.getAttribute("disabled")})||ct($,function(t,e,n){var r;if(!n)return!0===t[e]?e.toLowerCase():(r=t.getAttributeNode(e))&&r.specified?r.value:null}),ot}(n);_.find=E,_.expr=E.selectors,_.expr[":"]=_.expr.pseudos,_.uniqueSort=_.unique=E.uniqueSort,_.text=E.getText,_.isXMLDoc=E.isXML,_.contains=E.contains,_.escapeSelector=E.escape;var A=function(t,e,n){for(var r=[],i=void 0!==n;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(i&&_(t).is(n))break;r.push(t)}return r},S=function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n},k=_.expr.match.needsContext;function O(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,I=/^.[^:#\[\.,]*$/;function N(t,e,n){return _.isFunction(e)?_.grep(t,function(t,r){return!!e.call(t,r,t)!==n}):e.nodeType?_.grep(t,function(t){return t===e!==n}):"string"!=typeof e?_.grep(t,function(t){return f.call(e,t)>-1!==n}):I.test(e)?_.filter(e,t,n):(e=_.filter(e,t),_.grep(t,function(t){return f.call(e,t)>-1!==n&&1===t.nodeType}))}_.filter=function(t,e,n){var r=e[0];return n&&(t=":not("+t+")"),1===e.length&&1===r.nodeType?_.find.matchesSelector(r,t)?[r]:[]:_.find.matches(t,_.grep(e,function(t){return 1===t.nodeType}))},_.fn.extend({find:function(t){var e,n,r=this.length,i=this;if("string"!=typeof t)return this.pushStack(_(t).filter(function(){for(e=0;e<r;e++)if(_.contains(i[e],this))return!0}));for(n=this.pushStack([]),e=0;e<r;e++)_.find(t,i[e],n);return r>1?_.uniqueSort(n):n},filter:function(t){return this.pushStack(N(this,t||[],!1))},not:function(t){return this.pushStack(N(this,t||[],!0))},is:function(t){return!!N(this,"string"==typeof t&&k.test(t)?_(t):t||[],!1).length}});var j,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(_.fn.init=function(t,e,n){var r,i;if(!t)return this;if(n=n||j,"string"==typeof t){if(!(r="<"===t[0]&&">"===t[t.length-1]&&t.length>=3?[null,t,null]:L.exec(t))||!r[1]&&e)return!e||e.jquery?(e||n).find(t):this.constructor(e).find(t);if(r[1]){if(e=e instanceof _?e[0]:e,_.merge(this,_.parseHTML(r[1],e&&e.nodeType?e.ownerDocument||e:a,!0)),D.test(r[1])&&_.isPlainObject(e))for(r in e)_.isFunction(this[r])?this[r](e[r]):this.attr(r,e[r]);return this}return(i=a.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return t.nodeType?(this[0]=t,this.length=1,this):_.isFunction(t)?void 0!==n.ready?n.ready(t):t(_):_.makeArray(t,this)}).prototype=_.fn,j=_(a);var $=/^(?:parents|prev(?:Until|All))/,R={children:!0,contents:!0,next:!0,prev:!0};function P(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}_.fn.extend({has:function(t){var e=_(t,this),n=e.length;return this.filter(function(){for(var t=0;t<n;t++)if(_.contains(this,e[t]))return!0})},closest:function(t,e){var n,r=0,i=this.length,o=[],a="string"!=typeof t&&_(t);if(!k.test(t))for(;r<i;r++)for(n=this[r];n&&n!==e;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&_.find.matchesSelector(n,t))){o.push(n);break}return this.pushStack(o.length>1?_.uniqueSort(o):o)},index:function(t){return t?"string"==typeof t?f.call(_(t),this[0]):f.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(_.uniqueSort(_.merge(this.get(),_(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),_.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return A(t,"parentNode")},parentsUntil:function(t,e,n){return A(t,"parentNode",n)},next:function(t){return P(t,"nextSibling")},prev:function(t){return P(t,"previousSibling")},nextAll:function(t){return A(t,"nextSibling")},prevAll:function(t){return A(t,"previousSibling")},nextUntil:function(t,e,n){return A(t,"nextSibling",n)},prevUntil:function(t,e,n){return A(t,"previousSibling",n)},siblings:function(t){return S((t.parentNode||{}).firstChild,t)},children:function(t){return S(t.firstChild)},contents:function(t){return O(t,"iframe")?t.contentDocument:(O(t,"template")&&(t=t.content||t),_.merge([],t.childNodes))}},function(t,e){_.fn[t]=function(n,r){var i=_.map(this,e,n);return"Until"!==t.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=_.filter(r,i)),this.length>1&&(R[t]||_.uniqueSort(i),$.test(t)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function F(t){return t}function H(t){throw t}function B(t,e,n,r){var i;try{t&&_.isFunction(i=t.promise)?i.call(t).done(e).fail(n):t&&_.isFunction(i=t.then)?i.call(t,e,n):e.apply(void 0,[t].slice(r))}catch(t){n.apply(void 0,[t])}}_.Callbacks=function(t){var e,n;t="string"==typeof t?(e=t,n={},_.each(e.match(M)||[],function(t,e){n[e]=!0}),n):_.extend({},t);var r,i,o,a,s=[],u=[],c=-1,l=function(){for(a=a||t.once,o=r=!0;u.length;c=-1)for(i=u.shift();++c<s.length;)!1===s[c].apply(i[0],i[1])&&t.stopOnFalse&&(c=s.length,i=!1);t.memory||(i=!1),r=!1,a&&(s=i?[]:"")},f={add:function(){return s&&(i&&!r&&(c=s.length-1,u.push(i)),function e(n){_.each(n,function(n,r){_.isFunction(r)?t.unique&&f.has(r)||s.push(r):r&&r.length&&"string"!==_.type(r)&&e(r)})}(arguments),i&&!r&&l()),this},remove:function(){return _.each(arguments,function(t,e){for(var n;(n=_.inArray(e,s,n))>-1;)s.splice(n,1),n<=c&&c--}),this},has:function(t){return t?_.inArray(t,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=i="",this},disabled:function(){return!s},lock:function(){return a=u=[],i||r||(s=i=""),this},locked:function(){return!!a},fireWith:function(t,e){return a||(e=[t,(e=e||[]).slice?e.slice():e],u.push(e),r||l()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},_.extend({Deferred:function(t){var e=[["notify","progress",_.Callbacks("memory"),_.Callbacks("memory"),2],["resolve","done",_.Callbacks("once memory"),_.Callbacks("once memory"),0,"resolved"],["reject","fail",_.Callbacks("once memory"),_.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(t){return i.then(null,t)},pipe:function(){var t=arguments;return _.Deferred(function(n){_.each(e,function(e,r){var i=_.isFunction(t[r[4]])&&t[r[4]];o[r[1]](function(){var t=i&&i.apply(this,arguments);t&&_.isFunction(t.promise)?t.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this,i?[t]:arguments)})}),t=null}).promise()},then:function(t,r,i){var o=0;function a(t,e,r,i){return function(){var s=this,u=arguments,c=function(){var n,c;if(!(t<o)){if((n=r.apply(s,u))===e.promise())throw new TypeError("Thenable self-resolution");c=n&&("object"==typeof n||"function"==typeof n)&&n.then,_.isFunction(c)?i?c.call(n,a(o,e,F,i),a(o,e,H,i)):(o++,c.call(n,a(o,e,F,i),a(o,e,H,i),a(o,e,F,e.notifyWith))):(r!==F&&(s=void 0,u=[n]),(i||e.resolveWith)(s,u))}},l=i?c:function(){try{c()}catch(n){_.Deferred.exceptionHook&&_.Deferred.exceptionHook(n,l.stackTrace),t+1>=o&&(r!==H&&(s=void 0,u=[n]),e.rejectWith(s,u))}};t?l():(_.Deferred.getStackHook&&(l.stackTrace=_.Deferred.getStackHook()),n.setTimeout(l))}}return _.Deferred(function(n){e[0][3].add(a(0,n,_.isFunction(i)?i:F,n.notifyWith)),e[1][3].add(a(0,n,_.isFunction(t)?t:F)),e[2][3].add(a(0,n,_.isFunction(r)?r:H))}).promise()},promise:function(t){return null!=t?_.extend(t,i):i}},o={};return _.each(e,function(t,n){var a=n[2],s=n[5];i[n[1]]=a.add,s&&a.add(function(){r=s},e[3-t][2].disable,e[0][2].lock),a.add(n[3].fire),o[n[0]]=function(){return o[n[0]+"With"](this===o?void 0:this,arguments),this},o[n[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(t){var e=arguments.length,n=e,r=Array(n),i=u.call(arguments),o=_.Deferred(),a=function(t){return function(n){r[t]=this,i[t]=arguments.length>1?u.call(arguments):n,--e||o.resolveWith(r,i)}};if(e<=1&&(B(t,o.done(a(n)).resolve,o.reject,!e),"pending"===o.state()||_.isFunction(i[n]&&i[n].then)))return o.then();for(;n--;)B(i[n],a(n),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;_.Deferred.exceptionHook=function(t,e){n.console&&n.console.warn&&t&&W.test(t.name)&&n.console.warn("jQuery.Deferred exception: "+t.message,t.stack,e)},_.readyException=function(t){n.setTimeout(function(){throw t})};var q=_.Deferred();function U(){a.removeEventListener("DOMContentLoaded",U),n.removeEventListener("load",U),_.ready()}_.fn.ready=function(t){return q.then(t).catch(function(t){_.readyException(t)}),this},_.extend({isReady:!1,readyWait:1,ready:function(t){(!0===t?--_.readyWait:_.isReady)||(_.isReady=!0,!0!==t&&--_.readyWait>0||q.resolveWith(a,[_]))}}),_.ready.then=q.then,"complete"===a.readyState||"loading"!==a.readyState&&!a.documentElement.doScroll?n.setTimeout(_.ready):(a.addEventListener("DOMContentLoaded",U),n.addEventListener("load",U));var z=function(t,e,n,r,i,o,a){var s=0,u=t.length,c=null==n;if("object"===_.type(n)){i=!0;for(s in n)z(t,e,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,_.isFunction(r)||(a=!0),c&&(a?(e.call(t,r),e=null):(c=e,e=function(t,e,n){return c.call(_(t),n)})),e))for(;s<u;s++)e(t[s],n,a?r:r.call(t[s],s,e(t[s],n)));return i?t:c?e.call(t):u?e(t[0],n):o},V=function(t){return 1===t.nodeType||9===t.nodeType||!+t.nodeType};function K(){this.expando=_.expando+K.uid++}K.uid=1,K.prototype={cache:function(t){var e=t[this.expando];return e||(e={},V(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,n){var r,i=this.cache(t);if("string"==typeof e)i[_.camelCase(e)]=n;else for(r in e)i[_.camelCase(r)]=e[r];return i},get:function(t,e){return void 0===e?this.cache(t):t[this.expando]&&t[this.expando][_.camelCase(e)]},access:function(t,e,n){return void 0===e||e&&"string"==typeof e&&void 0===n?this.get(t,e):(this.set(t,e,n),void 0!==n?n:e)},remove:function(t,e){var n,r=t[this.expando];if(void 0!==r){if(void 0!==e){n=(e=Array.isArray(e)?e.map(_.camelCase):(e=_.camelCase(e))in r?[e]:e.match(M)||[]).length;for(;n--;)delete r[e[n]]}(void 0===e||_.isEmptyObject(r))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var e=t[this.expando];return void 0!==e&&!_.isEmptyObject(e)}};var Q=new K,G=new K,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,X=/[A-Z]/g;function J(t,e,n){var r,i;if(void 0===n&&1===t.nodeType)if(r="data-"+e.replace(X,"-$&").toLowerCase(),"string"==typeof(n=t.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:Y.test(i)?JSON.parse(i):i)}catch(t){}G.set(t,e,n)}else n=void 0;return n}_.extend({hasData:function(t){return G.hasData(t)||Q.hasData(t)},data:function(t,e,n){return G.access(t,e,n)},removeData:function(t,e){G.remove(t,e)},_data:function(t,e,n){return Q.access(t,e,n)},_removeData:function(t,e){Q.remove(t,e)}}),_.fn.extend({data:function(t,e){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===t){if(this.length&&(i=G.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=_.camelCase(r.slice(5)),J(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof t?this.each(function(){G.set(this,t)}):z(this,function(e){var n;if(o&&void 0===e)return void 0!==(n=G.get(o,t))?n:void 0!==(n=J(o,t))?n:void 0;this.each(function(){G.set(this,t,e)})},null,e,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){G.remove(this,t)})}}),_.extend({queue:function(t,e,n){var r;if(t)return e=(e||"fx")+"queue",r=Q.get(t,e),n&&(!r||Array.isArray(n)?r=Q.access(t,e,_.makeArray(n)):r.push(n)),r||[]},dequeue:function(t,e){e=e||"fx";var n=_.queue(t,e),r=n.length,i=n.shift(),o=_._queueHooks(t,e);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===e&&n.unshift("inprogress"),delete o.stop,i.call(t,function(){_.dequeue(t,e)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(t,e){var n=e+"queueHooks";return Q.get(t,n)||Q.access(t,n,{empty:_.Callbacks("once memory").add(function(){Q.remove(t,[e+"queue",n])})})}}),_.fn.extend({queue:function(t,e){var n=2;return"string"!=typeof t&&(e=t,t="fx",n--),arguments.length<n?_.queue(this[0],t):void 0===e?this:this.each(function(){var n=_.queue(this,t,e);_._queueHooks(this,t),"fx"===t&&"inprogress"!==n[0]&&_.dequeue(this,t)})},dequeue:function(t){return this.each(function(){_.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var n,r=1,i=_.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";a--;)(n=Q.get(o[a],t+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(e)}});var Z=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,tt=new RegExp("^(?:([+-])=|)("+Z+")([a-z%]*)$","i"),et=["Top","Right","Bottom","Left"],nt=function(t,e){return"none"===(t=e||t).style.display||""===t.style.display&&_.contains(t.ownerDocument,t)&&"none"===_.css(t,"display")},rt=function(t,e,n,r){var i,o,a={};for(o in e)a[o]=t.style[o],t.style[o]=e[o];i=n.apply(t,r||[]);for(o in e)t.style[o]=a[o];return i};function it(t,e,n,r){var i,o=1,a=20,s=r?function(){return r.cur()}:function(){return _.css(t,e,"")},u=s(),c=n&&n[3]||(_.cssNumber[e]?"":"px"),l=(_.cssNumber[e]||"px"!==c&&+u)&&tt.exec(_.css(t,e));if(l&&l[3]!==c){c=c||l[3],n=n||[],l=+u||1;do{l/=o=o||".5",_.style(t,e,l+c)}while(o!==(o=s()/u)&&1!==o&&--a)}return n&&(l=+l||+u||0,i=n[1]?l+(n[1]+1)*n[2]:+n[2],r&&(r.unit=c,r.start=l,r.end=i)),i}var ot={};function at(t,e){for(var n,r,i,o,a,s,u,c=[],l=0,f=t.length;l<f;l++)(r=t[l]).style&&(n=r.style.display,e?("none"===n&&(c[l]=Q.get(r,"display")||null,c[l]||(r.style.display="")),""===r.style.display&&nt(r)&&(c[l]=(o=void 0,a=void 0,void 0,u=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ot[s])||(o=a.body.appendChild(a.createElement(s)),u=_.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ot[s]=u,u)))):"none"!==n&&(c[l]="none",Q.set(r,"display",n)));for(l=0;l<f;l++)null!=c[l]&&(t[l].style.display=c[l]);return t}_.fn.extend({show:function(){return at(this,!0)},hide:function(){return at(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){nt(this)?_(this).show():_(this).hide()})}});var st=/^(?:checkbox|radio)$/i,ut=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ct=/^$|\/(?:java|ecma)script/i,lt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ft(t,e){var n;return n=void 0!==t.getElementsByTagName?t.getElementsByTagName(e||"*"):void 0!==t.querySelectorAll?t.querySelectorAll(e||"*"):[],void 0===e||e&&O(t,e)?_.merge([t],n):n}function pt(t,e){for(var n=0,r=t.length;n<r;n++)Q.set(t[n],"globalEval",!e||Q.get(e[n],"globalEval"))}lt.optgroup=lt.option,lt.tbody=lt.tfoot=lt.colgroup=lt.caption=lt.thead,lt.th=lt.td;var dt,ht,vt=/<|&#?\w+;/;function gt(t,e,n,r,i){for(var o,a,s,u,c,l,f=e.createDocumentFragment(),p=[],d=0,h=t.length;d<h;d++)if((o=t[d])||0===o)if("object"===_.type(o))_.merge(p,o.nodeType?[o]:o);else if(vt.test(o)){for(a=a||f.appendChild(e.createElement("div")),s=(ut.exec(o)||["",""])[1].toLowerCase(),u=lt[s]||lt._default,a.innerHTML=u[1]+_.htmlPrefilter(o)+u[2],l=u[0];l--;)a=a.lastChild;_.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(e.createTextNode(o));for(f.textContent="",d=0;o=p[d++];)if(r&&_.inArray(o,r)>-1)i&&i.push(o);else if(c=_.contains(o.ownerDocument,o),a=ft(f.appendChild(o),"script"),c&&pt(a),n)for(l=0;o=a[l++];)ct.test(o.type||"")&&n.push(o);return f}dt=a.createDocumentFragment().appendChild(a.createElement("div")),(ht=a.createElement("input")).setAttribute("type","radio"),ht.setAttribute("checked","checked"),ht.setAttribute("name","t"),dt.appendChild(ht),m.checkClone=dt.cloneNode(!0).cloneNode(!0).lastChild.checked,dt.innerHTML="<textarea>x</textarea>",m.noCloneChecked=!!dt.cloneNode(!0).lastChild.defaultValue;var mt=a.documentElement,yt=/^key/,_t=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,bt=/^([^.]*)(?:\.(.+)|)/;function wt(){return!0}function xt(){return!1}function Ct(){try{return a.activeElement}catch(t){}}function Tt(t,e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=void 0);for(s in e)Tt(t,s,n,r,e[s],o);return t}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=xt;else if(!i)return t;return 1===o&&(a=i,(i=function(t){return _().off(t),a.apply(this,arguments)}).guid=a.guid||(a.guid=_.guid++)),t.each(function(){_.event.add(this,e,i,r,n)})}_.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,c,l,f,p,d,h,v,g=Q.get(t);if(g)for(n.handler&&(n=(o=n).handler,i=o.selector),i&&_.find.matchesSelector(mt,i),n.guid||(n.guid=_.guid++),(u=g.events)||(u=g.events={}),(a=g.handle)||(a=g.handle=function(e){return void 0!==_&&_.event.triggered!==e.type?_.event.dispatch.apply(t,arguments):void 0}),c=(e=(e||"").match(M)||[""]).length;c--;)d=v=(s=bt.exec(e[c])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=_.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=_.event.special[d]||{},l=_.extend({type:d,origType:v,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&_.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,l),l.handler.guid||(l.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,l):p.push(l),_.event.global[d]=!0)},remove:function(t,e,n,r,i){var o,a,s,u,c,l,f,p,d,h,v,g=Q.hasData(t)&&Q.get(t);if(g&&(u=g.events)){for(c=(e=(e||"").match(M)||[""]).length;c--;)if(d=v=(s=bt.exec(e[c])||[])[1],h=(s[2]||"").split(".").sort(),d){for(f=_.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)l=p[o],!i&&v!==l.origType||n&&n.guid!==l.guid||s&&!s.test(l.namespace)||r&&r!==l.selector&&("**"!==r||!l.selector)||(p.splice(o,1),l.selector&&p.delegateCount--,f.remove&&f.remove.call(t,l));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(t,h,g.handle)||_.removeEvent(t,d,g.handle),delete u[d])}else for(d in u)_.event.remove(t,d+e[c],n,r,!0);_.isEmptyObject(u)&&Q.remove(t,"handle events")}},dispatch:function(t){var e,n,r,i,o,a,s=_.event.fix(t),u=new Array(arguments.length),c=(Q.get(this,"events")||{})[s.type]||[],l=_.event.special[s.type]||{};for(u[0]=s,e=1;e<arguments.length;e++)u[e]=arguments[e];if(s.delegateTarget=this,!l.preDispatch||!1!==l.preDispatch.call(this,s)){for(a=_.event.handlers.call(this,s,c),e=0;(i=a[e++])&&!s.isPropagationStopped();)for(s.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!s.isImmediatePropagationStopped();)s.rnamespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((_.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,s),s.result}},handlers:function(t,e){var n,r,i,o,a,s=[],u=e.delegateCount,c=t.target;if(u&&c.nodeType&&!("click"===t.type&&t.button>=1))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==t.type||!0!==c.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=e[n]).selector+" "]&&(a[i]=r.needsContext?_(i,this).index(c)>-1:_.find(i,this,null,[c]).length),a[i]&&o.push(r);o.length&&s.push({elem:c,handlers:o})}return c=this,u<e.length&&s.push({elem:c,handlers:e.slice(u)}),s},addProp:function(t,e){Object.defineProperty(_.Event.prototype,t,{enumerable:!0,configurable:!0,get:_.isFunction(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(t){return t[_.expando]?t:new _.Event(t)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Ct()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Ct()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&O(this,"input"))return this.click(),!1},_default:function(t){return O(t.target,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},_.removeEvent=function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n)},_.Event=function(t,e){if(!(this instanceof _.Event))return new _.Event(t,e);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&!1===t.returnValue?wt:xt,this.target=t.target&&3===t.target.nodeType?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,e&&_.extend(this,e),this.timeStamp=t&&t.timeStamp||_.now(),this[_.expando]=!0},_.Event.prototype={constructor:_.Event,isDefaultPrevented:xt,isPropagationStopped:xt,isImmediatePropagationStopped:xt,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=wt,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=wt,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=wt,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},_.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(t){var e=t.button;return null==t.which&&yt.test(t.type)?null!=t.charCode?t.charCode:t.keyCode:!t.which&&void 0!==e&&_t.test(t.type)?1&e?1:2&e?3:4&e?2:0:t.which}},_.event.addProp),_.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){_.event.special[t]={delegateType:e,bindType:e,handle:function(t){var n,r=t.relatedTarget,i=t.handleObj;return r&&(r===this||_.contains(this,r))||(t.type=i.origType,n=i.handler.apply(this,arguments),t.type=e),n}}}),_.fn.extend({on:function(t,e,n,r){return Tt(this,t,e,n,r)},one:function(t,e,n,r){return Tt(this,t,e,n,r,1)},off:function(t,e,n){var r,i;if(t&&t.preventDefault&&t.handleObj)return r=t.handleObj,_(t.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof t){for(i in t)this.off(i,e,t[i]);return this}return!1!==e&&"function"!=typeof e||(n=e,e=void 0),!1===n&&(n=xt),this.each(function(){_.event.remove(this,t,n,e)})}});var Et=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,At=/<script|<style|<link/i,St=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^true\/(.*)/,Ot=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Dt(t,e){return O(t,"table")&&O(11!==e.nodeType?e:e.firstChild,"tr")&&_(">tbody",t)[0]||t}function It(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function Nt(t){var e=kt.exec(t.type);return e?t.type=e[1]:t.removeAttribute("type"),t}function jt(t,e){var n,r,i,o,a,s,u,c;if(1===e.nodeType){if(Q.hasData(t)&&(o=Q.access(t),a=Q.set(e,o),c=o.events)){delete a.handle,a.events={};for(i in c)for(n=0,r=c[i].length;n<r;n++)_.event.add(e,i,c[i][n])}G.hasData(t)&&(s=G.access(t),u=_.extend({},s),G.set(e,u))}}function Lt(t,e,n,r){e=c.apply([],e);var i,o,a,s,u,l,f=0,p=t.length,d=p-1,h=e[0],v=_.isFunction(h);if(v||p>1&&"string"==typeof h&&!m.checkClone&&St.test(h))return t.each(function(i){var o=t.eq(i);v&&(e[0]=h.call(this,i,o.html())),Lt(o,e,n,r)});if(p&&(o=(i=gt(e,t[0].ownerDocument,!1,t,r)).firstChild,1===i.childNodes.length&&(i=o),o||r)){for(s=(a=_.map(ft(i,"script"),It)).length;f<p;f++)u=i,f!==d&&(u=_.clone(u,!0,!0),s&&_.merge(a,ft(u,"script"))),n.call(t[f],u,f);if(s)for(l=a[a.length-1].ownerDocument,_.map(a,Nt),f=0;f<s;f++)u=a[f],ct.test(u.type||"")&&!Q.access(u,"globalEval")&&_.contains(l,u)&&(u.src?_._evalUrl&&_._evalUrl(u.src):y(u.textContent.replace(Ot,""),l))}return t}function $t(t,e,n){for(var r,i=e?_.filter(e,t):t,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||_.cleanData(ft(r)),r.parentNode&&(n&&_.contains(r.ownerDocument,r)&&pt(ft(r,"script")),r.parentNode.removeChild(r));return t}_.extend({htmlPrefilter:function(t){return t.replace(Et,"<$1></$2>")},clone:function(t,e,n){var r,i,o,a,s,u,c,l=t.cloneNode(!0),f=_.contains(t.ownerDocument,t);if(!(m.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||_.isXMLDoc(t)))for(a=ft(l),r=0,i=(o=ft(t)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(c=u.nodeName.toLowerCase())&&st.test(s.type)?u.checked=s.checked:"input"!==c&&"textarea"!==c||(u.defaultValue=s.defaultValue);if(e)if(n)for(o=o||ft(t),a=a||ft(l),r=0,i=o.length;r<i;r++)jt(o[r],a[r]);else jt(t,l);return(a=ft(l,"script")).length>0&&pt(a,!f&&ft(t,"script")),l},cleanData:function(t){for(var e,n,r,i=_.event.special,o=0;void 0!==(n=t[o]);o++)if(V(n)){if(e=n[Q.expando]){if(e.events)for(r in e.events)i[r]?_.event.remove(n,r):_.removeEvent(n,r,e.handle);n[Q.expando]=void 0}n[G.expando]&&(n[G.expando]=void 0)}}}),_.fn.extend({detach:function(t){return $t(this,t,!0)},remove:function(t){return $t(this,t)},text:function(t){return z(this,function(t){return void 0===t?_.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=t)})},null,t,arguments.length)},append:function(){return Lt(this,arguments,function(t){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Dt(this,t).appendChild(t)})},prepend:function(){return Lt(this,arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=Dt(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return Lt(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return Lt(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(_.cleanData(ft(t,!1)),t.textContent="");return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map(function(){return _.clone(this,t,e)})},html:function(t){return z(this,function(t){var e=this[0]||{},n=0,r=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;if("string"==typeof t&&!At.test(t)&&!lt[(ut.exec(t)||["",""])[1].toLowerCase()]){t=_.htmlPrefilter(t);try{for(;n<r;n++)1===(e=this[n]||{}).nodeType&&(_.cleanData(ft(e,!1)),e.innerHTML=t);e=0}catch(t){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=[];return Lt(this,arguments,function(e){var n=this.parentNode;_.inArray(this,t)<0&&(_.cleanData(ft(this)),n&&n.replaceChild(e,this))},t)}}),_.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){_.fn[t]=function(t){for(var n,r=[],i=_(t),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),_(i[a])[e](n),l.apply(r,n.get());return this.pushStack(r)}});var Rt=/^margin/,Pt=new RegExp("^("+Z+")(?!px)[a-z%]+$","i"),Mt=function(t){var e=t.ownerDocument.defaultView;return e&&e.opener||(e=n),e.getComputedStyle(t)};function Ft(t,e,n){var r,i,o,a,s=t.style;return(n=n||Mt(t))&&(""!==(a=n.getPropertyValue(e)||n[e])||_.contains(t.ownerDocument,t)||(a=_.style(t,e)),!m.pixelMarginRight()&&Pt.test(a)&&Rt.test(e)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Ht(t,e){return{get:function(){if(!t())return(this.get=e).apply(this,arguments);delete this.get}}}!function(){function t(){if(u){u.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",u.innerHTML="",mt.appendChild(s);var t=n.getComputedStyle(u);e="1%"!==t.top,o="2px"===t.marginLeft,r="4px"===t.width,u.style.marginRight="50%",i="4px"===t.marginRight,mt.removeChild(s),u=null}}var e,r,i,o,s=a.createElement("div"),u=a.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",m.clearCloneStyle="content-box"===u.style.backgroundClip,s.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",s.appendChild(u),_.extend(m,{pixelPosition:function(){return t(),e},boxSizingReliable:function(){return t(),r},pixelMarginRight:function(){return t(),i},reliableMarginLeft:function(){return t(),o}}))}();var Bt=/^(none|table(?!-c[ea]).+)/,Wt=/^--/,qt={position:"absolute",visibility:"hidden",display:"block"},Ut={letterSpacing:"0",fontWeight:"400"},zt=["Webkit","Moz","ms"],Vt=a.createElement("div").style;function Kt(t){var e=_.cssProps[t];return e||(e=_.cssProps[t]=function(t){if(t in Vt)return t;for(var e=t[0].toUpperCase()+t.slice(1),n=zt.length;n--;)if((t=zt[n]+e)in Vt)return t}(t)||t),e}function Qt(t,e,n){var r=tt.exec(e);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):e}function Gt(t,e,n,r,i){var o,a=0;for(o=n===(r?"border":"content")?4:"width"===e?1:0;o<4;o+=2)"margin"===n&&(a+=_.css(t,n+et[o],!0,i)),r?("content"===n&&(a-=_.css(t,"padding"+et[o],!0,i)),"margin"!==n&&(a-=_.css(t,"border"+et[o]+"Width",!0,i))):(a+=_.css(t,"padding"+et[o],!0,i),"padding"!==n&&(a+=_.css(t,"border"+et[o]+"Width",!0,i)));return a}function Yt(t,e,n){var r,i=Mt(t),o=Ft(t,e,i),a="border-box"===_.css(t,"boxSizing",!1,i);return Pt.test(o)?o:(r=a&&(m.boxSizingReliable()||o===t.style[e]),"auto"===o&&(o=t["offset"+e[0].toUpperCase()+e.slice(1)]),(o=parseFloat(o)||0)+Gt(t,e,n||(a?"border":"content"),r,i)+"px")}function Xt(t,e,n,r,i){return new Xt.prototype.init(t,e,n,r,i)}_.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=Ft(t,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(t,e,n,r){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var i,o,a,s=_.camelCase(e),u=Wt.test(e),c=t.style;if(u||(e=Kt(s)),a=_.cssHooks[e]||_.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(t,!1,r))?i:c[e];"string"===(o=typeof n)&&(i=tt.exec(n))&&i[1]&&(n=it(t,e,i),o="number"),null!=n&&n==n&&("number"===o&&(n+=i&&i[3]||(_.cssNumber[s]?"":"px")),m.clearCloneStyle||""!==n||0!==e.indexOf("background")||(c[e]="inherit"),a&&"set"in a&&void 0===(n=a.set(t,n,r))||(u?c.setProperty(e,n):c[e]=n))}},css:function(t,e,n,r){var i,o,a,s=_.camelCase(e);return Wt.test(e)||(e=Kt(s)),(a=_.cssHooks[e]||_.cssHooks[s])&&"get"in a&&(i=a.get(t,!0,n)),void 0===i&&(i=Ft(t,e,r)),"normal"===i&&e in Ut&&(i=Ut[e]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),_.each(["height","width"],function(t,e){_.cssHooks[e]={get:function(t,n,r){if(n)return!Bt.test(_.css(t,"display"))||t.getClientRects().length&&t.getBoundingClientRect().width?Yt(t,e,r):rt(t,qt,function(){return Yt(t,e,r)})},set:function(t,n,r){var i,o=r&&Mt(t),a=r&&Gt(t,e,r,"border-box"===_.css(t,"boxSizing",!1,o),o);return a&&(i=tt.exec(n))&&"px"!==(i[3]||"px")&&(t.style[e]=n,n=_.css(t,e)),Qt(0,n,a)}}}),_.cssHooks.marginLeft=Ht(m.reliableMarginLeft,function(t,e){if(e)return(parseFloat(Ft(t,"marginLeft"))||t.getBoundingClientRect().left-rt(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px"}),_.each({margin:"",padding:"",border:"Width"},function(t,e){_.cssHooks[t+e]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[t+et[r]+e]=o[r]||o[r-2]||o[0];return i}},Rt.test(t)||(_.cssHooks[t+e].set=Qt)}),_.fn.extend({css:function(t,e){return z(this,function(t,e,n){var r,i,o={},a=0;if(Array.isArray(e)){for(r=Mt(t),i=e.length;a<i;a++)o[e[a]]=_.css(t,e[a],!1,r);return o}return void 0!==n?_.style(t,e,n):_.css(t,e)},t,e,arguments.length>1)}}),_.Tween=Xt,Xt.prototype={constructor:Xt,init:function(t,e,n,r,i,o){this.elem=t,this.prop=n,this.easing=i||_.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=r,this.unit=o||(_.cssNumber[n]?"":"px")},cur:function(){var t=Xt.propHooks[this.prop];return t&&t.get?t.get(this):Xt.propHooks._default.get(this)},run:function(t){var e,n=Xt.propHooks[this.prop];return this.options.duration?this.pos=e=_.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Xt.propHooks._default.set(this),this}},Xt.prototype.init.prototype=Xt.prototype,Xt.propHooks={_default:{get:function(t){var e;return 1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:(e=_.css(t.elem,t.prop,""))&&"auto"!==e?e:0},set:function(t){_.fx.step[t.prop]?_.fx.step[t.prop](t):1!==t.elem.nodeType||null==t.elem.style[_.cssProps[t.prop]]&&!_.cssHooks[t.prop]?t.elem[t.prop]=t.now:_.style(t.elem,t.prop,t.now+t.unit)}}},Xt.propHooks.scrollTop=Xt.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},_.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},_.fx=Xt.prototype.init,_.fx.step={};var Jt,Zt,te,ee,ne=/^(?:toggle|show|hide)$/,re=/queueHooks$/;function ie(){Zt&&(!1===a.hidden&&n.requestAnimationFrame?n.requestAnimationFrame(ie):n.setTimeout(ie,_.fx.interval),_.fx.tick())}function oe(){return n.setTimeout(function(){Jt=void 0}),Jt=_.now()}function ae(t,e){var n,r=0,i={height:t};for(e=e?1:0;r<4;r+=2-e)i["margin"+(n=et[r])]=i["padding"+n]=t;return e&&(i.opacity=i.width=t),i}function se(t,e,n){for(var r,i=(ue.tweeners[e]||[]).concat(ue.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,e,t))return r}function ue(t,e,n){var r,i,o=0,a=ue.prefilters.length,s=_.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var e=Jt||oe(),n=Math.max(0,c.startTime+c.duration-e),r=1-(n/c.duration||0),o=0,a=c.tweens.length;o<a;o++)c.tweens[o].run(r);return s.notifyWith(t,[c,r,n]),r<1&&a?n:(a||s.notifyWith(t,[c,1,0]),s.resolveWith(t,[c]),!1)},c=s.promise({elem:t,props:_.extend({},e),opts:_.extend(!0,{specialEasing:{},easing:_.easing._default},n),originalProperties:e,originalOptions:n,startTime:Jt||oe(),duration:n.duration,tweens:[],createTween:function(e,n){var r=_.Tween(t,c.opts,e,n,c.opts.specialEasing[e]||c.opts.easing);return c.tweens.push(r),r},stop:function(e){var n=0,r=e?c.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)c.tweens[n].run(1);return e?(s.notifyWith(t,[c,1,0]),s.resolveWith(t,[c,e])):s.rejectWith(t,[c,e]),this}}),l=c.props;for(!function(t,e){var n,r,i,o,a;for(n in t)if(i=e[r=_.camelCase(n)],o=t[n],Array.isArray(o)&&(i=o[1],o=t[n]=o[0]),n!==r&&(t[r]=o,delete t[n]),(a=_.cssHooks[r])&&"expand"in a){o=a.expand(o),delete t[r];for(n in o)n in t||(t[n]=o[n],e[n]=i)}else e[r]=i}(l,c.opts.specialEasing);o<a;o++)if(r=ue.prefilters[o].call(c,t,l,c.opts))return _.isFunction(r.stop)&&(_._queueHooks(c.elem,c.opts.queue).stop=_.proxy(r.stop,r)),r;return _.map(l,se,c),_.isFunction(c.opts.start)&&c.opts.start.call(t,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),_.fx.timer(_.extend(u,{elem:t,anim:c,queue:c.opts.queue})),c}_.Animation=_.extend(ue,{tweeners:{"*":[function(t,e){var n=this.createTween(t,e);return it(n.elem,t,tt.exec(e),n),n}]},tweener:function(t,e){_.isFunction(t)?(e=t,t=["*"]):t=t.match(M);for(var n,r=0,i=t.length;r<i;r++)n=t[r],ue.tweeners[n]=ue.tweeners[n]||[],ue.tweeners[n].unshift(e)},prefilters:[function(t,e,n){var r,i,o,a,s,u,c,l,f="width"in e||"height"in e,p=this,d={},h=t.style,v=t.nodeType&&nt(t),g=Q.get(t,"fxshow");n.queue||(null==(a=_._queueHooks(t,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,_.queue(t,"fx").length||a.empty.fire()})}));for(r in e)if(i=e[r],ne.test(i)){if(delete e[r],o=o||"toggle"===i,i===(v?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue;v=!0}d[r]=g&&g[r]||_.style(t,r)}if((u=!_.isEmptyObject(e))||!_.isEmptyObject(d)){f&&1===t.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(c=g&&g.display)&&(c=Q.get(t,"display")),"none"===(l=_.css(t,"display"))&&(c?l=c:(at([t],!0),c=t.style.display||c,l=_.css(t,"display"),at([t]))),("inline"===l||"inline-block"===l&&null!=c)&&"none"===_.css(t,"float")&&(u||(p.done(function(){h.display=c}),null==c&&(l=h.display,c="none"===l?"":l)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(g?"hidden"in g&&(v=g.hidden):g=Q.access(t,"fxshow",{display:c}),o&&(g.hidden=!v),v&&at([t],!0),p.done(function(){v||at([t]),Q.remove(t,"fxshow");for(r in d)_.style(t,r,d[r])})),u=se(v?g[r]:0,r,p),r in g||(g[r]=u.start,v&&(u.end=u.start,u.start=0))}}],prefilter:function(t,e){e?ue.prefilters.unshift(t):ue.prefilters.push(t)}}),_.speed=function(t,e,n){var r=t&&"object"==typeof t?_.extend({},t):{complete:n||!n&&e||_.isFunction(t)&&t,duration:t,easing:n&&e||e&&!_.isFunction(e)&&e};return _.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in _.fx.speeds?r.duration=_.fx.speeds[r.duration]:r.duration=_.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){_.isFunction(r.old)&&r.old.call(this),r.queue&&_.dequeue(this,r.queue)},r},_.fn.extend({fadeTo:function(t,e,n,r){return this.filter(nt).css("opacity",0).show().end().animate({opacity:e},t,n,r)},animate:function(t,e,n,r){var i=_.isEmptyObject(t),o=_.speed(e,n,r),a=function(){var e=ue(this,_.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(t,e,n){var r=function(t){var e=t.stop;delete t.stop,e(n)};return"string"!=typeof t&&(n=e,e=t,t=void 0),e&&!1!==t&&this.queue(t||"fx",[]),this.each(function(){var e=!0,i=null!=t&&t+"queueHooks",o=_.timers,a=Q.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&re.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=t&&o[i].queue!==t||(o[i].anim.stop(n),e=!1,o.splice(i,1));!e&&n||_.dequeue(this,t)})},finish:function(t){return!1!==t&&(t=t||"fx"),this.each(function(){var e,n=Q.get(this),r=n[t+"queue"],i=n[t+"queueHooks"],o=_.timers,a=r?r.length:0;for(n.finish=!0,_.queue(this,t,[]),i&&i.stop&&i.stop.call(this,!0),e=o.length;e--;)o[e].elem===this&&o[e].queue===t&&(o[e].anim.stop(!0),o.splice(e,1));for(e=0;e<a;e++)r[e]&&r[e].finish&&r[e].finish.call(this);delete n.finish})}}),_.each(["toggle","show","hide"],function(t,e){var n=_.fn[e];_.fn[e]=function(t,r,i){return null==t||"boolean"==typeof t?n.apply(this,arguments):this.animate(ae(e,!0),t,r,i)}}),_.each({slideDown:ae("show"),slideUp:ae("hide"),slideToggle:ae("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){_.fn[t]=function(t,n,r){return this.animate(e,t,n,r)}}),_.timers=[],_.fx.tick=function(){var t,e=0,n=_.timers;for(Jt=_.now();e<n.length;e++)(t=n[e])()||n[e]!==t||n.splice(e--,1);n.length||_.fx.stop(),Jt=void 0},_.fx.timer=function(t){_.timers.push(t),_.fx.start()},_.fx.interval=13,_.fx.start=function(){Zt||(Zt=!0,ie())},_.fx.stop=function(){Zt=null},_.fx.speeds={slow:600,fast:200,_default:400},_.fn.delay=function(t,e){return t=_.fx&&_.fx.speeds[t]||t,e=e||"fx",this.queue(e,function(e,r){var i=n.setTimeout(e,t);r.stop=function(){n.clearTimeout(i)}})},te=a.createElement("input"),ee=a.createElement("select").appendChild(a.createElement("option")),te.type="checkbox",m.checkOn=""!==te.value,m.optSelected=ee.selected,(te=a.createElement("input")).value="t",te.type="radio",m.radioValue="t"===te.value;var ce,le=_.expr.attrHandle;_.fn.extend({attr:function(t,e){return z(this,_.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){_.removeAttr(this,t)})}}),_.extend({attr:function(t,e,n){var r,i,o=t.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===t.getAttribute?_.prop(t,e,n):(1===o&&_.isXMLDoc(t)||(i=_.attrHooks[e.toLowerCase()]||(_.expr.match.bool.test(e)?ce:void 0)),void 0!==n?null===n?void _.removeAttr(t,e):i&&"set"in i&&void 0!==(r=i.set(t,n,e))?r:(t.setAttribute(e,n+""),n):i&&"get"in i&&null!==(r=i.get(t,e))?r:null==(r=_.find.attr(t,e))?void 0:r)},attrHooks:{type:{set:function(t,e){if(!m.radioValue&&"radio"===e&&O(t,"input")){var n=t.value;return t.setAttribute("type",e),n&&(t.value=n),e}}}},removeAttr:function(t,e){var n,r=0,i=e&&e.match(M);if(i&&1===t.nodeType)for(;n=i[r++];)t.removeAttribute(n)}}),ce={set:function(t,e,n){return!1===e?_.removeAttr(t,n):t.setAttribute(n,n),n}},_.each(_.expr.match.bool.source.match(/\w+/g),function(t,e){var n=le[e]||_.find.attr;le[e]=function(t,e,r){var i,o,a=e.toLowerCase();return r||(o=le[a],le[a]=i,i=null!=n(t,e,r)?a:null,le[a]=o),i}});var fe=/^(?:input|select|textarea|button)$/i,pe=/^(?:a|area)$/i;function de(t){return(t.match(M)||[]).join(" ")}function he(t){return t.getAttribute&&t.getAttribute("class")||""}_.fn.extend({prop:function(t,e){return z(this,_.prop,t,e,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[_.propFix[t]||t]})}}),_.extend({prop:function(t,e,n){var r,i,o=t.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&_.isXMLDoc(t)||(e=_.propFix[e]||e,i=_.propHooks[e]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(t,n,e))?r:t[e]=n:i&&"get"in i&&null!==(r=i.get(t,e))?r:t[e]},propHooks:{tabIndex:{get:function(t){var e=_.find.attr(t,"tabindex");return e?parseInt(e,10):fe.test(t.nodeName)||pe.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),m.optSelected||(_.propHooks.selected={get:function(t){var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(t){var e=t.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),_.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){_.propFix[this.toLowerCase()]=this}),_.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(_.isFunction(t))return this.each(function(e){_(this).addClass(t.call(this,e,he(this)))});if("string"==typeof t&&t)for(e=t.match(M)||[];n=this[u++];)if(i=he(n),r=1===n.nodeType&&" "+de(i)+" "){for(a=0;o=e[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=de(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(_.isFunction(t))return this.each(function(e){_(this).removeClass(t.call(this,e,he(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof t&&t)for(e=t.match(M)||[];n=this[u++];)if(i=he(n),r=1===n.nodeType&&" "+de(i)+" "){for(a=0;o=e[a++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");i!==(s=de(r))&&n.setAttribute("class",s)}return this},toggleClass:function(t,e){var n=typeof t;return"boolean"==typeof e&&"string"===n?e?this.addClass(t):this.removeClass(t):_.isFunction(t)?this.each(function(n){_(this).toggleClass(t.call(this,n,he(this),e),e)}):this.each(function(){var e,r,i,o;if("string"===n)for(r=0,i=_(this),o=t.match(M)||[];e=o[r++];)i.hasClass(e)?i.removeClass(e):i.addClass(e);else void 0!==t&&"boolean"!==n||((e=he(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===t?"":Q.get(this,"__className__")||""))})},hasClass:function(t){var e,n,r=0;for(e=" "+t+" ";n=this[r++];)if(1===n.nodeType&&(" "+de(he(n))+" ").indexOf(e)>-1)return!0;return!1}});var ve=/\r/g;_.fn.extend({val:function(t){var e,n,r,i=this[0];return arguments.length?(r=_.isFunction(t),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?t.call(this,n,_(this).val()):t)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=_.map(i,function(t){return null==t?"":t+""})),(e=_.valHooks[this.type]||_.valHooks[this.nodeName.toLowerCase()])&&"set"in e&&void 0!==e.set(this,i,"value")||(this.value=i))})):i?(e=_.valHooks[i.type]||_.valHooks[i.nodeName.toLowerCase()])&&"get"in e&&void 0!==(n=e.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(ve,""):null==n?"":n:void 0}}),_.extend({valHooks:{option:{get:function(t){var e=_.find.attr(t,"value");return null!=e?e:de(_.text(t))}},select:{get:function(t){var e,n,r,i=t.options,o=t.selectedIndex,a="select-one"===t.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!O(n.parentNode,"optgroup"))){if(e=_(n).val(),a)return e;s.push(e)}return s},set:function(t,e){for(var n,r,i=t.options,o=_.makeArray(e),a=i.length;a--;)((r=i[a]).selected=_.inArray(_.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(t.selectedIndex=-1),o}}}}),_.each(["radio","checkbox"],function(){_.valHooks[this]={set:function(t,e){if(Array.isArray(e))return t.checked=_.inArray(_(t).val(),e)>-1}},m.checkOn||(_.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})});var ge=/^(?:focusinfocus|focusoutblur)$/;_.extend(_.event,{trigger:function(t,e,r,i){var o,s,u,c,l,f,p,d=[r||a],v=h.call(t,"type")?t.type:t,g=h.call(t,"namespace")?t.namespace.split("."):[];if(s=u=r=r||a,3!==r.nodeType&&8!==r.nodeType&&!ge.test(v+_.event.triggered)&&(v.indexOf(".")>-1&&(v=(g=v.split(".")).shift(),g.sort()),l=v.indexOf(":")<0&&"on"+v,(t=t[_.expando]?t:new _.Event(v,"object"==typeof t&&t)).isTrigger=i?2:3,t.namespace=g.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),e=null==e?[t]:_.makeArray(e,[t]),p=_.event.special[v]||{},i||!p.trigger||!1!==p.trigger.apply(r,e))){if(!i&&!p.noBubble&&!_.isWindow(r)){for(c=p.delegateType||v,ge.test(c+v)||(s=s.parentNode);s;s=s.parentNode)d.push(s),u=s;u===(r.ownerDocument||a)&&d.push(u.defaultView||u.parentWindow||n)}for(o=0;(s=d[o++])&&!t.isPropagationStopped();)t.type=o>1?c:p.bindType||v,(f=(Q.get(s,"events")||{})[t.type]&&Q.get(s,"handle"))&&f.apply(s,e),(f=l&&s[l])&&f.apply&&V(s)&&(t.result=f.apply(s,e),!1===t.result&&t.preventDefault());return t.type=v,i||t.isDefaultPrevented()||p._default&&!1!==p._default.apply(d.pop(),e)||!V(r)||l&&_.isFunction(r[v])&&!_.isWindow(r)&&((u=r[l])&&(r[l]=null),_.event.triggered=v,r[v](),_.event.triggered=void 0,u&&(r[l]=u)),t.result}},simulate:function(t,e,n){var r=_.extend(new _.Event,n,{type:t,isSimulated:!0});_.event.trigger(r,null,e)}}),_.fn.extend({trigger:function(t,e){return this.each(function(){_.event.trigger(t,e,this)})},triggerHandler:function(t,e){var n=this[0];if(n)return _.event.trigger(t,e,n,!0)}}),_.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,e){_.fn[e]=function(t,n){return arguments.length>0?this.on(e,null,t,n):this.trigger(e)}}),_.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}}),m.focusin="onfocusin"in n,m.focusin||_.each({focus:"focusin",blur:"focusout"},function(t,e){var n=function(t){_.event.simulate(e,t.target,_.event.fix(t))};_.event.special[e]={setup:function(){var r=this.ownerDocument||this,i=Q.access(r,e);i||r.addEventListener(t,n,!0),Q.access(r,e,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=Q.access(r,e)-1;i?Q.access(r,e,i):(r.removeEventListener(t,n,!0),Q.remove(r,e))}}});var me=n.location,ye=_.now(),_e=/\?/;_.parseXML=function(t){var e;if(!t||"string"!=typeof t)return null;try{e=(new n.DOMParser).parseFromString(t,"text/xml")}catch(t){e=void 0}return e&&!e.getElementsByTagName("parsererror").length||_.error("Invalid XML: "+t),e};var be=/\[\]$/,we=/\r?\n/g,xe=/^(?:submit|button|image|reset|file)$/i,Ce=/^(?:input|select|textarea|keygen)/i;function Te(t,e,n,r){var i;if(Array.isArray(e))_.each(e,function(e,i){n||be.test(t)?r(t,i):Te(t+"["+("object"==typeof i&&null!=i?e:"")+"]",i,n,r)});else if(n||"object"!==_.type(e))r(t,e);else for(i in e)Te(t+"["+i+"]",e[i],n,r)}_.param=function(t,e){var n,r=[],i=function(t,e){var n=_.isFunction(e)?e():e;r[r.length]=encodeURIComponent(t)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(t)||t.jquery&&!_.isPlainObject(t))_.each(t,function(){i(this.name,this.value)});else for(n in t)Te(n,t[n],e,i);return r.join("&")},_.fn.extend({serialize:function(){return _.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=_.prop(this,"elements");return t?_.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!_(this).is(":disabled")&&Ce.test(this.nodeName)&&!xe.test(t)&&(this.checked||!st.test(t))}).map(function(t,e){var n=_(this).val();return null==n?null:Array.isArray(n)?_.map(n,function(t){return{name:e.name,value:t.replace(we,"\r\n")}}):{name:e.name,value:n.replace(we,"\r\n")}}).get()}});var Ee=/%20/g,Ae=/#.*$/,Se=/([?&])_=[^&]*/,ke=/^(.*?):[ \t]*([^\r\n]*)$/gm,Oe=/^(?:GET|HEAD)$/,De=/^\/\//,Ie={},Ne={},je="*/".concat("*"),Le=a.createElement("a");function $e(t){return function(e,n){"string"!=typeof e&&(n=e,e="*");var r,i=0,o=e.toLowerCase().match(M)||[];if(_.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(t[r]=t[r]||[]).unshift(n)):(t[r]=t[r]||[]).push(n)}}function Re(t,e,n,r){var i={},o=t===Ne;function a(s){var u;return i[s]=!0,_.each(t[s]||[],function(t,s){var c=s(e,n,r);return"string"!=typeof c||o||i[c]?o?!(u=c):void 0:(e.dataTypes.unshift(c),a(c),!1)}),u}return a(e.dataTypes[0])||!i["*"]&&a("*")}function Pe(t,e){var n,r,i=_.ajaxSettings.flatOptions||{};for(n in e)void 0!==e[n]&&((i[n]?t:r||(r={}))[n]=e[n]);return r&&_.extend(!0,t,r),t}Le.href=me.href,_.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:me.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(me.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":je,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":_.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?Pe(Pe(t,_.ajaxSettings),e):Pe(_.ajaxSettings,t)},ajaxPrefilter:$e(Ie),ajaxTransport:$e(Ne),ajax:function(t,e){"object"==typeof t&&(e=t,t=void 0),e=e||{};var r,i,o,s,u,c,l,f,p,d,h=_.ajaxSetup({},e),v=h.context||h,g=h.context&&(v.nodeType||v.jquery)?_(v):_.event,m=_.Deferred(),y=_.Callbacks("once memory"),b=h.statusCode||{},w={},x={},C="canceled",T={readyState:0,getResponseHeader:function(t){var e;if(l){if(!s)for(s={};e=ke.exec(o);)s[e[1].toLowerCase()]=e[2];e=s[t.toLowerCase()]}return null==e?null:e},getAllResponseHeaders:function(){return l?o:null},setRequestHeader:function(t,e){return null==l&&(t=x[t.toLowerCase()]=x[t.toLowerCase()]||t,w[t]=e),this},overrideMimeType:function(t){return null==l&&(h.mimeType=t),this},statusCode:function(t){var e;if(t)if(l)T.always(t[T.status]);else for(e in t)b[e]=[b[e],t[e]];return this},abort:function(t){var e=t||C;return r&&r.abort(e),E(0,e),this}};if(m.promise(T),h.url=((t||h.url||me.href)+"").replace(De,me.protocol+"//"),h.type=e.method||e.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){c=a.createElement("a");try{c.href=h.url,c.href=c.href,h.crossDomain=Le.protocol+"//"+Le.host!=c.protocol+"//"+c.host}catch(t){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=_.param(h.data,h.traditional)),Re(Ie,h,e,T),l)return T;(f=_.event&&h.global)&&0==_.active++&&_.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Oe.test(h.type),i=h.url.replace(Ae,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(Ee,"+")):(d=h.url.slice(i.length),h.data&&(i+=(_e.test(i)?"&":"?")+h.data,delete h.data),!1===h.cache&&(i=i.replace(Se,"$1"),d=(_e.test(i)?"&":"?")+"_="+ye+++d),h.url=i+d),h.ifModified&&(_.lastModified[i]&&T.setRequestHeader("If-Modified-Since",_.lastModified[i]),_.etag[i]&&T.setRequestHeader("If-None-Match",_.etag[i])),(h.data&&h.hasContent&&!1!==h.contentType||e.contentType)&&T.setRequestHeader("Content-Type",h.contentType),T.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+je+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)T.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(v,T,h)||l))return T.abort();if(C="abort",y.add(h.complete),T.done(h.success),T.fail(h.error),r=Re(Ne,h,e,T)){if(T.readyState=1,f&&g.trigger("ajaxSend",[T,h]),l)return T;h.async&&h.timeout>0&&(u=n.setTimeout(function(){T.abort("timeout")},h.timeout));try{l=!1,r.send(w,E)}catch(t){if(l)throw t;E(-1,t)}}else E(-1,"No Transport");function E(t,e,a,s){var c,p,d,w,x,C=e;l||(l=!0,u&&n.clearTimeout(u),r=void 0,o=s||"",T.readyState=t>0?4:0,c=t>=200&&t<300||304===t,a&&(w=function(t,e,n){for(var r,i,o,a,s=t.contents,u=t.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=t.mimeType||e.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||t.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(h,T,a)),w=function(t,e,n,r){var i,o,a,s,u,c={},l=t.dataTypes.slice();if(l[1])for(a in t.converters)c[a.toLowerCase()]=t.converters[a];for(o=l.shift();o;)if(t.responseFields[o]&&(n[t.responseFields[o]]=e),!u&&r&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),u=o,o=l.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=c[u+" "+o]||c["* "+o]))for(i in c)if((s=i.split(" "))[1]===o&&(a=c[u+" "+s[0]]||c["* "+s[0]])){!0===a?a=c[i]:!0!==c[i]&&(o=s[0],l.unshift(s[1]));break}if(!0!==a)if(a&&t.throws)e=a(e);else try{e=a(e)}catch(t){return{state:"parsererror",error:a?t:"No conversion from "+u+" to "+o}}}return{state:"success",data:e}}(h,w,T,c),c?(h.ifModified&&((x=T.getResponseHeader("Last-Modified"))&&(_.lastModified[i]=x),(x=T.getResponseHeader("etag"))&&(_.etag[i]=x)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=w.state,p=w.data,c=!(d=w.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),T.status=t,T.statusText=(e||C)+"",c?m.resolveWith(v,[p,C,T]):m.rejectWith(v,[T,C,d]),T.statusCode(b),b=void 0,f&&g.trigger(c?"ajaxSuccess":"ajaxError",[T,h,c?p:d]),y.fireWith(v,[T,C]),f&&(g.trigger("ajaxComplete",[T,h]),--_.active||_.event.trigger("ajaxStop")))}return T},getJSON:function(t,e,n){return _.get(t,e,n,"json")},getScript:function(t,e){return _.get(t,void 0,e,"script")}}),_.each(["get","post"],function(t,e){_[e]=function(t,n,r,i){return _.isFunction(n)&&(i=i||r,r=n,n=void 0),_.ajax(_.extend({url:t,type:e,dataType:i,data:n,success:r},_.isPlainObject(t)&&t))}}),_._evalUrl=function(t){return _.ajax({url:t,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},_.fn.extend({wrapAll:function(t){var e;return this[0]&&(_.isFunction(t)&&(t=t.call(this[0])),e=_(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this},wrapInner:function(t){return _.isFunction(t)?this.each(function(e){_(this).wrapInner(t.call(this,e))}):this.each(function(){var e=_(this),n=e.contents();n.length?n.wrapAll(t):e.append(t)})},wrap:function(t){var e=_.isFunction(t);return this.each(function(n){_(this).wrapAll(e?t.call(this,n):t)})},unwrap:function(t){return this.parent(t).not("body").each(function(){_(this).replaceWith(this.childNodes)}),this}}),_.expr.pseudos.hidden=function(t){return!_.expr.pseudos.visible(t)},_.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},_.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch(t){}};var Me={0:200,1223:204},Fe=_.ajaxSettings.xhr();m.cors=!!Fe&&"withCredentials"in Fe,m.ajax=Fe=!!Fe,_.ajaxTransport(function(t){var e,r;if(m.cors||Fe&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);e=function(t){return function(){e&&(e=r=s.onload=s.onerror=s.onabort=s.onreadystatechange=null,"abort"===t?s.abort():"error"===t?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Me[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=e(),r=s.onerror=e("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&n.setTimeout(function(){e&&r()})},e=e("abort");try{s.send(t.hasContent&&t.data||null)}catch(t){if(e)throw t}},abort:function(){e&&e()}}}),_.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),_.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return _.globalEval(t),t}}}),_.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),_.ajaxTransport("script",function(t){var e,n;if(t.crossDomain)return{send:function(r,i){e=_("<script>").prop({charset:t.scriptCharset,src:t.url}).on("load error",n=function(t){e.remove(),n=null,t&&i("error"===t.type?404:200,t.type)}),a.head.appendChild(e[0])},abort:function(){n&&n()}}});var He,Be=[],We=/(=)\?(?=&|$)|\?\?/;_.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=Be.pop()||_.expando+"_"+ye++;return this[t]=!0,t}}),_.ajaxPrefilter("json jsonp",function(t,e,r){var i,o,a,s=!1!==t.jsonp&&(We.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&We.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=_.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(We,"$1"+i):!1!==t.jsonp&&(t.url+=(_e.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||_.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=n[i],n[i]=function(){a=arguments},r.always(function(){void 0===o?_(n).removeProp(i):n[i]=o,t[i]&&(t.jsonpCallback=e.jsonpCallback,Be.push(i)),a&&_.isFunction(o)&&o(a[0]),a=o=void 0}),"script"}),m.createHTMLDocument=((He=a.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===He.childNodes.length),_.parseHTML=function(t,e,n){return"string"!=typeof t?[]:("boolean"==typeof e&&(n=e,e=!1),e||(m.createHTMLDocument?((r=(e=a.implementation.createHTMLDocument("")).createElement("base")).href=a.location.href,e.head.appendChild(r)):e=a),i=D.exec(t),o=!n&&[],i?[e.createElement(i[1])]:(i=gt([t],e,o),o&&o.length&&_(o).remove(),_.merge([],i.childNodes)));var r,i,o},_.fn.load=function(t,e,n){var r,i,o,a=this,s=t.indexOf(" ");return s>-1&&(r=de(t.slice(s)),t=t.slice(0,s)),_.isFunction(e)?(n=e,e=void 0):e&&"object"==typeof e&&(i="POST"),a.length>0&&_.ajax({url:t,type:i||"GET",dataType:"html",data:e}).done(function(t){o=arguments,a.html(r?_("<div>").append(_.parseHTML(t)).find(r):t)}).always(n&&function(t,e){a.each(function(){n.apply(this,o||[t.responseText,e,t])})}),this},_.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){_.fn[e]=function(t){return this.on(e,t)}}),_.expr.pseudos.animated=function(t){return _.grep(_.timers,function(e){return t===e.elem}).length},_.offset={setOffset:function(t,e,n){var r,i,o,a,s,u,c=_.css(t,"position"),l=_(t),f={};"static"===c&&(t.style.position="relative"),s=l.offset(),o=_.css(t,"top"),u=_.css(t,"left"),("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1?(a=(r=l.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),_.isFunction(e)&&(e=e.call(t,n,_.extend({},s))),null!=e.top&&(f.top=e.top-s.top+a),null!=e.left&&(f.left=e.left-s.left+i),"using"in e?e.using.call(t,f):l.css(f)}},_.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){_.offset.setOffset(this,t,e)});var e,n,r,i,o=this[0];return o?o.getClientRects().length?(r=o.getBoundingClientRect(),n=(e=o.ownerDocument).documentElement,i=e.defaultView,{top:r.top+i.pageYOffset-n.clientTop,left:r.left+i.pageXOffset-n.clientLeft}):{top:0,left:0}:void 0},position:function(){if(this[0]){var t,e,n=this[0],r={top:0,left:0};return"fixed"===_.css(n,"position")?e=n.getBoundingClientRect():(t=this.offsetParent(),e=this.offset(),O(t[0],"html")||(r=t.offset()),r={top:r.top+_.css(t[0],"borderTopWidth",!0),left:r.left+_.css(t[0],"borderLeftWidth",!0)}),{top:e.top-r.top-_.css(n,"marginTop",!0),left:e.left-r.left-_.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&"static"===_.css(t,"position");)t=t.offsetParent;return t||mt})}}),_.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,e){var n="pageYOffset"===e;_.fn[t]=function(r){return z(this,function(t,r,i){var o;if(_.isWindow(t)?o=t:9===t.nodeType&&(o=t.defaultView),void 0===i)return o?o[e]:t[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):t[r]=i},t,r,arguments.length)}}),_.each(["top","left"],function(t,e){_.cssHooks[e]=Ht(m.pixelPosition,function(t,n){if(n)return n=Ft(t,e),Pt.test(n)?_(t).position()[e]+"px":n})}),_.each({Height:"height",Width:"width"},function(t,e){_.each({padding:"inner"+t,content:e,"":"outer"+t},function(n,r){_.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(e,n,i){var o;return _.isWindow(e)?0===r.indexOf("outer")?e["inner"+t]:e.document.documentElement["client"+t]:9===e.nodeType?(o=e.documentElement,Math.max(e.body["scroll"+t],o["scroll"+t],e.body["offset"+t],o["offset"+t],o["client"+t])):void 0===i?_.css(e,n,s):_.style(e,n,i,s)},e,a?i:void 0,a)}})}),_.fn.extend({bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,n,r){return this.on(e,t,n,r)},undelegate:function(t,e,n){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)}}),_.holdReady=function(t){t?_.readyWait++:_.ready(!0)},_.isArray=Array.isArray,_.parseJSON=JSON.parse,_.nodeName=O,void 0===(r=function(){return _}.apply(e,[]))||(t.exports=r);var qe=n.jQuery,Ue=n.$;return _.noConflict=function(t){return n.$===_&&(n.$=Ue),t&&n.jQuery===_&&(n.jQuery=qe),_},i||(n.jQuery=n.$=_),_})},function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},function(t,e){var n,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var u,c=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&d())}function d(){if(!l){var t=s(p);l=!0;for(var e=c.length;e;){for(u=c,c=[];++f<e;)u&&u[f].run();f=-1,e=c.length}u=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function v(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new h(t,e)),1!==c.length||l||s(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e,n){"use strict";var r=n(0),i=n(22),o=n(24),a=n(25),s=n(26),u=n(8),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(27);t.exports=function(t){return new Promise(function(e,l){var f=t.data,p=t.headers;r.isFormData(f)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",v=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||s(t.url)||(d=new window.XDomainRequest,h="onload",v=!0,d.onprogress=function(){},d.ontimeout=function(){}),t.auth){var g=t.auth.username||"",m=t.auth.password||"";p.Authorization="Basic "+c(g+":"+m)}if(d.open(t.method.toUpperCase(),o(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d[h]=function(){if(d&&(4===d.readyState||v)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?a(d.getAllResponseHeaders()):null,r={data:t.responseType&&"text"!==t.responseType?d.response:d.responseText,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:t,request:d};i(e,l,r),d=null}},d.onerror=function(){l(u("Network Error",t,null,d)),d=null},d.ontimeout=function(){l(u("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var y=n(28),_=(t.withCredentials||s(t.url))&&t.xsrfCookieName?y.read(t.xsrfCookieName):void 0;_&&(p[t.xsrfHeaderName]=_)}if("setRequestHeader"in d&&r.forEach(p,function(t,e){void 0===f&&"content-type"===e.toLowerCase()?delete p[e]:d.setRequestHeader(e,t)}),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),l(t),d=null)}),void 0===f&&(f=null),d.send(f)})}},function(t,e,n){"use strict";var r=n(23);t.exports=function(t,e,n,i,o){var a=new Error(t);return r(a,e,n,i,o)}},function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},function(t,e,n){n(12),t.exports=n(43)},function(t,e,n){n(13),window.Vue=n(36),Vue.component("example-component",n(39));new Vue({el:"#app"})},function(t,e,n){window._=n(14),window.Popper=n(3).default;try{window.$=window.jQuery=n(4),n(16)}catch(t){}window.axios=n(17),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var r=document.head.querySelector('meta[name="csrf-token"]');r?window.axios.defaults.headers.common["X-CSRF-TOKEN"]=r.content:console.error("CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token")},function(t,e,n){(function(t,r){var i;(function(){var o,a=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",c="__lodash_hash_undefined__",l=500,f="__lodash_placeholder__",p=1,d=2,h=4,v=1,g=2,m=1,y=2,_=4,b=8,w=16,x=32,C=64,T=128,E=256,A=512,S=30,k="...",O=800,D=16,I=1,N=2,j=1/0,L=9007199254740991,$=1.7976931348623157e308,R=NaN,P=4294967295,M=P-1,F=P>>>1,H=[["ary",T],["bind",m],["bindKey",y],["curry",b],["curryRight",w],["flip",A],["partial",x],["partialRight",C],["rearg",E]],B="[object Arguments]",W="[object Array]",q="[object AsyncFunction]",U="[object Boolean]",z="[object Date]",V="[object DOMException]",K="[object Error]",Q="[object Function]",G="[object GeneratorFunction]",Y="[object Map]",X="[object Number]",J="[object Null]",Z="[object Object]",tt="[object Promise]",et="[object Proxy]",nt="[object RegExp]",rt="[object Set]",it="[object String]",ot="[object Symbol]",at="[object Undefined]",st="[object WeakMap]",ut="[object WeakSet]",ct="[object ArrayBuffer]",lt="[object DataView]",ft="[object Float32Array]",pt="[object Float64Array]",dt="[object Int8Array]",ht="[object Int16Array]",vt="[object Int32Array]",gt="[object Uint8Array]",mt="[object Uint8ClampedArray]",yt="[object Uint16Array]",_t="[object Uint32Array]",bt=/\b__p \+= '';/g,wt=/\b(__p \+=) '' \+/g,xt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ct=/&(?:amp|lt|gt|quot|#39);/g,Tt=/[&<>"']/g,Et=RegExp(Ct.source),At=RegExp(Tt.source),St=/<%-([\s\S]+?)%>/g,kt=/<%([\s\S]+?)%>/g,Ot=/<%=([\s\S]+?)%>/g,Dt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,It=/^\w*$/,Nt=/^\./,jt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Lt=/[\\^$.*+?()[\]{}|]/g,$t=RegExp(Lt.source),Rt=/^\s+|\s+$/g,Pt=/^\s+/,Mt=/\s+$/,Ft=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ht=/\{\n\/\* \[wrapped with (.+)\] \*/,Bt=/,? & /,Wt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,qt=/\\(\\)?/g,Ut=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,zt=/\w*$/,Vt=/^[-+]0x[0-9a-f]+$/i,Kt=/^0b[01]+$/i,Qt=/^\[object .+?Constructor\]$/,Gt=/^0o[0-7]+$/i,Yt=/^(?:0|[1-9]\d*)$/,Xt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Jt=/($^)/,Zt=/['\n\r\u2028\u2029\\]/g,te="\\ud800-\\udfff",ee="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",ne="\\u2700-\\u27bf",re="a-z\\xdf-\\xf6\\xf8-\\xff",ie="A-Z\\xc0-\\xd6\\xd8-\\xde",oe="\\ufe0e\\ufe0f",ae="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",se="['’]",ue="["+te+"]",ce="["+ae+"]",le="["+ee+"]",fe="\\d+",pe="["+ne+"]",de="["+re+"]",he="[^"+te+ae+fe+ne+re+ie+"]",ve="\\ud83c[\\udffb-\\udfff]",ge="[^"+te+"]",me="(?:\\ud83c[\\udde6-\\uddff]){2}",ye="[\\ud800-\\udbff][\\udc00-\\udfff]",_e="["+ie+"]",be="\\u200d",we="(?:"+de+"|"+he+")",xe="(?:"+_e+"|"+he+")",Ce="(?:['’](?:d|ll|m|re|s|t|ve))?",Te="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ee="(?:"+le+"|"+ve+")"+"?",Ae="["+oe+"]?",Se=Ae+Ee+("(?:"+be+"(?:"+[ge,me,ye].join("|")+")"+Ae+Ee+")*"),ke="(?:"+[pe,me,ye].join("|")+")"+Se,Oe="(?:"+[ge+le+"?",le,me,ye,ue].join("|")+")",De=RegExp(se,"g"),Ie=RegExp(le,"g"),Ne=RegExp(ve+"(?="+ve+")|"+Oe+Se,"g"),je=RegExp([_e+"?"+de+"+"+Ce+"(?="+[ce,_e,"$"].join("|")+")",xe+"+"+Te+"(?="+[ce,_e+we,"$"].join("|")+")",_e+"?"+we+"+"+Ce,_e+"+"+Te,"\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)","\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)",fe,ke].join("|"),"g"),Le=RegExp("["+be+te+ee+oe+"]"),$e=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Re=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Pe=-1,Me={};Me[ft]=Me[pt]=Me[dt]=Me[ht]=Me[vt]=Me[gt]=Me[mt]=Me[yt]=Me[_t]=!0,Me[B]=Me[W]=Me[ct]=Me[U]=Me[lt]=Me[z]=Me[K]=Me[Q]=Me[Y]=Me[X]=Me[Z]=Me[nt]=Me[rt]=Me[it]=Me[st]=!1;var Fe={};Fe[B]=Fe[W]=Fe[ct]=Fe[lt]=Fe[U]=Fe[z]=Fe[ft]=Fe[pt]=Fe[dt]=Fe[ht]=Fe[vt]=Fe[Y]=Fe[X]=Fe[Z]=Fe[nt]=Fe[rt]=Fe[it]=Fe[ot]=Fe[gt]=Fe[mt]=Fe[yt]=Fe[_t]=!0,Fe[K]=Fe[Q]=Fe[st]=!1;var He={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Be=parseFloat,We=parseInt,qe="object"==typeof t&&t&&t.Object===Object&&t,Ue="object"==typeof self&&self&&self.Object===Object&&self,ze=qe||Ue||Function("return this")(),Ve="object"==typeof e&&e&&!e.nodeType&&e,Ke=Ve&&"object"==typeof r&&r&&!r.nodeType&&r,Qe=Ke&&Ke.exports===Ve,Ge=Qe&&qe.process,Ye=function(){try{return Ge&&Ge.binding&&Ge.binding("util")}catch(t){}}(),Xe=Ye&&Ye.isArrayBuffer,Je=Ye&&Ye.isDate,Ze=Ye&&Ye.isMap,tn=Ye&&Ye.isRegExp,en=Ye&&Ye.isSet,nn=Ye&&Ye.isTypedArray;function rn(t,e){return t.set(e[0],e[1]),t}function on(t,e){return t.add(e),t}function an(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function sn(t,e,n,r){for(var i=-1,o=null==t?0:t.length;++i<o;){var a=t[i];e(r,a,n(a),t)}return r}function un(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t}function cn(t,e){for(var n=null==t?0:t.length;n--&&!1!==e(t[n],n,t););return t}function ln(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(!e(t[n],n,t))return!1;return!0}function fn(t,e){for(var n=-1,r=null==t?0:t.length,i=0,o=[];++n<r;){var a=t[n];e(a,n,t)&&(o[i++]=a)}return o}function pn(t,e){return!!(null==t?0:t.length)&&xn(t,e,0)>-1}function dn(t,e,n){for(var r=-1,i=null==t?0:t.length;++r<i;)if(n(e,t[r]))return!0;return!1}function hn(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}function vn(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}function gn(t,e,n,r){var i=-1,o=null==t?0:t.length;for(r&&o&&(n=t[++i]);++i<o;)n=e(n,t[i],i,t);return n}function mn(t,e,n,r){var i=null==t?0:t.length;for(r&&i&&(n=t[--i]);i--;)n=e(n,t[i],i,t);return n}function yn(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}var _n=An("length");function bn(t,e,n){var r;return n(t,function(t,n,i){if(e(t,n,i))return r=n,!1}),r}function wn(t,e,n,r){for(var i=t.length,o=n+(r?1:-1);r?o--:++o<i;)if(e(t[o],o,t))return o;return-1}function xn(t,e,n){return e==e?function(t,e,n){var r=n-1,i=t.length;for(;++r<i;)if(t[r]===e)return r;return-1}(t,e,n):wn(t,Tn,n)}function Cn(t,e,n,r){for(var i=n-1,o=t.length;++i<o;)if(r(t[i],e))return i;return-1}function Tn(t){return t!=t}function En(t,e){var n=null==t?0:t.length;return n?On(t,e)/n:R}function An(t){return function(e){return null==e?o:e[t]}}function Sn(t){return function(e){return null==t?o:t[e]}}function kn(t,e,n,r,i){return i(t,function(t,i,o){n=r?(r=!1,t):e(n,t,i,o)}),n}function On(t,e){for(var n,r=-1,i=t.length;++r<i;){var a=e(t[r]);a!==o&&(n=n===o?a:n+a)}return n}function Dn(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}function In(t){return function(e){return t(e)}}function Nn(t,e){return hn(e,function(e){return t[e]})}function jn(t,e){return t.has(e)}function Ln(t,e){for(var n=-1,r=t.length;++n<r&&xn(e,t[n],0)>-1;);return n}function $n(t,e){for(var n=t.length;n--&&xn(e,t[n],0)>-1;);return n}var Rn=Sn({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),Pn=Sn({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function Mn(t){return"\\"+He[t]}function Fn(t){return Le.test(t)}function Hn(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}function Bn(t,e){return function(n){return t(e(n))}}function Wn(t,e){for(var n=-1,r=t.length,i=0,o=[];++n<r;){var a=t[n];a!==e&&a!==f||(t[n]=f,o[i++]=n)}return o}function qn(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}function Un(t){return Fn(t)?function(t){var e=Ne.lastIndex=0;for(;Ne.test(t);)++e;return e}(t):_n(t)}function zn(t){return Fn(t)?t.match(Ne)||[]:t.split("")}var Vn=Sn({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var Kn=function t(e){var n,r=(e=null==e?ze:Kn.defaults(ze.Object(),e,Kn.pick(ze,Re))).Array,i=e.Date,te=e.Error,ee=e.Function,ne=e.Math,re=e.Object,ie=e.RegExp,oe=e.String,ae=e.TypeError,se=r.prototype,ue=ee.prototype,ce=re.prototype,le=e["__core-js_shared__"],fe=ue.toString,pe=ce.hasOwnProperty,de=0,he=(n=/[^.]+$/.exec(le&&le.keys&&le.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"",ve=ce.toString,ge=fe.call(re),me=ze._,ye=ie("^"+fe.call(pe).replace(Lt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_e=Qe?e.Buffer:o,be=e.Symbol,we=e.Uint8Array,xe=_e?_e.allocUnsafe:o,Ce=Bn(re.getPrototypeOf,re),Te=re.create,Ee=ce.propertyIsEnumerable,Ae=se.splice,Se=be?be.isConcatSpreadable:o,ke=be?be.iterator:o,Oe=be?be.toStringTag:o,Ne=function(){try{var t=Wo(re,"defineProperty");return t({},"",{}),t}catch(t){}}(),Le=e.clearTimeout!==ze.clearTimeout&&e.clearTimeout,He=i&&i.now!==ze.Date.now&&i.now,qe=e.setTimeout!==ze.setTimeout&&e.setTimeout,Ue=ne.ceil,Ve=ne.floor,Ke=re.getOwnPropertySymbols,Ge=_e?_e.isBuffer:o,Ye=e.isFinite,_n=se.join,Sn=Bn(re.keys,re),Qn=ne.max,Gn=ne.min,Yn=i.now,Xn=e.parseInt,Jn=ne.random,Zn=se.reverse,tr=Wo(e,"DataView"),er=Wo(e,"Map"),nr=Wo(e,"Promise"),rr=Wo(e,"Set"),ir=Wo(e,"WeakMap"),or=Wo(re,"create"),ar=ir&&new ir,sr={},ur=va(tr),cr=va(er),lr=va(nr),fr=va(rr),pr=va(ir),dr=be?be.prototype:o,hr=dr?dr.valueOf:o,vr=dr?dr.toString:o;function gr(t){if(Ns(t)&&!ws(t)&&!(t instanceof br)){if(t instanceof _r)return t;if(pe.call(t,"__wrapped__"))return ga(t)}return new _r(t)}var mr=function(){function t(){}return function(e){if(!Is(e))return{};if(Te)return Te(e);t.prototype=e;var n=new t;return t.prototype=o,n}}();function yr(){}function _r(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=o}function br(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=P,this.__views__=[]}function wr(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function xr(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Cr(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Tr(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new Cr;++e<n;)this.add(t[e])}function Er(t){var e=this.__data__=new xr(t);this.size=e.size}function Ar(t,e){var n=ws(t),r=!n&&bs(t),i=!n&&!r&&Es(t),o=!n&&!r&&!i&&Hs(t),a=n||r||i||o,s=a?Dn(t.length,oe):[],u=s.length;for(var c in t)!e&&!pe.call(t,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Go(c,u))||s.push(c);return s}function Sr(t){var e=t.length;return e?t[Ti(0,e-1)]:o}function kr(t,e){return la(oo(t),Pr(e,0,t.length))}function Or(t){return la(oo(t))}function Dr(t,e,n){(n===o||ms(t[e],n))&&(n!==o||e in t)||$r(t,e,n)}function Ir(t,e,n){var r=t[e];pe.call(t,e)&&ms(r,n)&&(n!==o||e in t)||$r(t,e,n)}function Nr(t,e){for(var n=t.length;n--;)if(ms(t[n][0],e))return n;return-1}function jr(t,e,n,r){return Wr(t,function(t,i,o){e(r,t,n(t),o)}),r}function Lr(t,e){return t&&ao(e,uu(e),t)}function $r(t,e,n){"__proto__"==e&&Ne?Ne(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function Rr(t,e){for(var n=-1,i=e.length,a=r(i),s=null==t;++n<i;)a[n]=s?o:ru(t,e[n]);return a}function Pr(t,e,n){return t==t&&(n!==o&&(t=t<=n?t:n),e!==o&&(t=t>=e?t:e)),t}function Mr(t,e,n,r,i,a){var s,u=e&p,c=e&d,l=e&h;if(n&&(s=i?n(t,r,i,a):n(t)),s!==o)return s;if(!Is(t))return t;var f,v,g,m,y,_,b,w,x,C=ws(t);if(C){if(b=t,w=b.length,x=b.constructor(w),w&&"string"==typeof b[0]&&pe.call(b,"index")&&(x.index=b.index,x.input=b.input),s=x,!u)return oo(t,s)}else{var T=zo(t),E=T==Q||T==G;if(Es(t))return Zi(t,u);if(T==Z||T==B||E&&!i){if(s=c||E?{}:Ko(t),!u)return c?(g=t,_=t,m=(y=s)&&ao(_,cu(_),y),ao(g,Uo(g),m)):(f=t,v=Lr(s,t),ao(f,qo(f),v))}else{if(!Fe[T])return i?t:{};s=function(t,e,n,r){var i,o,a,s,u,c,l,f=t.constructor;switch(e){case ct:return to(t);case U:case z:return new f(+t);case lt:return c=t,l=r?to(c.buffer):c.buffer,new c.constructor(l,c.byteOffset,c.byteLength);case ft:case pt:case dt:case ht:case vt:case gt:case mt:case yt:case _t:return eo(t,r);case Y:return u=t,gn(r?n(Hn(u),p):Hn(u),rn,new u.constructor);case X:case it:return new f(t);case nt:return(s=new(a=t).constructor(a.source,zt.exec(a))).lastIndex=a.lastIndex,s;case rt:return o=t,gn(r?n(qn(o),p):qn(o),on,new o.constructor);case ot:return i=t,hr?re(hr.call(i)):{}}}(t,T,Mr,u)}}a||(a=new Er);var A=a.get(t);if(A)return A;a.set(t,s);var S=C?o:(l?c?$o:Lo:c?cu:uu)(t);return un(S||t,function(r,i){S&&(r=t[i=r]),Ir(s,i,Mr(r,e,n,i,t,a))}),s}function Fr(t,e,n){var r=n.length;if(null==t)return!r;for(t=re(t);r--;){var i=n[r],a=e[i],s=t[i];if(s===o&&!(i in t)||!a(s))return!1}return!0}function Hr(t,e,n){if("function"!=typeof t)throw new ae(u);return aa(function(){t.apply(o,n)},e)}function Br(t,e,n,r){var i=-1,o=pn,s=!0,u=t.length,c=[],l=e.length;if(!u)return c;n&&(e=hn(e,In(n))),r?(o=dn,s=!1):e.length>=a&&(o=jn,s=!1,e=new Tr(e));t:for(;++i<u;){var f=t[i],p=null==n?f:n(f);if(f=r||0!==f?f:0,s&&p==p){for(var d=l;d--;)if(e[d]===p)continue t;c.push(f)}else o(e,p,r)||c.push(f)}return c}gr.templateSettings={escape:St,evaluate:kt,interpolate:Ot,variable:"",imports:{_:gr}},gr.prototype=yr.prototype,gr.prototype.constructor=gr,_r.prototype=mr(yr.prototype),_r.prototype.constructor=_r,br.prototype=mr(yr.prototype),br.prototype.constructor=br,wr.prototype.clear=function(){this.__data__=or?or(null):{},this.size=0},wr.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},wr.prototype.get=function(t){var e=this.__data__;if(or){var n=e[t];return n===c?o:n}return pe.call(e,t)?e[t]:o},wr.prototype.has=function(t){var e=this.__data__;return or?e[t]!==o:pe.call(e,t)},wr.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=or&&e===o?c:e,this},xr.prototype.clear=function(){this.__data__=[],this.size=0},xr.prototype.delete=function(t){var e=this.__data__,n=Nr(e,t);return!(n<0||(n==e.length-1?e.pop():Ae.call(e,n,1),--this.size,0))},xr.prototype.get=function(t){var e=this.__data__,n=Nr(e,t);return n<0?o:e[n][1]},xr.prototype.has=function(t){return Nr(this.__data__,t)>-1},xr.prototype.set=function(t,e){var n=this.__data__,r=Nr(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this},Cr.prototype.clear=function(){this.size=0,this.__data__={hash:new wr,map:new(er||xr),string:new wr}},Cr.prototype.delete=function(t){var e=Ho(this,t).delete(t);return this.size-=e?1:0,e},Cr.prototype.get=function(t){return Ho(this,t).get(t)},Cr.prototype.has=function(t){return Ho(this,t).has(t)},Cr.prototype.set=function(t,e){var n=Ho(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this},Tr.prototype.add=Tr.prototype.push=function(t){return this.__data__.set(t,c),this},Tr.prototype.has=function(t){return this.__data__.has(t)},Er.prototype.clear=function(){this.__data__=new xr,this.size=0},Er.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},Er.prototype.get=function(t){return this.__data__.get(t)},Er.prototype.has=function(t){return this.__data__.has(t)},Er.prototype.set=function(t,e){var n=this.__data__;if(n instanceof xr){var r=n.__data__;if(!er||r.length<a-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Cr(r)}return n.set(t,e),this.size=n.size,this};var Wr=co(Yr),qr=co(Xr,!0);function Ur(t,e){var n=!0;return Wr(t,function(t,r,i){return n=!!e(t,r,i)}),n}function zr(t,e,n){for(var r=-1,i=t.length;++r<i;){var a=t[r],s=e(a);if(null!=s&&(u===o?s==s&&!Fs(s):n(s,u)))var u=s,c=a}return c}function Vr(t,e){var n=[];return Wr(t,function(t,r,i){e(t,r,i)&&n.push(t)}),n}function Kr(t,e,n,r,i){var o=-1,a=t.length;for(n||(n=Qo),i||(i=[]);++o<a;){var s=t[o];e>0&&n(s)?e>1?Kr(s,e-1,n,r,i):vn(i,s):r||(i[i.length]=s)}return i}var Qr=lo(),Gr=lo(!0);function Yr(t,e){return t&&Qr(t,e,uu)}function Xr(t,e){return t&&Gr(t,e,uu)}function Jr(t,e){return fn(e,function(e){return ks(t[e])})}function Zr(t,e){for(var n=0,r=(e=Gi(e,t)).length;null!=t&&n<r;)t=t[ha(e[n++])];return n&&n==r?t:o}function ti(t,e,n){var r=e(t);return ws(t)?r:vn(r,n(t))}function ei(t){return null==t?t===o?at:J:Oe&&Oe in re(t)?function(t){var e=pe.call(t,Oe),n=t[Oe];try{t[Oe]=o;var r=!0}catch(t){}var i=ve.call(t);return r&&(e?t[Oe]=n:delete t[Oe]),i}(t):(e=t,ve.call(e));var e}function ni(t,e){return t>e}function ri(t,e){return null!=t&&pe.call(t,e)}function ii(t,e){return null!=t&&e in re(t)}function oi(t,e,n){for(var i=n?dn:pn,a=t[0].length,s=t.length,u=s,c=r(s),l=1/0,f=[];u--;){var p=t[u];u&&e&&(p=hn(p,In(e))),l=Gn(p.length,l),c[u]=!n&&(e||a>=120&&p.length>=120)?new Tr(u&&p):o}p=t[0];var d=-1,h=c[0];t:for(;++d<a&&f.length<l;){var v=p[d],g=e?e(v):v;if(v=n||0!==v?v:0,!(h?jn(h,g):i(f,g,n))){for(u=s;--u;){var m=c[u];if(!(m?jn(m,g):i(t[u],g,n)))continue t}h&&h.push(g),f.push(v)}}return f}function ai(t,e,n){var r=null==(t=ia(t,e=Gi(e,t)))?t:t[ha(Sa(e))];return null==r?o:an(r,t,n)}function si(t){return Ns(t)&&ei(t)==B}function ui(t,e,n,r,i){return t===e||(null==t||null==e||!Ns(t)&&!Ns(e)?t!=t&&e!=e:function(t,e,n,r,i,a){var s=ws(t),u=ws(e),c=s?W:zo(t),l=u?W:zo(e),f=(c=c==B?Z:c)==Z,p=(l=l==B?Z:l)==Z,d=c==l;if(d&&Es(t)){if(!Es(e))return!1;s=!0,f=!1}if(d&&!f)return a||(a=new Er),s||Hs(t)?No(t,e,n,r,i,a):function(t,e,n,r,i,o,a){switch(n){case lt:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case ct:return!(t.byteLength!=e.byteLength||!o(new we(t),new we(e)));case U:case z:case X:return ms(+t,+e);case K:return t.name==e.name&&t.message==e.message;case nt:case it:return t==e+"";case Y:var s=Hn;case rt:var u=r&v;if(s||(s=qn),t.size!=e.size&&!u)return!1;var c=a.get(t);if(c)return c==e;r|=g,a.set(t,e);var l=No(s(t),s(e),r,i,o,a);return a.delete(t),l;case ot:if(hr)return hr.call(t)==hr.call(e)}return!1}(t,e,c,n,r,i,a);if(!(n&v)){var h=f&&pe.call(t,"__wrapped__"),m=p&&pe.call(e,"__wrapped__");if(h||m){var y=h?t.value():t,_=m?e.value():e;return a||(a=new Er),i(y,_,n,r,a)}}return!!d&&(a||(a=new Er),function(t,e,n,r,i,a){var s=n&v,u=Lo(t),c=u.length,l=Lo(e).length;if(c!=l&&!s)return!1;for(var f=c;f--;){var p=u[f];if(!(s?p in e:pe.call(e,p)))return!1}var d=a.get(t);if(d&&a.get(e))return d==e;var h=!0;a.set(t,e),a.set(e,t);for(var g=s;++f<c;){p=u[f];var m=t[p],y=e[p];if(r)var _=s?r(y,m,p,e,t,a):r(m,y,p,t,e,a);if(!(_===o?m===y||i(m,y,n,r,a):_)){h=!1;break}g||(g="constructor"==p)}if(h&&!g){var b=t.constructor,w=e.constructor;b!=w&&"constructor"in t&&"constructor"in e&&!("function"==typeof b&&b instanceof b&&"function"==typeof w&&w instanceof w)&&(h=!1)}return a.delete(t),a.delete(e),h}(t,e,n,r,i,a))}(t,e,n,r,ui,i))}function ci(t,e,n,r){var i=n.length,a=i,s=!r;if(null==t)return!a;for(t=re(t);i--;){var u=n[i];if(s&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++i<a;){var c=(u=n[i])[0],l=t[c],f=u[1];if(s&&u[2]){if(l===o&&!(c in t))return!1}else{var p=new Er;if(r)var d=r(l,f,c,t,e,p);if(!(d===o?ui(f,l,v|g,r,p):d))return!1}}return!0}function li(t){return!(!Is(t)||he&&he in t)&&(ks(t)?ye:Qt).test(va(t))}function fi(t){return"function"==typeof t?t:null==t?Lu:"object"==typeof t?ws(t)?mi(t[0],t[1]):gi(t):qu(t)}function pi(t){if(!ta(t))return Sn(t);var e=[];for(var n in re(t))pe.call(t,n)&&"constructor"!=n&&e.push(n);return e}function di(t){if(!Is(t))return function(t){var e=[];if(null!=t)for(var n in re(t))e.push(n);return e}(t);var e=ta(t),n=[];for(var r in t)("constructor"!=r||!e&&pe.call(t,r))&&n.push(r);return n}function hi(t,e){return t<e}function vi(t,e){var n=-1,i=Cs(t)?r(t.length):[];return Wr(t,function(t,r,o){i[++n]=e(t,r,o)}),i}function gi(t){var e=Bo(t);return 1==e.length&&e[0][2]?na(e[0][0],e[0][1]):function(n){return n===t||ci(n,t,e)}}function mi(t,e){return Xo(t)&&ea(e)?na(ha(t),e):function(n){var r=ru(n,t);return r===o&&r===e?iu(n,t):ui(e,r,v|g)}}function yi(t,e,n,r,i){t!==e&&Qr(e,function(a,s){if(Is(a))i||(i=new Er),function(t,e,n,r,i,a,s){var u=t[n],c=e[n],l=s.get(c);if(l)Dr(t,n,l);else{var f=a?a(u,c,n+"",t,e,s):o,p=f===o;if(p){var d=ws(c),h=!d&&Es(c),v=!d&&!h&&Hs(c);f=c,d||h||v?ws(u)?f=u:Ts(u)?f=oo(u):h?(p=!1,f=Zi(c,!0)):v?(p=!1,f=eo(c,!0)):f=[]:$s(c)||bs(c)?(f=u,bs(u)?f=Qs(u):(!Is(u)||r&&ks(u))&&(f=Ko(c))):p=!1}p&&(s.set(c,f),i(f,c,r,a,s),s.delete(c)),Dr(t,n,f)}}(t,e,s,n,yi,r,i);else{var u=r?r(t[s],a,s+"",t,e,i):o;u===o&&(u=a),Dr(t,s,u)}},cu)}function _i(t,e){var n=t.length;if(n)return Go(e+=e<0?n:0,n)?t[e]:o}function bi(t,e,n){var r=-1;return e=hn(e.length?e:[Lu],In(Fo())),function(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}(vi(t,function(t,n,i){return{criteria:hn(e,function(e){return e(t)}),index:++r,value:t}}),function(t,e){return function(t,e,n){for(var r=-1,i=t.criteria,o=e.criteria,a=i.length,s=n.length;++r<a;){var u=no(i[r],o[r]);if(u){if(r>=s)return u;var c=n[r];return u*("desc"==c?-1:1)}}return t.index-e.index}(t,e,n)})}function wi(t,e,n){for(var r=-1,i=e.length,o={};++r<i;){var a=e[r],s=Zr(t,a);n(s,a)&&Oi(o,Gi(a,t),s)}return o}function xi(t,e,n,r){var i=r?Cn:xn,o=-1,a=e.length,s=t;for(t===e&&(e=oo(e)),n&&(s=hn(t,In(n)));++o<a;)for(var u=0,c=e[o],l=n?n(c):c;(u=i(s,l,u,r))>-1;)s!==t&&Ae.call(s,u,1),Ae.call(t,u,1);return t}function Ci(t,e){for(var n=t?e.length:0,r=n-1;n--;){var i=e[n];if(n==r||i!==o){var o=i;Go(i)?Ae.call(t,i,1):Bi(t,i)}}return t}function Ti(t,e){return t+Ve(Jn()*(e-t+1))}function Ei(t,e){var n="";if(!t||e<1||e>L)return n;do{e%2&&(n+=t),(e=Ve(e/2))&&(t+=t)}while(e);return n}function Ai(t,e){return sa(ra(t,e,Lu),t+"")}function Si(t){return Sr(mu(t))}function ki(t,e){var n=mu(t);return la(n,Pr(e,0,n.length))}function Oi(t,e,n,r){if(!Is(t))return t;for(var i=-1,a=(e=Gi(e,t)).length,s=a-1,u=t;null!=u&&++i<a;){var c=ha(e[i]),l=n;if(i!=s){var f=u[c];(l=r?r(f,c,u):o)===o&&(l=Is(f)?f:Go(e[i+1])?[]:{})}Ir(u,c,l),u=u[c]}return t}var Di=ar?function(t,e){return ar.set(t,e),t}:Lu,Ii=Ne?function(t,e){return Ne(t,"toString",{configurable:!0,enumerable:!1,value:Iu(e),writable:!0})}:Lu;function Ni(t){return la(mu(t))}function ji(t,e,n){var i=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(n=n>o?o:n)<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var a=r(o);++i<o;)a[i]=t[i+e];return a}function Li(t,e){var n;return Wr(t,function(t,r,i){return!(n=e(t,r,i))}),!!n}function $i(t,e,n){var r=0,i=null==t?r:t.length;if("number"==typeof e&&e==e&&i<=F){for(;r<i;){var o=r+i>>>1,a=t[o];null!==a&&!Fs(a)&&(n?a<=e:a<e)?r=o+1:i=o}return i}return Ri(t,e,Lu,n)}function Ri(t,e,n,r){e=n(e);for(var i=0,a=null==t?0:t.length,s=e!=e,u=null===e,c=Fs(e),l=e===o;i<a;){var f=Ve((i+a)/2),p=n(t[f]),d=p!==o,h=null===p,v=p==p,g=Fs(p);if(s)var m=r||v;else m=l?v&&(r||d):u?v&&d&&(r||!h):c?v&&d&&!h&&(r||!g):!h&&!g&&(r?p<=e:p<e);m?i=f+1:a=f}return Gn(a,M)}function Pi(t,e){for(var n=-1,r=t.length,i=0,o=[];++n<r;){var a=t[n],s=e?e(a):a;if(!n||!ms(s,u)){var u=s;o[i++]=0===a?0:a}}return o}function Mi(t){return"number"==typeof t?t:Fs(t)?R:+t}function Fi(t){if("string"==typeof t)return t;if(ws(t))return hn(t,Fi)+"";if(Fs(t))return vr?vr.call(t):"";var e=t+"";return"0"==e&&1/t==-j?"-0":e}function Hi(t,e,n){var r=-1,i=pn,o=t.length,s=!0,u=[],c=u;if(n)s=!1,i=dn;else if(o>=a){var l=e?null:Ao(t);if(l)return qn(l);s=!1,i=jn,c=new Tr}else c=e?[]:u;t:for(;++r<o;){var f=t[r],p=e?e(f):f;if(f=n||0!==f?f:0,s&&p==p){for(var d=c.length;d--;)if(c[d]===p)continue t;e&&c.push(p),u.push(f)}else i(c,p,n)||(c!==u&&c.push(p),u.push(f))}return u}function Bi(t,e){return null==(t=ia(t,e=Gi(e,t)))||delete t[ha(Sa(e))]}function Wi(t,e,n,r){return Oi(t,e,n(Zr(t,e)),r)}function qi(t,e,n,r){for(var i=t.length,o=r?i:-1;(r?o--:++o<i)&&e(t[o],o,t););return n?ji(t,r?0:o,r?o+1:i):ji(t,r?o+1:0,r?i:o)}function Ui(t,e){var n=t;return n instanceof br&&(n=n.value()),gn(e,function(t,e){return e.func.apply(e.thisArg,vn([t],e.args))},n)}function zi(t,e,n){var i=t.length;if(i<2)return i?Hi(t[0]):[];for(var o=-1,a=r(i);++o<i;)for(var s=t[o],u=-1;++u<i;)u!=o&&(a[o]=Br(a[o]||s,t[u],e,n));return Hi(Kr(a,1),e,n)}function Vi(t,e,n){for(var r=-1,i=t.length,a=e.length,s={};++r<i;){var u=r<a?e[r]:o;n(s,t[r],u)}return s}function Ki(t){return Ts(t)?t:[]}function Qi(t){return"function"==typeof t?t:Lu}function Gi(t,e){return ws(t)?t:Xo(t,e)?[t]:da(Gs(t))}var Yi=Ai;function Xi(t,e,n){var r=t.length;return n=n===o?r:n,!e&&n>=r?t:ji(t,e,n)}var Ji=Le||function(t){return ze.clearTimeout(t)};function Zi(t,e){if(e)return t.slice();var n=t.length,r=xe?xe(n):new t.constructor(n);return t.copy(r),r}function to(t){var e=new t.constructor(t.byteLength);return new we(e).set(new we(t)),e}function eo(t,e){var n=e?to(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function no(t,e){if(t!==e){var n=t!==o,r=null===t,i=t==t,a=Fs(t),s=e!==o,u=null===e,c=e==e,l=Fs(e);if(!u&&!l&&!a&&t>e||a&&s&&c&&!u&&!l||r&&s&&c||!n&&c||!i)return 1;if(!r&&!a&&!l&&t<e||l&&n&&i&&!r&&!a||u&&n&&i||!s&&i||!c)return-1}return 0}function ro(t,e,n,i){for(var o=-1,a=t.length,s=n.length,u=-1,c=e.length,l=Qn(a-s,0),f=r(c+l),p=!i;++u<c;)f[u]=e[u];for(;++o<s;)(p||o<a)&&(f[n[o]]=t[o]);for(;l--;)f[u++]=t[o++];return f}function io(t,e,n,i){for(var o=-1,a=t.length,s=-1,u=n.length,c=-1,l=e.length,f=Qn(a-u,0),p=r(f+l),d=!i;++o<f;)p[o]=t[o];for(var h=o;++c<l;)p[h+c]=e[c];for(;++s<u;)(d||o<a)&&(p[h+n[s]]=t[o++]);return p}function oo(t,e){var n=-1,i=t.length;for(e||(e=r(i));++n<i;)e[n]=t[n];return e}function ao(t,e,n,r){var i=!n;n||(n={});for(var a=-1,s=e.length;++a<s;){var u=e[a],c=r?r(n[u],t[u],u,n,t):o;c===o&&(c=t[u]),i?$r(n,u,c):Ir(n,u,c)}return n}function so(t,e){return function(n,r){var i=ws(n)?sn:jr,o=e?e():{};return i(n,t,Fo(r,2),o)}}function uo(t){return Ai(function(e,n){var r=-1,i=n.length,a=i>1?n[i-1]:o,s=i>2?n[2]:o;for(a=t.length>3&&"function"==typeof a?(i--,a):o,s&&Yo(n[0],n[1],s)&&(a=i<3?o:a,i=1),e=re(e);++r<i;){var u=n[r];u&&t(e,u,r,a)}return e})}function co(t,e){return function(n,r){if(null==n)return n;if(!Cs(n))return t(n,r);for(var i=n.length,o=e?i:-1,a=re(n);(e?o--:++o<i)&&!1!==r(a[o],o,a););return n}}function lo(t){return function(e,n,r){for(var i=-1,o=re(e),a=r(e),s=a.length;s--;){var u=a[t?s:++i];if(!1===n(o[u],u,o))break}return e}}function fo(t){return function(e){var n=Fn(e=Gs(e))?zn(e):o,r=n?n[0]:e.charAt(0),i=n?Xi(n,1).join(""):e.slice(1);return r[t]()+i}}function po(t){return function(e){return gn(ku(bu(e).replace(De,"")),t,"")}}function ho(t){return function(){var e=arguments;switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var n=mr(t.prototype),r=t.apply(n,e);return Is(r)?r:n}}function vo(t){return function(e,n,r){var i=re(e);if(!Cs(e)){var a=Fo(n,3);e=uu(e),n=function(t){return a(i[t],t,i)}}var s=t(e,n,r);return s>-1?i[a?e[s]:s]:o}}function go(t){return jo(function(e){var n=e.length,r=n,i=_r.prototype.thru;for(t&&e.reverse();r--;){var a=e[r];if("function"!=typeof a)throw new ae(u);if(i&&!s&&"wrapper"==Po(a))var s=new _r([],!0)}for(r=s?r:n;++r<n;){var c=Po(a=e[r]),l="wrapper"==c?Ro(a):o;s=l&&Jo(l[0])&&l[1]==(T|b|x|E)&&!l[4].length&&1==l[9]?s[Po(l[0])].apply(s,l[3]):1==a.length&&Jo(a)?s[c]():s.thru(a)}return function(){var t=arguments,r=t[0];if(s&&1==t.length&&ws(r))return s.plant(r).value();for(var i=0,o=n?e[i].apply(this,t):r;++i<n;)o=e[i].call(this,o);return o}})}function mo(t,e,n,i,a,s,u,c,l,f){var p=e&T,d=e&m,h=e&y,v=e&(b|w),g=e&A,_=h?o:ho(t);return function m(){for(var y=arguments.length,b=r(y),w=y;w--;)b[w]=arguments[w];if(v)var x=Mo(m),C=function(t,e){for(var n=t.length,r=0;n--;)t[n]===e&&++r;return r}(b,x);if(i&&(b=ro(b,i,a,v)),s&&(b=io(b,s,u,v)),y-=C,v&&y<f){var T=Wn(b,x);return To(t,e,mo,m.placeholder,n,b,T,c,l,f-y)}var E=d?n:this,A=h?E[t]:t;return y=b.length,c?b=function(t,e){for(var n=t.length,r=Gn(e.length,n),i=oo(t);r--;){var a=e[r];t[r]=Go(a,n)?i[a]:o}return t}(b,c):g&&y>1&&b.reverse(),p&&l<y&&(b.length=l),this&&this!==ze&&this instanceof m&&(A=_||ho(A)),A.apply(E,b)}}function yo(t,e){return function(n,r){return i=n,o=t,a=e(r),s={},Yr(i,function(t,e,n){o(s,a(t),e,n)}),s;var i,o,a,s}}function _o(t,e){return function(n,r){var i;if(n===o&&r===o)return e;if(n!==o&&(i=n),r!==o){if(i===o)return r;"string"==typeof n||"string"==typeof r?(n=Fi(n),r=Fi(r)):(n=Mi(n),r=Mi(r)),i=t(n,r)}return i}}function bo(t){return jo(function(e){return e=hn(e,In(Fo())),Ai(function(n){var r=this;return t(e,function(t){return an(t,r,n)})})})}function wo(t,e){var n=(e=e===o?" ":Fi(e)).length;if(n<2)return n?Ei(e,t):e;var r=Ei(e,Ue(t/Un(e)));return Fn(e)?Xi(zn(r),0,t).join(""):r.slice(0,t)}function xo(t){return function(e,n,i){return i&&"number"!=typeof i&&Yo(e,n,i)&&(n=i=o),e=Us(e),n===o?(n=e,e=0):n=Us(n),function(t,e,n,i){for(var o=-1,a=Qn(Ue((e-t)/(n||1)),0),s=r(a);a--;)s[i?a:++o]=t,t+=n;return s}(e,n,i=i===o?e<n?1:-1:Us(i),t)}}function Co(t){return function(e,n){return"string"==typeof e&&"string"==typeof n||(e=Ks(e),n=Ks(n)),t(e,n)}}function To(t,e,n,r,i,a,s,u,c,l){var f=e&b;e|=f?x:C,(e&=~(f?C:x))&_||(e&=~(m|y));var p=[t,e,i,f?a:o,f?s:o,f?o:a,f?o:s,u,c,l],d=n.apply(o,p);return Jo(t)&&oa(d,p),d.placeholder=r,ua(d,t,e)}function Eo(t){var e=ne[t];return function(t,n){if(t=Ks(t),n=null==n?0:Gn(zs(n),292)){var r=(Gs(t)+"e").split("e");return+((r=(Gs(e(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return e(t)}}var Ao=rr&&1/qn(new rr([,-0]))[1]==j?function(t){return new rr(t)}:Fu;function So(t){return function(e){var n,r,i,o,a=zo(e);return a==Y?Hn(e):a==rt?(n=e,r=-1,i=Array(n.size),n.forEach(function(t){i[++r]=[t,t]}),i):(o=e,hn(t(e),function(t){return[t,o[t]]}))}}function ko(t,e,n,i,a,s,c,l){var p=e&y;if(!p&&"function"!=typeof t)throw new ae(u);var d=i?i.length:0;if(d||(e&=~(x|C),i=a=o),c=c===o?c:Qn(zs(c),0),l=l===o?l:zs(l),d-=a?a.length:0,e&C){var h=i,v=a;i=a=o}var g,A,S,k,O,D,I,N,j,L,$,R,P,M=p?o:Ro(t),F=[t,e,n,i,a,h,v,s,c,l];if(M&&function(t,e){var n=t[1],r=e[1],i=n|r,o=i<(m|y|T),a=r==T&&n==b||r==T&&n==E&&t[7].length<=e[8]||r==(T|E)&&e[7].length<=e[8]&&n==b;if(!o&&!a)return t;r&m&&(t[2]=e[2],i|=n&m?0:_);var s=e[3];if(s){var u=t[3];t[3]=u?ro(u,s,e[4]):s,t[4]=u?Wn(t[3],f):e[4]}(s=e[5])&&(u=t[5],t[5]=u?io(u,s,e[6]):s,t[6]=u?Wn(t[5],f):e[6]),(s=e[7])&&(t[7]=s),r&T&&(t[8]=null==t[8]?e[8]:Gn(t[8],e[8])),null==t[9]&&(t[9]=e[9]),t[0]=e[0],t[1]=i}(F,M),t=F[0],e=F[1],n=F[2],i=F[3],a=F[4],!(l=F[9]=F[9]===o?p?0:t.length:Qn(F[9]-d,0))&&e&(b|w)&&(e&=~(b|w)),e&&e!=m)e==b||e==w?(I=e,N=l,j=ho(D=t),H=function t(){for(var e=arguments.length,n=r(e),i=e,a=Mo(t);i--;)n[i]=arguments[i];var s=e<3&&n[0]!==a&&n[e-1]!==a?[]:Wn(n,a);return(e-=s.length)<N?To(D,I,mo,t.placeholder,o,n,s,o,o,N-e):an(this&&this!==ze&&this instanceof t?j:D,this,n)}):e!=x&&e!=(m|x)||a.length?H=mo.apply(o,F):(A=n,S=i,k=e&m,O=ho(g=t),H=function t(){for(var e=-1,n=arguments.length,i=-1,o=S.length,a=r(o+n),s=this&&this!==ze&&this instanceof t?O:g;++i<o;)a[i]=S[i];for(;n--;)a[i++]=arguments[++e];return an(s,k?A:this,a)});else var H=($=n,R=e&m,P=ho(L=t),function t(){return(this&&this!==ze&&this instanceof t?P:L).apply(R?$:this,arguments)});return ua((M?Di:oa)(H,F),t,e)}function Oo(t,e,n,r){return t===o||ms(t,ce[n])&&!pe.call(r,n)?e:t}function Do(t,e,n,r,i,a){return Is(t)&&Is(e)&&(a.set(e,t),yi(t,e,o,Do,a),a.delete(e)),t}function Io(t){return $s(t)?o:t}function No(t,e,n,r,i,a){var s=n&v,u=t.length,c=e.length;if(u!=c&&!(s&&c>u))return!1;var l=a.get(t);if(l&&a.get(e))return l==e;var f=-1,p=!0,d=n&g?new Tr:o;for(a.set(t,e),a.set(e,t);++f<u;){var h=t[f],m=e[f];if(r)var y=s?r(m,h,f,e,t,a):r(h,m,f,t,e,a);if(y!==o){if(y)continue;p=!1;break}if(d){if(!yn(e,function(t,e){if(!jn(d,e)&&(h===t||i(h,t,n,r,a)))return d.push(e)})){p=!1;break}}else if(h!==m&&!i(h,m,n,r,a)){p=!1;break}}return a.delete(t),a.delete(e),p}function jo(t){return sa(ra(t,o,xa),t+"")}function Lo(t){return ti(t,uu,qo)}function $o(t){return ti(t,cu,Uo)}var Ro=ar?function(t){return ar.get(t)}:Fu;function Po(t){for(var e=t.name+"",n=sr[e],r=pe.call(sr,e)?n.length:0;r--;){var i=n[r],o=i.func;if(null==o||o==t)return i.name}return e}function Mo(t){return(pe.call(gr,"placeholder")?gr:t).placeholder}function Fo(){var t=gr.iteratee||$u;return t=t===$u?fi:t,arguments.length?t(arguments[0],arguments[1]):t}function Ho(t,e){var n,r,i=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof e?"string":"hash"]:i.map}function Bo(t){for(var e=uu(t),n=e.length;n--;){var r=e[n],i=t[r];e[n]=[r,i,ea(i)]}return e}function Wo(t,e){var n,r=null==(n=t)?o:n[e];return li(r)?r:o}var qo=Ke?function(t){return null==t?[]:(t=re(t),fn(Ke(t),function(e){return Ee.call(t,e)}))}:Vu,Uo=Ke?function(t){for(var e=[];t;)vn(e,qo(t)),t=Ce(t);return e}:Vu,zo=ei;function Vo(t,e,n){for(var r=-1,i=(e=Gi(e,t)).length,o=!1;++r<i;){var a=ha(e[r]);if(!(o=null!=t&&n(t,a)))break;t=t[a]}return o||++r!=i?o:!!(i=null==t?0:t.length)&&Ds(i)&&Go(a,i)&&(ws(t)||bs(t))}function Ko(t){return"function"!=typeof t.constructor||ta(t)?{}:mr(Ce(t))}function Qo(t){return ws(t)||bs(t)||!!(Se&&t&&t[Se])}function Go(t,e){return!!(e=null==e?L:e)&&("number"==typeof t||Yt.test(t))&&t>-1&&t%1==0&&t<e}function Yo(t,e,n){if(!Is(n))return!1;var r=typeof e;return!!("number"==r?Cs(n)&&Go(e,n.length):"string"==r&&e in n)&&ms(n[e],t)}function Xo(t,e){if(ws(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Fs(t))||It.test(t)||!Dt.test(t)||null!=e&&t in re(e)}function Jo(t){var e=Po(t),n=gr[e];if("function"!=typeof n||!(e in br.prototype))return!1;if(t===n)return!0;var r=Ro(n);return!!r&&t===r[0]}(tr&&zo(new tr(new ArrayBuffer(1)))!=lt||er&&zo(new er)!=Y||nr&&zo(nr.resolve())!=tt||rr&&zo(new rr)!=rt||ir&&zo(new ir)!=st)&&(zo=function(t){var e=ei(t),n=e==Z?t.constructor:o,r=n?va(n):"";if(r)switch(r){case ur:return lt;case cr:return Y;case lr:return tt;case fr:return rt;case pr:return st}return e});var Zo=le?ks:Ku;function ta(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||ce)}function ea(t){return t==t&&!Is(t)}function na(t,e){return function(n){return null!=n&&n[t]===e&&(e!==o||t in re(n))}}function ra(t,e,n){return e=Qn(e===o?t.length-1:e,0),function(){for(var i=arguments,o=-1,a=Qn(i.length-e,0),s=r(a);++o<a;)s[o]=i[e+o];o=-1;for(var u=r(e+1);++o<e;)u[o]=i[o];return u[e]=n(s),an(t,this,u)}}function ia(t,e){return e.length<2?t:Zr(t,ji(e,0,-1))}var oa=ca(Di),aa=qe||function(t,e){return ze.setTimeout(t,e)},sa=ca(Ii);function ua(t,e,n){var r,i,o,a=e+"";return sa(t,function(t,e){var n=e.length;if(!n)return t;var r=n-1;return e[r]=(n>1?"& ":"")+e[r],e=e.join(n>2?", ":" "),t.replace(Ft,"{\n/* [wrapped with "+e+"] */\n")}(a,(o=a.match(Ht),r=o?o[1].split(Bt):[],i=n,un(H,function(t){var e="_."+t[0];i&t[1]&&!pn(r,e)&&r.push(e)}),r.sort())))}function ca(t){var e=0,n=0;return function(){var r=Yn(),i=D-(r-n);if(n=r,i>0){if(++e>=O)return arguments[0]}else e=0;return t.apply(o,arguments)}}function la(t,e){var n=-1,r=t.length,i=r-1;for(e=e===o?r:e;++n<e;){var a=Ti(n,i),s=t[a];t[a]=t[n],t[n]=s}return t.length=e,t}var fa,pa,da=(fa=fs(function(t){var e=[];return Nt.test(t)&&e.push(""),t.replace(jt,function(t,n,r,i){e.push(r?i.replace(qt,"$1"):n||t)}),e},function(t){return pa.size===l&&pa.clear(),t}),pa=fa.cache,fa);function ha(t){if("string"==typeof t||Fs(t))return t;var e=t+"";return"0"==e&&1/t==-j?"-0":e}function va(t){if(null!=t){try{return fe.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function ga(t){if(t instanceof br)return t.clone();var e=new _r(t.__wrapped__,t.__chain__);return e.__actions__=oo(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}var ma=Ai(function(t,e){return Ts(t)?Br(t,Kr(e,1,Ts,!0)):[]}),ya=Ai(function(t,e){var n=Sa(e);return Ts(n)&&(n=o),Ts(t)?Br(t,Kr(e,1,Ts,!0),Fo(n,2)):[]}),_a=Ai(function(t,e){var n=Sa(e);return Ts(n)&&(n=o),Ts(t)?Br(t,Kr(e,1,Ts,!0),o,n):[]});function ba(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:zs(n);return i<0&&(i=Qn(r+i,0)),wn(t,Fo(e,3),i)}function wa(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=r-1;return n!==o&&(i=zs(n),i=n<0?Qn(r+i,0):Gn(i,r-1)),wn(t,Fo(e,3),i,!0)}function xa(t){return null!=t&&t.length?Kr(t,1):[]}function Ca(t){return t&&t.length?t[0]:o}var Ta=Ai(function(t){var e=hn(t,Ki);return e.length&&e[0]===t[0]?oi(e):[]}),Ea=Ai(function(t){var e=Sa(t),n=hn(t,Ki);return e===Sa(n)?e=o:n.pop(),n.length&&n[0]===t[0]?oi(n,Fo(e,2)):[]}),Aa=Ai(function(t){var e=Sa(t),n=hn(t,Ki);return(e="function"==typeof e?e:o)&&n.pop(),n.length&&n[0]===t[0]?oi(n,o,e):[]});function Sa(t){var e=null==t?0:t.length;return e?t[e-1]:o}var ka=Ai(Oa);function Oa(t,e){return t&&t.length&&e&&e.length?xi(t,e):t}var Da=jo(function(t,e){var n=null==t?0:t.length,r=Rr(t,e);return Ci(t,hn(e,function(t){return Go(t,n)?+t:t}).sort(no)),r});function Ia(t){return null==t?t:Zn.call(t)}var Na=Ai(function(t){return Hi(Kr(t,1,Ts,!0))}),ja=Ai(function(t){var e=Sa(t);return Ts(e)&&(e=o),Hi(Kr(t,1,Ts,!0),Fo(e,2))}),La=Ai(function(t){var e=Sa(t);return e="function"==typeof e?e:o,Hi(Kr(t,1,Ts,!0),o,e)});function $a(t){if(!t||!t.length)return[];var e=0;return t=fn(t,function(t){if(Ts(t))return e=Qn(t.length,e),!0}),Dn(e,function(e){return hn(t,An(e))})}function Ra(t,e){if(!t||!t.length)return[];var n=$a(t);return null==e?n:hn(n,function(t){return an(e,o,t)})}var Pa=Ai(function(t,e){return Ts(t)?Br(t,e):[]}),Ma=Ai(function(t){return zi(fn(t,Ts))}),Fa=Ai(function(t){var e=Sa(t);return Ts(e)&&(e=o),zi(fn(t,Ts),Fo(e,2))}),Ha=Ai(function(t){var e=Sa(t);return e="function"==typeof e?e:o,zi(fn(t,Ts),o,e)}),Ba=Ai($a);var Wa=Ai(function(t){var e=t.length,n=e>1?t[e-1]:o;return Ra(t,n="function"==typeof n?(t.pop(),n):o)});function qa(t){var e=gr(t);return e.__chain__=!0,e}function Ua(t,e){return e(t)}var za=jo(function(t){var e=t.length,n=e?t[0]:0,r=this.__wrapped__,i=function(e){return Rr(e,t)};return!(e>1||this.__actions__.length)&&r instanceof br&&Go(n)?((r=r.slice(n,+n+(e?1:0))).__actions__.push({func:Ua,args:[i],thisArg:o}),new _r(r,this.__chain__).thru(function(t){return e&&!t.length&&t.push(o),t})):this.thru(i)});var Va=so(function(t,e,n){pe.call(t,n)?++t[n]:$r(t,n,1)});var Ka=vo(ba),Qa=vo(wa);function Ga(t,e){return(ws(t)?un:Wr)(t,Fo(e,3))}function Ya(t,e){return(ws(t)?cn:qr)(t,Fo(e,3))}var Xa=so(function(t,e,n){pe.call(t,n)?t[n].push(e):$r(t,n,[e])});var Ja=Ai(function(t,e,n){var i=-1,o="function"==typeof e,a=Cs(t)?r(t.length):[];return Wr(t,function(t){a[++i]=o?an(e,t,n):ai(t,e,n)}),a}),Za=so(function(t,e,n){$r(t,n,e)});function ts(t,e){return(ws(t)?hn:vi)(t,Fo(e,3))}var es=so(function(t,e,n){t[n?0:1].push(e)},function(){return[[],[]]});var ns=Ai(function(t,e){if(null==t)return[];var n=e.length;return n>1&&Yo(t,e[0],e[1])?e=[]:n>2&&Yo(e[0],e[1],e[2])&&(e=[e[0]]),bi(t,Kr(e,1),[])}),rs=He||function(){return ze.Date.now()};function is(t,e,n){return e=n?o:e,e=t&&null==e?t.length:e,ko(t,T,o,o,o,o,e)}function os(t,e){var n;if("function"!=typeof e)throw new ae(u);return t=zs(t),function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=o),n}}var as=Ai(function(t,e,n){var r=m;if(n.length){var i=Wn(n,Mo(as));r|=x}return ko(t,r,e,n,i)}),ss=Ai(function(t,e,n){var r=m|y;if(n.length){var i=Wn(n,Mo(ss));r|=x}return ko(e,r,t,n,i)});function us(t,e,n){var r,i,a,s,c,l,f=0,p=!1,d=!1,h=!0;if("function"!=typeof t)throw new ae(u);function v(e){var n=r,a=i;return r=i=o,f=e,s=t.apply(a,n)}function g(t){var n=t-l;return l===o||n>=e||n<0||d&&t-f>=a}function m(){var t,n,r=rs();if(g(r))return y(r);c=aa(m,(n=e-((t=r)-l),d?Gn(n,a-(t-f)):n))}function y(t){return c=o,h&&r?v(t):(r=i=o,s)}function _(){var t,n=rs(),a=g(n);if(r=arguments,i=this,l=n,a){if(c===o)return f=t=l,c=aa(m,e),p?v(t):s;if(d)return c=aa(m,e),v(l)}return c===o&&(c=aa(m,e)),s}return e=Ks(e)||0,Is(n)&&(p=!!n.leading,a=(d="maxWait"in n)?Qn(Ks(n.maxWait)||0,e):a,h="trailing"in n?!!n.trailing:h),_.cancel=function(){c!==o&&Ji(c),f=0,r=l=i=c=o},_.flush=function(){return c===o?s:y(rs())},_}var cs=Ai(function(t,e){return Hr(t,1,e)}),ls=Ai(function(t,e,n){return Hr(t,Ks(e)||0,n)});function fs(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new ae(u);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(fs.Cache||Cr),n}function ps(t){if("function"!=typeof t)throw new ae(u);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}fs.Cache=Cr;var ds=Yi(function(t,e){var n=(e=1==e.length&&ws(e[0])?hn(e[0],In(Fo())):hn(Kr(e,1),In(Fo()))).length;return Ai(function(r){for(var i=-1,o=Gn(r.length,n);++i<o;)r[i]=e[i].call(this,r[i]);return an(t,this,r)})}),hs=Ai(function(t,e){var n=Wn(e,Mo(hs));return ko(t,x,o,e,n)}),vs=Ai(function(t,e){var n=Wn(e,Mo(vs));return ko(t,C,o,e,n)}),gs=jo(function(t,e){return ko(t,E,o,o,o,e)});function ms(t,e){return t===e||t!=t&&e!=e}var ys=Co(ni),_s=Co(function(t,e){return t>=e}),bs=si(function(){return arguments}())?si:function(t){return Ns(t)&&pe.call(t,"callee")&&!Ee.call(t,"callee")},ws=r.isArray,xs=Xe?In(Xe):function(t){return Ns(t)&&ei(t)==ct};function Cs(t){return null!=t&&Ds(t.length)&&!ks(t)}function Ts(t){return Ns(t)&&Cs(t)}var Es=Ge||Ku,As=Je?In(Je):function(t){return Ns(t)&&ei(t)==z};function Ss(t){if(!Ns(t))return!1;var e=ei(t);return e==K||e==V||"string"==typeof t.message&&"string"==typeof t.name&&!$s(t)}function ks(t){if(!Is(t))return!1;var e=ei(t);return e==Q||e==G||e==q||e==et}function Os(t){return"number"==typeof t&&t==zs(t)}function Ds(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=L}function Is(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Ns(t){return null!=t&&"object"==typeof t}var js=Ze?In(Ze):function(t){return Ns(t)&&zo(t)==Y};function Ls(t){return"number"==typeof t||Ns(t)&&ei(t)==X}function $s(t){if(!Ns(t)||ei(t)!=Z)return!1;var e=Ce(t);if(null===e)return!0;var n=pe.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&fe.call(n)==ge}var Rs=tn?In(tn):function(t){return Ns(t)&&ei(t)==nt};var Ps=en?In(en):function(t){return Ns(t)&&zo(t)==rt};function Ms(t){return"string"==typeof t||!ws(t)&&Ns(t)&&ei(t)==it}function Fs(t){return"symbol"==typeof t||Ns(t)&&ei(t)==ot}var Hs=nn?In(nn):function(t){return Ns(t)&&Ds(t.length)&&!!Me[ei(t)]};var Bs=Co(hi),Ws=Co(function(t,e){return t<=e});function qs(t){if(!t)return[];if(Cs(t))return Ms(t)?zn(t):oo(t);if(ke&&t[ke])return function(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}(t[ke]());var e=zo(t);return(e==Y?Hn:e==rt?qn:mu)(t)}function Us(t){return t?(t=Ks(t))===j||t===-j?(t<0?-1:1)*$:t==t?t:0:0===t?t:0}function zs(t){var e=Us(t),n=e%1;return e==e?n?e-n:e:0}function Vs(t){return t?Pr(zs(t),0,P):0}function Ks(t){if("number"==typeof t)return t;if(Fs(t))return R;if(Is(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Is(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Rt,"");var n=Kt.test(t);return n||Gt.test(t)?We(t.slice(2),n?2:8):Vt.test(t)?R:+t}function Qs(t){return ao(t,cu(t))}function Gs(t){return null==t?"":Fi(t)}var Ys=uo(function(t,e){if(ta(e)||Cs(e))ao(e,uu(e),t);else for(var n in e)pe.call(e,n)&&Ir(t,n,e[n])}),Xs=uo(function(t,e){ao(e,cu(e),t)}),Js=uo(function(t,e,n,r){ao(e,cu(e),t,r)}),Zs=uo(function(t,e,n,r){ao(e,uu(e),t,r)}),tu=jo(Rr);var eu=Ai(function(t){return t.push(o,Oo),an(Js,o,t)}),nu=Ai(function(t){return t.push(o,Do),an(fu,o,t)});function ru(t,e,n){var r=null==t?o:Zr(t,e);return r===o?n:r}function iu(t,e){return null!=t&&Vo(t,e,ii)}var ou=yo(function(t,e,n){t[e]=n},Iu(Lu)),au=yo(function(t,e,n){pe.call(t,e)?t[e].push(n):t[e]=[n]},Fo),su=Ai(ai);function uu(t){return Cs(t)?Ar(t):pi(t)}function cu(t){return Cs(t)?Ar(t,!0):di(t)}var lu=uo(function(t,e,n){yi(t,e,n)}),fu=uo(function(t,e,n,r){yi(t,e,n,r)}),pu=jo(function(t,e){var n={};if(null==t)return n;var r=!1;e=hn(e,function(e){return e=Gi(e,t),r||(r=e.length>1),e}),ao(t,$o(t),n),r&&(n=Mr(n,p|d|h,Io));for(var i=e.length;i--;)Bi(n,e[i]);return n});var du=jo(function(t,e){return null==t?{}:wi(n=t,e,function(t,e){return iu(n,e)});var n});function hu(t,e){if(null==t)return{};var n=hn($o(t),function(t){return[t]});return e=Fo(e),wi(t,n,function(t,n){return e(t,n[0])})}var vu=So(uu),gu=So(cu);function mu(t){return null==t?[]:Nn(t,uu(t))}var yu=po(function(t,e,n){return e=e.toLowerCase(),t+(n?_u(e):e)});function _u(t){return Su(Gs(t).toLowerCase())}function bu(t){return(t=Gs(t))&&t.replace(Xt,Rn).replace(Ie,"")}var wu=po(function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}),xu=po(function(t,e,n){return t+(n?" ":"")+e.toLowerCase()}),Cu=fo("toLowerCase");var Tu=po(function(t,e,n){return t+(n?"_":"")+e.toLowerCase()});var Eu=po(function(t,e,n){return t+(n?" ":"")+Su(e)});var Au=po(function(t,e,n){return t+(n?" ":"")+e.toUpperCase()}),Su=fo("toUpperCase");function ku(t,e,n){return t=Gs(t),(e=n?o:e)===o?(r=t,$e.test(r)?t.match(je)||[]:t.match(Wt)||[]):t.match(e)||[];var r}var Ou=Ai(function(t,e){try{return an(t,o,e)}catch(t){return Ss(t)?t:new te(t)}}),Du=jo(function(t,e){return un(e,function(e){e=ha(e),$r(t,e,as(t[e],t))}),t});function Iu(t){return function(){return t}}var Nu=go(),ju=go(!0);function Lu(t){return t}function $u(t){return fi("function"==typeof t?t:Mr(t,p))}var Ru=Ai(function(t,e){return function(n){return ai(n,t,e)}}),Pu=Ai(function(t,e){return function(n){return ai(t,n,e)}});function Mu(t,e,n){var r=uu(e),i=Jr(e,r);null!=n||Is(e)&&(i.length||!r.length)||(n=e,e=t,t=this,i=Jr(e,uu(e)));var o=!(Is(n)&&"chain"in n&&!n.chain),a=ks(t);return un(i,function(n){var r=e[n];t[n]=r,a&&(t.prototype[n]=function(){var e=this.__chain__;if(o||e){var n=t(this.__wrapped__);return(n.__actions__=oo(this.__actions__)).push({func:r,args:arguments,thisArg:t}),n.__chain__=e,n}return r.apply(t,vn([this.value()],arguments))})}),t}function Fu(){}var Hu=bo(hn),Bu=bo(ln),Wu=bo(yn);function qu(t){return Xo(t)?An(ha(t)):(e=t,function(t){return Zr(t,e)});var e}var Uu=xo(),zu=xo(!0);function Vu(){return[]}function Ku(){return!1}var Qu=_o(function(t,e){return t+e},0),Gu=Eo("ceil"),Yu=_o(function(t,e){return t/e},1),Xu=Eo("floor");var Ju,Zu=_o(function(t,e){return t*e},1),tc=Eo("round"),ec=_o(function(t,e){return t-e},0);return gr.after=function(t,e){if("function"!=typeof e)throw new ae(u);return t=zs(t),function(){if(--t<1)return e.apply(this,arguments)}},gr.ary=is,gr.assign=Ys,gr.assignIn=Xs,gr.assignInWith=Js,gr.assignWith=Zs,gr.at=tu,gr.before=os,gr.bind=as,gr.bindAll=Du,gr.bindKey=ss,gr.castArray=function(){if(!arguments.length)return[];var t=arguments[0];return ws(t)?t:[t]},gr.chain=qa,gr.chunk=function(t,e,n){e=(n?Yo(t,e,n):e===o)?1:Qn(zs(e),0);var i=null==t?0:t.length;if(!i||e<1)return[];for(var a=0,s=0,u=r(Ue(i/e));a<i;)u[s++]=ji(t,a,a+=e);return u},gr.compact=function(t){for(var e=-1,n=null==t?0:t.length,r=0,i=[];++e<n;){var o=t[e];o&&(i[r++]=o)}return i},gr.concat=function(){var t=arguments.length;if(!t)return[];for(var e=r(t-1),n=arguments[0],i=t;i--;)e[i-1]=arguments[i];return vn(ws(n)?oo(n):[n],Kr(e,1))},gr.cond=function(t){var e=null==t?0:t.length,n=Fo();return t=e?hn(t,function(t){if("function"!=typeof t[1])throw new ae(u);return[n(t[0]),t[1]]}):[],Ai(function(n){for(var r=-1;++r<e;){var i=t[r];if(an(i[0],this,n))return an(i[1],this,n)}})},gr.conforms=function(t){return e=Mr(t,p),n=uu(e),function(t){return Fr(t,e,n)};var e,n},gr.constant=Iu,gr.countBy=Va,gr.create=function(t,e){var n=mr(t);return null==e?n:Lr(n,e)},gr.curry=function t(e,n,r){var i=ko(e,b,o,o,o,o,o,n=r?o:n);return i.placeholder=t.placeholder,i},gr.curryRight=function t(e,n,r){var i=ko(e,w,o,o,o,o,o,n=r?o:n);return i.placeholder=t.placeholder,i},gr.debounce=us,gr.defaults=eu,gr.defaultsDeep=nu,gr.defer=cs,gr.delay=ls,gr.difference=ma,gr.differenceBy=ya,gr.differenceWith=_a,gr.drop=function(t,e,n){var r=null==t?0:t.length;return r?ji(t,(e=n||e===o?1:zs(e))<0?0:e,r):[]},gr.dropRight=function(t,e,n){var r=null==t?0:t.length;return r?ji(t,0,(e=r-(e=n||e===o?1:zs(e)))<0?0:e):[]},gr.dropRightWhile=function(t,e){return t&&t.length?qi(t,Fo(e,3),!0,!0):[]},gr.dropWhile=function(t,e){return t&&t.length?qi(t,Fo(e,3),!0):[]},gr.fill=function(t,e,n,r){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&Yo(t,e,n)&&(n=0,r=i),function(t,e,n,r){var i=t.length;for((n=zs(n))<0&&(n=-n>i?0:i+n),(r=r===o||r>i?i:zs(r))<0&&(r+=i),r=n>r?0:Vs(r);n<r;)t[n++]=e;return t}(t,e,n,r)):[]},gr.filter=function(t,e){return(ws(t)?fn:Vr)(t,Fo(e,3))},gr.flatMap=function(t,e){return Kr(ts(t,e),1)},gr.flatMapDeep=function(t,e){return Kr(ts(t,e),j)},gr.flatMapDepth=function(t,e,n){return n=n===o?1:zs(n),Kr(ts(t,e),n)},gr.flatten=xa,gr.flattenDeep=function(t){return null!=t&&t.length?Kr(t,j):[]},gr.flattenDepth=function(t,e){return null!=t&&t.length?Kr(t,e=e===o?1:zs(e)):[]},gr.flip=function(t){return ko(t,A)},gr.flow=Nu,gr.flowRight=ju,gr.fromPairs=function(t){for(var e=-1,n=null==t?0:t.length,r={};++e<n;){var i=t[e];r[i[0]]=i[1]}return r},gr.functions=function(t){return null==t?[]:Jr(t,uu(t))},gr.functionsIn=function(t){return null==t?[]:Jr(t,cu(t))},gr.groupBy=Xa,gr.initial=function(t){return null!=t&&t.length?ji(t,0,-1):[]},gr.intersection=Ta,gr.intersectionBy=Ea,gr.intersectionWith=Aa,gr.invert=ou,gr.invertBy=au,gr.invokeMap=Ja,gr.iteratee=$u,gr.keyBy=Za,gr.keys=uu,gr.keysIn=cu,gr.map=ts,gr.mapKeys=function(t,e){var n={};return e=Fo(e,3),Yr(t,function(t,r,i){$r(n,e(t,r,i),t)}),n},gr.mapValues=function(t,e){var n={};return e=Fo(e,3),Yr(t,function(t,r,i){$r(n,r,e(t,r,i))}),n},gr.matches=function(t){return gi(Mr(t,p))},gr.matchesProperty=function(t,e){return mi(t,Mr(e,p))},gr.memoize=fs,gr.merge=lu,gr.mergeWith=fu,gr.method=Ru,gr.methodOf=Pu,gr.mixin=Mu,gr.negate=ps,gr.nthArg=function(t){return t=zs(t),Ai(function(e){return _i(e,t)})},gr.omit=pu,gr.omitBy=function(t,e){return hu(t,ps(Fo(e)))},gr.once=function(t){return os(2,t)},gr.orderBy=function(t,e,n,r){return null==t?[]:(ws(e)||(e=null==e?[]:[e]),ws(n=r?o:n)||(n=null==n?[]:[n]),bi(t,e,n))},gr.over=Hu,gr.overArgs=ds,gr.overEvery=Bu,gr.overSome=Wu,gr.partial=hs,gr.partialRight=vs,gr.partition=es,gr.pick=du,gr.pickBy=hu,gr.property=qu,gr.propertyOf=function(t){return function(e){return null==t?o:Zr(t,e)}},gr.pull=ka,gr.pullAll=Oa,gr.pullAllBy=function(t,e,n){return t&&t.length&&e&&e.length?xi(t,e,Fo(n,2)):t},gr.pullAllWith=function(t,e,n){return t&&t.length&&e&&e.length?xi(t,e,o,n):t},gr.pullAt=Da,gr.range=Uu,gr.rangeRight=zu,gr.rearg=gs,gr.reject=function(t,e){return(ws(t)?fn:Vr)(t,ps(Fo(e,3)))},gr.remove=function(t,e){var n=[];if(!t||!t.length)return n;var r=-1,i=[],o=t.length;for(e=Fo(e,3);++r<o;){var a=t[r];e(a,r,t)&&(n.push(a),i.push(r))}return Ci(t,i),n},gr.rest=function(t,e){if("function"!=typeof t)throw new ae(u);return Ai(t,e=e===o?e:zs(e))},gr.reverse=Ia,gr.sampleSize=function(t,e,n){return e=(n?Yo(t,e,n):e===o)?1:zs(e),(ws(t)?kr:ki)(t,e)},gr.set=function(t,e,n){return null==t?t:Oi(t,e,n)},gr.setWith=function(t,e,n,r){return r="function"==typeof r?r:o,null==t?t:Oi(t,e,n,r)},gr.shuffle=function(t){return(ws(t)?Or:Ni)(t)},gr.slice=function(t,e,n){var r=null==t?0:t.length;return r?(n&&"number"!=typeof n&&Yo(t,e,n)?(e=0,n=r):(e=null==e?0:zs(e),n=n===o?r:zs(n)),ji(t,e,n)):[]},gr.sortBy=ns,gr.sortedUniq=function(t){return t&&t.length?Pi(t):[]},gr.sortedUniqBy=function(t,e){return t&&t.length?Pi(t,Fo(e,2)):[]},gr.split=function(t,e,n){return n&&"number"!=typeof n&&Yo(t,e,n)&&(e=n=o),(n=n===o?P:n>>>0)?(t=Gs(t))&&("string"==typeof e||null!=e&&!Rs(e))&&!(e=Fi(e))&&Fn(t)?Xi(zn(t),0,n):t.split(e,n):[]},gr.spread=function(t,e){if("function"!=typeof t)throw new ae(u);return e=null==e?0:Qn(zs(e),0),Ai(function(n){var r=n[e],i=Xi(n,0,e);return r&&vn(i,r),an(t,this,i)})},gr.tail=function(t){var e=null==t?0:t.length;return e?ji(t,1,e):[]},gr.take=function(t,e,n){return t&&t.length?ji(t,0,(e=n||e===o?1:zs(e))<0?0:e):[]},gr.takeRight=function(t,e,n){var r=null==t?0:t.length;return r?ji(t,(e=r-(e=n||e===o?1:zs(e)))<0?0:e,r):[]},gr.takeRightWhile=function(t,e){return t&&t.length?qi(t,Fo(e,3),!1,!0):[]},gr.takeWhile=function(t,e){return t&&t.length?qi(t,Fo(e,3)):[]},gr.tap=function(t,e){return e(t),t},gr.throttle=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new ae(u);return Is(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),us(t,e,{leading:r,maxWait:e,trailing:i})},gr.thru=Ua,gr.toArray=qs,gr.toPairs=vu,gr.toPairsIn=gu,gr.toPath=function(t){return ws(t)?hn(t,ha):Fs(t)?[t]:oo(da(Gs(t)))},gr.toPlainObject=Qs,gr.transform=function(t,e,n){var r=ws(t),i=r||Es(t)||Hs(t);if(e=Fo(e,4),null==n){var o=t&&t.constructor;n=i?r?new o:[]:Is(t)&&ks(o)?mr(Ce(t)):{}}return(i?un:Yr)(t,function(t,r,i){return e(n,t,r,i)}),n},gr.unary=function(t){return is(t,1)},gr.union=Na,gr.unionBy=ja,gr.unionWith=La,gr.uniq=function(t){return t&&t.length?Hi(t):[]},gr.uniqBy=function(t,e){return t&&t.length?Hi(t,Fo(e,2)):[]},gr.uniqWith=function(t,e){return e="function"==typeof e?e:o,t&&t.length?Hi(t,o,e):[]},gr.unset=function(t,e){return null==t||Bi(t,e)},gr.unzip=$a,gr.unzipWith=Ra,gr.update=function(t,e,n){return null==t?t:Wi(t,e,Qi(n))},gr.updateWith=function(t,e,n,r){return r="function"==typeof r?r:o,null==t?t:Wi(t,e,Qi(n),r)},gr.values=mu,gr.valuesIn=function(t){return null==t?[]:Nn(t,cu(t))},gr.without=Pa,gr.words=ku,gr.wrap=function(t,e){return hs(Qi(e),t)},gr.xor=Ma,gr.xorBy=Fa,gr.xorWith=Ha,gr.zip=Ba,gr.zipObject=function(t,e){return Vi(t||[],e||[],Ir)},gr.zipObjectDeep=function(t,e){return Vi(t||[],e||[],Oi)},gr.zipWith=Wa,gr.entries=vu,gr.entriesIn=gu,gr.extend=Xs,gr.extendWith=Js,Mu(gr,gr),gr.add=Qu,gr.attempt=Ou,gr.camelCase=yu,gr.capitalize=_u,gr.ceil=Gu,gr.clamp=function(t,e,n){return n===o&&(n=e,e=o),n!==o&&(n=(n=Ks(n))==n?n:0),e!==o&&(e=(e=Ks(e))==e?e:0),Pr(Ks(t),e,n)},gr.clone=function(t){return Mr(t,h)},gr.cloneDeep=function(t){return Mr(t,p|h)},gr.cloneDeepWith=function(t,e){return Mr(t,p|h,e="function"==typeof e?e:o)},gr.cloneWith=function(t,e){return Mr(t,h,e="function"==typeof e?e:o)},gr.conformsTo=function(t,e){return null==e||Fr(t,e,uu(e))},gr.deburr=bu,gr.defaultTo=function(t,e){return null==t||t!=t?e:t},gr.divide=Yu,gr.endsWith=function(t,e,n){t=Gs(t),e=Fi(e);var r=t.length,i=n=n===o?r:Pr(zs(n),0,r);return(n-=e.length)>=0&&t.slice(n,i)==e},gr.eq=ms,gr.escape=function(t){return(t=Gs(t))&&At.test(t)?t.replace(Tt,Pn):t},gr.escapeRegExp=function(t){return(t=Gs(t))&&$t.test(t)?t.replace(Lt,"\\$&"):t},gr.every=function(t,e,n){var r=ws(t)?ln:Ur;return n&&Yo(t,e,n)&&(e=o),r(t,Fo(e,3))},gr.find=Ka,gr.findIndex=ba,gr.findKey=function(t,e){return bn(t,Fo(e,3),Yr)},gr.findLast=Qa,gr.findLastIndex=wa,gr.findLastKey=function(t,e){return bn(t,Fo(e,3),Xr)},gr.floor=Xu,gr.forEach=Ga,gr.forEachRight=Ya,gr.forIn=function(t,e){return null==t?t:Qr(t,Fo(e,3),cu)},gr.forInRight=function(t,e){return null==t?t:Gr(t,Fo(e,3),cu)},gr.forOwn=function(t,e){return t&&Yr(t,Fo(e,3))},gr.forOwnRight=function(t,e){return t&&Xr(t,Fo(e,3))},gr.get=ru,gr.gt=ys,gr.gte=_s,gr.has=function(t,e){return null!=t&&Vo(t,e,ri)},gr.hasIn=iu,gr.head=Ca,gr.identity=Lu,gr.includes=function(t,e,n,r){t=Cs(t)?t:mu(t),n=n&&!r?zs(n):0;var i=t.length;return n<0&&(n=Qn(i+n,0)),Ms(t)?n<=i&&t.indexOf(e,n)>-1:!!i&&xn(t,e,n)>-1},gr.indexOf=function(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=null==n?0:zs(n);return i<0&&(i=Qn(r+i,0)),xn(t,e,i)},gr.inRange=function(t,e,n){return e=Us(e),n===o?(n=e,e=0):n=Us(n),t=Ks(t),(r=t)>=Gn(i=e,a=n)&&r<Qn(i,a);var r,i,a},gr.invoke=su,gr.isArguments=bs,gr.isArray=ws,gr.isArrayBuffer=xs,gr.isArrayLike=Cs,gr.isArrayLikeObject=Ts,gr.isBoolean=function(t){return!0===t||!1===t||Ns(t)&&ei(t)==U},gr.isBuffer=Es,gr.isDate=As,gr.isElement=function(t){return Ns(t)&&1===t.nodeType&&!$s(t)},gr.isEmpty=function(t){if(null==t)return!0;if(Cs(t)&&(ws(t)||"string"==typeof t||"function"==typeof t.splice||Es(t)||Hs(t)||bs(t)))return!t.length;var e=zo(t);if(e==Y||e==rt)return!t.size;if(ta(t))return!pi(t).length;for(var n in t)if(pe.call(t,n))return!1;return!0},gr.isEqual=function(t,e){return ui(t,e)},gr.isEqualWith=function(t,e,n){var r=(n="function"==typeof n?n:o)?n(t,e):o;return r===o?ui(t,e,o,n):!!r},gr.isError=Ss,gr.isFinite=function(t){return"number"==typeof t&&Ye(t)},gr.isFunction=ks,gr.isInteger=Os,gr.isLength=Ds,gr.isMap=js,gr.isMatch=function(t,e){return t===e||ci(t,e,Bo(e))},gr.isMatchWith=function(t,e,n){return n="function"==typeof n?n:o,ci(t,e,Bo(e),n)},gr.isNaN=function(t){return Ls(t)&&t!=+t},gr.isNative=function(t){if(Zo(t))throw new te(s);return li(t)},gr.isNil=function(t){return null==t},gr.isNull=function(t){return null===t},gr.isNumber=Ls,gr.isObject=Is,gr.isObjectLike=Ns,gr.isPlainObject=$s,gr.isRegExp=Rs,gr.isSafeInteger=function(t){return Os(t)&&t>=-L&&t<=L},gr.isSet=Ps,gr.isString=Ms,gr.isSymbol=Fs,gr.isTypedArray=Hs,gr.isUndefined=function(t){return t===o},gr.isWeakMap=function(t){return Ns(t)&&zo(t)==st},gr.isWeakSet=function(t){return Ns(t)&&ei(t)==ut},gr.join=function(t,e){return null==t?"":_n.call(t,e)},gr.kebabCase=wu,gr.last=Sa,gr.lastIndexOf=function(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var i=r;return n!==o&&(i=(i=zs(n))<0?Qn(r+i,0):Gn(i,r-1)),e==e?function(t,e,n){for(var r=n+1;r--;)if(t[r]===e)return r;return r}(t,e,i):wn(t,Tn,i,!0)},gr.lowerCase=xu,gr.lowerFirst=Cu,gr.lt=Bs,gr.lte=Ws,gr.max=function(t){return t&&t.length?zr(t,Lu,ni):o},gr.maxBy=function(t,e){return t&&t.length?zr(t,Fo(e,2),ni):o},gr.mean=function(t){return En(t,Lu)},gr.meanBy=function(t,e){return En(t,Fo(e,2))},gr.min=function(t){return t&&t.length?zr(t,Lu,hi):o},gr.minBy=function(t,e){return t&&t.length?zr(t,Fo(e,2),hi):o},gr.stubArray=Vu,gr.stubFalse=Ku,gr.stubObject=function(){return{}},gr.stubString=function(){return""},gr.stubTrue=function(){return!0},gr.multiply=Zu,gr.nth=function(t,e){return t&&t.length?_i(t,zs(e)):o},gr.noConflict=function(){return ze._===this&&(ze._=me),this},gr.noop=Fu,gr.now=rs,gr.pad=function(t,e,n){t=Gs(t);var r=(e=zs(e))?Un(t):0;if(!e||r>=e)return t;var i=(e-r)/2;return wo(Ve(i),n)+t+wo(Ue(i),n)},gr.padEnd=function(t,e,n){t=Gs(t);var r=(e=zs(e))?Un(t):0;return e&&r<e?t+wo(e-r,n):t},gr.padStart=function(t,e,n){t=Gs(t);var r=(e=zs(e))?Un(t):0;return e&&r<e?wo(e-r,n)+t:t},gr.parseInt=function(t,e,n){return n||null==e?e=0:e&&(e=+e),Xn(Gs(t).replace(Pt,""),e||0)},gr.random=function(t,e,n){if(n&&"boolean"!=typeof n&&Yo(t,e,n)&&(e=n=o),n===o&&("boolean"==typeof e?(n=e,e=o):"boolean"==typeof t&&(n=t,t=o)),t===o&&e===o?(t=0,e=1):(t=Us(t),e===o?(e=t,t=0):e=Us(e)),t>e){var r=t;t=e,e=r}if(n||t%1||e%1){var i=Jn();return Gn(t+i*(e-t+Be("1e-"+((i+"").length-1))),e)}return Ti(t,e)},gr.reduce=function(t,e,n){var r=ws(t)?gn:kn,i=arguments.length<3;return r(t,Fo(e,4),n,i,Wr)},gr.reduceRight=function(t,e,n){var r=ws(t)?mn:kn,i=arguments.length<3;return r(t,Fo(e,4),n,i,qr)},gr.repeat=function(t,e,n){return e=(n?Yo(t,e,n):e===o)?1:zs(e),Ei(Gs(t),e)},gr.replace=function(){var t=arguments,e=Gs(t[0]);return t.length<3?e:e.replace(t[1],t[2])},gr.result=function(t,e,n){var r=-1,i=(e=Gi(e,t)).length;for(i||(i=1,t=o);++r<i;){var a=null==t?o:t[ha(e[r])];a===o&&(r=i,a=n),t=ks(a)?a.call(t):a}return t},gr.round=tc,gr.runInContext=t,gr.sample=function(t){return(ws(t)?Sr:Si)(t)},gr.size=function(t){if(null==t)return 0;if(Cs(t))return Ms(t)?Un(t):t.length;var e=zo(t);return e==Y||e==rt?t.size:pi(t).length},gr.snakeCase=Tu,gr.some=function(t,e,n){var r=ws(t)?yn:Li;return n&&Yo(t,e,n)&&(e=o),r(t,Fo(e,3))},gr.sortedIndex=function(t,e){return $i(t,e)},gr.sortedIndexBy=function(t,e,n){return Ri(t,e,Fo(n,2))},gr.sortedIndexOf=function(t,e){var n=null==t?0:t.length;if(n){var r=$i(t,e);if(r<n&&ms(t[r],e))return r}return-1},gr.sortedLastIndex=function(t,e){return $i(t,e,!0)},gr.sortedLastIndexBy=function(t,e,n){return Ri(t,e,Fo(n,2),!0)},gr.sortedLastIndexOf=function(t,e){if(null!=t&&t.length){var n=$i(t,e,!0)-1;if(ms(t[n],e))return n}return-1},gr.startCase=Eu,gr.startsWith=function(t,e,n){return t=Gs(t),n=null==n?0:Pr(zs(n),0,t.length),e=Fi(e),t.slice(n,n+e.length)==e},gr.subtract=ec,gr.sum=function(t){return t&&t.length?On(t,Lu):0},gr.sumBy=function(t,e){return t&&t.length?On(t,Fo(e,2)):0},gr.template=function(t,e,n){var r=gr.templateSettings;n&&Yo(t,e,n)&&(e=o),t=Gs(t),e=Js({},e,r,Oo);var i,a,s=Js({},e.imports,r.imports,Oo),u=uu(s),c=Nn(s,u),l=0,f=e.interpolate||Jt,p="__p += '",d=ie((e.escape||Jt).source+"|"+f.source+"|"+(f===Ot?Ut:Jt).source+"|"+(e.evaluate||Jt).source+"|$","g"),h="//# sourceURL="+("sourceURL"in e?e.sourceURL:"lodash.templateSources["+ ++Pe+"]")+"\n";t.replace(d,function(e,n,r,o,s,u){return r||(r=o),p+=t.slice(l,u).replace(Zt,Mn),n&&(i=!0,p+="' +\n__e("+n+") +\n'"),s&&(a=!0,p+="';\n"+s+";\n__p += '"),r&&(p+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),l=u+e.length,e}),p+="';\n";var v=e.variable;v||(p="with (obj) {\n"+p+"\n}\n"),p=(a?p.replace(bt,""):p).replace(wt,"$1").replace(xt,"$1;"),p="function("+(v||"obj")+") {\n"+(v?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+p+"return __p\n}";var g=Ou(function(){return ee(u,h+"return "+p).apply(o,c)});if(g.source=p,Ss(g))throw g;return g},gr.times=function(t,e){if((t=zs(t))<1||t>L)return[];var n=P,r=Gn(t,P);e=Fo(e),t-=P;for(var i=Dn(r,e);++n<t;)e(n);return i},gr.toFinite=Us,gr.toInteger=zs,gr.toLength=Vs,gr.toLower=function(t){return Gs(t).toLowerCase()},gr.toNumber=Ks,gr.toSafeInteger=function(t){return t?Pr(zs(t),-L,L):0===t?t:0},gr.toString=Gs,gr.toUpper=function(t){return Gs(t).toUpperCase()},gr.trim=function(t,e,n){if((t=Gs(t))&&(n||e===o))return t.replace(Rt,"");if(!t||!(e=Fi(e)))return t;var r=zn(t),i=zn(e);return Xi(r,Ln(r,i),$n(r,i)+1).join("")},gr.trimEnd=function(t,e,n){if((t=Gs(t))&&(n||e===o))return t.replace(Mt,"");if(!t||!(e=Fi(e)))return t;var r=zn(t);return Xi(r,0,$n(r,zn(e))+1).join("")},gr.trimStart=function(t,e,n){if((t=Gs(t))&&(n||e===o))return t.replace(Pt,"");if(!t||!(e=Fi(e)))return t;var r=zn(t);return Xi(r,Ln(r,zn(e))).join("")},gr.truncate=function(t,e){var n=S,r=k;if(Is(e)){var i="separator"in e?e.separator:i;n="length"in e?zs(e.length):n,r="omission"in e?Fi(e.omission):r}var a=(t=Gs(t)).length;if(Fn(t)){var s=zn(t);a=s.length}if(n>=a)return t;var u=n-Un(r);if(u<1)return r;var c=s?Xi(s,0,u).join(""):t.slice(0,u);if(i===o)return c+r;if(s&&(u+=c.length-u),Rs(i)){if(t.slice(u).search(i)){var l,f=c;for(i.global||(i=ie(i.source,Gs(zt.exec(i))+"g")),i.lastIndex=0;l=i.exec(f);)var p=l.index;c=c.slice(0,p===o?u:p)}}else if(t.indexOf(Fi(i),u)!=u){var d=c.lastIndexOf(i);d>-1&&(c=c.slice(0,d))}return c+r},gr.unescape=function(t){return(t=Gs(t))&&Et.test(t)?t.replace(Ct,Vn):t},gr.uniqueId=function(t){var e=++de;return Gs(t)+e},gr.upperCase=Au,gr.upperFirst=Su,gr.each=Ga,gr.eachRight=Ya,gr.first=Ca,Mu(gr,(Ju={},Yr(gr,function(t,e){pe.call(gr.prototype,e)||(Ju[e]=t)}),Ju),{chain:!1}),gr.VERSION="4.17.4",un(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){gr[t].placeholder=gr}),un(["drop","take"],function(t,e){br.prototype[t]=function(n){n=n===o?1:Qn(zs(n),0);var r=this.__filtered__&&!e?new br(this):this.clone();return r.__filtered__?r.__takeCount__=Gn(n,r.__takeCount__):r.__views__.push({size:Gn(n,P),type:t+(r.__dir__<0?"Right":"")}),r},br.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}}),un(["filter","map","takeWhile"],function(t,e){var n=e+1,r=n==I||3==n;br.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:Fo(t,3),type:n}),e.__filtered__=e.__filtered__||r,e}}),un(["head","last"],function(t,e){var n="take"+(e?"Right":"");br.prototype[t]=function(){return this[n](1).value()[0]}}),un(["initial","tail"],function(t,e){var n="drop"+(e?"":"Right");br.prototype[t]=function(){return this.__filtered__?new br(this):this[n](1)}}),br.prototype.compact=function(){return this.filter(Lu)},br.prototype.find=function(t){return this.filter(t).head()},br.prototype.findLast=function(t){return this.reverse().find(t)},br.prototype.invokeMap=Ai(function(t,e){return"function"==typeof t?new br(this):this.map(function(n){return ai(n,t,e)})}),br.prototype.reject=function(t){return this.filter(ps(Fo(t)))},br.prototype.slice=function(t,e){t=zs(t);var n=this;return n.__filtered__&&(t>0||e<0)?new br(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),e!==o&&(n=(e=zs(e))<0?n.dropRight(-e):n.take(e-t)),n)},br.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},br.prototype.toArray=function(){return this.take(P)},Yr(br.prototype,function(t,e){var n=/^(?:filter|find|map|reject)|While$/.test(e),r=/^(?:head|last)$/.test(e),i=gr[r?"take"+("last"==e?"Right":""):e],a=r||/^find/.test(e);i&&(gr.prototype[e]=function(){var e=this.__wrapped__,s=r?[1]:arguments,u=e instanceof br,c=s[0],l=u||ws(e),f=function(t){var e=i.apply(gr,vn([t],s));return r&&p?e[0]:e};l&&n&&"function"==typeof c&&1!=c.length&&(u=l=!1);var p=this.__chain__,d=!!this.__actions__.length,h=a&&!p,v=u&&!d;if(!a&&l){e=v?e:new br(this);var g=t.apply(e,s);return g.__actions__.push({func:Ua,args:[f],thisArg:o}),new _r(g,p)}return h&&v?t.apply(this,s):(g=this.thru(f),h?r?g.value()[0]:g.value():g)})}),un(["pop","push","shift","sort","splice","unshift"],function(t){var e=se[t],n=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",r=/^(?:pop|shift)$/.test(t);gr.prototype[t]=function(){var t=arguments;if(r&&!this.__chain__){var i=this.value();return e.apply(ws(i)?i:[],t)}return this[n](function(n){return e.apply(ws(n)?n:[],t)})}}),Yr(br.prototype,function(t,e){var n=gr[e];if(n){var r=n.name+"";(sr[r]||(sr[r]=[])).push({name:e,func:n})}}),sr[mo(o,y).name]=[{name:"wrapper",func:o}],br.prototype.clone=function(){var t=new br(this.__wrapped__);return t.__actions__=oo(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=oo(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=oo(this.__views__),t},br.prototype.reverse=function(){if(this.__filtered__){var t=new br(this);t.__dir__=-1,t.__filtered__=!0}else(t=this.clone()).__dir__*=-1;return t},br.prototype.value=function(){var t=this.__wrapped__.value(),e=this.__dir__,n=ws(t),r=e<0,i=n?t.length:0,o=function(t,e,n){for(var r=-1,i=n.length;++r<i;){var o=n[r],a=o.size;switch(o.type){case"drop":t+=a;break;case"dropRight":e-=a;break;case"take":e=Gn(e,t+a);break;case"takeRight":t=Qn(t,e-a)}}return{start:t,end:e}}(0,i,this.__views__),a=o.start,s=o.end,u=s-a,c=r?s:a-1,l=this.__iteratees__,f=l.length,p=0,d=Gn(u,this.__takeCount__);if(!n||!r&&i==u&&d==u)return Ui(t,this.__actions__);var h=[];t:for(;u--&&p<d;){for(var v=-1,g=t[c+=e];++v<f;){var m=l[v],y=m.iteratee,_=m.type,b=y(g);if(_==N)g=b;else if(!b){if(_==I)continue t;break t}}h[p++]=g}return h},gr.prototype.at=za,gr.prototype.chain=function(){return qa(this)},gr.prototype.commit=function(){return new _r(this.value(),this.__chain__)},gr.prototype.next=function(){this.__values__===o&&(this.__values__=qs(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?o:this.__values__[this.__index__++]}},gr.prototype.plant=function(t){for(var e,n=this;n instanceof yr;){var r=ga(n);r.__index__=0,r.__values__=o,e?i.__wrapped__=r:e=r;var i=r;n=n.__wrapped__}return i.__wrapped__=t,e},gr.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof br){var e=t;return this.__actions__.length&&(e=new br(this)),(e=e.reverse()).__actions__.push({func:Ua,args:[Ia],thisArg:o}),new _r(e,this.__chain__)}return this.thru(Ia)},gr.prototype.toJSON=gr.prototype.valueOf=gr.prototype.value=function(){return Ui(this.__wrapped__,this.__actions__)},gr.prototype.first=gr.prototype.head,ke&&(gr.prototype[ke]=function(){return this}),gr}();ze._=Kn,(i=function(){return Kn}.call(e,n,e,r))===o||(r.exports=i)}).call(this)}).call(e,n(1),n(15)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){(function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n;var a,s,u,c,l,f,p,d,h,v,g,m,y,_,b,w,x,C,T,E,A,S,k,O,D,I,N,j,L,$,R,P,M,F,H,B,W,q,U,z,V,K,Q,G,Y,X,J,Z,tt,et,nt,rt,it,ot,at,st,ut,ct,lt,ft,pt,dt,ht,vt,gt,mt,yt,_t,bt,wt,xt,Ct,Tt,Et,At,St,kt,Ot,Dt,It,Nt,jt,Lt,$t,Rt,Pt,Mt,Ft,Ht,Bt,Wt,qt,Ut,zt,Vt,Kt,Qt,Gt,Yt,Xt,Jt,Zt,te,ee,ne,re,ie,oe,ae,se,ue,ce,le,fe,pe,de,he,ve,ge,me,ye,_e,be,we,xe,Ce,Te,Ee,Ae,Se,ke,Oe,De,Ie,Ne,je,Le,$e,Re,Pe,Me,Fe,He,Be,We,qe,Ue,ze,Ve,Ke,Qe,Ge,Ye,Xe,Je,Ze,tn,en,nn,rn,on,an,sn,un,cn,ln,fn,pn,dn,hn,vn,gn,mn,yn,_n,bn,wn,xn=function(t){var e=!1;function n(e){var n=this,i=!1;return t(this).one(r.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||r.triggerTransitionEnd(n)},e),this}var r={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(e){var n,r=e.getAttribute("data-target");r&&"#"!==r||(r=e.getAttribute("href")||""),"#"===r.charAt(0)&&(n=r,r=n="function"==typeof t.escapeSelector?t.escapeSelector(n).substr(1):n.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1"));try{return t(document).find(r).length>0?r:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(n){t(n).trigger(e.end)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],a=e[i],s=a&&r.isElement(a)?"element":(u=a,{}.toString.call(u).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var u}};return e=("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"},t.fn.emulateTransitionEnd=n,r.supportsTransitionEnd()&&(t.event.special[r.TRANSITION_END]={bindType:e.end,delegateType:e.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}),r}(e),Cn=(s="alert",c="."+(u="bs.alert"),l=(a=e).fn[s],f={CLOSE:"close"+c,CLOSED:"closed"+c,CLICK_DATA_API:"click"+c+".data-api"},p="alert",d="fade",h="show",v=function(){function t(t){this._element=t}var e=t.prototype;return e.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.dispose=function(){a.removeData(this._element,u),this._element=null},e._getRootElement=function(t){var e=xn.getSelectorFromElement(t),n=!1;return e&&(n=a(e)[0]),n||(n=a(t).closest("."+p)[0]),n},e._triggerCloseEvent=function(t){var e=a.Event(f.CLOSE);return a(t).trigger(e),e},e._removeElement=function(t){var e=this;a(t).removeClass(h),xn.supportsTransitionEnd()&&a(t).hasClass(d)?a(t).one(xn.TRANSITION_END,function(n){return e._destroyElement(t,n)}).emulateTransitionEnd(150):this._destroyElement(t)},e._destroyElement=function(t){a(t).detach().trigger(f.CLOSED).remove()},t._jQueryInterface=function(e){return this.each(function(){var n=a(this),r=n.data(u);r||(r=new t(this),n.data(u,r)),"close"===e&&r[e](this)})},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),a(document).on(f.CLICK_DATA_API,'[data-dismiss="alert"]',v._handleDismiss(new v)),a.fn[s]=v._jQueryInterface,a.fn[s].Constructor=v,a.fn[s].noConflict=function(){return a.fn[s]=l,v._jQueryInterface},v),Tn=(m="button",_="."+(y="bs.button"),b=".data-api",w=(g=e).fn[m],x="active",C="btn",T="focus",E='[data-toggle^="button"]',A='[data-toggle="buttons"]',S="input",k=".active",O=".btn",D={CLICK_DATA_API:"click"+_+b,FOCUS_BLUR_DATA_API:"focus"+_+b+" blur"+_+b},I=function(){function t(t){this._element=t}var e=t.prototype;return e.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(A)[0];if(n){var r=g(this._element).find(S)[0];if(r){if("radio"===r.type)if(r.checked&&g(this._element).hasClass(x))t=!1;else{var i=g(n).find(k)[0];i&&g(i).removeClass(x)}if(t){if(r.hasAttribute("disabled")||n.hasAttribute("disabled")||r.classList.contains("disabled")||n.classList.contains("disabled"))return;r.checked=!g(this._element).hasClass(x),g(r).trigger("change")}r.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!g(this._element).hasClass(x)),t&&g(this._element).toggleClass(x)},e.dispose=function(){g.removeData(this._element,y),this._element=null},t._jQueryInterface=function(e){return this.each(function(){var n=g(this).data(y);n||(n=new t(this),g(this).data(y,n)),"toggle"===e&&n[e]()})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),g(document).on(D.CLICK_DATA_API,E,function(t){t.preventDefault();var e=t.target;g(e).hasClass(C)||(e=g(e).closest(O)),I._jQueryInterface.call(g(e),"toggle")}).on(D.FOCUS_BLUR_DATA_API,E,function(t){var e=g(t.target).closest(O)[0];g(e).toggleClass(T,/^focus(in)?$/.test(t.type))}),g.fn[m]=I._jQueryInterface,g.fn[m].Constructor=I,g.fn[m].noConflict=function(){return g.fn[m]=w,I._jQueryInterface},I),En=(j="carousel",$="."+(L="bs.carousel"),R=(N=e).fn[j],P={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},M={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},F="next",H="prev",B="left",W="right",q={SLIDE:"slide"+$,SLID:"slid"+$,KEYDOWN:"keydown"+$,MOUSEENTER:"mouseenter"+$,MOUSELEAVE:"mouseleave"+$,TOUCHEND:"touchend"+$,LOAD_DATA_API:"load"+$+".data-api",CLICK_DATA_API:"click"+$+".data-api"},U="carousel",z="active",V="slide",K="carousel-item-right",Q="carousel-item-left",G="carousel-item-next",Y="carousel-item-prev",X={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},J=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(e),this._element=N(t)[0],this._indicatorsElement=N(this._element).find(X.INDICATORS)[0],this._addEventListeners()}var e=t.prototype;return e.next=function(){this._isSliding||this._slide(F)},e.nextWhenVisible=function(){!document.hidden&&N(this._element).is(":visible")&&"hidden"!==N(this._element).css("visibility")&&this.next()},e.prev=function(){this._isSliding||this._slide(H)},e.pause=function(t){t||(this._isPaused=!0),N(this._element).find(X.NEXT_PREV)[0]&&xn.supportsTransitionEnd()&&(xn.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},e.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},e.to=function(t){var e=this;this._activeElement=N(this._element).find(X.ACTIVE_ITEM)[0];var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)N(this._element).one(q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var r=t>n?F:H;this._slide(r,this._items[t])}},e.dispose=function(){N(this._element).off($),N.removeData(this._element,L),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},e._getConfig=function(t){return t=o({},P,t),xn.typeCheckConfig(j,t,M),t},e._addEventListeners=function(){var t=this;this._config.keyboard&&N(this._element).on(q.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&(N(this._element).on(q.MOUSEENTER,function(e){return t.pause(e)}).on(q.MOUSELEAVE,function(e){return t.cycle(e)}),"ontouchstart"in document.documentElement&&N(this._element).on(q.TOUCHEND,function(){t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval)}))},e._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},e._getItemIndex=function(t){return this._items=N.makeArray(N(t).parent().find(X.ITEM)),this._items.indexOf(t)},e._getItemByDirection=function(t,e){var n=t===F,r=t===H,i=this._getItemIndex(e),o=this._items.length-1;if((r&&0===i||n&&i===o)&&!this._config.wrap)return e;var a=(i+(t===H?-1:1))%this._items.length;return-1===a?this._items[this._items.length-1]:this._items[a]},e._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),r=this._getItemIndex(N(this._element).find(X.ACTIVE_ITEM)[0]),i=N.Event(q.SLIDE,{relatedTarget:t,direction:e,from:r,to:n});return N(this._element).trigger(i),i},e._setActiveIndicatorElement=function(t){if(this._indicatorsElement){N(this._indicatorsElement).find(X.ACTIVE).removeClass(z);var e=this._indicatorsElement.children[this._getItemIndex(t)];e&&N(e).addClass(z)}},e._slide=function(t,e){var n,r,i,o=this,a=N(this._element).find(X.ACTIVE_ITEM)[0],s=this._getItemIndex(a),u=e||a&&this._getItemByDirection(t,a),c=this._getItemIndex(u),l=Boolean(this._interval);if(t===F?(n=Q,r=G,i=B):(n=K,r=Y,i=W),u&&N(u).hasClass(z))this._isSliding=!1;else if(!this._triggerSlideEvent(u,i).isDefaultPrevented()&&a&&u){this._isSliding=!0,l&&this.pause(),this._setActiveIndicatorElement(u);var f=N.Event(q.SLID,{relatedTarget:u,direction:i,from:s,to:c});xn.supportsTransitionEnd()&&N(this._element).hasClass(V)?(N(u).addClass(r),xn.reflow(u),N(a).addClass(n),N(u).addClass(n),N(a).one(xn.TRANSITION_END,function(){N(u).removeClass(n+" "+r).addClass(z),N(a).removeClass(z+" "+r+" "+n),o._isSliding=!1,setTimeout(function(){return N(o._element).trigger(f)},0)}).emulateTransitionEnd(600)):(N(a).removeClass(z),N(u).addClass(z),this._isSliding=!1,N(this._element).trigger(f)),l&&this.cycle()}},t._jQueryInterface=function(e){return this.each(function(){var n=N(this).data(L),r=o({},P,N(this).data());"object"==typeof e&&(r=o({},r,e));var i="string"==typeof e?e:r.slide;if(n||(n=new t(this,r),N(this).data(L,n)),"number"==typeof e)n.to(e);else if("string"==typeof i){if(void 0===n[i])throw new TypeError('No method named "'+i+'"');n[i]()}else r.interval&&(n.pause(),n.cycle())})},t._dataApiClickHandler=function(e){var n=xn.getSelectorFromElement(this);if(n){var r=N(n)[0];if(r&&N(r).hasClass(U)){var i=o({},N(r).data(),N(this).data()),a=this.getAttribute("data-slide-to");a&&(i.interval=!1),t._jQueryInterface.call(N(r),i),a&&N(r).data(L).to(a),e.preventDefault()}}},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return P}}]),t}(),N(document).on(q.CLICK_DATA_API,X.DATA_SLIDE,J._dataApiClickHandler),N(window).on(q.LOAD_DATA_API,function(){N(X.DATA_RIDE).each(function(){var t=N(this);J._jQueryInterface.call(t,t.data())})}),N.fn[j]=J._jQueryInterface,N.fn[j].Constructor=J,N.fn[j].noConflict=function(){return N.fn[j]=R,J._jQueryInterface},J),An=(tt="collapse",nt="."+(et="bs.collapse"),rt=(Z=e).fn[tt],it={toggle:!0,parent:""},ot={toggle:"boolean",parent:"(string|element)"},at={SHOW:"show"+nt,SHOWN:"shown"+nt,HIDE:"hide"+nt,HIDDEN:"hidden"+nt,CLICK_DATA_API:"click"+nt+".data-api"},st="show",ut="collapse",ct="collapsing",lt="collapsed",ft="width",pt="height",dt={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},ht=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=Z.makeArray(Z('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=Z(dt.DATA_TOGGLE),r=0;r<n.length;r++){var i=n[r],o=xn.getSelectorFromElement(i);null!==o&&Z(o).filter(t).length>0&&(this._selector=o,this._triggerArray.push(i))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var e=t.prototype;return e.toggle=function(){Z(this._element).hasClass(st)?this.hide():this.show()},e.show=function(){var e,n,r=this;if(!this._isTransitioning&&!Z(this._element).hasClass(st)&&(this._parent&&0===(e=Z.makeArray(Z(this._parent).find(dt.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(e=null),!(e&&(n=Z(e).not(this._selector).data(et))&&n._isTransitioning))){var i=Z.Event(at.SHOW);if(Z(this._element).trigger(i),!i.isDefaultPrevented()){e&&(t._jQueryInterface.call(Z(e).not(this._selector),"hide"),n||Z(e).data(et,null));var o=this._getDimension();Z(this._element).removeClass(ut).addClass(ct),this._element.style[o]=0,this._triggerArray.length>0&&Z(this._triggerArray).removeClass(lt).attr("aria-expanded",!0),this.setTransitioning(!0);var a=function(){Z(r._element).removeClass(ct).addClass(ut).addClass(st),r._element.style[o]="",r.setTransitioning(!1),Z(r._element).trigger(at.SHOWN)};if(xn.supportsTransitionEnd()){var s="scroll"+(o[0].toUpperCase()+o.slice(1));Z(this._element).one(xn.TRANSITION_END,a).emulateTransitionEnd(600),this._element.style[o]=this._element[s]+"px"}else a()}}},e.hide=function(){var t=this;if(!this._isTransitioning&&Z(this._element).hasClass(st)){var e=Z.Event(at.HIDE);if(Z(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();if(this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",xn.reflow(this._element),Z(this._element).addClass(ct).removeClass(ut).removeClass(st),this._triggerArray.length>0)for(var r=0;r<this._triggerArray.length;r++){var i=this._triggerArray[r],o=xn.getSelectorFromElement(i);if(null!==o)Z(o).hasClass(st)||Z(i).addClass(lt).attr("aria-expanded",!1)}this.setTransitioning(!0);var a=function(){t.setTransitioning(!1),Z(t._element).removeClass(ct).addClass(ut).trigger(at.HIDDEN)};this._element.style[n]="",xn.supportsTransitionEnd()?Z(this._element).one(xn.TRANSITION_END,a).emulateTransitionEnd(600):a()}}},e.setTransitioning=function(t){this._isTransitioning=t},e.dispose=function(){Z.removeData(this._element,et),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},e._getConfig=function(t){return(t=o({},it,t)).toggle=Boolean(t.toggle),xn.typeCheckConfig(tt,t,ot),t},e._getDimension=function(){return Z(this._element).hasClass(ft)?ft:pt},e._getParent=function(){var e=this,n=null;xn.isElement(this._config.parent)?(n=this._config.parent,void 0!==this._config.parent.jquery&&(n=this._config.parent[0])):n=Z(this._config.parent)[0];var r='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return Z(n).find(r).each(function(n,r){e._addAriaAndCollapsedClass(t._getTargetFromElement(r),[r])}),n},e._addAriaAndCollapsedClass=function(t,e){if(t){var n=Z(t).hasClass(st);e.length>0&&Z(e).toggleClass(lt,!n).attr("aria-expanded",n)}},t._getTargetFromElement=function(t){var e=xn.getSelectorFromElement(t);return e?Z(e)[0]:null},t._jQueryInterface=function(e){return this.each(function(){var n=Z(this),r=n.data(et),i=o({},it,n.data(),"object"==typeof e&&e);if(!r&&i.toggle&&/show|hide/.test(e)&&(i.toggle=!1),r||(r=new t(this,i),n.data(et,r)),"string"==typeof e){if(void 0===r[e])throw new TypeError('No method named "'+e+'"');r[e]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return it}}]),t}(),Z(document).on(at.CLICK_DATA_API,dt.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var e=Z(this),n=xn.getSelectorFromElement(this);Z(n).each(function(){var t=Z(this),n=t.data(et)?"toggle":e.data();ht._jQueryInterface.call(t,n)})}),Z.fn[tt]=ht._jQueryInterface,Z.fn[tt].Constructor=ht,Z.fn[tt].noConflict=function(){return Z.fn[tt]=rt,ht._jQueryInterface},ht),Sn=(gt="dropdown",yt="."+(mt="bs.dropdown"),_t=".data-api",bt=(vt=e).fn[gt],wt=new RegExp("38|40|27"),xt={HIDE:"hide"+yt,HIDDEN:"hidden"+yt,SHOW:"show"+yt,SHOWN:"shown"+yt,CLICK:"click"+yt,CLICK_DATA_API:"click"+yt+_t,KEYDOWN_DATA_API:"keydown"+yt+_t,KEYUP_DATA_API:"keyup"+yt+_t},Ct="disabled",Tt="show",Et="dropup",At="dropright",St="dropleft",kt="dropdown-menu-right",Ot="dropdown-menu-left",Dt="position-static",It='[data-toggle="dropdown"]',Nt=".dropdown form",jt=".dropdown-menu",Lt=".navbar-nav",$t=".dropdown-menu .dropdown-item:not(.disabled)",Rt="top-start",Pt="top-end",Mt="bottom-start",Ft="bottom-end",Ht="right-start",Bt="left-start",Wt={offset:0,flip:!0,boundary:"scrollParent"},qt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)"},Ut=function(){function t(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var e=t.prototype;return e.toggle=function(){if(!this._element.disabled&&!vt(this._element).hasClass(Ct)){var e=t._getParentFromElement(this._element),r=vt(this._menu).hasClass(Tt);if(t._clearMenus(),!r){var i={relatedTarget:this._element},o=vt.Event(xt.SHOW,i);if(vt(e).trigger(o),!o.isDefaultPrevented()){if(!this._inNavbar){if(void 0===n)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var a=this._element;vt(e).hasClass(Et)&&(vt(this._menu).hasClass(Ot)||vt(this._menu).hasClass(kt))&&(a=e),"scrollParent"!==this._config.boundary&&vt(e).addClass(Dt),this._popper=new n(a,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===vt(e).closest(Lt).length&&vt("body").children().on("mouseover",null,vt.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),vt(this._menu).toggleClass(Tt),vt(e).toggleClass(Tt).trigger(vt.Event(xt.SHOWN,i))}}}},e.dispose=function(){vt.removeData(this._element,mt),vt(this._element).off(yt),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},e.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},e._addEventListeners=function(){var t=this;vt(this._element).on(xt.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},e._getConfig=function(t){return t=o({},this.constructor.Default,vt(this._element).data(),t),xn.typeCheckConfig(gt,t,this.constructor.DefaultType),t},e._getMenuElement=function(){if(!this._menu){var e=t._getParentFromElement(this._element);this._menu=vt(e).find(jt)[0]}return this._menu},e._getPlacement=function(){var t=vt(this._element).parent(),e=Mt;return t.hasClass(Et)?(e=Rt,vt(this._menu).hasClass(kt)&&(e=Pt)):t.hasClass(At)?e=Ht:t.hasClass(St)?e=Bt:vt(this._menu).hasClass(kt)&&(e=Ft),e},e._detectNavbar=function(){return vt(this._element).closest(".navbar").length>0},e._getPopperConfig=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=o({},e.offsets,t._config.offset(e.offsets)||{}),e}:e.offset=this._config.offset,{placement:this._getPlacement(),modifiers:{offset:e,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}},t._jQueryInterface=function(e){return this.each(function(){var n=vt(this).data(mt);if(n||(n=new t(this,"object"==typeof e?e:null),vt(this).data(mt,n)),"string"==typeof e){if(void 0===n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},t._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=vt.makeArray(vt(It)),r=0;r<n.length;r++){var i=t._getParentFromElement(n[r]),o=vt(n[r]).data(mt),a={relatedTarget:n[r]};if(o){var s=o._menu;if(vt(i).hasClass(Tt)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&vt.contains(i,e.target))){var u=vt.Event(xt.HIDE,a);vt(i).trigger(u),u.isDefaultPrevented()||("ontouchstart"in document.documentElement&&vt("body").children().off("mouseover",null,vt.noop),n[r].setAttribute("aria-expanded","false"),vt(s).removeClass(Tt),vt(i).removeClass(Tt).trigger(vt.Event(xt.HIDDEN,a)))}}}},t._getParentFromElement=function(t){var e,n=xn.getSelectorFromElement(t);return n&&(e=vt(n)[0]),e||t.parentNode},t._dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||vt(e.target).closest(jt).length)):wt.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!vt(this).hasClass(Ct))){var n=t._getParentFromElement(this),r=vt(n).hasClass(Tt);if((r||27===e.which&&32===e.which)&&(!r||27!==e.which&&32!==e.which)){var i=vt(n).find($t).get();if(0!==i.length){var o=i.indexOf(e.target);38===e.which&&o>0&&o--,40===e.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===e.which){var a=vt(n).find(It)[0];vt(a).trigger("focus")}vt(this).trigger("click")}}},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return Wt}},{key:"DefaultType",get:function(){return qt}}]),t}(),vt(document).on(xt.KEYDOWN_DATA_API,It,Ut._dataApiKeydownHandler).on(xt.KEYDOWN_DATA_API,jt,Ut._dataApiKeydownHandler).on(xt.CLICK_DATA_API+" "+xt.KEYUP_DATA_API,Ut._clearMenus).on(xt.CLICK_DATA_API,It,function(t){t.preventDefault(),t.stopPropagation(),Ut._jQueryInterface.call(vt(this),"toggle")}).on(xt.CLICK_DATA_API,Nt,function(t){t.stopPropagation()}),vt.fn[gt]=Ut._jQueryInterface,vt.fn[gt].Constructor=Ut,vt.fn[gt].noConflict=function(){return vt.fn[gt]=bt,Ut._jQueryInterface},Ut),kn=(Vt="modal",Qt="."+(Kt="bs.modal"),Gt=(zt=e).fn[Vt],Yt={backdrop:!0,keyboard:!0,focus:!0,show:!0},Xt={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},Jt={HIDE:"hide"+Qt,HIDDEN:"hidden"+Qt,SHOW:"show"+Qt,SHOWN:"shown"+Qt,FOCUSIN:"focusin"+Qt,RESIZE:"resize"+Qt,CLICK_DISMISS:"click.dismiss"+Qt,KEYDOWN_DISMISS:"keydown.dismiss"+Qt,MOUSEUP_DISMISS:"mouseup.dismiss"+Qt,MOUSEDOWN_DISMISS:"mousedown.dismiss"+Qt,CLICK_DATA_API:"click"+Qt+".data-api"},Zt="modal-scrollbar-measure",te="modal-backdrop",ee="modal-open",ne="fade",re="show",ie={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},oe=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=zt(t).find(ie.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var e=t.prototype;return e.toggle=function(t){return this._isShown?this.hide():this.show(t)},e.show=function(t){var e=this;if(!this._isTransitioning&&!this._isShown){xn.supportsTransitionEnd()&&zt(this._element).hasClass(ne)&&(this._isTransitioning=!0);var n=zt.Event(Jt.SHOW,{relatedTarget:t});zt(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),zt(document.body).addClass(ee),this._setEscapeEvent(),this._setResizeEvent(),zt(this._element).on(Jt.CLICK_DISMISS,ie.DATA_DISMISS,function(t){return e.hide(t)}),zt(this._dialog).on(Jt.MOUSEDOWN_DISMISS,function(){zt(e._element).one(Jt.MOUSEUP_DISMISS,function(t){zt(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},e.hide=function(t){var e=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var n=zt.Event(Jt.HIDE);if(zt(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var r=xn.supportsTransitionEnd()&&zt(this._element).hasClass(ne);r&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),zt(document).off(Jt.FOCUSIN),zt(this._element).removeClass(re),zt(this._element).off(Jt.CLICK_DISMISS),zt(this._dialog).off(Jt.MOUSEDOWN_DISMISS),r?zt(this._element).one(xn.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(300):this._hideModal()}}},e.dispose=function(){zt.removeData(this._element,Kt),zt(window,document,this._element,this._backdrop).off(Qt),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},e.handleUpdate=function(){this._adjustDialog()},e._getConfig=function(t){return t=o({},Yt,t),xn.typeCheckConfig(Vt,t,Xt),t},e._showElement=function(t){var e=this,n=xn.supportsTransitionEnd()&&zt(this._element).hasClass(ne);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&xn.reflow(this._element),zt(this._element).addClass(re),this._config.focus&&this._enforceFocus();var r=zt.Event(Jt.SHOWN,{relatedTarget:t}),i=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,zt(e._element).trigger(r)};n?zt(this._dialog).one(xn.TRANSITION_END,i).emulateTransitionEnd(300):i()},e._enforceFocus=function(){var t=this;zt(document).off(Jt.FOCUSIN).on(Jt.FOCUSIN,function(e){document!==e.target&&t._element!==e.target&&0===zt(t._element).has(e.target).length&&t._element.focus()})},e._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?zt(this._element).on(Jt.KEYDOWN_DISMISS,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||zt(this._element).off(Jt.KEYDOWN_DISMISS)},e._setResizeEvent=function(){var t=this;this._isShown?zt(window).on(Jt.RESIZE,function(e){return t.handleUpdate(e)}):zt(window).off(Jt.RESIZE)},e._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){zt(document.body).removeClass(ee),t._resetAdjustments(),t._resetScrollbar(),zt(t._element).trigger(Jt.HIDDEN)})},e._removeBackdrop=function(){this._backdrop&&(zt(this._backdrop).remove(),this._backdrop=null)},e._showBackdrop=function(t){var e=this,n=zt(this._element).hasClass(ne)?ne:"";if(this._isShown&&this._config.backdrop){var r=xn.supportsTransitionEnd()&&n;if(this._backdrop=document.createElement("div"),this._backdrop.className=te,n&&zt(this._backdrop).addClass(n),zt(this._backdrop).appendTo(document.body),zt(this._element).on(Jt.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),r&&xn.reflow(this._backdrop),zt(this._backdrop).addClass(re),!t)return;if(!r)return void t();zt(this._backdrop).one(xn.TRANSITION_END,t).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){zt(this._backdrop).removeClass(re);var i=function(){e._removeBackdrop(),t&&t()};xn.supportsTransitionEnd()&&zt(this._element).hasClass(ne)?zt(this._backdrop).one(xn.TRANSITION_END,i).emulateTransitionEnd(150):i()}else t&&t()},e._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},e._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},e._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},e._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){zt(ie.FIXED_CONTENT).each(function(e,n){var r=zt(n)[0].style.paddingRight,i=zt(n).css("padding-right");zt(n).data("padding-right",r).css("padding-right",parseFloat(i)+t._scrollbarWidth+"px")}),zt(ie.STICKY_CONTENT).each(function(e,n){var r=zt(n)[0].style.marginRight,i=zt(n).css("margin-right");zt(n).data("margin-right",r).css("margin-right",parseFloat(i)-t._scrollbarWidth+"px")}),zt(ie.NAVBAR_TOGGLER).each(function(e,n){var r=zt(n)[0].style.marginRight,i=zt(n).css("margin-right");zt(n).data("margin-right",r).css("margin-right",parseFloat(i)+t._scrollbarWidth+"px")});var e=document.body.style.paddingRight,n=zt("body").css("padding-right");zt("body").data("padding-right",e).css("padding-right",parseFloat(n)+this._scrollbarWidth+"px")}},e._resetScrollbar=function(){zt(ie.FIXED_CONTENT).each(function(t,e){var n=zt(e).data("padding-right");void 0!==n&&zt(e).css("padding-right",n).removeData("padding-right")}),zt(ie.STICKY_CONTENT+", "+ie.NAVBAR_TOGGLER).each(function(t,e){var n=zt(e).data("margin-right");void 0!==n&&zt(e).css("margin-right",n).removeData("margin-right")});var t=zt("body").data("padding-right");void 0!==t&&zt("body").css("padding-right",t).removeData("padding-right")},e._getScrollbarWidth=function(){var t=document.createElement("div");t.className=Zt,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},t._jQueryInterface=function(e,n){return this.each(function(){var r=zt(this).data(Kt),i=o({},t.Default,zt(this).data(),"object"==typeof e&&e);if(r||(r=new t(this,i),zt(this).data(Kt,r)),"string"==typeof e){if(void 0===r[e])throw new TypeError('No method named "'+e+'"');r[e](n)}else i.show&&r.show(n)})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return Yt}}]),t}(),zt(document).on(Jt.CLICK_DATA_API,ie.DATA_TOGGLE,function(t){var e,n=this,r=xn.getSelectorFromElement(this);r&&(e=zt(r)[0]);var i=zt(e).data(Kt)?"toggle":o({},zt(e).data(),zt(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var a=zt(e).one(Jt.SHOW,function(t){t.isDefaultPrevented()||a.one(Jt.HIDDEN,function(){zt(n).is(":visible")&&n.focus()})});oe._jQueryInterface.call(zt(e),i,this)}),zt.fn[Vt]=oe._jQueryInterface,zt.fn[Vt].Constructor=oe,zt.fn[Vt].noConflict=function(){return zt.fn[Vt]=Gt,oe._jQueryInterface},oe),On=(se="tooltip",ce="."+(ue="bs.tooltip"),le=(ae=e).fn[se],fe="bs-tooltip",pe=new RegExp("(^|\\s)"+fe+"\\S+","g"),de={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},he={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},ve={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},ge="show",me="out",ye={HIDE:"hide"+ce,HIDDEN:"hidden"+ce,SHOW:"show"+ce,SHOWN:"shown"+ce,INSERTED:"inserted"+ce,CLICK:"click"+ce,FOCUSIN:"focusin"+ce,FOCUSOUT:"focusout"+ce,MOUSEENTER:"mouseenter"+ce,MOUSELEAVE:"mouseleave"+ce},_e="fade",be="show",we=".tooltip-inner",xe=".arrow",Ce="hover",Te="focus",Ee="click",Ae="manual",Se=function(){function t(t,e){if(void 0===n)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var e=t.prototype;return e.enable=function(){this._isEnabled=!0},e.disable=function(){this._isEnabled=!1},e.toggleEnabled=function(){this._isEnabled=!this._isEnabled},e.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=ae(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),ae(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(ae(this.getTipElement()).hasClass(be))return void this._leave(null,this);this._enter(null,this)}},e.dispose=function(){clearTimeout(this._timeout),ae.removeData(this.element,this.constructor.DATA_KEY),ae(this.element).off(this.constructor.EVENT_KEY),ae(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&ae(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},e.show=function(){var e=this;if("none"===ae(this.element).css("display"))throw new Error("Please use show on visible elements");var r=ae.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){ae(this.element).trigger(r);var i=ae.contains(this.element.ownerDocument.documentElement,this.element);if(r.isDefaultPrevented()||!i)return;var o=this.getTipElement(),a=xn.getUID(this.constructor.NAME);o.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&ae(o).addClass(_e);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,u=this._getAttachment(s);this.addAttachmentClass(u);var c=!1===this.config.container?document.body:ae(this.config.container);ae(o).data(this.constructor.DATA_KEY,this),ae.contains(this.element.ownerDocument.documentElement,this.tip)||ae(o).appendTo(c),ae(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,o,{placement:u,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:xe},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),ae(o).addClass(be),"ontouchstart"in document.documentElement&&ae("body").children().on("mouseover",null,ae.noop);var l=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,ae(e.element).trigger(e.constructor.Event.SHOWN),t===me&&e._leave(null,e)};xn.supportsTransitionEnd()&&ae(this.tip).hasClass(_e)?ae(this.tip).one(xn.TRANSITION_END,l).emulateTransitionEnd(t._TRANSITION_DURATION):l()}},e.hide=function(t){var e=this,n=this.getTipElement(),r=ae.Event(this.constructor.Event.HIDE),i=function(){e._hoverState!==ge&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),ae(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};ae(this.element).trigger(r),r.isDefaultPrevented()||(ae(n).removeClass(be),"ontouchstart"in document.documentElement&&ae("body").children().off("mouseover",null,ae.noop),this._activeTrigger[Ee]=!1,this._activeTrigger[Te]=!1,this._activeTrigger[Ce]=!1,xn.supportsTransitionEnd()&&ae(this.tip).hasClass(_e)?ae(n).one(xn.TRANSITION_END,i).emulateTransitionEnd(150):i(),this._hoverState="")},e.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},e.isWithContent=function(){return Boolean(this.getTitle())},e.addAttachmentClass=function(t){ae(this.getTipElement()).addClass(fe+"-"+t)},e.getTipElement=function(){return this.tip=this.tip||ae(this.config.template)[0],this.tip},e.setContent=function(){var t=ae(this.getTipElement());this.setElementContent(t.find(we),this.getTitle()),t.removeClass(_e+" "+be)},e.setElementContent=function(t,e){var n=this.config.html;"object"==typeof e&&(e.nodeType||e.jquery)?n?ae(e).parent().is(t)||t.empty().append(e):t.text(ae(e).text()):t[n?"html":"text"](e)},e.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},e._getAttachment=function(t){return he[t.toUpperCase()]},e._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach(function(e){if("click"===e)ae(t.element).on(t.constructor.Event.CLICK,t.config.selector,function(e){return t.toggle(e)});else if(e!==Ae){var n=e===Ce?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,r=e===Ce?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;ae(t.element).on(n,t.config.selector,function(e){return t._enter(e)}).on(r,t.config.selector,function(e){return t._leave(e)})}ae(t.element).closest(".modal").on("hide.bs.modal",function(){return t.hide()})}),this.config.selector?this.config=o({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},e._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},e._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||ae(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),ae(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Te:Ce]=!0),ae(e.getTipElement()).hasClass(be)||e._hoverState===ge?e._hoverState=ge:(clearTimeout(e._timeout),e._hoverState=ge,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===ge&&e.show()},e.config.delay.show):e.show())},e._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||ae(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),ae(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Te:Ce]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=me,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===me&&e.hide()},e.config.delay.hide):e.hide())},e._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},e._getConfig=function(t){return"number"==typeof(t=o({},this.constructor.Default,ae(this.element).data(),t)).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),xn.typeCheckConfig(se,t,this.constructor.DefaultType),t},e._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},e._cleanTipClass=function(){var t=ae(this.getTipElement()),e=t.attr("class").match(pe);null!==e&&e.length>0&&t.removeClass(e.join(""))},e._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},e._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(ae(t).removeClass(_e),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},t._jQueryInterface=function(e){return this.each(function(){var n=ae(this).data(ue),r="object"==typeof e&&e;if((n||!/dispose|hide/.test(e))&&(n||(n=new t(this,r),ae(this).data(ue,n)),"string"==typeof e)){if(void 0===n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return ve}},{key:"NAME",get:function(){return se}},{key:"DATA_KEY",get:function(){return ue}},{key:"Event",get:function(){return ye}},{key:"EVENT_KEY",get:function(){return ce}},{key:"DefaultType",get:function(){return de}}]),t}(),ae.fn[se]=Se._jQueryInterface,ae.fn[se].Constructor=Se,ae.fn[se].noConflict=function(){return ae.fn[se]=le,Se._jQueryInterface},Se),Dn=(Oe="popover",Ie="."+(De="bs.popover"),Ne=(ke=e).fn[Oe],je="bs-popover",Le=new RegExp("(^|\\s)"+je+"\\S+","g"),$e=o({},On.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Re=o({},On.DefaultType,{content:"(string|element|function)"}),Pe="fade",Me="show",Fe=".popover-header",He=".popover-body",Be={HIDE:"hide"+Ie,HIDDEN:"hidden"+Ie,SHOW:"show"+Ie,SHOWN:"shown"+Ie,INSERTED:"inserted"+Ie,CLICK:"click"+Ie,FOCUSIN:"focusin"+Ie,FOCUSOUT:"focusout"+Ie,MOUSEENTER:"mouseenter"+Ie,MOUSELEAVE:"mouseleave"+Ie},We=function(t){var e,n;function r(){return t.apply(this,arguments)||this}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=r.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.addAttachmentClass=function(t){ke(this.getTipElement()).addClass(je+"-"+t)},o.getTipElement=function(){return this.tip=this.tip||ke(this.config.template)[0],this.tip},o.setContent=function(){var t=ke(this.getTipElement());this.setElementContent(t.find(Fe),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(He),e),t.removeClass(Pe+" "+Me)},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},o._cleanTipClass=function(){var t=ke(this.getTipElement()),e=t.attr("class").match(Le);null!==e&&e.length>0&&t.removeClass(e.join(""))},r._jQueryInterface=function(t){return this.each(function(){var e=ke(this).data(De),n="object"==typeof t?t:null;if((e||!/destroy|hide/.test(t))&&(e||(e=new r(this,n),ke(this).data(De,e)),"string"==typeof t)){if(void 0===e[t])throw new TypeError('No method named "'+t+'"');e[t]()}})},i(r,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return $e}},{key:"NAME",get:function(){return Oe}},{key:"DATA_KEY",get:function(){return De}},{key:"Event",get:function(){return Be}},{key:"EVENT_KEY",get:function(){return Ie}},{key:"DefaultType",get:function(){return Re}}]),r}(On),ke.fn[Oe]=We._jQueryInterface,ke.fn[Oe].Constructor=We,ke.fn[Oe].noConflict=function(){return ke.fn[Oe]=Ne,We._jQueryInterface},We),In=(Ue="scrollspy",Ve="."+(ze="bs.scrollspy"),Ke=(qe=e).fn[Ue],Qe={offset:10,method:"auto",target:""},Ge={offset:"number",method:"string",target:"(string|element)"},Ye={ACTIVATE:"activate"+Ve,SCROLL:"scroll"+Ve,LOAD_DATA_API:"load"+Ve+".data-api"},Xe="dropdown-item",Je="active",Ze={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},tn="offset",en="position",nn=function(){function t(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+Ze.NAV_LINKS+","+this._config.target+" "+Ze.LIST_ITEMS+","+this._config.target+" "+Ze.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,qe(this._scrollElement).on(Ye.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var e=t.prototype;return e.refresh=function(){var t=this,e=this._scrollElement===this._scrollElement.window?tn:en,n="auto"===this._config.method?e:this._config.method,r=n===en?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),qe.makeArray(qe(this._selector)).map(function(t){var e,i=xn.getSelectorFromElement(t);if(i&&(e=qe(i)[0]),e){var o=e.getBoundingClientRect();if(o.width||o.height)return[qe(e)[n]().top+r,i]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},e.dispose=function(){qe.removeData(this._element,ze),qe(this._scrollElement).off(Ve),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},e._getConfig=function(t){if("string"!=typeof(t=o({},Qe,t)).target){var e=qe(t.target).attr("id");e||(e=xn.getUID(Ue),qe(t.target).attr("id",e)),t.target="#"+e}return xn.typeCheckConfig(Ue,t,Ge),t},e._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},e._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},e._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},e._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var r=this._targets[this._targets.length-1];this._activeTarget!==r&&this._activate(r)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var i=this._offsets.length;i--;){this._activeTarget!==this._targets[i]&&t>=this._offsets[i]&&(void 0===this._offsets[i+1]||t<this._offsets[i+1])&&this._activate(this._targets[i])}}},e._activate=function(t){this._activeTarget=t,this._clear();var e=this._selector.split(",");e=e.map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'});var n=qe(e.join(","));n.hasClass(Xe)?(n.closest(Ze.DROPDOWN).find(Ze.DROPDOWN_TOGGLE).addClass(Je),n.addClass(Je)):(n.addClass(Je),n.parents(Ze.NAV_LIST_GROUP).prev(Ze.NAV_LINKS+", "+Ze.LIST_ITEMS).addClass(Je),n.parents(Ze.NAV_LIST_GROUP).prev(Ze.NAV_ITEMS).children(Ze.NAV_LINKS).addClass(Je)),qe(this._scrollElement).trigger(Ye.ACTIVATE,{relatedTarget:t})},e._clear=function(){qe(this._selector).filter(Ze.ACTIVE).removeClass(Je)},t._jQueryInterface=function(e){return this.each(function(){var n=qe(this).data(ze);if(n||(n=new t(this,"object"==typeof e&&e),qe(this).data(ze,n)),"string"==typeof e){if(void 0===n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return Qe}}]),t}(),qe(window).on(Ye.LOAD_DATA_API,function(){for(var t=qe.makeArray(qe(Ze.DATA_SPY)),e=t.length;e--;){var n=qe(t[e]);nn._jQueryInterface.call(n,n.data())}}),qe.fn[Ue]=nn._jQueryInterface,qe.fn[Ue].Constructor=nn,qe.fn[Ue].noConflict=function(){return qe.fn[Ue]=Ke,nn._jQueryInterface},nn),Nn=(an="."+(on="bs.tab"),sn=(rn=e).fn.tab,un={HIDE:"hide"+an,HIDDEN:"hidden"+an,SHOW:"show"+an,SHOWN:"shown"+an,CLICK_DATA_API:"click.bs.tab.data-api"},cn="dropdown-menu",ln="active",fn="disabled",pn="fade",dn="show",hn=".dropdown",vn=".nav, .list-group",gn=".active",mn="> li > .active",yn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',_n=".dropdown-toggle",bn="> .dropdown-menu .active",wn=function(){function t(t){this._element=t}var e=t.prototype;return e.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&rn(this._element).hasClass(ln)||rn(this._element).hasClass(fn))){var e,n,r=rn(this._element).closest(vn)[0],i=xn.getSelectorFromElement(this._element);if(r){var o="UL"===r.nodeName?mn:gn;n=(n=rn.makeArray(rn(r).find(o)))[n.length-1]}var a=rn.Event(un.HIDE,{relatedTarget:this._element}),s=rn.Event(un.SHOW,{relatedTarget:n});if(n&&rn(n).trigger(a),rn(this._element).trigger(s),!s.isDefaultPrevented()&&!a.isDefaultPrevented()){i&&(e=rn(i)[0]),this._activate(this._element,r);var u=function(){var e=rn.Event(un.HIDDEN,{relatedTarget:t._element}),r=rn.Event(un.SHOWN,{relatedTarget:n});rn(n).trigger(e),rn(t._element).trigger(r)};e?this._activate(e,e.parentNode,u):u()}}},e.dispose=function(){rn.removeData(this._element,on),this._element=null},e._activate=function(t,e,n){var r=this,i=("UL"===e.nodeName?rn(e).find(mn):rn(e).children(gn))[0],o=n&&xn.supportsTransitionEnd()&&i&&rn(i).hasClass(pn),a=function(){return r._transitionComplete(t,i,n)};i&&o?rn(i).one(xn.TRANSITION_END,a).emulateTransitionEnd(150):a()},e._transitionComplete=function(t,e,n){if(e){rn(e).removeClass(dn+" "+ln);var r=rn(e.parentNode).find(bn)[0];r&&rn(r).removeClass(ln),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(rn(t).addClass(ln),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),xn.reflow(t),rn(t).addClass(dn),t.parentNode&&rn(t.parentNode).hasClass(cn)){var i=rn(t).closest(hn)[0];i&&rn(i).find(_n).addClass(ln),t.setAttribute("aria-expanded",!0)}n&&n()},t._jQueryInterface=function(e){return this.each(function(){var n=rn(this),r=n.data(on);if(r||(r=new t(this),n.data(on,r)),"string"==typeof e){if(void 0===r[e])throw new TypeError('No method named "'+e+'"');r[e]()}})},i(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),rn(document).on(un.CLICK_DATA_API,yn,function(t){t.preventDefault(),wn._jQueryInterface.call(rn(this),"show")}),rn.fn.tab=wn._jQueryInterface,rn.fn.tab.Constructor=wn,rn.fn.tab.noConflict=function(){return rn.fn.tab=sn,wn._jQueryInterface},wn);!function(t){if(void 0===t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=xn,t.Alert=Cn,t.Button=Tn,t.Carousel=En,t.Collapse=An,t.Dropdown=Sn,t.Modal=kn,t.Popover=Dn,t.Scrollspy=In,t.Tab=Nn,t.Tooltip=On,Object.defineProperty(t,"__esModule",{value:!0})})(e,n(4),n(3))},function(t,e,n){t.exports=n(18)},function(t,e,n){"use strict";var r=n(0),i=n(5),o=n(20),a=n(2);function s(t){var e=new o(t),n=i(o.prototype.request,e);return r.extend(n,o.prototype,e),r.extend(n,e),n}var u=s(a);u.Axios=o,u.create=function(t){return s(r.merge(a,t))},u.Cancel=n(10),u.CancelToken=n(34),u.isCancel=n(9),u.all=function(t){return Promise.all(t)},u.spread=n(35),t.exports=u,t.exports.default=u},function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}t.exports=function(t){return null!=t&&(n(t)||"function"==typeof(e=t).readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))||!!t._isBuffer);var e}},function(t,e,n){"use strict";var r=n(2),i=n(0),o=n(29),a=n(30);function s(t){this.defaults=t,this.interceptors={request:new o,response:new o}}s.prototype.request=function(t){"string"==typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),(t=i.merge(r,this.defaults,{method:"get"},t)).method=t.method.toLowerCase();var e=[a,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},i.forEach(["delete","get","head","options"],function(t){s.prototype[t]=function(e,n){return this.request(i.merge(n||{},{method:t,url:e}))}}),i.forEach(["post","put","patch"],function(t){s.prototype[t]=function(e,n,r){return this.request(i.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=s},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},function(t,e,n){"use strict";var r=n(8);t.exports=function(t,e,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},function(t,e,n){"use strict";t.exports=function(t,e,n,r,i){return t.config=e,n&&(t.code=n),t.request=r,t.response=i,t}},function(t,e,n){"use strict";var r=n(0);function i(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var o;if(n)o=n(e);else if(r.isURLSearchParams(e))o=e.toString();else{var a=[];r.forEach(e,function(t,e){null!==t&&void 0!==t&&(r.isArray(t)&&(e+="[]"),r.isArray(t)||(t=[t]),r.forEach(t,function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),a.push(i(e)+"="+i(t))}))}),o=a.join("&")}return o&&(t+=(-1===t.indexOf("?")?"?":"&")+o),t}},function(t,e,n){"use strict";var r=n(0),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,o,a={};return t?(r.forEach(t.split("\n"),function(t){if(o=t.indexOf(":"),e=r.trim(t.substr(0,o)).toLowerCase(),n=r.trim(t.substr(o+1)),e){if(a[e]&&i.indexOf(e)>=0)return;a[e]="set-cookie"===e?(a[e]?a[e]:[]).concat([n]):a[e]?a[e]+", "+n:n}}),a):a}},function(t,e,n){"use strict";var r=n(0);t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=i(window.location.href),function(e){var n=r.isString(e)?i(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},function(t,e,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function i(){this.message="String contains an invalid character"}i.prototype=new Error,i.prototype.code=5,i.prototype.name="InvalidCharacterError",t.exports=function(t){for(var e,n,o=String(t),a="",s=0,u=r;o.charAt(0|s)||(u="=",s%1);a+=u.charAt(63&e>>8-s%1*8)){if((n=o.charCodeAt(s+=.75))>255)throw new i;e=e<<8|n}return a}},function(t,e,n){"use strict";var r=n(0);t.exports=r.isStandardBrowserEnv()?{write:function(t,e,n,i,o,a){var s=[];s.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(i)&&s.push("path="+i),r.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(t,e,n){"use strict";var r=n(0);function i(){this.handlers=[]}i.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},i.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},i.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=i},function(t,e,n){"use strict";var r=n(0),i=n(31),o=n(9),a=n(2),s=n(32),u=n(33);function c(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return c(t),t.baseURL&&!s(t.url)&&(t.url=u(t.baseURL,t.url)),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||a.adapter)(t).then(function(e){return c(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return o(e)||(c(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},function(t,e,n){"use strict";var r=n(10);function i(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new r(t),e(n.reason))})}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var t;return{token:new i(function(e){t=e}),cancel:t}},t.exports=i},function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},function(t,e,n){"use strict";(function(e,n){var r=Object.freeze({});function i(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function a(t){return!0===t}function s(t){return"string"==typeof t||"number"==typeof t||"symbol"==typeof t||"boolean"==typeof t}function u(t){return null!==t&&"object"==typeof t}var c=Object.prototype.toString;function l(t){return"[object Object]"===c.call(t)}function f(t){return"[object RegExp]"===c.call(t)}function p(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function d(t){return null==t?"":"object"==typeof t?JSON.stringify(t,null,2):String(t)}function h(t){var e=parseFloat(t);return isNaN(e)?t:e}function v(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}var g=v("slot,component",!0),m=v("key,ref,slot,slot-scope,is");function y(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function b(t,e){return _.call(t,e)}function w(t){var e=Object.create(null);return function(n){return e[n]||(e[n]=t(n))}}var x=/-(\w)/g,C=w(function(t){return t.replace(x,function(t,e){return e?e.toUpperCase():""})}),T=w(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),E=/\B([A-Z])/g,A=w(function(t){return t.replace(E,"-$1").toLowerCase()});function S(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function k(t,e){e=e||0;for(var n=t.length-e,r=new Array(n);n--;)r[n]=t[n+e];return r}function O(t,e){for(var n in e)t[n]=e[n];return t}function D(t){for(var e={},n=0;n<t.length;n++)t[n]&&O(e,t[n]);return e}function I(t,e,n){}var N=function(t,e,n){return!1},j=function(t){return t};function L(t,e){if(t===e)return!0;var n=u(t),r=u(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every(function(t,n){return L(t,e[n])});if(i||o)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return L(t[n],e[n])})}catch(t){return!1}}function $(t,e){for(var n=0;n<t.length;n++)if(L(t[n],e))return n;return-1}function R(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var P="data-server-rendered",M=["component","directive","filter"],F=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured"],H={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:N,isReservedAttr:N,isUnknownElement:N,getTagNamespace:I,parsePlatformTagName:j,mustUseProp:N,_lifecycleHooks:F};function B(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function W(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var q=/[^\w.$]/;var U,z="__proto__"in{},V="undefined"!=typeof window,K="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,Q=K&&WXEnvironment.platform.toLowerCase(),G=V&&window.navigator.userAgent.toLowerCase(),Y=G&&/msie|trident/.test(G),X=G&&G.indexOf("msie 9.0")>0,J=G&&G.indexOf("edge/")>0,Z=G&&G.indexOf("android")>0||"android"===Q,tt=G&&/iphone|ipad|ipod|ios/.test(G)||"ios"===Q,et=(G&&/chrome\/\d+/.test(G),{}.watch),nt=!1;if(V)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){nt=!0}}),window.addEventListener("test-passive",null,rt)}catch(t){}var it=function(){return void 0===U&&(U=!V&&void 0!==e&&"server"===e.process.env.VUE_ENV),U},ot=V&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"==typeof t&&/native code/.test(t.toString())}var st,ut="undefined"!=typeof Symbol&&at(Symbol)&&"undefined"!=typeof Reflect&&at(Reflect.ownKeys);st="undefined"!=typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=I,lt=0,ft=function(){this.id=lt++,this.subs=[]};ft.prototype.addSub=function(t){this.subs.push(t)},ft.prototype.removeSub=function(t){y(this.subs,t)},ft.prototype.depend=function(){ft.target&&ft.target.addDep(this)},ft.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},ft.target=null;var pt=[];var dt=function(t,e,n,r,i,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},ht={child:{configurable:!0}};ht.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,ht);var vt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function gt(t){return new dt(void 0,void 0,void 0,String(t))}function mt(t,e){var n=t.componentOptions,r=new dt(t.tag,t.data,t.children,t.text,t.elm,t.context,n,t.asyncFactory);return r.ns=t.ns,r.isStatic=t.isStatic,r.key=t.key,r.isComment=t.isComment,r.fnContext=t.fnContext,r.fnOptions=t.fnOptions,r.fnScopeId=t.fnScopeId,r.isCloned=!0,e&&(t.children&&(r.children=yt(t.children,!0)),n&&n.children&&(n.children=yt(n.children,!0))),r}function yt(t,e){for(var n=t.length,r=new Array(n),i=0;i<n;i++)r[i]=mt(t[i],e);return r}var _t=Array.prototype,bt=Object.create(_t);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=_t[t];W(bt,t,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var i,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&a.observeArray(i),a.dep.notify(),o})});var wt=Object.getOwnPropertyNames(bt),xt={shouldConvert:!0},Ct=function(t){(this.value=t,this.dep=new ft,this.vmCount=0,W(t,"__ob__",this),Array.isArray(t))?((z?Tt:Et)(t,bt,wt),this.observeArray(t)):this.walk(t)};function Tt(t,e,n){t.__proto__=e}function Et(t,e,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];W(t,o,e[o])}}function At(t,e){var n;if(u(t)&&!(t instanceof dt))return b(t,"__ob__")&&t.__ob__ instanceof Ct?n=t.__ob__:xt.shouldConvert&&!it()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Ct(t)),e&&n&&n.vmCount++,n}function St(t,e,n,r,i){var o=new ft,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,u=a&&a.set,c=!i&&At(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ft.target&&(o.depend(),c&&(c.dep.depend(),Array.isArray(e)&&function t(e){for(var n=void 0,r=0,i=e.length;r<i;r++)(n=e[r])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&t(n)}(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!=e&&r!=r||(u?u.call(t,e):n=e,c=!i&&At(e),o.notify())}})}}function kt(t,e,n){if(Array.isArray(t)&&p(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(St(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Ot(t,e){if(Array.isArray(t)&&p(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}Ct.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)St(t,e[n],t[e[n]])},Ct.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)At(t[e])};var Dt=H.optionMergeStrategies;function It(t,e){if(!e)return t;for(var n,r,i,o=Object.keys(e),a=0;a<o.length;a++)r=t[n=o[a]],i=e[n],b(t,n)?l(r)&&l(i)&&It(r,i):kt(t,n,i);return t}function Nt(t,e,n){return n?function(){var r="function"==typeof e?e.call(n,n):e,i="function"==typeof t?t.call(n,n):t;return r?It(r,i):i}:e?t?function(){return It("function"==typeof e?e.call(this,this):e,"function"==typeof t?t.call(this,this):t)}:e:t}function jt(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function Lt(t,e,n,r){var i=Object.create(t||null);return e?O(i,e):i}Dt.data=function(t,e,n){return n?Nt(t,e,n):e&&"function"!=typeof e?t:Nt(t,e)},F.forEach(function(t){Dt[t]=jt}),M.forEach(function(t){Dt[t+"s"]=Lt}),Dt.watch=function(t,e,n,r){if(t===et&&(t=void 0),e===et&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};O(i,t);for(var o in e){var a=i[o],s=e[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},Dt.props=Dt.methods=Dt.inject=Dt.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return O(i,t),e&&O(i,e),i},Dt.provide=Nt;var $t=function(t,e){return void 0===e?t:e};function Rt(t,e,n){"function"==typeof e&&(e=e.options),function(t,e){var n=t.props;if(n){var r,i,o={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(i=n[r])&&(o[C(i)]={type:null});else if(l(n))for(var a in n)i=n[a],o[C(a)]=l(i)?i:{type:i};t.props=o}}(e),function(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(l(n))for(var o in n){var a=n[o];r[o]=l(a)?O({from:o},a):{from:a}}}}(e),function(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"==typeof r&&(e[n]={bind:r,update:r})}}(e);var r=e.extends;if(r&&(t=Rt(t,r,n)),e.mixins)for(var i=0,o=e.mixins.length;i<o;i++)t=Rt(t,e.mixins[i],n);var a,s={};for(a in t)u(a);for(a in e)b(t,a)||u(a);function u(r){var i=Dt[r]||$t;s[r]=i(t[r],e[r],n,r)}return s}function Pt(t,e,n,r){if("string"==typeof n){var i=t[e];if(b(i,n))return i[n];var o=C(n);if(b(i,o))return i[o];var a=T(o);return b(i,a)?i[a]:i[n]||i[o]||i[a]}}function Mt(t,e,n,r){var i=e[t],o=!b(n,t),a=n[t];if(Ht(Boolean,i.type)&&(o&&!b(i,"default")?a=!1:Ht(String,i.type)||""!==a&&a!==A(t)||(a=!0)),void 0===a){a=function(t,e,n){if(!b(e,"default"))return;var r=e.default;0;if(t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n])return t._props[n];return"function"==typeof r&&"Function"!==Ft(e.type)?r.call(t):r}(r,i,t);var s=xt.shouldConvert;xt.shouldConvert=!0,At(a),xt.shouldConvert=s}return a}function Ft(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Ht(t,e){if(!Array.isArray(e))return Ft(e)===Ft(t);for(var n=0,r=e.length;n<r;n++)if(Ft(e[n])===Ft(t))return!0;return!1}function Bt(t,e,n){if(e)for(var r=e;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{if(!1===i[o].call(r,t,e,n))return}catch(t){Wt(t,r,"errorCaptured hook")}}Wt(t,e,n)}function Wt(t,e,n){if(H.errorHandler)try{return H.errorHandler.call(null,t,e,n)}catch(t){qt(t,null,"config.errorHandler")}qt(t,e,n)}function qt(t,e,n){if(!V&&!K||"undefined"==typeof console)throw t;console.error(t)}var Ut,zt,Vt=[],Kt=!1;function Qt(){Kt=!1;var t=Vt.slice(0);Vt.length=0;for(var e=0;e<t.length;e++)t[e]()}var Gt=!1;if(void 0!==n&&at(n))zt=function(){n(Qt)};else if("undefined"==typeof MessageChannel||!at(MessageChannel)&&"[object MessageChannelConstructor]"!==MessageChannel.toString())zt=function(){setTimeout(Qt,0)};else{var Yt=new MessageChannel,Xt=Yt.port2;Yt.port1.onmessage=Qt,zt=function(){Xt.postMessage(1)}}if("undefined"!=typeof Promise&&at(Promise)){var Jt=Promise.resolve();Ut=function(){Jt.then(Qt),tt&&setTimeout(I)}}else Ut=zt;function Zt(t,e){var n;if(Vt.push(function(){if(t)try{t.call(e)}catch(t){Bt(t,e,"nextTick")}else n&&n(e)}),Kt||(Kt=!0,Gt?zt():Ut()),!t&&"undefined"!=typeof Promise)return new Promise(function(t){n=t})}var te=new st;function ee(t){!function t(e,n){var r,i;var o=Array.isArray(e);if(!o&&!u(e)||Object.isFrozen(e))return;if(e.__ob__){var a=e.__ob__.dep.id;if(n.has(a))return;n.add(a)}if(o)for(r=e.length;r--;)t(e[r],n);else for(i=Object.keys(e),r=i.length;r--;)t(e[i[r]],n)}(t,te),te.clear()}var ne,re=w(function(t){var e="&"===t.charAt(0),n="~"===(t=e?t.slice(1):t).charAt(0),r="!"===(t=n?t.slice(1):t).charAt(0);return{name:t=r?t.slice(1):t,once:n,capture:r,passive:e}});function ie(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),i=0;i<r.length;i++)r[i].apply(null,t)}return e.fns=t,e}function oe(t,e,n,r,o){var a,s,u,c;for(a in t)s=t[a],u=e[a],c=re(a),i(s)||(i(u)?(i(s.fns)&&(s=t[a]=ie(s)),n(c.name,s,c.once,c.capture,c.passive,c.params)):s!==u&&(u.fns=s,t[a]=u));for(a in e)i(t[a])&&r((c=re(a)).name,e[a],c.capture)}function ae(t,e,n){var r;t instanceof dt&&(t=t.data.hook||(t.data.hook={}));var s=t[e];function u(){n.apply(this,arguments),y(r.fns,u)}i(s)?r=ie([u]):o(s.fns)&&a(s.merged)?(r=s).fns.push(u):r=ie([s,u]),r.merged=!0,t[e]=r}function se(t,e,n,r,i){if(o(e)){if(b(e,n))return t[n]=e[n],i||delete e[n],!0;if(b(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function ue(t){return s(t)?[gt(t)]:Array.isArray(t)?function t(e,n){var r=[];var u,c,l,f;for(u=0;u<e.length;u++)i(c=e[u])||"boolean"==typeof c||(l=r.length-1,f=r[l],Array.isArray(c)?c.length>0&&(ce((c=t(c,(n||"")+"_"+u))[0])&&ce(f)&&(r[l]=gt(f.text+c[0].text),c.shift()),r.push.apply(r,c)):s(c)?ce(f)?r[l]=gt(f.text+c):""!==c&&r.push(gt(c)):ce(c)&&ce(f)?r[l]=gt(f.text+c.text):(a(e._isVList)&&o(c.tag)&&i(c.key)&&o(n)&&(c.key="__vlist"+n+"_"+u+"__"),r.push(c)));return r}(t):void 0}function ce(t){return o(t)&&o(t.text)&&!1===t.isComment}function le(t,e){return(t.__esModule||ut&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?e.extend(t):t}function fe(t){return t.isComment&&t.asyncFactory}function pe(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||fe(n)))return n}}function de(t,e,n){n?ne.$once(t,e):ne.$on(t,e)}function he(t,e){ne.$off(t,e)}function ve(t,e,n){ne=t,oe(e,n||{},de,he),ne=void 0}function ge(t,e){var n={};if(!t)return n;for(var r=0,i=t.length;r<i;r++){var o=t[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==e&&o.fnContext!==e||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=a.slot,u=n[s]||(n[s]=[]);"template"===o.tag?u.push.apply(u,o.children||[]):u.push(o)}}for(var c in n)n[c].every(me)&&delete n[c];return n}function me(t){return t.isComment&&!t.asyncFactory||" "===t.text}function ye(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?ye(t[n],e):e[t[n].key]=t[n].fn;return e}var _e=null;function be(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function we(t,e){if(e){if(t._directInactive=!1,be(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)we(t.$children[n]);xe(t,"activated")}}function xe(t,e){var n=t.$options[e];if(n)for(var r=0,i=n.length;r<i;r++)try{n[r].call(t)}catch(n){Bt(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}var Ce=[],Te=[],Ee={},Ae=!1,Se=!1,ke=0;function Oe(){var t,e;for(Se=!0,Ce.sort(function(t,e){return t.id-e.id}),ke=0;ke<Ce.length;ke++)e=(t=Ce[ke]).id,Ee[e]=null,t.run();var n=Te.slice(),r=Ce.slice();ke=Ce.length=Te.length=0,Ee={},Ae=Se=!1,function(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,we(t[e],!0)}(n),function(t){var e=t.length;for(;e--;){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&xe(r,"updated")}}(r),ot&&H.devtools&&ot.emit("flush")}var De=0,Ie=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++De,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"==typeof e?this.getter=e:(this.getter=function(t){if(!q.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Ie.prototype.get=function(){var t,e;t=this,ft.target&&pt.push(ft.target),ft.target=t;var n=this.vm;try{e=this.getter.call(n,n)}catch(t){if(!this.user)throw t;Bt(t,n,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ee(e),ft.target=pt.pop(),this.cleanupDeps()}return e},Ie.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Ie.prototype.cleanupDeps=function(){for(var t=this.deps.length;t--;){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Ie.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(t){var e=t.id;if(null==Ee[e]){if(Ee[e]=!0,Se){for(var n=Ce.length-1;n>ke&&Ce[n].id>t.id;)n--;Ce.splice(n+1,0,t)}else Ce.push(t);Ae||(Ae=!0,Zt(Oe))}}(this)},Ie.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(t){Bt(t,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Ie.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Ie.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},Ie.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1}};var Ne={enumerable:!0,configurable:!0,get:I,set:I};function je(t,e,n){Ne.get=function(){return this[e][n]},Ne.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Ne)}function Le(t){t._watchers=[];var e=t.$options;e.props&&function(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;xt.shouldConvert=o;var a=function(o){i.push(o);var a=Mt(o,e,n,t);St(r,o,a),o in t||je(t,"_props",o)};for(var s in e)a(s);xt.shouldConvert=!0}(t,e.props),e.methods&&function(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?I:S(e[n],t)}(t,e.methods),e.data?function(t){var e=t.$options.data;l(e=t._data="function"==typeof e?function(t,e){try{return t.call(e,e)}catch(t){return Bt(t,e,"data()"),{}}}(e,t):e||{})||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);for(;i--;){var o=n[i];0,r&&b(r,o)||B(o)||je(t,"_data",o)}At(e,!0)}(t):At(t._data={},!0),e.computed&&function(t,e){var n=t._computedWatchers=Object.create(null),r=it();for(var i in e){var o=e[i],a="function"==typeof o?o:o.get;0,r||(n[i]=new Ie(t,a||I,I,$e)),i in t||Re(t,i,o)}}(t,e.computed),e.watch&&e.watch!==et&&function(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)Me(t,n,r[i]);else Me(t,n,r)}}(t,e.watch)}var $e={lazy:!0};function Re(t,e,n){var r=!it();"function"==typeof n?(Ne.get=r?Pe(e):n,Ne.set=I):(Ne.get=n.get?r&&!1!==n.cache?Pe(e):n.get:I,Ne.set=n.set?n.set:I),Object.defineProperty(t,e,Ne)}function Pe(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ft.target&&e.depend(),e.value}}function Me(t,e,n,r){return l(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=t[n]),t.$watch(e,n,r)}function Fe(t,e){if(t){for(var n=Object.create(null),r=ut?Reflect.ownKeys(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}):Object.keys(t),i=0;i<r.length;i++){for(var o=r[i],a=t[o].from,s=e;s;){if(s._provided&&a in s._provided){n[o]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[o]){var u=t[o].default;n[o]="function"==typeof u?u.call(e):u}else 0}return n}}function He(t,e){var n,r,i,a,s;if(Array.isArray(t)||"string"==typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if("number"==typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))for(a=Object.keys(t),n=new Array(a.length),r=0,i=a.length;r<i;r++)s=a[r],n[r]=e(t[s],s,r);return o(n)&&(n._isVList=!0),n}function Be(t,e,n,r){var i,o=this.$scopedSlots[t];if(o)n=n||{},r&&(n=O(O({},r),n)),i=o(n)||e;else{var a=this.$slots[t];a&&(a._rendered=!0),i=a||e}var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function We(t){return Pt(this.$options,"filters",t)||j}function qe(t,e,n,r){var i=H.keyCodes[e]||n;return i?Array.isArray(i)?-1===i.indexOf(t):i!==t:r?A(r)!==e:void 0}function Ue(t,e,n,r,i){if(n)if(u(n)){var o;Array.isArray(n)&&(n=D(n));var a=function(a){if("class"===a||"style"===a||m(a))o=t;else{var s=t.attrs&&t.attrs.type;o=r||H.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}a in o||(o[a]=n[a],i&&((t.on||(t.on={}))["update:"+a]=function(t){n[a]=t}))};for(var s in n)a(s)}else;return t}function ze(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?Array.isArray(r)?yt(r):mt(r):(Ke(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),"__static__"+t,!1),r)}function Ve(t,e,n){return Ke(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ke(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!=typeof t[r]&&Qe(t[r],e+"_"+r,n);else Qe(t,e,n)}function Qe(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ge(t,e){if(e)if(l(e)){var n=t.on=t.on?O({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else;return t}function Ye(t){t._o=Ve,t._n=h,t._s=d,t._l=He,t._t=Be,t._q=L,t._i=$,t._m=ze,t._f=We,t._k=qe,t._b=Ue,t._v=gt,t._e=vt,t._u=ye,t._g=Ge}function Xe(t,e,n,i,o){var s=o.options;this.data=t,this.props=e,this.children=n,this.parent=i,this.listeners=t.on||r,this.injections=Fe(s.inject,i),this.slots=function(){return ge(n,i)};var u=Object.create(i),c=a(s._compiled),l=!c;c&&(this.$options=s,this.$slots=this.slots(),this.$scopedSlots=t.scopedSlots||r),s._scopeId?this._c=function(t,e,n,r){var o=an(u,t,e,n,r,l);return o&&(o.fnScopeId=s._scopeId,o.fnContext=i),o}:this._c=function(t,e,n,r){return an(u,t,e,n,r,l)}}function Je(t,e){for(var n in e)t[C(n)]=e[n]}Ye(Xe.prototype);var Ze={init:function(t,e,n,r){if(!t.componentInstance||t.componentInstance._isDestroyed)(t.componentInstance=function(t,e,n,r){var i={_isComponent:!0,parent:e,_parentVnode:t,_parentElm:n||null,_refElm:r||null},a=t.data.inlineTemplate;o(a)&&(i.render=a.render,i.staticRenderFns=a.staticRenderFns);return new t.componentOptions.Ctor(i)}(t,_e,n,r)).$mount(e?t.elm:void 0,e);else if(t.data.keepAlive){var i=t;Ze.prepatch(i,i)}},prepatch:function(t,e){var n=e.componentOptions;!function(t,e,n,i,o){var a=!!(o||t.$options._renderChildren||i.data.scopedSlots||t.$scopedSlots!==r);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=o,t.$attrs=i.data&&i.data.attrs||r,t.$listeners=n||r,e&&t.$options.props){xt.shouldConvert=!1;for(var s=t._props,u=t.$options._propKeys||[],c=0;c<u.length;c++){var l=u[c];s[l]=Mt(l,t.$options.props,e,t)}xt.shouldConvert=!0,t.$options.propsData=e}if(n){var f=t.$options._parentListeners;t.$options._parentListeners=n,ve(t,n,f)}a&&(t.$slots=ge(o,i.context),t.$forceUpdate())}(e.componentInstance=t.componentInstance,n.propsData,n.listeners,e,n.children)},insert:function(t){var e,n=t.context,r=t.componentInstance;r._isMounted||(r._isMounted=!0,xe(r,"mounted")),t.data.keepAlive&&(n._isMounted?((e=r)._inactive=!1,Te.push(e)):we(r,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?function t(e,n){if(!(n&&(e._directInactive=!0,be(e))||e._inactive)){e._inactive=!0;for(var r=0;r<e.$children.length;r++)t(e.$children[r]);xe(e,"deactivated")}}(e,!0):e.$destroy())}},tn=Object.keys(Ze);function en(t,e,n,s,c){if(!i(t)){var l=n.$options._base;if(u(t)&&(t=l.extend(t)),"function"==typeof t){var f,p,d,h,v,g,m;if(i(t.cid)&&void 0===(t=function(t,e,n){if(a(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;if(a(t.loading)&&o(t.loadingComp))return t.loadingComp;if(!o(t.contexts)){var r=t.contexts=[n],s=!0,c=function(){for(var t=0,e=r.length;t<e;t++)r[t].$forceUpdate()},l=R(function(n){t.resolved=le(n,e),s||c()}),f=R(function(e){o(t.errorComp)&&(t.error=!0,c())}),p=t(l,f);return u(p)&&("function"==typeof p.then?i(t.resolved)&&p.then(l,f):o(p.component)&&"function"==typeof p.component.then&&(p.component.then(l,f),o(p.error)&&(t.errorComp=le(p.error,e)),o(p.loading)&&(t.loadingComp=le(p.loading,e),0===p.delay?t.loading=!0:setTimeout(function(){i(t.resolved)&&i(t.error)&&(t.loading=!0,c())},p.delay||200)),o(p.timeout)&&setTimeout(function(){i(t.resolved)&&f(null)},p.timeout))),s=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(n)}(f=t,l,n)))return p=f,d=e,h=n,v=s,g=c,(m=vt()).asyncFactory=p,m.asyncMeta={data:d,context:h,children:v,tag:g},m;e=e||{},vn(t),o(e.model)&&function(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var i=e.on||(e.on={});o(i[r])?i[r]=[e.model.callback].concat(i[r]):i[r]=e.model.callback}(t.options,e);var y=function(t,e,n){var r=e.options.props;if(!i(r)){var a={},s=t.attrs,u=t.props;if(o(s)||o(u))for(var c in r){var l=A(c);se(a,u,c,l,!0)||se(a,s,c,l,!1)}return a}}(e,t);if(a(t.options.functional))return function(t,e,n,i,a){var s=t.options,u={},c=s.props;if(o(c))for(var l in c)u[l]=Mt(l,c,e||r);else o(n.attrs)&&Je(u,n.attrs),o(n.props)&&Je(u,n.props);var f=new Xe(n,u,a,i,t),p=s.render.call(null,f._c,f);return p instanceof dt&&(p.fnContext=i,p.fnOptions=s,n.slot&&((p.data||(p.data={})).slot=n.slot)),p}(t,y,e,n,s);var _=e.on;if(e.on=e.nativeOn,a(t.options.abstract)){var b=e.slot;e={},b&&(e.slot=b)}!function(t){t.hook||(t.hook={});for(var e=0;e<tn.length;e++){var n=tn[e],r=t.hook[n],i=Ze[n];t.hook[n]=r?nn(i,r):i}}(e);var w=t.options.name||c;return new dt("vue-component-"+t.cid+(w?"-"+w:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:y,listeners:_,tag:c,children:s},f)}}}function nn(t,e){return function(n,r,i,o){t(n,r,i,o),e(n,r,i,o)}}var rn=1,on=2;function an(t,e,n,r,u,c){return(Array.isArray(n)||s(n))&&(u=r,r=n,n=void 0),a(c)&&(u=on),function(t,e,n,r,s){if(o(n)&&o(n.__ob__))return vt();o(n)&&o(n.is)&&(e=n.is);if(!e)return vt();0;Array.isArray(r)&&"function"==typeof r[0]&&((n=n||{}).scopedSlots={default:r[0]},r.length=0);s===on?r=ue(r):s===rn&&(r=function(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}(r));var u,c;if("string"==typeof e){var l;c=t.$vnode&&t.$vnode.ns||H.getTagNamespace(e),u=H.isReservedTag(e)?new dt(H.parsePlatformTagName(e),n,r,void 0,void 0,t):o(l=Pt(t.$options,"components",e))?en(l,n,t,r,e):new dt(e,n,r,void 0,void 0,t)}else u=en(e,n,t,r);return o(u)?(c&&function t(e,n,r){e.ns=n;"foreignObject"===e.tag&&(n=void 0,r=!0);if(o(e.children))for(var s=0,u=e.children.length;s<u;s++){var c=e.children[s];o(c.tag)&&(i(c.ns)||a(r))&&t(c,n,r)}}(u,c),u):vt()}(t,e,n,r,u)}var sn,un,cn,ln,fn,pn,dn,hn=0;function vn(t){var e=t.options;if(t.super){var n=vn(t.super);if(n!==t.superOptions){t.superOptions=n;var r=function(t){var e,n=t.options,r=t.extendOptions,i=t.sealedOptions;for(var o in n)n[o]!==i[o]&&(e||(e={}),e[o]=gn(n[o],r[o],i[o]));return e}(t);r&&O(t.extendOptions,r),(e=t.options=Rt(n,t.extendOptions)).name&&(e.components[e.name]=t)}}return e}function gn(t,e,n){if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var i=0;i<t.length;i++)(e.indexOf(t[i])>=0||n.indexOf(t[i])<0)&&r.push(t[i]);return r}return t}function mn(t){this._init(t)}function yn(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=t.name||n.options.name;var a=function(t){this._init(t)};return(a.prototype=Object.create(n.prototype)).constructor=a,a.cid=e++,a.options=Rt(n.options,t),a.super=n,a.options.props&&function(t){var e=t.options.props;for(var n in e)je(t.prototype,"_props",n)}(a),a.options.computed&&function(t){var e=t.options.computed;for(var n in e)Re(t.prototype,n,e[n])}(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,M.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=O({},a.options),i[r]=a,a}}function _n(t){return t&&(t.Ctor.options.name||t.tag)}function bn(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"==typeof t?t.split(",").indexOf(e)>-1:!!f(t)&&t.test(e)}function wn(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var a=n[o];if(a){var s=_n(a.componentOptions);s&&!e(s)&&xn(n,o,r,i)}}}function xn(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,y(n,e)}mn.prototype._init=function(t){var e,n,i,o,a=this;a._uid=hn++,a._isVue=!0,t&&t._isComponent?function(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r,n._parentElm=e._parentElm,n._refElm=e._refElm;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}(a,t):a.$options=Rt(vn(a.constructor),t||{},a),a._renderProxy=a,a._self=a,function(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}(a),function(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&ve(t,e)}(a),function(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,i=n&&n.context;t.$slots=ge(e._renderChildren,i),t.$scopedSlots=r,t._c=function(e,n,r,i){return an(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return an(t,e,n,r,i,!0)};var o=n&&n.data;St(t,"$attrs",o&&o.attrs||r,0,!0),St(t,"$listeners",e._parentListeners||r,0,!0)}(a),xe(a,"beforeCreate"),(n=Fe((e=a).$options.inject,e))&&(xt.shouldConvert=!1,Object.keys(n).forEach(function(t){St(e,t,n[t])}),xt.shouldConvert=!0),Le(a),(o=(i=a).$options.provide)&&(i._provided="function"==typeof o?o.call(i):o),xe(a,"created"),a.$options.el&&a.$mount(a.$options.el)},sn=mn,un={get:function(){return this._data}},cn={get:function(){return this._props}},Object.defineProperty(sn.prototype,"$data",un),Object.defineProperty(sn.prototype,"$props",cn),sn.prototype.$set=kt,sn.prototype.$delete=Ot,sn.prototype.$watch=function(t,e,n){if(l(e))return Me(this,t,e,n);(n=n||{}).user=!0;var r=new Ie(this,t,e,n);return n.immediate&&e.call(this,r.value),function(){r.teardown()}},fn=/^hook:/,(ln=mn).prototype.$on=function(t,e){if(Array.isArray(t))for(var n=0,r=t.length;n<r;n++)this.$on(t[n],e);else(this._events[t]||(this._events[t]=[])).push(e),fn.test(t)&&(this._hasHookEvent=!0);return this},ln.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},ln.prototype.$off=function(t,e){if(!arguments.length)return this._events=Object.create(null),this;if(Array.isArray(t)){for(var n=0,r=t.length;n<r;n++)this.$off(t[n],e);return this}var i=this._events[t];if(!i)return this;if(!e)return this._events[t]=null,this;if(e)for(var o,a=i.length;a--;)if((o=i[a])===e||o.fn===e){i.splice(a,1);break}return this},ln.prototype.$emit=function(t){var e=this._events[t];if(e){e=e.length>1?k(e):e;for(var n=k(arguments,1),r=0,i=e.length;r<i;r++)try{e[r].apply(this,n)}catch(e){Bt(e,this,'event handler for "'+t+'"')}}return this},(pn=mn).prototype._update=function(t,e){var n=this;n._isMounted&&xe(n,"beforeUpdate");var r=n.$el,i=n._vnode,o=_e;_e=n,n._vnode=t,i?n.$el=n.__patch__(i,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),_e=o,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},pn.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},pn.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){xe(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||y(e.$children,t),t._watcher&&t._watcher.teardown();for(var n=t._watchers.length;n--;)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),xe(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}},Ye((dn=mn).prototype),dn.prototype.$nextTick=function(t){return Zt(t,this)},dn.prototype._render=function(){var t,e=this,n=e.$options,i=n.render,o=n._parentVnode;if(e._isMounted)for(var a in e.$slots){var s=e.$slots[a];(s._rendered||s[0]&&s[0].elm)&&(e.$slots[a]=yt(s,!0))}e.$scopedSlots=o&&o.data.scopedSlots||r,e.$vnode=o;try{t=i.call(e._renderProxy,e.$createElement)}catch(n){Bt(n,e,"render"),t=e._vnode}return t instanceof dt||(t=vt()),t.parent=o,t};var Cn,Tn,En,An=[String,RegExp,Array],Sn={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:An,exclude:An,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)xn(this.cache,t,this.keys)},watch:{include:function(t){wn(this,function(e){return bn(t,e)})},exclude:function(t){wn(this,function(e){return!bn(t,e)})}},render:function(){var t=this.$slots.default,e=pe(t),n=e&&e.componentOptions;if(n){var r=_n(n),i=this.include,o=this.exclude;if(i&&(!r||!bn(i,r))||o&&r&&bn(o,r))return e;var a=this.cache,s=this.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;a[u]?(e.componentInstance=a[u].componentInstance,y(s,u),s.push(u)):(a[u]=e,s.push(u),this.max&&s.length>parseInt(this.max)&&xn(a,s[0],s,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}}};Cn=mn,En={get:function(){return H}},Object.defineProperty(Cn,"config",En),Cn.util={warn:ct,extend:O,mergeOptions:Rt,defineReactive:St},Cn.set=kt,Cn.delete=Ot,Cn.nextTick=Zt,Cn.options=Object.create(null),M.forEach(function(t){Cn.options[t+"s"]=Object.create(null)}),Cn.options._base=Cn,O(Cn.options.components,Sn),Cn.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=k(arguments,1);return n.unshift(this),"function"==typeof t.install?t.install.apply(t,n):"function"==typeof t&&t.apply(null,n),e.push(t),this},Cn.mixin=function(t){return this.options=Rt(this.options,t),this},yn(Cn),Tn=Cn,M.forEach(function(t){Tn[t]=function(e,n){return n?("component"===t&&l(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}),Object.defineProperty(mn.prototype,"$isServer",{get:it}),Object.defineProperty(mn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),mn.version="2.5.13";var kn=v("style,class"),On=v("input,textarea,option,select,progress"),Dn=function(t,e,n){return"value"===n&&On(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},In=v("contenteditable,draggable,spellcheck"),Nn=v("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),jn="http://www.w3.org/1999/xlink",Ln=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},$n=function(t){return Ln(t)?t.slice(6,t.length):""},Rn=function(t){return null==t||!1===t};function Pn(t){for(var e=t.data,n=t,r=t;o(r.componentInstance);)(r=r.componentInstance._vnode)&&r.data&&(e=Mn(r.data,e));for(;o(n=n.parent);)n&&n.data&&(e=Mn(e,n.data));return function(t,e){if(o(t)||o(e))return Fn(t,Hn(e));return""}(e.staticClass,e.class)}function Mn(t,e){return{staticClass:Fn(t.staticClass,e.staticClass),class:o(t.class)?[t.class,e.class]:e.class}}function Fn(t,e){return t?e?t+" "+e:t:e||""}function Hn(t){return Array.isArray(t)?function(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=Hn(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}(t):u(t)?function(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}(t):"string"==typeof t?t:""}var Bn={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Wn=v("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),qn=v("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Un=function(t){return Wn(t)||qn(t)};function zn(t){return qn(t)?"svg":"math"===t?"math":void 0}var Vn=Object.create(null);var Kn=v("text,number,password,search,email,tel,url");function Qn(t){if("string"==typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}var Gn=Object.freeze({createElement:function(t,e){var n=document.createElement(t);return"select"!==t?n:(e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)},createElementNS:function(t,e){return document.createElementNS(Bn[t],e)},createTextNode:function(t){return document.createTextNode(t)},createComment:function(t){return document.createComment(t)},insertBefore:function(t,e,n){t.insertBefore(e,n)},removeChild:function(t,e){t.removeChild(e)},appendChild:function(t,e){t.appendChild(e)},parentNode:function(t){return t.parentNode},nextSibling:function(t){return t.nextSibling},tagName:function(t){return t.tagName},setTextContent:function(t,e){t.textContent=e},setAttribute:function(t,e,n){t.setAttribute(e,n)}}),Yn={create:function(t,e){Xn(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Xn(t,!0),Xn(e))},destroy:function(t){Xn(t,!0)}};function Xn(t,e){var n=t.data.ref;if(n){var r=t.context,i=t.componentInstance||t.elm,o=r.$refs;e?Array.isArray(o[n])?y(o[n],i):o[n]===i&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])?o[n].indexOf(i)<0&&o[n].push(i):o[n]=[i]:o[n]=i}}var Jn=new dt("",{},[]),Zn=["create","activate","update","remove","destroy"];function tr(t,e){return t.key===e.key&&(t.tag===e.tag&&t.isComment===e.isComment&&o(t.data)===o(e.data)&&function(t,e){if("input"!==t.tag)return!0;var n,r=o(n=t.data)&&o(n=n.attrs)&&n.type,i=o(n=e.data)&&o(n=n.attrs)&&n.type;return r===i||Kn(r)&&Kn(i)}(t,e)||a(t.isAsyncPlaceholder)&&t.asyncFactory===e.asyncFactory&&i(e.asyncFactory.error))}function er(t,e,n){var r,i,a={};for(r=e;r<=n;++r)o(i=t[r].key)&&(a[i]=r);return a}var nr={create:rr,update:rr,destroy:function(t){rr(t,Jn)}};function rr(t,e){(t.data.directives||e.data.directives)&&function(t,e){var n,r,i,o=t===Jn,a=e===Jn,s=or(t.data.directives,t.context),u=or(e.data.directives,e.context),c=[],l=[];for(n in u)r=s[n],i=u[n],r?(i.oldValue=r.value,ar(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(ar(i,"bind",e,t),i.def&&i.def.inserted&&c.push(i));if(c.length){var f=function(){for(var n=0;n<c.length;n++)ar(c[n],"inserted",e,t)};o?ae(e,"insert",f):f()}l.length&&ae(e,"postpatch",function(){for(var n=0;n<l.length;n++)ar(l[n],"componentUpdated",e,t)});if(!o)for(n in s)u[n]||ar(s[n],"unbind",t,t,a)}(t,e)}var ir=Object.create(null);function or(t,e){var n,r,i,o=Object.create(null);if(!t)return o;for(n=0;n<t.length;n++)(r=t[n]).modifiers||(r.modifiers=ir),o[(i=r,i.rawName||i.name+"."+Object.keys(i.modifiers||{}).join("."))]=r,r.def=Pt(e.$options,"directives",r.name);return o}function ar(t,e,n,r,i){var o=t.def&&t.def[e];if(o)try{o(n.elm,t,n,r,i)}catch(r){Bt(r,n.context,"directive "+t.name+" "+e+" hook")}}var sr=[Yn,nr];function ur(t,e){var n=e.componentOptions;if(!(o(n)&&!1===n.Ctor.options.inheritAttrs||i(t.data.attrs)&&i(e.data.attrs))){var r,a,s=e.elm,u=t.data.attrs||{},c=e.data.attrs||{};o(c.__ob__)&&(c=e.data.attrs=O({},c));for(r in c)a=c[r],u[r]!==a&&cr(s,r,a);(Y||J)&&c.value!==u.value&&cr(s,"value",c.value);for(r in u)i(c[r])&&(Ln(r)?s.removeAttributeNS(jn,$n(r)):In(r)||s.removeAttribute(r))}}function cr(t,e,n){if(Nn(e))Rn(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n));else if(In(e))t.setAttribute(e,Rn(n)||"false"===n?"false":"true");else if(Ln(e))Rn(n)?t.removeAttributeNS(jn,$n(e)):t.setAttributeNS(jn,e,n);else if(Rn(n))t.removeAttribute(e);else{if(Y&&!X&&"TEXTAREA"===t.tagName&&"placeholder"===e&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var lr={create:ur,update:ur};function fr(t,e){var n=e.elm,r=e.data,a=t.data;if(!(i(r.staticClass)&&i(r.class)&&(i(a)||i(a.staticClass)&&i(a.class)))){var s=Pn(e),u=n._transitionClasses;o(u)&&(s=Fn(s,Hn(u))),s!==n._prevClass&&(n.setAttribute("class",s),n._prevClass=s)}}var pr,dr,hr,vr,gr,mr,yr={create:fr,update:fr},_r=/[\w).+\-_$\]]/;function br(t){var e,n,r,i,o,a=!1,s=!1,u=!1,c=!1,l=0,f=0,p=0,d=0;for(r=0;r<t.length;r++)if(n=e,e=t.charCodeAt(r),a)39===e&&92!==n&&(a=!1);else if(s)34===e&&92!==n&&(s=!1);else if(u)96===e&&92!==n&&(u=!1);else if(c)47===e&&92!==n&&(c=!1);else if(124!==e||124===t.charCodeAt(r+1)||124===t.charCodeAt(r-1)||l||f||p){switch(e){case 34:s=!0;break;case 39:a=!0;break;case 96:u=!0;break;case 40:p++;break;case 41:p--;break;case 91:f++;break;case 93:f--;break;case 123:l++;break;case 125:l--}if(47===e){for(var h=r-1,v=void 0;h>=0&&" "===(v=t.charAt(h));h--);v&&_r.test(v)||(c=!0)}}else void 0===i?(d=r+1,i=t.slice(0,r).trim()):g();function g(){(o||(o=[])).push(t.slice(d,r).trim()),d=r+1}if(void 0===i?i=t.slice(0,r).trim():0!==d&&g(),o)for(r=0;r<o.length;r++)i=wr(i,o[r]);return i}function wr(t,e){var n=e.indexOf("(");return n<0?'_f("'+e+'")('+t+")":'_f("'+e.slice(0,n)+'")('+t+","+e.slice(n+1)}function xr(t){console.error("[Vue compiler]: "+t)}function Cr(t,e){return t?t.map(function(t){return t[e]}).filter(function(t){return t}):[]}function Tr(t,e,n){(t.props||(t.props=[])).push({name:e,value:n}),t.plain=!1}function Er(t,e,n){(t.attrs||(t.attrs=[])).push({name:e,value:n}),t.plain=!1}function Ar(t,e,n){t.attrsMap[e]=n,t.attrsList.push({name:e,value:n})}function Sr(t,e,n,i,o,a){var s;(i=i||r).capture&&(delete i.capture,e="!"+e),i.once&&(delete i.once,e="~"+e),i.passive&&(delete i.passive,e="&"+e),"click"===e&&(i.right?(e="contextmenu",delete i.right):i.middle&&(e="mouseup")),i.native?(delete i.native,s=t.nativeEvents||(t.nativeEvents={})):s=t.events||(t.events={});var u={value:n};i!==r&&(u.modifiers=i);var c=s[e];Array.isArray(c)?o?c.unshift(u):c.push(u):s[e]=c?o?[u,c]:[c,u]:u,t.plain=!1}function kr(t,e,n){var r=Or(t,":"+e)||Or(t,"v-bind:"+e);if(null!=r)return br(r);if(!1!==n){var i=Or(t,e);if(null!=i)return JSON.stringify(i)}}function Or(t,e,n){var r;if(null!=(r=t.attrsMap[e]))for(var i=t.attrsList,o=0,a=i.length;o<a;o++)if(i[o].name===e){i.splice(o,1);break}return n&&delete t.attrsMap[e],r}function Dr(t,e,n){var r=n||{},i=r.number,o="$$v";r.trim&&(o="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(o="_n("+o+")");var a=Ir(e,o);t.model={value:"("+e+")",expression:'"'+e+'"',callback:"function ($$v) {"+a+"}"}}function Ir(t,e){var n=function(t){if(pr=t.length,t.indexOf("[")<0||t.lastIndexOf("]")<pr-1)return(vr=t.lastIndexOf("."))>-1?{exp:t.slice(0,vr),key:'"'+t.slice(vr+1)+'"'}:{exp:t,key:null};dr=t,vr=gr=mr=0;for(;!jr();)Lr(hr=Nr())?Rr(hr):91===hr&&$r(hr);return{exp:t.slice(0,gr),key:t.slice(gr+1,mr)}}(t);return null===n.key?t+"="+e:"$set("+n.exp+", "+n.key+", "+e+")"}function Nr(){return dr.charCodeAt(++vr)}function jr(){return vr>=pr}function Lr(t){return 34===t||39===t}function $r(t){var e=1;for(gr=vr;!jr();)if(Lr(t=Nr()))Rr(t);else if(91===t&&e++,93===t&&e--,0===e){mr=vr;break}}function Rr(t){for(var e=t;!jr()&&(t=Nr())!==e;);}var Pr,Mr="__r",Fr="__c";function Hr(t,e,n,r,i){var o,a,s,u,c;e=(o=e)._withTask||(o._withTask=function(){Gt=!0;var t=o.apply(null,arguments);return Gt=!1,t}),n&&(a=e,s=t,u=r,c=Pr,e=function t(){null!==a.apply(null,arguments)&&Br(s,t,u,c)}),Pr.addEventListener(t,e,nt?{capture:r,passive:i}:r)}function Br(t,e,n,r){(r||Pr).removeEventListener(t,e._withTask||e,n)}function Wr(t,e){if(!i(t.data.on)||!i(e.data.on)){var n=e.data.on||{},r=t.data.on||{};Pr=e.elm,function(t){if(o(t[Mr])){var e=Y?"change":"input";t[e]=[].concat(t[Mr],t[e]||[]),delete t[Mr]}o(t[Fr])&&(t.change=[].concat(t[Fr],t.change||[]),delete t[Fr])}(n),oe(n,r,Hr,Br,e.context),Pr=void 0}}var qr={create:Wr,update:Wr};function Ur(t,e){if(!i(t.data.domProps)||!i(e.data.domProps)){var n,r,a,s,u=e.elm,c=t.data.domProps||{},l=e.data.domProps||{};o(l.__ob__)&&(l=e.data.domProps=O({},l));for(n in c)i(l[n])&&(u[n]="");for(n in l){if(r=l[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),r===c[n])continue;1===u.childNodes.length&&u.removeChild(u.childNodes[0])}if("value"===n){u._value=r;var f=i(r)?"":String(r);s=f,(a=u).composing||"OPTION"!==a.tagName&&!function(t,e){var n=!0;try{n=document.activeElement!==t}catch(t){}return n&&t.value!==e}(a,s)&&!function(t,e){var n=t.value,r=t._vModifiers;if(o(r)){if(r.lazy)return!1;if(r.number)return h(n)!==h(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}(a,s)||(u.value=f)}else u[n]=r}}}var zr={create:Ur,update:Ur},Vr=w(function(t){var e={},n=/:(.+)/;return t.split(/;(?![^(]*\))/g).forEach(function(t){if(t){var r=t.split(n);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e});function Kr(t){var e=Qr(t.style);return t.staticStyle?O(t.staticStyle,e):e}function Qr(t){return Array.isArray(t)?D(t):"string"==typeof t?Vr(t):t}var Gr,Yr=/^--/,Xr=/\s*!important$/,Jr=function(t,e,n){if(Yr.test(e))t.style.setProperty(e,n);else if(Xr.test(n))t.style.setProperty(e,n.replace(Xr,""),"important");else{var r=ti(e);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)t.style[r]=n[i];else t.style[r]=n}},Zr=["Webkit","Moz","ms"],ti=w(function(t){if(Gr=Gr||document.createElement("div").style,"filter"!==(t=C(t))&&t in Gr)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<Zr.length;n++){var r=Zr[n]+e;if(r in Gr)return r}});function ei(t,e){var n=e.data,r=t.data;if(!(i(n.staticStyle)&&i(n.style)&&i(r.staticStyle)&&i(r.style))){var a,s,u=e.elm,c=r.staticStyle,l=r.normalizedStyle||r.style||{},f=c||l,p=Qr(e.data.style)||{};e.data.normalizedStyle=o(p.__ob__)?O({},p):p;var d=function(t,e){var n,r={};if(e)for(var i=t;i.componentInstance;)(i=i.componentInstance._vnode)&&i.data&&(n=Kr(i.data))&&O(r,n);(n=Kr(t.data))&&O(r,n);for(var o=t;o=o.parent;)o.data&&(n=Kr(o.data))&&O(r,n);return r}(e,!0);for(s in f)i(d[s])&&Jr(u,s,"");for(s in d)(a=d[s])!==f[s]&&Jr(u,s,null==a?"":a)}}var ni={create:ei,update:ei};function ri(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(/\s+/).forEach(function(e){return t.classList.add(e)}):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function ii(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(/\s+/).forEach(function(e){return t.classList.remove(e)}):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{for(var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?t.setAttribute("class",n):t.removeAttribute("class")}}function oi(t){if(t){if("object"==typeof t){var e={};return!1!==t.css&&O(e,ai(t.name||"v")),O(e,t),e}return"string"==typeof t?ai(t):void 0}}var ai=w(function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}}),si=V&&!X,ui="transition",ci="animation",li="transition",fi="transitionend",pi="animation",di="animationend";si&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(li="WebkitTransition",fi="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(pi="WebkitAnimation",di="webkitAnimationEnd"));var hi=V?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function vi(t){hi(function(){hi(t)})}function gi(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),ri(t,e))}function mi(t,e){t._transitionClasses&&y(t._transitionClasses,e),ii(t,e)}function yi(t,e,n){var r=bi(t,e),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===ui?fi:di,u=0,c=function(){t.removeEventListener(s,l),n()},l=function(e){e.target===t&&++u>=a&&c()};setTimeout(function(){u<a&&c()},o+1),t.addEventListener(s,l)}var _i=/\b(transform|all)(,|$)/;function bi(t,e){var n,r=window.getComputedStyle(t),i=r[li+"Delay"].split(", "),o=r[li+"Duration"].split(", "),a=wi(i,o),s=r[pi+"Delay"].split(", "),u=r[pi+"Duration"].split(", "),c=wi(s,u),l=0,f=0;return e===ui?a>0&&(n=ui,l=a,f=o.length):e===ci?c>0&&(n=ci,l=c,f=u.length):f=(n=(l=Math.max(a,c))>0?a>c?ui:ci:null)?n===ui?o.length:u.length:0,{type:n,timeout:l,propCount:f,hasTransform:n===ui&&_i.test(r[li+"Property"])}}function wi(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max.apply(null,e.map(function(e,n){return xi(e)+xi(t[n])}))}function xi(t){return 1e3*Number(t.slice(0,-1))}function Ci(t,e){var n=t.elm;o(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=oi(t.data.transition);if(!i(r)&&!o(n._enterCb)&&1===n.nodeType){for(var a=r.css,s=r.type,c=r.enterClass,l=r.enterToClass,f=r.enterActiveClass,p=r.appearClass,d=r.appearToClass,v=r.appearActiveClass,g=r.beforeEnter,m=r.enter,y=r.afterEnter,_=r.enterCancelled,b=r.beforeAppear,w=r.appear,x=r.afterAppear,C=r.appearCancelled,T=r.duration,E=_e,A=_e.$vnode;A&&A.parent;)E=(A=A.parent).context;var S=!E._isMounted||!t.isRootInsert;if(!S||w||""===w){var k=S&&p?p:c,O=S&&v?v:f,D=S&&d?d:l,I=S&&b||g,N=S&&"function"==typeof w?w:m,j=S&&x||y,L=S&&C||_,$=h(u(T)?T.enter:T);0;var P=!1!==a&&!X,M=Ai(N),F=n._enterCb=R(function(){P&&(mi(n,D),mi(n,O)),F.cancelled?(P&&mi(n,k),L&&L(n)):j&&j(n),n._enterCb=null});t.data.show||ae(t,"insert",function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),N&&N(n,F)}),I&&I(n),P&&(gi(n,k),gi(n,O),vi(function(){gi(n,D),mi(n,k),F.cancelled||M||(Ei($)?setTimeout(F,$):yi(n,s,F))})),t.data.show&&(e&&e(),N&&N(n,F)),P||M||F()}}}function Ti(t,e){var n=t.elm;o(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=oi(t.data.transition);if(i(r)||1!==n.nodeType)return e();if(!o(n._leaveCb)){var a=r.css,s=r.type,c=r.leaveClass,l=r.leaveToClass,f=r.leaveActiveClass,p=r.beforeLeave,d=r.leave,v=r.afterLeave,g=r.leaveCancelled,m=r.delayLeave,y=r.duration,_=!1!==a&&!X,b=Ai(d),w=h(u(y)?y.leave:y);0;var x=n._leaveCb=R(function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),_&&(mi(n,l),mi(n,f)),x.cancelled?(_&&mi(n,c),g&&g(n)):(e(),v&&v(n)),n._leaveCb=null});m?m(C):C()}function C(){x.cancelled||(t.data.show||((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),p&&p(n),_&&(gi(n,c),gi(n,f),vi(function(){gi(n,l),mi(n,c),x.cancelled||b||(Ei(w)?setTimeout(x,w):yi(n,s,x))})),d&&d(n,x),_||b||x())}}function Ei(t){return"number"==typeof t&&!isNaN(t)}function Ai(t){if(i(t))return!1;var e=t.fns;return o(e)?Ai(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Si(t,e){!0!==e.data.show&&Ci(e)}var ki=function(t){var e,n,r={},u=t.modules,c=t.nodeOps;for(e=0;e<Zn.length;++e)for(r[Zn[e]]=[],n=0;n<u.length;++n)o(u[n][Zn[e]])&&r[Zn[e]].push(u[n][Zn[e]]);function l(t){var e=c.parentNode(t);o(e)&&c.removeChild(e,t)}function f(t,e,n,i,s){if(t.isRootInsert=!s,!function(t,e,n,i){var s=t.data;if(o(s)){var u=o(t.componentInstance)&&s.keepAlive;if(o(s=s.hook)&&o(s=s.init)&&s(t,!1,n,i),o(t.componentInstance))return p(t,e),a(u)&&function(t,e,n,i){for(var a,s=t;s.componentInstance;)if(s=s.componentInstance._vnode,o(a=s.data)&&o(a=a.transition)){for(a=0;a<r.activate.length;++a)r.activate[a](Jn,s);e.push(s);break}d(n,t.elm,i)}(t,e,n,i),!0}}(t,e,n,i)){var u=t.data,l=t.children,f=t.tag;o(f)?(t.elm=t.ns?c.createElementNS(t.ns,f):c.createElement(f,t),y(t),h(t,l,e),o(u)&&m(t,e),d(n,t.elm,i)):a(t.isComment)?(t.elm=c.createComment(t.text),d(n,t.elm,i)):(t.elm=c.createTextNode(t.text),d(n,t.elm,i))}}function p(t,e){o(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,g(t)?(m(t,e),y(t)):(Xn(t),e.push(t))}function d(t,e,n){o(t)&&(o(n)?n.parentNode===t&&c.insertBefore(t,e,n):c.appendChild(t,e))}function h(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)f(e[r],n,t.elm,null,!0);else s(t.text)&&c.appendChild(t.elm,c.createTextNode(String(t.text)))}function g(t){for(;t.componentInstance;)t=t.componentInstance._vnode;return o(t.tag)}function m(t,n){for(var i=0;i<r.create.length;++i)r.create[i](Jn,t);o(e=t.data.hook)&&(o(e.create)&&e.create(Jn,t),o(e.insert)&&n.push(t))}function y(t){var e;if(o(e=t.fnScopeId))c.setAttribute(t.elm,e,"");else for(var n=t;n;)o(e=n.context)&&o(e=e.$options._scopeId)&&c.setAttribute(t.elm,e,""),n=n.parent;o(e=_e)&&e!==t.context&&e!==t.fnContext&&o(e=e.$options._scopeId)&&c.setAttribute(t.elm,e,"")}function _(t,e,n,r,i,o){for(;r<=i;++r)f(n[r],o,t,e)}function b(t){var e,n,i=t.data;if(o(i))for(o(e=i.hook)&&o(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(o(e=t.children))for(n=0;n<t.children.length;++n)b(t.children[n])}function w(t,e,n,r){for(;n<=r;++n){var i=e[n];o(i)&&(o(i.tag)?(x(i),b(i)):l(i.elm))}}function x(t,e){if(o(e)||o(t.data)){var n,i=r.remove.length+1;for(o(e)?e.listeners+=i:e=function(t,e){function n(){0==--n.listeners&&l(t)}return n.listeners=e,n}(t.elm,i),o(n=t.componentInstance)&&o(n=n._vnode)&&o(n.data)&&x(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);o(n=t.data.hook)&&o(n=n.remove)?n(t,e):e()}else l(t.elm)}function C(t,e,n,r){for(var i=n;i<r;i++){var a=e[i];if(o(a)&&tr(t,a))return i}}function T(t,e,n,s){if(t!==e){var u=e.elm=t.elm;if(a(t.isAsyncPlaceholder))o(e.asyncFactory.resolved)?S(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var l,p=e.data;o(p)&&o(l=p.hook)&&o(l=l.prepatch)&&l(t,e);var d=t.children,h=e.children;if(o(p)&&g(e)){for(l=0;l<r.update.length;++l)r.update[l](t,e);o(l=p.hook)&&o(l=l.update)&&l(t,e)}i(e.text)?o(d)&&o(h)?d!==h&&function(t,e,n,r,a){for(var s,u,l,p=0,d=0,h=e.length-1,v=e[0],g=e[h],m=n.length-1,y=n[0],b=n[m],x=!a;p<=h&&d<=m;)i(v)?v=e[++p]:i(g)?g=e[--h]:tr(v,y)?(T(v,y,r),v=e[++p],y=n[++d]):tr(g,b)?(T(g,b,r),g=e[--h],b=n[--m]):tr(v,b)?(T(v,b,r),x&&c.insertBefore(t,v.elm,c.nextSibling(g.elm)),v=e[++p],b=n[--m]):tr(g,y)?(T(g,y,r),x&&c.insertBefore(t,g.elm,v.elm),g=e[--h],y=n[++d]):(i(s)&&(s=er(e,p,h)),i(u=o(y.key)?s[y.key]:C(y,e,p,h))?f(y,r,t,v.elm):tr(l=e[u],y)?(T(l,y,r),e[u]=void 0,x&&c.insertBefore(t,l.elm,v.elm)):f(y,r,t,v.elm),y=n[++d]);p>h?_(t,i(n[m+1])?null:n[m+1].elm,n,d,m,r):d>m&&w(0,e,p,h)}(u,d,h,n,s):o(h)?(o(t.text)&&c.setTextContent(u,""),_(u,null,h,0,h.length-1,n)):o(d)?w(0,d,0,d.length-1):o(t.text)&&c.setTextContent(u,""):t.text!==e.text&&c.setTextContent(u,e.text),o(p)&&o(l=p.hook)&&o(l=l.postpatch)&&l(t,e)}}}function E(t,e,n){if(a(n)&&o(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var A=v("attrs,class,staticClass,staticStyle,key");function S(t,e,n,r){var i,s=e.tag,u=e.data,c=e.children;if(r=r||u&&u.pre,e.elm=t,a(e.isComment)&&o(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(o(u)&&(o(i=u.hook)&&o(i=i.init)&&i(e,!0),o(i=e.componentInstance)))return p(e,n),!0;if(o(s)){if(o(c))if(t.hasChildNodes())if(o(i=u)&&o(i=i.domProps)&&o(i=i.innerHTML)){if(i!==t.innerHTML)return!1}else{for(var l=!0,f=t.firstChild,d=0;d<c.length;d++){if(!f||!S(f,c[d],n,r)){l=!1;break}f=f.nextSibling}if(!l||f)return!1}else h(e,c,n);if(o(u)){var v=!1;for(var g in u)if(!A(g)){v=!0,m(e,n);break}!v&&u.class&&ee(u.class)}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,s,u,l){if(!i(e)){var p,d=!1,h=[];if(i(t))d=!0,f(e,h,u,l);else{var v=o(t.nodeType);if(!v&&tr(t,e))T(t,e,h,s);else{if(v){if(1===t.nodeType&&t.hasAttribute(P)&&(t.removeAttribute(P),n=!0),a(n)&&S(t,e,h))return E(e,h,!0),t;p=t,t=new dt(c.tagName(p).toLowerCase(),{},[],void 0,p)}var m=t.elm,y=c.parentNode(m);if(f(e,h,m._leaveCb?null:y,c.nextSibling(m)),o(e.parent))for(var _=e.parent,x=g(e);_;){for(var C=0;C<r.destroy.length;++C)r.destroy[C](_);if(_.elm=e.elm,x){for(var A=0;A<r.create.length;++A)r.create[A](Jn,_);var k=_.data.hook.insert;if(k.merged)for(var O=1;O<k.fns.length;O++)k.fns[O]()}else Xn(_);_=_.parent}o(y)?w(0,[t],0,0):o(t.tag)&&b(t)}}return E(e,h,d),e.elm}o(t)&&b(t)}}({nodeOps:Gn,modules:[lr,yr,qr,zr,ni,V?{create:Si,activate:Si,remove:function(t,e){!0!==t.data.show?Ti(t,e):e()}}:{}].concat(sr)});X&&document.addEventListener("selectionchange",function(){var t=document.activeElement;t&&t.vmodel&&Ri(t,"input")});var Oi={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?ae(n,"postpatch",function(){Oi.componentUpdated(t,e,n)}):Di(t,e,n.context),t._vOptions=[].map.call(t.options,ji)):("textarea"===n.tag||Kn(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("change",$i),Z||(t.addEventListener("compositionstart",Li),t.addEventListener("compositionend",$i)),X&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Di(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,ji);if(i.some(function(t,e){return!L(t,r[e])}))(t.multiple?e.value.some(function(t){return Ni(t,i)}):e.value!==e.oldValue&&Ni(e.value,i))&&Ri(t,"change")}}};function Di(t,e,n){Ii(t,e,n),(Y||J)&&setTimeout(function(){Ii(t,e,n)},0)}function Ii(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,u=t.options.length;s<u;s++)if(a=t.options[s],i)o=$(r,ji(a))>-1,a.selected!==o&&(a.selected=o);else if(L(ji(a),r))return void(t.selectedIndex!==s&&(t.selectedIndex=s));i||(t.selectedIndex=-1)}}function Ni(t,e){return e.every(function(e){return!L(e,t)})}function ji(t){return"_value"in t?t._value:t.value}function Li(t){t.target.composing=!0}function $i(t){t.target.composing&&(t.target.composing=!1,Ri(t.target,"input"))}function Ri(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function Pi(t){return!t.componentInstance||t.data&&t.data.transition?t:Pi(t.componentInstance._vnode)}var Mi={model:Oi,show:{bind:function(t,e,n){var r=e.value,i=(n=Pi(n)).data&&n.data.transition,o=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,Ci(n,function(){t.style.display=o})):t.style.display=r?o:"none"},update:function(t,e,n){var r=e.value;r!==e.oldValue&&((n=Pi(n)).data&&n.data.transition?(n.data.show=!0,r?Ci(n,function(){t.style.display=t.__vOriginalDisplay}):Ti(n,function(){t.style.display="none"})):t.style.display=r?t.__vOriginalDisplay:"none")},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}}},Fi={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Hi(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?Hi(pe(e.children)):t}function Bi(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var o in i)e[C(o)]=i[o];return e}function Wi(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}var qi={name:"transition",props:Fi,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(function(t){return t.tag||fe(t)})).length){0;var r=this.mode;0;var i=n[0];if(function(t){for(;t=t.parent;)if(t.data.transition)return!0}(this.$vnode))return i;var o=Hi(i);if(!o)return i;if(this._leaving)return Wi(t,i);var a="__transition-"+this._uid+"-";o.key=null==o.key?o.isComment?a+"comment":a+o.tag:s(o.key)?0===String(o.key).indexOf(a)?o.key:a+o.key:o.key;var u,c,l=(o.data||(o.data={})).transition=Bi(this),f=this._vnode,p=Hi(f);if(o.data.directives&&o.data.directives.some(function(t){return"show"===t.name})&&(o.data.show=!0),p&&p.data&&(u=o,(c=p).key!==u.key||c.tag!==u.tag)&&!fe(p)&&(!p.componentInstance||!p.componentInstance._vnode.isComment)){var d=p.data.transition=O({},l);if("out-in"===r)return this._leaving=!0,ae(d,"afterLeave",function(){e._leaving=!1,e.$forceUpdate()}),Wi(t,i);if("in-out"===r){if(fe(o))return f;var h,v=function(){h()};ae(l,"afterEnter",v),ae(l,"enterCancelled",v),ae(d,"delayLeave",function(t){h=t})}}return i}}},Ui=O({tag:String,moveClass:String},Fi);function zi(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Vi(t){t.data.newPos=t.elm.getBoundingClientRect()}function Ki(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}delete Ui.mode;var Qi={Transition:qi,TransitionGroup:{props:Ui,render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=Bi(this),s=0;s<i.length;s++){var u=i[s];if(u.tag)if(null!=u.key&&0!==String(u.key).indexOf("__vlist"))o.push(u),n[u.key]=u,(u.data||(u.data={})).transition=a;else;}if(r){for(var c=[],l=[],f=0;f<r.length;f++){var p=r[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?c.push(p):l.push(p)}this.kept=t(e,null,c),this.removed=l}return t(e,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(zi),t.forEach(Vi),t.forEach(Ki),this._reflow=document.body.offsetHeight,t.forEach(function(t){if(t.data.moved){var n=t.elm,r=n.style;gi(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(fi,n._moveCb=function t(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(fi,t),n._moveCb=null,mi(n,e))})}}))},methods:{hasMove:function(t,e){if(!si)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach(function(t){ii(n,t)}),ri(n,e),n.style.display="none",this.$el.appendChild(n);var r=bi(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};mn.config.mustUseProp=Dn,mn.config.isReservedTag=Un,mn.config.isReservedAttr=kn,mn.config.getTagNamespace=zn,mn.config.isUnknownElement=function(t){if(!V)return!0;if(Un(t))return!1;if(t=t.toLowerCase(),null!=Vn[t])return Vn[t];var e=document.createElement(t);return t.indexOf("-")>-1?Vn[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Vn[t]=/HTMLUnknownElement/.test(e.toString())},O(mn.options.directives,Mi),O(mn.options.components,Qi),mn.prototype.__patch__=V?ki:I,mn.prototype.$mount=function(t,e){return t=t&&V?Qn(t):void 0,r=t,i=e,(n=this).$el=r,n.$options.render||(n.$options.render=vt),xe(n,"beforeMount"),new Ie(n,function(){n._update(n._render(),i)},I,null,!0),i=!1,null==n.$vnode&&(n._isMounted=!0,xe(n,"mounted")),n;var n,r,i},mn.nextTick(function(){H.devtools&&ot&&ot.emit("init",mn)},0);var Gi=/\{\{((?:.|\n)+?)\}\}/g,Yi=/[-.*+?^${}()|[\]\/\\]/g,Xi=w(function(t){var e=t[0].replace(Yi,"\\$&"),n=t[1].replace(Yi,"\\$&");return new RegExp(e+"((?:.|\\n)+?)"+n,"g")});function Ji(t,e){var n=e?Xi(e):Gi;if(n.test(t)){for(var r,i,o,a=[],s=[],u=n.lastIndex=0;r=n.exec(t);){(i=r.index)>u&&(s.push(o=t.slice(u,i)),a.push(JSON.stringify(o)));var c=br(r[1].trim());a.push("_s("+c+")"),s.push({"@binding":c}),u=i+r[0].length}return u<t.length&&(s.push(o=t.slice(u)),a.push(JSON.stringify(o))),{expression:a.join("+"),tokens:s}}}var Zi={staticKeys:["staticClass"],transformNode:function(t,e){e.warn;var n=Or(t,"class");n&&(t.staticClass=JSON.stringify(n));var r=kr(t,"class",!1);r&&(t.classBinding=r)},genData:function(t){var e="";return t.staticClass&&(e+="staticClass:"+t.staticClass+","),t.classBinding&&(e+="class:"+t.classBinding+","),e}};var to,eo={staticKeys:["staticStyle"],transformNode:function(t,e){e.warn;var n=Or(t,"style");n&&(t.staticStyle=JSON.stringify(Vr(n)));var r=kr(t,"style",!1);r&&(t.styleBinding=r)},genData:function(t){var e="";return t.staticStyle&&(e+="staticStyle:"+t.staticStyle+","),t.styleBinding&&(e+="style:("+t.styleBinding+"),"),e}},no=function(t){return(to=to||document.createElement("div")).innerHTML=t,to.textContent},ro=v("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),io=v("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),oo=v("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),ao=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,so="[a-zA-Z_][\\w\\-\\.]*",uo="((?:"+so+"\\:)?"+so+")",co=new RegExp("^<"+uo),lo=/^\s*(\/?)>/,fo=new RegExp("^<\\/"+uo+"[^>]*>"),po=/^<!DOCTYPE [^>]+>/i,ho=/^<!--/,vo=/^<!\[/,go=!1;"x".replace(/x(.)?/g,function(t,e){go=""===e});var mo=v("script,style,textarea",!0),yo={},_o={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t"},bo=/&(?:lt|gt|quot|amp);/g,wo=/&(?:lt|gt|quot|amp|#10|#9);/g,xo=v("pre,textarea",!0),Co=function(t,e){return t&&xo(t)&&"\n"===e[0]};var To,Eo,Ao,So,ko,Oo,Do,Io,No=/^@|^v-on:/,jo=/^v-|^@|^:/,Lo=/(.*?)\s+(?:in|of)\s+(.*)/,$o=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Ro=/^\(|\)$/g,Po=/:(.*)$/,Mo=/^:|^v-bind:/,Fo=/\.[^.]+/g,Ho=w(no);function Bo(t,e,n){return{type:1,tag:t,attrsList:e,attrsMap:function(t){for(var e={},n=0,r=t.length;n<r;n++)e[t[n].name]=t[n].value;return e}(e),parent:n,children:[]}}function Wo(t,e){To=e.warn||xr,Oo=e.isPreTag||N,Do=e.mustUseProp||N,Io=e.getTagNamespace||N,Ao=Cr(e.modules,"transformNode"),So=Cr(e.modules,"preTransformNode"),ko=Cr(e.modules,"postTransformNode"),Eo=e.delimiters;var n,r,i=[],o=!1!==e.preserveWhitespace,a=!1,s=!1;function u(t){t.pre&&(a=!1),Oo(t.tag)&&(s=!1);for(var n=0;n<ko.length;n++)ko[n](t,e)}return function(t,e){for(var n,r,i=[],o=e.expectHTML,a=e.isUnaryTag||N,s=e.canBeLeftOpenTag||N,u=0;t;){if(n=t,r&&mo(r)){var c=0,l=r.toLowerCase(),f=yo[l]||(yo[l]=new RegExp("([\\s\\S]*?)(</"+l+"[^>]*>)","i")),p=t.replace(f,function(t,n,r){return c=r.length,mo(l)||"noscript"===l||(n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),Co(l,n)&&(n=n.slice(1)),e.chars&&e.chars(n),""});u+=t.length-p.length,t=p,A(l,u-c,u)}else{var d=t.indexOf("<");if(0===d){if(ho.test(t)){var h=t.indexOf("--\x3e");if(h>=0){e.shouldKeepComment&&e.comment(t.substring(4,h)),C(h+3);continue}}if(vo.test(t)){var v=t.indexOf("]>");if(v>=0){C(v+2);continue}}var g=t.match(po);if(g){C(g[0].length);continue}var m=t.match(fo);if(m){var y=u;C(m[0].length),A(m[1],y,u);continue}var _=T();if(_){E(_),Co(r,t)&&C(1);continue}}var b=void 0,w=void 0,x=void 0;if(d>=0){for(w=t.slice(d);!(fo.test(w)||co.test(w)||ho.test(w)||vo.test(w)||(x=w.indexOf("<",1))<0);)d+=x,w=t.slice(d);b=t.substring(0,d),C(d)}d<0&&(b=t,t=""),e.chars&&b&&e.chars(b)}if(t===n){e.chars&&e.chars(t);break}}function C(e){u+=e,t=t.substring(e)}function T(){var e=t.match(co);if(e){var n,r,i={tagName:e[1],attrs:[],start:u};for(C(e[0].length);!(n=t.match(lo))&&(r=t.match(ao));)C(r[0].length),i.attrs.push(r);if(n)return i.unarySlash=n[1],C(n[0].length),i.end=u,i}}function E(t){var n=t.tagName,u=t.unarySlash;o&&("p"===r&&oo(n)&&A(r),s(n)&&r===n&&A(n));for(var c,l,f,p=a(n)||!!u,d=t.attrs.length,h=new Array(d),v=0;v<d;v++){var g=t.attrs[v];go&&-1===g[0].indexOf('""')&&(""===g[3]&&delete g[3],""===g[4]&&delete g[4],""===g[5]&&delete g[5]);var m=g[3]||g[4]||g[5]||"",y="a"===n&&"href"===g[1]?e.shouldDecodeNewlinesForHref:e.shouldDecodeNewlines;h[v]={name:g[1],value:(c=m,l=y,f=l?wo:bo,c.replace(f,function(t){return _o[t]}))}}p||(i.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:h}),r=n),e.start&&e.start(n,h,p,t.start,t.end)}function A(t,n,o){var a,s;if(null==n&&(n=u),null==o&&(o=u),t&&(s=t.toLowerCase()),t)for(a=i.length-1;a>=0&&i[a].lowerCasedTag!==s;a--);else a=0;if(a>=0){for(var c=i.length-1;c>=a;c--)e.end&&e.end(i[c].tag,n,o);i.length=a,r=a&&i[a-1].tag}else"br"===s?e.start&&e.start(t,[],!0,n,o):"p"===s&&(e.start&&e.start(t,[],!1,n,o),e.end&&e.end(t,n,o))}A()}(t,{warn:To,expectHTML:e.expectHTML,isUnaryTag:e.isUnaryTag,canBeLeftOpenTag:e.canBeLeftOpenTag,shouldDecodeNewlines:e.shouldDecodeNewlines,shouldDecodeNewlinesForHref:e.shouldDecodeNewlinesForHref,shouldKeepComment:e.comments,start:function(t,o,c){var l=r&&r.ns||Io(t);Y&&"svg"===l&&(o=function(t){for(var e=[],n=0;n<t.length;n++){var r=t[n];Ko.test(r.name)||(r.name=r.name.replace(Qo,""),e.push(r))}return e}(o));var f,p,d,h,v,g=Bo(t,o,r);l&&(g.ns=l),"style"!==(f=g).tag&&("script"!==f.tag||f.attrsMap.type&&"text/javascript"!==f.attrsMap.type)||it()||(g.forbidden=!0);for(var m=0;m<So.length;m++)g=So[m](g,e)||g;function y(t){0}if(a||(null!=Or(p=g,"v-pre")&&(p.pre=!0),g.pre&&(a=!0)),Oo(g.tag)&&(s=!0),a?function(t){var e=t.attrsList.length;if(e)for(var n=t.attrs=new Array(e),r=0;r<e;r++)n[r]={name:t.attrsList[r].name,value:JSON.stringify(t.attrsList[r].value)};else t.pre||(t.plain=!0)}(g):g.processed||(Uo(g),function(t){var e=Or(t,"v-if");if(e)t.if=e,zo(t,{exp:e,block:t});else{null!=Or(t,"v-else")&&(t.else=!0);var n=Or(t,"v-else-if");n&&(t.elseif=n)}}(g),null!=Or(d=g,"v-once")&&(d.once=!0),qo(g,e)),n?i.length||n.if&&(g.elseif||g.else)&&(y(),zo(n,{exp:g.elseif,block:g})):(n=g,y()),r&&!g.forbidden)if(g.elseif||g.else)h=g,(v=function(t){var e=t.length;for(;e--;){if(1===t[e].type)return t[e];t.pop()}}(r.children))&&v.if&&zo(v,{exp:h.elseif,block:h});else if(g.slotScope){r.plain=!1;var _=g.slotTarget||'"default"';(r.scopedSlots||(r.scopedSlots={}))[_]=g}else r.children.push(g),g.parent=r;c?u(g):(r=g,i.push(g))},end:function(){var t=i[i.length-1],e=t.children[t.children.length-1];e&&3===e.type&&" "===e.text&&!s&&t.children.pop(),i.length-=1,r=i[i.length-1],u(t)},chars:function(t){if(r&&(!Y||"textarea"!==r.tag||r.attrsMap.placeholder!==t)){var e,n,i=r.children;if(t=s||t.trim()?"script"===(e=r).tag||"style"===e.tag?t:Ho(t):o&&i.length?" ":"")!a&&" "!==t&&(n=Ji(t,Eo))?i.push({type:2,expression:n.expression,tokens:n.tokens,text:t}):" "===t&&i.length&&" "===i[i.length-1].text||i.push({type:3,text:t})}},comment:function(t){r.children.push({type:3,text:t,isComment:!0})}}),n}function qo(t,e){var n,r,i,o;(r=kr(n=t,"key"))&&(n.key=r),t.plain=!t.key&&!t.attrsList.length,(o=kr(i=t,"ref"))&&(i.ref=o,i.refInFor=function(t){for(var e=t;e;){if(void 0!==e.for)return!0;e=e.parent}return!1}(i)),function(t){if("slot"===t.tag)t.slotName=kr(t,"name");else{var e;"template"===t.tag?(e=Or(t,"scope"),t.slotScope=e||Or(t,"slot-scope")):(e=Or(t,"slot-scope"))&&(t.slotScope=e);var n=kr(t,"slot");n&&(t.slotTarget='""'===n?'"default"':n,"template"===t.tag||t.slotScope||Er(t,"slot",n))}}(t),function(t){var e;(e=kr(t,"is"))&&(t.component=e);null!=Or(t,"inline-template")&&(t.inlineTemplate=!0)}(t);for(var a=0;a<Ao.length;a++)t=Ao[a](t,e)||t;!function(t){var e,n,r,i,o,a,s,u=t.attrsList;for(e=0,n=u.length;e<n;e++){if(r=i=u[e].name,o=u[e].value,jo.test(r))if(t.hasBindings=!0,(a=Vo(r))&&(r=r.replace(Fo,"")),Mo.test(r))r=r.replace(Mo,""),o=br(o),s=!1,a&&(a.prop&&(s=!0,"innerHtml"===(r=C(r))&&(r="innerHTML")),a.camel&&(r=C(r)),a.sync&&Sr(t,"update:"+C(r),Ir(o,"$event"))),s||!t.component&&Do(t.tag,t.attrsMap.type,r)?Tr(t,r,o):Er(t,r,o);else if(No.test(r))r=r.replace(No,""),Sr(t,r,o,a,!1);else{var c=(r=r.replace(jo,"")).match(Po),l=c&&c[1];l&&(r=r.slice(0,-(l.length+1))),p=r,d=i,h=o,v=l,g=a,((f=t).directives||(f.directives=[])).push({name:p,rawName:d,value:h,arg:v,modifiers:g}),f.plain=!1}else Er(t,r,JSON.stringify(o)),!t.component&&"muted"===r&&Do(t.tag,t.attrsMap.type,r)&&Tr(t,r,"true")}var f,p,d,h,v,g}(t)}function Uo(t){var e;if(e=Or(t,"v-for")){var n=function(t){var e=t.match(Lo);if(!e)return;var n={};n.for=e[2].trim();var r=e[1].trim().replace(Ro,""),i=r.match($o);i?(n.alias=r.replace($o,""),n.iterator1=i[1].trim(),i[2]&&(n.iterator2=i[2].trim())):n.alias=r;return n}(e);n&&O(t,n)}}function zo(t,e){t.ifConditions||(t.ifConditions=[]),t.ifConditions.push(e)}function Vo(t){var e=t.match(Fo);if(e){var n={};return e.forEach(function(t){n[t.slice(1)]=!0}),n}}var Ko=/^xmlns:NS\d+/,Qo=/^NS\d+:/;function Go(t){return Bo(t.tag,t.attrsList.slice(),t.parent)}var Yo=[Zi,eo,{preTransformNode:function(t,e){if("input"===t.tag){var n=t.attrsMap;if(n["v-model"]&&(n["v-bind:type"]||n[":type"])){var r=kr(t,"type"),i=Or(t,"v-if",!0),o=i?"&&("+i+")":"",a=null!=Or(t,"v-else",!0),s=Or(t,"v-else-if",!0),u=Go(t);Uo(u),Ar(u,"type","checkbox"),qo(u,e),u.processed=!0,u.if="("+r+")==='checkbox'"+o,zo(u,{exp:u.if,block:u});var c=Go(t);Or(c,"v-for",!0),Ar(c,"type","radio"),qo(c,e),zo(u,{exp:"("+r+")==='radio'"+o,block:c});var l=Go(t);return Or(l,"v-for",!0),Ar(l,":type",r),qo(l,e),zo(u,{exp:i,block:l}),a?u.else=!0:s&&(u.elseif=s),u}}}}];var Xo,Jo,Zo,ta={expectHTML:!0,modules:Yo,directives:{model:function(t,e,n){n;var r,i,o,a,s,u,c,l,f,p,d,h,v,g,m,y,_=e.value,b=e.modifiers,w=t.tag,x=t.attrsMap.type;if(t.component)return Dr(t,_,b),!1;if("select"===w)v=t,g=_,y=(y='var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+((m=b)&&m.number?"_n(val)":"val")+"});")+" "+Ir(g,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),Sr(v,"change",y,null,!0);else if("input"===w&&"checkbox"===x)u=t,c=_,f=(l=b)&&l.number,p=kr(u,"value")||"null",d=kr(u,"true-value")||"true",h=kr(u,"false-value")||"false",Tr(u,"checked","Array.isArray("+c+")?_i("+c+","+p+")>-1"+("true"===d?":("+c+")":":_q("+c+","+d+")")),Sr(u,"change","var $$a="+c+",$$el=$event.target,$$c=$$el.checked?("+d+"):("+h+");if(Array.isArray($$a)){var $$v="+(f?"_n("+p+")":p)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+c+"=$$a.concat([$$v]))}else{$$i>-1&&("+c+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+Ir(c,"$$c")+"}",null,!0);else if("input"===w&&"radio"===x)r=t,i=_,a=(o=b)&&o.number,s=kr(r,"value")||"null",Tr(r,"checked","_q("+i+","+(s=a?"_n("+s+")":s)+")"),Sr(r,"change",Ir(i,s),null,!0);else if("input"===w||"textarea"===w)!function(t,e,n){var r=t.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,u=!o&&"range"!==r,c=o?"change":"range"===r?Mr:"input",l="$event.target.value";s&&(l="$event.target.value.trim()"),a&&(l="_n("+l+")");var f=Ir(e,l);u&&(f="if($event.target.composing)return;"+f),Tr(t,"value","("+e+")"),Sr(t,c,f,null,!0),(s||a)&&Sr(t,"blur","$forceUpdate()")}(t,_,b);else if(!H.isReservedTag(w))return Dr(t,_,b),!1;return!0},text:function(t,e){e.value&&Tr(t,"textContent","_s("+e.value+")")},html:function(t,e){e.value&&Tr(t,"innerHTML","_s("+e.value+")")}},isPreTag:function(t){return"pre"===t},isUnaryTag:ro,mustUseProp:Dn,canBeLeftOpenTag:io,isReservedTag:Un,getTagNamespace:zn,staticKeys:(Xo=Yo,Xo.reduce(function(t,e){return t.concat(e.staticKeys||[])},[]).join(","))},ea=w(function(t){return v("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(t?","+t:""))});function na(t,e){t&&(Jo=ea(e.staticKeys||""),Zo=e.isReservedTag||N,function t(e){e.static=function(t){if(2===t.type)return!1;if(3===t.type)return!0;return!(!t.pre&&(t.hasBindings||t.if||t.for||g(t.tag)||!Zo(t.tag)||function(t){for(;t.parent;){if("template"!==(t=t.parent).tag)return!1;if(t.for)return!0}return!1}(t)||!Object.keys(t).every(Jo)))}(e);if(1===e.type){if(!Zo(e.tag)&&"slot"!==e.tag&&null==e.attrsMap["inline-template"])return;for(var n=0,r=e.children.length;n<r;n++){var i=e.children[n];t(i),i.static||(e.static=!1)}if(e.ifConditions)for(var o=1,a=e.ifConditions.length;o<a;o++){var s=e.ifConditions[o].block;t(s),s.static||(e.static=!1)}}}(t),function t(e,n){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=n),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);if(e.staticRoot=!1,e.children)for(var r=0,i=e.children.length;r<i;r++)t(e.children[r],n||!!e.for);if(e.ifConditions)for(var o=1,a=e.ifConditions.length;o<a;o++)t(e.ifConditions[o].block,n)}}(t,!1))}var ra=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,ia=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,oa={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},aa=function(t){return"if("+t+")return null;"},sa={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:aa("$event.target !== $event.currentTarget"),ctrl:aa("!$event.ctrlKey"),shift:aa("!$event.shiftKey"),alt:aa("!$event.altKey"),meta:aa("!$event.metaKey"),left:aa("'button' in $event && $event.button !== 0"),middle:aa("'button' in $event && $event.button !== 1"),right:aa("'button' in $event && $event.button !== 2")};function ua(t,e,n){var r=e?"nativeOn:{":"on:{";for(var i in t)r+='"'+i+'":'+ca(i,t[i])+",";return r.slice(0,-1)+"}"}function ca(t,e){if(!e)return"function(){}";if(Array.isArray(e))return"["+e.map(function(e){return ca(t,e)}).join(",")+"]";var n=ia.test(e.value),r=ra.test(e.value);if(e.modifiers){var i="",o="",a=[];for(var s in e.modifiers)if(sa[s])o+=sa[s],oa[s]&&a.push(s);else if("exact"===s){var u=e.modifiers;o+=aa(["ctrl","shift","alt","meta"].filter(function(t){return!u[t]}).map(function(t){return"$event."+t+"Key"}).join("||"))}else a.push(s);return a.length&&(i+="if(!('button' in $event)&&"+a.map(la).join("&&")+")return null;"),o&&(i+=o),"function($event){"+i+(n?e.value+"($event)":r?"("+e.value+")($event)":e.value)+"}"}return n||r?e.value:"function($event){"+e.value+"}"}function la(t){var e=parseInt(t,10);if(e)return"$event.keyCode!=="+e;var n=oa[t];return"_k($event.keyCode,"+JSON.stringify(t)+","+JSON.stringify(n)+",$event.key)"}var fa={on:function(t,e){t.wrapListeners=function(t){return"_g("+t+","+e.value+")"}},bind:function(t,e){t.wrapData=function(n){return"_b("+n+",'"+t.tag+"',"+e.value+","+(e.modifiers&&e.modifiers.prop?"true":"false")+(e.modifiers&&e.modifiers.sync?",true":"")+")"}},cloak:I},pa=function(t){this.options=t,this.warn=t.warn||xr,this.transforms=Cr(t.modules,"transformCode"),this.dataGenFns=Cr(t.modules,"genData"),this.directives=O(O({},fa),t.directives);var e=t.isReservedTag||N;this.maybeComponent=function(t){return!e(t.tag)},this.onceId=0,this.staticRenderFns=[]};function da(t,e){var n=new pa(e);return{render:"with(this){return "+(t?ha(t,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function ha(t,e){if(t.staticRoot&&!t.staticProcessed)return va(t,e);if(t.once&&!t.onceProcessed)return ga(t,e);if(t.for&&!t.forProcessed)return function(t,e,n,r){var i=t.for,o=t.alias,a=t.iterator1?","+t.iterator1:"",s=t.iterator2?","+t.iterator2:"";0;return t.forProcessed=!0,(r||"_l")+"(("+i+"),function("+o+a+s+"){return "+(n||ha)(t,e)+"})"}(t,e);if(t.if&&!t.ifProcessed)return ma(t,e);if("template"!==t.tag||t.slotTarget){if("slot"===t.tag)return function(t,e){var n=t.slotName||'"default"',r=ba(t,e),i="_t("+n+(r?","+r:""),o=t.attrs&&"{"+t.attrs.map(function(t){return C(t.name)+":"+t.value}).join(",")+"}",a=t.attrsMap["v-bind"];!o&&!a||r||(i+=",null");o&&(i+=","+o);a&&(i+=(o?"":",null")+","+a);return i+")"}(t,e);var n;if(t.component)a=t.component,u=e,c=(s=t).inlineTemplate?null:ba(s,u,!0),n="_c("+a+","+ya(s,u)+(c?","+c:"")+")";else{var r=t.plain?void 0:ya(t,e),i=t.inlineTemplate?null:ba(t,e,!0);n="_c('"+t.tag+"'"+(r?","+r:"")+(i?","+i:"")+")"}for(var o=0;o<e.transforms.length;o++)n=e.transforms[o](t,n);return n}return ba(t,e)||"void 0";var a,s,u,c}function va(t,e){return t.staticProcessed=!0,e.staticRenderFns.push("with(this){return "+ha(t,e)+"}"),"_m("+(e.staticRenderFns.length-1)+(t.staticInFor?",true":"")+")"}function ga(t,e){if(t.onceProcessed=!0,t.if&&!t.ifProcessed)return ma(t,e);if(t.staticInFor){for(var n="",r=t.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+ha(t,e)+","+e.onceId+++","+n+")":ha(t,e)}return va(t,e)}function ma(t,e,n,r){return t.ifProcessed=!0,function t(e,n,r,i){if(!e.length)return i||"_e()";var o=e.shift();return o.exp?"("+o.exp+")?"+a(o.block)+":"+t(e,n,r,i):""+a(o.block);function a(t){return r?r(t,n):t.once?ga(t,n):ha(t,n)}}(t.ifConditions.slice(),e,n,r)}function ya(t,e){var n,r,i="{",o=function(t,e){var n=t.directives;if(!n)return;var r,i,o,a,s="directives:[",u=!1;for(r=0,i=n.length;r<i;r++){o=n[r],a=!0;var c=e.directives[o.name];c&&(a=!!c(t,o,e.warn)),a&&(u=!0,s+='{name:"'+o.name+'",rawName:"'+o.rawName+'"'+(o.value?",value:("+o.value+"),expression:"+JSON.stringify(o.value):"")+(o.arg?',arg:"'+o.arg+'"':"")+(o.modifiers?",modifiers:"+JSON.stringify(o.modifiers):"")+"},")}if(u)return s.slice(0,-1)+"]"}(t,e);o&&(i+=o+","),t.key&&(i+="key:"+t.key+","),t.ref&&(i+="ref:"+t.ref+","),t.refInFor&&(i+="refInFor:true,"),t.pre&&(i+="pre:true,"),t.component&&(i+='tag:"'+t.tag+'",');for(var a=0;a<e.dataGenFns.length;a++)i+=e.dataGenFns[a](t);if(t.attrs&&(i+="attrs:{"+Ca(t.attrs)+"},"),t.props&&(i+="domProps:{"+Ca(t.props)+"},"),t.events&&(i+=ua(t.events,!1,e.warn)+","),t.nativeEvents&&(i+=ua(t.nativeEvents,!0,e.warn)+","),t.slotTarget&&!t.slotScope&&(i+="slot:"+t.slotTarget+","),t.scopedSlots&&(i+=(n=t.scopedSlots,r=e,"scopedSlots:_u(["+Object.keys(n).map(function(t){return _a(t,n[t],r)}).join(",")+"]),")),t.model&&(i+="model:{value:"+t.model.value+",callback:"+t.model.callback+",expression:"+t.model.expression+"},"),t.inlineTemplate){var s=function(t,e){var n=t.children[0];0;if(1===n.type){var r=da(n,e.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(t){return"function(){"+t+"}"}).join(",")+"]}"}}(t,e);s&&(i+=s+",")}return i=i.replace(/,$/,"")+"}",t.wrapData&&(i=t.wrapData(i)),t.wrapListeners&&(i=t.wrapListeners(i)),i}function _a(t,e,n){return e.for&&!e.forProcessed?(r=t,o=n,a=(i=e).for,s=i.alias,u=i.iterator1?","+i.iterator1:"",c=i.iterator2?","+i.iterator2:"",i.forProcessed=!0,"_l(("+a+"),function("+s+u+c+"){return "+_a(r,i,o)+"})"):"{key:"+t+",fn:"+("function("+String(e.slotScope)+"){return "+("template"===e.tag?e.if?e.if+"?"+(ba(e,n)||"undefined")+":undefined":ba(e,n)||"undefined":ha(e,n))+"}")+"}";var r,i,o,a,s,u,c}function ba(t,e,n,r,i){var o=t.children;if(o.length){var a=o[0];if(1===o.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag)return(r||ha)(a,e);var s=n?function(t,e){for(var n=0,r=0;r<t.length;r++){var i=t[r];if(1===i.type){if(wa(i)||i.ifConditions&&i.ifConditions.some(function(t){return wa(t.block)})){n=2;break}(e(i)||i.ifConditions&&i.ifConditions.some(function(t){return e(t.block)}))&&(n=1)}}return n}(o,e.maybeComponent):0,u=i||xa;return"["+o.map(function(t){return u(t,e)}).join(",")+"]"+(s?","+s:"")}}function wa(t){return void 0!==t.for||"template"===t.tag||"slot"===t.tag}function xa(t,e){return 1===t.type?ha(t,e):3===t.type&&t.isComment?(r=t,"_e("+JSON.stringify(r.text)+")"):"_v("+(2===(n=t).type?n.expression:Ta(JSON.stringify(n.text)))+")";var n,r}function Ca(t){for(var e="",n=0;n<t.length;n++){var r=t[n];e+='"'+r.name+'":'+Ta(r.value)+","}return e.slice(0,-1)}function Ta(t){return t.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)");function Ea(t,e){try{return new Function(t)}catch(n){return e.push({err:n,code:t}),I}}var Aa,Sa,ka=(Aa=function(t,e){var n=Wo(t.trim(),e);!1!==e.optimize&&na(n,e);var r=da(n,e);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}},function(t){function e(e,n){var r=Object.create(t),i=[],o=[];if(r.warn=function(t,e){(e?o:i).push(t)},n){n.modules&&(r.modules=(t.modules||[]).concat(n.modules)),n.directives&&(r.directives=O(Object.create(t.directives||null),n.directives));for(var a in n)"modules"!==a&&"directives"!==a&&(r[a]=n[a])}var s=Aa(e,r);return s.errors=i,s.tips=o,s}return{compile:e,compileToFunctions:(n=e,r=Object.create(null),function(t,e,i){(e=O({},e)).warn,delete e.warn;var o=e.delimiters?String(e.delimiters)+t:t;if(r[o])return r[o];var a=n(t,e),s={},u=[];return s.render=Ea(a.render,u),s.staticRenderFns=a.staticRenderFns.map(function(t){return Ea(t,u)}),r[o]=s})};var n,r})(ta).compileToFunctions;function Oa(t){return(Sa=Sa||document.createElement("div")).innerHTML=t?'<a href="\n"/>':'<div a="\n"/>',Sa.innerHTML.indexOf("&#10;")>0}var Da=!!V&&Oa(!1),Ia=!!V&&Oa(!0),Na=w(function(t){var e=Qn(t);return e&&e.innerHTML}),ja=mn.prototype.$mount;mn.prototype.$mount=function(t,e){if((t=t&&Qn(t))===document.body||t===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=Na(r));else{if(!r.nodeType)return this;r=r.innerHTML}else t&&(r=function(t){if(t.outerHTML)return t.outerHTML;var e=document.createElement("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}(t));if(r){0;var i=ka(r,{shouldDecodeNewlines:Da,shouldDecodeNewlinesForHref:Ia,delimiters:n.delimiters,comments:n.comments},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return ja.call(this,t,e)},mn.compile=ka,t.exports=mn}).call(e,n(1),n(37).setImmediate)},function(t,e,n){var r=Function.prototype.apply;function i(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new i(r.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new i(r.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(38),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e,n){(function(t,e){!function(t,n){"use strict";if(!t.setImmediate){var r,i,o,a,s,u=1,c={},l=!1,f=t.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(t);p=p&&p.setTimeout?p:t,"[object process]"==={}.toString.call(t.process)?r=function(t){e.nextTick(function(){h(t)})}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?t.MessageChannel?((o=new MessageChannel).port1.onmessage=function(t){h(t.data)},r=function(t){o.port2.postMessage(t)}):f&&"onreadystatechange"in f.createElement("script")?(i=f.documentElement,r=function(t){var e=f.createElement("script");e.onreadystatechange=function(){h(t),e.onreadystatechange=null,i.removeChild(e),e=null},i.appendChild(e)}):r=function(t){setTimeout(h,0,t)}:(a="setImmediate$"+Math.random()+"$",s=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(a)&&h(+e.data.slice(a.length))},t.addEventListener?t.addEventListener("message",s,!1):t.attachEvent("onmessage",s),r=function(e){t.postMessage(a+e,"*")}),p.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var i={callback:t,args:e};return c[u]=i,r(u),u++},p.clearImmediate=d}function d(t){delete c[t]}function h(t){if(l)setTimeout(h,0,t);else{var e=c[t];if(e){l=!0;try{!function(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(n,r)}}(e)}finally{d(t),l=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(1),n(6))},function(t,e,n){var r=n(40)(n(41),n(42),!1,null,null,null);t.exports=r.exports},function(t,e){t.exports=function(t,e,n,r,i,o){var a,s=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(a=t,s=t.default);var c,l="function"==typeof s?s.options:s;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId=i),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):r&&(c=r),c){var f=l.functional,p=f?l.render:l.beforeCreate;f?(l._injectStyles=c,l.render=function(t,e){return c.call(e),p(t,e)}):l.beforeCreate=p?[].concat(p,c):[c]}return{esModule:a,exports:s,options:l}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){console.log("Component mounted.")}}},function(t,e){t.exports={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 col-md-offset-2"},[e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-heading"},[this._v("Example Component")]),this._v(" "),e("div",{staticClass:"panel-body"},[this._v("\n                    I'm an example component!\n                ")])])])])])}]}},function(t,e){}]);
>>>>>>> parent of 82601f9... V03.01
