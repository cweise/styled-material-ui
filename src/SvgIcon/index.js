import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import { styles } from "@material-ui/core/SvgIcon/SvgIcon";
import { getClasses, getStyles } from "../utils";

export const svgIconProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => <SvgIcon {...svgIconProps} {...rest} />;
