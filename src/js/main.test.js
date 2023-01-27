import { helloFunction } from "./script.js";

test("testing", () => {
  expect(helloFunction()).toBe("Hello");
});
