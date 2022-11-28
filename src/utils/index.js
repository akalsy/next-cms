/**
 * @description: 去除参数中的时间字段
 * @param {*} obj
 * @return {*}
 */
function removeTime(obj) {
  const { createdAt, publishedAt, updatedAt, ...params } = obj || {};
  Object.getOwnPropertyNames(params).forEach((item) => {
    if (typeof params[item] == "object") {
      if (Array.isArray(params[item])) {
        params[item] = params[item].map((item) => {
          return removeTime(item);
        });
      } else {
        params[item] = removeTime(params[item]);
      }
    }
  });
  return params;
}

const removeAttesAndId = (obj) => {
  /**
   * @description: 去除参数中的attributes和id
   * @return {*}
   */
  const { attributes, id, ...params } = obj || {};
  const newObj = { ...attributes, ...params };
  Object.getOwnPropertyNames(newObj).forEach((item) => {
    if (typeof newObj[item] == "object") {
      if (Array.isArray(newObj[item])) {
        newObj[item] = newObj[item].map((item) => {
          return removeAttesAndId(item);
        });
      } else {
        newObj[item] = removeAttesAndId(newObj[item]);
      }
    }
  });
  return newObj;
};

module.exports = {
  removeAttesAndId,
  removeTime,
};
