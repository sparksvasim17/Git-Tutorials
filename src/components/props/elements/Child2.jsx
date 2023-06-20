import React, { useEffect, useState } from 'react'
import Child3 from './Child3';

const Child2 = () => {
  const [mydata, setMyData] = useState();
  const url = 'https://jsonplaceholder.typicode.com/todos'
  
  const completed = false;
  const id = 1;
  const title = hii;
  const userId = 5;

  
  useEffect(() => {  
    if (completed && id && title && userId) {
      (async () => {
        const response = await fetch(url, {
          method: 'POST',
          body:JSON.stringify({completed,id,title,userId}),
          headers: {
            'CONTENT-TYPE': 'application/json'
          }
        });
        const result = await response.json();            
        setMyData(result)
      })()     
    }
        
  }, [])
  
  // useEffect(() => {  
  //   (async () => {
  //     const response = await fetch(url, {

  //       headers: {
  //         'CONTENT-TYPE': 'application/json'
  //       }
  //     });
  //     const result = await response.json();            
  //     setMyData(result)
  //     // console.log(result)
  //   })()       
  // }, [])

  useEffect(() => {
    console.log(mydata,'mydata')
  },[mydata])

  return (
    <>
      <Child3/>
      {/* {mydata ?
        mydata.map((element, index) => {
        return (
          <div key={index}>

            <h5>user id {element.userId}</h5>
            <h5>title : {element.title} </h5>
            <h4>boolean: {element.id} </h4> <br /> <br />
            
          </div>
        )
      }) */}
        
        {/* : null} */}
    
      


    </>
  )
}

export default Child2