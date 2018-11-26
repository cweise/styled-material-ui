import { backdropProps } from "../Backdrop";

describe("Backdrop", () => {
  test("classes are not empty", () => {
    expect(Object.keys(backdropProps.classes).length).toBeGreaterThan(0);
  });
});
