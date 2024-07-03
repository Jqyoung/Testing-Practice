export default function capitalize(inputString) {
  if (!inputString) {
    throw TypeError("inputString is not defined");
  }
  if (typeof inputString !== "string") {
    throw TypeError("this is not a string");
  }
  const firstChar = inputString.charAt(0);
  const restOfString = inputString.substring(1);
  const newString = firstChar.toUpperCase().concat(restOfString);

  return newString;
}
