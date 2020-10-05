const propValidator = (key, allowedValues) => (
  props,
  _,
  componentName,
) => (!allowedValues.includes(props[key])
  ? new Error(`Invalid ${key} prop in ${componentName}. Received "${props[key]}" but expect one of: ${allowedValues.join(', ')}.`)
  : null
);

export default propValidator;
