import { tableProps } from "../Table";

describe("Table", () => {
  test("classes are not empty", () => {
    expect(Object.keys(tableProps.classes).length).toBeGreaterThan(0);
  });
});
