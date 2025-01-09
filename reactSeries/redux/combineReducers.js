function combineReducers(reducers) {
  const newState = {}
  return function(state, action) {
    for (const key in reducers) {
      if (Object.prototype.hasOwnProperty.call(reducers, key)) {
        const reducer = reducers[key];
        newState[key] = reducer(state[key], action)
      }
    }
    return newState;
  }
}