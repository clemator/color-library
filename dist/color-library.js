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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rgb = __webpack_require__(/*! ./src/rgbFactory */ "./src/rgbFactory.js");

var hex = __webpack_require__(/*! ./src/hexFactory */ "./src/hexFactory.js");

var hsl = __webpack_require__(/*! ./src/hslFactory */ "./src/hslFactory.js");

module.exports = {
  'color-library': {
    RGB: rgb,
    HEX: hex,
    HSL: hsl
  }
};

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var RGB = __webpack_require__(/*! ./rgbFactory */ "./src/rgbFactory.js");

var HEX = __webpack_require__(/*! ./hexFactory */ "./src/hexFactory.js");

var HSL = __webpack_require__(/*! ./hslFactory */ "./src/hslFactory.js");

var decimalToHex = function decimalToHex(dec) {
  var valToStr = dec.toString(16);
  return valToStr.length % 2 ? '0' + valToStr : valToStr;
};

var hue2rgb = function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
};

var rgbToHex = function rgbToHex(ref) {
  return HEX(Array.from(ref.get(), decimalToHex).join('').toUpperCase());
};

var hexToRgb = function hexToRgb(ref) {
  var explodedValue = ref.get().match(/.{1,2}/g);
  return RGB.apply(void 0, _toConsumableArray(Array.from(explodedValue, function (val) {
    return parseInt(val, 16);
  })));
};

var rgbToHsl = function rgbToHsl(ref) {
  var h = 0;
  var s = 0;
  var l;
  var transformedValue = ref.get().map(function (v) {
    return v / 255;
  });
  var r = transformedValue[0];
  var g = transformedValue[1];
  var b = transformedValue[2];
  var max = Math.max.apply(Math, _toConsumableArray(transformedValue));
  var min = Math.min.apply(Math, _toConsumableArray(transformedValue));
  l = (max + min) / 2;

  if (max !== min) {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;

      case g:
        h = (b - r) / d + 2;
        break;

      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return HSL(h, s, l);
};

var hslToRgb = function hslToRgb(ref) {
  var h = ref.get()[0];
  var s = ref.get()[1];
  var l = ref.get()[2];
  var r = l;
  var g = l;
  var b = l;

  if (s !== 0) {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return RGB(r * 255, g * 255, b * 255);
};

var publicMethods = {
  toHex: function toHex() {
    if (this.format() === 'rgb') return rgbToHex(this);else if (this.format() === 'hsl') return rgbToHex(hslToRgb(this));
    return this;
  },
  toRgb: function toRgb() {
    if (this.format() === 'hex') return hexToRgb(this);else if (this.format() === 'hsl') return hslToRgb(this);
    return this;
  },
  toHsl: function toHsl() {
    if (this.format() === 'rgb') return rgbToHsl(this);else if (this.format() === 'hex') return rgbToHsl(hexToRgb(this));
    return this;
  }
};
module.exports = publicMethods;

/***/ }),

/***/ "./src/colorFactory.js":
/*!*****************************!*\
  !*** ./src/colorFactory.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var colorFactory = function colorFactory(type) {
  return function () {
    return Object.create(type.apply(void 0, arguments));
  };
};

module.exports = colorFactory;

/***/ }),

/***/ "./src/hexFactory.js":
/*!***************************!*\
  !*** ./src/hexFactory.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var api = __webpack_require__(/*! ./api */ "./src/api.js");

var colorFactory = __webpack_require__(/*! ./colorFactory */ "./src/colorFactory.js");

var authorizedValueList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

var valueChecking = function valueChecking(v) {
  try {
    var value = typeof v === 'string' && (v.length === 3 || v.length === 6) ? v : undefined;
    if (typeof value === 'undefined') throw Error('HEX value supports only 6 or 3 chars length');
    var checkValue = Array.from(value).find(function (val) {
      return authorizedValueList.indexOf(val) === -1;
    });
    if (typeof checkValue !== 'undefined') throw Error("HEX value ".concat(checkValue, " is invalid"));
    return value;
  } catch (e) {
    console.error(e.toString());
  }
};

