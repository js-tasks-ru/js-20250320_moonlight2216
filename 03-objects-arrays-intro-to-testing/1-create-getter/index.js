/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const splittedPath = path.split(".");
  return function getter(obj) {
    let res = obj;
    for (const path of splittedPath) {
      if (
        res === null ||
        typeof res !== "object" ||
        obj === null ||
        !Object.prototype.hasOwnProperty.call(res, path)
      ) {
        return undefined;
      } else {
        res = res[path];
      }
    }
    return res;
  };
}
