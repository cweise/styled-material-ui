import { appBarProps } from "../AppBar";

describe("AppBar", () => {
  test("classes are not empty", () => {
    expect(Object.keys(appBarProps.classes).length).toBeGreaterThan(0);
  });
});
