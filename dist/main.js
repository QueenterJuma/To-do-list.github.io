"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-content: center;\r\n  background-color: #f6f6f6;\r\n  font-family: \"Inter var\", sans-serif;\r\n  padding: 40px 0 40px 0;\r\n}\r\n\r\n.align-center {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nmain {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  max-width: 500px;\r\n  min-height: 220px;\r\n  margin: 40px 8px 40px 8px;\r\n  border-radius: 4px;\r\n  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);\r\n  background-color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n\r\n.head {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 1rem;\r\n  border-bottom: 1px solid rgb(236, 233, 233);\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  margin-top: 1rem;\r\n  font-weight: 500;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.fa-solid {\r\n  color: #888;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 0.1rem;\r\n  width: 100%;\r\n  padding: 1rem;\r\n}\r\n\r\n.addtask {\r\n  font-size: 1rem;\r\n  padding: 0.5rem 1rem;\r\n  border: none;\r\n  border-radius: 0.3rem;\r\n  background-color: white;\r\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);\r\n  transition: box-shadow 0.2s ease-in-out;\r\n}\r\n\r\n.input-content {\r\n  width: 94%;\r\n  border: none;\r\n  padding: 16px;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.add-button {\r\n  width: 10%;\r\n  border: none;\r\n  background-color: transparent;\r\n  color: #888;\r\n}\r\n\r\n.addtask:hover,\r\n.addtask:focus {\r\n  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);\r\n  outline: none;\r\n}\r\n\r\n.addtask::placeholder {\r\n  color: #aaa;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);\r\n  background-color: white;\r\n  border-radius: 0.3rem;\r\n  overflow: hidden;\r\n}\r\n\r\nli {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 1rem;\r\n  border-bottom: 1px solid #ddd;\r\n  transition: background-color 0.2s ease-in-out;\r\n}\r\n\r\nli:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\nli:hover {\r\n  background-color: #f5f5f5;\r\n}\r\n\r\nli input[type=\"checkbox\"] {\r\n  margin-right: 1rem;\r\n}\r\n\r\nli label,\r\n#editfield {\r\n  flex: 1;\r\n  margin: 0;\r\n  font-size: 1.2rem;\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\n#editfield {\r\n  border: none;\r\n}\r\n\r\n#editfield:focus {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\nli label.completed {\r\n  text-decoration: line-through;\r\n  color: #aaa;\r\n}\r\n\r\nli button {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #888;\r\n  font-size: 1.2rem;\r\n  cursor: pointer;\r\n  transition: color 0.2s ease-in-out;\r\n}\r\n\r\nli button:hover,\r\nli button:focus {\r\n  color: #222;\r\n  outline: none;\r\n}\r\n\r\nli.dragging {\r\n  opacity: 0.5;\r\n}\r\n\r\n#btn-clear-task {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 1rem;\r\n  margin-bottom: 2rem;\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #888;\r\n  font-size: 1.2rem;\r\n  cursor: pointer;\r\n  transition: color 0.2s ease-in-out;\r\n}\r\n\r\n#btn-clear-task:hover,\r\n#btn-clear-task:focus {\r\n  color: #222;\r\n  outline: none;\r\n}\r\n\r\n.mark {\r\n  text-decoration: line-through;\r\n}\r\n\r\n#clearCompleted {\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  margin-top: 1px;\r\n  width: 100%;\r\n  padding: 1.8rem;\r\n}\r\n\r\n#clearCompleted:hover {\r\n  background-color: #c0392b;\r\n}\r\n\r\n.disable {\r\n  display: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,qBAAqB;EACrB,yBAAyB;EACzB,oCAAoC;EACpC,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,gBAAgB;EAChB,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;EAClB,wCAAwC;EACxC,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,2CAA2C;AAC7C;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;EACrB,WAAW;EACX,aAAa;AACf;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,qBAAqB;EACrB,uBAAuB;EACvB,iDAAiD;EACjD,uCAAuC;AACzC;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,6BAA6B;EAC7B,WAAW;AACb;;AAEA;;EAEE,+CAA+C;EAC/C,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,SAAS;EACT,UAAU;EACV,WAAW;EACX,iDAAiD;EACjD,uBAAuB;EACvB,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,6BAA6B;EAC7B,6CAA6C;AAC/C;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,OAAO;EACP,SAAS;EACT,iBAAiB;EACjB,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,eAAe;EACf,kCAAkC;AACpC;;AAEA;;EAEE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,6BAA6B;EAC7B,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,eAAe;EACf,kCAAkC;AACpC;;AAEA;;EAEE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;AACf","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-content: center;\r\n  background-color: #f6f6f6;\r\n  font-family: \"Inter var\", sans-serif;\r\n  padding: 40px 0 40px 0;\r\n}\r\n\r\n.align-center {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nmain {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  max-width: 500px;\r\n  min-height: 220px;\r\n  margin: 40px 8px 40px 8px;\r\n  border-radius: 4px;\r\n  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);\r\n  background-color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n\r\n.head {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 1rem;\r\n  border-bottom: 1px solid rgb(236, 233, 233);\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  margin-top: 1rem;\r\n  font-weight: 500;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.fa-solid {\r\n  color: #888;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 0.1rem;\r\n  width: 100%;\r\n  padding: 1rem;\r\n}\r\n\r\n.addtask {\r\n  font-size: 1rem;\r\n  padding: 0.5rem 1rem;\r\n  border: none;\r\n  border-radius: 0.3rem;\r\n  background-color: white;\r\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);\r\n  transition: box-shadow 0.2s ease-in-out;\r\n}\r\n\r\n.input-content {\r\n  width: 94%;\r\n  border: none;\r\n  padding: 16px;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.add-button {\r\n  width: 10%;\r\n  border: none;\r\n  background-color: transparent;\r\n  color: #888;\r\n}\r\n\r\n.addtask:hover,\r\n.addtask:focus {\r\n  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);\r\n  outline: none;\r\n}\r\n\r\n.addtask::placeholder {\r\n  color: #aaa;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);\r\n  background-color: white;\r\n  border-radius: 0.3rem;\r\n  overflow: hidden;\r\n}\r\n\r\nli {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 1rem;\r\n  border-bottom: 1px solid #ddd;\r\n  transition: background-color 0.2s ease-in-out;\r\n}\r\n\r\nli:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\nli:hover {\r\n  background-color: #f5f5f5;\r\n}\r\n\r\nli input[type=\"checkbox\"] {\r\n  margin-right: 1rem;\r\n}\r\n\r\nli label,\r\n#editfield {\r\n  flex: 1;\r\n  margin: 0;\r\n  font-size: 1.2rem;\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\n#editfield {\r\n  border: none;\r\n}\r\n\r\n#editfield:focus {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\nli label.completed {\r\n  text-decoration: line-through;\r\n  color: #aaa;\r\n}\r\n\r\nli button {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #888;\r\n  font-size: 1.2rem;\r\n  cursor: pointer;\r\n  transition: color 0.2s ease-in-out;\r\n}\r\n\r\nli button:hover,\r\nli button:focus {\r\n  color: #222;\r\n  outline: none;\r\n}\r\n\r\nli.dragging {\r\n  opacity: 0.5;\r\n}\r\n\r\n#btn-clear-task {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 1rem;\r\n  margin-bottom: 2rem;\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #888;\r\n  font-size: 1.2rem;\r\n  cursor: pointer;\r\n  transition: color 0.2s ease-in-out;\r\n}\r\n\r\n#btn-clear-task:hover,\r\n#btn-clear-task:focus {\r\n  color: #222;\r\n  outline: none;\r\n}\r\n\r\n.mark {\r\n  text-decoration: line-through;\r\n}\r\n\r\n#clearCompleted {\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  margin-top: 1px;\r\n  width: 100%;\r\n  padding: 1.8rem;\r\n}\r\n\r\n#clearCompleted:hover {\r\n  background-color: #c0392b;\r\n}\r\n\r\n.disable {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
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
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
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
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_renderTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderTask */ "./src/modules/renderTask.js");



