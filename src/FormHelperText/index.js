import React from "react";
import FormHelperText from "@material-ui/core/FormHelperText";
import { styles } from "@material-ui/core/FormHelperText/FormHelperText";
import { getClasses } from "../utils";

export const formHelperTextProps = {
  classes: getClasses(styles)
};

export default ({ ...rest }) => (
  <FormHelperText classes={formHelperTextProps} {...rest} />
);
