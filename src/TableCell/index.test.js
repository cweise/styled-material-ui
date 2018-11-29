import { tableCellProps } from "../TableCell";

describe("TableCell", () => {
  test("classes are not empty", () => {
    expect(Object.keys(tableCellProps.classes).length).toBeGreaterThan(0);
  });
});
