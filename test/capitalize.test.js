import capitalize from "../src/capitalize.js";

test("module exists", () => {
  expect(capitalize).toBeDefined();
});

test("capitalize the first character", () => {
  expect(capitalize("hello")).toMatch(/^[A-Z]/);
});

test("string with first letter capitalized", () => {
  const expected = "I am Joe";
  expect(capitalize("i am Joe")).toBe(expected);
});

test("another string with first letter capitalized", () => {
  const expected = "Bye";
  expect(capitalize("bye")).toBe(expected);
});

test("when it is not a string", () => {
  expect(() => capitalize(1)).toThrow(TypeError);
});

test("input is undefined", () => {
  expect(() => capitalize()).toThrow(TypeError);
});
