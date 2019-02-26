/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import TextField from "../../src/TextField";
import Selectors from "../../src/Selectors";

const StyledTextField = styled(TextField)`
  ${Selectors.TextField.Root} {
    background-color: orange;
  }

  ${Selectors.TextField.BorderBottom} {
    border-bottom: 1px solid green;
  }
`;

storiesOf("TextField", module).add("default", () => <TextField />);
storiesOf("TextField", module).add("styled", () => <StyledTextField />);
