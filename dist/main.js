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
/* harmony import */ var _modules_clearComplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/clearComplete */ "./src/modules/clearComplete.js");




const taskList = document.getElementById('taskList');
const newTaskForm = document.getElementById('newTaskForm');
const clearCompletedButton = document.getElementById('clearCompleted');
let tasks = [];

const handleDragStart = (event) => {
  event.target.classList.add('dragging');
};

const handleDragOver = (event) => {
  event.preventDefault();
  const taskElement = event.target.closest('.task');
  const draggingElement = document.querySelector('.dragging');
  if (taskElement && draggingElement && taskElement !== draggingElement) {
    const taskElementRect = taskElement.getBoundingClientRect();
    const dragY = event.clientY - taskElementRect.top;
    const isAfter = dragY > taskElementRect.height / 2;
    taskList.insertBefore(
      draggingElement,
      isAfter ? taskElement.nextSibling : taskElement,
    );
    const newIndex = Array.from(taskList.querySelectorAll('.task')).indexOf(
      draggingElement,
    );
    const oldIndex = draggingElement.getAttribute('data-index');
    tasks.splice(newIndex, 0, tasks.splice(oldIndex, 1)[0]);
    (0,_modules_renderTask__WEBPACK_IMPORTED_MODULE_1__.saveTasks)(tasks);
  }
};

const handleDragEnd = (event) => {
  event.target.classList.remove('dragging');
};

newTaskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newTaskInput = document.getElementById('newTask');
  const taskName = newTaskInput.value.trim();
  if (taskName) {
    (0,_modules_renderTask__WEBPACK_IMPORTED_MODULE_1__.addTask)(tasks, taskName);
    newTaskInput.value = '';
    newTaskInput.focus();
  }
});

clearCompletedButton.addEventListener('click', () => {
  tasks = (0,_modules_clearComplete__WEBPACK_IMPORTED_MODULE_2__["default"])(tasks);
  (0,_modules_renderTask__WEBPACK_IMPORTED_MODULE_1__.updateIndex)(tasks);
  (0,_modules_renderTask__WEBPACK_IMPORTED_MODULE_1__.saveTasks)(tasks);
  (0,_modules_renderTask__WEBPACK_IMPORTED_MODULE_1__.renderTaskList)(tasks);
});

taskList.addEventListener('dragstart', handleDragStart);
taskList.addEventListener('dragover', handleDragOver);
taskList.addEventListener('dragend', handleDragEnd);

tasks = (0,_modules_renderTask__WEBPACK_IMPORTED_MODULE_1__.loadTasks)();
(0,_modules_renderTask__WEBPACK_IMPORTED_MODULE_1__.renderTaskList)(tasks);


/***/ }),

/***/ "./src/modules/clearComplete.js":
/*!**************************************!*\
  !*** ./src/modules/clearComplete.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const clearCompletedTasks = (tasks) => {
  const arr = tasks.filter((task) => !task.completed);
  return arr;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearCompletedTasks);

/***/ }),

/***/ "./src/modules/renderTask.js":
/*!***********************************!*\
  !*** ./src/modules/renderTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "loadTasks": () => (/* reexport safe */ _storage__WEBPACK_IMPORTED_MODULE_0__.loadTasks),
/* harmony export */   "renderTaskList": () => (/* binding */ renderTaskList),
/* harmony export */   "saveTasks": () => (/* reexport safe */ _storage__WEBPACK_IMPORTED_MODULE_0__.saveTasks),
/* harmony export */   "updateIndex": () => (/* reexport safe */ _updateIndex__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
/* harmony import */ var _updateIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateIndex */ "./src/modules/updateIndex.js");



