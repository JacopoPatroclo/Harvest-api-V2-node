export const buildParamStringFromObj = obj => {
  if (obj) {
    const paramsString = Object.keys(obj)
      .filter(key => typeof obj[key] !== 'undefined')
      .map(key => {
        return key;
      })
      .reduce((acc, key, index) => {
        if (index === 0) {
          return `${key}=${obj[key]}`;
        }
        return `${acc}&${key}=${obj[key]}`;
      }, '');
    return paramsString ? paramsString : '';
  } else {
    return '';
  }
};
