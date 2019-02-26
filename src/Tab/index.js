import React from "react";
import Tab from "@material-ui/core/Tab";
import { styles } from "@material-ui/core/Tab/Tab";
import { getClasses, getStyles } from "../utils";

export const tabProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => <Tab {...tabProps} {...rest} />;
