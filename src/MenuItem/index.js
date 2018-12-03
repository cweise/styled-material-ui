import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { styles } from "@material-ui/core/MenuItem/MenuItem";

import { getClasses, defaultTheme } from "../utils";

export const menuItemProps = {
  classes: getClasses(styles(defaultTheme))
};

export default ({ ...rest }) => <MenuItem {...menuItemProps} {...rest} />;
