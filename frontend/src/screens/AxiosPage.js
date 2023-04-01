import axios from 'axios';
import { useState } from 'react';

function AxiosPage() {

    // useEffect(()=>{
    //   axios.get('http https://swapi.dev/api/people/1/')
    //   .then(()=>{

    //   })

    // }, [])

    const[data, setData] = useState('')




    const getQuoate = ()=>{
      axios.get('https://api.quotable.io/random')
      .then(res=>{
        setData(res.data.content)
    
      }).catch(()=>{
    
      })
    }

  return (
    <div>

      <h1>{data}</h1>
        <button onClick={getQuoate}> Get a Quoate</button>
    </div>
  )
}

export default AxiosPage