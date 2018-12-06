import { paperProps } from "../Paper";

describe("Paper", () => {
  test("classes are not empty", () => {
    expect(Object.keys(paperProps.classes).length).toBeGreaterThan(0);
  });
});
