var mogboard =
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
/******/ 	__webpack_require__.p = "/ui/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/App.js":
/*!**************************!*\
  !*** ./assets/js/App.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Server */ \"./assets/js/Server.js\");\n/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Language */ \"./assets/js/Language.js\");\n/* harmony import */ var _HeaderUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderUser */ \"./assets/js/HeaderUser.js\");\n/* harmony import */ var _HeaderCategories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderCategories */ \"./assets/js/HeaderCategories.js\");\n/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Settings */ \"./assets/js/Settings.js\");\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Search */ \"./assets/js/Search.js\");\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Product */ \"./assets/js/Product.js\");\n/* harmony import */ var _ProductAlerts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProductAlerts */ \"./assets/js/ProductAlerts.js\");\n\n_Server__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\n\n_Language__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n\n_HeaderUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"].watch();\n\n_HeaderCategories__WEBPACK_IMPORTED_MODULE_3__[\"default\"].watch();\n\n_Settings__WEBPACK_IMPORTED_MODULE_4__[\"default\"].watch();\n\n_Search__WEBPACK_IMPORTED_MODULE_5__[\"default\"].watch();\n\n_Product__WEBPACK_IMPORTED_MODULE_6__[\"default\"].watch();\n\n_ProductAlerts__WEBPACK_IMPORTED_MODULE_7__[\"default\"].watch();\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  HeaderCategories: _HeaderCategories__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  ProductAlerts: _ProductAlerts__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n});\n\n//# sourceURL=webpack://mogboard/./assets/js/App.js?");

/***/ }),

/***/ "./assets/js/ButtonLoading.js":
/*!************************************!*\
  !*** ./assets/js/ButtonLoading.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ButtonLoading =\n/*#__PURE__*/\nfunction () {\n  function ButtonLoading() {\n    _classCallCheck(this, ButtonLoading);\n  }\n\n  _createClass(ButtonLoading, [{\n    key: \"start\",\n    value: function start($ele) {\n      var text = $ele.text();\n      $ele.attr('data-text', text);\n      $ele.addClass('btn_loading');\n      $ele.prop('disabled', true);\n      $ele.html('<i class=\"icon-load-c\"></i>');\n    }\n  }, {\n    key: \"finish\",\n    value: function finish($ele) {\n      var text = $ele.attr('data-text');\n      $ele.removeClass('btn-loading');\n      $ele.prop('disabled', false);\n      $ele.html(text);\n    }\n  }, {\n    key: \"disable\",\n    value: function disable($ele, text) {\n      $ele.removeClass('btn-loading');\n      $ele.prop('disabled', true);\n      $ele.html(text);\n    }\n  }]);\n\n  return ButtonLoading;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new ButtonLoading());\n\n//# sourceURL=webpack://mogboard/./assets/js/ButtonLoading.js?");

/***/ }),

/***/ "./assets/js/HeaderCategories.js":
/*!***************************************!*\
  !*** ./assets/js/HeaderCategories.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Http */ \"./assets/js/Http.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar HeaderCategories =\n/*#__PURE__*/\nfunction () {\n  function HeaderCategories() {\n    _classCallCheck(this, HeaderCategories);\n\n    this.uiButton = $('.btn-market-board');\n    this.uiView = $('.market-board-container');\n    this.uiCategory = $('.market-category-container');\n    this.uiLazy = null;\n    this.viewActive = false;\n  }\n\n  _createClass(HeaderCategories, [{\n    key: \"watch\",\n    value: function watch() {\n      var _this = this;\n\n      this.uiButton.on('click', function (event) {\n        _this.uiView.addClass('open');\n      });\n      this.uiView.find('button').on('click', function (event) {\n        var id = $(event.currentTarget).attr('id');\n\n        _this.openCategory(id);\n      });\n      $(document).mouseup(function (event) {\n        var btn = _this.uiButton;\n        var view = _this.uiView; // if the target of the click isn't the container nor a descendant of the container\n\n        if (!btn.is(event.target) && btn.has(event.target).length === 0 && !view.is(event.target) && view.has(event.target).length === 0) {\n          _this.uiView.removeClass('open');\n        }\n      });\n      $(document).mouseup(function (event) {\n        var category = _this.uiCategory; // if the target of the click isn't the container nor a descendant of the container\n\n        if (!category.is(event.target) && category.has(event.target).length === 0) {\n          _this.uiCategory.removeClass('open');\n\n          _this.viewActive = false;\n        }\n      });\n      this.uiCategory.find('.market-category').on('click', 'a', function (event) {\n        _this.uiCategory.find('.market-category').html('<div class=\"loading\"><img src=\"/i/svg/loading2.svg\"></div>');\n      });\n    }\n  }, {\n    key: \"openCategory\",\n    value: function openCategory(id) {\n      var _this2 = this;\n\n      this.uiView.removeClass('open');\n      this.uiCategory.addClass('open');\n      this.uiCategory.find('.market-category').html('<div class=\"loading\"><img src=\"/i/svg/loading2.svg\"></div>');\n      _Http__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getItemCategoryList(id, function (response) {\n        _this2.uiCategory.find('.market-category').html(response);\n\n        _this2.viewActive = true;\n\n        _this2.setSearchHeight();\n\n        _this2.uiLazy = $('.lazy').Lazy({\n          // your configuration goes here\n          scrollDirection: 'vertical',\n          appendScroll: $('.item-category-list'),\n          effect: 'fadeIn',\n          visibleOnly: false,\n          bind: 'event'\n        });\n      });\n    }\n  }, {\n    key: \"setSearchHeight\",\n    value: function setSearchHeight() {\n      if (this.viewActive) {\n        // Handle height of search\n        var $searchResults = $('.item-category-list');\n        var windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 260;\n        $searchResults.css({\n          height: \"\".concat(windowHeight, \"px\")\n        });\n      }\n    }\n  }, {\n    key: \"setLoadingLazyLoadWatcher\",\n    value: function setLoadingLazyLoadWatcher() {\n      var _this3 = this;\n\n      var el = new SimpleBar(document.getElementById('item-category-list'));\n      el.getScrollElement().addEventListener('scroll', function (event) {\n        _this3.uiLazy.data(\"plugin_lazy\").update();\n      });\n    }\n  }]);\n\n  return HeaderCategories;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new HeaderCategories());\n\n//# sourceURL=webpack://mogboard/./assets/js/HeaderCategories.js?");

