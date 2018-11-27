import { tableFooterProps } from "../TableFooter";

describe("TableFooter", () => {
  test("classes are not empty", () => {
    expect(Object.keys(tableFooterProps.classes).length).toBeGreaterThan(0);
  });
});
