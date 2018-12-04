import React from "react";
import Select from "@material-ui/core/Select";
import { styles } from "@material-ui/core/Select/Select";

import { getClasses, getStyles } from "../utils";
import { menuProps } from "../Menu";

export const selectProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => (
  <Select {...selectProps} MenuProps={{ ...menuProps }} {...rest} />
);
