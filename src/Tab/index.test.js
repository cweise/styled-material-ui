import { tabProps } from "../Tab";

describe("Tab", () => {
  test("classes are not empty", () => {
    expect(Object.keys(tabProps.classes).length).toBeGreaterThan(0);
  });
});
