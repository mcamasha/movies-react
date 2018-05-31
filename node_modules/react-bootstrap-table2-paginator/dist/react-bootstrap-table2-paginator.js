(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrapTable2Paginator"] = factory(require("react"));
	else
		root["ReactBootstrapTable2Paginator"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(6)();
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  PAGINATION_SIZE: 5,
  PAGE_START_INDEX: 1,
  With_FIRST_AND_LAST: true,
  SHOW_ALL_PAGE_BTNS: false,
  FIRST_PAGE_TEXT: '<<',
  PRE_PAGE_TEXT: '<',
  NEXT_PAGE_TEXT: '>',
  LAST_PAGE_TEXT: '>>',
  NEXT_PAGE_TITLE: 'next page',
  LAST_PAGE_TITLE: 'last page',
  PRE_PAGE_TITLE: 'previous page',
  FIRST_PAGE_TITLE: 'first page',
  SIZE_PER_PAGE_LIST: [10, 25, 30, 50],
  HIDE_SIZE_PER_PAGE: false,
  HIDE_PAGE_LIST_ONLY_ONE_PAGE: false
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wrapper = __webpack_require__(5);

var _wrapper2 = _interopRequireDefault(_wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    wrapperFactory: _wrapper2.default,
    options: options
  };
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

var _pagination = __webpack_require__(10);

var _pagination2 = _interopRequireDefault(_pagination);

var _page = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */


exports.default = function (Base, _ref) {
  var _class, _temp;

  var remoteResolver = _ref.remoteResolver;
  return _temp = _class = function (_remoteResolver) {
    _inherits(PaginationWrapper, _remoteResolver);

    function PaginationWrapper(props) {
      _classCallCheck(this, PaginationWrapper);

      var _this = _possibleConstructorReturn(this, (PaginationWrapper.__proto__ || Object.getPrototypeOf(PaginationWrapper)).call(this, props));

      _this.handleChangePage = _this.handleChangePage.bind(_this);
      _this.handleChangeSizePerPage = _this.handleChangeSizePerPage.bind(_this);

      var currPage = void 0;
      var currSizePerPage = void 0;
      var options = props.pagination.options;

      var sizePerPageList = options.sizePerPageList || _const2.default.SIZE_PER_PAGE_LIST;

      // initialize current page
      if (typeof options.page !== 'undefined') {
        currPage = options.page;
      } else if (typeof options.pageStartIndex !== 'undefined') {
        currPage = options.pageStartIndex;
      } else {
        currPage = _const2.default.PAGE_START_INDEX;
      }

      // initialize current sizePerPage
      if (typeof options.sizePerPage !== 'undefined') {
        currSizePerPage = options.sizePerPage;
      } else if (_typeof(sizePerPageList[0]) === 'object') {
        currSizePerPage = sizePerPageList[0].value;
      } else {
        currSizePerPage = sizePerPageList[0];
      }

      _this.state = { currPage: currPage, currSizePerPage: currSizePerPage };
      _this.saveToStore(currPage, currSizePerPage);
      return _this;
    }

    _createClass(PaginationWrapper, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var needNewState = false;
        var _state = this.state,
            currPage = _state.currPage,
            currSizePerPage = _state.currSizePerPage;
        var _nextProps$pagination = nextProps.pagination.options,
            page = _nextProps$pagination.page,
            sizePerPage = _nextProps$pagination.sizePerPage,
            pageStartIndex = _nextProps$pagination.pageStartIndex,
            onPageChange = _nextProps$pagination.onPageChange;


        if (typeof page !== 'undefined' && currPage !== page) {
          // user defined page
          currPage = page;
          needNewState = true;
        } else if (nextProps.isDataChanged) {
          // user didn't defined page but data change
          currPage = typeof pageStartIndex !== 'undefined' ? pageStartIndex : _const2.default.PAGE_START_INDEX;
          needNewState = true;
        }

        if (typeof sizePerPage !== 'undefined') {
          currSizePerPage = sizePerPage;
          needNewState = true;
        }

        this.saveToStore(currPage, currSizePerPage);

        if (needNewState) {
          if (onPageChange) {
            onPageChange(currPage, currSizePerPage);
          }
          this.setState(function () {
            return { currPage: currPage, currSizePerPage: currSizePerPage };
          });
        }
      }
    }, {
      key: 'saveToStore',
      value: function saveToStore(page, sizePerPage) {
        this.props.store.page = page;
        this.props.store.sizePerPage = sizePerPage;
      }
    }, {
      key: 'handleChangePage',
      value: function handleChangePage(currPage) {
        var currSizePerPage = this.state.currSizePerPage;
        var options = this.props.pagination.options;

        this.saveToStore(currPage, currSizePerPage);

        if (options.onPageChange) {
          options.onPageChange(currPage, currSizePerPage);
        }
        if (this.isRemotePagination()) {
          this.handleRemotePageChange();
          return;
        }
        this.setState(function () {
          return { currPage: currPage };
        });
      }
    }, {
      key: 'handleChangeSizePerPage',
      value: function handleChangeSizePerPage(currSizePerPage, currPage) {
        var options = this.props.pagination.options;

        this.saveToStore(currPage, currSizePerPage);

        if (options.onSizePerPageChange) {
          options.onSizePerPageChange(currSizePerPage, currPage);
        }
        if (this.isRemotePagination()) {
          this.handleRemotePageChange();
          return;
        }
        this.setState(function () {
          return {
            currPage: currPage,
            currSizePerPage: currSizePerPage
          };
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            options = _props.pagination.options,
            store = _props.store;
        var _state2 = this.state,
            currPage = _state2.currPage,
            currSizePerPage = _state2.currSizePerPage;

        var withFirstAndLast = typeof options.withFirstAndLast === 'undefined' ? _const2.default.With_FIRST_AND_LAST : options.withFirstAndLast;
        var alwaysShowAllBtns = typeof options.alwaysShowAllBtns === 'undefined' ? _const2.default.SHOW_ALL_PAGE_BTNS : options.alwaysShowAllBtns;
        var hideSizePerPage = typeof options.hideSizePerPage === 'undefined' ? _const2.default.HIDE_SIZE_PER_PAGE : options.hideSizePerPage;
        var hidePageListOnlyOnePage = typeof options.hidePageListOnlyOnePage === 'undefined' ? _const2.default.HIDE_PAGE_LIST_ONLY_ONE_PAGE : options.hidePageListOnlyOnePage;
        var pageStartIndex = typeof options.pageStartIndex === 'undefined' ? _const2.default.PAGE_START_INDEX : options.pageStartIndex;

        var data = this.isRemotePagination() ? this.props.data : (0, _page.getByCurrPage)(store, pageStartIndex);

        return [_react2.default.createElement(Base, _extends({ key: 'table' }, this.props, { data: data })), _react2.default.createElement(_pagination2.default, {
          key: 'pagination',
          dataSize: options.totalSize || store.data.length,
          currPage: currPage,
          currSizePerPage: currSizePerPage,
          onPageChange: this.handleChangePage,
          onSizePerPageChange: this.handleChangeSizePerPage,
          sizePerPageList: options.sizePerPageList || _const2.default.SIZE_PER_PAGE_LIST,
          paginationSize: options.paginationSize || _const2.default.PAGINATION_SIZE,
          pageStartIndex: pageStartIndex,
          withFirstAndLast: withFirstAndLast,
          alwaysShowAllBtns: alwaysShowAllBtns,
          hideSizePerPage: hideSizePerPage,
          hidePageListOnlyOnePage: hidePageListOnlyOnePage,
          showTotal: options.showTotal,
          firstPageText: options.firstPageText || _const2.default.FIRST_PAGE_TEXT,
          prePageText: options.prePageText || _const2.default.PRE_PAGE_TEXT,
          nextPageText: options.nextPageText || _const2.default.NEXT_PAGE_TEXT,
          lastPageText: options.lastPageText || _const2.default.LAST_PAGE_TEXT,
          prePageTitle: options.prePageTitle || _const2.default.PRE_PAGE_TITLE,
          nextPageTitle: options.nextPageTitle || _const2.default.NEXT_PAGE_TITLE,
          firstPageTitle: options.firstPageTitle || _const2.default.FIRST_PAGE_TITLE,
          lastPageTitle: options.lastPageTitle || _const2.default.LAST_PAGE_TITLE
        })];
      }
    }]);

    return PaginationWrapper;
  }(remoteResolver(_react.Component)), _class.propTypes = {
    store: _propTypes2.default.object.isRequired
  }, _temp;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(7);
var invariant = __webpack_require__(8);
var ReactPropTypesSecret = __webpack_require__(9);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pageResolver2 = __webpack_require__(11);

var _pageResolver3 = _interopRequireDefault(_pageResolver2);

var _sizePerPageDropdown = __webpack_require__(12);

var _sizePerPageDropdown2 = _interopRequireDefault(_sizePerPageDropdown);

var _paginationList = __webpack_require__(14);

var _paginationList2 = _interopRequireDefault(_paginationList);

var _paginationTotal = __webpack_require__(16);

var _paginationTotal2 = _interopRequireDefault(_paginationTotal);

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */
/* eslint arrow-body-style: 0 */


var Pagination = function (_pageResolver) {
  _inherits(Pagination, _pageResolver);

  function Pagination(props) {
    _classCallCheck(this, Pagination);

    var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

    _this.closeDropDown = _this.closeDropDown.bind(_this);
    _this.toggleDropDown = _this.toggleDropDown.bind(_this);
    _this.handleChangePage = _this.handleChangePage.bind(_this);
    _this.handleChangeSizePerPage = _this.handleChangeSizePerPage.bind(_this);
    _this.state = _this.initialState();
    return _this;
  }

  _createClass(Pagination, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var dataSize = nextProps.dataSize,
          currSizePerPage = nextProps.currSizePerPage;

      if (currSizePerPage !== this.props.currSizePerPage || dataSize !== this.props.dataSize) {
        var totalPages = this.calculateTotalPage(currSizePerPage, dataSize);
        var lastPage = this.calculateLastPage(totalPages);
        this.setState({ totalPages: totalPages, lastPage: lastPage });
      }
    }
  }, {
    key: 'toggleDropDown',
    value: function toggleDropDown() {
      var dropdownOpen = !this.state.dropdownOpen;
      this.setState(function () {
        return { dropdownOpen: dropdownOpen };
      });
    }
  }, {
    key: 'closeDropDown',
    value: function closeDropDown() {
      this.setState(function () {
        return { dropdownOpen: false };
      });
    }
  }, {
    key: 'handleChangeSizePerPage',
    value: function handleChangeSizePerPage(sizePerPage) {
      var _props = this.props,
          currSizePerPage = _props.currSizePerPage,
          onSizePerPageChange = _props.onSizePerPageChange;

      var selectedSize = typeof sizePerPage === 'string' ? parseInt(sizePerPage, 10) : sizePerPage;
      var currPage = this.props.currPage;

      if (selectedSize !== currSizePerPage) {
        var newTotalPages = this.calculateTotalPage(selectedSize);
        var newLastPage = this.calculateLastPage(newTotalPages);
        if (currPage > newLastPage) currPage = newLastPage;
        onSizePerPageChange(selectedSize, currPage);
      }
      this.closeDropDown();
    }
  }, {
    key: 'handleChangePage',
    value: function handleChangePage(newPage) {
      var page = void 0;
      var _props2 = this.props,
          currPage = _props2.currPage,
          pageStartIndex = _props2.pageStartIndex,
          prePageText = _props2.prePageText,
          nextPageText = _props2.nextPageText,
          lastPageText = _props2.lastPageText,
          firstPageText = _props2.firstPageText,
          onPageChange = _props2.onPageChange;
      var lastPage = this.state.lastPage;


      if (newPage === prePageText) {
        page = this.backToPrevPage();
      } else if (newPage === nextPageText) {
        page = currPage + 1 > lastPage ? lastPage : currPage + 1;
      } else if (newPage === lastPageText) {
        page = lastPage;
      } else if (newPage === firstPageText) {
        page = pageStartIndex;
      } else {
        page = parseInt(newPage, 10);
      }

      // if (keepSizePerPageState) { this.closeDropDown(); }

      if (page !== currPage) {
        onPageChange(page);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          totalPages = _state.totalPages,
          lastPage = _state.lastPage,
          open = _state.dropdownOpen;
      var _props3 = this.props,
          showTotal = _props3.showTotal,
          sizePerPageList = _props3.sizePerPageList,
          currSizePerPage = _props3.currSizePerPage,
          hideSizePerPage = _props3.hideSizePerPage,
          hidePageListOnlyOnePage = _props3.hidePageListOnlyOnePage;

      var pages = this.calculatePageStatus(this.calculatePages(totalPages), lastPage);

      var _calculateFromTo = this.calculateFromTo(),
          _calculateFromTo2 = _slicedToArray(_calculateFromTo, 2),
          from = _calculateFromTo2[0],
          to = _calculateFromTo2[1];

      var pageListClass = (0, _classnames2.default)('react-bootstrap-table-pagination-list', 'col-md-6 col-xs-6 col-sm-6 col-lg-6', {
        'react-bootstrap-table-pagination-list-hidden': hidePageListOnlyOnePage && totalPages === 1
      });
      return _react2.default.createElement(
        'div',
        { className: 'row react-bootstrap-table-pagination' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-6 col-xs-6 col-sm-6 col-lg-6' },
          sizePerPageList.length > 1 && !hideSizePerPage ? _react2.default.createElement(_sizePerPageDropdown2.default, {
            currSizePerPage: '' + currSizePerPage,
            options: this.calculateSizePerPageStatus(),
            onSizePerPageChange: this.handleChangeSizePerPage,
            onClick: this.toggleDropDown,
            onBlur: this.closeDropDown,
            open: open
          }) : null,
          showTotal ? _react2.default.createElement(_paginationTotal2.default, {
            from: from,
            to: to,
            dataSize: this.props.dataSize
          }) : null
        ),
        _react2.default.createElement(
          'div',
          { className: pageListClass },
          _react2.default.createElement(_paginationList2.default, { pages: pages, onPageChange: this.handleChangePage })
        )
      );
    }
  }]);

  return Pagination;
}((0, _pageResolver3.default)(_react.Component));

