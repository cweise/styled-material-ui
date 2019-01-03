import React from "react";
import Chip from "@material-ui/core/Chip";
import { styles } from "@material-ui/core/Chip/Chip";

import { getClasses, getStyles } from "../utils";

export const chipProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => <Chip {...chipProps} {...rest} />;
