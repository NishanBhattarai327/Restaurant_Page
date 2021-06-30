/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\nbody {\n\tbackground-color: black;\n}\n\n.tab-content {\n\twidth: 100%;\n\theight: 100%;\n}\n\n.navbar {\n\tpadding: 10px;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(200px, auto));\n}\n\n.home {\n  background-color: #cccccc;\n  height: 100vh;\n  background-position: center;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  position: relative;\n}\n\n.home-text {\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  background-color: #171716ba;\n  border-radius: 5px;\n  padding: 5px;\n}\n.btn-tab {\n\tbox-shadow:inset 0px 1px 3px 0px #91b8b3;\n\tbackground:linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);\n\tbackground-color:#768d87;\n\tborder-radius:2px;\n\tborder:1px solid #566963;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#ffffff;\n\tfont-family:Verdana;\n\tfont-size:15px;\n\tfont-weight:bold;\n\tpadding:11px 23px;\n\ttext-decoration:none;\n\ttext-shadow:0px -1px 0px #2b665e;\n}\n.btn-tab:hover {\n\tbackground:linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);\n\tbackground-color:#6c7c7c;\n}\n.btn-tab:active {\n\tposition:relative;\n\ttop:1px;\n}\n\n\n/*style for menu*/\ndiv.menu {\n\tposition: relative;\n\tmargin: 10px;\n\tdisplay: grid;\n  grid-gap: 10px;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n}\n\ndiv.gallery {\n  position: relative;\n}\n\ndiv.gallery img {\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  transition: .5s ease;\n  backface-visibility: hidden;\n  border-radius: 5px;\n}\n\n.overlay {\n  transition: .5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n\ndiv.desc {\n  color: white;\n  font-size: 16px;\n  font-size: 2vw;\n  font-weight: 600;\n  font-family: monospace;\n  background-color: #000000C9;\n  padding: 16px 24px;\n  border-radius: 5px;\n}\n\ndiv.gallery:hover .overlay{\n  opacity: 1;\n}\n\ndiv.gallery:hover img {\n\topacity: 0.3;\n}\n\n\n/*Styling About us*/\n.about-us-message {\n\ttext-align: center;\n\tpadding-top: 50px;\n\tmargin: auto;\n\tcolor: white;\n\tfont-weight: 600;\n\tfont-family: monospace, cursive;\n\twidth: 60%;\n}\n\n.about-us-message strong {\n\tcolor: indianred;\n}\n\n.about-us-message h2 {\n\tcolor: sandybrown;\n\tfont-size: 4vw;\n}\n\n/*Style Contact*/\n.contact-info {\n\tcolor: white;\n\tfont-family: cursive, monospace;\n\tpadding-top: 100px;\n\twidth: 50%;\n\tmargin: auto;\n\ttext-align: center;\n\tfont-weight: 600;\n}\n\n.contact-info h2 {\n\tfont-size: 4vw;\n\tcolor: hotpink;\n}\n\n.contact-info .number {\n\tcolor: violet;\n\tfont-family: monospace;\n}\n\n.contact-info .location {\n\tcolor: goldenrod;\n}\n", "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"AAAA;CACC,SAAS;CACT,UAAU;CACV,sBAAsB;AACvB;;AAEA;CACC,uBAAuB;AACxB;;AAEA;CACC,WAAW;CACX,YAAY;AACb;;AAEA;CACC,aAAa;CACb,aAAa;CACb,6DAA6D;AAC9D;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,2BAA2B;EAC3B,oCAAoC;EACpC,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,YAAY;EACZ,2BAA2B;EAC3B,kBAAkB;EAClB,YAAY;AACd;AACA;CACC,wCAAwC;CACxC,+DAA+D;CAC/D,wBAAwB;CACxB,iBAAiB;CACjB,wBAAwB;CACxB,oBAAoB;CACpB,cAAc;CACd,aAAa;CACb,mBAAmB;CACnB,cAAc;CACd,gBAAgB;CAChB,iBAAiB;CACjB,oBAAoB;CACpB,gCAAgC;AACjC;AACA;CACC,+DAA+D;CAC/D,wBAAwB;AACzB;AACA;CACC,iBAAiB;CACjB,OAAO;AACR;;;AAGA,iBAAiB;AACjB;CACC,kBAAkB;CAClB,YAAY;CACZ,aAAa;EACZ,cAAc;EACd,2DAA2D;AAC7D;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,UAAU;EACV,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,oCAAoC;EACpC,kBAAkB;AACpB;;;AAGA;EACE,YAAY;EACZ,eAAe;EACf,cAAc;EACd,gBAAgB;EAChB,sBAAsB;EACtB,2BAA2B;EAC3B,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;AAEA;CACC,YAAY;AACb;;;AAGA,mBAAmB;AACnB;CACC,kBAAkB;CAClB,iBAAiB;CACjB,YAAY;CACZ,YAAY;CACZ,gBAAgB;CAChB,+BAA+B;CAC/B,UAAU;AACX;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,iBAAiB;CACjB,cAAc;AACf;;AAEA,gBAAgB;AAChB;CACC,YAAY;CACZ,+BAA+B;CAC/B,kBAAkB;CAClB,UAAU;CACV,YAAY;CACZ,kBAAkB;CAClB,gBAAgB;AACjB;;AAEA;CACC,cAAc;CACd,cAAc;AACf;;AAEA;CACC,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,gBAAgB;AACjB","sourcesContent":["* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\nbody {\n\tbackground-color: black;\n}\n\n.tab-content {\n\twidth: 100%;\n\theight: 100%;\n}\n\n.navbar {\n\tpadding: 10px;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(200px, auto));\n}\n\n.home {\n  background-color: #cccccc;\n  height: 100vh;\n  background-position: center;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  position: relative;\n}\n\n.home-text {\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  background-color: #171716ba;\n  border-radius: 5px;\n  padding: 5px;\n}\n.btn-tab {\n\tbox-shadow:inset 0px 1px 3px 0px #91b8b3;\n\tbackground:linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);\n\tbackground-color:#768d87;\n\tborder-radius:2px;\n\tborder:1px solid #566963;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#ffffff;\n\tfont-family:Verdana;\n\tfont-size:15px;\n\tfont-weight:bold;\n\tpadding:11px 23px;\n\ttext-decoration:none;\n\ttext-shadow:0px -1px 0px #2b665e;\n}\n.btn-tab:hover {\n\tbackground:linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);\n\tbackground-color:#6c7c7c;\n}\n.btn-tab:active {\n\tposition:relative;\n\ttop:1px;\n}\n\n\n/*style for menu*/\ndiv.menu {\n\tposition: relative;\n\tmargin: 10px;\n\tdisplay: grid;\n  grid-gap: 10px;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n}\n\ndiv.gallery {\n  position: relative;\n}\n\ndiv.gallery img {\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  transition: .5s ease;\n  backface-visibility: hidden;\n  border-radius: 5px;\n}\n\n.overlay {\n  transition: .5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n\ndiv.desc {\n  color: white;\n  font-size: 16px;\n  font-size: 2vw;\n  font-weight: 600;\n  font-family: monospace;\n  background-color: #000000C9;\n  padding: 16px 24px;\n  border-radius: 5px;\n}\n\ndiv.gallery:hover .overlay{\n  opacity: 1;\n}\n\ndiv.gallery:hover img {\n\topacity: 0.3;\n}\n\n\n/*Styling About us*/\n.about-us-message {\n\ttext-align: center;\n\tpadding-top: 50px;\n\tmargin: auto;\n\tcolor: white;\n\tfont-weight: 600;\n\tfont-family: monospace, cursive;\n\twidth: 60%;\n}\n\n.about-us-message strong {\n\tcolor: indianred;\n}\n\n.about-us-message h2 {\n\tcolor: sandybrown;\n\tfont-size: 4vw;\n}\n\n/*Style Contact*/\n.contact-info {\n\tcolor: white;\n\tfont-family: cursive, monospace;\n\tpadding-top: 100px;\n\twidth: 50%;\n\tmargin: auto;\n\ttext-align: center;\n\tfont-weight: 600;\n}\n\n.contact-info h2 {\n\tfont-size: 4vw;\n\tcolor: hotpink;\n}\n\n.contact-info .number {\n\tcolor: violet;\n\tfont-family: monospace;\n}\n\n.contact-info .location {\n\tcolor: goldenrod;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}

module.exports = getTarget;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutTab)
/* harmony export */ });
function aboutTab() {
	let about = document.createElement('div');
	about.classList.add('about');
	
	about.appendChild(pTag(`
		<h2><u>Nepali Food Restaurant</u></h2>
		<br><br>
		East and West Nepali Resturant is the Best. We are world No.1
		in the business. None of the Resturant of any of the country in 
		the whole multiverse can give you a food as Good as Us. As Well 
		as we sever you <i>101%</i> only and only nepali food. Remember nowhere
		in the <strong>multiverse</strong>.
	`));

	return about;
}

