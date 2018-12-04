import { selectProps } from "../Select";

describe("Select", () => {
  test("classes are not empty", () => {
    expect(Object.keys(selectProps.classes).length).toBeGreaterThan(0);
  });
});
