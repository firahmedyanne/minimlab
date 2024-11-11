function mergeProjection(projections) {
  const result = {};
  projections.forEach((projection) => {
    Object.keys(projection).forEach((key) => {
      if (result[key] === undefined) {
        result[key] = projection[key];
      }
    });
  });
  return result;
}
