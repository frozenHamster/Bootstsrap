$(document).ready(function(){
  var option = {
    backdrop:'static',
    keybord : false
  };
  $('#callModal').click(function(){
    $('#myModal').modal(option);
  });
var obj ={name :'nick'};
var int = 99;
var str = 'Hello!';

isType(obj);
isType(int);
isType(str);

function isType(target){
  if(typeof(target)=='object')
  console.log('object 입니다');
  else if(typeof(target)=='string')
  console.log('string 입니다');
  else
  console.log('기타 데이터 타입입니다');
}

});
