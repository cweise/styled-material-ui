import React from "react";
import Icon from "@material-ui/core/Icon";
import { styles } from "@material-ui/core/Icon/Icon";
import { getClasses, getStyles } from "../utils";

export const iconProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => <Icon {...iconProps} {...rest} />;
