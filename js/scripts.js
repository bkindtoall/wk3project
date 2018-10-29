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


  for (var i = 0; i < countArray.length; i++) {
    var toString = (countArray[i]).toString();
    if (toString.includes(0) === true) {
      beep[i] = "Beep!";
      // console.log(beep);
    }
      else if (toString.includes(1) === true) {
        beep[i] = "Boop!";
        // console.log(beep);
      }
      else if (i>0 && i%3==0) {
        beep[i] = "Sorry Dave"
        // console.log(beep);
      }
    };
    // var mergedArrays = beep.concat(boop, dave);
    // console.log(mergedArrays);
    var masterMerged = beep.concat(countArray);
    console.log(masterMerged)
  });
  function output(masterMerged) {
     return masterMerged
  }
  // $("#output").text(masterMerged);
  //   return masterMerged;
});