var hexPrototype = function hexPrototype(hex) {
  var value = valueChecking(hex);
  var _format = 'hex';
  return _objectSpread({}, api, {
    format: function format() {
      return _format;
    },
    set: function set(hexVal) {
      value = valueChecking(hexVal);
      return this;
    },
    get: function get() {
      return value;
    },
    toString: function toString() {
      return "#".concat(this.get());
    }
  });
};

module.exports = colorFactory(hexPrototype);

/***/ }),

/***/ "./src/hslFactory.js":
/*!***************************!*\
  !*** ./src/hslFactory.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var api = __webpack_require__(/*! ./api */ "./src/api.js");

var colorFactory = __webpack_require__(/*! ./colorFactory */ "./src/colorFactory.js");

var valueChecking = function valueChecking(h, s, l) {
  try {
    if (typeof h === 'undefined' || typeof s === 'undefined' || typeof l === 'undefined') throw Error('HSL value is missing one or many arguments');
    var hueValue = typeof h === 'number' && h >= 0 && h <= 1 ? h : undefined;
    var saturationValue = typeof s === 'number' && s >= 0 && s <= 1 ? s : undefined;
    var lightnessValue = typeof l === 'number' && l >= 0 && l <= 1 ? l : undefined;
    if (typeof hueValue === 'undefined' || typeof saturationValue === 'undefined' || typeof lightnessValue === 'undefined') throw Error('HSL value supports only a number between 0 and 1');
    return [h, s, l];
  } catch (e) {
    console.error(e.toString());
  }
};

var hslPrototype = function hslPrototype(h, s, l) {
  var value = valueChecking(h, s, l);
  var _format = 'hsl';
  return _objectSpread({}, api, {
    format: function format() {
      return _format;
    },
    set: function set(h, s, l) {
      value = valueChecking(h, s, l);
      return this;
    },
    get: function get() {
      return value;
    },
    toString: function toString() {
      return "".concat(this.format(), "(").concat(this.get().join(', '), ")");
    }
  });
};

module.exports = colorFactory(hslPrototype);

/***/ }),

/***/ "./src/rgbFactory.js":
/*!***************************!*\
  !*** ./src/rgbFactory.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var api = __webpack_require__(/*! ./api */ "./src/api.js");

var colorFactory = __webpack_require__(/*! ./colorFactory */ "./src/colorFactory.js");

var valueChecking = function valueChecking(r, g, b) {
  try {
    if (typeof r === 'undefined' || typeof g === 'undefined' || typeof b === 'undefined') throw Error('RGB value is missing one or many arguments');
    var redValue = typeof r === 'number' && r >= 0 && r <= 255 ? r : undefined;
    var greenValue = typeof g === 'number' && g >= 0 && g <= 255 ? g : undefined;
    var blueValue = typeof b === 'number' && b >= 0 && b <= 255 ? b : undefined;
    if (typeof redValue === 'undefined' || typeof greenValue === 'undefined' || typeof blueValue === 'undefined') throw Error('RGB value supports only a number between 0 and 255');
    return [r, g, b];
  } catch (e) {
    console.error(e.toString());
  }
};

var rgbPrototype = function rgbPrototype(r, g, b) {
  var value = valueChecking(r, g, b);
  var _format = 'rgb';
  return _objectSpread({}, api, {
    format: function format() {
      return _format;
    },
    set: function set(r, g, b) {
      value = valueChecking(r, g, b);
      return this;
    },
    get: function get() {
      return value;
    },
    toString: function toString() {
      return "".concat(this.format(), "(").concat(this.get().join(', '), ")");
    }
  });
};

module.exports = colorFactory(rgbPrototype);

/***/ })

/******/ });
//# sourceMappingURL=color-library.js.map