Pagination.propTypes = {
  dataSize: _propTypes2.default.number.isRequired,
  sizePerPageList: _propTypes2.default.array.isRequired,
  currPage: _propTypes2.default.number.isRequired,
  currSizePerPage: _propTypes2.default.number.isRequired,
  onPageChange: _propTypes2.default.func.isRequired,
  onSizePerPageChange: _propTypes2.default.func.isRequired,
  pageStartIndex: _propTypes2.default.number,
  paginationSize: _propTypes2.default.number,
  firstPageText: _propTypes2.default.string,
  prePageText: _propTypes2.default.string,
  nextPageText: _propTypes2.default.string,
  lastPageText: _propTypes2.default.string,
  nextPageTitle: _propTypes2.default.string,
  prePageTitle: _propTypes2.default.string,
  firstPageTitle: _propTypes2.default.string,
  lastPageTitle: _propTypes2.default.string,
  withFirstAndLast: _propTypes2.default.bool,
  alwaysShowAllBtns: _propTypes2.default.bool,
  hideSizePerPage: _propTypes2.default.bool,
  hidePageListOnlyOnePage: _propTypes2.default.bool
};

Pagination.defaultProps = {
  pageStartIndex: _const2.default.PAGE_START_INDEX,
  paginationSize: _const2.default.PAGINATION_SIZE,
  withFirstAndLast: _const2.default.With_FIRST_AND_LAST,
  alwaysShowAllBtns: _const2.default.SHOW_ALL_PAGE_BTNS,
  firstPageText: _const2.default.FIRST_PAGE_TEXT,
  prePageText: _const2.default.PRE_PAGE_TEXT,
  nextPageText: _const2.default.NEXT_PAGE_TEXT,
  lastPageText: _const2.default.LAST_PAGE_TEXT,
  sizePerPageList: _const2.default.SIZE_PER_PAGE_LIST,
  nextPageTitle: _const2.default.NEXT_PAGE_TITLE,
  prePageTitle: _const2.default.PRE_PAGE_TITLE,
  firstPageTitle: _const2.default.FIRST_PAGE_TITLE,
  lastPageTitle: _const2.default.LAST_PAGE_TITLE,
  hideSizePerPage: _const2.default.HIDE_SIZE_PER_PAGE,
  hidePageListOnlyOnePage: _const2.default.HIDE_PAGE_LIST_ONLY_ONE_PAGE
};

exports.default = Pagination;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _const = __webpack_require__(2);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-mixed-operators: 0 */


exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(PageResolver, _ExtendBase);

    function PageResolver() {
      _classCallCheck(this, PageResolver);

      return _possibleConstructorReturn(this, (PageResolver.__proto__ || Object.getPrototypeOf(PageResolver)).apply(this, arguments));
    }

    _createClass(PageResolver, [{
      key: 'backToPrevPage',
      value: function backToPrevPage() {
        var _props = this.props,
            currPage = _props.currPage,
            pageStartIndex = _props.pageStartIndex;

        return currPage - 1 < pageStartIndex ? pageStartIndex : currPage - 1;
      }
    }, {
      key: 'goToNextPage',
      value: function goToNextPage() {
        var currPage = this.props.currPage;
        var lastPage = this.state.lastPage;

        return currPage + 1 > lastPage ? lastPage : currPage + 1;
      }
    }, {
      key: 'initialState',
      value: function initialState() {
        var totalPages = this.calculateTotalPage();
        var lastPage = this.calculateLastPage(totalPages);
        return { totalPages: totalPages, lastPage: lastPage, dropdownOpen: false };
      }
    }, {
      key: 'calculateTotalPage',
      value: function calculateTotalPage() {
        var sizePerPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.currSizePerPage;
        var dataSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.dataSize;

        return Math.ceil(dataSize / sizePerPage);
      }
    }, {
      key: 'calculateLastPage',
      value: function calculateLastPage(totalPages) {
        var pageStartIndex = this.props.pageStartIndex;

        return pageStartIndex + totalPages - 1;
      }
    }, {
      key: 'calculateFromTo',
      value: function calculateFromTo() {
        var _props2 = this.props,
            dataSize = _props2.dataSize,
            currPage = _props2.currPage,
            currSizePerPage = _props2.currSizePerPage,
            pageStartIndex = _props2.pageStartIndex;

        var offset = Math.abs(_const2.default.PAGE_START_INDEX - pageStartIndex);

        var from = (currPage - pageStartIndex) * currSizePerPage;
        from = dataSize === 0 ? 0 : from + 1;
        var to = Math.min(currSizePerPage * (currPage + offset) - 1, dataSize);
        if (to >= dataSize) to -= 1;

        return [from, to];
      }
    }, {
      key: 'calculatePages',
      value: function calculatePages() {
        var totalPages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.totalPages;
        var lastPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.lastPage;
        var _props3 = this.props,
            currPage = _props3.currPage,
            paginationSize = _props3.paginationSize,
            pageStartIndex = _props3.pageStartIndex,
            withFirstAndLast = _props3.withFirstAndLast,
            firstPageText = _props3.firstPageText,
            prePageText = _props3.prePageText,
            nextPageText = _props3.nextPageText,
            lastPageText = _props3.lastPageText,
            alwaysShowAllBtns = _props3.alwaysShowAllBtns;


        var pages = void 0;
        var endPage = totalPages;
        if (endPage <= 0) return [];

        var startPage = Math.max(currPage - Math.floor(paginationSize / 2), pageStartIndex);
        endPage = startPage + paginationSize - 1;

        if (endPage > lastPage) {
          endPage = lastPage;
          startPage = endPage - paginationSize + 1;
        }

        if (startPage !== pageStartIndex && totalPages > paginationSize && withFirstAndLast) {
          pages = [firstPageText, prePageText];
        } else if (totalPages > 1 || alwaysShowAllBtns) {
          pages = [prePageText];
        } else {
          pages = [];
        }

        for (var i = startPage; i <= endPage; i += 1) {
          if (i >= pageStartIndex) pages.push(i);
        }

        if (endPage <= lastPage && pages.length > 1) {
          pages.push(nextPageText);
        }
        if (endPage !== lastPage && withFirstAndLast) {
          pages.push(lastPageText);
        }
        return pages;
      }
    }, {
      key: 'calculatePageStatus',
      value: function calculatePageStatus() {
        var _this2 = this;

        var pages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var lastPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.lastPage;
        var _props4 = this.props,
            currPage = _props4.currPage,
            pageStartIndex = _props4.pageStartIndex,
            firstPageText = _props4.firstPageText,
            prePageText = _props4.prePageText,
            nextPageText = _props4.nextPageText,
            lastPageText = _props4.lastPageText,
            alwaysShowAllBtns = _props4.alwaysShowAllBtns;

        var isStart = function isStart(page) {
          return currPage === pageStartIndex && (page === firstPageText || page === prePageText);
        };
        var isEnd = function isEnd(page) {
          return currPage === lastPage && (page === nextPageText || page === lastPageText);
        };

        return pages.filter(function (page) {
          if (alwaysShowAllBtns) {
            return true;
          }
          return !(isStart(page) || isEnd(page));
        }).map(function (page) {
          var title = void 0;
          var active = page === currPage;
          var disabled = isStart(page) || isEnd(page);

          if (page === nextPageText) {
            title = _this2.props.nextPageTitle;
          } else if (page === prePageText) {
            title = _this2.props.prePageTitle;
          } else if (page === firstPageText) {
            title = _this2.props.firstPageTitle;
          } else if (page === lastPageText) {
            title = _this2.props.lastPageTitle;
          } else {
            title = '' + page;
          }

          return { page: page, active: active, disabled: disabled, title: title };
        });
      }
    }, {
      key: 'calculateSizePerPageStatus',
      value: function calculateSizePerPageStatus() {
        var sizePerPageList = this.props.sizePerPageList;

        return sizePerPageList.map(function (_sizePerPage) {
          var pageText = _sizePerPage.text || _sizePerPage;
          var pageNumber = _sizePerPage.value || _sizePerPage;
          return {
            text: '' + pageText,
            page: pageNumber
          };
        });
      }
    }]);

    return PageResolver;
  }(ExtendBase);
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _sizePerPageOption = __webpack_require__(13);

