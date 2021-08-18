module.exports = function reverse (n) {
  result = parseInt(n.toString().split('').reverse().join(''))
  return result;
}
