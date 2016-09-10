var delegate = function(target, handler) {
  var args = arguments.length <= 2 ? [] : [].slice.call(arguments, 2);
  return function() {
    return handler.apply(target, (arguments.length ? args.slice().concat([].slice.call(arguments)) : args));
  };
};
module.exports = delegate;
