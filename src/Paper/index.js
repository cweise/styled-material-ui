import React from "react";
import Paper from "@material-ui/core/Paper";
import { styles } from "@material-ui/core/Paper/Paper";

import { getClasses, getStyles } from "../utils";

export const paperProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => <Paper {...paperProps} {...rest} />;
