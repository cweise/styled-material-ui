import { tableRowProps } from "../TableRow";

describe("TableRow", () => {
  test("classes are not empty", () => {
    expect(Object.keys(tableRowProps.classes).length).toBeGreaterThan(0);
  });
});
