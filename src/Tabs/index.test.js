import { tabsProps } from "../Tabs";

describe("Tabs", () => {
  test("classes are not empty", () => {
    expect(Object.keys(tabsProps.classes).length).toBeGreaterThan(0);
  });
});
