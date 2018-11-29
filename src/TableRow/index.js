import React from "react";
import TableRow from "@material-ui/core/TableRow";
import { styles } from "@material-ui/core/TableRow/TableRow";
import { getClasses, getStyles } from "../utils";

export const tableRowProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => <TableRow {...tableRowProps} {...rest} />;
