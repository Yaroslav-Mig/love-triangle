/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  const length = preferences.length;
  for (let i = 0; i < length; i++) {
    const firstValue = preferences[i];
    const secondValue = preferences[firstValue - 1];
    const thirdValue = preferences[secondValue - 1];

    const firstCondition = i + 1 !== firstValue;
    const secondCondition = i + 1 === thirdValue;

    if (firstCondition && secondCondition) {
      count++;
    }
  }
  return count / 3;
};
