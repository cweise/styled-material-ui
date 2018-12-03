import { svgIconProps } from "../SvgIcon";

describe("SvgIcon", () => {
  test("classes are not empty", () => {
    expect(Object.keys(svgIconProps.classes).length).toBeGreaterThan(0);
  });
});
