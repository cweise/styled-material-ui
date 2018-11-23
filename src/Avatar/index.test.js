import { avatarProps } from "../Avatar";

describe("Avatar", () => {
  test("classes are not empty", () => {
    expect(Object.keys(avatarProps.classes).length).toBeGreaterThan(0);
  });
});
