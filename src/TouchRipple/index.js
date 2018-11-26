import React from "react";
import TouchRipple, { styles } from "@material-ui/core/ButtonBase/TouchRipple";

import { getClasses, getStyles } from "../utils";

export const touchRippleProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => <TouchRipple {...touchRippleProps} {...rest} />;
