$(function(){
  //クリックファンクション(表示)
  $('#question-show').click(function(){
    $('#question-modal').fadeIn();
  });

  //クリックファンクション（閉じる）
  $('.close-modal').click(function(){
    $('#question-modal').fadeOut();
  });

});
