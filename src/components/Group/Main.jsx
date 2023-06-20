import React, { useState , useCallback } from 'react'
import Child1 from './childs/Child1'
import Title from './childs/Title'
import Count from './childs/Count'
import Button from './childs/Button'

const Main = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age+1)
  },[age]) 

  const incrementSalary = useCallback(() => {
    setSalary(salary+1000)  
  }, [salary])
  
// to Optimize Child Component
// useCallback is hook that will return a memoized version of the 
//   callback function that only changes if one of the dependencies changes

  return (
    <div>
      <Title />
      <Count text='Age' count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text='Salary' count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
      {/* <Child1/> */}
    </div>
  )
}

export default Main