/***/ }),

/***/ "./assets/js/HeaderUser.js":
/*!*********************************!*\
  !*** ./assets/js/HeaderUser.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar HeaderUser =\n/*#__PURE__*/\nfunction () {\n  function HeaderUser() {\n    _classCallCheck(this, HeaderUser);\n\n    this.uiButton = $('.user-btn');\n    this.uiMenu = $('.user-menu');\n  }\n\n  _createClass(HeaderUser, [{\n    key: \"watch\",\n    value: function watch() {\n      var _this = this;\n\n      this.uiButton.on('click', function (event) {\n        _this.uiMenu.toggleClass('open');\n      });\n      $(document).mouseup(function (event) {\n        var buttons = _this.uiButton;\n        var nav = _this.uiMenu; // if the target of the click isn't the container nor a descendant of the container\n\n        if (!buttons.is(event.target) && buttons.has(event.target).length === 0 && !nav.is(event.target) && nav.has(event.target).length === 0) {\n          _this.uiMenu.removeClass('open');\n        }\n      });\n    }\n  }]);\n\n  return HeaderUser;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new HeaderUser());\n\n//# sourceURL=webpack://mogboard/./assets/js/HeaderUser.js?");

/***/ }),

/***/ "./assets/js/Http.js":
/*!***************************!*\
  !*** ./assets/js/Http.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Http =\n/*#__PURE__*/\nfunction () {\n  function Http() {\n    _classCallCheck(this, Http);\n  }\n\n  _createClass(Http, [{\n    key: \"getItemCategoryList\",\n\n    /**\r\n     * Get the results from an item category list for a specific id\r\n     *\r\n     * @param id int\r\n     * @param callback function\r\n     */\n    value: function getItemCategoryList(id, callback) {\n      var url = mog.url_item_category_list.replace('-id-', id);\n      fetch(url, {\n        mode: 'cors'\n      }).then(function (response) {\n        return response.text();\n      }).then(callback);\n    }\n    /**\r\n     * Get prices for an item\r\n     *\r\n     * @param server\r\n     * @param itemId\r\n     * @param callback\r\n     */\n\n  }, {\n    key: \"getItemPrices\",\n    value: function getItemPrices(server, itemId, callback) {\n      var url = mog.url_item_price.replace('-server-', server).replace('-id-', itemId);\n      fetch(url, {\n        mode: 'cors'\n      }).then(function (response) {\n        return response.text();\n      }).then(callback);\n    }\n    /**\r\n     * Get price history of an item\r\n     *\r\n     * @param server\r\n     * @param itemId\r\n     * @param callback\r\n     */\n\n  }, {\n    key: \"getItemHistory\",\n    value: function getItemHistory(server, itemId, callback) {\n      var url = mog.url_item_history.replace('-server-', server).replace('-id-', itemId);\n      fetch(url, {\n        mode: 'cors'\n      }).then(function (response) {\n        return response.text();\n      }).then(callback);\n    }\n    /**\r\n     * Get the price for an item across multiple worlds, by default this will select worlds\r\n     * based on the users server data-center, however they can customise this if they're logged in.\r\n     *\r\n     * @param server\r\n     * @param itemId\r\n     * @param callback\r\n     */\n\n  }, {\n    key: \"getItemPricesCrossWorld\",\n    value: function getItemPricesCrossWorld(server, itemId, callback) {\n      var url = mog.url_item_cross_world.replace('-server-', server).replace('-id-', itemId);\n      fetch(url, {\n        mode: 'cors'\n      }).then(function (response) {\n        return response.text();\n      }).then(callback);\n    }\n  }]);\n\n  return Http;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Http());\n\n//# sourceURL=webpack://mogboard/./assets/js/Http.js?");

/***/ }),

/***/ "./assets/js/Language.js":
/*!*******************************!*\
  !*** ./assets/js/Language.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Language =\n/*#__PURE__*/\nfunction () {\n  function Language() {\n    _classCallCheck(this, Language);\n\n    this.default = 'eu';\n  }\n\n  _createClass(Language, [{\n    key: \"init\",\n    value: function init() {\n      var language = localStorage.getItem('language'); // default language if non exist\n\n      localStorage.setItem('language', language ? language : this.default);\n    }\n  }, {\n    key: \"getLanguage\",\n    value: function getLanguage() {\n      return localStorage.getItem('language');\n    }\n  }, {\n    key: \"setLanguage\",\n    value: function setLanguage(language) {\n      localStorage.setItem('language', language);\n      this.init();\n    }\n  }]);\n\n  return Language;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Language());\n\n//# sourceURL=webpack://mogboard/./assets/js/Language.js?");

/***/ }),

/***/ "./assets/js/Modals.js":
/*!*****************************!*\
  !*** ./assets/js/Modals.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Modals =\n/*#__PURE__*/\nfunction () {\n  function Modals() {\n    _classCallCheck(this, Modals);\n\n    this.modalCover = $('.modal_cover');\n  }\n\n  _createClass(Modals, [{\n    key: \"add\",\n    value: function add(modal, button) {\n      var _this = this;\n\n      // open the modal\n      button.on('click', function (event) {\n        _this.modalCover.addClass('open');\n\n        modal.addClass('open');\n      }); // close modal\n\n      this.modalCover.on('click', function (event) {\n        _this.modalCover.removeClass('open');\n\n        modal.removeClass('open');\n      });\n    }\n  }, {\n    key: \"close\",\n    value: function close(modal) {\n      this.modalCover.removeClass('open');\n      modal.removeClass('open');\n    }\n  }]);\n\n  return Modals;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Modals());\n\n//# sourceURL=webpack://mogboard/./assets/js/Modals.js?");

/***/ }),

/***/ "./assets/js/Popup.js":
/*!****************************!*\
  !*** ./assets/js/Popup.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Popup =\n/*#__PURE__*/\nfunction () {\n  function Popup() {\n    var _this = this;\n\n    _classCallCheck(this, Popup);\n\n    this.icons = {\n      success: 'xiv-SymbolCheck',\n      error: 'xiv-SymbolCross',\n      warning: 'xiv-SymbolAlert',\n      info: 'xiv-SymbolQuestion'\n    };\n    this.ui = $('.popup');\n    this.ui.on('click', function (event) {\n      _this.close();\n    });\n  }\n\n  _createClass(Popup, [{\n    key: \"success\",\n    value: function success(title, message) {\n      this.setPopupIcon('success').setTitle(title).setMessage(message).open();\n    }\n  }, {\n    key: \"error\",\n    value: function error(title, message) {\n      this.setPopupIcon('error').setTitle(title).setMessage(message).open();\n    }\n  }, {\n    key: \"warning\",\n    value: function warning(title, message) {\n      console.log('title = ' + title);\n      this.setPopupIcon('warning').setTitle(title).setMessage(message).open();\n    }\n  }, {\n    key: \"info\",\n    value: function info(title, message) {\n      this.setPopupIcon('info').setTitle(title).setMessage(message).open();\n    }\n  }, {\n    key: \"setTitle\",\n    value: function setTitle(title) {\n      this.ui.find('h1').html(title);\n      return this;\n    }\n  }, {\n    key: \"setMessage\",\n    value: function setMessage(title) {\n      this.ui.find('p').html(title);\n      return this;\n    }\n  }, {\n    key: \"open\",\n    value: function open() {\n      this.ui.addClass('open');\n      return this;\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      this.ui.removeClass('open');\n      return this;\n    }\n  }, {\n    key: \"setPopupIcon\",\n    value: function setPopupIcon(type) {\n      this.ui.find('.popup_icon').attr('data-type', type);\n      this.ui.find('.popup_icon i').removeClass();\n      this.ui.find('.popup_icon i').addClass(this.icons[type]);\n      return this;\n    }\n  }]);\n\n  return Popup;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Popup());\n\n//# sourceURL=webpack://mogboard/./assets/js/Popup.js?");

/***/ }),

/***/ "./assets/js/Product.js":
/*!******************************!*\
  !*** ./assets/js/Product.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HeaderCategories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderCategories */ \"./assets/js/HeaderCategories.js\");\n/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Popup */ \"./assets/js/Popup.js\");\n/* harmony import */ var _ButtonLoading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonLoading */ \"./assets/js/ButtonLoading.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar Product =\n/*#__PURE__*/\nfunction () {\n  function Product() {\n    _classCallCheck(this, Product);\n\n    this.uiButtons = $('.product .menu');\n    this.uiTabs = $('.product .tab');\n    this.uiCategory = $('.product .product-search-cat');\n    this.uiRefreshButton = $('.btn_request_update');\n  }\n\n  _createClass(Product, [{\n    key: \"watch\",\n    value: function watch() {\n      var _this = this;\n\n      this.uiButtons.find('button').on('click', function (event) {\n        var tab = $(event.currentTarget).attr('data-tab');\n\n        _this.switchTab(event, tab);\n      });\n      this.uiTabs.find('.tab-page button').on('click', function (event) {\n        var tab = $(event.currentTarget).attr('data-tab');\n\n        _this.switchTabView(event, tab);\n      });\n      this.uiCategory.on('click', function (event) {\n        var id = $(event.currentTarget).attr('data-cat');\n        _HeaderCategories__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openCategory(id);\n      });\n      $(document).scroll(function (event) {\n        var y = $(document).scrollTop(),\n            menu = _this.uiButtons;\n\n        if (y >= 300) {\n          menu.addClass('fixed');\n        } else {\n          menu.removeClass('fixed');\n        }\n      });\n      this.uiRefreshButton.on('click', function (event) {\n        _ButtonLoading__WEBPACK_IMPORTED_MODULE_2__[\"default\"].start(_this.uiRefreshButton);\n        $.ajax({\n          url: mog.url_item_refresh.replace('-id-', itemId),\n          success: function success(response) {\n            _Popup__WEBPACK_IMPORTED_MODULE_1__[\"default\"].success('Prioritised!', 'This item has been bumped to the front of the queue. Check back in a minute and the prices/history should have been updated.');\n            _ButtonLoading__WEBPACK_IMPORTED_MODULE_2__[\"default\"].disable(_this.uiRefreshButton, 'Queued');\n\n            _this.uiRefreshButton.addClass('btn-green-outline').removeClass('btn-green');\n          },\n          error: function error(a, b, c) {\n            _Popup__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error('Error 37', 'Could not request item pricing refresh');\n            console.log('--- ERROR ---');\n            console.log(a, b, c);\n          }\n        });\n      });\n    }\n    /**\n     * Change product tab page\n     */\n\n  }, {\n    key: \"switchTab\",\n    value: function switchTab(event, tab) {\n      // remove current active states\n      this.uiButtons.find('button.open').removeClass('open');\n      this.uiTabs.find('.tab-page.open').removeClass('open'); // set active\n\n      $(event.currentTarget).addClass('open');\n      this.uiTabs.find(\".tab-\".concat(tab)).addClass('open');\n    }\n  }, {\n    key: \"switchTabView\",\n    value: function switchTabView(event, tab) {\n      var tabPage = this.uiTabs.find('.tab-page.open');\n      tabPage.find('button.active').removeClass('active');\n      tabPage.find('div.cw-table').removeClass('open'); // set active\n\n      tabPage.find(\"button[data-tab=\\\"\".concat(tab, \"\\\"]\")).addClass('active');\n      tabPage.find(\".\".concat(tab)).addClass('open');\n    }\n  }]);\n\n  return Product;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Product());\n\n//# sourceURL=webpack://mogboard/./assets/js/Product.js?");

/***/ }),

/***/ "./assets/js/ProductAlerts.js":
/*!************************************!*\
  !*** ./assets/js/ProductAlerts.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modals */ \"./assets/js/Modals.js\");\n/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Popup */ \"./assets/js/Popup.js\");\n/* harmony import */ var _ButtonLoading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonLoading */ \"./assets/js/ButtonLoading.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar ProductAlerts =\n/*#__PURE__*/\nfunction () {\n  function ProductAlerts() {\n    _classCallCheck(this, ProductAlerts);\n\n    this.uiForm = $('.create_alert_form');\n    this.uiModal = $('.alert_modal');\n    this.uiModalButton = $('.btn_create_alert');\n    this.uiInfoModal = $('.alert_info');\n    this.uiInfoModalButton = $('.btn_alert_info');\n    this.uiExistingAlerts = $('.existing_alerts');\n  }\n\n  _createClass(ProductAlerts, [{\n    key: \"watch\",\n    value: function watch() {\n      var _this = this;\n\n      // add modals\n      _Modals__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add(this.uiModal, this.uiModalButton);\n      _Modals__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add(this.uiInfoModal, this.uiInfoModalButton); // on submitting a new\n\n      this.uiForm.on('submit', function (event) {\n        event.preventDefault();\n        var payload = {\n          itemId: _this.uiForm.find('#alert_item_id').val().trim(),\n          name: _this.uiForm.find('#alert_name').val().trim(),\n          option: _this.uiForm.find('#alert_option').val().trim(),\n          value: _this.uiForm.find('#alert_value').val().trim(),\n          nq: _this.uiForm.find('#alert_nq').prop('checked'),\n          hq: _this.uiForm.find('#alert_hq').prop('checked'),\n          dc: _this.uiForm.find('#alert_dc').prop('checked'),\n          email: _this.uiForm.find('#alert_notify_email').prop('checked'),\n          discord: _this.uiForm.find('#alert_notify_discord').prop('checked')\n        };\n\n        _this.createItemAlert(payload);\n      });\n    }\n  }, {\n    key: \"createItemAlert\",\n    value: function createItemAlert(payload) {\n      var _this2 = this;\n\n      // quick dummy check\n      var valueIsNumber = !isNaN(parseFloat(payload.value)) && isFinite(payload.value);\n\n      if (valueIsNumber === false) {\n        _Popup__WEBPACK_IMPORTED_MODULE_1__[\"default\"].warning('Invalid Alert', 'The alert Condition Value is not a valid number.');\n        return;\n      }\n\n      var $btn = this.uiForm.find('button.btn_create_alert');\n      _ButtonLoading__WEBPACK_IMPORTED_MODULE_2__[\"default\"].start($btn); // send request\n\n      $.ajax({\n        url: mog.url_create_alert,\n        type: \"POST\",\n        dataType: \"json\",\n        data: JSON.stringify(payload),\n        contentType: \"application/json\",\n        success: function success(response) {\n          _ButtonLoading__WEBPACK_IMPORTED_MODULE_2__[\"default\"].finish($btn); // if alert ok\n\n          if (response.ok) {\n            // load current alerts\n            _this2.loadItemAlerts(); // close modals\n\n\n            _Modals__WEBPACK_IMPORTED_MODULE_0__[\"default\"].close(_this2.uiModal); // todo - reset form\n            // confirm\n\n            _Popup__WEBPACK_IMPORTED_MODULE_1__[\"default\"].success('Alert Created', 'Information on this alert will appear on the homepage!');\n            return;\n          } // error\n\n\n          _Popup__WEBPACK_IMPORTED_MODULE_1__[\"default\"].success('Error', response.message);\n        },\n        error: function error(a, b, c) {\n          _Popup__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error('Error 37', 'Could not create alert.');\n          console.log('--- ERROR ---');\n          console.log(a, b, c);\n        }\n      });\n    }\n  }, {\n    key: \"loadItemAlerts\",\n    value: function loadItemAlerts() {\n      var _this3 = this;\n\n      var url = mog.url_get_alerts.replace('-id-', itemId);\n      console.log(url);\n      $.ajax({\n        url: url,\n        contentType: \"application/json\",\n        success: function success(response) {\n          _this3.uiExistingAlerts.html(response);\n        },\n        error: function error(a, b, c) {\n          _this3.uiExistingAlerts.html('Could not obtain alerts for this item.');\n\n          console.log('--- ERROR ---');\n          console.log(a, b, c);\n        }\n      });\n    }\n  }]);\n\n  return ProductAlerts;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new ProductAlerts());\n\n//# sourceURL=webpack://mogboard/./assets/js/ProductAlerts.js?");

/***/ }),

