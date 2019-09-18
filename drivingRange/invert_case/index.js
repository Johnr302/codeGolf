var strings = "this iS a TeSt 523 Now!";
var i = 0;
var character = "";
let result = "";
while (i <= strings.length) {
  character = strings.charAt(i);
  if (character == " " || /[,'.!?\-]/.test(character)) {
    result += character;
  } else if (!isNaN(character * 1)) {
    result += character;
  } else {
    if (character == character.toUpperCase()) {
      result += character.toLowerCase();
    }
    if (character == character.toLowerCase()) {
      result += character.toUpperCase();
    }
  }
  i++;
}
console.log(result);
