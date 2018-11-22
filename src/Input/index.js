import React from "react";
import Input from "@material-ui/core/Input";
import { styles } from "@material-ui/core/Input/Input";
import { getClasses, defaultTheme } from "../utils";

export const inputProps = {
  classes: getClasses(styles(defaultTheme))
};

export default ({ ...rest }) => <Input {...inputProps} {...rest} />;
