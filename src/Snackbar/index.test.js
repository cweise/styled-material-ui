import { snackbarProps } from "../Snackbar";

describe("Snackbar", () => {
  test("classes are not empty", () => {
    expect(Object.keys(snackbarProps.classes).length).toBeGreaterThan(0);
  });
});
