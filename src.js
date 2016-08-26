// function forEach(array, callback) {
//   for (var i = 0; i < array.length; i++) {
//   callback(array[i]);
//   }
//
// }
//
// function logDouble(number) {
//   console.log(number * 2);
// }
// forEach([5, 10, 20, 40, 80], logDouble);

// [5, 10, 20, 40, 80].forEach(function (number) {
//   console.log(numer * 2);
// });
// [5, 10, 20, 40, 80].forEach(logDouble);

//wrong
// function filter(array, callback) {
//   for (var i = 0; i < array.length; i++) {
//     callback(array[i]);
//     return callback;
//     if (callback === true) {
//       var newArray[i] = callback;
//     }
// }
// filter();
//correct
// function filter(array, callback) {debugger;
//   var returnArray = [];
//   for (var i = 0; i < array.length; i++) {
//     if (callback(array[i])) {
//       returnArray.push(array[i]);
//     }
//   }
//   return returnArray;
// }
//
// function divisibleByThree(number) {
//   return number % 3 === 0;
// }
//
// var onlyThrees = filter([1, 3, 7, 9, 962], divisibleByThree);
// console.log(onlyThrees);

// no else is more clean
// function checksIfFive(number) {
//   if (number === 5) {
//     return "This number is five"
//   }
//     return "This number is not five"
// }
// // checksIfFive(5);
//
// var isFive = checksIfFive(5);


function validateForm(name, email, password, age) {
  if (!name || !email || !password || (!age && age !== 0)) {
    return false;
  }
  if (typeOf age === "number") {
    return false;
  }
  if (password.length < 6 || password === "password") {
    return false;
  }
  if (name.indexOf(" ") === -1) {
    return false;
  }
  return true;
}
