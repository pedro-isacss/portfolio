module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/posts/[slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/home/pedroisac/Documentos/GitHub/portfolio/frontend/simple-blog/components/Footer.js\";\n\nconst Footer = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      children: \"Pedro Isac\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcz9mMjU2Il0sIm5hbWVzIjpbIkZvb3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDbkIsc0JBQ0U7QUFBQSwyQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBTkQ7O0FBUWVBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Gb290ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzcGFuPlBlZHJvIElzYWM8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Footer.js\n");

/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! exports provided: getPostSlugs, getPostBySlug, getAllPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPostSlugs\", function() { return getPostSlugs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPostBySlug\", function() { return getPostBySlug; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllPosts\", function() { return getAllPosts; });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst postsDirectory = Object(path__WEBPACK_IMPORTED_MODULE_1__[\"join\"])(process.cwd(), \"_posts\");\nfunction getPostSlugs() {\n  return fs__WEBPACK_IMPORTED_MODULE_0___default.a.readdirSync(postsDirectory);\n}\nfunction getPostBySlug(slug, fields = []) {\n  const realSlug = slug.replace(/\\.md$/, \"\");\n  const fullPath = Object(path__WEBPACK_IMPORTED_MODULE_1__[\"join\"])(postsDirectory, `${realSlug}.md`);\n  const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(fullPath, \"utf8\");\n  const {\n    data,\n    content\n  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);\n  const items = {}; // Ensure only the minimal needed data is exposed\n\n  fields.forEach(field => {\n    if (field === \"slug\") {\n      items[field] = realSlug;\n    }\n\n    if (field === \"content\") {\n      items[field] = content;\n    }\n\n    if (data[field]) {\n      items[field] = data[field];\n    }\n  });\n  return items;\n}\nfunction getAllPosts(fields = []) {\n  const slugs = getPostSlugs();\n  const posts = slugs.map(slug => getPostBySlug(slug, fields)) // sort posts by date in descending order\n  .sort((post1, post2) => post1.date > post2.date ? \"-1\" : \"1\");\n  return posts;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYXBpLmpzP2FhODUiXSwibmFtZXMiOlsicG9zdHNEaXJlY3RvcnkiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImdldFBvc3RTbHVncyIsImZzIiwicmVhZGRpclN5bmMiLCJnZXRQb3N0QnlTbHVnIiwic2x1ZyIsImZpZWxkcyIsInJlYWxTbHVnIiwicmVwbGFjZSIsImZ1bGxQYXRoIiwiZmlsZUNvbnRlbnRzIiwicmVhZEZpbGVTeW5jIiwiZGF0YSIsImNvbnRlbnQiLCJtYXR0ZXIiLCJpdGVtcyIsImZvckVhY2giLCJmaWVsZCIsImdldEFsbFBvc3RzIiwic2x1Z3MiLCJwb3N0cyIsIm1hcCIsInNvcnQiLCJwb3N0MSIsInBvc3QyIiwiZGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxjQUFjLEdBQUdDLGlEQUFJLENBQUNDLE9BQU8sQ0FBQ0MsR0FBUixFQUFELEVBQWdCLFFBQWhCLENBQTNCO0FBRU8sU0FBU0MsWUFBVCxHQUF3QjtBQUM3QixTQUFPQyx5Q0FBRSxDQUFDQyxXQUFILENBQWVOLGNBQWYsQ0FBUDtBQUNEO0FBRU0sU0FBU08sYUFBVCxDQUF1QkMsSUFBdkIsRUFBNkJDLE1BQU0sR0FBRyxFQUF0QyxFQUEwQztBQUMvQyxRQUFNQyxRQUFRLEdBQUdGLElBQUksQ0FBQ0csT0FBTCxDQUFhLE9BQWIsRUFBc0IsRUFBdEIsQ0FBakI7QUFDQSxRQUFNQyxRQUFRLEdBQUdYLGlEQUFJLENBQUNELGNBQUQsRUFBa0IsR0FBRVUsUUFBUyxLQUE3QixDQUFyQjtBQUNBLFFBQU1HLFlBQVksR0FBR1IseUNBQUUsQ0FBQ1MsWUFBSCxDQUFnQkYsUUFBaEIsRUFBMEIsTUFBMUIsQ0FBckI7QUFDQSxRQUFNO0FBQUVHLFFBQUY7QUFBUUM7QUFBUixNQUFvQkMsa0RBQU0sQ0FBQ0osWUFBRCxDQUFoQztBQUVBLFFBQU1LLEtBQUssR0FBRyxFQUFkLENBTitDLENBUS9DOztBQUNBVCxRQUFNLENBQUNVLE9BQVAsQ0FBZ0JDLEtBQUQsSUFBVztBQUN4QixRQUFJQSxLQUFLLEtBQUssTUFBZCxFQUFzQjtBQUNwQkYsV0FBSyxDQUFDRSxLQUFELENBQUwsR0FBZVYsUUFBZjtBQUNEOztBQUNELFFBQUlVLEtBQUssS0FBSyxTQUFkLEVBQXlCO0FBQ3ZCRixXQUFLLENBQUNFLEtBQUQsQ0FBTCxHQUFlSixPQUFmO0FBQ0Q7O0FBRUQsUUFBSUQsSUFBSSxDQUFDSyxLQUFELENBQVIsRUFBaUI7QUFDZkYsV0FBSyxDQUFDRSxLQUFELENBQUwsR0FBZUwsSUFBSSxDQUFDSyxLQUFELENBQW5CO0FBQ0Q7QUFDRixHQVhEO0FBYUEsU0FBT0YsS0FBUDtBQUNEO0FBRU0sU0FBU0csV0FBVCxDQUFxQlosTUFBTSxHQUFHLEVBQTlCLEVBQWtDO0FBQ3ZDLFFBQU1hLEtBQUssR0FBR2xCLFlBQVksRUFBMUI7QUFDQSxRQUFNbUIsS0FBSyxHQUFHRCxLQUFLLENBQ2hCRSxHQURXLENBQ05oQixJQUFELElBQVVELGFBQWEsQ0FBQ0MsSUFBRCxFQUFPQyxNQUFQLENBRGhCLEVBRVo7QUFGWSxHQUdYZ0IsSUFIVyxDQUdOLENBQUNDLEtBQUQsRUFBUUMsS0FBUixLQUFtQkQsS0FBSyxDQUFDRSxJQUFOLEdBQWFELEtBQUssQ0FBQ0MsSUFBbkIsR0FBMEIsSUFBMUIsR0FBaUMsR0FIOUMsQ0FBZDtBQUlBLFNBQU9MLEtBQVA7QUFDRCIsImZpbGUiOiIuL2xpYi9hcGkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XG5jb25zdCBwb3N0c0RpcmVjdG9yeSA9IGpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJfcG9zdHNcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3N0U2x1Z3MoKSB7XG4gIHJldHVybiBmcy5yZWFkZGlyU3luYyhwb3N0c0RpcmVjdG9yeSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3N0QnlTbHVnKHNsdWcsIGZpZWxkcyA9IFtdKSB7XG4gIGNvbnN0IHJlYWxTbHVnID0gc2x1Zy5yZXBsYWNlKC9cXC5tZCQvLCBcIlwiKTtcbiAgY29uc3QgZnVsbFBhdGggPSBqb2luKHBvc3RzRGlyZWN0b3J5LCBgJHtyZWFsU2x1Z30ubWRgKTtcbiAgY29uc3QgZmlsZUNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKGZ1bGxQYXRoLCBcInV0ZjhcIik7XG4gIGNvbnN0IHsgZGF0YSwgY29udGVudCB9ID0gbWF0dGVyKGZpbGVDb250ZW50cyk7XG5cbiAgY29uc3QgaXRlbXMgPSB7fTtcblxuICAvLyBFbnN1cmUgb25seSB0aGUgbWluaW1hbCBuZWVkZWQgZGF0YSBpcyBleHBvc2VkXG4gIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGlmIChmaWVsZCA9PT0gXCJzbHVnXCIpIHtcbiAgICAgIGl0ZW1zW2ZpZWxkXSA9IHJlYWxTbHVnO1xuICAgIH1cbiAgICBpZiAoZmllbGQgPT09IFwiY29udGVudFwiKSB7XG4gICAgICBpdGVtc1tmaWVsZF0gPSBjb250ZW50O1xuICAgIH1cblxuICAgIGlmIChkYXRhW2ZpZWxkXSkge1xuICAgICAgaXRlbXNbZmllbGRdID0gZGF0YVtmaWVsZF07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaXRlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxQb3N0cyhmaWVsZHMgPSBbXSkge1xuICBjb25zdCBzbHVncyA9IGdldFBvc3RTbHVncygpO1xuICBjb25zdCBwb3N0cyA9IHNsdWdzXG4gICAgLm1hcCgoc2x1ZykgPT4gZ2V0UG9zdEJ5U2x1ZyhzbHVnLCBmaWVsZHMpKVxuICAgIC8vIHNvcnQgcG9zdHMgYnkgZGF0ZSBpbiBkZXNjZW5kaW5nIG9yZGVyXG4gICAgLnNvcnQoKHBvc3QxLCBwb3N0MikgPT4gKHBvc3QxLmRhdGUgPiBwb3N0Mi5kYXRlID8gXCItMVwiIDogXCIxXCIpKTtcbiAgcmV0dXJuIHBvc3RzO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/api.js\n");

