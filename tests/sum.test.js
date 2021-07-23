const runLogic = require("../src/logic.trans");

test("sum test", () => {
 expect(runLogic("qwe_qwe_qwe")).toBe("qweQweQwe");
});