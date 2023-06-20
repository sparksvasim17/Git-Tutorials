import React, { useContext } from 'react'
import { Home}  from '../../context/FirstContextProvider'
import Child4 from './Child4'

const Child3 = () => {
    const firstContext = useContext(Home)
    console.log(firstContext)
  return (
      <div>Child3
          <Child4/>
    </div>
  )
}

export default Child3