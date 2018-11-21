import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { styles } from "@material-ui/core/AppBar/AppBar";

import { getClasses } from "../utils";

export default ({ ...rest }) => (
  <AppBar classes={getClasses(styles)} {...rest} />
);
