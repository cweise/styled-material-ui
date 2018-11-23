import React from "react";
import FormHelperText from "@material-ui/core/FormHelperText";
import { styles } from "@material-ui/core/FormHelperText/FormHelperText";
import { getClasses, getStyles } from "../utils";

export const formHelperTextProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => (
  <FormHelperText {...formHelperTextProps} {...rest} />
);