const renderTaskList = (tasks) => {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskElement = document.createElement('li');
    taskElement.className = 'task';
    taskElement.draggable = true;
    taskElement.dataset.index = task.index;

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.checked = task.completed;
    taskCheckbox.addEventListener('change', (event) => {
      tasks[index].completed = event.target.checked;
      (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveTasks)(tasks);
      renderTaskList(tasks);
    });

    const taskLabel = document.createElement('label');
    taskLabel.textContent = task.description;
    taskLabel.className = task.completed ? 'mark' : '';

    const taskinput = document.createElement('input');
    taskinput.type = 'text';
    taskinput.className = 'disable';
    taskinput.id = 'editfield';

    const taskDeleteButton = document.createElement('button');
    taskDeleteButton.type = 'button';
    taskDeleteButton.className = 'delete';
    taskDeleteButton.innerHTML = '<i class="fa fa-trash"></i>';
    taskDeleteButton.addEventListener('click', () => {
      tasks.splice(index, 1);
      (0,_updateIndex__WEBPACK_IMPORTED_MODULE_1__["default"])(tasks);
      (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveTasks)(tasks);
      renderTaskList(tasks);
    });
    const taskeditButton = document.createElement('button');
    taskeditButton.type = 'button';
    taskeditButton.innerHTML = '<i class="fa fa-pencil"></i>';
    const tasksaveButton = document.createElement('button');
    tasksaveButton.type = 'button';
    tasksaveButton.innerHTML = '<i class="fa fa-floppy-o"></i>';
    tasksaveButton.className = 'disable';

    taskeditButton.addEventListener('click', () => {
      tasksaveButton.classList.remove('disable');
      taskinput.classList.remove('disable');
      taskinput.value = taskLabel.textContent;
      taskinput.focus();
      taskLabel.classList.add('disable');
      taskeditButton.classList.add('disable');
    });

    tasksaveButton.addEventListener('click', () => {
      tasksaveButton.classList.add('disable');
      taskinput.classList.add('disable');
      taskLabel.textContent = taskinput.value;
      tasks[index].description = taskinput.value;
      taskLabel.classList.remove('disable');
      taskeditButton.classList.remove('disable');
      (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveTasks)(tasks);
      renderTaskList(tasks);
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

const addTask = (tasks, name) => {
  const task = { index: tasks.length + 1, description: name, completed: false };
  tasks.push(task);
  (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveTasks)(tasks);
  renderTaskList(tasks);
};




/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadTasks": () => (/* binding */ loadTasks),
/* harmony export */   "saveTasks": () => (/* binding */ saveTasks)
/* harmony export */ });
const saveTasks = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const loadTasks = () => {
  const tasksJson = localStorage.getItem('tasks');
  if (tasksJson) {
    return JSON.parse(tasksJson);
  }
  return [];
};




/***/ }),