const taskList = document.getElementById("taskList");
const newTaskForm = document.getElementById("newTaskForm");
const clearCompletedButton = document.getElementById("clearCompleted");
let tasks = [];

newTaskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newTaskInput = document.getElementById("newTask");
  const taskName = newTaskInput.value.trim();
  if (taskName) {
    (0,_modules_renderTask__WEBPACK_IMPORTED_MODULE_1__.addTask)(taskName);
    newTaskInput.value = "";
    newTaskInput.focus();
  }
});

clearCompletedButton.addEventListener("click", () => (0,_modules_renderTask__WEBPACK_IMPORTED_MODULE_1__.clearCompletedTasks)());

taskList.addEventListener("dragstart", _modules_renderTask__WEBPACK_IMPORTED_MODULE_1__.handleDragStart);
taskList.addEventListener("dragover", (event) => (0,_modules_renderTask__WEBPACK_IMPORTED_MODULE_1__.handleDragOver)(event, tasks));
taskList.addEventListener("dragend", _modules_renderTask__WEBPACK_IMPORTED_MODULE_1__.handleDragEnd);

tasks = (0,_modules_renderTask__WEBPACK_IMPORTED_MODULE_1__.loadTasks)();
(0,_modules_renderTask__WEBPACK_IMPORTED_MODULE_1__.renderTaskList)(tasks);


