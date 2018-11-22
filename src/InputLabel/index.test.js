import { inputLabelProps } from "../InputLabel";

describe("InputLabel", () => {
  test("classes are not empty", () => {
    expect(Object.keys(inputLabelProps.classes).length).toBeGreaterThan(0);
  });
});
