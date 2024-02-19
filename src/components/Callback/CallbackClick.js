import React, { useCallback, useState } from 'react'
import PrintTable from './PrintTable'

const CallbackClick = () => {

  const [number, setNumber] = useState(1)
  const [darkTheme, setDarkTheme] = useState(false)

  const cssStyle = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black"
  }
  //with useCallback
  const calculateTable = useCallback(() => {
    return [number * 1, number * 2, number * 3, number * 4,number * 5]
  }, [number])
  
  //without useCallback
  // const calculateTable = () => {
  //   return [number * 1, number * 2, number * 3, number * 4,number * 5]
  // }
  return (
    <div style={cssStyle}>
      <input 
        type="number" 
        onChange={(e) => setNumber(e.target.valueAsNumber)}
        value={number}
      />
      <PrintTable calculateTable={calculateTable}/>
      <button onClick={() => setDarkTheme(!darkTheme)} >toggle</button>
    </div>
  )
}

export default CallbackClick