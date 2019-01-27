import { typographyProps } from "../Typography";

describe("Typography", () => {
  test("classes are not empty", () => {
    expect(Object.keys(typographyProps.classes).length).toBeGreaterThan(0);
  });
});