var _sizePerPageOption2 = _interopRequireDefault(_sizePerPageOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizePerPageDefaultClass = 'react-bs-table-sizePerPage-dropdown';

var SizePerPageDropDown = function SizePerPageDropDown(props) {
  var open = props.open,
      hidden = props.hidden,
      onClick = props.onClick,
      onBlur = props.onBlur,
      options = props.options,
      className = props.className,
      variation = props.variation,
      btnContextual = props.btnContextual,
      currSizePerPage = props.currSizePerPage,
      onSizePerPageChange = props.onSizePerPageChange;


  var dropDownStyle = { visibility: hidden ? 'hidden' : 'visible' };
  var dropdownClasses = (0, _classnames2.default)(open ? 'open show' : '', sizePerPageDefaultClass, variation, className);

  return _react2.default.createElement(
    'span',
    {
      style: dropDownStyle,
      className: dropdownClasses
    },
    _react2.default.createElement(
      'button',
      {
        id: 'pageDropDown',
        className: 'btn ' + btnContextual + ' dropdown-toggle',
        'data-toggle': 'dropdown',
        'aria-expanded': open,
        onClick: onClick,
        onBlur: onBlur
      },
      currSizePerPage,
      _react2.default.createElement(
        'span',
        null,
        ' ',
        _react2.default.createElement('span', { className: 'caret' })
      )
    ),
    _react2.default.createElement(
      'ul',
      { className: 'dropdown-menu', role: 'menu', 'aria-labelledby': 'pageDropDown' },
      options.map(function (option) {
        return _react2.default.createElement(_sizePerPageOption2.default, _extends({}, option, {
          key: option.text,
          onSizePerPageChange: onSizePerPageChange
        }));
      })
    )
  );
};

SizePerPageDropDown.propTypes = {
  currSizePerPage: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.array.isRequired,
  onClick: _propTypes2.default.func.isRequired,
  onBlur: _propTypes2.default.func.isRequired,
  onSizePerPageChange: _propTypes2.default.func.isRequired,
  open: _propTypes2.default.bool,
  hidden: _propTypes2.default.bool,
  btnContextual: _propTypes2.default.string,
  variation: _propTypes2.default.oneOf(['dropdown', 'dropup']),
  className: _propTypes2.default.string
};
SizePerPageDropDown.defaultProps = {
  open: false,
  hidden: false,
  btnContextual: 'btn-default btn-secondary',
  variation: 'dropdown',
  className: ''
};

exports.default = SizePerPageDropDown;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint jsx-a11y/href-no-hash: 0 */
var SizePerPageOption = function SizePerPageOption(_ref) {
  var text = _ref.text,
      page = _ref.page,
      onSizePerPageChange = _ref.onSizePerPageChange;
  return _react2.default.createElement(
    'li',
    { key: text, role: 'presentation', className: 'dropdown-item' },
    _react2.default.createElement(
      'a',
      {
        href: '#',
        tabIndex: '-1',
        role: 'menuitem',
        'data-page': page,
        onMouseDown: function onMouseDown(e) {
          e.preventDefault();
          onSizePerPageChange(page);
        }
      },
      text
    )
  );
};

SizePerPageOption.propTypes = {
  text: _propTypes2.default.string.isRequired,
  page: _propTypes2.default.number.isRequired,
  onSizePerPageChange: _propTypes2.default.func.isRequired
};

exports.default = SizePerPageOption;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pageButton = __webpack_require__(15);

var _pageButton2 = _interopRequireDefault(_pageButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaginatonList = function PaginatonList(props) {
  return _react2.default.createElement(
    'ul',
    { className: 'pagination react-bootstrap-table-page-btns-ul' },
    props.pages.map(function (pageProps) {
      return _react2.default.createElement(_pageButton2.default, _extends({
        key: pageProps.page
      }, pageProps, {
        onPageChange: props.onPageChange
      }));
    })
  );
};

PaginatonList.propTypes = {
  pages: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    page: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    active: _propTypes2.default.bool,
    disable: _propTypes2.default.bool,
    title: _propTypes2.default.string
  })).isRequired,
  onPageChange: _propTypes2.default.func.isRequired
};

exports.default = PaginatonList;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */
/* eslint jsx-a11y/href-no-hash: 0 */


