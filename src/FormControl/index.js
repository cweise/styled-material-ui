import React from "react";
import FormControl from "@material-ui/core/FormControl";
import { styles } from "@material-ui/core/FormControl/FormControl";
import { getClasses } from "../utils";

export const formControlProps = {
  classes: getClasses(styles)
};

export default ({ ...rest }) => (
  <FormControl classes={formControlProps} {...rest} />
);
