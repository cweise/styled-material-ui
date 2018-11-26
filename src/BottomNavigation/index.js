import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { styles } from "@material-ui/core/BottomNavigation/BottomNavigation";

import { getClasses, getStyles } from "../utils";

export const bottomNavigationProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => (
  <BottomNavigation {...bottomNavigationProps} {...rest} />
);
