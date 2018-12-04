import React from "react";
import Collapse from "@material-ui/core/Collapse";
import { styles } from "@material-ui/core/Collapse/Collapse";
import { getClasses, getStyles } from "../utils";

export const collapseProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => <Collapse {...collapseProps} {...rest} />;
