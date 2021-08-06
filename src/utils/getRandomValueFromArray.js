/** @format */

/**
 *
 * @param {any[]} array
 * @returns {any}
 */
function getRandomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);

  return array[random];
}

module.exports = getRandomValueFromArray;
