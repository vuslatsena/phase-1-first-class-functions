function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  function namedFunction() {
    console.log("Hello, world!");
  }
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log("Hello, world!");
  };
}

module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction,
};
