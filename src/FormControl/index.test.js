import { formControlProps } from "../FormControl";

describe("FormControl", () => {
  test("classes are not empty", () => {
    expect(Object.keys(formControlProps.classes).length).toBeGreaterThan(0);
  });
});
