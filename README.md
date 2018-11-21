## Description

Style material ui components the "styled" way!

## Example

```javascript
import styled from "styled-components";
import { TextField } from "@thepeaklab/styled-material-ui";

const StyledTextField = styled(TextField)`
  & .input {
    background-color: #eeeeee;
  }
`;
```
