import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import { styles } from "@material-ui/core/InputLabel/InputLabel";
import { getClasses, getStyles } from "../utils";

export const inputLabelProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => <InputLabel {...inputLabelProps} {...rest} />;
