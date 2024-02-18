import React, { useState } from 'react'

const Counter = () => {
  // const [counter, setCounter] = useState(0)
  // const [name, setName] = useState("")
  // function increaseCounter() {
  //   setCounter(counter + 1)
  // }
  
  // return (
  //       <div>
  //         <input type="text" onChange={(e) => setName(e.target.value)}/ >
  //         <h1>{name} has clicked Counter: {counter} times</h1>
  //         <button onClick={increaseCounter}>Increase</button>
  //       </div>
  //     )
  //   }

  //for obj val in state
  //useState is function to add State to functional component
  const [details, setDetails] = useState({counter: 0, name: " "})
  function increaseCounter() {
    setDetails((prev) => ({
      ...prev,
      counter: prev.counter + 1,
    }))
  }
  function handleNameCHange(e){
    setDetails((prev) => ({
      ...prev, 
      name: e.target.value
    }))
  }
return (
    <div>
      <input type='text' onChange={handleNameCHange} />
      <h1>
        {details.name} has clicked {details.counter} times
      </h1>
      <button onClick={increaseCounter}>Increase</button>
    </div>
  )
}
export default Counter
