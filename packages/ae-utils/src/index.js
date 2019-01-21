
// pointfreeMethod :: String -> (...a) -> Object(with methodName :: ...a -> b) -> b
export const pointfreeMethod = methodName => (...args) => x => x[methodName](...args);

// compose :: (...Function) -> Function
export const compose = function() {
  return [...arguments].reduce((a, b) => (...args) => a(b(...args)));
};

// identity :: a -> a
export const identity = x => x;