function pTag(text) {
	const p = document.createElement('p');
	p.classList.add('about-us-message');
	p.innerHTML = text;
	return p;
}

/***/ }),

/***/ "./src/assets/img/Chatamari-Nepal.png":
/*!********************************************!*\
  !*** ./src/assets/img/Chatamari-Nepal.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c321b3b5a745b93f0f78.png";

/***/ }),

/***/ "./src/assets/img/Dal-Bhat-Nepali-Vegetarian.png":
/*!*******************************************************!*\
  !*** ./src/assets/img/Dal-Bhat-Nepali-Vegetarian.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8dc6fa4c880d7a6fe397.png";

/***/ }),

/***/ "./src/assets/img/Dal-bhat.png":
/*!*************************************!*\
  !*** ./src/assets/img/Dal-bhat.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a44aea883646f299c3ae.png";

/***/ }),

/***/ "./src/assets/img/Dhido-Nepalese-food.png":
/*!************************************************!*\
  !*** ./src/assets/img/Dhido-Nepalese-food.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "479de3a7cbf8f9f9cc0f.png";

/***/ }),

/***/ "./src/assets/img/Gundruk-and-Rice.png":
/*!*********************************************!*\
  !*** ./src/assets/img/Gundruk-and-Rice.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e287df9e2ff3cab68820.png";

/***/ }),

/***/ "./src/assets/img/Momo-in-Nepal.png":
/*!******************************************!*\
  !*** ./src/assets/img/Momo-in-Nepal.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "755b1603a1dfbae750de.png";

/***/ }),

/***/ "./src/assets/img/Puwa-Nepal.png":
/*!***************************************!*\
  !*** ./src/assets/img/Puwa-Nepal.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d2175329984ca712df8.png";

/***/ }),

/***/ "./src/assets/img/Sel_Roti_Nepalese-Food.png":
/*!***************************************************!*\
  !*** ./src/assets/img/Sel_Roti_Nepalese-Food.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d19dbb3b7bad902a1347.png";

/***/ }),

/***/ "./src/assets/img/Yomari-food-nepal.png":
/*!**********************************************!*\
  !*** ./src/assets/img/Yomari-food-nepal.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17c500717f99fbcbc9b8.png";

/***/ }),

/***/ "./src/assets/img/beans-bamboo-shoots.png":
/*!************************************************!*\
  !*** ./src/assets/img/beans-bamboo-shoots.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "893679f39fabfbb1bec1.png";

/***/ }),

/***/ "./src/assets/img/chewra-sabzi.png":
/*!*****************************************!*\
  !*** ./src/assets/img/chewra-sabzi.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f96c39939a00f596f01.png";

/***/ }),

/***/ "./src/assets/img/pickled-potatoes-aloo-acchar.png":
/*!*********************************************************!*\
  !*** ./src/assets/img/pickled-potatoes-aloo-acchar.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "176ba0cf69b7c30e6fed.png";

/***/ }),

