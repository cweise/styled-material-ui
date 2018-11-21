import React from "react";
import TextField from "@material-ui/core/TextField";
import { inputProps } from "../Input";
import { inputLabelProps } from "../InputLabel";
import { formHelperTextProps } from "../FormHelperText";
import { formControlProps } from "../FormControl";

export default ({ ...rest }) => (
  <TextField
    classes={formControlProps}
    InputProps={inputProps}
    InputLabelProps={inputLabelProps}
    FormHelperTextProps={formHelperTextProps}
    {...rest}
  />
);
