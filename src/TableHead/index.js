import React from "react";
import TableHead from "@material-ui/core/TableHead";
import { styles } from "@material-ui/core/TableHead/TableHead";
import { getClasses, getStyles } from "../utils";

export const tableHeadProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => <TableHead {...tableHeadProps} {...rest} />;