/***/ }),

/***/ "./src/modules/renderTask.js":
/*!***********************************!*\
  !*** ./src/modules/renderTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "changeStatus": () => (/* binding */ changeStatus),
/* harmony export */   "clearCompletedTasks": () => (/* binding */ clearCompletedTasks),
/* harmony export */   "handleDragEnd": () => (/* binding */ handleDragEnd),
/* harmony export */   "handleDragOver": () => (/* binding */ handleDragOver),
/* harmony export */   "handleDragStart": () => (/* binding */ handleDragStart),
/* harmony export */   "loadTasks": () => (/* reexport safe */ _storage__WEBPACK_IMPORTED_MODULE_0__.loadTasks),
/* harmony export */   "renderTaskList": () => (/* binding */ renderTaskList),
/* harmony export */   "saveEdit": () => (/* binding */ saveEdit),
/* harmony export */   "saveTasks": () => (/* reexport safe */ _storage__WEBPACK_IMPORTED_MODULE_0__.saveTasks),
/* harmony export */   "updateIndex": () => (/* reexport safe */ _storage__WEBPACK_IMPORTED_MODULE_0__.updateIndex)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");


const saveEdit = (index, value) => {
  renderTaskList((0,_storage__WEBPACK_IMPORTED_MODULE_0__.editTask)(index, value));
};

const changeStatus = (index) => renderTaskList((0,_storage__WEBPACK_IMPORTED_MODULE_0__.editTask)(index, "", 1));

const renderTaskList = (tasks) => {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskElement = document.createElement("li");
    taskElement.className = "task";
    taskElement.draggable = true;
    taskElement.dataset.index = task.index;

    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.checked = task.completed;
    taskCheckbox.addEventListener("change", () => changeStatus(tasks, index));

    const taskLabel = document.createElement("label");
    taskLabel.textContent = task.description;
    taskLabel.className = task.completed ? "mark" : "";

    const taskinput = document.createElement("input");
    taskinput.type = "text";
    taskinput.className = "disable";
    taskinput.id = "editfield";

    const taskDeleteButton = document.createElement("button");
    taskDeleteButton.type = "button";
    taskDeleteButton.className = "delete";
    taskDeleteButton.innerHTML = '<i class="fa fa-trash"></i>';
    taskDeleteButton.addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTaskList((0,_storage__WEBPACK_IMPORTED_MODULE_0__.updateIndex)());
    });

    const taskeditButton = document.createElement("button");
    taskeditButton.type = "button";
    taskeditButton.innerHTML = '<i class="fa fa-pencil"></i>';
    const tasksaveButton = document.createElement("button");
    tasksaveButton.type = "button";
    tasksaveButton.innerHTML = '<i class="fa fa-floppy-o"></i>';
    tasksaveButton.className = "disable";

    taskeditButton.addEventListener("click", () => {
      tasksaveButton.classList.remove("disable");
      taskinput.classList.remove("disable");
      taskinput.value = taskLabel.textContent;
      taskinput.focus();
      taskLabel.classList.add("disable");
      taskeditButton.classList.add("disable");
    });

    tasksaveButton.addEventListener("click", () => {
      tasksaveButton.classList.add("disable");
      taskinput.classList.add("disable");
      taskLabel.textContent = taskinput.value;
      taskLabel.classList.remove("disable");
      taskeditButton.classList.remove("disable");
      saveEdit(index, taskinput.value);
    });

    taskElement.appendChild(taskCheckbox);
    taskElement.appendChild(taskLabel);
    taskElement.appendChild(taskinput);
    taskElement.appendChild(taskeditButton);
    taskElement.appendChild(tasksaveButton);
    taskElement.appendChild(taskDeleteButton);

    taskList.appendChild(taskElement);
  });
};

