import { iconProps } from "../Icon";

describe("Icon", () => {
  test("classes are not empty", () => {
    expect(Object.keys(iconProps.classes).length).toBeGreaterThan(0);
  });
});
