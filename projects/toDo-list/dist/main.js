/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: cadetblue;
    border: 0px;
    margin: 0px;
    padding: 0px;
    /* width: 100vw; */
    height: 100vh;
}

.header {
    display: flex;
    flex-direction: row;
    color: white;
    font-size: 50px;
    justify-content: space-between;
    align-items: center;
    /* padding: 10px;
    margin: 20px; */
    width: 100%;
}

.headerHero{
    padding: 0px 20px;
}

.headerMenu {
    align-items: center;
    padding: 0px 20px;
}

.content{
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    overflow: auto;
    height: 100%;
}

.list{
    display: flex;
    flex-direction: column;
    /* flex: initial; */
    /* height: auto; */
    flex-direction: column;
    justify-content: baseline;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    overflow: scroll;
    max-width: fit-content;
    /* padding: 5px; */
    /* margin: 5px; */
}

.addNewListDiv{
    flex:1;
}

.list,
.newListDiv{
    min-width: 300px;
    margin: 10px;
    padding: 10px;
    gap: 10px;
    
}

.item,
.toDoDiv {
    /* width: 90rem; */
    border: 1px solid skyblue;
    min-height: 100px;
    background-color: lightcoral;

}

#addBtn{
    border: none;
}

#addBtn:hover{
    font-weight: bold;
    background-color: gainsboro;
}

.items{
    display: block;
    border: 1px solid skyblue;
    min-height: 100px;
    background-color: lightcoral;
    border-radius: 2px;
}

.saveDiv{
    /* display: flex;
    justify-content: space-evenly; */
    padding: 10px;
}

.save{
    color: white;
    background-color: green;
    border-radius: 5px;
    border: 1px solid black;
    background-image: linear-gradient(180deg, rgb(82, 177, 82), rgb(37, 127, 37));
    font-weight: bold;
    display: inline;
}

.addListBtn {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border: 1px solid skyblue;
    background-color: lightcoral;
    text-align: left;
    color: white;
    border-radius: 4px;
}

.btn:hover{
    font-weight: bold;
    text-decoration: underline;
    background-color: lightgrey;
}

