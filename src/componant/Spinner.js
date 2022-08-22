import React from 'react'
import walk from "./Walk.gif"

const Spinner=()=>  {
    return (
      <div className='text-center'>
        <img className ="my-3" src={walk} alt="loading" />
      </div>
    )
  }
  export default Spinner