$(function() {
  $(".matrix .element").on('click', function(){
    if ($(this).hasClass('disabled')) return;
      $(this).toggleClass('active');
      $("." + $(this).attr('id')).toggleClass('active');;

  });
});
