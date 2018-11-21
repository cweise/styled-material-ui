import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import { styles } from "@material-ui/core/InputLabel/InputLabel";
import { getClasses } from "../utils";

export const inputLabelProps = {
  classes: getClasses(styles)
};

export default ({ ...rest }) => (
  <InputLabel classes={inputLabelProps} {...rest} />
);
