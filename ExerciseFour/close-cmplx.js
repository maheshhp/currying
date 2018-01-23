let total = 0;
let returnFn = (argument) => {
  if (argument === undefined) {
    let returnValue = total;
    total = 0;
    return returnValue;
  }
  total += argument;
  return returnFn;
};
module.exports = returnFn;
