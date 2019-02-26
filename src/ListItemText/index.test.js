import { listItemTextProps } from "../ListItemText";

describe("ListItemText", () => {
  test("classes are not empty", () => {
    expect(Object.keys(listItemTextProps.classes).length).toBeGreaterThan(0);
  });
});