.modal {
    display: block; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0%;
    top: 0%;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgba(76, 175, 80, 0.01);
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.25);
  }

  .modalContent {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: fixed;
    left: 12.5%;
    top: 12.5%;
    width: 75%;
    height: 75%;
    overflow: auto;
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 2px solid #888;
    border-radius: 10px;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.25);
    width: 80%;
  }

  .close{
    position: absolute;
    top: 25px;
    right: 25px;
  }

  .title{
    margin-top: 40px;
  }

  input[type=text],
  textarea {
    display: block;
  }

  .inputVal {
    font-weight: bold;
  }

  checkbox:checked {
    text-decoration: line-through ;
  }

  .checklist{
    display: block;
  }

  .checkboxDiv {
    display: block;
  }

  .checkboxLabel {
    display: inline-block;
  }`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,4DAA4D;IAC5D,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,2BAA2B;IAC3B,WAAW;IACX,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,8BAA8B;IAC9B,mBAAmB;IACnB;mBACe;IACf,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,OAAO;IACP,mBAAmB;IACnB,2BAA2B;IAC3B,WAAW;IACX,cAAc;IACd,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,sBAAsB;IACtB,yBAAyB;IACzB,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,MAAM;AACV;;AAEA;;IAEI,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,SAAS;;AAEb;;AAEA;;IAEI,kBAAkB;IAClB,yBAAyB;IACzB,iBAAiB;IACjB,4BAA4B;;AAEhC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,2BAA2B;AAC/B;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,iBAAiB;IACjB,4BAA4B;IAC5B,kBAAkB;AACtB;;AAEA;IACI;oCACgC;IAChC,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,uBAAuB;IACvB,6EAA6E;IAC7E,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,4DAA4D;IAC5D,yBAAyB;IACzB,4BAA4B;IAC5B,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,0BAA0B;IAC1B,2BAA2B;AAC/B;;AAEA;IACI,cAAc,EAAE,sBAAsB;IACtC,eAAe,EAAE,kBAAkB;IACnC,UAAU,EAAE,eAAe;IAC3B,QAAQ;IACR,OAAO;IACP,WAAW,EAAE,eAAe;IAC5B,YAAY,EAAE,gBAAgB;IAC9B,cAAc,EAAE,4BAA4B;IAC5C,yCAAyC;IACzC,4CAA4C;EAC9C;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,eAAe;IACf,WAAW;IACX,UAAU;IACV,UAAU;IACV,WAAW;IACX,cAAc;IACd,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,4CAA4C;IAC5C,UAAU;EACZ;;EAEA;IACE,kBAAkB;IAClB,SAAS;IACT,WAAW;EACb;;EAEA;IACE,gBAAgB;EAClB;;EAEA;;IAEE,cAAc;EAChB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,8BAA8B;EAChC;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,qBAAqB;EACvB","sourcesContent":["body{\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: cadetblue;\n    border: 0px;\n    margin: 0px;\n    padding: 0px;\n    /* width: 100vw; */\n    height: 100vh;\n}\n\n.header {\n    display: flex;\n    flex-direction: row;\n    color: white;\n    font-size: 50px;\n    justify-content: space-between;\n    align-items: center;\n    /* padding: 10px;\n    margin: 20px; */\n    width: 100%;\n}\n\n.headerHero{\n    padding: 0px 20px;\n}\n\n.headerMenu {\n    align-items: center;\n    padding: 0px 20px;\n}\n\n.content{\n    display: flex;\n    flex: 1;\n    flex-direction: row;\n    justify-content: flex-start;\n    width: 100%;\n    overflow: auto;\n    height: 100%;\n}\n\n.list{\n    display: flex;\n    flex-direction: column;\n    /* flex: initial; */\n    /* height: auto; */\n    flex-direction: column;\n    justify-content: baseline;\n    background-color: white;\n    border: 1px solid black;\n    border-radius: 5px;\n    overflow: scroll;\n    max-width: fit-content;\n    /* padding: 5px; */\n    /* margin: 5px; */\n}\n\n.addNewListDiv{\n    flex:1;\n}\n\n.list,\n.newListDiv{\n    min-width: 300px;\n    margin: 10px;\n    padding: 10px;\n    gap: 10px;\n    \n}\n\n.item,\n.toDoDiv {\n    /* width: 90rem; */\n    border: 1px solid skyblue;\n    min-height: 100px;\n    background-color: lightcoral;\n\n}\n\n#addBtn{\n    border: none;\n}\n\n#addBtn:hover{\n    font-weight: bold;\n    background-color: gainsboro;\n}\n\n.items{\n    display: block;\n    border: 1px solid skyblue;\n    min-height: 100px;\n    background-color: lightcoral;\n    border-radius: 2px;\n}\n\n.saveDiv{\n    /* display: flex;\n    justify-content: space-evenly; */\n    padding: 10px;\n}\n\n.save{\n    color: white;\n    background-color: green;\n    border-radius: 5px;\n    border: 1px solid black;\n    background-image: linear-gradient(180deg, rgb(82, 177, 82), rgb(37, 127, 37));\n    font-weight: bold;\n    display: inline;\n}\n\n.addListBtn {\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    border: 1px solid skyblue;\n    background-color: lightcoral;\n    text-align: left;\n    color: white;\n    border-radius: 4px;\n}\n\n.btn:hover{\n    font-weight: bold;\n    text-decoration: underline;\n    background-color: lightgrey;\n}\n\n.modal {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0%;\n    top: 0%;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgba(76, 175, 80, 0.01);\n    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.25);\n  }\n\n  .modalContent {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    position: fixed;\n    left: 12.5%;\n    top: 12.5%;\n    width: 75%;\n    height: 75%;\n    overflow: auto;\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 2px solid #888;\n    border-radius: 10px;\n    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.25);\n    width: 80%;\n  }\n\n  .close{\n    position: absolute;\n    top: 25px;\n    right: 25px;\n  }\n\n  .title{\n    margin-top: 40px;\n  }\n\n  input[type=text],\n  textarea {\n    display: block;\n  }\n\n  .inputVal {\n    font-weight: bold;\n  }\n\n  checkbox:checked {\n    text-decoration: line-through ;\n  }\n\n  .checklist{\n    display: block;\n  }\n\n  .checkboxDiv {\n    display: block;\n  }\n\n  .checkboxLabel {\n    display: inline-block;\n  }"],"sourceRoot":""}]);
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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/functions/chgPriority.js":
/*!**************************************!*\
  !*** ./src/functions/chgPriority.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ chgPriority)
/* harmony export */ });
function chgPriority(item, level) {
    item.priority = level;
}

/***/ }),

/***/ "./src/functions/createItem.js":
/*!*************************************!*\
  !*** ./src/functions/createItem.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createItem)
/* harmony export */ });
/* harmony import */ var _modalPopUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalPopUp */ "./src/functions/modalPopUp.js");
/* harmony import */ var _itemConstructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemConstructor */ "./src/functions/itemConstructor.js");



function createItem(listIndex, pageObject, itemObject) {
    // const items = document.querySelectorAll(".items");
    // console.log(listIndex);
    // console.log(item);
    console.log(itemObject);
    console.log(typeof(itemObject));
    // itemObject.title = itemObjectTitle;
    const listDiv = document.querySelector("#list" + listIndex);
    // const addItemButton = document.querySelector("#" + list.id + "addItemBtn");
    const addItemButton = document.querySelector("#addItemBtn"+listIndex);

    const itemButton = document.createElement("button");
    // itemButton.setAttribute("id", list.id + "item" + (items.length + 1));
    itemButton.className = "items";

    
    if (itemObject === String) {
        itemObject = new _itemConstructor__WEBPACK_IMPORTED_MODULE_1__["default"]();
        itemObject.title = itemObjectTitle;           //create new item object using constructor, then chg values in modalpopup.
    }
    
    pageObject.lists[listIndex].items.push(itemObject);
    console.log(pageObject);

    itemButton.textContent = itemObject.title;

    // modalPopUp(listIndex, itemButton, itemObject, itemButton.id);
    // modalPopUp(itemButton, newItem);

    listDiv.insertBefore(itemButton, addItemButton); 
        
    // addItemButton.setAttribute("value"," ");
    addItemButton.setAttribute("value","Add Card...");
    addItemButton.blur();

    
};

/***/ }),

/***/ "./src/functions/createList.js":
/*!*************************************!*\
  !*** ./src/functions/createList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createList)
/* harmony export */ });
/* harmony import */ var _createItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createItem */ "./src/functions/createItem.js");
/* harmony import */ var _getFromStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getFromStorage */ "./src/functions/getFromStorage.js");
/* harmony import */ var _saveToStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saveToStorage */ "./src/functions/saveToStorage.js");
/* harmony import */ var _listConstructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listConstructor */ "./src/functions/listConstructor.js");
/* harmony import */ var _itemConstructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./itemConstructor */ "./src/functions/itemConstructor.js");
// module to add a project list to the interface







function createList(listIndex, pageObject) {
        let newList = pageObject.lists[listIndex];
        console.log(pageObject.lists[listIndex]);


        // queries
            const contentDiv = document.querySelector(".content");
            const addNewListDiv = document.querySelector(".newListDiv");

        // create list
            const listDiv = document.createElement("div");
            listDiv.className = "list";
            listDiv.id = "list" + listIndex;

        // list title

            const listTitle = document.createElement("div");
            listTitle.id = "listTitle";
            listTitle.class =  "Title";

            const listTitleInput = document.createElement("input");
            listTitleInput.setAttribute("type", "textarea");
            listTitleInput.setAttribute("id", "listTitleInput");
            listTitleInput.setAttribute("name","listTitle");
            // if (initItem.title === undefined) {
            //     listTitle.textContent = "Title...";
            // } else {
            listTitle.textContent = newList.listTitle;
            // }
            
            listTitle.addEventListener("click", () => {
                listTitle.replaceWith(listTitleInput);
                listTitleInput.focus();
                newList.listTitle = listTitleInput.value;
                // saveDiv.remove();
            });

            listTitleInput.addEventListener("keypress", function(event) {
                if (event.key === "Enter") {
                    event.preventDefault();
                    newList.listTitle = listTitleInput.value;
                    listTitle.textContent = newList.listTitle;
                    listTitleInput.blur();
                    listTitleInput.replaceWith(listTitle);
                    
                };
            });

            window.addEventListener("click", function(event) {
                if (event.target != listTitleInput && event.target != listTitle) {
                    listTitleInput.replaceWith(listTitle);
                    //   saveDiv.style.display = "none";
                    // saveDiv.style.visibility = "hidden";
                }
            });

            listDiv.append(listTitle);

        //add item button

            const addItemInput = document.createElement("input");
            addItemInput.setAttribute("value","Add Card...");
            addItemInput.placeholder = "Add Card...";
            addItemInput.setAttribute("onfocus","this.value=''");
            addItemInput.setAttribute("onfocusout","this.value='Add Card...'");
            addItemInput.setAttribute("type", "text");
            addItemInput.setAttribute("id", "addItemBtn"+listIndex);
            addItemInput.setAttribute("name","addBtn");

            addItemInput.addEventListener("click", () => {
                // list.append(saveDiv);
                saveDiv.style.visibility = "visible";

            });

            addItemInput.addEventListener("keypress", function(event) {
                if (event.key === "Enter") {
                event.preventDefault();
                saveBtn.click();
                addItemInput.focus();
                // console.log(addItemInput.value);
                // console.log(addItemInput.getAttribute("value"));
                // list.append(saveDiv);
                saveDiv.style.visibility = "visible";
                };
            });

            listDiv.append(addItemInput);
       
        // save/cancel input buttons

            const saveDiv = document.createElement("div");
            saveDiv.setAttribute("class","saveDiv");

            const saveBtn = document.createElement("button");
            saveBtn.setAttribute("id", "saveBtn");
            saveBtn.className = "save"
            saveBtn.textContent = "Save";
            saveBtn.addEventListener("click", () => {
                // const newItem = new ToDoItem
                // newItem.title = addItemInput.value;
                (0,_createItem__WEBPACK_IMPORTED_MODULE_0__["default"])(listIndex, pageObject, addItemInput.value);                                   // create item
                // saveToStorage();                                    // save to storage
                // getFromStorage();                                   // get from storage
                saveDiv.style.visibility = "hidden";
                // saveDiv.remove();
            });

            const cancelBtn = document.createElement("button");
            cancelBtn.setAttribute("id", "cancelBtn");
            cancelBtn.innerHTML = "&times";

            cancelBtn.addEventListener("click", () => {
                saveDiv.style.visibility = "hidden";
                // saveDiv.remove();
            });

            saveDiv.append(saveBtn,cancelBtn);
            listDiv.append(saveDiv);
            saveDiv.style.visibility = "hidden";


            window.addEventListener("click", function(event) {
                if (event.target != addItemInput) {
                  saveDiv.style.visibility = "hidden";
                // saveDiv.remove();
                }
            });

        contentDiv.insertBefore(listDiv, addNewListDiv);

        // addItemInput.focus();

        // listTitleInput.focus();
    };

/***/ }),

/***/ "./src/functions/getFromStorage.js":
/*!*****************************************!*\
  !*** ./src/functions/getFromStorage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getFromStorage)
/* harmony export */ });
function getFromStorage() {
    const pageLoad = localStorage.getItem("pageLoad");
    const pageData = localStorage.getItem("pageData");
    console.log(pageData);
}

/***/ }),

/***/ "./src/functions/initLoad.js":
/*!***********************************!*\
  !*** ./src/functions/initLoad.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initLoad)
/* harmony export */ });
/* harmony import */ var _createList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createList */ "./src/functions/createList.js");
/* harmony import */ var _itemConstructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemConstructor */ "./src/functions/itemConstructor.js");
/* harmony import */ var _listConstructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listConstructor */ "./src/functions/listConstructor.js");
/* harmony import */ var _createItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createItem */ "./src/functions/createItem.js");





function initLoad() {
    const pageObject = {
        lists: [
        ],
    };
    pageObject.lists[0] = new _listConstructor__WEBPACK_IMPORTED_MODULE_2__["default"]("Listy 1");
    // pageObject.lists[0].listTitle = "List 1";
    pageObject.lists[0].items[0] = new _itemConstructor__WEBPACK_IMPORTED_MODULE_1__["default"];
    pageObject.lists[0].items[0].title = "Item 1";
    // pageObject.lists[0].items[1] = new ToDoItem;
    // pageObject.lists[0].items[1].title = "List1 item 2";
    // pageObject.lists[1] = new Lists;
    // pageObject.lists[1].listTitle = "List 2";
    // pageObject.lists[1].items[0] = new ToDoItem;
    // pageObject.lists[1].items[0].title = "List2 Item1"
    // pageObject.lists[2] = new Lists;
    // pageObject.lists[2].listTitle = "List 3";

    // console.log(pageObject);

    //render page function
    // for each list in page object, createlist();x
    
    // add if statements to createlist and createitem for processing data. if no data, have defaults ready.

    const body = document.body;

    // create header elements
        const header = document.createElement("div");
        header.className = "header";

        const headerTitle = document.createElement("div");
        headerTitle.className = "headerTitle";
        headerTitle.textContent = "LemonJello";
        header.appendChild(headerTitle);

        const headerMenu = document.createElement("div");
        headerMenu.className = "headerMenu";
        header.appendChild(headerMenu);
        
        // const menuButton = document.createElement("button");
        // menuButton.className = "btn";
        // menuButton.textContent = ("MENU");
        // headerMenu.appendChild(menuButton);

    // create content div
        const contentDiv = document.createElement("div");
        contentDiv.className = "content";

        body.append(header, contentDiv);

    // create newListDiv

        const newListDiv = document.createElement("div");
        newListDiv.className = "newListDiv";
        contentDiv.append(newListDiv);
    
    // addList button and input


        const addListBtn = document.createElement("button");
        addListBtn.className = "addListBtn";
        // addListBtn.setAttribute("onfocus","this.value=''");
        addListBtn.textContent = "Add New List..";
        addListBtn.addEventListener("click", () => {
            addListBtn.replaceWith(addListInput);
            addListInput.focus();
            saveDiv.style.visibility = "visible";
        });

        // const addListBtn = document.createElement("input");
        // addListBtn.type = "button";
        // addListBtn.className = "addListBtn";
        // // addListBtn.setAttribute("onfocus","this.value=''");
        // addListBtn.value = "Add New List..";
        // addListBtn.addEventListener("click", () => {
        //     // addListBtn.replaceWith(addListInput);
        //     // addListBtn.value = ' ';
        //     addListBtn.type = "text";
        //     addListBtn.className = "addListInput";
        //     addListBtn.placeholder = "Add New List... buddy";
        //     // addListBtn.value = "";
        //     addListBtn.focus();
        //     // addListInput.focus();
        //     saveDiv.style.visibility = "visible";
        // });

        const addListInput = document.createElement("input");
        addListInput.className = "addListInput";
        addListInput.placeholder = "Add New List..."
        addListInput.onfocus = () => {
            saveDiv.style.visibility = "visible";
        }

    // save & cancel buttons

        const saveDiv = document.createElement("div");
        saveDiv.setAttribute("class","saveDiv");
        saveDiv.style.visibility = "hidden";

        const addListSaveBtn = document.createElement("button");
        addListSaveBtn.className = "save"
        addListSaveBtn.setAttribute("id", "addListSaveBtn");
        addListSaveBtn.textContent = "Save";
        addListSaveBtn.addEventListener("click", () => {
            pageObject.lists.push(new _listConstructor__WEBPACK_IMPORTED_MODULE_2__["default"](addListInput.value));
            const numLists = pageObject.lists.length-1;
            (0,_createList__WEBPACK_IMPORTED_MODULE_0__["default"])(numLists, pageObject);                         // create list, pass the 'add list' input value as the title
            saveDiv.style.visibility = "hidden";
            addListBtn.value = "Add New List...";                   // reset the 'add list' button value
            addListInput.setAttribute("onfocus","this.value=''");
            addListInput.replaceWith(addListBtn);                   // replace input with button
            // addListBtn.value = "Add New List...";
            // addListBtn.setAttribute("onfocus","this.value=''");
        });

        const cancelBtn = document.createElement("button");
        cancelBtn.setAttribute("id", "cancelBtn");
        cancelBtn.innerHTML = "&times";

        cancelBtn.addEventListener("click", () => {
            saveDiv.style.visibility = "hidden";
            // saveDiv.remove();
            addListInput.placeholder = "Add New List..."
            addListInput.replaceWith(addListBtn);
        });

        saveDiv.append(addListSaveBtn,cancelBtn);

        

        window.onclick = function(event) {
            if ((event.target != addListSaveBtn) && (event.target != addListInput) && (event.target != addListBtn)) {
                saveDiv.style.visibility = "hidden";
            }
        };

        addListInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
            event.preventDefault();
            addListSaveBtn.click();
            // const listName = addListInput.value
            // newListDiv.append(saveDiv);
            };
        });
        
        newListDiv.appendChild(addListBtn);
        newListDiv.append(saveDiv);

        
        for (let listIndex in pageObject.lists) {
            // console.log(listIndex);
            // console.log(pageObject.lists[listIndex]);
            (0,_createList__WEBPACK_IMPORTED_MODULE_0__["default"])(listIndex, pageObject);
            for (let itemIndex in pageObject.lists[listIndex].items) {
                // console.log(listIndex + "," + pageObject.lists[listIndex].items[itemIndex].title);
                // console.log(itemIndex);
                // console.log(pageObject.lists[listIndex].items[itemIndex]);
                let itemObject = pageObject.lists[listIndex].items[itemIndex];

                (0,_createItem__WEBPACK_IMPORTED_MODULE_3__["default"])(listIndex, pageObject, itemObject);
                for (let itemContent in itemObject){
                    // console.log(pageObject.lists[listIndex].items[itemIndex][itemContent]);
                }
            }
        }
        

        // const initItem = new ToDoItem();

        // console.log(pageObject);

    // append buttons
    
    //append divs
};

/***/ }),

/***/ "./src/functions/itemConstructor.js":
/*!******************************************!*\
  !*** ./src/functions/itemConstructor.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDoItem)
/* harmony export */ });

function ToDoItem (list) {
    // this.list = list;
    // this.item = item;
    this.title = "Item Title Fool...";
    this.description = "Description test";
    this.dueDate = "Today test";
    this.priority = "high test";
    this.notes = "Notes test";
    this.checkListTitle = "Checklist";
    this.checklist = [];
};

/***/ }),

/***/ "./src/functions/listConstructor.js":
/*!******************************************!*\
  !*** ./src/functions/listConstructor.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Lists)
/* harmony export */ });

function Lists (title) {
    this.listTitle = title;
    this.items = [];
};

/***/ }),

/***/ "./src/functions/modalPopUp.js":
/*!*************************************!*\
  !*** ./src/functions/modalPopUp.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ modalPopUp)
/* harmony export */ });
/* harmony import */ var _saveToStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveToStorage */ "./src/functions/saveToStorage.js");


function modalPopUp(listIndex, itemButton, itemObject) {

    // console.log(listIndex);
    // console.log(itemButton);
    // console.log(itemObject);

    // define item
        const button = itemButton;

    // create modal
        const body = document.body;
        const modal = document.createElement("div");
        // modal.setAttribute("id", "modal"+ itemID);
        modal.className = "modal";
        const modalContent = document.createElement("div");
        modalContent.className = "modalContent";

    // close button
        const close = document.createElement("button");
        close.className = "close";
        close.innerHTML = "&times;";
        close.addEventListener("click", function() {
            modal.style.visibility = "hidden";
        });
    
    // title
        const titleEl = document.createElement("div");
        // newItem.title = item.textContent;
        titleEl.className = "title";
        titleEl.textContent = itemObject.title + " in List " + (Number(listIndex)+1);
        
        // const listEl = document.createElement("div");
        // const list = document.getElementById("#")
        // listEl.textContent = "in list:" + 

    // description
        const desc = document.createElement("textarea");
        desc.className = "desc";
        desc.setAttribute("placeholder", "Description..");
        desc.setAttribute("id", "desc");
        desc.setAttribute("name","desc");
        if (desc.getAttribute("value") === null) {
            desc.value = itemObject.description; 
        }
        desc.onchange = () => {
            itemObject.description = desc.value;
            console.log(itemObject.description);
        }
        

    // checklist
        const checklist = document.createElement("div");
        checklist.className = "checklist";
        // checklist.id = "checklist" + id;
        const checklistTitle = document.createElement("div");
        checklistTitle.textContent = itemObject.checkListTitle;
        checklistTitle.className = "checklistTitle";
        checklist.appendChild(checklistTitle);
        // const checklistContent = [];

    // add checkbox button / input

        const addCheckbox = document.createElement("button");
        addCheckbox.className = "addCheckBox";
        addCheckbox.textContent = "Add Item...";

        const addCheckBoxInput = document.createElement("input");
        addCheckBoxInput.type = "textArea";
        addCheckBoxInput.className = "addCheckBoxInput";
        
        checklist.appendChild(addCheckbox);
        
    // save/cancel buttons
        const saveDiv = document.createElement("div");
        saveDiv.setAttribute("class","saveDiv");

        const saveBtn = document.createElement("button");
        saveBtn.setAttribute("id", "saveBtn");
        saveBtn.className = "save";
        saveBtn.textContent = "Save";
        saveBtn.addEventListener("click", () => {
            // event.preventDefault();
            itemObject.checklist.push(addCheckBoxInput.value);
            console.log(itemObject.checklist);
            addCheckBox(addCheckBoxInput.value);
            addCheckBoxInput.focus();
            addCheckBoxInput.value = "";
            addCheckBoxInput.placeholder = "Add another...";
            // checkboxLabel.placeholder = "Add newer Item..";
            // saveDiv.remove();
        });

        const cancelBtn = document.createElement("button");
        cancelBtn.setAttribute("id", "cancelBtn");
        cancelBtn.innerHTML = "&times";

        cancelBtn.addEventListener("click", () => {
            // saveDiv.style.display = "none";
            saveDiv.remove();
        });

        saveDiv.append(saveBtn,cancelBtn);
        checklist.append(saveDiv)

        addCheckbox.addEventListener("click", () => {
            addCheckbox.replaceWith(addCheckBoxInput);
            addCheckBoxInput.placeholder = "Add Item..."
            // addCheckBoxInput.value = "Add Item..."
            addCheckBoxInput.focus();
            
        });
        addCheckBoxInput.addEventListener ('keypress', function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                // console.log(addCheckBox(addCheckBoxInput.value));
                itemObject.checklist.push([addCheckBoxInput.value, addCheckBox(addCheckBoxInput.value)]);
                console.log(itemObject.checklist);
                addCheckBoxInput.focus();
                addCheckBoxInput.value = "";
                addCheckBoxInput.placeholder = "Add another...";
                // checkboxLabel.placeholder = "Add newer Item..";
            };
        });

         // checkbox
            function addCheckBox(value) {
                const checkboxDiv = document.createElement("div");
                checkboxDiv.className = "checkboxDiv";
                const checkbox = document.createElement("input");
                checkbox.setAttribute("type", "checkbox");
                checkbox.className = "checkbox";
                const checkListLength = document.querySelectorAll(".checkbox").length;
                // checkboxDiv.setAttribute("id", id + "toDo"+ checkListLength);
                // checkbox.setAttribute("value", "1");
                const checkboxLabel = document.createElement("div");
                checkboxLabel.className = "checkboxLabel";
                // checkboxLabel.setAttribute("type","textarea");
                // checkboxLabel.setAttribute("for", id + checkListLength);
                checkboxLabel.textContent = value;

                checkboxDiv.append(checkbox, checkboxLabel);
                checklist.insertBefore(checkboxDiv, addCheckBoxInput);
                // checklist.insertBefore(checkboxDiv, );
                // checkboxLabel.focus();
                // addCheckBoxInput.replaceWith(addCheckbox);
                // addCheckbox.value = "Add Item..."
                checkbox.addEventListener("click", () => {
                    console.log(checkbox.checked);
                    // checkboxLabel.toggleAttribute.className = "checked";
                })
                return checkbox.checked;
            };

    // addCheckBox();
    
    // priority
        const priorityDiv = document.createElement("div");
        priorityDiv.textContent = "Priority"
        const priorityList = document.createElement("select");
        const option1 = document.createElement("option");
        option1.value = "High";
        option1.textContent = "High";
        const option2 = document.createElement("option");
        option2.value = "Medium"; 
        option2.textContent = "Medium";
        const option3 = document.createElement("option");
        option3.value = "Low";
        option3.textContent = "Low";
        priorityList.append(option1,option2,option3);
        priorityDiv.append(priorityList);
    
    // modal click logic
        window.addEventListener("click", function(event) {
            if (event.target.className == "modal") {
            modal.style.visibility = "hidden";
            // saveToStorage();
            }
        });
   
    //append elements
        modalContent.append(close, titleEl, desc, checklist, priorityDiv);
        modal.append(modalContent);
        body.append(modal);
        modal.style.visibility = "hidden";

    // item event listener
        button.addEventListener("click", () => {
            modal.style.visibility = "visible";
            // console.log(itemObject.title);
            // itemObject.description = desc.value;
            // // console.log(newItem.checklist);
            // console.log(itemObject.description);
        });

};

/***/ }),

/***/ "./src/functions/saveToStorage.js":
/*!****************************************!*\
  !*** ./src/functions/saveToStorage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ saveToStorage)
/* harmony export */ });

function saveToStorage (object) {

    //save data on new project (list) create or new Item create

    localStorage.setItem("pageLoad", "boom Shaka");
    localStoarge.setItem("pageData", object);
    // [list][item][title, description, due date, priority, notes, checklist]
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _functions_initLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/initLoad */ "./src/functions/initLoad.js");
/* harmony import */ var _functions_chgPriority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/chgPriority */ "./src/functions/chgPriority.js");
/* harmony import */ var _functions_createList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/createList */ "./src/functions/createList.js");
// object constructor for each to do

// properties title, description, duedate, priority, notes, checklist

//project cards with tiles

// app opens with default project, user creates to dos and sorts them into projects

// everything in separate modules 
// chg priority, mark as complete, make new todos etc.
// dom should be separate

// local storage uses json. figure out how to store and retrieve it
// figure out how to add methods back to object properties after they are fetched.


// import ToDoItem from "./functions/createToDo";



(0,_functions_initLoad__WEBPACK_IMPORTED_MODULE_1__["default"])();
// const item1 = new ToDoItem ("Description", "4/5", "High Priority","Notes","Add checklist");
// console.log(item1.desc, item1.dueDate);




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEIscUJBQXFCO0FBQ3JCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcsT0FBTyx1RkFBdUYsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssc0JBQXNCLHVCQUF1QixxQkFBcUIsV0FBVyxVQUFVLG9CQUFvQix1QkFBdUIsdUJBQXVCLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksK0JBQStCLG1FQUFtRSxvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsa0NBQWtDLGtCQUFrQixrQkFBa0IsbUJBQW1CLHVCQUF1QixzQkFBc0IsR0FBRyxhQUFhLG9CQUFvQiwwQkFBMEIsbUJBQW1CLHNCQUFzQixxQ0FBcUMsMEJBQTBCLHVCQUF1QixvQkFBb0Isb0JBQW9CLEdBQUcsZ0JBQWdCLHdCQUF3QixHQUFHLGlCQUFpQiwwQkFBMEIsd0JBQXdCLEdBQUcsYUFBYSxvQkFBb0IsY0FBYywwQkFBMEIsa0NBQWtDLGtCQUFrQixxQkFBcUIsbUJBQW1CLEdBQUcsVUFBVSxvQkFBb0IsNkJBQTZCLHdCQUF3Qix5QkFBeUIsK0JBQStCLGdDQUFnQyw4QkFBOEIsOEJBQThCLHlCQUF5Qix1QkFBdUIsNkJBQTZCLHVCQUF1Qix3QkFBd0IsS0FBSyxtQkFBbUIsYUFBYSxHQUFHLHdCQUF3Qix1QkFBdUIsbUJBQW1CLG9CQUFvQixnQkFBZ0IsU0FBUyxzQkFBc0IsdUJBQXVCLGtDQUFrQyx3QkFBd0IsbUNBQW1DLEtBQUssWUFBWSxtQkFBbUIsR0FBRyxrQkFBa0Isd0JBQXdCLGtDQUFrQyxHQUFHLFdBQVcscUJBQXFCLGdDQUFnQyx3QkFBd0IsbUNBQW1DLHlCQUF5QixHQUFHLGFBQWEsdUJBQXVCLHFDQUFxQyxzQkFBc0IsR0FBRyxVQUFVLG1CQUFtQiw4QkFBOEIseUJBQXlCLDhCQUE4QixvRkFBb0Ysd0JBQXdCLHNCQUFzQixHQUFHLGlCQUFpQixtRUFBbUUsZ0NBQWdDLG1DQUFtQyx1QkFBdUIsbUJBQW1CLHlCQUF5QixHQUFHLGVBQWUsd0JBQXdCLGlDQUFpQyxrQ0FBa0MsR0FBRyxZQUFZLHNCQUFzQiw4Q0FBOEMscUNBQXFDLCtCQUErQixjQUFjLG1CQUFtQixvQ0FBb0MsdUNBQXVDLDZFQUE2RSxtREFBbUQsS0FBSyxxQkFBcUIsb0JBQW9CLDZCQUE2QixnQkFBZ0Isc0JBQXNCLGtCQUFrQixpQkFBaUIsaUJBQWlCLGtCQUFrQixxQkFBcUIsZ0NBQWdDLG1CQUFtQixvQkFBb0IsNkJBQTZCLDBCQUEwQixtREFBbUQsaUJBQWlCLEtBQUssYUFBYSx5QkFBeUIsZ0JBQWdCLGtCQUFrQixLQUFLLGFBQWEsdUJBQXVCLEtBQUsscUNBQXFDLHFCQUFxQixLQUFLLGlCQUFpQix3QkFBd0IsS0FBSyx3QkFBd0IscUNBQXFDLEtBQUssaUJBQWlCLHFCQUFxQixLQUFLLG9CQUFvQixxQkFBcUIsS0FBSyxzQkFBc0IsNEJBQTRCLEtBQUssbUJBQW1CO0FBQ24xSztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzNNMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDRnNDO0FBQ0c7O0FBRTFCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLHdEQUFRO0FBQ2pDLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNzQztBQUNRO0FBQ0Y7QUFDTjtBQUNHOzs7QUFHMUI7QUFDZjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdURBQVUsK0VBQStFO0FBQ3pHLHVFQUF1RTtBQUN2RSx1RUFBdUU7QUFDdkU7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzlJZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKc0M7QUFDRztBQUNIO0FBQ0E7O0FBRXZCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsd0RBQUs7QUFDbkM7QUFDQSx1Q0FBdUMsd0RBQVE7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHdEQUFLO0FBQzNDO0FBQ0EsWUFBWSx1REFBVSxnREFBZ0Q7QUFDdEU7QUFDQSxvRUFBb0U7QUFDcEU7QUFDQSxvRUFBb0U7QUFDcEU7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQix1REFBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25MZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNWZTtBQUNmO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDSjRDOztBQUU3Qjs7QUFFZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7Ozs7Ozs7Ozs7Ozs7O0FDbk1lOztBQUVmOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDNEI7QUFDZ0I7QUFDNUM7QUFDa0Q7QUFDTDs7QUFFN0MsK0RBQVE7QUFDUjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9jaGdQcmlvcml0eS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9jcmVhdGVMaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mdW5jdGlvbnMvZ2V0RnJvbVN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9pbml0TG9hZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL2l0ZW1Db25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL2xpc3RDb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZnVuY3Rpb25zL21vZGFsUG9wVXAuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Z1bmN0aW9ucy9zYXZlVG9TdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keXtcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xuICAgIGJvcmRlcjogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICAvKiB3aWR0aDogMTAwdnc7ICovXG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLyogcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDIwcHg7ICovXG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkZXJIZXJve1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4uaGVhZGVyTWVudSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbn1cblxuLmNvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmxpc3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8qIGZsZXg6IGluaXRpYWw7ICovXG4gICAgLyogaGVpZ2h0OiBhdXRvOyAqL1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBiYXNlbGluZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIC8qIHBhZGRpbmc6IDVweDsgKi9cbiAgICAvKiBtYXJnaW46IDVweDsgKi9cbn1cblxuLmFkZE5ld0xpc3REaXZ7XG4gICAgZmxleDoxO1xufVxuXG4ubGlzdCxcbi5uZXdMaXN0RGl2e1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZ2FwOiAxMHB4O1xuICAgIFxufVxuXG4uaXRlbSxcbi50b0RvRGl2IHtcbiAgICAvKiB3aWR0aDogOTByZW07ICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgc2t5Ymx1ZTtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xuXG59XG5cbiNhZGRCdG57XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4jYWRkQnRuOmhvdmVye1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcbn1cblxuLml0ZW1ze1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHNreWJsdWU7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5zYXZlRGl2e1xuICAgIC8qIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7ICovXG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnNhdmV7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2IoODIsIDE3NywgODIpLCByZ2IoMzcsIDEyNywgMzcpKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5hZGRMaXN0QnRuIHtcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgc2t5Ymx1ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmJ0bjpob3ZlcntcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG59XG5cbi5tb2RhbCB7XG4gICAgZGlzcGxheTogYmxvY2s7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xuICAgIGxlZnQ6IDAlO1xuICAgIHRvcDogMCU7XG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMTc1LCA4MCwgMC4wMSk7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIH1cblxuICAubW9kYWxDb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyMHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAxMi41JTtcbiAgICB0b3A6IDEyLjUlO1xuICAgIHdpZHRoOiA3NSU7XG4gICAgaGVpZ2h0OiA3NSU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjODg4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5jbG9zZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyNXB4O1xuICAgIHJpZ2h0OiAyNXB4O1xuICB9XG5cbiAgLnRpdGxle1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gIH1cblxuICBpbnB1dFt0eXBlPXRleHRdLFxuICB0ZXh0YXJlYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuaW5wdXRWYWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgY2hlY2tib3g6Y2hlY2tlZCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2ggO1xuICB9XG5cbiAgLmNoZWNrbGlzdHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5jaGVja2JveERpdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuY2hlY2tib3hMYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDREQUE0RDtJQUM1RCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkI7bUJBQ2U7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLE9BQU87SUFDUCxtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLE1BQU07QUFDVjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixTQUFTOztBQUViOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLDRCQUE0Qjs7QUFFaEM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtvQ0FDZ0M7SUFDaEMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qiw2RUFBNkU7SUFDN0UsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw0REFBNEQ7SUFDNUQseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksY0FBYyxFQUFFLHNCQUFzQjtJQUN0QyxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLFVBQVUsRUFBRSxlQUFlO0lBQzNCLFFBQVE7SUFDUixPQUFPO0lBQ1AsV0FBVyxFQUFFLGVBQWU7SUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixjQUFjLEVBQUUsNEJBQTRCO0lBQzVDLHlDQUF5QztJQUN6Qyw0Q0FBNEM7RUFDOUM7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztJQUNYLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDRDQUE0QztJQUM1QyxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTs7SUFFRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgLyogd2lkdGg6IDEwMHZ3OyAqL1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAyMHB4OyAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhlYWRlckhlcm97XFxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xcbn1cXG5cXG4uaGVhZGVyTWVudSB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xcbn1cXG5cXG4uY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmxpc3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGZsZXg6IGluaXRpYWw7ICovXFxuICAgIC8qIGhlaWdodDogYXV0bzsgKi9cXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBiYXNlbGluZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIC8qIHBhZGRpbmc6IDVweDsgKi9cXG4gICAgLyogbWFyZ2luOiA1cHg7ICovXFxufVxcblxcbi5hZGROZXdMaXN0RGl2e1xcbiAgICBmbGV4OjE7XFxufVxcblxcbi5saXN0LFxcbi5uZXdMaXN0RGl2e1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgXFxufVxcblxcbi5pdGVtLFxcbi50b0RvRGl2IHtcXG4gICAgLyogd2lkdGg6IDkwcmVtOyAqL1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBza3libHVlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG5cXG59XFxuXFxuI2FkZEJ0bntcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jYWRkQnRuOmhvdmVye1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xcbn1cXG5cXG4uaXRlbXN7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBza3libHVlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4uc2F2ZURpdntcXG4gICAgLyogZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7ICovXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5zYXZle1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2IoODIsIDE3NywgODIpLCByZ2IoMzcsIDEyNywgMzcpKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmFkZExpc3RCdG4ge1xcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHNreWJsdWU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uYnRuOmhvdmVye1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogYmxvY2s7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICAgIGxlZnQ6IDAlO1xcbiAgICB0b3A6IDAlO1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAxNzUsIDgwLCAwLjAxKTtcXG4gICAgYm94LXNoYWRvdzogMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICB9XFxuXFxuICAubW9kYWxDb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDEyLjUlO1xcbiAgICB0b3A6IDEyLjUlO1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBoZWlnaHQ6IDc1JTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzg4ODtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxuXFxuICAuY2xvc2V7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyNXB4O1xcbiAgICByaWdodDogMjVweDtcXG4gIH1cXG5cXG4gIC50aXRsZXtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gIH1cXG5cXG4gIGlucHV0W3R5cGU9dGV4dF0sXFxuICB0ZXh0YXJlYSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcblxcbiAgLmlucHV0VmFsIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuXFxuICBjaGVja2JveDpjaGVja2VkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2ggO1xcbiAgfVxcblxcbiAgLmNoZWNrbGlzdHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxuICAuY2hlY2tib3hEaXYge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG4gIC5jaGVja2JveExhYmVsIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGdQcmlvcml0eShpdGVtLCBsZXZlbCkge1xuICAgIGl0ZW0ucHJpb3JpdHkgPSBsZXZlbDtcbn0iLCJpbXBvcnQgbW9kYWxQb3BVcCBmcm9tIFwiLi9tb2RhbFBvcFVwXCI7XG5pbXBvcnQgVG9Eb0l0ZW0gZnJvbSBcIi4vaXRlbUNvbnN0cnVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUl0ZW0obGlzdEluZGV4LCBwYWdlT2JqZWN0LCBpdGVtT2JqZWN0KSB7XG4gICAgLy8gY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW1zXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKGxpc3RJbmRleCk7XG4gICAgLy8gY29uc29sZS5sb2coaXRlbSk7XG4gICAgY29uc29sZS5sb2coaXRlbU9iamVjdCk7XG4gICAgY29uc29sZS5sb2codHlwZW9mKGl0ZW1PYmplY3QpKTtcbiAgICAvLyBpdGVtT2JqZWN0LnRpdGxlID0gaXRlbU9iamVjdFRpdGxlO1xuICAgIGNvbnN0IGxpc3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpc3RcIiArIGxpc3RJbmRleCk7XG4gICAgLy8gY29uc3QgYWRkSXRlbUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBsaXN0LmlkICsgXCJhZGRJdGVtQnRuXCIpO1xuICAgIGNvbnN0IGFkZEl0ZW1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZEl0ZW1CdG5cIitsaXN0SW5kZXgpO1xuXG4gICAgY29uc3QgaXRlbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgLy8gaXRlbUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBsaXN0LmlkICsgXCJpdGVtXCIgKyAoaXRlbXMubGVuZ3RoICsgMSkpO1xuICAgIGl0ZW1CdXR0b24uY2xhc3NOYW1lID0gXCJpdGVtc1wiO1xuXG4gICAgXG4gICAgaWYgKGl0ZW1PYmplY3QgPT09IFN0cmluZykge1xuICAgICAgICBpdGVtT2JqZWN0ID0gbmV3IFRvRG9JdGVtKCk7XG4gICAgICAgIGl0ZW1PYmplY3QudGl0bGUgPSBpdGVtT2JqZWN0VGl0bGU7ICAgICAgICAgICAvL2NyZWF0ZSBuZXcgaXRlbSBvYmplY3QgdXNpbmcgY29uc3RydWN0b3IsIHRoZW4gY2hnIHZhbHVlcyBpbiBtb2RhbHBvcHVwLlxuICAgIH1cbiAgICBcbiAgICBwYWdlT2JqZWN0Lmxpc3RzW2xpc3RJbmRleF0uaXRlbXMucHVzaChpdGVtT2JqZWN0KTtcbiAgICBjb25zb2xlLmxvZyhwYWdlT2JqZWN0KTtcblxuICAgIGl0ZW1CdXR0b24udGV4dENvbnRlbnQgPSBpdGVtT2JqZWN0LnRpdGxlO1xuXG4gICAgLy8gbW9kYWxQb3BVcChsaXN0SW5kZXgsIGl0ZW1CdXR0b24sIGl0ZW1PYmplY3QsIGl0ZW1CdXR0b24uaWQpO1xuICAgIC8vIG1vZGFsUG9wVXAoaXRlbUJ1dHRvbiwgbmV3SXRlbSk7XG5cbiAgICBsaXN0RGl2Lmluc2VydEJlZm9yZShpdGVtQnV0dG9uLCBhZGRJdGVtQnV0dG9uKTsgXG4gICAgICAgIFxuICAgIC8vIGFkZEl0ZW1CdXR0b24uc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIiBcIik7XG4gICAgYWRkSXRlbUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiQWRkIENhcmQuLi5cIik7XG4gICAgYWRkSXRlbUJ1dHRvbi5ibHVyKCk7XG5cbiAgICBcbn07IiwiLy8gbW9kdWxlIHRvIGFkZCBhIHByb2plY3QgbGlzdCB0byB0aGUgaW50ZXJmYWNlXG5pbXBvcnQgY3JlYXRlSXRlbSBmcm9tIFwiLi9jcmVhdGVJdGVtXCI7XG5pbXBvcnQgZ2V0RnJvbVN0b3JhZ2UgZnJvbSBcIi4vZ2V0RnJvbVN0b3JhZ2VcIjtcbmltcG9ydCBzYXZlVG9TdG9yYWdlIGZyb20gXCIuL3NhdmVUb1N0b3JhZ2VcIjtcbmltcG9ydCBMaXN0cyBmcm9tIFwiLi9saXN0Q29uc3RydWN0b3JcIjtcbmltcG9ydCBUb0RvSXRlbSBmcm9tIFwiLi9pdGVtQ29uc3RydWN0b3JcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVMaXN0KGxpc3RJbmRleCwgcGFnZU9iamVjdCkge1xuICAgICAgICBsZXQgbmV3TGlzdCA9IHBhZ2VPYmplY3QubGlzdHNbbGlzdEluZGV4XTtcbiAgICAgICAgY29uc29sZS5sb2cocGFnZU9iamVjdC5saXN0c1tsaXN0SW5kZXhdKTtcblxuXG4gICAgICAgIC8vIHF1ZXJpZXNcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgICAgICAgICBjb25zdCBhZGROZXdMaXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdMaXN0RGl2XCIpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBsaXN0XG4gICAgICAgICAgICBjb25zdCBsaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGxpc3REaXYuY2xhc3NOYW1lID0gXCJsaXN0XCI7XG4gICAgICAgICAgICBsaXN0RGl2LmlkID0gXCJsaXN0XCIgKyBsaXN0SW5kZXg7XG5cbiAgICAgICAgLy8gbGlzdCB0aXRsZVxuXG4gICAgICAgICAgICBjb25zdCBsaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbGlzdFRpdGxlLmlkID0gXCJsaXN0VGl0bGVcIjtcbiAgICAgICAgICAgIGxpc3RUaXRsZS5jbGFzcyA9ICBcIlRpdGxlXCI7XG5cbiAgICAgICAgICAgIGNvbnN0IGxpc3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgbGlzdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRhcmVhXCIpO1xuICAgICAgICAgICAgbGlzdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaXN0VGl0bGVJbnB1dFwiKTtcbiAgICAgICAgICAgIGxpc3RUaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIixcImxpc3RUaXRsZVwiKTtcbiAgICAgICAgICAgIC8vIGlmIChpbml0SXRlbS50aXRsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyAgICAgbGlzdFRpdGxlLnRleHRDb250ZW50ID0gXCJUaXRsZS4uLlwiO1xuICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgIGxpc3RUaXRsZS50ZXh0Q29udGVudCA9IG5ld0xpc3QubGlzdFRpdGxlO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsaXN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsaXN0VGl0bGUucmVwbGFjZVdpdGgobGlzdFRpdGxlSW5wdXQpO1xuICAgICAgICAgICAgICAgIGxpc3RUaXRsZUlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgbmV3TGlzdC5saXN0VGl0bGUgPSBsaXN0VGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICAvLyBzYXZlRGl2LnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxpc3RUaXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBuZXdMaXN0Lmxpc3RUaXRsZSA9IGxpc3RUaXRsZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBsaXN0VGl0bGUudGV4dENvbnRlbnQgPSBuZXdMaXN0Lmxpc3RUaXRsZTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdFRpdGxlSW5wdXQuYmx1cigpO1xuICAgICAgICAgICAgICAgICAgICBsaXN0VGl0bGVJbnB1dC5yZXBsYWNlV2l0aChsaXN0VGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9IGxpc3RUaXRsZUlucHV0ICYmIGV2ZW50LnRhcmdldCAhPSBsaXN0VGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdFRpdGxlSW5wdXQucmVwbGFjZVdpdGgobGlzdFRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICBzYXZlRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZURpdi5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGlzdERpdi5hcHBlbmQobGlzdFRpdGxlKTtcblxuICAgICAgICAvL2FkZCBpdGVtIGJ1dHRvblxuXG4gICAgICAgICAgICBjb25zdCBhZGRJdGVtSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBhZGRJdGVtSW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIkFkZCBDYXJkLi4uXCIpO1xuICAgICAgICAgICAgYWRkSXRlbUlucHV0LnBsYWNlaG9sZGVyID0gXCJBZGQgQ2FyZC4uLlwiO1xuICAgICAgICAgICAgYWRkSXRlbUlucHV0LnNldEF0dHJpYnV0ZShcIm9uZm9jdXNcIixcInRoaXMudmFsdWU9JydcIik7XG4gICAgICAgICAgICBhZGRJdGVtSW5wdXQuc2V0QXR0cmlidXRlKFwib25mb2N1c291dFwiLFwidGhpcy52YWx1ZT0nQWRkIENhcmQuLi4nXCIpO1xuICAgICAgICAgICAgYWRkSXRlbUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICAgICAgYWRkSXRlbUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkSXRlbUJ0blwiK2xpc3RJbmRleCk7XG4gICAgICAgICAgICBhZGRJdGVtSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiYWRkQnRuXCIpO1xuXG4gICAgICAgICAgICBhZGRJdGVtSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBsaXN0LmFwcGVuZChzYXZlRGl2KTtcbiAgICAgICAgICAgICAgICBzYXZlRGl2LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGFkZEl0ZW1JbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHNhdmVCdG4uY2xpY2soKTtcbiAgICAgICAgICAgICAgICBhZGRJdGVtSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhZGRJdGVtSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFkZEl0ZW1JbnB1dC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSk7XG4gICAgICAgICAgICAgICAgLy8gbGlzdC5hcHBlbmQoc2F2ZURpdik7XG4gICAgICAgICAgICAgICAgc2F2ZURpdi5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsaXN0RGl2LmFwcGVuZChhZGRJdGVtSW5wdXQpO1xuICAgICAgIFxuICAgICAgICAvLyBzYXZlL2NhbmNlbCBpbnB1dCBidXR0b25zXG5cbiAgICAgICAgICAgIGNvbnN0IHNhdmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgc2F2ZURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwic2F2ZURpdlwiKTtcblxuICAgICAgICAgICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBzYXZlQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2F2ZUJ0blwiKTtcbiAgICAgICAgICAgIHNhdmVCdG4uY2xhc3NOYW1lID0gXCJzYXZlXCJcbiAgICAgICAgICAgIHNhdmVCdG4udGV4dENvbnRlbnQgPSBcIlNhdmVcIjtcbiAgICAgICAgICAgIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBuZXdJdGVtID0gbmV3IFRvRG9JdGVtXG4gICAgICAgICAgICAgICAgLy8gbmV3SXRlbS50aXRsZSA9IGFkZEl0ZW1JbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICBjcmVhdGVJdGVtKGxpc3RJbmRleCwgcGFnZU9iamVjdCwgYWRkSXRlbUlucHV0LnZhbHVlKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBpdGVtXG4gICAgICAgICAgICAgICAgLy8gc2F2ZVRvU3RvcmFnZSgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNhdmUgdG8gc3RvcmFnZVxuICAgICAgICAgICAgICAgIC8vIGdldEZyb21TdG9yYWdlKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBnZXQgZnJvbSBzdG9yYWdlXG4gICAgICAgICAgICAgICAgc2F2ZURpdi5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgICAgICAvLyBzYXZlRGl2LnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYW5jZWxCdG5cIik7XG4gICAgICAgICAgICBjYW5jZWxCdG4uaW5uZXJIVE1MID0gXCImdGltZXNcIjtcblxuICAgICAgICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2F2ZURpdi5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgICAgICAvLyBzYXZlRGl2LnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNhdmVEaXYuYXBwZW5kKHNhdmVCdG4sY2FuY2VsQnRuKTtcbiAgICAgICAgICAgIGxpc3REaXYuYXBwZW5kKHNhdmVEaXYpO1xuICAgICAgICAgICAgc2F2ZURpdi5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcblxuXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPSBhZGRJdGVtSW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgIHNhdmVEaXYuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICAgICAgLy8gc2F2ZURpdi5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBjb250ZW50RGl2Lmluc2VydEJlZm9yZShsaXN0RGl2LCBhZGROZXdMaXN0RGl2KTtcblxuICAgICAgICAvLyBhZGRJdGVtSW5wdXQuZm9jdXMoKTtcblxuICAgICAgICAvLyBsaXN0VGl0bGVJbnB1dC5mb2N1cygpO1xuICAgIH07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RnJvbVN0b3JhZ2UoKSB7XG4gICAgY29uc3QgcGFnZUxvYWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBhZ2VMb2FkXCIpO1xuICAgIGNvbnN0IHBhZ2VEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwYWdlRGF0YVwiKTtcbiAgICBjb25zb2xlLmxvZyhwYWdlRGF0YSk7XG59IiwiaW1wb3J0IGNyZWF0ZUxpc3QgZnJvbSBcIi4vY3JlYXRlTGlzdFwiO1xuaW1wb3J0IFRvRG9JdGVtIGZyb20gXCIuL2l0ZW1Db25zdHJ1Y3RvclwiO1xuaW1wb3J0IExpc3RzIGZyb20gXCIuL2xpc3RDb25zdHJ1Y3RvclwiO1xuaW1wb3J0IGNyZWF0ZUl0ZW0gZnJvbSBcIi4vY3JlYXRlSXRlbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0TG9hZCgpIHtcbiAgICBjb25zdCBwYWdlT2JqZWN0ID0ge1xuICAgICAgICBsaXN0czogW1xuICAgICAgICBdLFxuICAgIH07XG4gICAgcGFnZU9iamVjdC5saXN0c1swXSA9IG5ldyBMaXN0cyhcIkxpc3R5IDFcIik7XG4gICAgLy8gcGFnZU9iamVjdC5saXN0c1swXS5saXN0VGl0bGUgPSBcIkxpc3QgMVwiO1xuICAgIHBhZ2VPYmplY3QubGlzdHNbMF0uaXRlbXNbMF0gPSBuZXcgVG9Eb0l0ZW07XG4gICAgcGFnZU9iamVjdC5saXN0c1swXS5pdGVtc1swXS50aXRsZSA9IFwiSXRlbSAxXCI7XG4gICAgLy8gcGFnZU9iamVjdC5saXN0c1swXS5pdGVtc1sxXSA9IG5ldyBUb0RvSXRlbTtcbiAgICAvLyBwYWdlT2JqZWN0Lmxpc3RzWzBdLml0ZW1zWzFdLnRpdGxlID0gXCJMaXN0MSBpdGVtIDJcIjtcbiAgICAvLyBwYWdlT2JqZWN0Lmxpc3RzWzFdID0gbmV3IExpc3RzO1xuICAgIC8vIHBhZ2VPYmplY3QubGlzdHNbMV0ubGlzdFRpdGxlID0gXCJMaXN0IDJcIjtcbiAgICAvLyBwYWdlT2JqZWN0Lmxpc3RzWzFdLml0ZW1zWzBdID0gbmV3IFRvRG9JdGVtO1xuICAgIC8vIHBhZ2VPYmplY3QubGlzdHNbMV0uaXRlbXNbMF0udGl0bGUgPSBcIkxpc3QyIEl0ZW0xXCJcbiAgICAvLyBwYWdlT2JqZWN0Lmxpc3RzWzJdID0gbmV3IExpc3RzO1xuICAgIC8vIHBhZ2VPYmplY3QubGlzdHNbMl0ubGlzdFRpdGxlID0gXCJMaXN0IDNcIjtcblxuICAgIC8vIGNvbnNvbGUubG9nKHBhZ2VPYmplY3QpO1xuXG4gICAgLy9yZW5kZXIgcGFnZSBmdW5jdGlvblxuICAgIC8vIGZvciBlYWNoIGxpc3QgaW4gcGFnZSBvYmplY3QsIGNyZWF0ZWxpc3QoKTt4XG4gICAgXG4gICAgLy8gYWRkIGlmIHN0YXRlbWVudHMgdG8gY3JlYXRlbGlzdCBhbmQgY3JlYXRlaXRlbSBmb3IgcHJvY2Vzc2luZyBkYXRhLiBpZiBubyBkYXRhLCBoYXZlIGRlZmF1bHRzIHJlYWR5LlxuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbiAgICAvLyBjcmVhdGUgaGVhZGVyIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhlYWRlci5jbGFzc05hbWUgPSBcImhlYWRlclwiO1xuXG4gICAgICAgIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaGVhZGVyVGl0bGUuY2xhc3NOYW1lID0gXCJoZWFkZXJUaXRsZVwiO1xuICAgICAgICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiTGVtb25KZWxsb1wiO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRlck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBoZWFkZXJNZW51LmNsYXNzTmFtZSA9IFwiaGVhZGVyTWVudVwiO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTWVudSk7XG4gICAgICAgIFxuICAgICAgICAvLyBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgLy8gbWVudUJ1dHRvbi5jbGFzc05hbWUgPSBcImJ0blwiO1xuICAgICAgICAvLyBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gKFwiTUVOVVwiKTtcbiAgICAgICAgLy8gaGVhZGVyTWVudS5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcblxuICAgIC8vIGNyZWF0ZSBjb250ZW50IGRpdlxuICAgICAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udGVudERpdi5jbGFzc05hbWUgPSBcImNvbnRlbnRcIjtcblxuICAgICAgICBib2R5LmFwcGVuZChoZWFkZXIsIGNvbnRlbnREaXYpO1xuXG4gICAgLy8gY3JlYXRlIG5ld0xpc3REaXZcblxuICAgICAgICBjb25zdCBuZXdMaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmV3TGlzdERpdi5jbGFzc05hbWUgPSBcIm5ld0xpc3REaXZcIjtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmQobmV3TGlzdERpdik7XG4gICAgXG4gICAgLy8gYWRkTGlzdCBidXR0b24gYW5kIGlucHV0XG5cblxuICAgICAgICBjb25zdCBhZGRMaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYWRkTGlzdEJ0bi5jbGFzc05hbWUgPSBcImFkZExpc3RCdG5cIjtcbiAgICAgICAgLy8gYWRkTGlzdEJ0bi5zZXRBdHRyaWJ1dGUoXCJvbmZvY3VzXCIsXCJ0aGlzLnZhbHVlPScnXCIpO1xuICAgICAgICBhZGRMaXN0QnRuLnRleHRDb250ZW50ID0gXCJBZGQgTmV3IExpc3QuLlwiO1xuICAgICAgICBhZGRMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBhZGRMaXN0QnRuLnJlcGxhY2VXaXRoKGFkZExpc3RJbnB1dCk7XG4gICAgICAgICAgICBhZGRMaXN0SW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgIHNhdmVEaXYuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjb25zdCBhZGRMaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAvLyBhZGRMaXN0QnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICAvLyBhZGRMaXN0QnRuLmNsYXNzTmFtZSA9IFwiYWRkTGlzdEJ0blwiO1xuICAgICAgICAvLyAvLyBhZGRMaXN0QnRuLnNldEF0dHJpYnV0ZShcIm9uZm9jdXNcIixcInRoaXMudmFsdWU9JydcIik7XG4gICAgICAgIC8vIGFkZExpc3RCdG4udmFsdWUgPSBcIkFkZCBOZXcgTGlzdC4uXCI7XG4gICAgICAgIC8vIGFkZExpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgLy8gICAgIC8vIGFkZExpc3RCdG4ucmVwbGFjZVdpdGgoYWRkTGlzdElucHV0KTtcbiAgICAgICAgLy8gICAgIC8vIGFkZExpc3RCdG4udmFsdWUgPSAnICc7XG4gICAgICAgIC8vICAgICBhZGRMaXN0QnRuLnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgLy8gICAgIGFkZExpc3RCdG4uY2xhc3NOYW1lID0gXCJhZGRMaXN0SW5wdXRcIjtcbiAgICAgICAgLy8gICAgIGFkZExpc3RCdG4ucGxhY2Vob2xkZXIgPSBcIkFkZCBOZXcgTGlzdC4uLiBidWRkeVwiO1xuICAgICAgICAvLyAgICAgLy8gYWRkTGlzdEJ0bi52YWx1ZSA9IFwiXCI7XG4gICAgICAgIC8vICAgICBhZGRMaXN0QnRuLmZvY3VzKCk7XG4gICAgICAgIC8vICAgICAvLyBhZGRMaXN0SW5wdXQuZm9jdXMoKTtcbiAgICAgICAgLy8gICAgIHNhdmVEaXYuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAvLyB9KTtcblxuICAgICAgICBjb25zdCBhZGRMaXN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGFkZExpc3RJbnB1dC5jbGFzc05hbWUgPSBcImFkZExpc3RJbnB1dFwiO1xuICAgICAgICBhZGRMaXN0SW5wdXQucGxhY2Vob2xkZXIgPSBcIkFkZCBOZXcgTGlzdC4uLlwiXG4gICAgICAgIGFkZExpc3RJbnB1dC5vbmZvY3VzID0gKCkgPT4ge1xuICAgICAgICAgICAgc2F2ZURpdi5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgIH1cblxuICAgIC8vIHNhdmUgJiBjYW5jZWwgYnV0dG9uc1xuXG4gICAgICAgIGNvbnN0IHNhdmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzYXZlRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJzYXZlRGl2XCIpO1xuICAgICAgICBzYXZlRGl2LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuXG4gICAgICAgIGNvbnN0IGFkZExpc3RTYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYWRkTGlzdFNhdmVCdG4uY2xhc3NOYW1lID0gXCJzYXZlXCJcbiAgICAgICAgYWRkTGlzdFNhdmVCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGRMaXN0U2F2ZUJ0blwiKTtcbiAgICAgICAgYWRkTGlzdFNhdmVCdG4udGV4dENvbnRlbnQgPSBcIlNhdmVcIjtcbiAgICAgICAgYWRkTGlzdFNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHBhZ2VPYmplY3QubGlzdHMucHVzaChuZXcgTGlzdHMoYWRkTGlzdElucHV0LnZhbHVlKSk7XG4gICAgICAgICAgICBjb25zdCBudW1MaXN0cyA9IHBhZ2VPYmplY3QubGlzdHMubGVuZ3RoLTE7XG4gICAgICAgICAgICBjcmVhdGVMaXN0KG51bUxpc3RzLCBwYWdlT2JqZWN0KTsgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlIGxpc3QsIHBhc3MgdGhlICdhZGQgbGlzdCcgaW5wdXQgdmFsdWUgYXMgdGhlIHRpdGxlXG4gICAgICAgICAgICBzYXZlRGl2LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgYWRkTGlzdEJ0bi52YWx1ZSA9IFwiQWRkIE5ldyBMaXN0Li4uXCI7ICAgICAgICAgICAgICAgICAgIC8vIHJlc2V0IHRoZSAnYWRkIGxpc3QnIGJ1dHRvbiB2YWx1ZVxuICAgICAgICAgICAgYWRkTGlzdElucHV0LnNldEF0dHJpYnV0ZShcIm9uZm9jdXNcIixcInRoaXMudmFsdWU9JydcIik7XG4gICAgICAgICAgICBhZGRMaXN0SW5wdXQucmVwbGFjZVdpdGgoYWRkTGlzdEJ0bik7ICAgICAgICAgICAgICAgICAgIC8vIHJlcGxhY2UgaW5wdXQgd2l0aCBidXR0b25cbiAgICAgICAgICAgIC8vIGFkZExpc3RCdG4udmFsdWUgPSBcIkFkZCBOZXcgTGlzdC4uLlwiO1xuICAgICAgICAgICAgLy8gYWRkTGlzdEJ0bi5zZXRBdHRyaWJ1dGUoXCJvbmZvY3VzXCIsXCJ0aGlzLnZhbHVlPScnXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYW5jZWxCdG5cIik7XG4gICAgICAgIGNhbmNlbEJ0bi5pbm5lckhUTUwgPSBcIiZ0aW1lc1wiO1xuXG4gICAgICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc2F2ZURpdi5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgIC8vIHNhdmVEaXYucmVtb3ZlKCk7XG4gICAgICAgICAgICBhZGRMaXN0SW5wdXQucGxhY2Vob2xkZXIgPSBcIkFkZCBOZXcgTGlzdC4uLlwiXG4gICAgICAgICAgICBhZGRMaXN0SW5wdXQucmVwbGFjZVdpdGgoYWRkTGlzdEJ0bik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNhdmVEaXYuYXBwZW5kKGFkZExpc3RTYXZlQnRuLGNhbmNlbEJ0bik7XG5cbiAgICAgICAgXG5cbiAgICAgICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKChldmVudC50YXJnZXQgIT0gYWRkTGlzdFNhdmVCdG4pICYmIChldmVudC50YXJnZXQgIT0gYWRkTGlzdElucHV0KSAmJiAoZXZlbnQudGFyZ2V0ICE9IGFkZExpc3RCdG4pKSB7XG4gICAgICAgICAgICAgICAgc2F2ZURpdi5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBhZGRMaXN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBhZGRMaXN0U2F2ZUJ0bi5jbGljaygpO1xuICAgICAgICAgICAgLy8gY29uc3QgbGlzdE5hbWUgPSBhZGRMaXN0SW5wdXQudmFsdWVcbiAgICAgICAgICAgIC8vIG5ld0xpc3REaXYuYXBwZW5kKHNhdmVEaXYpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBuZXdMaXN0RGl2LmFwcGVuZENoaWxkKGFkZExpc3RCdG4pO1xuICAgICAgICBuZXdMaXN0RGl2LmFwcGVuZChzYXZlRGl2KTtcblxuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgbGlzdEluZGV4IGluIHBhZ2VPYmplY3QubGlzdHMpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGxpc3RJbmRleCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwYWdlT2JqZWN0Lmxpc3RzW2xpc3RJbmRleF0pO1xuICAgICAgICAgICAgY3JlYXRlTGlzdChsaXN0SW5kZXgsIHBhZ2VPYmplY3QpO1xuICAgICAgICAgICAgZm9yIChsZXQgaXRlbUluZGV4IGluIHBhZ2VPYmplY3QubGlzdHNbbGlzdEluZGV4XS5pdGVtcykge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGxpc3RJbmRleCArIFwiLFwiICsgcGFnZU9iamVjdC5saXN0c1tsaXN0SW5kZXhdLml0ZW1zW2l0ZW1JbmRleF0udGl0bGUpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW1JbmRleCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGFnZU9iamVjdC5saXN0c1tsaXN0SW5kZXhdLml0ZW1zW2l0ZW1JbmRleF0pO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtT2JqZWN0ID0gcGFnZU9iamVjdC5saXN0c1tsaXN0SW5kZXhdLml0ZW1zW2l0ZW1JbmRleF07XG5cbiAgICAgICAgICAgICAgICBjcmVhdGVJdGVtKGxpc3RJbmRleCwgcGFnZU9iamVjdCwgaXRlbU9iamVjdCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbUNvbnRlbnQgaW4gaXRlbU9iamVjdCl7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBhZ2VPYmplY3QubGlzdHNbbGlzdEluZGV4XS5pdGVtc1tpdGVtSW5kZXhdW2l0ZW1Db250ZW50XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIC8vIGNvbnN0IGluaXRJdGVtID0gbmV3IFRvRG9JdGVtKCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cocGFnZU9iamVjdCk7XG5cbiAgICAvLyBhcHBlbmQgYnV0dG9uc1xuICAgIFxuICAgIC8vYXBwZW5kIGRpdnNcbn07IiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb0RvSXRlbSAobGlzdCkge1xuICAgIC8vIHRoaXMubGlzdCA9IGxpc3Q7XG4gICAgLy8gdGhpcy5pdGVtID0gaXRlbTtcbiAgICB0aGlzLnRpdGxlID0gXCJJdGVtIFRpdGxlIEZvb2wuLi5cIjtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJEZXNjcmlwdGlvbiB0ZXN0XCI7XG4gICAgdGhpcy5kdWVEYXRlID0gXCJUb2RheSB0ZXN0XCI7XG4gICAgdGhpcy5wcmlvcml0eSA9IFwiaGlnaCB0ZXN0XCI7XG4gICAgdGhpcy5ub3RlcyA9IFwiTm90ZXMgdGVzdFwiO1xuICAgIHRoaXMuY2hlY2tMaXN0VGl0bGUgPSBcIkNoZWNrbGlzdFwiO1xuICAgIHRoaXMuY2hlY2tsaXN0ID0gW107XG59OyIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdHMgKHRpdGxlKSB7XG4gICAgdGhpcy5saXN0VGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLml0ZW1zID0gW107XG59OyIsImltcG9ydCBzYXZlVG9TdG9yYWdlIGZyb20gXCIuL3NhdmVUb1N0b3JhZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWxQb3BVcChsaXN0SW5kZXgsIGl0ZW1CdXR0b24sIGl0ZW1PYmplY3QpIHtcblxuICAgIC8vIGNvbnNvbGUubG9nKGxpc3RJbmRleCk7XG4gICAgLy8gY29uc29sZS5sb2coaXRlbUJ1dHRvbik7XG4gICAgLy8gY29uc29sZS5sb2coaXRlbU9iamVjdCk7XG5cbiAgICAvLyBkZWZpbmUgaXRlbVxuICAgICAgICBjb25zdCBidXR0b24gPSBpdGVtQnV0dG9uO1xuXG4gICAgLy8gY3JlYXRlIG1vZGFsXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIC8vIG1vZGFsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibW9kYWxcIisgaXRlbUlEKTtcbiAgICAgICAgbW9kYWwuY2xhc3NOYW1lID0gXCJtb2RhbFwiO1xuICAgICAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtb2RhbENvbnRlbnQuY2xhc3NOYW1lID0gXCJtb2RhbENvbnRlbnRcIjtcblxuICAgIC8vIGNsb3NlIGJ1dHRvblxuICAgICAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNsb3NlLmNsYXNzTmFtZSA9IFwiY2xvc2VcIjtcbiAgICAgICAgY2xvc2UuaW5uZXJIVE1MID0gXCImdGltZXM7XCI7XG4gICAgICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICB9KTtcbiAgICBcbiAgICAvLyB0aXRsZVxuICAgICAgICBjb25zdCB0aXRsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgLy8gbmV3SXRlbS50aXRsZSA9IGl0ZW0udGV4dENvbnRlbnQ7XG4gICAgICAgIHRpdGxlRWwuY2xhc3NOYW1lID0gXCJ0aXRsZVwiO1xuICAgICAgICB0aXRsZUVsLnRleHRDb250ZW50ID0gaXRlbU9iamVjdC50aXRsZSArIFwiIGluIExpc3QgXCIgKyAoTnVtYmVyKGxpc3RJbmRleCkrMSk7XG4gICAgICAgIFxuICAgICAgICAvLyBjb25zdCBsaXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAvLyBjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCIjXCIpXG4gICAgICAgIC8vIGxpc3RFbC50ZXh0Q29udGVudCA9IFwiaW4gbGlzdDpcIiArIFxuXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICAgICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgZGVzYy5jbGFzc05hbWUgPSBcImRlc2NcIjtcbiAgICAgICAgZGVzYy5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRlc2NyaXB0aW9uLi5cIik7XG4gICAgICAgIGRlc2Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjXCIpO1xuICAgICAgICBkZXNjLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcImRlc2NcIik7XG4gICAgICAgIGlmIChkZXNjLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICBkZXNjLnZhbHVlID0gaXRlbU9iamVjdC5kZXNjcmlwdGlvbjsgXG4gICAgICAgIH1cbiAgICAgICAgZGVzYy5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGl0ZW1PYmplY3QuZGVzY3JpcHRpb24gPSBkZXNjLnZhbHVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbU9iamVjdC5kZXNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAvLyBjaGVja2xpc3RcbiAgICAgICAgY29uc3QgY2hlY2tsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2hlY2tsaXN0LmNsYXNzTmFtZSA9IFwiY2hlY2tsaXN0XCI7XG4gICAgICAgIC8vIGNoZWNrbGlzdC5pZCA9IFwiY2hlY2tsaXN0XCIgKyBpZDtcbiAgICAgICAgY29uc3QgY2hlY2tsaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjaGVja2xpc3RUaXRsZS50ZXh0Q29udGVudCA9IGl0ZW1PYmplY3QuY2hlY2tMaXN0VGl0bGU7XG4gICAgICAgIGNoZWNrbGlzdFRpdGxlLmNsYXNzTmFtZSA9IFwiY2hlY2tsaXN0VGl0bGVcIjtcbiAgICAgICAgY2hlY2tsaXN0LmFwcGVuZENoaWxkKGNoZWNrbGlzdFRpdGxlKTtcbiAgICAgICAgLy8gY29uc3QgY2hlY2tsaXN0Q29udGVudCA9IFtdO1xuXG4gICAgLy8gYWRkIGNoZWNrYm94IGJ1dHRvbiAvIGlucHV0XG5cbiAgICAgICAgY29uc3QgYWRkQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBhZGRDaGVja2JveC5jbGFzc05hbWUgPSBcImFkZENoZWNrQm94XCI7XG4gICAgICAgIGFkZENoZWNrYm94LnRleHRDb250ZW50ID0gXCJBZGQgSXRlbS4uLlwiO1xuXG4gICAgICAgIGNvbnN0IGFkZENoZWNrQm94SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGFkZENoZWNrQm94SW5wdXQudHlwZSA9IFwidGV4dEFyZWFcIjtcbiAgICAgICAgYWRkQ2hlY2tCb3hJbnB1dC5jbGFzc05hbWUgPSBcImFkZENoZWNrQm94SW5wdXRcIjtcbiAgICAgICAgXG4gICAgICAgIGNoZWNrbGlzdC5hcHBlbmRDaGlsZChhZGRDaGVja2JveCk7XG4gICAgICAgIFxuICAgIC8vIHNhdmUvY2FuY2VsIGJ1dHRvbnNcbiAgICAgICAgY29uc3Qgc2F2ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNhdmVEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInNhdmVEaXZcIik7XG5cbiAgICAgICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHNhdmVCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzYXZlQnRuXCIpO1xuICAgICAgICBzYXZlQnRuLmNsYXNzTmFtZSA9IFwic2F2ZVwiO1xuICAgICAgICBzYXZlQnRuLnRleHRDb250ZW50ID0gXCJTYXZlXCI7XG4gICAgICAgIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpdGVtT2JqZWN0LmNoZWNrbGlzdC5wdXNoKGFkZENoZWNrQm94SW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbU9iamVjdC5jaGVja2xpc3QpO1xuICAgICAgICAgICAgYWRkQ2hlY2tCb3goYWRkQ2hlY2tCb3hJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICBhZGRDaGVja0JveElucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICBhZGRDaGVja0JveElucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIGFkZENoZWNrQm94SW5wdXQucGxhY2Vob2xkZXIgPSBcIkFkZCBhbm90aGVyLi4uXCI7XG4gICAgICAgICAgICAvLyBjaGVja2JveExhYmVsLnBsYWNlaG9sZGVyID0gXCJBZGQgbmV3ZXIgSXRlbS4uXCI7XG4gICAgICAgICAgICAvLyBzYXZlRGl2LnJlbW92ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYW5jZWxCdG5cIik7XG4gICAgICAgIGNhbmNlbEJ0bi5pbm5lckhUTUwgPSBcIiZ0aW1lc1wiO1xuXG4gICAgICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gc2F2ZURpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBzYXZlRGl2LnJlbW92ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzYXZlRGl2LmFwcGVuZChzYXZlQnRuLGNhbmNlbEJ0bik7XG4gICAgICAgIGNoZWNrbGlzdC5hcHBlbmQoc2F2ZURpdilcblxuICAgICAgICBhZGRDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgYWRkQ2hlY2tib3gucmVwbGFjZVdpdGgoYWRkQ2hlY2tCb3hJbnB1dCk7XG4gICAgICAgICAgICBhZGRDaGVja0JveElucHV0LnBsYWNlaG9sZGVyID0gXCJBZGQgSXRlbS4uLlwiXG4gICAgICAgICAgICAvLyBhZGRDaGVja0JveElucHV0LnZhbHVlID0gXCJBZGQgSXRlbS4uLlwiXG4gICAgICAgICAgICBhZGRDaGVja0JveElucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIGFkZENoZWNrQm94SW5wdXQuYWRkRXZlbnRMaXN0ZW5lciAoJ2tleXByZXNzJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYWRkQ2hlY2tCb3goYWRkQ2hlY2tCb3hJbnB1dC52YWx1ZSkpO1xuICAgICAgICAgICAgICAgIGl0ZW1PYmplY3QuY2hlY2tsaXN0LnB1c2goW2FkZENoZWNrQm94SW5wdXQudmFsdWUsIGFkZENoZWNrQm94KGFkZENoZWNrQm94SW5wdXQudmFsdWUpXSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbU9iamVjdC5jaGVja2xpc3QpO1xuICAgICAgICAgICAgICAgIGFkZENoZWNrQm94SW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICBhZGRDaGVja0JveElucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICBhZGRDaGVja0JveElucHV0LnBsYWNlaG9sZGVyID0gXCJBZGQgYW5vdGhlci4uLlwiO1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrYm94TGFiZWwucGxhY2Vob2xkZXIgPSBcIkFkZCBuZXdlciBJdGVtLi5cIjtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgICAvLyBjaGVja2JveFxuICAgICAgICAgICAgZnVuY3Rpb24gYWRkQ2hlY2tCb3godmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2JveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgY2hlY2tib3hEaXYuY2xhc3NOYW1lID0gXCJjaGVja2JveERpdlwiO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgICAgICAgICAgICBjaGVja2JveC5jbGFzc05hbWUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tMaXN0TGVuZ3RoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGVja2JveFwiKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2tib3hEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQgKyBcInRvRG9cIisgY2hlY2tMaXN0TGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAvLyBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIjFcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tib3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgY2hlY2tib3hMYWJlbC5jbGFzc05hbWUgPSBcImNoZWNrYm94TGFiZWxcIjtcbiAgICAgICAgICAgICAgICAvLyBjaGVja2JveExhYmVsLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInRleHRhcmVhXCIpO1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrYm94TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlkICsgY2hlY2tMaXN0TGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBjaGVja2JveExhYmVsLnRleHRDb250ZW50ID0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICBjaGVja2JveERpdi5hcHBlbmQoY2hlY2tib3gsIGNoZWNrYm94TGFiZWwpO1xuICAgICAgICAgICAgICAgIGNoZWNrbGlzdC5pbnNlcnRCZWZvcmUoY2hlY2tib3hEaXYsIGFkZENoZWNrQm94SW5wdXQpO1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrbGlzdC5pbnNlcnRCZWZvcmUoY2hlY2tib3hEaXYsICk7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2tib3hMYWJlbC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIC8vIGFkZENoZWNrQm94SW5wdXQucmVwbGFjZVdpdGgoYWRkQ2hlY2tib3gpO1xuICAgICAgICAgICAgICAgIC8vIGFkZENoZWNrYm94LnZhbHVlID0gXCJBZGQgSXRlbS4uLlwiXG4gICAgICAgICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2hlY2tib3guY2hlY2tlZCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrYm94TGFiZWwudG9nZ2xlQXR0cmlidXRlLmNsYXNzTmFtZSA9IFwiY2hlY2tlZFwiO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrYm94LmNoZWNrZWQ7XG4gICAgICAgICAgICB9O1xuXG4gICAgLy8gYWRkQ2hlY2tCb3goKTtcbiAgICBcbiAgICAvLyBwcmlvcml0eVxuICAgICAgICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByaW9yaXR5RGl2LnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiXG4gICAgICAgIGNvbnN0IHByaW9yaXR5TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIGNvbnN0IG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24xLnZhbHVlID0gXCJIaWdoXCI7XG4gICAgICAgIG9wdGlvbjEudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgICAgICAgY29uc3Qgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbjIudmFsdWUgPSBcIk1lZGl1bVwiOyBcbiAgICAgICAgb3B0aW9uMi50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG4gICAgICAgIGNvbnN0IG9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24zLnZhbHVlID0gXCJMb3dcIjtcbiAgICAgICAgb3B0aW9uMy50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gICAgICAgIHByaW9yaXR5TGlzdC5hcHBlbmQob3B0aW9uMSxvcHRpb24yLG9wdGlvbjMpO1xuICAgICAgICBwcmlvcml0eURpdi5hcHBlbmQocHJpb3JpdHlMaXN0KTtcbiAgICBcbiAgICAvLyBtb2RhbCBjbGljayBsb2dpY1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PSBcIm1vZGFsXCIpIHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgLy8gc2F2ZVRvU3RvcmFnZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgIFxuICAgIC8vYXBwZW5kIGVsZW1lbnRzXG4gICAgICAgIG1vZGFsQ29udGVudC5hcHBlbmQoY2xvc2UsIHRpdGxlRWwsIGRlc2MsIGNoZWNrbGlzdCwgcHJpb3JpdHlEaXYpO1xuICAgICAgICBtb2RhbC5hcHBlbmQobW9kYWxDb250ZW50KTtcbiAgICAgICAgYm9keS5hcHBlbmQobW9kYWwpO1xuICAgICAgICBtb2RhbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcblxuICAgIC8vIGl0ZW0gZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtT2JqZWN0LnRpdGxlKTtcbiAgICAgICAgICAgIC8vIGl0ZW1PYmplY3QuZGVzY3JpcHRpb24gPSBkZXNjLnZhbHVlO1xuICAgICAgICAgICAgLy8gLy8gY29uc29sZS5sb2cobmV3SXRlbS5jaGVja2xpc3QpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbU9iamVjdC5kZXNjcmlwdGlvbik7XG4gICAgICAgIH0pO1xuXG59OyIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2F2ZVRvU3RvcmFnZSAob2JqZWN0KSB7XG5cbiAgICAvL3NhdmUgZGF0YSBvbiBuZXcgcHJvamVjdCAobGlzdCkgY3JlYXRlIG9yIG5ldyBJdGVtIGNyZWF0ZVxuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwYWdlTG9hZFwiLCBcImJvb20gU2hha2FcIik7XG4gICAgbG9jYWxTdG9hcmdlLnNldEl0ZW0oXCJwYWdlRGF0YVwiLCBvYmplY3QpO1xuICAgIC8vIFtsaXN0XVtpdGVtXVt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZSBkYXRlLCBwcmlvcml0eSwgbm90ZXMsIGNoZWNrbGlzdF1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBvYmplY3QgY29uc3RydWN0b3IgZm9yIGVhY2ggdG8gZG9cblxuLy8gcHJvcGVydGllcyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5LCBub3RlcywgY2hlY2tsaXN0XG5cbi8vcHJvamVjdCBjYXJkcyB3aXRoIHRpbGVzXG5cbi8vIGFwcCBvcGVucyB3aXRoIGRlZmF1bHQgcHJvamVjdCwgdXNlciBjcmVhdGVzIHRvIGRvcyBhbmQgc29ydHMgdGhlbSBpbnRvIHByb2plY3RzXG5cbi8vIGV2ZXJ5dGhpbmcgaW4gc2VwYXJhdGUgbW9kdWxlcyBcbi8vIGNoZyBwcmlvcml0eSwgbWFyayBhcyBjb21wbGV0ZSwgbWFrZSBuZXcgdG9kb3MgZXRjLlxuLy8gZG9tIHNob3VsZCBiZSBzZXBhcmF0ZVxuXG4vLyBsb2NhbCBzdG9yYWdlIHVzZXMganNvbi4gZmlndXJlIG91dCBob3cgdG8gc3RvcmUgYW5kIHJldHJpZXZlIGl0XG4vLyBmaWd1cmUgb3V0IGhvdyB0byBhZGQgbWV0aG9kcyBiYWNrIHRvIG9iamVjdCBwcm9wZXJ0aWVzIGFmdGVyIHRoZXkgYXJlIGZldGNoZWQuXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgaW5pdExvYWQgZnJvbSBcIi4vZnVuY3Rpb25zL2luaXRMb2FkXCI7XG4vLyBpbXBvcnQgVG9Eb0l0ZW0gZnJvbSBcIi4vZnVuY3Rpb25zL2NyZWF0ZVRvRG9cIjtcbmltcG9ydCBjaGdQcmlvcml0eSBmcm9tICcuL2Z1bmN0aW9ucy9jaGdQcmlvcml0eSc7XG5pbXBvcnQgYWRkTGlzdCBmcm9tICcuL2Z1bmN0aW9ucy9jcmVhdGVMaXN0JztcblxuaW5pdExvYWQoKTtcbi8vIGNvbnN0IGl0ZW0xID0gbmV3IFRvRG9JdGVtIChcIkRlc2NyaXB0aW9uXCIsIFwiNC81XCIsIFwiSGlnaCBQcmlvcml0eVwiLFwiTm90ZXNcIixcIkFkZCBjaGVja2xpc3RcIik7XG4vLyBjb25zb2xlLmxvZyhpdGVtMS5kZXNjLCBpdGVtMS5kdWVEYXRlKTtcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==