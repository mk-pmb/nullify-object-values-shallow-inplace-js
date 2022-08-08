'use strict';

module.exports = function nullifyObjectValuesShallowInplace(o) {
  // eslint-disable-next-line no-param-reassign
  Object.keys(o).forEach(function d(k) { o[k] = null; });
  return o;
};