/***/ }),

/***/ "./lib/markdownToHtml.js":
/*!*******************************!*\
  !*** ./lib/markdownToHtml.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return markdownToHtml; });\n/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remark */ \"remark\");\n/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(remark__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remark-html */ \"remark-html\");\n/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(remark_html__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function markdownToHtml(markdown) {\n  const result = await remark__WEBPACK_IMPORTED_MODULE_0___default()().use(remark_html__WEBPACK_IMPORTED_MODULE_1___default.a).process(markdown);\n  return result.toString();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbWFya2Rvd25Ub0h0bWwuanM/ZDY5ZSJdLCJuYW1lcyI6WyJtYXJrZG93blRvSHRtbCIsIm1hcmtkb3duIiwicmVzdWx0IiwicmVtYXJrIiwidXNlIiwiaHRtbCIsInByb2Nlc3MiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVlLGVBQWVBLGNBQWYsQ0FBOEJDLFFBQTlCLEVBQXdDO0FBQ3JELFFBQU1DLE1BQU0sR0FBRyxNQUFNQyw2Q0FBTSxHQUFHQyxHQUFULENBQWFDLGtEQUFiLEVBQW1CQyxPQUFuQixDQUEyQkwsUUFBM0IsQ0FBckI7QUFDQSxTQUFPQyxNQUFNLENBQUNLLFFBQVAsRUFBUDtBQUNEIiwiZmlsZSI6Ii4vbGliL21hcmtkb3duVG9IdG1sLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlbWFyayBmcm9tIFwicmVtYXJrXCI7XG5pbXBvcnQgaHRtbCBmcm9tIFwicmVtYXJrLWh0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbWFya2Rvd25Ub0h0bWwobWFya2Rvd24pIHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVtYXJrKCkudXNlKGh0bWwpLnByb2Nlc3MobWFya2Rvd24pO1xuICByZXR1cm4gcmVzdWx0LnRvU3RyaW5nKCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/markdownToHtml.js\n");

