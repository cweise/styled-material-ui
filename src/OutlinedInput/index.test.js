import { outlinedInputProps } from "../OutlinedInput";

describe("OutlinedInput", () => {
  test("classes are not empty", () => {
    expect(Object.keys(outlinedInputProps.classes).length).toBeGreaterThan(0);
  });
});
