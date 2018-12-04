import { menuProps } from "../Menu";

describe("Menu", () => {
  test("classes are not empty", () => {
    expect(Object.keys(menuProps.classes).length).toBeGreaterThan(0);
  });
});