/***/ }),

/***/ "./pages/posts/[slug].js":
/*!*******************************!*\
  !*** ./pages/posts/[slug].js ***!
  \*******************************/
/*! exports provided: default, getStaticProps, getStaticPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/api */ \"./lib/api.js\");\n/* harmony import */ var _lib_markdownToHtml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/markdownToHtml */ \"./lib/markdownToHtml.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Footer */ \"./components/Footer.js\");\n\nvar _jsxFileName = \"/home/pedroisac/Documentos/GitHub/portfolio/frontend/simple-blog/pages/posts/[slug].js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nfunction Post({\n  post,\n  preview\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: post.coverImage,\n      alt: post.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: post.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      dangerouslySetInnerHTML: {\n        __html: post.content\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\nasync function getStaticProps({\n  params\n}) {\n  const post = Object(_lib_api__WEBPACK_IMPORTED_MODULE_1__[\"getPostBySlug\"])(params.slug, [\"title\", \"date\", \"slug\", \"author\", \"content\", \"ogImage\", \"coverImage\"]);\n  const content = await Object(_lib_markdownToHtml__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(post.content || \"\");\n  return {\n    props: {\n      post: _objectSpread(_objectSpread({}, post), {}, {\n        content\n      })\n    }\n  };\n}\nasync function getStaticPaths() {\n  const posts = Object(_lib_api__WEBPACK_IMPORTED_MODULE_1__[\"getAllPosts\"])([\"slug\"]);\n  return {\n    paths: posts.map(post => {\n      return {\n        params: {\n          slug: post.slug\n        }\n      };\n    }),\n    fallback: false\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9bc2x1Z10uanM/ZGVjOSJdLCJuYW1lcyI6WyJQb3N0IiwicG9zdCIsInByZXZpZXciLCJjb3ZlckltYWdlIiwidGl0bGUiLCJfX2h0bWwiLCJjb250ZW50IiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJnZXRQb3N0QnlTbHVnIiwic2x1ZyIsIm1hcmtkb3duVG9IdG1sIiwicHJvcHMiLCJnZXRTdGF0aWNQYXRocyIsInBvc3RzIiwiZ2V0QWxsUG9zdHMiLCJwYXRocyIsIm1hcCIsImZhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULENBQWM7QUFBRUMsTUFBRjtBQUFRQztBQUFSLENBQWQsRUFBaUM7QUFDOUMsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLFNBQUcsRUFBRUQsSUFBSSxDQUFDRSxVQUFmO0FBQTJCLFNBQUcsRUFBRUYsSUFBSSxDQUFDRztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLGdCQUFLSCxJQUFJLENBQUNHO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFBSyw2QkFBdUIsRUFBRTtBQUFFQyxjQUFNLEVBQUVKLElBQUksQ0FBQ0s7QUFBZjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFJRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRDtBQUVNLGVBQWVDLGNBQWYsQ0FBOEI7QUFBRUM7QUFBRixDQUE5QixFQUEwQztBQUMvQyxRQUFNUCxJQUFJLEdBQUdRLDhEQUFhLENBQUNELE1BQU0sQ0FBQ0UsSUFBUixFQUFjLENBQ3RDLE9BRHNDLEVBRXRDLE1BRnNDLEVBR3RDLE1BSHNDLEVBSXRDLFFBSnNDLEVBS3RDLFNBTHNDLEVBTXRDLFNBTnNDLEVBT3RDLFlBUHNDLENBQWQsQ0FBMUI7QUFTQSxRQUFNSixPQUFPLEdBQUcsTUFBTUssbUVBQWMsQ0FBQ1YsSUFBSSxDQUFDSyxPQUFMLElBQWdCLEVBQWpCLENBQXBDO0FBRUEsU0FBTztBQUNMTSxTQUFLLEVBQUU7QUFDTFgsVUFBSSxrQ0FDQ0EsSUFERDtBQUVGSztBQUZFO0FBREM7QUFERixHQUFQO0FBUUQ7QUFFTSxlQUFlTyxjQUFmLEdBQWdDO0FBQ3JDLFFBQU1DLEtBQUssR0FBR0MsNERBQVcsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUF6QjtBQUVBLFNBQU87QUFDTEMsU0FBSyxFQUFFRixLQUFLLENBQUNHLEdBQU4sQ0FBV2hCLElBQUQsSUFBVTtBQUN6QixhQUFPO0FBQ0xPLGNBQU0sRUFBRTtBQUNORSxjQUFJLEVBQUVULElBQUksQ0FBQ1M7QUFETDtBQURILE9BQVA7QUFLRCxLQU5NLENBREY7QUFRTFEsWUFBUSxFQUFFO0FBUkwsR0FBUDtBQVVEIiwiZmlsZSI6Ii4vcGFnZXMvcG9zdHMvW3NsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UG9zdEJ5U2x1ZywgZ2V0QWxsUG9zdHMgfSBmcm9tIFwiLi4vLi4vbGliL2FwaVwiO1xuaW1wb3J0IG1hcmtkb3duVG9IdG1sIGZyb20gXCIuLi8uLi9saWIvbWFya2Rvd25Ub0h0bWxcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0LCBwcmV2aWV3IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGltZyBzcmM9e3Bvc3QuY292ZXJJbWFnZX0gYWx0PXtwb3N0LnRpdGxlfSAvPlxuICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5jb250ZW50IH19PjwvZGl2PlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBwb3N0ID0gZ2V0UG9zdEJ5U2x1ZyhwYXJhbXMuc2x1ZywgW1xuICAgIFwidGl0bGVcIixcbiAgICBcImRhdGVcIixcbiAgICBcInNsdWdcIixcbiAgICBcImF1dGhvclwiLFxuICAgIFwiY29udGVudFwiLFxuICAgIFwib2dJbWFnZVwiLFxuICAgIFwiY292ZXJJbWFnZVwiLFxuICBdKTtcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IG1hcmtkb3duVG9IdG1sKHBvc3QuY29udGVudCB8fCBcIlwiKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0OiB7XG4gICAgICAgIC4uLnBvc3QsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcG9zdHMgPSBnZXRBbGxQb3N0cyhbXCJzbHVnXCJdKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwb3N0cy5tYXAoKHBvc3QpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHNsdWc6IHBvc3Quc2x1ZyxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSksXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"gray-matter\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmF5LW1hdHRlclwiP2Y4YmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JheS1tYXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmF5LW1hdHRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///gray-matter\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "remark":
/*!*************************!*\
  !*** external "remark" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"remark\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZW1hcmtcIj85MDlhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlbWFyay5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbWFya1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///remark\n");

/***/ }),

/***/ "remark-html":
/*!******************************!*\
  !*** external "remark-html" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"remark-html\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZW1hcmstaHRtbFwiPzdkZTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVtYXJrLWh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZW1hcmstaHRtbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///remark-html\n");

/***/ })

/******/ });