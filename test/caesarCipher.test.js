import { caesarCipher } from "../src/caesarCipher.js";

test("caesarCipher module is defined", () => {
  expect(caesarCipher).toBeDefined();
});

test("caesarCipher encrypt the text with 1 shift", () => {
  expect(caesarCipher("hello", 1)).toBe("ifmmp");
});

test("caesarCipher encrypt another text with 1 shift", () => {
  expect(caesarCipher("hi", 1)).toBe("ij");
});

test("number of shift that wraps around the alphabet", () => {
  expect(caesarCipher("hi", 26)).toBe("hi");
});

test("alphabet letters that wrap around to the beginning of alphabet", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("preserve the case sensitivity", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("preserve non-alphabetical characters", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("preserve non-alphabetical characters", () => {
  expect(caesarCipher("xyz, HellO!", 3)).toBe("abc, KhooR!");
});
