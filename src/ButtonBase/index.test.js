import { buttonBaseProps } from "./";

describe("ButtonBase", () => {
  test("classes are not empty", () => {
    expect(Object.keys(buttonBaseProps.classes).length).toBeGreaterThan(0);
  });
});
