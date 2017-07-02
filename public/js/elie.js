(() => {
  var $elie = $(".circle");
  rotate(0);
  console.log($elie)



  document.addEventListener('scroll', function(){
    rotate(window.scrollY%1000)
  })
  function rotate(degree) {
    $elie.css({
      WebkitTransform: 'rotate(' + degree + 'deg)'
    });
    $elie.css({
      '-moz-transform': 'rotate(' + degree + 'deg)'
    });
    // timer = setTimeout(function () {
    //   rotate(++degree);
    // }, 20);
  }
})()
