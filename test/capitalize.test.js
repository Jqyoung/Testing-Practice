import capitalize from "../src/capitalize.js";

test("capitalize the first character in a string", () => {
  expect(capitalize("hello")).toMatch(/^[A-Z]/);
});
