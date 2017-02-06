/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _kitties = __webpack_require__(8);

var _kitties2 = _interopRequireDefault(_kitties);

var _drawRotated = __webpack_require__(11);

var _drawRotated2 = _interopRequireDefault(_drawRotated);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Particle = function () {
  function Particle() {
    var posX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var posY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var velX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var velY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, Particle);

    this.marker = (0, _kitties2.default)();
    this.alpha = 1;
    this.scale = Math.random() / 2 + 0.5;
    this.aim = Math.random() > 0.5 ? 1 : -1;

    this.posX = posX;
    this.posY = posY;
    this.velX = velX;
    this.velY = velY;

    this.life = 1;
    this.fade = Math.random() * 0.15 + 0.003;
  }

  _createClass(Particle, [{
    key: 'update',
    value: function update() {
      this.posX += this.velX;
      this.posY += this.velY;
    }
  }, {
    key: 'dead',
    value: function dead() {
      return this.life < 0.005;
    }
  }, {
    key: 'render',
    value: function render(context) {
      var angle = this.aim * (this.posX + this.posY) % 360;
      _drawRotated2.default.call(context, this.marker, {
        x: this.posX,
        y: this.posY,
        angle: angle,
        alpha: this.alpha,
        scale: this.scale
      });
    }
  }]);

  return Particle;
}();

