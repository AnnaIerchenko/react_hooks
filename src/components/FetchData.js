import React, { useEffect, useState } from 'react'

const FetchData = () => {
  const [responses, setResponses] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setResponses(data))
  }, [])

  return (
    <div style={{ background: "#f0f0f5", padding: "1rem" }}>
      {
        responses.map((res) => {
          return (
            <h4 key={res.id}>
              {res.id}: {res.name}
            </h4>
          )
        })
      }
    </div>
  )
}

export default FetchData