/***/ "./assets/js/Search.js":
/*!*****************************!*\
  !*** ./assets/js/Search.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _XIVAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./XIVAPI */ \"./assets/js/XIVAPI.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n/**\r\n * todo - this needs some cleaning up\r\n */\n\nvar Search =\n/*#__PURE__*/\nfunction () {\n  function Search() {\n    _classCallCheck(this, Search);\n\n    this.uiInput = $('input.search');\n    this.uiView = $('.search-results-container');\n    this.uiLazy = null;\n    this.timeout = null;\n    this.timeoutDelay = 350;\n    this.searching = false;\n    this.searchTerm = null;\n  }\n\n  _createClass(Search, [{\n    key: \"watch\",\n    value: function watch() {\n      var _this = this;\n\n      this.uiInput.on('keyup', function (event) {\n        clearTimeout(_this.timeout);\n        var searchTerm = $(event.currentTarget).val().trim();\n\n        _this.uiInput.removeClass('complete');\n\n        searchTerm.length === 0 ? _this.uiInput.removeClass('typing') : _this.uiInput.addClass('typing');\n\n        if (searchTerm.length === 0) {\n          _this.searchTerm = '';\n\n          _this.uiView.removeClass('open');\n\n          return;\n        }\n\n        if (_this.searching || _this.searchTerm === searchTerm || searchTerm.length < 2) {\n          return;\n        } // perform search\n\n\n        _this.timeout = setTimeout(function () {\n          _this.searchTerm = $(event.currentTarget).val().trim();\n\n          _this.uiView.addClass('open');\n\n          _this.searching = true;\n          _XIVAPI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].search(searchTerm, function (response) {\n            _this.render(response);\n          });\n        }, _this.timeoutDelay);\n      });\n      this.uiInput.on('click', function (event) {\n        if (_this.searchTerm && _this.searchTerm.length > 1) {\n          _this.uiView.addClass('open');\n        }\n      });\n      $(document).mouseup(function (event) {\n        var view = _this.uiView;\n        var input = _this.uiInput; // if the target of the click isn't the container nor a descendant of the container\n\n        if (!view.is(event.target) && view.has(event.target).length === 0 && !input.is(event.target) && input.has(event.target).length === 0) {\n          _this.uiView.removeClass('open');\n\n          _this.uiInput.removeClass('complete typing');\n        }\n      });\n      $(window).on('resize', function (event) {\n        _this.setSearchHeight();\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render(response) {\n      var _this2 = this;\n\n      this.uiInput.removeClass('typing');\n      this.uiInput.addClass('complete');\n      this.searching = false;\n      var results = []; // prep results\n\n      response.Results.forEach(function (item, i) {\n        var url = mog.url_item.replace('-id-', item.ID);\n        results.push(\"<a href=\\\"\".concat(url, \"\\\" class=\\\"rarity-\").concat(item.Rarity, \"\\\">\\n                    <span><img src=\\\"http://xivapi.com/mb/loading.svg\\\" class=\\\"lazy\\\" data-src=\\\"https://xivapi.com\").concat(item.Icon, \"\\\"></span>\\n                    <span class=\\\"item-level\\\">\").concat(item.LevelItem, \"</span>\\n                    \").concat(item.Name, \"\\n                    <span class=\\\"item-category\\\">\").concat(item.ItemSearchCategory.Name, \"</span>\\n                </a>\"));\n      }); // render results\n\n      this.uiView.find('.search-results').html(\"\\n            <div class=\\\"item-search-header\\\">\\n                <div>\\n                    Found \".concat(response.Pagination.Results, \" / \").concat(response.Pagination.ResultsTotal, \" for <strong>\").concat(this.searchTerm, \"</strong>\\n                </div>\\n                <div>\\n                    <button class=\\\"btn-filters\\\"><icon class=\\\"xiv-MarketFilter\\\"></icon> Filters</button>\\n                </div>\\n            </div>\\n            <div data-simplebar class=\\\"item-search-list\\\" id=\\\"item-search-list\\\">\").concat(results.join(''), \"</div>\\n        \"));\n      this.uiLazy = $('.lazy').Lazy({\n        // your configuration goes here\n        scrollDirection: 'vertical',\n        appendScroll: $('.item-search-list'),\n        effect: 'fadeIn',\n        visibleOnly: false,\n        bind: 'event'\n      });\n      this.setSearchHeight();\n      var el = new SimpleBar(document.getElementById('item-search-list'));\n      el.getScrollElement().addEventListener('scroll', function (event) {\n        _this2.uiLazy.data(\"plugin_lazy\").update();\n      });\n      this.uiView.addClass('open');\n    }\n  }, {\n    key: \"setSearchHeight\",\n    value: function setSearchHeight() {\n      if (this.searchTerm) {\n        // Handle height of search\n        var $searchResults = $('.item-search-list');\n        var windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 260;\n        $searchResults.css({\n          height: \"\".concat(windowHeight, \"px\")\n        });\n      }\n    }\n  }]);\n\n  return Search;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Search());\n\n//# sourceURL=webpack://mogboard/./assets/js/Search.js?");