const addTask = (name) => {
  console.log("addTask");
  renderTaskList((0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveTask)(name));
};

const clearCompletedTasks = () => {
  renderTaskList((0,_storage__WEBPACK_IMPORTED_MODULE_0__.deleteCompletedTasks)());
};

const handleDragStart = (event) => {
  event.target.classList.add("dragging");
};

const handleDragOver = (event, tasks) => {
  event.preventDefault();
  const taskElement = event.target.closest(".task");
  const draggingElement = document.querySelector(".dragging");
  if (taskElement && draggingElement && taskElement !== draggingElement) {
    const taskElementRect = taskElement.getBoundingClientRect();
    const dragY = event.clientY - taskElementRect.top;
    const isAfter = dragY > taskElementRect.height / 2;
    taskList.insertBefore(
      draggingElement,
      isAfter ? taskElement.nextSibling : taskElement
    );
    const newIndex = Array.from(taskList.querySelectorAll(".task")).indexOf(
      draggingElement
    );
    const oldIndex = draggingElement.getAttribute("data-index");
    tasks.splice(newIndex, 0, tasks.splice(oldIndex, 1)[0]);
    (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveTasks)(tasks);
  }
};

const handleDragEnd = (event) => {
  event.target.classList.remove("dragging");
};




/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteCompletedTasks": () => (/* binding */ deleteCompletedTasks),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "loadTasks": () => (/* binding */ loadTasks),
/* harmony export */   "saveTask": () => (/* binding */ saveTask),
/* harmony export */   "saveTasks": () => (/* binding */ saveTasks),
/* harmony export */   "updateIndex": () => (/* binding */ updateIndex)
/* harmony export */ });
const updateIndexHelper = (tasks) => {
  tasks.forEach((element, index) => {
    element.index = index + 1;
  });
  save(tasks);
  return tasks;
};

const updateIndex = () => {};

const deleteCompletedTasks = () => {
  const tasks = loadTasks.filter((task) => !task.completed);
  return updateIndexHelper(tasks);
};

const saveTasks = (tasks) => save(tasks);

const saveTask = (name) => {
  const tasks = loadTasks || [];
  tasks.push({ index: tasks.length + 1, description: name, completed: false });
  save(tasks);
  return tasks;
};

const save = (tasks) => localStorage.setItem("tasks", JSON.stringify(tasks));

const editTask = (index, value = "", context = 0) => {
  // context = 0 for edit decscription, 1 for status
  const tasks = loadTasks();
  if (context === 0) tasks[index].description = value;
  else if (context === 1) tasks[index].completed = !task.completed;
  save(tasks);
  return tasks;
};

