$(document).ready(function(){

  $('#checkboxes label.btn').on('click',function(){
  if($(this).hasClass('active'))  {
    $(this).removeClass('btn-success');
    $(this).addClass('btn-primary');
  }
  else{
      $(this).removeClass('btn-primary');
      $(this).addClass('btn-success');
  }

  });
    $('#radioboxes label.btn').on('click',function(){
      $('#radioboxes label.btn.btn-success').removeClass('btn-success').addClass('btn-primary');
    if($(this).hasClass('active'))  {
      $(this).removeClass('btn-success');
      $(this).addClass('btn-primary');
    }
    else{
        $(this).removeClass('btn-primary');
        $(this).addClass('btn-success');
    }

});
});
