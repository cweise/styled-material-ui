import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { styles } from "@material-ui/core/AppBar/AppBar";

import { getClasses, defaultTheme } from "../utils";

export const appBarProps = {
  classes: getClasses(styles(defaultTheme))
};

export default ({ ...rest }) => <AppBar {...appBarProps} {...rest} />;
