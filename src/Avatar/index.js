import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { styles } from "@material-ui/core/Avatar/Avatar";
import { getClasses, getStyles } from "../utils";

export const avatarProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => <Avatar {...avatarProps} {...rest} />;
