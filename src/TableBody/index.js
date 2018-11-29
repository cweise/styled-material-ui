import React from "react";
import TableBody from "@material-ui/core/TableBody";
import { styles } from "@material-ui/core/TableBody/TableBody";
import { getClasses, getStyles } from "../utils";

export const tableBodyProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => <TableBody {...tableBodyProps} {...rest} />;