exports.default = Particle;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(21)
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function() {
  root.requestAnimationFrame = raf
  root.cancelAnimationFrame = caf
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initialize;

var _raf = __webpack_require__(2);

var _raf2 = _interopRequireDefault(_raf);

var _resize = __webpack_require__(12);

var _resize2 = _interopRequireDefault(_resize);

var _rocket = __webpack_require__(10);

var _rocket2 = _interopRequireDefault(_rocket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Canvas code was adapted and modified from a tutorial by Paul Lewis
 * at http://creativejs.com/tutorials/creating-fireworks/. As per the original
 * Apache license, the original license terms are reproduced below.
 */

/**
 * Copyright 2011 Paul Lewis. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Initialization
 */

var particles = [];
var mainCanvas = null,
    mainContext = null,
    viewportWidth = 0,
    viewportHeight = 0,
    allowNewAnimation = true;

function initialize() {

  onWindowResize();
  (0, _resize2.default)(onWindowResize);

  mainCanvas = document.createElement('canvas');
  mainCanvas.id = 'catfetti';
  mainContext = mainCanvas.getContext('2d');

  setMainCanvasDimensions();

  document.body.appendChild(mainCanvas);
  document.addEventListener('mouseup', createRockets, true);
  document.addEventListener('touchend', createRockets, true);
}

function onWindowResize() {
  viewportWidth = window.innerWidth;
  viewportHeight = window.innerHeight;
  if (mainCanvas) setMainCanvasDimensions();
}

function setMainCanvasDimensions() {
  mainCanvas.width = viewportWidth;
  mainCanvas.height = viewportHeight;
}

/**
 * Particle Spawning
 */

function createRockets() {
  for (var i = 0; i < 5; i++) {
    createRocket();
  }
  if (allowNewAnimation) {
    allowNewAnimation = false;
    update();
  }
}

function createRocket() {

  var posX = viewportWidth * 0.5;
  var posY = viewportHeight + 10;
  var velX = Math.random() * 9 - 4.5;
  var velY = 0;
  var targetX = 0;
  var targetY = 100 + Math.random() * 150;

  var rocket = new _rocket2.default(posX, posY, velX, velY, targetX, targetY);
  particles.push(rocket);
}

/**
 * Animation and State Updating
 */

function update() {
  if (!particles.length) {
    allowNewAnimation = true;
    return;
  }
  clearContext();
  drawParticles();
  (0, _raf2.default)(update);
}

function clearContext() {
  mainContext.clearRect(0, 0, viewportWidth, viewportHeight);
}

function drawParticles() {
  var num = particles.length;

  while (num--) {

    var particle = particles[num];
    particle.update();

    if (particle.dead()) {

      particles.splice(num, 1);

      if (particle instanceof _rocket2.default) {
        var newParticles = particle.explode();
        particles.push.apply(particles, _toConsumableArray(newParticles));
      }
    }

    particle.render(mainContext);
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.html";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(13);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../css-loader/index.js!./furtive.min.css", function() {
			var newContent = require("!!./../../css-loader/index.js!./furtive.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(14);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _kittyUl = __webpack_require__(18);

var _kittyUl2 = _interopRequireDefault(_kittyUl);

var _kittyUm = __webpack_require__(19);

var _kittyUm2 = _interopRequireDefault(_kittyUm);

var _kittyUr = __webpack_require__(20);

var _kittyUr2 = _interopRequireDefault(_kittyUr);

var _kittyLl = __webpack_require__(15);

var _kittyLl2 = _interopRequireDefault(_kittyLl);

var _kittyLm = __webpack_require__(16);

var _kittyLm2 = _interopRequireDefault(_kittyLm);

var _kittyLr = __webpack_require__(17);

var _kittyLr2 = _interopRequireDefault(_kittyLr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var kittySrcs = [_kittyUl2.default, _kittyUm2.default, _kittyUr2.default, _kittyLl2.default, _kittyLm2.default, _kittyLr2.default];

var kittyImages = Array(6).fill(null).map(function (_, idx) {
  var kitty = new Image();
  kitty.src = kittySrcs[idx];
  return kitty;
});

function randomKittyImage() {
  var idx = Math.floor(Math.random() * kittyImages.length);
  return kittyImages[idx];
}

exports.default = randomKittyImage;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _particle = __webpack_require__(0);

var _particle2 = _interopRequireDefault(_particle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GRAVITY = 0.10;

var Freefall = function (_Particle) {
  _inherits(Freefall, _Particle);

  function Freefall() {
    _classCallCheck(this, Freefall);

    return _possibleConstructorReturn(this, (Freefall.__proto__ || Object.getPrototypeOf(Freefall)).apply(this, arguments));
  }

  _createClass(Freefall, [{
    key: 'update',
    value: function update() {
      this.velY += GRAVITY;

      this.life -= this.fade;
      if (this.life < 0.5) this.alpha = Math.max(this.life * 2, 0);

      _get(Freefall.prototype.__proto__ || Object.getPrototypeOf(Freefall.prototype), 'update', this).call(this);
    }
  }]);

  return Freefall;
}(_particle2.default);

exports.default = Freefall;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _particle = __webpack_require__(0);

var _particle2 = _interopRequireDefault(_particle);

var _freefall = __webpack_require__(9);

var _freefall2 = _interopRequireDefault(_freefall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rocket = function (_Particle) {
  _inherits(Rocket, _Particle);

  function Rocket(posX, posY, velX, velY) {
    var targetX = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var targetY = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    _classCallCheck(this, Rocket);

    var _this = _possibleConstructorReturn(this, (Rocket.__proto__ || Object.getPrototypeOf(Rocket)).call(this, posX, posY, velX, velY));

    _this.targetX = targetX;
    _this.targetY = targetY;
    _this.easing = Math.random() * 0.02;
    return _this;
  }

  _createClass(Rocket, [{
    key: 'update',
    value: function update() {
      var distance = this.targetY - this.posY;

      this.velY = distance * (0.03 + this.easing);
      this.life = Math.min(distance * distance * 0.00005, 1);

      _get(Rocket.prototype.__proto__ || Object.getPrototypeOf(Rocket.prototype), 'update', this).call(this);
    }
  }, {
    key: 'explode',
    value: function explode() {
      var count = 100;
      var angle = Math.PI * 2 / count;
      var particles = [];

      while (count--) {
        var particleAngle = count * angle;
        var randomScalar = 4 + Math.random() * 4;
        var velX = Math.cos(particleAngle) * randomScalar;
        var velY = Math.sin(particleAngle) * randomScalar;
        var particle = new _freefall2.default(this.posX, this.posY, velX, velY);
        particles.push(particle);
      }

      return particles;
    }
  }]);

  return Rocket;
}(_particle2.default);

exports.default = Rocket;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Call this function with a canvas 2D context as `this`.
 * http://creativejs.com/2012/01/day-10-drawing-rotated-images-into-canvas/
 */

var RADIANS_PER_DEGREE = Math.PI / 180;

function drawRotatedImage(image, _ref) {
  var x = _ref.x,
      y = _ref.y,
      _ref$angle = _ref.angle,
      angle = _ref$angle === undefined ? 0 : _ref$angle,
      _ref$scale = _ref.scale,
      scale = _ref$scale === undefined ? 1 : _ref$scale,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 1 : _ref$alpha;


  this.save();

  this.translate(x, y);

  this.rotate(angle * RADIANS_PER_DEGREE);

  if (typeof alpha === 'number') this.globalAlpha = alpha;

  var scaledWidth = image.width * scale;
  var scaledHeight = image.height * scale;
  var xEdge = -(scaledWidth / 2);
  var yEdge = -(scaledHeight / 2);

  this.drawImage(image, xEdge, yEdge, scaledWidth, scaledHeight);

  this.restore();
}

exports.default = drawRotatedImage;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addOptimizedResizeListener;

var _raf = __webpack_require__(2);

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var throttleEventAs = function throttleEventAs(type, name) {
  var obj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;

  var running = false;
  var func = function func() {
    if (running) return;
    running = true;
    (0, _raf2.default)(function () {
      obj.dispatchEvent(new CustomEvent(name));
      running = false;
    });
  };
  obj.addEventListener(type, func);
}; // Optimized resize using RAF
// https://developer.mozilla.org/en-US/docs/Web/Events/resize

throttleEventAs('resize', 'optimizedResize');

function addOptimizedResizeListener(func) {
  window.addEventListener('optimizedResize', func);
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "body{margin:0}aside,details,main,summary{display:block}template{display:none}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}.grd{padding-left:1rem;padding-right:1rem}.grd-row{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:100%}.grd-row-col-1-6{max-width:16.6666666667%;-ms-flex-preferred-size:16.6666666667%;flex-basis:16.6666666667%}.grd-row-col-2-6{max-width:33.3333333333%;-ms-flex-preferred-size:33.3333333333%;flex-basis:33.3333333333%}.grd-row-col-3-6{max-width:50%;-ms-flex-preferred-size:50%;flex-basis:50%}.grd-row-col-4-6{max-width:66.6666666667%;-ms-flex-preferred-size:66.6666666667%;flex-basis:66.6666666667%}.grd-row-col-5-6{max-width:83.3333333333%;-ms-flex-preferred-size:83.3333333333%;flex-basis:83.3333333333%}.grd-row-col-6{max-width:100%;-ms-flex-preferred-size:100%;flex-basis:100%}.grd-row-col-1-6,.grd-row-col-1-6--lg,.grd-row-col-1-6--md,.grd-row-col-1-6--sm,.grd-row-col-2-6,.grd-row-col-2-6--lg,.grd-row-col-2-6--md,.grd-row-col-2-6--sm,.grd-row-col-3-6,.grd-row-col-3-6--lg,.grd-row-col-3-6--md,.grd-row-col-3-6--sm,.grd-row-col-4-6,.grd-row-col-4-6--lg,.grd-row-col-4-6--md,.grd-row-col-4-6--sm,.grd-row-col-5-6,.grd-row-col-5-6--lg,.grd-row-col-5-6--md,.grd-row-col-5-6--sm,.grd-row-col-6,.grd-row-col-6--lg,.grd-row-col-6--md,.grd-row-col-6--sm{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;box-sizing:border-box}.grd-row-col-1-6--lg,.grd-row-col-1-6--md,.grd-row-col-1-6--sm,.grd-row-col-2-6--lg,.grd-row-col-2-6--md,.grd-row-col-2-6--sm,.grd-row-col-3-6--lg,.grd-row-col-3-6--md,.grd-row-col-3-6--sm,.grd-row-col-4-6--lg,.grd-row-col-4-6--md,.grd-row-col-4-6--sm,.grd-row-col-5-6--lg,.grd-row-col-5-6--md,.grd-row-col-5-6--sm,.grd-row-col-6--lg,.grd-row-col-6--md,.grd-row-col-6--sm{max-width:100%;-ms-flex-preferred-size:100%;flex-basis:100%}@media screen and (min-width:32rem){.grd-row-col-1-6--sm{max-width:16.6666666667%;-ms-flex-preferred-size:16.6666666667%;flex-basis:16.6666666667%}.grd-row-col-2-6--sm{max-width:33.3333333333%;-ms-flex-preferred-size:33.3333333333%;flex-basis:33.3333333333%}.grd-row-col-3-6--sm{max-width:50%;-ms-flex-preferred-size:50%;flex-basis:50%}.grd-row-col-4-6--sm{max-width:66.6666666667%;-ms-flex-preferred-size:66.6666666667%;flex-basis:66.6666666667%}.grd-row-col-5-6--sm{max-width:83.3333333333%;-ms-flex-preferred-size:83.3333333333%;flex-basis:83.3333333333%}.grd-row-col-6--sm{max-width:100%;-ms-flex-preferred-size:100%;flex-basis:100%}}@media screen and (min-width:48rem){.grd-row-col-1-6--md{max-width:16.6666666667%;-ms-flex-preferred-size:16.6666666667%;flex-basis:16.6666666667%}.grd-row-col-2-6--md{max-width:33.3333333333%;-ms-flex-preferred-size:33.3333333333%;flex-basis:33.3333333333%}.grd-row-col-3-6--md{max-width:50%;-ms-flex-preferred-size:50%;flex-basis:50%}.grd-row-col-4-6--md{max-width:66.6666666667%;-ms-flex-preferred-size:66.6666666667%;flex-basis:66.6666666667%}.grd-row-col-5-6--md{max-width:83.3333333333%;-ms-flex-preferred-size:83.3333333333%;flex-basis:83.3333333333%}.grd-row-col-6--md{max-width:100%;-ms-flex-preferred-size:100%;flex-basis:100%}}@media screen and (min-width:64rem){.grd-row-col-1-6--lg{max-width:16.6666666667%;-ms-flex-preferred-size:16.6666666667%;flex-basis:16.6666666667%}.grd-row-col-2-6--lg{max-width:33.3333333333%;-ms-flex-preferred-size:33.3333333333%;flex-basis:33.3333333333%}.grd-row-col-3-6--lg{max-width:50%;-ms-flex-preferred-size:50%;flex-basis:50%}.grd-row-col-4-6--lg{max-width:66.6666666667%;-ms-flex-preferred-size:66.6666666667%;flex-basis:66.6666666667%}.grd-row-col-5-6--lg{max-width:83.3333333333%;-ms-flex-preferred-size:83.3333333333%;flex-basis:83.3333333333%}.grd-row-col-6--lg{max-width:100%;-ms-flex-preferred-size:100%;flex-basis:100%}}*,:after,:before{box-sizing:border-box}.measure{max-width:48rem;margin:0 auto}a{color:#3498db}a:active,a:focus,a:hover{color:#258bcf}.bg--red{background-color:#e74c3c}.bg--orange{background-color:#f39c12}.bg--blue{background-color:#3498db}.bg--green{background-color:#25ba84}.bg--white{background-color:#fff}.bg--light-gray{background-color:rgba(216,216,216,.99)}.bg--mid-gray{background-color:rgba(144,144,144,.99)}.bg--dark-gray{background-color:rgba(72,72,72,.99)}.bg--off-white{background-color:rgba(250,250,250,.99)}.fnt--red{color:#e74c3c}.fnt--orange{color:#f39c12}.fnt--blue{color:#3498db}.fnt--green{color:#25ba84}.fnt--white{color:#fff}.fnt--light-gray{color:rgba(216,216,216,.99)}.fnt--mid-gray{color:rgba(144,144,144,.99)}.fnt--dark-gray{color:rgba(72,72,72,.99)}.fnt--off-white{color:rgba(250,250,250,.99)}.m0{margin:0}.mx0{margin-left:0;margin-right:0}.my0{margin-top:0;margin-bottom:0}.m1{margin:1rem}.mx1{margin-left:1rem;margin-right:1rem}.my1{margin-top:1rem;margin-bottom:1rem}.m2{margin:2rem}.mx2{margin-left:2rem;margin-right:2rem}.my2{margin-top:2rem;margin-bottom:2rem}.p0{padding:0}.px0{padding-left:0;padding-right:0}.py0{padding-top:0;padding-bottom:0}.p1{padding:1rem}.px1{padding-left:1rem;padding-right:1rem}.py1{padding-top:1rem;padding-bottom:1rem}.p2{padding:2rem}.px2{padding-left:2rem;padding-right:2rem}.py2{padding-top:2rem;padding-bottom:2rem}html{font-size:12px}@media screen and (min-width:32rem) and (max-width:48rem){html{font-size:15px}}@media screen and (min-width:48rem){html{font-size:16px}}body{font-family:HelveticaNeue-Light,\"Helvetica Neue Light\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-weight:400;line-height:1.85;color:#333}.p,p{font-size:1rem;margin-bottom:1.3rem}.h1,.h2,.h3,.h4,h1,h2,h3,h4{margin:1.414rem 0 .5rem;font-weight:inherit;line-height:1.42}.h1,h1{margin-top:0;font-size:3.998rem}.h2,h2{font-size:2.827rem}.h3,h3{font-size:1.999rem}.h4,h4{font-size:1.414rem}.h5,h5,table th{font-size:1.121rem}.h6,h6{font-size:.88rem}.btn--s,.small,small{font-size:.707em}code,pre{font-family:Monaco,\"Lucida Console\",Courier,monospace}.italic{font-style:italic}.thin{font-weight:100}.bold{font-weight:700}.caps,table th{font-variant:small-caps}.justify{text-align:justify}.ellipsis{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.muted{opacity:.7}.clearfix:after{content:\"\";display:table;clear:both}.flt--left{float:left}.flt--right{float:right}.flt--none{float:none}.center{margin:auto auto}.txt--center{text-align:center}.txt--right{text-align:right}.txt--left,table th{text-align:left}.oflow-y--scroll{overflow-y:scroll}.w100,.w100--s{width:100%;display:block}@media screen and (min-width:32rem){.w100--s{width:auto;display:inline-block}}canvas,iframe,img,select,svg,textarea,video{max-width:100%}.brdr--rounded,.btn,.btn--blue,.btn--gray,.btn--green,.btn--link,.btn--red{border-radius:3px}.brdr--light-gray{border:thin solid rgba(216,216,216,.99)}.brdr--mid-gray{border:thin solid rgba(144,144,144,.99)}.brdr--dark-gray{border:thin solid rgba(72,72,72,.99)}.brdr--off-white{border:thin solid rgba(250,250,250,.99)}.btn,.btn--blue,.btn--gray,.btn--green,.btn--link,.btn--red{padding:.5rem 1rem;border:2px solid #ccc;color:#333;text-decoration:none;text-align:center;background:0 0}.btn:active,.btn:focus,.btn:hover{background-color:rgba(0,0,0,.05);color:#292929}.btn--link{border-color:transparent;color:#3498db}.btn--link:hover{background-color:transparent;color:#2383c4}.btn--blue{border-color:#2d94da;background-color:#3498db;color:#fff}.btn--blue:active,.btn--blue:focus,.btn--blue:hover{color:#fff;background-color:#258bcf}.btn--green{border-color:#24b37f;background-color:#25ba84;color:#fff}.btn--green:active,.btn--green:focus,.btn--green:hover{color:#fff;background-color:#21a777}.btn--gray{border-color:rgba(68,68,68,.99);background-color:rgba(72,72,72,.99);color:#fff}.btn--gray:active,.btn--gray:focus,.btn--gray:hover{color:#fff;background-color:rgba(65,65,65,.99)}.btn--red{border-color:#e5402f;background-color:#e74c3c;color:#fff}.btn--red:active,.btn--red:focus,.btn--red:hover{color:#fff;background-color:#e43422}.btn--s{padding:.5rem}.list--unstyled{list-style-type:none}input,select,textarea{padding:.5rem;margin-bottom:.5rem;display:block;width:100%;box-shadow:none;border:thin solid rgba(216,216,216,.99)}input[type=submit]{margin-top:.85rem}input[type=checkbox]{display:inline-block;vertical-align:bottom;width:auto}.media{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}.media .media-figure{margin-right:1em}.media .media-body{-ms-flex:1 0 0;flex:1 0 0}table>thead{border-bottom:thin solid rgba(250,250,250,.99)}table td,table th{padding:.25rem;word-wrap:normal;line-height:1}", ""]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "#main {\n  padding: 20px;\n  text-align: center;\n}\n\n#title {\n  font-size: 2.5em;\n  text-transform: uppercase;\n  letter-spacing: 0.25em;\n}\n\n#catfetti {\n  position: fixed;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n", ""]);

// exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kitty-ll.png";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kitty-lm.png";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kitty-lr.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kitty-ul.png";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kitty-um.png";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/kitty-ur.png";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
(function() {
  var getNanoSeconds, hrtime, loadTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - loadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    loadTime = getNanoSeconds();
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ }),
/* 22 */
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

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

var _catfetti = __webpack_require__(4);

var _catfetti2 = _interopRequireDefault(_catfetti);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.addEventListener('load', function init() {
  window.removeEventListener('load', init, false);
  (0, _catfetti2.default)();
});

console.log('Meow!');

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map