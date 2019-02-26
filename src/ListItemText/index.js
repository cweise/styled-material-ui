import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import { styles } from "@material-ui/core/ListItemText/ListItemText";
import { getClasses, getStyles } from "../utils";

export const listItemTextProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => (
  <ListItemText {...listItemTextProps} {...rest} />
);
