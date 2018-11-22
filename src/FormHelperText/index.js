import React from "react";
import FormHelperText from "@material-ui/core/FormHelperText";
import { styles } from "@material-ui/core/FormHelperText/FormHelperText";
import { getClasses, defaultTheme } from "../utils";

export const formHelperTextProps = {
  classes: getClasses(styles(defaultTheme))
};

export default ({ ...rest }) => (
  <FormHelperText {...formHelperTextProps} {...rest} />
);