/***/ }),

/***/ "./assets/js/Server.js":
/*!*****************************!*\
  !*** ./assets/js/Server.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Server =\n/*#__PURE__*/\nfunction () {\n  function Server() {\n    _classCallCheck(this, Server);\n\n    this.default = 'Phoenix';\n  }\n\n  _createClass(Server, [{\n    key: \"init\",\n    value: function init() {\n      var server = localStorage.getItem('server'); // default server if non exist\n\n      localStorage.setItem('server', server ? server : this.default);\n    }\n  }, {\n    key: \"getServer\",\n    value: function getServer() {\n      return localStorage.getItem('server');\n    }\n  }, {\n    key: \"setServer\",\n    value: function setServer(server) {\n      document.cookie = \"server=\".concat(server);\n      localStorage.setItem('server', server);\n      this.init();\n    }\n  }]);\n\n  return Server;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Server());\n\n//# sourceURL=webpack://mogboard/./assets/js/Server.js?");

/***/ }),

/***/ "./assets/js/Settings.js":
/*!*******************************!*\
  !*** ./assets/js/Settings.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Server */ \"./assets/js/Server.js\");\n/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Language */ \"./assets/js/Language.js\");\n/* harmony import */ var _Modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modals */ \"./assets/js/Modals.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar Settings =\n/*#__PURE__*/\nfunction () {\n  function Settings() {\n    _classCallCheck(this, Settings);\n\n    this.uiModal = $('.modal_settings');\n    this.uiModalButton = $('.btn-settings'); // always ensure server is stored in cookie\n\n    if (localStorage.getItem('server')) {\n      _Server__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setServer(localStorage.getItem('server'));\n    } // set current server\n\n\n    this.uiModal.find('select.servers').val(localStorage.getItem('server')); // set current language\n\n    this.uiModal.find('select.languages').val(localStorage.getItem('language'));\n  }\n\n  _createClass(Settings, [{\n    key: \"watch\",\n    value: function watch() {\n      _Modals__WEBPACK_IMPORTED_MODULE_2__[\"default\"].add(this.uiModal, this.uiModalButton); // server select\n\n      this.uiModal.find('.servers').on('change', function (event) {\n        _Server__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setServer($(event.currentTarget).val());\n      }); // language select\n\n      this.uiModal.find('.languages').on('change', function (event) {\n        _Language__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setLanguage($(event.currentTarget).val());\n      });\n    }\n  }]);\n\n  return Settings;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Settings());\n\n//# sourceURL=webpack://mogboard/./assets/js/Settings.js?");

