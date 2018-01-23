let callAndApply = {
  caller(object, method, nameArg, ageArg, tShirtSizeArg) {
    // your code
    method.call(object, nameArg, ageArg, tShirtSizeArg);
  },
  applier(object, method, argumentsArr) {
    // your code
    method.apply(object, argumentsArr);
  },
};
module.exports = callAndApply;
