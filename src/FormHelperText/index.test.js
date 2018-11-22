import { formHelperTextProps } from "../FormHelperText";

describe("FormHelperText", () => {
  test("classes are not empty", () => {
    expect(Object.keys(formHelperTextProps.classes).length).toBeGreaterThan(0);
  });
});
