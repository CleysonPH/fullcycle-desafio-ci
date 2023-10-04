const math = require("./math");

describe("math.sum", () => {
  it("should add two numbers", () => {
    expect(math.sum(1, 2)).toBe(3);
  });
});
