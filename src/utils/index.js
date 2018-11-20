export const getClassKeys = styles =>
  [...Object.keys(styles)].reduce(
    (acc, key) => ({
      ...acc,
      [key]: key
    }),
    {}
  );
