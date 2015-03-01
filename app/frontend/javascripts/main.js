'use strict'

// expose jQuery for jquery_ujs and React for react_ujs
require('expose?jQuery!expose?$!jquery');
require('expose?React!react/addons');

let csp        = require('js-csp');
let $          = require('jquery');
let _          = require('lodash');
let superagent = require('superagent');

function listen(el, type) {
  var ch = csp.chan();
  el.addEventListener(type, function(e) {
    console.time("listen-event");
    csp.putAsync(ch, e);
  });
  return ch;
}

$(document).ready(() => {
  csp.go(function*() {
    var el = document.getElementById('ui');
    var ch = listen(el, 'mousemove');
    while(true) {
      var e = yield csp.take(ch);
      console.timeEnd("listen-event");
      el.innerHTML = ((e.layerX || e.clientX) + ', ' +
                      (e.layerY || e.clientY));
    }
  });
});
