## Description

Style material ui components with the awesome styled-components library.

## How to install

```console
npm install @thepeaklab/styled-material-ui --save
```

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
- [x] [Chip](https://material-ui.com/api/chip/#css-api)
- [ ] CircularProgress
- [ ] ClickAwayListener
- [x] [Collapse](https://material-ui.com/api/collapse/#css-api)
- [ ] CssBaseline
- [ ] Dialog
- [ ] DialogActions
- [ ] DialogContent
- [ ] DialogContentText
- [ ] DialogTitle
- [ ] Divider
- [ ] Drawer
- [x] [ExpansionPanel](https://material-ui.com/api/expansion-panel/#css-api)
- [ ] ExpansionPanelActions
- [ ] ExpansionPanelDetails
- [ ] ExpansionPanelSummary
- [x] [Fab](https://material-ui.com/api/fab/#fab-api)
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
- [x] [Icon](https://material-ui.com/api/icon/#css-api)
- [ ] IconButton
- [x] [Input](https://material-ui.com/api/input/#css-api)
- [ ] InputAdornment
- [x] [InputLabel](https://material-ui.com/api/input-label/#css-api)
- [ ] LinearProgress
- [x] [List](https://material-ui.com/api/list/#css-api)
- [ ] ListItem
- [ ] ListItemAvatar
- [ ] ListItemIcon
- [ ] ListItemSecondaryAction
- [ ] ListItemText
- [ ] ListSubheader
- [x] [Menu](https://material-ui.com/api/menu/#css-api)
- [x] [MenuItem](https://material-ui.com/api/menu-item/#css-api)
- [x] [MenuList](https://material-ui.com/api/menu-list/#css-api)
- [ ] MobileStepper
- [ ] Modal
- [ ] MuiThemeProvider
- [ ] NativeSelect
- [ ] NoSsr
- [x] [OutlinedInput](https://material-ui.com/api/outlined-input/#css-api)
- [x] [Paper](https://material-ui.com/api/paper/#css-api)
- [ ] Popover
- [ ] Popper
- [ ] Portal
- [ ] Radio
- [ ] RadioGroup
- [ ] RootRef
- [x] [Select](https://material-ui.com/api/select/#css-api)
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
- [x] [SvgIcon](https://material-ui.com/api/svg-icon/#css-api)
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
