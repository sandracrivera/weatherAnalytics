const translate = (intl, id, values = {}) => {
  return intl.formatMessage({ id }, values);
};

export { translate };
