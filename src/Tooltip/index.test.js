import { tooltipProps } from "../Tooltip";

describe("Tooltip", () => {
  test("classes are not empty", () => {
    expect(Object.keys(tooltipProps.classes).length).toBeGreaterThan(0);
  });
});
