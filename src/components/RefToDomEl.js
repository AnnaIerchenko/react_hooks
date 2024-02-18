import React, { useRef } from 'react'

const RefToDomEl = () => {
  const inputEl = useRef()
  const handleCLick = () => {
    console.log(inputEl.current)
    inputEl.current.style.width = "300px"
    inputEl.current.focus()
  }

  return (
    <div >
      <input type="text" ref={inputEl}/>
      <button onClick={handleCLick}>Click here to change with of input</button>
    </div>
  )
}

export default RefToDomEl