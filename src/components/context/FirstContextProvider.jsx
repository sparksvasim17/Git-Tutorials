import React, { createContext, useState } from 'react'

export const  Home = createContext()
  

const FirstContextProvider = ({childeren}) => {
  const [data,setData] = useState('Hello every one ')
  return (
    <Home.Provider value={data}>
      {childeren}
    </Home.Provider>
    
  )
}

export default FirstContextProvider