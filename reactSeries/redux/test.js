function studentReducer(state = [], action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload]
    case 'DELETE':
      return state.filter(item => item.id !== action.payload)
    default:
      return state
  }
}
function calculateReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREASE':
      return state + action.payload
    case 'DECREASE':
      return state - action.payload
    default:
      return state
  }
}
const reducer = combineReducers({
  student: studentReducer,
  calculate: calculateReducer
})
const store = createStore(reducer, [])

// console.log('store', store)
// console.log(store.getState())
// store.dispatch({type: 'ADD', payload: {id: 1, name: 'xx'}})
// store.dispatch({type: 'ADD', payload: {id: 2, name: 'yy'}})
// console.log(store.getState())
// store.dispatch({type: 'DELETE', payload: 1})
// console.log(store.getState())

function createAddAction(payload) {
  return {
    type: 'ADD',
    payload
  }
}

function createDeleteAction(payload) {
  return {
    type: 'DELETE',
    payload
  }
}
const actions = bindActionCreators({
  add: createAddAction,
  delete: createDeleteAction
}, store.dispatch)
console.log(store.getState())
actions.add({id: 1, name: 'xx'})
actions.add({id: 2, name: 'xx'})
console.log(store.getState())
actions.delete(1)
console.log(store.getState())
