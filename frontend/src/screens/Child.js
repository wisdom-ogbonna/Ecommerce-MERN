import React from 'react'
import Button from 'react-bootstrap/esm/Button'

export default function Child({childToParent}) {
    const data = "This is data from Child Component to the Parent Component."
    return (
        <div>
            <Button primary onClick={() => childToParent(data)}>Click Child</Button>
        </div>
    )
}