const loadTasks = () => {
  const tasksJson = localStorage.getItem("tasks");
  if (tasksJson) {
    return JSON.parse(tasksJson);
  }
  return [];
};




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQSxpQkFBaUIsOERBQW9CO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBUztBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQWNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZJRjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLDhEQUE4RDtBQUM3RTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFTRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVuZGVyVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkludGVyIHZhclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBwYWRkaW5nOiA0MHB4IDAgNDBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxpZ24tY2VudGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICBtaW4taGVpZ2h0OiAyMjBweDtcXHJcXG4gIG1hcmdpbjogNDBweCA4cHggNDBweCA4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzNiwgMjMzLCAyMzMpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtc29saWQge1xcclxcbiAgY29sb3I6ICM4ODg7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHRhc2sge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMC4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250ZW50IHtcXHJcXG4gIHdpZHRoOiA5NCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxMCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGNvbG9yOiAjODg4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkdGFzazpob3ZlcixcXHJcXG4uYWRkdGFzazpmb2N1cyB7XFxyXFxuICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMC41cmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hZGR0YXNrOjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogI2FhYTtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMC4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5saTpsYXN0LWNoaWxkIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmxpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxyXFxufVxcclxcblxcclxcbmxpIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5saSBsYWJlbCxcXHJcXG4jZWRpdGZpZWxkIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4jZWRpdGZpZWxkIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2VkaXRmaWVsZDpmb2N1cyB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5saSBsYWJlbC5jb21wbGV0ZWQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBjb2xvcjogI2FhYTtcXHJcXG59XFxyXFxuXFxyXFxubGkgYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICM4ODg7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbmxpIGJ1dHRvbjpob3ZlcixcXHJcXG5saSBidXR0b246Zm9jdXMge1xcclxcbiAgY29sb3I6ICMyMjI7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5saS5kcmFnZ2luZyB7XFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcblxcclxcbiNidG4tY2xlYXItdGFzayB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjODg4O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4jYnRuLWNsZWFyLXRhc2s6aG92ZXIsXFxyXFxuI2J0bi1jbGVhci10YXNrOmZvY3VzIHtcXHJcXG4gIGNvbG9yOiAjMjIyO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1hcmsge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbiNjbGVhckNvbXBsZXRlZCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAxcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDEuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFyQ29tcGxldGVkOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMDM5MmI7XFxyXFxufVxcclxcblxcclxcbi5kaXNhYmxlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixpREFBaUQ7RUFDakQsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsV0FBVztBQUNiOztBQUVBOztFQUVFLCtDQUErQztFQUMvQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsaURBQWlEO0VBQ2pELHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxPQUFPO0VBQ1AsU0FBUztFQUNULGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsV0FBVztBQUNiOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQ0FBa0M7QUFDcEM7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQ0FBa0M7QUFDcEM7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlciB2YXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZzogNDBweCAwIDQwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFsaWduLWNlbnRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgbWluLWhlaWdodDogMjIwcHg7XFxyXFxuICBtYXJnaW46IDQwcHggOHB4IDQwcHggOHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCA2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5oZWFkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzYsIDIzMywgMjMzKTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXNvbGlkIHtcXHJcXG4gIGNvbG9yOiAjODg4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjFyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGR0YXNrIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGVudCB7XFxyXFxuICB3aWR0aDogOTQlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMTAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogIzg4ODtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHRhc2s6aG92ZXIsXFxyXFxuLmFkZHRhc2s6Zm9jdXMge1xcclxcbiAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDAuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkdGFzazo6cGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6ICNhYWE7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxubGk6bGFzdC1jaGlsZCB7XFxyXFxuICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5saTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcclxcbn1cXHJcXG5cXHJcXG5saSBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxubGkgbGFiZWwsXFxyXFxuI2VkaXRmaWVsZCB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuI2VkaXRmaWVsZCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNlZGl0ZmllbGQ6Zm9jdXMge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubGkgbGFiZWwuY29tcGxldGVkIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgY29sb3I6ICNhYWE7XFxyXFxufVxcclxcblxcclxcbmxpIGJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjODg4O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5saSBidXR0b246aG92ZXIsXFxyXFxubGkgYnV0dG9uOmZvY3VzIHtcXHJcXG4gIGNvbG9yOiAjMjIyO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubGkuZHJhZ2dpbmcge1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG4jYnRuLWNsZWFyLXRhc2sge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogIzg4ODtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuI2J0bi1jbGVhci10YXNrOmhvdmVyLFxcclxcbiNidG4tY2xlYXItdGFzazpmb2N1cyB7XFxyXFxuICBjb2xvcjogIzIyMjtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tYXJrIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xlYXJDb21wbGV0ZWQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMXB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxLjhyZW07XFxyXFxufVxcclxcblxcclxcbiNjbGVhckNvbXBsZXRlZDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAzOTJiO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzYWJsZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQge1xyXG4gIHJlbmRlclRhc2tMaXN0LFxyXG4gIGxvYWRUYXNrcyxcclxuICBhZGRUYXNrLFxyXG4gIGNsZWFyQ29tcGxldGVkVGFza3MsXHJcbiAgaGFuZGxlRHJhZ1N0YXJ0LFxyXG4gIGhhbmRsZURyYWdPdmVyLFxyXG4gIGhhbmRsZURyYWdFbmQsXHJcbn0gZnJvbSBcIi4vbW9kdWxlcy9yZW5kZXJUYXNrXCI7XHJcblxyXG5jb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0xpc3RcIik7XHJcbmNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdUYXNrRm9ybVwiKTtcclxuY29uc3QgY2xlYXJDb21wbGV0ZWRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsZWFyQ29tcGxldGVkXCIpO1xyXG5sZXQgdGFza3MgPSBbXTtcclxuXHJcbm5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBuZXdUYXNrSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Rhc2tcIik7XHJcbiAgY29uc3QgdGFza05hbWUgPSBuZXdUYXNrSW5wdXQudmFsdWUudHJpbSgpO1xyXG4gIGlmICh0YXNrTmFtZSkge1xyXG4gICAgYWRkVGFzayh0YXNrTmFtZSk7XHJcbiAgICBuZXdUYXNrSW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgbmV3VGFza0lucHV0LmZvY3VzKCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmNsZWFyQ29tcGxldGVkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjbGVhckNvbXBsZXRlZFRhc2tzKCkpO1xyXG5cclxudGFza0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBoYW5kbGVEcmFnU3RhcnQpO1xyXG50YXNrTGlzdC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGV2ZW50KSA9PiBoYW5kbGVEcmFnT3ZlcihldmVudCwgdGFza3MpKTtcclxudGFza0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgaGFuZGxlRHJhZ0VuZCk7XHJcblxyXG50YXNrcyA9IGxvYWRUYXNrcygpO1xyXG5yZW5kZXJUYXNrTGlzdCh0YXNrcyk7XHJcbiIsImltcG9ydCB7XG4gIHNhdmVUYXNrcyxcbiAgc2F2ZVRhc2ssXG4gIGxvYWRUYXNrcyxcbiAgZWRpdFRhc2ssXG4gIGRlbGV0ZUNvbXBsZXRlZFRhc2tzLFxuICB1cGRhdGVJbmRleCxcbn0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5jb25zdCBzYXZlRWRpdCA9IChpbmRleCwgdmFsdWUpID0+IHtcbiAgcmVuZGVyVGFza0xpc3QoZWRpdFRhc2soaW5kZXgsIHZhbHVlKSk7XG59O1xuXG5jb25zdCBjaGFuZ2VTdGF0dXMgPSAoaW5kZXgpID0+IHJlbmRlclRhc2tMaXN0KGVkaXRUYXNrKGluZGV4LCBcIlwiLCAxKSk7XG5cbmNvbnN0IHJlbmRlclRhc2tMaXN0ID0gKHRhc2tzKSA9PiB7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrTGlzdFwiKTtcbiAgdGFza0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcblxuICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHRhc2tFbGVtZW50LmNsYXNzTmFtZSA9IFwidGFza1wiO1xuICAgIHRhc2tFbGVtZW50LmRyYWdnYWJsZSA9IHRydWU7XG4gICAgdGFza0VsZW1lbnQuZGF0YXNldC5pbmRleCA9IHRhc2suaW5kZXg7XG5cbiAgICBjb25zdCB0YXNrQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGFza0NoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgdGFza0NoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmNvbXBsZXRlZDtcbiAgICB0YXNrQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiBjaGFuZ2VTdGF0dXModGFza3MsIGluZGV4KSk7XG5cbiAgICBjb25zdCB0YXNrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGFza0xhYmVsLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICB0YXNrTGFiZWwuY2xhc3NOYW1lID0gdGFzay5jb21wbGV0ZWQgPyBcIm1hcmtcIiA6IFwiXCI7XG5cbiAgICBjb25zdCB0YXNraW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGFza2lucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICB0YXNraW5wdXQuY2xhc3NOYW1lID0gXCJkaXNhYmxlXCI7XG4gICAgdGFza2lucHV0LmlkID0gXCJlZGl0ZmllbGRcIjtcblxuICAgIGNvbnN0IHRhc2tEZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHRhc2tEZWxldGVCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgdGFza0RlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSBcImRlbGV0ZVwiO1xuICAgIHRhc2tEZWxldGVCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+JztcbiAgICB0YXNrRGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgcmVuZGVyVGFza0xpc3QodXBkYXRlSW5kZXgoKSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0YXNrZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdGFza2VkaXRCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgdGFza2VkaXRCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEgZmEtcGVuY2lsXCI+PC9pPic7XG4gICAgY29uc3QgdGFza3NhdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHRhc2tzYXZlQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIHRhc2tzYXZlQnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhIGZhLWZsb3BweS1vXCI+PC9pPic7XG4gICAgdGFza3NhdmVCdXR0b24uY2xhc3NOYW1lID0gXCJkaXNhYmxlXCI7XG5cbiAgICB0YXNrZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGFza3NhdmVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVcIik7XG4gICAgICB0YXNraW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVcIik7XG4gICAgICB0YXNraW5wdXQudmFsdWUgPSB0YXNrTGFiZWwudGV4dENvbnRlbnQ7XG4gICAgICB0YXNraW5wdXQuZm9jdXMoKTtcbiAgICAgIHRhc2tMYWJlbC5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZVwiKTtcbiAgICAgIHRhc2tlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlXCIpO1xuICAgIH0pO1xuXG4gICAgdGFza3NhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRhc2tzYXZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlXCIpO1xuICAgICAgdGFza2lucHV0LmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlXCIpO1xuICAgICAgdGFza0xhYmVsLnRleHRDb250ZW50ID0gdGFza2lucHV0LnZhbHVlO1xuICAgICAgdGFza0xhYmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlXCIpO1xuICAgICAgdGFza2VkaXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVcIik7XG4gICAgICBzYXZlRWRpdChpbmRleCwgdGFza2lucHV0LnZhbHVlKTtcbiAgICB9KTtcblxuICAgIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tDaGVja2JveCk7XG4gICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0xhYmVsKTtcbiAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNraW5wdXQpO1xuICAgIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tlZGl0QnV0dG9uKTtcbiAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrc2F2ZUJ1dHRvbik7XG4gICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0RlbGV0ZUJ1dHRvbik7XG5cbiAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG4gIH0pO1xufTtcblxuY29uc3QgYWRkVGFzayA9IChuYW1lKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiYWRkVGFza1wiKTtcbiAgcmVuZGVyVGFza0xpc3Qoc2F2ZVRhc2sobmFtZSkpO1xufTtcblxuY29uc3QgY2xlYXJDb21wbGV0ZWRUYXNrcyA9ICgpID0+IHtcbiAgcmVuZGVyVGFza0xpc3QoZGVsZXRlQ29tcGxldGVkVGFza3MoKSk7XG59O1xuXG5jb25zdCBoYW5kbGVEcmFnU3RhcnQgPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJkcmFnZ2luZ1wiKTtcbn07XG5cbmNvbnN0IGhhbmRsZURyYWdPdmVyID0gKGV2ZW50LCB0YXNrcykgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB0YXNrRWxlbWVudCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnRhc2tcIik7XG4gIGNvbnN0IGRyYWdnaW5nRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJhZ2dpbmdcIik7XG4gIGlmICh0YXNrRWxlbWVudCAmJiBkcmFnZ2luZ0VsZW1lbnQgJiYgdGFza0VsZW1lbnQgIT09IGRyYWdnaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHRhc2tFbGVtZW50UmVjdCA9IHRhc2tFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGRyYWdZID0gZXZlbnQuY2xpZW50WSAtIHRhc2tFbGVtZW50UmVjdC50b3A7XG4gICAgY29uc3QgaXNBZnRlciA9IGRyYWdZID4gdGFza0VsZW1lbnRSZWN0LmhlaWdodCAvIDI7XG4gICAgdGFza0xpc3QuaW5zZXJ0QmVmb3JlKFxuICAgICAgZHJhZ2dpbmdFbGVtZW50LFxuICAgICAgaXNBZnRlciA/IHRhc2tFbGVtZW50Lm5leHRTaWJsaW5nIDogdGFza0VsZW1lbnRcbiAgICApO1xuICAgIGNvbnN0IG5ld0luZGV4ID0gQXJyYXkuZnJvbSh0YXNrTGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIikpLmluZGV4T2YoXG4gICAgICBkcmFnZ2luZ0VsZW1lbnRcbiAgICApO1xuICAgIGNvbnN0IG9sZEluZGV4ID0gZHJhZ2dpbmdFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIik7XG4gICAgdGFza3Muc3BsaWNlKG5ld0luZGV4LCAwLCB0YXNrcy5zcGxpY2Uob2xkSW5kZXgsIDEpWzBdKTtcbiAgICBzYXZlVGFza3ModGFza3MpO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVEcmFnRW5kID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ2dpbmdcIik7XG59O1xuXG5leHBvcnQge1xuICByZW5kZXJUYXNrTGlzdCxcbiAgc2F2ZVRhc2tzLFxuICBzYXZlRWRpdCxcbiAgbG9hZFRhc2tzLFxuICB1cGRhdGVJbmRleCxcbiAgYWRkVGFzayxcbiAgY2xlYXJDb21wbGV0ZWRUYXNrcyxcbiAgaGFuZGxlRHJhZ1N0YXJ0LFxuICBoYW5kbGVEcmFnT3ZlcixcbiAgaGFuZGxlRHJhZ0VuZCxcbiAgY2hhbmdlU3RhdHVzLFxufTtcbiIsImNvbnN0IHVwZGF0ZUluZGV4SGVscGVyID0gKHRhc2tzKSA9PiB7XG4gIHRhc2tzLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgZWxlbWVudC5pbmRleCA9IGluZGV4ICsgMTtcbiAgfSk7XG4gIHNhdmUodGFza3MpO1xuICByZXR1cm4gdGFza3M7XG59O1xuXG5jb25zdCB1cGRhdGVJbmRleCA9ICgpID0+IHt9O1xuXG5jb25zdCBkZWxldGVDb21wbGV0ZWRUYXNrcyA9ICgpID0+IHtcbiAgY29uc3QgdGFza3MgPSBsb2FkVGFza3MuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZWQpO1xuICByZXR1cm4gdXBkYXRlSW5kZXhIZWxwZXIodGFza3MpO1xufTtcblxuY29uc3Qgc2F2ZVRhc2tzID0gKHRhc2tzKSA9PiBzYXZlKHRhc2tzKTtcblxuY29uc3Qgc2F2ZVRhc2sgPSAobmFtZSkgPT4ge1xuICBjb25zdCB0YXNrcyA9IGxvYWRUYXNrcyB8fCBbXTtcbiAgdGFza3MucHVzaCh7IGluZGV4OiB0YXNrcy5sZW5ndGggKyAxLCBkZXNjcmlwdGlvbjogbmFtZSwgY29tcGxldGVkOiBmYWxzZSB9KTtcbiAgc2F2ZSh0YXNrcyk7XG4gIHJldHVybiB0YXNrcztcbn07XG5cbmNvbnN0IHNhdmUgPSAodGFza3MpID0+IGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcblxuY29uc3QgZWRpdFRhc2sgPSAoaW5kZXgsIHZhbHVlID0gXCJcIiwgY29udGV4dCA9IDApID0+IHtcbiAgLy8gY29udGV4dCA9IDAgZm9yIGVkaXQgZGVjc2NyaXB0aW9uLCAxIGZvciBzdGF0dXNcbiAgY29uc3QgdGFza3MgPSBsb2FkVGFza3MoKTtcbiAgaWYgKGNvbnRleHQgPT09IDApIHRhc2tzW2luZGV4XS5kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICBlbHNlIGlmIChjb250ZXh0ID09PSAxKSB0YXNrc1tpbmRleF0uY29tcGxldGVkID0gIXRhc2suY29tcGxldGVkO1xuICBzYXZlKHRhc2tzKTtcbiAgcmV0dXJuIHRhc2tzO1xufTtcblxuY29uc3QgbG9hZFRhc2tzID0gKCkgPT4ge1xuICBjb25zdCB0YXNrc0pzb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpO1xuICBpZiAodGFza3NKc29uKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UodGFza3NKc29uKTtcbiAgfVxuICByZXR1cm4gW107XG59O1xuXG5leHBvcnQge1xuICBzYXZlVGFzayxcbiAgc2F2ZVRhc2tzLFxuICBsb2FkVGFza3MsXG4gIGVkaXRUYXNrLFxuICB1cGRhdGVJbmRleCxcbiAgZGVsZXRlQ29tcGxldGVkVGFza3MsXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9