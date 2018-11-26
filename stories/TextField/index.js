/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import TextField from "../../src/TextField";

const StyledTextField = styled(TextField)`
  .root {
    border: 2px solid rgba(11, 12, 53, 1);
  }
`;

storiesOf("TextField", module).add("default", () => <TextField />);
storiesOf("TextField", module).add("styled", () => <StyledTextField />);
