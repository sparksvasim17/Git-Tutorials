import React, { useContext } from 'react'
import Child3 from './Child3'
import Child2 from './Child2'
// import { Home } from '../../context/FirstContextProvider'

const Child1 = (props) => {
  // const home = useContext(Home)
  // console.log(home,'home ')
  return (
      <div>
      {/* <h2>{props.hello}</h2>
        {props.hello?.map((el, i) => {
        return (
          <div key={i}>
            <h1>{el.name}</h1>
          </div>
        )
      })} */}
      <Child2/>

    </div>
  )
}

export default Child1