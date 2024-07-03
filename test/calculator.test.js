import { Calculator } from "../src/calculator.js";

test("module imported", () => {
  expect(Calculator).not.toBeUndefined();
});

describe("add function", () => {
  test("add 2 numbers", () => {
    expect(new Calculator().add(1, 2)).toEqual(3);
  });
  test("add another 2 numbers", () => {
    expect(new Calculator().add(3, 4)).toEqual(7);
  });
});

describe("subtract function", () => {
  test("subtract 2 numbers", () => {
    expect(new Calculator().subtract(3, 2)).toEqual(1);
  });
  test("subtract another 2 numbers", () => {
    expect(new Calculator().subtract(4, 2)).toEqual(2);
  });

  describe("multiply function", () => {
    test("multiply 2 numbers", () => {
      expect(new Calculator().multiply(3, 4)).toEqual(12);
    });
    test("multiply another 2 numbers", () => {
      expect(new Calculator().multiply(5, 4)).toEqual(20);
    });
  });

  describe("divide function", () => {
    test("divide 2 numbers", () => {
      expect(new Calculator().divide(10, 2)).toEqual(5);
    });
    test("divide another 2 numbers", () => {
      expect(new Calculator().divide(20, 2)).toEqual(10);
    });
    test("divide by 0", () => {
      expect(() => new Calculator().divide(20, 0)).toThrow(
        "Division by zero is not allowed."
      );
    });
  });
});
