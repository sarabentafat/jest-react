const sum = require("../sum");
describe("check the numbers sum total", () => {
  describe.only("no input or one input number ", () => {
    test("1 input number", () => {
      expect(sum(10)).toBe(10);
    });
    test("retourner 0 if input =null ", () => {
      expect(sum(10, 10, 2)).toBe(22);
    });
  });
  describe("if more than number input", () => {
    test("retourner un nombre +nbr 2", () => {
      expect(sum(10, 10)).toBe(20);
    });
    test("retourner 3 nombre ", () => {
      expect(sum(10, 10, 2)).toBe(22);
    });

    test("infinity of numbers", () => {
      expect(sum(1, 2, 3, 5, 0, 4)).toBe(15);
    });
  });
});