/***/ "./src/modules/updateIndex.js":
/*!************************************!*\
  !*** ./src/modules/updateIndex.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const updateIndex = (tasks) => {
  tasks.forEach((element, index) => {
    element.index = index + 1;
  });
  return tasks;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateIndex);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxNQUFNLHdEQUFXO0FBQ2pCLE1BQU0sbURBQVM7QUFDZjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbURBQVM7QUFDZjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsRUFBRSxtREFBUztBQUNYO0FBQ0E7QUFDQTtBQUdFOzs7Ozs7Ozs7Ozs7Ozs7O0FDekZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnQzs7Ozs7Ozs7Ozs7Ozs7O0FDWmhDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvY2xlYXJDb21wbGV0ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVuZGVyVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvdXBkYXRlSW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlciB2YXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZzogNDBweCAwIDQwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFsaWduLWNlbnRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgbWluLWhlaWdodDogMjIwcHg7XFxyXFxuICBtYXJnaW46IDQwcHggOHB4IDQwcHggOHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCA2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5oZWFkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzYsIDIzMywgMjMzKTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXNvbGlkIHtcXHJcXG4gIGNvbG9yOiAjODg4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjFyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGR0YXNrIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGVudCB7XFxyXFxuICB3aWR0aDogOTQlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMTAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogIzg4ODtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHRhc2s6aG92ZXIsXFxyXFxuLmFkZHRhc2s6Zm9jdXMge1xcclxcbiAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDAuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkdGFzazo6cGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6ICNhYWE7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxubGk6bGFzdC1jaGlsZCB7XFxyXFxuICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5saTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcclxcbn1cXHJcXG5cXHJcXG5saSBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxubGkgbGFiZWwsXFxyXFxuI2VkaXRmaWVsZCB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuI2VkaXRmaWVsZCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNlZGl0ZmllbGQ6Zm9jdXMge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubGkgbGFiZWwuY29tcGxldGVkIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgY29sb3I6ICNhYWE7XFxyXFxufVxcclxcblxcclxcbmxpIGJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjODg4O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5saSBidXR0b246aG92ZXIsXFxyXFxubGkgYnV0dG9uOmZvY3VzIHtcXHJcXG4gIGNvbG9yOiAjMjIyO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubGkuZHJhZ2dpbmcge1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG4jYnRuLWNsZWFyLXRhc2sge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogIzg4ODtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuI2J0bi1jbGVhci10YXNrOmhvdmVyLFxcclxcbiNidG4tY2xlYXItdGFzazpmb2N1cyB7XFxyXFxuICBjb2xvcjogIzIyMjtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tYXJrIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xlYXJDb21wbGV0ZWQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMXB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxLjhyZW07XFxyXFxufVxcclxcblxcclxcbiNjbGVhckNvbXBsZXRlZDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAzOTJiO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzYWJsZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLG9DQUFvQztFQUNwQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2IsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsaURBQWlEO0VBQ2pELHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSwrQ0FBK0M7RUFDL0MsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLGlEQUFpRDtFQUNqRCx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsT0FBTztFQUNQLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0NBQWtDO0FBQ3BDOztBQUVBOztFQUVFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0NBQWtDO0FBQ3BDOztBQUVBOztFQUVFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXIgdmFyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIHBhZGRpbmc6IDQwcHggMCA0MHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5hbGlnbi1jZW50ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDIyMHB4O1xcclxcbiAgbWFyZ2luOiA0MHB4IDhweCA0MHB4IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjM2LCAyMzMsIDIzMyk7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5mYS1zb2xpZCB7XFxyXFxuICBjb2xvcjogIzg4ODtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkdGFzayB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDk0JTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idXR0b24ge1xcclxcbiAgd2lkdGg6IDEwJTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgY29sb3I6ICM4ODg7XFxyXFxufVxcclxcblxcclxcbi5hZGR0YXNrOmhvdmVyLFxcclxcbi5hZGR0YXNrOmZvY3VzIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAwLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHRhc2s6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiAjYWFhO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbmxpOmxhc3QtY2hpbGQge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubGk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXHJcXG59XFxyXFxuXFxyXFxubGkgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmxpIGxhYmVsLFxcclxcbiNlZGl0ZmllbGQge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbiNlZGl0ZmllbGQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jZWRpdGZpZWxkOmZvY3VzIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmxpIGxhYmVsLmNvbXBsZXRlZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gIGNvbG9yOiAjYWFhO1xcclxcbn1cXHJcXG5cXHJcXG5saSBidXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogIzg4ODtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxubGkgYnV0dG9uOmhvdmVyLFxcclxcbmxpIGJ1dHRvbjpmb2N1cyB7XFxyXFxuICBjb2xvcjogIzIyMjtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmxpLmRyYWdnaW5nIHtcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG59XFxyXFxuXFxyXFxuI2J0bi1jbGVhci10YXNrIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICM4ODg7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbiNidG4tY2xlYXItdGFzazpob3ZlcixcXHJcXG4jYnRuLWNsZWFyLXRhc2s6Zm9jdXMge1xcclxcbiAgY29sb3I6ICMyMjI7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFyayB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFyQ29tcGxldGVkIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDFweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMS44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xlYXJDb21wbGV0ZWQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYjtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2FibGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7XHJcbiAgcmVuZGVyVGFza0xpc3QsIHNhdmVUYXNrcywgbG9hZFRhc2tzLCB1cGRhdGVJbmRleCwgYWRkVGFzayxcclxufSBmcm9tICcuL21vZHVsZXMvcmVuZGVyVGFzayc7XHJcbmltcG9ydCBjbGVhckNvbXBsZXRlZFRhc2tzIGZyb20gJy4vbW9kdWxlcy9jbGVhckNvbXBsZXRlJztcclxuXHJcbmNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tMaXN0Jyk7XHJcbmNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Rhc2tGb3JtJyk7XHJcbmNvbnN0IGNsZWFyQ29tcGxldGVkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyQ29tcGxldGVkJyk7XHJcbmxldCB0YXNrcyA9IFtdO1xyXG5cclxuY29uc3QgaGFuZGxlRHJhZ1N0YXJ0ID0gKGV2ZW50KSA9PiB7XHJcbiAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVEcmFnT3ZlciA9IChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgdGFza0VsZW1lbnQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRhc2snKTtcclxuICBjb25zdCBkcmFnZ2luZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZ2dpbmcnKTtcclxuICBpZiAodGFza0VsZW1lbnQgJiYgZHJhZ2dpbmdFbGVtZW50ICYmIHRhc2tFbGVtZW50ICE9PSBkcmFnZ2luZ0VsZW1lbnQpIHtcclxuICAgIGNvbnN0IHRhc2tFbGVtZW50UmVjdCA9IHRhc2tFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgZHJhZ1kgPSBldmVudC5jbGllbnRZIC0gdGFza0VsZW1lbnRSZWN0LnRvcDtcclxuICAgIGNvbnN0IGlzQWZ0ZXIgPSBkcmFnWSA+IHRhc2tFbGVtZW50UmVjdC5oZWlnaHQgLyAyO1xyXG4gICAgdGFza0xpc3QuaW5zZXJ0QmVmb3JlKFxyXG4gICAgICBkcmFnZ2luZ0VsZW1lbnQsXHJcbiAgICAgIGlzQWZ0ZXIgPyB0YXNrRWxlbWVudC5uZXh0U2libGluZyA6IHRhc2tFbGVtZW50LFxyXG4gICAgKTtcclxuICAgIGNvbnN0IG5ld0luZGV4ID0gQXJyYXkuZnJvbSh0YXNrTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpKS5pbmRleE9mKFxyXG4gICAgICBkcmFnZ2luZ0VsZW1lbnQsXHJcbiAgICApO1xyXG4gICAgY29uc3Qgb2xkSW5kZXggPSBkcmFnZ2luZ0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XHJcbiAgICB0YXNrcy5zcGxpY2UobmV3SW5kZXgsIDAsIHRhc2tzLnNwbGljZShvbGRJbmRleCwgMSlbMF0pO1xyXG4gICAgc2F2ZVRhc2tzKHRhc2tzKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVEcmFnRW5kID0gKGV2ZW50KSA9PiB7XHJcbiAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJyk7XHJcbn07XHJcblxyXG5uZXdUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IG5ld1Rhc2tJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrJyk7XHJcbiAgY29uc3QgdGFza05hbWUgPSBuZXdUYXNrSW5wdXQudmFsdWUudHJpbSgpO1xyXG4gIGlmICh0YXNrTmFtZSkge1xyXG4gICAgYWRkVGFzayh0YXNrcywgdGFza05hbWUpO1xyXG4gICAgbmV3VGFza0lucHV0LnZhbHVlID0gJyc7XHJcbiAgICBuZXdUYXNrSW5wdXQuZm9jdXMoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuY2xlYXJDb21wbGV0ZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgdGFza3MgPSBjbGVhckNvbXBsZXRlZFRhc2tzKHRhc2tzKTtcclxuICB1cGRhdGVJbmRleCh0YXNrcyk7XHJcbiAgc2F2ZVRhc2tzKHRhc2tzKTtcclxuICByZW5kZXJUYXNrTGlzdCh0YXNrcyk7XHJcbn0pO1xyXG5cclxudGFza0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgaGFuZGxlRHJhZ1N0YXJ0KTtcclxudGFza0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBoYW5kbGVEcmFnT3Zlcik7XHJcbnRhc2tMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBoYW5kbGVEcmFnRW5kKTtcclxuXHJcbnRhc2tzID0gbG9hZFRhc2tzKCk7XHJcbnJlbmRlclRhc2tMaXN0KHRhc2tzKTtcclxuIiwiY29uc3QgY2xlYXJDb21wbGV0ZWRUYXNrcyA9ICh0YXNrcykgPT4ge1xyXG4gIGNvbnN0IGFyciA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4gIXRhc2suY29tcGxldGVkKTtcclxuICByZXR1cm4gYXJyO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjbGVhckNvbXBsZXRlZFRhc2tzOyIsImltcG9ydCB7IHNhdmVUYXNrcywgbG9hZFRhc2tzIH0gZnJvbSAnLi9zdG9yYWdlJztcclxuaW1wb3J0IHVwZGF0ZUluZGV4IGZyb20gJy4vdXBkYXRlSW5kZXgnO1xyXG5cclxuY29uc3QgcmVuZGVyVGFza0xpc3QgPSAodGFza3MpID0+IHtcclxuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTGlzdCcpO1xyXG4gIHRhc2tMaXN0LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICB0YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgdGFza0VsZW1lbnQuY2xhc3NOYW1lID0gJ3Rhc2snO1xyXG4gICAgdGFza0VsZW1lbnQuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgIHRhc2tFbGVtZW50LmRhdGFzZXQuaW5kZXggPSB0YXNrLmluZGV4O1xyXG5cclxuICAgIGNvbnN0IHRhc2tDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0YXNrQ2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgICB0YXNrQ2hlY2tib3guY2hlY2tlZCA9IHRhc2suY29tcGxldGVkO1xyXG4gICAgdGFza0NoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xyXG4gICAgICB0YXNrc1tpbmRleF0uY29tcGxldGVkID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XHJcbiAgICAgIHNhdmVUYXNrcyh0YXNrcyk7XHJcbiAgICAgIHJlbmRlclRhc2tMaXN0KHRhc2tzKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRhc2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICB0YXNrTGFiZWwudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xyXG4gICAgdGFza0xhYmVsLmNsYXNzTmFtZSA9IHRhc2suY29tcGxldGVkID8gJ21hcmsnIDogJyc7XHJcblxyXG4gICAgY29uc3QgdGFza2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRhc2tpbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgdGFza2lucHV0LmNsYXNzTmFtZSA9ICdkaXNhYmxlJztcclxuICAgIHRhc2tpbnB1dC5pZCA9ICdlZGl0ZmllbGQnO1xyXG5cclxuICAgIGNvbnN0IHRhc2tEZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHRhc2tEZWxldGVCdXR0b24udHlwZSA9ICdidXR0b24nO1xyXG4gICAgdGFza0RlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSAnZGVsZXRlJztcclxuICAgIHRhc2tEZWxldGVCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+JztcclxuICAgIHRhc2tEZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRhc2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIHVwZGF0ZUluZGV4KHRhc2tzKTtcclxuICAgICAgc2F2ZVRhc2tzKHRhc2tzKTtcclxuICAgICAgcmVuZGVyVGFza0xpc3QodGFza3MpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCB0YXNrZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGFza2VkaXRCdXR0b24udHlwZSA9ICdidXR0b24nO1xyXG4gICAgdGFza2VkaXRCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEgZmEtcGVuY2lsXCI+PC9pPic7XHJcbiAgICBjb25zdCB0YXNrc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGFza3NhdmVCdXR0b24udHlwZSA9ICdidXR0b24nO1xyXG4gICAgdGFza3NhdmVCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEgZmEtZmxvcHB5LW9cIj48L2k+JztcclxuICAgIHRhc2tzYXZlQnV0dG9uLmNsYXNzTmFtZSA9ICdkaXNhYmxlJztcclxuXHJcbiAgICB0YXNrZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGFza3NhdmVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZScpO1xyXG4gICAgICB0YXNraW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZScpO1xyXG4gICAgICB0YXNraW5wdXQudmFsdWUgPSB0YXNrTGFiZWwudGV4dENvbnRlbnQ7XHJcbiAgICAgIHRhc2tpbnB1dC5mb2N1cygpO1xyXG4gICAgICB0YXNrTGFiZWwuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZScpO1xyXG4gICAgICB0YXNrZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0YXNrc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGFza3NhdmVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZScpO1xyXG4gICAgICB0YXNraW5wdXQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZScpO1xyXG4gICAgICB0YXNrTGFiZWwudGV4dENvbnRlbnQgPSB0YXNraW5wdXQudmFsdWU7XHJcbiAgICAgIHRhc2tzW2luZGV4XS5kZXNjcmlwdGlvbiA9IHRhc2tpbnB1dC52YWx1ZTtcclxuICAgICAgdGFza0xhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGUnKTtcclxuICAgICAgdGFza2VkaXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZScpO1xyXG4gICAgICBzYXZlVGFza3ModGFza3MpO1xyXG4gICAgICByZW5kZXJUYXNrTGlzdCh0YXNrcyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrQ2hlY2tib3gpO1xyXG4gICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0xhYmVsKTtcclxuICAgIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tpbnB1dCk7XHJcbiAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrZWRpdEJ1dHRvbik7XHJcbiAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrc2F2ZUJ1dHRvbik7XHJcbiAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBhZGRUYXNrID0gKHRhc2tzLCBuYW1lKSA9PiB7XHJcbiAgY29uc3QgdGFzayA9IHsgaW5kZXg6IHRhc2tzLmxlbmd0aCArIDEsIGRlc2NyaXB0aW9uOiBuYW1lLCBjb21wbGV0ZWQ6IGZhbHNlIH07XHJcbiAgdGFza3MucHVzaCh0YXNrKTtcclxuICBzYXZlVGFza3ModGFza3MpO1xyXG4gIHJlbmRlclRhc2tMaXN0KHRhc2tzKTtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgcmVuZGVyVGFza0xpc3QsIHNhdmVUYXNrcywgbG9hZFRhc2tzLCB1cGRhdGVJbmRleCwgYWRkVGFzayxcclxufTtcclxuIiwiY29uc3Qgc2F2ZVRhc2tzID0gKHRhc2tzKSA9PiB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxufTtcclxuXHJcbmNvbnN0IGxvYWRUYXNrcyA9ICgpID0+IHtcclxuICBjb25zdCB0YXNrc0pzb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKTtcclxuICBpZiAodGFza3NKc29uKSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh0YXNrc0pzb24pO1xyXG4gIH1cclxuICByZXR1cm4gW107XHJcbn07XHJcblxyXG5leHBvcnQgeyBzYXZlVGFza3MsIGxvYWRUYXNrcyB9O1xyXG4iLCJjb25zdCB1cGRhdGVJbmRleCA9ICh0YXNrcykgPT4ge1xyXG4gIHRhc2tzLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICBlbGVtZW50LmluZGV4ID0gaW5kZXggKyAxO1xyXG4gIH0pO1xyXG4gIHJldHVybiB0YXNrcztcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlSW5kZXg7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9