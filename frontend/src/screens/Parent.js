import React from 'react'
import Child from './Child';
import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';



export default function Parent() {
  const [data, setData] = useState('');


  const childToParent = (childdata) => {
    setData(childdata);
  }


  return (
    <div className="App">
      <div>     {data}</div>
      <Child childToParent={childToParent} />
    </div>
  )
}