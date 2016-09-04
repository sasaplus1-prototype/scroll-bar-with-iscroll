(function(){

  'use strict';

  var height150 = document.getElementById('js-height-150'),
      height200 = document.getElementById('js-height-200');

  var wrapper = document.getElementById('js-wrapper');

  var instance = new IScroll('.wrapper', {
    click: true,
    mouseWheel: true,
    scrollbars: true,
    tap: true
  });

  height150.addEventListener('click', function(event) {
    wrapper.style.height = '150px';
    instance.refresh();
  }, false);

  height200.addEventListener('click', function(event) {
    wrapper.style.height = '200px';
    instance.refresh();
  }, false);

}());
