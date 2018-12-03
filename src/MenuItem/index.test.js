import { menuItemProps } from "../MenuItem";

describe("MenuItem", () => {
  test("classes are not empty", () => {
    expect(Object.keys(menuItemProps.classes).length).toBeGreaterThan(0);
  });
});
