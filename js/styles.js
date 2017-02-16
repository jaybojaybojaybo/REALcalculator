
// Business (or back-end) logic:

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
  $("#addbtn").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#firstNumber").val());
    var number2 = parseInt($("#secondNumber").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });

  $("#subtractbtn").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#firstNumber").val());
    var number2 = parseInt($("#secondNumber").val());
    var result = subtract(number1, number2);
    $("#output").text(result);
  });

  $("#multiplybtn").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#firstNumber").val());
    var number2 = parseInt($("#secondNumber").val());
    var result = multiply(number1, number2);
    $("#output").text(result);
  });

  $("#dividebtn").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#firstNumber").val());
    var number2 = parseInt($("#secondNumber").val());
    var result = divide(number1, number2);
    $("#output").text(result);
  });
});
