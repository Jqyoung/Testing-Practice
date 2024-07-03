import { reverseString } from "../src/reverseString.js";

test("module imported", () => {
  expect(reverseString).toBeDefined();
});

test("reverse the string", () => {
  const expected = "dcba";
  expect(reverseString("abcd")).toBe(expected);
});

test("reverse the string", () => {
  const expected = "edcba";
  expect(reverseString("abcde")).toBe(expected);
});

test("input is string", () => {
  expect(() => reverseString(1)).toThrow(TypeError);
});
