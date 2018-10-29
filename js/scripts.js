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
    // console.log(countArray)
  }
  //got a listed count up to and including input number
  var beep = [];
  var boop = [];
  var dave = [];

  for (var i = 0; i < countArray.length; i++) {
    var toString = (countArray[i]).toString();
    if (toString.includes(0) === true) {
      beep[i] = "Beep!";
      // console.log(beep);
    }
      else if (toString.includes(1) === true) {
        beep[i] = "Boop!";
        // console.log(boop);
      }
      else if (i>0 && i%3==0) {
        beep[i] = "Sorry Dave";
        console.log(beep);
      }
      else {
        countArray[i].show();
      }
        
    };
    // var mergedArrays = beep.concat(boop, dave);
    // console.log(mergedArrays);
    // var masterMerged = countArray.concat(beep);
    // console.log(masterMerged)
  });
});
