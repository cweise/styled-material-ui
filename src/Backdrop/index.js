import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import { styles } from "@material-ui/core/Backdrop/Backdrop";

import { getClasses, getStyles } from "../utils";

export const backdropProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => <Backdrop {...backdropProps} {...rest} />;
