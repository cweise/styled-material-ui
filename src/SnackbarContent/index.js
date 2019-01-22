import React from "react";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { styles } from "@material-ui/core/SnackbarContent/SnackbarContent";

import { getClasses, getStyles } from "../utils";

export const snackbarContentProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => (
  <SnackbarContent {...snackbarContentProps} {...rest} />
);
