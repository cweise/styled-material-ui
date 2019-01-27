import React from "react";
import Typography from "@material-ui/core/Typography";
import { styles } from "@material-ui/core/Typography/Typography";

import { getClasses, getStyles } from "../utils";

export const typographyProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => <Typography {...typographyProps} {...rest} />;
