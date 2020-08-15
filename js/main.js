$(function() {
  console.log( "ready!" );
  $("#matrix .element").on('click', function(){
      $(this).toggleClass('active');
      $("." + $(this).attr('id')).toggleClass('active');;

  });
});
