/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import Avatar from "../../src/Avatar";

const StyledAvatar = styled(Avatar)`
  &.root {
    width: 60px;
    height: 60px;
    border: 2px solid rgba(11, 12, 53, 1);
  }
`;

storiesOf("Avatar", module).add("default", () => (
  <Avatar src="https://d3iw72m71ie81c.cloudfront.net/female-52.jpg" />
));

storiesOf("Avatar", module).add("styled", () => (
  <StyledAvatar src="https://d3iw72m71ie81c.cloudfront.net/female-52.jpg" />
));
