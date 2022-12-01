function validateNumber(a) {
  if (typeof a !== "number") return false;
  return true;
}
// bài 1
function sphericalVolume(radius) {
  if (validateNumber(radius)) {
    if (radius <= 0) return false;
    return (4 / 3) * Math.PI * pow(radius, 3);
  }
}
// bài 2

function Sum(a, b) {
  if (validateNumber(a) && validateNumber(b)) {
    if (a > b) return fasle;
    let sum = 0;
    for (let i = a + 1; i < b; i++) {
      sum += i;
    }
    return sum;
  }
}

// bài 3

function isPrime(a) {
  if (validateNumber(a)) {
    if (a < 2) return false;
    for (let i = 2; i <= Math.sqrt(a); i++) if (a % i == 0) return false;
    return true;
  }
}

// bài 4

function sumPrime(a) {
  if (validateNumber(a)) {
    if (a <= 0) return false;
    let sum = 0;
    for (let i = 2; i <= a; i++) {
      if (isPrime(i)) {
        sum += i;
      }
    }
    return sum;
  }
}

// bài 5

function tongCacUoc(a) {
  if (validateNumber(a)) {
    if (a <= 0) return false;
    let sum = 0;
    for (let i = 0; i <= a; i++) {
      if (a % i == 0) {
        sum += i;
      }
    }
    return sum;
  }
}

// bài 6

function numberMin(numberA) {
  if (validateNumber(numberA)) {
    let numberToString = numberA.toString();
    let newString = numberToString.split("").sort();
    let [a, b, ...rest] = newString;
    let gg = rest.sort(function (a, b) {
      return b - a;
    });
    console.log(gg);
    if (a === "-") {
      return "-" + Number(gg.join("")) + "" + Number(b);
    } else {
      if (a === "0") {
        return Number(b) + "" + Number(a) + "" + Number(rest.sort().join(""));
      } else {
        return Number(a) + "" + Number(b) + "" + Number(rest.sort().join(""));
      }
    }
  }
}
