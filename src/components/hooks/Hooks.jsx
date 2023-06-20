import React, { useEffect, useMemo, useState } from 'react'

const Hooks = () => {
  
  // const [state, setState] = useState('')
  const[fname,setFname] = useState('Apexa')
  const [lname, setLname] = useState('saxena')
  
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)


  const incrementOne = () => {
    setCounterOne(counterOne+1)
  }

  const incrementTwo = () => {
    setCounterTwo(counterTwo+1)
  }

  const isEven = useMemo(() => {
    let i = 0
    while(i<2000000000)i++
  return counterOne % 2 === 0
},[counterOne])

  

  console.log(data,'data')
    return (
      <>
        <div>
          <button onClick={incrementOne}>IncrementOne - {counterOne}</button>
          <span>{ isEven ? 'even': 'odd'}</span>
        </div>
        <div>
          <button onClick={incrementTwo}>IncrementTwo - {counterTwo}</button>
        </div>
      </>
  )
}

export default Hooks

const data = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }, //0

  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }, //1

  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  }, //2

  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  }, //3

  {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  },  //4
]
