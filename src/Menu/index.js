import React from "react";
import Menu from "@material-ui/core/Menu";
import { styles } from "@material-ui/core/Menu/Menu";

import { listProps } from "../List";
import { getClasses, getStyles } from "../utils";

export const menuProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => (
  <Menu {...menuProps} MenuListProps={{ ...listProps }} {...rest} />
);
