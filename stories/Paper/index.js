/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import Paper from "../../src/Paper";

const DefaultPaper = styled(Paper)`
  height: 250px;
  width: 250px;
`;

const StyledPaper = styled(Paper)`
  &.root {
    height: 250px;
    width: 250px;
    background: repeating-linear-gradient(
      45deg,
      #f6ba52,
      #f6ba52 10px,
      #ffd180 10px,
      #ffd180 20px
    );
  }
`;

storiesOf("Paper").add("default", () => <DefaultPaper />);

storiesOf("Paper").add("styled", () => <StyledPaper />);
