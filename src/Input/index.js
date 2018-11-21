import React from "react";
import Input from "@material-ui/core/Input";
import { styles } from "@material-ui/core/Input/Input";
import { getClasses } from "../utils";

export const inputProps = {
  classes:
    getClasses(styles)

};

export default ({ ...rest }) => (
  <Input classes={inputProps} {...rest} />
);
