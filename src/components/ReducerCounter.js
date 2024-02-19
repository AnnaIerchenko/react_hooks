import React, { useReducer } from 'react'

const ReducerCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const IncreaseCount = () => {
    dispatch({ type: ACTION.INCREASE})
  }
  const decreaseCount = () => {
    dispatch({ type: ACTION.DECREASE})
  }
  return (
    <div style={{ background: "green"}}>
      <h2>Counter with useReducer: {state.count}</h2>
      <button onClick={IncreaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}
const ACTION = {
  INCREASE: "increase",
  DECREASE: "decrease",
}
const initialState = {count: 0}
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREASE:
      return { ...state, count: state.count + 1}
    case ACTION.DECREASE:
      return {...state, count: state.count - 1}
    default: 
      return state
  }
}
export default ReducerCounter