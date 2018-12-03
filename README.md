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

## Available Material-UI Components

- [x] [AppBar](https://material-ui.com/api/app-bar/#css-api)
- [x] [Avatar](https://material-ui.com/api/avatar/#css-api)
- [x] [Backdrop](https://material-ui.com/api/backdrop/#css-api)
- [x] [Badge](https://material-ui.com/api/badge/#css-api)
- [x] [BottomNavigation](https://material-ui.com/api/bottom-navigation/#css-api)
- [x] [BottomNavigationAction](https://material-ui.com/api/bottom-navigation-action/#css-api)
- [x] [Button](https://material-ui.com/api/button/#css-api)
- [x] [ButtonBase](https://material-ui.com/api/button-base/#css-api)
- [ ] Card
- [ ] CardActionArea
- [ ] CardActions
- [ ] CardContent
- [ ] CardHeader
- [ ] CardMedia
- [ ] Checkbox
- [ ] Chip
- [ ] CircularProgress
- [ ] ClickAwayListener
- [ ] Collapse
- [ ] CssBaseline
- [ ] Dialog
- [ ] DialogActions
- [ ] DialogContent
- [ ] DialogContentText
- [ ] DialogTitle
- [ ] Divider
- [ ] Drawer
- [ ] ExpansionPanel
- [ ] ExpansionPanelActions
- [ ] ExpansionPanelDetails
- [ ] ExpansionPanelSummary
- [ ] Fade
- [x] [FormControl](https://material-ui.com/api/form-control/#css-api)
- [ ] FormControlLabel
- [ ] FormGroup
- [x] [FormHelperText](https://material-ui.com/api/form-helper-text/#css-api)
- [ ] FormLabel
- [ ] Grid
- [ ] GridList
- [ ] GridListTile
- [ ] GridListTileBar
- [ ] Grow
- [ ] Hidden
- [ ] Icon
- [ ] IconButton
- [x] [Input](https://material-ui.com/api/input/#css-api)
- [ ] InputAdornment
- [x] [InputLabel](https://material-ui.com/api/input-label/#css-api)
- [ ] LinearProgress
- [ ] List
- [ ] ListItem
- [ ] ListItemAvatar
- [ ] ListItemIcon
- [ ] ListItemSecondaryAction
- [ ] ListItemText
- [ ] ListSubheader
- [ ] Menu
- [x] [MenuItem](https://material-ui.com/api/menu-item/#css-api)
- [ ] MenuList
- [ ] MobileStepper
- [ ] Modal
- [ ] MuiThemeProvider
- [ ] NativeSelect
- [ ] NoSsr
- [ ] Paper
- [ ] Popover
- [ ] Popper
- [ ] Portal
- [ ] Radio
- [ ] RadioGroup
- [ ] RootRef
- [ ] Select
- [ ] Slide
- [ ] Snackbar
- [ ] SnackbarContent
- [ ] Step
- [ ] StepButton
- [ ] StepConnector
- [ ] StepContent
- [ ] StepIcon
- [ ] StepLabel
- [ ] Stepper
- [ ] SvgIcon
- [ ] SwipeableDrawer
- [ ] Switch
- [ ] Tab
- [x] [Table](https://material-ui.com/api/table/#css-api)
- [x] [TableBody](https://material-ui.com/api/table-body/#css-api)
- [x] [TableCell](https://material-ui.com/api/table-cell/#css-api)
- [x] [TableFooter](https://material-ui.com/api/table-footer/#css-api)
- [x] [TableHead](https://material-ui.com/api/table-head/#css-api)
- [ ] TablePagination
- [x] [TableRow](https://material-ui.com/api/table-row/#css-api)
- [ ] TableSortLabel
- [ ] Tabs
- [x] [TextField](https://material-ui.com/api/text-field/#css-api)
- [ ] Toolbar
- [ ] Tooltip
- [x] [TouchRipple](https://material-ui.com/api/touch-ripple/#css-api)
- [ ] Typography
- [ ] Zoom
