import React from "react";
import TableCell from "@material-ui/core/TableCell";
import { styles } from "@material-ui/core/TableCell/TableCell";
import { getClasses, getStyles } from "../utils";

export const tableCellProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => <TableCell {...tableCellProps} {...rest} />;
