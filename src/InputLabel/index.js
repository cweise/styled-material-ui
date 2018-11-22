import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import { styles } from "@material-ui/core/InputLabel/InputLabel";
import { getClasses, defaultTheme } from "../utils";

export const inputLabelProps = {
  classes: getClasses(styles(defaultTheme))
};

export default ({ ...rest }) => <InputLabel {...inputLabelProps} {...rest} />;
