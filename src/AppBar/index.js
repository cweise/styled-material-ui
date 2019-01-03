import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { styles } from "@material-ui/core/AppBar/AppBar";

import { getClasses, getStyles } from "../utils";

export const appBarProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => <AppBar {...appBarProps} {...rest} />;
