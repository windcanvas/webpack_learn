webpackJsonp([5],{

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
// import './subPageA'
// import './subPageB'

// require.include('./moduleA')



var page = 'subPageA'

// if (page === 'subPageA') {
//   require.ensure([], function() {
//     var subpageA = require('./subPageA')
//   }, 'subPageA')
// } else if (page === 'subPageB'){
//   require.ensure([], function() {
//     var subpageB = require('./subPageB')
//   }, 'subPageB')
// }

if (page === 'subPageA') {
  Promise.all/* import() */([__webpack_require__.e(1), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, 1)).then(function(subPageA) {
    console.log(subPageA)
  })
} else if (page === 'subPageB'){
  Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, 2)).then(function(subPageB) {
    console.log(subPageB)
  })
}

// require.ensure(['lodash'], function() {
//   var _ = require('lodash')
//   _.join(['1','2'], '3')
// }, 'vendor')

/* harmony default export */ __webpack_exports__["default"] = ('pageA');


/***/ })

},[3]);