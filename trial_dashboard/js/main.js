$('#years li').on('click', function(){
  $('li.selected').removeClass('selected');
  $(this).addClass('selected');
});