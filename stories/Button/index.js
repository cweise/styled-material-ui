/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import Button from "../../src/Button";

const StyledButton = styled(Button)`
  &.root {
    color: white;
    box-shadow: none;
    text-transform: none;
    font-size: 16px;
    padding: 6px 12px;
    background-color: #007bff;
    border: 1px solid #007bff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    &:hover {
      background-color: #0069d9;
      border-color: #0062cc;
    }
    &:active {
      box-shadow: none;
      background-color: #0062cc;
      border-color: #005cbf;
    }
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
    }
  }
`;

const NestedButton = styled(Button)`
  &.root {
    &.root {
      border: 2px solid rgba(11, 12, 53, 1);
    }
  }
`;

storiesOf("Button", module).add("default", () => <Button>Label</Button>);

storiesOf("Button", module).add("styled", () => (
  <StyledButton>Bootstrap</StyledButton>
));

storiesOf("Button", module).add("nested", () => (
  <NestedButton>Nested ButtonBase override</NestedButton>
));
