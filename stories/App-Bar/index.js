/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "../../src/AppBar";

const StyledAppBar = styled(AppBar)`
  &.root {
    border: 2px solid rgba(11, 12, 53, 1);
  }
`;

storiesOf("AppBar", module).add("default", () => (
  <AppBar>
    <Toolbar>
      <Typography variant="h6" color="inherit">
        Default
      </Typography>
    </Toolbar>
  </AppBar>
));

storiesOf("AppBar", module).add("styled", () => (
  <StyledAppBar>
    <Toolbar>
      <Typography variant="h6" color="inherit">
        Styled
      </Typography>
    </Toolbar>
  </StyledAppBar>
));
