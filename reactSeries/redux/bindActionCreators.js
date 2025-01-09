function bindActionCreators(actionCreators, dispatch) {
  const actions = {};
  for (const key in actionCreators) {
    if (Object.prototype.hasOwnProperty.call(actionCreators, key)) {
      const actionCreator = actionCreators[key];
      actions[key] = function(...arge) {
        dispatch(actionCreator(...arge))
      }
    }
  }
  return actions;
}