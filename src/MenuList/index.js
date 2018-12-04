import React from "react";
import MenuList from "@material-ui/core/MenuList";

import { listProps } from "../List";

export default ({ ...rest }) => <MenuList {...listProps} {...rest} />;
