import { expansionPanelProps } from "../ExpansionPanel";

describe("ExpansionPanel", () => {
  test("classes are not empty", () => {
    expect(Object.keys(expansionPanelProps.classes).length).toBeGreaterThan(0);
  });
});