/***/ "./src/assets/img/samay-Baji-Nepal.png":
/*!*********************************************!*\
  !*** ./src/assets/img/samay-Baji-Nepal.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b711e1af77a6eddc076.png";

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactTab)
/* harmony export */ });
function contactTab() {
	const contact = document.createElement('div');
	contact.classList.add('contact');
	
	contact.appendChild(pTag(`
		<h2><u>Contact Us</u></h2>
		<br><br><br>
		Phone Number: <span class='number'>9800011100</span><br>
		Tel. Number: <span class='number'>025-7865</span><br>
		Location: <span class='location'>Submit Of Sagarmatha, Nepal</span><br>
		<br>
	`));

	return contact;
}

function pTag(text) {
	const p = document.createElement('p');
	p.classList.add('contact-info');
	p.innerHTML = text;
	return p;
}

/***/ }),

/***/ "./src/helperFunc.js":
/*!***************************!*\
  !*** ./src/helperFunc.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeAllChild": () => (/* binding */ removeAllChild)
/* harmony export */ });
function removeAllChild(parent) {
	if(parent) {
		while(parent.firstChild) {
			parent.removeChild(parent.lastChild);
		}
	}
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeTab)
/* harmony export */ });
/* harmony import */ var _assets_img_Sel_Roti_Nepalese_Food_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/img/Sel_Roti_Nepalese-Food.png */ "./src/assets/img/Sel_Roti_Nepalese-Food.png");


function homeTab() {
	const home = document.createElement('div');
	home.classList.add('home');
	home.style.backgroundImage = `url(${_assets_img_Sel_Roti_Nepalese_Food_png__WEBPACK_IMPORTED_MODULE_0__})`;

	home.appendChild(pTag(`
		<h1>Welcome To 101% Nepali Resturant</h1>
		<br>
		"Our body is Food we Eat" <br>
		So eat Without any doubt. This is the food that you Need
		. That, Every cell of your body need.
	`));

	return home;
}

function pTag(text) {
	const p = document.createElement('p');
	p.classList.add('home-text');
	p.innerHTML = text;

	return p;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuTab)
/* harmony export */ });
/* harmony import */ var _assets_img_beans_bamboo_shoots_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/img/beans-bamboo-shoots.png */ "./src/assets/img/beans-bamboo-shoots.png");
/* harmony import */ var _assets_img_Chatamari_Nepal_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/Chatamari-Nepal.png */ "./src/assets/img/Chatamari-Nepal.png");
/* harmony import */ var _assets_img_chewra_sabzi_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/img/chewra-sabzi.png */ "./src/assets/img/chewra-sabzi.png");
/* harmony import */ var _assets_img_Dal_Bhat_Nepali_Vegetarian_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/img/Dal-Bhat-Nepali-Vegetarian.png */ "./src/assets/img/Dal-Bhat-Nepali-Vegetarian.png");
/* harmony import */ var _assets_img_Dal_bhat_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/img/Dal-bhat.png */ "./src/assets/img/Dal-bhat.png");
/* harmony import */ var _assets_img_Dhido_Nepalese_food_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/img/Dhido-Nepalese-food.png */ "./src/assets/img/Dhido-Nepalese-food.png");
/* harmony import */ var _assets_img_Gundruk_and_Rice_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/img/Gundruk-and-Rice.png */ "./src/assets/img/Gundruk-and-Rice.png");
/* harmony import */ var _assets_img_Momo_in_Nepal_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/img/Momo-in-Nepal.png */ "./src/assets/img/Momo-in-Nepal.png");
/* harmony import */ var _assets_img_pickled_potatoes_aloo_acchar_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/img/pickled-potatoes-aloo-acchar.png */ "./src/assets/img/pickled-potatoes-aloo-acchar.png");
/* harmony import */ var _assets_img_Puwa_Nepal_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/img/Puwa-Nepal.png */ "./src/assets/img/Puwa-Nepal.png");
/* harmony import */ var _assets_img_samay_Baji_Nepal_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/img/samay-Baji-Nepal.png */ "./src/assets/img/samay-Baji-Nepal.png");
/* harmony import */ var _assets_img_Sel_Roti_Nepalese_Food_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/img/Sel_Roti_Nepalese-Food.png */ "./src/assets/img/Sel_Roti_Nepalese-Food.png");
/* harmony import */ var _assets_img_Yomari_food_nepal_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/img/Yomari-food-nepal.png */ "./src/assets/img/Yomari-food-nepal.png");














function menuTab() {
	const menu = document.createElement('div');
	menu.classList.add('menu');

	menu.appendChild(menuCard(_assets_img_beans_bamboo_shoots_png__WEBPACK_IMPORTED_MODULE_0__, {name:'Beans Bamboo Shoots', price: 200}));
	menu.appendChild(menuCard(_assets_img_Chatamari_Nepal_png__WEBPACK_IMPORTED_MODULE_1__, {name:'Chatamari', price: 100}));
	menu.appendChild(menuCard(_assets_img_chewra_sabzi_png__WEBPACK_IMPORTED_MODULE_2__, {name:'Chewra Sabzi', price: 50}));
	menu.appendChild(menuCard(_assets_img_Dal_Bhat_Nepali_Vegetarian_png__WEBPACK_IMPORTED_MODULE_3__, {name:'Special Dal Bhat Tarkari', price: 200}));
	menu.appendChild(menuCard(_assets_img_Dal_bhat_png__WEBPACK_IMPORTED_MODULE_4__, {name:'Dal Bhat Tarkari', price: 400}));
	menu.appendChild(menuCard(_assets_img_Gundruk_and_Rice_png__WEBPACK_IMPORTED_MODULE_6__, {name:'Gundruk ra Bhat', price: 150}));
	menu.appendChild(menuCard(_assets_img_Momo_in_Nepal_png__WEBPACK_IMPORTED_MODULE_7__, {name:'Mitho Momo', price: 110}));
	menu.appendChild(menuCard(_assets_img_pickled_potatoes_aloo_acchar_png__WEBPACK_IMPORTED_MODULE_8__, {name:'Aloo Dhum', price: 50}));
	menu.appendChild(menuCard(_assets_img_samay_Baji_Nepal_png__WEBPACK_IMPORTED_MODULE_10__, {name:'Geda Gudi ra Biscut', price: 300}));
	menu.appendChild(menuCard(_assets_img_Sel_Roti_Nepalese_Food_png__WEBPACK_IMPORTED_MODULE_11__, {name:'Sel Roti', price: 50}));
	menu.appendChild(menuCard(_assets_img_Yomari_food_nepal_png__WEBPACK_IMPORTED_MODULE_12__, {name:'Yomari', price: 30}));

	return menu;
}

