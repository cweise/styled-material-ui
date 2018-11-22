import { buttonProps } from "../Button";

describe("Button", () => {
  test("classes are not empty", () => {
    expect(Object.keys(buttonProps.classes).length).toBeGreaterThan(0);
  });
});