/***/ }),

/***/ "./assets/js/XIVAPI.js":
/*!*****************************!*\
  !*** ./assets/js/XIVAPI.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Language */ \"./assets/js/Language.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar XIVAPI =\n/*#__PURE__*/\nfunction () {\n  function XIVAPI() {\n    _classCallCheck(this, XIVAPI);\n  }\n\n  _createClass(XIVAPI, [{\n    key: \"get\",\n    value: function get(endpoint, queries, callback) {\n      queries = queries ? queries : {};\n      queries.key = mog.xivapi_key;\n      queries.tags = 'mogboardv2';\n      queries.language = _Language__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getLanguage();\n      var query = Object.keys(queries).map(function (k) {\n        return encodeURIComponent(k) + '=' + encodeURIComponent(queries[k]);\n      }).join('&');\n      endpoint = endpoint + '?' + query;\n      fetch(\"https://xivapi.com\".concat(endpoint), {\n        mode: 'cors'\n      }).then(function (response) {\n        return response.json();\n      }).then(callback);\n    }\n    /**\r\n     * Search for an item\r\n     */\n\n  }, {\n    key: \"search\",\n    value: function search(string, callback) {\n      var params = {\n        indexes: 'item',\n        filters: 'ItemSearchCategory.ID>=1',\n        columns: 'ID,Icon,Name,LevelItem,Rarity,ItemSearchCategory.Name,ItemSearchCategory.ID,ItemKind.Name',\n        string: string.trim(),\n        limit: 100\n      };\n      this.get(\"/search\", params, callback);\n    }\n    /**\r\n     * Return information about an item\r\n     */\n\n  }, {\n    key: \"getItem\",\n    value: function getItem(itemId, callback) {\n      this.get(\"/Item/\".concat(itemId), {}, callback);\n    }\n    /**\r\n     * Get a list of servers grouped by their data center\r\n     */\n\n  }, {\n    key: \"getServerList\",\n    value: function getServerList(callback) {\n      this.get('/servers/dc', {}, callback);\n    }\n  }]);\n\n  return XIVAPI;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new XIVAPI());\n\n//# sourceURL=webpack://mogboard/./assets/js/XIVAPI.js?");

/***/ })

/******/ })["default"];