import React from "react";
import Table from "@material-ui/core/Table";
import { styles } from "@material-ui/core/Table/Table";
import { getClasses, getStyles } from "../utils";

export const tableProps = {
  classes: getClasses(getStyles(styles))
};

export default ({ ...rest }) => <Table {...tableProps} {...rest} />;
