
var BCheck = false;
var nTime = 0;
var nTryCheck = 0 ;
var bShow = false;
$(document).ready(function() {

  $('[data-toggle="tooltip"]').tooltip('show');

  var i = 0;
setTimeout(function(){
    $('[data-toggle="tooltip"]').tooltip('hide');
},3000);
setInterval(function(){
  if(i<6)
  {
    $('[data-toggle="tooltip"]').tooltip('toogle');
    i++;
  }
},3000);

//
//   setInterval("test()", 100);
//
// });
//   function test() {
//   nTime++;
//   console.log(nTime);
//   if(BCheck == false)
//   {
//     if(nTime ==30)
//     {
//       $('[data-toggle="tooltip"]').tooltip('hide');
//       BCheck=true;
//       nTryCheck=0;
//       nTime= 0;
//       bShow= false;
//     }
//   }
//   else {
//     if(bShow == false)
//     {
// if(nTime >=5)
// {
//   nTime = 0;
//   nTryCheck++;
//   if(nTryCheck% 2 == 0)
//   {
//     $('[data-toggle="tooltip"]').tooltip('show');
//   }
//   else {
//       $('[data-toggle="tooltip"]').tooltip('hide');
//       if(nTryCheck>=6)
//       {
//       bShow = true;
//       }
//   }
// }
//
//     }
//   }
});
