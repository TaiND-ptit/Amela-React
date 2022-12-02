function validateArray(arr) {
  return isArray(arr);
}

function validateString(str) {
  if (typeof str !== "string") return false;
  return true;
}

function validateNumber(a) {
  if (typeof a !== "number" && isNaN(a) == true) return false;
  return true;
}

//bài 1
function minNumber(arr) {
  if (validateArray(arr)) return Math.min.apply(null, arr);
  return false;
}

// bài 2

function max2Numbers(arr) {
  if (validateArray(arr)) {
    arr.reverse();
    return arr[1];
  }
  return false;
}
// bài 3
function sortStudents(arr) {
  if (validateArray(arr)) {
    arr.sort().reverse();
    return arr;
  }
  return false;
}

// bài 4

function sumDivide5() {
  let sum = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 5 == 0) sum += i;
  }
  return sum;
}

//bài 5
function newArray(arr) {
  if (validateArray(arr)) {
    return arr.map((number, index) => {
      return number % 2;
    });
  }
  return false;
}

// bài 6
function maxLength(arr) {
  if (validateArray(arr)) {
    let out = [];
    let dp = [];
    let lengthArr = arr.length;

    for (let i = 0; i < lengthArr; i++) {
      dp.push(arr[i].length);
    }

    let maxLength = Math.max.apply(null, dp);

    for (let i = 0; i < lengthArr; i++) {
      if (arr[i].length === maxLength) {
        out.push(arr[i]);
      }
    }

    return out;
  }
  return false;
}
// console.log(maxLength(['aba', 'aa', 'ad', 'c', 'vcd'] ));

// bài 7
function sample(arr) {
  if (validateArray(arr)) {
    let lengthArr = arr.length;
    if (lengthArr < 2) return false;
    return arr[Math.floor(Math.random() * lengthArr)];
  }
  return false;
}

// bài 8

function sortElementArray(arr) {
  if (validateArray(arr)) {
    let lengthArr = arr.length;
    let randomNumber1 = Math.floor(Math.random() * lengthArr);
    let randomNumber2 = Math.floor(Math.random() * lengthArr);
    console.log(randomNumber1);
    console.log(randomNumber2);
    do {
      randomNumber2 = Math.floor(Math.random() * lengthArr);
    } while (randomNumber1 === randomNumber2);

    [arr[randomNumber1], arr[randomNumber2]] = [
      arr[randomNumber2],
      arr[randomNumber1],
    ];
    return arr;
  }
  return false;
}
// console.log(sortElementArray([1, 2, 3, 4]));

// bài 9
function similarity(arr, arr1) {
  if (validateArray(arr) && validateArray(arr1)) {
    let out = [];
    let lengthArr = arr.length;
    for (let i = 0; i < lengthArr; i++) {
      if (arr1.includes(arr[i])) {
        out.push(arr[i]);
      }
    }
    return out;
  }
  return false;
}
// bài 10
function symmetricDifference(arr1, arr2) {
  if (validateArray(arr1) && validateArray(arr2)) {
    let input = [...arr1, ...arr2];
    let lengthArr = input.length;
    let out = [];
    let dp = [];
    for (let i = 0; i < 1000000; i++) {
      dp[i] = 0;
    }
    for (let i = 0; i < lengthArr; i++) {
      dp[input[i]]++;
    }
    for (let i = 0; i < 1000000; i++) {
      if (dp[input[i]] == 1) {
        out.push(input[i]);
      }
    }
    return out;
  }
  return false;
}

// bài 11

function sub_String(str) {
  if (validateString(str)) {
    let lengthString = str.length;
    let out = [];
    for (let i = 0; i < lengthString; i++) {
      for (let j = i + 1; j < lengthString + 1; j++) {
        out.push(str.slice(i, j));
      }
    }

    return out;
  }
  return false;
}
// console.log(sub_String('dog'))

//bài 12
function ascendingSequence(arr) {
  if (validateArray(arr)) {
    let lengthArr = arr.length;
    for (let i = 0; i < lengthArr; i++) {
      if (arr[i] <= arr[i + 1]) {
        return true;
      }
      return false;
    }
  }
  return false;
}

// bài 13

function descendingSequence(arr) {
  if (validateArray(arr)) {
    let lengthArr = arr.length;
    for (let i = 0; i < lengthArr; i++) {
      if (arr[i] >= arr[i + 1] && arr[i] % 2 === 1) {
        return true;
      }
      return false;
    }
  }
  return false;
}

// console.log(similarity([1, 2, 3], [1, 2, 4]));
