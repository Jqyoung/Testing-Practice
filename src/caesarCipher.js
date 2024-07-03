export function caesarCipher(text, shifts) {
  const alphabet = [];
  const encryptText = [];
  const regex = /[^a-zA-Z]/;

  // keep the number of shifts within 26 to match the alphabet
  shifts = checkShifts(shifts);

  // create an array of alphabet
  for (let i = 97; i <= 122; i++) {
    alphabet.push(String.fromCharCode(i));
  }

  // compare each letter in the text to the alphabet array to find the letter and then shift it
  for (let char of text) {
    let isUpperCase = isUpper(char);
    if (isUpperCase === true) {
      char = char.toLowerCase();
    }

    // push non-alphabet characters or alphabets into the new array
    if (regex.test(char)) {
      encryptText.push(char);
    } else {
      alphabet.forEach((letter, i) => {
        if (char === letter) {
          let newIndex = i + shifts;
          newIndex = checkShifts(newIndex);
          if (isUpperCase === true) {
            encryptText.push(alphabet[newIndex].toUpperCase());
          } else {
            encryptText.push(alphabet[newIndex]);
          }
        }
      });
    }
  }

  return encryptText.join("");
}

//helper functions
function checkShifts(shifts) {
  while (shifts >= 26) {
    shifts = shifts - 26;
  }
  return shifts;
}

function isUpper(char) {
  return char !== char.toLowerCase();
}
