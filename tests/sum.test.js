const runLogic = require("../src/logic.trans");

test("test0: qwe_qwe_qwe", () => {
 expect(runLogic("qwe_qwe_qwe")).toBe("qweQweQwe");
});

test("test1: test_test", () => {
 expect(runLogic("test_test")).toBe("testTest");
});

test("test2: test-_-test", () => {
 expect(runLogic("test-_-test")).toBe("test--test");
});

test("test3: test__test", () => {
 expect(runLogic("test__test")).toBe("testTest");
});

test("test4: test_t_e_s_t", () => {
 expect(runLogic("test_t_e_s_t")).toBe("testTEST");
});



