(() => {
  // webpackBootstrap
  'use strict';
  var __webpack_modules__ = {
    './src/Stack/index.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Stack = /*#__PURE__*/function () {\n  function Stack() {\n    _classCallCheck(this, Stack);\n\n    this.items = [];\n  }\n\n  _createClass(Stack, [{\n    key: "push",\n    value: function push(element) {\n      this.items.push(element);\n    }\n  }, {\n    key: "pop",\n    value: function pop() {\n      return this.items.pop();\n    }\n  }, {\n    key: "peek",\n    value: function peek() {\n      return this.items[this.items.length - 1];\n    }\n  }, {\n    key: "size",\n    value: function size() {\n      return this.items.length;\n    }\n  }, {\n    key: "isEmpty",\n    value: function isEmpty() {\n      return this.items.length === 0;\n    }\n  }, {\n    key: "toString",\n    value: function toString() {\n      var resultStr = \'\';\n\n      for (var i = 0; i < this.items.length; i++) {\n        resultStr += i + \' \';\n      }\n\n      return resultStr;\n    }\n  }]);\n\n  return Stack;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stack);\n\n//# sourceURL=webpack://algorithm/./src/Stack/index.js?'
      );
    },

    './src/index.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stack */ "./src/Stack/index.js");\n\nconsole.log(\'wy->23\', new _Stack__WEBPACK_IMPORTED_MODULE_0__.default());\n\n//# sourceURL=webpack://algorithm/./src/index.js?'
      );
    },
  };

  // The module cache
  var __webpack_module_cache__ = {};

  // The require function
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // Create a new module (and put it into the cache)
    var module = (__webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {},
    });

    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
  }

  /* webpack/runtime/define property getters */
  (() => {
    // define getter functions for harmony exports
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
        }
      }
    };
  })();

  /* webpack/runtime/hasOwnProperty shorthand */
  (() => {
    __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
  })();

  /* webpack/runtime/make namespace object */
  (() => {
    // define __esModule on exports
    __webpack_require__.r = (exports) => {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      }
      Object.defineProperty(exports, '__esModule', { value: true });
    };
  })();

  // startup
  // Load entry module and return exports
  // This entry module can't be inlined because the eval devtool is used.
  var __webpack_exports__ = __webpack_require__('./src/index.js');
})();
