import { tableHeadProps } from "../TableHead";

describe("TableHead", () => {
  test("classes are not empty", () => {
    expect(Object.keys(tableHeadProps.classes).length).toBeGreaterThan(0);
  });
});
