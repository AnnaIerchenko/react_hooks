import React, { useEffect, useRef, useState } from 'react'

const CounterRef = () => {
  const [name, setName] = useState("")
  const count = useRef(0)

  useEffect(() => {
    count.current = count.current + 1
  })
  return (
    <div style={{background: "purple"}}>
      <hr />
      <h1 >CounterRef</h1>
      <input type='text' onChange={(e) => setName(e.target.value)} style={{padding: "10px"}} placeholder='write here to count letters...'/>
      <h2>Name: {name}</h2>
      <h2>Renders: {count.current} </h2>
    </div>
  )
}

export default CounterRef