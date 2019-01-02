import React from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { styles } from "@material-ui/core/OutlinedInput/OutlinedInput";
import { getClasses, getStyles } from "../utils";

export const outlinedInputProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => (
  <OutlinedInput {...outlinedInputProps} {...rest} />
);
