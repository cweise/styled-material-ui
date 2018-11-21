import React from "react";
import TextField from "@material-ui/core/TextField";
import { styles } from "@material-ui/core/FormControl/FormControl";

import { getClasses } from "../utils";

const StyledTextField = ({ ...rest }) => (
  <TextField classes={getClasses(styles)} {...rest} />
);

export default StyledTextField;
