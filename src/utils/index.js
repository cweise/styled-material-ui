export const getClasses = styles =>
  [...Object.keys(styles)].reduce(
    (acc, key) => ({
      ...acc,
      [key]: key
    }),
    {}
  );
