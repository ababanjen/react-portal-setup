const compareObjectValues = (obj, source) => {
  return Object.keys(source).every(
    key => obj.hasOwnProperty(key) && obj[key] === source[key]
  );
};

export {
  compareObjectValues
};
