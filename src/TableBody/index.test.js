import { tableBodyProps } from "../TableBody";

describe("TableBody", () => {
  test("classes are not empty", () => {
    expect(Object.keys(tableBodyProps.classes).length).toBeGreaterThan(0);
  });
});
