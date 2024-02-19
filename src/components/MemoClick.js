import React, { useMemo, useState } from 'react'

const MemoClick = () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  // const calculation = expansiveFunction(number)
  const memoCalculation = useMemo(() => {
    return expensiveFunction(number)
  }, [number])

  const cssStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black"
  }
  return (
    <div style={cssStyle}>
      <input 
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.valueAsNumber)}  
      />
      {/* <h2>Calculation with useMemo: {calculation}</h2> */}
      <h2>Calculation with useMemo: {memoCalculation}</h2>
      <button onClick={() => setDark(!dark)}>Toggle</button>
    </div>
  )
}

function expensiveFunction(num){
  console.log("Loop started")
  for(let i = 0; i < 1000000000; i++){
    return num
  }
}
export default MemoClick