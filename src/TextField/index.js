import React from "react";
import TextField from "@material-ui/core/TextField";
import { styles } from "@material-ui/core/FormControl/FormControl";

import { getClassKeys } from "../utils";

const StyledTextField = ({ ...rest }) => (
  <TextField classes={getClassKeys(styles)} {...rest} />
);

export default StyledTextField;
