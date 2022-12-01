// validate data
function validateString(str) {
  if (typeof str !== "string") return false;
  return true;
}

function validateNumber(a) {
  if (typeof a !== "number") return false;
  return true;
}
// bài 1

function checkStringExists(stringA, stringB) {
  if (validateString(stringA) && validateString(stringB)) {
    let newText = stringA.split(" ");
    return newText.includes(stringB);
  }

  return false;
}

// bài 2

function shortenString(str) {
  if (validateString(str)) {
    let newStr = str.slice(0, 8);
    return `${newStr}...`;
  }
}
// console.log(shortenString('Xin chào các bạn'))

// bài 3

function duplicateTen(str) {
  let output = [];
  for (let i = 1; i <= 10; i++) {
    if (validateString(str)) {
      output.push(str);
    }
    break;
  }
  return output.join(" ");
}
// console.log(duplicateTen('xin'))

// bài 4,5
function repeatString(str, number) {
  let output = [];
  for (let i = 1; i <= number; i++) {
    if (validateString(str)) {
      output.push(str);
    }
    break;
  }
  return output.join("-");
}
// console.log(repeatString('a', 5))

// bài 6
function reverseString(str) {
  if (validateString(str)) {
    let splitString = str.split("");
    let newString = splitString.reverse();
    return newString.join("");
  }
}
//  console.log(reverseString('Hello'))

// bài 7
function symmetryString(str) {
  if (validateString(str)) {
    str = str.toUpperCase();
    str = str.replace(/\s/g, "");
    return str === str.split("").reverse().join("");
  }
}

// bài 8
function capitalizationString(str) {
  if (validateString(str)) {
    let newString = str.toUpperCase();
    if (str === newString) {
      return true;
    }
    return false;
  }
}