function createHeading(text) {
	let heading = document.createElement('header');
	heading.classList.add('menu-heading');
	heading.innerHTML = text;
	return heading;
}

function pTag(text) {
	const p = document.createElement('p');
	p.innerHTML = text;
	return p;
}

function menuCard(imgSrc, text) {
	const div = document.createElement('div');
	div.classList.add('responsive');
	div.innerHTML = `
		<div class='gallery'>
			<img class='food-img' src="${imgSrc}" alt="menu food"> 
			<div class='overlay'>
				<div class='desc'>
					${text.name} <br>
					Rs ${text.price}
				</div>
			</div>
		</div>
	`;
	return div;
}

/***/ }),

/***/ "./src/tab.js":
/*!********************!*\
  !*** ./src/tab.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attachNavbarTo": () => (/* binding */ attachNavbarTo)
/* harmony export */ });
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _helperFunc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helperFunc */ "./src/helperFunc.js");







function renderTab(body, tab) {
	/*append the new tab to the body by removing the previous tab*/
	if(body) {
		const availableTabContent = document.querySelector('.tab');
		if(availableTabContent)
			body.removeChild(availableTabContent);

		tab.classList.add('tab');
		body.appendChild(tab);
	}
}

function attachNavbarTo(body) {
	const navbar = document.createElement('div');
	navbar.classList.add("navbar");

	const tabBody = document.createElement('div');
	tabBody.classList.add('tab-content');

	const home = document.createElement('button');
	home.textContent = 'home';
	home.classList.add('btn-home-tab', 'btn', 'btn-tab');
	home.addEventListener('click', () => {renderTab(tabBody, (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.default)())});

	const menu = document.createElement('button');
	menu.textContent = 'Menu';
	menu.classList.add('btn-menu-tab', 'btn', 'btn-tab');
	menu.addEventListener('click', () => {renderTab(tabBody, (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__.default)())});

	const about = document.createElement('button');
	about.textContent = 'About Us';
	about.classList.add('btn-about-tab', 'btn', 'btn-tab');
	about.addEventListener('click', () => {renderTab(tabBody, (0,_about_js__WEBPACK_IMPORTED_MODULE_3__.default)())});

	const contact = document.createElement('button');
	contact.textContent = 'Contact';
	contact.classList.add('btn-contact-tab', 'btn', 'btn-tab');
	contact.addEventListener('click', () => {renderTab(tabBody, (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.default)())});

	navbar.appendChild(home);
	navbar.appendChild(menu);
	navbar.appendChild(about);
	navbar.appendChild(contact);

	/*Default tab*/
	renderTab(tabBody, (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.default)());

	body.appendChild(navbar);
	body.appendChild(tabBody);
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab */ "./src/tab.js");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");



const body = document.getElementById('content');

