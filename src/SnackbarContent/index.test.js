import { snackbarContentProps } from "../SnackbarContent";

describe("SnackbarContent", () => {
  test("classes are not empty", () => {
    expect(Object.keys(snackbarContentProps.classes).length).toBeGreaterThan(0);
  });
});
