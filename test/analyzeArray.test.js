import analyzeArray from "../src/analyzeArray";

test("analyzeArray module is defined", () => {
  expect(analyzeArray).toBeDefined();
});

test("average of the numbers", () => {
  expect(analyzeArray([3, 5, 10, 4, 8])).toEqual({
    average: 6,
    min: 3,
    max: 10,
    length: 5,
  });
});

test("length of the numbers", () => {
  expect(analyzeArray([3, 5, 10, 4, 8, 6])).toEqual({
    average: 6,
    min: 3,
    max: 10,
    length: 6,
  });
});

test("max of the numbers", () => {
  expect(analyzeArray([3, 5, 16, 4, 8, 6])).toEqual({
    average: 7,
    min: 3,
    max: 16,
    length: 6,
  });
});

test("min of the numbers", () => {
  expect(analyzeArray([1, 7, 16, 4, 8, 6])).toEqual({
    average: 7,
    min: 1,
    max: 16,
    length: 6,
  });
});
