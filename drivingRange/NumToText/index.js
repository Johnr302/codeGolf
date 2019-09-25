const numberToText = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
];
const teenToText = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen"
];
const writeNumber = number => {
  var tempNumber = number;
  if (number < 10) {
    console.log(numberToText[number - 1]);
  }
  if (number > 9 && number < 20) {
    console.log(teenToText[number - 10]);
  }
  if (number > 19 && number < 30) {
    if (number == 20) {
      console.log("Twenty");
    } else {
      console.log("Twenty-" + numberToText[number - 21]);
    }
  }
  if (number > 29 && number < 40) {
    if (number == 30) {
      console.log("Thirty");
    } else {
      console.log("Thirty-" + numberToText[number - 31]);
    }
  }
  if (number > 39 && number < 50) {
    if (number == 40) {
      console.log("Forty");
    } else {
      console.log("Forty-" + numberToText[number - 41]);
    }
  }
  if (number > 49 && number < 60) {
    if (number == 50) {
      console.log("Fifty");
    } else {
      console.log("Fifty-" + numberToText[number - 51]);
    }
  }
  if (number > 59 && number < 70) {
    if (number == 60) {
      console.log("Sixty");
    } else {
      console.log("Sixty-" + numberToText[number - 61]);
    }
  }
  if (number > 69 && number < 80) {
    if (number == 70) {
      console.log("Seventy");
    } else {
      console.log("Seventy-" + numberToText[number - 71]);
    }
  }
  if (number > 79 && number < 90) {
    if (number == 80) {
      console.log("Eighty");
    } else {
      console.log("Eighty-" + numberToText[number - 81]);
    }
  }
  if (number > 89 && number < 100) {
    if (number == 90) {
      console.log("Ninety");
    } else {
      console.log("Ninety-" + numberToText[number - 91]);
    }
  }
};

writeNumber(99);
