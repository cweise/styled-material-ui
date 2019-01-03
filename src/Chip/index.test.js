import { chipProps } from "../Chip";

describe("Chip", () => {
  test("classes are not empty", () => {
    expect(Object.keys(chipProps.classes).length).toBeGreaterThan(0);
  });
});
