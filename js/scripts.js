// @flow

function BeepBoop(input) {
  var results = [];
  for (var i = 0; i <= input; i++) {
    if (i%3 == 0) {
      results.push("I'm sorry Dave. I'm afraid I can't do that.");
      console.log(results);
    } else if (i.toString().match(/0/g)) {
      results.push("Beep!")
    } else if (i.toString().match(/1/g)) {
      results.push("Boop!")
    } else {
      results.push(i);
    }
  }
  return results;
}


//user interface
$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();

  var input = parseInt($("input#userNumber").val());
  $("#output").text(BeepBoop(input));
  });
});
