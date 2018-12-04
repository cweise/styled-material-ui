import { collapseProps } from "../Collapse";

describe("Collapse", () => {
  test("classes are not empty", () => {
    expect(Object.keys(collapseProps.classes).length).toBeGreaterThan(0);
  });
});
