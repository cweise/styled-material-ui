import { getStyles } from "./";

describe("getStyles", () => {
  test("returns styles as object", () => {
    const styleObj = {};
    expect(getStyles(styleObj)).toMatchObject(styleObj);
  });

  test("executes styles as function", () => {
    const styleObj = {};
    const styleFunc = () => styleObj;
    expect(getStyles(styleFunc)).toMatchObject(styleObj);
  });
});
