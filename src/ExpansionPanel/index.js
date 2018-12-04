import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import { styles } from "@material-ui/core/ExpansionPanel/ExpansionPanel";

import { getClasses, getStyles } from "../utils";
import { collapseProps } from "../Collapse";

export const expansionPanelProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => (
  <ExpansionPanel
    {...expansionPanelProps}
    CollapseProps={{ ...collapseProps }}
    {...rest}
  />
);
