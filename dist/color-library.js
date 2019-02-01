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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_colorFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/colorFactory */ "./src/colorFactory.js");
/* harmony import */ var _src_colorFactory__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_colorFactory__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_rgbFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/rgbFactory */ "./src/rgbFactory.js");
/* harmony import */ var _src_rgbFactory__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_rgbFactory__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_hexFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/hexFactory */ "./src/hexFactory.js");
/* harmony import */ var _src_hexFactory__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_hexFactory__WEBPACK_IMPORTED_MODULE_2__);




(function (window) {
  window.RGB = _src_colorFactory__WEBPACK_IMPORTED_MODULE_0___default()(_src_rgbFactory__WEBPACK_IMPORTED_MODULE_1___default.a);
  window.HEX = _src_colorFactory__WEBPACK_IMPORTED_MODULE_0___default()(_src_hexFactory__WEBPACK_IMPORTED_MODULE_2___default.a);
})(window);

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

var decimalToHex = function decimalToHex(dec) {
  var valToStr = dec.toString(16);
  return valToStr.length % 2 ? '0' + valToStr : valToStr;
};

var rgbToHex = function rgbToHex(value) {
  return Array.from(value, decimalToHex).join('').toUpperCase();
};

var hexToRgb = function hexToRgb(value) {
  var explodedValue = value.match(/.{1,2}/g);
  return Array.from(explodedValue, function (val) {
    return parseInt(val, 16);
  });
};

var publicMethods = {
  toHex: function toHex() {
    if (this.format === 'rgb') return rgbToHex(this.get());
    return '#' + this.get();
  },
  toRgb: function toRgb() {
    if (this.format === 'hex') return hexToRgb(this.get());
    return this.toString();
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

var hexPrototype = function hexPrototype(hex) {
  var value = hex.length === 3 || hex.length === 6 ? hex : undefined;
  if (typeof value === 'undefined') throw Error('ERROR');
  return _objectSpread({}, api, {
    format: 'hex',
    set: function set(hexVal) {
      value = hexVal;
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

module.exports = hexPrototype;

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

var rgbPrototype = function rgbPrototype(r, g, b) {
  var value = [r, g, b];
  return _objectSpread({}, api, {
    format: 'rgb',
    set: function set(r, g, b) {
      value = [r, g, b];
      return this;
    },
    get: function get() {
      return value;
    },
    toString: function toString() {
      return "".concat(this.format, "(").concat(this.get().join(', '), ")");
    }
  });
};

module.exports = rgbPrototype;

/***/ })

/******/ });
//# sourceMappingURL=color-library.js.map