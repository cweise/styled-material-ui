import { bottomNavigationActionProps } from "./";

describe("BottomNavigationAction", () => {
  test("classes are not empty", () => {
    expect(
      Object.keys(bottomNavigationActionProps.classes).length
    ).toBeGreaterThan(0);
  });
});
