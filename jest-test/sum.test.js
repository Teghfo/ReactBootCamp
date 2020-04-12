const { sum, mul } = require("./sum");

describe("summation", () => {
  test("test sum two numbers", () => {
    let a = 0;
    let b = 10;
    let output = a + b;
    expect(sum(a, b)).toEqual(output);
  });

  test("test multiply two numbers", () => {
    expect(mul(5, 6)).toEqual(30);
  });
});
