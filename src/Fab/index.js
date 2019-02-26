import React from "react";
import Fab from "@material-ui/core/Fab";
import { styles } from "@material-ui/core/Fab/Fab";

import { getClasses, getStyles } from "../utils";

export const fabProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => <Fab {...fabProps} {...rest} />;
