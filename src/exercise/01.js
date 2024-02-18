// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// Arrow function - you can see the parameters clear
const countReducer = (state, action) => {
  const {type, step} = action
  switch (type) {
    case 'INCREMENT': {
      return {
        ...state,
        count: state.count + step,
      }
    }
    case 'DECREMENT': {
      return {
        ...state,
        count: state.count - step,
      }
    }
    default:
      throw new Error(`Unsupported action type: ${type}`)
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  const decrement = () => dispatch({type: 'DECREMENT', step})
  return (
    <>
      <button onClick={increment}>increment</button>
      {count}
      <button onClick={decrement}>decrement</button>
    </>
  )
}

function App() {
  return <Counter />
}

export default App