//adding tab swithching navigation bar to the content of the page
_tab__WEBPACK_IMPORTED_MODULE_0__.attachNavbarTo(body);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3M/Y2RkNiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRUYXJnZXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2hlbHBlckZ1bmMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3RhYi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGNBQWMsZUFBZSwyQkFBMkIsR0FBRyxVQUFVLDRCQUE0QixHQUFHLGtCQUFrQixnQkFBZ0IsaUJBQWlCLEdBQUcsYUFBYSxrQkFBa0Isa0JBQWtCLGtFQUFrRSxHQUFHLFdBQVcsOEJBQThCLGtCQUFrQixnQ0FBZ0MseUNBQXlDLDJCQUEyQix1QkFBdUIsR0FBRyxnQkFBZ0IsdUJBQXVCLHVCQUF1QixhQUFhLGNBQWMscUNBQXFDLGlCQUFpQixnQ0FBZ0MsdUJBQXVCLGlCQUFpQixHQUFHLFlBQVksNkNBQTZDLG9FQUFvRSw2QkFBNkIsc0JBQXNCLDZCQUE2Qix5QkFBeUIsbUJBQW1CLGtCQUFrQix3QkFBd0IsbUJBQW1CLHFCQUFxQixz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O1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7OztBQ2Y2QjtBQUNHOztBQUVoQzs7QUFFQTtBQUNBLGdEQUFrQiIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udGFiLWNvbnRlbnQge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm5hdmJhciB7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCBhdXRvKSk7XFxufVxcblxcbi5ob21lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCwgcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmhvbWUtdGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNmJhO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4uYnRuLXRhYiB7XFxuXFx0Ym94LXNoYWRvdzppbnNldCAwcHggMXB4IDNweCAwcHggIzkxYjhiMztcXG5cXHRiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM3NjhkODcgNSUsICM2YzdjN2MgMTAwJSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjojNzY4ZDg3O1xcblxcdGJvcmRlci1yYWRpdXM6MnB4O1xcblxcdGJvcmRlcjoxcHggc29saWQgIzU2Njk2MztcXG5cXHRkaXNwbGF5OmlubGluZS1ibG9jaztcXG5cXHRjdXJzb3I6cG9pbnRlcjtcXG5cXHRjb2xvcjojZmZmZmZmO1xcblxcdGZvbnQtZmFtaWx5OlZlcmRhbmE7XFxuXFx0Zm9udC1zaXplOjE1cHg7XFxuXFx0Zm9udC13ZWlnaHQ6Ym9sZDtcXG5cXHRwYWRkaW5nOjExcHggMjNweDtcXG5cXHR0ZXh0LWRlY29yYXRpb246bm9uZTtcXG5cXHR0ZXh0LXNoYWRvdzowcHggLTFweCAwcHggIzJiNjY1ZTtcXG59XFxuLmJ0bi10YWI6aG92ZXIge1xcblxcdGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzZjN2M3YyA1JSwgIzc2OGQ4NyAxMDAlKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiM2YzdjN2M7XFxufVxcbi5idG4tdGFiOmFjdGl2ZSB7XFxuXFx0cG9zaXRpb246cmVsYXRpdmU7XFxuXFx0dG9wOjFweDtcXG59XFxuXFxuXFxuLypzdHlsZSBmb3IgbWVudSovXFxuZGl2Lm1lbnUge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRtYXJnaW46IDEwcHg7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAxMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxufVxcblxcbmRpdi5nYWxsZXJ5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuZGl2LmdhbGxlcnkgaW1nIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbmRpdi5kZXNjIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtc2l6ZTogMnZ3O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwQzk7XFxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbmRpdi5nYWxsZXJ5OmhvdmVyIC5vdmVybGF5e1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuZGl2LmdhbGxlcnk6aG92ZXIgaW1nIHtcXG5cXHRvcGFjaXR5OiAwLjM7XFxufVxcblxcblxcbi8qU3R5bGluZyBBYm91dCB1cyovXFxuLmFib3V0LXVzLW1lc3NhZ2Uge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRwYWRkaW5nLXRvcDogNTBweDtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgY3Vyc2l2ZTtcXG5cXHR3aWR0aDogNjAlO1xcbn1cXG5cXG4uYWJvdXQtdXMtbWVzc2FnZSBzdHJvbmcge1xcblxcdGNvbG9yOiBpbmRpYW5yZWQ7XFxufVxcblxcbi5hYm91dC11cy1tZXNzYWdlIGgyIHtcXG5cXHRjb2xvcjogc2FuZHlicm93bjtcXG5cXHRmb250LXNpemU6IDR2dztcXG59XFxuXFxuLypTdHlsZSBDb250YWN0Ki9cXG4uY29udGFjdC1pbmZvIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Zm9udC1mYW1pbHk6IGN1cnNpdmUsIG1vbm9zcGFjZTtcXG5cXHRwYWRkaW5nLXRvcDogMTAwcHg7XFxuXFx0d2lkdGg6IDUwJTtcXG5cXHRtYXJnaW46IGF1dG87XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5jb250YWN0LWluZm8gaDIge1xcblxcdGZvbnQtc2l6ZTogNHZ3O1xcblxcdGNvbG9yOiBob3RwaW5rO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvIC5udW1iZXIge1xcblxcdGNvbG9yOiB2aW9sZXQ7XFxuXFx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuXFxuLmNvbnRhY3QtaW5mbyAubG9jYXRpb24ge1xcblxcdGNvbG9yOiBnb2xkZW5yb2Q7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixhQUFhO0NBQ2IsNkRBQTZEO0FBQzlEOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0Isb0NBQW9DO0VBQ3BDLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0NBQ0Msd0NBQXdDO0NBQ3hDLCtEQUErRDtDQUMvRCx3QkFBd0I7Q0FDeEIsaUJBQWlCO0NBQ2pCLHdCQUF3QjtDQUN4QixvQkFBb0I7Q0FDcEIsY0FBYztDQUNkLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLGdDQUFnQztBQUNqQztBQUNBO0NBQ0MsK0RBQStEO0NBQy9ELHdCQUF3QjtBQUN6QjtBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLE9BQU87QUFDUjs7O0FBR0EsaUJBQWlCO0FBQ2pCO0NBQ0Msa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixhQUFhO0VBQ1osY0FBYztFQUNkLDJEQUEyRDtBQUM3RDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLG9DQUFvQztFQUNwQyxrQkFBa0I7QUFDcEI7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7O0FBR0EsbUJBQW1CO0FBQ25CO0NBQ0Msa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osWUFBWTtDQUNaLGdCQUFnQjtDQUNoQiwrQkFBK0I7Q0FDL0IsVUFBVTtBQUNYOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGNBQWM7QUFDZjs7QUFFQSxnQkFBZ0I7QUFDaEI7Q0FDQyxZQUFZO0NBQ1osK0JBQStCO0NBQy9CLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsY0FBYztBQUNmOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRhYi1jb250ZW50IHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5uYXZiYXIge1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgYXV0bykpO1xcbn1cXG5cXG4uaG9tZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQsIHJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ob21lLXRleHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTZiYTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuLmJ0bi10YWIge1xcblxcdGJveC1zaGFkb3c6aW5zZXQgMHB4IDFweCAzcHggMHB4ICM5MWI4YjM7XFxuXFx0YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNzY4ZDg3IDUlLCAjNmM3YzdjIDEwMCUpO1xcblxcdGJhY2tncm91bmQtY29sb3I6Izc2OGQ4NztcXG5cXHRib3JkZXItcmFkaXVzOjJweDtcXG5cXHRib3JkZXI6MXB4IHNvbGlkICM1NjY5NjM7XFxuXFx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XFxuXFx0Y3Vyc29yOnBvaW50ZXI7XFxuXFx0Y29sb3I6I2ZmZmZmZjtcXG5cXHRmb250LWZhbWlseTpWZXJkYW5hO1xcblxcdGZvbnQtc2l6ZToxNXB4O1xcblxcdGZvbnQtd2VpZ2h0OmJvbGQ7XFxuXFx0cGFkZGluZzoxMXB4IDIzcHg7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XFxuXFx0dGV4dC1zaGFkb3c6MHB4IC0xcHggMHB4ICMyYjY2NWU7XFxufVxcbi5idG4tdGFiOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM2YzdjN2MgNSUsICM3NjhkODcgMTAwJSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjojNmM3YzdjO1xcbn1cXG4uYnRuLXRhYjphY3RpdmUge1xcblxcdHBvc2l0aW9uOnJlbGF0aXZlO1xcblxcdHRvcDoxcHg7XFxufVxcblxcblxcbi8qc3R5bGUgZm9yIG1lbnUqL1xcbmRpdi5tZW51IHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bWFyZ2luOiAxMHB4O1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWdhcDogMTBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbn1cXG5cXG5kaXYuZ2FsbGVyeSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmRpdi5nYWxsZXJ5IGltZyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG5kaXYuZGVzYyB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXNpemU6IDJ2dztcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMEM5O1xcbiAgcGFkZGluZzogMTZweCAyNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5kaXYuZ2FsbGVyeTpob3ZlciAub3ZlcmxheXtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbmRpdi5nYWxsZXJ5OmhvdmVyIGltZyB7XFxuXFx0b3BhY2l0eTogMC4zO1xcbn1cXG5cXG5cXG4vKlN0eWxpbmcgQWJvdXQgdXMqL1xcbi5hYm91dC11cy1tZXNzYWdlIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0cGFkZGluZy10b3A6IDUwcHg7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIGN1cnNpdmU7XFxuXFx0d2lkdGg6IDYwJTtcXG59XFxuXFxuLmFib3V0LXVzLW1lc3NhZ2Ugc3Ryb25nIHtcXG5cXHRjb2xvcjogaW5kaWFucmVkO1xcbn1cXG5cXG4uYWJvdXQtdXMtbWVzc2FnZSBoMiB7XFxuXFx0Y29sb3I6IHNhbmR5YnJvd247XFxuXFx0Zm9udC1zaXplOiA0dnc7XFxufVxcblxcbi8qU3R5bGUgQ29udGFjdCovXFxuLmNvbnRhY3QtaW5mbyB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGZvbnQtZmFtaWx5OiBjdXJzaXZlLCBtb25vc3BhY2U7XFxuXFx0cGFkZGluZy10b3A6IDEwMHB4O1xcblxcdHdpZHRoOiA1MCU7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvIGgyIHtcXG5cXHRmb250LXNpemU6IDR2dztcXG5cXHRjb2xvcjogaG90cGluaztcXG59XFxuXFxuLmNvbnRhY3QtaW5mbyAubnVtYmVyIHtcXG5cXHRjb2xvcjogdmlvbGV0O1xcblxcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcbi5jb250YWN0LWluZm8gLmxvY2F0aW9uIHtcXG5cXHRjb2xvcjogZ29sZGVucm9kO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYm91dFRhYigpIHtcblx0bGV0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGFib3V0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XG5cdFxuXHRhYm91dC5hcHBlbmRDaGlsZChwVGFnKGBcblx0XHQ8aDI+PHU+TmVwYWxpIEZvb2QgUmVzdGF1cmFudDwvdT48L2gyPlxuXHRcdDxicj48YnI+XG5cdFx0RWFzdCBhbmQgV2VzdCBOZXBhbGkgUmVzdHVyYW50IGlzIHRoZSBCZXN0LiBXZSBhcmUgd29ybGQgTm8uMVxuXHRcdGluIHRoZSBidXNpbmVzcy4gTm9uZSBvZiB0aGUgUmVzdHVyYW50IG9mIGFueSBvZiB0aGUgY291bnRyeSBpbiBcblx0XHR0aGUgd2hvbGUgbXVsdGl2ZXJzZSBjYW4gZ2l2ZSB5b3UgYSBmb29kIGFzIEdvb2QgYXMgVXMuIEFzIFdlbGwgXG5cdFx0YXMgd2Ugc2V2ZXIgeW91IDxpPjEwMSU8L2k+IG9ubHkgYW5kIG9ubHkgbmVwYWxpIGZvb2QuIFJlbWVtYmVyIG5vd2hlcmVcblx0XHRpbiB0aGUgPHN0cm9uZz5tdWx0aXZlcnNlPC9zdHJvbmc+LlxuXHRgKSk7XG5cblx0cmV0dXJuIGFib3V0O1xufVxuXG5mdW5jdGlvbiBwVGFnKHRleHQpIHtcblx0Y29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0cC5jbGFzc0xpc3QuYWRkKCdhYm91dC11cy1tZXNzYWdlJyk7XG5cdHAuaW5uZXJIVE1MID0gdGV4dDtcblx0cmV0dXJuIHA7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdFRhYigpIHtcblx0Y29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcblx0XG5cdGNvbnRhY3QuYXBwZW5kQ2hpbGQocFRhZyhgXG5cdFx0PGgyPjx1PkNvbnRhY3QgVXM8L3U+PC9oMj5cblx0XHQ8YnI+PGJyPjxicj5cblx0XHRQaG9uZSBOdW1iZXI6IDxzcGFuIGNsYXNzPSdudW1iZXInPjk4MDAwMTExMDA8L3NwYW4+PGJyPlxuXHRcdFRlbC4gTnVtYmVyOiA8c3BhbiBjbGFzcz0nbnVtYmVyJz4wMjUtNzg2NTwvc3Bhbj48YnI+XG5cdFx0TG9jYXRpb246IDxzcGFuIGNsYXNzPSdsb2NhdGlvbic+U3VibWl0IE9mIFNhZ2FybWF0aGEsIE5lcGFsPC9zcGFuPjxicj5cblx0XHQ8YnI+XG5cdGApKTtcblxuXHRyZXR1cm4gY29udGFjdDtcbn1cblxuZnVuY3Rpb24gcFRhZyh0ZXh0KSB7XG5cdGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdHAuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pbmZvJyk7XG5cdHAuaW5uZXJIVE1MID0gdGV4dDtcblx0cmV0dXJuIHA7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkKHBhcmVudCkge1xuXHRpZihwYXJlbnQpIHtcblx0XHR3aGlsZShwYXJlbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5sYXN0Q2hpbGQpO1xuXHRcdH1cblx0fVxufSIsImltcG9ydCBzZWxSb3RpIGZyb20gJy4vYXNzZXRzL2ltZy9TZWxfUm90aV9OZXBhbGVzZS1Gb29kLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVUYWIoKSB7XG5cdGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0aG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG5cdGhvbWUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3NlbFJvdGl9KWA7XG5cblx0aG9tZS5hcHBlbmRDaGlsZChwVGFnKGBcblx0XHQ8aDE+V2VsY29tZSBUbyAxMDElIE5lcGFsaSBSZXN0dXJhbnQ8L2gxPlxuXHRcdDxicj5cblx0XHRcIk91ciBib2R5IGlzIEZvb2Qgd2UgRWF0XCIgPGJyPlxuXHRcdFNvIGVhdCBXaXRob3V0IGFueSBkb3VidC4gVGhpcyBpcyB0aGUgZm9vZCB0aGF0IHlvdSBOZWVkXG5cdFx0LiBUaGF0LCBFdmVyeSBjZWxsIG9mIHlvdXIgYm9keSBuZWVkLlxuXHRgKSk7XG5cblx0cmV0dXJuIGhvbWU7XG59XG5cbmZ1bmN0aW9uIHBUYWcodGV4dCkge1xuXHRjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRwLmNsYXNzTGlzdC5hZGQoJ2hvbWUtdGV4dCcpO1xuXHRwLmlubmVySFRNTCA9IHRleHQ7XG5cblx0cmV0dXJuIHA7XG59IiwiaW1wb3J0IGltZ0JhbWJvbyBmcm9tICcuL2Fzc2V0cy9pbWcvYmVhbnMtYmFtYm9vLXNob290cy5wbmcnO1xuaW1wb3J0IGltZ0NoYXRhbWFyaSBmcm9tICcuL2Fzc2V0cy9pbWcvQ2hhdGFtYXJpLU5lcGFsLnBuZyc7XG5pbXBvcnQgaW1nQ2hld3JhIGZyb20gJy4vYXNzZXRzL2ltZy9jaGV3cmEtc2FiemkucG5nJztcbmltcG9ydCBpbWdEYWxCaGF0IGZyb20gJy4vYXNzZXRzL2ltZy9EYWwtQmhhdC1OZXBhbGktVmVnZXRhcmlhbi5wbmcnO1xuaW1wb3J0IGltZ0RhbEJoYXRUYXJrYXJpIGZyb20gJy4vYXNzZXRzL2ltZy9EYWwtYmhhdC5wbmcnO1xuaW1wb3J0IGltZ0RoaWRvIGZyb20gJy4vYXNzZXRzL2ltZy9EaGlkby1OZXBhbGVzZS1mb29kLnBuZyc7XG5pbXBvcnQgaW1nR3VuZHJ1ayBmcm9tICcuL2Fzc2V0cy9pbWcvR3VuZHJ1ay1hbmQtUmljZS5wbmcnO1xuaW1wb3J0IGltZ01vbW8gZnJvbSAnLi9hc3NldHMvaW1nL01vbW8taW4tTmVwYWwucG5nJztcbmltcG9ydCBpbWdBbG9vQWNjaGFyIGZyb20gJy4vYXNzZXRzL2ltZy9waWNrbGVkLXBvdGF0b2VzLWFsb28tYWNjaGFyLnBuZyc7XG5pbXBvcnQgaW1nUHV3YSBmcm9tICcuL2Fzc2V0cy9pbWcvUHV3YS1OZXBhbC5wbmcnO1xuaW1wb3J0IGltZ0dlZGFHdWRpIGZyb20gJy4vYXNzZXRzL2ltZy9zYW1heS1CYWppLU5lcGFsLnBuZyc7XG5pbXBvcnQgaW1nU2VsIGZyb20gJy4vYXNzZXRzL2ltZy9TZWxfUm90aV9OZXBhbGVzZS1Gb29kLnBuZyc7XG5pbXBvcnQgaW1nWW9tYXJpIGZyb20gJy4vYXNzZXRzL2ltZy9Zb21hcmktZm9vZC1uZXBhbC5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51VGFiKCkge1xuXHRjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG5cdG1lbnUuYXBwZW5kQ2hpbGQobWVudUNhcmQoaW1nQmFtYm9vLCB7bmFtZTonQmVhbnMgQmFtYm9vIFNob290cycsIHByaWNlOiAyMDB9KSk7XG5cdG1lbnUuYXBwZW5kQ2hpbGQobWVudUNhcmQoaW1nQ2hhdGFtYXJpLCB7bmFtZTonQ2hhdGFtYXJpJywgcHJpY2U6IDEwMH0pKTtcblx0bWVudS5hcHBlbmRDaGlsZChtZW51Q2FyZChpbWdDaGV3cmEsIHtuYW1lOidDaGV3cmEgU2FiemknLCBwcmljZTogNTB9KSk7XG5cdG1lbnUuYXBwZW5kQ2hpbGQobWVudUNhcmQoaW1nRGFsQmhhdCwge25hbWU6J1NwZWNpYWwgRGFsIEJoYXQgVGFya2FyaScsIHByaWNlOiAyMDB9KSk7XG5cdG1lbnUuYXBwZW5kQ2hpbGQobWVudUNhcmQoaW1nRGFsQmhhdFRhcmthcmksIHtuYW1lOidEYWwgQmhhdCBUYXJrYXJpJywgcHJpY2U6IDQwMH0pKTtcblx0bWVudS5hcHBlbmRDaGlsZChtZW51Q2FyZChpbWdHdW5kcnVrLCB7bmFtZTonR3VuZHJ1ayByYSBCaGF0JywgcHJpY2U6IDE1MH0pKTtcblx0bWVudS5hcHBlbmRDaGlsZChtZW51Q2FyZChpbWdNb21vLCB7bmFtZTonTWl0aG8gTW9tbycsIHByaWNlOiAxMTB9KSk7XG5cdG1lbnUuYXBwZW5kQ2hpbGQobWVudUNhcmQoaW1nQWxvb0FjY2hhciwge25hbWU6J0Fsb28gRGh1bScsIHByaWNlOiA1MH0pKTtcblx0bWVudS5hcHBlbmRDaGlsZChtZW51Q2FyZChpbWdHZWRhR3VkaSwge25hbWU6J0dlZGEgR3VkaSByYSBCaXNjdXQnLCBwcmljZTogMzAwfSkpO1xuXHRtZW51LmFwcGVuZENoaWxkKG1lbnVDYXJkKGltZ1NlbCwge25hbWU6J1NlbCBSb3RpJywgcHJpY2U6IDUwfSkpO1xuXHRtZW51LmFwcGVuZENoaWxkKG1lbnVDYXJkKGltZ1lvbWFyaSwge25hbWU6J1lvbWFyaScsIHByaWNlOiAzMH0pKTtcblxuXHRyZXR1cm4gbWVudTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGluZyh0ZXh0KSB7XG5cdGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cdGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkaW5nJyk7XG5cdGhlYWRpbmcuaW5uZXJIVE1MID0gdGV4dDtcblx0cmV0dXJuIGhlYWRpbmc7XG59XG5cbmZ1bmN0aW9uIHBUYWcodGV4dCkge1xuXHRjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRwLmlubmVySFRNTCA9IHRleHQ7XG5cdHJldHVybiBwO1xufVxuXG5mdW5jdGlvbiBtZW51Q2FyZChpbWdTcmMsIHRleHQpIHtcblx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGRpdi5jbGFzc0xpc3QuYWRkKCdyZXNwb25zaXZlJyk7XG5cdGRpdi5pbm5lckhUTUwgPSBgXG5cdFx0PGRpdiBjbGFzcz0nZ2FsbGVyeSc+XG5cdFx0XHQ8aW1nIGNsYXNzPSdmb29kLWltZycgc3JjPVwiJHtpbWdTcmN9XCIgYWx0PVwibWVudSBmb29kXCI+IFxuXHRcdFx0PGRpdiBjbGFzcz0nb3ZlcmxheSc+XG5cdFx0XHRcdDxkaXYgY2xhc3M9J2Rlc2MnPlxuXHRcdFx0XHRcdCR7dGV4dC5uYW1lfSA8YnI+XG5cdFx0XHRcdFx0UnMgJHt0ZXh0LnByaWNlfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgO1xuXHRyZXR1cm4gZGl2O1xufSIsImltcG9ydCBtZW51VGFiIGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgaG9tZVRhYiBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGNvbnRhY3RUYWIgZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCBhYm91dFRhYiBmcm9tICcuL2Fib3V0LmpzJztcbmltcG9ydCAqIGFzIGhlbHBlckZ1bmMgZnJvbSAnLi9oZWxwZXJGdW5jJ1xuZXhwb3J0IHsgYXR0YWNoTmF2YmFyVG8gfTtcblxuZnVuY3Rpb24gcmVuZGVyVGFiKGJvZHksIHRhYikge1xuXHQvKmFwcGVuZCB0aGUgbmV3IHRhYiB0byB0aGUgYm9keSBieSByZW1vdmluZyB0aGUgcHJldmlvdXMgdGFiKi9cblx0aWYoYm9keSkge1xuXHRcdGNvbnN0IGF2YWlsYWJsZVRhYkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiJyk7XG5cdFx0aWYoYXZhaWxhYmxlVGFiQ29udGVudClcblx0XHRcdGJvZHkucmVtb3ZlQ2hpbGQoYXZhaWxhYmxlVGFiQ29udGVudCk7XG5cblx0XHR0YWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG5cdFx0Ym9keS5hcHBlbmRDaGlsZCh0YWIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGF0dGFjaE5hdmJhclRvKGJvZHkpIHtcblx0Y29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpO1xuXG5cdGNvbnN0IHRhYkJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dGFiQm9keS5jbGFzc0xpc3QuYWRkKCd0YWItY29udGVudCcpO1xuXG5cdGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0aG9tZS50ZXh0Q29udGVudCA9ICdob21lJztcblx0aG9tZS5jbGFzc0xpc3QuYWRkKCdidG4taG9tZS10YWInLCAnYnRuJywgJ2J0bi10YWInKTtcblx0aG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtyZW5kZXJUYWIodGFiQm9keSwgaG9tZVRhYigpKX0pO1xuXG5cdGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0bWVudS50ZXh0Q29udGVudCA9ICdNZW51Jztcblx0bWVudS5jbGFzc0xpc3QuYWRkKCdidG4tbWVudS10YWInLCAnYnRuJywgJ2J0bi10YWInKTtcblx0bWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtyZW5kZXJUYWIodGFiQm9keSwgbWVudVRhYigpKX0pO1xuXG5cdGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGFib3V0LnRleHRDb250ZW50ID0gJ0Fib3V0IFVzJztcblx0YWJvdXQuY2xhc3NMaXN0LmFkZCgnYnRuLWFib3V0LXRhYicsICdidG4nLCAnYnRuLXRhYicpO1xuXHRhYm91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtyZW5kZXJUYWIodGFiQm9keSwgYWJvdXRUYWIoKSl9KTtcblxuXHRjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cdGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnYnRuLWNvbnRhY3QtdGFiJywgJ2J0bicsICdidG4tdGFiJyk7XG5cdGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7cmVuZGVyVGFiKHRhYkJvZHksIGNvbnRhY3RUYWIoKSl9KTtcblxuXHRuYXZiYXIuYXBwZW5kQ2hpbGQoaG9tZSk7XG5cdG5hdmJhci5hcHBlbmRDaGlsZChtZW51KTtcblx0bmF2YmFyLmFwcGVuZENoaWxkKGFib3V0KTtcblx0bmF2YmFyLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG5cdC8qRGVmYXVsdCB0YWIqL1xuXHRyZW5kZXJUYWIodGFiQm9keSwgaG9tZVRhYigpKTtcblxuXHRib2R5LmFwcGVuZENoaWxkKG5hdmJhcik7XG5cdGJvZHkuYXBwZW5kQ2hpbGQodGFiQm9keSk7XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICogYXMgdGFiIGZyb20gJy4vdGFiJztcbmltcG9ydCAnLi9hc3NldHMvY3NzL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4vL2FkZGluZyB0YWIgc3dpdGhjaGluZyBuYXZpZ2F0aW9uIGJhciB0byB0aGUgY29udGVudCBvZiB0aGUgcGFnZVxudGFiLmF0dGFjaE5hdmJhclRvKGJvZHkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==