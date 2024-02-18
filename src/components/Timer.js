import React, { useEffect, useState } from 'react'

const Timer = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('Run useEffect', count)
    //cleanup function
    return () => {
      console.log('CLean up', count)
    }
  }, [count])

  return (
    <div>
      <h3>Count timer {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default Timer