## Description

Style material ui components with the awesome styled-components library.

## How does it work

Material UI has its own documentation for the integration of the styled-components library. However, one quickly notices that subordinate components cannot be addressed directly. This is possible with this library.

We write all component keys from the Material UI documentation as CSS classes to the respective components and their child components. Thus it is possible to style the components via CSS classes.

## TextField Example

```javascript
import React from "react";
import styled from "styled-components";
import { TextField } from "@thepeaklab/styled-material-ui";

const StyledTextField = styled(TextField)`
  & .input {
    background-color: #eeeeee;
  }
`;

export default () => <StyledTextField name="my-textfield" />;
```

## Button Example

```javascript
import React from "react";
import styled from "styled-components";
import { Button } from "@thepeaklab/styled-material-ui";

const StyledButton = styled(Button)`
  &.root {
    border-radius: 10px;
  }

  &.containedPrimary {
    background-color: #eeeeee;

    &:hover {
      background-color: #cccccc;
    }
  }
`;

export default () => <StyledButton color="primary" variant="contained" />;
```
