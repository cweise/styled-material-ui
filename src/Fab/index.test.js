import { fabProps } from "../Fab";

describe("Fab", () => {
  test("classes are not empty", () => {
    expect(Object.keys(fabProps.classes).length).toBeGreaterThan(0);
  });
});
