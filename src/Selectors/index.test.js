import Selectors from "./index";

describe("Selectors", () => {
  describe("TextField", () => {
    test("Root", () => {
      const expectedSelector = "&.root";
      expect(Selectors.TextField.Root).toEqual(expectedSelector);
    });

    test("BorderBottom", () => {
      const expectedSelector = "&.root:before";
      expect(Selectors.TextField.BorderBottom).toEqual(expectedSelector);
    });

    test("Input", () => {
      const expectedSelector = "& .input";
      expect(Selectors.TextField.Input).toEqual(expectedSelector);
    });
  });

  describe("Select", () => {
    test("Root", () => {
      const expectedSelector = "&.root";
      expect(Selectors.Select.Root).toEqual(expectedSelector);
    });

    test("Icon", () => {
      const expectedSelector = "& .icon";
      expect(Selectors.Select.Icon).toEqual(expectedSelector);
    });
  });

  describe("Button", () => {
    test("Root", () => {
      const expectedSelector = "&.root";
      expect(Selectors.Button.Root).toEqual(expectedSelector);
    });

    test("ContainedPrimary", () => {
      const expectedSelector = "&.containedPrimary";
      expect(Selectors.Button.ContainedPrimary).toEqual(expectedSelector);
    });
  });
});
