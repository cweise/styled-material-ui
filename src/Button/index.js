import React from "react";
import Button from "@material-ui/core/Button";
import { styles } from "@material-ui/core/Button/Button";

import { getClasses, defaultTheme } from "../utils";

export const buttonProps = {
  classes: getClasses(styles(defaultTheme))
};

export default ({ ...rest }) => <Button {...buttonProps} {...rest} />;
