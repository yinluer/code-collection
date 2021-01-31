function createStore(reducer, initState) {
  let currentState = initState;
  let currentReducer = reducer;
  let currentListeners = [];

  function getState() {
    return currentState;
  }

  function dispatch(action) {
    currentState = currentReducer(currentState, action)
  }

  function subscribe(listener) {
    currentListeners.push(listener);
    return function unsubscribe() {
      const index = currentListeners.indexOf(listener);
      currentListeners.splice(index, 1);
    }
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}
