import React from "react";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { styles } from "@material-ui/core/BottomNavigationAction/BottomNavigationAction";

import { getClasses, getStyles } from "../utils";

export const bottomNavigationActionProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => (
  <BottomNavigationAction {...bottomNavigationActionProps} {...rest} />
);
