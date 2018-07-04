// import './subPageA'
// import './subPageB'

// require.include('./moduleA')

import * as _ from 'lodash'

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
  import(/* webpackChunkName: 'subpageA' */'./subPageA').then(function(subPageA) {
    console.log(subPageA)
  })
} else if (page === 'subPageB'){
  import(/* webpackChunkName: 'subpageB' */'./subPageB').then(function(subPageB) {
    console.log(subPageB)
  })
}

// require.ensure(['lodash'], function() {
//   var _ = require('lodash')
//   _.join(['1','2'], '3')
// }, 'vendor')

export default 'pageA'
