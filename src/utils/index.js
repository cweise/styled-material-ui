import { createMuiTheme } from "@material-ui/core/styles";

export const getClasses = styles =>
  [...Object.keys(styles)].reduce(
    (acc, key) => ({
      ...acc,
      [key]: key
    }),
    {}
  );

export const defaultTheme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

export const getStyles = styles =>
  typeof styles === "function" ? styles(defaultTheme) : styles;
