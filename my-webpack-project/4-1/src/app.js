import base from './css/base.less'
import common from './css/common.less'

var app = document.getElementById('app');
app.innerHTML = '<div class="'+ base.box + '"></div>'

import(/* webpackChunkName: 'a' */ './components/a').then(function(a) {
  console.log(a)
})

// base.use()
// base.unuse()

// var flag = false;

// setInterval(function() {
//   if (flag) {
//     base.unuse()
//     // flag = false
//   } else {
//     base.use()
//     // flag = true
//   }
//   flag = !flag
// }, 500)
