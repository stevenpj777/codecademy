var Main = {};
var number = 42;
Main.returnsTrue = function() {
  return true;
};

Main.returnsHello = function() {
  return 'Hello';
};

Main.returnsTheMeaningOfLife = function(number) {
  if (number === 41) {
    return 'The meaning of life is clear';
  } else {
    return 'The meaning of life is unclear';
  }
};
