export function reverseString(stringInput) {
  if (typeof stringInput !== "string") {
    throw TypeError("is not a string");
  }
  return stringInput.split("").reverse().join("");
}
