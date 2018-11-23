import React from "react";
import Button from "@material-ui/core/Button";
import { styles } from "@material-ui/core/Button/Button";

import { getClasses, getStyles } from "../utils";

export const buttonProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => <Button {...buttonProps} {...rest} />;
