var RATIO = 1.618;
var RATIO4 = RATIO*RATIO*RATIO*RATIO;

console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

var resize = function(unit, ratio) {
  var unitName = '[data-c-'+ unit +'=""]';
  $(unitName).css( "height", Math.floor($(unitName).outerWidth(true) / ratio)  );
}


var resizeAll = function () {
   resize("lead", RATIO4);
};

$( window ).bind("resize", function(){
    resizeAll();
});

resizeAll();
