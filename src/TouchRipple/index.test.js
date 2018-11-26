import { touchRippleProps } from "./";

describe("TouchRipple", () => {
  test("classes are not empty", () => {
    expect(Object.keys(touchRippleProps.classes).length).toBeGreaterThan(0);
  });
});