var PageButton = function (_Component) {
  _inherits(PageButton, _Component);

  function PageButton(props) {
    _classCallCheck(this, PageButton);

    var _this = _possibleConstructorReturn(this, (PageButton.__proto__ || Object.getPrototypeOf(PageButton)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(PageButton, [{
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();
      this.props.onPageChange(this.props.page);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          page = _props.page,
          title = _props.title,
          active = _props.active,
          disabled = _props.disabled;

      var classes = (0, _classnames2.default)({
        active: active,
        disabled: disabled,
        'page-item': true
      });

      return _react2.default.createElement(
        'li',
        { className: classes, title: title },
        _react2.default.createElement(
          'a',
          { href: '#', onClick: this.handleClick, className: 'page-link' },
          page
        )
      );
    }
  }]);

  return PageButton;
}(_react.Component);

PageButton.propTypes = {
  onPageChange: _propTypes2.default.func.isRequired,
  page: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,
  active: _propTypes2.default.bool.isRequired,
  disabled: _propTypes2.default.bool.isRequired,
  title: _propTypes2.default.string
};

exports.default = PageButton;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaginationTotal = function PaginationTotal(props) {
  return _react2.default.createElement(
    'span',
    null,
    '\xA0Showing rows ',
    props.from,
    ' to\xA0',
    props.to + 1,
    ' of\xA0',
    props.dataSize
  );
};

PaginationTotal.propTypes = {
  from: _propTypes2.default.number.isRequired,
  to: _propTypes2.default.number.isRequired,
  dataSize: _propTypes2.default.number.isRequired
};

exports.default = PaginationTotal;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getByCurrPage = exports.getByCurrPage = function getByCurrPage(store, pageStartIndex) {
  var dataSize = store.data.length;
  if (!dataSize) return [];
  var getNormalizedPage = function getNormalizedPage() {
    var offset = Math.abs(1 - pageStartIndex);
    return store.page + offset;
  };
  var end = getNormalizedPage() * store.sizePerPage - 1;
  var start = end - (store.sizePerPage - 1);

  var result = [];
  for (var i = start; i <= end; i += 1) {
    result.push(store.data[i]);
    if (i + 1 === dataSize) break;
  }
  return result;
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0ZTcyYTM4NDMwNTcwNWM4NTY0OSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3Ivc3JjL3dyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9wYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9wYWdlLXJlc29sdmVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9zaXplLXBlci1wYWdlLWRyb3Bkb3duLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9zaXplLXBlci1wYWdlLW9wdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvcGFnaW5hdGlvbi1saXN0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9wYWdlLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvcGFnaW5hdGlvbi10b3RhbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvcGFnZS5qcyJdLCJuYW1lcyI6WyJQQUdJTkFUSU9OX1NJWkUiLCJQQUdFX1NUQVJUX0lOREVYIiwiV2l0aF9GSVJTVF9BTkRfTEFTVCIsIlNIT1dfQUxMX1BBR0VfQlROUyIsIkZJUlNUX1BBR0VfVEVYVCIsIlBSRV9QQUdFX1RFWFQiLCJORVhUX1BBR0VfVEVYVCIsIkxBU1RfUEFHRV9URVhUIiwiTkVYVF9QQUdFX1RJVExFIiwiTEFTVF9QQUdFX1RJVExFIiwiUFJFX1BBR0VfVElUTEUiLCJGSVJTVF9QQUdFX1RJVExFIiwiU0laRV9QRVJfUEFHRV9MSVNUIiwiSElERV9TSVpFX1BFUl9QQUdFIiwiSElERV9QQUdFX0xJU1RfT05MWV9PTkVfUEFHRSIsIm9wdGlvbnMiLCJ3cmFwcGVyRmFjdG9yeSIsIkJhc2UiLCJyZW1vdGVSZXNvbHZlciIsInByb3BzIiwiaGFuZGxlQ2hhbmdlUGFnZSIsImJpbmQiLCJoYW5kbGVDaGFuZ2VTaXplUGVyUGFnZSIsImN1cnJQYWdlIiwiY3VyclNpemVQZXJQYWdlIiwicGFnaW5hdGlvbiIsInNpemVQZXJQYWdlTGlzdCIsInBhZ2UiLCJwYWdlU3RhcnRJbmRleCIsInNpemVQZXJQYWdlIiwidmFsdWUiLCJzdGF0ZSIsInNhdmVUb1N0b3JlIiwibmV4dFByb3BzIiwibmVlZE5ld1N0YXRlIiwib25QYWdlQ2hhbmdlIiwiaXNEYXRhQ2hhbmdlZCIsInNldFN0YXRlIiwic3RvcmUiLCJpc1JlbW90ZVBhZ2luYXRpb24iLCJoYW5kbGVSZW1vdGVQYWdlQ2hhbmdlIiwib25TaXplUGVyUGFnZUNoYW5nZSIsIndpdGhGaXJzdEFuZExhc3QiLCJhbHdheXNTaG93QWxsQnRucyIsImhpZGVTaXplUGVyUGFnZSIsImhpZGVQYWdlTGlzdE9ubHlPbmVQYWdlIiwiZGF0YSIsInRvdGFsU2l6ZSIsImxlbmd0aCIsInBhZ2luYXRpb25TaXplIiwic2hvd1RvdGFsIiwiZmlyc3RQYWdlVGV4dCIsInByZVBhZ2VUZXh0IiwibmV4dFBhZ2VUZXh0IiwibGFzdFBhZ2VUZXh0IiwicHJlUGFnZVRpdGxlIiwibmV4dFBhZ2VUaXRsZSIsImZpcnN0UGFnZVRpdGxlIiwibGFzdFBhZ2VUaXRsZSIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJQYWdpbmF0aW9uIiwiY2xvc2VEcm9wRG93biIsInRvZ2dsZURyb3BEb3duIiwiaW5pdGlhbFN0YXRlIiwiZGF0YVNpemUiLCJ0b3RhbFBhZ2VzIiwiY2FsY3VsYXRlVG90YWxQYWdlIiwibGFzdFBhZ2UiLCJjYWxjdWxhdGVMYXN0UGFnZSIsImRyb3Bkb3duT3BlbiIsInNlbGVjdGVkU2l6ZSIsInBhcnNlSW50IiwibmV3VG90YWxQYWdlcyIsIm5ld0xhc3RQYWdlIiwibmV3UGFnZSIsImJhY2tUb1ByZXZQYWdlIiwib3BlbiIsInBhZ2VzIiwiY2FsY3VsYXRlUGFnZVN0YXR1cyIsImNhbGN1bGF0ZVBhZ2VzIiwiY2FsY3VsYXRlRnJvbVRvIiwiZnJvbSIsInRvIiwicGFnZUxpc3RDbGFzcyIsImNhbGN1bGF0ZVNpemVQZXJQYWdlU3RhdHVzIiwibnVtYmVyIiwiYXJyYXkiLCJmdW5jIiwic3RyaW5nIiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsIk1hdGgiLCJjZWlsIiwib2Zmc2V0IiwiYWJzIiwibWluIiwiZW5kUGFnZSIsInN0YXJ0UGFnZSIsIm1heCIsImZsb29yIiwiaSIsInB1c2giLCJpc1N0YXJ0IiwiaXNFbmQiLCJmaWx0ZXIiLCJtYXAiLCJ0aXRsZSIsImFjdGl2ZSIsImRpc2FibGVkIiwiX3NpemVQZXJQYWdlIiwicGFnZVRleHQiLCJ0ZXh0IiwicGFnZU51bWJlciIsIkV4dGVuZEJhc2UiLCJzaXplUGVyUGFnZURlZmF1bHRDbGFzcyIsIlNpemVQZXJQYWdlRHJvcERvd24iLCJoaWRkZW4iLCJvbkNsaWNrIiwib25CbHVyIiwiY2xhc3NOYW1lIiwidmFyaWF0aW9uIiwiYnRuQ29udGV4dHVhbCIsImRyb3BEb3duU3R5bGUiLCJ2aXNpYmlsaXR5IiwiZHJvcGRvd25DbGFzc2VzIiwib3B0aW9uIiwib25lT2YiLCJTaXplUGVyUGFnZU9wdGlvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIlBhZ2luYXRvbkxpc3QiLCJwYWdlUHJvcHMiLCJhcnJheU9mIiwic2hhcGUiLCJvbmVPZlR5cGUiLCJkaXNhYmxlIiwiUGFnZUJ1dHRvbiIsImhhbmRsZUNsaWNrIiwiY2xhc3NlcyIsIlBhZ2luYXRpb25Ub3RhbCIsImdldEJ5Q3VyclBhZ2UiLCJnZXROb3JtYWxpemVkUGFnZSIsImVuZCIsInN0YXJ0IiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7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QUNELFNBQU9nRixNQUFQO0FBQ0QsQ0FoQk0sQyIsImZpbGUiOiJyZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9kaXN0L3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVhY3RCb290c3RyYXBUYWJsZTJQYWdpbmF0b3JcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3RCb290c3RyYXBUYWJsZTJQYWdpbmF0b3JcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0ZTcyYTM4NDMwNTcwNWM4NTY0OSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIFN5bWJvbC5mb3IgJiZcbiAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG4gICAgMHhlYWM3O1xuXG4gIHZhciBpc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgb2JqZWN0ICE9PSBudWxsICYmXG4gICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0IGRlZmF1bHQge1xuICBQQUdJTkFUSU9OX1NJWkU6IDUsXG4gIFBBR0VfU1RBUlRfSU5ERVg6IDEsXG4gIFdpdGhfRklSU1RfQU5EX0xBU1Q6IHRydWUsXG4gIFNIT1dfQUxMX1BBR0VfQlROUzogZmFsc2UsXG4gIEZJUlNUX1BBR0VfVEVYVDogJzw8JyxcbiAgUFJFX1BBR0VfVEVYVDogJzwnLFxuICBORVhUX1BBR0VfVEVYVDogJz4nLFxuICBMQVNUX1BBR0VfVEVYVDogJz4+JyxcbiAgTkVYVF9QQUdFX1RJVExFOiAnbmV4dCBwYWdlJyxcbiAgTEFTVF9QQUdFX1RJVExFOiAnbGFzdCBwYWdlJyxcbiAgUFJFX1BBR0VfVElUTEU6ICdwcmV2aW91cyBwYWdlJyxcbiAgRklSU1RfUEFHRV9USVRMRTogJ2ZpcnN0IHBhZ2UnLFxuICBTSVpFX1BFUl9QQUdFX0xJU1Q6IFsxMCwgMjUsIDMwLCA1MF0sXG4gIEhJREVfU0laRV9QRVJfUEFHRTogZmFsc2UsXG4gIEhJREVfUEFHRV9MSVNUX09OTFlfT05FX1BBR0U6IGZhbHNlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3Ivc3JjL2NvbnN0LmpzIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IHdyYXBwZXJGYWN0b3J5IGZyb20gJy4vc3JjL3dyYXBwZXInO1xuXG5leHBvcnQgZGVmYXVsdCAob3B0aW9ucyA9IHt9KSA9PiAoe1xuICB3cmFwcGVyRmFjdG9yeSxcbiAgb3B0aW9uc1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9pbmRleC5qcyIsIi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IENvbnN0IGZyb20gJy4vY29uc3QnO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi9wYWdpbmF0aW9uJztcbmltcG9ydCB7IGdldEJ5Q3VyclBhZ2UgfSBmcm9tICcuL3BhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCAoQmFzZSwge1xuICByZW1vdGVSZXNvbHZlclxufSkgPT5cbiAgY2xhc3MgUGFnaW5hdGlvbldyYXBwZXIgZXh0ZW5kcyByZW1vdGVSZXNvbHZlcihDb21wb25lbnQpIHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgc3RvcmU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLmhhbmRsZUNoYW5nZVBhZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZVBhZ2UuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlU2l6ZVBlclBhZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZVNpemVQZXJQYWdlLmJpbmQodGhpcyk7XG5cbiAgICAgIGxldCBjdXJyUGFnZTtcbiAgICAgIGxldCBjdXJyU2l6ZVBlclBhZ2U7XG4gICAgICBjb25zdCB7IG9wdGlvbnMgfSA9IHByb3BzLnBhZ2luYXRpb247XG4gICAgICBjb25zdCBzaXplUGVyUGFnZUxpc3QgPSBvcHRpb25zLnNpemVQZXJQYWdlTGlzdCB8fCBDb25zdC5TSVpFX1BFUl9QQUdFX0xJU1Q7XG5cbiAgICAgIC8vIGluaXRpYWxpemUgY3VycmVudCBwYWdlXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMucGFnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY3VyclBhZ2UgPSBvcHRpb25zLnBhZ2U7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLnBhZ2VTdGFydEluZGV4ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjdXJyUGFnZSA9IG9wdGlvbnMucGFnZVN0YXJ0SW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyUGFnZSA9IENvbnN0LlBBR0VfU1RBUlRfSU5ERVg7XG4gICAgICB9XG5cbiAgICAgIC8vIGluaXRpYWxpemUgY3VycmVudCBzaXplUGVyUGFnZVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnNpemVQZXJQYWdlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjdXJyU2l6ZVBlclBhZ2UgPSBvcHRpb25zLnNpemVQZXJQYWdlO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2l6ZVBlclBhZ2VMaXN0WzBdID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjdXJyU2l6ZVBlclBhZ2UgPSBzaXplUGVyUGFnZUxpc3RbMF0udmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyU2l6ZVBlclBhZ2UgPSBzaXplUGVyUGFnZUxpc3RbMF07XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhdGUgPSB7IGN1cnJQYWdlLCBjdXJyU2l6ZVBlclBhZ2UgfTtcbiAgICAgIHRoaXMuc2F2ZVRvU3RvcmUoY3VyclBhZ2UsIGN1cnJTaXplUGVyUGFnZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGxldCBuZWVkTmV3U3RhdGUgPSBmYWxzZTtcbiAgICAgIGxldCB7IGN1cnJQYWdlLCBjdXJyU2l6ZVBlclBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCB7IHBhZ2UsIHNpemVQZXJQYWdlLCBwYWdlU3RhcnRJbmRleCwgb25QYWdlQ2hhbmdlIH0gPSBuZXh0UHJvcHMucGFnaW5hdGlvbi5vcHRpb25zO1xuXG4gICAgICBpZiAodHlwZW9mIHBhZ2UgIT09ICd1bmRlZmluZWQnICYmIGN1cnJQYWdlICE9PSBwYWdlKSB7IC8vIHVzZXIgZGVmaW5lZCBwYWdlXG4gICAgICAgIGN1cnJQYWdlID0gcGFnZTtcbiAgICAgICAgbmVlZE5ld1N0YXRlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAobmV4dFByb3BzLmlzRGF0YUNoYW5nZWQpIHsgLy8gdXNlciBkaWRuJ3QgZGVmaW5lZCBwYWdlIGJ1dCBkYXRhIGNoYW5nZVxuICAgICAgICBjdXJyUGFnZSA9IHR5cGVvZiBwYWdlU3RhcnRJbmRleCAhPT0gJ3VuZGVmaW5lZCcgPyBwYWdlU3RhcnRJbmRleCA6IENvbnN0LlBBR0VfU1RBUlRfSU5ERVg7XG4gICAgICAgIG5lZWROZXdTdGF0ZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygc2l6ZVBlclBhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGN1cnJTaXplUGVyUGFnZSA9IHNpemVQZXJQYWdlO1xuICAgICAgICBuZWVkTmV3U3RhdGUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNhdmVUb1N0b3JlKGN1cnJQYWdlLCBjdXJyU2l6ZVBlclBhZ2UpO1xuXG4gICAgICBpZiAobmVlZE5ld1N0YXRlKSB7XG4gICAgICAgIGlmIChvblBhZ2VDaGFuZ2UpIHtcbiAgICAgICAgICBvblBhZ2VDaGFuZ2UoY3VyclBhZ2UsIGN1cnJTaXplUGVyUGFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyBjdXJyUGFnZSwgY3VyclNpemVQZXJQYWdlIH0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzYXZlVG9TdG9yZShwYWdlLCBzaXplUGVyUGFnZSkge1xuICAgICAgdGhpcy5wcm9wcy5zdG9yZS5wYWdlID0gcGFnZTtcbiAgICAgIHRoaXMucHJvcHMuc3RvcmUuc2l6ZVBlclBhZ2UgPSBzaXplUGVyUGFnZTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2VQYWdlKGN1cnJQYWdlKSB7XG4gICAgICBjb25zdCB7IGN1cnJTaXplUGVyUGFnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNvbnN0IHsgcGFnaW5hdGlvbjogeyBvcHRpb25zIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgICB0aGlzLnNhdmVUb1N0b3JlKGN1cnJQYWdlLCBjdXJyU2l6ZVBlclBhZ2UpO1xuXG4gICAgICBpZiAob3B0aW9ucy5vblBhZ2VDaGFuZ2UpIHtcbiAgICAgICAgb3B0aW9ucy5vblBhZ2VDaGFuZ2UoY3VyclBhZ2UsIGN1cnJTaXplUGVyUGFnZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pc1JlbW90ZVBhZ2luYXRpb24oKSkge1xuICAgICAgICB0aGlzLmhhbmRsZVJlbW90ZVBhZ2VDaGFuZ2UoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyBjdXJyUGFnZSB9KSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlU2l6ZVBlclBhZ2UoY3VyclNpemVQZXJQYWdlLCBjdXJyUGFnZSkge1xuICAgICAgY29uc3QgeyBwYWdpbmF0aW9uOiB7IG9wdGlvbnMgfSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIHRoaXMuc2F2ZVRvU3RvcmUoY3VyclBhZ2UsIGN1cnJTaXplUGVyUGFnZSk7XG5cbiAgICAgIGlmIChvcHRpb25zLm9uU2l6ZVBlclBhZ2VDaGFuZ2UpIHtcbiAgICAgICAgb3B0aW9ucy5vblNpemVQZXJQYWdlQ2hhbmdlKGN1cnJTaXplUGVyUGFnZSwgY3VyclBhZ2UpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXNSZW1vdGVQYWdpbmF0aW9uKCkpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZW1vdGVQYWdlQ2hhbmdlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcbiAgICAgICAgY3VyclBhZ2UsXG4gICAgICAgIGN1cnJTaXplUGVyUGFnZVxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsgcGFnaW5hdGlvbjogeyBvcHRpb25zIH0sIHN0b3JlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgeyBjdXJyUGFnZSwgY3VyclNpemVQZXJQYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgY29uc3Qgd2l0aEZpcnN0QW5kTGFzdCA9IHR5cGVvZiBvcHRpb25zLndpdGhGaXJzdEFuZExhc3QgPT09ICd1bmRlZmluZWQnID9cbiAgICAgICAgQ29uc3QuV2l0aF9GSVJTVF9BTkRfTEFTVCA6IG9wdGlvbnMud2l0aEZpcnN0QW5kTGFzdDtcbiAgICAgIGNvbnN0IGFsd2F5c1Nob3dBbGxCdG5zID0gdHlwZW9mIG9wdGlvbnMuYWx3YXlzU2hvd0FsbEJ0bnMgPT09ICd1bmRlZmluZWQnID9cbiAgICAgICAgQ29uc3QuU0hPV19BTExfUEFHRV9CVE5TIDogb3B0aW9ucy5hbHdheXNTaG93QWxsQnRucztcbiAgICAgIGNvbnN0IGhpZGVTaXplUGVyUGFnZSA9IHR5cGVvZiBvcHRpb25zLmhpZGVTaXplUGVyUGFnZSA9PT0gJ3VuZGVmaW5lZCcgP1xuICAgICAgICBDb25zdC5ISURFX1NJWkVfUEVSX1BBR0UgOiBvcHRpb25zLmhpZGVTaXplUGVyUGFnZTtcbiAgICAgIGNvbnN0IGhpZGVQYWdlTGlzdE9ubHlPbmVQYWdlID0gdHlwZW9mIG9wdGlvbnMuaGlkZVBhZ2VMaXN0T25seU9uZVBhZ2UgPT09ICd1bmRlZmluZWQnID9cbiAgICAgICAgQ29uc3QuSElERV9QQUdFX0xJU1RfT05MWV9PTkVfUEFHRSA6IG9wdGlvbnMuaGlkZVBhZ2VMaXN0T25seU9uZVBhZ2U7XG4gICAgICBjb25zdCBwYWdlU3RhcnRJbmRleCA9IHR5cGVvZiBvcHRpb25zLnBhZ2VTdGFydEluZGV4ID09PSAndW5kZWZpbmVkJyA/XG4gICAgICAgIENvbnN0LlBBR0VfU1RBUlRfSU5ERVggOiBvcHRpb25zLnBhZ2VTdGFydEluZGV4O1xuXG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5pc1JlbW90ZVBhZ2luYXRpb24oKSA/XG4gICAgICAgIHRoaXMucHJvcHMuZGF0YSA6XG4gICAgICAgIGdldEJ5Q3VyclBhZ2Uoc3RvcmUsIHBhZ2VTdGFydEluZGV4KTtcblxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgPEJhc2Uga2V5PVwidGFibGVcIiB7IC4uLnRoaXMucHJvcHMgfSBkYXRhPXsgZGF0YSB9IC8+LFxuICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgIGtleT1cInBhZ2luYXRpb25cIlxuICAgICAgICAgIGRhdGFTaXplPXsgb3B0aW9ucy50b3RhbFNpemUgfHwgc3RvcmUuZGF0YS5sZW5ndGggfVxuICAgICAgICAgIGN1cnJQYWdlPXsgY3VyclBhZ2UgfVxuICAgICAgICAgIGN1cnJTaXplUGVyUGFnZT17IGN1cnJTaXplUGVyUGFnZSB9XG4gICAgICAgICAgb25QYWdlQ2hhbmdlPXsgdGhpcy5oYW5kbGVDaGFuZ2VQYWdlIH1cbiAgICAgICAgICBvblNpemVQZXJQYWdlQ2hhbmdlPXsgdGhpcy5oYW5kbGVDaGFuZ2VTaXplUGVyUGFnZSB9XG4gICAgICAgICAgc2l6ZVBlclBhZ2VMaXN0PXsgb3B0aW9ucy5zaXplUGVyUGFnZUxpc3QgfHwgQ29uc3QuU0laRV9QRVJfUEFHRV9MSVNUIH1cbiAgICAgICAgICBwYWdpbmF0aW9uU2l6ZT17IG9wdGlvbnMucGFnaW5hdGlvblNpemUgfHwgQ29uc3QuUEFHSU5BVElPTl9TSVpFIH1cbiAgICAgICAgICBwYWdlU3RhcnRJbmRleD17IHBhZ2VTdGFydEluZGV4IH1cbiAgICAgICAgICB3aXRoRmlyc3RBbmRMYXN0PXsgd2l0aEZpcnN0QW5kTGFzdCB9XG4gICAgICAgICAgYWx3YXlzU2hvd0FsbEJ0bnM9eyBhbHdheXNTaG93QWxsQnRucyB9XG4gICAgICAgICAgaGlkZVNpemVQZXJQYWdlPXsgaGlkZVNpemVQZXJQYWdlIH1cbiAgICAgICAgICBoaWRlUGFnZUxpc3RPbmx5T25lUGFnZT17IGhpZGVQYWdlTGlzdE9ubHlPbmVQYWdlIH1cbiAgICAgICAgICBzaG93VG90YWw9eyBvcHRpb25zLnNob3dUb3RhbCB9XG4gICAgICAgICAgZmlyc3RQYWdlVGV4dD17IG9wdGlvbnMuZmlyc3RQYWdlVGV4dCB8fCBDb25zdC5GSVJTVF9QQUdFX1RFWFQgfVxuICAgICAgICAgIHByZVBhZ2VUZXh0PXsgb3B0aW9ucy5wcmVQYWdlVGV4dCB8fCBDb25zdC5QUkVfUEFHRV9URVhUIH1cbiAgICAgICAgICBuZXh0UGFnZVRleHQ9eyBvcHRpb25zLm5leHRQYWdlVGV4dCB8fCBDb25zdC5ORVhUX1BBR0VfVEVYVCB9XG4gICAgICAgICAgbGFzdFBhZ2VUZXh0PXsgb3B0aW9ucy5sYXN0UGFnZVRleHQgfHwgQ29uc3QuTEFTVF9QQUdFX1RFWFQgfVxuICAgICAgICAgIHByZVBhZ2VUaXRsZT17IG9wdGlvbnMucHJlUGFnZVRpdGxlIHx8IENvbnN0LlBSRV9QQUdFX1RJVExFIH1cbiAgICAgICAgICBuZXh0UGFnZVRpdGxlPXsgb3B0aW9ucy5uZXh0UGFnZVRpdGxlIHx8IENvbnN0Lk5FWFRfUEFHRV9USVRMRSB9XG4gICAgICAgICAgZmlyc3RQYWdlVGl0bGU9eyBvcHRpb25zLmZpcnN0UGFnZVRpdGxlIHx8IENvbnN0LkZJUlNUX1BBR0VfVElUTEUgfVxuICAgICAgICAgIGxhc3RQYWdlVGl0bGU9eyBvcHRpb25zLmxhc3RQYWdlVGl0bGUgfHwgQ29uc3QuTEFTVF9QQUdFX1RJVExFIH1cbiAgICAgICAgLz5cbiAgICAgIF07XG4gICAgfVxuICB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3Ivc3JjL3dyYXBwZXIuanMiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGludmFyaWFudChcbiAgICAgIGZhbHNlLFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW1cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGVtcHR5RnVuY3Rpb247XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvaW52YXJpYW50LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG4vKiBlc2xpbnQgYXJyb3ctYm9keS1zdHlsZTogMCAqL1xuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgcGFnZVJlc29sdmVyIGZyb20gJy4vcGFnZS1yZXNvbHZlcic7XG5pbXBvcnQgU2l6ZVBlclBhZ2VEcm9wRG93biBmcm9tICcuL3NpemUtcGVyLXBhZ2UtZHJvcGRvd24nO1xuaW1wb3J0IFBhZ2luYXRpb25MaXN0IGZyb20gJy4vcGFnaW5hdGlvbi1saXN0JztcbmltcG9ydCBQYWdpbmF0aW9uVG90YWwgZnJvbSAnLi9wYWdpbmF0aW9uLXRvdGFsJztcbmltcG9ydCBDb25zdCBmcm9tICcuL2NvbnN0JztcblxuY2xhc3MgUGFnaW5hdGlvbiBleHRlbmRzIHBhZ2VSZXNvbHZlcihDb21wb25lbnQpIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5jbG9zZURyb3BEb3duID0gdGhpcy5jbG9zZURyb3BEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVEcm9wRG93biA9IHRoaXMudG9nZ2xlRHJvcERvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZVBhZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZVBhZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZVNpemVQZXJQYWdlID0gdGhpcy5oYW5kbGVDaGFuZ2VTaXplUGVyUGFnZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zdCB7IGRhdGFTaXplLCBjdXJyU2l6ZVBlclBhZ2UgfSA9IG5leHRQcm9wcztcbiAgICBpZiAoY3VyclNpemVQZXJQYWdlICE9PSB0aGlzLnByb3BzLmN1cnJTaXplUGVyUGFnZSB8fCBkYXRhU2l6ZSAhPT0gdGhpcy5wcm9wcy5kYXRhU2l6ZSkge1xuICAgICAgY29uc3QgdG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlKGN1cnJTaXplUGVyUGFnZSwgZGF0YVNpemUpO1xuICAgICAgY29uc3QgbGFzdFBhZ2UgPSB0aGlzLmNhbGN1bGF0ZUxhc3RQYWdlKHRvdGFsUGFnZXMpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvdGFsUGFnZXMsIGxhc3RQYWdlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZURyb3BEb3duKCkge1xuICAgIGNvbnN0IGRyb3Bkb3duT3BlbiA9ICF0aGlzLnN0YXRlLmRyb3Bkb3duT3BlbjtcbiAgICB0aGlzLnNldFN0YXRlKCgpID0+IHtcbiAgICAgIHJldHVybiB7IGRyb3Bkb3duT3BlbiB9O1xuICAgIH0pO1xuICB9XG5cbiAgY2xvc2VEcm9wRG93bigpIHtcbiAgICB0aGlzLnNldFN0YXRlKCgpID0+IHtcbiAgICAgIHJldHVybiB7IGRyb3Bkb3duT3BlbjogZmFsc2UgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZVNpemVQZXJQYWdlKHNpemVQZXJQYWdlKSB7XG4gICAgY29uc3QgeyBjdXJyU2l6ZVBlclBhZ2UsIG9uU2l6ZVBlclBhZ2VDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc2VsZWN0ZWRTaXplID0gdHlwZW9mIHNpemVQZXJQYWdlID09PSAnc3RyaW5nJyA/IHBhcnNlSW50KHNpemVQZXJQYWdlLCAxMCkgOiBzaXplUGVyUGFnZTtcbiAgICBsZXQgeyBjdXJyUGFnZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoc2VsZWN0ZWRTaXplICE9PSBjdXJyU2l6ZVBlclBhZ2UpIHtcbiAgICAgIGNvbnN0IG5ld1RvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZShzZWxlY3RlZFNpemUpO1xuICAgICAgY29uc3QgbmV3TGFzdFBhZ2UgPSB0aGlzLmNhbGN1bGF0ZUxhc3RQYWdlKG5ld1RvdGFsUGFnZXMpO1xuICAgICAgaWYgKGN1cnJQYWdlID4gbmV3TGFzdFBhZ2UpIGN1cnJQYWdlID0gbmV3TGFzdFBhZ2U7XG4gICAgICBvblNpemVQZXJQYWdlQ2hhbmdlKHNlbGVjdGVkU2l6ZSwgY3VyclBhZ2UpO1xuICAgIH1cbiAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZVBhZ2UobmV3UGFnZSkge1xuICAgIGxldCBwYWdlO1xuICAgIGNvbnN0IHtcbiAgICAgIGN1cnJQYWdlLFxuICAgICAgcGFnZVN0YXJ0SW5kZXgsXG4gICAgICBwcmVQYWdlVGV4dCxcbiAgICAgIG5leHRQYWdlVGV4dCxcbiAgICAgIGxhc3RQYWdlVGV4dCxcbiAgICAgIGZpcnN0UGFnZVRleHQsXG4gICAgICBvblBhZ2VDaGFuZ2VcbiAgICAgIC8vIGtlZXBTaXplUGVyUGFnZVN0YXRlXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBsYXN0UGFnZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChuZXdQYWdlID09PSBwcmVQYWdlVGV4dCkge1xuICAgICAgcGFnZSA9IHRoaXMuYmFja1RvUHJldlBhZ2UoKTtcbiAgICB9IGVsc2UgaWYgKG5ld1BhZ2UgPT09IG5leHRQYWdlVGV4dCkge1xuICAgICAgcGFnZSA9IChjdXJyUGFnZSArIDEpID4gbGFzdFBhZ2UgPyBsYXN0UGFnZSA6IGN1cnJQYWdlICsgMTtcbiAgICB9IGVsc2UgaWYgKG5ld1BhZ2UgPT09IGxhc3RQYWdlVGV4dCkge1xuICAgICAgcGFnZSA9IGxhc3RQYWdlO1xuICAgIH0gZWxzZSBpZiAobmV3UGFnZSA9PT0gZmlyc3RQYWdlVGV4dCkge1xuICAgICAgcGFnZSA9IHBhZ2VTdGFydEluZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICBwYWdlID0gcGFyc2VJbnQobmV3UGFnZSwgMTApO1xuICAgIH1cblxuICAgIC8vIGlmIChrZWVwU2l6ZVBlclBhZ2VTdGF0ZSkgeyB0aGlzLmNsb3NlRHJvcERvd24oKTsgfVxuXG4gICAgaWYgKHBhZ2UgIT09IGN1cnJQYWdlKSB7XG4gICAgICBvblBhZ2VDaGFuZ2UocGFnZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdG90YWxQYWdlcywgbGFzdFBhZ2UsIGRyb3Bkb3duT3Blbjogb3BlbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7XG4gICAgICBzaG93VG90YWwsXG4gICAgICBzaXplUGVyUGFnZUxpc3QsXG4gICAgICBjdXJyU2l6ZVBlclBhZ2UsXG4gICAgICBoaWRlU2l6ZVBlclBhZ2UsXG4gICAgICBoaWRlUGFnZUxpc3RPbmx5T25lUGFnZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHBhZ2VzID0gdGhpcy5jYWxjdWxhdGVQYWdlU3RhdHVzKHRoaXMuY2FsY3VsYXRlUGFnZXModG90YWxQYWdlcyksIGxhc3RQYWdlKTtcbiAgICBjb25zdCBbZnJvbSwgdG9dID0gdGhpcy5jYWxjdWxhdGVGcm9tVG8oKTtcbiAgICBjb25zdCBwYWdlTGlzdENsYXNzID0gY3MoXG4gICAgICAncmVhY3QtYm9vdHN0cmFwLXRhYmxlLXBhZ2luYXRpb24tbGlzdCcsXG4gICAgICAnY29sLW1kLTYgY29sLXhzLTYgY29sLXNtLTYgY29sLWxnLTYnLCB7XG4gICAgICAgICdyZWFjdC1ib290c3RyYXAtdGFibGUtcGFnaW5hdGlvbi1saXN0LWhpZGRlbic6IChoaWRlUGFnZUxpc3RPbmx5T25lUGFnZSAmJiB0b3RhbFBhZ2VzID09PSAxKVxuICAgICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJlYWN0LWJvb3RzdHJhcC10YWJsZS1wYWdpbmF0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXhzLTYgY29sLXNtLTYgY29sLWxnLTZcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzaXplUGVyUGFnZUxpc3QubGVuZ3RoID4gMSAmJiAhaGlkZVNpemVQZXJQYWdlID9cbiAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIDxTaXplUGVyUGFnZURyb3BEb3duXG4gICAgICAgICAgICAgICAgICBjdXJyU2l6ZVBlclBhZ2U9eyBgJHtjdXJyU2l6ZVBlclBhZ2V9YCB9XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXsgdGhpcy5jYWxjdWxhdGVTaXplUGVyUGFnZVN0YXR1cygpIH1cbiAgICAgICAgICAgICAgICAgIG9uU2l6ZVBlclBhZ2VDaGFuZ2U9eyB0aGlzLmhhbmRsZUNoYW5nZVNpemVQZXJQYWdlIH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLnRvZ2dsZURyb3BEb3duIH1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17IHRoaXMuY2xvc2VEcm9wRG93biB9XG4gICAgICAgICAgICAgICAgICBvcGVuPXsgb3BlbiB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgc2hvd1RvdGFsID9cbiAgICAgICAgICAgICAgPFBhZ2luYXRpb25Ub3RhbFxuICAgICAgICAgICAgICAgIGZyb209eyBmcm9tIH1cbiAgICAgICAgICAgICAgICB0bz17IHRvIH1cbiAgICAgICAgICAgICAgICBkYXRhU2l6ZT17IHRoaXMucHJvcHMuZGF0YVNpemUgfVxuICAgICAgICAgICAgICAvPiA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHBhZ2VMaXN0Q2xhc3MgfT5cbiAgICAgICAgICA8UGFnaW5hdGlvbkxpc3QgcGFnZXM9eyBwYWdlcyB9IG9uUGFnZUNoYW5nZT17IHRoaXMuaGFuZGxlQ2hhbmdlUGFnZSB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5QYWdpbmF0aW9uLnByb3BUeXBlcyA9IHtcbiAgZGF0YVNpemU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgc2l6ZVBlclBhZ2VMaXN0OiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgY3VyclBhZ2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgY3VyclNpemVQZXJQYWdlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG9uUGFnZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25TaXplUGVyUGFnZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcGFnZVN0YXJ0SW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIHBhZ2luYXRpb25TaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICBmaXJzdFBhZ2VUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwcmVQYWdlVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbmV4dFBhZ2VUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYXN0UGFnZVRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG5leHRQYWdlVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHByZVBhZ2VUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmlyc3RQYWdlVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhc3RQYWdlVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdpdGhGaXJzdEFuZExhc3Q6IFByb3BUeXBlcy5ib29sLFxuICBhbHdheXNTaG93QWxsQnRuczogUHJvcFR5cGVzLmJvb2wsXG4gIGhpZGVTaXplUGVyUGFnZTogUHJvcFR5cGVzLmJvb2wsXG4gIGhpZGVQYWdlTGlzdE9ubHlPbmVQYWdlOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuUGFnaW5hdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHBhZ2VTdGFydEluZGV4OiBDb25zdC5QQUdFX1NUQVJUX0lOREVYLFxuICBwYWdpbmF0aW9uU2l6ZTogQ29uc3QuUEFHSU5BVElPTl9TSVpFLFxuICB3aXRoRmlyc3RBbmRMYXN0OiBDb25zdC5XaXRoX0ZJUlNUX0FORF9MQVNULFxuICBhbHdheXNTaG93QWxsQnRuczogQ29uc3QuU0hPV19BTExfUEFHRV9CVE5TLFxuICBmaXJzdFBhZ2VUZXh0OiBDb25zdC5GSVJTVF9QQUdFX1RFWFQsXG4gIHByZVBhZ2VUZXh0OiBDb25zdC5QUkVfUEFHRV9URVhULFxuICBuZXh0UGFnZVRleHQ6IENvbnN0Lk5FWFRfUEFHRV9URVhULFxuICBsYXN0UGFnZVRleHQ6IENvbnN0LkxBU1RfUEFHRV9URVhULFxuICBzaXplUGVyUGFnZUxpc3Q6IENvbnN0LlNJWkVfUEVSX1BBR0VfTElTVCxcbiAgbmV4dFBhZ2VUaXRsZTogQ29uc3QuTkVYVF9QQUdFX1RJVExFLFxuICBwcmVQYWdlVGl0bGU6IENvbnN0LlBSRV9QQUdFX1RJVExFLFxuICBmaXJzdFBhZ2VUaXRsZTogQ29uc3QuRklSU1RfUEFHRV9USVRMRSxcbiAgbGFzdFBhZ2VUaXRsZTogQ29uc3QuTEFTVF9QQUdFX1RJVExFLFxuICBoaWRlU2l6ZVBlclBhZ2U6IENvbnN0LkhJREVfU0laRV9QRVJfUEFHRSxcbiAgaGlkZVBhZ2VMaXN0T25seU9uZVBhZ2U6IENvbnN0LkhJREVfUEFHRV9MSVNUX09OTFlfT05FX1BBR0Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvcGFnaW5hdGlvbi5qcyIsIi8qIGVzbGludCBuby1taXhlZC1vcGVyYXRvcnM6IDAgKi9cbmltcG9ydCBDb25zdCBmcm9tICcuL2NvbnN0JztcblxuZXhwb3J0IGRlZmF1bHQgRXh0ZW5kQmFzZSA9PlxuICBjbGFzcyBQYWdlUmVzb2x2ZXIgZXh0ZW5kcyBFeHRlbmRCYXNlIHtcbiAgICBiYWNrVG9QcmV2UGFnZSgpIHtcbiAgICAgIGNvbnN0IHsgY3VyclBhZ2UsIHBhZ2VTdGFydEluZGV4IH0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIChjdXJyUGFnZSAtIDEpIDwgcGFnZVN0YXJ0SW5kZXggPyBwYWdlU3RhcnRJbmRleCA6IGN1cnJQYWdlIC0gMTtcbiAgICB9XG5cbiAgICBnb1RvTmV4dFBhZ2UoKSB7XG4gICAgICBjb25zdCB7IGN1cnJQYWdlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgeyBsYXN0UGFnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIHJldHVybiAoY3VyclBhZ2UgKyAxKSA+IGxhc3RQYWdlID8gbGFzdFBhZ2UgOiBjdXJyUGFnZSArIDE7XG4gICAgfVxuXG4gICAgaW5pdGlhbFN0YXRlKCkge1xuICAgICAgY29uc3QgdG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlKCk7XG4gICAgICBjb25zdCBsYXN0UGFnZSA9IHRoaXMuY2FsY3VsYXRlTGFzdFBhZ2UodG90YWxQYWdlcyk7XG4gICAgICByZXR1cm4geyB0b3RhbFBhZ2VzLCBsYXN0UGFnZSwgZHJvcGRvd25PcGVuOiBmYWxzZSB9O1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVRvdGFsUGFnZShzaXplUGVyUGFnZSA9IHRoaXMucHJvcHMuY3VyclNpemVQZXJQYWdlLCBkYXRhU2l6ZSA9IHRoaXMucHJvcHMuZGF0YVNpemUpIHtcbiAgICAgIHJldHVybiBNYXRoLmNlaWwoZGF0YVNpemUgLyBzaXplUGVyUGFnZSk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlTGFzdFBhZ2UodG90YWxQYWdlcykge1xuICAgICAgY29uc3QgeyBwYWdlU3RhcnRJbmRleCB9ID0gdGhpcy5wcm9wcztcbiAgICAgIHJldHVybiBwYWdlU3RhcnRJbmRleCArIHRvdGFsUGFnZXMgLSAxO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZUZyb21UbygpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGF0YVNpemUsXG4gICAgICAgIGN1cnJQYWdlLFxuICAgICAgICBjdXJyU2l6ZVBlclBhZ2UsXG4gICAgICAgIHBhZ2VTdGFydEluZGV4XG4gICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IG9mZnNldCA9IE1hdGguYWJzKENvbnN0LlBBR0VfU1RBUlRfSU5ERVggLSBwYWdlU3RhcnRJbmRleCk7XG5cbiAgICAgIGxldCBmcm9tID0gKChjdXJyUGFnZSAtIHBhZ2VTdGFydEluZGV4KSAqIGN1cnJTaXplUGVyUGFnZSk7XG4gICAgICBmcm9tID0gZGF0YVNpemUgPT09IDAgPyAwIDogZnJvbSArIDE7XG4gICAgICBsZXQgdG8gPSBNYXRoLm1pbigoY3VyclNpemVQZXJQYWdlICogKGN1cnJQYWdlICsgb2Zmc2V0KSAtIDEpLCBkYXRhU2l6ZSk7XG4gICAgICBpZiAodG8gPj0gZGF0YVNpemUpIHRvIC09IDE7XG5cbiAgICAgIHJldHVybiBbZnJvbSwgdG9dO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVBhZ2VzKFxuICAgICAgdG90YWxQYWdlcyA9IHRoaXMuc3RhdGUudG90YWxQYWdlcyxcbiAgICAgIGxhc3RQYWdlID0gdGhpcy5zdGF0ZS5sYXN0UGFnZSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBjdXJyUGFnZSxcbiAgICAgICAgcGFnaW5hdGlvblNpemUsXG4gICAgICAgIHBhZ2VTdGFydEluZGV4LFxuICAgICAgICB3aXRoRmlyc3RBbmRMYXN0LFxuICAgICAgICBmaXJzdFBhZ2VUZXh0LFxuICAgICAgICBwcmVQYWdlVGV4dCxcbiAgICAgICAgbmV4dFBhZ2VUZXh0LFxuICAgICAgICBsYXN0UGFnZVRleHQsXG4gICAgICAgIGFsd2F5c1Nob3dBbGxCdG5zXG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgbGV0IHBhZ2VzO1xuICAgICAgbGV0IGVuZFBhZ2UgPSB0b3RhbFBhZ2VzO1xuICAgICAgaWYgKGVuZFBhZ2UgPD0gMCkgcmV0dXJuIFtdO1xuXG4gICAgICBsZXQgc3RhcnRQYWdlID0gTWF0aC5tYXgoY3VyclBhZ2UgLSBNYXRoLmZsb29yKHBhZ2luYXRpb25TaXplIC8gMiksIHBhZ2VTdGFydEluZGV4KTtcbiAgICAgIGVuZFBhZ2UgPSBzdGFydFBhZ2UgKyBwYWdpbmF0aW9uU2l6ZSAtIDE7XG5cbiAgICAgIGlmIChlbmRQYWdlID4gbGFzdFBhZ2UpIHtcbiAgICAgICAgZW5kUGFnZSA9IGxhc3RQYWdlO1xuICAgICAgICBzdGFydFBhZ2UgPSBlbmRQYWdlIC0gcGFnaW5hdGlvblNpemUgKyAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhcnRQYWdlICE9PSBwYWdlU3RhcnRJbmRleCAmJiB0b3RhbFBhZ2VzID4gcGFnaW5hdGlvblNpemUgJiYgd2l0aEZpcnN0QW5kTGFzdCkge1xuICAgICAgICBwYWdlcyA9IFtmaXJzdFBhZ2VUZXh0LCBwcmVQYWdlVGV4dF07XG4gICAgICB9IGVsc2UgaWYgKHRvdGFsUGFnZXMgPiAxIHx8IGFsd2F5c1Nob3dBbGxCdG5zKSB7XG4gICAgICAgIHBhZ2VzID0gW3ByZVBhZ2VUZXh0XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhZ2VzID0gW107XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSBzdGFydFBhZ2U7IGkgPD0gZW5kUGFnZTsgaSArPSAxKSB7XG4gICAgICAgIGlmIChpID49IHBhZ2VTdGFydEluZGV4KSBwYWdlcy5wdXNoKGkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW5kUGFnZSA8PSBsYXN0UGFnZSAmJiBwYWdlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHBhZ2VzLnB1c2gobmV4dFBhZ2VUZXh0KTtcbiAgICAgIH1cbiAgICAgIGlmIChlbmRQYWdlICE9PSBsYXN0UGFnZSAmJiB3aXRoRmlyc3RBbmRMYXN0KSB7XG4gICAgICAgIHBhZ2VzLnB1c2gobGFzdFBhZ2VUZXh0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYWdlcztcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVQYWdlU3RhdHVzKHBhZ2VzID0gW10sIGxhc3RQYWdlID0gdGhpcy5zdGF0ZS5sYXN0UGFnZSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBjdXJyUGFnZSxcbiAgICAgICAgcGFnZVN0YXJ0SW5kZXgsXG4gICAgICAgIGZpcnN0UGFnZVRleHQsXG4gICAgICAgIHByZVBhZ2VUZXh0LFxuICAgICAgICBuZXh0UGFnZVRleHQsXG4gICAgICAgIGxhc3RQYWdlVGV4dCxcbiAgICAgICAgYWx3YXlzU2hvd0FsbEJ0bnNcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgaXNTdGFydCA9IHBhZ2UgPT5cbiAgICAgICAgKGN1cnJQYWdlID09PSBwYWdlU3RhcnRJbmRleCAmJiAocGFnZSA9PT0gZmlyc3RQYWdlVGV4dCB8fCBwYWdlID09PSBwcmVQYWdlVGV4dCkpO1xuICAgICAgY29uc3QgaXNFbmQgPSBwYWdlID0+XG4gICAgICAgIChjdXJyUGFnZSA9PT0gbGFzdFBhZ2UgJiYgKHBhZ2UgPT09IG5leHRQYWdlVGV4dCB8fCBwYWdlID09PSBsYXN0UGFnZVRleHQpKTtcblxuICAgICAgcmV0dXJuIHBhZ2VzXG4gICAgICAgIC5maWx0ZXIoKHBhZ2UpID0+IHtcbiAgICAgICAgICBpZiAoYWx3YXlzU2hvd0FsbEJ0bnMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gIShpc1N0YXJ0KHBhZ2UpIHx8IGlzRW5kKHBhZ2UpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm1hcCgocGFnZSkgPT4ge1xuICAgICAgICAgIGxldCB0aXRsZTtcbiAgICAgICAgICBjb25zdCBhY3RpdmUgPSBwYWdlID09PSBjdXJyUGFnZTtcbiAgICAgICAgICBjb25zdCBkaXNhYmxlZCA9IChpc1N0YXJ0KHBhZ2UpIHx8IGlzRW5kKHBhZ2UpKTtcblxuICAgICAgICAgIGlmIChwYWdlID09PSBuZXh0UGFnZVRleHQpIHtcbiAgICAgICAgICAgIHRpdGxlID0gdGhpcy5wcm9wcy5uZXh0UGFnZVRpdGxlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocGFnZSA9PT0gcHJlUGFnZVRleHQpIHtcbiAgICAgICAgICAgIHRpdGxlID0gdGhpcy5wcm9wcy5wcmVQYWdlVGl0bGU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwYWdlID09PSBmaXJzdFBhZ2VUZXh0KSB7XG4gICAgICAgICAgICB0aXRsZSA9IHRoaXMucHJvcHMuZmlyc3RQYWdlVGl0bGU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwYWdlID09PSBsYXN0UGFnZVRleHQpIHtcbiAgICAgICAgICAgIHRpdGxlID0gdGhpcy5wcm9wcy5sYXN0UGFnZVRpdGxlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aXRsZSA9IGAke3BhZ2V9YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4geyBwYWdlLCBhY3RpdmUsIGRpc2FibGVkLCB0aXRsZSB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVTaXplUGVyUGFnZVN0YXR1cygpIHtcbiAgICAgIGNvbnN0IHsgc2l6ZVBlclBhZ2VMaXN0IH0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIHNpemVQZXJQYWdlTGlzdC5tYXAoKF9zaXplUGVyUGFnZSkgPT4ge1xuICAgICAgICBjb25zdCBwYWdlVGV4dCA9IF9zaXplUGVyUGFnZS50ZXh0IHx8IF9zaXplUGVyUGFnZTtcbiAgICAgICAgY29uc3QgcGFnZU51bWJlciA9IF9zaXplUGVyUGFnZS52YWx1ZSB8fCBfc2l6ZVBlclBhZ2U7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGV4dDogYCR7cGFnZVRleHR9YCxcbiAgICAgICAgICBwYWdlOiBwYWdlTnVtYmVyXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9wYWdlLXJlc29sdmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgU2l6ZVBlclBhZ2VPcHRpb24gZnJvbSAnLi9zaXplLXBlci1wYWdlLW9wdGlvbic7XG5cbmNvbnN0IHNpemVQZXJQYWdlRGVmYXVsdENsYXNzID0gJ3JlYWN0LWJzLXRhYmxlLXNpemVQZXJQYWdlLWRyb3Bkb3duJztcblxuY29uc3QgU2l6ZVBlclBhZ2VEcm9wRG93biA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgb3BlbixcbiAgICBoaWRkZW4sXG4gICAgb25DbGljayxcbiAgICBvbkJsdXIsXG4gICAgb3B0aW9ucyxcbiAgICBjbGFzc05hbWUsXG4gICAgdmFyaWF0aW9uLFxuICAgIGJ0bkNvbnRleHR1YWwsXG4gICAgY3VyclNpemVQZXJQYWdlLFxuICAgIG9uU2l6ZVBlclBhZ2VDaGFuZ2VcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGRyb3BEb3duU3R5bGUgPSB7IHZpc2liaWxpdHk6IGhpZGRlbiA/ICdoaWRkZW4nIDogJ3Zpc2libGUnIH07XG4gIGNvbnN0IGRyb3Bkb3duQ2xhc3NlcyA9IGNzKFxuICAgIG9wZW4gPyAnb3BlbiBzaG93JyA6ICcnLFxuICAgIHNpemVQZXJQYWdlRGVmYXVsdENsYXNzLFxuICAgIHZhcmlhdGlvbixcbiAgICBjbGFzc05hbWUsXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8c3BhblxuICAgICAgc3R5bGU9eyBkcm9wRG93blN0eWxlIH1cbiAgICAgIGNsYXNzTmFtZT17IGRyb3Bkb3duQ2xhc3NlcyB9XG4gICAgPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBpZD1cInBhZ2VEcm9wRG93blwiXG4gICAgICAgIGNsYXNzTmFtZT17IGBidG4gJHtidG5Db250ZXh0dWFsfSBkcm9wZG93bi10b2dnbGVgIH1cbiAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXG4gICAgICAgIGFyaWEtZXhwYW5kZWQ9eyBvcGVuIH1cbiAgICAgICAgb25DbGljaz17IG9uQ2xpY2sgfVxuICAgICAgICBvbkJsdXI9eyBvbkJsdXIgfVxuICAgICAgPlxuICAgICAgICB7IGN1cnJTaXplUGVyUGFnZSB9XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIHsgJyAnIH1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJldFwiIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIiByb2xlPVwibWVudVwiIGFyaWEtbGFiZWxsZWRieT1cInBhZ2VEcm9wRG93blwiPlxuICAgICAgICB7XG4gICAgICAgICAgb3B0aW9ucy5tYXAob3B0aW9uID0+IChcbiAgICAgICAgICAgIDxTaXplUGVyUGFnZU9wdGlvblxuICAgICAgICAgICAgICB7IC4uLm9wdGlvbiB9XG4gICAgICAgICAgICAgIGtleT17IG9wdGlvbi50ZXh0IH1cbiAgICAgICAgICAgICAgb25TaXplUGVyUGFnZUNoYW5nZT17IG9uU2l6ZVBlclBhZ2VDaGFuZ2UgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgIDwvc3Bhbj5cbiAgKTtcbn07XG5cblNpemVQZXJQYWdlRHJvcERvd24ucHJvcFR5cGVzID0ge1xuICBjdXJyU2l6ZVBlclBhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25TaXplUGVyUGFnZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gIGhpZGRlbjogUHJvcFR5cGVzLmJvb2wsXG4gIGJ0bkNvbnRleHR1YWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhcmlhdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnZHJvcGRvd24nLCAnZHJvcHVwJ10pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5TaXplUGVyUGFnZURyb3BEb3duLmRlZmF1bHRQcm9wcyA9IHtcbiAgb3BlbjogZmFsc2UsXG4gIGhpZGRlbjogZmFsc2UsXG4gIGJ0bkNvbnRleHR1YWw6ICdidG4tZGVmYXVsdCBidG4tc2Vjb25kYXJ5JyxcbiAgdmFyaWF0aW9uOiAnZHJvcGRvd24nLFxuICBjbGFzc05hbWU6ICcnXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFNpemVQZXJQYWdlRHJvcERvd247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvc2l6ZS1wZXItcGFnZS1kcm9wZG93bi5qcyIsIi8qIGVzbGludCBqc3gtYTExeS9ocmVmLW5vLWhhc2g6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBTaXplUGVyUGFnZU9wdGlvbiA9ICh7XG4gIHRleHQsXG4gIHBhZ2UsXG4gIG9uU2l6ZVBlclBhZ2VDaGFuZ2Vcbn0pID0+IChcbiAgPGxpIGtleT17IHRleHQgfSByb2xlPVwicHJlc2VudGF0aW9uXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPlxuICAgIDxhXG4gICAgICBocmVmPVwiI1wiXG4gICAgICB0YWJJbmRleD1cIi0xXCJcbiAgICAgIHJvbGU9XCJtZW51aXRlbVwiXG4gICAgICBkYXRhLXBhZ2U9eyBwYWdlIH1cbiAgICAgIG9uTW91c2VEb3duPXsgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBvblNpemVQZXJQYWdlQ2hhbmdlKHBhZ2UpO1xuICAgICAgfSB9XG4gICAgPlxuICAgICAgeyB0ZXh0IH1cbiAgICA8L2E+XG4gIDwvbGk+XG4pO1xuXG5TaXplUGVyUGFnZU9wdGlvbi5wcm9wVHlwZXMgPSB7XG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcGFnZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBvblNpemVQZXJQYWdlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaXplUGVyUGFnZU9wdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9zaXplLXBlci1wYWdlLW9wdGlvbi5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgUGFnZUJ1dHRvbiBmcm9tICcuL3BhZ2UtYnV0dG9uJztcblxuY29uc3QgUGFnaW5hdG9uTGlzdCA9IHByb3BzID0+IChcbiAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb24gcmVhY3QtYm9vdHN0cmFwLXRhYmxlLXBhZ2UtYnRucy11bFwiPlxuICAgIHtcbiAgICAgIHByb3BzLnBhZ2VzLm1hcChwYWdlUHJvcHMgPT4gKFxuICAgICAgICA8UGFnZUJ1dHRvblxuICAgICAgICAgIGtleT17IHBhZ2VQcm9wcy5wYWdlIH1cbiAgICAgICAgICB7IC4uLnBhZ2VQcm9wcyB9XG4gICAgICAgICAgb25QYWdlQ2hhbmdlPXsgcHJvcHMub25QYWdlQ2hhbmdlIH1cbiAgICAgICAgLz5cbiAgICAgICkpXG4gICAgfVxuICA8L3VsPlxuKTtcblxuUGFnaW5hdG9uTGlzdC5wcm9wVHlwZXMgPSB7XG4gIHBhZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHBhZ2U6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0pKS5pc1JlcXVpcmVkLFxuICBvblBhZ2VDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRvbkxpc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvcGFnaW5hdGlvbi1saXN0LmpzIiwiLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuLyogZXNsaW50IGpzeC1hMTF5L2hyZWYtbm8taGFzaDogMCAqL1xuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIFBhZ2VCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLm9uUGFnZUNoYW5nZSh0aGlzLnByb3BzLnBhZ2UpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhZ2UsXG4gICAgICB0aXRsZSxcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGRpc2FibGVkXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2xhc3NlcyA9IGNzKHtcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgJ3BhZ2UtaXRlbSc6IHRydWVcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPXsgY2xhc3NlcyB9IHRpdGxlPXsgdGl0bGUgfT5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsgdGhpcy5oYW5kbGVDbGljayB9IGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiPnsgcGFnZSB9PC9hPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59XG5cblBhZ2VCdXR0b24ucHJvcFR5cGVzID0ge1xuICBvblBhZ2VDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHBhZ2U6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKS5pc1JlcXVpcmVkLFxuICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUJ1dHRvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9wYWdlLWJ1dHRvbi5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBQYWdpbmF0aW9uVG90YWwgPSBwcm9wcyA9PiAoXG4gIDxzcGFuPlxuICAgICZuYnNwO1Nob3dpbmcgcm93cyB7IHByb3BzLmZyb20gfSB0byZuYnNwO3sgcHJvcHMudG8gKyAxIH0gb2YmbmJzcDt7IHByb3BzLmRhdGFTaXplIH1cbiAgPC9zcGFuPlxuKTtcblxuUGFnaW5hdGlvblRvdGFsLnByb3BUeXBlcyA9IHtcbiAgZnJvbTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0bzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBkYXRhU2l6ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uVG90YWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvcGFnaW5hdGlvbi10b3RhbC5qcyIsImV4cG9ydCBjb25zdCBnZXRCeUN1cnJQYWdlID0gKHN0b3JlLCBwYWdlU3RhcnRJbmRleCkgPT4ge1xuICBjb25zdCBkYXRhU2l6ZSA9IHN0b3JlLmRhdGEubGVuZ3RoO1xuICBpZiAoIWRhdGFTaXplKSByZXR1cm4gW107XG4gIGNvbnN0IGdldE5vcm1hbGl6ZWRQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IG9mZnNldCA9IE1hdGguYWJzKDEgLSBwYWdlU3RhcnRJbmRleCk7XG4gICAgcmV0dXJuIHN0b3JlLnBhZ2UgKyBvZmZzZXQ7XG4gIH07XG4gIGNvbnN0IGVuZCA9IChnZXROb3JtYWxpemVkUGFnZSgpICogc3RvcmUuc2l6ZVBlclBhZ2UpIC0gMTtcbiAgY29uc3Qgc3RhcnQgPSBlbmQgLSAoc3RvcmUuc2l6ZVBlclBhZ2UgLSAxKTtcblxuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSArPSAxKSB7XG4gICAgcmVzdWx0LnB1c2goc3RvcmUuZGF0YVtpXSk7XG4gICAgaWYgKGkgKyAxID09PSBkYXRhU2l6ZSkgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvcGFnZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=react-bootstrap-table2-paginator.js.map