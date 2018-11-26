import { bottomNavigationProps } from "../BottomNavigation";

describe("BottomNavigation", () => {
  test("classes are not empty", () => {
    expect(Object.keys(bottomNavigationProps.classes).length).toBeGreaterThan(
      0
    );
  });
});
