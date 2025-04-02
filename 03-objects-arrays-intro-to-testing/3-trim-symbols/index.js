/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let resultStr = "";
  let prev = "";
  let count = 0;
  if (size == null) {
    return string;
  }
  for (const char of string) {
    if (char === prev) {
      count++;
    } else {
      prev = char;
      count = 1;
    }
    if (count <= size) {
      resultStr += char;
    }
  }
  return resultStr;
}
