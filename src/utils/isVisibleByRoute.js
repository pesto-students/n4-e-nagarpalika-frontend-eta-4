/** @format */

/**
 *
 * @param {String} pathname
 * @param {String[]} routes
 * @returns {Boolean}
 */
function isVisibleByRoute(pathname, routes = []) {
  return routes.findIndex((route) => route === pathname) > -1;
}

export default isVisibleByRoute;
