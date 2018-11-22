import { inputProps } from "../Input";

describe("Input", () => {
  test("classes are not empty", () => {
    expect(Object.keys(inputProps.classes).length).toBeGreaterThan(0);
  });
});
