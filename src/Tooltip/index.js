import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { styles } from "@material-ui/core/Tooltip/Tooltip";
import { getClasses, getStyles } from "../utils";

export const tooltipProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => <Tooltip {...tooltipProps} {...rest} />;
