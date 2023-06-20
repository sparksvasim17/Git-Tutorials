import React, { useReducer, useState } from 'react'
import { Link } from 'react-router-dom'


// const initilState = 0
// const reducer = (state,action) => {
//   switch (action) {
//     case 'INCREMENT':
//       return state + 1;
    
//     case 'DECREMENT':
//       return state -1
//     }
// }


const Navbar = () => {

  // const [count, dispatch] = useReducer(reducer, initilState)
  
  return (
    <div>
      {/* <a href="/"> Home|</a>
      <a href='/about'>about|</a>
      <a href='/contact'>contact|</a> */}
        
      {/* <div>
        <div>{count}</div>
        <button onClick={()=>dispatch('INCREMENT')}>increment</button>
        <button onClick={()=>dispatch('DECREMENT')}>Decrement</button>
      </div> */}

          <Link to='/'> Home| </Link>
          <Link to='/about'>about|</Link>          
          <Link to='/contact'>contact|</Link>
          <Link to='/hooks'>hooks|</Link>
          <Link to='/props'>props|</Link>
          <Link to='/main'>main|</Link>
    </div>
  )
}

export default Navbar