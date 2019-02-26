import React from "react";
import Tabs from "@material-ui/core/Tabs";
import { styles } from "@material-ui/core/Tabs/Tabs";
import { getClasses, getStyles } from "../utils";

export const tabsProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => <Tabs {...tabsProps} {...rest} />;
