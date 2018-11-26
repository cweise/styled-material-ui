import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import { styles } from "@material-ui/core/ButtonBase/ButtonBase";

import { touchRippleProps } from "../TouchRipple";
import { getClasses, getStyles } from "../utils";

export const buttonBaseProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => (
  <ButtonBase
    {...buttonBaseProps}
    TouchRippleProps={touchRippleProps}
    {...rest}
  />
);
