import React from "react";
import FormControl from "@material-ui/core/FormControl";
import { styles } from "@material-ui/core/FormControl/FormControl";
import { getClasses, getStyles } from "../utils";

export const formControlProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => <FormControl {...formControlProps} {...rest} />;
