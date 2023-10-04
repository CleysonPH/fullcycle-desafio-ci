const math = require("./math");

describe("math.sum", () => {
  it("should add two numbers", () => {
    expect(math.sum(1, 2)).toBe(3);
  });
});

describe("math.subtract", () => {
  it("should subtract two numbers", () => {
    expect(math.subtract(1, 2)).toBe(-1);
  });
});

describe("math.multiply", () => {
  it("should multiply two numbers", () => {
    expect(math.multiply(1, 2)).toBe(2);
  });
});

describe("math.divide", () => {
  it("should divide two numbers", () => {
    expect(math.divide(1, 2)).toBe(0.5);
  });
});
