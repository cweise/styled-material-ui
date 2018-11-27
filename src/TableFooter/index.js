import React from "react";
import TableFooter from "@material-ui/core/TableFooter";
import { styles } from "@material-ui/core/TableFooter/TableFooter";
import { getClasses, getStyles } from "../utils";

export const tableFooterProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => <TableFooter {...tableFooterProps} {...rest} />;
