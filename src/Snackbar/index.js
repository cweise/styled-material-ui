import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { styles } from "@material-ui/core/Snackbar/Snackbar";

import { getClasses, getStyles } from "../utils";
import { menuProps } from "../Menu";

export const snackbarProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => (
  <Snackbar {...snackbarProps} MenuProps={{ ...menuProps }} {...rest} />
);
