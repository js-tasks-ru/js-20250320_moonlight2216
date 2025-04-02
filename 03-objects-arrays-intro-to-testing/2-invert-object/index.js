/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (obj == null) {
    return undefined;
  }
  const objInvert = {};
  for (const key in obj) {
    const value = obj[key];
    objInvert[value] = key;
  }
  return objInvert;
}
