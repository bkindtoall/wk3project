// @flow

$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();

  var number = parseInt($("input#userNumber").val());
  var countArray = [];
  var count = 0;

  for (var i = 0; i < number; i++) {
    count ++;
    countArray.push(count);
    console.log(countArray)
  }
    //got a listed count up to and including input number
      var beep = [];
  for (var i = 0; i < countArray.length; i++) {
    var toString = (countArray[i]).toString();
    if (toString.includes(0) === true) {
      beep.push("Beep!")
      console.log(beep);
    };
  }





// formOne(userNumber);
  });
});
