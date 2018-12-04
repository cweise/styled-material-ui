import { listProps } from "../List";

describe("List", () => {
  test("classes are not empty", () => {
    expect(Object.keys(listProps.classes).length).toBeGreaterThan(0);
  });
});
