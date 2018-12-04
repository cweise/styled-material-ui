import React from "react";
import List from "@material-ui/core/List";
import { styles } from "@material-ui/core/List/List";
import { getClasses, getStyles } from "../utils";

export const listProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => <List {...listProps} {...rest} />;
