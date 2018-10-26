

$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#userNumber").val());

  var arrayNum = number;
  var countArray = [];
  var count = 0;

    for (var i = 0; i < number; i++) {
      count ++;
      var countArray = countArray.push(count);
    }


formOne(userNumber);
  });
});
