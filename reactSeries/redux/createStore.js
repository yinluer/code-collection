function createStore (reducer, defaultState){
  let currentState = defaultState;
  let currentReducer = reducer;
  const listeners = [];

  function dispatch(action) {
    currentState = reducer(currentState, action)
  }

  function getState() {
    return currentState
  }

  function subscribe(listener) {
    listeners.push(listener)
    return function() {
      const index = listeners.indexOf(listener)
      index > -1 && listeners.splice(index, 1)
    }
  }

  dispatch({
    type: '@@redux/INIT'
  })

  return {
    dispatch,
    getState,
    subscribe
  }
}
