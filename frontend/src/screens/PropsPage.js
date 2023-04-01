import React from 'react'


function PropsPage(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.description}</h1>
      <h1>{props.price}</h1>
      <p>{props.class}</p>
    </div>
  )
}

export default PropsPage