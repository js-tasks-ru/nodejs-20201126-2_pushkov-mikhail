function sum(a, b) {

  if (typeof (a + b) !== 'number') {
    throw new TypeError()
  }

  return a + b

}

module.exports = sum;
