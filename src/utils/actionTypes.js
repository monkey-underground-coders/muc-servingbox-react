const actionTypes = (actions) =>
  Object.keys(actions).reduce(
    (acc, key) => ({
      ...acc,
      [key]: actions[key].type,
    }),
    {}
  );

export default actionTypes;
