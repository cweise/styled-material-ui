import React from "react";
import Input from "@material-ui/core/Input";
import { styles } from "@material-ui/core/Input/Input";
import { getClasses, getStyles } from "../utils";

export const inputProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => <Input {...inputProps} {...rest} />;
